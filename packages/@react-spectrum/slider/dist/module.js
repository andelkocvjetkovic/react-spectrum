import "./main.css";
import {clamp as $fzZdD$clamp, mergeProps as $fzZdD$mergeProps} from "@react-aria/utils";
import {classNames as $fzZdD$classNames, useStyleProps as $fzZdD$useStyleProps, useFocusableRef as $fzZdD$useFocusableRef} from "@react-spectrum/utils";
import $fzZdD$react, {useRef as $fzZdD$useRef} from "react";
import {useLocale as $fzZdD$useLocale, useNumberFormatter as $fzZdD$useNumberFormatter, useMessageFormatter as $fzZdD$useMessageFormatter} from "@react-aria/i18n";
import {useSliderState as $fzZdD$useSliderState} from "@react-stately/slider";
import {useProviderProps as $fzZdD$useProviderProps} from "@react-spectrum/provider";
import {useSlider as $fzZdD$useSlider, useSliderThumb as $fzZdD$useSliderThumb} from "@react-aria/slider";
import {FocusRing as $fzZdD$FocusRing} from "@react-aria/focus";
import {useHover as $fzZdD$useHover} from "@react-aria/interactions";
import {VisuallyHidden as $fzZdD$VisuallyHidden} from "@react-aria/visually-hidden";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $1e789319b297f2c1$exports = {};

$parcel$export($1e789319b297f2c1$exports, "Slider", () => $1e789319b297f2c1$export$472062a354075cee);






var $056f774e20dd757b$exports = {};

$parcel$export($056f774e20dd757b$exports, "spectrum-Slider", () => $056f774e20dd757b$export$fc844a18ff837543, (v) => $056f774e20dd757b$export$fc844a18ff837543 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial", () => $056f774e20dd757b$export$db619d28010f1dd7, (v) => $056f774e20dd757b$export$db619d28010f1dd7 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider--positionTop", () => $056f774e20dd757b$export$3d0239f4af6225c0, (v) => $056f774e20dd757b$export$3d0239f4af6225c0 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-controls", () => $056f774e20dd757b$export$eed070f7d409a4eb, (v) => $056f774e20dd757b$export$eed070f7d409a4eb = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial-controls", () => $056f774e20dd757b$export$9a4ea6c1b342a483, (v) => $056f774e20dd757b$export$9a4ea6c1b342a483 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider--positionSide", () => $056f774e20dd757b$export$7e6c269c6bbb2ffa, (v) => $056f774e20dd757b$export$7e6c269c6bbb2ffa = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-labelContainer", () => $056f774e20dd757b$export$6a95ef18f88e804b, (v) => $056f774e20dd757b$export$6a95ef18f88e804b = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial-labelContainer", () => $056f774e20dd757b$export$f64ec32f85626909, (v) => $056f774e20dd757b$export$f64ec32f85626909 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-valueLabelContainer", () => $056f774e20dd757b$export$2183ef1701a88013, (v) => $056f774e20dd757b$export$2183ef1701a88013 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-value", () => $056f774e20dd757b$export$d1c0699c6d985532, (v) => $056f774e20dd757b$export$d1c0699c6d985532 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-track", () => $056f774e20dd757b$export$16e664b3091a0b47, (v) => $056f774e20dd757b$export$16e664b3091a0b47 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-buffer", () => $056f774e20dd757b$export$8ac5a980ecf86d70, (v) => $056f774e20dd757b$export$8ac5a980ecf86d70 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-ramp", () => $056f774e20dd757b$export$74af90f7b59a4a0b, (v) => $056f774e20dd757b$export$74af90f7b59a4a0b = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-fill", () => $056f774e20dd757b$export$79e384500d3b9c9d, (v) => $056f774e20dd757b$export$79e384500d3b9c9d = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-fill--right", () => $056f774e20dd757b$export$4ad5f741edcaf768, (v) => $056f774e20dd757b$export$4ad5f741edcaf768 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider--range", () => $056f774e20dd757b$export$91bbf9ca430efa38, (v) => $056f774e20dd757b$export$91bbf9ca430efa38 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-handle", () => $056f774e20dd757b$export$4e56e324ec89fe53, (v) => $056f774e20dd757b$export$4e56e324ec89fe53 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial-handle", () => $056f774e20dd757b$export$41c59246a9248fa9, (v) => $056f774e20dd757b$export$41c59246a9248fa9 = v);
$parcel$export($056f774e20dd757b$exports, "is-dragged", () => $056f774e20dd757b$export$8778c911bed6c759, (v) => $056f774e20dd757b$export$8778c911bed6c759 = v);
$parcel$export($056f774e20dd757b$exports, "is-focused", () => $056f774e20dd757b$export$e7dc768d35940237, (v) => $056f774e20dd757b$export$e7dc768d35940237 = v);
$parcel$export($056f774e20dd757b$exports, "is-tophandle", () => $056f774e20dd757b$export$e7c8b64dd65a8bd6, (v) => $056f774e20dd757b$export$e7c8b64dd65a8bd6 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-input", () => $056f774e20dd757b$export$fdecbf00e674772b, (v) => $056f774e20dd757b$export$fdecbf00e674772b = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial-input", () => $056f774e20dd757b$export$39043e8612543a9e, (v) => $056f774e20dd757b$export$39043e8612543a9e = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-label", () => $056f774e20dd757b$export$87d97f82d3be9540, (v) => $056f774e20dd757b$export$87d97f82d3be9540 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial-label", () => $056f774e20dd757b$export$d93200a6e46e9ce7, (v) => $056f774e20dd757b$export$d93200a6e46e9ce7 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial-value", () => $056f774e20dd757b$export$be548803c10dddf5, (v) => $056f774e20dd757b$export$be548803c10dddf5 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-ticks", () => $056f774e20dd757b$export$8015a78273599416, (v) => $056f774e20dd757b$export$8015a78273599416 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-tick", () => $056f774e20dd757b$export$daf7ddf4a129876d, (v) => $056f774e20dd757b$export$daf7ddf4a129876d = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider-tickLabel", () => $056f774e20dd757b$export$e045256579534563, (v) => $056f774e20dd757b$export$e045256579534563 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider--color", () => $056f774e20dd757b$export$c0271c7b757e2c6d, (v) => $056f774e20dd757b$export$c0271c7b757e2c6d = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Dial--small", () => $056f774e20dd757b$export$40db493959f853b2, (v) => $056f774e20dd757b$export$40db493959f853b2 = v);
$parcel$export($056f774e20dd757b$exports, "is-disabled", () => $056f774e20dd757b$export$d35bc1e505d1ebbf, (v) => $056f774e20dd757b$export$d35bc1e505d1ebbf = v);
$parcel$export($056f774e20dd757b$exports, "is-hovered", () => $056f774e20dd757b$export$b8813cd5d7824ce7, (v) => $056f774e20dd757b$export$b8813cd5d7824ce7 = v);
$parcel$export($056f774e20dd757b$exports, "u-isGrabbing", () => $056f774e20dd757b$export$af9e6e484daea602, (v) => $056f774e20dd757b$export$af9e6e484daea602 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider--filled", () => $056f774e20dd757b$export$743466ce5e272176, (v) => $056f774e20dd757b$export$743466ce5e272176 = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider--ramp", () => $056f774e20dd757b$export$87c47a8a21ea9aa, (v) => $056f774e20dd757b$export$87c47a8a21ea9aa = v);
$parcel$export($056f774e20dd757b$exports, "spectrum-Slider--label-side", () => $056f774e20dd757b$export$fc5a803c4caf36a, (v) => $056f774e20dd757b$export$fc5a803c4caf36a = v);
var $056f774e20dd757b$export$fc844a18ff837543;
var $056f774e20dd757b$export$db619d28010f1dd7;
var $056f774e20dd757b$export$3d0239f4af6225c0;
var $056f774e20dd757b$export$eed070f7d409a4eb;
var $056f774e20dd757b$export$9a4ea6c1b342a483;
var $056f774e20dd757b$export$7e6c269c6bbb2ffa;
var $056f774e20dd757b$export$6a95ef18f88e804b;
var $056f774e20dd757b$export$f64ec32f85626909;
var $056f774e20dd757b$export$2183ef1701a88013;
var $056f774e20dd757b$export$d1c0699c6d985532;
var $056f774e20dd757b$export$16e664b3091a0b47;
var $056f774e20dd757b$export$8ac5a980ecf86d70;
var $056f774e20dd757b$export$74af90f7b59a4a0b;
var $056f774e20dd757b$export$79e384500d3b9c9d;
var $056f774e20dd757b$export$4ad5f741edcaf768;
var $056f774e20dd757b$export$91bbf9ca430efa38;
var $056f774e20dd757b$export$4e56e324ec89fe53;
var $056f774e20dd757b$export$41c59246a9248fa9;
var $056f774e20dd757b$export$8778c911bed6c759;
var $056f774e20dd757b$export$e7dc768d35940237;
var $056f774e20dd757b$export$e7c8b64dd65a8bd6;
var $056f774e20dd757b$export$fdecbf00e674772b;
var $056f774e20dd757b$export$39043e8612543a9e;
var $056f774e20dd757b$export$87d97f82d3be9540;
var $056f774e20dd757b$export$d93200a6e46e9ce7;
var $056f774e20dd757b$export$be548803c10dddf5;
var $056f774e20dd757b$export$8015a78273599416;
var $056f774e20dd757b$export$daf7ddf4a129876d;
var $056f774e20dd757b$export$e045256579534563;
var $056f774e20dd757b$export$c0271c7b757e2c6d;
var $056f774e20dd757b$export$40db493959f853b2;
var $056f774e20dd757b$export$d35bc1e505d1ebbf;
var $056f774e20dd757b$export$b8813cd5d7824ce7;
var $056f774e20dd757b$export$af9e6e484daea602;
var $056f774e20dd757b$export$743466ce5e272176;
var $056f774e20dd757b$export$87c47a8a21ea9aa;
var $056f774e20dd757b$export$fc5a803c4caf36a;
$056f774e20dd757b$export$fc844a18ff837543 = "_spectrum-Slider_e4b6ba";
$056f774e20dd757b$export$db619d28010f1dd7 = "_spectrum-Dial_e4b6ba";
$056f774e20dd757b$export$3d0239f4af6225c0 = "_spectrum-Slider--positionTop_e4b6ba";
$056f774e20dd757b$export$eed070f7d409a4eb = "_spectrum-Slider-controls_e4b6ba";
$056f774e20dd757b$export$9a4ea6c1b342a483 = "_spectrum-Dial-controls_e4b6ba";
$056f774e20dd757b$export$7e6c269c6bbb2ffa = "_spectrum-Slider--positionSide_e4b6ba";
$056f774e20dd757b$export$6a95ef18f88e804b = "_spectrum-Slider-labelContainer_e4b6ba";
$056f774e20dd757b$export$f64ec32f85626909 = "_spectrum-Dial-labelContainer_e4b6ba";
$056f774e20dd757b$export$2183ef1701a88013 = "_spectrum-Slider-valueLabelContainer_e4b6ba";
$056f774e20dd757b$export$d1c0699c6d985532 = "_spectrum-Slider-value_e4b6ba";
$056f774e20dd757b$export$16e664b3091a0b47 = "_spectrum-Slider-track_e4b6ba";
$056f774e20dd757b$export$8ac5a980ecf86d70 = "_spectrum-Slider-buffer_e4b6ba";
$056f774e20dd757b$export$74af90f7b59a4a0b = "_spectrum-Slider-ramp_e4b6ba";
$056f774e20dd757b$export$79e384500d3b9c9d = "_spectrum-Slider-fill_e4b6ba";
$056f774e20dd757b$export$4ad5f741edcaf768 = "_spectrum-Slider-fill--right_e4b6ba";
$056f774e20dd757b$export$91bbf9ca430efa38 = "_spectrum-Slider--range_e4b6ba";
$056f774e20dd757b$export$4e56e324ec89fe53 = "_spectrum-Slider-handle_e4b6ba";
$056f774e20dd757b$export$41c59246a9248fa9 = "_spectrum-Dial-handle_e4b6ba";
$056f774e20dd757b$export$8778c911bed6c759 = "_is-dragged_e4b6ba";
$056f774e20dd757b$export$e7dc768d35940237 = "_is-focused_e4b6ba";
$056f774e20dd757b$export$e7c8b64dd65a8bd6 = "_is-tophandle_e4b6ba";
$056f774e20dd757b$export$fdecbf00e674772b = "_spectrum-Slider-input_e4b6ba";
$056f774e20dd757b$export$39043e8612543a9e = "_spectrum-Dial-input_e4b6ba";
$056f774e20dd757b$export$87d97f82d3be9540 = "_spectrum-Slider-label_e4b6ba";
$056f774e20dd757b$export$d93200a6e46e9ce7 = "_spectrum-Dial-label_e4b6ba";
$056f774e20dd757b$export$be548803c10dddf5 = "_spectrum-Dial-value_e4b6ba";
$056f774e20dd757b$export$8015a78273599416 = "_spectrum-Slider-ticks_e4b6ba";
$056f774e20dd757b$export$daf7ddf4a129876d = "_spectrum-Slider-tick_e4b6ba";
$056f774e20dd757b$export$e045256579534563 = "_spectrum-Slider-tickLabel_e4b6ba";
$056f774e20dd757b$export$c0271c7b757e2c6d = "_spectrum-Slider--color_e4b6ba";
$056f774e20dd757b$export$40db493959f853b2 = "_spectrum-Dial--small_e4b6ba";
$056f774e20dd757b$export$d35bc1e505d1ebbf = "_is-disabled_e4b6ba";
$056f774e20dd757b$export$b8813cd5d7824ce7 = "_is-hovered_e4b6ba";
$056f774e20dd757b$export$af9e6e484daea602 = "_u-isGrabbing_e4b6ba";
$056f774e20dd757b$export$743466ce5e272176 = "_spectrum-Slider--filled_e4b6ba";
$056f774e20dd757b$export$87c47a8a21ea9aa = "_spectrum-Slider--ramp_e4b6ba";
$056f774e20dd757b$export$fc5a803c4caf36a = "_spectrum-Slider--label-side_e4b6ba";





function $9a031c6cbb36eb9e$var$SliderBase(props, ref) {
    props = $fzZdD$useProviderProps(props);
    let { isDisabled: isDisabled , children: children , classes: classes , style: style , labelPosition: labelPosition = 'top' , getValueLabel: getValueLabel , showValueLabel: showValueLabel = !!props.label , formatOptions: formatOptions , minValue: minValue = 0 , maxValue: maxValue = 100 , ...otherProps } = props;
    let { styleProps: styleProps  } = $fzZdD$useStyleProps(otherProps);
    // `Math.abs(Math.sign(a) - Math.sign(b)) === 2` is true if the values have a different sign.
    let alwaysDisplaySign = Math.abs(Math.sign(minValue) - Math.sign(maxValue)) === 2;
    if (alwaysDisplaySign) {
        if (formatOptions != null) {
            if (!('signDisplay' in formatOptions)) formatOptions = {
                ...formatOptions,
                // @ts-ignore
                signDisplay: 'exceptZero'
            };
        } else // @ts-ignore
        formatOptions = {
            signDisplay: 'exceptZero'
        };
    }
    const formatter = $fzZdD$useNumberFormatter(formatOptions);
    const state = $fzZdD$useSliderState({
        ...props,
        numberFormatter: formatter,
        minValue: minValue,
        maxValue: maxValue
    });
    let trackRef = $fzZdD$useRef();
    let { groupProps: groupProps , trackProps: trackProps , labelProps: labelProps , outputProps: outputProps  } = $fzZdD$useSlider(props, state, trackRef);
    let inputRef = $fzZdD$useRef();
    let domRef = $fzZdD$useFocusableRef(ref, inputRef);
    let displayValue = '';
    let maxLabelLength = undefined;
    if (typeof getValueLabel === 'function') {
        displayValue = getValueLabel(state.values);
        switch(state.values.length){
            case 1:
                maxLabelLength = Math.max(getValueLabel([
                    minValue
                ]).length, getValueLabel([
                    maxValue
                ]).length);
                break;
            case 2:
                // Try all possible combinations of min and max values.
                maxLabelLength = Math.max(getValueLabel([
                    minValue,
                    minValue
                ]).length, getValueLabel([
                    minValue,
                    maxValue
                ]).length, getValueLabel([
                    maxValue,
                    minValue
                ]).length, getValueLabel([
                    maxValue,
                    maxValue
                ]).length);
                break;
            default:
                throw new Error('Only sliders with 1 or 2 handles are supported!');
        }
    } else {
        maxLabelLength = Math.max([
            ...formatter.format(minValue)
        ].length, [
            ...formatter.format(maxValue)
        ].length);
        switch(state.values.length){
            case 1:
                displayValue = state.getThumbValueLabel(0);
                break;
            case 2:
                // This should really use the NumberFormat#formatRange proposal...
                // https://github.com/tc39/ecma402/issues/393
                // https://github.com/tc39/proposal-intl-numberformat-v3#formatrange-ecma-402-393
                displayValue = `${state.getThumbValueLabel(0)} – ${state.getThumbValueLabel(1)}`;
                maxLabelLength = 3 + 2 * Math.max(maxLabelLength, [
                    ...formatter.format(minValue)
                ].length, [
                    ...formatter.format(maxValue)
                ].length);
                break;
            default:
                throw new Error('Only sliders with 1 or 2 handles are supported!');
        }
    }
    let labelNode = /*#__PURE__*/ $fzZdD$react.createElement("label", {
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-label'),
        ...labelProps
    }, props.label);
    let valueNode = /*#__PURE__*/ $fzZdD$react.createElement("output", {
        ...outputProps,
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-value'),
        style: maxLabelLength && {
            width: `${maxLabelLength}ch`,
            minWidth: `${maxLabelLength}ch`
        }
    }, displayValue);
    return(/*#__PURE__*/ $fzZdD$react.createElement("div", {
        ref: domRef,
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider', {
            'spectrum-Slider--positionTop': labelPosition === 'top',
            'spectrum-Slider--positionSide': labelPosition === 'side',
            'is-disabled': isDisabled
        }, classes, styleProps.className),
        style: {
            ...style,
            ...styleProps.style
        },
        ...groupProps
    }, props.label && /*#__PURE__*/ $fzZdD$react.createElement("div", {
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-labelContainer'),
        role: "presentation"
    }, props.label && labelNode, labelPosition === 'top' && showValueLabel && valueNode), /*#__PURE__*/ $fzZdD$react.createElement("div", {
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-controls'),
        ref: trackRef,
        ...trackProps,
        role: "presentation"
    }, children({
        trackRef: trackRef,
        inputRef: inputRef,
        state: state
    })), labelPosition === 'side' && /*#__PURE__*/ $fzZdD$react.createElement("div", {
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-valueLabelContainer'),
        role: "presentation"
    }, showValueLabel && valueNode)));
}
const $9a031c6cbb36eb9e$export$9418495bb635ebde = /*#__PURE__*/ $fzZdD$react.forwardRef($9a031c6cbb36eb9e$var$SliderBase);











function $3c6493cdfc81df15$export$2c1b491743890dec(props) {
    let { index: index , inputRef: inputRef , state: state  } = props;
    let backupRef = $fzZdD$useRef();
    inputRef = inputRef || backupRef;
    let { thumbProps: thumbProps , inputProps: inputProps  } = $fzZdD$useSliderThumb({
        ...props,
        inputRef: inputRef
    }, state);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $fzZdD$useHover({
    });
    let { direction: direction  } = $fzZdD$useLocale();
    let cssDirection = direction === 'rtl' ? 'right' : 'left';
    return(/*#__PURE__*/ $fzZdD$react.createElement($fzZdD$FocusRing, {
        within: true,
        focusRingClass: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'is-focused')
    }, /*#__PURE__*/ $fzZdD$react.createElement("div", {
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-handle', {
            'is-hovered': isHovered,
            'is-dragged': state.isThumbDragging(index),
            'is-tophandle': state.focusedThumb === index
        }),
        style: {
            [cssDirection]: `${state.getThumbPercent(index) * 100}%`
        },
        ...$fzZdD$mergeProps(thumbProps, hoverProps),
        role: "presentation"
    }, /*#__PURE__*/ $fzZdD$react.createElement($fzZdD$VisuallyHidden, null, /*#__PURE__*/ $fzZdD$react.createElement("input", {
        className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-input'),
        ref: inputRef,
        ...inputProps
    })))));
}




function $1e789319b297f2c1$var$Slider(props, ref) {
    let { onChange: onChange , onChangeEnd: onChangeEnd , value: value , defaultValue: defaultValue , isFilled: isFilled , fillOffset: fillOffset , trackGradient: trackGradient , getValueLabel: getValueLabel , ...otherProps } = props;
    let baseProps = {
        ...otherProps,
        // Normalize `value: number[]` to `value: number`
        value: value != null ? [
            value
        ] : undefined,
        defaultValue: defaultValue != null ? [
            defaultValue
        ] : undefined,
        onChange: (v)=>{
            onChange?.(v[0]);
        },
        onChangeEnd: (v)=>{
            onChangeEnd?.(v[0]);
        },
        getValueLabel: getValueLabel ? ([v])=>getValueLabel(v)
         : undefined
    };
    let { direction: direction  } = $fzZdD$useLocale();
    return(/*#__PURE__*/ $fzZdD$react.createElement($9a031c6cbb36eb9e$export$9418495bb635ebde, {
        ...baseProps,
        ref: ref,
        classes: {
            'spectrum-Slider--filled': isFilled && fillOffset == null
        },
        style: // @ts-ignore
        {
            '--spectrum-slider-track-gradient': trackGradient && `linear-gradient(to ${direction === 'ltr' ? 'right' : 'left'}, ${trackGradient.join(', ')})`
        }
    }, ({ trackRef: trackRef , inputRef: inputRef , state: state  })=>{
        fillOffset = fillOffset != null ? $fzZdD$clamp(fillOffset, state.getThumbMinValue(0), state.getThumbMaxValue(0)) : fillOffset;
        let cssDirection = direction === 'rtl' ? 'right' : 'left';
        let lowerTrack = /*#__PURE__*/ $fzZdD$react.createElement("div", {
            className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-track'),
            style: {
                width: `${state.getThumbPercent(0) * 100}%`,
                // TODO not sure if it has advantages, but this could also be implemented as CSS calc():
                // .track::before {
                //    background-size: calc((1/ (var(--width)/100)) * 100%);
                //    width: calc(var(--width) * 1%)M
                // }
                // @ts-ignore
                '--spectrum-track-background-size': `${1 / state.getThumbPercent(0) * 100}%`,
                '--spectrum-track-background-position': direction === 'ltr' ? '0' : '100%'
            }
        });
        let upperTrack = /*#__PURE__*/ $fzZdD$react.createElement("div", {
            className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-track'),
            style: {
                width: `${(1 - state.getThumbPercent(0)) * 100}%`,
                // @ts-ignore
                '--spectrum-track-background-size': `${1 / (1 - state.getThumbPercent(0)) * 100}%`,
                '--spectrum-track-background-position': direction === 'ltr' ? '100%' : '0'
            }
        });
        let filledTrack = null;
        if (isFilled && fillOffset != null) {
            let width = state.getThumbPercent(0) - state.getValuePercent(fillOffset);
            let isRightOfOffset = width > 0;
            let offset = isRightOfOffset ? state.getValuePercent(fillOffset) : state.getThumbPercent(0);
            filledTrack = /*#__PURE__*/ $fzZdD$react.createElement("div", {
                className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-fill', {
                    'spectrum-Slider-fill--right': isRightOfOffset
                }),
                style: {
                    [cssDirection]: `${offset * 100}%`,
                    width: `${Math.abs(width) * 100}%`
                }
            });
        }
        return(/*#__PURE__*/ $fzZdD$react.createElement($fzZdD$react.Fragment, null, lowerTrack, /*#__PURE__*/ $fzZdD$react.createElement($3c6493cdfc81df15$export$2c1b491743890dec, {
            index: 0,
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            inputRef: inputRef,
            state: state
        }), upperTrack, filledTrack));
    }));
}
/**
 * Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.
 */ const $1e789319b297f2c1$export$472062a354075cee = /*#__PURE__*/ $fzZdD$react.forwardRef($1e789319b297f2c1$var$Slider);


var $831a9f6b590af30c$exports = {};

$parcel$export($831a9f6b590af30c$exports, "RangeSlider", () => $831a9f6b590af30c$export$826424dabc3dd705);

var $3192a139e6b062da$exports = {};
var $1b1b145df424521c$exports = {};
$1b1b145df424521c$exports = JSON.parse("{\"maximum\":\"أقصى\",\"minimum\":\"أدنى\"}");


var $6cecda258ae87465$exports = {};
$6cecda258ae87465$exports = JSON.parse("{\"maximum\":\"Максимум\",\"minimum\":\"Минимум\"}");


var $41c6a26210a13b9e$exports = {};
$41c6a26210a13b9e$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $606ecc96d4db290f$exports = {};
$606ecc96d4db290f$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $2e5892035a50c4bd$exports = {};
$2e5892035a50c4bd$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $0b849ad1339d62fb$exports = {};
$0b849ad1339d62fb$exports = JSON.parse("{\"maximum\":\"Μέγιστο\",\"minimum\":\"Ελάχιστο\"}");


var $b836bde8669f4e91$exports = {};
$b836bde8669f4e91$exports = JSON.parse("{\"minimum\":\"Minimum\",\"maximum\":\"Maximum\"}");


var $6361a0b74d6f3ae3$exports = {};
$6361a0b74d6f3ae3$exports = JSON.parse("{\"maximum\":\"Máximo\",\"minimum\":\"Mínimo\"}");


var $5bc5b3b6078d4afe$exports = {};
$5bc5b3b6078d4afe$exports = JSON.parse("{\"maximum\":\"Maksimaalne\",\"minimum\":\"Minimaalne\"}");


var $e8eadfa3e02fa6c1$exports = {};
$e8eadfa3e02fa6c1$exports = JSON.parse("{\"maximum\":\"Maksimi\",\"minimum\":\"Minimi\"}");


var $f64f9c4cc0e80829$exports = {};
$f64f9c4cc0e80829$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $b3715ea6e566815d$exports = {};
$b3715ea6e566815d$exports = JSON.parse("{\"maximum\":\"מקסימום\",\"minimum\":\"מינימום\"}");


var $97e8569a88efa8a3$exports = {};
$97e8569a88efa8a3$exports = JSON.parse("{\"maximum\":\"Najviše\",\"minimum\":\"Najmanje\"}");


var $1e89c60581254ad0$exports = {};
$1e89c60581254ad0$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $b6ab49820f1370fd$exports = {};
$b6ab49820f1370fd$exports = JSON.parse("{\"maximum\":\"Massimo\",\"minimum\":\"Minimo\"}");


var $305e5de77548e411$exports = {};
$305e5de77548e411$exports = JSON.parse("{\"maximum\":\"最大\",\"minimum\":\"最小\"}");


var $4d8abd6a1b406c34$exports = {};
$4d8abd6a1b406c34$exports = JSON.parse("{\"maximum\":\"최대\",\"minimum\":\"최소\"}");


var $994130da881504b2$exports = {};
$994130da881504b2$exports = JSON.parse("{\"maximum\":\"Daugiausia\",\"minimum\":\"Mažiausia\"}");


var $006fd596c97e7d59$exports = {};
$006fd596c97e7d59$exports = JSON.parse("{\"maximum\":\"Maksimālā vērtība\",\"minimum\":\"Minimālā vērtība\"}");


var $50690e485da7f528$exports = {};
$50690e485da7f528$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $fa6ba25c9447fea0$exports = {};
$fa6ba25c9447fea0$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $b6e032b0a5fe1ffe$exports = {};
$b6e032b0a5fe1ffe$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $5dc8a89823934b0a$exports = {};
$5dc8a89823934b0a$exports = JSON.parse("{\"maximum\":\"Máximo\",\"minimum\":\"Mínimo\"}");


var $008dbc0ec2a18c2d$exports = {};
$008dbc0ec2a18c2d$exports = JSON.parse("{\"maximum\":\"Máximo\",\"minimum\":\"Mínimo\"}");


var $cd76ad79e3baef9f$exports = {};
$cd76ad79e3baef9f$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $5c50f42c7969c137$exports = {};
$5c50f42c7969c137$exports = JSON.parse("{\"maximum\":\"Максимум\",\"minimum\":\"Минимум\"}");


var $4c027c4ade0faf76$exports = {};
$4c027c4ade0faf76$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $fa2a287d43561a1e$exports = {};
$fa2a287d43561a1e$exports = JSON.parse("{\"maximum\":\"Največji\",\"minimum\":\"Najmanj\"}");


var $364bd37c6f5d7225$exports = {};
$364bd37c6f5d7225$exports = JSON.parse("{\"maximum\":\"Najviše\",\"minimum\":\"Najmanje\"}");


var $db8722927357e78d$exports = {};
$db8722927357e78d$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $f97b35597b2ed943$exports = {};
$f97b35597b2ed943$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $f3600da1b5b8d542$exports = {};
$f3600da1b5b8d542$exports = JSON.parse("{\"maximum\":\"Максимум\",\"minimum\":\"Мінімум\"}");


var $b16ad7584d2dc2a9$exports = {};
$b16ad7584d2dc2a9$exports = JSON.parse("{\"maximum\":\"最大\",\"minimum\":\"最小\"}");


var $132637af5ccd33b8$exports = {};
$132637af5ccd33b8$exports = JSON.parse("{\"maximum\":\"最大值\",\"minimum\":\"最小值\"}");


$3192a139e6b062da$exports = {
    "ar-AE": $1b1b145df424521c$exports,
    "bg-BG": $6cecda258ae87465$exports,
    "cs-CZ": $41c6a26210a13b9e$exports,
    "da-DK": $606ecc96d4db290f$exports,
    "de-DE": $2e5892035a50c4bd$exports,
    "el-GR": $0b849ad1339d62fb$exports,
    "en-US": $b836bde8669f4e91$exports,
    "es-ES": $6361a0b74d6f3ae3$exports,
    "et-EE": $5bc5b3b6078d4afe$exports,
    "fi-FI": $e8eadfa3e02fa6c1$exports,
    "fr-FR": $f64f9c4cc0e80829$exports,
    "he-IL": $b3715ea6e566815d$exports,
    "hr-HR": $97e8569a88efa8a3$exports,
    "hu-HU": $1e89c60581254ad0$exports,
    "it-IT": $b6ab49820f1370fd$exports,
    "ja-JP": $305e5de77548e411$exports,
    "ko-KR": $4d8abd6a1b406c34$exports,
    "lt-LT": $994130da881504b2$exports,
    "lv-LV": $006fd596c97e7d59$exports,
    "nb-NO": $50690e485da7f528$exports,
    "nl-NL": $fa6ba25c9447fea0$exports,
    "pl-PL": $b6e032b0a5fe1ffe$exports,
    "pt-BR": $5dc8a89823934b0a$exports,
    "pt-PT": $008dbc0ec2a18c2d$exports,
    "ro-RO": $cd76ad79e3baef9f$exports,
    "ru-RU": $5c50f42c7969c137$exports,
    "sk-SK": $4c027c4ade0faf76$exports,
    "sl-SI": $fa2a287d43561a1e$exports,
    "sr-SP": $364bd37c6f5d7225$exports,
    "sv-SE": $db8722927357e78d$exports,
    "tr-TR": $f97b35597b2ed943$exports,
    "uk-UA": $f3600da1b5b8d542$exports,
    "zh-CN": $b16ad7584d2dc2a9$exports,
    "zh-TW": $132637af5ccd33b8$exports
};







function $831a9f6b590af30c$var$RangeSlider(props, ref) {
    let { onChange: onChange , onChangeEnd: onChangeEnd , value: value , defaultValue: defaultValue , getValueLabel: getValueLabel , ...otherProps } = props;
    let baseProps = {
        ...otherProps,
        value: value != null ? [
            value.start,
            value.end
        ] : undefined,
        defaultValue: defaultValue != null ? [
            defaultValue.start,
            defaultValue.end
        ] : [
            props.minValue ?? 0,
            props.maxValue ?? 100
        ],
        onChange (v) {
            onChange?.({
                start: v[0],
                end: v[1]
            });
        },
        onChangeEnd (v) {
            onChangeEnd?.({
                start: v[0],
                end: v[1]
            });
        },
        getValueLabel: getValueLabel ? ([start, end])=>getValueLabel({
                start: start,
                end: end
            })
         : undefined
    };
    let formatter = $fzZdD$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($3192a139e6b062da$exports)));
    let { direction: direction  } = $fzZdD$useLocale();
    return(/*#__PURE__*/ $fzZdD$react.createElement($9a031c6cbb36eb9e$export$9418495bb635ebde, {
        ...baseProps,
        classes: 'spectrum-Slider--range',
        ref: ref
    }, ({ trackRef: trackRef , inputRef: inputRef , state: state  })=>{
        let cssDirection = direction === 'rtl' ? 'right' : 'left';
        return(/*#__PURE__*/ $fzZdD$react.createElement($fzZdD$react.Fragment, null, /*#__PURE__*/ $fzZdD$react.createElement("div", {
            className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-track'),
            style: {
                width: `${state.getThumbPercent(0) * 100}%`
            }
        }), /*#__PURE__*/ $fzZdD$react.createElement($3c6493cdfc81df15$export$2c1b491743890dec, {
            index: 0,
            "aria-label": formatter('minimum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            inputRef: inputRef,
            state: state
        }), /*#__PURE__*/ $fzZdD$react.createElement("div", {
            className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-track'),
            style: {
                [cssDirection]: `${state.getThumbPercent(0) * 100}%`,
                width: `${Math.abs(state.getThumbPercent(0) - state.getThumbPercent(1)) * 100}%`
            }
        }), /*#__PURE__*/ $fzZdD$react.createElement($3c6493cdfc81df15$export$2c1b491743890dec, {
            index: 1,
            "aria-label": formatter('maximum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            state: state
        }), /*#__PURE__*/ $fzZdD$react.createElement("div", {
            className: $fzZdD$classNames((/*@__PURE__*/$parcel$interopDefault($056f774e20dd757b$exports)), 'spectrum-Slider-track'),
            style: {
                width: `${(1 - state.getThumbPercent(1)) * 100}%`
            }
        })));
    }));
}
/**
 * RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.
 */ const $831a9f6b590af30c$export$826424dabc3dd705 = /*#__PURE__*/ $fzZdD$react.forwardRef($831a9f6b590af30c$var$RangeSlider);




export {$1e789319b297f2c1$export$472062a354075cee as Slider, $831a9f6b590af30c$export$826424dabc3dd705 as RangeSlider};
//# sourceMappingURL=module.js.map
