import {mergeProps as $fxpeg$mergeProps} from "@react-aria/utils";
import {useComboBox as $fxpeg$useComboBox} from "@react-aria/combobox";
import {useSearchField as $fxpeg$useSearchField} from "@react-aria/searchfield";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $45eadf3b3ce56934$exports = {};

$parcel$export($45eadf3b3ce56934$exports, "useSearchAutocomplete", () => $45eadf3b3ce56934$export$da7ade746446be1f);



function $45eadf3b3ce56934$export$da7ade746446be1f(props, state) {
    let { popoverRef: popoverRef , inputRef: inputRef , listBoxRef: listBoxRef , keyboardDelegate: keyboardDelegate , onSubmit: onSubmit = ()=>{
    }  } = props;
    let { inputProps: inputProps , clearButtonProps: clearButtonProps  } = $fxpeg$useSearchField({
        ...props,
        value: state.inputValue,
        onChange: state.setInputValue,
        autoComplete: 'off',
        onClear: ()=>state.setInputValue('')
        ,
        onSubmit: (value)=>{
            // Prevent submission from search field if menu item was selected
            if (state.selectionManager.focusedKey === null) onSubmit(value, null);
        }
    }, {
        value: state.inputValue,
        setValue: state.setInputValue
    }, inputRef);
    let { listBoxProps: listBoxProps , labelProps: labelProps , inputProps: comboBoxInputProps  } = $fxpeg$useComboBox({
        ...props,
        keyboardDelegate: keyboardDelegate,
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        onFocus: undefined,
        onBlur: undefined
    }, state);
    return {
        labelProps: labelProps,
        inputProps: $fxpeg$mergeProps(inputProps, comboBoxInputProps),
        listBoxProps: listBoxProps,
        clearButtonProps: clearButtonProps
    };
}




export {$45eadf3b3ce56934$export$da7ade746446be1f as useSearchAutocomplete};
//# sourceMappingURL=module.js.map
