require("./main.css");
var $hY8Cn$spectrumiconsuiCheckmarkSmall = require("@spectrum-icons/ui/CheckmarkSmall");
var $hY8Cn$reactspectrumutils = require("@react-spectrum/utils");
var $hY8Cn$spectrumiconsuiDashSmall = require("@spectrum-icons/ui/DashSmall");
var $hY8Cn$reactariafocus = require("@react-aria/focus");
var $hY8Cn$react = require("react");
var $hY8Cn$reactariacheckbox = require("@react-aria/checkbox");
var $hY8Cn$reactariainteractions = require("@react-aria/interactions");
var $hY8Cn$reactspectrumprovider = require("@react-spectrum/provider");
var $hY8Cn$reactstatelytoggle = require("@react-stately/toggle");
var $hY8Cn$reactspectrumlabel = require("@react-spectrum/label");
var $hY8Cn$reactstatelycheckbox = require("@react-stately/checkbox");
var $hY8Cn$reactspectrumform = require("@react-spectrum/form");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $ea41941a5eeff5c2$exports = {};

$parcel$export($ea41941a5eeff5c2$exports, "Checkbox", () => $ea41941a5eeff5c2$export$48513f6b9f8ce62d);

const $2a4e3883645a1ae7$export$baf37c4be89255b8 = ($parcel$interopDefault($hY8Cn$react)).createContext(null);







var $8ad56f8a1b086228$exports = {};

$parcel$export($8ad56f8a1b086228$exports, "spectrum-Checkbox", () => $8ad56f8a1b086228$export$f8ee3e99d637ccac, (v) => $8ad56f8a1b086228$export$f8ee3e99d637ccac = v);
$parcel$export($8ad56f8a1b086228$exports, "spectrum-Checkbox-input", () => $8ad56f8a1b086228$export$fbf255e91152b086, (v) => $8ad56f8a1b086228$export$fbf255e91152b086 = v);
$parcel$export($8ad56f8a1b086228$exports, "focus-ring", () => $8ad56f8a1b086228$export$f39a09f249340e2a, (v) => $8ad56f8a1b086228$export$f39a09f249340e2a = v);
$parcel$export($8ad56f8a1b086228$exports, "spectrum-Checkbox-box", () => $8ad56f8a1b086228$export$b07bd551df410935, (v) => $8ad56f8a1b086228$export$b07bd551df410935 = v);
$parcel$export($8ad56f8a1b086228$exports, "is-indeterminate", () => $8ad56f8a1b086228$export$682c8615600f6ee, (v) => $8ad56f8a1b086228$export$682c8615600f6ee = v);
$parcel$export($8ad56f8a1b086228$exports, "spectrum-Checkbox-checkmark", () => $8ad56f8a1b086228$export$e152b25f70350d85, (v) => $8ad56f8a1b086228$export$e152b25f70350d85 = v);
$parcel$export($8ad56f8a1b086228$exports, "spectrum-Checkbox-partialCheckmark", () => $8ad56f8a1b086228$export$7f6ea68ad4b1fa69, (v) => $8ad56f8a1b086228$export$7f6ea68ad4b1fa69 = v);
$parcel$export($8ad56f8a1b086228$exports, "is-checked", () => $8ad56f8a1b086228$export$3f46c891456641e7, (v) => $8ad56f8a1b086228$export$3f46c891456641e7 = v);
$parcel$export($8ad56f8a1b086228$exports, "spectrum-Checkbox-label", () => $8ad56f8a1b086228$export$9244b14cfa532d4f, (v) => $8ad56f8a1b086228$export$9244b14cfa532d4f = v);
$parcel$export($8ad56f8a1b086228$exports, "is-hovered", () => $8ad56f8a1b086228$export$b8813cd5d7824ce7, (v) => $8ad56f8a1b086228$export$b8813cd5d7824ce7 = v);
$parcel$export($8ad56f8a1b086228$exports, "spectrum-Checkbox--quiet", () => $8ad56f8a1b086228$export$3a2eb50fe5450439, (v) => $8ad56f8a1b086228$export$3a2eb50fe5450439 = v);
$parcel$export($8ad56f8a1b086228$exports, "is-invalid", () => $8ad56f8a1b086228$export$14a30de2866685fa, (v) => $8ad56f8a1b086228$export$14a30de2866685fa = v);
var $8ad56f8a1b086228$export$f8ee3e99d637ccac;
var $8ad56f8a1b086228$export$fbf255e91152b086;
var $8ad56f8a1b086228$export$f39a09f249340e2a;
var $8ad56f8a1b086228$export$b07bd551df410935;
var $8ad56f8a1b086228$export$682c8615600f6ee;
var $8ad56f8a1b086228$export$e152b25f70350d85;
var $8ad56f8a1b086228$export$7f6ea68ad4b1fa69;
var $8ad56f8a1b086228$export$3f46c891456641e7;
var $8ad56f8a1b086228$export$9244b14cfa532d4f;
var $8ad56f8a1b086228$export$b8813cd5d7824ce7;
var $8ad56f8a1b086228$export$3a2eb50fe5450439;
var $8ad56f8a1b086228$export$14a30de2866685fa;
$8ad56f8a1b086228$export$f8ee3e99d637ccac = "_spectrum-Checkbox_4870fc";
$8ad56f8a1b086228$export$fbf255e91152b086 = "_spectrum-Checkbox-input_4870fc";
$8ad56f8a1b086228$export$f39a09f249340e2a = "_focus-ring_4870fc";
$8ad56f8a1b086228$export$b07bd551df410935 = "_spectrum-Checkbox-box_4870fc";
$8ad56f8a1b086228$export$682c8615600f6ee = "_is-indeterminate_4870fc";
$8ad56f8a1b086228$export$e152b25f70350d85 = "_spectrum-Checkbox-checkmark_4870fc";
$8ad56f8a1b086228$export$7f6ea68ad4b1fa69 = "_spectrum-Checkbox-partialCheckmark_4870fc";
$8ad56f8a1b086228$export$3f46c891456641e7 = "_is-checked_4870fc";
$8ad56f8a1b086228$export$9244b14cfa532d4f = "_spectrum-Checkbox-label_4870fc";
$8ad56f8a1b086228$export$b8813cd5d7824ce7 = "_is-hovered_4870fc";
$8ad56f8a1b086228$export$3a2eb50fe5450439 = "_spectrum-Checkbox--quiet_4870fc";
$8ad56f8a1b086228$export$14a30de2866685fa = "_is-invalid_4870fc";






function $ea41941a5eeff5c2$var$Checkbox(props, ref) {
    let originalProps = props;
    props = $hY8Cn$reactspectrumprovider.useProviderProps(props);
    let { isIndeterminate: isIndeterminate = false , isEmphasized: isEmphasized = false , isDisabled: isDisabled = false , autoFocus: autoFocus , children: children , validationState: validationState , ...otherProps } = props;
    let { styleProps: styleProps  } = $hY8Cn$reactspectrumutils.useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $hY8Cn$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    let inputRef = $hY8Cn$react.useRef(null);
    let domRef = $hY8Cn$reactspectrumutils.useFocusableRef(ref, inputRef);
    // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
    // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
    // but since the checkbox won't move in and out of a group, it should be safe.
    let groupState = $hY8Cn$react.useContext($2a4e3883645a1ae7$export$baf37c4be89255b8);
    let { inputProps: inputProps  } = groupState ? $hY8Cn$reactariacheckbox.useCheckboxGroupItem({
        ...props,
        // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
        // it's passed explicitly here to avoid typescript error (requires strictNullChecks disabled).
        value: props.value,
        // Only pass isRequired and validationState to react-aria if they came from
        // the props for this individual checkbox, and not from the group via context.
        isRequired: originalProps.isRequired,
        validationState: originalProps.validationState
    }, groupState, inputRef) : $hY8Cn$reactariacheckbox.useCheckbox(props, $hY8Cn$reactstatelytoggle.useToggleState(props), inputRef);
    let markIcon = isIndeterminate ? /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement(($parcel$interopDefault($hY8Cn$spectrumiconsuiDashSmall)), {
        UNSAFE_className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($8ad56f8a1b086228$exports)), 'spectrum-Checkbox-partialCheckmark')
    }) : /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement(($parcel$interopDefault($hY8Cn$spectrumiconsuiCheckmarkSmall)), {
        UNSAFE_className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($8ad56f8a1b086228$exports)), 'spectrum-Checkbox-checkmark')
    });
    if (groupState) {
        for (let key of [
            'isSelected',
            'defaultSelected',
            'isEmphasized'
        ])if (originalProps[key] != null) console.warn(`${key} is unsupported on individual <Checkbox> elements within a <CheckboxGroup>. Please apply these props to the group instead.`);
        if (props.value == null) console.warn('A <Checkbox> element within a <CheckboxGroup> requires a `value` property.');
    }
    return(/*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($8ad56f8a1b086228$exports)), 'spectrum-Checkbox', {
            'is-checked': inputProps.checked,
            'is-indeterminate': isIndeterminate,
            'spectrum-Checkbox--quiet': !isEmphasized,
            'is-invalid': validationState === 'invalid',
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement($hY8Cn$reactariafocus.FocusRing, {
        focusRingClass: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($8ad56f8a1b086228$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($8ad56f8a1b086228$exports)), 'spectrum-Checkbox-input')
    })), /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement("span", {
        className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($8ad56f8a1b086228$exports)), 'spectrum-Checkbox-box')
    }, markIcon), children && /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement("span", {
        className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($8ad56f8a1b086228$exports)), 'spectrum-Checkbox-label')
    }, children)));
}
/**
 * Checkboxes allow users to select multiple items from a list of individual items,
 * or to mark one individual item as selected.
 */ let $ea41941a5eeff5c2$export$48513f6b9f8ce62d = /*#__PURE__*/ $hY8Cn$react.forwardRef($ea41941a5eeff5c2$var$Checkbox);


var $f9f89c8b2f40e7de$exports = {};

$parcel$export($f9f89c8b2f40e7de$exports, "CheckboxGroup", () => $f9f89c8b2f40e7de$export$4aa08d5625cb8ead);



var $6cac92f0e3226af5$exports = {};

$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel", () => $6cac92f0e3226af5$export$493d18e796ae054, (v) => $6cac92f0e3226af5$export$493d18e796ae054 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel--positionSide", () => $6cac92f0e3226af5$export$9e6f19dc21f22f2e, (v) => $6cac92f0e3226af5$export$9e6f19dc21f22f2e = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel-requiredIcon", () => $6cac92f0e3226af5$export$7c47642c7d46f3c9, (v) => $6cac92f0e3226af5$export$7c47642c7d46f3c9 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel--alignEnd", () => $6cac92f0e3226af5$export$885efcc08143a987, (v) => $6cac92f0e3226af5$export$885efcc08143a987 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field", () => $6cac92f0e3226af5$export$f6d480ae1e56eba0, (v) => $6cac92f0e3226af5$export$f6d480ae1e56eba0 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field--positionTop", () => $6cac92f0e3226af5$export$a4ea780a9064d7f9, (v) => $6cac92f0e3226af5$export$a4ea780a9064d7f9 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field-field", () => $6cac92f0e3226af5$export$3ab8a3dc7f0563d, (v) => $6cac92f0e3226af5$export$3ab8a3dc7f0563d = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field-field--multiline", () => $6cac92f0e3226af5$export$f58a1e966a92ba5e, (v) => $6cac92f0e3226af5$export$f58a1e966a92ba5e = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field--positionSide", () => $6cac92f0e3226af5$export$2963225c91179589, (v) => $6cac92f0e3226af5$export$2963225c91179589 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field-wrapper", () => $6cac92f0e3226af5$export$127df0b7290eb8ef, (v) => $6cac92f0e3226af5$export$127df0b7290eb8ef = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form", () => $6cac92f0e3226af5$export$94d2bcc94afabd89, (v) => $6cac92f0e3226af5$export$94d2bcc94afabd89 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form--positionSide", () => $6cac92f0e3226af5$export$7f44db659563c8f4, (v) => $6cac92f0e3226af5$export$7f44db659563c8f4 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form--positionTop", () => $6cac92f0e3226af5$export$11b8bc81fe551057, (v) => $6cac92f0e3226af5$export$11b8bc81fe551057 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form-itemLabel", () => $6cac92f0e3226af5$export$51ec27881a1e3928, (v) => $6cac92f0e3226af5$export$51ec27881a1e3928 = v);
$parcel$export($6cac92f0e3226af5$exports, "is-disabled", () => $6cac92f0e3226af5$export$d35bc1e505d1ebbf, (v) => $6cac92f0e3226af5$export$d35bc1e505d1ebbf = v);
var $6cac92f0e3226af5$export$493d18e796ae054;
var $6cac92f0e3226af5$export$9e6f19dc21f22f2e;
var $6cac92f0e3226af5$export$7c47642c7d46f3c9;
var $6cac92f0e3226af5$export$885efcc08143a987;
var $6cac92f0e3226af5$export$f6d480ae1e56eba0;
var $6cac92f0e3226af5$export$a4ea780a9064d7f9;
var $6cac92f0e3226af5$export$3ab8a3dc7f0563d;
var $6cac92f0e3226af5$export$f58a1e966a92ba5e;
var $6cac92f0e3226af5$export$2963225c91179589;
var $6cac92f0e3226af5$export$127df0b7290eb8ef;
var $6cac92f0e3226af5$export$94d2bcc94afabd89;
var $6cac92f0e3226af5$export$7f44db659563c8f4;
var $6cac92f0e3226af5$export$11b8bc81fe551057;
var $6cac92f0e3226af5$export$51ec27881a1e3928;
var $6cac92f0e3226af5$export$d35bc1e505d1ebbf;
$6cac92f0e3226af5$export$493d18e796ae054 = "_spectrum-FieldLabel_d2db1f";
$6cac92f0e3226af5$export$9e6f19dc21f22f2e = "_spectrum-FieldLabel--positionSide_d2db1f";
$6cac92f0e3226af5$export$7c47642c7d46f3c9 = "_spectrum-FieldLabel-requiredIcon_d2db1f";
$6cac92f0e3226af5$export$885efcc08143a987 = "_spectrum-FieldLabel--alignEnd_d2db1f";
$6cac92f0e3226af5$export$f6d480ae1e56eba0 = "_spectrum-Field_d2db1f";
$6cac92f0e3226af5$export$a4ea780a9064d7f9 = "_spectrum-Field--positionTop_d2db1f";
$6cac92f0e3226af5$export$3ab8a3dc7f0563d = "_spectrum-Field-field_d2db1f";
$6cac92f0e3226af5$export$f58a1e966a92ba5e = "_spectrum-Field-field--multiline_d2db1f";
$6cac92f0e3226af5$export$2963225c91179589 = "_spectrum-Field--positionSide_d2db1f";
$6cac92f0e3226af5$export$127df0b7290eb8ef = "_spectrum-Field-wrapper_d2db1f";
$6cac92f0e3226af5$export$94d2bcc94afabd89 = "_spectrum-Form_d2db1f";
$6cac92f0e3226af5$export$7f44db659563c8f4 = "_spectrum-Form--positionSide_d2db1f";
$6cac92f0e3226af5$export$11b8bc81fe551057 = "_spectrum-Form--positionTop_d2db1f";
$6cac92f0e3226af5$export$51ec27881a1e3928 = "_spectrum-Form-itemLabel_d2db1f";
$6cac92f0e3226af5$export$d35bc1e505d1ebbf = "_is-disabled_d2db1f";




var $f1e1efeff74e3c4b$exports = {};

$parcel$export($f1e1efeff74e3c4b$exports, "spectrum-FieldGroup", () => $f1e1efeff74e3c4b$export$75eb16cbfc18279c, (v) => $f1e1efeff74e3c4b$export$75eb16cbfc18279c = v);
$parcel$export($f1e1efeff74e3c4b$exports, "spectrum-FieldGroup--positionSide", () => $f1e1efeff74e3c4b$export$859b606bd9f45f81, (v) => $f1e1efeff74e3c4b$export$859b606bd9f45f81 = v);
$parcel$export($f1e1efeff74e3c4b$exports, "spectrum-FieldGroup-group", () => $f1e1efeff74e3c4b$export$984c7bbbfc7ddffc, (v) => $f1e1efeff74e3c4b$export$984c7bbbfc7ddffc = v);
$parcel$export($f1e1efeff74e3c4b$exports, "spectrum-FieldGroup-group--horizontal", () => $f1e1efeff74e3c4b$export$1ad8646bcba21c0e, (v) => $f1e1efeff74e3c4b$export$1ad8646bcba21c0e = v);
var $f1e1efeff74e3c4b$export$75eb16cbfc18279c;
var $f1e1efeff74e3c4b$export$859b606bd9f45f81;
var $f1e1efeff74e3c4b$export$984c7bbbfc7ddffc;
var $f1e1efeff74e3c4b$export$1ad8646bcba21c0e;
$f1e1efeff74e3c4b$export$75eb16cbfc18279c = "_spectrum-FieldGroup_41d350";
$f1e1efeff74e3c4b$export$859b606bd9f45f81 = "_spectrum-FieldGroup--positionSide_41d350";
$f1e1efeff74e3c4b$export$984c7bbbfc7ddffc = "_spectrum-FieldGroup-group_41d350";
$f1e1efeff74e3c4b$export$1ad8646bcba21c0e = "_spectrum-FieldGroup-group--horizontal_41d350";





function $f9f89c8b2f40e7de$var$CheckboxGroup(props, ref) {
    props = $hY8Cn$reactspectrumprovider.useProviderProps(props);
    props = $hY8Cn$reactspectrumform.useFormProps(props);
    let { isEmphasized: isEmphasized , isRequired: isRequired , necessityIndicator: necessityIndicator , label: label , labelPosition: labelPosition = 'top' , labelAlign: labelAlign , children: children , orientation: orientation = 'vertical' , validationState: validationState , ...otherProps } = props;
    let domRef = $hY8Cn$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $hY8Cn$reactspectrumutils.useStyleProps(otherProps);
    let state = $hY8Cn$reactstatelycheckbox.useCheckboxGroupState(props);
    let { labelProps: labelProps , groupProps: groupProps  } = $hY8Cn$reactariacheckbox.useCheckboxGroup(props, state);
    return(/*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement("div", {
        ...styleProps,
        ...groupProps,
        className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f1e1efeff74e3c4b$exports)), 'spectrum-FieldGroup', {
            'spectrum-FieldGroup--positionSide': labelPosition === 'side'
        }, // This is so checkbox group works inside a <Form>
        $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($6cac92f0e3226af5$exports)), 'spectrum-Field'), styleProps.className),
        ref: domRef
    }, label && /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement($hY8Cn$reactspectrumlabel.Label, {
        ...labelProps,
        elementType: "span",
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        isRequired: isRequired,
        necessityIndicator: necessityIndicator,
        includeNecessityIndicatorInAccessibilityName: true
    }, label), /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement("div", {
        role: "presentation",
        className: $hY8Cn$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f1e1efeff74e3c4b$exports)), 'spectrum-FieldGroup-group', {
            'spectrum-FieldGroup-group--horizontal': orientation === 'horizontal'
        })
    }, /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement($hY8Cn$reactspectrumprovider.Provider, {
        isEmphasized: isEmphasized,
        validationState: validationState
    }, /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).createElement($2a4e3883645a1ae7$export$baf37c4be89255b8.Provider, {
        value: state
    }, children)))));
}
/**
 * A CheckboxGroup allows users to select one or more items from a list of choices.
 */ const $f9f89c8b2f40e7de$export$4aa08d5625cb8ead = /*#__PURE__*/ ($parcel$interopDefault($hY8Cn$react)).forwardRef($f9f89c8b2f40e7de$var$CheckboxGroup);


$parcel$exportWildcard(module.exports, $ea41941a5eeff5c2$exports);
$parcel$exportWildcard(module.exports, $f9f89c8b2f40e7de$exports);


//# sourceMappingURL=main.js.map
