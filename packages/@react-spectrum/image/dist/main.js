require("./main.css");
var $aJKVb$reactspectrumutils = require("@react-spectrum/utils");
var $aJKVb$reactariautils = require("@react-aria/utils");
var $aJKVb$react = require("react");
var $aJKVb$reactspectrumprovider = require("@react-spectrum/provider");

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
var $d0ae09ebd068020c$exports = {};

$parcel$export($d0ae09ebd068020c$exports, "Image", () => $d0ae09ebd068020c$export$3e431a229df88919);



var $7407744792dcf235$exports = {};

$parcel$export($7407744792dcf235$exports, "spectrum-Image-img", () => $7407744792dcf235$export$3238177972e11200, (v) => $7407744792dcf235$export$3238177972e11200 = v);
var $7407744792dcf235$export$3238177972e11200;
$7407744792dcf235$export$3238177972e11200 = "_spectrum-Image-img_fdc794";



// incomplete component for show right now
function $d0ae09ebd068020c$var$Image(props, ref) {
    /* Slots should be able to pass an alt for default behavior, but in Images, the child may know better. */ let userProvidedAlt = props.alt;
    props = $aJKVb$reactspectrumutils.useSlotProps(props, 'image');
    props = $aJKVb$reactspectrumprovider.useProviderProps(props);
    let { objectFit: objectFit , src: src , alt: alt , ...otherProps } = props;
    let { styleProps: styleProps  } = $aJKVb$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $aJKVb$reactspectrumutils.useDOMRef(ref);
    if (alt == null) console.warn("The `alt` prop was not provided to an image. Add `alt` text for screen readers, or set `alt=\"\"` prop to indicate that the image is decorative or redundant with displayed text and should not be announced by screen readers.");
    return(/*#__PURE__*/ ($parcel$interopDefault($aJKVb$react)).createElement("div", {
        ...$aJKVb$reactariautils.filterDOMProps(props),
        ...styleProps,
        className: $aJKVb$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($7407744792dcf235$exports)), styleProps.className),
        style: {
            ...styleProps.style,
            overflow: 'hidden'
        },
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($aJKVb$react)).createElement("img", {
        src: src,
        alt: userProvidedAlt || alt,
        style: {
            objectFit: objectFit
        },
        className: $aJKVb$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($7407744792dcf235$exports)), 'spectrum-Image-img')
    })));
}
/**
 * Image is used to insert and display an image within a component.
 */ const $d0ae09ebd068020c$export$3e431a229df88919 = /*#__PURE__*/ ($parcel$interopDefault($aJKVb$react)).forwardRef($d0ae09ebd068020c$var$Image);


$parcel$exportWildcard(module.exports, $d0ae09ebd068020c$exports);


//# sourceMappingURL=main.js.map
