var $jy18E$reactariautils = require("@react-aria/utils");
var $jy18E$reactariai18n = require("@react-aria/i18n");
var $jy18E$reactariaslider = require("@react-aria/slider");
var $jy18E$react = require("react");
var $jy18E$reactariainteractions = require("@react-aria/interactions");
var $jy18E$reactariatextfield = require("@react-aria/textfield");
var $jy18E$reactariaspinbutton = require("@react-aria/spinbutton");

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
var $1dcb689e6b4dbdc0$exports = {};

$parcel$export($1dcb689e6b4dbdc0$exports, "useColorSlider", () => $1dcb689e6b4dbdc0$export$106b7a4e66508f66);



function $1dcb689e6b4dbdc0$export$106b7a4e66508f66(props, state) {
    let { trackRef: trackRef , inputRef: inputRef , orientation: orientation , channel: channel , 'aria-label': ariaLabel  } = props;
    let { locale: locale , direction: direction  } = $jy18E$reactariai18n.useLocale();
    // Provide a default aria-label if there is no other label provided.
    if (!props.label && !ariaLabel && !props['aria-labelledby']) ariaLabel = state.value.getChannelName(channel, locale);
    // @ts-ignore - ignore unused incompatible props
    let { groupProps: groupProps , trackProps: trackProps , labelProps: labelProps , outputProps: outputProps  } = $jy18E$reactariaslider.useSlider({
        ...props,
        'aria-label': ariaLabel
    }, state, trackRef);
    let { inputProps: inputProps , thumbProps: thumbProps  } = $jy18E$reactariaslider.useSliderThumb({
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
            ...$jy18E$reactariautils.mergeProps(groupProps, trackProps),
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


var $5e049513506b53e6$exports = {};

$parcel$export($5e049513506b53e6$exports, "useColorWheel", () => $5e049513506b53e6$export$9064ff4e44b3729a);




const $5e049513506b53e6$var$PAGE_MIN_STEP_SIZE = 6;
function $5e049513506b53e6$export$9064ff4e44b3729a(props, state, inputRef) {
    let { isDisabled: isDisabled , step: step = 1 , innerRadius: innerRadius , outerRadius: outerRadius , 'aria-label': ariaLabel  } = props;
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $jy18E$reactariautils.useGlobalListeners();
    let thumbRadius = (innerRadius + outerRadius) / 2;
    let focusInput = $jy18E$react.useCallback(()=>{
        if (inputRef.current) $jy18E$reactariautils.focusWithoutScrolling(inputRef.current);
    }, [
        inputRef
    ]);
    let stateRef = $jy18E$react.useRef(null);
    stateRef.current = state;
    let currentPosition = $jy18E$react.useRef(null);
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
    let { moveProps: movePropsThumb  } = $jy18E$reactariainteractions.useMove(moveHandler);
    let currentPointer = $jy18E$react.useRef(undefined);
    let isOnTrack = $jy18E$react.useRef(false);
    let { moveProps: movePropsContainer  } = $jy18E$reactariainteractions.useMove({
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
    let { keyboardProps: keyboardProps  } = $jy18E$reactariainteractions.useKeyboard({
        onKeyDown (e) {
            switch(e.key){
                case 'PageUp':
                    e.preventDefault();
                    state.increment($5e049513506b53e6$var$PAGE_MIN_STEP_SIZE);
                    break;
                case 'PageDown':
                    e.preventDefault();
                    state.decrement($5e049513506b53e6$var$PAGE_MIN_STEP_SIZE);
                    break;
            }
        }
    });
    let trackInteractions = isDisabled ? {
    } : $jy18E$reactariautils.mergeProps({
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
    } : $jy18E$reactariautils.mergeProps({
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
    let { locale: locale  } = $jy18E$reactariai18n.useLocale();
    if (ariaLabel == null && props['aria-labelledby'] == null) ariaLabel = state.value.getChannelName('hue', locale);
    let inputLabellingProps = $jy18E$reactariautils.useLabels({
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
                clipPath: `path(evenodd, "${$5e049513506b53e6$var$circlePath(outerRadius, outerRadius, outerRadius)} ${$5e049513506b53e6$var$circlePath(outerRadius, outerRadius, innerRadius)}")`
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
        inputProps: $jy18E$reactariautils.mergeProps(inputLabellingProps, {
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
function $5e049513506b53e6$var$circlePath(cx, cy, r) {
    return `M ${cx}, ${cy} m ${-r}, 0 a ${r}, ${r}, 0, 1, 0, ${r * 2}, 0 a ${r}, ${r}, 0, 1, 0 ${-r * 2}, 0`;
}


var $c30bb376b5583743$exports = {};

$parcel$export($c30bb376b5583743$exports, "useColorField", () => $c30bb376b5583743$export$77e32ca575a28fdf);





function $c30bb376b5583743$export$77e32ca575a28fdf(props, state, ref) {
    let { isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired  } = props;
    let { colorValue: colorValue , inputValue: inputValue , commit: commit , increment: increment , decrement: decrement , incrementToMax: incrementToMax , decrementToMin: decrementToMin  } = state;
    let inputId = $jy18E$reactariautils.useId();
    let { spinButtonProps: spinButtonProps  } = $jy18E$reactariaspinbutton.useSpinButton({
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
    let [focusWithin, setFocusWithin] = $jy18E$react.useState(false);
    let { focusWithinProps: focusWithinProps  } = $jy18E$reactariainteractions.useFocusWithin({
        isDisabled: isDisabled,
        onFocusWithinChange: setFocusWithin
    });
    let onWheel = $jy18E$react.useCallback((e)=>{
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
    $jy18E$reactariainteractions.useScrollWheel({
        onScroll: onWheel,
        isDisabled: scrollingDisabled
    }, ref);
    let onChange = (value)=>{
        state.setInputValue(value);
    };
    let { labelProps: labelProps , inputProps: inputProps  } = $jy18E$reactariatextfield.useFormattedTextField($jy18E$reactariautils.mergeProps(props, {
        id: inputId,
        value: inputValue,
        defaultValue: undefined,
        type: 'text',
        autoComplete: 'off',
        onChange: onChange
    }), state, ref);
    return {
        labelProps: labelProps,
        inputProps: $jy18E$reactariautils.mergeProps(inputProps, spinButtonProps, focusWithinProps, {
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


$parcel$exportWildcard(module.exports, $1dcb689e6b4dbdc0$exports);
$parcel$exportWildcard(module.exports, $5e049513506b53e6$exports);
$parcel$exportWildcard(module.exports, $c30bb376b5583743$exports);


//# sourceMappingURL=main.js.map
