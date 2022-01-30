import {useToggle as $e8kF5$useToggle} from "@react-aria/toggle";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fbe7f7f99dbf4554$exports = {};

$parcel$export($fbe7f7f99dbf4554$exports, "useSwitch", () => $fbe7f7f99dbf4554$export$d853f7095ae95f88);

function $fbe7f7f99dbf4554$export$d853f7095ae95f88(props, state, ref) {
    let { inputProps: inputProps  } = $e8kF5$useToggle(props, state, ref);
    let { isSelected: isSelected  } = state;
    return {
        inputProps: {
            ...inputProps,
            role: 'switch',
            checked: isSelected,
            'aria-checked': isSelected
        }
    };
}




export {$fbe7f7f99dbf4554$export$d853f7095ae95f88 as useSwitch};
//# sourceMappingURL=module.js.map
