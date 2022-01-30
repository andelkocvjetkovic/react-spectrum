import "./main.css";
import {useSlotProps as $3YaaK$useSlotProps, classNames as $3YaaK$classNames} from "@react-spectrum/utils";
import {ClearButton as $3YaaK$ClearButton} from "@react-spectrum/button";
import $3YaaK$spectrumiconsuiMagnifier from "@spectrum-icons/ui/Magnifier";
import $3YaaK$react, {useRef as $3YaaK$useRef, forwardRef as $3YaaK$forwardRef} from "react";
import {TextFieldBase as $3YaaK$TextFieldBase} from "@react-spectrum/textfield";
import {useProviderProps as $3YaaK$useProviderProps} from "@react-spectrum/provider";
import {useSearchField as $3YaaK$useSearchField} from "@react-aria/searchfield";
import {useSearchFieldState as $3YaaK$useSearchFieldState} from "@react-stately/searchfield";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5876695ae3d8c732$exports = {};

$parcel$export($5876695ae3d8c732$exports, "SearchField", () => $5876695ae3d8c732$export$b94867ecbd698f21);




var $f3224a2f471fe717$exports = {};

$parcel$export($f3224a2f471fe717$exports, "spectrum-Search", () => $f3224a2f471fe717$export$713911d754e1e4ae, (v) => $f3224a2f471fe717$export$713911d754e1e4ae = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-ClearButton", () => $f3224a2f471fe717$export$b752ce409e5660c, (v) => $f3224a2f471fe717$export$b752ce409e5660c = v);
$parcel$export($f3224a2f471fe717$exports, "is-quiet", () => $f3224a2f471fe717$export$6d5c5433f0da4241, (v) => $f3224a2f471fe717$export$6d5c5433f0da4241 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search-input", () => $f3224a2f471fe717$export$50e02603f2d97ae1, (v) => $f3224a2f471fe717$export$50e02603f2d97ae1 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search--invalid", () => $f3224a2f471fe717$export$77a6151a0b46a6a3, (v) => $f3224a2f471fe717$export$77a6151a0b46a6a3 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search--valid", () => $f3224a2f471fe717$export$aa81e3ab40f37567, (v) => $f3224a2f471fe717$export$aa81e3ab40f37567 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search--loadable", () => $f3224a2f471fe717$export$9c74d64afae3b2d4, (v) => $f3224a2f471fe717$export$9c74d64afae3b2d4 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search-circleLoader", () => $f3224a2f471fe717$export$70ae4353602451dc, (v) => $f3224a2f471fe717$export$70ae4353602451dc = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search-validationIcon", () => $f3224a2f471fe717$export$938f0981825eae6e, (v) => $f3224a2f471fe717$export$938f0981825eae6e = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Textfield", () => $f3224a2f471fe717$export$2c8a10299d8b3418, (v) => $f3224a2f471fe717$export$2c8a10299d8b3418 = v);
var $f3224a2f471fe717$export$713911d754e1e4ae;
var $f3224a2f471fe717$export$b752ce409e5660c;
var $f3224a2f471fe717$export$6d5c5433f0da4241;
var $f3224a2f471fe717$export$50e02603f2d97ae1;
var $f3224a2f471fe717$export$77a6151a0b46a6a3;
var $f3224a2f471fe717$export$aa81e3ab40f37567;
var $f3224a2f471fe717$export$9c74d64afae3b2d4;
var $f3224a2f471fe717$export$70ae4353602451dc;
var $f3224a2f471fe717$export$938f0981825eae6e;
var $f3224a2f471fe717$export$2c8a10299d8b3418;
$f3224a2f471fe717$export$713911d754e1e4ae = "_spectrum-Search_d3c0f3";
$f3224a2f471fe717$export$b752ce409e5660c = "_spectrum-ClearButton_d3c0f3";
$f3224a2f471fe717$export$6d5c5433f0da4241 = "_is-quiet_d3c0f3";
$f3224a2f471fe717$export$50e02603f2d97ae1 = "_spectrum-Search-input_d3c0f3";
$f3224a2f471fe717$export$77a6151a0b46a6a3 = "_spectrum-Search--invalid_d3c0f3";
$f3224a2f471fe717$export$aa81e3ab40f37567 = "_spectrum-Search--valid_d3c0f3";
$f3224a2f471fe717$export$9c74d64afae3b2d4 = "_spectrum-Search--loadable_d3c0f3";
$f3224a2f471fe717$export$70ae4353602451dc = "_spectrum-Search-circleLoader_d3c0f3";
$f3224a2f471fe717$export$938f0981825eae6e = "_spectrum-Search-validationIcon_d3c0f3";
$f3224a2f471fe717$export$2c8a10299d8b3418 = "_spectrum-Textfield_d3c0f3";






function $5876695ae3d8c732$var$SearchField(props, ref) {
    props = $3YaaK$useSlotProps(props, 'searchfield');
    props = $3YaaK$useProviderProps(props);
    let defaultIcon = /*#__PURE__*/ $3YaaK$react.createElement($3YaaK$spectrumiconsuiMagnifier, {
        "data-testid": "searchicon"
    });
    let { icon: icon = defaultIcon , isDisabled: isDisabled , UNSAFE_className: UNSAFE_className , ...otherProps } = props;
    let state = $3YaaK$useSearchFieldState(props);
    let inputRef = $3YaaK$useRef();
    let { labelProps: labelProps , inputProps: inputProps , clearButtonProps: clearButtonProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $3YaaK$useSearchField(props, state, inputRef);
    let clearButton = /*#__PURE__*/ $3YaaK$react.createElement($3YaaK$ClearButton, {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: $3YaaK$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    return(/*#__PURE__*/ $3YaaK$react.createElement($3YaaK$TextFieldBase, {
        ...otherProps,
        labelProps: labelProps,
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        UNSAFE_className: $3YaaK$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': props.isQuiet,
            'spectrum-Search--invalid': props.validationState === 'invalid',
            'spectrum-Search--valid': props.validationState === 'valid'
        }, UNSAFE_className),
        inputClassName: $3YaaK$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-input'),
        ref: ref,
        inputRef: inputRef,
        isDisabled: isDisabled,
        icon: icon,
        wrapperChildren: state.value !== '' && !props.isReadOnly && clearButton
    }));
}
/**
 * A SearchField is a text field designed for searches.
 */ let $5876695ae3d8c732$export$b94867ecbd698f21 = /*#__PURE__*/ $3YaaK$forwardRef($5876695ae3d8c732$var$SearchField);




export {$5876695ae3d8c732$export$b94867ecbd698f21 as SearchField};
//# sourceMappingURL=module.js.map
