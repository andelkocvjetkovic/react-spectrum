require("./main.css");
var $gypnJ$reactspectrumutils = require("@react-spectrum/utils");
var $gypnJ$reactariautils = require("@react-aria/utils");
var $gypnJ$react = require("react");
var $gypnJ$reactspectrumprovider = require("@react-spectrum/provider");

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
var $b33d4a32c02fc586$exports = {};

$parcel$export($b33d4a32c02fc586$exports, "Avatar", () => $b33d4a32c02fc586$export$e2255cf6045e8d47);



var $2532d2ce73522990$exports = {};

$parcel$export($2532d2ce73522990$exports, "spectrum-Avatar", () => $2532d2ce73522990$export$2e049b8d031600fb, (v) => $2532d2ce73522990$export$2e049b8d031600fb = v);
$parcel$export($2532d2ce73522990$exports, "is-disabled", () => $2532d2ce73522990$export$d35bc1e505d1ebbf, (v) => $2532d2ce73522990$export$d35bc1e505d1ebbf = v);
var $2532d2ce73522990$export$2e049b8d031600fb;
var $2532d2ce73522990$export$d35bc1e505d1ebbf;
$2532d2ce73522990$export$2e049b8d031600fb = "_spectrum-Avatar_2ebb13";
$2532d2ce73522990$export$d35bc1e505d1ebbf = "_is-disabled_2ebb13";



const $b33d4a32c02fc586$var$DEFAULT_SIZE = 'avatar-size-100';
const $b33d4a32c02fc586$var$SIZE_RE = /^size-\d+/;
function $b33d4a32c02fc586$var$Avatar(props, ref) {
    props = $gypnJ$reactspectrumutils.useSlotProps(props, 'avatar');
    const { alt: alt = '' , isDisabled: isDisabled , size: size , src: src , ...otherProps } = $gypnJ$reactspectrumprovider.useProviderProps(props);
    const { styleProps: styleProps  } = $gypnJ$reactspectrumutils.useStyleProps(otherProps);
    const domRef = $gypnJ$reactspectrumutils.useDOMRef(ref);
    const domProps = $gypnJ$reactariautils.filterDOMProps(otherProps);
    // Casting `size` as `any` since `isNaN` expects a `number`, but we want it
    // to handle `string` numbers; e.g. '300' as opposed to 300
    const sizeValue = typeof size !== 'number' && ($b33d4a32c02fc586$var$SIZE_RE.test(size) || !isNaN(size)) ? $gypnJ$reactspectrumutils.dimensionValue($b33d4a32c02fc586$var$DEFAULT_SIZE) // override disallowed size values
     : $gypnJ$reactspectrumutils.dimensionValue(size || $b33d4a32c02fc586$var$DEFAULT_SIZE);
    return(/*#__PURE__*/ ($parcel$interopDefault($gypnJ$react)).createElement("img", {
        ...styleProps,
        ...domProps,
        alt: alt,
        className: $gypnJ$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($2532d2ce73522990$exports)), 'spectrum-Avatar', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef,
        src: src,
        style: {
            ...styleProps.style,
            ...sizeValue && {
                height: sizeValue,
                width: sizeValue
            }
        }
    }));
}
/**
 * An avatar is a thumbnail representation of an entity, such as a user or an organization.
 */ const $b33d4a32c02fc586$export$e2255cf6045e8d47 = /*#__PURE__*/ $gypnJ$react.forwardRef($b33d4a32c02fc586$var$Avatar);


$parcel$exportWildcard(module.exports, $b33d4a32c02fc586$exports);


//# sourceMappingURL=main.js.map
