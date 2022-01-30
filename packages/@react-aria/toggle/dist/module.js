import {mergeProps as $inR7N$mergeProps, filterDOMProps as $inR7N$filterDOMProps} from "@react-aria/utils";
import {useFocusable as $inR7N$useFocusable} from "@react-aria/focus";
import {usePress as $inR7N$usePress} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5627a9ee1bbd567c$exports = {};

$parcel$export($5627a9ee1bbd567c$exports, "useToggle", () => $5627a9ee1bbd567c$export$cbe85ee05b554577);



function $5627a9ee1bbd567c$export$cbe85ee05b554577(props, state, ref) {
    let { isDisabled: isDisabled = false , isRequired: isRequired , isReadOnly: isReadOnly , value: value , name: name , children: children , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby , validationState: validationState = 'valid'  } = props;
    let onChange = (e)=>{
        // since we spread props on label, onChange will end up there as well as in here.
        // so we have to stop propagation at the lowest level that we care about
        e.stopPropagation();
        state.setSelected(e.target.checked);
    };
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel) console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    // This handles focusing the input on pointer down, which Safari does not do by default.
    let { pressProps: pressProps  } = $inR7N$usePress({
        isDisabled: isDisabled
    });
    let { focusableProps: focusableProps  } = $inR7N$useFocusable(props, ref);
    let interactions = $inR7N$mergeProps(pressProps, focusableProps);
    let domProps = $inR7N$filterDOMProps(props, {
        labelable: true
    });
    return {
        inputProps: $inR7N$mergeProps(domProps, {
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-controls': props['aria-controls'],
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            onChange: onChange,
            disabled: isDisabled,
            value: value,
            name: name,
            type: 'checkbox',
            ...interactions
        })
    };
}




export {$5627a9ee1bbd567c$export$cbe85ee05b554577 as useToggle};
//# sourceMappingURL=module.js.map
