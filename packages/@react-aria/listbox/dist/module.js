import {filterDOMProps as $2xADA$filterDOMProps, useId as $2xADA$useId, mergeProps as $2xADA$mergeProps, useSlotId as $2xADA$useSlotId, isMac as $2xADA$isMac, isWebKit as $2xADA$isWebKit} from "@react-aria/utils";
import {useFocusWithin as $2xADA$useFocusWithin, useHover as $2xADA$useHover, isFocusVisible as $2xADA$isFocusVisible} from "@react-aria/interactions";
import {useLabel as $2xADA$useLabel} from "@react-aria/label";
import {useSelectableList as $2xADA$useSelectableList, useSelectableItem as $2xADA$useSelectableItem} from "@react-aria/selection";
import {getItemCount as $2xADA$getItemCount} from "@react-stately/collections";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a88263fde148e1a2$exports = {};

$parcel$export($a88263fde148e1a2$exports, "useListBox", () => $a88263fde148e1a2$export$50eacbbf140a3141);

var $d67ea16022cad274$exports = {};

$parcel$export($d67ea16022cad274$exports, "listData", () => $d67ea16022cad274$export$3585ede4d035bf14);
$parcel$export($d67ea16022cad274$exports, "getItemId", () => $d67ea16022cad274$export$9145995848b05025);
const $d67ea16022cad274$export$3585ede4d035bf14 = new WeakMap();
function $d67ea16022cad274$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $d67ea16022cad274$export$9145995848b05025(state, itemKey) {
    let data = $d67ea16022cad274$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${$d67ea16022cad274$var$normalizeKey(itemKey)}`;
}






function $a88263fde148e1a2$export$50eacbbf140a3141(props, state, ref) {
    let domProps = $2xADA$filterDOMProps(props, {
        labelable: true
    });
    let { listProps: listProps  } = $2xADA$useSelectableList({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys
    });
    let { focusWithinProps: focusWithinProps  } = $2xADA$useFocusWithin({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = $2xADA$useId(props.id);
    $d67ea16022cad274$export$3585ede4d035bf14.set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = $2xADA$useLabel({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    return {
        labelProps: labelProps,
        listBoxProps: $2xADA$mergeProps(domProps, focusWithinProps, state.selectionManager.selectionMode === 'multiple' ? {
            'aria-multiselectable': 'true'
        } : {
        }, {
            role: 'listbox',
            ...$2xADA$mergeProps(fieldProps, listProps)
        })
    };
}


var $408857500f80c2ac$exports = {};

$parcel$export($408857500f80c2ac$exports, "useOption", () => $408857500f80c2ac$export$497855f14858aa34);





function $408857500f80c2ac$export$497855f14858aa34(props, state, ref) {
    let { key: key  } = props;
    let data = $d67ea16022cad274$export$3585ede4d035bf14.get(state);
    let isDisabled = props.isDisabled ?? state.disabledKeys.has(key);
    let isSelected = props.isSelected ?? state.selectionManager.isSelected(key);
    let isFocused = state.selectionManager.focusedKey === key;
    let shouldSelectOnPressUp = props.shouldSelectOnPressUp ?? data.shouldSelectOnPressUp;
    let shouldFocusOnHover = props.shouldFocusOnHover ?? data.shouldFocusOnHover;
    let shouldUseVirtualFocus = props.shouldUseVirtualFocus ?? data.shouldUseVirtualFocus;
    let isVirtualized = props.isVirtualized ?? data.isVirtualized;
    let labelId = $2xADA$useSlotId();
    let descriptionId = $2xADA$useSlotId();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!($2xADA$isMac() && $2xADA$isWebKit())) {
        optionProps['aria-label'] = props['aria-label'];
        optionProps['aria-labelledby'] = labelId;
        optionProps['aria-describedby'] = descriptionId;
    }
    if (isVirtualized) {
        optionProps['aria-posinset'] = state.collection.getItem(key).index + 1;
        optionProps['aria-setsize'] = $2xADA$getItemCount(state.collection);
    }
    let { itemProps: itemProps , isPressed: isPressed  } = $2xADA$useSelectableItem({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = $2xADA$useHover({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!$2xADA$isFocusVisible()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        optionProps: {
            ...optionProps,
            ...$2xADA$mergeProps(itemProps, hoverProps),
            id: $d67ea16022cad274$export$9145995848b05025(state, key)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed
    };
}


var $4e02d605eb96f219$exports = {};

$parcel$export($4e02d605eb96f219$exports, "useListBoxSection", () => $4e02d605eb96f219$export$c3f9f39876e4bc7);

function $4e02d605eb96f219$export$c3f9f39876e4bc7(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = $2xADA$useId();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, and only use it
            // as a label for the nested group.
            id: headingId,
            'aria-hidden': true
        } : {
        },
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}





export {$a88263fde148e1a2$export$50eacbbf140a3141 as useListBox, $408857500f80c2ac$export$497855f14858aa34 as useOption, $4e02d605eb96f219$export$c3f9f39876e4bc7 as useListBoxSection, $d67ea16022cad274$export$3585ede4d035bf14 as listData, $d67ea16022cad274$export$9145995848b05025 as getItemId};
//# sourceMappingURL=module.js.map
