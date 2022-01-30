import "./main.css";
import {useStyleProps as $bkwOJ$useStyleProps, useFocusableRef as $bkwOJ$useFocusableRef, useResizeObserver as $bkwOJ$useResizeObserver, classNames as $bkwOJ$classNames, SlotProvider as $bkwOJ$SlotProvider} from "@react-spectrum/utils";
import {Field as $bkwOJ$Field} from "@react-spectrum/label";
import $bkwOJ$react, {useRef as $bkwOJ$useRef, useState as $bkwOJ$useState, useCallback as $bkwOJ$useCallback} from "react";
import {useFormProps as $bkwOJ$useFormProps} from "@react-spectrum/form";
import {useId as $bkwOJ$useId, useLayoutEffect as $bkwOJ$useLayoutEffect} from "@react-aria/utils";
import {useLabel as $bkwOJ$useLabel} from "@react-aria/label";
import {useMessageFormatter as $bkwOJ$useMessageFormatter} from "@react-aria/i18n";
import {useProviderProps as $bkwOJ$useProviderProps, useProvider as $bkwOJ$useProvider} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $e97c8d07c2dcfd0f$exports = {};

$parcel$export($e97c8d07c2dcfd0f$exports, "SearchWithin", () => $e97c8d07c2dcfd0f$export$ccbe498d8dde5cf);


var $f5b2b23ddf3ba7aa$exports = {};
var $754b7ec1a254e3e9$exports = {};
$754b7ec1a254e3e9$exports = JSON.parse("{\"search\":\"Search\",\"searchWithin\":\"Search within\"}");


$f5b2b23ddf3ba7aa$exports = {
    "en-US": $754b7ec1a254e3e9$exports
};



var $4b862a96878b8db9$exports = {};

$parcel$export($4b862a96878b8db9$exports, "spectrum-SearchWithin", () => $4b862a96878b8db9$export$80b718ba061789bf, (v) => $4b862a96878b8db9$export$80b718ba061789bf = v);
$parcel$export($4b862a96878b8db9$exports, "spectrum-SearchWithin-picker", () => $4b862a96878b8db9$export$356ede20f5e49cab, (v) => $4b862a96878b8db9$export$356ede20f5e49cab = v);
$parcel$export($4b862a96878b8db9$exports, "spectrum-SearchWithin-searchfield", () => $4b862a96878b8db9$export$2654857906b41e46, (v) => $4b862a96878b8db9$export$2654857906b41e46 = v);
$parcel$export($4b862a96878b8db9$exports, "spectrum-SearchWithin-container", () => $4b862a96878b8db9$export$bec6419a0f2c4906, (v) => $4b862a96878b8db9$export$bec6419a0f2c4906 = v);
var $4b862a96878b8db9$export$80b718ba061789bf;
var $4b862a96878b8db9$export$356ede20f5e49cab;
var $4b862a96878b8db9$export$2654857906b41e46;
var $4b862a96878b8db9$export$bec6419a0f2c4906;
$4b862a96878b8db9$export$80b718ba061789bf = "_spectrum-SearchWithin_a41716";
$4b862a96878b8db9$export$356ede20f5e49cab = "_spectrum-SearchWithin-picker_a41716";
$4b862a96878b8db9$export$2654857906b41e46 = "_spectrum-SearchWithin-searchfield_a41716";
$4b862a96878b8db9$export$bec6419a0f2c4906 = "_spectrum-SearchWithin-container_a41716";








function $e97c8d07c2dcfd0f$var$SearchWithin(props, ref) {
    props = $bkwOJ$useProviderProps(props);
    props = $bkwOJ$useFormProps(props);
    let formatMessage = $bkwOJ$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($f5b2b23ddf3ba7aa$exports)));
    let { styleProps: styleProps  } = $bkwOJ$useStyleProps(props);
    let { children: children , isDisabled: isDisabled , isRequired: isRequired , label: label  } = props;
    let defaultAriaLabel = formatMessage('search');
    if (!label && !props['aria-label'] && !props['aria-labelledby']) props['aria-label'] = defaultAriaLabel;
    // Get label and group props (aka fieldProps)
    let { labelProps: labelProps , fieldProps: fieldProps  } = $bkwOJ$useLabel(props);
    // Grab aria-labelledby for the search input. Will need the entire concatenated aria-labelledby if it exists since pointing at the group id doesn’t
    // suffice if there is a external label
    let labelledBy = fieldProps['aria-labelledby'] || (fieldProps['aria-label'] !== defaultAriaLabel ? fieldProps.id : '');
    let pickerId = $bkwOJ$useId();
    let domRef = $bkwOJ$useFocusableRef(ref);
    let groupRef = $bkwOJ$useRef();
    // Measure the width of the field to inform the width of the menu.
    let [menuWidth, setMenuWidth] = $bkwOJ$useState(null);
    let { scale: scale  } = $bkwOJ$useProvider();
    let onResize = $bkwOJ$useCallback(()=>{
        let shouldUseGroup = !!label;
        let width = shouldUseGroup ? groupRef.current?.offsetWidth : domRef.current?.offsetWidth;
        if (!isNaN(width)) setMenuWidth(width);
    }, [
        groupRef,
        domRef,
        setMenuWidth,
        label
    ]);
    $bkwOJ$useResizeObserver({
        ref: domRef,
        onResize: onResize
    });
    $bkwOJ$useLayoutEffect(onResize, [
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
    let searchFieldClassName = $bkwOJ$classNames((/*@__PURE__*/$parcel$interopDefault($4b862a96878b8db9$exports)), 'spectrum-SearchWithin-searchfield');
    let pickerClassName = $bkwOJ$classNames((/*@__PURE__*/$parcel$interopDefault($4b862a96878b8db9$exports)), 'spectrum-SearchWithin-picker');
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
    return(/*#__PURE__*/ $bkwOJ$react.createElement($bkwOJ$Field, {
        ...props,
        labelProps: labelProps,
        ref: domRef,
        wrapperClassName: $bkwOJ$classNames((/*@__PURE__*/$parcel$interopDefault($4b862a96878b8db9$exports)), 'spectrum-SearchWithin-container')
    }, /*#__PURE__*/ $bkwOJ$react.createElement("div", {
        ...fieldProps,
        role: "group",
        className: $bkwOJ$classNames((/*@__PURE__*/$parcel$interopDefault($4b862a96878b8db9$exports)), 'spectrum-SearchWithin', styleProps.className),
        ref: groupRef
    }, /*#__PURE__*/ $bkwOJ$react.createElement($bkwOJ$SlotProvider, {
        slots: slots
    }, children))));
}
/**
 * A SearchWithin combines a SearchField and a Picker into a single group. This allows a user to constrain the scope of their search to a particular category, for example.
 */ const $e97c8d07c2dcfd0f$export$ccbe498d8dde5cf = /*#__PURE__*/ $bkwOJ$react.forwardRef($e97c8d07c2dcfd0f$var$SearchWithin);




export {$e97c8d07c2dcfd0f$export$ccbe498d8dde5cf as SearchWithin};
//# sourceMappingURL=module.js.map
