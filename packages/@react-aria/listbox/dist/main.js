var $3qqc2$reactariautils = require("@react-aria/utils");
var $3qqc2$reactariainteractions = require("@react-aria/interactions");
var $3qqc2$reactarialabel = require("@react-aria/label");
var $3qqc2$reactariaselection = require("@react-aria/selection");
var $3qqc2$reactstatelycollections = require("@react-stately/collections");

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
var $53a4d916549839c6$exports = {};

$parcel$export($53a4d916549839c6$exports, "useListBox", () => $53a4d916549839c6$export$50eacbbf140a3141);

var $37e9f5eb92c9cd49$exports = {};

$parcel$export($37e9f5eb92c9cd49$exports, "listData", () => $37e9f5eb92c9cd49$export$3585ede4d035bf14);
$parcel$export($37e9f5eb92c9cd49$exports, "getItemId", () => $37e9f5eb92c9cd49$export$9145995848b05025);
const $37e9f5eb92c9cd49$export$3585ede4d035bf14 = new WeakMap();
function $37e9f5eb92c9cd49$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $37e9f5eb92c9cd49$export$9145995848b05025(state, itemKey) {
    let data = $37e9f5eb92c9cd49$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${$37e9f5eb92c9cd49$var$normalizeKey(itemKey)}`;
}






function $53a4d916549839c6$export$50eacbbf140a3141(props, state, ref) {
    let domProps = $3qqc2$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    let { listProps: listProps  } = $3qqc2$reactariaselection.useSelectableList({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys
    });
    let { focusWithinProps: focusWithinProps  } = $3qqc2$reactariainteractions.useFocusWithin({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = $3qqc2$reactariautils.useId(props.id);
    $37e9f5eb92c9cd49$export$3585ede4d035bf14.set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = $3qqc2$reactarialabel.useLabel({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    return {
        labelProps: labelProps,
        listBoxProps: $3qqc2$reactariautils.mergeProps(domProps, focusWithinProps, state.selectionManager.selectionMode === 'multiple' ? {
            'aria-multiselectable': 'true'
        } : {
        }, {
            role: 'listbox',
            ...$3qqc2$reactariautils.mergeProps(fieldProps, listProps)
        })
    };
}


var $eb4e3b1392b9d051$exports = {};

$parcel$export($eb4e3b1392b9d051$exports, "useOption", () => $eb4e3b1392b9d051$export$497855f14858aa34);





function $eb4e3b1392b9d051$export$497855f14858aa34(props, state, ref) {
    let { key: key  } = props;
    let data = $37e9f5eb92c9cd49$export$3585ede4d035bf14.get(state);
    let isDisabled = props.isDisabled ?? state.disabledKeys.has(key);
    let isSelected = props.isSelected ?? state.selectionManager.isSelected(key);
    let isFocused = state.selectionManager.focusedKey === key;
    let shouldSelectOnPressUp = props.shouldSelectOnPressUp ?? data.shouldSelectOnPressUp;
    let shouldFocusOnHover = props.shouldFocusOnHover ?? data.shouldFocusOnHover;
    let shouldUseVirtualFocus = props.shouldUseVirtualFocus ?? data.shouldUseVirtualFocus;
    let isVirtualized = props.isVirtualized ?? data.isVirtualized;
    let labelId = $3qqc2$reactariautils.useSlotId();
    let descriptionId = $3qqc2$reactariautils.useSlotId();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!($3qqc2$reactariautils.isMac() && $3qqc2$reactariautils.isWebKit())) {
        optionProps['aria-label'] = props['aria-label'];
        optionProps['aria-labelledby'] = labelId;
        optionProps['aria-describedby'] = descriptionId;
    }
    if (isVirtualized) {
        optionProps['aria-posinset'] = state.collection.getItem(key).index + 1;
        optionProps['aria-setsize'] = $3qqc2$reactstatelycollections.getItemCount(state.collection);
    }
    let { itemProps: itemProps , isPressed: isPressed  } = $3qqc2$reactariaselection.useSelectableItem({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = $3qqc2$reactariainteractions.useHover({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!$3qqc2$reactariainteractions.isFocusVisible()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        optionProps: {
            ...optionProps,
            ...$3qqc2$reactariautils.mergeProps(itemProps, hoverProps),
            id: $37e9f5eb92c9cd49$export$9145995848b05025(state, key)
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


var $7f215c4024f2e672$exports = {};

$parcel$export($7f215c4024f2e672$exports, "useListBoxSection", () => $7f215c4024f2e672$export$c3f9f39876e4bc7);

function $7f215c4024f2e672$export$c3f9f39876e4bc7(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = $3qqc2$reactariautils.useId();
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



$parcel$exportWildcard(module.exports, $53a4d916549839c6$exports);
$parcel$exportWildcard(module.exports, $eb4e3b1392b9d051$exports);
$parcel$exportWildcard(module.exports, $7f215c4024f2e672$exports);
$parcel$exportWildcard(module.exports, $37e9f5eb92c9cd49$exports);


//# sourceMappingURL=main.js.map
