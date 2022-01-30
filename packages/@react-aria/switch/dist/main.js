var $2u6Rq$reactariatoggle = require("@react-aria/toggle");

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
var $c6f967e027aaec4c$exports = {};

$parcel$export($c6f967e027aaec4c$exports, "useSwitch", () => $c6f967e027aaec4c$export$d853f7095ae95f88);

function $c6f967e027aaec4c$export$d853f7095ae95f88(props, state, ref) {
    let { inputProps: inputProps  } = $2u6Rq$reactariatoggle.useToggle(props, state, ref);
    let { isSelected: isSelected  } = state;
    return {
        inputProps: {
            ...inputProps,
            role: 'switch',
            checked: isSelected,
            'aria-checked': isSelected
        }
    };
}


$parcel$exportWildcard(module.exports, $c6f967e027aaec4c$exports);


//# sourceMappingURL=main.js.map
