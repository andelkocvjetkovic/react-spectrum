import {filterDOMProps as $kkZQx$filterDOMProps} from "@react-aria/utils";
import $kkZQx$react, {forwardRef as $kkZQx$forwardRef} from "react";
import {useSlotProps as $kkZQx$useSlotProps, useStyleProps as $kkZQx$useStyleProps, useDOMRef as $kkZQx$useDOMRef} from "@react-spectrum/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9409c0b2a8b9363e$exports = {};

$parcel$export($9409c0b2a8b9363e$exports, "Text", () => $9409c0b2a8b9363e$export$5f1af8db9871e1d6);



function $9409c0b2a8b9363e$var$Text(props, ref) {
    props = $kkZQx$useSlotProps(props, 'text');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $kkZQx$useStyleProps(otherProps);
    let domRef = $kkZQx$useDOMRef(ref);
    return(/*#__PURE__*/ $kkZQx$react.createElement("span", {
        ...$kkZQx$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, children));
}
/**
 * Text represents text with no specific semantic meaning.
 */ const $9409c0b2a8b9363e$export$5f1af8db9871e1d6 = /*#__PURE__*/ $kkZQx$forwardRef($9409c0b2a8b9363e$var$Text);


var $813724bad1948052$exports = {};

$parcel$export($813724bad1948052$exports, "Heading", () => $813724bad1948052$export$a8a3e93435678ff9);



function $813724bad1948052$var$Heading(props, ref) {
    props = $kkZQx$useSlotProps(props, 'heading');
    let { children: children , level: level = 3 , ...otherProps } = props;
    let { styleProps: styleProps  } = $kkZQx$useStyleProps(otherProps);
    let domRef = $kkZQx$useDOMRef(ref);
    let HeadingTag = `h${level}`;
    return(/*#__PURE__*/ $kkZQx$react.createElement(HeadingTag, {
        ...$kkZQx$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, children));
}
/**
 * Heading is used to create various levels of typographic hierarchies.
 */ const $813724bad1948052$export$a8a3e93435678ff9 = /*#__PURE__*/ $kkZQx$forwardRef($813724bad1948052$var$Heading);


var $02f01c6532f6ba23$exports = {};

$parcel$export($02f01c6532f6ba23$exports, "Keyboard", () => $02f01c6532f6ba23$export$16e4d70cc375e707);



function $02f01c6532f6ba23$var$Keyboard(props, ref) {
    props = $kkZQx$useSlotProps(props, 'keyboard');
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $kkZQx$useStyleProps(otherProps);
    let domRef = $kkZQx$useDOMRef(ref);
    return(/*#__PURE__*/ $kkZQx$react.createElement("kbd", {
        ...$kkZQx$filterDOMProps(otherProps),
        ...styleProps,
        dir: "ltr",
        ref: domRef
    }, children));
}
/**
 * Keyboard represents text that specifies a keyboard command.
 */ const $02f01c6532f6ba23$export$16e4d70cc375e707 = /*#__PURE__*/ $kkZQx$forwardRef($02f01c6532f6ba23$var$Keyboard);




export {$9409c0b2a8b9363e$export$5f1af8db9871e1d6 as Text, $813724bad1948052$export$a8a3e93435678ff9 as Heading, $02f01c6532f6ba23$export$16e4d70cc375e707 as Keyboard};
//# sourceMappingURL=module.js.map
