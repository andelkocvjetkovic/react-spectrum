import {useOverlayTriggerState as $jpa6g$useOverlayTriggerState} from "@react-stately/overlays";
import {useState as $jpa6g$useState} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $44e14547c566e800$exports = {};

$parcel$export($44e14547c566e800$exports, "useMenuTriggerState", () => $44e14547c566e800$export$79fefeb1c2091ac3);


function $44e14547c566e800$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = $jpa6g$useOverlayTriggerState(props);
    let [focusStrategy1, setFocusStrategy] = $jpa6g$useState(null);
    return {
        focusStrategy: focusStrategy1,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        }
    };
}




export {$44e14547c566e800$export$79fefeb1c2091ac3 as useMenuTriggerState};
//# sourceMappingURL=module.js.map
