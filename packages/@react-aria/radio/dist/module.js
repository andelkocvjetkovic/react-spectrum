import {mergeProps as $797tY$mergeProps, filterDOMProps as $797tY$filterDOMProps, useId as $797tY$useId} from "@react-aria/utils";
import {useFocusable as $797tY$useFocusable, getFocusableTreeWalker as $797tY$getFocusableTreeWalker} from "@react-aria/focus";
import {usePress as $797tY$usePress, useFocusWithin as $797tY$useFocusWithin} from "@react-aria/interactions";
import {useLabel as $797tY$useLabel} from "@react-aria/label";
import {useLocale as $797tY$useLocale} from "@react-aria/i18n";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $53cf6fe03b728924$exports = {};

$parcel$export($53cf6fe03b728924$exports, "useRadio", () => $53cf6fe03b728924$export$37b0961d2f4751e2);

const $67cf01cdfe87dc32$export$3b7b268d09480394 = new WeakMap();




function $53cf6fe03b728924$export$37b0961d2f4751e2(props, state, ref) {
    let { value: value , children: children , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby  } = props;
    const isDisabled = props.isDisabled || state.isDisabled;
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel) console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    let checked = state.selectedValue === value;
    let onChange = (e)=>{
        e.stopPropagation();
        state.setSelectedValue(value);
    };
    let { pressProps: pressProps  } = $797tY$usePress({
        isDisabled: isDisabled
    });
    let { focusableProps: focusableProps  } = $797tY$useFocusable($797tY$mergeProps(props, {
        onFocus: ()=>state.setLastFocusedValue(value)
    }), ref);
    let interactions = $797tY$mergeProps(pressProps, focusableProps);
    let domProps = $797tY$filterDOMProps(props, {
        labelable: true
    });
    let tabIndex = state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;
    if (isDisabled) tabIndex = undefined;
    return {
        inputProps: $797tY$mergeProps(domProps, {
            ...interactions,
            type: 'radio',
            name: $67cf01cdfe87dc32$export$3b7b268d09480394.get(state),
            tabIndex: tabIndex,
            disabled: isDisabled,
            checked: checked,
            value: value,
            onChange: onChange
        })
    };
}


var $1aba10330b3e8f46$exports = {};

$parcel$export($1aba10330b3e8f46$exports, "useRadioGroup", () => $1aba10330b3e8f46$export$62b9571f283ff5c2);






function $1aba10330b3e8f46$export$62b9571f283ff5c2(props, state) {
    let { name: name , validationState: validationState , isReadOnly: isReadOnly , isRequired: isRequired , isDisabled: isDisabled , orientation: orientation = 'vertical'  } = props;
    let { direction: direction  } = $797tY$useLocale();
    let { labelProps: labelProps , fieldProps: fieldProps  } = $797tY$useLabel({
        ...props,
        // Radio group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    let domProps = $797tY$filterDOMProps(props, {
        labelable: true
    });
    // When the radio group loses focus, reset the focusable radio to null if
    // there is no selection. This allows tabbing into the group from either
    // direction to go to the first or last radio.
    let { focusWithinProps: focusWithinProps  } = $797tY$useFocusWithin({
        onBlurWithin () {
            if (!state.selectedValue) state.setLastFocusedValue(null);
        }
    });
    let onKeyDown = (e)=>{
        let nextDir;
        switch(e.key){
            case 'ArrowRight':
                if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'prev';
                else nextDir = 'next';
                break;
            case 'ArrowLeft':
                if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'next';
                else nextDir = 'prev';
                break;
            case 'ArrowDown':
                nextDir = 'next';
                break;
            case 'ArrowUp':
                nextDir = 'prev';
                break;
            default:
                return;
        }
        e.preventDefault();
        let walker = $797tY$getFocusableTreeWalker(e.currentTarget, {
            from: e.target
        });
        let nextElem;
        if (nextDir === 'next') {
            nextElem = walker.nextNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.firstChild();
            }
        } else {
            nextElem = walker.previousNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.lastChild();
            }
        }
        if (nextElem) {
            // Call focus on nextElem so that keyboard navigation scrolls the radio into view
            nextElem.focus();
            state.setSelectedValue(nextElem.value);
        }
    };
    let groupName = $797tY$useId(name);
    $67cf01cdfe87dc32$export$3b7b268d09480394.set(state, groupName);
    return {
        radioGroupProps: $797tY$mergeProps(domProps, {
            // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
            role: 'radiogroup',
            onKeyDown: onKeyDown,
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            'aria-disabled': isDisabled || undefined,
            'aria-orientation': orientation,
            ...fieldProps,
            ...focusWithinProps
        }),
        labelProps: labelProps
    };
}




export {$53cf6fe03b728924$export$37b0961d2f4751e2 as useRadio, $1aba10330b3e8f46$export$62b9571f283ff5c2 as useRadioGroup};
//# sourceMappingURL=module.js.map
