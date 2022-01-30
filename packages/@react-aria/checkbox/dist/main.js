var $2aNmK$react = require("react");
var $2aNmK$reactariatoggle = require("@react-aria/toggle");
var $2aNmK$reactariautils = require("@react-aria/utils");
var $2aNmK$reactarialabel = require("@react-aria/label");
var $2aNmK$reactstatelytoggle = require("@react-stately/toggle");

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
var $45ea48f7d2a02a44$exports = {};

$parcel$export($45ea48f7d2a02a44$exports, "useCheckbox", () => $45ea48f7d2a02a44$export$e375f10ce42261c5);


function $45ea48f7d2a02a44$export$e375f10ce42261c5(props, state, inputRef) {
    let { inputProps: inputProps  } = $2aNmK$reactariatoggle.useToggle(props, state, inputRef);
    let { isSelected: isSelected  } = state;
    let { isIndeterminate: isIndeterminate  } = props;
    $2aNmK$react.useEffect(()=>{
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


var $0dbcbfe5db2c4514$exports = {};

$parcel$export($0dbcbfe5db2c4514$exports, "useCheckboxGroup", () => $0dbcbfe5db2c4514$export$49ff6f28c54f1cbe);
const $7c94c38cde8f75e5$export$31440636951aa68c = new WeakMap();




function $0dbcbfe5db2c4514$export$49ff6f28c54f1cbe(props, state) {
    let { isDisabled: isDisabled , name: name  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = $2aNmK$reactarialabel.useLabel({
        ...props,
        // Checkbox group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    let domProps = $2aNmK$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    // Pass name prop from group to all items by attaching to the state.
    $7c94c38cde8f75e5$export$31440636951aa68c.set(state, name);
    return {
        groupProps: $2aNmK$reactariautils.mergeProps(domProps, {
            role: 'group',
            'aria-disabled': isDisabled || undefined,
            ...fieldProps
        }),
        labelProps: labelProps
    };
}


var $2ac09ec27497f24e$exports = {};

$parcel$export($2ac09ec27497f24e$exports, "useCheckboxGroupItem", () => $2ac09ec27497f24e$export$353b32fc6898d37d);



function $2ac09ec27497f24e$export$353b32fc6898d37d(props, state, inputRef) {
    const toggleState = $2aNmK$reactstatelytoggle.useToggleState({
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isSelected: state.isSelected(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { inputProps: inputProps  } = $45ea48f7d2a02a44$export$e375f10ce42261c5({
        ...props,
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isDisabled: props.isDisabled || state.isDisabled,
        name: props.name || $7c94c38cde8f75e5$export$31440636951aa68c.get(state)
    }, toggleState, inputRef);
    return {
        inputProps: inputProps
    };
}


$parcel$exportWildcard(module.exports, $45ea48f7d2a02a44$exports);
$parcel$exportWildcard(module.exports, $0dbcbfe5db2c4514$exports);
$parcel$exportWildcard(module.exports, $2ac09ec27497f24e$exports);


//# sourceMappingURL=main.js.map
