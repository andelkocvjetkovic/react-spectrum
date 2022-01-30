import "./main.css";
import {useSlotProps as $d51AM$useSlotProps, useStyleProps as $d51AM$useStyleProps, useDOMRef as $d51AM$useDOMRef, classNames as $d51AM$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $d51AM$filterDOMProps} from "@react-aria/utils";
import $d51AM$react from "react";
import {useProviderProps as $d51AM$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $99a1f20bce13ee87$exports = {};

$parcel$export($99a1f20bce13ee87$exports, "Image", () => $99a1f20bce13ee87$export$3e431a229df88919);



var $d4c417d5538a8296$exports = {};

$parcel$export($d4c417d5538a8296$exports, "spectrum-Image-img", () => $d4c417d5538a8296$export$3238177972e11200, (v) => $d4c417d5538a8296$export$3238177972e11200 = v);
var $d4c417d5538a8296$export$3238177972e11200;
$d4c417d5538a8296$export$3238177972e11200 = "_spectrum-Image-img_fdc794";



// incomplete component for show right now
function $99a1f20bce13ee87$var$Image(props, ref) {
    /* Slots should be able to pass an alt for default behavior, but in Images, the child may know better. */ let userProvidedAlt = props.alt;
    props = $d51AM$useSlotProps(props, 'image');
    props = $d51AM$useProviderProps(props);
    let { objectFit: objectFit , src: src , alt: alt , ...otherProps } = props;
    let { styleProps: styleProps  } = $d51AM$useStyleProps(otherProps);
    let domRef = $d51AM$useDOMRef(ref);
    if (alt == null) console.warn("The `alt` prop was not provided to an image. Add `alt` text for screen readers, or set `alt=\"\"` prop to indicate that the image is decorative or redundant with displayed text and should not be announced by screen readers.");
    return(/*#__PURE__*/ $d51AM$react.createElement("div", {
        ...$d51AM$filterDOMProps(props),
        ...styleProps,
        className: $d51AM$classNames((/*@__PURE__*/$parcel$interopDefault($d4c417d5538a8296$exports)), styleProps.className),
        style: {
            ...styleProps.style,
            overflow: 'hidden'
        },
        ref: domRef
    }, /*#__PURE__*/ $d51AM$react.createElement("img", {
        src: src,
        alt: userProvidedAlt || alt,
        style: {
            objectFit: objectFit
        },
        className: $d51AM$classNames((/*@__PURE__*/$parcel$interopDefault($d4c417d5538a8296$exports)), 'spectrum-Image-img')
    })));
}
/**
 * Image is used to insert and display an image within a component.
 */ const $99a1f20bce13ee87$export$3e431a229df88919 = /*#__PURE__*/ $d51AM$react.forwardRef($99a1f20bce13ee87$var$Image);




export {$99a1f20bce13ee87$export$3e431a229df88919 as Image};
//# sourceMappingURL=module.js.map
