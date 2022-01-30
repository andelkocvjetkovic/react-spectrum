var $cuI0r$reactstatelymenu = require("@react-stately/menu");
var $cuI0r$reactstatelylist = require("@react-stately/list");
var $cuI0r$react = require("react");

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
var $5edd7f4f09927f06$exports = {};

$parcel$export($5edd7f4f09927f06$exports, "useSelectState", () => $5edd7f4f09927f06$export$5159ec8b34d4ec12);



function $5edd7f4f09927f06$export$5159ec8b34d4ec12(props) {
    let triggerState = $cuI0r$reactstatelymenu.useMenuTriggerState(props);
    let listState = $cuI0r$reactstatelylist.useSingleSelectListState({
        ...props,
        onSelectionChange: (key)=>{
            if (props.onSelectionChange != null) props.onSelectionChange(key);
            triggerState.close();
        }
    });
    let [isFocused, setFocused] = $cuI0r$react.useState(false);
    return {
        ...listState,
        ...triggerState,
        open () {
            // Don't open if the collection is empty.
            if (listState.collection.size !== 0) triggerState.open();
        },
        toggle (focusStrategy) {
            if (listState.collection.size !== 0) triggerState.toggle(focusStrategy);
        },
        isFocused: isFocused,
        setFocused: setFocused
    };
}


$parcel$exportWildcard(module.exports, $5edd7f4f09927f06$exports);


//# sourceMappingURL=main.js.map
