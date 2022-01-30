var $1cLlz$reactariaprogress = require("@react-aria/progress");

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
var $7aff1911e1dfb0e9$exports = {};

$parcel$export($7aff1911e1dfb0e9$exports, "useMeter", () => $7aff1911e1dfb0e9$export$e969dbfa146870ff);

function $7aff1911e1dfb0e9$export$e969dbfa146870ff(props) {
    let { progressBarProps: progressBarProps , labelProps: labelProps  } = $1cLlz$reactariaprogress.useProgressBar(props);
    return {
        meterProps: {
            ...progressBarProps,
            // Use the meter role if available, but fall back to progressbar if not
            // Chrome currently falls back from meter automatically, and Firefox
            // does not support meter at all. Safari 13+ seems to support meter properly.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=944542
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1460378
            role: 'meter progressbar'
        },
        labelProps: labelProps
    };
}


$parcel$exportWildcard(module.exports, $7aff1911e1dfb0e9$exports);


//# sourceMappingURL=main.js.map
