import {useControlledState as $lLmv0$useControlledState} from "@react-stately/utils";
import {useMemo as $lLmv0$useMemo, useState as $lLmv0$useState} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0e9c878350f62393$exports = {};

$parcel$export($0e9c878350f62393$exports, "useRadioGroupState", () => $0e9c878350f62393$export$bca9d026f8e704eb);


let $0e9c878350f62393$var$instance = Math.round(Math.random() * 10000000000);
let $0e9c878350f62393$var$i = 0;
function $0e9c878350f62393$export$bca9d026f8e704eb(props) {
    // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
    let name = $lLmv0$useMemo(()=>props.name || `radio-group-${$0e9c878350f62393$var$instance}-${++$0e9c878350f62393$var$i}`
    , [
        props.name
    ]);
    let [selectedValue, setSelected] = $lLmv0$useControlledState(props.value, props.defaultValue, props.onChange);
    let [lastFocusedValue, setLastFocusedValue] = $lLmv0$useState(null);
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




export {$0e9c878350f62393$export$bca9d026f8e704eb as useRadioGroupState};
//# sourceMappingURL=module.js.map
