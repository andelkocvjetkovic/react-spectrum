import "./main.css";
import {useStyleProps as $1hmRW$useStyleProps, useDOMRef as $1hmRW$useDOMRef, classNames as $1hmRW$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $1hmRW$filterDOMProps} from "@react-aria/utils";
import {useProviderProps as $1hmRW$useProviderProps, Provider as $1hmRW$Provider} from "@react-spectrum/provider";
import $1hmRW$react, {useContext as $1hmRW$useContext} from "react";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f5eab7886530f808$exports = {};

$parcel$export($f5eab7886530f808$exports, "useFormProps", () => $f5eab7886530f808$export$a6b5be5c6b451665);
$parcel$export($f5eab7886530f808$exports, "Form", () => $f5eab7886530f808$export$a7fed597f4b8afd8);




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


let $f5eab7886530f808$var$FormContext = /*#__PURE__*/ $1hmRW$react.createContext({
});
function $f5eab7886530f808$export$a6b5be5c6b451665(props) {
    let ctx = $1hmRW$useContext($f5eab7886530f808$var$FormContext);
    return {
        ...ctx,
        ...props
    };
}
const $f5eab7886530f808$var$formPropNames = new Set([
    'action',
    'autoComplete',
    'encType',
    'method',
    'target',
    'onSubmit'
]);
function $f5eab7886530f808$var$Form(props, ref) {
    props = $1hmRW$useProviderProps(props);
    let { children: children , labelPosition: labelPosition = 'top' , labelAlign: labelAlign = 'start' , isRequired: isRequired , necessityIndicator: necessityIndicator , isQuiet: isQuiet , isEmphasized: isEmphasized , isDisabled: isDisabled , isReadOnly: isReadOnly , validationState: validationState , ...otherProps } = props;
    let { styleProps: styleProps  } = $1hmRW$useStyleProps(otherProps);
    let domRef = $1hmRW$useDOMRef(ref);
    let ctx = {
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        necessityIndicator: necessityIndicator
    };
    return(/*#__PURE__*/ $1hmRW$react.createElement("form", {
        ...$1hmRW$filterDOMProps(otherProps, {
            labelable: true,
            propNames: $f5eab7886530f808$var$formPropNames
        }),
        ...styleProps,
        noValidate: true,
        ref: domRef,
        className: $1hmRW$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-Form', {
            'spectrum-Form--positionSide': labelPosition === 'side',
            'spectrum-Form--positionTop': labelPosition === 'top'
        }, styleProps.className)
    }, /*#__PURE__*/ $1hmRW$react.createElement($f5eab7886530f808$var$FormContext.Provider, {
        value: ctx
    }, /*#__PURE__*/ $1hmRW$react.createElement($1hmRW$Provider, {
        isQuiet: isQuiet,
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        validationState: validationState
    }, children))));
}
/**
 * Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.
 */ const $f5eab7886530f808$export$a7fed597f4b8afd8 = /*#__PURE__*/ $1hmRW$react.forwardRef($f5eab7886530f808$var$Form);




export {$f5eab7886530f808$export$a6b5be5c6b451665 as useFormProps, $f5eab7886530f808$export$a7fed597f4b8afd8 as Form};
//# sourceMappingURL=module.js.map
