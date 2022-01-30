require("./main.css");
var $gdqyV$reactspectrumutils = require("@react-spectrum/utils");
var $gdqyV$reactspectrumlabel = require("@react-spectrum/label");
var $gdqyV$react = require("react");
var $gdqyV$reactspectrumform = require("@react-spectrum/form");
var $gdqyV$reactariautils = require("@react-aria/utils");
var $gdqyV$reactarialabel = require("@react-aria/label");
var $gdqyV$reactariai18n = require("@react-aria/i18n");
var $gdqyV$reactspectrumprovider = require("@react-spectrum/provider");

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
var $698779bf451da852$exports = {};

$parcel$export($698779bf451da852$exports, "SearchWithin", () => $698779bf451da852$export$ccbe498d8dde5cf);


var $ef926cee1dd982c8$exports = {};
var $aeb6c0f009ed7c03$exports = {};
$aeb6c0f009ed7c03$exports = JSON.parse("{\"search\":\"Search\",\"searchWithin\":\"Search within\"}");


$ef926cee1dd982c8$exports = {
    "en-US": $aeb6c0f009ed7c03$exports
};



var $052b159e864e5f48$exports = {};

$parcel$export($052b159e864e5f48$exports, "spectrum-SearchWithin", () => $052b159e864e5f48$export$80b718ba061789bf, (v) => $052b159e864e5f48$export$80b718ba061789bf = v);
$parcel$export($052b159e864e5f48$exports, "spectrum-SearchWithin-picker", () => $052b159e864e5f48$export$356ede20f5e49cab, (v) => $052b159e864e5f48$export$356ede20f5e49cab = v);
$parcel$export($052b159e864e5f48$exports, "spectrum-SearchWithin-searchfield", () => $052b159e864e5f48$export$2654857906b41e46, (v) => $052b159e864e5f48$export$2654857906b41e46 = v);
$parcel$export($052b159e864e5f48$exports, "spectrum-SearchWithin-container", () => $052b159e864e5f48$export$bec6419a0f2c4906, (v) => $052b159e864e5f48$export$bec6419a0f2c4906 = v);
var $052b159e864e5f48$export$80b718ba061789bf;
var $052b159e864e5f48$export$356ede20f5e49cab;
var $052b159e864e5f48$export$2654857906b41e46;
var $052b159e864e5f48$export$bec6419a0f2c4906;
$052b159e864e5f48$export$80b718ba061789bf = "_spectrum-SearchWithin_a41716";
$052b159e864e5f48$export$356ede20f5e49cab = "_spectrum-SearchWithin-picker_a41716";
$052b159e864e5f48$export$2654857906b41e46 = "_spectrum-SearchWithin-searchfield_a41716";
$052b159e864e5f48$export$bec6419a0f2c4906 = "_spectrum-SearchWithin-container_a41716";








function $698779bf451da852$var$SearchWithin(props, ref) {
    props = $gdqyV$reactspectrumprovider.useProviderProps(props);
    props = $gdqyV$reactspectrumform.useFormProps(props);
    let formatMessage = $gdqyV$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($ef926cee1dd982c8$exports)));
    let { styleProps: styleProps  } = $gdqyV$reactspectrumutils.useStyleProps(props);
    let { children: children , isDisabled: isDisabled , isRequired: isRequired , label: label  } = props;
    let defaultAriaLabel = formatMessage('search');
    if (!label && !props['aria-label'] && !props['aria-labelledby']) props['aria-label'] = defaultAriaLabel;
    // Get label and group props (aka fieldProps)
    let { labelProps: labelProps , fieldProps: fieldProps  } = $gdqyV$reactarialabel.useLabel(props);
    // Grab aria-labelledby for the search input. Will need the entire concatenated aria-labelledby if it exists since pointing at the group id doesn’t
    // suffice if there is a external label
    let labelledBy = fieldProps['aria-labelledby'] || (fieldProps['aria-label'] !== defaultAriaLabel ? fieldProps.id : '');
    let pickerId = $gdqyV$reactariautils.useId();
    let domRef = $gdqyV$reactspectrumutils.useFocusableRef(ref);
    let groupRef = $gdqyV$react.useRef();
    // Measure the width of the field to inform the width of the menu.
    let [menuWidth, setMenuWidth] = $gdqyV$react.useState(null);
    let { scale: scale  } = $gdqyV$reactspectrumprovider.useProvider();
    let onResize = $gdqyV$react.useCallback(()=>{
        let shouldUseGroup = !!label;
        let width = shouldUseGroup ? groupRef.current?.offsetWidth : domRef.current?.offsetWidth;
        if (!isNaN(width)) setMenuWidth(width);
    }, [
        groupRef,
        domRef,
        setMenuWidth,
        label
    ]);
    $gdqyV$reactspectrumutils.useResizeObserver({
        ref: domRef,
        onResize: onResize
    });
    $gdqyV$reactariautils.useLayoutEffect(onResize, [
        scale,
        onResize
    ]);
    let defaultSlotValues = {
        isDisabled: isDisabled,
        isRequired: isRequired,
        label: null,
        isQuiet: false,
        validationState: null,
        description: null,
        errorMessage: null,
        descriptionProps: null,
        errorMessageProps: null,
        'aria-label': null
    };
    let searchFieldClassName = $gdqyV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($052b159e864e5f48$exports)), 'spectrum-SearchWithin-searchfield');
    let pickerClassName = $gdqyV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($052b159e864e5f48$exports)), 'spectrum-SearchWithin-picker');
    let slots = {
        searchfield: {
            ...defaultSlotValues,
            UNSAFE_className: searchFieldClassName,
            // Apply aria-labelledby of group or the group id to searchfield. No need to pass the group id (we want a new one) and aria-label (aria-labelledby will suffice)
            'aria-labelledby': `${labelledBy} ${pickerId} ${pickerId}-value`,
            // When label is provided, input should have id referenced by htmlFor of label, instead of group
            id: label && fieldProps.id
        },
        picker: {
            ...defaultSlotValues,
            id: pickerId,
            UNSAFE_className: pickerClassName,
            menuWidth: menuWidth,
            align: 'end',
            'aria-label': formatMessage('searchWithin'),
            'aria-labelledby': `${labelledBy} ${pickerId}`
        }
    };
    if (label) // When label is provided, input should have id referenced by htmlFor of label, instead of group
    delete fieldProps.id;
    return(/*#__PURE__*/ ($parcel$interopDefault($gdqyV$react)).createElement($gdqyV$reactspectrumlabel.Field, {
        ...props,
        labelProps: labelProps,
        ref: domRef,
        wrapperClassName: $gdqyV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($052b159e864e5f48$exports)), 'spectrum-SearchWithin-container')
    }, /*#__PURE__*/ ($parcel$interopDefault($gdqyV$react)).createElement("div", {
        ...fieldProps,
        role: "group",
        className: $gdqyV$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($052b159e864e5f48$exports)), 'spectrum-SearchWithin', styleProps.className),
        ref: groupRef
    }, /*#__PURE__*/ ($parcel$interopDefault($gdqyV$react)).createElement($gdqyV$reactspectrumutils.SlotProvider, {
        slots: slots
    }, children))));
}
/**
 * A SearchWithin combines a SearchField and a Picker into a single group. This allows a user to constrain the scope of their search to a particular category, for example.
 */ const $698779bf451da852$export$ccbe498d8dde5cf = /*#__PURE__*/ ($parcel$interopDefault($gdqyV$react)).forwardRef($698779bf451da852$var$SearchWithin);


$parcel$exportWildcard(module.exports, $698779bf451da852$exports);


//# sourceMappingURL=main.js.map
