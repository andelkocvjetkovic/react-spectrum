import $EZ6ZY$react, {useRef as $EZ6ZY$useRef, useState as $EZ6ZY$useState, useEffect as $EZ6ZY$useEffect, useCallback as $EZ6ZY$useCallback} from "react";
import {useSSRSafeId as $EZ6ZY$useSSRSafeId} from "@react-aria/ssr";
import $EZ6ZY$clsx from "clsx";
import {clamp as $3a5bbd9131622933$re_export$clamp, snapValueToStep as $3a5bbd9131622933$re_export$snapValueToStep} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3a797ad061655431$exports = {};

$parcel$export($3a797ad061655431$exports, "useId", () => $3a797ad061655431$export$f680877a34711e37);
$parcel$export($3a797ad061655431$exports, "mergeIds", () => $3a797ad061655431$export$cd8c9cb68f842629);
$parcel$export($3a797ad061655431$exports, "useSlotId", () => $3a797ad061655431$export$b4cc09c592e8fdb8);

var $80b0855c1bb3a0c4$exports = {};

$parcel$export($80b0855c1bb3a0c4$exports, "useLayoutEffect", () => $80b0855c1bb3a0c4$export$e5c5a5f917a5871c);

const $80b0855c1bb3a0c4$export$e5c5a5f917a5871c = typeof window !== 'undefined' ? $EZ6ZY$react.useLayoutEffect : ()=>{
};




let $3a797ad061655431$var$idsUpdaterMap = new Map();
function $3a797ad061655431$export$f680877a34711e37(defaultId) {
    let isRendering = $EZ6ZY$useRef(true);
    isRendering.current = true;
    let [value, setValue] = $EZ6ZY$useState(defaultId);
    let nextId = $EZ6ZY$useRef(null);
    let res = $EZ6ZY$useSSRSafeId(value);
    // don't memo this, we want it new each render so that the Effects always run
    let updateValue = (val)=>{
        if (!isRendering.current) setValue(val);
        else nextId.current = val;
    };
    $3a797ad061655431$var$idsUpdaterMap.set(res, updateValue);
    $80b0855c1bb3a0c4$export$e5c5a5f917a5871c(()=>{
        isRendering.current = false;
    }, [
        updateValue
    ]);
    $80b0855c1bb3a0c4$export$e5c5a5f917a5871c(()=>{
        let r = res;
        return ()=>{
            $3a797ad061655431$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    $EZ6ZY$useEffect(()=>{
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
function $3a797ad061655431$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $3a797ad061655431$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $3a797ad061655431$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $3a797ad061655431$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $3a797ad061655431$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = $ba2c735a38a84efd$export$14d238f342723f25(id);
    let updateId = $EZ6ZY$useCallback(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : null;
        });
    }, [
        id,
        setResolvedId
    ]);
    $80b0855c1bb3a0c4$export$e5c5a5f917a5871c(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


var $0307505178b1835b$exports = {};

$parcel$export($0307505178b1835b$exports, "chain", () => $0307505178b1835b$export$e08e3b67e392101e);
function $0307505178b1835b$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}


var $794793fbf687b92f$exports = {};

$parcel$export($794793fbf687b92f$exports, "mergeProps", () => $794793fbf687b92f$export$9d1611c77c2fe928);



function $794793fbf687b92f$export$9d1611c77c2fe928(...args) {
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
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = $0307505178b1835b$export$e08e3b67e392101e(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = $EZ6ZY$clsx(a, b);
            else if (key === 'id' && a && b) result.id = $3a797ad061655431$export$cd8c9cb68f842629(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


var $8a66f9701a9f6bb5$exports = {};

$parcel$export($8a66f9701a9f6bb5$exports, "filterDOMProps", () => $8a66f9701a9f6bb5$export$457c3d6518dd4c6f);
const $8a66f9701a9f6bb5$var$DOMPropNames = new Set([
    'id'
]);
const $8a66f9701a9f6bb5$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
const $8a66f9701a9f6bb5$var$propRe = /^(data-.*)$/;
function $8a66f9701a9f6bb5$export$457c3d6518dd4c6f(props, opts = {
}) {
    let { labelable: labelable , propNames: propNames  } = opts;
    let filteredProps = {
    };
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($8a66f9701a9f6bb5$var$DOMPropNames.has(prop) || labelable && $8a66f9701a9f6bb5$var$labelablePropNames.has(prop) || propNames?.has(prop) || $8a66f9701a9f6bb5$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


var $406297b8384fb89d$exports = {};

$parcel$export($406297b8384fb89d$exports, "focusWithoutScrolling", () => $406297b8384fb89d$export$de79e2c695e052f3);
function $406297b8384fb89d$export$de79e2c695e052f3(element) {
    if ($406297b8384fb89d$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $406297b8384fb89d$var$getScrollableElements(element);
        element.focus();
        $406297b8384fb89d$var$restoreScrollPosition(scrollableElements);
    }
}
let $406297b8384fb89d$var$supportsPreventScrollCached = null;
function $406297b8384fb89d$var$supportsPreventScroll() {
    if ($406297b8384fb89d$var$supportsPreventScrollCached == null) {
        $406297b8384fb89d$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $406297b8384fb89d$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $406297b8384fb89d$var$supportsPreventScrollCached;
}
function $406297b8384fb89d$var$getScrollableElements(element) {
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
function $406297b8384fb89d$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element , scrollTop: scrollTop , scrollLeft: scrollLeft  } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


var $2c4bc8a0b9dd5d9d$exports = {};

$parcel$export($2c4bc8a0b9dd5d9d$exports, "getOffset", () => $2c4bc8a0b9dd5d9d$export$622cea445a1c5b7d);
function $2c4bc8a0b9dd5d9d$export$622cea445a1c5b7d(element, reverse, orientation = 'horizontal') {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === 'horizontal' ? rect.right : rect.bottom;
    return orientation === 'horizontal' ? rect.left : rect.top;
}


var $3a5bbd9131622933$exports = {};

$parcel$export($3a5bbd9131622933$exports, "clamp", () => $3a5bbd9131622933$re_export$clamp);
$parcel$export($3a5bbd9131622933$exports, "snapValueToStep", () => $3a5bbd9131622933$re_export$snapValueToStep);



var $42f27c4f2c4ca8de$exports = {};

$parcel$export($42f27c4f2c4ca8de$exports, "runAfterTransition", () => $42f27c4f2c4ca8de$export$24490316f764c430);
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
let $42f27c4f2c4ca8de$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $42f27c4f2c4ca8de$var$transitionCallbacks = new Set();
function $42f27c4f2c4ca8de$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $42f27c4f2c4ca8de$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $42f27c4f2c4ca8de$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $42f27c4f2c4ca8de$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $42f27c4f2c4ca8de$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($42f27c4f2c4ca8de$var$transitionsByElement.size === 0) {
            for (let cb of $42f27c4f2c4ca8de$var$transitionCallbacks)cb();
            $42f27c4f2c4ca8de$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $42f27c4f2c4ca8de$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $42f27c4f2c4ca8de$var$setupGlobalEvents);
}
function $42f27c4f2c4ca8de$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($42f27c4f2c4ca8de$var$transitionsByElement.size === 0) fn();
        else $42f27c4f2c4ca8de$var$transitionCallbacks.add(fn);
    });
}


var $3cb10baaaedb30ef$exports = {};

$parcel$export($3cb10baaaedb30ef$exports, "useDrag1D", () => $3cb10baaaedb30ef$export$7bbed75feba39706);


// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $3cb10baaaedb30ef$var$draggingElements = [];
function $3cb10baaaedb30ef$export$7bbed75feba39706(props) {
    console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
    let { containerRef: containerRef , reverse: reverse , orientation: orientation , onHover: onHover , onDrag: onDrag , onPositionChange: onPositionChange , onIncrement: onIncrement , onDecrement: onDecrement , onIncrementToMax: onIncrementToMax , onDecrementToMin: onDecrementToMin , onCollapseToggle: onCollapseToggle  } = props;
    let getPosition = (e)=>orientation === 'horizontal' ? e.clientX : e.clientY
    ;
    let getNextOffset = (e)=>{
        let containerOffset = $2c4bc8a0b9dd5d9d$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = $EZ6ZY$useRef(false);
    let prevPosition = $EZ6ZY$useRef(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = $EZ6ZY$useRef({
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
        $3cb10baaaedb30ef$var$draggingElements.splice($3cb10baaaedb30ef$var$draggingElements.indexOf(target), 1);
        window.removeEventListener('mouseup', onMouseUp, false);
        window.removeEventListener('mousemove', onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($3cb10baaaedb30ef$var$draggingElements.some((elt)=>target.contains(elt)
        )) return;
        $3cb10baaaedb30ef$var$draggingElements.push(target);
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


var $bb77c2ee8a23c3d4$exports = {};

$parcel$export($bb77c2ee8a23c3d4$exports, "useGlobalListeners", () => $bb77c2ee8a23c3d4$export$4eaf04e54aa8eed6);

function $bb77c2ee8a23c3d4$export$4eaf04e54aa8eed6() {
    let globalListeners = $EZ6ZY$useRef(new Map());
    let addGlobalListener = $EZ6ZY$useCallback((eventTarget, type, listener, options)=>{
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
    let removeGlobalListener = $EZ6ZY$useCallback((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = $EZ6ZY$useCallback(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    $EZ6ZY$useEffect(()=>{
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


var $f134fb3e50eb7b6e$exports = {};

$parcel$export($f134fb3e50eb7b6e$exports, "useLabels", () => $f134fb3e50eb7b6e$export$d6875122194c7b44);

function $f134fb3e50eb7b6e$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id , 'aria-label': label , 'aria-labelledby': labelledBy  } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = $3a797ad061655431$export$f680877a34711e37(id);
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


var $2783b0183f645860$exports = {};

$parcel$export($2783b0183f645860$exports, "useObjectRef", () => $2783b0183f645860$export$4338b53315abf666);


function $2783b0183f645860$export$4338b53315abf666(forwardedRef) {
    const objRef = $EZ6ZY$useRef();
    /**
   * We're using `useLayoutEffect` here instead of `useEffect` because we want
   * to make sure that the `ref` value is up to date before other places in the
   * the execution cycle try to read it.
   */ $80b0855c1bb3a0c4$export$e5c5a5f917a5871c(()=>{
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') forwardedRef(objRef.current);
        else forwardedRef.current = objRef.current;
    }, [
        forwardedRef
    ]);
    return objRef;
}


var $ec3954972f37b849$exports = {};

$parcel$export($ec3954972f37b849$exports, "useUpdateEffect", () => $ec3954972f37b849$export$496315a1608d9602);

function $ec3954972f37b849$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = $EZ6ZY$useRef(true);
    $EZ6ZY$useEffect(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



var $3d82ff8fc4708dd3$exports = {};

$parcel$export($3d82ff8fc4708dd3$exports, "useResizeObserver", () => $3d82ff8fc4708dd3$export$683480f191c0e3ea);

function $3d82ff8fc4708dd3$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $3d82ff8fc4708dd3$export$683480f191c0e3ea(options) {
    const { ref: ref , onResize: onResize  } = options;
    $EZ6ZY$useEffect(()=>{
        let element = ref?.current;
        if (!element) return;
        if (!$3d82ff8fc4708dd3$var$hasResizeObserver()) {
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


var $460119539dadceb8$exports = {};

$parcel$export($460119539dadceb8$exports, "useSyncRef", () => $460119539dadceb8$export$4debdb1a3f0fa79e);

function $460119539dadceb8$export$4debdb1a3f0fa79e(context, ref) {
    $80b0855c1bb3a0c4$export$e5c5a5f917a5871c(()=>{
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


var $ce14aa1ef9619970$exports = {};

$parcel$export($ce14aa1ef9619970$exports, "getScrollParent", () => $ce14aa1ef9619970$export$cfa2225e87938781);
function $ce14aa1ef9619970$export$cfa2225e87938781(node) {
    while(node && !$ce14aa1ef9619970$var$isScrollable(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $ce14aa1ef9619970$var$isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


var $b98715ad7625a1ca$exports = {};

$parcel$export($b98715ad7625a1ca$exports, "useViewportSize", () => $b98715ad7625a1ca$export$d699905dd57c73ca);

// @ts-ignore
let $b98715ad7625a1ca$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $b98715ad7625a1ca$export$d699905dd57c73ca() {
    let [size1, setSize] = $EZ6ZY$useState(()=>$b98715ad7625a1ca$var$getViewportSize()
    );
    $EZ6ZY$useEffect(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $b98715ad7625a1ca$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$b98715ad7625a1ca$var$visualViewport) window.addEventListener('resize', onResize);
        else $b98715ad7625a1ca$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            if (!$b98715ad7625a1ca$var$visualViewport) window.removeEventListener('resize', onResize);
            else $b98715ad7625a1ca$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size1;
}
function $b98715ad7625a1ca$var$getViewportSize() {
    return {
        width: $b98715ad7625a1ca$var$visualViewport?.width || window.innerWidth,
        height: $b98715ad7625a1ca$var$visualViewport?.height || window.innerHeight
    };
}


var $df782429a4b9ce9a$exports = {};

$parcel$export($df782429a4b9ce9a$exports, "useDescription", () => $df782429a4b9ce9a$export$f8aeda7b10753fa1);


let $df782429a4b9ce9a$var$descriptionId = 0;
const $df782429a4b9ce9a$var$descriptionNodes = new Map();
function $df782429a4b9ce9a$export$f8aeda7b10753fa1(description) {
    let [id1, setId] = $EZ6ZY$useState(null);
    $80b0855c1bb3a0c4$export$e5c5a5f917a5871c(()=>{
        if (!description) return;
        let desc = $df782429a4b9ce9a$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$df782429a4b9ce9a$var$descriptionId++}`;
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
            $df782429a4b9ce9a$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $df782429a4b9ce9a$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id1 : undefined
    };
}


var $713ad23d138f8d01$exports = {};

$parcel$export($713ad23d138f8d01$exports, "isMac", () => $713ad23d138f8d01$export$9ac100e40613ea10);
$parcel$export($713ad23d138f8d01$exports, "isIPhone", () => $713ad23d138f8d01$export$186c6964ca17d99);
$parcel$export($713ad23d138f8d01$exports, "isIPad", () => $713ad23d138f8d01$export$7bef049ce92e4224);
$parcel$export($713ad23d138f8d01$exports, "isIOS", () => $713ad23d138f8d01$export$fedb369cb70207f1);
$parcel$export($713ad23d138f8d01$exports, "isAppleDevice", () => $713ad23d138f8d01$export$e1865c3bedcd822b);
$parcel$export($713ad23d138f8d01$exports, "isWebKit", () => $713ad23d138f8d01$export$78551043582a6a98);
$parcel$export($713ad23d138f8d01$exports, "isChrome", () => $713ad23d138f8d01$export$6446a186d09e379e);
$parcel$export($713ad23d138f8d01$exports, "isAndroid", () => $713ad23d138f8d01$export$a11b0059900ceec8);
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
 */ function $713ad23d138f8d01$var$testUserAgent(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.userAgent) : false;
}
function $713ad23d138f8d01$var$testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : false;
}
function $713ad23d138f8d01$export$9ac100e40613ea10() {
    return $713ad23d138f8d01$var$testPlatform(/^Mac/);
}
function $713ad23d138f8d01$export$186c6964ca17d99() {
    return $713ad23d138f8d01$var$testPlatform(/^iPhone/);
}
function $713ad23d138f8d01$export$7bef049ce92e4224() {
    return $713ad23d138f8d01$var$testPlatform(/^iPad/) || $713ad23d138f8d01$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $713ad23d138f8d01$export$fedb369cb70207f1() {
    return $713ad23d138f8d01$export$186c6964ca17d99() || $713ad23d138f8d01$export$7bef049ce92e4224();
}
function $713ad23d138f8d01$export$e1865c3bedcd822b() {
    return $713ad23d138f8d01$export$9ac100e40613ea10() || $713ad23d138f8d01$export$fedb369cb70207f1();
}
function $713ad23d138f8d01$export$78551043582a6a98() {
    return $713ad23d138f8d01$var$testUserAgent(/AppleWebKit/) && !$713ad23d138f8d01$export$6446a186d09e379e();
}
function $713ad23d138f8d01$export$6446a186d09e379e() {
    return $713ad23d138f8d01$var$testUserAgent(/Chrome/);
}
function $713ad23d138f8d01$export$a11b0059900ceec8() {
    return $713ad23d138f8d01$var$testUserAgent(/Android/);
}


var $1a53fe6d6f07216d$exports = {};

$parcel$export($1a53fe6d6f07216d$exports, "useEvent", () => $1a53fe6d6f07216d$export$90fc3a17d93f704c);

function $1a53fe6d6f07216d$export$90fc3a17d93f704c(ref, event, handler1, options) {
    let handlerRef = $EZ6ZY$useRef(handler1);
    handlerRef.current = handler1;
    let isDisabled = handler1 == null;
    $EZ6ZY$useEffect(()=>{
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


var $ba2c735a38a84efd$exports = {};

$parcel$export($ba2c735a38a84efd$exports, "useValueEffect", () => $ba2c735a38a84efd$export$14d238f342723f25);


function $ba2c735a38a84efd$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = $EZ6ZY$useState(defaultValue);
    let valueRef = $EZ6ZY$useRef(value);
    let effect = $EZ6ZY$useRef(null);
    valueRef.current = value;
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = $EZ6ZY$useRef(null);
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
    $80b0855c1bb3a0c4$export$e5c5a5f917a5871c(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = $EZ6ZY$useCallback((fn)=>{
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


var $c81c8d529cf4c804$exports = {};

$parcel$export($c81c8d529cf4c804$exports, "scrollIntoView", () => $c81c8d529cf4c804$export$53a0910f038337bd);
function $c81c8d529cf4c804$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $c81c8d529cf4c804$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $c81c8d529cf4c804$var$relativeOffset(scrollView, element, 'top');
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
 */ function $c81c8d529cf4c804$var$relativeOffset(ancestor, child, axis) {
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




export {$3a797ad061655431$export$f680877a34711e37 as useId, $3a797ad061655431$export$cd8c9cb68f842629 as mergeIds, $3a797ad061655431$export$b4cc09c592e8fdb8 as useSlotId, $0307505178b1835b$export$e08e3b67e392101e as chain, $794793fbf687b92f$export$9d1611c77c2fe928 as mergeProps, $8a66f9701a9f6bb5$export$457c3d6518dd4c6f as filterDOMProps, $406297b8384fb89d$export$de79e2c695e052f3 as focusWithoutScrolling, $2c4bc8a0b9dd5d9d$export$622cea445a1c5b7d as getOffset, $3a5bbd9131622933$re_export$clamp as clamp, $3a5bbd9131622933$re_export$snapValueToStep as snapValueToStep, $42f27c4f2c4ca8de$export$24490316f764c430 as runAfterTransition, $3cb10baaaedb30ef$export$7bbed75feba39706 as useDrag1D, $bb77c2ee8a23c3d4$export$4eaf04e54aa8eed6 as useGlobalListeners, $f134fb3e50eb7b6e$export$d6875122194c7b44 as useLabels, $2783b0183f645860$export$4338b53315abf666 as useObjectRef, $ec3954972f37b849$export$496315a1608d9602 as useUpdateEffect, $80b0855c1bb3a0c4$export$e5c5a5f917a5871c as useLayoutEffect, $3d82ff8fc4708dd3$export$683480f191c0e3ea as useResizeObserver, $460119539dadceb8$export$4debdb1a3f0fa79e as useSyncRef, $ce14aa1ef9619970$export$cfa2225e87938781 as getScrollParent, $b98715ad7625a1ca$export$d699905dd57c73ca as useViewportSize, $df782429a4b9ce9a$export$f8aeda7b10753fa1 as useDescription, $713ad23d138f8d01$export$9ac100e40613ea10 as isMac, $713ad23d138f8d01$export$186c6964ca17d99 as isIPhone, $713ad23d138f8d01$export$7bef049ce92e4224 as isIPad, $713ad23d138f8d01$export$fedb369cb70207f1 as isIOS, $713ad23d138f8d01$export$e1865c3bedcd822b as isAppleDevice, $713ad23d138f8d01$export$78551043582a6a98 as isWebKit, $713ad23d138f8d01$export$6446a186d09e379e as isChrome, $713ad23d138f8d01$export$a11b0059900ceec8 as isAndroid, $1a53fe6d6f07216d$export$90fc3a17d93f704c as useEvent, $ba2c735a38a84efd$export$14d238f342723f25 as useValueEffect, $c81c8d529cf4c804$export$53a0910f038337bd as scrollIntoView};
//# sourceMappingURL=module.js.map
