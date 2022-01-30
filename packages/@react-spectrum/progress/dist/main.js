require("./main.css");
var $jKTaH$reactspectrumutils = require("@react-spectrum/utils");
var $jKTaH$react = require("react");
var $jKTaH$reactariaprogress = require("@react-aria/progress");
var $jKTaH$reactariautils = require("@react-aria/utils");

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
var $203822a6347ee98f$exports = {};

$parcel$export($203822a6347ee98f$exports, "ProgressBar", () => $203822a6347ee98f$export$c17561cb55d4db30);

var $ff566b634c1bc512$exports = {};

$parcel$export($ff566b634c1bc512$exports, "ProgressBarBase", () => $ff566b634c1bc512$export$7c6ed87244065f3a);



var $766832cda358e75e$exports = {};

$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader", () => $766832cda358e75e$export$162ba336fb0c239f, (v) => $766832cda358e75e$export$162ba336fb0c239f = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader--indeterminate", () => $766832cda358e75e$export$1249dfbb98223794, (v) => $766832cda358e75e$export$1249dfbb98223794 = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader--sideLabel", () => $766832cda358e75e$export$99af8802cc2a10dc, (v) => $766832cda358e75e$export$99af8802cc2a10dc = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader-track", () => $766832cda358e75e$export$3e2e13fb57b5c74b, (v) => $766832cda358e75e$export$3e2e13fb57b5c74b = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader-fill", () => $766832cda358e75e$export$84c9ee7bc724b71b, (v) => $766832cda358e75e$export$84c9ee7bc724b71b = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader-label", () => $766832cda358e75e$export$5379ba198163be86, (v) => $766832cda358e75e$export$5379ba198163be86 = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader-percentage", () => $766832cda358e75e$export$ecc9c825de9d1a18, (v) => $766832cda358e75e$export$ecc9c825de9d1a18 = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader--small", () => $766832cda358e75e$export$b945305960ad74a7, (v) => $766832cda358e75e$export$b945305960ad74a7 = v);
$parcel$export($766832cda358e75e$exports, "indeterminate-loop-ltr", () => $766832cda358e75e$export$a889038a25113dd4, (v) => $766832cda358e75e$export$a889038a25113dd4 = v);
$parcel$export($766832cda358e75e$exports, "indeterminate-loop-rtl", () => $766832cda358e75e$export$aeff243cf3356f00, (v) => $766832cda358e75e$export$aeff243cf3356f00 = v);
$parcel$export($766832cda358e75e$exports, "spectrum-BarLoader--overBackground", () => $766832cda358e75e$export$55612d0bd9b5d41, (v) => $766832cda358e75e$export$55612d0bd9b5d41 = v);
$parcel$export($766832cda358e75e$exports, "is-positive", () => $766832cda358e75e$export$aea9fd919467f03a, (v) => $766832cda358e75e$export$aea9fd919467f03a = v);
$parcel$export($766832cda358e75e$exports, "is-warning", () => $766832cda358e75e$export$d4ebda6218901908, (v) => $766832cda358e75e$export$d4ebda6218901908 = v);
$parcel$export($766832cda358e75e$exports, "is-critical", () => $766832cda358e75e$export$a1f608a9810da50f, (v) => $766832cda358e75e$export$a1f608a9810da50f = v);
var $766832cda358e75e$export$162ba336fb0c239f;
var $766832cda358e75e$export$1249dfbb98223794;
var $766832cda358e75e$export$99af8802cc2a10dc;
var $766832cda358e75e$export$3e2e13fb57b5c74b;
var $766832cda358e75e$export$84c9ee7bc724b71b;
var $766832cda358e75e$export$5379ba198163be86;
var $766832cda358e75e$export$ecc9c825de9d1a18;
var $766832cda358e75e$export$b945305960ad74a7;
var $766832cda358e75e$export$a889038a25113dd4;
var $766832cda358e75e$export$aeff243cf3356f00;
var $766832cda358e75e$export$55612d0bd9b5d41;
var $766832cda358e75e$export$aea9fd919467f03a;
var $766832cda358e75e$export$d4ebda6218901908;
var $766832cda358e75e$export$a1f608a9810da50f;
$766832cda358e75e$export$162ba336fb0c239f = "_spectrum-BarLoader_48541f";
$766832cda358e75e$export$1249dfbb98223794 = "_spectrum-BarLoader--indeterminate_48541f";
$766832cda358e75e$export$99af8802cc2a10dc = "_spectrum-BarLoader--sideLabel_48541f";
$766832cda358e75e$export$3e2e13fb57b5c74b = "_spectrum-BarLoader-track_48541f";
$766832cda358e75e$export$84c9ee7bc724b71b = "_spectrum-BarLoader-fill_48541f";
$766832cda358e75e$export$5379ba198163be86 = "_spectrum-BarLoader-label_48541f";
$766832cda358e75e$export$ecc9c825de9d1a18 = "_spectrum-BarLoader-percentage_48541f";
$766832cda358e75e$export$b945305960ad74a7 = "_spectrum-BarLoader--small_48541f";
$766832cda358e75e$export$a889038a25113dd4 = "_indeterminate-loop-ltr_48541f";
$766832cda358e75e$export$aeff243cf3356f00 = "_indeterminate-loop-rtl_48541f";
$766832cda358e75e$export$55612d0bd9b5d41 = "_spectrum-BarLoader--overBackground_48541f";
$766832cda358e75e$export$aea9fd919467f03a = "_is-positive_48541f";
$766832cda358e75e$export$d4ebda6218901908 = "_is-warning_48541f";
$766832cda358e75e$export$a1f608a9810da50f = "_is-critical_48541f";


// Base ProgressBar component shared with Meter.
function $ff566b634c1bc512$var$ProgressBarBase(props, ref) {
    let { value: value = 0 , minValue: minValue = 0 , maxValue: maxValue = 100 , size: size = 'L' , label: label , barClassName: barClassName , showValueLabel: showValueLabel = !!label , labelPosition: labelPosition = 'top' , isIndeterminate: isIndeterminate = false , barProps: barProps , labelProps: labelProps , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby , ...otherProps } = props;
    let domRef = $jKTaH$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $jKTaH$reactspectrumutils.useStyleProps(otherProps);
    value = $jKTaH$reactariautils.clamp(value, minValue, maxValue);
    let barStyle = {
    };
    if (!isIndeterminate) {
        let percentage = (value - minValue) / (maxValue - minValue);
        barStyle.width = `${Math.round(percentage * 100)}%`;
    }
    // Ideally this should be in useProgressBar, but children
    // are not supported in ProgressCircle which shares that hook...
    if (!label && !ariaLabel && !ariaLabelledby) console.warn('If you do not provide a visible label via children, you must specify an aria-label or aria-labelledby attribute for accessibility');
    // use inline style for fit-content because cssnano is too smart for us and will strip out the -moz prefix in css files
    return(/*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        ...barProps,
        ref: domRef,
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($766832cda358e75e$exports)), 'spectrum-BarLoader', {
            'spectrum-BarLoader--small': size === 'S',
            'spectrum-BarLoader--large': size === 'L',
            'spectrum-BarLoader--indeterminate': isIndeterminate,
            'spectrum-BarLoader--sideLabel': labelPosition === 'side'
        }, barClassName, styleProps.className),
        style: {
            minWidth: '-moz-fit-content',
            ...styleProps.style
        }
    }, label && /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("span", {
        ...labelProps,
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($766832cda358e75e$exports)), 'spectrum-BarLoader-label')
    }, label), showValueLabel && /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($766832cda358e75e$exports)), 'spectrum-BarLoader-percentage')
    }, barProps['aria-valuetext']), /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($766832cda358e75e$exports)), 'spectrum-BarLoader-track')
    }, /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($766832cda358e75e$exports)), 'spectrum-BarLoader-fill'),
        style: barStyle
    }))));
}
let $ff566b634c1bc512$export$7c6ed87244065f3a = /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).forwardRef($ff566b634c1bc512$var$ProgressBarBase);





function $203822a6347ee98f$var$ProgressBar(props, ref) {
    let { variant: variant , ...otherProps } = props;
    const { progressBarProps: progressBarProps , labelProps: labelProps  } = $jKTaH$reactariaprogress.useProgressBar(props);
    return(/*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement($ff566b634c1bc512$export$7c6ed87244065f3a, {
        ...otherProps,
        ref: ref,
        barProps: progressBarProps,
        labelProps: labelProps,
        barClassName: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($766832cda358e75e$exports)), {
            'spectrum-BarLoader--overBackground': variant === 'overBackground'
        })
    }));
}
/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */ let $203822a6347ee98f$export$c17561cb55d4db30 = /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).forwardRef($203822a6347ee98f$var$ProgressBar);


var $a8bfde8b40e8b3ed$exports = {};

$parcel$export($a8bfde8b40e8b3ed$exports, "ProgressCircle", () => $a8bfde8b40e8b3ed$export$c79b9d6b4cc92af7);



var $ecf26a235f09f2eb$exports = {};

$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader--indeterminate-fill-submask-2", () => $ecf26a235f09f2eb$export$f7083dbeadcbb2bd, (v) => $ecf26a235f09f2eb$export$f7083dbeadcbb2bd = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-fill-mask-2", () => $ecf26a235f09f2eb$export$7219832bea80eb54, (v) => $ecf26a235f09f2eb$export$7219832bea80eb54 = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader", () => $ecf26a235f09f2eb$export$9633d311d6d6830b, (v) => $ecf26a235f09f2eb$export$9633d311d6d6830b = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader-track", () => $ecf26a235f09f2eb$export$278efdb85ed802da, (v) => $ecf26a235f09f2eb$export$278efdb85ed802da = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader-fills", () => $ecf26a235f09f2eb$export$3038f4c0c86f539b, (v) => $ecf26a235f09f2eb$export$3038f4c0c86f539b = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader-fill", () => $ecf26a235f09f2eb$export$58fb9ac68cf8e784, (v) => $ecf26a235f09f2eb$export$58fb9ac68cf8e784 = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader-fillMask1", () => $ecf26a235f09f2eb$export$b676cd958401a736, (v) => $ecf26a235f09f2eb$export$b676cd958401a736 = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader-fillMask2", () => $ecf26a235f09f2eb$export$8c428f4f13e424b, (v) => $ecf26a235f09f2eb$export$8c428f4f13e424b = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader-fillSubMask1", () => $ecf26a235f09f2eb$export$98ba5ef650aeb8ca, (v) => $ecf26a235f09f2eb$export$98ba5ef650aeb8ca = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader-fillSubMask2", () => $ecf26a235f09f2eb$export$dc70b48c897b0f1a, (v) => $ecf26a235f09f2eb$export$dc70b48c897b0f1a = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader--small", () => $ecf26a235f09f2eb$export$79819ab9844dbe9b, (v) => $ecf26a235f09f2eb$export$79819ab9844dbe9b = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader--large", () => $ecf26a235f09f2eb$export$c8c34e5e37bf511c, (v) => $ecf26a235f09f2eb$export$c8c34e5e37bf511c = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader--indeterminate", () => $ecf26a235f09f2eb$export$79b7e5abeef5134f, (v) => $ecf26a235f09f2eb$export$79b7e5abeef5134f = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-fills-rotate", () => $ecf26a235f09f2eb$export$3663cbdb240663ec, (v) => $ecf26a235f09f2eb$export$3663cbdb240663ec = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-fill-mask-1", () => $ecf26a235f09f2eb$export$524c81e63e1d64f5, (v) => $ecf26a235f09f2eb$export$524c81e63e1d64f5 = v);
$parcel$export($ecf26a235f09f2eb$exports, "spectrum-CircleLoader--overBackground", () => $ecf26a235f09f2eb$export$6668708cb539f403, (v) => $ecf26a235f09f2eb$export$6668708cb539f403 = v);
var $ecf26a235f09f2eb$export$f7083dbeadcbb2bd;
var $ecf26a235f09f2eb$export$7219832bea80eb54;
var $ecf26a235f09f2eb$export$9633d311d6d6830b;
var $ecf26a235f09f2eb$export$278efdb85ed802da;
var $ecf26a235f09f2eb$export$3038f4c0c86f539b;
var $ecf26a235f09f2eb$export$58fb9ac68cf8e784;
var $ecf26a235f09f2eb$export$b676cd958401a736;
var $ecf26a235f09f2eb$export$8c428f4f13e424b;
var $ecf26a235f09f2eb$export$98ba5ef650aeb8ca;
var $ecf26a235f09f2eb$export$dc70b48c897b0f1a;
var $ecf26a235f09f2eb$export$79819ab9844dbe9b;
var $ecf26a235f09f2eb$export$c8c34e5e37bf511c;
var $ecf26a235f09f2eb$export$79b7e5abeef5134f;
var $ecf26a235f09f2eb$export$3663cbdb240663ec;
var $ecf26a235f09f2eb$export$524c81e63e1d64f5;
var $ecf26a235f09f2eb$export$6668708cb539f403;
$ecf26a235f09f2eb$export$f7083dbeadcbb2bd = "_spectrum-CircleLoader--indeterminate-fill-submask-2_7c1153";
$ecf26a235f09f2eb$export$7219832bea80eb54 = "_spectrum-fill-mask-2_7c1153";
$ecf26a235f09f2eb$export$9633d311d6d6830b = "_spectrum-CircleLoader_7c1153";
$ecf26a235f09f2eb$export$278efdb85ed802da = "_spectrum-CircleLoader-track_7c1153";
$ecf26a235f09f2eb$export$3038f4c0c86f539b = "_spectrum-CircleLoader-fills_7c1153";
$ecf26a235f09f2eb$export$58fb9ac68cf8e784 = "_spectrum-CircleLoader-fill_7c1153";
$ecf26a235f09f2eb$export$b676cd958401a736 = "_spectrum-CircleLoader-fillMask1_7c1153";
$ecf26a235f09f2eb$export$8c428f4f13e424b = "_spectrum-CircleLoader-fillMask2_7c1153";
$ecf26a235f09f2eb$export$98ba5ef650aeb8ca = "_spectrum-CircleLoader-fillSubMask1_7c1153";
$ecf26a235f09f2eb$export$dc70b48c897b0f1a = "_spectrum-CircleLoader-fillSubMask2_7c1153";
$ecf26a235f09f2eb$export$79819ab9844dbe9b = "_spectrum-CircleLoader--small_7c1153";
$ecf26a235f09f2eb$export$c8c34e5e37bf511c = "_spectrum-CircleLoader--large_7c1153";
$ecf26a235f09f2eb$export$79b7e5abeef5134f = "_spectrum-CircleLoader--indeterminate_7c1153";
$ecf26a235f09f2eb$export$3663cbdb240663ec = "_spectrum-fills-rotate_7c1153";
$ecf26a235f09f2eb$export$524c81e63e1d64f5 = "_spectrum-fill-mask-1_7c1153";
$ecf26a235f09f2eb$export$6668708cb539f403 = "_spectrum-CircleLoader--overBackground_7c1153";



function $a8bfde8b40e8b3ed$var$ProgressCircle(props, ref) {
    let { value: value = 0 , minValue: minValue = 0 , maxValue: maxValue = 100 , size: size = 'M' , variant: variant , isIndeterminate: isIndeterminate = false , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby , ...otherProps } = props;
    let domRef = $jKTaH$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $jKTaH$reactspectrumutils.useStyleProps(otherProps);
    value = $jKTaH$reactariautils.clamp(value, minValue, maxValue);
    let { progressBarProps: progressBarProps  } = $jKTaH$reactariaprogress.useProgressBar({
        ...props,
        value: value
    });
    let subMask1Style = {
    };
    let subMask2Style = {
    };
    if (!isIndeterminate) {
        let percentage = (value - minValue) / (maxValue - minValue) * 100;
        let angle;
        if (percentage > 0 && percentage <= 50) {
            angle = -180 + percentage / 50 * 180;
            subMask1Style.transform = `rotate(${angle}deg)`;
            subMask2Style.transform = 'rotate(-180deg)';
        } else if (percentage > 50) {
            angle = -180 + (percentage - 50) / 50 * 180;
            subMask1Style.transform = 'rotate(0deg)';
            subMask2Style.transform = `rotate(${angle}deg)`;
        }
    }
    if (!ariaLabel && !ariaLabelledby) console.warn('ProgressCircle requires an aria-label or aria-labelledby attribute for accessibility');
    return(/*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        ...styleProps,
        ...progressBarProps,
        ref: domRef,
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader', {
            'spectrum-CircleLoader--indeterminate': isIndeterminate,
            'spectrum-CircleLoader--small': size === 'S',
            'spectrum-CircleLoader--large': size === 'L',
            'spectrum-CircleLoader--overBackground': variant === 'overBackground'
        }, styleProps.className)
    }, /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-track')
    }), /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-fills')
    }, /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-fillMask1')
    }, /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-fillSubMask1'),
        "data-testid": "fillSubMask1",
        style: subMask1Style
    }, /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-fill')
    }))), /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-fillMask2')
    }, /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-fillSubMask2'),
        "data-testid": "fillSubMask2",
        style: subMask2Style
    }, /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).createElement("div", {
        className: $jKTaH$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecf26a235f09f2eb$exports)), 'spectrum-CircleLoader-fill')
    }))))));
}
/**
 * ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 * They can represent determinate or indeterminate progress.
 */ let $a8bfde8b40e8b3ed$export$c79b9d6b4cc92af7 = /*#__PURE__*/ ($parcel$interopDefault($jKTaH$react)).forwardRef($a8bfde8b40e8b3ed$var$ProgressCircle);



$parcel$exportWildcard(module.exports, $203822a6347ee98f$exports);
$parcel$exportWildcard(module.exports, $a8bfde8b40e8b3ed$exports);
$parcel$exportWildcard(module.exports, $ff566b634c1bc512$exports);


//# sourceMappingURL=main.js.map
