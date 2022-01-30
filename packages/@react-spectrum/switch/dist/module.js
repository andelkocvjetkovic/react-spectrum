import "./main.css";
import {useStyleProps as $jg3kx$useStyleProps, useFocusableRef as $jg3kx$useFocusableRef, classNames as $jg3kx$classNames} from "@react-spectrum/utils";
import {FocusRing as $jg3kx$FocusRing} from "@react-aria/focus";
import $jg3kx$react, {useRef as $jg3kx$useRef, forwardRef as $jg3kx$forwardRef} from "react";
import {useHover as $jg3kx$useHover} from "@react-aria/interactions";
import {useProviderProps as $jg3kx$useProviderProps} from "@react-spectrum/provider";
import {useSwitch as $jg3kx$useSwitch} from "@react-aria/switch";
import {useToggleState as $jg3kx$useToggleState} from "@react-stately/toggle";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f067bf8e0a620f64$exports = {};

$parcel$export($f067bf8e0a620f64$exports, "Switch", () => $f067bf8e0a620f64$export$b5d5cf8927ab7262);



var $9772840fe5f305b4$exports = {};

$parcel$export($9772840fe5f305b4$exports, "spectrum-ToggleSwitch", () => $9772840fe5f305b4$export$89a9162656c0c38c, (v) => $9772840fe5f305b4$export$89a9162656c0c38c = v);
$parcel$export($9772840fe5f305b4$exports, "spectrum-ToggleSwitch-input", () => $9772840fe5f305b4$export$38df7ea4ffef819a, (v) => $9772840fe5f305b4$export$38df7ea4ffef819a = v);
$parcel$export($9772840fe5f305b4$exports, "spectrum-ToggleSwitch-switch", () => $9772840fe5f305b4$export$b82d06d1b520a22f, (v) => $9772840fe5f305b4$export$b82d06d1b520a22f = v);
$parcel$export($9772840fe5f305b4$exports, "focus-ring", () => $9772840fe5f305b4$export$f39a09f249340e2a, (v) => $9772840fe5f305b4$export$f39a09f249340e2a = v);
$parcel$export($9772840fe5f305b4$exports, "spectrum-ToggleSwitch-label", () => $9772840fe5f305b4$export$8f1a69021a3897b2, (v) => $9772840fe5f305b4$export$8f1a69021a3897b2 = v);
$parcel$export($9772840fe5f305b4$exports, "is-hovered", () => $9772840fe5f305b4$export$b8813cd5d7824ce7, (v) => $9772840fe5f305b4$export$b8813cd5d7824ce7 = v);
$parcel$export($9772840fe5f305b4$exports, "spectrum-ToggleSwitch--quiet", () => $9772840fe5f305b4$export$ce1b1dcfc10f3df4, (v) => $9772840fe5f305b4$export$ce1b1dcfc10f3df4 = v);
$parcel$export($9772840fe5f305b4$exports, "spectrum-ToggleSwitch--ab", () => $9772840fe5f305b4$export$dc5a33fddabf5882, (v) => $9772840fe5f305b4$export$dc5a33fddabf5882 = v);
var $9772840fe5f305b4$export$89a9162656c0c38c;
var $9772840fe5f305b4$export$38df7ea4ffef819a;
var $9772840fe5f305b4$export$b82d06d1b520a22f;
var $9772840fe5f305b4$export$f39a09f249340e2a;
var $9772840fe5f305b4$export$8f1a69021a3897b2;
var $9772840fe5f305b4$export$b8813cd5d7824ce7;
var $9772840fe5f305b4$export$ce1b1dcfc10f3df4;
var $9772840fe5f305b4$export$dc5a33fddabf5882;
$9772840fe5f305b4$export$89a9162656c0c38c = "_spectrum-ToggleSwitch_3526dd";
$9772840fe5f305b4$export$38df7ea4ffef819a = "_spectrum-ToggleSwitch-input_3526dd";
$9772840fe5f305b4$export$b82d06d1b520a22f = "_spectrum-ToggleSwitch-switch_3526dd";
$9772840fe5f305b4$export$f39a09f249340e2a = "_focus-ring_3526dd";
$9772840fe5f305b4$export$8f1a69021a3897b2 = "_spectrum-ToggleSwitch-label_3526dd";
$9772840fe5f305b4$export$b8813cd5d7824ce7 = "_is-hovered_3526dd";
$9772840fe5f305b4$export$ce1b1dcfc10f3df4 = "_spectrum-ToggleSwitch--quiet_3526dd";
$9772840fe5f305b4$export$dc5a33fddabf5882 = "_spectrum-ToggleSwitch--ab_3526dd";






function $f067bf8e0a620f64$var$Switch(props, ref) {
    props = $jg3kx$useProviderProps(props);
    let { isEmphasized: isEmphasized = false , isDisabled: isDisabled = false , autoFocus: autoFocus , children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $jg3kx$useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $jg3kx$useHover({
        isDisabled: isDisabled
    });
    let inputRef = $jg3kx$useRef(null);
    let domRef = $jg3kx$useFocusableRef(ref, inputRef);
    let state = $jg3kx$useToggleState(props);
    let { inputProps: inputProps  } = $jg3kx$useSwitch(props, state, inputRef);
    return(/*#__PURE__*/ $jg3kx$react.createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: $jg3kx$classNames((/*@__PURE__*/$parcel$interopDefault($9772840fe5f305b4$exports)), 'spectrum-ToggleSwitch', {
            'spectrum-ToggleSwitch--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ $jg3kx$react.createElement($jg3kx$FocusRing, {
        focusRingClass: $jg3kx$classNames((/*@__PURE__*/$parcel$interopDefault($9772840fe5f305b4$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ $jg3kx$react.createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: $jg3kx$classNames((/*@__PURE__*/$parcel$interopDefault($9772840fe5f305b4$exports)), 'spectrum-ToggleSwitch-input')
    })), /*#__PURE__*/ $jg3kx$react.createElement("span", {
        className: $jg3kx$classNames((/*@__PURE__*/$parcel$interopDefault($9772840fe5f305b4$exports)), 'spectrum-ToggleSwitch-switch')
    }), children && /*#__PURE__*/ $jg3kx$react.createElement("span", {
        className: $jg3kx$classNames((/*@__PURE__*/$parcel$interopDefault($9772840fe5f305b4$exports)), 'spectrum-ToggleSwitch-label')
    }, children)));
}
/**
 * Switches allow users to turn an individual option on or off.
 * They are usually used to activate or deactivate a specific setting.
 */ const $f067bf8e0a620f64$export$b5d5cf8927ab7262 = /*#__PURE__*/ $jg3kx$forwardRef($f067bf8e0a620f64$var$Switch);




export {$f067bf8e0a620f64$export$b5d5cf8927ab7262 as Switch};
//# sourceMappingURL=module.js.map
