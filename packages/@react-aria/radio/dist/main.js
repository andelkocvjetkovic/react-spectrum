var $a5Glq$reactariautils = require("@react-aria/utils");
var $a5Glq$reactariafocus = require("@react-aria/focus");
var $a5Glq$reactariainteractions = require("@react-aria/interactions");
var $a5Glq$reactarialabel = require("@react-aria/label");
var $a5Glq$reactariai18n = require("@react-aria/i18n");

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
var $6cb495b796e14b55$exports = {};

$parcel$export($6cb495b796e14b55$exports, "useRadio", () => $6cb495b796e14b55$export$37b0961d2f4751e2);

const $c63a09a1ecd06bde$export$3b7b268d09480394 = new WeakMap();




function $6cb495b796e14b55$export$37b0961d2f4751e2(props, state, ref) {
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
    let { pressProps: pressProps  } = $a5Glq$reactariainteractions.usePress({
        isDisabled: isDisabled
    });
    let { focusableProps: focusableProps  } = $a5Glq$reactariafocus.useFocusable($a5Glq$reactariautils.mergeProps(props, {
        onFocus: ()=>state.setLastFocusedValue(value)
    }), ref);
    let interactions = $a5Glq$reactariautils.mergeProps(pressProps, focusableProps);
    let domProps = $a5Glq$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    let tabIndex = state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;
    if (isDisabled) tabIndex = undefined;
    return {
        inputProps: $a5Glq$reactariautils.mergeProps(domProps, {
            ...interactions,
            type: 'radio',
            name: $c63a09a1ecd06bde$export$3b7b268d09480394.get(state),
            tabIndex: tabIndex,
            disabled: isDisabled,
            checked: checked,
            value: value,
            onChange: onChange
        })
    };
}


var $36c4987525aac910$exports = {};

$parcel$export($36c4987525aac910$exports, "useRadioGroup", () => $36c4987525aac910$export$62b9571f283ff5c2);






function $36c4987525aac910$export$62b9571f283ff5c2(props, state) {
    let { name: name , validationState: validationState , isReadOnly: isReadOnly , isRequired: isRequired , isDisabled: isDisabled , orientation: orientation = 'vertical'  } = props;
    let { direction: direction  } = $a5Glq$reactariai18n.useLocale();
    let { labelProps: labelProps , fieldProps: fieldProps  } = $a5Glq$reactarialabel.useLabel({
        ...props,
        // Radio group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    let domProps = $a5Glq$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    // When the radio group loses focus, reset the focusable radio to null if
    // there is no selection. This allows tabbing into the group from either
    // direction to go to the first or last radio.
    let { focusWithinProps: focusWithinProps  } = $a5Glq$reactariainteractions.useFocusWithin({
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
        let walker = $a5Glq$reactariafocus.getFocusableTreeWalker(e.currentTarget, {
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
    let groupName = $a5Glq$reactariautils.useId(name);
    $c63a09a1ecd06bde$export$3b7b268d09480394.set(state, groupName);
    return {
        radioGroupProps: $a5Glq$reactariautils.mergeProps(domProps, {
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


$parcel$exportWildcard(module.exports, $6cb495b796e14b55$exports);
$parcel$exportWildcard(module.exports, $36c4987525aac910$exports);


//# sourceMappingURL=main.js.map
