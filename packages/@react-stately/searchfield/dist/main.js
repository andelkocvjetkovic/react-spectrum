var $l9A2x$reactstatelyutils = require("@react-stately/utils");

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
var $58bd9dede3a90a75$exports = {};

$parcel$export($58bd9dede3a90a75$exports, "useSearchFieldState", () => $58bd9dede3a90a75$export$3f8be18b0f41eaf2);

function $58bd9dede3a90a75$export$3f8be18b0f41eaf2(props) {
    let [value, setValue] = $l9A2x$reactstatelyutils.useControlledState($58bd9dede3a90a75$var$toString(props.value), $58bd9dede3a90a75$var$toString(props.defaultValue) || '', props.onChange);
    return {
        value: value,
        setValue: setValue
    };
}
function $58bd9dede3a90a75$var$toString(val) {
    if (val == null) return;
    return val.toString();
}


$parcel$exportWildcard(module.exports, $58bd9dede3a90a75$exports);


//# sourceMappingURL=main.js.map
