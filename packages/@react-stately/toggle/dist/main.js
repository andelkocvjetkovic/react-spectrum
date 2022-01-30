var $1Apn0$reactstatelyutils = require("@react-stately/utils");

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
var $e78ebe726193d711$exports = {};

$parcel$export($e78ebe726193d711$exports, "useToggleState", () => $e78ebe726193d711$export$8042c6c013fd5226);

function $e78ebe726193d711$export$8042c6c013fd5226(props = {
}) {
    let { isReadOnly: isReadOnly  } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = $1Apn0$reactstatelyutils.useControlledState(props.isSelected, props.defaultSelected || false, props.onChange);
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    return {
        isSelected: isSelected,
        setSelected: updateSelected,
        toggle: toggleState
    };
}


$parcel$exportWildcard(module.exports, $e78ebe726193d711$exports);


//# sourceMappingURL=main.js.map
