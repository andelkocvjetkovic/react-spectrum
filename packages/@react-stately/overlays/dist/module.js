import {useControlledState as $k8h8U$useControlledState} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9b42076a09cd0005$exports = {};

$parcel$export($9b42076a09cd0005$exports, "useOverlayTriggerState", () => $9b42076a09cd0005$export$61c6a8c84e605fb6);

function $9b42076a09cd0005$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = $k8h8U$useControlledState(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    return {
        isOpen: isOpen,
        open () {
            setOpen(true);
        },
        close () {
            setOpen(false);
        },
        toggle () {
            setOpen(!isOpen);
        }
    };
}




export {$9b42076a09cd0005$export$61c6a8c84e605fb6 as useOverlayTriggerState};
//# sourceMappingURL=module.js.map
