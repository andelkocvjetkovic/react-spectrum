var $cz8cs$reactariautils = require("@react-aria/utils");

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
var $5dbf30df9359a968$exports = {};

$parcel$export($5dbf30df9359a968$exports, "useSeparator", () => $5dbf30df9359a968$export$52210f68a14655d0);

function $5dbf30df9359a968$export$52210f68a14655d0(props) {
    let domProps = $cz8cs$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    let ariaOrientation;
    // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
    // if it's vertical, we need to specify it
    if (props.orientation === 'vertical') ariaOrientation = 'vertical';
    // hr elements implicitly have role = separator and a horizontal orientation
    if (props.elementType !== 'hr') return {
        separatorProps: {
            ...domProps,
            role: 'separator',
            'aria-orientation': ariaOrientation
        }
    };
    return {
        separatorProps: domProps
    };
}


$parcel$exportWildcard(module.exports, $5dbf30df9359a968$exports);


//# sourceMappingURL=main.js.map
