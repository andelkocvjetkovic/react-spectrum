import {useLayoutEffect as $jp22K$useLayoutEffect, mergeProps as $jp22K$mergeProps, focusWithoutScrolling as $jp22K$focusWithoutScrolling, useResizeObserver as $jp22K$useResizeObserver} from "@react-aria/utils";
import {useVirtualizerState as $jp22K$useVirtualizerState, Rect as $jp22K$Rect, Size as $jp22K$Size} from "@react-stately/virtualizer";
import $jp22K$react, {useRef as $jp22K$useRef, useCallback as $jp22K$useCallback, useEffect as $jp22K$useEffect, useState as $jp22K$useState} from "react";
import {flushSync as $jp22K$flushSync} from "react-dom";
import {useLocale as $jp22K$useLocale} from "@react-aria/i18n";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $e47e10d9bf281fb2$exports = {};

$parcel$export($e47e10d9bf281fb2$exports, "useVirtualizer", () => $e47e10d9bf281fb2$export$dd6d526d88b5a137);
$parcel$export($e47e10d9bf281fb2$exports, "Virtualizer", () => $e47e10d9bf281fb2$export$89be5a243e59c4b2);



var $3923fd52940764f6$exports = {};

$parcel$export($3923fd52940764f6$exports, "ScrollView", () => $3923fd52940764f6$export$5665e3d6be6adea);

var $f209a5445f6af8af$exports = {};

$parcel$export($f209a5445f6af8af$exports, "getRTLOffsetType", () => $f209a5445f6af8af$export$faf7630257ad4304);
$parcel$export($f209a5445f6af8af$exports, "getScrollLeft", () => $f209a5445f6af8af$export$1389d168952b34b5);
$parcel$export($f209a5445f6af8af$exports, "setScrollLeft", () => $f209a5445f6af8af$export$ed5fd5ffe5ab0ac);
let $f209a5445f6af8af$var$cachedRTLResult = null;
function $f209a5445f6af8af$export$faf7630257ad4304(recalculate = false) {
    if ($f209a5445f6af8af$var$cachedRTLResult === null || recalculate) {
        const outerDiv = document.createElement('div');
        const outerStyle = outerDiv.style;
        outerStyle.width = '50px';
        outerStyle.height = '50px';
        outerStyle.overflow = 'scroll';
        outerStyle.direction = 'rtl';
        const innerDiv = document.createElement('div');
        const innerStyle = innerDiv.style;
        innerStyle.width = '100px';
        innerStyle.height = '100px';
        outerDiv.appendChild(innerDiv);
        document.body.appendChild(outerDiv);
        if (outerDiv.scrollLeft > 0) $f209a5445f6af8af$var$cachedRTLResult = 'positive-descending';
        else {
            outerDiv.scrollLeft = 1;
            if (outerDiv.scrollLeft === 0) $f209a5445f6af8af$var$cachedRTLResult = 'negative';
            else $f209a5445f6af8af$var$cachedRTLResult = 'positive-ascending';
        }
        document.body.removeChild(outerDiv);
        return $f209a5445f6af8af$var$cachedRTLResult;
    }
    return $f209a5445f6af8af$var$cachedRTLResult;
}
function $f209a5445f6af8af$export$1389d168952b34b5(node, direction) {
    let { scrollLeft: scrollLeft  } = node;
    // scrollLeft in rtl locales differs across browsers, so normalize.
    // See comment by getRTLOffsetType below for details.
    if (direction === 'rtl') {
        let { scrollWidth: scrollWidth , clientWidth: clientWidth  } = node;
        switch($f209a5445f6af8af$export$faf7630257ad4304()){
            case 'negative':
                scrollLeft = -scrollLeft;
                break;
            case 'positive-descending':
                scrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
        }
    }
    return scrollLeft;
}
function $f209a5445f6af8af$export$ed5fd5ffe5ab0ac(node, direction, scrollLeft) {
    if (direction === 'rtl') switch($f209a5445f6af8af$export$faf7630257ad4304()){
        case 'negative':
            scrollLeft = -scrollLeft;
            break;
        case 'positive-ascending':
            break;
        default:
            {
                const { clientWidth: clientWidth , scrollWidth: scrollWidth  } = node;
                scrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
    }
    node.scrollLeft = scrollLeft;
}







function $3923fd52940764f6$var$ScrollView(props, ref) {
    let { contentSize: contentSize , onVisibleRectChange: onVisibleRectChange , children: children , innerStyle: innerStyle , sizeToFit: sizeToFit , onScrollStart: onScrollStart , onScrollEnd: onScrollEnd , scrollDirection: scrollDirection = 'both' , ...otherProps } = props;
    let defaultRef = $jp22K$useRef();
    ref = ref || defaultRef;
    let state = $jp22K$useRef({
        scrollTop: 0,
        scrollLeft: 0,
        scrollEndTime: 0,
        scrollTimeout: null,
        width: 0,
        height: 0,
        isScrolling: false
    }).current;
    let { direction: direction  } = $jp22K$useLocale();
    let [isScrolling, setScrolling] = $jp22K$useState(false);
    let onScroll = $jp22K$useCallback((e)=>{
        if (e.target !== e.currentTarget) return;
        if (props.onScroll) props.onScroll(e);
        $jp22K$flushSync(()=>{
            let scrollTop = e.currentTarget.scrollTop;
            let scrollLeft = $f209a5445f6af8af$export$1389d168952b34b5(e.currentTarget, direction);
            // Prevent rubber band scrolling from shaking when scrolling out of bounds
            state.scrollTop = Math.max(0, Math.min(scrollTop, contentSize.height - state.height));
            state.scrollLeft = Math.max(0, Math.min(scrollLeft, contentSize.width - state.width));
            onVisibleRectChange(new $jp22K$Rect(state.scrollLeft, state.scrollTop, state.width, state.height));
            if (!state.isScrolling) {
                state.isScrolling = true;
                setScrolling(true);
                if (onScrollStart) onScrollStart();
            }
            // So we don't constantly call clearTimeout and setTimeout,
            // keep track of the current timeout time and only reschedule
            // the timer when it is getting close.
            let now = Date.now();
            if (state.scrollEndTime <= now + 50) {
                state.scrollEndTime = now + 300;
                clearTimeout(state.scrollTimeout);
                state.scrollTimeout = setTimeout(()=>{
                    state.isScrolling = false;
                    setScrolling(false);
                    state.scrollTimeout = null;
                    if (onScrollEnd) onScrollEnd();
                }, 300);
            }
        });
    }, [
        props,
        direction,
        state,
        contentSize,
        onVisibleRectChange,
        onScrollStart,
        onScrollEnd
    ]);
    // eslint-disable-next-line arrow-body-style
    $jp22K$useEffect(()=>{
        return ()=>{
            clearTimeout(state.scrollTimeout);
        };
    }, []);
    let updateSize = $jp22K$useCallback(()=>{
        let dom = ref.current;
        if (!dom) return;
        let w = dom.clientWidth;
        let h = dom.clientHeight;
        if (sizeToFit && contentSize.width > 0 && contentSize.height > 0) {
            if (sizeToFit === 'width') w = Math.min(w, contentSize.width);
            else if (sizeToFit === 'height') h = Math.min(h, contentSize.height);
        }
        if (state.width !== w || state.height !== h) {
            state.width = w;
            state.height = h;
            onVisibleRectChange(new $jp22K$Rect(state.scrollLeft, state.scrollTop, w, h));
        }
    }, [
        onVisibleRectChange,
        ref,
        state,
        sizeToFit,
        contentSize
    ]);
    $jp22K$useLayoutEffect(()=>{
        updateSize();
    }, [
        updateSize
    ]);
    $jp22K$useResizeObserver({
        ref: ref,
        onResize: updateSize
    });
    let style = {
        // Reset padding so that relative positioning works correctly. Padding will be done in JS layout.
        padding: 0,
        ...otherProps.style
    };
    if (scrollDirection === 'horizontal') {
        style.overflowX = 'auto';
        style.overflowY = 'hidden';
    } else if (scrollDirection === 'vertical') {
        style.overflowY = 'auto';
        style.overflowX = 'hidden';
    } else style.overflow = 'auto';
    return(/*#__PURE__*/ $jp22K$react.createElement("div", {
        ...otherProps,
        style: style,
        ref: ref,
        onScroll: onScroll
    }, /*#__PURE__*/ $jp22K$react.createElement("div", {
        role: "presentation",
        style: {
            width: contentSize.width,
            height: contentSize.height,
            pointerEvents: isScrolling ? 'none' : 'auto',
            position: 'relative',
            ...innerStyle
        }
    }, children)));
}
const $3923fd52940764f6$export$5665e3d6be6adea = /*#__PURE__*/ $jp22K$react.forwardRef($3923fd52940764f6$var$ScrollView);


var $aa580793b2d37f35$exports = {};

$parcel$export($aa580793b2d37f35$exports, "VirtualizerItem", () => $aa580793b2d37f35$export$6796df8ba7398521);
$parcel$export($aa580793b2d37f35$exports, "layoutInfoToStyle", () => $aa580793b2d37f35$export$1481e64fbe01b8b3);


var $17bc00b688f36754$exports = {};

$parcel$export($17bc00b688f36754$exports, "useVirtualizerItem", () => $17bc00b688f36754$export$1da781778207e0a2);



function $17bc00b688f36754$export$1da781778207e0a2(options) {
    let { reusableView: { layoutInfo: layoutInfo , virtualizer: virtualizer  } , ref: ref  } = options;
    let updateSize = $jp22K$useCallback(()=>{
        let size = $17bc00b688f36754$var$getSize(ref.current);
        virtualizer.updateItemSize(layoutInfo.key, size);
    }, [
        virtualizer,
        layoutInfo.key,
        ref
    ]);
    $jp22K$useLayoutEffect(()=>{
        if (layoutInfo.estimatedSize) updateSize();
    });
    return {
        updateSize: updateSize
    };
}
function $17bc00b688f36754$var$getSize(node) {
    // Reset height before measuring so we get the intrinsic size
    let height = node.style.height;
    node.style.height = '';
    let size = new $jp22K$Size(node.scrollWidth, node.scrollHeight);
    node.style.height = height;
    return size;
}


function $aa580793b2d37f35$export$6796df8ba7398521(props) {
    let { className: className , reusableView: reusableView , parent: parent  } = props;
    let { direction: direction  } = $jp22K$useLocale();
    let ref = $jp22K$useRef();
    $17bc00b688f36754$export$1da781778207e0a2({
        reusableView: reusableView,
        ref: ref
    });
    return(/*#__PURE__*/ $jp22K$react.createElement("div", {
        role: "presentation",
        ref: ref,
        className: className,
        style: $aa580793b2d37f35$export$1481e64fbe01b8b3(reusableView.layoutInfo, direction, parent && parent.layoutInfo)
    }, reusableView.rendered));
}
let $aa580793b2d37f35$var$cache = new WeakMap();
function $aa580793b2d37f35$export$1481e64fbe01b8b3(layoutInfo, dir, parent) {
    let xProperty = dir === 'rtl' ? 'right' : 'left';
    let cached = $aa580793b2d37f35$var$cache.get(layoutInfo);
    if (cached && cached[xProperty] != null) {
        if (!parent) return cached;
        // Invalidate if the parent position changed.
        let top = layoutInfo.rect.y - parent.rect.y;
        let x = layoutInfo.rect.x - parent.rect.x;
        if (cached.top === top && cached[xProperty] === x) return cached;
    }
    let style = {
        position: layoutInfo.isSticky ? 'sticky' : 'absolute',
        overflow: layoutInfo.allowOverflow ? 'visible' : 'hidden',
        top: layoutInfo.rect.y - (parent ? parent.rect.y : 0),
        [xProperty]: layoutInfo.rect.x - (parent ? parent.rect.x : 0),
        transition: 'all',
        WebkitTransition: 'all',
        WebkitTransitionDuration: 'inherit',
        transitionDuration: 'inherit',
        width: layoutInfo.rect.width,
        height: layoutInfo.rect.height,
        opacity: layoutInfo.opacity,
        zIndex: layoutInfo.zIndex,
        transform: layoutInfo.transform,
        contain: layoutInfo.allowOverflow ? 'size layout style' : 'size layout style paint'
    };
    $aa580793b2d37f35$var$cache.set(layoutInfo, style);
    return style;
}


function $e47e10d9bf281fb2$var$Virtualizer(props, ref) {
    let { children: renderView , renderWrapper: renderWrapper , layout: layout , collection: collection , sizeToFit: sizeToFit , scrollDirection: scrollDirection , transitionDuration: transitionDuration , isLoading: isLoading , onLoadMore: onLoadMore , focusedKey: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    focusedKey , shouldUseVirtualFocus: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldUseVirtualFocus , scrollToItem: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scrollToItem , ...otherProps } = props;
    let fallbackRef = $jp22K$useRef();
    ref = ref || fallbackRef;
    let state = $jp22K$useVirtualizerState({
        transitionDuration: transitionDuration,
        layout: layout,
        collection: collection,
        renderView: renderView,
        renderWrapper: renderWrapper || $e47e10d9bf281fb2$var$defaultRenderWrapper,
        onVisibleRectChange (rect) {
            ref.current.scrollLeft = rect.x;
            ref.current.scrollTop = rect.y;
        }
    });
    let { virtualizerProps: virtualizerProps  } = $e47e10d9bf281fb2$export$dd6d526d88b5a137(props, state, ref);
    // Handle scrolling, and call onLoadMore when nearing the bottom.
    let onVisibleRectChange = $jp22K$useCallback((rect)=>{
        state.setVisibleRect(rect);
        if (!isLoading && onLoadMore) {
            let scrollOffset = state.virtualizer.contentSize.height - rect.height * 2;
            if (rect.y > scrollOffset) onLoadMore();
        }
    }, [
        isLoading,
        onLoadMore,
        state
    ]);
    $jp22K$useLayoutEffect(()=>{
        if (!isLoading && onLoadMore && !state.isAnimating) {
            if (state.contentSize.height > 0 && state.contentSize.height <= state.virtualizer.visibleRect.height) onLoadMore();
        }
    }, [
        state.contentSize,
        state.isAnimating,
        state.virtualizer,
        onLoadMore,
        isLoading
    ]);
    return(/*#__PURE__*/ $jp22K$react.createElement($3923fd52940764f6$export$5665e3d6be6adea, {
        ...$jp22K$mergeProps(otherProps, virtualizerProps),
        ref: ref,
        innerStyle: state.isAnimating ? {
            transition: `none ${state.virtualizer.transitionDuration}ms`
        } : undefined,
        contentSize: state.contentSize,
        onVisibleRectChange: onVisibleRectChange,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling,
        sizeToFit: sizeToFit,
        scrollDirection: scrollDirection
    }, state.visibleViews));
}
function $e47e10d9bf281fb2$export$dd6d526d88b5a137(props, state, ref) {
    let { focusedKey: focusedKey , scrollToItem: scrollToItem , shouldUseVirtualFocus: shouldUseVirtualFocus  } = props;
    let { virtualizer: virtualizer  } = state;
    // Scroll to the focusedKey when it changes. Actually focusing the focusedKey
    // is up to the implementation using Virtualizer since we don't have refs
    // to all of the item DOM nodes.
    let lastFocusedKey = $jp22K$useRef(null);
    $jp22K$useEffect(()=>{
        if (virtualizer.visibleRect.height === 0) return;
        if (focusedKey !== lastFocusedKey.current) {
            if (scrollToItem) scrollToItem(focusedKey);
            else virtualizer.scrollToItem(focusedKey, {
                duration: 0
            });
        }
        lastFocusedKey.current = focusedKey;
    }, [
        focusedKey,
        virtualizer.visibleRect.height,
        virtualizer,
        lastFocusedKey,
        scrollToItem
    ]);
    let isFocusWithin = $jp22K$useRef(false);
    let onFocus = $jp22K$useCallback((e)=>{
        // If the focused item is scrolled out of view and is not in the DOM, the collection
        // will have tabIndex={0}. When tabbing in from outside, scroll the focused item into view.
        // Ignore focus events that bubble through portals (e.g. focus that happens on a menu popover child of the virtualizer)
        if (!isFocusWithin.current && ref.current.contains(e.target)) {
            if (scrollToItem) scrollToItem(focusedKey);
            else virtualizer.scrollToItem(focusedKey, {
                duration: 0
            });
        }
        isFocusWithin.current = e.target !== ref.current;
    }, [
        ref,
        virtualizer,
        focusedKey,
        scrollToItem
    ]);
    let onBlur = $jp22K$useCallback((e)=>{
        isFocusWithin.current = ref.current.contains(e.relatedTarget);
    }, [
        ref
    ]);
    // When the focused item is scrolled out of view and is removed from the DOM,
    // move focus to the collection view as a whole if focus was within before.
    let focusedView = virtualizer.getView(focusedKey);
    $jp22K$useEffect(()=>{
        if (focusedKey && !focusedView && isFocusWithin.current && document.activeElement !== ref.current) $jp22K$focusWithoutScrolling(ref.current);
    });
    // Set tabIndex to -1 if the focused view is in the DOM, otherwise 0 so that the collection
    // itself is tabbable. When the collection receives focus, we scroll the focused item back into
    // view, which will allow it to be properly focused. If using virtual focus, don't set a
    // tabIndex at all so that VoiceOver on iOS 14 doesn't try to move real DOM focus to the element anyway.
    let tabIndex;
    if (!shouldUseVirtualFocus) tabIndex = focusedView ? -1 : 0;
    return {
        virtualizerProps: {
            tabIndex: tabIndex,
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const $e47e10d9bf281fb2$export$89be5a243e59c4b2 = /*#__PURE__*/ $jp22K$react.forwardRef($e47e10d9bf281fb2$var$Virtualizer);
function $e47e10d9bf281fb2$var$defaultRenderWrapper(parent, reusableView) {
    return(/*#__PURE__*/ $jp22K$react.createElement($aa580793b2d37f35$export$6796df8ba7398521, {
        key: reusableView.key,
        reusableView: reusableView,
        parent: parent
    }));
}








export {$e47e10d9bf281fb2$export$dd6d526d88b5a137 as useVirtualizer, $e47e10d9bf281fb2$export$89be5a243e59c4b2 as Virtualizer, $17bc00b688f36754$export$1da781778207e0a2 as useVirtualizerItem, $aa580793b2d37f35$export$6796df8ba7398521 as VirtualizerItem, $aa580793b2d37f35$export$1481e64fbe01b8b3 as layoutInfoToStyle, $3923fd52940764f6$export$5665e3d6be6adea as ScrollView, $f209a5445f6af8af$export$faf7630257ad4304 as getRTLOffsetType, $f209a5445f6af8af$export$1389d168952b34b5 as getScrollLeft, $f209a5445f6af8af$export$ed5fd5ffe5ab0ac as setScrollLeft};
//# sourceMappingURL=module.js.map
