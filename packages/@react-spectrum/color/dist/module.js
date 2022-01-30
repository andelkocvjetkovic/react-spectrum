import "./main.css";
import {dimensionValue as $lFOSm$dimensionValue, useStyleProps as $lFOSm$useStyleProps, useFocusableRef as $lFOSm$useFocusableRef, classNames as $lFOSm$classNames} from "@react-spectrum/utils";
import $lFOSm$react, {useRef as $lFOSm$useRef, useState as $lFOSm$useState, useCallback as $lFOSm$useCallback, useEffect as $lFOSm$useEffect} from "react";
import {useColorWheel as $lFOSm$useColorWheel, useColorSlider as $lFOSm$useColorSlider, useColorField as $lFOSm$useColorField} from "@react-aria/color";
import {useColorWheelState as $lFOSm$useColorWheelState, useColorSliderState as $lFOSm$useColorSliderState, useColorFieldState as $lFOSm$useColorFieldState} from "@react-stately/color";
import {useFocusRing as $lFOSm$useFocusRing} from "@react-aria/focus";
import {useProviderProps as $lFOSm$useProviderProps} from "@react-spectrum/provider";
import {useResizeObserver as $lFOSm$useResizeObserver, useId as $lFOSm$useId} from "@react-aria/utils";
import {Flex as $lFOSm$Flex} from "@react-spectrum/layout";
import {Label as $lFOSm$Label} from "@react-spectrum/label";
import {useFocusVisible as $lFOSm$useFocusVisible, useFocus as $lFOSm$useFocus} from "@react-aria/interactions";
import {useLocale as $lFOSm$useLocale} from "@react-aria/i18n";
import {TextFieldBase as $lFOSm$TextFieldBase} from "@react-spectrum/textfield";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d8362bcb01a786c8$exports = {};

$parcel$export($d8362bcb01a786c8$exports, "ColorWheel", () => $d8362bcb01a786c8$export$f80663f808113381);



var $382e95997f940403$exports = {};

$parcel$export($382e95997f940403$exports, "spectrum-ColorHandle", () => $382e95997f940403$export$cd9afaa621b6216f, (v) => $382e95997f940403$export$cd9afaa621b6216f = v);
$parcel$export($382e95997f940403$exports, "is-focused", () => $382e95997f940403$export$e7dc768d35940237, (v) => $382e95997f940403$export$e7dc768d35940237 = v);
$parcel$export($382e95997f940403$exports, "focus-ring", () => $382e95997f940403$export$f39a09f249340e2a, (v) => $382e95997f940403$export$f39a09f249340e2a = v);
$parcel$export($382e95997f940403$exports, "is-disabled", () => $382e95997f940403$export$d35bc1e505d1ebbf, (v) => $382e95997f940403$export$d35bc1e505d1ebbf = v);
$parcel$export($382e95997f940403$exports, "spectrum-ColorHandle-color", () => $382e95997f940403$export$afe4c366ed4e659c, (v) => $382e95997f940403$export$afe4c366ed4e659c = v);
var $382e95997f940403$export$cd9afaa621b6216f;
var $382e95997f940403$export$e7dc768d35940237;
var $382e95997f940403$export$f39a09f249340e2a;
var $382e95997f940403$export$d35bc1e505d1ebbf;
var $382e95997f940403$export$afe4c366ed4e659c;
$382e95997f940403$export$cd9afaa621b6216f = "_spectrum-ColorHandle_5a9f41";
$382e95997f940403$export$e7dc768d35940237 = "_is-focused_5a9f41";
$382e95997f940403$export$f39a09f249340e2a = "_focus-ring_5a9f41";
$382e95997f940403$export$d35bc1e505d1ebbf = "_is-disabled_5a9f41";
$382e95997f940403$export$afe4c366ed4e659c = "_spectrum-ColorHandle-color_5a9f41";


var $f43a1aa9f63632ba$exports = {};

$parcel$export($f43a1aa9f63632ba$exports, "spectrum-ColorLoupe", () => $f43a1aa9f63632ba$export$88d6ed2576b21809, (v) => $f43a1aa9f63632ba$export$88d6ed2576b21809 = v);
$parcel$export($f43a1aa9f63632ba$exports, "is-open", () => $f43a1aa9f63632ba$export$a9781837241c946d, (v) => $f43a1aa9f63632ba$export$a9781837241c946d = v);
$parcel$export($f43a1aa9f63632ba$exports, "spectrum-ColorLoupe-outer", () => $f43a1aa9f63632ba$export$d6ad38291e8aca9c, (v) => $f43a1aa9f63632ba$export$d6ad38291e8aca9c = v);
$parcel$export($f43a1aa9f63632ba$exports, "spectrum-ColorLoupe-inner-background", () => $f43a1aa9f63632ba$export$397af82b48750fe5, (v) => $f43a1aa9f63632ba$export$397af82b48750fe5 = v);
$parcel$export($f43a1aa9f63632ba$exports, "spectrum-ColorLoupe-inner-checker", () => $f43a1aa9f63632ba$export$f9a2a02e0b271024, (v) => $f43a1aa9f63632ba$export$f9a2a02e0b271024 = v);
var $f43a1aa9f63632ba$export$88d6ed2576b21809;
var $f43a1aa9f63632ba$export$a9781837241c946d;
var $f43a1aa9f63632ba$export$d6ad38291e8aca9c;
var $f43a1aa9f63632ba$export$397af82b48750fe5;
var $f43a1aa9f63632ba$export$f9a2a02e0b271024;
$f43a1aa9f63632ba$export$88d6ed2576b21809 = "_spectrum-ColorLoupe_c818a8";
$f43a1aa9f63632ba$export$a9781837241c946d = "_is-open_c818a8";
$f43a1aa9f63632ba$export$d6ad38291e8aca9c = "_spectrum-ColorLoupe-outer_c818a8";
$f43a1aa9f63632ba$export$397af82b48750fe5 = "_spectrum-ColorLoupe-inner-background_c818a8";
$f43a1aa9f63632ba$export$f9a2a02e0b271024 = "_spectrum-ColorLoupe-inner-checker_c818a8";



function $ddc690af6605f895$export$a3cc47cee1c1ccc(props) {
    let { value: value , isDisabled: isDisabled , isDragging: isDragging , isFocused: isFocused , children: children , className: className = '' , ...otherProps } = props;
    let patternId = $lFOSm$useId();
    let valueCSS = value.toString('css');
    return(/*#__PURE__*/ $lFOSm$react.createElement("div", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($382e95997f940403$exports)), 'spectrum-ColorHandle', {
            'is-focused': isFocused,
            'is-disabled': isDisabled
        }) + ' ' + className,
        ...otherProps
    }, /*#__PURE__*/ $lFOSm$react.createElement("div", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($382e95997f940403$exports)), 'spectrum-ColorHandle-color'),
        style: {
            backgroundColor: valueCSS
        }
    }), /*#__PURE__*/ $lFOSm$react.createElement("svg", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($f43a1aa9f63632ba$exports)), 'spectrum-ColorLoupe', {
            'is-open': isDragging
        }),
        "aria-hidden": "true"
    }, /*#__PURE__*/ $lFOSm$react.createElement("pattern", {
        id: patternId,
        x: "0",
        y: "0",
        width: "16",
        height: "16",
        patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ $lFOSm$react.createElement("rect", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($f43a1aa9f63632ba$exports)), 'spectrum-ColorLoupe-inner-background'),
        x: "0",
        y: "0",
        width: "16",
        height: "16"
    }), /*#__PURE__*/ $lFOSm$react.createElement("rect", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($f43a1aa9f63632ba$exports)), 'spectrum-ColorLoupe-inner-checker'),
        x: "0",
        y: "0",
        width: "8",
        height: "8"
    }), /*#__PURE__*/ $lFOSm$react.createElement("rect", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($f43a1aa9f63632ba$exports)), 'spectrum-ColorLoupe-inner-checker'),
        x: "8",
        y: "8",
        width: "8",
        height: "8"
    })), /*#__PURE__*/ $lFOSm$react.createElement("path", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($f43a1aa9f63632ba$exports)), 'spectrum-ColorLoupe-inner'),
        d: "M25 1a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z",
        fill: `url(#${patternId})`
    }), /*#__PURE__*/ $lFOSm$react.createElement("path", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($f43a1aa9f63632ba$exports)), 'spectrum-ColorLoupe-inner'),
        d: "M25 1a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z",
        fill: valueCSS
    }), /*#__PURE__*/ $lFOSm$react.createElement("path", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($f43a1aa9f63632ba$exports)), 'spectrum-ColorLoupe-outer'),
        d: "M25 3A21.98 21.98 0 003 25c0 6.2 4 14.794 11.568 24.853A144.233 144.233 0 0025 62.132a144.085 144.085 0 0010.4-12.239C42.99 39.816 47 31.209 47 25A21.98 21.98 0 0025 3m0-2a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z"
    })), children));
}



var $ba6106de1b10a6b2$exports = {};

$parcel$export($ba6106de1b10a6b2$exports, "spectrum-ColorWheel", () => $ba6106de1b10a6b2$export$b70a5ca28702fbc6, (v) => $ba6106de1b10a6b2$export$b70a5ca28702fbc6 = v);
$parcel$export($ba6106de1b10a6b2$exports, "is-focused", () => $ba6106de1b10a6b2$export$e7dc768d35940237, (v) => $ba6106de1b10a6b2$export$e7dc768d35940237 = v);
$parcel$export($ba6106de1b10a6b2$exports, "spectrum-ColorWheel-handle", () => $ba6106de1b10a6b2$export$4cd23920eb8ac056, (v) => $ba6106de1b10a6b2$export$4cd23920eb8ac056 = v);
$parcel$export($ba6106de1b10a6b2$exports, "spectrum-ColorWheel-slider", () => $ba6106de1b10a6b2$export$f476ddda713d62b, (v) => $ba6106de1b10a6b2$export$f476ddda713d62b = v);
$parcel$export($ba6106de1b10a6b2$exports, "is-disabled", () => $ba6106de1b10a6b2$export$d35bc1e505d1ebbf, (v) => $ba6106de1b10a6b2$export$d35bc1e505d1ebbf = v);
$parcel$export($ba6106de1b10a6b2$exports, "is-dragged", () => $ba6106de1b10a6b2$export$8778c911bed6c759, (v) => $ba6106de1b10a6b2$export$8778c911bed6c759 = v);
$parcel$export($ba6106de1b10a6b2$exports, "spectrum-ColorWheel-gradient", () => $ba6106de1b10a6b2$export$9afaa791d7500a9b, (v) => $ba6106de1b10a6b2$export$9afaa791d7500a9b = v);
$parcel$export($ba6106de1b10a6b2$exports, "spectrum-ColorWheel-segment", () => $ba6106de1b10a6b2$export$ada9fbffdaa4f10, (v) => $ba6106de1b10a6b2$export$ada9fbffdaa4f10 = v);
var $ba6106de1b10a6b2$export$b70a5ca28702fbc6;
var $ba6106de1b10a6b2$export$e7dc768d35940237;
var $ba6106de1b10a6b2$export$4cd23920eb8ac056;
var $ba6106de1b10a6b2$export$f476ddda713d62b;
var $ba6106de1b10a6b2$export$d35bc1e505d1ebbf;
var $ba6106de1b10a6b2$export$8778c911bed6c759;
var $ba6106de1b10a6b2$export$9afaa791d7500a9b;
var $ba6106de1b10a6b2$export$ada9fbffdaa4f10;
$ba6106de1b10a6b2$export$b70a5ca28702fbc6 = "_spectrum-ColorWheel_31462a";
$ba6106de1b10a6b2$export$e7dc768d35940237 = "_is-focused_31462a";
$ba6106de1b10a6b2$export$4cd23920eb8ac056 = "_spectrum-ColorWheel-handle_31462a";
$ba6106de1b10a6b2$export$f476ddda713d62b = "_spectrum-ColorWheel-slider_31462a";
$ba6106de1b10a6b2$export$d35bc1e505d1ebbf = "_is-disabled_31462a";
$ba6106de1b10a6b2$export$8778c911bed6c759 = "_is-dragged_31462a";
$ba6106de1b10a6b2$export$9afaa791d7500a9b = "_spectrum-ColorWheel-gradient_31462a";
$ba6106de1b10a6b2$export$ada9fbffdaa4f10 = "_spectrum-ColorWheel-segment_31462a";







const $d8362bcb01a786c8$var$WHEEL_THICKNESS = 24;
function $d8362bcb01a786c8$var$ColorWheel(props, ref) {
    props = $lFOSm$useProviderProps(props);
    let { isDisabled: isDisabled  } = props;
    let size = props.size && $lFOSm$dimensionValue(props.size);
    let { styleProps: styleProps  } = $lFOSm$useStyleProps(props);
    let inputRef = $lFOSm$useRef(null);
    let containerRef = $lFOSm$useFocusableRef(ref, inputRef);
    let [wheelRadius, setWheelRadius] = $lFOSm$useState(null);
    let [wheelThickness, setWheelThickness] = $lFOSm$useState($d8362bcb01a786c8$var$WHEEL_THICKNESS);
    let resizeHandler = $lFOSm$useCallback(()=>{
        if (containerRef.current) {
            setWheelRadius(containerRef.current.offsetWidth / 2);
            let thickness = window.getComputedStyle(containerRef.current).getPropertyValue('--spectrum-colorwheel-track-thickness');
            if (thickness) setWheelThickness(parseInt(thickness, 10));
        }
    }, [
        containerRef,
        setWheelRadius,
        setWheelThickness
    ]);
    $lFOSm$useEffect(()=>{
        // the size observer's fallback to the window resize event doesn't fire on mount
        if (wheelRadius == null) resizeHandler();
    }, [
        wheelRadius,
        resizeHandler
    ]);
    $lFOSm$useResizeObserver({
        ref: containerRef,
        onResize: resizeHandler
    });
    let state = $lFOSm$useColorWheelState(props);
    let { trackProps: trackProps , inputProps: inputProps , thumbProps: thumbProps  } = $lFOSm$useColorWheel({
        ...props,
        innerRadius: wheelRadius - wheelThickness,
        outerRadius: wheelRadius
    }, state, inputRef);
    let { focusProps: focusProps , isFocusVisible: isFocusVisible  } = $lFOSm$useFocusRing();
    return(/*#__PURE__*/ $lFOSm$react.createElement("div", {
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($ba6106de1b10a6b2$exports)), 'spectrum-ColorWheel', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: containerRef,
        style: {
            ...styleProps.style,
            // Workaround around https://github.com/adobe/spectrum-css/issues/1032
            // @ts-ignore
            'width': size,
            'height': size
        }
    }, /*#__PURE__*/ $lFOSm$react.createElement("div", {
        ...trackProps,
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($ba6106de1b10a6b2$exports)), 'spectrum-ColorWheel-gradient')
    }), /*#__PURE__*/ $lFOSm$react.createElement($ddc690af6605f895$export$a3cc47cee1c1ccc, {
        value: state.getDisplayColor(),
        isFocused: isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isDragging,
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($ba6106de1b10a6b2$exports)), 'spectrum-ColorWheel-handle'),
        ...thumbProps
    }, /*#__PURE__*/ $lFOSm$react.createElement("input", {
        ...focusProps,
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($ba6106de1b10a6b2$exports)), 'spectrum-ColorWheel-slider'),
        ...inputProps,
        ref: inputRef
    }))));
}
/**
 * ColorWheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */ let $d8362bcb01a786c8$export$f80663f808113381 = /*#__PURE__*/ $lFOSm$react.forwardRef($d8362bcb01a786c8$var$ColorWheel);


var $c04d747afdc3bdd8$exports = {};

$parcel$export($c04d747afdc3bdd8$exports, "ColorSlider", () => $c04d747afdc3bdd8$export$44fd664bcca5b6fb);





var $a7751946f8605d4c$exports = {};

$parcel$export($a7751946f8605d4c$exports, "spectrum-ColorSlider", () => $a7751946f8605d4c$export$a5f8b0989b27a604, (v) => $a7751946f8605d4c$export$a5f8b0989b27a604 = v);
$parcel$export($a7751946f8605d4c$exports, "is-focused", () => $a7751946f8605d4c$export$e7dc768d35940237, (v) => $a7751946f8605d4c$export$e7dc768d35940237 = v);
$parcel$export($a7751946f8605d4c$exports, "spectrum-ColorSlider-handle", () => $a7751946f8605d4c$export$8c273ba92fabe1f1, (v) => $a7751946f8605d4c$export$8c273ba92fabe1f1 = v);
$parcel$export($a7751946f8605d4c$exports, "spectrum-ColorSlider-slider", () => $a7751946f8605d4c$export$2f08b72944af536, (v) => $a7751946f8605d4c$export$2f08b72944af536 = v);
$parcel$export($a7751946f8605d4c$exports, "spectrum-ColorSlider-container--horizontal", () => $a7751946f8605d4c$export$33e97914f6746614, (v) => $a7751946f8605d4c$export$33e97914f6746614 = v);
$parcel$export($a7751946f8605d4c$exports, "spectrum-ColorSlider-container--vertical", () => $a7751946f8605d4c$export$cd1c093289104c66, (v) => $a7751946f8605d4c$export$cd1c093289104c66 = v);
$parcel$export($a7751946f8605d4c$exports, "is-disabled", () => $a7751946f8605d4c$export$d35bc1e505d1ebbf, (v) => $a7751946f8605d4c$export$d35bc1e505d1ebbf = v);
$parcel$export($a7751946f8605d4c$exports, "spectrum-ColorSlider--vertical", () => $a7751946f8605d4c$export$83dcf61b398bfaf1, (v) => $a7751946f8605d4c$export$83dcf61b398bfaf1 = v);
var $a7751946f8605d4c$export$a5f8b0989b27a604;
var $a7751946f8605d4c$export$e7dc768d35940237;
var $a7751946f8605d4c$export$8c273ba92fabe1f1;
var $a7751946f8605d4c$export$2f08b72944af536;
var $a7751946f8605d4c$export$33e97914f6746614;
var $a7751946f8605d4c$export$cd1c093289104c66;
var $a7751946f8605d4c$export$d35bc1e505d1ebbf;
var $a7751946f8605d4c$export$83dcf61b398bfaf1;
$a7751946f8605d4c$export$a5f8b0989b27a604 = "_spectrum-ColorSlider_a5bb06";
$a7751946f8605d4c$export$e7dc768d35940237 = "_is-focused_a5bb06";
$a7751946f8605d4c$export$8c273ba92fabe1f1 = "_spectrum-ColorSlider-handle_a5bb06";
$a7751946f8605d4c$export$2f08b72944af536 = "_spectrum-ColorSlider-slider_a5bb06";
$a7751946f8605d4c$export$33e97914f6746614 = "_spectrum-ColorSlider-container--horizontal_a5bb06";
$a7751946f8605d4c$export$cd1c093289104c66 = "_spectrum-ColorSlider-container--vertical_a5bb06";
$a7751946f8605d4c$export$d35bc1e505d1ebbf = "_is-disabled_a5bb06";
$a7751946f8605d4c$export$83dcf61b398bfaf1 = "_spectrum-ColorSlider--vertical_a5bb06";







function $c04d747afdc3bdd8$var$ColorSlider(props, ref) {
    props = $lFOSm$useProviderProps(props);
    let { isDisabled: isDisabled , channel: channel , orientation: orientation , label: label , showValueLabel: showValueLabel , 'aria-label': ariaLabel  } = props;
    let vertical = orientation === 'vertical';
    let { styleProps: styleProps  } = $lFOSm$useStyleProps(props);
    let { locale: locale  } = $lFOSm$useLocale();
    let inputRef = $lFOSm$useRef();
    let trackRef = $lFOSm$useRef();
    let domRef = $lFOSm$useFocusableRef(ref, inputRef);
    let state = $lFOSm$useColorSliderState({
        ...props,
        locale: locale
    });
    // If vertical and a label is provided, use it as an aria-label instead.
    if (vertical && label) {
        ariaLabel = ariaLabel || (typeof label === 'string' ? label : null);
        label = null;
    }
    // If no external label, aria-label or aria-labelledby is provided,
    // default to displaying the localized channel value.
    // Specifically check if label is undefined. If label is `null` then display no visible label.
    // A default aria-label is provided by useColorSlider in that case.
    if (label === undefined && !ariaLabel && !props['aria-labelledby'] && !vertical) label = state.value.getChannelName(channel, locale);
    // Show the value label by default if there is a visible label
    if (showValueLabel == null) showValueLabel = !!label;
    let { inputProps: inputProps , thumbProps: thumbProps , trackProps: trackProps , labelProps: labelProps , outputProps: outputProps  } = $lFOSm$useColorSlider({
        ...props,
        label: label,
        'aria-label': ariaLabel,
        trackRef: trackRef,
        inputRef: inputRef
    }, state);
    let { isFocusVisible: isFocusVisible  } = $lFOSm$useFocusVisible();
    let [isFocused, setIsFocused] = $lFOSm$useState(false);
    let { focusProps: focusProps  } = $lFOSm$useFocus({
        isDisabled: isDisabled,
        onFocusChange: setIsFocused
    });
    let alignLabel;
    if (vertical) alignLabel = 'center';
    else if (label != null && showValueLabel) alignLabel = 'space-between';
    else if (label != null) alignLabel = 'flex-start';
    else if (showValueLabel) alignLabel = 'flex-end';
    return(/*#__PURE__*/ $lFOSm$react.createElement("div", {
        ref: domRef,
        ...styleProps,
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($a7751946f8605d4c$exports)), {
            'spectrum-ColorSlider-container--horizontal': !vertical,
            'spectrum-ColorSlider-container--vertical': vertical
        })
    }, label && /*#__PURE__*/ $lFOSm$react.createElement($lFOSm$Flex, {
        direction: "row",
        justifyContent: alignLabel
    }, /*#__PURE__*/ $lFOSm$react.createElement($lFOSm$Label, labelProps, label), showValueLabel && /*#__PURE__*/ $lFOSm$react.createElement($lFOSm$Label, {
        elementType: "span"
    }, /*#__PURE__*/ $lFOSm$react.createElement("output", outputProps, state.value.formatChannelValue(channel, locale)))), /*#__PURE__*/ $lFOSm$react.createElement("div", {
        ...trackProps,
        ref: trackRef,
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($a7751946f8605d4c$exports)), 'spectrum-ColorSlider', {
            'is-disabled': isDisabled,
            'spectrum-ColorSlider--vertical': vertical
        })
    }, /*#__PURE__*/ $lFOSm$react.createElement($ddc690af6605f895$export$a3cc47cee1c1ccc, {
        value: state.getDisplayColor(),
        isFocused: isFocused && isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isThumbDragging(0),
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($a7751946f8605d4c$exports)), 'spectrum-ColorSlider-handle'),
        ...thumbProps
    }, /*#__PURE__*/ $lFOSm$react.createElement("input", {
        ...inputProps,
        ...focusProps,
        ref: inputRef,
        className: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($a7751946f8605d4c$exports)), 'spectrum-ColorSlider-slider')
    })))));
}
/**
 * ColorSliders allow users to adjust an individual channel of a color value.
 */ let $c04d747afdc3bdd8$export$44fd664bcca5b6fb = /*#__PURE__*/ $lFOSm$react.forwardRef($c04d747afdc3bdd8$var$ColorSlider);


var $7ae8fe4b054b31ae$exports = {};

$parcel$export($7ae8fe4b054b31ae$exports, "ColorField", () => $7ae8fe4b054b31ae$export$b865d4358897bb17);


var $8a73ebbccaee1bc7$exports = {};

$parcel$export($8a73ebbccaee1bc7$exports, "react-spectrum-ColorField-input", () => $8a73ebbccaee1bc7$export$7d80c6630a750b1, (v) => $8a73ebbccaee1bc7$export$7d80c6630a750b1 = v);
var $8a73ebbccaee1bc7$export$7d80c6630a750b1;
$8a73ebbccaee1bc7$export$7d80c6630a750b1 = "_react-spectrum-ColorField-input_7bde3a";






function $7ae8fe4b054b31ae$var$ColorField(props, ref) {
    props = $lFOSm$useProviderProps(props);
    let { value: // These disabled props are handled by the state hook
    value , defaultValue: defaultValue , onChange: onChange , ...otherProps } = props;
    let state = $lFOSm$useColorFieldState(props);
    let inputRef = $lFOSm$useRef();
    let { labelProps: labelProps , inputProps: inputProps  } = $lFOSm$useColorField(otherProps, state, inputRef);
    return(/*#__PURE__*/ $lFOSm$react.createElement($lFOSm$TextFieldBase, {
        ...otherProps,
        ref: ref,
        inputRef: inputRef,
        labelProps: labelProps,
        inputProps: inputProps,
        inputClassName: $lFOSm$classNames((/*@__PURE__*/$parcel$interopDefault($8a73ebbccaee1bc7$exports)), 'react-spectrum-ColorField-input')
    }));
}
/**
 * ColorFields allow users to enter a color in #rrggbb hexadecimal format.
 */ const $7ae8fe4b054b31ae$export$b865d4358897bb17 = /*#__PURE__*/ $lFOSm$react.forwardRef($7ae8fe4b054b31ae$var$ColorField);




export {$d8362bcb01a786c8$export$f80663f808113381 as ColorWheel, $c04d747afdc3bdd8$export$44fd664bcca5b6fb as ColorSlider, $7ae8fe4b054b31ae$export$b865d4358897bb17 as ColorField};
//# sourceMappingURL=module.js.map
