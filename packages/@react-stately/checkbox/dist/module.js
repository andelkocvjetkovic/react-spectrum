import {useControlledState as $53VKu$useControlledState} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $22741eebe88b9d6f$exports = {};

$parcel$export($22741eebe88b9d6f$exports, "useCheckboxGroupState", () => $22741eebe88b9d6f$export$daff6da51032a415);

function $22741eebe88b9d6f$export$daff6da51032a415(props = {
}) {
    let [selectedValues, setValue] = $53VKu$useControlledState(props.value, props.defaultValue || [], props.onChange);
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




export {$22741eebe88b9d6f$export$daff6da51032a415 as useCheckboxGroupState};
//# sourceMappingURL=module.js.map
