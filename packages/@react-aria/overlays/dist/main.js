var $eEcuo$react = require("react");
var $eEcuo$reactariautils = require("@react-aria/utils");
var $eEcuo$reactariai18n = require("@react-aria/i18n");
var $eEcuo$domhelpersstyle = require("dom-helpers/style");
var $eEcuo$domhelpersqueryoffset = require("dom-helpers/query/offset");
var $eEcuo$domhelpersqueryposition = require("dom-helpers/query/position");
var $eEcuo$domhelpersqueryscrollLeft = require("dom-helpers/query/scrollLeft");
var $eEcuo$domhelpersqueryscrollTop = require("dom-helpers/query/scrollTop");
var $eEcuo$domhelpersownerDocument = require("dom-helpers/ownerDocument");
var $eEcuo$reactariainteractions = require("@react-aria/interactions");
var $eEcuo$reactdom = require("react-dom");
var $eEcuo$reactariavisuallyhidden = require("@react-aria/visually-hidden");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $4840b1839efdbc34$exports = {};

$parcel$export($4840b1839efdbc34$exports, "useOverlayPosition", () => $4840b1839efdbc34$export$d39e1813b3bdd0e1);






const $4e812b1771a101f8$var$AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const $4e812b1771a101f8$var$FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const $4e812b1771a101f8$var$CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const $4e812b1771a101f8$var$AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const $4e812b1771a101f8$var$PARSED_PLACEMENT_CACHE = {
};
// @ts-ignore
let $4e812b1771a101f8$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $4e812b1771a101f8$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, top = 0, left = 0;
    let scroll = {
    };
    if (containerNode.tagName === 'BODY') {
        width = $4e812b1771a101f8$var$visualViewport?.width ?? document.documentElement.clientWidth;
        height = $4e812b1771a101f8$var$visualViewport?.height ?? document.documentElement.clientHeight;
        scroll.top = ($parcel$interopDefault($eEcuo$domhelpersqueryscrollTop))(($parcel$interopDefault($eEcuo$domhelpersownerDocument))(containerNode).documentElement) || ($parcel$interopDefault($eEcuo$domhelpersqueryscrollTop))(containerNode);
        scroll.left = ($parcel$interopDefault($eEcuo$domhelpersqueryscrollLeft))(($parcel$interopDefault($eEcuo$domhelpersownerDocument))(containerNode).documentElement) || ($parcel$interopDefault($eEcuo$domhelpersqueryscrollLeft))(containerNode);
    } else {
        ({ width: width , height: height , top: top , left: left  } = ($parcel$interopDefault($eEcuo$domhelpersqueryoffset))(containerNode));
        scroll.top = ($parcel$interopDefault($eEcuo$domhelpersqueryscrollTop))(containerNode);
        scroll.left = ($parcel$interopDefault($eEcuo$domhelpersqueryscrollLeft))(containerNode);
    }
    return {
        width: width,
        height: height,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $4e812b1771a101f8$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
function $4e812b1771a101f8$var$getDelta(axis, offset, size, containerDimensions, padding) {
    let containerScroll = containerDimensions.scroll[axis];
    let containerHeight = containerDimensions[$4e812b1771a101f8$var$AXIS_SIZE[axis]];
    let startEdgeOffset = offset - padding - containerScroll;
    let endEdgeOffset = offset + padding - containerScroll + size;
    if (startEdgeOffset < 0) return -startEdgeOffset;
    else if (endEdgeOffset > containerHeight) return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
    else return 0;
}
function $4e812b1771a101f8$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $4e812b1771a101f8$var$parsePlacement(input) {
    if ($4e812b1771a101f8$var$PARSED_PLACEMENT_CACHE[input]) return $4e812b1771a101f8$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = $4e812b1771a101f8$var$AXIS[placement] || 'right';
    let crossAxis = $4e812b1771a101f8$var$CROSS_AXIS[axis];
    if (!$4e812b1771a101f8$var$AXIS[crossPlacement]) crossPlacement = 'center';
    let size = $4e812b1771a101f8$var$AXIS_SIZE[axis];
    let crossSize = $4e812b1771a101f8$var$AXIS_SIZE[crossAxis];
    $4e812b1771a101f8$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $4e812b1771a101f8$var$PARSED_PLACEMENT_CACHE[input];
}
function $4e812b1771a101f8$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned) {
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
        position[$4e812b1771a101f8$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $4e812b1771a101f8$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding) {
    return position.top != null ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top - (containerOffsetWithBoundary.top + position.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    ) : Math.max(0, childOffset.top + containerOffsetWithBoundary.top - (boundaryDimensions.top + boundaryDimensions.scroll.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    );
}
function $4e812b1771a101f8$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement , axis: axis , size: size  } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$4e812b1771a101f8$var$FLIPPED_DIRECTION[axis]] - padding);
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$4e812b1771a101f8$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $4e812b1771a101f8$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight) {
    let placementInfo = $4e812b1771a101f8$var$parsePlacement(placementInput);
    let { size: size , crossAxis: crossAxis , crossSize: crossSize , placement: placement , crossPlacement: crossPlacement  } = placementInfo;
    let position = $4e812b1771a101f8$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    let normalizedOffset = offset;
    let space = $4e812b1771a101f8$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $4e812b1771a101f8$var$parsePlacement(`${$4e812b1771a101f8$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $4e812b1771a101f8$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
        let flippedSpace = $4e812b1771a101f8$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    let delta = $4e812b1771a101f8$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let maxHeight = $4e812b1771a101f8$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $4e812b1771a101f8$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    delta = $4e812b1771a101f8$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
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
function $4e812b1771a101f8$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement , targetNode: targetNode , overlayNode: overlayNode , scrollNode: scrollNode , padding: padding , shouldFlip: shouldFlip , boundaryElement: boundaryElement , offset: offset , crossOffset: crossOffset , maxHeight: maxHeight  } = opts;
    let container = overlayNode.offsetParent || document.body;
    let isBodyContainer = container.tagName === 'BODY';
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isBodyContainer ? ($parcel$interopDefault($eEcuo$domhelpersqueryoffset))(targetNode) : ($parcel$interopDefault($eEcuo$domhelpersqueryposition))(targetNode, container);
    if (!isBodyContainer) {
        childOffset.top += parseInt(($parcel$interopDefault($eEcuo$domhelpersstyle))(targetNode, 'marginTop'), 10) || 0;
        childOffset.left += parseInt(($parcel$interopDefault($eEcuo$domhelpersstyle))(targetNode, 'marginLeft'), 10) || 0;
    }
    let overlaySize = ($parcel$interopDefault($eEcuo$domhelpersqueryoffset))(overlayNode);
    let margins = $4e812b1771a101f8$var$getMargins(overlayNode);
    overlaySize.width += margins.left + margins.right;
    overlaySize.height += margins.top + margins.bottom;
    let scrollSize = $4e812b1771a101f8$var$getScroll(scrollNode);
    let boundaryDimensions = $4e812b1771a101f8$var$getContainerDimensions(boundaryElement);
    let containerOffsetWithBoundary = boundaryElement.tagName === 'BODY' ? ($parcel$interopDefault($eEcuo$domhelpersqueryoffset))(container) : ($parcel$interopDefault($eEcuo$domhelpersqueryposition))(container, boundaryElement);
    return $4e812b1771a101f8$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight);
}




const $619c3cf983abbc9b$export$f6211563215e3b37 = new WeakMap();
function $619c3cf983abbc9b$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef , isOpen: isOpen , onClose: onClose  } = opts;
    $eEcuo$react.useEffect(()=>{
        if (!isOpen) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            let onCloseHandler = onClose || $619c3cf983abbc9b$export$f6211563215e3b37.get(triggerRef.current);
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
let $4840b1839efdbc34$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $4840b1839efdbc34$export$d39e1813b3bdd0e1(props) {
    let { direction: direction  } = $eEcuo$reactariai18n.useLocale();
    let { targetRef: targetRef , overlayRef: overlayRef , scrollRef: scrollRef = overlayRef , placement: placement = 'bottom' , containerPadding: containerPadding = 12 , shouldFlip: shouldFlip = true , boundaryElement: boundaryElement = typeof document !== 'undefined' ? document.body : null , offset: offset = 0 , crossOffset: crossOffset = 0 , shouldUpdatePosition: shouldUpdatePosition = true , isOpen: isOpen = true , onClose: onClose , maxHeight: maxHeight  } = props;
    let [position, setPosition] = $eEcuo$react.useState({
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
    let updatePosition = $eEcuo$react.useCallback(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
        setPosition($4e812b1771a101f8$export$b3ceb0cbf1056d98({
            placement: $4840b1839efdbc34$var$translateRTL(placement, direction),
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
    $eEcuo$reactariautils.useLayoutEffect(updatePosition, deps);
    // Update position on window resize
    $4840b1839efdbc34$var$useResize(updatePosition);
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = $eEcuo$react.useRef(false);
    $eEcuo$reactariautils.useLayoutEffect(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        $4840b1839efdbc34$var$visualViewport?.addEventListener('resize', onResize);
        return ()=>{
            $4840b1839efdbc34$var$visualViewport?.removeEventListener('resize', onResize);
        };
    }, [
        updatePosition
    ]);
    let close = $eEcuo$react.useCallback(()=>{
        if (!isResizing.current) onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    $619c3cf983abbc9b$export$18fc8428861184da({
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
function $4840b1839efdbc34$var$useResize(onResize) {
    $eEcuo$reactariautils.useLayoutEffect(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function $4840b1839efdbc34$var$translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
}


var $5b6dc2c9da8a6b59$exports = {};

$parcel$export($5b6dc2c9da8a6b59$exports, "useOverlay", () => $5b6dc2c9da8a6b59$export$ea8f71083e90600f);


const $5b6dc2c9da8a6b59$var$visibleOverlays = [];
function $5b6dc2c9da8a6b59$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , isOpen: isOpen , isDismissable: isDismissable = false , isKeyboardDismissDisabled: isKeyboardDismissDisabled = false , shouldCloseOnInteractOutside: shouldCloseOnInteractOutside  } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    $eEcuo$react.useEffect(()=>{
        if (isOpen) $5b6dc2c9da8a6b59$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $5b6dc2c9da8a6b59$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $5b6dc2c9da8a6b59$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack.
    let onHide = ()=>{
        if ($5b6dc2c9da8a6b59$var$visibleOverlays[$5b6dc2c9da8a6b59$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($5b6dc2c9da8a6b59$var$visibleOverlays[$5b6dc2c9da8a6b59$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($5b6dc2c9da8a6b59$var$visibleOverlays[$5b6dc2c9da8a6b59$var$visibleOverlays.length - 1] === ref) {
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
    $eEcuo$reactariainteractions.useInteractOutside({
        ref: ref,
        onInteractOutside: isDismissable ? onInteractOutside : null,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps  } = $eEcuo$reactariainteractions.useFocusWithin({
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


var $95957f8782d97cc2$exports = {};

$parcel$export($95957f8782d97cc2$exports, "useOverlayTrigger", () => $95957f8782d97cc2$export$f9d5c8beee7d008d);



function $95957f8782d97cc2$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type  } = props;
    let { isOpen: isOpen  } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    $eEcuo$react.useEffect(()=>{
        if (ref && ref.current) $619c3cf983abbc9b$export$f6211563215e3b37.set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = $eEcuo$reactariautils.useId();
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


var $ee53c1f4e44df124$exports = {};

$parcel$export($ee53c1f4e44df124$exports, "usePreventScroll", () => $ee53c1f4e44df124$export$ee0f7cc6afcd1c18);

// @ts-ignore
const $ee53c1f4e44df124$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $ee53c1f4e44df124$var$nonTextInputTypes = new Set([
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
function $ee53c1f4e44df124$export$ee0f7cc6afcd1c18(options = {
}) {
    let { isDisabled: isDisabled  } = options;
    $eEcuo$reactariautils.useLayoutEffect(()=>{
        if (isDisabled) return;
        if ($eEcuo$reactariautils.isIOS()) return $ee53c1f4e44df124$var$preventScrollMobileSafari();
        else return $ee53c1f4e44df124$var$preventScrollStandard();
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $ee53c1f4e44df124$var$preventScrollStandard() {
    return $eEcuo$reactariautils.chain($ee53c1f4e44df124$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $ee53c1f4e44df124$var$setStyle(document.documentElement, 'overflow', 'hidden'));
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
function $ee53c1f4e44df124$var$preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = $eEcuo$reactariautils.getScrollParent(e.target);
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
        if (target instanceof HTMLInputElement && !$ee53c1f4e44df124$var$nonTextInputTypes.has(target.type)) {
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
        if (target instanceof HTMLInputElement && !$ee53c1f4e44df124$var$nonTextInputTypes.has(target.type)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($ee53c1f4e44df124$var$visualViewport) {
                    if ($ee53c1f4e44df124$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $ee53c1f4e44df124$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $ee53c1f4e44df124$var$visualViewport.addEventListener('resize', ()=>$ee53c1f4e44df124$var$scrollIntoView(target)
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
    let restoreStyles = $eEcuo$reactariautils.chain($ee53c1f4e44df124$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $ee53c1f4e44df124$var$setStyle(document.documentElement, 'overflow', 'hidden'), $ee53c1f4e44df124$var$setStyle(document.body, 'marginTop', `-${scrollY}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = $eEcuo$reactariautils.chain($ee53c1f4e44df124$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $ee53c1f4e44df124$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $ee53c1f4e44df124$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $ee53c1f4e44df124$var$addEvent(document, 'focus', onFocus, true), $ee53c1f4e44df124$var$addEvent(window, 'scroll', onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $ee53c1f4e44df124$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $ee53c1f4e44df124$var$addEvent(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    return ()=>{
        target.removeEventListener(event, handler, options);
    };
}
function $ee53c1f4e44df124$var$scrollIntoView(target) {
    // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
    let scrollable = $eEcuo$reactariautils.getScrollParent(target);
    if (scrollable !== document.documentElement && scrollable !== document.body) {
        let scrollableTop = scrollable.getBoundingClientRect().top;
        let targetTop = target.getBoundingClientRect().top;
        if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
    }
}


var $a61a2eb40435f868$exports = {};

$parcel$export($a61a2eb40435f868$exports, "ModalProvider", () => $a61a2eb40435f868$export$178405afcd8c5eb);
$parcel$export($a61a2eb40435f868$exports, "useModalProvider", () => $a61a2eb40435f868$export$d9aaed4c3ece1bc0);
$parcel$export($a61a2eb40435f868$exports, "OverlayProvider", () => $a61a2eb40435f868$export$bf688221f59024e5);
$parcel$export($a61a2eb40435f868$exports, "OverlayContainer", () => $a61a2eb40435f868$export$b47c3594eab58386);
$parcel$export($a61a2eb40435f868$exports, "useModal", () => $a61a2eb40435f868$export$33ffd74ebf07f060);


const $a61a2eb40435f868$var$Context = /*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createContext(null);
function $a61a2eb40435f868$export$178405afcd8c5eb(props) {
    let { children: children  } = props;
    let parent = $eEcuo$react.useContext($a61a2eb40435f868$var$Context);
    let [modalCount, setModalCount] = $eEcuo$react.useState(0);
    let context = $eEcuo$react.useMemo(()=>({
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
    return(/*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createElement($a61a2eb40435f868$var$Context.Provider, {
        value: context
    }, children));
}
function $a61a2eb40435f868$export$d9aaed4c3ece1bc0() {
    let context = $eEcuo$react.useContext($a61a2eb40435f868$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : null
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $a61a2eb40435f868$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps  } = $a61a2eb40435f868$export$d9aaed4c3ece1bc0();
    return(/*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    }));
}
function $a61a2eb40435f868$export$bf688221f59024e5(props) {
    return(/*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createElement($a61a2eb40435f868$export$178405afcd8c5eb, null, /*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createElement($a61a2eb40435f868$var$OverlayContainerDOM, props)));
}
function $a61a2eb40435f868$export$b47c3594eab58386(props) {
    let { portalContainer: portalContainer = document.body , ...rest } = props;
    ($parcel$interopDefault($eEcuo$react)).useEffect(()=>{
        if (portalContainer.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    let contents = /*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createElement($a61a2eb40435f868$export$bf688221f59024e5, rest);
    return(/*#__PURE__*/ ($parcel$interopDefault($eEcuo$reactdom)).createPortal(contents, portalContainer));
}
function $a61a2eb40435f868$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = $eEcuo$react.useContext($a61a2eb40435f868$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    $eEcuo$react.useEffect(()=>{
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


var $7184f5dbf267fc5d$exports = {};

$parcel$export($7184f5dbf267fc5d$exports, "DismissButton", () => $7184f5dbf267fc5d$export$2317d149ed6f78c4);
var $f83261f4abf35e90$exports = {};
var $0cce8d243114c399$exports = {};
$0cce8d243114c399$exports = JSON.parse("{\"dismiss\":\"تجاهل\"}");


var $8d2798b63a54d9a3$exports = {};
$8d2798b63a54d9a3$exports = JSON.parse("{\"dismiss\":\"Отхвърляне\"}");


var $7ed721453d249d87$exports = {};
$7ed721453d249d87$exports = JSON.parse("{\"dismiss\":\"Odstranit\"}");


var $69a536d8fdf0c699$exports = {};
$69a536d8fdf0c699$exports = JSON.parse("{\"dismiss\":\"Luk\"}");


var $3dbab4a5b085efc8$exports = {};
$3dbab4a5b085efc8$exports = JSON.parse("{\"dismiss\":\"Schließen\"}");


var $82906375e0a511fa$exports = {};
$82906375e0a511fa$exports = JSON.parse("{\"dismiss\":\"Απόρριψη\"}");


var $4901a87461d3e12a$exports = {};
$4901a87461d3e12a$exports = JSON.parse("{\"dismiss\":\"Dismiss\"}");


var $b1c160852353c701$exports = {};
$b1c160852353c701$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $38c9859be551d3e3$exports = {};
$38c9859be551d3e3$exports = JSON.parse("{\"dismiss\":\"Lõpeta\"}");


var $dabd49cecd5ba4f9$exports = {};
$dabd49cecd5ba4f9$exports = JSON.parse("{\"dismiss\":\"Hylkää\"}");


var $246fd3284a1b53b6$exports = {};
$246fd3284a1b53b6$exports = JSON.parse("{\"dismiss\":\"Rejeter\"}");


var $612432917c91a901$exports = {};
$612432917c91a901$exports = JSON.parse("{\"dismiss\":\"התעלם\"}");


var $bcac30ad3823fbf7$exports = {};
$bcac30ad3823fbf7$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $0de7e45a29f3b69c$exports = {};
$0de7e45a29f3b69c$exports = JSON.parse("{\"dismiss\":\"Elutasítás\"}");


var $fae83a56d43c6799$exports = {};
$fae83a56d43c6799$exports = JSON.parse("{\"dismiss\":\"Ignora\"}");


var $2a0cd74b34378064$exports = {};
$2a0cd74b34378064$exports = JSON.parse("{\"dismiss\":\"閉じる\"}");


var $3fe4e0d4307cfb20$exports = {};
$3fe4e0d4307cfb20$exports = JSON.parse("{\"dismiss\":\"무시\"}");


var $5636bd7e6e511089$exports = {};
$5636bd7e6e511089$exports = JSON.parse("{\"dismiss\":\"Atmesti\"}");


var $ebf758b9709ae80c$exports = {};
$ebf758b9709ae80c$exports = JSON.parse("{\"dismiss\":\"Nerādīt\"}");


var $a158366a3aa523e5$exports = {};
$a158366a3aa523e5$exports = JSON.parse("{\"dismiss\":\"Lukk\"}");


var $79ac8797038574df$exports = {};
$79ac8797038574df$exports = JSON.parse("{\"dismiss\":\"Negeren\"}");


var $e640a81cafc4ba6e$exports = {};
$e640a81cafc4ba6e$exports = JSON.parse("{\"dismiss\":\"Zignoruj\"}");


var $7a23c0dc7667da02$exports = {};
$7a23c0dc7667da02$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $b3f69b6499f6a9c5$exports = {};
$b3f69b6499f6a9c5$exports = JSON.parse("{\"dismiss\":\"Dispensar\"}");


var $2b056c87f29deeb4$exports = {};
$2b056c87f29deeb4$exports = JSON.parse("{\"dismiss\":\"Revocare\"}");


var $a4f0345bddacc386$exports = {};
$a4f0345bddacc386$exports = JSON.parse("{\"dismiss\":\"Пропустить\"}");


var $7bd3f602ae2b0408$exports = {};
$7bd3f602ae2b0408$exports = JSON.parse("{\"dismiss\":\"Zrušiť\"}");


var $bd2e8f06b533edd6$exports = {};
$bd2e8f06b533edd6$exports = JSON.parse("{\"dismiss\":\"Opusti\"}");


var $780dc69a347f2e0e$exports = {};
$780dc69a347f2e0e$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $061df0c1d4b915d6$exports = {};
$061df0c1d4b915d6$exports = JSON.parse("{\"dismiss\":\"Avvisa\"}");


var $2b56cc94846f6959$exports = {};
$2b56cc94846f6959$exports = JSON.parse("{\"dismiss\":\"Kapat\"}");


var $529bf946157b1f26$exports = {};
$529bf946157b1f26$exports = JSON.parse("{\"dismiss\":\"Скасувати\"}");


var $e37e6910d7b976e3$exports = {};
$e37e6910d7b976e3$exports = JSON.parse("{\"dismiss\":\"取消\"}");


var $73f4e510386f18e3$exports = {};
$73f4e510386f18e3$exports = JSON.parse("{\"dismiss\":\"關閉\"}");


$f83261f4abf35e90$exports = {
    "ar-AE": $0cce8d243114c399$exports,
    "bg-BG": $8d2798b63a54d9a3$exports,
    "cs-CZ": $7ed721453d249d87$exports,
    "da-DK": $69a536d8fdf0c699$exports,
    "de-DE": $3dbab4a5b085efc8$exports,
    "el-GR": $82906375e0a511fa$exports,
    "en-US": $4901a87461d3e12a$exports,
    "es-ES": $b1c160852353c701$exports,
    "et-EE": $38c9859be551d3e3$exports,
    "fi-FI": $dabd49cecd5ba4f9$exports,
    "fr-FR": $246fd3284a1b53b6$exports,
    "he-IL": $612432917c91a901$exports,
    "hr-HR": $bcac30ad3823fbf7$exports,
    "hu-HU": $0de7e45a29f3b69c$exports,
    "it-IT": $fae83a56d43c6799$exports,
    "ja-JP": $2a0cd74b34378064$exports,
    "ko-KR": $3fe4e0d4307cfb20$exports,
    "lt-LT": $5636bd7e6e511089$exports,
    "lv-LV": $ebf758b9709ae80c$exports,
    "nb-NO": $a158366a3aa523e5$exports,
    "nl-NL": $79ac8797038574df$exports,
    "pl-PL": $e640a81cafc4ba6e$exports,
    "pt-BR": $7a23c0dc7667da02$exports,
    "pt-PT": $b3f69b6499f6a9c5$exports,
    "ro-RO": $2b056c87f29deeb4$exports,
    "ru-RU": $a4f0345bddacc386$exports,
    "sk-SK": $7bd3f602ae2b0408$exports,
    "sl-SI": $bd2e8f06b533edd6$exports,
    "sr-SP": $780dc69a347f2e0e$exports,
    "sv-SE": $061df0c1d4b915d6$exports,
    "tr-TR": $2b56cc94846f6959$exports,
    "uk-UA": $529bf946157b1f26$exports,
    "zh-CN": $e37e6910d7b976e3$exports,
    "zh-TW": $73f4e510386f18e3$exports
};





function $7184f5dbf267fc5d$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss  } = props;
    let formatMessage = $eEcuo$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($f83261f4abf35e90$exports)));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createElement($eEcuo$reactariavisuallyhidden.VisuallyHidden, null, /*#__PURE__*/ ($parcel$interopDefault($eEcuo$react)).createElement("button", {
        tabIndex: -1,
        "aria-label": formatMessage('dismiss'),
        onClick: onClick
    })));
}


var $aa0b7eface5f8f31$exports = {};

$parcel$export($aa0b7eface5f8f31$exports, "ariaHideOutside", () => $aa0b7eface5f8f31$export$1c3ebcada18427bf);
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
let $aa0b7eface5f8f31$var$refCountMap = new WeakMap();
function $aa0b7eface5f8f31$export$1c3ebcada18427bf(targets, root = document.body) {
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
        let refCount = $aa0b7eface5f8f31$var$refCountMap.get(node) ?? 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute('aria-hidden') === 'true' && refCount === 0) return;
        if (refCount === 0) node.setAttribute('aria-hidden', 'true');
        hiddenNodes.add(node);
        $aa0b7eface5f8f31$var$refCountMap.set(node, refCount + 1);
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
            let count = $aa0b7eface5f8f31$var$refCountMap.get(node);
            if (count === 1) {
                node.removeAttribute('aria-hidden');
                $aa0b7eface5f8f31$var$refCountMap.delete(node);
            } else $aa0b7eface5f8f31$var$refCountMap.set(node, count - 1);
        }
    };
}


$parcel$exportWildcard(module.exports, $4840b1839efdbc34$exports);
$parcel$exportWildcard(module.exports, $5b6dc2c9da8a6b59$exports);
$parcel$exportWildcard(module.exports, $95957f8782d97cc2$exports);
$parcel$exportWildcard(module.exports, $ee53c1f4e44df124$exports);
$parcel$exportWildcard(module.exports, $a61a2eb40435f868$exports);
$parcel$exportWildcard(module.exports, $7184f5dbf267fc5d$exports);
$parcel$exportWildcard(module.exports, $aa0b7eface5f8f31$exports);


//# sourceMappingURL=main.js.map
