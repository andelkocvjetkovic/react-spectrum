var $eyw3A$reactariautils = require("@react-aria/utils");
var $eyw3A$react = require("react");
var $eyw3A$reactspectrumutils = require("@react-spectrum/utils");

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
var $71e31c006cfd0e07$exports = {};

$parcel$export($71e31c006cfd0e07$exports, "Text", () => $71e31c006cfd0e07$export$5f1af8db9871e1d6);



function $71e31c006cfd0e07$var$Text(props, ref) {
    props = $eyw3A$reactspectrumutils.useSlotProps(props, 'text');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $eyw3A$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $eyw3A$reactspectrumutils.useDOMRef(ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($eyw3A$react)).createElement("span", {
        ...$eyw3A$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, children));
}
/**
 * Text represents text with no specific semantic meaning.
 */ const $71e31c006cfd0e07$export$5f1af8db9871e1d6 = /*#__PURE__*/ $eyw3A$react.forwardRef($71e31c006cfd0e07$var$Text);


var $20e9f3da512ae35f$exports = {};

$parcel$export($20e9f3da512ae35f$exports, "Heading", () => $20e9f3da512ae35f$export$a8a3e93435678ff9);



function $20e9f3da512ae35f$var$Heading(props, ref) {
    props = $eyw3A$reactspectrumutils.useSlotProps(props, 'heading');
    let { children: children , level: level = 3 , ...otherProps } = props;
    let { styleProps: styleProps  } = $eyw3A$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $eyw3A$reactspectrumutils.useDOMRef(ref);
    let HeadingTag = `h${level}`;
    return(/*#__PURE__*/ ($parcel$interopDefault($eyw3A$react)).createElement(HeadingTag, {
        ...$eyw3A$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, children));
}
/**
 * Heading is used to create various levels of typographic hierarchies.
 */ const $20e9f3da512ae35f$export$a8a3e93435678ff9 = /*#__PURE__*/ $eyw3A$react.forwardRef($20e9f3da512ae35f$var$Heading);


var $3ceb81f5878185c5$exports = {};

$parcel$export($3ceb81f5878185c5$exports, "Keyboard", () => $3ceb81f5878185c5$export$16e4d70cc375e707);



function $3ceb81f5878185c5$var$Keyboard(props, ref) {
    props = $eyw3A$reactspectrumutils.useSlotProps(props, 'keyboard');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $eyw3A$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $eyw3A$reactspectrumutils.useDOMRef(ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($eyw3A$react)).createElement("kbd", {
        ...$eyw3A$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        dir: "ltr",
        ref: domRef
    }, children));
}
/**
 * Keyboard represents text that specifies a keyboard command.
 */ const $3ceb81f5878185c5$export$16e4d70cc375e707 = /*#__PURE__*/ $eyw3A$react.forwardRef($3ceb81f5878185c5$var$Keyboard);


$parcel$exportWildcard(module.exports, $71e31c006cfd0e07$exports);
$parcel$exportWildcard(module.exports, $20e9f3da512ae35f$exports);
$parcel$exportWildcard(module.exports, $3ceb81f5878185c5$exports);


//# sourceMappingURL=main.js.map
