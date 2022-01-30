import {useGlobalListeners as $jqZpp$useGlobalListeners, clamp as $jqZpp$clamp, mergeProps as $jqZpp$mergeProps, focusWithoutScrolling as $jqZpp$focusWithoutScrolling} from "@react-aria/utils";
import {useRef as $jqZpp$useRef, useCallback as $jqZpp$useCallback, useEffect as $jqZpp$useEffect} from "react";
import {useMove as $jqZpp$useMove, setInteractionModality as $jqZpp$setInteractionModality} from "@react-aria/interactions";
import {useLabel as $jqZpp$useLabel} from "@react-aria/label";
import {useLocale as $jqZpp$useLocale} from "@react-aria/i18n";
import {useFocusable as $jqZpp$useFocusable} from "@react-aria/focus";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $394ba6dee0c1502a$exports = {};

$parcel$export($394ba6dee0c1502a$exports, "useSlider", () => $394ba6dee0c1502a$export$56b2c08e277f365);

const $7a671d3c5e67938a$export$7a8d2b02c9371cbf = new WeakMap();
function $7a671d3c5e67938a$export$68e648cbec363a18(state, index) {
    let id = $7a671d3c5e67938a$export$7a8d2b02c9371cbf.get(state);
    if (!id) throw new Error('Unknown slider state');
    return `${id}-${index}`;
}






function $394ba6dee0c1502a$export$56b2c08e277f365(props, state, trackRef) {
    let { labelProps: labelProps , fieldProps: fieldProps  } = $jqZpp$useLabel(props);
    let isVertical = props.orientation === 'vertical';
    // Attach id of the label to the state so it can be accessed by useSliderThumb.
    $7a671d3c5e67938a$export$7a8d2b02c9371cbf.set(state, labelProps.id ?? fieldProps.id);
    let { direction: direction  } = $jqZpp$useLocale();
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $jqZpp$useGlobalListeners();
    // When the user clicks or drags the track, we want the motion to set and drag the
    // closest thumb.  Hence we also need to install useMove() on the track element.
    // Here, we keep track of which index is the "closest" to the drag start point.
    // It is set onMouseDown/onTouchDown; see trackProps below.
    const realTimeTrackDraggingIndex = $jqZpp$useRef(null);
    const stateRef = $jqZpp$useRef(null);
    stateRef.current = state;
    const reverseX = direction === 'rtl';
    const currentPosition = $jqZpp$useRef(null);
    const { moveProps: moveProps  } = $jqZpp$useMove({
        onMoveStart () {
            currentPosition.current = null;
        },
        onMove ({ deltaX: deltaX , deltaY: deltaY  }) {
            let size = isVertical ? trackRef.current.offsetHeight : trackRef.current.offsetWidth;
            if (currentPosition.current == null) currentPosition.current = stateRef.current.getThumbPercent(realTimeTrackDraggingIndex.current) * size;
            let delta = isVertical ? deltaY : deltaX;
            if (isVertical || reverseX) delta = -delta;
            currentPosition.current += delta;
            if (realTimeTrackDraggingIndex.current != null && trackRef.current) {
                const percent = $jqZpp$clamp(currentPosition.current / size, 0, 1);
                stateRef.current.setThumbPercent(realTimeTrackDraggingIndex.current, percent);
            }
        },
        onMoveEnd () {
            if (realTimeTrackDraggingIndex.current != null) {
                stateRef.current.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
        }
    });
    let currentPointer = $jqZpp$useRef(undefined);
    let onDownTrack = (e, id, clientX, clientY)=>{
        // We only trigger track-dragging if the user clicks on the track itself and nothing is currently being dragged.
        if (trackRef.current && !props.isDisabled && state.values.every((_, i)=>!state.isThumbDragging(i)
        )) {
            let size = isVertical ? trackRef.current.offsetHeight : trackRef.current.offsetWidth;
            // Find the closest thumb
            const trackPosition = trackRef.current.getBoundingClientRect()[isVertical ? 'top' : 'left'];
            const clickPosition = isVertical ? clientY : clientX;
            const offset = clickPosition - trackPosition;
            let percent = offset / size;
            if (direction === 'rtl' || isVertical) percent = 1 - percent;
            let value = state.getPercentValue(percent);
            // to find the closet thumb we split the array based on the first thumb position to the "right/end" of the click.
            let closestThumb;
            let split = state.values.findIndex((v)=>value - v < 0
            );
            if (split === 0) closestThumb = split;
            else if (split === -1) closestThumb = state.values.length - 1;
            else {
                let lastLeft = state.values[split - 1];
                let firstRight = state.values[split];
                // Pick the last left/start thumb, unless they are stacked on top of each other, then pick the right/end one
                if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) closestThumb = split - 1;
                else closestThumb = split;
            }
            // Confirm that the found closest thumb is editable, not disabled, and move it
            if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
                // Don't unfocus anything
                e.preventDefault();
                realTimeTrackDraggingIndex.current = closestThumb;
                state.setFocusedThumb(closestThumb);
                currentPointer.current = id;
                state.setThumbDragging(realTimeTrackDraggingIndex.current, true);
                state.setThumbValue(closestThumb, value);
                addGlobalListener(window, 'mouseup', onUpTrack, false);
                addGlobalListener(window, 'touchend', onUpTrack, false);
                addGlobalListener(window, 'pointerup', onUpTrack, false);
            } else realTimeTrackDraggingIndex.current = null;
        }
    };
    let onUpTrack = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (id === currentPointer.current) {
            if (realTimeTrackDraggingIndex.current != null) {
                state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
            removeGlobalListener(window, 'mouseup', onUpTrack, false);
            removeGlobalListener(window, 'touchend', onUpTrack, false);
            removeGlobalListener(window, 'pointerup', onUpTrack, false);
        }
    };
    if (labelProps.htmlFor) {
        // Ideally the `for` attribute should point to the first thumb, but VoiceOver on iOS
        // causes this to override the `aria-labelledby` on the thumb. This causes the first
        // thumb to only be announced as the slider label rather than its individual name as well.
        // See https://bugs.webkit.org/show_bug.cgi?id=172464.
        delete labelProps.htmlFor;
        labelProps.onClick = ()=>{
            // Safari does not focus <input type="range"> elements when clicking on an associated <label>,
            // so do it manually. In addition, make sure we show the focus ring.
            document.getElementById($7a671d3c5e67938a$export$68e648cbec363a18(state, 0))?.focus();
            $jqZpp$setInteractionModality('keyboard');
        };
    }
    return {
        labelProps: labelProps,
        // The root element of the Slider will have role="group" to group together
        // all the thumb inputs in the Slider.  The label of the Slider will
        // be used to label the group.
        groupProps: {
            role: 'group',
            ...fieldProps
        },
        trackProps: $jqZpp$mergeProps({
            onMouseDown (e) {
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDownTrack(e, undefined, e.clientX, e.clientY);
            },
            onPointerDown (e) {
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onDownTrack(e, e.pointerId, e.clientX, e.clientY);
            },
            onTouchStart (e) {
                onDownTrack(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            }
        }, moveProps),
        outputProps: {
            htmlFor: state.values.map((_, index)=>$7a671d3c5e67938a$export$68e648cbec363a18(state, index)
            ).join(' '),
            'aria-live': 'off'
        }
    };
}


var $b6a2c1cf13588c87$exports = {};

$parcel$export($b6a2c1cf13588c87$exports, "useSliderThumb", () => $b6a2c1cf13588c87$export$8d15029008292ae);







function $b6a2c1cf13588c87$export$8d15029008292ae(opts, state) {
    let { index: index , isRequired: isRequired , isDisabled: isDisabled , validationState: validationState , trackRef: trackRef , inputRef: inputRef  } = opts;
    let isVertical = opts.orientation === 'vertical';
    let { direction: direction  } = $jqZpp$useLocale();
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $jqZpp$useGlobalListeners();
    let labelId = $7a671d3c5e67938a$export$7a8d2b02c9371cbf.get(state);
    const { labelProps: labelProps , fieldProps: fieldProps  } = $jqZpp$useLabel({
        ...opts,
        id: $7a671d3c5e67938a$export$68e648cbec363a18(state, index),
        'aria-labelledby': `${labelId} ${opts['aria-labelledby'] ?? ''}`.trim()
    });
    const value = state.values[index];
    const focusInput = $jqZpp$useCallback(()=>{
        if (inputRef.current) $jqZpp$focusWithoutScrolling(inputRef.current);
    }, [
        inputRef
    ]);
    const isFocused = state.focusedThumb === index;
    $jqZpp$useEffect(()=>{
        if (isFocused) focusInput();
    }, [
        isFocused,
        focusInput
    ]);
    const stateRef = $jqZpp$useRef(null);
    stateRef.current = state;
    let reverseX = direction === 'rtl';
    let currentPosition = $jqZpp$useRef(null);
    let { moveProps: moveProps  } = $jqZpp$useMove({
        onMoveStart () {
            currentPosition.current = null;
            state.setThumbDragging(index, true);
        },
        onMove ({ deltaX: deltaX , deltaY: deltaY , pointerType: pointerType  }) {
            let size = isVertical ? trackRef.current.offsetHeight : trackRef.current.offsetWidth;
            if (currentPosition.current == null) currentPosition.current = stateRef.current.getThumbPercent(index) * size;
            if (pointerType === 'keyboard') {
                // (invert left/right according to language direction) + (according to vertical)
                let delta = ((reverseX ? -deltaX : deltaX) + (isVertical ? -deltaY : -deltaY)) * stateRef.current.step;
                currentPosition.current += delta * size;
                stateRef.current.setThumbValue(index, stateRef.current.getThumbValue(index) + delta);
            } else {
                let delta = isVertical ? deltaY : deltaX;
                if (isVertical || reverseX) delta = -delta;
                currentPosition.current += delta;
                stateRef.current.setThumbPercent(index, $jqZpp$clamp(currentPosition.current / size, 0, 1));
            }
        },
        onMoveEnd () {
            state.setThumbDragging(index, false);
        }
    });
    // Immediately register editability with the state
    state.setThumbEditable(index, !isDisabled);
    const { focusableProps: focusableProps  } = $jqZpp$useFocusable($jqZpp$mergeProps(opts, {
        onFocus: ()=>state.setFocusedThumb(index)
        ,
        onBlur: ()=>state.setFocusedThumb(undefined)
    }), inputRef);
    let currentPointer = $jqZpp$useRef(undefined);
    let onDown = (id)=>{
        focusInput();
        currentPointer.current = id;
        state.setThumbDragging(index, true);
        addGlobalListener(window, 'mouseup', onUp, false);
        addGlobalListener(window, 'touchend', onUp, false);
        addGlobalListener(window, 'pointerup', onUp, false);
    };
    let onUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (id === currentPointer.current) {
            focusInput();
            state.setThumbDragging(index, false);
            removeGlobalListener(window, 'mouseup', onUp, false);
            removeGlobalListener(window, 'touchend', onUp, false);
            removeGlobalListener(window, 'pointerup', onUp, false);
        }
    };
    // We install mouse handlers for the drag motion on the thumb div, but
    // not the key handler for moving the thumb with the slider.  Instead,
    // we focus the range input, and let the browser handle the keyboard
    // interactions; we then listen to input's onChange to update state.
    return {
        inputProps: $jqZpp$mergeProps(focusableProps, fieldProps, {
            type: 'range',
            tabIndex: !isDisabled ? 0 : undefined,
            min: state.getThumbMinValue(index),
            max: state.getThumbMaxValue(index),
            step: state.step,
            value: value,
            disabled: isDisabled,
            'aria-orientation': opts.orientation,
            'aria-valuetext': state.getThumbValueLabel(index),
            'aria-required': isRequired || undefined,
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': opts['aria-errormessage'],
            onChange: (e)=>{
                state.setThumbValue(index, parseFloat(e.target.value));
            }
        }),
        thumbProps: !isDisabled ? $jqZpp$mergeProps(moveProps, {
            onMouseDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDown();
            },
            onPointerDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDown(e.pointerId);
            },
            onTouchStart: (e)=>{
                onDown(e.changedTouches[0].identifier);
            }
        }) : {
        },
        labelProps: labelProps
    };
}




export {$394ba6dee0c1502a$export$56b2c08e277f365 as useSlider, $b6a2c1cf13588c87$export$8d15029008292ae as useSliderThumb};
//# sourceMappingURL=module.js.map
