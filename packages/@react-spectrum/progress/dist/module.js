import "./main.css";
import {classNames as $hxVtd$classNames, useDOMRef as $hxVtd$useDOMRef, useStyleProps as $hxVtd$useStyleProps} from "@react-spectrum/utils";
import $hxVtd$react from "react";
import {useProgressBar as $hxVtd$useProgressBar} from "@react-aria/progress";
import {clamp as $hxVtd$clamp} from "@react-aria/utils";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $40e15e3d9f876a57$exports = {};

$parcel$export($40e15e3d9f876a57$exports, "ProgressBar", () => $40e15e3d9f876a57$export$c17561cb55d4db30);

var $7a2f54350aed71f9$exports = {};

$parcel$export($7a2f54350aed71f9$exports, "ProgressBarBase", () => $7a2f54350aed71f9$export$7c6ed87244065f3a);



var $0dc1b026ac5bd78b$exports = {};

$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader", () => $0dc1b026ac5bd78b$export$162ba336fb0c239f, (v) => $0dc1b026ac5bd78b$export$162ba336fb0c239f = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader--indeterminate", () => $0dc1b026ac5bd78b$export$1249dfbb98223794, (v) => $0dc1b026ac5bd78b$export$1249dfbb98223794 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader--sideLabel", () => $0dc1b026ac5bd78b$export$99af8802cc2a10dc, (v) => $0dc1b026ac5bd78b$export$99af8802cc2a10dc = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader-track", () => $0dc1b026ac5bd78b$export$3e2e13fb57b5c74b, (v) => $0dc1b026ac5bd78b$export$3e2e13fb57b5c74b = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader-fill", () => $0dc1b026ac5bd78b$export$84c9ee7bc724b71b, (v) => $0dc1b026ac5bd78b$export$84c9ee7bc724b71b = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader-label", () => $0dc1b026ac5bd78b$export$5379ba198163be86, (v) => $0dc1b026ac5bd78b$export$5379ba198163be86 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader-percentage", () => $0dc1b026ac5bd78b$export$ecc9c825de9d1a18, (v) => $0dc1b026ac5bd78b$export$ecc9c825de9d1a18 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader--small", () => $0dc1b026ac5bd78b$export$b945305960ad74a7, (v) => $0dc1b026ac5bd78b$export$b945305960ad74a7 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "indeterminate-loop-ltr", () => $0dc1b026ac5bd78b$export$a889038a25113dd4, (v) => $0dc1b026ac5bd78b$export$a889038a25113dd4 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "indeterminate-loop-rtl", () => $0dc1b026ac5bd78b$export$aeff243cf3356f00, (v) => $0dc1b026ac5bd78b$export$aeff243cf3356f00 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "spectrum-BarLoader--overBackground", () => $0dc1b026ac5bd78b$export$55612d0bd9b5d41, (v) => $0dc1b026ac5bd78b$export$55612d0bd9b5d41 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "is-positive", () => $0dc1b026ac5bd78b$export$aea9fd919467f03a, (v) => $0dc1b026ac5bd78b$export$aea9fd919467f03a = v);
$parcel$export($0dc1b026ac5bd78b$exports, "is-warning", () => $0dc1b026ac5bd78b$export$d4ebda6218901908, (v) => $0dc1b026ac5bd78b$export$d4ebda6218901908 = v);
$parcel$export($0dc1b026ac5bd78b$exports, "is-critical", () => $0dc1b026ac5bd78b$export$a1f608a9810da50f, (v) => $0dc1b026ac5bd78b$export$a1f608a9810da50f = v);
var $0dc1b026ac5bd78b$export$162ba336fb0c239f;
var $0dc1b026ac5bd78b$export$1249dfbb98223794;
var $0dc1b026ac5bd78b$export$99af8802cc2a10dc;
var $0dc1b026ac5bd78b$export$3e2e13fb57b5c74b;
var $0dc1b026ac5bd78b$export$84c9ee7bc724b71b;
var $0dc1b026ac5bd78b$export$5379ba198163be86;
var $0dc1b026ac5bd78b$export$ecc9c825de9d1a18;
var $0dc1b026ac5bd78b$export$b945305960ad74a7;
var $0dc1b026ac5bd78b$export$a889038a25113dd4;
var $0dc1b026ac5bd78b$export$aeff243cf3356f00;
var $0dc1b026ac5bd78b$export$55612d0bd9b5d41;
var $0dc1b026ac5bd78b$export$aea9fd919467f03a;
var $0dc1b026ac5bd78b$export$d4ebda6218901908;
var $0dc1b026ac5bd78b$export$a1f608a9810da50f;
$0dc1b026ac5bd78b$export$162ba336fb0c239f = "_spectrum-BarLoader_48541f";
$0dc1b026ac5bd78b$export$1249dfbb98223794 = "_spectrum-BarLoader--indeterminate_48541f";
$0dc1b026ac5bd78b$export$99af8802cc2a10dc = "_spectrum-BarLoader--sideLabel_48541f";
$0dc1b026ac5bd78b$export$3e2e13fb57b5c74b = "_spectrum-BarLoader-track_48541f";
$0dc1b026ac5bd78b$export$84c9ee7bc724b71b = "_spectrum-BarLoader-fill_48541f";
$0dc1b026ac5bd78b$export$5379ba198163be86 = "_spectrum-BarLoader-label_48541f";
$0dc1b026ac5bd78b$export$ecc9c825de9d1a18 = "_spectrum-BarLoader-percentage_48541f";
$0dc1b026ac5bd78b$export$b945305960ad74a7 = "_spectrum-BarLoader--small_48541f";
$0dc1b026ac5bd78b$export$a889038a25113dd4 = "_indeterminate-loop-ltr_48541f";
$0dc1b026ac5bd78b$export$aeff243cf3356f00 = "_indeterminate-loop-rtl_48541f";
$0dc1b026ac5bd78b$export$55612d0bd9b5d41 = "_spectrum-BarLoader--overBackground_48541f";
$0dc1b026ac5bd78b$export$aea9fd919467f03a = "_is-positive_48541f";
$0dc1b026ac5bd78b$export$d4ebda6218901908 = "_is-warning_48541f";
$0dc1b026ac5bd78b$export$a1f608a9810da50f = "_is-critical_48541f";


// Base ProgressBar component shared with Meter.
function $7a2f54350aed71f9$var$ProgressBarBase(props, ref) {
    let { value: value = 0 , minValue: minValue = 0 , maxValue: maxValue = 100 , size: size = 'L' , label: label , barClassName: barClassName , showValueLabel: showValueLabel = !!label , labelPosition: labelPosition = 'top' , isIndeterminate: isIndeterminate = false , barProps: barProps , labelProps: labelProps , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby , ...otherProps } = props;
    let domRef = $hxVtd$useDOMRef(ref);
    let { styleProps: styleProps  } = $hxVtd$useStyleProps(otherProps);
    value = $hxVtd$clamp(value, minValue, maxValue);
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
    return(/*#__PURE__*/ $hxVtd$react.createElement("div", {
        ...barProps,
        ref: domRef,
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0dc1b026ac5bd78b$exports)), 'spectrum-BarLoader', {
            'spectrum-BarLoader--small': size === 'S',
            'spectrum-BarLoader--large': size === 'L',
            'spectrum-BarLoader--indeterminate': isIndeterminate,
            'spectrum-BarLoader--sideLabel': labelPosition === 'side'
        }, barClassName, styleProps.className),
        style: {
            minWidth: '-moz-fit-content',
            ...styleProps.style
        }
    }, label && /*#__PURE__*/ $hxVtd$react.createElement("span", {
        ...labelProps,
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0dc1b026ac5bd78b$exports)), 'spectrum-BarLoader-label')
    }, label), showValueLabel && /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0dc1b026ac5bd78b$exports)), 'spectrum-BarLoader-percentage')
    }, barProps['aria-valuetext']), /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0dc1b026ac5bd78b$exports)), 'spectrum-BarLoader-track')
    }, /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0dc1b026ac5bd78b$exports)), 'spectrum-BarLoader-fill'),
        style: barStyle
    }))));
}
let $7a2f54350aed71f9$export$7c6ed87244065f3a = /*#__PURE__*/ $hxVtd$react.forwardRef($7a2f54350aed71f9$var$ProgressBarBase);





function $40e15e3d9f876a57$var$ProgressBar(props, ref) {
    let { variant: variant , ...otherProps } = props;
    const { progressBarProps: progressBarProps , labelProps: labelProps  } = $hxVtd$useProgressBar(props);
    return(/*#__PURE__*/ $hxVtd$react.createElement($7a2f54350aed71f9$export$7c6ed87244065f3a, {
        ...otherProps,
        ref: ref,
        barProps: progressBarProps,
        labelProps: labelProps,
        barClassName: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0dc1b026ac5bd78b$exports)), {
            'spectrum-BarLoader--overBackground': variant === 'overBackground'
        })
    }));
}
/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */ let $40e15e3d9f876a57$export$c17561cb55d4db30 = /*#__PURE__*/ $hxVtd$react.forwardRef($40e15e3d9f876a57$var$ProgressBar);


var $742d3a3c56d4ec52$exports = {};

$parcel$export($742d3a3c56d4ec52$exports, "ProgressCircle", () => $742d3a3c56d4ec52$export$c79b9d6b4cc92af7);



var $0cd87a683d3db6fa$exports = {};

$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader--indeterminate-fill-submask-2", () => $0cd87a683d3db6fa$export$f7083dbeadcbb2bd, (v) => $0cd87a683d3db6fa$export$f7083dbeadcbb2bd = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-fill-mask-2", () => $0cd87a683d3db6fa$export$7219832bea80eb54, (v) => $0cd87a683d3db6fa$export$7219832bea80eb54 = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader", () => $0cd87a683d3db6fa$export$9633d311d6d6830b, (v) => $0cd87a683d3db6fa$export$9633d311d6d6830b = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader-track", () => $0cd87a683d3db6fa$export$278efdb85ed802da, (v) => $0cd87a683d3db6fa$export$278efdb85ed802da = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader-fills", () => $0cd87a683d3db6fa$export$3038f4c0c86f539b, (v) => $0cd87a683d3db6fa$export$3038f4c0c86f539b = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader-fill", () => $0cd87a683d3db6fa$export$58fb9ac68cf8e784, (v) => $0cd87a683d3db6fa$export$58fb9ac68cf8e784 = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader-fillMask1", () => $0cd87a683d3db6fa$export$b676cd958401a736, (v) => $0cd87a683d3db6fa$export$b676cd958401a736 = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader-fillMask2", () => $0cd87a683d3db6fa$export$8c428f4f13e424b, (v) => $0cd87a683d3db6fa$export$8c428f4f13e424b = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader-fillSubMask1", () => $0cd87a683d3db6fa$export$98ba5ef650aeb8ca, (v) => $0cd87a683d3db6fa$export$98ba5ef650aeb8ca = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader-fillSubMask2", () => $0cd87a683d3db6fa$export$dc70b48c897b0f1a, (v) => $0cd87a683d3db6fa$export$dc70b48c897b0f1a = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader--small", () => $0cd87a683d3db6fa$export$79819ab9844dbe9b, (v) => $0cd87a683d3db6fa$export$79819ab9844dbe9b = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader--large", () => $0cd87a683d3db6fa$export$c8c34e5e37bf511c, (v) => $0cd87a683d3db6fa$export$c8c34e5e37bf511c = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader--indeterminate", () => $0cd87a683d3db6fa$export$79b7e5abeef5134f, (v) => $0cd87a683d3db6fa$export$79b7e5abeef5134f = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-fills-rotate", () => $0cd87a683d3db6fa$export$3663cbdb240663ec, (v) => $0cd87a683d3db6fa$export$3663cbdb240663ec = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-fill-mask-1", () => $0cd87a683d3db6fa$export$524c81e63e1d64f5, (v) => $0cd87a683d3db6fa$export$524c81e63e1d64f5 = v);
$parcel$export($0cd87a683d3db6fa$exports, "spectrum-CircleLoader--overBackground", () => $0cd87a683d3db6fa$export$6668708cb539f403, (v) => $0cd87a683d3db6fa$export$6668708cb539f403 = v);
var $0cd87a683d3db6fa$export$f7083dbeadcbb2bd;
var $0cd87a683d3db6fa$export$7219832bea80eb54;
var $0cd87a683d3db6fa$export$9633d311d6d6830b;
var $0cd87a683d3db6fa$export$278efdb85ed802da;
var $0cd87a683d3db6fa$export$3038f4c0c86f539b;
var $0cd87a683d3db6fa$export$58fb9ac68cf8e784;
var $0cd87a683d3db6fa$export$b676cd958401a736;
var $0cd87a683d3db6fa$export$8c428f4f13e424b;
var $0cd87a683d3db6fa$export$98ba5ef650aeb8ca;
var $0cd87a683d3db6fa$export$dc70b48c897b0f1a;
var $0cd87a683d3db6fa$export$79819ab9844dbe9b;
var $0cd87a683d3db6fa$export$c8c34e5e37bf511c;
var $0cd87a683d3db6fa$export$79b7e5abeef5134f;
var $0cd87a683d3db6fa$export$3663cbdb240663ec;
var $0cd87a683d3db6fa$export$524c81e63e1d64f5;
var $0cd87a683d3db6fa$export$6668708cb539f403;
$0cd87a683d3db6fa$export$f7083dbeadcbb2bd = "_spectrum-CircleLoader--indeterminate-fill-submask-2_7c1153";
$0cd87a683d3db6fa$export$7219832bea80eb54 = "_spectrum-fill-mask-2_7c1153";
$0cd87a683d3db6fa$export$9633d311d6d6830b = "_spectrum-CircleLoader_7c1153";
$0cd87a683d3db6fa$export$278efdb85ed802da = "_spectrum-CircleLoader-track_7c1153";
$0cd87a683d3db6fa$export$3038f4c0c86f539b = "_spectrum-CircleLoader-fills_7c1153";
$0cd87a683d3db6fa$export$58fb9ac68cf8e784 = "_spectrum-CircleLoader-fill_7c1153";
$0cd87a683d3db6fa$export$b676cd958401a736 = "_spectrum-CircleLoader-fillMask1_7c1153";
$0cd87a683d3db6fa$export$8c428f4f13e424b = "_spectrum-CircleLoader-fillMask2_7c1153";
$0cd87a683d3db6fa$export$98ba5ef650aeb8ca = "_spectrum-CircleLoader-fillSubMask1_7c1153";
$0cd87a683d3db6fa$export$dc70b48c897b0f1a = "_spectrum-CircleLoader-fillSubMask2_7c1153";
$0cd87a683d3db6fa$export$79819ab9844dbe9b = "_spectrum-CircleLoader--small_7c1153";
$0cd87a683d3db6fa$export$c8c34e5e37bf511c = "_spectrum-CircleLoader--large_7c1153";
$0cd87a683d3db6fa$export$79b7e5abeef5134f = "_spectrum-CircleLoader--indeterminate_7c1153";
$0cd87a683d3db6fa$export$3663cbdb240663ec = "_spectrum-fills-rotate_7c1153";
$0cd87a683d3db6fa$export$524c81e63e1d64f5 = "_spectrum-fill-mask-1_7c1153";
$0cd87a683d3db6fa$export$6668708cb539f403 = "_spectrum-CircleLoader--overBackground_7c1153";



function $742d3a3c56d4ec52$var$ProgressCircle(props, ref) {
    let { value: value = 0 , minValue: minValue = 0 , maxValue: maxValue = 100 , size: size = 'M' , variant: variant , isIndeterminate: isIndeterminate = false , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby , ...otherProps } = props;
    let domRef = $hxVtd$useDOMRef(ref);
    let { styleProps: styleProps  } = $hxVtd$useStyleProps(otherProps);
    value = $hxVtd$clamp(value, minValue, maxValue);
    let { progressBarProps: progressBarProps  } = $hxVtd$useProgressBar({
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
    return(/*#__PURE__*/ $hxVtd$react.createElement("div", {
        ...styleProps,
        ...progressBarProps,
        ref: domRef,
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader', {
            'spectrum-CircleLoader--indeterminate': isIndeterminate,
            'spectrum-CircleLoader--small': size === 'S',
            'spectrum-CircleLoader--large': size === 'L',
            'spectrum-CircleLoader--overBackground': variant === 'overBackground'
        }, styleProps.className)
    }, /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-track')
    }), /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-fills')
    }, /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-fillMask1')
    }, /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-fillSubMask1'),
        "data-testid": "fillSubMask1",
        style: subMask1Style
    }, /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-fill')
    }))), /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-fillMask2')
    }, /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-fillSubMask2'),
        "data-testid": "fillSubMask2",
        style: subMask2Style
    }, /*#__PURE__*/ $hxVtd$react.createElement("div", {
        className: $hxVtd$classNames((/*@__PURE__*/$parcel$interopDefault($0cd87a683d3db6fa$exports)), 'spectrum-CircleLoader-fill')
    }))))));
}
/**
 * ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 * They can represent determinate or indeterminate progress.
 */ let $742d3a3c56d4ec52$export$c79b9d6b4cc92af7 = /*#__PURE__*/ $hxVtd$react.forwardRef($742d3a3c56d4ec52$var$ProgressCircle);





export {$40e15e3d9f876a57$export$c17561cb55d4db30 as ProgressBar, $742d3a3c56d4ec52$export$c79b9d6b4cc92af7 as ProgressCircle, $7a2f54350aed71f9$export$7c6ed87244065f3a as ProgressBarBase};
//# sourceMappingURL=module.js.map
