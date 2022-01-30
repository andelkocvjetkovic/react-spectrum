import {useEffect as $ew9ZM$useEffect} from "react";
import {useToggle as $ew9ZM$useToggle} from "@react-aria/toggle";
import {filterDOMProps as $ew9ZM$filterDOMProps, mergeProps as $ew9ZM$mergeProps} from "@react-aria/utils";
import {useLabel as $ew9ZM$useLabel} from "@react-aria/label";
import {useToggleState as $ew9ZM$useToggleState} from "@react-stately/toggle";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b43ef52523c593df$exports = {};

$parcel$export($b43ef52523c593df$exports, "useCheckbox", () => $b43ef52523c593df$export$e375f10ce42261c5);


function $b43ef52523c593df$export$e375f10ce42261c5(props, state, inputRef) {
    let { inputProps: inputProps  } = $ew9ZM$useToggle(props, state, inputRef);
    let { isSelected: isSelected  } = state;
    let { isIndeterminate: isIndeterminate  } = props;
    $ew9ZM$useEffect(()=>{
        // indeterminate is a property, but it can only be set via javascript
        // https://css-tricks.com/indeterminate-checkboxes/
        if (inputRef.current) inputRef.current.indeterminate = isIndeterminate;
    });
    return {
        inputProps: {
            ...inputProps,
            checked: isSelected,
            'aria-checked': isIndeterminate ? 'mixed' : isSelected
        }
    };
}


var $31d7fd3a45e5ec5a$exports = {};

$parcel$export($31d7fd3a45e5ec5a$exports, "useCheckboxGroup", () => $31d7fd3a45e5ec5a$export$49ff6f28c54f1cbe);
const $1cb72c6c4a16e3f9$export$31440636951aa68c = new WeakMap();




function $31d7fd3a45e5ec5a$export$49ff6f28c54f1cbe(props, state) {
    let { isDisabled: isDisabled , name: name  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = $ew9ZM$useLabel({
        ...props,
        // Checkbox group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    let domProps = $ew9ZM$filterDOMProps(props, {
        labelable: true
    });
    // Pass name prop from group to all items by attaching to the state.
    $1cb72c6c4a16e3f9$export$31440636951aa68c.set(state, name);
    return {
        groupProps: $ew9ZM$mergeProps(domProps, {
            role: 'group',
            'aria-disabled': isDisabled || undefined,
            ...fieldProps
        }),
        labelProps: labelProps
    };
}


var $b4d28502af047866$exports = {};

$parcel$export($b4d28502af047866$exports, "useCheckboxGroupItem", () => $b4d28502af047866$export$353b32fc6898d37d);



function $b4d28502af047866$export$353b32fc6898d37d(props, state, inputRef) {
    const toggleState = $ew9ZM$useToggleState({
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isSelected: state.isSelected(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { inputProps: inputProps  } = $b43ef52523c593df$export$e375f10ce42261c5({
        ...props,
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isDisabled: props.isDisabled || state.isDisabled,
        name: props.name || $1cb72c6c4a16e3f9$export$31440636951aa68c.get(state)
    }, toggleState, inputRef);
    return {
        inputProps: inputProps
    };
}




export {$b43ef52523c593df$export$e375f10ce42261c5 as useCheckbox, $31d7fd3a45e5ec5a$export$49ff6f28c54f1cbe as useCheckboxGroup, $b4d28502af047866$export$353b32fc6898d37d as useCheckboxGroupItem};
//# sourceMappingURL=module.js.map
