import "./main.css";
import {classNames as $6Q8ZN$classNames} from "@react-spectrum/utils";
import {ProgressBarBase as $6Q8ZN$ProgressBarBase} from "@react-spectrum/progress";
import $6Q8ZN$react from "react";
import {useMeter as $6Q8ZN$useMeter} from "@react-aria/meter";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $dd527325be0479c4$exports = {};

$parcel$export($dd527325be0479c4$exports, "Meter", () => $dd527325be0479c4$export$62e3ae2a4090b879);



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



function $dd527325be0479c4$var$Meter(props, ref) {
    let { variant: variant , ...otherProps } = props;
    const { meterProps: meterProps , labelProps: labelProps  } = $6Q8ZN$useMeter(props);
    return(/*#__PURE__*/ $6Q8ZN$react.createElement($6Q8ZN$ProgressBarBase, {
        ...otherProps,
        ref: ref,
        barProps: meterProps,
        labelProps: labelProps,
        barClassName: $6Q8ZN$classNames((/*@__PURE__*/$parcel$interopDefault($0dc1b026ac5bd78b$exports)), {
            'is-positive': variant === 'positive',
            'is-warning': variant === 'warning',
            'is-critical': variant === 'critical'
        })
    }));
}
/**
 * Meters are visual representations of a quantity or an achievement.
 * Their progress is determined by user actions, rather than system actions.
 */ let $dd527325be0479c4$export$62e3ae2a4090b879 = /*#__PURE__*/ $6Q8ZN$react.forwardRef($dd527325be0479c4$var$Meter);




export {$dd527325be0479c4$export$62e3ae2a4090b879 as Meter};
//# sourceMappingURL=module.js.map
