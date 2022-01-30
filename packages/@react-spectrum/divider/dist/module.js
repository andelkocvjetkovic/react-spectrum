import "./main.css";
import {useSlotProps as $jXciI$useSlotProps, useDOMRef as $jXciI$useDOMRef, useStyleProps as $jXciI$useStyleProps, classNames as $jXciI$classNames} from "@react-spectrum/utils";
import $jXciI$react from "react";
import {useSeparator as $jXciI$useSeparator} from "@react-aria/separator";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $10e3564eb59c6a1d$exports = {};

$parcel$export($10e3564eb59c6a1d$exports, "Divider", () => $10e3564eb59c6a1d$export$2e0a83ec2e27ecbb);


var $b172ef60d050352a$exports = {};

$parcel$export($b172ef60d050352a$exports, "spectrum-Rule", () => $b172ef60d050352a$export$9ebf9cdaed6878bc, (v) => $b172ef60d050352a$export$9ebf9cdaed6878bc = v);
$parcel$export($b172ef60d050352a$exports, "spectrum-Rule--large", () => $b172ef60d050352a$export$243baa0ec4ab58cc, (v) => $b172ef60d050352a$export$243baa0ec4ab58cc = v);
$parcel$export($b172ef60d050352a$exports, "spectrum-Rule--medium", () => $b172ef60d050352a$export$a8d73b58ca350eb9, (v) => $b172ef60d050352a$export$a8d73b58ca350eb9 = v);
$parcel$export($b172ef60d050352a$exports, "spectrum-Rule--small", () => $b172ef60d050352a$export$b4b727880cfe37d, (v) => $b172ef60d050352a$export$b4b727880cfe37d = v);
$parcel$export($b172ef60d050352a$exports, "spectrum-Rule--horizontal", () => $b172ef60d050352a$export$563c1b24466c05b8, (v) => $b172ef60d050352a$export$563c1b24466c05b8 = v);
$parcel$export($b172ef60d050352a$exports, "spectrum-Rule--vertical", () => $b172ef60d050352a$export$76f93463a8fc15a8, (v) => $b172ef60d050352a$export$76f93463a8fc15a8 = v);
var $b172ef60d050352a$export$9ebf9cdaed6878bc;
var $b172ef60d050352a$export$243baa0ec4ab58cc;
var $b172ef60d050352a$export$a8d73b58ca350eb9;
var $b172ef60d050352a$export$b4b727880cfe37d;
var $b172ef60d050352a$export$563c1b24466c05b8;
var $b172ef60d050352a$export$76f93463a8fc15a8;
$b172ef60d050352a$export$9ebf9cdaed6878bc = "_spectrum-Rule_612bb8";
$b172ef60d050352a$export$243baa0ec4ab58cc = "_spectrum-Rule--large_612bb8";
$b172ef60d050352a$export$a8d73b58ca350eb9 = "_spectrum-Rule--medium_612bb8";
$b172ef60d050352a$export$b4b727880cfe37d = "_spectrum-Rule--small_612bb8";
$b172ef60d050352a$export$563c1b24466c05b8 = "_spectrum-Rule--horizontal_612bb8";
$b172ef60d050352a$export$76f93463a8fc15a8 = "_spectrum-Rule--vertical_612bb8";



let $10e3564eb59c6a1d$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large'
};
function $10e3564eb59c6a1d$var$Divider(props, ref) {
    props = $jXciI$useSlotProps(props, 'divider');
    let { size: size = 'L' , orientation: orientation = 'horizontal' , ...otherProps } = props;
    let domRef = $jXciI$useDOMRef(ref);
    let { styleProps: styleProps  } = $jXciI$useStyleProps(otherProps);
    let weight = $10e3564eb59c6a1d$var$sizeMap[size];
    let Element = 'hr';
    if (orientation === 'vertical') Element = 'div';
    let { separatorProps: separatorProps  } = $jXciI$useSeparator({
        ...props,
        elementType: Element
    });
    return(/*#__PURE__*/ $jXciI$react.createElement(Element, {
        ...styleProps,
        className: $jXciI$classNames((/*@__PURE__*/$parcel$interopDefault($b172ef60d050352a$exports)), 'spectrum-Rule', `spectrum-Rule--${weight}`, {
            'spectrum-Rule--vertical': orientation === 'vertical',
            'spectrum-Rule--horizontal': orientation === 'horizontal'
        }, styleProps.className),
        // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
        ref: domRef,
        ...separatorProps
    }));
}
/**
 * Dividers bring clarity to a layout by grouping and dividing content in close proximity.
 * They can also be used to establish rhythm and hierarchy.
 */ let $10e3564eb59c6a1d$export$2e0a83ec2e27ecbb = /*#__PURE__*/ $jXciI$react.forwardRef($10e3564eb59c6a1d$var$Divider);




export {$10e3564eb59c6a1d$export$2e0a83ec2e27ecbb as Divider};
//# sourceMappingURL=module.js.map
