import "./main.css";
import {useDOMRef as $5mJQ0$useDOMRef, useStyleProps as $5mJQ0$useStyleProps, classNames as $5mJQ0$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $5mJQ0$filterDOMProps} from "@react-aria/utils";
import $5mJQ0$react, {forwardRef as $5mJQ0$forwardRef} from "react";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $38551d4ba1d9df47$exports = {};

$parcel$export($38551d4ba1d9df47$exports, "Well", () => $38551d4ba1d9df47$export$d89c679ee2f73242);



var $5e9ed4b62e65dd4e$exports = {};

$parcel$export($5e9ed4b62e65dd4e$exports, "spectrum-Well", () => $5e9ed4b62e65dd4e$export$98e76d3873e01aa9, (v) => $5e9ed4b62e65dd4e$export$98e76d3873e01aa9 = v);
var $5e9ed4b62e65dd4e$export$98e76d3873e01aa9;
$5e9ed4b62e65dd4e$export$98e76d3873e01aa9 = "_spectrum-Well_d48698";


function $38551d4ba1d9df47$var$Well(props, ref) {
    let { children: children , role: role , ...otherProps } = props;
    let domRef = $5mJQ0$useDOMRef(ref);
    let { styleProps: styleProps  } = $5mJQ0$useStyleProps(otherProps);
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled Well must have a role.');
    return(/*#__PURE__*/ $5mJQ0$react.createElement("div", {
        ...$5mJQ0$filterDOMProps(otherProps, {
            labelable: !!role
        }),
        ...styleProps,
        role: role,
        ref: domRef,
        className: $5mJQ0$classNames((/*@__PURE__*/$parcel$interopDefault($5e9ed4b62e65dd4e$exports)), 'spectrum-Well', styleProps.className)
    }, children));
}
/**
 * A Well is a content container that displays non-editable content separate from other content on the screen.
 * Often this is used to display preformatted text, such as code/markup examples on a documentation page.
 */ const $38551d4ba1d9df47$export$d89c679ee2f73242 = /*#__PURE__*/ $5mJQ0$forwardRef($38551d4ba1d9df47$var$Well);




export {$38551d4ba1d9df47$export$d89c679ee2f73242 as Well};
//# sourceMappingURL=module.js.map
