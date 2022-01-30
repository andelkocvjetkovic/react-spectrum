import {useSlotId as $7Y0LK$useSlotId, filterDOMProps as $7Y0LK$filterDOMProps} from "@react-aria/utils";
import {focusSafely as $7Y0LK$focusSafely} from "@react-aria/focus";
import {useEffect as $7Y0LK$useEffect} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $e2497ae373a0d77e$exports = {};

$parcel$export($e2497ae373a0d77e$exports, "useDialog", () => $e2497ae373a0d77e$export$d55e7ee900f34e93);



function $e2497ae373a0d77e$export$d55e7ee900f34e93(props, ref) {
    let { role: role = 'dialog'  } = props;
    let titleId = $7Y0LK$useSlotId();
    titleId = props['aria-label'] ? undefined : titleId;
    // Focus the dialog itself on mount, unless a child element is already focused.
    $7Y0LK$useEffect(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            $7Y0LK$focusSafely(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    ref.current.blur();
                    $7Y0LK$focusSafely(ref.current);
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...$7Y0LK$filterDOMProps(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] || titleId
        },
        titleProps: {
            id: titleId
        }
    };
}




export {$e2497ae373a0d77e$export$d55e7ee900f34e93 as useDialog};
//# sourceMappingURL=module.js.map
