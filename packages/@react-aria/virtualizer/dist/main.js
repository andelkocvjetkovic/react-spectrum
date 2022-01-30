var $55M73$reactariautils = require("@react-aria/utils");
var $55M73$reactstatelyvirtualizer = require("@react-stately/virtualizer");
var $55M73$react = require("react");
var $55M73$reactdom = require("react-dom");
var $55M73$reactariai18n = require("@react-aria/i18n");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $aea84f7f089eb7a5$exports = {};

$parcel$export($aea84f7f089eb7a5$exports, "useVirtualizer", () => $aea84f7f089eb7a5$export$dd6d526d88b5a137);
$parcel$export($aea84f7f089eb7a5$exports, "Virtualizer", () => $aea84f7f089eb7a5$export$89be5a243e59c4b2);



var $3e3c2bf282fde6af$exports = {};

$parcel$export($3e3c2bf282fde6af$exports, "ScrollView", () => $3e3c2bf282fde6af$export$5665e3d6be6adea);

var $8b6aaa6593623080$exports = {};

$parcel$export($8b6aaa6593623080$exports, "getRTLOffsetType", () => $8b6aaa6593623080$export$faf7630257ad4304);
$parcel$export($8b6aaa6593623080$exports, "getScrollLeft", () => $8b6aaa6593623080$export$1389d168952b34b5);
$parcel$export($8b6aaa6593623080$exports, "setScrollLeft", () => $8b6aaa6593623080$export$ed5fd5ffe5ab0ac);
let $8b6aaa6593623080$var$cachedRTLResult = null;
function $8b6aaa6593623080$export$faf7630257ad4304(recalculate = false) {
    if ($8b6aaa6593623080$var$cachedRTLResult === null || recalculate) {
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
        if (outerDiv.scrollLeft > 0) $8b6aaa6593623080$var$cachedRTLResult = 'positive-descending';
        else {
            outerDiv.scrollLeft = 1;
            if (outerDiv.scrollLeft === 0) $8b6aaa6593623080$var$cachedRTLResult = 'negative';
            else $8b6aaa6593623080$var$cachedRTLResult = 'positive-ascending';
        }
        document.body.removeChild(outerDiv);
        return $8b6aaa6593623080$var$cachedRTLResult;
    }
    return $8b6aaa6593623080$var$cachedRTLResult;
}
function $8b6aaa6593623080$export$1389d168952b34b5(node, direction) {
    let { scrollLeft: scrollLeft  } = node;
    // scrollLeft in rtl locales differs across browsers, so normalize.
    // See comment by getRTLOffsetType below for details.
    if (direction === 'rtl') {
        let { scrollWidth: scrollWidth , clientWidth: clientWidth  } = node;
        switch($8b6aaa6593623080$export$faf7630257ad4304()){
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
function $8b6aaa6593623080$export$ed5fd5ffe5ab0ac(node, direction, scrollLeft) {
    if (direction === 'rtl') switch($8b6aaa6593623080$export$faf7630257ad4304()){
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







function $3e3c2bf282fde6af$var$ScrollView(props, ref) {
    let { contentSize: contentSize , onVisibleRectChange: onVisibleRectChange , children: children , innerStyle: innerStyle , sizeToFit: sizeToFit , onScrollStart: onScrollStart , onScrollEnd: onScrollEnd , scrollDirection: scrollDirection = 'both' , ...otherProps } = props;
    let defaultRef = $55M73$react.useRef();
    ref = ref || defaultRef;
    let state = $55M73$react.useRef({
        scrollTop: 0,
        scrollLeft: 0,
        scrollEndTime: 0,
        scrollTimeout: null,
        width: 0,
        height: 0,
        isScrolling: false
    }).current;
    let { direction: direction  } = $55M73$reactariai18n.useLocale();
    let [isScrolling, setScrolling] = $55M73$react.useState(false);
    let onScroll = $55M73$react.useCallback((e)=>{
        if (e.target !== e.currentTarget) return;
        if (props.onScroll) props.onScroll(e);
        $55M73$reactdom.flushSync(()=>{
            let scrollTop = e.currentTarget.scrollTop;
            let scrollLeft = $8b6aaa6593623080$export$1389d168952b34b5(e.currentTarget, direction);
            // Prevent rubber band scrolling from shaking when scrolling out of bounds
            state.scrollTop = Math.max(0, Math.min(scrollTop, contentSize.height - state.height));
            state.scrollLeft = Math.max(0, Math.min(scrollLeft, contentSize.width - state.width));
            onVisibleRectChange(new $55M73$reactstatelyvirtualizer.Rect(state.scrollLeft, state.scrollTop, state.width, state.height));
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
    $55M73$react.useEffect(()=>{
        return ()=>{
            clearTimeout(state.scrollTimeout);
        };
    }, []);
    let updateSize = $55M73$react.useCallback(()=>{
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
            onVisibleRectChange(new $55M73$reactstatelyvirtualizer.Rect(state.scrollLeft, state.scrollTop, w, h));
        }
    }, [
        onVisibleRectChange,
        ref,
        state,
        sizeToFit,
        contentSize
    ]);
    $55M73$reactariautils.useLayoutEffect(()=>{
        updateSize();
    }, [
        updateSize
    ]);
    $55M73$reactariautils.useResizeObserver({
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
    return(/*#__PURE__*/ ($parcel$interopDefault($55M73$react)).createElement("div", {
        ...otherProps,
        style: style,
        ref: ref,
        onScroll: onScroll
    }, /*#__PURE__*/ ($parcel$interopDefault($55M73$react)).createElement("div", {
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
const $3e3c2bf282fde6af$export$5665e3d6be6adea = /*#__PURE__*/ ($parcel$interopDefault($55M73$react)).forwardRef($3e3c2bf282fde6af$var$ScrollView);


var $d8772f25e0f98a8d$exports = {};

$parcel$export($d8772f25e0f98a8d$exports, "VirtualizerItem", () => $d8772f25e0f98a8d$export$6796df8ba7398521);
$parcel$export($d8772f25e0f98a8d$exports, "layoutInfoToStyle", () => $d8772f25e0f98a8d$export$1481e64fbe01b8b3);


var $f717a8199f2123af$exports = {};

$parcel$export($f717a8199f2123af$exports, "useVirtualizerItem", () => $f717a8199f2123af$export$1da781778207e0a2);



function $f717a8199f2123af$export$1da781778207e0a2(options) {
    let { reusableView: { layoutInfo: layoutInfo , virtualizer: virtualizer  } , ref: ref  } = options;
    let updateSize = $55M73$react.useCallback(()=>{
        let size = $f717a8199f2123af$var$getSize(ref.current);
        virtualizer.updateItemSize(layoutInfo.key, size);
    }, [
        virtualizer,
        layoutInfo.key,
        ref
    ]);
    $55M73$reactariautils.useLayoutEffect(()=>{
        if (layoutInfo.estimatedSize) updateSize();
    });
    return {
        updateSize: updateSize
    };
}
function $f717a8199f2123af$var$getSize(node) {
    // Reset height before measuring so we get the intrinsic size
    let height = node.style.height;
    node.style.height = '';
    let size = new $55M73$reactstatelyvirtualizer.Size(node.scrollWidth, node.scrollHeight);
    node.style.height = height;
    return size;
}


function $d8772f25e0f98a8d$export$6796df8ba7398521(props) {
    let { className: className , reusableView: reusableView , parent: parent  } = props;
    let { direction: direction  } = $55M73$reactariai18n.useLocale();
    let ref = $55M73$react.useRef();
    $f717a8199f2123af$export$1da781778207e0a2({
        reusableView: reusableView,
        ref: ref
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($55M73$react)).createElement("div", {
        role: "presentation",
        ref: ref,
        className: className,
        style: $d8772f25e0f98a8d$export$1481e64fbe01b8b3(reusableView.layoutInfo, direction, parent && parent.layoutInfo)
    }, reusableView.rendered));
}
let $d8772f25e0f98a8d$var$cache = new WeakMap();
function $d8772f25e0f98a8d$export$1481e64fbe01b8b3(layoutInfo, dir, parent) {
    let xProperty = dir === 'rtl' ? 'right' : 'left';
    let cached = $d8772f25e0f98a8d$var$cache.get(layoutInfo);
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
    $d8772f25e0f98a8d$var$cache.set(layoutInfo, style);
    return style;
}


function $aea84f7f089eb7a5$var$Virtualizer(props, ref) {
    let { children: renderView , renderWrapper: renderWrapper , layout: layout , collection: collection , sizeToFit: sizeToFit , scrollDirection: scrollDirection , transitionDuration: transitionDuration , isLoading: isLoading , onLoadMore: onLoadMore , focusedKey: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    focusedKey , shouldUseVirtualFocus: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldUseVirtualFocus , scrollToItem: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scrollToItem , ...otherProps } = props;
    let fallbackRef = $55M73$react.useRef();
    ref = ref || fallbackRef;
    let state = $55M73$reactstatelyvirtualizer.useVirtualizerState({
        transitionDuration: transitionDuration,
        layout: layout,
        collection: collection,
        renderView: renderView,
        renderWrapper: renderWrapper || $aea84f7f089eb7a5$var$defaultRenderWrapper,
        onVisibleRectChange (rect) {
            ref.current.scrollLeft = rect.x;
            ref.current.scrollTop = rect.y;
        }
    });
    let { virtualizerProps: virtualizerProps  } = $aea84f7f089eb7a5$export$dd6d526d88b5a137(props, state, ref);
    // Handle scrolling, and call onLoadMore when nearing the bottom.
    let onVisibleRectChange = $55M73$react.useCallback((rect)=>{
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
    $55M73$reactariautils.useLayoutEffect(()=>{
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
    return(/*#__PURE__*/ ($parcel$interopDefault($55M73$react)).createElement($3e3c2bf282fde6af$export$5665e3d6be6adea, {
        ...$55M73$reactariautils.mergeProps(otherProps, virtualizerProps),
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
function $aea84f7f089eb7a5$export$dd6d526d88b5a137(props, state, ref) {
    let { focusedKey: focusedKey , scrollToItem: scrollToItem , shouldUseVirtualFocus: shouldUseVirtualFocus  } = props;
    let { virtualizer: virtualizer  } = state;
    // Scroll to the focusedKey when it changes. Actually focusing the focusedKey
    // is up to the implementation using Virtualizer since we don't have refs
    // to all of the item DOM nodes.
    let lastFocusedKey = $55M73$react.useRef(null);
    $55M73$react.useEffect(()=>{
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
    let isFocusWithin = $55M73$react.useRef(false);
    let onFocus = $55M73$react.useCallback((e)=>{
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
    let onBlur = $55M73$react.useCallback((e)=>{
        isFocusWithin.current = ref.current.contains(e.relatedTarget);
    }, [
        ref
    ]);
    // When the focused item is scrolled out of view and is removed from the DOM,
    // move focus to the collection view as a whole if focus was within before.
    let focusedView = virtualizer.getView(focusedKey);
    $55M73$react.useEffect(()=>{
        if (focusedKey && !focusedView && isFocusWithin.current && document.activeElement !== ref.current) $55M73$reactariautils.focusWithoutScrolling(ref.current);
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
const $aea84f7f089eb7a5$export$89be5a243e59c4b2 = /*#__PURE__*/ ($parcel$interopDefault($55M73$react)).forwardRef($aea84f7f089eb7a5$var$Virtualizer);
function $aea84f7f089eb7a5$var$defaultRenderWrapper(parent, reusableView) {
    return(/*#__PURE__*/ ($parcel$interopDefault($55M73$react)).createElement($d8772f25e0f98a8d$export$6796df8ba7398521, {
        key: reusableView.key,
        reusableView: reusableView,
        parent: parent
    }));
}






$parcel$exportWildcard(module.exports, $aea84f7f089eb7a5$exports);
$parcel$exportWildcard(module.exports, $f717a8199f2123af$exports);
$parcel$exportWildcard(module.exports, $d8772f25e0f98a8d$exports);
$parcel$exportWildcard(module.exports, $3e3c2bf282fde6af$exports);
$parcel$exportWildcard(module.exports, $8b6aaa6593623080$exports);


//# sourceMappingURL=main.js.map