require("./main.css");
var $1kFf7$spectrumiconsuiAlertSmall = require("@spectrum-icons/ui/AlertSmall");
var $1kFf7$reactspectrumutils = require("@react-spectrum/utils");
var $1kFf7$spectrumiconsuiInfoSmall = require("@spectrum-icons/ui/InfoSmall");
var $1kFf7$reactariautils = require("@react-aria/utils");
var $1kFf7$react = require("react");
var $1kFf7$spectrumiconsuiSuccessSmall = require("@spectrum-icons/ui/SuccessSmall");
var $1kFf7$reactariatooltip = require("@react-aria/tooltip");
var $1kFf7$reactariafocus = require("@react-aria/focus");
var $1kFf7$reactspectrumoverlays = require("@react-spectrum/overlays");
var $1kFf7$reactariaoverlays = require("@react-aria/overlays");
var $1kFf7$reactstatelytooltip = require("@react-stately/tooltip");

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
var $b752592ead0719bb$exports = {};

$parcel$export($b752592ead0719bb$exports, "Tooltip", () => $b752592ead0719bb$export$28c660c63b792dea);





var $989e89edeadd210c$exports = {};

$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip", () => $989e89edeadd210c$export$f7bf7078d3d03f05, (v) => $989e89edeadd210c$export$f7bf7078d3d03f05 = v);
$parcel$export($989e89edeadd210c$exports, "is-open", () => $989e89edeadd210c$export$a9781837241c946d, (v) => $989e89edeadd210c$export$a9781837241c946d = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--bottom", () => $989e89edeadd210c$export$4f420a9bbb442953, (v) => $989e89edeadd210c$export$4f420a9bbb442953 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--top", () => $989e89edeadd210c$export$d7516df59e198fc7, (v) => $989e89edeadd210c$export$d7516df59e198fc7 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--right", () => $989e89edeadd210c$export$c094187772823b2e, (v) => $989e89edeadd210c$export$c094187772823b2e = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--left", () => $989e89edeadd210c$export$47f060b68b4cab2c, (v) => $989e89edeadd210c$export$47f060b68b4cab2c = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip-tip", () => $989e89edeadd210c$export$9deb89a7a91de30, (v) => $989e89edeadd210c$export$9deb89a7a91de30 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip-typeIcon", () => $989e89edeadd210c$export$ff23d46fee8272e4, (v) => $989e89edeadd210c$export$ff23d46fee8272e4 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip-label", () => $989e89edeadd210c$export$f4096e0dc445b255, (v) => $989e89edeadd210c$export$f4096e0dc445b255 = v);
$parcel$export($989e89edeadd210c$exports, "u-tooltip-showOnHover", () => $989e89edeadd210c$export$6ea3237f62800d00, (v) => $989e89edeadd210c$export$6ea3237f62800d00 = v);
$parcel$export($989e89edeadd210c$exports, "is-hovered", () => $989e89edeadd210c$export$b8813cd5d7824ce7, (v) => $989e89edeadd210c$export$b8813cd5d7824ce7 = v);
$parcel$export($989e89edeadd210c$exports, "is-focused", () => $989e89edeadd210c$export$e7dc768d35940237, (v) => $989e89edeadd210c$export$e7dc768d35940237 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--negative", () => $989e89edeadd210c$export$92fe45b4260594f6, (v) => $989e89edeadd210c$export$92fe45b4260594f6 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--error", () => $989e89edeadd210c$export$2b291890a5577893, (v) => $989e89edeadd210c$export$2b291890a5577893 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--info", () => $989e89edeadd210c$export$e995d5780591d0a8, (v) => $989e89edeadd210c$export$e995d5780591d0a8 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--help", () => $989e89edeadd210c$export$d33ca445ae528241, (v) => $989e89edeadd210c$export$d33ca445ae528241 = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--positive", () => $989e89edeadd210c$export$11cbf31e1b6e51ac, (v) => $989e89edeadd210c$export$11cbf31e1b6e51ac = v);
$parcel$export($989e89edeadd210c$exports, "spectrum-Tooltip--success", () => $989e89edeadd210c$export$4eae622bc9b08cac, (v) => $989e89edeadd210c$export$4eae622bc9b08cac = v);
var $989e89edeadd210c$export$f7bf7078d3d03f05;
var $989e89edeadd210c$export$a9781837241c946d;
var $989e89edeadd210c$export$4f420a9bbb442953;
var $989e89edeadd210c$export$d7516df59e198fc7;
var $989e89edeadd210c$export$c094187772823b2e;
var $989e89edeadd210c$export$47f060b68b4cab2c;
var $989e89edeadd210c$export$9deb89a7a91de30;
var $989e89edeadd210c$export$ff23d46fee8272e4;
var $989e89edeadd210c$export$f4096e0dc445b255;
var $989e89edeadd210c$export$6ea3237f62800d00;
var $989e89edeadd210c$export$b8813cd5d7824ce7;
var $989e89edeadd210c$export$e7dc768d35940237;
var $989e89edeadd210c$export$92fe45b4260594f6;
var $989e89edeadd210c$export$2b291890a5577893;
var $989e89edeadd210c$export$e995d5780591d0a8;
var $989e89edeadd210c$export$d33ca445ae528241;
var $989e89edeadd210c$export$11cbf31e1b6e51ac;
var $989e89edeadd210c$export$4eae622bc9b08cac;
$989e89edeadd210c$export$f7bf7078d3d03f05 = "_spectrum-Tooltip_22ae94";
$989e89edeadd210c$export$a9781837241c946d = "_is-open_22ae94";
$989e89edeadd210c$export$4f420a9bbb442953 = "_spectrum-Tooltip--bottom_22ae94";
$989e89edeadd210c$export$d7516df59e198fc7 = "_spectrum-Tooltip--top_22ae94";
$989e89edeadd210c$export$c094187772823b2e = "_spectrum-Tooltip--right_22ae94";
$989e89edeadd210c$export$47f060b68b4cab2c = "_spectrum-Tooltip--left_22ae94";
$989e89edeadd210c$export$9deb89a7a91de30 = "_spectrum-Tooltip-tip_22ae94";
$989e89edeadd210c$export$ff23d46fee8272e4 = "_spectrum-Tooltip-typeIcon_22ae94";
$989e89edeadd210c$export$f4096e0dc445b255 = "_spectrum-Tooltip-label_22ae94";
$989e89edeadd210c$export$6ea3237f62800d00 = "_u-tooltip-showOnHover_22ae94";
$989e89edeadd210c$export$b8813cd5d7824ce7 = "_is-hovered_22ae94";
$989e89edeadd210c$export$e7dc768d35940237 = "_is-focused_22ae94";
$989e89edeadd210c$export$92fe45b4260594f6 = "_spectrum-Tooltip--negative_22ae94";
$989e89edeadd210c$export$2b291890a5577893 = "_spectrum-Tooltip--error_22ae94";
$989e89edeadd210c$export$e995d5780591d0a8 = "_spectrum-Tooltip--info_22ae94";
$989e89edeadd210c$export$d33ca445ae528241 = "_spectrum-Tooltip--help_22ae94";
$989e89edeadd210c$export$11cbf31e1b6e51ac = "_spectrum-Tooltip--positive_22ae94";
$989e89edeadd210c$export$4eae622bc9b08cac = "_spectrum-Tooltip--success_22ae94";




const $3fd3eed08d3c2ff4$export$39ae08fa83328b12 = ($parcel$interopDefault($1kFf7$react)).createContext({
});



let $b752592ead0719bb$var$iconMap = {
    info: ($parcel$interopDefault($1kFf7$spectrumiconsuiInfoSmall)),
    positive: ($parcel$interopDefault($1kFf7$spectrumiconsuiSuccessSmall)),
    negative: ($parcel$interopDefault($1kFf7$spectrumiconsuiAlertSmall))
};
function $b752592ead0719bb$var$Tooltip(props, ref) {
    let { ref: overlayRef , arrowProps: arrowProps , state: state , ...tooltipProviderProps } = $1kFf7$react.useContext($3fd3eed08d3c2ff4$export$39ae08fa83328b12);
    let defaultRef = $1kFf7$react.useRef();
    overlayRef = overlayRef || defaultRef;
    props = $1kFf7$reactariautils.mergeProps(props, tooltipProviderProps);
    let { variant: variant = 'neutral' , placement: placement = 'top' , isOpen: isOpen , showIcon: showIcon , ...otherProps } = props;
    let { styleProps: styleProps  } = $1kFf7$reactspectrumutils.useStyleProps(otherProps);
    let { tooltipProps: tooltipProps  } = $1kFf7$reactariatooltip.useTooltip(props, state);
    // Sync ref with overlayRef from context.
    $1kFf7$react.useImperativeHandle(ref, ()=>$1kFf7$reactspectrumutils.createDOMRef(overlayRef)
    );
    let Icon = $b752592ead0719bb$var$iconMap[variant];
    return(/*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement("div", {
        ...styleProps,
        ...tooltipProps,
        className: $1kFf7$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($989e89edeadd210c$exports)), 'spectrum-Tooltip', `spectrum-Tooltip--${variant}`, `spectrum-Tooltip--${placement}`, {
            'is-open': isOpen
        }, styleProps.className),
        ref: overlayRef
    }, showIcon && variant !== 'neutral' && /*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement(Icon, {
        UNSAFE_className: $1kFf7$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($989e89edeadd210c$exports)), 'spectrum-Tooltip-typeIcon'),
        "aria-hidden": true
    }), props.children && /*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement("span", {
        className: $1kFf7$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($989e89edeadd210c$exports)), 'spectrum-Tooltip-label')
    }, props.children), /*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement("span", {
        ...arrowProps,
        className: $1kFf7$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($989e89edeadd210c$exports)), 'spectrum-Tooltip-tip')
    })));
}
/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */ let $b752592ead0719bb$export$28c660c63b792dea = /*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).forwardRef($b752592ead0719bb$var$Tooltip);


var $663806caa3ebe13a$exports = {};

$parcel$export($663806caa3ebe13a$exports, "TooltipTrigger", () => $663806caa3ebe13a$export$8c610744efcf8a1d);







const $663806caa3ebe13a$var$DEFAULT_OFFSET = -1; // Offset needed to reach 4px/5px (med/large) distance between tooltip and trigger button
const $663806caa3ebe13a$var$DEFAULT_CROSS_OFFSET = 0;
function $663806caa3ebe13a$var$TooltipTrigger(props) {
    let { children: children , crossOffset: crossOffset = $663806caa3ebe13a$var$DEFAULT_CROSS_OFFSET , isDisabled: isDisabled , offset: offset = $663806caa3ebe13a$var$DEFAULT_OFFSET , trigger: triggerAction  } = props;
    let [trigger, tooltip] = ($parcel$interopDefault($1kFf7$react)).Children.toArray(children);
    let state = $1kFf7$reactstatelytooltip.useTooltipTriggerState(props);
    let tooltipTriggerRef = $1kFf7$react.useRef();
    let overlayRef = $1kFf7$react.useRef();
    let { triggerProps: triggerProps , tooltipProps: tooltipProps  } = $1kFf7$reactariatooltip.useTooltipTrigger({
        isDisabled: isDisabled,
        trigger: triggerAction
    }, state, tooltipTriggerRef);
    let { overlayProps: overlayProps , arrowProps: arrowProps , placement: placement  } = $1kFf7$reactariaoverlays.useOverlayPosition({
        placement: props.placement || 'top',
        targetRef: tooltipTriggerRef,
        overlayRef: overlayRef,
        offset: offset,
        crossOffset: crossOffset,
        isOpen: state.isOpen
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement($1kFf7$reactariafocus.FocusableProvider, {
        ...triggerProps,
        ref: tooltipTriggerRef
    }, trigger, /*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement($3fd3eed08d3c2ff4$export$39ae08fa83328b12.Provider, {
        value: {
            state: state,
            placement: placement,
            ref: overlayRef,
            UNSAFE_style: overlayProps.style,
            arrowProps: arrowProps,
            ...tooltipProps
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement($1kFf7$reactspectrumoverlays.Overlay, {
        isOpen: state.isOpen
    }, tooltip))));
}
// Support TooltipTrigger inside components using CollectionBuilder.
$663806caa3ebe13a$var$TooltipTrigger.getCollectionNode = function*(props) {
    // Replaced the use of React.Childern.toArray because it mutates the key prop.
    let childArray = [];
    ($parcel$interopDefault($1kFf7$react)).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).isValidElement(child)) childArray.push(child);
    });
    let [trigger, tooltip] = childArray;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ ($parcel$interopDefault($1kFf7$react)).createElement($663806caa3ebe13a$var$TooltipTrigger, {
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
let $663806caa3ebe13a$export$8c610744efcf8a1d = $663806caa3ebe13a$var$TooltipTrigger;


$parcel$exportWildcard(module.exports, $b752592ead0719bb$exports);
$parcel$exportWildcard(module.exports, $663806caa3ebe13a$exports);


//# sourceMappingURL=main.js.map
