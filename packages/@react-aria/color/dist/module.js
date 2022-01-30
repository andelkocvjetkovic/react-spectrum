import {mergeProps as $gJGFt$mergeProps, useGlobalListeners as $gJGFt$useGlobalListeners, focusWithoutScrolling as $gJGFt$focusWithoutScrolling, useLabels as $gJGFt$useLabels, useId as $gJGFt$useId} from "@react-aria/utils";
import {useLocale as $gJGFt$useLocale} from "@react-aria/i18n";
import {useSlider as $gJGFt$useSlider, useSliderThumb as $gJGFt$useSliderThumb} from "@react-aria/slider";
import {useCallback as $gJGFt$useCallback, useRef as $gJGFt$useRef, useState as $gJGFt$useState} from "react";
import {useMove as $gJGFt$useMove, useKeyboard as $gJGFt$useKeyboard, useFocusWithin as $gJGFt$useFocusWithin, useScrollWheel as $gJGFt$useScrollWheel} from "@react-aria/interactions";
import {useFormattedTextField as $gJGFt$useFormattedTextField} from "@react-aria/textfield";
import {useSpinButton as $gJGFt$useSpinButton} from "@react-aria/spinbutton";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d984cfa31c77609b$exports = {};

$parcel$export($d984cfa31c77609b$exports, "useColorSlider", () => $d984cfa31c77609b$export$106b7a4e66508f66);



function $d984cfa31c77609b$export$106b7a4e66508f66(props, state) {
    let { trackRef: trackRef , inputRef: inputRef , orientation: orientation , channel: channel , 'aria-label': ariaLabel  } = props;
    let { locale: locale , direction: direction  } = $gJGFt$useLocale();
    // Provide a default aria-label if there is no other label provided.
    if (!props.label && !ariaLabel && !props['aria-labelledby']) ariaLabel = state.value.getChannelName(channel, locale);
    // @ts-ignore - ignore unused incompatible props
    let { groupProps: groupProps , trackProps: trackProps , labelProps: labelProps , outputProps: outputProps  } = $gJGFt$useSlider({
        ...props,
        'aria-label': ariaLabel
    }, state, trackRef);
    let { inputProps: inputProps , thumbProps: thumbProps  } = $gJGFt$useSliderThumb({
        index: 0,
        orientation: orientation,
        isDisabled: props.isDisabled,
        trackRef: trackRef,
        inputRef: inputRef
    }, state);
    let generateBackground = ()=>{
        let value = state.getDisplayColor();
        let to;
        if (orientation === 'vertical') to = 'top';
        else if (direction === 'ltr') to = 'right';
        else to = 'left';
        switch(channel){
            case 'hue':
                return `linear-gradient(to ${to}, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)`;
            case 'lightness':
                {
                    // We have to add an extra color stop in the middle so that the hue shows up at all.
                    // Otherwise it will always just be black to white.
                    let min = state.getThumbMinValue(0);
                    let max = state.getThumbMaxValue(0);
                    let start = value.withChannelValue(channel, min).toString('css');
                    let middle = value.withChannelValue(channel, (max - min) / 2).toString('css');
                    let end = value.withChannelValue(channel, max).toString('css');
                    return `linear-gradient(to ${to}, ${start}, ${middle}, ${end})`;
                }
            case 'saturation':
            case 'brightness':
            case 'red':
            case 'green':
            case 'blue':
            case 'alpha':
                {
                    let start = value.withChannelValue(channel, state.getThumbMinValue(0)).toString('css');
                    let end = value.withChannelValue(channel, state.getThumbMaxValue(0)).toString('css');
                    return `linear-gradient(to ${to}, ${start}, ${end})`;
                }
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    };
    let thumbPosition = state.getThumbPercent(0);
    if (orientation === 'vertical' || direction === 'rtl') thumbPosition = 1 - thumbPosition;
    return {
        trackProps: {
            ...$gJGFt$mergeProps(groupProps, trackProps),
            style: {
                position: 'relative',
                touchAction: 'none',
                background: generateBackground()
            }
        },
        inputProps: inputProps,
        thumbProps: {
            ...thumbProps,
            style: {
                touchAction: 'none',
                position: 'absolute',
                [orientation === 'vertical' ? 'top' : 'left']: `${thumbPosition * 100}%`,
                transform: 'translate(-50%, -50%)'
            }
        },
        labelProps: labelProps,
        outputProps: outputProps
    };
}


var $57b62b9426efaf0d$exports = {};

$parcel$export($57b62b9426efaf0d$exports, "useColorWheel", () => $57b62b9426efaf0d$export$9064ff4e44b3729a);




const $57b62b9426efaf0d$var$PAGE_MIN_STEP_SIZE = 6;
function $57b62b9426efaf0d$export$9064ff4e44b3729a(props, state, inputRef) {
    let { isDisabled: isDisabled , step: step = 1 , innerRadius: innerRadius , outerRadius: outerRadius , 'aria-label': ariaLabel  } = props;
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $gJGFt$useGlobalListeners();
    let thumbRadius = (innerRadius + outerRadius) / 2;
    let focusInput = $gJGFt$useCallback(()=>{
        if (inputRef.current) $gJGFt$focusWithoutScrolling(inputRef.current);
    }, [
        inputRef
    ]);
    let stateRef = $gJGFt$useRef(null);
    stateRef.current = state;
    let currentPosition = $gJGFt$useRef(null);
    let moveHandler = {
        onMoveStart () {
            currentPosition.current = null;
            state.setDragging(true);
        },
        onMove ({ deltaX: deltaX , deltaY: deltaY , pointerType: pointerType  }) {
            if (currentPosition.current == null) currentPosition.current = stateRef.current.getThumbPosition(thumbRadius);
            currentPosition.current.x += deltaX;
            currentPosition.current.y += deltaY;
            if (pointerType === 'keyboard') {
                if (deltaX > 0 || deltaY < 0) state.increment();
                else if (deltaX < 0 || deltaY > 0) state.decrement();
            } else stateRef.current.setHueFromPoint(currentPosition.current.x, currentPosition.current.y, thumbRadius);
        },
        onMoveEnd () {
            isOnTrack.current = undefined;
            state.setDragging(false);
            focusInput();
        }
    };
    let { moveProps: movePropsThumb  } = $gJGFt$useMove(moveHandler);
    let currentPointer = $gJGFt$useRef(undefined);
    let isOnTrack = $gJGFt$useRef(false);
    let { moveProps: movePropsContainer  } = $gJGFt$useMove({
        onMoveStart () {
            if (isOnTrack.current) moveHandler.onMoveStart();
        },
        onMove (e) {
            if (isOnTrack.current) moveHandler.onMove(e);
        },
        onMoveEnd () {
            if (isOnTrack.current) moveHandler.onMoveEnd();
        }
    });
    let onThumbDown = (id)=>{
        if (!state.isDragging) {
            currentPointer.current = id;
            focusInput();
            state.setDragging(true);
            if (typeof PointerEvent !== 'undefined') addGlobalListener(window, 'pointerup', onThumbUp, false);
            else {
                addGlobalListener(window, 'mouseup', onThumbUp, false);
                addGlobalListener(window, 'touchend', onThumbUp, false);
            }
        }
    };
    let onThumbUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (id === currentPointer.current) {
            focusInput();
            state.setDragging(false);
            currentPointer.current = undefined;
            isOnTrack.current = false;
            if (typeof PointerEvent !== 'undefined') removeGlobalListener(window, 'pointerup', onThumbUp, false);
            else {
                removeGlobalListener(window, 'mouseup', onThumbUp, false);
                removeGlobalListener(window, 'touchend', onThumbUp, false);
            }
        }
    };
    let onTrackDown = (track, id, pageX, pageY)=>{
        let rect = track.getBoundingClientRect();
        let x = pageX - rect.x - rect.width / 2;
        let y = pageY - rect.y - rect.height / 2;
        let radius = Math.sqrt(x * x + y * y);
        if (innerRadius < radius && radius < outerRadius && !state.isDragging && currentPointer.current === undefined) {
            isOnTrack.current = true;
            currentPointer.current = id;
            stateRef.current.setHueFromPoint(x, y, radius);
            focusInput();
            state.setDragging(true);
            if (typeof PointerEvent !== 'undefined') addGlobalListener(window, 'pointerup', onTrackUp, false);
            else {
                addGlobalListener(window, 'mouseup', onTrackUp, false);
                addGlobalListener(window, 'touchend', onTrackUp, false);
            }
        }
    };
    let onTrackUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (isOnTrack.current && id === currentPointer.current) {
            isOnTrack.current = false;
            currentPointer.current = undefined;
            state.setDragging(false);
            focusInput();
            if (typeof PointerEvent !== 'undefined') removeGlobalListener(window, 'pointerup', onTrackUp, false);
            else {
                removeGlobalListener(window, 'mouseup', onTrackUp, false);
                removeGlobalListener(window, 'touchend', onTrackUp, false);
            }
        }
    };
    let { keyboardProps: keyboardProps  } = $gJGFt$useKeyboard({
        onKeyDown (e) {
            switch(e.key){
                case 'PageUp':
                    e.preventDefault();
                    state.increment($57b62b9426efaf0d$var$PAGE_MIN_STEP_SIZE);
                    break;
                case 'PageDown':
                    e.preventDefault();
                    state.decrement($57b62b9426efaf0d$var$PAGE_MIN_STEP_SIZE);
                    break;
            }
        }
    });
    let trackInteractions = isDisabled ? {
    } : $gJGFt$mergeProps({
        ...typeof PointerEvent !== 'undefined' ? {
            onPointerDown: (e)=>{
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onTrackDown(e.currentTarget, e.pointerId, e.clientX, e.clientY);
            }
        } : {
            onMouseDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onTrackDown(e.currentTarget, undefined, e.clientX, e.clientY);
            },
            onTouchStart: (e)=>{
                onTrackDown(e.currentTarget, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            }
        }
    }, movePropsContainer);
    let thumbInteractions = isDisabled ? {
    } : $gJGFt$mergeProps({
        onMouseDown: (e)=>{
            if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
            onThumbDown(undefined);
        },
        onPointerDown: (e)=>{
            if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
            onThumbDown(e.pointerId);
        },
        onTouchStart: (e)=>{
            onThumbDown(e.changedTouches[0].identifier);
        }
    }, movePropsThumb, keyboardProps);
    let { x: x1 , y: y1  } = state.getThumbPosition(thumbRadius);
    // Provide a default aria-label if none is given
    let { locale: locale  } = $gJGFt$useLocale();
    if (ariaLabel == null && props['aria-labelledby'] == null) ariaLabel = state.value.getChannelName('hue', locale);
    let inputLabellingProps = $gJGFt$useLabels({
        ...props,
        'aria-label': ariaLabel
    });
    return {
        trackProps: {
            ...trackInteractions,
            style: {
                position: 'relative',
                touchAction: 'none',
                width: outerRadius * 2,
                height: outerRadius * 2,
                background: `
          conic-gradient(
            from 90deg,
            hsl(0, 100%, 50%),
            hsl(30, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(90, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(150, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(210, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(270, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(330, 100%, 50%),
            hsl(360, 100%, 50%)
          )
        `,
                clipPath: `path(evenodd, "${$57b62b9426efaf0d$var$circlePath(outerRadius, outerRadius, outerRadius)} ${$57b62b9426efaf0d$var$circlePath(outerRadius, outerRadius, innerRadius)}")`
            }
        },
        thumbProps: {
            ...thumbInteractions,
            style: {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(calc(${x1}px - 50%), calc(${y1}px - 50%))`,
                touchAction: 'none'
            }
        },
        inputProps: $gJGFt$mergeProps(inputLabellingProps, {
            type: 'range',
            min: '0',
            max: '360',
            step: String(step),
            'aria-valuetext': state.value.formatChannelValue('hue', locale),
            disabled: isDisabled,
            value: `${state.value.getChannelValue('hue')}`,
            onChange: (e)=>{
                state.setHue(parseFloat(e.target.value));
            }
        })
    };
}
// Creates an SVG path string for a circle.
function $57b62b9426efaf0d$var$circlePath(cx, cy, r) {
    return `M ${cx}, ${cy} m ${-r}, 0 a ${r}, ${r}, 0, 1, 0, ${r * 2}, 0 a ${r}, ${r}, 0, 1, 0 ${-r * 2}, 0`;
}


var $2a22f80414e6430f$exports = {};

$parcel$export($2a22f80414e6430f$exports, "useColorField", () => $2a22f80414e6430f$export$77e32ca575a28fdf);





function $2a22f80414e6430f$export$77e32ca575a28fdf(props, state, ref) {
    let { isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired  } = props;
    let { colorValue: colorValue , inputValue: inputValue , commit: commit , increment: increment , decrement: decrement , incrementToMax: incrementToMax , decrementToMin: decrementToMin  } = state;
    let inputId = $gJGFt$useId();
    let { spinButtonProps: spinButtonProps  } = $gJGFt$useSpinButton({
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        maxValue: 16777215,
        minValue: 0,
        onIncrement: increment,
        onIncrementToMax: incrementToMax,
        onDecrement: decrement,
        onDecrementToMin: decrementToMin,
        value: colorValue ? colorValue.toHexInt() : undefined,
        textValue: colorValue ? colorValue.toString('hex') : undefined
    });
    let [focusWithin, setFocusWithin] = $gJGFt$useState(false);
    let { focusWithinProps: focusWithinProps  } = $gJGFt$useFocusWithin({
        isDisabled: isDisabled,
        onFocusWithinChange: setFocusWithin
    });
    let onWheel = $gJGFt$useCallback((e)=>{
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (e.deltaY > 0) increment();
        else if (e.deltaY < 0) decrement();
    }, [
        isReadOnly,
        isDisabled,
        decrement,
        increment
    ]);
    // If the input isn't supposed to receive input, disable scrolling.
    let scrollingDisabled = isDisabled || isReadOnly || !focusWithin;
    $gJGFt$useScrollWheel({
        onScroll: onWheel,
        isDisabled: scrollingDisabled
    }, ref);
    let onChange = (value)=>{
        state.setInputValue(value);
    };
    let { labelProps: labelProps , inputProps: inputProps  } = $gJGFt$useFormattedTextField($gJGFt$mergeProps(props, {
        id: inputId,
        value: inputValue,
        defaultValue: undefined,
        type: 'text',
        autoComplete: 'off',
        onChange: onChange
    }), state, ref);
    return {
        labelProps: labelProps,
        inputProps: $gJGFt$mergeProps(inputProps, spinButtonProps, focusWithinProps, {
            role: 'textbox',
            'aria-valuemax': null,
            'aria-valuemin': null,
            'aria-valuenow': null,
            'aria-valuetext': null,
            autoCorrect: 'off',
            spellCheck: 'false',
            onBlur: commit
        })
    };
}




export {$d984cfa31c77609b$export$106b7a4e66508f66 as useColorSlider, $57b62b9426efaf0d$export$9064ff4e44b3729a as useColorWheel, $2a22f80414e6430f$export$77e32ca575a28fdf as useColorField};
//# sourceMappingURL=module.js.map
