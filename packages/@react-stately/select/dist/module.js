import {useMenuTriggerState as $kgLxR$useMenuTriggerState} from "@react-stately/menu";
import {useSingleSelectListState as $kgLxR$useSingleSelectListState} from "@react-stately/list";
import {useState as $kgLxR$useState} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f6dfa3176cd7092f$exports = {};

$parcel$export($f6dfa3176cd7092f$exports, "useSelectState", () => $f6dfa3176cd7092f$export$5159ec8b34d4ec12);



function $f6dfa3176cd7092f$export$5159ec8b34d4ec12(props) {
    let triggerState = $kgLxR$useMenuTriggerState(props);
    let listState = $kgLxR$useSingleSelectListState({
        ...props,
        onSelectionChange: (key)=>{
            if (props.onSelectionChange != null) props.onSelectionChange(key);
            triggerState.close();
        }
    });
    let [isFocused, setFocused] = $kgLxR$useState(false);
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




export {$f6dfa3176cd7092f$export$5159ec8b34d4ec12 as useSelectState};
//# sourceMappingURL=module.js.map
