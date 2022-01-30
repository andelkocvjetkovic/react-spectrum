var $aQzlj$reactspectrumutils = require("@react-spectrum/utils");
var $aQzlj$reactariautils = require("@react-aria/utils");
var $aQzlj$react = require("react");

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
var $d0784682a178e0db$exports = {};

$parcel$export($d0784682a178e0db$exports, "View", () => $d0784682a178e0db$export$27a5bd065ad55220);



function $d0784682a178e0db$var$View(props, ref) {
    props = $aQzlj$reactspectrumutils.useSlotProps(props);
    let { elementType: ElementType = 'div' , children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $aQzlj$reactspectrumutils.useStyleProps(props, $aQzlj$reactspectrumutils.viewStyleProps);
    let domRef = $aQzlj$reactspectrumutils.useDOMRef(ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement(ElementType, {
        ...$aQzlj$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement($aQzlj$reactspectrumutils.ClearSlots, null, children)));
}
/**
 * View is a general purpose container with no specific semantics that can be used for custom styling purposes.
 * It supports Spectrum style props to ensure consistency with other Spectrum components.
 */ const $d0784682a178e0db$export$27a5bd065ad55220 = /*#__PURE__*/ $aQzlj$react.forwardRef($d0784682a178e0db$var$View);


var $ce8fbc0be1bfa661$exports = {};

$parcel$export($ce8fbc0be1bfa661$exports, "Content", () => $ce8fbc0be1bfa661$export$7c6e2c02157bb7d2);




function $ce8fbc0be1bfa661$var$Content(props, ref) {
    props = $aQzlj$reactspectrumutils.useSlotProps(props, 'content');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $aQzlj$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $aQzlj$reactspectrumutils.useDOMRef(ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement("section", {
        ...$aQzlj$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement($aQzlj$reactspectrumutils.ClearSlots, null, children)));
}
/**
 * Content represents the primary content within a Spectrum container.
 */ const $ce8fbc0be1bfa661$export$7c6e2c02157bb7d2 = /*#__PURE__*/ $aQzlj$react.forwardRef($ce8fbc0be1bfa661$var$Content);


var $f0baf9b55122a4d8$exports = {};

$parcel$export($f0baf9b55122a4d8$exports, "Footer", () => $f0baf9b55122a4d8$export$a06f1c675e846f6f);



function $f0baf9b55122a4d8$var$Footer(props, ref) {
    props = $aQzlj$reactspectrumutils.useSlotProps(props, 'footer');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $aQzlj$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $aQzlj$reactspectrumutils.useDOMRef(ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement("footer", {
        ...$aQzlj$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement($aQzlj$reactspectrumutils.ClearSlots, null, children)));
}
/**
 * Footer represents a footer within a Spectrum container.
 */ const $f0baf9b55122a4d8$export$a06f1c675e846f6f = /*#__PURE__*/ $aQzlj$react.forwardRef($f0baf9b55122a4d8$var$Footer);


var $c79b9fe820745666$exports = {};

$parcel$export($c79b9fe820745666$exports, "Header", () => $c79b9fe820745666$export$8b251419efc915eb);



function $c79b9fe820745666$var$Header(props, ref) {
    props = $aQzlj$reactspectrumutils.useSlotProps(props, 'header');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $aQzlj$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $aQzlj$reactspectrumutils.useDOMRef(ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement("header", {
        ...$aQzlj$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($aQzlj$react)).createElement($aQzlj$reactspectrumutils.ClearSlots, null, children)));
}
/**
 * Header represents a header within a Spectrum container.
 */ const $c79b9fe820745666$export$8b251419efc915eb = /*#__PURE__*/ $aQzlj$react.forwardRef($c79b9fe820745666$var$Header);


$parcel$exportWildcard(module.exports, $d0784682a178e0db$exports);
$parcel$exportWildcard(module.exports, $ce8fbc0be1bfa661$exports);
$parcel$exportWildcard(module.exports, $f0baf9b55122a4d8$exports);
$parcel$exportWildcard(module.exports, $c79b9fe820745666$exports);


//# sourceMappingURL=main.js.map
