require("./main.css");
var $jUi7Q$reactspectrumutils = require("@react-spectrum/utils");
var $jUi7Q$reactariautils = require("@react-aria/utils");
var $jUi7Q$reactspectrumlayout = require("@react-spectrum/layout");
var $jUi7Q$react = require("react");

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
var $0861408432a9a5b6$exports = {};

$parcel$export($0861408432a9a5b6$exports, "IllustratedMessage", () => $0861408432a9a5b6$export$406dbc84c317ece0);




var $a12cd2638d4cb85c$exports = {};

$parcel$export($a12cd2638d4cb85c$exports, "spectrum-IllustratedMessage", () => $a12cd2638d4cb85c$export$e22c6753c239ec31, (v) => $a12cd2638d4cb85c$export$e22c6753c239ec31 = v);
$parcel$export($a12cd2638d4cb85c$exports, "spectrum-IllustratedMessage-heading", () => $a12cd2638d4cb85c$export$5df23faa5ed344c4, (v) => $a12cd2638d4cb85c$export$5df23faa5ed344c4 = v);
$parcel$export($a12cd2638d4cb85c$exports, "spectrum-IllustratedMessage-description", () => $a12cd2638d4cb85c$export$cf9d959111789fe7, (v) => $a12cd2638d4cb85c$export$cf9d959111789fe7 = v);
$parcel$export($a12cd2638d4cb85c$exports, "spectrum-IllustratedMessage--cta", () => $a12cd2638d4cb85c$export$29744d89c9a76d50, (v) => $a12cd2638d4cb85c$export$29744d89c9a76d50 = v);
var $a12cd2638d4cb85c$export$e22c6753c239ec31;
var $a12cd2638d4cb85c$export$5df23faa5ed344c4;
var $a12cd2638d4cb85c$export$cf9d959111789fe7;
var $a12cd2638d4cb85c$export$29744d89c9a76d50;
$a12cd2638d4cb85c$export$e22c6753c239ec31 = "_spectrum-IllustratedMessage_02bd98";
$a12cd2638d4cb85c$export$5df23faa5ed344c4 = "_spectrum-IllustratedMessage-heading_02bd98";
$a12cd2638d4cb85c$export$cf9d959111789fe7 = "_spectrum-IllustratedMessage-description_02bd98";
$a12cd2638d4cb85c$export$29744d89c9a76d50 = "_spectrum-IllustratedMessage--cta_02bd98";


function $0861408432a9a5b6$var$IllustratedMessage(props, ref) {
    props = $jUi7Q$reactspectrumutils.useSlotProps(props, 'illustration');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $jUi7Q$reactspectrumutils.useStyleProps(otherProps);
    let headingClassName = $jUi7Q$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($a12cd2638d4cb85c$exports)), 'spectrum-IllustratedMessage-heading');
    let contentClassName = $jUi7Q$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($a12cd2638d4cb85c$exports)), 'spectrum-IllustratedMessage-description');
    let slots = {
        heading: {
            UNSAFE_className: headingClassName
        },
        content: {
            UNSAFE_className: contentClassName
        }
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($jUi7Q$react)).createElement($jUi7Q$reactspectrumlayout.Flex, {
        ...$jUi7Q$reactariautils.filterDOMProps(otherProps),
        UNSAFE_style: styleProps.style,
        isHidden: styleProps.hidden,
        UNSAFE_className: $jUi7Q$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($a12cd2638d4cb85c$exports)), 'spectrum-IllustratedMessage', styleProps.className),
        ref: ref
    }, /*#__PURE__*/ ($parcel$interopDefault($jUi7Q$react)).createElement($jUi7Q$reactspectrumutils.SlotProvider, {
        slots: slots
    }, children)));
}
/**
 * An IllustratedMessage displays an illustration and a message, usually
 * for an empty state or an error page.
 */ let $0861408432a9a5b6$export$406dbc84c317ece0 = /*#__PURE__*/ $jUi7Q$react.forwardRef($0861408432a9a5b6$var$IllustratedMessage);


$parcel$exportWildcard(module.exports, $0861408432a9a5b6$exports);


//# sourceMappingURL=main.js.map
