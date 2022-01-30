require("./main.css");
var $k5Szl$reactspectrumutils = require("@react-spectrum/utils");
var $k5Szl$reactariautils = require("@react-aria/utils");
var $k5Szl$react = require("react");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c24b4f18684a4e34$exports = {};

$parcel$export($c24b4f18684a4e34$exports, "Well", () => $c24b4f18684a4e34$export$d89c679ee2f73242);



var $dab1def5417a5d00$exports = {};

$parcel$export($dab1def5417a5d00$exports, "spectrum-Well", () => $dab1def5417a5d00$export$98e76d3873e01aa9, (v) => $dab1def5417a5d00$export$98e76d3873e01aa9 = v);
var $dab1def5417a5d00$export$98e76d3873e01aa9;
$dab1def5417a5d00$export$98e76d3873e01aa9 = "_spectrum-Well_d48698";


function $c24b4f18684a4e34$var$Well(props, ref) {
    let { children: children , role: role , ...otherProps } = props;
    let domRef = $k5Szl$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $k5Szl$reactspectrumutils.useStyleProps(otherProps);
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled Well must have a role.');
    return(/*#__PURE__*/ ($parcel$interopDefault($k5Szl$react)).createElement("div", {
        ...$k5Szl$reactariautils.filterDOMProps(otherProps, {
            labelable: !!role
        }),
        ...styleProps,
        role: role,
        ref: domRef,
        className: $k5Szl$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($dab1def5417a5d00$exports)), 'spectrum-Well', styleProps.className)
    }, children));
}
/**
 * A Well is a content container that displays non-editable content separate from other content on the screen.
 * Often this is used to display preformatted text, such as code/markup examples on a documentation page.
 */ const $c24b4f18684a4e34$export$d89c679ee2f73242 = /*#__PURE__*/ $k5Szl$react.forwardRef($c24b4f18684a4e34$var$Well);


$parcel$exportWildcard(module.exports, $c24b4f18684a4e34$exports);


//# sourceMappingURL=main.js.map
