require("./main.css");
var $iDe9y$reactspectrumutils = require("@react-spectrum/utils");
var $iDe9y$reactspectrumbutton = require("@react-spectrum/button");
var $iDe9y$spectrumiconsuiMagnifier = require("@spectrum-icons/ui/Magnifier");
var $iDe9y$react = require("react");
var $iDe9y$reactspectrumtextfield = require("@react-spectrum/textfield");
var $iDe9y$reactspectrumprovider = require("@react-spectrum/provider");
var $iDe9y$reactariasearchfield = require("@react-aria/searchfield");
var $iDe9y$reactstatelysearchfield = require("@react-stately/searchfield");

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
var $816344e6b5821b5d$exports = {};

$parcel$export($816344e6b5821b5d$exports, "SearchField", () => $816344e6b5821b5d$export$b94867ecbd698f21);




var $70e964570b1e0fa9$exports = {};

$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search", () => $70e964570b1e0fa9$export$713911d754e1e4ae, (v) => $70e964570b1e0fa9$export$713911d754e1e4ae = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-ClearButton", () => $70e964570b1e0fa9$export$b752ce409e5660c, (v) => $70e964570b1e0fa9$export$b752ce409e5660c = v);
$parcel$export($70e964570b1e0fa9$exports, "is-quiet", () => $70e964570b1e0fa9$export$6d5c5433f0da4241, (v) => $70e964570b1e0fa9$export$6d5c5433f0da4241 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search-input", () => $70e964570b1e0fa9$export$50e02603f2d97ae1, (v) => $70e964570b1e0fa9$export$50e02603f2d97ae1 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search--invalid", () => $70e964570b1e0fa9$export$77a6151a0b46a6a3, (v) => $70e964570b1e0fa9$export$77a6151a0b46a6a3 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search--valid", () => $70e964570b1e0fa9$export$aa81e3ab40f37567, (v) => $70e964570b1e0fa9$export$aa81e3ab40f37567 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search--loadable", () => $70e964570b1e0fa9$export$9c74d64afae3b2d4, (v) => $70e964570b1e0fa9$export$9c74d64afae3b2d4 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search-circleLoader", () => $70e964570b1e0fa9$export$70ae4353602451dc, (v) => $70e964570b1e0fa9$export$70ae4353602451dc = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search-validationIcon", () => $70e964570b1e0fa9$export$938f0981825eae6e, (v) => $70e964570b1e0fa9$export$938f0981825eae6e = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Textfield", () => $70e964570b1e0fa9$export$2c8a10299d8b3418, (v) => $70e964570b1e0fa9$export$2c8a10299d8b3418 = v);
var $70e964570b1e0fa9$export$713911d754e1e4ae;
var $70e964570b1e0fa9$export$b752ce409e5660c;
var $70e964570b1e0fa9$export$6d5c5433f0da4241;
var $70e964570b1e0fa9$export$50e02603f2d97ae1;
var $70e964570b1e0fa9$export$77a6151a0b46a6a3;
var $70e964570b1e0fa9$export$aa81e3ab40f37567;
var $70e964570b1e0fa9$export$9c74d64afae3b2d4;
var $70e964570b1e0fa9$export$70ae4353602451dc;
var $70e964570b1e0fa9$export$938f0981825eae6e;
var $70e964570b1e0fa9$export$2c8a10299d8b3418;
$70e964570b1e0fa9$export$713911d754e1e4ae = "_spectrum-Search_d3c0f3";
$70e964570b1e0fa9$export$b752ce409e5660c = "_spectrum-ClearButton_d3c0f3";
$70e964570b1e0fa9$export$6d5c5433f0da4241 = "_is-quiet_d3c0f3";
$70e964570b1e0fa9$export$50e02603f2d97ae1 = "_spectrum-Search-input_d3c0f3";
$70e964570b1e0fa9$export$77a6151a0b46a6a3 = "_spectrum-Search--invalid_d3c0f3";
$70e964570b1e0fa9$export$aa81e3ab40f37567 = "_spectrum-Search--valid_d3c0f3";
$70e964570b1e0fa9$export$9c74d64afae3b2d4 = "_spectrum-Search--loadable_d3c0f3";
$70e964570b1e0fa9$export$70ae4353602451dc = "_spectrum-Search-circleLoader_d3c0f3";
$70e964570b1e0fa9$export$938f0981825eae6e = "_spectrum-Search-validationIcon_d3c0f3";
$70e964570b1e0fa9$export$2c8a10299d8b3418 = "_spectrum-Textfield_d3c0f3";






function $816344e6b5821b5d$var$SearchField(props, ref) {
    props = $iDe9y$reactspectrumutils.useSlotProps(props, 'searchfield');
    props = $iDe9y$reactspectrumprovider.useProviderProps(props);
    let defaultIcon = /*#__PURE__*/ ($parcel$interopDefault($iDe9y$react)).createElement(($parcel$interopDefault($iDe9y$spectrumiconsuiMagnifier)), {
        "data-testid": "searchicon"
    });
    let { icon: icon = defaultIcon , isDisabled: isDisabled , UNSAFE_className: UNSAFE_className , ...otherProps } = props;
    let state = $iDe9y$reactstatelysearchfield.useSearchFieldState(props);
    let inputRef = $iDe9y$react.useRef();
    let { labelProps: labelProps , inputProps: inputProps , clearButtonProps: clearButtonProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $iDe9y$reactariasearchfield.useSearchField(props, state, inputRef);
    let clearButton = /*#__PURE__*/ ($parcel$interopDefault($iDe9y$react)).createElement($iDe9y$reactspectrumbutton.ClearButton, {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: $iDe9y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($iDe9y$react)).createElement($iDe9y$reactspectrumtextfield.TextFieldBase, {
        ...otherProps,
        labelProps: labelProps,
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        UNSAFE_className: $iDe9y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': props.isQuiet,
            'spectrum-Search--invalid': props.validationState === 'invalid',
            'spectrum-Search--valid': props.validationState === 'valid'
        }, UNSAFE_className),
        inputClassName: $iDe9y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search-input'),
        ref: ref,
        inputRef: inputRef,
        isDisabled: isDisabled,
        icon: icon,
        wrapperChildren: state.value !== '' && !props.isReadOnly && clearButton
    }));
}
/**
 * A SearchField is a text field designed for searches.
 */ let $816344e6b5821b5d$export$b94867ecbd698f21 = /*#__PURE__*/ $iDe9y$react.forwardRef($816344e6b5821b5d$var$SearchField);


$parcel$exportWildcard(module.exports, $816344e6b5821b5d$exports);


//# sourceMappingURL=main.js.map
