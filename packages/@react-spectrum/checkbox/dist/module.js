import "./main.css";
import $NwfxE$spectrumiconsuiCheckmarkSmall from "@spectrum-icons/ui/CheckmarkSmall";
import {useStyleProps as $NwfxE$useStyleProps, useFocusableRef as $NwfxE$useFocusableRef, classNames as $NwfxE$classNames, useDOMRef as $NwfxE$useDOMRef} from "@react-spectrum/utils";
import $NwfxE$spectrumiconsuiDashSmall from "@spectrum-icons/ui/DashSmall";
import {FocusRing as $NwfxE$FocusRing} from "@react-aria/focus";
import $NwfxE$react, {useRef as $NwfxE$useRef, useContext as $NwfxE$useContext, forwardRef as $NwfxE$forwardRef} from "react";
import {useCheckboxGroupItem as $NwfxE$useCheckboxGroupItem, useCheckbox as $NwfxE$useCheckbox, useCheckboxGroup as $NwfxE$useCheckboxGroup} from "@react-aria/checkbox";
import {useHover as $NwfxE$useHover} from "@react-aria/interactions";
import {useProviderProps as $NwfxE$useProviderProps, Provider as $NwfxE$Provider} from "@react-spectrum/provider";
import {useToggleState as $NwfxE$useToggleState} from "@react-stately/toggle";
import {Label as $NwfxE$Label} from "@react-spectrum/label";
import {useCheckboxGroupState as $NwfxE$useCheckboxGroupState} from "@react-stately/checkbox";
import {useFormProps as $NwfxE$useFormProps} from "@react-spectrum/form";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $244b2b2915cffe97$exports = {};

$parcel$export($244b2b2915cffe97$exports, "Checkbox", () => $244b2b2915cffe97$export$48513f6b9f8ce62d);

const $49d22fbaf60d1fdd$export$baf37c4be89255b8 = $NwfxE$react.createContext(null);







var $4999d0361b226bbf$exports = {};

$parcel$export($4999d0361b226bbf$exports, "spectrum-Checkbox", () => $4999d0361b226bbf$export$f8ee3e99d637ccac, (v) => $4999d0361b226bbf$export$f8ee3e99d637ccac = v);
$parcel$export($4999d0361b226bbf$exports, "spectrum-Checkbox-input", () => $4999d0361b226bbf$export$fbf255e91152b086, (v) => $4999d0361b226bbf$export$fbf255e91152b086 = v);
$parcel$export($4999d0361b226bbf$exports, "focus-ring", () => $4999d0361b226bbf$export$f39a09f249340e2a, (v) => $4999d0361b226bbf$export$f39a09f249340e2a = v);
$parcel$export($4999d0361b226bbf$exports, "spectrum-Checkbox-box", () => $4999d0361b226bbf$export$b07bd551df410935, (v) => $4999d0361b226bbf$export$b07bd551df410935 = v);
$parcel$export($4999d0361b226bbf$exports, "is-indeterminate", () => $4999d0361b226bbf$export$682c8615600f6ee, (v) => $4999d0361b226bbf$export$682c8615600f6ee = v);
$parcel$export($4999d0361b226bbf$exports, "spectrum-Checkbox-checkmark", () => $4999d0361b226bbf$export$e152b25f70350d85, (v) => $4999d0361b226bbf$export$e152b25f70350d85 = v);
$parcel$export($4999d0361b226bbf$exports, "spectrum-Checkbox-partialCheckmark", () => $4999d0361b226bbf$export$7f6ea68ad4b1fa69, (v) => $4999d0361b226bbf$export$7f6ea68ad4b1fa69 = v);
$parcel$export($4999d0361b226bbf$exports, "is-checked", () => $4999d0361b226bbf$export$3f46c891456641e7, (v) => $4999d0361b226bbf$export$3f46c891456641e7 = v);
$parcel$export($4999d0361b226bbf$exports, "spectrum-Checkbox-label", () => $4999d0361b226bbf$export$9244b14cfa532d4f, (v) => $4999d0361b226bbf$export$9244b14cfa532d4f = v);
$parcel$export($4999d0361b226bbf$exports, "is-hovered", () => $4999d0361b226bbf$export$b8813cd5d7824ce7, (v) => $4999d0361b226bbf$export$b8813cd5d7824ce7 = v);
$parcel$export($4999d0361b226bbf$exports, "spectrum-Checkbox--quiet", () => $4999d0361b226bbf$export$3a2eb50fe5450439, (v) => $4999d0361b226bbf$export$3a2eb50fe5450439 = v);
$parcel$export($4999d0361b226bbf$exports, "is-invalid", () => $4999d0361b226bbf$export$14a30de2866685fa, (v) => $4999d0361b226bbf$export$14a30de2866685fa = v);
var $4999d0361b226bbf$export$f8ee3e99d637ccac;
var $4999d0361b226bbf$export$fbf255e91152b086;
var $4999d0361b226bbf$export$f39a09f249340e2a;
var $4999d0361b226bbf$export$b07bd551df410935;
var $4999d0361b226bbf$export$682c8615600f6ee;
var $4999d0361b226bbf$export$e152b25f70350d85;
var $4999d0361b226bbf$export$7f6ea68ad4b1fa69;
var $4999d0361b226bbf$export$3f46c891456641e7;
var $4999d0361b226bbf$export$9244b14cfa532d4f;
var $4999d0361b226bbf$export$b8813cd5d7824ce7;
var $4999d0361b226bbf$export$3a2eb50fe5450439;
var $4999d0361b226bbf$export$14a30de2866685fa;
$4999d0361b226bbf$export$f8ee3e99d637ccac = "_spectrum-Checkbox_4870fc";
$4999d0361b226bbf$export$fbf255e91152b086 = "_spectrum-Checkbox-input_4870fc";
$4999d0361b226bbf$export$f39a09f249340e2a = "_focus-ring_4870fc";
$4999d0361b226bbf$export$b07bd551df410935 = "_spectrum-Checkbox-box_4870fc";
$4999d0361b226bbf$export$682c8615600f6ee = "_is-indeterminate_4870fc";
$4999d0361b226bbf$export$e152b25f70350d85 = "_spectrum-Checkbox-checkmark_4870fc";
$4999d0361b226bbf$export$7f6ea68ad4b1fa69 = "_spectrum-Checkbox-partialCheckmark_4870fc";
$4999d0361b226bbf$export$3f46c891456641e7 = "_is-checked_4870fc";
$4999d0361b226bbf$export$9244b14cfa532d4f = "_spectrum-Checkbox-label_4870fc";
$4999d0361b226bbf$export$b8813cd5d7824ce7 = "_is-hovered_4870fc";
$4999d0361b226bbf$export$3a2eb50fe5450439 = "_spectrum-Checkbox--quiet_4870fc";
$4999d0361b226bbf$export$14a30de2866685fa = "_is-invalid_4870fc";






function $244b2b2915cffe97$var$Checkbox(props, ref) {
    let originalProps = props;
    props = $NwfxE$useProviderProps(props);
    let { isIndeterminate: isIndeterminate = false , isEmphasized: isEmphasized = false , isDisabled: isDisabled = false , autoFocus: autoFocus , children: children , validationState: validationState , ...otherProps } = props;
    let { styleProps: styleProps  } = $NwfxE$useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $NwfxE$useHover({
        isDisabled: isDisabled
    });
    let inputRef = $NwfxE$useRef(null);
    let domRef = $NwfxE$useFocusableRef(ref, inputRef);
    // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
    // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
    // but since the checkbox won't move in and out of a group, it should be safe.
    let groupState = $NwfxE$useContext($49d22fbaf60d1fdd$export$baf37c4be89255b8);
    let { inputProps: inputProps  } = groupState ? $NwfxE$useCheckboxGroupItem({
        ...props,
        // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
        // it's passed explicitly here to avoid typescript error (requires strictNullChecks disabled).
        value: props.value,
        // Only pass isRequired and validationState to react-aria if they came from
        // the props for this individual checkbox, and not from the group via context.
        isRequired: originalProps.isRequired,
        validationState: originalProps.validationState
    }, groupState, inputRef) : $NwfxE$useCheckbox(props, $NwfxE$useToggleState(props), inputRef);
    let markIcon = isIndeterminate ? /*#__PURE__*/ $NwfxE$react.createElement($NwfxE$spectrumiconsuiDashSmall, {
        UNSAFE_className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($4999d0361b226bbf$exports)), 'spectrum-Checkbox-partialCheckmark')
    }) : /*#__PURE__*/ $NwfxE$react.createElement($NwfxE$spectrumiconsuiCheckmarkSmall, {
        UNSAFE_className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($4999d0361b226bbf$exports)), 'spectrum-Checkbox-checkmark')
    });
    if (groupState) {
        for (let key of [
            'isSelected',
            'defaultSelected',
            'isEmphasized'
        ])if (originalProps[key] != null) console.warn(`${key} is unsupported on individual <Checkbox> elements within a <CheckboxGroup>. Please apply these props to the group instead.`);
        if (props.value == null) console.warn('A <Checkbox> element within a <CheckboxGroup> requires a `value` property.');
    }
    return(/*#__PURE__*/ $NwfxE$react.createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($4999d0361b226bbf$exports)), 'spectrum-Checkbox', {
            'is-checked': inputProps.checked,
            'is-indeterminate': isIndeterminate,
            'spectrum-Checkbox--quiet': !isEmphasized,
            'is-invalid': validationState === 'invalid',
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ $NwfxE$react.createElement($NwfxE$FocusRing, {
        focusRingClass: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($4999d0361b226bbf$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ $NwfxE$react.createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($4999d0361b226bbf$exports)), 'spectrum-Checkbox-input')
    })), /*#__PURE__*/ $NwfxE$react.createElement("span", {
        className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($4999d0361b226bbf$exports)), 'spectrum-Checkbox-box')
    }, markIcon), children && /*#__PURE__*/ $NwfxE$react.createElement("span", {
        className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($4999d0361b226bbf$exports)), 'spectrum-Checkbox-label')
    }, children)));
}
/**
 * Checkboxes allow users to select multiple items from a list of individual items,
 * or to mark one individual item as selected.
 */ let $244b2b2915cffe97$export$48513f6b9f8ce62d = /*#__PURE__*/ $NwfxE$forwardRef($244b2b2915cffe97$var$Checkbox);


var $fa99b72dd470182d$exports = {};

$parcel$export($fa99b72dd470182d$exports, "CheckboxGroup", () => $fa99b72dd470182d$export$4aa08d5625cb8ead);



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





function $fa99b72dd470182d$var$CheckboxGroup(props, ref) {
    props = $NwfxE$useProviderProps(props);
    props = $NwfxE$useFormProps(props);
    let { isEmphasized: isEmphasized , isRequired: isRequired , necessityIndicator: necessityIndicator , label: label , labelPosition: labelPosition = 'top' , labelAlign: labelAlign , children: children , orientation: orientation = 'vertical' , validationState: validationState , ...otherProps } = props;
    let domRef = $NwfxE$useDOMRef(ref);
    let { styleProps: styleProps  } = $NwfxE$useStyleProps(otherProps);
    let state = $NwfxE$useCheckboxGroupState(props);
    let { labelProps: labelProps , groupProps: groupProps  } = $NwfxE$useCheckboxGroup(props, state);
    return(/*#__PURE__*/ $NwfxE$react.createElement("div", {
        ...styleProps,
        ...groupProps,
        className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($c1a9e34d21df42a1$exports)), 'spectrum-FieldGroup', {
            'spectrum-FieldGroup--positionSide': labelPosition === 'side'
        }, // This is so checkbox group works inside a <Form>
        $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-Field'), styleProps.className),
        ref: domRef
    }, label && /*#__PURE__*/ $NwfxE$react.createElement($NwfxE$Label, {
        ...labelProps,
        elementType: "span",
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        isRequired: isRequired,
        necessityIndicator: necessityIndicator,
        includeNecessityIndicatorInAccessibilityName: true
    }, label), /*#__PURE__*/ $NwfxE$react.createElement("div", {
        role: "presentation",
        className: $NwfxE$classNames((/*@__PURE__*/$parcel$interopDefault($c1a9e34d21df42a1$exports)), 'spectrum-FieldGroup-group', {
            'spectrum-FieldGroup-group--horizontal': orientation === 'horizontal'
        })
    }, /*#__PURE__*/ $NwfxE$react.createElement($NwfxE$Provider, {
        isEmphasized: isEmphasized,
        validationState: validationState
    }, /*#__PURE__*/ $NwfxE$react.createElement($49d22fbaf60d1fdd$export$baf37c4be89255b8.Provider, {
        value: state
    }, children)))));
}
/**
 * A CheckboxGroup allows users to select one or more items from a list of choices.
 */ const $fa99b72dd470182d$export$4aa08d5625cb8ead = /*#__PURE__*/ $NwfxE$react.forwardRef($fa99b72dd470182d$var$CheckboxGroup);




export {$244b2b2915cffe97$export$48513f6b9f8ce62d as Checkbox, $fa99b72dd470182d$export$4aa08d5625cb8ead as CheckboxGroup};
//# sourceMappingURL=module.js.map
