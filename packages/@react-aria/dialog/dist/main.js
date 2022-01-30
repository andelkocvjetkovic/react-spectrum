var $h8q3G$reactariautils = require("@react-aria/utils");
var $h8q3G$reactariafocus = require("@react-aria/focus");
var $h8q3G$react = require("react");

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
var $2adc7d8d362768b6$exports = {};

$parcel$export($2adc7d8d362768b6$exports, "useDialog", () => $2adc7d8d362768b6$export$d55e7ee900f34e93);



function $2adc7d8d362768b6$export$d55e7ee900f34e93(props, ref) {
    let { role: role = 'dialog'  } = props;
    let titleId = $h8q3G$reactariautils.useSlotId();
    titleId = props['aria-label'] ? undefined : titleId;
    // Focus the dialog itself on mount, unless a child element is already focused.
    $h8q3G$react.useEffect(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            $h8q3G$reactariafocus.focusSafely(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    ref.current.blur();
                    $h8q3G$reactariafocus.focusSafely(ref.current);
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
            ...$h8q3G$reactariautils.filterDOMProps(props, {
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


$parcel$exportWildcard(module.exports, $2adc7d8d362768b6$exports);


//# sourceMappingURL=main.js.map
