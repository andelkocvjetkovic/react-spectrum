require("./main.css");
var $kvVDV$reactariautils = require("@react-aria/utils");
var $kvVDV$react = require("react");
var $kvVDV$reactstatelyutils = require("@react-stately/utils");
var $kvVDV$reactspectrumprovider = require("@react-spectrum/provider");
var $kvVDV$reactariatextfield = require("@react-aria/textfield");
var $kvVDV$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $kvVDV$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $kvVDV$reactspectrumutils = require("@react-spectrum/utils");
var $kvVDV$reactspectrumlabel = require("@react-spectrum/label");
var $kvVDV$reactariafocus = require("@react-aria/focus");
var $kvVDV$reactariainteractions = require("@react-aria/interactions");

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
var $759c5bc7299530b1$exports = {};

$parcel$export($759c5bc7299530b1$exports, "TextArea", () => $759c5bc7299530b1$export$f5c9f3c2c4054eec);


var $e0d0279d9d6a9076$exports = {};

$parcel$export($e0d0279d9d6a9076$exports, "TextFieldBase", () => $e0d0279d9d6a9076$export$d22444a338b6e3c2);







var $ada5dd581443c125$exports = {};

$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-input", () => $ada5dd581443c125$export$1ac009feb2b0bd0c, (v) => $ada5dd581443c125$export$1ac009feb2b0bd0c = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield", () => $ada5dd581443c125$export$2c8a10299d8b3418, (v) => $ada5dd581443c125$export$2c8a10299d8b3418 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--quiet", () => $ada5dd581443c125$export$bffd5e3d61a81737, (v) => $ada5dd581443c125$export$bffd5e3d61a81737 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--multiline", () => $ada5dd581443c125$export$9699f1c538a448a0, (v) => $ada5dd581443c125$export$9699f1c538a448a0 = v);
$parcel$export($ada5dd581443c125$exports, "is-placeholder", () => $ada5dd581443c125$export$e5b2f5233e4e5194, (v) => $ada5dd581443c125$export$e5b2f5233e4e5194 = v);
$parcel$export($ada5dd581443c125$exports, "is-hovered", () => $ada5dd581443c125$export$b8813cd5d7824ce7, (v) => $ada5dd581443c125$export$b8813cd5d7824ce7 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--valid", () => $ada5dd581443c125$export$c2abbc3f970170b7, (v) => $ada5dd581443c125$export$c2abbc3f970170b7 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--invalid", () => $ada5dd581443c125$export$58e50b10d30123df, (v) => $ada5dd581443c125$export$58e50b10d30123df = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--loadable", () => $ada5dd581443c125$export$14fd30fea6f1348c, (v) => $ada5dd581443c125$export$14fd30fea6f1348c = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-validationIcon", () => $ada5dd581443c125$export$cf0ead5b44db0da3, (v) => $ada5dd581443c125$export$cf0ead5b44db0da3 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-icon", () => $ada5dd581443c125$export$222d1ccd1870be1d, (v) => $ada5dd581443c125$export$222d1ccd1870be1d = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-inputIcon", () => $ada5dd581443c125$export$c1cdcaa5fe76a871, (v) => $ada5dd581443c125$export$c1cdcaa5fe76a871 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-circleLoader", () => $ada5dd581443c125$export$82a249fb4d6127, (v) => $ada5dd581443c125$export$82a249fb4d6127 = v);
$parcel$export($ada5dd581443c125$exports, "is-focused", () => $ada5dd581443c125$export$e7dc768d35940237, (v) => $ada5dd581443c125$export$e7dc768d35940237 = v);
$parcel$export($ada5dd581443c125$exports, "focus-ring", () => $ada5dd581443c125$export$f39a09f249340e2a, (v) => $ada5dd581443c125$export$f39a09f249340e2a = v);
$parcel$export($ada5dd581443c125$exports, "is-disabled", () => $ada5dd581443c125$export$d35bc1e505d1ebbf, (v) => $ada5dd581443c125$export$d35bc1e505d1ebbf = v);
var $ada5dd581443c125$export$1ac009feb2b0bd0c;
var $ada5dd581443c125$export$2c8a10299d8b3418;
var $ada5dd581443c125$export$bffd5e3d61a81737;
var $ada5dd581443c125$export$9699f1c538a448a0;
var $ada5dd581443c125$export$e5b2f5233e4e5194;
var $ada5dd581443c125$export$b8813cd5d7824ce7;
var $ada5dd581443c125$export$c2abbc3f970170b7;
var $ada5dd581443c125$export$58e50b10d30123df;
var $ada5dd581443c125$export$14fd30fea6f1348c;
var $ada5dd581443c125$export$cf0ead5b44db0da3;
var $ada5dd581443c125$export$222d1ccd1870be1d;
var $ada5dd581443c125$export$c1cdcaa5fe76a871;
var $ada5dd581443c125$export$82a249fb4d6127;
var $ada5dd581443c125$export$e7dc768d35940237;
var $ada5dd581443c125$export$f39a09f249340e2a;
var $ada5dd581443c125$export$d35bc1e505d1ebbf;
$ada5dd581443c125$export$1ac009feb2b0bd0c = "_spectrum-Textfield-input_73bc77";
$ada5dd581443c125$export$2c8a10299d8b3418 = "_spectrum-Textfield_73bc77";
$ada5dd581443c125$export$bffd5e3d61a81737 = "_spectrum-Textfield--quiet_73bc77";
$ada5dd581443c125$export$9699f1c538a448a0 = "_spectrum-Textfield--multiline_73bc77";
$ada5dd581443c125$export$e5b2f5233e4e5194 = "_is-placeholder_73bc77";
$ada5dd581443c125$export$b8813cd5d7824ce7 = "_is-hovered_73bc77";
$ada5dd581443c125$export$c2abbc3f970170b7 = "_spectrum-Textfield--valid_73bc77";
$ada5dd581443c125$export$58e50b10d30123df = "_spectrum-Textfield--invalid_73bc77";
$ada5dd581443c125$export$14fd30fea6f1348c = "_spectrum-Textfield--loadable_73bc77";
$ada5dd581443c125$export$cf0ead5b44db0da3 = "_spectrum-Textfield-validationIcon_73bc77";
$ada5dd581443c125$export$222d1ccd1870be1d = "_spectrum-Textfield-icon_73bc77";
$ada5dd581443c125$export$c1cdcaa5fe76a871 = "_spectrum-Textfield-inputIcon_73bc77";
$ada5dd581443c125$export$82a249fb4d6127 = "_spectrum-Textfield-circleLoader_73bc77";
$ada5dd581443c125$export$e7dc768d35940237 = "_is-focused_73bc77";
$ada5dd581443c125$export$f39a09f249340e2a = "_focus-ring_73bc77";
$ada5dd581443c125$export$d35bc1e505d1ebbf = "_is-disabled_73bc77";



function $e0d0279d9d6a9076$var$TextFieldBase(props, ref) {
    let { label: label , validationState: validationState , icon: icon , isQuiet: isQuiet = false , isDisabled: isDisabled , multiLine: multiLine , autoFocus: autoFocus , inputClassName: inputClassName , wrapperChildren: wrapperChildren , labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps , inputRef: inputRef , isLoading: isLoading , loadingIndicator: loadingIndicator , validationIconClassName: validationIconClassName  } = props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $kvVDV$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    let domRef = $kvVDV$react.useRef(null);
    let defaultInputRef = $kvVDV$react.useRef(null);
    inputRef = inputRef || defaultInputRef;
    // Expose imperative interface for ref
    $kvVDV$react.useImperativeHandle(ref, ()=>({
            ...$kvVDV$reactspectrumutils.createFocusableRef(domRef, inputRef),
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
        let UNSAFE_className = $kvVDV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), icon.props && icon.props.UNSAFE_className, 'spectrum-Textfield-icon');
        icon = /*#__PURE__*/ $kvVDV$react.cloneElement(icon, {
            UNSAFE_className: UNSAFE_className,
            size: 'S'
        });
    }
    let validationIcon = isInvalid ? /*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement(($parcel$interopDefault($kvVDV$spectrumiconsuiAlertMedium)), null) : /*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement(($parcel$interopDefault($kvVDV$spectrumiconsuiCheckmarkMedium)), null);
    let validation = /*#__PURE__*/ $kvVDV$react.cloneElement(validationIcon, {
        UNSAFE_className: $kvVDV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-validationIcon', validationIconClassName)
    });
    let textField = /*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement("div", {
        className: $kvVDV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': isInvalid,
            'spectrum-Textfield--valid': validationState === 'valid',
            'spectrum-Textfield--loadable': loadingIndicator,
            'spectrum-Textfield--quiet': isQuiet,
            'spectrum-Textfield--multiline': multiLine
        })
    }, /*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement($kvVDV$reactariafocus.FocusRing, {
        focusRingClass: $kvVDV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'focus-ring'),
        isTextInput: true,
        autoFocus: autoFocus
    }, /*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement(ElementType, {
        ...$kvVDV$reactariautils.mergeProps(inputProps, hoverProps),
        ref: inputRef,
        rows: multiLine ? 1 : undefined,
        className: $kvVDV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-input', {
            'spectrum-Textfield-inputIcon': icon,
            'is-hovered': isHovered
        }, inputClassName)
    })), icon, validationState && !isLoading ? validation : null, isLoading && loadingIndicator, wrapperChildren);
    if (label) textField = /*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).cloneElement(textField, $kvVDV$reactariautils.mergeProps(textField.props, {
        className: multiLine ? 'spectrum-Field-field--multiline' : ''
    }));
    return(/*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement($kvVDV$reactspectrumlabel.Field, {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        showErrorIcon: false,
        ref: domRef
    }, textField));
}
const $e0d0279d9d6a9076$export$d22444a338b6e3c2 = /*#__PURE__*/ $kvVDV$react.forwardRef($e0d0279d9d6a9076$var$TextFieldBase);





function $759c5bc7299530b1$var$TextArea(props, ref) {
    props = $kvVDV$reactspectrumprovider.useProviderProps(props);
    let { isDisabled: isDisabled = false , isQuiet: isQuiet = false , isReadOnly: isReadOnly = false , isRequired: isRequired = false , onChange: onChange , ...otherProps } = props;
    // not in stately because this is so we know when to re-measure, which is a spectrum design
    let [inputValue, setInputValue] = $kvVDV$reactstatelyutils.useControlledState(props.value, props.defaultValue, ()=>{
    });
    let inputRef = $kvVDV$react.useRef();
    let onHeightChange = $kvVDV$react.useCallback(()=>{
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
    $kvVDV$reactariautils.useLayoutEffect(()=>{
        if (inputRef.current) onHeightChange();
    }, [
        onHeightChange,
        inputValue,
        inputRef
    ]);
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $kvVDV$reactariatextfield.useTextField({
        ...props,
        onChange: $kvVDV$reactariautils.chain(onChange, setInputValue),
        inputElementType: 'textarea'
    }, inputRef);
    return(/*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement($e0d0279d9d6a9076$export$d22444a338b6e3c2, {
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
 */ let $759c5bc7299530b1$export$f5c9f3c2c4054eec = /*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).forwardRef($759c5bc7299530b1$var$TextArea);


var $b31de7ed4031d8b2$exports = {};

$parcel$export($b31de7ed4031d8b2$exports, "TextField", () => $b31de7ed4031d8b2$export$2c73285ae9390cec);




function $b31de7ed4031d8b2$var$TextField(props, ref) {
    props = $kvVDV$reactspectrumprovider.useProviderProps(props);
    let inputRef = $kvVDV$react.useRef();
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $kvVDV$reactariatextfield.useTextField(props, inputRef);
    return(/*#__PURE__*/ ($parcel$interopDefault($kvVDV$react)).createElement($e0d0279d9d6a9076$export$d22444a338b6e3c2, {
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
 */ const $b31de7ed4031d8b2$export$2c73285ae9390cec = /*#__PURE__*/ $kvVDV$react.forwardRef($b31de7ed4031d8b2$var$TextField);



$parcel$exportWildcard(module.exports, $759c5bc7299530b1$exports);
$parcel$exportWildcard(module.exports, $b31de7ed4031d8b2$exports);
$parcel$exportWildcard(module.exports, $e0d0279d9d6a9076$exports);


//# sourceMappingURL=main.js.map
