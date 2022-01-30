var $clDxQ$reactariautils = require("@react-aria/utils");
var $clDxQ$reactarialabel = require("@react-aria/label");
var $clDxQ$reactariafocus = require("@react-aria/focus");
var $clDxQ$react = require("react");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2e1d65c792c1413b$exports = {};

$parcel$export($2e1d65c792c1413b$exports, "useTextField", () => $2e1d65c792c1413b$export$712718f7aec83d5);



function $2e1d65c792c1413b$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input' , isDisabled: isDisabled = false , isRequired: isRequired = false , isReadOnly: isReadOnly = false , validationState: validationState , type: type = 'text' , onChange: onChange = ()=>{
    }  } = props;
    let { focusableProps: focusableProps  } = $clDxQ$reactariafocus.useFocusable(props, ref);
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $clDxQ$reactarialabel.useField(props);
    let domProps = $clDxQ$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    return {
        labelProps: labelProps,
        inputProps: $clDxQ$reactariautils.mergeProps(domProps, inputElementType === 'input' && inputOnlyProps, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            'aria-required': isRequired || undefined,
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            value: props.value,
            defaultValue: props.value ? undefined : props.defaultValue,
            onChange: (e)=>onChange(e.target.value)
            ,
            autoComplete: props.autoComplete,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


var $12a13988a3d8e728$exports = {};

$parcel$export($12a13988a3d8e728$exports, "useFormattedTextField", () => $12a13988a3d8e728$export$4f384c9210e583c3);



function $12a13988a3d8e728$var$supportsNativeBeforeInputEvent() {
    return typeof window !== 'undefined' && window.InputEvent && // @ts-ignore
    typeof InputEvent.prototype.getTargetRanges === 'function';
}
function $12a13988a3d8e728$export$4f384c9210e583c3(props, state1, inputRef) {
    let stateRef = $clDxQ$react.useRef(state1);
    stateRef.current = state1;
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    $clDxQ$react.useEffect(()=>{
        if (!$12a13988a3d8e728$var$supportsNativeBeforeInputEvent()) return;
        let input = inputRef.current;
        let onBeforeInput = (e)=>{
            let state = stateRef.current;
            // Compute the next value of the input if the event is allowed to proceed.
            // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
            let nextValue;
            switch(e.inputType){
                case 'historyUndo':
                case 'historyRedo':
                    // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                    // because presumably the input would have already been validated previously.
                    return;
                case 'deleteContent':
                case 'deleteByCut':
                case 'deleteByDrag':
                    nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteContentForward':
                    // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                    // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                    // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                    // If we support additional locales in the future, this may need to change.
                    nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteContentBackward':
                    nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteSoftLineBackward':
                case 'deleteHardLineBackward':
                    nextValue = input.value.slice(input.selectionStart);
                    break;
                default:
                    if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                    break;
            }
            // If we did not compute a value, or the new value is invalid, prevent the event
            // so that the browser does not update the input text, move the selection, or add to
            // the undo/redo stack.
            if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
        };
        input.addEventListener('beforeinput', onBeforeInput, false);
        return ()=>{
            input.removeEventListener('beforeinput', onBeforeInput, false);
        };
    }, [
        inputRef,
        stateRef
    ]);
    let onBeforeInput1 = !$12a13988a3d8e728$var$supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
        if (!state1.validate(nextValue)) e.preventDefault();
    } : null;
    let { labelProps: labelProps , inputProps: textFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $2e1d65c792c1413b$export$712718f7aec83d5(props, inputRef);
    let compositionStartState = $clDxQ$react.useRef(null);
    return {
        inputProps: $clDxQ$reactariautils.mergeProps(textFieldProps, {
            onBeforeInput: onBeforeInput1,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = inputRef.current;
                compositionStartState.current = {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            onCompositionEnd () {
                if (!state1.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state1.setInputValue(value);
                }
            }
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


$parcel$exportWildcard(module.exports, $2e1d65c792c1413b$exports);
$parcel$exportWildcard(module.exports, $12a13988a3d8e728$exports);


//# sourceMappingURL=main.js.map
