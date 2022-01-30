var $111Zb$react = require("react");
var $111Zb$reactariassr = require("@react-aria/ssr");
var $111Zb$clsx = require("clsx");
var $111Zb$reactstatelyutils = require("@react-stately/utils");

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
var $0fc97e62da1093aa$exports = {};

$parcel$export($0fc97e62da1093aa$exports, "useId", () => $0fc97e62da1093aa$export$f680877a34711e37);
$parcel$export($0fc97e62da1093aa$exports, "mergeIds", () => $0fc97e62da1093aa$export$cd8c9cb68f842629);
$parcel$export($0fc97e62da1093aa$exports, "useSlotId", () => $0fc97e62da1093aa$export$b4cc09c592e8fdb8);

var $107e0d8ec7658329$exports = {};

$parcel$export($107e0d8ec7658329$exports, "useLayoutEffect", () => $107e0d8ec7658329$export$e5c5a5f917a5871c);

const $107e0d8ec7658329$export$e5c5a5f917a5871c = typeof window !== 'undefined' ? ($parcel$interopDefault($111Zb$react)).useLayoutEffect : ()=>{
};




let $0fc97e62da1093aa$var$idsUpdaterMap = new Map();
function $0fc97e62da1093aa$export$f680877a34711e37(defaultId) {
    let isRendering = $111Zb$react.useRef(true);
    isRendering.current = true;
    let [value, setValue] = $111Zb$react.useState(defaultId);
    let nextId = $111Zb$react.useRef(null);
    let res = $111Zb$reactariassr.useSSRSafeId(value);
    // don't memo this, we want it new each render so that the Effects always run
    let updateValue = (val)=>{
        if (!isRendering.current) setValue(val);
        else nextId.current = val;
    };
    $0fc97e62da1093aa$var$idsUpdaterMap.set(res, updateValue);
    $107e0d8ec7658329$export$e5c5a5f917a5871c(()=>{
        isRendering.current = false;
    }, [
        updateValue
    ]);
    $107e0d8ec7658329$export$e5c5a5f917a5871c(()=>{
        let r = res;
        return ()=>{
            $0fc97e62da1093aa$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    $111Zb$react.useEffect(()=>{
        let newId = nextId.current;
        if (newId) {
            setValue(newId);
            nextId.current = null;
        }
    }, [
        setValue,
        updateValue
    ]);
    return res;
}
function $0fc97e62da1093aa$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $0fc97e62da1093aa$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $0fc97e62da1093aa$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $0fc97e62da1093aa$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $0fc97e62da1093aa$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = $0525e164138089a8$export$14d238f342723f25(id);
    let updateId = $111Zb$react.useCallback(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : null;
        });
    }, [
        id,
        setResolvedId
    ]);
    $107e0d8ec7658329$export$e5c5a5f917a5871c(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


var $ce78a886c61f801a$exports = {};

$parcel$export($ce78a886c61f801a$exports, "chain", () => $ce78a886c61f801a$export$e08e3b67e392101e);
function $ce78a886c61f801a$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}


var $edaa5968fcf9a149$exports = {};

$parcel$export($edaa5968fcf9a149$exports, "mergeProps", () => $edaa5968fcf9a149$export$9d1611c77c2fe928);



function $edaa5968fcf9a149$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = $ce78a886c61f801a$export$e08e3b67e392101e(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = ($parcel$interopDefault($111Zb$clsx))(a, b);
            else if (key === 'id' && a && b) result.id = $0fc97e62da1093aa$export$cd8c9cb68f842629(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


var $3c16d29e970923cf$exports = {};

$parcel$export($3c16d29e970923cf$exports, "filterDOMProps", () => $3c16d29e970923cf$export$457c3d6518dd4c6f);
const $3c16d29e970923cf$var$DOMPropNames = new Set([
    'id'
]);
const $3c16d29e970923cf$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
const $3c16d29e970923cf$var$propRe = /^(data-.*)$/;
function $3c16d29e970923cf$export$457c3d6518dd4c6f(props, opts = {
}) {
    let { labelable: labelable , propNames: propNames  } = opts;
    let filteredProps = {
    };
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($3c16d29e970923cf$var$DOMPropNames.has(prop) || labelable && $3c16d29e970923cf$var$labelablePropNames.has(prop) || propNames?.has(prop) || $3c16d29e970923cf$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


var $46aca68c5edad8d0$exports = {};

$parcel$export($46aca68c5edad8d0$exports, "focusWithoutScrolling", () => $46aca68c5edad8d0$export$de79e2c695e052f3);
function $46aca68c5edad8d0$export$de79e2c695e052f3(element) {
    if ($46aca68c5edad8d0$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $46aca68c5edad8d0$var$getScrollableElements(element);
        element.focus();
        $46aca68c5edad8d0$var$restoreScrollPosition(scrollableElements);
    }
}
let $46aca68c5edad8d0$var$supportsPreventScrollCached = null;
function $46aca68c5edad8d0$var$supportsPreventScroll() {
    if ($46aca68c5edad8d0$var$supportsPreventScrollCached == null) {
        $46aca68c5edad8d0$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $46aca68c5edad8d0$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $46aca68c5edad8d0$var$supportsPreventScrollCached;
}
function $46aca68c5edad8d0$var$getScrollableElements(element) {
    var parent = element.parentNode;
    var scrollableElements = [];
    var rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $46aca68c5edad8d0$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element , scrollTop: scrollTop , scrollLeft: scrollLeft  } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


var $dbe39819f977c738$exports = {};

$parcel$export($dbe39819f977c738$exports, "getOffset", () => $dbe39819f977c738$export$622cea445a1c5b7d);
function $dbe39819f977c738$export$622cea445a1c5b7d(element, reverse, orientation = 'horizontal') {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === 'horizontal' ? rect.right : rect.bottom;
    return orientation === 'horizontal' ? rect.left : rect.top;
}


var $5fa7c58c92fce191$exports = {};

$parcel$export($5fa7c58c92fce191$exports, "clamp", () => $5fa7c58c92fce191$re_export$clamp);
$parcel$export($5fa7c58c92fce191$exports, "snapValueToStep", () => $5fa7c58c92fce191$re_export$snapValueToStep);



var $03849f8fd954b7f4$exports = {};

$parcel$export($03849f8fd954b7f4$exports, "runAfterTransition", () => $03849f8fd954b7f4$export$24490316f764c430);
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
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $03849f8fd954b7f4$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $03849f8fd954b7f4$var$transitionCallbacks = new Set();
function $03849f8fd954b7f4$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $03849f8fd954b7f4$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $03849f8fd954b7f4$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $03849f8fd954b7f4$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $03849f8fd954b7f4$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($03849f8fd954b7f4$var$transitionsByElement.size === 0) {
            for (let cb of $03849f8fd954b7f4$var$transitionCallbacks)cb();
            $03849f8fd954b7f4$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $03849f8fd954b7f4$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $03849f8fd954b7f4$var$setupGlobalEvents);
}
function $03849f8fd954b7f4$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($03849f8fd954b7f4$var$transitionsByElement.size === 0) fn();
        else $03849f8fd954b7f4$var$transitionCallbacks.add(fn);
    });
}


var $0555a7e89d11d351$exports = {};

$parcel$export($0555a7e89d11d351$exports, "useDrag1D", () => $0555a7e89d11d351$export$7bbed75feba39706);


// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $0555a7e89d11d351$var$draggingElements = [];
function $0555a7e89d11d351$export$7bbed75feba39706(props) {
    console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
    let { containerRef: containerRef , reverse: reverse , orientation: orientation , onHover: onHover , onDrag: onDrag , onPositionChange: onPositionChange , onIncrement: onIncrement , onDecrement: onDecrement , onIncrementToMax: onIncrementToMax , onDecrementToMin: onDecrementToMin , onCollapseToggle: onCollapseToggle  } = props;
    let getPosition = (e)=>orientation === 'horizontal' ? e.clientX : e.clientY
    ;
    let getNextOffset = (e)=>{
        let containerOffset = $dbe39819f977c738$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = $111Zb$react.useRef(false);
    let prevPosition = $111Zb$react.useRef(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = $111Zb$react.useRef({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $0555a7e89d11d351$var$draggingElements.splice($0555a7e89d11d351$var$draggingElements.indexOf(target), 1);
        window.removeEventListener('mouseup', onMouseUp, false);
        window.removeEventListener('mousemove', onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($0555a7e89d11d351$var$draggingElements.some((elt)=>target.contains(elt)
        )) return;
        $0555a7e89d11d351$var$draggingElements.push(target);
        window.addEventListener('mousemove', onMouseDragged, false);
        window.addEventListener('mouseup', onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Left':
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Up':
            case 'ArrowUp':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Down':
            case 'ArrowDown':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Home':
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case 'End':
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case 'Enter':
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


var $5cd7be5973b96286$exports = {};

$parcel$export($5cd7be5973b96286$exports, "useGlobalListeners", () => $5cd7be5973b96286$export$4eaf04e54aa8eed6);

function $5cd7be5973b96286$export$4eaf04e54aa8eed6() {
    let globalListeners = $111Zb$react.useRef(new Map());
    let addGlobalListener = $111Zb$react.useCallback((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = options?.once ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = $111Zb$react.useCallback((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = $111Zb$react.useCallback(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    $111Zb$react.useEffect(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


var $f1be1157291c82cd$exports = {};

$parcel$export($f1be1157291c82cd$exports, "useLabels", () => $f1be1157291c82cd$export$d6875122194c7b44);

function $f1be1157291c82cd$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id , 'aria-label': label , 'aria-labelledby': labelledBy  } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = $0fc97e62da1093aa$export$f680877a34711e37(id);
    if (labelledBy && label) {
        let ids = new Set([
            ...labelledBy.trim().split(/\s+/),
            id
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}


var $95a0f9a019d3b53a$exports = {};

$parcel$export($95a0f9a019d3b53a$exports, "useObjectRef", () => $95a0f9a019d3b53a$export$4338b53315abf666);


function $95a0f9a019d3b53a$export$4338b53315abf666(forwardedRef) {
    const objRef = $111Zb$react.useRef();
    /**
   * We're using `useLayoutEffect` here instead of `useEffect` because we want
   * to make sure that the `ref` value is up to date before other places in the
   * the execution cycle try to read it.
   */ $107e0d8ec7658329$export$e5c5a5f917a5871c(()=>{
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') forwardedRef(objRef.current);
        else forwardedRef.current = objRef.current;
    }, [
        forwardedRef
    ]);
    return objRef;
}


var $7e4e526c9e36019a$exports = {};

$parcel$export($7e4e526c9e36019a$exports, "useUpdateEffect", () => $7e4e526c9e36019a$export$496315a1608d9602);

function $7e4e526c9e36019a$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = $111Zb$react.useRef(true);
    $111Zb$react.useEffect(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



var $b94d85ba228a819e$exports = {};

$parcel$export($b94d85ba228a819e$exports, "useResizeObserver", () => $b94d85ba228a819e$export$683480f191c0e3ea);

function $b94d85ba228a819e$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $b94d85ba228a819e$export$683480f191c0e3ea(options) {
    const { ref: ref , onResize: onResize  } = options;
    $111Zb$react.useEffect(()=>{
        let element = ref?.current;
        if (!element) return;
        if (!$b94d85ba228a819e$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


var $c4bd45f0d532c742$exports = {};

$parcel$export($c4bd45f0d532c742$exports, "useSyncRef", () => $c4bd45f0d532c742$export$4debdb1a3f0fa79e);

function $c4bd45f0d532c742$export$4debdb1a3f0fa79e(context, ref) {
    $107e0d8ec7658329$export$e5c5a5f917a5871c(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                context.ref.current = null;
            };
        }
    }, [
        context,
        ref
    ]);
}


var $124dfe59afcb0e00$exports = {};

$parcel$export($124dfe59afcb0e00$exports, "getScrollParent", () => $124dfe59afcb0e00$export$cfa2225e87938781);
function $124dfe59afcb0e00$export$cfa2225e87938781(node) {
    while(node && !$124dfe59afcb0e00$var$isScrollable(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $124dfe59afcb0e00$var$isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


var $35b75b40820bee65$exports = {};

$parcel$export($35b75b40820bee65$exports, "useViewportSize", () => $35b75b40820bee65$export$d699905dd57c73ca);

// @ts-ignore
let $35b75b40820bee65$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $35b75b40820bee65$export$d699905dd57c73ca() {
    let [size1, setSize] = $111Zb$react.useState(()=>$35b75b40820bee65$var$getViewportSize()
    );
    $111Zb$react.useEffect(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $35b75b40820bee65$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$35b75b40820bee65$var$visualViewport) window.addEventListener('resize', onResize);
        else $35b75b40820bee65$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            if (!$35b75b40820bee65$var$visualViewport) window.removeEventListener('resize', onResize);
            else $35b75b40820bee65$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size1;
}
function $35b75b40820bee65$var$getViewportSize() {
    return {
        width: $35b75b40820bee65$var$visualViewport?.width || window.innerWidth,
        height: $35b75b40820bee65$var$visualViewport?.height || window.innerHeight
    };
}


var $c21f1d42989fce5a$exports = {};

$parcel$export($c21f1d42989fce5a$exports, "useDescription", () => $c21f1d42989fce5a$export$f8aeda7b10753fa1);


let $c21f1d42989fce5a$var$descriptionId = 0;
const $c21f1d42989fce5a$var$descriptionNodes = new Map();
function $c21f1d42989fce5a$export$f8aeda7b10753fa1(description) {
    let [id1, setId] = $111Zb$react.useState(null);
    $107e0d8ec7658329$export$e5c5a5f917a5871c(()=>{
        if (!description) return;
        let desc = $c21f1d42989fce5a$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$c21f1d42989fce5a$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $c21f1d42989fce5a$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $c21f1d42989fce5a$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id1 : undefined
    };
}


var $f873a2c0e67cd516$exports = {};

$parcel$export($f873a2c0e67cd516$exports, "isMac", () => $f873a2c0e67cd516$export$9ac100e40613ea10);
$parcel$export($f873a2c0e67cd516$exports, "isIPhone", () => $f873a2c0e67cd516$export$186c6964ca17d99);
$parcel$export($f873a2c0e67cd516$exports, "isIPad", () => $f873a2c0e67cd516$export$7bef049ce92e4224);
$parcel$export($f873a2c0e67cd516$exports, "isIOS", () => $f873a2c0e67cd516$export$fedb369cb70207f1);
$parcel$export($f873a2c0e67cd516$exports, "isAppleDevice", () => $f873a2c0e67cd516$export$e1865c3bedcd822b);
$parcel$export($f873a2c0e67cd516$exports, "isWebKit", () => $f873a2c0e67cd516$export$78551043582a6a98);
$parcel$export($f873a2c0e67cd516$exports, "isChrome", () => $f873a2c0e67cd516$export$6446a186d09e379e);
$parcel$export($f873a2c0e67cd516$exports, "isAndroid", () => $f873a2c0e67cd516$export$a11b0059900ceec8);
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
 */ function $f873a2c0e67cd516$var$testUserAgent(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.userAgent) : false;
}
function $f873a2c0e67cd516$var$testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : false;
}
function $f873a2c0e67cd516$export$9ac100e40613ea10() {
    return $f873a2c0e67cd516$var$testPlatform(/^Mac/);
}
function $f873a2c0e67cd516$export$186c6964ca17d99() {
    return $f873a2c0e67cd516$var$testPlatform(/^iPhone/);
}
function $f873a2c0e67cd516$export$7bef049ce92e4224() {
    return $f873a2c0e67cd516$var$testPlatform(/^iPad/) || $f873a2c0e67cd516$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $f873a2c0e67cd516$export$fedb369cb70207f1() {
    return $f873a2c0e67cd516$export$186c6964ca17d99() || $f873a2c0e67cd516$export$7bef049ce92e4224();
}
function $f873a2c0e67cd516$export$e1865c3bedcd822b() {
    return $f873a2c0e67cd516$export$9ac100e40613ea10() || $f873a2c0e67cd516$export$fedb369cb70207f1();
}
function $f873a2c0e67cd516$export$78551043582a6a98() {
    return $f873a2c0e67cd516$var$testUserAgent(/AppleWebKit/) && !$f873a2c0e67cd516$export$6446a186d09e379e();
}
function $f873a2c0e67cd516$export$6446a186d09e379e() {
    return $f873a2c0e67cd516$var$testUserAgent(/Chrome/);
}
function $f873a2c0e67cd516$export$a11b0059900ceec8() {
    return $f873a2c0e67cd516$var$testUserAgent(/Android/);
}


var $b84fe6445c3108ea$exports = {};

$parcel$export($b84fe6445c3108ea$exports, "useEvent", () => $b84fe6445c3108ea$export$90fc3a17d93f704c);

function $b84fe6445c3108ea$export$90fc3a17d93f704c(ref, event, handler1, options) {
    let handlerRef = $111Zb$react.useRef(handler1);
    handlerRef.current = handler1;
    let isDisabled = handler1 == null;
    $111Zb$react.useEffect(()=>{
        if (isDisabled) return;
        let element = ref.current;
        let handler = (e)=>handlerRef.current.call(this, e)
        ;
        element.addEventListener(event, handler, options);
        return ()=>{
            element.removeEventListener(event, handler, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}


var $0525e164138089a8$exports = {};

$parcel$export($0525e164138089a8$exports, "useValueEffect", () => $0525e164138089a8$export$14d238f342723f25);


function $0525e164138089a8$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = $111Zb$react.useState(defaultValue);
    let valueRef = $111Zb$react.useRef(value);
    let effect = $111Zb$react.useRef(null);
    valueRef.current = value;
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = $111Zb$react.useRef(null);
    nextRef.current = ()=>{
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef.current();
        else setValue(newValue.value);
    };
    $107e0d8ec7658329$export$e5c5a5f917a5871c(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = $111Zb$react.useCallback((fn)=>{
        effect.current = fn(valueRef.current);
        nextRef.current();
    }, [
        effect,
        nextRef
    ]);
    return [
        value,
        queue
    ];
}


var $683921f101dbd15c$exports = {};

$parcel$export($683921f101dbd15c$exports, "scrollIntoView", () => $683921f101dbd15c$export$53a0910f038337bd);
function $683921f101dbd15c$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $683921f101dbd15c$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $683921f101dbd15c$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    let maxX = x + scrollView.offsetWidth;
    let maxY = y + scrollView.offsetHeight;
    if (offsetX <= x) x = offsetX;
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= y) y = offsetY;
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $683921f101dbd15c$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}


$parcel$exportWildcard(module.exports, $0fc97e62da1093aa$exports);
$parcel$exportWildcard(module.exports, $ce78a886c61f801a$exports);
$parcel$exportWildcard(module.exports, $edaa5968fcf9a149$exports);
$parcel$exportWildcard(module.exports, $3c16d29e970923cf$exports);
$parcel$exportWildcard(module.exports, $46aca68c5edad8d0$exports);
$parcel$exportWildcard(module.exports, $dbe39819f977c738$exports);
$parcel$exportWildcard(module.exports, $5fa7c58c92fce191$exports);
$parcel$exportWildcard(module.exports, $03849f8fd954b7f4$exports);
$parcel$exportWildcard(module.exports, $0555a7e89d11d351$exports);
$parcel$exportWildcard(module.exports, $5cd7be5973b96286$exports);
$parcel$exportWildcard(module.exports, $f1be1157291c82cd$exports);
$parcel$exportWildcard(module.exports, $95a0f9a019d3b53a$exports);
$parcel$exportWildcard(module.exports, $7e4e526c9e36019a$exports);
$parcel$exportWildcard(module.exports, $107e0d8ec7658329$exports);
$parcel$exportWildcard(module.exports, $b94d85ba228a819e$exports);
$parcel$exportWildcard(module.exports, $c4bd45f0d532c742$exports);
$parcel$exportWildcard(module.exports, $124dfe59afcb0e00$exports);
$parcel$exportWildcard(module.exports, $35b75b40820bee65$exports);
$parcel$exportWildcard(module.exports, $c21f1d42989fce5a$exports);
$parcel$exportWildcard(module.exports, $f873a2c0e67cd516$exports);
$parcel$exportWildcard(module.exports, $b84fe6445c3108ea$exports);
$parcel$exportWildcard(module.exports, $0525e164138089a8$exports);
$parcel$exportWildcard(module.exports, $683921f101dbd15c$exports);


//# sourceMappingURL=main.js.map
