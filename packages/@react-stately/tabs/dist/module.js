import {useSingleSelectListState as $jJKNB$useSingleSelectListState} from "@react-stately/list";
import {useEffect as $jJKNB$useEffect} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c5c4d106ce39ab7d$exports = {};

$parcel$export($c5c4d106ce39ab7d$exports, "useTabListState", () => $c5c4d106ce39ab7d$export$4ba071daf4e486);


function $c5c4d106ce39ab7d$export$4ba071daf4e486(props) {
    let state = $jJKNB$useSingleSelectListState({
        ...props,
        suppressTextValueWarning: true
    });
    $jJKNB$useEffect(()=>{
        // Ensure a tab is always selected (in case no selected key was specified or if selected item was deleted from collection)
        let selectedKey = state.selectedKey;
        if (state.selectionManager.isEmpty || !state.collection.getItem(selectedKey)) {
            selectedKey = state.collection.getFirstKey();
            state.selectionManager.replaceSelection(selectedKey);
        }
        if (state.selectionManager.focusedKey == null) state.selectionManager.setFocusedKey(selectedKey);
    }, [
        state.selectionManager,
        state.selectedKey,
        state.collection
    ]);
    return state;
}




export {$c5c4d106ce39ab7d$export$4ba071daf4e486 as useTabListState};
//# sourceMappingURL=module.js.map
