var $6X91M$reactstatelyutils = require("@react-stately/utils");

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
var $ed6cc164b76540d4$exports = {};

$parcel$export($ed6cc164b76540d4$exports, "useCheckboxGroupState", () => $ed6cc164b76540d4$export$daff6da51032a415);

function $ed6cc164b76540d4$export$daff6da51032a415(props = {
}) {
    let [selectedValues, setValue] = $6X91M$reactstatelyutils.useControlledState(props.value, props.defaultValue || [], props.onChange);
    const state = {
        value: selectedValues,
        setValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            setValue(value);
        },
        isDisabled: props.isDisabled || false,
        isReadOnly: props.isReadOnly || false,
        isSelected (value) {
            return selectedValues.includes(value);
        },
        addValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (!selectedValues.includes(value)) setValue(selectedValues.concat(value));
        },
        removeValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value
            ));
        },
        toggleValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value
            ));
            else setValue(selectedValues.concat(value));
        }
    };
    return state;
}


$parcel$exportWildcard(module.exports, $ed6cc164b76540d4$exports);


//# sourceMappingURL=main.js.map
