var $8wLA3$reactariautils = require("@react-aria/utils");
var $8wLA3$reactariacombobox = require("@react-aria/combobox");
var $8wLA3$reactariasearchfield = require("@react-aria/searchfield");

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
var $91263c2eaaf8f104$exports = {};

$parcel$export($91263c2eaaf8f104$exports, "useSearchAutocomplete", () => $91263c2eaaf8f104$export$da7ade746446be1f);



function $91263c2eaaf8f104$export$da7ade746446be1f(props, state) {
    let { popoverRef: popoverRef , inputRef: inputRef , listBoxRef: listBoxRef , keyboardDelegate: keyboardDelegate , onSubmit: onSubmit = ()=>{
    }  } = props;
    let { inputProps: inputProps , clearButtonProps: clearButtonProps  } = $8wLA3$reactariasearchfield.useSearchField({
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
    let { listBoxProps: listBoxProps , labelProps: labelProps , inputProps: comboBoxInputProps  } = $8wLA3$reactariacombobox.useComboBox({
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
        inputProps: $8wLA3$reactariautils.mergeProps(inputProps, comboBoxInputProps),
        listBoxProps: listBoxProps,
        clearButtonProps: clearButtonProps
    };
}


$parcel$exportWildcard(module.exports, $91263c2eaaf8f104$exports);


//# sourceMappingURL=main.js.map
