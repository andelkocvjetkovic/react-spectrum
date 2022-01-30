import "./main.css";
import {useSlotProps as $2dotM$useSlotProps, useStyleProps as $2dotM$useStyleProps, classNames as $2dotM$classNames, SlotProvider as $2dotM$SlotProvider} from "@react-spectrum/utils";
import {filterDOMProps as $2dotM$filterDOMProps} from "@react-aria/utils";
import {Flex as $2dotM$Flex} from "@react-spectrum/layout";
import $2dotM$react, {forwardRef as $2dotM$forwardRef} from "react";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $db5a98d28f72f19d$exports = {};

$parcel$export($db5a98d28f72f19d$exports, "IllustratedMessage", () => $db5a98d28f72f19d$export$406dbc84c317ece0);




var $25c887f074db8f9e$exports = {};

$parcel$export($25c887f074db8f9e$exports, "spectrum-IllustratedMessage", () => $25c887f074db8f9e$export$e22c6753c239ec31, (v) => $25c887f074db8f9e$export$e22c6753c239ec31 = v);
$parcel$export($25c887f074db8f9e$exports, "spectrum-IllustratedMessage-heading", () => $25c887f074db8f9e$export$5df23faa5ed344c4, (v) => $25c887f074db8f9e$export$5df23faa5ed344c4 = v);
$parcel$export($25c887f074db8f9e$exports, "spectrum-IllustratedMessage-description", () => $25c887f074db8f9e$export$cf9d959111789fe7, (v) => $25c887f074db8f9e$export$cf9d959111789fe7 = v);
$parcel$export($25c887f074db8f9e$exports, "spectrum-IllustratedMessage--cta", () => $25c887f074db8f9e$export$29744d89c9a76d50, (v) => $25c887f074db8f9e$export$29744d89c9a76d50 = v);
var $25c887f074db8f9e$export$e22c6753c239ec31;
var $25c887f074db8f9e$export$5df23faa5ed344c4;
var $25c887f074db8f9e$export$cf9d959111789fe7;
var $25c887f074db8f9e$export$29744d89c9a76d50;
$25c887f074db8f9e$export$e22c6753c239ec31 = "_spectrum-IllustratedMessage_02bd98";
$25c887f074db8f9e$export$5df23faa5ed344c4 = "_spectrum-IllustratedMessage-heading_02bd98";
$25c887f074db8f9e$export$cf9d959111789fe7 = "_spectrum-IllustratedMessage-description_02bd98";
$25c887f074db8f9e$export$29744d89c9a76d50 = "_spectrum-IllustratedMessage--cta_02bd98";


function $db5a98d28f72f19d$var$IllustratedMessage(props, ref) {
    props = $2dotM$useSlotProps(props, 'illustration');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $2dotM$useStyleProps(otherProps);
    let headingClassName = $2dotM$classNames((/*@__PURE__*/$parcel$interopDefault($25c887f074db8f9e$exports)), 'spectrum-IllustratedMessage-heading');
    let contentClassName = $2dotM$classNames((/*@__PURE__*/$parcel$interopDefault($25c887f074db8f9e$exports)), 'spectrum-IllustratedMessage-description');
    let slots = {
        heading: {
            UNSAFE_className: headingClassName
        },
        content: {
            UNSAFE_className: contentClassName
        }
    };
    return(/*#__PURE__*/ $2dotM$react.createElement($2dotM$Flex, {
        ...$2dotM$filterDOMProps(otherProps),
        UNSAFE_style: styleProps.style,
        isHidden: styleProps.hidden,
        UNSAFE_className: $2dotM$classNames((/*@__PURE__*/$parcel$interopDefault($25c887f074db8f9e$exports)), 'spectrum-IllustratedMessage', styleProps.className),
        ref: ref
    }, /*#__PURE__*/ $2dotM$react.createElement($2dotM$SlotProvider, {
        slots: slots
    }, children)));
}
/**
 * An IllustratedMessage displays an illustration and a message, usually
 * for an empty state or an error page.
 */ let $db5a98d28f72f19d$export$406dbc84c317ece0 = /*#__PURE__*/ $2dotM$forwardRef($db5a98d28f72f19d$var$IllustratedMessage);




export {$db5a98d28f72f19d$export$406dbc84c317ece0 as IllustratedMessage};
//# sourceMappingURL=module.js.map
