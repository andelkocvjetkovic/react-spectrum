import "./main.css";
import {useSlotProps as $hq22a$useSlotProps, useStyleProps as $hq22a$useStyleProps, useDOMRef as $hq22a$useDOMRef, dimensionValue as $hq22a$dimensionValue, classNames as $hq22a$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $hq22a$filterDOMProps} from "@react-aria/utils";
import $hq22a$react, {forwardRef as $hq22a$forwardRef} from "react";
import {useProviderProps as $hq22a$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a69c37843023575e$exports = {};

$parcel$export($a69c37843023575e$exports, "Avatar", () => $a69c37843023575e$export$e2255cf6045e8d47);



var $47a9f056c8715842$exports = {};

$parcel$export($47a9f056c8715842$exports, "spectrum-Avatar", () => $47a9f056c8715842$export$2e049b8d031600fb, (v) => $47a9f056c8715842$export$2e049b8d031600fb = v);
$parcel$export($47a9f056c8715842$exports, "is-disabled", () => $47a9f056c8715842$export$d35bc1e505d1ebbf, (v) => $47a9f056c8715842$export$d35bc1e505d1ebbf = v);
var $47a9f056c8715842$export$2e049b8d031600fb;
var $47a9f056c8715842$export$d35bc1e505d1ebbf;
$47a9f056c8715842$export$2e049b8d031600fb = "_spectrum-Avatar_2ebb13";
$47a9f056c8715842$export$d35bc1e505d1ebbf = "_is-disabled_2ebb13";



const $a69c37843023575e$var$DEFAULT_SIZE = 'avatar-size-100';
const $a69c37843023575e$var$SIZE_RE = /^size-\d+/;
function $a69c37843023575e$var$Avatar(props, ref) {
    props = $hq22a$useSlotProps(props, 'avatar');
    const { alt: alt = '' , isDisabled: isDisabled , size: size , src: src , ...otherProps } = $hq22a$useProviderProps(props);
    const { styleProps: styleProps  } = $hq22a$useStyleProps(otherProps);
    const domRef = $hq22a$useDOMRef(ref);
    const domProps = $hq22a$filterDOMProps(otherProps);
    // Casting `size` as `any` since `isNaN` expects a `number`, but we want it
    // to handle `string` numbers; e.g. '300' as opposed to 300
    const sizeValue = typeof size !== 'number' && ($a69c37843023575e$var$SIZE_RE.test(size) || !isNaN(size)) ? $hq22a$dimensionValue($a69c37843023575e$var$DEFAULT_SIZE) // override disallowed size values
     : $hq22a$dimensionValue(size || $a69c37843023575e$var$DEFAULT_SIZE);
    return(/*#__PURE__*/ $hq22a$react.createElement("img", {
        ...styleProps,
        ...domProps,
        alt: alt,
        className: $hq22a$classNames((/*@__PURE__*/$parcel$interopDefault($47a9f056c8715842$exports)), 'spectrum-Avatar', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef,
        src: src,
        style: {
            ...styleProps.style,
            ...sizeValue && {
                height: sizeValue,
                width: sizeValue
            }
        }
    }));
}
/**
 * An avatar is a thumbnail representation of an entity, such as a user or an organization.
 */ const $a69c37843023575e$export$e2255cf6045e8d47 = /*#__PURE__*/ $hq22a$forwardRef($a69c37843023575e$var$Avatar);




export {$a69c37843023575e$export$e2255cf6045e8d47 as Avatar};
//# sourceMappingURL=module.js.map
