import "./main.css";
import {useStyleProps as $kiprG$useStyleProps, useFocusableRef as $kiprG$useFocusableRef, classNames as $kiprG$classNames, useDOMRef as $kiprG$useDOMRef} from "@react-spectrum/utils";
import {FocusRing as $kiprG$FocusRing} from "@react-aria/focus";
import $kiprG$react, {useRef as $kiprG$useRef, forwardRef as $kiprG$forwardRef, useContext as $kiprG$useContext} from "react";
import {useHover as $kiprG$useHover} from "@react-aria/interactions";
import {useRadio as $kiprG$useRadio, useRadioGroup as $kiprG$useRadioGroup} from "@react-aria/radio";
import {Label as $kiprG$Label} from "@react-spectrum/label";
import {useFormProps as $kiprG$useFormProps} from "@react-spectrum/form";
import {useProviderProps as $kiprG$useProviderProps} from "@react-spectrum/provider";
import {useRadioGroupState as $kiprG$useRadioGroupState} from "@react-stately/radio";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $92653f0d1c5b0ae0$exports = {};

$parcel$export($92653f0d1c5b0ae0$exports, "Radio", () => $92653f0d1c5b0ae0$export$d7b12c4107be0d61);



var $b4bc04e36972c93d$exports = {};

$parcel$export($b4bc04e36972c93d$exports, "spectrum-Radio", () => $b4bc04e36972c93d$export$26ebd4dbfef068c5, (v) => $b4bc04e36972c93d$export$26ebd4dbfef068c5 = v);
$parcel$export($b4bc04e36972c93d$exports, "spectrum-Radio-input", () => $b4bc04e36972c93d$export$c0ce6f9a6a2de1cc, (v) => $b4bc04e36972c93d$export$c0ce6f9a6a2de1cc = v);
$parcel$export($b4bc04e36972c93d$exports, "spectrum-Radio-button", () => $b4bc04e36972c93d$export$bf9d5e902c33bf05, (v) => $b4bc04e36972c93d$export$bf9d5e902c33bf05 = v);
$parcel$export($b4bc04e36972c93d$exports, "focus-ring", () => $b4bc04e36972c93d$export$f39a09f249340e2a, (v) => $b4bc04e36972c93d$export$f39a09f249340e2a = v);
$parcel$export($b4bc04e36972c93d$exports, "spectrum-Radio-label", () => $b4bc04e36972c93d$export$b0f8395a9667922d, (v) => $b4bc04e36972c93d$export$b0f8395a9667922d = v);
$parcel$export($b4bc04e36972c93d$exports, "spectrum-Radio--labelBelow", () => $b4bc04e36972c93d$export$9443e7082698950d, (v) => $b4bc04e36972c93d$export$9443e7082698950d = v);
$parcel$export($b4bc04e36972c93d$exports, "is-hovered", () => $b4bc04e36972c93d$export$b8813cd5d7824ce7, (v) => $b4bc04e36972c93d$export$b8813cd5d7824ce7 = v);
$parcel$export($b4bc04e36972c93d$exports, "spectrum-Radio--quiet", () => $b4bc04e36972c93d$export$6db66b55a897f36d, (v) => $b4bc04e36972c93d$export$6db66b55a897f36d = v);
$parcel$export($b4bc04e36972c93d$exports, "is-invalid", () => $b4bc04e36972c93d$export$14a30de2866685fa, (v) => $b4bc04e36972c93d$export$14a30de2866685fa = v);
var $b4bc04e36972c93d$export$26ebd4dbfef068c5;
var $b4bc04e36972c93d$export$c0ce6f9a6a2de1cc;
var $b4bc04e36972c93d$export$bf9d5e902c33bf05;
var $b4bc04e36972c93d$export$f39a09f249340e2a;
var $b4bc04e36972c93d$export$b0f8395a9667922d;
var $b4bc04e36972c93d$export$9443e7082698950d;
var $b4bc04e36972c93d$export$b8813cd5d7824ce7;
var $b4bc04e36972c93d$export$6db66b55a897f36d;
var $b4bc04e36972c93d$export$14a30de2866685fa;
$b4bc04e36972c93d$export$26ebd4dbfef068c5 = "_spectrum-Radio_bf46c2";
$b4bc04e36972c93d$export$c0ce6f9a6a2de1cc = "_spectrum-Radio-input_bf46c2";
$b4bc04e36972c93d$export$bf9d5e902c33bf05 = "_spectrum-Radio-button_bf46c2";
$b4bc04e36972c93d$export$f39a09f249340e2a = "_focus-ring_bf46c2";
$b4bc04e36972c93d$export$b0f8395a9667922d = "_spectrum-Radio-label_bf46c2";
$b4bc04e36972c93d$export$9443e7082698950d = "_spectrum-Radio--labelBelow_bf46c2";
$b4bc04e36972c93d$export$b8813cd5d7824ce7 = "_is-hovered_bf46c2";
$b4bc04e36972c93d$export$6db66b55a897f36d = "_spectrum-Radio--quiet_bf46c2";
$b4bc04e36972c93d$export$14a30de2866685fa = "_is-invalid_bf46c2";





const $99c8f9d9437df009$export$b118023277d4a5c3 = $kiprG$react.createContext(null);
function $99c8f9d9437df009$export$b054eba74077a826() {
    return $kiprG$useContext($99c8f9d9437df009$export$b118023277d4a5c3);
}


function $92653f0d1c5b0ae0$var$Radio(props, ref) {
    let { isDisabled: isDisabled , children: children , autoFocus: autoFocus , ...otherProps } = props;
    let { styleProps: styleProps  } = $kiprG$useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $kiprG$useHover({
        isDisabled: isDisabled
    });
    let inputRef = $kiprG$useRef(null);
    let domRef = $kiprG$useFocusableRef(ref, inputRef);
    let radioGroupProps = $99c8f9d9437df009$export$b054eba74077a826();
    let { isEmphasized: isEmphasized , validationState: validationState , state: state  } = radioGroupProps;
    let { inputProps: inputProps  } = $kiprG$useRadio({
        ...props,
        ...radioGroupProps,
        isDisabled: isDisabled
    }, state, inputRef);
    return(/*#__PURE__*/ $kiprG$react.createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($b4bc04e36972c93d$exports)), 'spectrum-Radio', {
            // Removing. Pending design feedback.
            // 'spectrum-Radio--labelBelow': labelPosition === 'bottom',
            'spectrum-Radio--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ $kiprG$react.createElement($kiprG$FocusRing, {
        focusRingClass: $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($b4bc04e36972c93d$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ $kiprG$react.createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($b4bc04e36972c93d$exports)), 'spectrum-Radio-input')
    })), /*#__PURE__*/ $kiprG$react.createElement("span", {
        className: $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($b4bc04e36972c93d$exports)), 'spectrum-Radio-button')
    }), children && /*#__PURE__*/ $kiprG$react.createElement("span", {
        className: $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($b4bc04e36972c93d$exports)), 'spectrum-Radio-label')
    }, children)));
}
/**
 * Radio buttons allow users to select a single option from a list of mutually exclusive options.
 * All possible options are exposed up front for users to compare.
 */ const $92653f0d1c5b0ae0$export$d7b12c4107be0d61 = /*#__PURE__*/ $kiprG$forwardRef($92653f0d1c5b0ae0$var$Radio);


var $b34b00252f5f8999$exports = {};

$parcel$export($b34b00252f5f8999$exports, "RadioGroup", () => $b34b00252f5f8999$export$a98f0dcb43a68a25);


var $29047d5b2695cedc$exports = {};

$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel", () => $29047d5b2695cedc$export$493d18e796ae054, (v) => $29047d5b2695cedc$export$493d18e796ae054 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel--positionSide", () => $29047d5b2695cedc$export$9e6f19dc21f22f2e, (v) => $29047d5b2695cedc$export$9e6f19dc21f22f2e = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel-requiredIcon", () => $29047d5b2695cedc$export$7c47642c7d46f3c9, (v) => $29047d5b2695cedc$export$7c47642c7d46f3c9 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel--alignEnd", () => $29047d5b2695cedc$export$885efcc08143a987, (v) => $29047d5b2695cedc$export$885efcc08143a987 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field", () => $29047d5b2695cedc$export$f6d480ae1e56eba0, (v) => $29047d5b2695cedc$export$f6d480ae1e56eba0 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field--positionTop", () => $29047d5b2695cedc$export$a4ea780a9064d7f9, (v) => $29047d5b2695cedc$export$a4ea780a9064d7f9 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-field", () => $29047d5b2695cedc$export$3ab8a3dc7f0563d, (v) => $29047d5b2695cedc$export$3ab8a3dc7f0563d = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-field--multiline", () => $29047d5b2695cedc$export$f58a1e966a92ba5e, (v) => $29047d5b2695cedc$export$f58a1e966a92ba5e = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field--positionSide", () => $29047d5b2695cedc$export$2963225c91179589, (v) => $29047d5b2695cedc$export$2963225c91179589 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-wrapper", () => $29047d5b2695cedc$export$127df0b7290eb8ef, (v) => $29047d5b2695cedc$export$127df0b7290eb8ef = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form", () => $29047d5b2695cedc$export$94d2bcc94afabd89, (v) => $29047d5b2695cedc$export$94d2bcc94afabd89 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form--positionSide", () => $29047d5b2695cedc$export$7f44db659563c8f4, (v) => $29047d5b2695cedc$export$7f44db659563c8f4 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form--positionTop", () => $29047d5b2695cedc$export$11b8bc81fe551057, (v) => $29047d5b2695cedc$export$11b8bc81fe551057 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form-itemLabel", () => $29047d5b2695cedc$export$51ec27881a1e3928, (v) => $29047d5b2695cedc$export$51ec27881a1e3928 = v);
$parcel$export($29047d5b2695cedc$exports, "is-disabled", () => $29047d5b2695cedc$export$d35bc1e505d1ebbf, (v) => $29047d5b2695cedc$export$d35bc1e505d1ebbf = v);
var $29047d5b2695cedc$export$493d18e796ae054;
var $29047d5b2695cedc$export$9e6f19dc21f22f2e;
var $29047d5b2695cedc$export$7c47642c7d46f3c9;
var $29047d5b2695cedc$export$885efcc08143a987;
var $29047d5b2695cedc$export$f6d480ae1e56eba0;
var $29047d5b2695cedc$export$a4ea780a9064d7f9;
var $29047d5b2695cedc$export$3ab8a3dc7f0563d;
var $29047d5b2695cedc$export$f58a1e966a92ba5e;
var $29047d5b2695cedc$export$2963225c91179589;
var $29047d5b2695cedc$export$127df0b7290eb8ef;
var $29047d5b2695cedc$export$94d2bcc94afabd89;
var $29047d5b2695cedc$export$7f44db659563c8f4;
var $29047d5b2695cedc$export$11b8bc81fe551057;
var $29047d5b2695cedc$export$51ec27881a1e3928;
var $29047d5b2695cedc$export$d35bc1e505d1ebbf;
$29047d5b2695cedc$export$493d18e796ae054 = "_spectrum-FieldLabel_d2db1f";
$29047d5b2695cedc$export$9e6f19dc21f22f2e = "_spectrum-FieldLabel--positionSide_d2db1f";
$29047d5b2695cedc$export$7c47642c7d46f3c9 = "_spectrum-FieldLabel-requiredIcon_d2db1f";
$29047d5b2695cedc$export$885efcc08143a987 = "_spectrum-FieldLabel--alignEnd_d2db1f";
$29047d5b2695cedc$export$f6d480ae1e56eba0 = "_spectrum-Field_d2db1f";
$29047d5b2695cedc$export$a4ea780a9064d7f9 = "_spectrum-Field--positionTop_d2db1f";
$29047d5b2695cedc$export$3ab8a3dc7f0563d = "_spectrum-Field-field_d2db1f";
$29047d5b2695cedc$export$f58a1e966a92ba5e = "_spectrum-Field-field--multiline_d2db1f";
$29047d5b2695cedc$export$2963225c91179589 = "_spectrum-Field--positionSide_d2db1f";
$29047d5b2695cedc$export$127df0b7290eb8ef = "_spectrum-Field-wrapper_d2db1f";
$29047d5b2695cedc$export$94d2bcc94afabd89 = "_spectrum-Form_d2db1f";
$29047d5b2695cedc$export$7f44db659563c8f4 = "_spectrum-Form--positionSide_d2db1f";
$29047d5b2695cedc$export$11b8bc81fe551057 = "_spectrum-Form--positionTop_d2db1f";
$29047d5b2695cedc$export$51ec27881a1e3928 = "_spectrum-Form-itemLabel_d2db1f";
$29047d5b2695cedc$export$d35bc1e505d1ebbf = "_is-disabled_d2db1f";




var $c1a9e34d21df42a1$exports = {};

$parcel$export($c1a9e34d21df42a1$exports, "spectrum-FieldGroup", () => $c1a9e34d21df42a1$export$75eb16cbfc18279c, (v) => $c1a9e34d21df42a1$export$75eb16cbfc18279c = v);
$parcel$export($c1a9e34d21df42a1$exports, "spectrum-FieldGroup--positionSide", () => $c1a9e34d21df42a1$export$859b606bd9f45f81, (v) => $c1a9e34d21df42a1$export$859b606bd9f45f81 = v);
$parcel$export($c1a9e34d21df42a1$exports, "spectrum-FieldGroup-group", () => $c1a9e34d21df42a1$export$984c7bbbfc7ddffc, (v) => $c1a9e34d21df42a1$export$984c7bbbfc7ddffc = v);
$parcel$export($c1a9e34d21df42a1$exports, "spectrum-FieldGroup-group--horizontal", () => $c1a9e34d21df42a1$export$1ad8646bcba21c0e, (v) => $c1a9e34d21df42a1$export$1ad8646bcba21c0e = v);
var $c1a9e34d21df42a1$export$75eb16cbfc18279c;
var $c1a9e34d21df42a1$export$859b606bd9f45f81;
var $c1a9e34d21df42a1$export$984c7bbbfc7ddffc;
var $c1a9e34d21df42a1$export$1ad8646bcba21c0e;
$c1a9e34d21df42a1$export$75eb16cbfc18279c = "_spectrum-FieldGroup_41d350";
$c1a9e34d21df42a1$export$859b606bd9f45f81 = "_spectrum-FieldGroup--positionSide_41d350";
$c1a9e34d21df42a1$export$984c7bbbfc7ddffc = "_spectrum-FieldGroup-group_41d350";
$c1a9e34d21df42a1$export$1ad8646bcba21c0e = "_spectrum-FieldGroup-group--horizontal_41d350";






function $b34b00252f5f8999$var$RadioGroup(props, ref) {
    props = $kiprG$useProviderProps(props);
    props = $kiprG$useFormProps(props);
    let { isEmphasized: isEmphasized , isRequired: isRequired , necessityIndicator: necessityIndicator , label: label , labelPosition: labelPosition = 'top' , labelAlign: labelAlign , validationState: validationState , children: children , orientation: orientation = 'vertical' , ...otherProps } = props;
    let domRef = $kiprG$useDOMRef(ref);
    let { styleProps: styleProps  } = $kiprG$useStyleProps(otherProps);
    let state = $kiprG$useRadioGroupState(props);
    let { radioGroupProps: radioGroupProps , labelProps: labelProps  } = $kiprG$useRadioGroup(props, state);
    return(/*#__PURE__*/ $kiprG$react.createElement("div", {
        ...styleProps,
        ...radioGroupProps,
        className: $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($c1a9e34d21df42a1$exports)), 'spectrum-FieldGroup', {
            'spectrum-FieldGroup--positionSide': labelPosition === 'side'
        }, // This is so radio works inside a <Form>
        $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-Field'), styleProps.className),
        ref: domRef
    }, label && /*#__PURE__*/ $kiprG$react.createElement($kiprG$Label, {
        ...labelProps,
        elementType: "span",
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        isRequired: isRequired,
        necessityIndicator: necessityIndicator
    }, label), /*#__PURE__*/ $kiprG$react.createElement("div", {
        className: $kiprG$classNames((/*@__PURE__*/$parcel$interopDefault($c1a9e34d21df42a1$exports)), 'spectrum-FieldGroup-group', {
            'spectrum-FieldGroup-group--horizontal': orientation === 'horizontal'
        })
    }, /*#__PURE__*/ $kiprG$react.createElement($99c8f9d9437df009$export$b118023277d4a5c3.Provider, {
        value: {
            isEmphasized: isEmphasized,
            validationState: validationState,
            state: state
        }
    }, children))));
}
/**
 * Radio groups allow users to select a single option from a list of mutually exclusive options.
 * All possible options are exposed up front for users to compare.
 */ const $b34b00252f5f8999$export$a98f0dcb43a68a25 = /*#__PURE__*/ $kiprG$react.forwardRef($b34b00252f5f8999$var$RadioGroup);




export {$92653f0d1c5b0ae0$export$d7b12c4107be0d61 as Radio, $b34b00252f5f8999$export$a98f0dcb43a68a25 as RadioGroup};
//# sourceMappingURL=module.js.map
