import {useSlotProps as $bKLJ4$useSlotProps, useStyleProps as $bKLJ4$useStyleProps, viewStyleProps as $bKLJ4$viewStyleProps, useDOMRef as $bKLJ4$useDOMRef, ClearSlots as $bKLJ4$ClearSlots} from "@react-spectrum/utils";
import {filterDOMProps as $bKLJ4$filterDOMProps} from "@react-aria/utils";
import $bKLJ4$react, {forwardRef as $bKLJ4$forwardRef} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $013c6097144fb373$exports = {};

$parcel$export($013c6097144fb373$exports, "View", () => $013c6097144fb373$export$27a5bd065ad55220);



function $013c6097144fb373$var$View(props, ref) {
    props = $bKLJ4$useSlotProps(props);
    let { elementType: ElementType = 'div' , children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $bKLJ4$useStyleProps(props, $bKLJ4$viewStyleProps);
    let domRef = $bKLJ4$useDOMRef(ref);
    return(/*#__PURE__*/ $bKLJ4$react.createElement(ElementType, {
        ...$bKLJ4$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ $bKLJ4$react.createElement($bKLJ4$ClearSlots, null, children)));
}
/**
 * View is a general purpose container with no specific semantics that can be used for custom styling purposes.
 * It supports Spectrum style props to ensure consistency with other Spectrum components.
 */ const $013c6097144fb373$export$27a5bd065ad55220 = /*#__PURE__*/ $bKLJ4$forwardRef($013c6097144fb373$var$View);


var $501346344d97f454$exports = {};

$parcel$export($501346344d97f454$exports, "Content", () => $501346344d97f454$export$7c6e2c02157bb7d2);




function $501346344d97f454$var$Content(props, ref) {
    props = $bKLJ4$useSlotProps(props, 'content');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $bKLJ4$useStyleProps(otherProps);
    let domRef = $bKLJ4$useDOMRef(ref);
    return(/*#__PURE__*/ $bKLJ4$react.createElement("section", {
        ...$bKLJ4$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ $bKLJ4$react.createElement($bKLJ4$ClearSlots, null, children)));
}
/**
 * Content represents the primary content within a Spectrum container.
 */ const $501346344d97f454$export$7c6e2c02157bb7d2 = /*#__PURE__*/ $bKLJ4$forwardRef($501346344d97f454$var$Content);


var $f9458bfd4e509ddc$exports = {};

$parcel$export($f9458bfd4e509ddc$exports, "Footer", () => $f9458bfd4e509ddc$export$a06f1c675e846f6f);



function $f9458bfd4e509ddc$var$Footer(props, ref) {
    props = $bKLJ4$useSlotProps(props, 'footer');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $bKLJ4$useStyleProps(otherProps);
    let domRef = $bKLJ4$useDOMRef(ref);
    return(/*#__PURE__*/ $bKLJ4$react.createElement("footer", {
        ...$bKLJ4$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ $bKLJ4$react.createElement($bKLJ4$ClearSlots, null, children)));
}
/**
 * Footer represents a footer within a Spectrum container.
 */ const $f9458bfd4e509ddc$export$a06f1c675e846f6f = /*#__PURE__*/ $bKLJ4$forwardRef($f9458bfd4e509ddc$var$Footer);


var $e077986cd8bb6f7c$exports = {};

$parcel$export($e077986cd8bb6f7c$exports, "Header", () => $e077986cd8bb6f7c$export$8b251419efc915eb);



function $e077986cd8bb6f7c$var$Header(props, ref) {
    props = $bKLJ4$useSlotProps(props, 'header');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $bKLJ4$useStyleProps(otherProps);
    let domRef = $bKLJ4$useDOMRef(ref);
    return(/*#__PURE__*/ $bKLJ4$react.createElement("header", {
        ...$bKLJ4$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, /*#__PURE__*/ $bKLJ4$react.createElement($bKLJ4$ClearSlots, null, children)));
}
/**
 * Header represents a header within a Spectrum container.
 */ const $e077986cd8bb6f7c$export$8b251419efc915eb = /*#__PURE__*/ $bKLJ4$forwardRef($e077986cd8bb6f7c$var$Header);




export {$013c6097144fb373$export$27a5bd065ad55220 as View, $501346344d97f454$export$7c6e2c02157bb7d2 as Content, $f9458bfd4e509ddc$export$a06f1c675e846f6f as Footer, $e077986cd8bb6f7c$export$8b251419efc915eb as Header};
//# sourceMappingURL=module.js.map
