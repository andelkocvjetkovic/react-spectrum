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
var $fa15a8e819e3cfb2$exports = {};

$parcel$export($fa15a8e819e3cfb2$exports, "useTree", () => $fa15a8e819e3cfb2$export$fb0040ce9d6e8bd1);
function $fa15a8e819e3cfb2$export$fb0040ce9d6e8bd1() {
    return {
    };
}


$parcel$exportWildcard(module.exports, $fa15a8e819e3cfb2$exports);


//# sourceMappingURL=main.js.map
