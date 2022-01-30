import "./main.css";
import {useLayoutEffect as $eZWUb$useLayoutEffect, chain as $eZWUb$chain, mergeProps as $eZWUb$mergeProps} from "@react-aria/utils";
import $eZWUb$react, {useRef as $eZWUb$useRef, useCallback as $eZWUb$useCallback, useImperativeHandle as $eZWUb$useImperativeHandle, cloneElement as $eZWUb$cloneElement, forwardRef as $eZWUb$forwardRef} from "react";
import {useControlledState as $eZWUb$useControlledState} from "@react-stately/utils";
import {useProviderProps as $eZWUb$useProviderProps} from "@react-spectrum/provider";
import {useTextField as $eZWUb$useTextField} from "@react-aria/textfield";
import $eZWUb$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $eZWUb$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {createFocusableRef as $eZWUb$createFocusableRef, classNames as $eZWUb$classNames} from "@react-spectrum/utils";
import {Field as $eZWUb$Field} from "@react-spectrum/label";
import {FocusRing as $eZWUb$FocusRing} from "@react-aria/focus";
import {useHover as $eZWUb$useHover} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $59d7665c9c692d24$exports = {};

$parcel$export($59d7665c9c692d24$exports, "TextArea", () => $59d7665c9c692d24$export$f5c9f3c2c4054eec);


var $cc6260b58298f559$exports = {};

$parcel$export($cc6260b58298f559$exports, "TextFieldBase", () => $cc6260b58298f559$export$d22444a338b6e3c2);







var $e10bd19c72c588e6$exports = {};

$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-input", () => $e10bd19c72c588e6$export$1ac009feb2b0bd0c, (v) => $e10bd19c72c588e6$export$1ac009feb2b0bd0c = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield", () => $e10bd19c72c588e6$export$2c8a10299d8b3418, (v) => $e10bd19c72c588e6$export$2c8a10299d8b3418 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--quiet", () => $e10bd19c72c588e6$export$bffd5e3d61a81737, (v) => $e10bd19c72c588e6$export$bffd5e3d61a81737 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--multiline", () => $e10bd19c72c588e6$export$9699f1c538a448a0, (v) => $e10bd19c72c588e6$export$9699f1c538a448a0 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-placeholder", () => $e10bd19c72c588e6$export$e5b2f5233e4e5194, (v) => $e10bd19c72c588e6$export$e5b2f5233e4e5194 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-hovered", () => $e10bd19c72c588e6$export$b8813cd5d7824ce7, (v) => $e10bd19c72c588e6$export$b8813cd5d7824ce7 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--valid", () => $e10bd19c72c588e6$export$c2abbc3f970170b7, (v) => $e10bd19c72c588e6$export$c2abbc3f970170b7 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--invalid", () => $e10bd19c72c588e6$export$58e50b10d30123df, (v) => $e10bd19c72c588e6$export$58e50b10d30123df = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--loadable", () => $e10bd19c72c588e6$export$14fd30fea6f1348c, (v) => $e10bd19c72c588e6$export$14fd30fea6f1348c = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-validationIcon", () => $e10bd19c72c588e6$export$cf0ead5b44db0da3, (v) => $e10bd19c72c588e6$export$cf0ead5b44db0da3 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-icon", () => $e10bd19c72c588e6$export$222d1ccd1870be1d, (v) => $e10bd19c72c588e6$export$222d1ccd1870be1d = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-inputIcon", () => $e10bd19c72c588e6$export$c1cdcaa5fe76a871, (v) => $e10bd19c72c588e6$export$c1cdcaa5fe76a871 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-circleLoader", () => $e10bd19c72c588e6$export$82a249fb4d6127, (v) => $e10bd19c72c588e6$export$82a249fb4d6127 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-focused", () => $e10bd19c72c588e6$export$e7dc768d35940237, (v) => $e10bd19c72c588e6$export$e7dc768d35940237 = v);
$parcel$export($e10bd19c72c588e6$exports, "focus-ring", () => $e10bd19c72c588e6$export$f39a09f249340e2a, (v) => $e10bd19c72c588e6$export$f39a09f249340e2a = v);
$parcel$export($e10bd19c72c588e6$exports, "is-disabled", () => $e10bd19c72c588e6$export$d35bc1e505d1ebbf, (v) => $e10bd19c72c588e6$export$d35bc1e505d1ebbf = v);
var $e10bd19c72c588e6$export$1ac009feb2b0bd0c;
var $e10bd19c72c588e6$export$2c8a10299d8b3418;
var $e10bd19c72c588e6$export$bffd5e3d61a81737;
var $e10bd19c72c588e6$export$9699f1c538a448a0;
var $e10bd19c72c588e6$export$e5b2f5233e4e5194;
var $e10bd19c72c588e6$export$b8813cd5d7824ce7;
var $e10bd19c72c588e6$export$c2abbc3f970170b7;
var $e10bd19c72c588e6$export$58e50b10d30123df;
var $e10bd19c72c588e6$export$14fd30fea6f1348c;
var $e10bd19c72c588e6$export$cf0ead5b44db0da3;
var $e10bd19c72c588e6$export$222d1ccd1870be1d;
var $e10bd19c72c588e6$export$c1cdcaa5fe76a871;
var $e10bd19c72c588e6$export$82a249fb4d6127;
var $e10bd19c72c588e6$export$e7dc768d35940237;
var $e10bd19c72c588e6$export$f39a09f249340e2a;
var $e10bd19c72c588e6$export$d35bc1e505d1ebbf;
$e10bd19c72c588e6$export$1ac009feb2b0bd0c = "_spectrum-Textfield-input_73bc77";
$e10bd19c72c588e6$export$2c8a10299d8b3418 = "_spectrum-Textfield_73bc77";
$e10bd19c72c588e6$export$bffd5e3d61a81737 = "_spectrum-Textfield--quiet_73bc77";
$e10bd19c72c588e6$export$9699f1c538a448a0 = "_spectrum-Textfield--multiline_73bc77";
$e10bd19c72c588e6$export$e5b2f5233e4e5194 = "_is-placeholder_73bc77";
$e10bd19c72c588e6$export$b8813cd5d7824ce7 = "_is-hovered_73bc77";
$e10bd19c72c588e6$export$c2abbc3f970170b7 = "_spectrum-Textfield--valid_73bc77";
$e10bd19c72c588e6$export$58e50b10d30123df = "_spectrum-Textfield--invalid_73bc77";
$e10bd19c72c588e6$export$14fd30fea6f1348c = "_spectrum-Textfield--loadable_73bc77";
$e10bd19c72c588e6$export$cf0ead5b44db0da3 = "_spectrum-Textfield-validationIcon_73bc77";
$e10bd19c72c588e6$export$222d1ccd1870be1d = "_spectrum-Textfield-icon_73bc77";
$e10bd19c72c588e6$export$c1cdcaa5fe76a871 = "_spectrum-Textfield-inputIcon_73bc77";
$e10bd19c72c588e6$export$82a249fb4d6127 = "_spectrum-Textfield-circleLoader_73bc77";
$e10bd19c72c588e6$export$e7dc768d35940237 = "_is-focused_73bc77";
$e10bd19c72c588e6$export$f39a09f249340e2a = "_focus-ring_73bc77";
$e10bd19c72c588e6$export$d35bc1e505d1ebbf = "_is-disabled_73bc77";



function $cc6260b58298f559$var$TextFieldBase(props, ref) {
    let { label: label , validationState: validationState , icon: icon , isQuiet: isQuiet = false , isDisabled: isDisabled , multiLine: multiLine , autoFocus: autoFocus , inputClassName: inputClassName , wrapperChildren: wrapperChildren , labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps , inputRef: inputRef , isLoading: isLoading , loadingIndicator: loadingIndicator , validationIconClassName: validationIconClassName  } = props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $eZWUb$useHover({
        isDisabled: isDisabled
    });
    let domRef = $eZWUb$useRef(null);
    let defaultInputRef = $eZWUb$useRef(null);
    inputRef = inputRef || defaultInputRef;
    // Expose imperative interface for ref
    $eZWUb$useImperativeHandle(ref, ()=>({
            ...$eZWUb$createFocusableRef(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        })
    );
    let ElementType = multiLine ? 'textarea' : 'input';
    let isInvalid = validationState === 'invalid';
    if (icon) {
        let UNSAFE_className = $eZWUb$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), icon.props && icon.props.UNSAFE_className, 'spectrum-Textfield-icon');
        icon = /*#__PURE__*/ $eZWUb$cloneElement(icon, {
            UNSAFE_className: UNSAFE_className,
            size: 'S'
        });
    }
    let validationIcon = isInvalid ? /*#__PURE__*/ $eZWUb$react.createElement($eZWUb$spectrumiconsuiAlertMedium, null) : /*#__PURE__*/ $eZWUb$react.createElement($eZWUb$spectrumiconsuiCheckmarkMedium, null);
    let validation = /*#__PURE__*/ $eZWUb$cloneElement(validationIcon, {
        UNSAFE_className: $eZWUb$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-validationIcon', validationIconClassName)
    });
    let textField = /*#__PURE__*/ $eZWUb$react.createElement("div", {
        className: $eZWUb$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': isInvalid,
            'spectrum-Textfield--valid': validationState === 'valid',
            'spectrum-Textfield--loadable': loadingIndicator,
            'spectrum-Textfield--quiet': isQuiet,
            'spectrum-Textfield--multiline': multiLine
        })
    }, /*#__PURE__*/ $eZWUb$react.createElement($eZWUb$FocusRing, {
        focusRingClass: $eZWUb$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'focus-ring'),
        isTextInput: true,
        autoFocus: autoFocus
    }, /*#__PURE__*/ $eZWUb$react.createElement(ElementType, {
        ...$eZWUb$mergeProps(inputProps, hoverProps),
        ref: inputRef,
        rows: multiLine ? 1 : undefined,
        className: $eZWUb$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-input', {
            'spectrum-Textfield-inputIcon': icon,
            'is-hovered': isHovered
        }, inputClassName)
    })), icon, validationState && !isLoading ? validation : null, isLoading && loadingIndicator, wrapperChildren);
    if (label) textField = /*#__PURE__*/ $eZWUb$react.cloneElement(textField, $eZWUb$mergeProps(textField.props, {
        className: multiLine ? 'spectrum-Field-field--multiline' : ''
    }));
    return(/*#__PURE__*/ $eZWUb$react.createElement($eZWUb$Field, {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        showErrorIcon: false,
        ref: domRef
    }, textField));
}
const $cc6260b58298f559$export$d22444a338b6e3c2 = /*#__PURE__*/ $eZWUb$forwardRef($cc6260b58298f559$var$TextFieldBase);





function $59d7665c9c692d24$var$TextArea(props, ref) {
    props = $eZWUb$useProviderProps(props);
    let { isDisabled: isDisabled = false , isQuiet: isQuiet = false , isReadOnly: isReadOnly = false , isRequired: isRequired = false , onChange: onChange , ...otherProps } = props;
    // not in stately because this is so we know when to re-measure, which is a spectrum design
    let [inputValue, setInputValue] = $eZWUb$useControlledState(props.value, props.defaultValue, ()=>{
    });
    let inputRef = $eZWUb$useRef();
    let onHeightChange = $eZWUb$useCallback(()=>{
        if (isQuiet) {
            let input = inputRef.current;
            let prevAlignment = input.style.alignSelf;
            input.style.alignSelf = 'start';
            input.style.height = 'auto';
            input.style.height = `${input.scrollHeight}px`;
            input.style.alignSelf = prevAlignment;
        }
    }, [
        isQuiet,
        inputRef
    ]);
    $eZWUb$useLayoutEffect(()=>{
        if (inputRef.current) onHeightChange();
    }, [
        onHeightChange,
        inputValue,
        inputRef
    ]);
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $eZWUb$useTextField({
        ...props,
        onChange: $eZWUb$chain(onChange, setInputValue),
        inputElementType: 'textarea'
    }, inputRef);
    return(/*#__PURE__*/ $eZWUb$react.createElement($cc6260b58298f559$export$d22444a338b6e3c2, {
        ...otherProps,
        ref: ref,
        inputRef: inputRef,
        labelProps: labelProps,
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        multiLine: true,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        isReadOnly: isReadOnly,
        isRequired: isRequired
    }));
}
/**
 * TextAreas are multiline text inputs, useful for cases where users have
 * a sizable amount of text to enter. They allow for all customizations that
 * are available to text fields.
 */ let $59d7665c9c692d24$export$f5c9f3c2c4054eec = /*#__PURE__*/ $eZWUb$react.forwardRef($59d7665c9c692d24$var$TextArea);


var $b3cbe1e578539c2b$exports = {};

$parcel$export($b3cbe1e578539c2b$exports, "TextField", () => $b3cbe1e578539c2b$export$2c73285ae9390cec);




function $b3cbe1e578539c2b$var$TextField(props, ref) {
    props = $eZWUb$useProviderProps(props);
    let inputRef = $eZWUb$useRef();
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $eZWUb$useTextField(props, inputRef);
    return(/*#__PURE__*/ $eZWUb$react.createElement($cc6260b58298f559$export$d22444a338b6e3c2, {
        ...props,
        labelProps: labelProps,
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        ref: ref,
        inputRef: inputRef
    }));
}
/**
 * TextFields are text inputs that allow users to input custom text entries
 * with a keyboard. Various decorations can be displayed around the field to
 * communicate the entry requirements.
 */ const $b3cbe1e578539c2b$export$2c73285ae9390cec = /*#__PURE__*/ $eZWUb$forwardRef($b3cbe1e578539c2b$var$TextField);





export {$59d7665c9c692d24$export$f5c9f3c2c4054eec as TextArea, $b3cbe1e578539c2b$export$2c73285ae9390cec as TextField, $cc6260b58298f559$export$d22444a338b6e3c2 as TextFieldBase};
//# sourceMappingURL=module.js.map
