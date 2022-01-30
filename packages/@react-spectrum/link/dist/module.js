import "./main.css";
import {useSlotProps as $9PFyS$useSlotProps, useStyleProps as $9PFyS$useStyleProps, classNames as $9PFyS$classNames, getWrappedElement as $9PFyS$getWrappedElement} from "@react-spectrum/utils";
import {FocusRing as $9PFyS$FocusRing} from "@react-aria/focus";
import {mergeProps as $9PFyS$mergeProps} from "@react-aria/utils";
import $9PFyS$react, {useRef as $9PFyS$useRef} from "react";
import {useHover as $9PFyS$useHover} from "@react-aria/interactions";
import {useLink as $9PFyS$useLink} from "@react-aria/link";
import {useProviderProps as $9PFyS$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c213a7985eeee7ca$exports = {};

$parcel$export($c213a7985eeee7ca$exports, "Link", () => $c213a7985eeee7ca$export$a6c7ac8248d6e38a);




var $4791defda0ed9da2$exports = {};

$parcel$export($4791defda0ed9da2$exports, "spectrum-Link", () => $4791defda0ed9da2$export$d85dd8b94975f388, (v) => $4791defda0ed9da2$export$d85dd8b94975f388 = v);
$parcel$export($4791defda0ed9da2$exports, "is-hovered", () => $4791defda0ed9da2$export$b8813cd5d7824ce7, (v) => $4791defda0ed9da2$export$b8813cd5d7824ce7 = v);
$parcel$export($4791defda0ed9da2$exports, "focus-ring", () => $4791defda0ed9da2$export$f39a09f249340e2a, (v) => $4791defda0ed9da2$export$f39a09f249340e2a = v);
$parcel$export($4791defda0ed9da2$exports, "is-disabled", () => $4791defda0ed9da2$export$d35bc1e505d1ebbf, (v) => $4791defda0ed9da2$export$d35bc1e505d1ebbf = v);
$parcel$export($4791defda0ed9da2$exports, "spectrum-Link--secondary", () => $4791defda0ed9da2$export$ab09ed292dcb9a79, (v) => $4791defda0ed9da2$export$ab09ed292dcb9a79 = v);
$parcel$export($4791defda0ed9da2$exports, "spectrum-Link--overBackground", () => $4791defda0ed9da2$export$679b6267148797da, (v) => $4791defda0ed9da2$export$679b6267148797da = v);
$parcel$export($4791defda0ed9da2$exports, "spectrum-Link--quiet", () => $4791defda0ed9da2$export$81921ea93435e997, (v) => $4791defda0ed9da2$export$81921ea93435e997 = v);
var $4791defda0ed9da2$export$d85dd8b94975f388;
var $4791defda0ed9da2$export$b8813cd5d7824ce7;
var $4791defda0ed9da2$export$f39a09f249340e2a;
var $4791defda0ed9da2$export$d35bc1e505d1ebbf;
var $4791defda0ed9da2$export$ab09ed292dcb9a79;
var $4791defda0ed9da2$export$679b6267148797da;
var $4791defda0ed9da2$export$81921ea93435e997;
$4791defda0ed9da2$export$d85dd8b94975f388 = "_spectrum-Link_5a03c7";
$4791defda0ed9da2$export$b8813cd5d7824ce7 = "_is-hovered_5a03c7";
$4791defda0ed9da2$export$f39a09f249340e2a = "_focus-ring_5a03c7";
$4791defda0ed9da2$export$d35bc1e505d1ebbf = "_is-disabled_5a03c7";
$4791defda0ed9da2$export$ab09ed292dcb9a79 = "_spectrum-Link--secondary_5a03c7";
$4791defda0ed9da2$export$679b6267148797da = "_spectrum-Link--overBackground_5a03c7";
$4791defda0ed9da2$export$81921ea93435e997 = "_spectrum-Link--quiet_5a03c7";





function $c213a7985eeee7ca$export$a6c7ac8248d6e38a(props) {
    props = $9PFyS$useProviderProps(props);
    props = $9PFyS$useSlotProps(props, 'link');
    let { variant: variant = 'primary' , isQuiet: isQuiet , children: children , href: // @ts-ignore
    href  } = props;
    let { styleProps: styleProps  } = $9PFyS$useStyleProps(props);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $9PFyS$useHover({
    });
    if (href) console.warn('href is deprecated, please use an anchor element as children');
    let ref = $9PFyS$useRef();
    let { linkProps: linkProps  } = $9PFyS$useLink({
        ...props,
        elementType: typeof children === 'string' ? 'span' : 'a'
    }, ref);
    return(/*#__PURE__*/ $9PFyS$react.createElement($9PFyS$FocusRing, {
        focusRingClass: $9PFyS$classNames((/*@__PURE__*/$parcel$interopDefault($4791defda0ed9da2$exports)), 'focus-ring')
    }, /*#__PURE__*/ $9PFyS$react.cloneElement($9PFyS$getWrappedElement(children), {
        ...styleProps,
        ...$9PFyS$mergeProps(linkProps, hoverProps),
        ref: ref,
        className: $9PFyS$classNames((/*@__PURE__*/$parcel$interopDefault($4791defda0ed9da2$exports)), 'spectrum-Link', {
            'spectrum-Link--quiet': isQuiet,
            [`spectrum-Link--${variant}`]: variant,
            'is-hovered': isHovered
        }, styleProps.className)
    })));
}




export {$c213a7985eeee7ca$export$a6c7ac8248d6e38a as Link};
//# sourceMappingURL=module.js.map
