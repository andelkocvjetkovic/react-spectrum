var $6dHvr$reactstatelyutils = require("@react-stately/utils");
var $6dHvr$react = require("react");

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
var $619e6348d6a1d044$exports = {};

$parcel$export($619e6348d6a1d044$exports, "useRadioGroupState", () => $619e6348d6a1d044$export$bca9d026f8e704eb);


let $619e6348d6a1d044$var$instance = Math.round(Math.random() * 10000000000);
let $619e6348d6a1d044$var$i = 0;
function $619e6348d6a1d044$export$bca9d026f8e704eb(props) {
    // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
    let name = $6dHvr$react.useMemo(()=>props.name || `radio-group-${$619e6348d6a1d044$var$instance}-${++$619e6348d6a1d044$var$i}`
    , [
        props.name
    ]);
    let [selectedValue, setSelected] = $6dHvr$reactstatelyutils.useControlledState(props.value, props.defaultValue, props.onChange);
    let [lastFocusedValue, setLastFocusedValue] = $6dHvr$react.useState(null);
    let setSelectedValue = (value)=>{
        if (!props.isReadOnly && !props.isDisabled) setSelected(value);
    };
    return {
        name: name,
        selectedValue: selectedValue,
        setSelectedValue: setSelectedValue,
        lastFocusedValue: lastFocusedValue,
        setLastFocusedValue: setLastFocusedValue,
        isDisabled: props.isDisabled || false,
        isReadOnly: props.isReadOnly || false
    };
}


$parcel$exportWildcard(module.exports, $619e6348d6a1d044$exports);


//# sourceMappingURL=main.js.map
