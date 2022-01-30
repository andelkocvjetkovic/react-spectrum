var $6hBbk$reactstatelyoverlays = require("@react-stately/overlays");
var $6hBbk$react = require("react");

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
var $e0dda98f10bdcda4$exports = {};

$parcel$export($e0dda98f10bdcda4$exports, "useMenuTriggerState", () => $e0dda98f10bdcda4$export$79fefeb1c2091ac3);


function $e0dda98f10bdcda4$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = $6hBbk$reactstatelyoverlays.useOverlayTriggerState(props);
    let [focusStrategy1, setFocusStrategy] = $6hBbk$react.useState(null);
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


$parcel$exportWildcard(module.exports, $e0dda98f10bdcda4$exports);


//# sourceMappingURL=main.js.map
