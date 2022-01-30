import {useControlledState as $1TkUk$useControlledState} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9e25f3a27544e6e8$exports = {};

$parcel$export($9e25f3a27544e6e8$exports, "useToggleState", () => $9e25f3a27544e6e8$export$8042c6c013fd5226);

function $9e25f3a27544e6e8$export$8042c6c013fd5226(props = {
}) {
    let { isReadOnly: isReadOnly  } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = $1TkUk$useControlledState(props.isSelected, props.defaultSelected || false, props.onChange);
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




export {$9e25f3a27544e6e8$export$8042c6c013fd5226 as useToggleState};
//# sourceMappingURL=module.js.map
