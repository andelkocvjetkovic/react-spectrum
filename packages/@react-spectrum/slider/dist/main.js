require("./main.css");
var $aNSXN$reactariautils = require("@react-aria/utils");
var $aNSXN$reactspectrumutils = require("@react-spectrum/utils");
var $aNSXN$react = require("react");
var $aNSXN$reactariai18n = require("@react-aria/i18n");
var $aNSXN$reactstatelyslider = require("@react-stately/slider");
var $aNSXN$reactspectrumprovider = require("@react-spectrum/provider");
var $aNSXN$reactariaslider = require("@react-aria/slider");
var $aNSXN$reactariafocus = require("@react-aria/focus");
var $aNSXN$reactariainteractions = require("@react-aria/interactions");
var $aNSXN$reactariavisuallyhidden = require("@react-aria/visually-hidden");

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
var $004fd48cd418b4b6$exports = {};

$parcel$export($004fd48cd418b4b6$exports, "Slider", () => $004fd48cd418b4b6$export$472062a354075cee);






var $1b0036f7437cfd0c$exports = {};

$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider", () => $1b0036f7437cfd0c$export$fc844a18ff837543, (v) => $1b0036f7437cfd0c$export$fc844a18ff837543 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial", () => $1b0036f7437cfd0c$export$db619d28010f1dd7, (v) => $1b0036f7437cfd0c$export$db619d28010f1dd7 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider--positionTop", () => $1b0036f7437cfd0c$export$3d0239f4af6225c0, (v) => $1b0036f7437cfd0c$export$3d0239f4af6225c0 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-controls", () => $1b0036f7437cfd0c$export$eed070f7d409a4eb, (v) => $1b0036f7437cfd0c$export$eed070f7d409a4eb = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial-controls", () => $1b0036f7437cfd0c$export$9a4ea6c1b342a483, (v) => $1b0036f7437cfd0c$export$9a4ea6c1b342a483 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider--positionSide", () => $1b0036f7437cfd0c$export$7e6c269c6bbb2ffa, (v) => $1b0036f7437cfd0c$export$7e6c269c6bbb2ffa = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-labelContainer", () => $1b0036f7437cfd0c$export$6a95ef18f88e804b, (v) => $1b0036f7437cfd0c$export$6a95ef18f88e804b = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial-labelContainer", () => $1b0036f7437cfd0c$export$f64ec32f85626909, (v) => $1b0036f7437cfd0c$export$f64ec32f85626909 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-valueLabelContainer", () => $1b0036f7437cfd0c$export$2183ef1701a88013, (v) => $1b0036f7437cfd0c$export$2183ef1701a88013 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-value", () => $1b0036f7437cfd0c$export$d1c0699c6d985532, (v) => $1b0036f7437cfd0c$export$d1c0699c6d985532 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-track", () => $1b0036f7437cfd0c$export$16e664b3091a0b47, (v) => $1b0036f7437cfd0c$export$16e664b3091a0b47 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-buffer", () => $1b0036f7437cfd0c$export$8ac5a980ecf86d70, (v) => $1b0036f7437cfd0c$export$8ac5a980ecf86d70 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-ramp", () => $1b0036f7437cfd0c$export$74af90f7b59a4a0b, (v) => $1b0036f7437cfd0c$export$74af90f7b59a4a0b = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-fill", () => $1b0036f7437cfd0c$export$79e384500d3b9c9d, (v) => $1b0036f7437cfd0c$export$79e384500d3b9c9d = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-fill--right", () => $1b0036f7437cfd0c$export$4ad5f741edcaf768, (v) => $1b0036f7437cfd0c$export$4ad5f741edcaf768 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider--range", () => $1b0036f7437cfd0c$export$91bbf9ca430efa38, (v) => $1b0036f7437cfd0c$export$91bbf9ca430efa38 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-handle", () => $1b0036f7437cfd0c$export$4e56e324ec89fe53, (v) => $1b0036f7437cfd0c$export$4e56e324ec89fe53 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial-handle", () => $1b0036f7437cfd0c$export$41c59246a9248fa9, (v) => $1b0036f7437cfd0c$export$41c59246a9248fa9 = v);
$parcel$export($1b0036f7437cfd0c$exports, "is-dragged", () => $1b0036f7437cfd0c$export$8778c911bed6c759, (v) => $1b0036f7437cfd0c$export$8778c911bed6c759 = v);
$parcel$export($1b0036f7437cfd0c$exports, "is-focused", () => $1b0036f7437cfd0c$export$e7dc768d35940237, (v) => $1b0036f7437cfd0c$export$e7dc768d35940237 = v);
$parcel$export($1b0036f7437cfd0c$exports, "is-tophandle", () => $1b0036f7437cfd0c$export$e7c8b64dd65a8bd6, (v) => $1b0036f7437cfd0c$export$e7c8b64dd65a8bd6 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-input", () => $1b0036f7437cfd0c$export$fdecbf00e674772b, (v) => $1b0036f7437cfd0c$export$fdecbf00e674772b = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial-input", () => $1b0036f7437cfd0c$export$39043e8612543a9e, (v) => $1b0036f7437cfd0c$export$39043e8612543a9e = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-label", () => $1b0036f7437cfd0c$export$87d97f82d3be9540, (v) => $1b0036f7437cfd0c$export$87d97f82d3be9540 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial-label", () => $1b0036f7437cfd0c$export$d93200a6e46e9ce7, (v) => $1b0036f7437cfd0c$export$d93200a6e46e9ce7 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial-value", () => $1b0036f7437cfd0c$export$be548803c10dddf5, (v) => $1b0036f7437cfd0c$export$be548803c10dddf5 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-ticks", () => $1b0036f7437cfd0c$export$8015a78273599416, (v) => $1b0036f7437cfd0c$export$8015a78273599416 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-tick", () => $1b0036f7437cfd0c$export$daf7ddf4a129876d, (v) => $1b0036f7437cfd0c$export$daf7ddf4a129876d = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider-tickLabel", () => $1b0036f7437cfd0c$export$e045256579534563, (v) => $1b0036f7437cfd0c$export$e045256579534563 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider--color", () => $1b0036f7437cfd0c$export$c0271c7b757e2c6d, (v) => $1b0036f7437cfd0c$export$c0271c7b757e2c6d = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Dial--small", () => $1b0036f7437cfd0c$export$40db493959f853b2, (v) => $1b0036f7437cfd0c$export$40db493959f853b2 = v);
$parcel$export($1b0036f7437cfd0c$exports, "is-disabled", () => $1b0036f7437cfd0c$export$d35bc1e505d1ebbf, (v) => $1b0036f7437cfd0c$export$d35bc1e505d1ebbf = v);
$parcel$export($1b0036f7437cfd0c$exports, "is-hovered", () => $1b0036f7437cfd0c$export$b8813cd5d7824ce7, (v) => $1b0036f7437cfd0c$export$b8813cd5d7824ce7 = v);
$parcel$export($1b0036f7437cfd0c$exports, "u-isGrabbing", () => $1b0036f7437cfd0c$export$af9e6e484daea602, (v) => $1b0036f7437cfd0c$export$af9e6e484daea602 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider--filled", () => $1b0036f7437cfd0c$export$743466ce5e272176, (v) => $1b0036f7437cfd0c$export$743466ce5e272176 = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider--ramp", () => $1b0036f7437cfd0c$export$87c47a8a21ea9aa, (v) => $1b0036f7437cfd0c$export$87c47a8a21ea9aa = v);
$parcel$export($1b0036f7437cfd0c$exports, "spectrum-Slider--label-side", () => $1b0036f7437cfd0c$export$fc5a803c4caf36a, (v) => $1b0036f7437cfd0c$export$fc5a803c4caf36a = v);
var $1b0036f7437cfd0c$export$fc844a18ff837543;
var $1b0036f7437cfd0c$export$db619d28010f1dd7;
var $1b0036f7437cfd0c$export$3d0239f4af6225c0;
var $1b0036f7437cfd0c$export$eed070f7d409a4eb;
var $1b0036f7437cfd0c$export$9a4ea6c1b342a483;
var $1b0036f7437cfd0c$export$7e6c269c6bbb2ffa;
var $1b0036f7437cfd0c$export$6a95ef18f88e804b;
var $1b0036f7437cfd0c$export$f64ec32f85626909;
var $1b0036f7437cfd0c$export$2183ef1701a88013;
var $1b0036f7437cfd0c$export$d1c0699c6d985532;
var $1b0036f7437cfd0c$export$16e664b3091a0b47;
var $1b0036f7437cfd0c$export$8ac5a980ecf86d70;
var $1b0036f7437cfd0c$export$74af90f7b59a4a0b;
var $1b0036f7437cfd0c$export$79e384500d3b9c9d;
var $1b0036f7437cfd0c$export$4ad5f741edcaf768;
var $1b0036f7437cfd0c$export$91bbf9ca430efa38;
var $1b0036f7437cfd0c$export$4e56e324ec89fe53;
var $1b0036f7437cfd0c$export$41c59246a9248fa9;
var $1b0036f7437cfd0c$export$8778c911bed6c759;
var $1b0036f7437cfd0c$export$e7dc768d35940237;
var $1b0036f7437cfd0c$export$e7c8b64dd65a8bd6;
var $1b0036f7437cfd0c$export$fdecbf00e674772b;
var $1b0036f7437cfd0c$export$39043e8612543a9e;
var $1b0036f7437cfd0c$export$87d97f82d3be9540;
var $1b0036f7437cfd0c$export$d93200a6e46e9ce7;
var $1b0036f7437cfd0c$export$be548803c10dddf5;
var $1b0036f7437cfd0c$export$8015a78273599416;
var $1b0036f7437cfd0c$export$daf7ddf4a129876d;
var $1b0036f7437cfd0c$export$e045256579534563;
var $1b0036f7437cfd0c$export$c0271c7b757e2c6d;
var $1b0036f7437cfd0c$export$40db493959f853b2;
var $1b0036f7437cfd0c$export$d35bc1e505d1ebbf;
var $1b0036f7437cfd0c$export$b8813cd5d7824ce7;
var $1b0036f7437cfd0c$export$af9e6e484daea602;
var $1b0036f7437cfd0c$export$743466ce5e272176;
var $1b0036f7437cfd0c$export$87c47a8a21ea9aa;
var $1b0036f7437cfd0c$export$fc5a803c4caf36a;
$1b0036f7437cfd0c$export$fc844a18ff837543 = "_spectrum-Slider_e4b6ba";
$1b0036f7437cfd0c$export$db619d28010f1dd7 = "_spectrum-Dial_e4b6ba";
$1b0036f7437cfd0c$export$3d0239f4af6225c0 = "_spectrum-Slider--positionTop_e4b6ba";
$1b0036f7437cfd0c$export$eed070f7d409a4eb = "_spectrum-Slider-controls_e4b6ba";
$1b0036f7437cfd0c$export$9a4ea6c1b342a483 = "_spectrum-Dial-controls_e4b6ba";
$1b0036f7437cfd0c$export$7e6c269c6bbb2ffa = "_spectrum-Slider--positionSide_e4b6ba";
$1b0036f7437cfd0c$export$6a95ef18f88e804b = "_spectrum-Slider-labelContainer_e4b6ba";
$1b0036f7437cfd0c$export$f64ec32f85626909 = "_spectrum-Dial-labelContainer_e4b6ba";
$1b0036f7437cfd0c$export$2183ef1701a88013 = "_spectrum-Slider-valueLabelContainer_e4b6ba";
$1b0036f7437cfd0c$export$d1c0699c6d985532 = "_spectrum-Slider-value_e4b6ba";
$1b0036f7437cfd0c$export$16e664b3091a0b47 = "_spectrum-Slider-track_e4b6ba";
$1b0036f7437cfd0c$export$8ac5a980ecf86d70 = "_spectrum-Slider-buffer_e4b6ba";
$1b0036f7437cfd0c$export$74af90f7b59a4a0b = "_spectrum-Slider-ramp_e4b6ba";
$1b0036f7437cfd0c$export$79e384500d3b9c9d = "_spectrum-Slider-fill_e4b6ba";
$1b0036f7437cfd0c$export$4ad5f741edcaf768 = "_spectrum-Slider-fill--right_e4b6ba";
$1b0036f7437cfd0c$export$91bbf9ca430efa38 = "_spectrum-Slider--range_e4b6ba";
$1b0036f7437cfd0c$export$4e56e324ec89fe53 = "_spectrum-Slider-handle_e4b6ba";
$1b0036f7437cfd0c$export$41c59246a9248fa9 = "_spectrum-Dial-handle_e4b6ba";
$1b0036f7437cfd0c$export$8778c911bed6c759 = "_is-dragged_e4b6ba";
$1b0036f7437cfd0c$export$e7dc768d35940237 = "_is-focused_e4b6ba";
$1b0036f7437cfd0c$export$e7c8b64dd65a8bd6 = "_is-tophandle_e4b6ba";
$1b0036f7437cfd0c$export$fdecbf00e674772b = "_spectrum-Slider-input_e4b6ba";
$1b0036f7437cfd0c$export$39043e8612543a9e = "_spectrum-Dial-input_e4b6ba";
$1b0036f7437cfd0c$export$87d97f82d3be9540 = "_spectrum-Slider-label_e4b6ba";
$1b0036f7437cfd0c$export$d93200a6e46e9ce7 = "_spectrum-Dial-label_e4b6ba";
$1b0036f7437cfd0c$export$be548803c10dddf5 = "_spectrum-Dial-value_e4b6ba";
$1b0036f7437cfd0c$export$8015a78273599416 = "_spectrum-Slider-ticks_e4b6ba";
$1b0036f7437cfd0c$export$daf7ddf4a129876d = "_spectrum-Slider-tick_e4b6ba";
$1b0036f7437cfd0c$export$e045256579534563 = "_spectrum-Slider-tickLabel_e4b6ba";
$1b0036f7437cfd0c$export$c0271c7b757e2c6d = "_spectrum-Slider--color_e4b6ba";
$1b0036f7437cfd0c$export$40db493959f853b2 = "_spectrum-Dial--small_e4b6ba";
$1b0036f7437cfd0c$export$d35bc1e505d1ebbf = "_is-disabled_e4b6ba";
$1b0036f7437cfd0c$export$b8813cd5d7824ce7 = "_is-hovered_e4b6ba";
$1b0036f7437cfd0c$export$af9e6e484daea602 = "_u-isGrabbing_e4b6ba";
$1b0036f7437cfd0c$export$743466ce5e272176 = "_spectrum-Slider--filled_e4b6ba";
$1b0036f7437cfd0c$export$87c47a8a21ea9aa = "_spectrum-Slider--ramp_e4b6ba";
$1b0036f7437cfd0c$export$fc5a803c4caf36a = "_spectrum-Slider--label-side_e4b6ba";





function $affbb9e08b166bcd$var$SliderBase(props, ref) {
    props = $aNSXN$reactspectrumprovider.useProviderProps(props);
    let { isDisabled: isDisabled , children: children , classes: classes , style: style , labelPosition: labelPosition = 'top' , getValueLabel: getValueLabel , showValueLabel: showValueLabel = !!props.label , formatOptions: formatOptions , minValue: minValue = 0 , maxValue: maxValue = 100 , ...otherProps } = props;
    let { styleProps: styleProps  } = $aNSXN$reactspectrumutils.useStyleProps(otherProps);
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
    const formatter = $aNSXN$reactariai18n.useNumberFormatter(formatOptions);
    const state = $aNSXN$reactstatelyslider.useSliderState({
        ...props,
        numberFormatter: formatter,
        minValue: minValue,
        maxValue: maxValue
    });
    let trackRef = $aNSXN$react.useRef();
    let { groupProps: groupProps , trackProps: trackProps , labelProps: labelProps , outputProps: outputProps  } = $aNSXN$reactariaslider.useSlider(props, state, trackRef);
    let inputRef = $aNSXN$react.useRef();
    let domRef = $aNSXN$reactspectrumutils.useFocusableRef(ref, inputRef);
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
    let labelNode = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("label", {
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-label'),
        ...labelProps
    }, props.label);
    let valueNode = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("output", {
        ...outputProps,
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-value'),
        style: maxLabelLength && {
            width: `${maxLabelLength}ch`,
            minWidth: `${maxLabelLength}ch`
        }
    }, displayValue);
    return(/*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
        ref: domRef,
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider', {
            'spectrum-Slider--positionTop': labelPosition === 'top',
            'spectrum-Slider--positionSide': labelPosition === 'side',
            'is-disabled': isDisabled
        }, classes, styleProps.className),
        style: {
            ...style,
            ...styleProps.style
        },
        ...groupProps
    }, props.label && /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-labelContainer'),
        role: "presentation"
    }, props.label && labelNode, labelPosition === 'top' && showValueLabel && valueNode), /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-controls'),
        ref: trackRef,
        ...trackProps,
        role: "presentation"
    }, children({
        trackRef: trackRef,
        inputRef: inputRef,
        state: state
    })), labelPosition === 'side' && /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-valueLabelContainer'),
        role: "presentation"
    }, showValueLabel && valueNode)));
}
const $affbb9e08b166bcd$export$9418495bb635ebde = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).forwardRef($affbb9e08b166bcd$var$SliderBase);











function $fd0b2b20217355e3$export$2c1b491743890dec(props) {
    let { index: index , inputRef: inputRef , state: state  } = props;
    let backupRef = $aNSXN$react.useRef();
    inputRef = inputRef || backupRef;
    let { thumbProps: thumbProps , inputProps: inputProps  } = $aNSXN$reactariaslider.useSliderThumb({
        ...props,
        inputRef: inputRef
    }, state);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $aNSXN$reactariainteractions.useHover({
    });
    let { direction: direction  } = $aNSXN$reactariai18n.useLocale();
    let cssDirection = direction === 'rtl' ? 'right' : 'left';
    return(/*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement($aNSXN$reactariafocus.FocusRing, {
        within: true,
        focusRingClass: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'is-focused')
    }, /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-handle', {
            'is-hovered': isHovered,
            'is-dragged': state.isThumbDragging(index),
            'is-tophandle': state.focusedThumb === index
        }),
        style: {
            [cssDirection]: `${state.getThumbPercent(index) * 100}%`
        },
        ...$aNSXN$reactariautils.mergeProps(thumbProps, hoverProps),
        role: "presentation"
    }, /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement($aNSXN$reactariavisuallyhidden.VisuallyHidden, null, /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("input", {
        className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-input'),
        ref: inputRef,
        ...inputProps
    })))));
}




function $004fd48cd418b4b6$var$Slider(props, ref) {
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
    let { direction: direction  } = $aNSXN$reactariai18n.useLocale();
    return(/*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement($affbb9e08b166bcd$export$9418495bb635ebde, {
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
        fillOffset = fillOffset != null ? $aNSXN$reactariautils.clamp(fillOffset, state.getThumbMinValue(0), state.getThumbMaxValue(0)) : fillOffset;
        let cssDirection = direction === 'rtl' ? 'right' : 'left';
        let lowerTrack = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
            className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-track'),
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
        let upperTrack = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
            className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-track'),
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
            filledTrack = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
                className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-fill', {
                    'spectrum-Slider-fill--right': isRightOfOffset
                }),
                style: {
                    [cssDirection]: `${offset * 100}%`,
                    width: `${Math.abs(width) * 100}%`
                }
            });
        }
        return(/*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement(($parcel$interopDefault($aNSXN$react)).Fragment, null, lowerTrack, /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement($fd0b2b20217355e3$export$2c1b491743890dec, {
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
 */ const $004fd48cd418b4b6$export$472062a354075cee = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).forwardRef($004fd48cd418b4b6$var$Slider);


var $9dfe4d8e2be34bd3$exports = {};

$parcel$export($9dfe4d8e2be34bd3$exports, "RangeSlider", () => $9dfe4d8e2be34bd3$export$826424dabc3dd705);

var $8d4b09353ea10dd8$exports = {};
var $19cb148615246852$exports = {};
$19cb148615246852$exports = JSON.parse("{\"maximum\":\"أقصى\",\"minimum\":\"أدنى\"}");


var $bda81ba95f451834$exports = {};
$bda81ba95f451834$exports = JSON.parse("{\"maximum\":\"Максимум\",\"minimum\":\"Минимум\"}");


var $22a7dd9d694d98a2$exports = {};
$22a7dd9d694d98a2$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $922dd1c9231a213d$exports = {};
$922dd1c9231a213d$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $ec911369a794a3ba$exports = {};
$ec911369a794a3ba$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $7c60fd69a7890e67$exports = {};
$7c60fd69a7890e67$exports = JSON.parse("{\"maximum\":\"Μέγιστο\",\"minimum\":\"Ελάχιστο\"}");


var $489976b57108fe5b$exports = {};
$489976b57108fe5b$exports = JSON.parse("{\"minimum\":\"Minimum\",\"maximum\":\"Maximum\"}");


var $a3b68234bca6bcfd$exports = {};
$a3b68234bca6bcfd$exports = JSON.parse("{\"maximum\":\"Máximo\",\"minimum\":\"Mínimo\"}");


var $be37b960859ff577$exports = {};
$be37b960859ff577$exports = JSON.parse("{\"maximum\":\"Maksimaalne\",\"minimum\":\"Minimaalne\"}");


var $f792e3dc24a0608d$exports = {};
$f792e3dc24a0608d$exports = JSON.parse("{\"maximum\":\"Maksimi\",\"minimum\":\"Minimi\"}");


var $fa05b78df55dfa31$exports = {};
$fa05b78df55dfa31$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $ad90d97685655bcd$exports = {};
$ad90d97685655bcd$exports = JSON.parse("{\"maximum\":\"מקסימום\",\"minimum\":\"מינימום\"}");


var $3b2d77b66c66bc70$exports = {};
$3b2d77b66c66bc70$exports = JSON.parse("{\"maximum\":\"Najviše\",\"minimum\":\"Najmanje\"}");


var $3c70d9ea0361307d$exports = {};
$3c70d9ea0361307d$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $e80bf2704aaced96$exports = {};
$e80bf2704aaced96$exports = JSON.parse("{\"maximum\":\"Massimo\",\"minimum\":\"Minimo\"}");


var $9b1fc5713e2d67e7$exports = {};
$9b1fc5713e2d67e7$exports = JSON.parse("{\"maximum\":\"最大\",\"minimum\":\"最小\"}");


var $72471714e5907a16$exports = {};
$72471714e5907a16$exports = JSON.parse("{\"maximum\":\"최대\",\"minimum\":\"최소\"}");


var $2f9db1c416e539bf$exports = {};
$2f9db1c416e539bf$exports = JSON.parse("{\"maximum\":\"Daugiausia\",\"minimum\":\"Mažiausia\"}");


var $2bd0a770b73fb691$exports = {};
$2bd0a770b73fb691$exports = JSON.parse("{\"maximum\":\"Maksimālā vērtība\",\"minimum\":\"Minimālā vērtība\"}");


var $3ea8086734dff855$exports = {};
$3ea8086734dff855$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $478dcf79e51c1100$exports = {};
$478dcf79e51c1100$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $dc6da54e974cbe16$exports = {};
$dc6da54e974cbe16$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $a26d72cc1a1ddc76$exports = {};
$a26d72cc1a1ddc76$exports = JSON.parse("{\"maximum\":\"Máximo\",\"minimum\":\"Mínimo\"}");


var $5c830a5f58cacc46$exports = {};
$5c830a5f58cacc46$exports = JSON.parse("{\"maximum\":\"Máximo\",\"minimum\":\"Mínimo\"}");


var $c05877d8ce472641$exports = {};
$c05877d8ce472641$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $1b4d572d794e5e82$exports = {};
$1b4d572d794e5e82$exports = JSON.parse("{\"maximum\":\"Максимум\",\"minimum\":\"Минимум\"}");


var $c7ee6b0d75adfa14$exports = {};
$c7ee6b0d75adfa14$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $aea258d8cdaecde2$exports = {};
$aea258d8cdaecde2$exports = JSON.parse("{\"maximum\":\"Največji\",\"minimum\":\"Najmanj\"}");


var $06f6aeba3fb02582$exports = {};
$06f6aeba3fb02582$exports = JSON.parse("{\"maximum\":\"Najviše\",\"minimum\":\"Najmanje\"}");


var $6ef280f5b317680b$exports = {};
$6ef280f5b317680b$exports = JSON.parse("{\"maximum\":\"Maximum\",\"minimum\":\"Minimum\"}");


var $97211e8324a001d5$exports = {};
$97211e8324a001d5$exports = JSON.parse("{\"maximum\":\"Maksimum\",\"minimum\":\"Minimum\"}");


var $cec9b310051046fa$exports = {};
$cec9b310051046fa$exports = JSON.parse("{\"maximum\":\"Максимум\",\"minimum\":\"Мінімум\"}");


var $ed9e7f33c3612814$exports = {};
$ed9e7f33c3612814$exports = JSON.parse("{\"maximum\":\"最大\",\"minimum\":\"最小\"}");


var $f1d9d3e3f806e91a$exports = {};
$f1d9d3e3f806e91a$exports = JSON.parse("{\"maximum\":\"最大值\",\"minimum\":\"最小值\"}");


$8d4b09353ea10dd8$exports = {
    "ar-AE": $19cb148615246852$exports,
    "bg-BG": $bda81ba95f451834$exports,
    "cs-CZ": $22a7dd9d694d98a2$exports,
    "da-DK": $922dd1c9231a213d$exports,
    "de-DE": $ec911369a794a3ba$exports,
    "el-GR": $7c60fd69a7890e67$exports,
    "en-US": $489976b57108fe5b$exports,
    "es-ES": $a3b68234bca6bcfd$exports,
    "et-EE": $be37b960859ff577$exports,
    "fi-FI": $f792e3dc24a0608d$exports,
    "fr-FR": $fa05b78df55dfa31$exports,
    "he-IL": $ad90d97685655bcd$exports,
    "hr-HR": $3b2d77b66c66bc70$exports,
    "hu-HU": $3c70d9ea0361307d$exports,
    "it-IT": $e80bf2704aaced96$exports,
    "ja-JP": $9b1fc5713e2d67e7$exports,
    "ko-KR": $72471714e5907a16$exports,
    "lt-LT": $2f9db1c416e539bf$exports,
    "lv-LV": $2bd0a770b73fb691$exports,
    "nb-NO": $3ea8086734dff855$exports,
    "nl-NL": $478dcf79e51c1100$exports,
    "pl-PL": $dc6da54e974cbe16$exports,
    "pt-BR": $a26d72cc1a1ddc76$exports,
    "pt-PT": $5c830a5f58cacc46$exports,
    "ro-RO": $c05877d8ce472641$exports,
    "ru-RU": $1b4d572d794e5e82$exports,
    "sk-SK": $c7ee6b0d75adfa14$exports,
    "sl-SI": $aea258d8cdaecde2$exports,
    "sr-SP": $06f6aeba3fb02582$exports,
    "sv-SE": $6ef280f5b317680b$exports,
    "tr-TR": $97211e8324a001d5$exports,
    "uk-UA": $cec9b310051046fa$exports,
    "zh-CN": $ed9e7f33c3612814$exports,
    "zh-TW": $f1d9d3e3f806e91a$exports
};







function $9dfe4d8e2be34bd3$var$RangeSlider(props, ref) {
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
    let formatter = $aNSXN$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($8d4b09353ea10dd8$exports)));
    let { direction: direction  } = $aNSXN$reactariai18n.useLocale();
    return(/*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement($affbb9e08b166bcd$export$9418495bb635ebde, {
        ...baseProps,
        classes: 'spectrum-Slider--range',
        ref: ref
    }, ({ trackRef: trackRef , inputRef: inputRef , state: state  })=>{
        let cssDirection = direction === 'rtl' ? 'right' : 'left';
        return(/*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement(($parcel$interopDefault($aNSXN$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
            className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-track'),
            style: {
                width: `${state.getThumbPercent(0) * 100}%`
            }
        }), /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement($fd0b2b20217355e3$export$2c1b491743890dec, {
            index: 0,
            "aria-label": formatter('minimum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            inputRef: inputRef,
            state: state
        }), /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
            className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-track'),
            style: {
                [cssDirection]: `${state.getThumbPercent(0) * 100}%`,
                width: `${Math.abs(state.getThumbPercent(0) - state.getThumbPercent(1)) * 100}%`
            }
        }), /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement($fd0b2b20217355e3$export$2c1b491743890dec, {
            index: 1,
            "aria-label": formatter('maximum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            state: state
        }), /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).createElement("div", {
            className: $aNSXN$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($1b0036f7437cfd0c$exports)), 'spectrum-Slider-track'),
            style: {
                width: `${(1 - state.getThumbPercent(1)) * 100}%`
            }
        })));
    }));
}
/**
 * RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.
 */ const $9dfe4d8e2be34bd3$export$826424dabc3dd705 = /*#__PURE__*/ ($parcel$interopDefault($aNSXN$react)).forwardRef($9dfe4d8e2be34bd3$var$RangeSlider);


$parcel$exportWildcard(module.exports, $004fd48cd418b4b6$exports);
$parcel$exportWildcard(module.exports, $9dfe4d8e2be34bd3$exports);


//# sourceMappingURL=main.js.map
