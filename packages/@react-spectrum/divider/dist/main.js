require("./main.css");
var $1ftV3$reactspectrumutils = require("@react-spectrum/utils");
var $1ftV3$react = require("react");
var $1ftV3$reactariaseparator = require("@react-aria/separator");

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
var $9c26c5a0c5dc2add$exports = {};

$parcel$export($9c26c5a0c5dc2add$exports, "Divider", () => $9c26c5a0c5dc2add$export$2e0a83ec2e27ecbb);


var $7a26b2fccc71a8a8$exports = {};

$parcel$export($7a26b2fccc71a8a8$exports, "spectrum-Rule", () => $7a26b2fccc71a8a8$export$9ebf9cdaed6878bc, (v) => $7a26b2fccc71a8a8$export$9ebf9cdaed6878bc = v);
$parcel$export($7a26b2fccc71a8a8$exports, "spectrum-Rule--large", () => $7a26b2fccc71a8a8$export$243baa0ec4ab58cc, (v) => $7a26b2fccc71a8a8$export$243baa0ec4ab58cc = v);
$parcel$export($7a26b2fccc71a8a8$exports, "spectrum-Rule--medium", () => $7a26b2fccc71a8a8$export$a8d73b58ca350eb9, (v) => $7a26b2fccc71a8a8$export$a8d73b58ca350eb9 = v);
$parcel$export($7a26b2fccc71a8a8$exports, "spectrum-Rule--small", () => $7a26b2fccc71a8a8$export$b4b727880cfe37d, (v) => $7a26b2fccc71a8a8$export$b4b727880cfe37d = v);
$parcel$export($7a26b2fccc71a8a8$exports, "spectrum-Rule--horizontal", () => $7a26b2fccc71a8a8$export$563c1b24466c05b8, (v) => $7a26b2fccc71a8a8$export$563c1b24466c05b8 = v);
$parcel$export($7a26b2fccc71a8a8$exports, "spectrum-Rule--vertical", () => $7a26b2fccc71a8a8$export$76f93463a8fc15a8, (v) => $7a26b2fccc71a8a8$export$76f93463a8fc15a8 = v);
var $7a26b2fccc71a8a8$export$9ebf9cdaed6878bc;
var $7a26b2fccc71a8a8$export$243baa0ec4ab58cc;
var $7a26b2fccc71a8a8$export$a8d73b58ca350eb9;
var $7a26b2fccc71a8a8$export$b4b727880cfe37d;
var $7a26b2fccc71a8a8$export$563c1b24466c05b8;
var $7a26b2fccc71a8a8$export$76f93463a8fc15a8;
$7a26b2fccc71a8a8$export$9ebf9cdaed6878bc = "_spectrum-Rule_612bb8";
$7a26b2fccc71a8a8$export$243baa0ec4ab58cc = "_spectrum-Rule--large_612bb8";
$7a26b2fccc71a8a8$export$a8d73b58ca350eb9 = "_spectrum-Rule--medium_612bb8";
$7a26b2fccc71a8a8$export$b4b727880cfe37d = "_spectrum-Rule--small_612bb8";
$7a26b2fccc71a8a8$export$563c1b24466c05b8 = "_spectrum-Rule--horizontal_612bb8";
$7a26b2fccc71a8a8$export$76f93463a8fc15a8 = "_spectrum-Rule--vertical_612bb8";



let $9c26c5a0c5dc2add$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large'
};
function $9c26c5a0c5dc2add$var$Divider(props, ref) {
    props = $1ftV3$reactspectrumutils.useSlotProps(props, 'divider');
    let { size: size = 'L' , orientation: orientation = 'horizontal' , ...otherProps } = props;
    let domRef = $1ftV3$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $1ftV3$reactspectrumutils.useStyleProps(otherProps);
    let weight = $9c26c5a0c5dc2add$var$sizeMap[size];
    let Element = 'hr';
    if (orientation === 'vertical') Element = 'div';
    let { separatorProps: separatorProps  } = $1ftV3$reactariaseparator.useSeparator({
        ...props,
        elementType: Element
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($1ftV3$react)).createElement(Element, {
        ...styleProps,
        className: $1ftV3$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($7a26b2fccc71a8a8$exports)), 'spectrum-Rule', `spectrum-Rule--${weight}`, {
            'spectrum-Rule--vertical': orientation === 'vertical',
            'spectrum-Rule--horizontal': orientation === 'horizontal'
        }, styleProps.className),
        // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
        ref: domRef,
        ...separatorProps
    }));
}
/**
 * Dividers bring clarity to a layout by grouping and dividing content in close proximity.
 * They can also be used to establish rhythm and hierarchy.
 */ let $9c26c5a0c5dc2add$export$2e0a83ec2e27ecbb = /*#__PURE__*/ ($parcel$interopDefault($1ftV3$react)).forwardRef($9c26c5a0c5dc2add$var$Divider);


$parcel$exportWildcard(module.exports, $9c26c5a0c5dc2add$exports);


//# sourceMappingURL=main.js.map
