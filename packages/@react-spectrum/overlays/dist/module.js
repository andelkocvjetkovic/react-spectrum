import "./main.css";
import {Provider as $kEfsU$Provider} from "@react-spectrum/provider";
import $kEfsU$react, {useState as $kEfsU$useState, useCallback as $kEfsU$useCallback, forwardRef as $kEfsU$forwardRef, useRef as $kEfsU$useRef, useEffect as $kEfsU$useEffect} from "react";
import $kEfsU$reactdom from "react-dom";
import $kEfsU$reacttransitiongroupTransition from "react-transition-group/Transition";
import {useDOMRef as $kEfsU$useDOMRef, useStyleProps as $kEfsU$useStyleProps, classNames as $kEfsU$classNames} from "@react-spectrum/utils";
import {mergeProps as $kEfsU$mergeProps, useLayoutEffect as $kEfsU$useLayoutEffect, useViewportSize as $kEfsU$useViewportSize} from "@react-aria/utils";
import {useOverlay as $kEfsU$useOverlay, useModal as $kEfsU$useModal, usePreventScroll as $kEfsU$usePreventScroll} from "@react-aria/overlays";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $722ef8ad27a036f6$exports = {};

$parcel$export($722ef8ad27a036f6$exports, "Overlay", () => $722ef8ad27a036f6$export$c6fdb837b070b4ff);
var $51487d6addcf4310$exports = {};

$parcel$export($51487d6addcf4310$exports, "OpenTransition", () => $51487d6addcf4310$export$b847a40ee92eff38);


const $51487d6addcf4310$var$OPEN_STATES = {
    entering: false,
    entered: true
};
function $51487d6addcf4310$export$b847a40ee92eff38(props) {
    return(/*#__PURE__*/ $kEfsU$react.createElement($kEfsU$reacttransitiongroupTransition, {
        timeout: {
            enter: 0,
            exit: 350
        },
        ...props
    }, (state)=>$kEfsU$react.Children.map(props.children, (child)=>child && /*#__PURE__*/ $kEfsU$react.cloneElement(child, {
                isOpen: !!$51487d6addcf4310$var$OPEN_STATES[state]
            })
        )
    ));
}





function $722ef8ad27a036f6$var$Overlay(props, ref) {
    let { children: children , isOpen: isOpen , container: container , onEnter: onEnter , onEntering: onEntering , onEntered: onEntered , onExit: onExit , onExiting: onExiting , onExited: onExited  } = props;
    let [exited, setExited] = $kEfsU$useState(!isOpen);
    let handleEntered = $kEfsU$useCallback(()=>{
        setExited(false);
        if (onEntered) onEntered();
    }, [
        onEntered
    ]);
    let handleExited = $kEfsU$useCallback(()=>{
        setExited(true);
        if (onExited) onExited();
    }, [
        onExited
    ]);
    // Don't un-render the overlay while it's transitioning out.
    let mountOverlay = isOpen || !exited;
    if (!mountOverlay) // Don't bother showing anything if we don't have to.
    return null;
    let contents = /*#__PURE__*/ $kEfsU$react.createElement($kEfsU$Provider, {
        ref: ref,
        UNSAFE_style: {
            background: 'transparent',
            isolation: 'isolate'
        }
    }, /*#__PURE__*/ $kEfsU$react.createElement($51487d6addcf4310$export$b847a40ee92eff38, {
        in: isOpen,
        appear: true,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleExited,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: handleEntered
    }, children));
    return(/*#__PURE__*/ $kEfsU$reactdom.createPortal(contents, container || document.body));
}
let $722ef8ad27a036f6$export$c6fdb837b070b4ff = /*#__PURE__*/ $kEfsU$react.forwardRef($722ef8ad27a036f6$var$Overlay);


var $44a3bd9147be6b21$exports = {};

$parcel$export($44a3bd9147be6b21$exports, "Popover", () => $44a3bd9147be6b21$export$5b6b19405a83ff9d);



var $e36d3c0f718f8119$exports = {};

$parcel$export($e36d3c0f718f8119$exports, "spectrum-Popover", () => $e36d3c0f718f8119$export$a62dc1b6ab23a7bb, (v) => $e36d3c0f718f8119$export$a62dc1b6ab23a7bb = v);
$parcel$export($e36d3c0f718f8119$exports, "react-spectrum-Popover", () => $e36d3c0f718f8119$export$884f6b5065bdc41a, (v) => $e36d3c0f718f8119$export$884f6b5065bdc41a = v);
$parcel$export($e36d3c0f718f8119$exports, "spectrum-Dialog-content", () => $e36d3c0f718f8119$export$cb8eccd0f3639238, (v) => $e36d3c0f718f8119$export$cb8eccd0f3639238 = v);
$parcel$export($e36d3c0f718f8119$exports, "spectrum-Modal-wrapper", () => $e36d3c0f718f8119$export$35bea187ff802494, (v) => $e36d3c0f718f8119$export$35bea187ff802494 = v);
$parcel$export($e36d3c0f718f8119$exports, "react-spectrum-Modal-wrapper", () => $e36d3c0f718f8119$export$e088717c213c31d7, (v) => $e36d3c0f718f8119$export$e088717c213c31d7 = v);
$parcel$export($e36d3c0f718f8119$exports, "spectrum-Modal", () => $e36d3c0f718f8119$export$4c0b1e44c3834c85, (v) => $e36d3c0f718f8119$export$4c0b1e44c3834c85 = v);
$parcel$export($e36d3c0f718f8119$exports, "react-spectrum-Modal", () => $e36d3c0f718f8119$export$f8edeb62d7fed8c1, (v) => $e36d3c0f718f8119$export$f8edeb62d7fed8c1 = v);
$parcel$export($e36d3c0f718f8119$exports, "spectrum-Tray", () => $e36d3c0f718f8119$export$ce0704cd084c4f0d, (v) => $e36d3c0f718f8119$export$ce0704cd084c4f0d = v);
$parcel$export($e36d3c0f718f8119$exports, "react-spectrum-Tray", () => $e36d3c0f718f8119$export$69dafa24343974dd, (v) => $e36d3c0f718f8119$export$69dafa24343974dd = v);
var $e36d3c0f718f8119$export$a62dc1b6ab23a7bb;
var $e36d3c0f718f8119$export$884f6b5065bdc41a;
var $e36d3c0f718f8119$export$cb8eccd0f3639238;
var $e36d3c0f718f8119$export$35bea187ff802494;
var $e36d3c0f718f8119$export$e088717c213c31d7;
var $e36d3c0f718f8119$export$4c0b1e44c3834c85;
var $e36d3c0f718f8119$export$f8edeb62d7fed8c1;
var $e36d3c0f718f8119$export$ce0704cd084c4f0d;
var $e36d3c0f718f8119$export$69dafa24343974dd;
$e36d3c0f718f8119$export$a62dc1b6ab23a7bb = "_spectrum-Popover_38efea";
$e36d3c0f718f8119$export$884f6b5065bdc41a = "_react-spectrum-Popover_38efea";
$e36d3c0f718f8119$export$cb8eccd0f3639238 = "_spectrum-Dialog-content_38efea";
$e36d3c0f718f8119$export$35bea187ff802494 = "_spectrum-Modal-wrapper_38efea";
$e36d3c0f718f8119$export$e088717c213c31d7 = "_react-spectrum-Modal-wrapper_38efea";
$e36d3c0f718f8119$export$4c0b1e44c3834c85 = "_spectrum-Modal_38efea";
$e36d3c0f718f8119$export$f8edeb62d7fed8c1 = "_react-spectrum-Modal_38efea";
$e36d3c0f718f8119$export$ce0704cd084c4f0d = "_spectrum-Tray_38efea";
$e36d3c0f718f8119$export$69dafa24343974dd = "_react-spectrum-Tray_38efea";



var $ee9fc8cf4121dd2d$exports = {};

$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover", () => $ee9fc8cf4121dd2d$export$a62dc1b6ab23a7bb, (v) => $ee9fc8cf4121dd2d$export$a62dc1b6ab23a7bb = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "is-open", () => $ee9fc8cf4121dd2d$export$a9781837241c946d, (v) => $ee9fc8cf4121dd2d$export$a9781837241c946d = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover--bottom", () => $ee9fc8cf4121dd2d$export$6a19b19b14780d4a, (v) => $ee9fc8cf4121dd2d$export$6a19b19b14780d4a = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover--top", () => $ee9fc8cf4121dd2d$export$f30becfb1df0cae4, (v) => $ee9fc8cf4121dd2d$export$f30becfb1df0cae4 = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover--right", () => $ee9fc8cf4121dd2d$export$5fc8b429396c9f58, (v) => $ee9fc8cf4121dd2d$export$5fc8b429396c9f58 = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover--left", () => $ee9fc8cf4121dd2d$export$79cc55906ac5b00, (v) => $ee9fc8cf4121dd2d$export$79cc55906ac5b00 = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover-tip", () => $ee9fc8cf4121dd2d$export$3100ec4dc1668df1, (v) => $ee9fc8cf4121dd2d$export$3100ec4dc1668df1 = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover-tip-triangle", () => $ee9fc8cf4121dd2d$export$ed733fa6cf19ab80, (v) => $ee9fc8cf4121dd2d$export$ed733fa6cf19ab80 = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover--dialog", () => $ee9fc8cf4121dd2d$export$cf634262e726cd19, (v) => $ee9fc8cf4121dd2d$export$cf634262e726cd19 = v);
$parcel$export($ee9fc8cf4121dd2d$exports, "spectrum-Popover--withTip", () => $ee9fc8cf4121dd2d$export$d8b16c5377728262, (v) => $ee9fc8cf4121dd2d$export$d8b16c5377728262 = v);
var $ee9fc8cf4121dd2d$export$a62dc1b6ab23a7bb;
var $ee9fc8cf4121dd2d$export$a9781837241c946d;
var $ee9fc8cf4121dd2d$export$6a19b19b14780d4a;
var $ee9fc8cf4121dd2d$export$f30becfb1df0cae4;
var $ee9fc8cf4121dd2d$export$5fc8b429396c9f58;
var $ee9fc8cf4121dd2d$export$79cc55906ac5b00;
var $ee9fc8cf4121dd2d$export$3100ec4dc1668df1;
var $ee9fc8cf4121dd2d$export$ed733fa6cf19ab80;
var $ee9fc8cf4121dd2d$export$cf634262e726cd19;
var $ee9fc8cf4121dd2d$export$d8b16c5377728262;
$ee9fc8cf4121dd2d$export$a62dc1b6ab23a7bb = "_spectrum-Popover_6115b8";
$ee9fc8cf4121dd2d$export$a9781837241c946d = "_is-open_6115b8";
$ee9fc8cf4121dd2d$export$6a19b19b14780d4a = "_spectrum-Popover--bottom_6115b8";
$ee9fc8cf4121dd2d$export$f30becfb1df0cae4 = "_spectrum-Popover--top_6115b8";
$ee9fc8cf4121dd2d$export$5fc8b429396c9f58 = "_spectrum-Popover--right_6115b8";
$ee9fc8cf4121dd2d$export$79cc55906ac5b00 = "_spectrum-Popover--left_6115b8";
$ee9fc8cf4121dd2d$export$3100ec4dc1668df1 = "_spectrum-Popover-tip_6115b8";
$ee9fc8cf4121dd2d$export$ed733fa6cf19ab80 = "_spectrum-Popover-tip-triangle_6115b8";
$ee9fc8cf4121dd2d$export$cf634262e726cd19 = "_spectrum-Popover--dialog_6115b8";
$ee9fc8cf4121dd2d$export$d8b16c5377728262 = "_spectrum-Popover--withTip_6115b8";



/**
 * Arrow placement can be done pointing right or down because those paths start at 0, x or y. Because the
 * other two don't, they start at a fractional pixel value, it introduces rounding differences between browsers and
 * between display types (retina with subpixels vs not retina). By flipping them with CSS we can ensure that
 * the path always starts at 0 so that it perfectly overlaps the popover's border.
 * See bottom of file for more explanation.
 */ let $44a3bd9147be6b21$var$arrowPlacement = {
    left: 'right',
    right: 'right',
    top: 'bottom',
    bottom: 'bottom'
};
function $44a3bd9147be6b21$var$Popover(props, ref) {
    let { children: children , placement: placement , arrowProps: arrowProps , onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , hideArrow: hideArrow , isKeyboardDismissDisabled: isKeyboardDismissDisabled , isNonModal: isNonModal , isDismissable: isDismissable = true , ...otherProps } = props;
    let domRef = $kEfsU$useDOMRef(ref);
    let { styleProps: styleProps  } = $kEfsU$useStyleProps(props);
    return(/*#__PURE__*/ $kEfsU$react.createElement($722ef8ad27a036f6$export$c6fdb837b070b4ff, otherProps, /*#__PURE__*/ $kEfsU$react.createElement($44a3bd9147be6b21$var$PopoverWrapper, {
        ...styleProps,
        ref: domRef,
        placement: placement,
        arrowProps: arrowProps,
        onClose: onClose,
        shouldCloseOnBlur: shouldCloseOnBlur,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        hideArrow: hideArrow,
        isNonModal: isNonModal,
        isDismissable: isDismissable
    }, children)));
}
const $44a3bd9147be6b21$var$PopoverWrapper = /*#__PURE__*/ $kEfsU$forwardRef((props, ref)=>{
    let { children: children , placement: placement = 'bottom' , arrowProps: arrowProps , isOpen: isOpen , hideArrow: hideArrow , shouldCloseOnBlur: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldCloseOnBlur , isKeyboardDismissDisabled: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isKeyboardDismissDisabled , isNonModal: isNonModal , isDismissable: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isDismissable , ...otherProps } = props;
    let { overlayProps: overlayProps  } = $kEfsU$useOverlay({
        ...props,
        isDismissable: isDismissable && isOpen
    }, ref);
    let { modalProps: modalProps  } = $kEfsU$useModal({
        isDisabled: isNonModal
    });
    return(/*#__PURE__*/ $kEfsU$react.createElement("div", {
        ...$kEfsU$mergeProps(otherProps, overlayProps, modalProps),
        ref: ref,
        className: $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($ee9fc8cf4121dd2d$exports)), 'spectrum-Popover', `spectrum-Popover--${placement}`, {
            'spectrum-Popover--withTip': !hideArrow,
            'is-open': isOpen
        }, $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($e36d3c0f718f8119$exports)), 'spectrum-Popover', 'react-spectrum-Popover'), otherProps.className),
        role: "presentation",
        "data-testid": "popover"
    }, children, hideArrow ? null : /*#__PURE__*/ $kEfsU$react.createElement($44a3bd9147be6b21$var$Arrow, {
        arrowProps: arrowProps,
        direction: $44a3bd9147be6b21$var$arrowPlacement[placement]
    })));
});
let $44a3bd9147be6b21$var$ROOT_2 = Math.sqrt(2);
function $44a3bd9147be6b21$var$Arrow(props) {
    let [size, setSize] = $kEfsU$useState(20);
    let [borderWidth, setBorderWidth] = $kEfsU$useState(1);
    let ref = $kEfsU$useRef();
    // get the css value for the tip size and divide it by 2 for this arrow implementation
    $kEfsU$useLayoutEffect(()=>{
        if (ref.current) {
            let spectrumTipWidth = window.getComputedStyle(ref.current).getPropertyValue('--spectrum-popover-tip-size');
            if (spectrumTipWidth !== '') setSize(parseInt(spectrumTipWidth, 10) / 2);
            let spectrumBorderWidth = window.getComputedStyle(ref.current).getPropertyValue('--spectrum-popover-tip-borderWidth');
            if (spectrumBorderWidth !== '') setBorderWidth(parseInt(spectrumBorderWidth, 10));
        }
    }, [
        ref
    ]);
    let landscape = props.direction === 'top' || props.direction === 'bottom';
    let mirror = props.direction === 'left' || props.direction === 'top';
    let borderDiagonal = borderWidth * $44a3bd9147be6b21$var$ROOT_2;
    let halfBorderDiagonal = borderDiagonal / 2;
    let secondary = 2 * size + 2 * borderDiagonal;
    let primary = size + borderDiagonal;
    let primaryStart = mirror ? primary : 0;
    let primaryEnd = mirror ? halfBorderDiagonal : primary - halfBorderDiagonal;
    let secondaryStart = halfBorderDiagonal;
    let secondaryMiddle = secondary / 2;
    let secondaryEnd = secondary - halfBorderDiagonal;
    let pathData = landscape ? [
        'M',
        secondaryStart,
        primaryStart,
        'L',
        secondaryMiddle,
        primaryEnd,
        'L',
        secondaryEnd,
        primaryStart
    ] : [
        'M',
        primaryStart,
        secondaryStart,
        'L',
        primaryEnd,
        secondaryMiddle,
        'L',
        primaryStart,
        secondaryEnd
    ];
    let arrowProps = props.arrowProps;
    /* use ceil because the svg needs to always accomodate the path inside it */ return(/*#__PURE__*/ $kEfsU$react.createElement("svg", {
        xmlns: "http://www.w3.org/svg/2000",
        width: Math.ceil(landscape ? secondary : primary),
        height: Math.ceil(landscape ? primary : secondary),
        style: props.style,
        className: $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($ee9fc8cf4121dd2d$exports)), 'spectrum-Popover-tip'),
        ref: ref,
        ...arrowProps
    }, /*#__PURE__*/ $kEfsU$react.createElement("path", {
        className: $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($ee9fc8cf4121dd2d$exports)), 'spectrum-Popover-tip-triangle'),
        d: pathData.join(' ')
    })));
}
let $44a3bd9147be6b21$export$5b6b19405a83ff9d = /*#__PURE__*/ $kEfsU$forwardRef($44a3bd9147be6b21$var$Popover);


var $c26adbebbb3ab6c9$exports = {};

$parcel$export($c26adbebbb3ab6c9$exports, "Modal", () => $c26adbebbb3ab6c9$export$2b77a92f1a5ad772);


var $db8832fad08595ab$exports = {};

$parcel$export($db8832fad08595ab$exports, "spectrum-Modal", () => $db8832fad08595ab$export$4c0b1e44c3834c85, (v) => $db8832fad08595ab$export$4c0b1e44c3834c85 = v);
$parcel$export($db8832fad08595ab$exports, "is-open", () => $db8832fad08595ab$export$a9781837241c946d, (v) => $db8832fad08595ab$export$a9781837241c946d = v);
$parcel$export($db8832fad08595ab$exports, "spectrum-Modal-wrapper", () => $db8832fad08595ab$export$35bea187ff802494, (v) => $db8832fad08595ab$export$35bea187ff802494 = v);
$parcel$export($db8832fad08595ab$exports, "spectrum-Modal--responsive", () => $db8832fad08595ab$export$fd1e42aa8ea02a1, (v) => $db8832fad08595ab$export$fd1e42aa8ea02a1 = v);
$parcel$export($db8832fad08595ab$exports, "spectrum-Modal--fullscreen", () => $db8832fad08595ab$export$a4423fa77727431a, (v) => $db8832fad08595ab$export$a4423fa77727431a = v);
$parcel$export($db8832fad08595ab$exports, "spectrum-Modal--fullscreenTakeover", () => $db8832fad08595ab$export$175dd699720b5fb7, (v) => $db8832fad08595ab$export$175dd699720b5fb7 = v);
var $db8832fad08595ab$export$4c0b1e44c3834c85;
var $db8832fad08595ab$export$a9781837241c946d;
var $db8832fad08595ab$export$35bea187ff802494;
var $db8832fad08595ab$export$fd1e42aa8ea02a1;
var $db8832fad08595ab$export$a4423fa77727431a;
var $db8832fad08595ab$export$175dd699720b5fb7;
$db8832fad08595ab$export$4c0b1e44c3834c85 = "_spectrum-Modal_f81956";
$db8832fad08595ab$export$a9781837241c946d = "_is-open_f81956";
$db8832fad08595ab$export$35bea187ff802494 = "_spectrum-Modal-wrapper_f81956";
$db8832fad08595ab$export$fd1e42aa8ea02a1 = "_spectrum-Modal--responsive_f81956";
$db8832fad08595ab$export$a4423fa77727431a = "_spectrum-Modal--fullscreen_f81956";
$db8832fad08595ab$export$175dd699720b5fb7 = "_spectrum-Modal--fullscreenTakeover_f81956";







var $25f9cb21e9988c81$exports = {};

$parcel$export($25f9cb21e9988c81$exports, "spectrum-Underlay", () => $25f9cb21e9988c81$export$74470528f463af97, (v) => $25f9cb21e9988c81$export$74470528f463af97 = v);
$parcel$export($25f9cb21e9988c81$exports, "is-open", () => $25f9cb21e9988c81$export$a9781837241c946d, (v) => $25f9cb21e9988c81$export$a9781837241c946d = v);
var $25f9cb21e9988c81$export$74470528f463af97;
var $25f9cb21e9988c81$export$a9781837241c946d;
$25f9cb21e9988c81$export$74470528f463af97 = "_spectrum-Underlay_eb7615";
$25f9cb21e9988c81$export$a9781837241c946d = "_is-open_eb7615";


function $434f4205d8b345b6$export$f360afc887607b02({ isOpen: isOpen  }) {
    return(/*#__PURE__*/ $kEfsU$react.createElement("div", {
        className: $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($25f9cb21e9988c81$exports)), 'spectrum-Underlay', {
            'is-open': isOpen
        })
    }));
}



function $c26adbebbb3ab6c9$var$Modal(props, ref) {
    let { children: children , onClose: onClose , type: type , ...otherProps } = props;
    let domRef = $kEfsU$useDOMRef(ref);
    let { styleProps: styleProps  } = $kEfsU$useStyleProps(props);
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = $kEfsU$useOverlay(props, domRef);
    return(/*#__PURE__*/ $kEfsU$react.createElement($722ef8ad27a036f6$export$c6fdb837b070b4ff, otherProps, /*#__PURE__*/ $kEfsU$react.createElement($434f4205d8b345b6$export$f360afc887607b02, underlayProps), /*#__PURE__*/ $kEfsU$react.createElement($c26adbebbb3ab6c9$var$ModalWrapper, {
        ...styleProps,
        onClose: onClose,
        type: type,
        ref: domRef,
        overlayProps: overlayProps
    }, children)));
}
let $c26adbebbb3ab6c9$var$typeMap = {
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
let $c26adbebbb3ab6c9$var$ModalWrapper = /*#__PURE__*/ $kEfsU$forwardRef(function(props, ref) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children , isOpen: isOpen , type: type , overlayProps: overlayProps , ...otherProps } = props;
    let typeVariant = $c26adbebbb3ab6c9$var$typeMap[type];
    $kEfsU$usePreventScroll();
    let { modalProps: modalProps  } = $kEfsU$useModal();
    let wrapperClassName = $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($db8832fad08595ab$exports)), 'spectrum-Modal-wrapper', $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($e36d3c0f718f8119$exports)), 'spectrum-Modal-wrapper', 'react-spectrum-Modal-wrapper'));
    let modalClassName = $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($db8832fad08595ab$exports)), 'spectrum-Modal', {
        'is-open': isOpen
    }, $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($e36d3c0f718f8119$exports)), 'spectrum-Modal', 'react-spectrum-Modal'), {
        [`spectrum-Modal--${typeVariant}`]: typeVariant
    }, otherProps.className);
    let viewport = $kEfsU$useViewportSize();
    let style = {
        '--spectrum-visual-viewport-height': viewport.height + 'px'
    };
    return(/*#__PURE__*/ $kEfsU$react.createElement("div", {
        className: wrapperClassName,
        style: style
    }, /*#__PURE__*/ $kEfsU$react.createElement("div", {
        ...$kEfsU$mergeProps(otherProps, overlayProps, modalProps),
        ref: ref,
        className: modalClassName,
        "data-testid": "modal"
    }, children)));
});
let $c26adbebbb3ab6c9$export$2b77a92f1a5ad772 = /*#__PURE__*/ $kEfsU$forwardRef($c26adbebbb3ab6c9$var$Modal);


var $710906424248d2ca$exports = {};

$parcel$export($710906424248d2ca$exports, "Tray", () => $710906424248d2ca$export$4589ed81930b555c);





var $686e042e16386b4b$exports = {};

$parcel$export($686e042e16386b4b$exports, "spectrum-Tray", () => $686e042e16386b4b$export$ce0704cd084c4f0d, (v) => $686e042e16386b4b$export$ce0704cd084c4f0d = v);
$parcel$export($686e042e16386b4b$exports, "is-open", () => $686e042e16386b4b$export$a9781837241c946d, (v) => $686e042e16386b4b$export$a9781837241c946d = v);
$parcel$export($686e042e16386b4b$exports, "spectrum-Tray-wrapper", () => $686e042e16386b4b$export$641b9b70c23dce66, (v) => $686e042e16386b4b$export$641b9b70c23dce66 = v);
$parcel$export($686e042e16386b4b$exports, "spectrum-Tray--fixedHeight", () => $686e042e16386b4b$export$79bfb05e59a300b, (v) => $686e042e16386b4b$export$79bfb05e59a300b = v);
var $686e042e16386b4b$export$ce0704cd084c4f0d;
var $686e042e16386b4b$export$a9781837241c946d;
var $686e042e16386b4b$export$641b9b70c23dce66;
var $686e042e16386b4b$export$79bfb05e59a300b;
$686e042e16386b4b$export$ce0704cd084c4f0d = "_spectrum-Tray_23bf66";
$686e042e16386b4b$export$a9781837241c946d = "_is-open_23bf66";
$686e042e16386b4b$export$641b9b70c23dce66 = "_spectrum-Tray-wrapper_23bf66";
$686e042e16386b4b$export$79bfb05e59a300b = "_spectrum-Tray--fixedHeight_23bf66";




function $710906424248d2ca$var$Tray(props, ref) {
    let { children: children , onClose: onClose , isFixedHeight: isFixedHeight , isNonModal: isNonModal , ...otherProps } = props;
    let domRef = $kEfsU$useDOMRef(ref);
    let { styleProps: styleProps  } = $kEfsU$useStyleProps(props);
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = $kEfsU$useOverlay({
        ...props,
        isDismissable: true
    }, domRef);
    return(/*#__PURE__*/ $kEfsU$react.createElement($722ef8ad27a036f6$export$c6fdb837b070b4ff, otherProps, /*#__PURE__*/ $kEfsU$react.createElement($434f4205d8b345b6$export$f360afc887607b02, underlayProps), /*#__PURE__*/ $kEfsU$react.createElement($710906424248d2ca$var$TrayWrapper, {
        ...styleProps,
        onClose: onClose,
        ref: domRef,
        overlayProps: overlayProps,
        isFixedHeight: isFixedHeight,
        isNonModal: isNonModal
    }, children)));
}
let $710906424248d2ca$var$TrayWrapper = /*#__PURE__*/ $kEfsU$forwardRef(function(props, ref) {
    let { children: children , isOpen: isOpen , isFixedHeight: isFixedHeight , isNonModal: isNonModal , overlayProps: overlayProps , ...otherProps } = props;
    $kEfsU$usePreventScroll();
    let { modalProps: modalProps  } = $kEfsU$useModal({
        isDisabled: isNonModal
    });
    // We need to measure the window's height in JS rather than using percentages in CSS
    // so that contents (e.g. menu) can inherit the max-height properly. Using percentages
    // does not work properly because there is nothing to base the percentage on.
    // We cannot use vh units because mobile browsers adjust the window height dynamically
    // when the address bar/bottom toolbars show and hide on scroll and vh units are fixed.
    // Also, the visual viewport is smaller than the layout viewport when the virtual keyboard
    // is up, so use the VisualViewport API to ensure the tray is displayed above the keyboard.
    let viewport = $kEfsU$useViewportSize();
    let [height, setHeight] = $kEfsU$useState(viewport.height);
    let timeoutRef = $kEfsU$useRef();
    $kEfsU$useEffect(()=>{
        clearTimeout(timeoutRef.current);
        // When the height is decreasing, and the keyboard is visible
        // (visual viewport smaller than layout viewport), delay setting
        // the new max height until after the animation is complete
        // so that there isn't an empty space under the tray briefly.
        if (viewport.height < height && viewport.height < window.innerHeight) timeoutRef.current = setTimeout(()=>{
            setHeight(viewport.height);
        }, 500);
        else setHeight(viewport.height);
    }, [
        height,
        viewport.height
    ]);
    let wrapperStyle = {
        '--spectrum-visual-viewport-height': height + 'px'
    };
    let wrapperClassName = $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($686e042e16386b4b$exports)), 'spectrum-Tray-wrapper');
    let className = $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($686e042e16386b4b$exports)), 'spectrum-Tray', {
        'is-open': isOpen,
        'spectrum-Tray--fixedHeight': isFixedHeight
    }, $kEfsU$classNames((/*@__PURE__*/$parcel$interopDefault($e36d3c0f718f8119$exports)), 'spectrum-Tray', 'react-spectrum-Tray'), otherProps.className);
    let domProps = $kEfsU$mergeProps(otherProps, overlayProps);
    return(/*#__PURE__*/ $kEfsU$react.createElement("div", {
        className: wrapperClassName,
        style: wrapperStyle
    }, /*#__PURE__*/ $kEfsU$react.createElement("div", {
        ...domProps,
        ...modalProps,
        className: className,
        ref: ref,
        "data-testid": "tray"
    }, children)));
});
let $710906424248d2ca$export$4589ed81930b555c = /*#__PURE__*/ $kEfsU$forwardRef($710906424248d2ca$var$Tray);





export {$722ef8ad27a036f6$export$c6fdb837b070b4ff as Overlay, $44a3bd9147be6b21$export$5b6b19405a83ff9d as Popover, $c26adbebbb3ab6c9$export$2b77a92f1a5ad772 as Modal, $710906424248d2ca$export$4589ed81930b555c as Tray, $51487d6addcf4310$export$b847a40ee92eff38 as OpenTransition};
//# sourceMappingURL=module.js.map
