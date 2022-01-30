var $1HiDq$reactariautils = require("@react-aria/utils");
var $1HiDq$reactariafocus = require("@react-aria/focus");
var $1HiDq$reactariainteractions = require("@react-aria/interactions");

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
var $e38a0b25de1ba875$exports = {};

$parcel$export($e38a0b25de1ba875$exports, "useToggle", () => $e38a0b25de1ba875$export$cbe85ee05b554577);



function $e38a0b25de1ba875$export$cbe85ee05b554577(props, state, ref) {
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
    let { pressProps: pressProps  } = $1HiDq$reactariainteractions.usePress({
        isDisabled: isDisabled
    });
    let { focusableProps: focusableProps  } = $1HiDq$reactariafocus.useFocusable(props, ref);
    let interactions = $1HiDq$reactariautils.mergeProps(pressProps, focusableProps);
    let domProps = $1HiDq$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    return {
        inputProps: $1HiDq$reactariautils.mergeProps(domProps, {
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


$parcel$exportWildcard(module.exports, $e38a0b25de1ba875$exports);


//# sourceMappingURL=main.js.map
