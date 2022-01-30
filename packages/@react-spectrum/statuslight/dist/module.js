import "./main.css";
import {useDOMRef as $6NO4Z$useDOMRef, useStyleProps as $6NO4Z$useStyleProps, classNames as $6NO4Z$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $6NO4Z$filterDOMProps} from "@react-aria/utils";
import $6NO4Z$react, {forwardRef as $6NO4Z$forwardRef} from "react";
import {useProviderProps as $6NO4Z$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $4621b49ff5978531$exports = {};

$parcel$export($4621b49ff5978531$exports, "StatusLight", () => $4621b49ff5978531$export$5f84c37a31c6e41c);



var $d49b37f93d5f7c59$exports = {};

$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight", () => $d49b37f93d5f7c59$export$11d3697e7e5c1bef, (v) => $d49b37f93d5f7c59$export$11d3697e7e5c1bef = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--neutral", () => $d49b37f93d5f7c59$export$bbf75dd99797a93e, (v) => $d49b37f93d5f7c59$export$bbf75dd99797a93e = v);
$parcel$export($d49b37f93d5f7c59$exports, "is-disabled", () => $d49b37f93d5f7c59$export$d35bc1e505d1ebbf, (v) => $d49b37f93d5f7c59$export$d35bc1e505d1ebbf = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--negative", () => $d49b37f93d5f7c59$export$1974c2646528dc4f, (v) => $d49b37f93d5f7c59$export$1974c2646528dc4f = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--notice", () => $d49b37f93d5f7c59$export$30a5e512ed4618b, (v) => $d49b37f93d5f7c59$export$30a5e512ed4618b = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--positive", () => $d49b37f93d5f7c59$export$141dae5af9534f54, (v) => $d49b37f93d5f7c59$export$141dae5af9534f54 = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--info", () => $d49b37f93d5f7c59$export$945a5d9a4e8494e6, (v) => $d49b37f93d5f7c59$export$945a5d9a4e8494e6 = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--active", () => $d49b37f93d5f7c59$export$b40c603f4b579265, (v) => $d49b37f93d5f7c59$export$b40c603f4b579265 = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--celery", () => $d49b37f93d5f7c59$export$e9a22f483095fe3e, (v) => $d49b37f93d5f7c59$export$e9a22f483095fe3e = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--yellow", () => $d49b37f93d5f7c59$export$b22c4af54e28c6c, (v) => $d49b37f93d5f7c59$export$b22c4af54e28c6c = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--fuchsia", () => $d49b37f93d5f7c59$export$cbaba642d0afd312, (v) => $d49b37f93d5f7c59$export$cbaba642d0afd312 = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--indigo", () => $d49b37f93d5f7c59$export$8b77e0c07c11635a, (v) => $d49b37f93d5f7c59$export$8b77e0c07c11635a = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--seafoam", () => $d49b37f93d5f7c59$export$d14bcd2d3ae8238c, (v) => $d49b37f93d5f7c59$export$d14bcd2d3ae8238c = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--chartreuse", () => $d49b37f93d5f7c59$export$f05bd1f10c0cc15f, (v) => $d49b37f93d5f7c59$export$f05bd1f10c0cc15f = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--magenta", () => $d49b37f93d5f7c59$export$43990cc5ba9a0059, (v) => $d49b37f93d5f7c59$export$43990cc5ba9a0059 = v);
$parcel$export($d49b37f93d5f7c59$exports, "spectrum-StatusLight--purple", () => $d49b37f93d5f7c59$export$975baced4f8182b4, (v) => $d49b37f93d5f7c59$export$975baced4f8182b4 = v);
var $d49b37f93d5f7c59$export$11d3697e7e5c1bef;
var $d49b37f93d5f7c59$export$bbf75dd99797a93e;
var $d49b37f93d5f7c59$export$d35bc1e505d1ebbf;
var $d49b37f93d5f7c59$export$1974c2646528dc4f;
var $d49b37f93d5f7c59$export$30a5e512ed4618b;
var $d49b37f93d5f7c59$export$141dae5af9534f54;
var $d49b37f93d5f7c59$export$945a5d9a4e8494e6;
var $d49b37f93d5f7c59$export$b40c603f4b579265;
var $d49b37f93d5f7c59$export$e9a22f483095fe3e;
var $d49b37f93d5f7c59$export$b22c4af54e28c6c;
var $d49b37f93d5f7c59$export$cbaba642d0afd312;
var $d49b37f93d5f7c59$export$8b77e0c07c11635a;
var $d49b37f93d5f7c59$export$d14bcd2d3ae8238c;
var $d49b37f93d5f7c59$export$f05bd1f10c0cc15f;
var $d49b37f93d5f7c59$export$43990cc5ba9a0059;
var $d49b37f93d5f7c59$export$975baced4f8182b4;
$d49b37f93d5f7c59$export$11d3697e7e5c1bef = "_spectrum-StatusLight_c020b6";
$d49b37f93d5f7c59$export$bbf75dd99797a93e = "_spectrum-StatusLight--neutral_c020b6";
$d49b37f93d5f7c59$export$d35bc1e505d1ebbf = "_is-disabled_c020b6";
$d49b37f93d5f7c59$export$1974c2646528dc4f = "_spectrum-StatusLight--negative_c020b6";
$d49b37f93d5f7c59$export$30a5e512ed4618b = "_spectrum-StatusLight--notice_c020b6";
$d49b37f93d5f7c59$export$141dae5af9534f54 = "_spectrum-StatusLight--positive_c020b6";
$d49b37f93d5f7c59$export$945a5d9a4e8494e6 = "_spectrum-StatusLight--info_c020b6";
$d49b37f93d5f7c59$export$b40c603f4b579265 = "_spectrum-StatusLight--active_c020b6";
$d49b37f93d5f7c59$export$e9a22f483095fe3e = "_spectrum-StatusLight--celery_c020b6";
$d49b37f93d5f7c59$export$b22c4af54e28c6c = "_spectrum-StatusLight--yellow_c020b6";
$d49b37f93d5f7c59$export$cbaba642d0afd312 = "_spectrum-StatusLight--fuchsia_c020b6";
$d49b37f93d5f7c59$export$8b77e0c07c11635a = "_spectrum-StatusLight--indigo_c020b6";
$d49b37f93d5f7c59$export$d14bcd2d3ae8238c = "_spectrum-StatusLight--seafoam_c020b6";
$d49b37f93d5f7c59$export$f05bd1f10c0cc15f = "_spectrum-StatusLight--chartreuse_c020b6";
$d49b37f93d5f7c59$export$43990cc5ba9a0059 = "_spectrum-StatusLight--magenta_c020b6";
$d49b37f93d5f7c59$export$975baced4f8182b4 = "_spectrum-StatusLight--purple_c020b6";



function $4621b49ff5978531$var$StatusLight(props, ref) {
    let { variant: variant , children: children , isDisabled: isDisabled , role: role , ...otherProps } = $6NO4Z$useProviderProps(props);
    let domRef = $6NO4Z$useDOMRef(ref);
    let { styleProps: styleProps  } = $6NO4Z$useStyleProps(otherProps);
    if (!children && !props['aria-label']) console.warn('If no children are provided, an aria-label must be specified');
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled StatusLight must have a role.');
    return(/*#__PURE__*/ $6NO4Z$react.createElement("div", {
        ...$6NO4Z$filterDOMProps(otherProps, {
            labelable: !!role
        }),
        ...styleProps,
        role: role,
        className: $6NO4Z$classNames((/*@__PURE__*/$parcel$interopDefault($d49b37f93d5f7c59$exports)), 'spectrum-StatusLight', `spectrum-StatusLight--${variant}`, {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef
    }, children));
}
/**
 * Status lights are used to color code categories and labels commonly found in data visualization.
 * When status lights have a semantic meaning, they should use semantic variant colors.
 */ let $4621b49ff5978531$export$5f84c37a31c6e41c = /*#__PURE__*/ $6NO4Z$forwardRef($4621b49ff5978531$var$StatusLight);




export {$4621b49ff5978531$export$5f84c37a31c6e41c as StatusLight};
//# sourceMappingURL=module.js.map
