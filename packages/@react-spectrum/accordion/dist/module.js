import "./main.css";
import {Item as $a046e73eb2997eb8$re_export$Item} from "@react-stately/collections";
import $2vDVE$spectrumiconsuiChevronLeftMedium from "@spectrum-icons/ui/ChevronLeftMedium";
import $2vDVE$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {useStyleProps as $2vDVE$useStyleProps, useDOMRef as $2vDVE$useDOMRef, classNames as $2vDVE$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $2vDVE$filterDOMProps, mergeProps as $2vDVE$mergeProps} from "@react-aria/utils";
import {FocusRing as $2vDVE$FocusRing} from "@react-aria/focus";
import $2vDVE$react, {useRef as $2vDVE$useRef, forwardRef as $2vDVE$forwardRef} from "react";
import {useTreeState as $2vDVE$useTreeState} from "@react-stately/tree";
import {useAccordion as $2vDVE$useAccordion, useAccordionItem as $2vDVE$useAccordionItem} from "@react-aria/accordion";
import {useHover as $2vDVE$useHover} from "@react-aria/interactions";
import {useLocale as $2vDVE$useLocale} from "@react-aria/i18n";
import {useProviderProps as $2vDVE$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a0bd3b60fc40da29$exports = {};

$parcel$export($a0bd3b60fc40da29$exports, "Accordion", () => $a0bd3b60fc40da29$export$a766cd26d0d69044);






var $4e2376bd9ff6b058$exports = {};

$parcel$export($4e2376bd9ff6b058$exports, "spectrum-Accordion", () => $4e2376bd9ff6b058$export$bed6cbae852b32f0, (v) => $4e2376bd9ff6b058$export$bed6cbae852b32f0 = v);
$parcel$export($4e2376bd9ff6b058$exports, "spectrum-Accordion-itemIndicator", () => $4e2376bd9ff6b058$export$35196e2132b47abd, (v) => $4e2376bd9ff6b058$export$35196e2132b47abd = v);
$parcel$export($4e2376bd9ff6b058$exports, "spectrum-Accordion-item", () => $4e2376bd9ff6b058$export$a1947cb8adf67515, (v) => $4e2376bd9ff6b058$export$a1947cb8adf67515 = v);
$parcel$export($4e2376bd9ff6b058$exports, "spectrum-Accordion-itemHeading", () => $4e2376bd9ff6b058$export$36876b8193439034, (v) => $4e2376bd9ff6b058$export$36876b8193439034 = v);
$parcel$export($4e2376bd9ff6b058$exports, "spectrum-Accordion-itemHeader", () => $4e2376bd9ff6b058$export$4da8efb546c03356, (v) => $4e2376bd9ff6b058$export$4da8efb546c03356 = v);
$parcel$export($4e2376bd9ff6b058$exports, "spectrum-Accordion-itemContent", () => $4e2376bd9ff6b058$export$951cb9dc63743241, (v) => $4e2376bd9ff6b058$export$951cb9dc63743241 = v);
$parcel$export($4e2376bd9ff6b058$exports, "is-open", () => $4e2376bd9ff6b058$export$a9781837241c946d, (v) => $4e2376bd9ff6b058$export$a9781837241c946d = v);
$parcel$export($4e2376bd9ff6b058$exports, "is-disabled", () => $4e2376bd9ff6b058$export$d35bc1e505d1ebbf, (v) => $4e2376bd9ff6b058$export$d35bc1e505d1ebbf = v);
$parcel$export($4e2376bd9ff6b058$exports, "is-hovered", () => $4e2376bd9ff6b058$export$b8813cd5d7824ce7, (v) => $4e2376bd9ff6b058$export$b8813cd5d7824ce7 = v);
$parcel$export($4e2376bd9ff6b058$exports, "focus-ring", () => $4e2376bd9ff6b058$export$f39a09f249340e2a, (v) => $4e2376bd9ff6b058$export$f39a09f249340e2a = v);
var $4e2376bd9ff6b058$export$bed6cbae852b32f0;
var $4e2376bd9ff6b058$export$35196e2132b47abd;
var $4e2376bd9ff6b058$export$a1947cb8adf67515;
var $4e2376bd9ff6b058$export$36876b8193439034;
var $4e2376bd9ff6b058$export$4da8efb546c03356;
var $4e2376bd9ff6b058$export$951cb9dc63743241;
var $4e2376bd9ff6b058$export$a9781837241c946d;
var $4e2376bd9ff6b058$export$d35bc1e505d1ebbf;
var $4e2376bd9ff6b058$export$b8813cd5d7824ce7;
var $4e2376bd9ff6b058$export$f39a09f249340e2a;
$4e2376bd9ff6b058$export$bed6cbae852b32f0 = "_spectrum-Accordion_b4e47f";
$4e2376bd9ff6b058$export$35196e2132b47abd = "_spectrum-Accordion-itemIndicator_b4e47f";
$4e2376bd9ff6b058$export$a1947cb8adf67515 = "_spectrum-Accordion-item_b4e47f";
$4e2376bd9ff6b058$export$36876b8193439034 = "_spectrum-Accordion-itemHeading_b4e47f";
$4e2376bd9ff6b058$export$4da8efb546c03356 = "_spectrum-Accordion-itemHeader_b4e47f";
$4e2376bd9ff6b058$export$951cb9dc63743241 = "_spectrum-Accordion-itemContent_b4e47f";
$4e2376bd9ff6b058$export$a9781837241c946d = "_is-open_b4e47f";
$4e2376bd9ff6b058$export$d35bc1e505d1ebbf = "_is-disabled_b4e47f";
$4e2376bd9ff6b058$export$b8813cd5d7824ce7 = "_is-hovered_b4e47f";
$4e2376bd9ff6b058$export$f39a09f249340e2a = "_focus-ring_b4e47f";







function $a0bd3b60fc40da29$var$Accordion(props, ref) {
    props = $2vDVE$useProviderProps(props);
    let state = $2vDVE$useTreeState(props);
    let { styleProps: styleProps  } = $2vDVE$useStyleProps(props);
    let domRef = $2vDVE$useDOMRef(ref);
    let { accordionProps: accordionProps  } = $2vDVE$useAccordion(props, state, domRef);
    return(/*#__PURE__*/ $2vDVE$react.createElement("div", {
        ...$2vDVE$filterDOMProps(props),
        ...accordionProps,
        ...styleProps,
        ref: domRef,
        className: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'spectrum-Accordion', styleProps.className)
    }, [
        ...state.collection
    ].map((item)=>/*#__PURE__*/ $2vDVE$react.createElement($a0bd3b60fc40da29$var$AccordionItem, {
            key: item.key,
            item: item,
            state: state
        })
    )));
}
function $a0bd3b60fc40da29$var$AccordionItem(props) {
    props = $2vDVE$useProviderProps(props);
    let ref = $2vDVE$useRef();
    let { state: state , item: item  } = props;
    let { buttonProps: buttonProps , regionProps: regionProps  } = $2vDVE$useAccordionItem(props, state, ref);
    let isOpen = state.expandedKeys.has(item.key);
    let isDisabled = state.disabledKeys.has(item.key);
    let { isHovered: isHovered , hoverProps: hoverProps  } = $2vDVE$useHover({
        isDisabled: isDisabled
    });
    let { direction: direction  } = $2vDVE$useLocale();
    return(/*#__PURE__*/ $2vDVE$react.createElement("div", {
        className: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'spectrum-Accordion-item', {
            'is-open': isOpen,
            'is-disabled': isDisabled
        })
    }, /*#__PURE__*/ $2vDVE$react.createElement("h3", {
        className: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'spectrum-Accordion-itemHeading')
    }, /*#__PURE__*/ $2vDVE$react.createElement($2vDVE$FocusRing, {
        within: true,
        focusRingClass: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'focus-ring')
    }, /*#__PURE__*/ $2vDVE$react.createElement("button", {
        ...$2vDVE$mergeProps(buttonProps, hoverProps),
        ref: ref,
        className: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'spectrum-Accordion-itemHeader', {
            'is-hovered': isHovered
        })
    }, direction === 'ltr' ? /*#__PURE__*/ $2vDVE$react.createElement($2vDVE$spectrumiconsuiChevronRightMedium, {
        "aria-hidden": "true",
        UNSAFE_className: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'spectrum-Accordion-itemIndicator')
    }) : /*#__PURE__*/ $2vDVE$react.createElement($2vDVE$spectrumiconsuiChevronLeftMedium, {
        "aria-hidden": "true",
        UNSAFE_className: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'spectrum-Accordion-itemIndicator')
    }), item.props.title))), /*#__PURE__*/ $2vDVE$react.createElement("div", {
        ...regionProps,
        className: $2vDVE$classNames((/*@__PURE__*/$parcel$interopDefault($4e2376bd9ff6b058$exports)), 'spectrum-Accordion-itemContent')
    }, item.props.children)));
}
const $a0bd3b60fc40da29$export$a766cd26d0d69044 = /*#__PURE__*/ $2vDVE$forwardRef($a0bd3b60fc40da29$var$Accordion);





export {$a046e73eb2997eb8$re_export$Item as Item, $a0bd3b60fc40da29$export$a766cd26d0d69044 as Accordion};
//# sourceMappingURL=module.js.map
