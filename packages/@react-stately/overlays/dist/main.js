var $8jI9A$reactstatelyutils = require("@react-stately/utils");

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
var $50d581efb898aa7b$exports = {};

$parcel$export($50d581efb898aa7b$exports, "useOverlayTriggerState", () => $50d581efb898aa7b$export$61c6a8c84e605fb6);

function $50d581efb898aa7b$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = $8jI9A$reactstatelyutils.useControlledState(props.isOpen, props.defaultOpen || false, props.onOpenChange);
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


$parcel$exportWildcard(module.exports, $50d581efb898aa7b$exports);


//# sourceMappingURL=main.js.map
