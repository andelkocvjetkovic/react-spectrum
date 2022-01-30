import {mergeProps as $grINW$mergeProps, useSyncRef as $grINW$useSyncRef, useGlobalListeners as $grINW$useGlobalListeners, focusWithoutScrolling as $grINW$focusWithoutScrolling, isIOS as $grINW$isIOS, runAfterTransition as $grINW$runAfterTransition, isMac as $grINW$isMac, useEvent as $grINW$useEvent, useDescription as $grINW$useDescription} from "@react-aria/utils";
import $grINW$react, {useRef as $grINW$useRef, useContext as $grINW$useContext, useState as $grINW$useState, useMemo as $grINW$useMemo, useEffect as $grINW$useEffect, useCallback as $grINW$useCallback} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $628981a0dd199ba9$exports = {};

$parcel$export($628981a0dd199ba9$exports, "Pressable", () => $628981a0dd199ba9$export$27c701ed9e449e99);

var $3417b7efea171556$exports = {};

$parcel$export($3417b7efea171556$exports, "usePress", () => $3417b7efea171556$export$45712eceda6fad21);

// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $7b6bfc1eb3e08758$var$state = 'default';
let $7b6bfc1eb3e08758$var$savedUserSelect = '';
let $7b6bfc1eb3e08758$var$modifiedElementMap = new WeakMap();
function $7b6bfc1eb3e08758$export$16a4697467175487(target) {
    if ($grINW$isIOS()) {
        if ($7b6bfc1eb3e08758$var$state === 'default') {
            $7b6bfc1eb3e08758$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
            document.documentElement.style.webkitUserSelect = 'none';
        }
        $7b6bfc1eb3e08758$var$state = 'disabled';
    } else if (target) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $7b6bfc1eb3e08758$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = 'none';
    }
}
function $7b6bfc1eb3e08758$export$b0d6fa1ab32e3295(target) {
    if ($grINW$isIOS()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($7b6bfc1eb3e08758$var$state !== 'disabled') return;
        $7b6bfc1eb3e08758$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            $grINW$runAfterTransition(()=>{
                // Avoid race conditions
                if ($7b6bfc1eb3e08758$var$state === 'restoring') {
                    if (document.documentElement.style.webkitUserSelect === 'none') document.documentElement.style.webkitUserSelect = $7b6bfc1eb3e08758$var$savedUserSelect || '';
                    $7b6bfc1eb3e08758$var$savedUserSelect = '';
                    $7b6bfc1eb3e08758$var$state = 'default';
                }
            });
        }, 300);
    } else // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    if (target && $7b6bfc1eb3e08758$var$modifiedElementMap.has(target)) {
        let targetOldUserSelect = $7b6bfc1eb3e08758$var$modifiedElementMap.get(target);
        if (target.style.userSelect === 'none') target.style.userSelect = targetOldUserSelect;
        if (target.getAttribute('style') === '') target.removeAttribute('style');
        $7b6bfc1eb3e08758$var$modifiedElementMap.delete(target);
    }
}




function $b8344630cd97180e$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    return event.detail === 0 && !event.pointerType;
}



const $5116ac20d989e6fb$export$5165eccb35aaadb5 = $grINW$react.createContext(null);
$5116ac20d989e6fb$export$5165eccb35aaadb5.displayName = 'PressResponderContext';


function $3417b7efea171556$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = $grINW$useContext($5116ac20d989e6fb$export$5165eccb35aaadb5);
    if (context) {
        let { register: register , ...contextProps } = context;
        props = $grINW$mergeProps(contextProps, props);
        register();
    }
    $grINW$useSyncRef(context, props.ref);
    return props;
}
function $3417b7efea171556$export$45712eceda6fad21(props) {
    let { onPress: onPress1 , onPressChange: onPressChange1 , onPressStart: onPressStart1 , onPressEnd: onPressEnd1 , onPressUp: onPressUp1 , isDisabled: isDisabled1 , isPressed: isPressedProp , preventFocusOnPress: preventFocusOnPress , shouldCancelOnPointerExit: shouldCancelOnPointerExit , allowTextSelectionOnPress: allowTextSelectionOnPress , // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _ , ...domProps } = $3417b7efea171556$var$usePressResponderContext(props);
    let propsRef = $grINW$useRef(null);
    propsRef.current = {
        onPress: onPress1,
        onPressChange: onPressChange1,
        onPressStart: onPressStart1,
        onPressEnd: onPressEnd1,
        onPressUp: onPressUp1,
        isDisabled: isDisabled1,
        shouldCancelOnPointerExit: shouldCancelOnPointerExit
    };
    let [isPressed, setPressed] = $grINW$useState(false);
    let ref = $grINW$useRef({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        ignoreClickAfterPress: false,
        didFirePressStart: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null
    });
    let { addGlobalListener: addGlobalListener , removeAllGlobalListeners: removeAllGlobalListeners  } = $grINW$useGlobalListeners();
    let pressProps1 = $grINW$useMemo(()=>{
        let state = ref.current;
        let triggerPressStart = (originalEvent, pointerType)=>{
            let { onPressStart: onPressStart , onPressChange: onPressChange , isDisabled: isDisabled  } = propsRef.current;
            if (isDisabled || state.didFirePressStart) return;
            if (onPressStart) onPressStart({
                type: 'pressstart',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
            if (onPressChange) onPressChange(true);
            state.didFirePressStart = true;
            setPressed(true);
        };
        let triggerPressEnd = (originalEvent, pointerType, wasPressed = true)=>{
            let { onPressEnd: onPressEnd , onPressChange: onPressChange , onPress: onPress , isDisabled: isDisabled  } = propsRef.current;
            if (!state.didFirePressStart) return;
            state.ignoreClickAfterPress = true;
            state.didFirePressStart = false;
            if (onPressEnd) onPressEnd({
                type: 'pressend',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
            if (onPressChange) onPressChange(false);
            setPressed(false);
            if (onPress && wasPressed && !isDisabled) onPress({
                type: 'press',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let triggerPressUp = (originalEvent, pointerType)=>{
            let { onPressUp: onPressUp , isDisabled: isDisabled  } = propsRef.current;
            if (isDisabled) return;
            if (onPressUp) onPressUp({
                type: 'pressup',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let cancel = (e)=>{
            if (state.isPressed) {
                if (state.isOverTarget) triggerPressEnd($3417b7efea171556$var$createEvent(state.target, e), state.pointerType, false);
                state.isPressed = false;
                state.isOverTarget = false;
                state.activePointerId = null;
                state.pointerType = null;
                removeAllGlobalListeners();
                if (!allowTextSelectionOnPress) $7b6bfc1eb3e08758$export$b0d6fa1ab32e3295(state.target);
            }
        };
        let pressProps = {
            onKeyDown (e) {
                if ($3417b7efea171556$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
                    if ($3417b7efea171556$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
                    e.stopPropagation();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        triggerPressStart(e, 'keyboard');
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred.
                        addGlobalListener(document, 'keyup', onKeyUp, false);
                    }
                }
            },
            onKeyUp (e) {
                if ($3417b7efea171556$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target)) triggerPressUp($3417b7efea171556$var$createEvent(state.target, e), 'keyboard');
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0) {
                    e.stopPropagation();
                    if (isDisabled1) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === 'virtual' || $b8344630cd97180e$export$60278871457622de(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled1 && !preventFocusOnPress) $grINW$focusWithoutScrolling(e.currentTarget);
                        triggerPressStart(e, 'virtual');
                        triggerPressUp(e, 'virtual');
                        triggerPressEnd(e, 'virtual');
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && $3417b7efea171556$var$isValidKeyboardEvent(e)) {
                if ($3417b7efea171556$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
                e.stopPropagation();
                state.isPressed = false;
                let target = e.target;
                triggerPressEnd($3417b7efea171556$var$createEvent(state.target, e), 'keyboard', state.target.contains(target));
                removeAllGlobalListeners();
                // If the target is a link, trigger the click method to open the URL,
                // but defer triggering pressEnd until onClick event handler.
                if (state.target.contains(target) && $3417b7efea171556$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') state.target.click();
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ($3417b7efea171556$var$isVirtualPointerEvent(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($3417b7efea171556$var$shouldPreventDefault(e.target)) e.preventDefault();
                state.pointerType = e.pointerType;
                e.stopPropagation();
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled1 && !preventFocusOnPress) $grINW$focusWithoutScrolling(e.currentTarget);
                    if (!allowTextSelectionOnPress) $7b6bfc1eb3e08758$export$16a4697467175487(state.target);
                    triggerPressStart(e, state.pointerType);
                    addGlobalListener(document, 'pointermove', onPointerMove, false);
                    addGlobalListener(document, 'pointerup', onPointerUp, false);
                    addGlobalListener(document, 'pointercancel', onPointerCancel, false);
                }
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($3417b7efea171556$var$shouldPreventDefault(e.target)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === 'virtual') return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $3417b7efea171556$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if ($3417b7efea171556$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart($3417b7efea171556$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd($3417b7efea171556$var$createEvent(state.target, e), state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
                    if ($3417b7efea171556$var$isOverTarget(e, state.target)) triggerPressEnd($3417b7efea171556$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget) triggerPressEnd($3417b7efea171556$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) $7b6bfc1eb3e08758$export$b0d6fa1ab32e3295(state.target);
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($3417b7efea171556$var$shouldPreventDefault(e.target)) e.preventDefault();
                e.stopPropagation();
                if (state.ignoreEmulatedMouseEvents) return;
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = $b8344630cd97180e$export$60278871457622de(e.nativeEvent) ? 'virtual' : 'mouse';
                if (!isDisabled1 && !preventFocusOnPress) $grINW$focusWithoutScrolling(e.currentTarget);
                triggerPressStart(e, state.pointerType);
                addGlobalListener(document, 'mouseup', onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = true;
                    triggerPressStart(e, state.pointerType);
                }
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = false;
                    triggerPressEnd(e, state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType);
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if ($3417b7efea171556$var$isOverTarget(e, state.target)) triggerPressEnd($3417b7efea171556$var$createEvent(state.target, e), state.pointerType);
                else if (state.isOverTarget) triggerPressEnd($3417b7efea171556$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                let touch = $3417b7efea171556$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = 'touch';
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled1 && !preventFocusOnPress) $grINW$focusWithoutScrolling(e.currentTarget);
                if (!allowTextSelectionOnPress) $7b6bfc1eb3e08758$export$16a4697467175487(state.target);
                triggerPressStart(e, state.pointerType);
                addGlobalListener(window, 'scroll', onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (!state.isPressed) return;
                let touch = $3417b7efea171556$var$getTouchById(e.nativeEvent, state.activePointerId);
                if (touch && $3417b7efea171556$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart(e, state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd(e, state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (!state.isPressed) return;
                let touch = $3417b7efea171556$var$getTouchById(e.nativeEvent, state.activePointerId);
                if (touch && $3417b7efea171556$var$isOverTarget(touch, e.currentTarget)) {
                    triggerPressUp(e, state.pointerType);
                    triggerPressEnd(e, state.pointerType);
                } else if (state.isOverTarget) triggerPressEnd(e, state.pointerType, false);
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (!allowTextSelectionOnPress) $7b6bfc1eb3e08758$export$b0d6fa1ab32e3295(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel(e);
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled1,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    // eslint-disable-next-line arrow-body-style
    $grINW$useEffect(()=>{
        return ()=>{
            if (!allowTextSelectionOnPress) $7b6bfc1eb3e08758$export$b0d6fa1ab32e3295(ref.current.target);
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: $grINW$mergeProps(domProps, pressProps1)
    };
}
function $3417b7efea171556$var$isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $3417b7efea171556$var$isValidKeyboardEvent(event) {
    const { key: key , code: code , target: target  } = event;
    const element = target;
    const { tagName: tagName , isContentEditable: isContentEditable  } = element;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && (!$3417b7efea171556$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
    !(role === 'link' && key !== 'Enter');
}
function $3417b7efea171556$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches  } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $3417b7efea171556$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $3417b7efea171556$var$createEvent(target, e) {
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey
    };
}
function $3417b7efea171556$var$getPointClientRect(point) {
    let offsetX = point.width / 2 || point.radiusX || 0;
    let offsetY = point.height / 2 || point.radiusY || 0;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $3417b7efea171556$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $3417b7efea171556$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $3417b7efea171556$var$getPointClientRect(point);
    return $3417b7efea171556$var$areRectanglesOverlapping(rect, pointRect);
}
function $3417b7efea171556$var$shouldPreventDefault(target) {
    // We cannot prevent default if the target is inside a draggable element.
    return !target.closest('[draggable="true"]');
}
function $3417b7efea171556$var$shouldPreventDefaultKeyboard(target) {
    return !((target.tagName === 'INPUT' || target.tagName === 'BUTTON') && target.type === 'submit');
}
function $3417b7efea171556$var$isVirtualPointerEvent(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216
    return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0;
}



const $628981a0dd199ba9$export$27c701ed9e449e99 = /*#__PURE__*/ $grINW$react.forwardRef(({ children: children , ...props }, ref)=>{
    let newRef = $grINW$useRef();
    ref = ref ?? newRef;
    let { pressProps: pressProps  } = $3417b7efea171556$export$45712eceda6fad21({
        ...props,
        ref: ref
    });
    let child = $grINW$react.Children.only(children);
    return(/*#__PURE__*/ $grINW$react.cloneElement(child, // @ts-ignore
    {
        ref: ref,
        ...$grINW$mergeProps(child.props, pressProps)
    }));
});


var $1286bde2571f90a5$exports = {};

$parcel$export($1286bde2571f90a5$exports, "PressResponder", () => $1286bde2571f90a5$export$3351871ee4b288b8);



const $1286bde2571f90a5$export$3351871ee4b288b8 = /*#__PURE__*/ $grINW$react.forwardRef(({ children: children , ...props }, ref)=>{
    let isRegistered = $grINW$useRef(false);
    let prevContext = $grINW$useContext($5116ac20d989e6fb$export$5165eccb35aaadb5);
    let context = $grINW$mergeProps(prevContext || {
    }, {
        ...props,
        ref: ref || prevContext?.ref,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    $grINW$useSyncRef(prevContext, ref);
    $grINW$useEffect(()=>{
        if (!isRegistered.current) console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
    }, []);
    return(/*#__PURE__*/ $grINW$react.createElement($5116ac20d989e6fb$export$5165eccb35aaadb5.Provider, {
        value: context
    }, children));
});


var $096ad3525d103a93$exports = {};

$parcel$export($096ad3525d103a93$exports, "useFocus", () => $096ad3525d103a93$export$f8168d8dd8fd66e6);
function $096ad3525d103a93$export$f8168d8dd8fd66e6(props) {
    if (props.isDisabled) return {
        focusProps: {
        }
    };
    let onFocus, onBlur;
    if (props.onFocus || props.onFocusChange) onFocus = (e)=>{
        if (e.target === e.currentTarget) {
            if (props.onFocus) props.onFocus(e);
            if (props.onFocusChange) props.onFocusChange(true);
        }
    };
    if (props.onBlur || props.onFocusChange) onBlur = (e)=>{
        if (e.target === e.currentTarget) {
            if (props.onBlur) props.onBlur(e);
            if (props.onFocusChange) props.onFocusChange(false);
        }
    };
    return {
        focusProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


var $419d5422f2e15c02$exports = {};

$parcel$export($419d5422f2e15c02$exports, "isFocusVisible", () => $419d5422f2e15c02$export$b9b3dfddab17db27);
$parcel$export($419d5422f2e15c02$exports, "getInteractionModality", () => $419d5422f2e15c02$export$630ff653c5ada6a9);
$parcel$export($419d5422f2e15c02$exports, "setInteractionModality", () => $419d5422f2e15c02$export$8397ddfc504fdb9a);
$parcel$export($419d5422f2e15c02$exports, "useInteractionModality", () => $419d5422f2e15c02$export$98e20ec92f614cfe);
$parcel$export($419d5422f2e15c02$exports, "useFocusVisible", () => $419d5422f2e15c02$export$ffd9e5021c1fb2d6);
$parcel$export($419d5422f2e15c02$exports, "useFocusVisibleListener", () => $419d5422f2e15c02$export$ec71b4b83ac08ec3);



let $419d5422f2e15c02$var$currentModality = null;
let $419d5422f2e15c02$var$changeHandlers = new Set();
let $419d5422f2e15c02$var$hasSetupGlobalListeners = false;
let $419d5422f2e15c02$var$hasEventBeforeFocus = false;
let $419d5422f2e15c02$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $419d5422f2e15c02$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $419d5422f2e15c02$var$triggerChangeHandlers(modality, e) {
    for (let handler of $419d5422f2e15c02$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $419d5422f2e15c02$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !$grINW$isMac() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $419d5422f2e15c02$var$handleKeyboardEvent(e) {
    $419d5422f2e15c02$var$hasEventBeforeFocus = true;
    if ($419d5422f2e15c02$var$isValidKey(e)) {
        $419d5422f2e15c02$var$currentModality = 'keyboard';
        $419d5422f2e15c02$var$triggerChangeHandlers('keyboard', e);
    }
}
function $419d5422f2e15c02$var$handlePointerEvent(e) {
    $419d5422f2e15c02$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $419d5422f2e15c02$var$hasEventBeforeFocus = true;
        $419d5422f2e15c02$var$triggerChangeHandlers('pointer', e);
    }
}
function $419d5422f2e15c02$var$handleClickEvent(e) {
    if ($b8344630cd97180e$export$60278871457622de(e)) {
        $419d5422f2e15c02$var$hasEventBeforeFocus = true;
        $419d5422f2e15c02$var$currentModality = 'virtual';
    }
}
function $419d5422f2e15c02$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$419d5422f2e15c02$var$hasEventBeforeFocus && !$419d5422f2e15c02$var$hasBlurredWindowRecently) {
        $419d5422f2e15c02$var$currentModality = 'virtual';
        $419d5422f2e15c02$var$triggerChangeHandlers('virtual', e);
    }
    $419d5422f2e15c02$var$hasEventBeforeFocus = false;
    $419d5422f2e15c02$var$hasBlurredWindowRecently = false;
}
function $419d5422f2e15c02$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $419d5422f2e15c02$var$hasEventBeforeFocus = false;
    $419d5422f2e15c02$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $419d5422f2e15c02$var$setupGlobalFocusEvents() {
    if (typeof window === 'undefined' || $419d5422f2e15c02$var$hasSetupGlobalListeners) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function() {
        $419d5422f2e15c02$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    document.addEventListener('keydown', $419d5422f2e15c02$var$handleKeyboardEvent, true);
    document.addEventListener('keyup', $419d5422f2e15c02$var$handleKeyboardEvent, true);
    document.addEventListener('click', $419d5422f2e15c02$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    window.addEventListener('focus', $419d5422f2e15c02$var$handleFocusEvent, true);
    window.addEventListener('blur', $419d5422f2e15c02$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        document.addEventListener('pointerdown', $419d5422f2e15c02$var$handlePointerEvent, true);
        document.addEventListener('pointermove', $419d5422f2e15c02$var$handlePointerEvent, true);
        document.addEventListener('pointerup', $419d5422f2e15c02$var$handlePointerEvent, true);
    } else {
        document.addEventListener('mousedown', $419d5422f2e15c02$var$handlePointerEvent, true);
        document.addEventListener('mousemove', $419d5422f2e15c02$var$handlePointerEvent, true);
        document.addEventListener('mouseup', $419d5422f2e15c02$var$handlePointerEvent, true);
    }
    $419d5422f2e15c02$var$hasSetupGlobalListeners = true;
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $419d5422f2e15c02$var$setupGlobalFocusEvents();
    else document.addEventListener('DOMContentLoaded', $419d5422f2e15c02$var$setupGlobalFocusEvents);
}
function $419d5422f2e15c02$export$b9b3dfddab17db27() {
    return $419d5422f2e15c02$var$currentModality !== 'pointer';
}
function $419d5422f2e15c02$export$630ff653c5ada6a9() {
    return $419d5422f2e15c02$var$currentModality;
}
function $419d5422f2e15c02$export$8397ddfc504fdb9a(modality) {
    $419d5422f2e15c02$var$currentModality = modality;
    $419d5422f2e15c02$var$triggerChangeHandlers(modality, null);
}
function $419d5422f2e15c02$export$98e20ec92f614cfe() {
    $419d5422f2e15c02$var$setupGlobalFocusEvents();
    let [modality, setModality] = $grINW$useState($419d5422f2e15c02$var$currentModality);
    $grINW$useEffect(()=>{
        let handler = ()=>{
            setModality($419d5422f2e15c02$var$currentModality);
        };
        $419d5422f2e15c02$var$changeHandlers.add(handler);
        return ()=>{
            $419d5422f2e15c02$var$changeHandlers.delete(handler);
        };
    }, []);
    return modality;
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $419d5422f2e15c02$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    return !(isTextInput && modality === 'keyboard' && e instanceof KeyboardEvent && !$419d5422f2e15c02$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $419d5422f2e15c02$export$ffd9e5021c1fb2d6(props = {
}) {
    let { isTextInput: isTextInput , autoFocus: autoFocus  } = props;
    let [isFocusVisibleState, setFocusVisible] = $grINW$useState(autoFocus || $419d5422f2e15c02$export$b9b3dfddab17db27());
    $419d5422f2e15c02$export$ec71b4b83ac08ec3(($419d5422f2e15c02$export$b9b3dfddab17db27)=>{
        setFocusVisible($419d5422f2e15c02$export$b9b3dfddab17db27);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $419d5422f2e15c02$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $419d5422f2e15c02$var$setupGlobalFocusEvents();
    $grINW$useEffect(()=>{
        let handler = (modality, e)=>{
            if (!$419d5422f2e15c02$var$isKeyboardFocusEvent(opts?.isTextInput, modality, e)) return;
            fn($419d5422f2e15c02$export$b9b3dfddab17db27());
        };
        $419d5422f2e15c02$var$changeHandlers.add(handler);
        return ()=>{
            $419d5422f2e15c02$var$changeHandlers.delete(handler);
        };
    }, deps);
}


var $99449afe3b287dc5$exports = {};

$parcel$export($99449afe3b287dc5$exports, "useFocusWithin", () => $99449afe3b287dc5$export$420e68273165f4ec);

function $99449afe3b287dc5$export$420e68273165f4ec(props) {
    let state = $grINW$useRef({
        isFocusWithin: false
    }).current;
    if (props.isDisabled) return {
        focusWithinProps: {
        }
    };
    let onFocus = (e)=>{
        if (!state.isFocusWithin) {
            if (props.onFocusWithin) props.onFocusWithin(e);
            if (props.onFocusWithinChange) props.onFocusWithinChange(true);
            state.isFocusWithin = true;
        }
    };
    let onBlur = (e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            if (props.onBlurWithin) props.onBlurWithin(e);
            if (props.onFocusWithinChange) props.onFocusWithinChange(false);
            state.isFocusWithin = false;
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


var $10cc5183ec18c2a8$exports = {};

$parcel$export($10cc5183ec18c2a8$exports, "useHover", () => $10cc5183ec18c2a8$export$ae780daf29e6d456);

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $10cc5183ec18c2a8$var$globalIgnoreEmulatedMouseEvents = false;
let $10cc5183ec18c2a8$var$hoverCount = 0;
function $10cc5183ec18c2a8$var$setGlobalIgnoreEmulatedMouseEvents() {
    $10cc5183ec18c2a8$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $10cc5183ec18c2a8$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $10cc5183ec18c2a8$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $10cc5183ec18c2a8$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $10cc5183ec18c2a8$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $10cc5183ec18c2a8$var$handleGlobalPointerEvent);
    else document.addEventListener('touchend', $10cc5183ec18c2a8$var$setGlobalIgnoreEmulatedMouseEvents);
    $10cc5183ec18c2a8$var$hoverCount++;
    return ()=>{
        $10cc5183ec18c2a8$var$hoverCount--;
        if ($10cc5183ec18c2a8$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $10cc5183ec18c2a8$var$handleGlobalPointerEvent);
        else document.removeEventListener('touchend', $10cc5183ec18c2a8$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $10cc5183ec18c2a8$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart , onHoverChange: onHoverChange , onHoverEnd: onHoverEnd , isDisabled: isDisabled  } = props;
    let [isHovered, setHovered] = $grINW$useState(false);
    let state = $grINW$useRef({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    $grINW$useEffect($10cc5183ec18c2a8$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps1 , triggerHoverEnd: triggerHoverEnd1  } = $grINW$useMemo(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {
        };
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($10cc5183ec18c2a8$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$10cc5183ec18c2a8$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    $grINW$useEffect(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd1({
            currentTarget: state.target
        }, state.pointerType);
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps1,
        isHovered: isHovered
    };
}


var $4a9272fc42c708b8$exports = {};

$parcel$export($4a9272fc42c708b8$exports, "useInteractOutside", () => $4a9272fc42c708b8$export$872b660ac5a1ff98);

function $4a9272fc42c708b8$export$872b660ac5a1ff98(props) {
    let { ref: ref , onInteractOutside: onInteractOutside , isDisabled: isDisabled , onInteractOutsideStart: onInteractOutsideStart  } = props;
    let stateRef = $grINW$useRef({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false,
        onInteractOutside: onInteractOutside,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let state = stateRef.current;
    state.onInteractOutside = onInteractOutside;
    state.onInteractOutsideStart = onInteractOutsideStart;
    $grINW$useEffect(()=>{
        if (isDisabled) return;
        let onPointerDown = (e)=>{
            if ($4a9272fc42c708b8$var$isValidEvent(e, ref) && state.onInteractOutside) {
                if (state.onInteractOutsideStart) state.onInteractOutsideStart(e);
                state.isPointerDown = true;
            }
        };
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onPointerUp = (e)=>{
                if (state.isPointerDown && state.onInteractOutside && $4a9272fc42c708b8$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            // changing these to capture phase fixed combobox
            document.addEventListener('pointerdown', onPointerDown, true);
            document.addEventListener('pointerup', onPointerUp, true);
            return ()=>{
                document.removeEventListener('pointerdown', onPointerDown, true);
                document.removeEventListener('pointerup', onPointerUp, true);
            };
        } else {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && state.onInteractOutside && $4a9272fc42c708b8$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.onInteractOutside && state.isPointerDown && $4a9272fc42c708b8$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            document.addEventListener('mousedown', onPointerDown, true);
            document.addEventListener('mouseup', onMouseUp, true);
            document.addEventListener('touchstart', onPointerDown, true);
            document.addEventListener('touchend', onTouchEnd, true);
            return ()=>{
                document.removeEventListener('mousedown', onPointerDown, true);
                document.removeEventListener('mouseup', onMouseUp, true);
                document.removeEventListener('touchstart', onPointerDown, true);
                document.removeEventListener('touchend', onTouchEnd, true);
            };
        }
    }, [
        ref,
        state,
        isDisabled
    ]);
}
function $4a9272fc42c708b8$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    // if the event target is no longer in the document
    if (event.target) {
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
    }
    return ref.current && !ref.current.contains(event.target);
}


var $7220947193666a02$exports = {};

$parcel$export($7220947193666a02$exports, "useKeyboard", () => $7220947193666a02$export$8f71654801c2f7cd);
function $95afe8f16d9b25db$export$48d1ea6320830260(handler) {
    if (!handler) return;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}


function $7220947193666a02$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {
        } : {
            onKeyDown: $95afe8f16d9b25db$export$48d1ea6320830260(props.onKeyDown),
            onKeyUp: $95afe8f16d9b25db$export$48d1ea6320830260(props.onKeyUp)
        }
    };
}


var $8b60118917430993$exports = {};

$parcel$export($8b60118917430993$exports, "useMove", () => $8b60118917430993$export$36da96379f79f245);



function $8b60118917430993$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart , onMove: onMove , onMoveEnd: onMoveEnd  } = props;
    let state = $grINW$useRef({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $grINW$useGlobalListeners();
    let moveProps1 = $grINW$useMemo(()=>{
        let moveProps = {
        };
        let start = ()=>{
            $7b6bfc1eb3e08758$export$16a4697467175487();
            state.current.didMove = false;
        };
        let move = (pointerType, deltaX, deltaY)=>{
            if (deltaX === 0 && deltaY === 0) return;
            if (!state.current.didMove) {
                state.current.didMove = true;
                onMoveStart?.({
                    type: 'movestart',
                    pointerType: pointerType
                });
            }
            onMove({
                type: 'move',
                pointerType: pointerType,
                deltaX: deltaX,
                deltaY: deltaY
            });
        };
        let end = (pointerType)=>{
            $7b6bfc1eb3e08758$export$b0d6fa1ab32e3295();
            if (state.current.didMove) onMoveEnd?.({
                type: 'moveend',
                pointerType: pointerType
            });
        };
        if (typeof PointerEvent === 'undefined') {
            let onMouseMove = (e)=>{
                if (e.button === 0) {
                    move('mouse', e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onMouseUp = (e)=>{
                if (e.button === 0) {
                    end('mouse');
                    removeGlobalListener(window, 'mousemove', onMouseMove, false);
                    removeGlobalListener(window, 'mouseup', onMouseUp, false);
                }
            };
            moveProps.onMouseDown = (e)=>{
                if (e.button === 0) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    addGlobalListener(window, 'mousemove', onMouseMove, false);
                    addGlobalListener(window, 'mouseup', onMouseUp, false);
                }
            };
            let onTouchMove = (e)=>{
                // @ts-ignore
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id
                );
                if (touch >= 0) {
                    let { pageX: pageX , pageY: pageY  } = e.changedTouches[touch];
                    move('touch', pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: pageX,
                        pageY: pageY
                    };
                }
            };
            let onTouchEnd = (e)=>{
                // @ts-ignore
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id
                );
                if (touch >= 0) {
                    end('touch');
                    state.current.id = null;
                    removeGlobalListener(window, 'touchmove', onTouchMove);
                    removeGlobalListener(window, 'touchend', onTouchEnd);
                    removeGlobalListener(window, 'touchcancel', onTouchEnd);
                }
            };
            moveProps.onTouchStart = (e)=>{
                if (e.changedTouches.length === 0 || state.current.id != null) return;
                let { pageX: pageX , pageY: pageY , identifier: identifier  } = e.changedTouches[0];
                start();
                e.stopPropagation();
                e.preventDefault();
                state.current.lastPosition = {
                    pageX: pageX,
                    pageY: pageY
                };
                state.current.id = identifier;
                addGlobalListener(window, 'touchmove', onTouchMove, false);
                addGlobalListener(window, 'touchend', onTouchEnd, false);
                addGlobalListener(window, 'touchcancel', onTouchEnd, false);
            };
        } else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    // @ts-ignore
                    let pointerType = e.pointerType || 'mouse';
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    // @ts-ignore
                    let pointerType = e.pointerType || 'mouse';
                    end(pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, 'pointermove', onPointerMove, false);
                    removeGlobalListener(window, 'pointerup', onPointerUp, false);
                    removeGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, 'pointermove', onPointerMove, false);
                    addGlobalListener(window, 'pointerup', onPointerUp, false);
                    addGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (deltaX, deltaY)=>{
            start();
            move('keyboard', deltaX, deltaY);
            end('keyboard');
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case 'Left':
                case 'ArrowLeft':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(-1, 0);
                    break;
                case 'Right':
                case 'ArrowRight':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(1, 0);
                    break;
                case 'Up':
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(0, -1);
                    break;
                case 'Down':
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        state,
        onMoveStart,
        onMove,
        onMoveEnd,
        addGlobalListener,
        removeGlobalListener
    ]);
    return {
        moveProps: moveProps1
    };
}



var $6406de3f6f17a8d5$exports = {};

$parcel$export($6406de3f6f17a8d5$exports, "useScrollWheel", () => $6406de3f6f17a8d5$export$2123ff2b87c81ca);


function $6406de3f6f17a8d5$export$2123ff2b87c81ca(props, ref) {
    let { onScroll: onScroll , isDisabled: isDisabled  } = props;
    let onScrollHandler = $grINW$useCallback((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    $grINW$useEvent(ref, 'wheel', isDisabled ? null : onScrollHandler);
}


var $829b8594aae475b1$exports = {};

$parcel$export($829b8594aae475b1$exports, "useLongPress", () => $829b8594aae475b1$export$c24ed0104d07eab9);



const $829b8594aae475b1$var$DEFAULT_THRESHOLD = 500;
function $829b8594aae475b1$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled , onLongPressStart: onLongPressStart , onLongPressEnd: onLongPressEnd , onLongPress: onLongPress , threshold: threshold = $829b8594aae475b1$var$DEFAULT_THRESHOLD , accessibilityDescription: accessibilityDescription  } = props;
    const timeRef = $grINW$useRef(null);
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $grINW$useGlobalListeners();
    let { pressProps: pressProps  } = $3417b7efea171556$export$45712eceda6fad21({
        isDisabled: isDisabled,
        onPressStart (e1) {
            if (e1.pointerType === 'mouse' || e1.pointerType === 'touch') {
                if (onLongPressStart) onLongPressStart({
                    ...e1,
                    type: 'longpressstart'
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e1.target.dispatchEvent(new PointerEvent('pointercancel', {
                        bubbles: true
                    }));
                    if (onLongPress) onLongPress({
                        ...e1,
                        type: 'longpress'
                    });
                    timeRef.current = null;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e1.pointerType === 'touch') {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e1.target, 'contextmenu', onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, 'pointerup', ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e1.target, 'contextmenu', onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === 'mouse' || e.pointerType === 'touch')) onLongPressEnd({
                ...e,
                type: 'longpressend'
            });
        }
    });
    let descriptionProps = $grINW$useDescription(onLongPress && !isDisabled ? accessibilityDescription : null);
    return {
        longPressProps: $grINW$mergeProps(pressProps, descriptionProps)
    };
}




export {$628981a0dd199ba9$export$27c701ed9e449e99 as Pressable, $1286bde2571f90a5$export$3351871ee4b288b8 as PressResponder, $096ad3525d103a93$export$f8168d8dd8fd66e6 as useFocus, $419d5422f2e15c02$export$b9b3dfddab17db27 as isFocusVisible, $419d5422f2e15c02$export$630ff653c5ada6a9 as getInteractionModality, $419d5422f2e15c02$export$8397ddfc504fdb9a as setInteractionModality, $419d5422f2e15c02$export$98e20ec92f614cfe as useInteractionModality, $419d5422f2e15c02$export$ffd9e5021c1fb2d6 as useFocusVisible, $419d5422f2e15c02$export$ec71b4b83ac08ec3 as useFocusVisibleListener, $99449afe3b287dc5$export$420e68273165f4ec as useFocusWithin, $10cc5183ec18c2a8$export$ae780daf29e6d456 as useHover, $4a9272fc42c708b8$export$872b660ac5a1ff98 as useInteractOutside, $7220947193666a02$export$8f71654801c2f7cd as useKeyboard, $8b60118917430993$export$36da96379f79f245 as useMove, $3417b7efea171556$export$45712eceda6fad21 as usePress, $6406de3f6f17a8d5$export$2123ff2b87c81ca as useScrollWheel, $829b8594aae475b1$export$c24ed0104d07eab9 as useLongPress};
//# sourceMappingURL=module.js.map
