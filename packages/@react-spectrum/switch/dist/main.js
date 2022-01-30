require("./main.css");
var $eHrCG$reactspectrumutils = require("@react-spectrum/utils");
var $eHrCG$reactariafocus = require("@react-aria/focus");
var $eHrCG$react = require("react");
var $eHrCG$reactariainteractions = require("@react-aria/interactions");
var $eHrCG$reactspectrumprovider = require("@react-spectrum/provider");
var $eHrCG$reactariaswitch = require("@react-aria/switch");
var $eHrCG$reactstatelytoggle = require("@react-stately/toggle");

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
var $9a4e468a2ed983c0$exports = {};

$parcel$export($9a4e468a2ed983c0$exports, "Switch", () => $9a4e468a2ed983c0$export$b5d5cf8927ab7262);



var $813ed8f4025b74bf$exports = {};

$parcel$export($813ed8f4025b74bf$exports, "spectrum-ToggleSwitch", () => $813ed8f4025b74bf$export$89a9162656c0c38c, (v) => $813ed8f4025b74bf$export$89a9162656c0c38c = v);
$parcel$export($813ed8f4025b74bf$exports, "spectrum-ToggleSwitch-input", () => $813ed8f4025b74bf$export$38df7ea4ffef819a, (v) => $813ed8f4025b74bf$export$38df7ea4ffef819a = v);
$parcel$export($813ed8f4025b74bf$exports, "spectrum-ToggleSwitch-switch", () => $813ed8f4025b74bf$export$b82d06d1b520a22f, (v) => $813ed8f4025b74bf$export$b82d06d1b520a22f = v);
$parcel$export($813ed8f4025b74bf$exports, "focus-ring", () => $813ed8f4025b74bf$export$f39a09f249340e2a, (v) => $813ed8f4025b74bf$export$f39a09f249340e2a = v);
$parcel$export($813ed8f4025b74bf$exports, "spectrum-ToggleSwitch-label", () => $813ed8f4025b74bf$export$8f1a69021a3897b2, (v) => $813ed8f4025b74bf$export$8f1a69021a3897b2 = v);
$parcel$export($813ed8f4025b74bf$exports, "is-hovered", () => $813ed8f4025b74bf$export$b8813cd5d7824ce7, (v) => $813ed8f4025b74bf$export$b8813cd5d7824ce7 = v);
$parcel$export($813ed8f4025b74bf$exports, "spectrum-ToggleSwitch--quiet", () => $813ed8f4025b74bf$export$ce1b1dcfc10f3df4, (v) => $813ed8f4025b74bf$export$ce1b1dcfc10f3df4 = v);
$parcel$export($813ed8f4025b74bf$exports, "spectrum-ToggleSwitch--ab", () => $813ed8f4025b74bf$export$dc5a33fddabf5882, (v) => $813ed8f4025b74bf$export$dc5a33fddabf5882 = v);
var $813ed8f4025b74bf$export$89a9162656c0c38c;
var $813ed8f4025b74bf$export$38df7ea4ffef819a;
var $813ed8f4025b74bf$export$b82d06d1b520a22f;
var $813ed8f4025b74bf$export$f39a09f249340e2a;
var $813ed8f4025b74bf$export$8f1a69021a3897b2;
var $813ed8f4025b74bf$export$b8813cd5d7824ce7;
var $813ed8f4025b74bf$export$ce1b1dcfc10f3df4;
var $813ed8f4025b74bf$export$dc5a33fddabf5882;
$813ed8f4025b74bf$export$89a9162656c0c38c = "_spectrum-ToggleSwitch_3526dd";
$813ed8f4025b74bf$export$38df7ea4ffef819a = "_spectrum-ToggleSwitch-input_3526dd";
$813ed8f4025b74bf$export$b82d06d1b520a22f = "_spectrum-ToggleSwitch-switch_3526dd";
$813ed8f4025b74bf$export$f39a09f249340e2a = "_focus-ring_3526dd";
$813ed8f4025b74bf$export$8f1a69021a3897b2 = "_spectrum-ToggleSwitch-label_3526dd";
$813ed8f4025b74bf$export$b8813cd5d7824ce7 = "_is-hovered_3526dd";
$813ed8f4025b74bf$export$ce1b1dcfc10f3df4 = "_spectrum-ToggleSwitch--quiet_3526dd";
$813ed8f4025b74bf$export$dc5a33fddabf5882 = "_spectrum-ToggleSwitch--ab_3526dd";






function $9a4e468a2ed983c0$var$Switch(props, ref) {
    props = $eHrCG$reactspectrumprovider.useProviderProps(props);
    let { isEmphasized: isEmphasized = false , isDisabled: isDisabled = false , autoFocus: autoFocus , children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $eHrCG$reactspectrumutils.useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $eHrCG$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    let inputRef = $eHrCG$react.useRef(null);
    let domRef = $eHrCG$reactspectrumutils.useFocusableRef(ref, inputRef);
    let state = $eHrCG$reactstatelytoggle.useToggleState(props);
    let { inputProps: inputProps  } = $eHrCG$reactariaswitch.useSwitch(props, state, inputRef);
    return(/*#__PURE__*/ ($parcel$interopDefault($eHrCG$react)).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: $eHrCG$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($813ed8f4025b74bf$exports)), 'spectrum-ToggleSwitch', {
            'spectrum-ToggleSwitch--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ ($parcel$interopDefault($eHrCG$react)).createElement($eHrCG$reactariafocus.FocusRing, {
        focusRingClass: $eHrCG$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($813ed8f4025b74bf$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ ($parcel$interopDefault($eHrCG$react)).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: $eHrCG$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($813ed8f4025b74bf$exports)), 'spectrum-ToggleSwitch-input')
    })), /*#__PURE__*/ ($parcel$interopDefault($eHrCG$react)).createElement("span", {
        className: $eHrCG$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($813ed8f4025b74bf$exports)), 'spectrum-ToggleSwitch-switch')
    }), children && /*#__PURE__*/ ($parcel$interopDefault($eHrCG$react)).createElement("span", {
        className: $eHrCG$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($813ed8f4025b74bf$exports)), 'spectrum-ToggleSwitch-label')
    }, children)));
}
/**
 * Switches allow users to turn an individual option on or off.
 * They are usually used to activate or deactivate a specific setting.
 */ const $9a4e468a2ed983c0$export$b5d5cf8927ab7262 = /*#__PURE__*/ $eHrCG$react.forwardRef($9a4e468a2ed983c0$var$Switch);


$parcel$exportWildcard(module.exports, $9a4e468a2ed983c0$exports);


//# sourceMappingURL=main.js.map
