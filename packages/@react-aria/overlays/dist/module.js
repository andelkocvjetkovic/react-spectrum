import $8xsGc$react, {useState as $8xsGc$useState, useCallback as $8xsGc$useCallback, useRef as $8xsGc$useRef, useEffect as $8xsGc$useEffect, useContext as $8xsGc$useContext, useMemo as $8xsGc$useMemo} from "react";
import {useLayoutEffect as $8xsGc$useLayoutEffect, useId as $8xsGc$useId, isIOS as $8xsGc$isIOS, chain as $8xsGc$chain, getScrollParent as $8xsGc$getScrollParent} from "@react-aria/utils";
import {useLocale as $8xsGc$useLocale, useMessageFormatter as $8xsGc$useMessageFormatter} from "@react-aria/i18n";
import $8xsGc$domhelpersstyle from "dom-helpers/style";
import $8xsGc$domhelpersqueryoffset from "dom-helpers/query/offset";
import $8xsGc$domhelpersqueryposition from "dom-helpers/query/position";
import $8xsGc$domhelpersqueryscrollLeft from "dom-helpers/query/scrollLeft";
import $8xsGc$domhelpersqueryscrollTop from "dom-helpers/query/scrollTop";
import $8xsGc$domhelpersownerDocument from "dom-helpers/ownerDocument";
import {useInteractOutside as $8xsGc$useInteractOutside, useFocusWithin as $8xsGc$useFocusWithin} from "@react-aria/interactions";
import $8xsGc$reactdom from "react-dom";
import {VisuallyHidden as $8xsGc$VisuallyHidden} from "@react-aria/visually-hidden";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $0bf83a573fcf9e88$exports = {};

$parcel$export($0bf83a573fcf9e88$exports, "useOverlayPosition", () => $0bf83a573fcf9e88$export$d39e1813b3bdd0e1);






const $0f3415199637b542$var$AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const $0f3415199637b542$var$FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const $0f3415199637b542$var$CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const $0f3415199637b542$var$AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const $0f3415199637b542$var$PARSED_PLACEMENT_CACHE = {
};
// @ts-ignore
let $0f3415199637b542$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $0f3415199637b542$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, top = 0, left = 0;
    let scroll = {
    };
    if (containerNode.tagName === 'BODY') {
        width = $0f3415199637b542$var$visualViewport?.width ?? document.documentElement.clientWidth;
        height = $0f3415199637b542$var$visualViewport?.height ?? document.documentElement.clientHeight;
        scroll.top = $8xsGc$domhelpersqueryscrollTop($8xsGc$domhelpersownerDocument(containerNode).documentElement) || $8xsGc$domhelpersqueryscrollTop(containerNode);
        scroll.left = $8xsGc$domhelpersqueryscrollLeft($8xsGc$domhelpersownerDocument(containerNode).documentElement) || $8xsGc$domhelpersqueryscrollLeft(containerNode);
    } else {
        ({ width: width , height: height , top: top , left: left  } = $8xsGc$domhelpersqueryoffset(containerNode));
        scroll.top = $8xsGc$domhelpersqueryscrollTop(containerNode);
        scroll.left = $8xsGc$domhelpersqueryscrollLeft(containerNode);
    }
    return {
        width: width,
        height: height,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $0f3415199637b542$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
function $0f3415199637b542$var$getDelta(axis, offset, size, containerDimensions, padding) {
    let containerScroll = containerDimensions.scroll[axis];
    let containerHeight = containerDimensions[$0f3415199637b542$var$AXIS_SIZE[axis]];
    let startEdgeOffset = offset - padding - containerScroll;
    let endEdgeOffset = offset + padding - containerScroll + size;
    if (startEdgeOffset < 0) return -startEdgeOffset;
    else if (endEdgeOffset > containerHeight) return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
    else return 0;
}
function $0f3415199637b542$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $0f3415199637b542$var$parsePlacement(input) {
    if ($0f3415199637b542$var$PARSED_PLACEMENT_CACHE[input]) return $0f3415199637b542$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = $0f3415199637b542$var$AXIS[placement] || 'right';
    let crossAxis = $0f3415199637b542$var$CROSS_AXIS[axis];
    if (!$0f3415199637b542$var$AXIS[crossPlacement]) crossPlacement = 'center';
    let size = $0f3415199637b542$var$AXIS_SIZE[axis];
    let crossSize = $0f3415199637b542$var$AXIS_SIZE[crossAxis];
    $0f3415199637b542$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $0f3415199637b542$var$PARSED_PLACEMENT_CACHE[input];
}
function $0f3415199637b542$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned) {
    let { placement: placement , crossPlacement: crossPlacement , axis: axis , crossAxis: crossAxis , size: size , crossSize: crossSize  } = placementInfo;
    let position = {
    };
    // button position
    position[crossAxis] = childOffset[crossAxis];
    if (crossPlacement === 'center') //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
     /* else {
    the overlay top should match the button top
  } */ 
    // add the crossOffset from props
    position[crossAxis] += crossOffset;
    // this is button center position - the overlay size + half of the button to align bottom of overlay with button center
    let minViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2 - overlaySize[crossSize];
    // this is button position of center, aligns top of overlay with button center
    let maxViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2;
    // clamp it into the range of the min/max positions
    position[crossAxis] = Math.min(Math.max(minViablePosition, position[crossAxis]), maxViablePosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[size];
        position[$0f3415199637b542$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $0f3415199637b542$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding) {
    return position.top != null ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top - (containerOffsetWithBoundary.top + position.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    ) : Math.max(0, childOffset.top + containerOffsetWithBoundary.top - (boundaryDimensions.top + boundaryDimensions.scroll.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    );
}
function $0f3415199637b542$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement , axis: axis , size: size  } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$0f3415199637b542$var$FLIPPED_DIRECTION[axis]] - padding);
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$0f3415199637b542$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $0f3415199637b542$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight) {
    let placementInfo = $0f3415199637b542$var$parsePlacement(placementInput);
    let { size: size , crossAxis: crossAxis , crossSize: crossSize , placement: placement , crossPlacement: crossPlacement  } = placementInfo;
    let position = $0f3415199637b542$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    let normalizedOffset = offset;
    let space = $0f3415199637b542$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $0f3415199637b542$var$parsePlacement(`${$0f3415199637b542$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $0f3415199637b542$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
        let flippedSpace = $0f3415199637b542$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    let delta = $0f3415199637b542$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let maxHeight = $0f3415199637b542$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $0f3415199637b542$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    delta = $0f3415199637b542$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let arrowPosition = {
    };
    arrowPosition[crossAxis] = childOffset[crossAxis] - position[crossAxis] + childOffset[crossSize] / 2;
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $0f3415199637b542$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement , targetNode: targetNode , overlayNode: overlayNode , scrollNode: scrollNode , padding: padding , shouldFlip: shouldFlip , boundaryElement: boundaryElement , offset: offset , crossOffset: crossOffset , maxHeight: maxHeight  } = opts;
    let container = overlayNode.offsetParent || document.body;
    let isBodyContainer = container.tagName === 'BODY';
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isBodyContainer ? $8xsGc$domhelpersqueryoffset(targetNode) : $8xsGc$domhelpersqueryposition(targetNode, container);
    if (!isBodyContainer) {
        childOffset.top += parseInt($8xsGc$domhelpersstyle(targetNode, 'marginTop'), 10) || 0;
        childOffset.left += parseInt($8xsGc$domhelpersstyle(targetNode, 'marginLeft'), 10) || 0;
    }
    let overlaySize = $8xsGc$domhelpersqueryoffset(overlayNode);
    let margins = $0f3415199637b542$var$getMargins(overlayNode);
    overlaySize.width += margins.left + margins.right;
    overlaySize.height += margins.top + margins.bottom;
    let scrollSize = $0f3415199637b542$var$getScroll(scrollNode);
    let boundaryDimensions = $0f3415199637b542$var$getContainerDimensions(boundaryElement);
    let containerOffsetWithBoundary = boundaryElement.tagName === 'BODY' ? $8xsGc$domhelpersqueryoffset(container) : $8xsGc$domhelpersqueryposition(container, boundaryElement);
    return $0f3415199637b542$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight);
}




const $782a6d485556a707$export$f6211563215e3b37 = new WeakMap();
function $782a6d485556a707$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef , isOpen: isOpen , onClose: onClose  } = opts;
    $8xsGc$useEffect(()=>{
        if (!isOpen) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            let onCloseHandler = onClose || $782a6d485556a707$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener('scroll', onScroll, true);
        return ()=>{
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}




// @ts-ignore
let $0bf83a573fcf9e88$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $0bf83a573fcf9e88$export$d39e1813b3bdd0e1(props) {
    let { direction: direction  } = $8xsGc$useLocale();
    let { targetRef: targetRef , overlayRef: overlayRef , scrollRef: scrollRef = overlayRef , placement: placement = 'bottom' , containerPadding: containerPadding = 12 , shouldFlip: shouldFlip = true , boundaryElement: boundaryElement = typeof document !== 'undefined' ? document.body : null , offset: offset = 0 , crossOffset: crossOffset = 0 , shouldUpdatePosition: shouldUpdatePosition = true , isOpen: isOpen = true , onClose: onClose , maxHeight: maxHeight  } = props;
    let [position, setPosition] = $8xsGc$useState({
        position: {
        },
        arrowOffsetLeft: undefined,
        arrowOffsetTop: undefined,
        maxHeight: undefined,
        placement: undefined
    });
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight
    ];
    let updatePosition = $8xsGc$useCallback(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
        setPosition($0f3415199637b542$export$b3ceb0cbf1056d98({
            placement: $0bf83a573fcf9e88$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight
        }));
    }, deps);
    // Update position when anything changes
    $8xsGc$useLayoutEffect(updatePosition, deps);
    // Update position on window resize
    $0bf83a573fcf9e88$var$useResize(updatePosition);
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = $8xsGc$useRef(false);
    $8xsGc$useLayoutEffect(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        $0bf83a573fcf9e88$var$visualViewport?.addEventListener('resize', onResize);
        return ()=>{
            $0bf83a573fcf9e88$var$visualViewport?.removeEventListener('resize', onResize);
        };
    }, [
        updatePosition
    ]);
    let close = $8xsGc$useCallback(()=>{
        if (!isResizing.current) onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    $782a6d485556a707$export$18fc8428861184da({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose ? close : undefined
    });
    return {
        overlayProps: {
            style: {
                position: 'absolute',
                zIndex: 100000,
                ...position.position,
                maxHeight: position.maxHeight
            }
        },
        placement: position.placement,
        arrowProps: {
            style: {
                left: position.arrowOffsetLeft,
                top: position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $0bf83a573fcf9e88$var$useResize(onResize) {
    $8xsGc$useLayoutEffect(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function $0bf83a573fcf9e88$var$translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
}


var $e3891ddf03b301e1$exports = {};

$parcel$export($e3891ddf03b301e1$exports, "useOverlay", () => $e3891ddf03b301e1$export$ea8f71083e90600f);


const $e3891ddf03b301e1$var$visibleOverlays = [];
function $e3891ddf03b301e1$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , isOpen: isOpen , isDismissable: isDismissable = false , isKeyboardDismissDisabled: isKeyboardDismissDisabled = false , shouldCloseOnInteractOutside: shouldCloseOnInteractOutside  } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    $8xsGc$useEffect(()=>{
        if (isOpen) $e3891ddf03b301e1$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $e3891ddf03b301e1$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $e3891ddf03b301e1$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack.
    let onHide = ()=>{
        if ($e3891ddf03b301e1$var$visibleOverlays[$e3891ddf03b301e1$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($e3891ddf03b301e1$var$visibleOverlays[$e3891ddf03b301e1$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($e3891ddf03b301e1$var$visibleOverlays[$e3891ddf03b301e1$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === 'Escape' && !isKeyboardDismissDisabled) {
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    $8xsGc$useInteractOutside({
        ref: ref,
        onInteractOutside: isDismissable ? onInteractOutside : null,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps  } = $8xsGc$useFocusWithin({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}


var $4b8d1e770124dbaa$exports = {};

$parcel$export($4b8d1e770124dbaa$exports, "useOverlayTrigger", () => $4b8d1e770124dbaa$export$f9d5c8beee7d008d);



function $4b8d1e770124dbaa$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type  } = props;
    let { isOpen: isOpen  } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    $8xsGc$useEffect(()=>{
        if (ref && ref.current) $782a6d485556a707$export$f6211563215e3b37.set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = $8xsGc$useId();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : null
        },
        overlayProps: {
            id: overlayId
        }
    };
}


var $0abbaef0d0cd697e$exports = {};

$parcel$export($0abbaef0d0cd697e$exports, "usePreventScroll", () => $0abbaef0d0cd697e$export$ee0f7cc6afcd1c18);

// @ts-ignore
const $0abbaef0d0cd697e$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $0abbaef0d0cd697e$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $0abbaef0d0cd697e$export$ee0f7cc6afcd1c18(options = {
}) {
    let { isDisabled: isDisabled  } = options;
    $8xsGc$useLayoutEffect(()=>{
        if (isDisabled) return;
        if ($8xsGc$isIOS()) return $0abbaef0d0cd697e$var$preventScrollMobileSafari();
        else return $0abbaef0d0cd697e$var$preventScrollStandard();
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $0abbaef0d0cd697e$var$preventScrollStandard() {
    return $8xsGc$chain($0abbaef0d0cd697e$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $0abbaef0d0cd697e$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $0abbaef0d0cd697e$var$preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = $8xsGc$getScrollParent(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) e.preventDefault();
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        if (target instanceof HTMLInputElement && !$0abbaef0d0cd697e$var$nonTextInputTypes.has(target.type)) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = 'translateY(-2000px)';
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = '';
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if (target instanceof HTMLInputElement && !$0abbaef0d0cd697e$var$nonTextInputTypes.has(target.type)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($0abbaef0d0cd697e$var$visualViewport) {
                    if ($0abbaef0d0cd697e$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $0abbaef0d0cd697e$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $0abbaef0d0cd697e$var$visualViewport.addEventListener('resize', ()=>$0abbaef0d0cd697e$var$scrollIntoView(target)
                    , {
                        once: true
                    });
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = $8xsGc$chain($0abbaef0d0cd697e$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $0abbaef0d0cd697e$var$setStyle(document.documentElement, 'overflow', 'hidden'), $0abbaef0d0cd697e$var$setStyle(document.body, 'marginTop', `-${scrollY}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = $8xsGc$chain($0abbaef0d0cd697e$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $0abbaef0d0cd697e$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $0abbaef0d0cd697e$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $0abbaef0d0cd697e$var$addEvent(document, 'focus', onFocus, true), $0abbaef0d0cd697e$var$addEvent(window, 'scroll', onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $0abbaef0d0cd697e$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $0abbaef0d0cd697e$var$addEvent(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    return ()=>{
        target.removeEventListener(event, handler, options);
    };
}
function $0abbaef0d0cd697e$var$scrollIntoView(target) {
    // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
    let scrollable = $8xsGc$getScrollParent(target);
    if (scrollable !== document.documentElement && scrollable !== document.body) {
        let scrollableTop = scrollable.getBoundingClientRect().top;
        let targetTop = target.getBoundingClientRect().top;
        if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
    }
}


var $a766f7078a3c15f7$exports = {};

$parcel$export($a766f7078a3c15f7$exports, "ModalProvider", () => $a766f7078a3c15f7$export$178405afcd8c5eb);
$parcel$export($a766f7078a3c15f7$exports, "useModalProvider", () => $a766f7078a3c15f7$export$d9aaed4c3ece1bc0);
$parcel$export($a766f7078a3c15f7$exports, "OverlayProvider", () => $a766f7078a3c15f7$export$bf688221f59024e5);
$parcel$export($a766f7078a3c15f7$exports, "OverlayContainer", () => $a766f7078a3c15f7$export$b47c3594eab58386);
$parcel$export($a766f7078a3c15f7$exports, "useModal", () => $a766f7078a3c15f7$export$33ffd74ebf07f060);


const $a766f7078a3c15f7$var$Context = /*#__PURE__*/ $8xsGc$react.createContext(null);
function $a766f7078a3c15f7$export$178405afcd8c5eb(props) {
    let { children: children  } = props;
    let parent = $8xsGc$useContext($a766f7078a3c15f7$var$Context);
    let [modalCount, setModalCount] = $8xsGc$useState(0);
    let context = $8xsGc$useMemo(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1
                );
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1
                );
                if (parent) parent.removeModal();
            }
        })
    , [
        parent,
        modalCount
    ]);
    return(/*#__PURE__*/ $8xsGc$react.createElement($a766f7078a3c15f7$var$Context.Provider, {
        value: context
    }, children));
}
function $a766f7078a3c15f7$export$d9aaed4c3ece1bc0() {
    let context = $8xsGc$useContext($a766f7078a3c15f7$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : null
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $a766f7078a3c15f7$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps  } = $a766f7078a3c15f7$export$d9aaed4c3ece1bc0();
    return(/*#__PURE__*/ $8xsGc$react.createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    }));
}
function $a766f7078a3c15f7$export$bf688221f59024e5(props) {
    return(/*#__PURE__*/ $8xsGc$react.createElement($a766f7078a3c15f7$export$178405afcd8c5eb, null, /*#__PURE__*/ $8xsGc$react.createElement($a766f7078a3c15f7$var$OverlayContainerDOM, props)));
}
function $a766f7078a3c15f7$export$b47c3594eab58386(props) {
    let { portalContainer: portalContainer = document.body , ...rest } = props;
    $8xsGc$react.useEffect(()=>{
        if (portalContainer.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    let contents = /*#__PURE__*/ $8xsGc$react.createElement($a766f7078a3c15f7$export$bf688221f59024e5, rest);
    return(/*#__PURE__*/ $8xsGc$reactdom.createPortal(contents, portalContainer));
}
function $a766f7078a3c15f7$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = $8xsGc$useContext($a766f7078a3c15f7$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    $8xsGc$useEffect(()=>{
        if (options?.isDisabled || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options?.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !options?.isDisabled
        }
    };
}


var $77803e633707933e$exports = {};

$parcel$export($77803e633707933e$exports, "DismissButton", () => $77803e633707933e$export$2317d149ed6f78c4);
var $c0d5314f947f30dc$exports = {};
var $ee704b84cb364e99$exports = {};
$ee704b84cb364e99$exports = JSON.parse("{\"dismiss\":\"تجاهل\"}");


var $b37572e4010d1b5d$exports = {};
$b37572e4010d1b5d$exports = JSON.parse("{\"dismiss\":\"Отхвърляне\"}");


var $a145226a9f424311$exports = {};
$a145226a9f424311$exports = JSON.parse("{\"dismiss\":\"Odstranit\"}");


var $4aaeb93d4aee1577$exports = {};
$4aaeb93d4aee1577$exports = JSON.parse("{\"dismiss\":\"Luk\"}");


var $869121d318234e6b$exports = {};
$869121d318234e6b$exports = JSON.parse("{\"dismiss\":\"Schließen\"}");


var $64158edb89542319$exports = {};
$64158edb89542319$exports = JSON.parse("{\"dismiss\":\"Απόρριψη\"}");


var $cb20a7aab55ceab6$exports = {};
$cb20a7aab55ceab6$exports = JSON.parse("{\"dismiss\":\"Dismiss\"}");


var $5a4e471d424fc047$exports = {};
$5a4e471d424fc047$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $40fbbda9985d92fe$exports = {};
$40fbbda9985d92fe$exports = JSON.parse("{\"dismiss\":\"Lõpeta\"}");


var $f5817a488032c56d$exports = {};
$f5817a488032c56d$exports = JSON.parse("{\"dismiss\":\"Hylkää\"}");


var $84a18fe540838744$exports = {};
$84a18fe540838744$exports = JSON.parse("{\"dismiss\":\"Rejeter\"}");


var $4bb8fea5dcc2a478$exports = {};
$4bb8fea5dcc2a478$exports = JSON.parse("{\"dismiss\":\"התעלם\"}");


var $9358614dfd2d5c2f$exports = {};
$9358614dfd2d5c2f$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $20c30e6963341f86$exports = {};
$20c30e6963341f86$exports = JSON.parse("{\"dismiss\":\"Elutasítás\"}");


var $f34e09aa7941083d$exports = {};
$f34e09aa7941083d$exports = JSON.parse("{\"dismiss\":\"Ignora\"}");


var $6c19a9467eb38e25$exports = {};
$6c19a9467eb38e25$exports = JSON.parse("{\"dismiss\":\"閉じる\"}");


var $438d5843faacda90$exports = {};
$438d5843faacda90$exports = JSON.parse("{\"dismiss\":\"무시\"}");


var $09ef4342d58defdf$exports = {};
$09ef4342d58defdf$exports = JSON.parse("{\"dismiss\":\"Atmesti\"}");


var $b979eff7b2d23ff7$exports = {};
$b979eff7b2d23ff7$exports = JSON.parse("{\"dismiss\":\"Nerādīt\"}");


var $63351b3e92a84ccb$exports = {};
$63351b3e92a84ccb$exports = JSON.parse("{\"dismiss\":\"Lukk\"}");


var $3f2eb3648be2a188$exports = {};
$3f2eb3648be2a188$exports = JSON.parse("{\"dismiss\":\"Negeren\"}");


var $7be3f6c9c415692e$exports = {};
$7be3f6c9c415692e$exports = JSON.parse("{\"dismiss\":\"Zignoruj\"}");


var $21235b1d34df5d93$exports = {};
$21235b1d34df5d93$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $8aeef69dc0671f55$exports = {};
$8aeef69dc0671f55$exports = JSON.parse("{\"dismiss\":\"Dispensar\"}");


var $f1f60ce551dbca72$exports = {};
$f1f60ce551dbca72$exports = JSON.parse("{\"dismiss\":\"Revocare\"}");


var $12322cbd71448f79$exports = {};
$12322cbd71448f79$exports = JSON.parse("{\"dismiss\":\"Пропустить\"}");


var $74079f46b39b3bcd$exports = {};
$74079f46b39b3bcd$exports = JSON.parse("{\"dismiss\":\"Zrušiť\"}");


var $4d809131339e4455$exports = {};
$4d809131339e4455$exports = JSON.parse("{\"dismiss\":\"Opusti\"}");


var $41e58092e05dc98b$exports = {};
$41e58092e05dc98b$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $23564195b719ef39$exports = {};
$23564195b719ef39$exports = JSON.parse("{\"dismiss\":\"Avvisa\"}");


var $718cb91069e019e5$exports = {};
$718cb91069e019e5$exports = JSON.parse("{\"dismiss\":\"Kapat\"}");


var $7b14f1fe000ca667$exports = {};
$7b14f1fe000ca667$exports = JSON.parse("{\"dismiss\":\"Скасувати\"}");


var $d3e5fe1d9a339d02$exports = {};
$d3e5fe1d9a339d02$exports = JSON.parse("{\"dismiss\":\"取消\"}");


var $cc79335e90367de2$exports = {};
$cc79335e90367de2$exports = JSON.parse("{\"dismiss\":\"關閉\"}");


$c0d5314f947f30dc$exports = {
    "ar-AE": $ee704b84cb364e99$exports,
    "bg-BG": $b37572e4010d1b5d$exports,
    "cs-CZ": $a145226a9f424311$exports,
    "da-DK": $4aaeb93d4aee1577$exports,
    "de-DE": $869121d318234e6b$exports,
    "el-GR": $64158edb89542319$exports,
    "en-US": $cb20a7aab55ceab6$exports,
    "es-ES": $5a4e471d424fc047$exports,
    "et-EE": $40fbbda9985d92fe$exports,
    "fi-FI": $f5817a488032c56d$exports,
    "fr-FR": $84a18fe540838744$exports,
    "he-IL": $4bb8fea5dcc2a478$exports,
    "hr-HR": $9358614dfd2d5c2f$exports,
    "hu-HU": $20c30e6963341f86$exports,
    "it-IT": $f34e09aa7941083d$exports,
    "ja-JP": $6c19a9467eb38e25$exports,
    "ko-KR": $438d5843faacda90$exports,
    "lt-LT": $09ef4342d58defdf$exports,
    "lv-LV": $b979eff7b2d23ff7$exports,
    "nb-NO": $63351b3e92a84ccb$exports,
    "nl-NL": $3f2eb3648be2a188$exports,
    "pl-PL": $7be3f6c9c415692e$exports,
    "pt-BR": $21235b1d34df5d93$exports,
    "pt-PT": $8aeef69dc0671f55$exports,
    "ro-RO": $f1f60ce551dbca72$exports,
    "ru-RU": $12322cbd71448f79$exports,
    "sk-SK": $74079f46b39b3bcd$exports,
    "sl-SI": $4d809131339e4455$exports,
    "sr-SP": $41e58092e05dc98b$exports,
    "sv-SE": $23564195b719ef39$exports,
    "tr-TR": $718cb91069e019e5$exports,
    "uk-UA": $7b14f1fe000ca667$exports,
    "zh-CN": $d3e5fe1d9a339d02$exports,
    "zh-TW": $cc79335e90367de2$exports
};





function $77803e633707933e$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss  } = props;
    let formatMessage = $8xsGc$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($c0d5314f947f30dc$exports)));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return(/*#__PURE__*/ $8xsGc$react.createElement($8xsGc$VisuallyHidden, null, /*#__PURE__*/ $8xsGc$react.createElement("button", {
        tabIndex: -1,
        "aria-label": formatMessage('dismiss'),
        onClick: onClick
    })));
}


var $99b430d2fcfecbab$exports = {};

$parcel$export($99b430d2fcfecbab$exports, "ariaHideOutside", () => $99b430d2fcfecbab$export$1c3ebcada18427bf);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $99b430d2fcfecbab$var$refCountMap = new WeakMap();
function $99b430d2fcfecbab$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            // If this node is a live announcer, add it to the set of nodes to keep visible.
            if (node instanceof HTMLElement && node.dataset.liveAnnouncer === 'true') visibleNodes.add(node);
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive.
            if (visibleNodes.has(node) || hiddenNodes.has(node.parentElement)) return NodeFilter.FILTER_REJECT;
            // VoiceOver on iOS has issues hiding elements with role="row". Hide the cells inside instead.
            // https://bugs.webkit.org/show_bug.cgi?id=222623
            if (node instanceof HTMLElement && node.getAttribute('role') === 'row') return NodeFilter.FILTER_SKIP;
            // Skip this node but continue to children if one of the targets is inside the node.
            if (targets.some((target)=>node.contains(target)
            )) return NodeFilter.FILTER_SKIP;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    let hide = (node)=>{
        let refCount = $99b430d2fcfecbab$var$refCountMap.get(node) ?? 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute('aria-hidden') === 'true' && refCount === 0) return;
        if (refCount === 0) node.setAttribute('aria-hidden', 'true');
        hiddenNodes.add(node);
        $99b430d2fcfecbab$var$refCountMap.set(node, refCount + 1);
    };
    let node1 = walker.nextNode();
    while(node1 != null){
        hide(node1);
        node1 = walker.nextNode();
    }
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList' || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target)
            )) for (let node2 of change.addedNodes){
                if (node2 instanceof HTMLElement && node2.dataset.liveAnnouncer === 'true') visibleNodes.add(node2);
                else if (node2 instanceof Element) hide(node2);
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $99b430d2fcfecbab$var$refCountMap.get(node);
            if (count === 1) {
                node.removeAttribute('aria-hidden');
                $99b430d2fcfecbab$var$refCountMap.delete(node);
            } else $99b430d2fcfecbab$var$refCountMap.set(node, count - 1);
        }
    };
}




export {$0bf83a573fcf9e88$export$d39e1813b3bdd0e1 as useOverlayPosition, $e3891ddf03b301e1$export$ea8f71083e90600f as useOverlay, $4b8d1e770124dbaa$export$f9d5c8beee7d008d as useOverlayTrigger, $0abbaef0d0cd697e$export$ee0f7cc6afcd1c18 as usePreventScroll, $a766f7078a3c15f7$export$178405afcd8c5eb as ModalProvider, $a766f7078a3c15f7$export$d9aaed4c3ece1bc0 as useModalProvider, $a766f7078a3c15f7$export$bf688221f59024e5 as OverlayProvider, $a766f7078a3c15f7$export$b47c3594eab58386 as OverlayContainer, $a766f7078a3c15f7$export$33ffd74ebf07f060 as useModal, $77803e633707933e$export$2317d149ed6f78c4 as DismissButton, $99b430d2fcfecbab$export$1c3ebcada18427bf as ariaHideOutside};
//# sourceMappingURL=module.js.map
