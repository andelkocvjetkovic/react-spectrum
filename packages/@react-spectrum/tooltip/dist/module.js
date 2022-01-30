import "./main.css";
import $1fqCz$spectrumiconsuiAlertSmall from "@spectrum-icons/ui/AlertSmall";
import {useStyleProps as $1fqCz$useStyleProps, createDOMRef as $1fqCz$createDOMRef, classNames as $1fqCz$classNames} from "@react-spectrum/utils";
import $1fqCz$spectrumiconsuiInfoSmall from "@spectrum-icons/ui/InfoSmall";
import {mergeProps as $1fqCz$mergeProps} from "@react-aria/utils";
import $1fqCz$react, {useContext as $1fqCz$useContext, useRef as $1fqCz$useRef, useImperativeHandle as $1fqCz$useImperativeHandle} from "react";
import $1fqCz$spectrumiconsuiSuccessSmall from "@spectrum-icons/ui/SuccessSmall";
import {useTooltip as $1fqCz$useTooltip, useTooltipTrigger as $1fqCz$useTooltipTrigger} from "@react-aria/tooltip";
import {FocusableProvider as $1fqCz$FocusableProvider} from "@react-aria/focus";
import {Overlay as $1fqCz$Overlay} from "@react-spectrum/overlays";
import {useOverlayPosition as $1fqCz$useOverlayPosition} from "@react-aria/overlays";
import {useTooltipTriggerState as $1fqCz$useTooltipTriggerState} from "@react-stately/tooltip";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $cd851a3b9aa79585$exports = {};

$parcel$export($cd851a3b9aa79585$exports, "Tooltip", () => $cd851a3b9aa79585$export$28c660c63b792dea);





var $fc1f174e2fd6f020$exports = {};

$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip", () => $fc1f174e2fd6f020$export$f7bf7078d3d03f05, (v) => $fc1f174e2fd6f020$export$f7bf7078d3d03f05 = v);
$parcel$export($fc1f174e2fd6f020$exports, "is-open", () => $fc1f174e2fd6f020$export$a9781837241c946d, (v) => $fc1f174e2fd6f020$export$a9781837241c946d = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--bottom", () => $fc1f174e2fd6f020$export$4f420a9bbb442953, (v) => $fc1f174e2fd6f020$export$4f420a9bbb442953 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--top", () => $fc1f174e2fd6f020$export$d7516df59e198fc7, (v) => $fc1f174e2fd6f020$export$d7516df59e198fc7 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--right", () => $fc1f174e2fd6f020$export$c094187772823b2e, (v) => $fc1f174e2fd6f020$export$c094187772823b2e = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--left", () => $fc1f174e2fd6f020$export$47f060b68b4cab2c, (v) => $fc1f174e2fd6f020$export$47f060b68b4cab2c = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip-tip", () => $fc1f174e2fd6f020$export$9deb89a7a91de30, (v) => $fc1f174e2fd6f020$export$9deb89a7a91de30 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip-typeIcon", () => $fc1f174e2fd6f020$export$ff23d46fee8272e4, (v) => $fc1f174e2fd6f020$export$ff23d46fee8272e4 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip-label", () => $fc1f174e2fd6f020$export$f4096e0dc445b255, (v) => $fc1f174e2fd6f020$export$f4096e0dc445b255 = v);
$parcel$export($fc1f174e2fd6f020$exports, "u-tooltip-showOnHover", () => $fc1f174e2fd6f020$export$6ea3237f62800d00, (v) => $fc1f174e2fd6f020$export$6ea3237f62800d00 = v);
$parcel$export($fc1f174e2fd6f020$exports, "is-hovered", () => $fc1f174e2fd6f020$export$b8813cd5d7824ce7, (v) => $fc1f174e2fd6f020$export$b8813cd5d7824ce7 = v);
$parcel$export($fc1f174e2fd6f020$exports, "is-focused", () => $fc1f174e2fd6f020$export$e7dc768d35940237, (v) => $fc1f174e2fd6f020$export$e7dc768d35940237 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--negative", () => $fc1f174e2fd6f020$export$92fe45b4260594f6, (v) => $fc1f174e2fd6f020$export$92fe45b4260594f6 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--error", () => $fc1f174e2fd6f020$export$2b291890a5577893, (v) => $fc1f174e2fd6f020$export$2b291890a5577893 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--info", () => $fc1f174e2fd6f020$export$e995d5780591d0a8, (v) => $fc1f174e2fd6f020$export$e995d5780591d0a8 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--help", () => $fc1f174e2fd6f020$export$d33ca445ae528241, (v) => $fc1f174e2fd6f020$export$d33ca445ae528241 = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--positive", () => $fc1f174e2fd6f020$export$11cbf31e1b6e51ac, (v) => $fc1f174e2fd6f020$export$11cbf31e1b6e51ac = v);
$parcel$export($fc1f174e2fd6f020$exports, "spectrum-Tooltip--success", () => $fc1f174e2fd6f020$export$4eae622bc9b08cac, (v) => $fc1f174e2fd6f020$export$4eae622bc9b08cac = v);
var $fc1f174e2fd6f020$export$f7bf7078d3d03f05;
var $fc1f174e2fd6f020$export$a9781837241c946d;
var $fc1f174e2fd6f020$export$4f420a9bbb442953;
var $fc1f174e2fd6f020$export$d7516df59e198fc7;
var $fc1f174e2fd6f020$export$c094187772823b2e;
var $fc1f174e2fd6f020$export$47f060b68b4cab2c;
var $fc1f174e2fd6f020$export$9deb89a7a91de30;
var $fc1f174e2fd6f020$export$ff23d46fee8272e4;
var $fc1f174e2fd6f020$export$f4096e0dc445b255;
var $fc1f174e2fd6f020$export$6ea3237f62800d00;
var $fc1f174e2fd6f020$export$b8813cd5d7824ce7;
var $fc1f174e2fd6f020$export$e7dc768d35940237;
var $fc1f174e2fd6f020$export$92fe45b4260594f6;
var $fc1f174e2fd6f020$export$2b291890a5577893;
var $fc1f174e2fd6f020$export$e995d5780591d0a8;
var $fc1f174e2fd6f020$export$d33ca445ae528241;
var $fc1f174e2fd6f020$export$11cbf31e1b6e51ac;
var $fc1f174e2fd6f020$export$4eae622bc9b08cac;
$fc1f174e2fd6f020$export$f7bf7078d3d03f05 = "_spectrum-Tooltip_22ae94";
$fc1f174e2fd6f020$export$a9781837241c946d = "_is-open_22ae94";
$fc1f174e2fd6f020$export$4f420a9bbb442953 = "_spectrum-Tooltip--bottom_22ae94";
$fc1f174e2fd6f020$export$d7516df59e198fc7 = "_spectrum-Tooltip--top_22ae94";
$fc1f174e2fd6f020$export$c094187772823b2e = "_spectrum-Tooltip--right_22ae94";
$fc1f174e2fd6f020$export$47f060b68b4cab2c = "_spectrum-Tooltip--left_22ae94";
$fc1f174e2fd6f020$export$9deb89a7a91de30 = "_spectrum-Tooltip-tip_22ae94";
$fc1f174e2fd6f020$export$ff23d46fee8272e4 = "_spectrum-Tooltip-typeIcon_22ae94";
$fc1f174e2fd6f020$export$f4096e0dc445b255 = "_spectrum-Tooltip-label_22ae94";
$fc1f174e2fd6f020$export$6ea3237f62800d00 = "_u-tooltip-showOnHover_22ae94";
$fc1f174e2fd6f020$export$b8813cd5d7824ce7 = "_is-hovered_22ae94";
$fc1f174e2fd6f020$export$e7dc768d35940237 = "_is-focused_22ae94";
$fc1f174e2fd6f020$export$92fe45b4260594f6 = "_spectrum-Tooltip--negative_22ae94";
$fc1f174e2fd6f020$export$2b291890a5577893 = "_spectrum-Tooltip--error_22ae94";
$fc1f174e2fd6f020$export$e995d5780591d0a8 = "_spectrum-Tooltip--info_22ae94";
$fc1f174e2fd6f020$export$d33ca445ae528241 = "_spectrum-Tooltip--help_22ae94";
$fc1f174e2fd6f020$export$11cbf31e1b6e51ac = "_spectrum-Tooltip--positive_22ae94";
$fc1f174e2fd6f020$export$4eae622bc9b08cac = "_spectrum-Tooltip--success_22ae94";




const $517d6592361ffa28$export$39ae08fa83328b12 = $1fqCz$react.createContext({
});



let $cd851a3b9aa79585$var$iconMap = {
    info: $1fqCz$spectrumiconsuiInfoSmall,
    positive: $1fqCz$spectrumiconsuiSuccessSmall,
    negative: $1fqCz$spectrumiconsuiAlertSmall
};
function $cd851a3b9aa79585$var$Tooltip(props, ref) {
    let { ref: overlayRef , arrowProps: arrowProps , state: state , ...tooltipProviderProps } = $1fqCz$useContext($517d6592361ffa28$export$39ae08fa83328b12);
    let defaultRef = $1fqCz$useRef();
    overlayRef = overlayRef || defaultRef;
    props = $1fqCz$mergeProps(props, tooltipProviderProps);
    let { variant: variant = 'neutral' , placement: placement = 'top' , isOpen: isOpen , showIcon: showIcon , ...otherProps } = props;
    let { styleProps: styleProps  } = $1fqCz$useStyleProps(otherProps);
    let { tooltipProps: tooltipProps  } = $1fqCz$useTooltip(props, state);
    // Sync ref with overlayRef from context.
    $1fqCz$useImperativeHandle(ref, ()=>$1fqCz$createDOMRef(overlayRef)
    );
    let Icon = $cd851a3b9aa79585$var$iconMap[variant];
    return(/*#__PURE__*/ $1fqCz$react.createElement("div", {
        ...styleProps,
        ...tooltipProps,
        className: $1fqCz$classNames((/*@__PURE__*/$parcel$interopDefault($fc1f174e2fd6f020$exports)), 'spectrum-Tooltip', `spectrum-Tooltip--${variant}`, `spectrum-Tooltip--${placement}`, {
            'is-open': isOpen
        }, styleProps.className),
        ref: overlayRef
    }, showIcon && variant !== 'neutral' && /*#__PURE__*/ $1fqCz$react.createElement(Icon, {
        UNSAFE_className: $1fqCz$classNames((/*@__PURE__*/$parcel$interopDefault($fc1f174e2fd6f020$exports)), 'spectrum-Tooltip-typeIcon'),
        "aria-hidden": true
    }), props.children && /*#__PURE__*/ $1fqCz$react.createElement("span", {
        className: $1fqCz$classNames((/*@__PURE__*/$parcel$interopDefault($fc1f174e2fd6f020$exports)), 'spectrum-Tooltip-label')
    }, props.children), /*#__PURE__*/ $1fqCz$react.createElement("span", {
        ...arrowProps,
        className: $1fqCz$classNames((/*@__PURE__*/$parcel$interopDefault($fc1f174e2fd6f020$exports)), 'spectrum-Tooltip-tip')
    })));
}
/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */ let $cd851a3b9aa79585$export$28c660c63b792dea = /*#__PURE__*/ $1fqCz$react.forwardRef($cd851a3b9aa79585$var$Tooltip);


var $8f1dc12c02800767$exports = {};

$parcel$export($8f1dc12c02800767$exports, "TooltipTrigger", () => $8f1dc12c02800767$export$8c610744efcf8a1d);







const $8f1dc12c02800767$var$DEFAULT_OFFSET = -1; // Offset needed to reach 4px/5px (med/large) distance between tooltip and trigger button
const $8f1dc12c02800767$var$DEFAULT_CROSS_OFFSET = 0;
function $8f1dc12c02800767$var$TooltipTrigger(props) {
    let { children: children , crossOffset: crossOffset = $8f1dc12c02800767$var$DEFAULT_CROSS_OFFSET , isDisabled: isDisabled , offset: offset = $8f1dc12c02800767$var$DEFAULT_OFFSET , trigger: triggerAction  } = props;
    let [trigger, tooltip] = $1fqCz$react.Children.toArray(children);
    let state = $1fqCz$useTooltipTriggerState(props);
    let tooltipTriggerRef = $1fqCz$useRef();
    let overlayRef = $1fqCz$useRef();
    let { triggerProps: triggerProps , tooltipProps: tooltipProps  } = $1fqCz$useTooltipTrigger({
        isDisabled: isDisabled,
        trigger: triggerAction
    }, state, tooltipTriggerRef);
    let { overlayProps: overlayProps , arrowProps: arrowProps , placement: placement  } = $1fqCz$useOverlayPosition({
        placement: props.placement || 'top',
        targetRef: tooltipTriggerRef,
        overlayRef: overlayRef,
        offset: offset,
        crossOffset: crossOffset,
        isOpen: state.isOpen
    });
    return(/*#__PURE__*/ $1fqCz$react.createElement($1fqCz$FocusableProvider, {
        ...triggerProps,
        ref: tooltipTriggerRef
    }, trigger, /*#__PURE__*/ $1fqCz$react.createElement($517d6592361ffa28$export$39ae08fa83328b12.Provider, {
        value: {
            state: state,
            placement: placement,
            ref: overlayRef,
            UNSAFE_style: overlayProps.style,
            arrowProps: arrowProps,
            ...tooltipProps
        }
    }, /*#__PURE__*/ $1fqCz$react.createElement($1fqCz$Overlay, {
        isOpen: state.isOpen
    }, tooltip))));
}
// Support TooltipTrigger inside components using CollectionBuilder.
$8f1dc12c02800767$var$TooltipTrigger.getCollectionNode = function*(props) {
    // Replaced the use of React.Childern.toArray because it mutates the key prop.
    let childArray = [];
    $1fqCz$react.Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ $1fqCz$react.isValidElement(child)) childArray.push(child);
    });
    let [trigger, tooltip] = childArray;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ $1fqCz$react.createElement($8f1dc12c02800767$var$TooltipTrigger, {
                key: element.key,
                ...props
            }, element, tooltip)
    };
};
/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */ // We don't want getCollectionNode to show up in the type definition
let $8f1dc12c02800767$export$8c610744efcf8a1d = $8f1dc12c02800767$var$TooltipTrigger;




export {$cd851a3b9aa79585$export$28c660c63b792dea as Tooltip, $8f1dc12c02800767$export$8c610744efcf8a1d as TooltipTrigger};
//# sourceMappingURL=module.js.map
