require("./main.css");
var $8cRSW$reactspectrumprovider = require("@react-spectrum/provider");
var $8cRSW$react = require("react");
var $8cRSW$reactdom = require("react-dom");
var $8cRSW$reacttransitiongroupTransition = require("react-transition-group/Transition");
var $8cRSW$reactspectrumutils = require("@react-spectrum/utils");
var $8cRSW$reactariautils = require("@react-aria/utils");
var $8cRSW$reactariaoverlays = require("@react-aria/overlays");

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
var $b540788c12974c8e$exports = {};

$parcel$export($b540788c12974c8e$exports, "Overlay", () => $b540788c12974c8e$export$c6fdb837b070b4ff);
var $fe33865652297ea4$exports = {};

$parcel$export($fe33865652297ea4$exports, "OpenTransition", () => $fe33865652297ea4$export$b847a40ee92eff38);


const $fe33865652297ea4$var$OPEN_STATES = {
    entering: false,
    entered: true
};
function $fe33865652297ea4$export$b847a40ee92eff38(props) {
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement(($parcel$interopDefault($8cRSW$reacttransitiongroupTransition)), {
        timeout: {
            enter: 0,
            exit: 350
        },
        ...props
    }, (state)=>($parcel$interopDefault($8cRSW$react)).Children.map(props.children, (child)=>child && /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).cloneElement(child, {
                isOpen: !!$fe33865652297ea4$var$OPEN_STATES[state]
            })
        )
    ));
}





function $b540788c12974c8e$var$Overlay(props, ref) {
    let { children: children , isOpen: isOpen , container: container , onEnter: onEnter , onEntering: onEntering , onEntered: onEntered , onExit: onExit , onExiting: onExiting , onExited: onExited  } = props;
    let [exited, setExited] = $8cRSW$react.useState(!isOpen);
    let handleEntered = $8cRSW$react.useCallback(()=>{
        setExited(false);
        if (onEntered) onEntered();
    }, [
        onEntered
    ]);
    let handleExited = $8cRSW$react.useCallback(()=>{
        setExited(true);
        if (onExited) onExited();
    }, [
        onExited
    ]);
    // Don't un-render the overlay while it's transitioning out.
    let mountOverlay = isOpen || !exited;
    if (!mountOverlay) // Don't bother showing anything if we don't have to.
    return null;
    let contents = /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($8cRSW$reactspectrumprovider.Provider, {
        ref: ref,
        UNSAFE_style: {
            background: 'transparent',
            isolation: 'isolate'
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($fe33865652297ea4$export$b847a40ee92eff38, {
        in: isOpen,
        appear: true,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleExited,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: handleEntered
    }, children));
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$reactdom)).createPortal(contents, container || document.body));
}
let $b540788c12974c8e$export$c6fdb837b070b4ff = /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).forwardRef($b540788c12974c8e$var$Overlay);


var $64fb880c78fcbb16$exports = {};

$parcel$export($64fb880c78fcbb16$exports, "Popover", () => $64fb880c78fcbb16$export$5b6b19405a83ff9d);



var $a953be4953d2cab8$exports = {};

$parcel$export($a953be4953d2cab8$exports, "spectrum-Popover", () => $a953be4953d2cab8$export$a62dc1b6ab23a7bb, (v) => $a953be4953d2cab8$export$a62dc1b6ab23a7bb = v);
$parcel$export($a953be4953d2cab8$exports, "react-spectrum-Popover", () => $a953be4953d2cab8$export$884f6b5065bdc41a, (v) => $a953be4953d2cab8$export$884f6b5065bdc41a = v);
$parcel$export($a953be4953d2cab8$exports, "spectrum-Dialog-content", () => $a953be4953d2cab8$export$cb8eccd0f3639238, (v) => $a953be4953d2cab8$export$cb8eccd0f3639238 = v);
$parcel$export($a953be4953d2cab8$exports, "spectrum-Modal-wrapper", () => $a953be4953d2cab8$export$35bea187ff802494, (v) => $a953be4953d2cab8$export$35bea187ff802494 = v);
$parcel$export($a953be4953d2cab8$exports, "react-spectrum-Modal-wrapper", () => $a953be4953d2cab8$export$e088717c213c31d7, (v) => $a953be4953d2cab8$export$e088717c213c31d7 = v);
$parcel$export($a953be4953d2cab8$exports, "spectrum-Modal", () => $a953be4953d2cab8$export$4c0b1e44c3834c85, (v) => $a953be4953d2cab8$export$4c0b1e44c3834c85 = v);
$parcel$export($a953be4953d2cab8$exports, "react-spectrum-Modal", () => $a953be4953d2cab8$export$f8edeb62d7fed8c1, (v) => $a953be4953d2cab8$export$f8edeb62d7fed8c1 = v);
$parcel$export($a953be4953d2cab8$exports, "spectrum-Tray", () => $a953be4953d2cab8$export$ce0704cd084c4f0d, (v) => $a953be4953d2cab8$export$ce0704cd084c4f0d = v);
$parcel$export($a953be4953d2cab8$exports, "react-spectrum-Tray", () => $a953be4953d2cab8$export$69dafa24343974dd, (v) => $a953be4953d2cab8$export$69dafa24343974dd = v);
var $a953be4953d2cab8$export$a62dc1b6ab23a7bb;
var $a953be4953d2cab8$export$884f6b5065bdc41a;
var $a953be4953d2cab8$export$cb8eccd0f3639238;
var $a953be4953d2cab8$export$35bea187ff802494;
var $a953be4953d2cab8$export$e088717c213c31d7;
var $a953be4953d2cab8$export$4c0b1e44c3834c85;
var $a953be4953d2cab8$export$f8edeb62d7fed8c1;
var $a953be4953d2cab8$export$ce0704cd084c4f0d;
var $a953be4953d2cab8$export$69dafa24343974dd;
$a953be4953d2cab8$export$a62dc1b6ab23a7bb = "_spectrum-Popover_38efea";
$a953be4953d2cab8$export$884f6b5065bdc41a = "_react-spectrum-Popover_38efea";
$a953be4953d2cab8$export$cb8eccd0f3639238 = "_spectrum-Dialog-content_38efea";
$a953be4953d2cab8$export$35bea187ff802494 = "_spectrum-Modal-wrapper_38efea";
$a953be4953d2cab8$export$e088717c213c31d7 = "_react-spectrum-Modal-wrapper_38efea";
$a953be4953d2cab8$export$4c0b1e44c3834c85 = "_spectrum-Modal_38efea";
$a953be4953d2cab8$export$f8edeb62d7fed8c1 = "_react-spectrum-Modal_38efea";
$a953be4953d2cab8$export$ce0704cd084c4f0d = "_spectrum-Tray_38efea";
$a953be4953d2cab8$export$69dafa24343974dd = "_react-spectrum-Tray_38efea";



var $48cb872f5de2827e$exports = {};

$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover", () => $48cb872f5de2827e$export$a62dc1b6ab23a7bb, (v) => $48cb872f5de2827e$export$a62dc1b6ab23a7bb = v);
$parcel$export($48cb872f5de2827e$exports, "is-open", () => $48cb872f5de2827e$export$a9781837241c946d, (v) => $48cb872f5de2827e$export$a9781837241c946d = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover--bottom", () => $48cb872f5de2827e$export$6a19b19b14780d4a, (v) => $48cb872f5de2827e$export$6a19b19b14780d4a = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover--top", () => $48cb872f5de2827e$export$f30becfb1df0cae4, (v) => $48cb872f5de2827e$export$f30becfb1df0cae4 = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover--right", () => $48cb872f5de2827e$export$5fc8b429396c9f58, (v) => $48cb872f5de2827e$export$5fc8b429396c9f58 = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover--left", () => $48cb872f5de2827e$export$79cc55906ac5b00, (v) => $48cb872f5de2827e$export$79cc55906ac5b00 = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover-tip", () => $48cb872f5de2827e$export$3100ec4dc1668df1, (v) => $48cb872f5de2827e$export$3100ec4dc1668df1 = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover-tip-triangle", () => $48cb872f5de2827e$export$ed733fa6cf19ab80, (v) => $48cb872f5de2827e$export$ed733fa6cf19ab80 = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover--dialog", () => $48cb872f5de2827e$export$cf634262e726cd19, (v) => $48cb872f5de2827e$export$cf634262e726cd19 = v);
$parcel$export($48cb872f5de2827e$exports, "spectrum-Popover--withTip", () => $48cb872f5de2827e$export$d8b16c5377728262, (v) => $48cb872f5de2827e$export$d8b16c5377728262 = v);
var $48cb872f5de2827e$export$a62dc1b6ab23a7bb;
var $48cb872f5de2827e$export$a9781837241c946d;
var $48cb872f5de2827e$export$6a19b19b14780d4a;
var $48cb872f5de2827e$export$f30becfb1df0cae4;
var $48cb872f5de2827e$export$5fc8b429396c9f58;
var $48cb872f5de2827e$export$79cc55906ac5b00;
var $48cb872f5de2827e$export$3100ec4dc1668df1;
var $48cb872f5de2827e$export$ed733fa6cf19ab80;
var $48cb872f5de2827e$export$cf634262e726cd19;
var $48cb872f5de2827e$export$d8b16c5377728262;
$48cb872f5de2827e$export$a62dc1b6ab23a7bb = "_spectrum-Popover_6115b8";
$48cb872f5de2827e$export$a9781837241c946d = "_is-open_6115b8";
$48cb872f5de2827e$export$6a19b19b14780d4a = "_spectrum-Popover--bottom_6115b8";
$48cb872f5de2827e$export$f30becfb1df0cae4 = "_spectrum-Popover--top_6115b8";
$48cb872f5de2827e$export$5fc8b429396c9f58 = "_spectrum-Popover--right_6115b8";
$48cb872f5de2827e$export$79cc55906ac5b00 = "_spectrum-Popover--left_6115b8";
$48cb872f5de2827e$export$3100ec4dc1668df1 = "_spectrum-Popover-tip_6115b8";
$48cb872f5de2827e$export$ed733fa6cf19ab80 = "_spectrum-Popover-tip-triangle_6115b8";
$48cb872f5de2827e$export$cf634262e726cd19 = "_spectrum-Popover--dialog_6115b8";
$48cb872f5de2827e$export$d8b16c5377728262 = "_spectrum-Popover--withTip_6115b8";



/**
 * Arrow placement can be done pointing right or down because those paths start at 0, x or y. Because the
 * other two don't, they start at a fractional pixel value, it introduces rounding differences between browsers and
 * between display types (retina with subpixels vs not retina). By flipping them with CSS we can ensure that
 * the path always starts at 0 so that it perfectly overlaps the popover's border.
 * See bottom of file for more explanation.
 */ let $64fb880c78fcbb16$var$arrowPlacement = {
    left: 'right',
    right: 'right',
    top: 'bottom',
    bottom: 'bottom'
};
function $64fb880c78fcbb16$var$Popover(props, ref) {
    let { children: children , placement: placement , arrowProps: arrowProps , onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , hideArrow: hideArrow , isKeyboardDismissDisabled: isKeyboardDismissDisabled , isNonModal: isNonModal , isDismissable: isDismissable = true , ...otherProps } = props;
    let domRef = $8cRSW$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $8cRSW$reactspectrumutils.useStyleProps(props);
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($b540788c12974c8e$export$c6fdb837b070b4ff, otherProps, /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($64fb880c78fcbb16$var$PopoverWrapper, {
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
const $64fb880c78fcbb16$var$PopoverWrapper = /*#__PURE__*/ $8cRSW$react.forwardRef((props, ref)=>{
    let { children: children , placement: placement = 'bottom' , arrowProps: arrowProps , isOpen: isOpen , hideArrow: hideArrow , shouldCloseOnBlur: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldCloseOnBlur , isKeyboardDismissDisabled: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isKeyboardDismissDisabled , isNonModal: isNonModal , isDismissable: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isDismissable , ...otherProps } = props;
    let { overlayProps: overlayProps  } = $8cRSW$reactariaoverlays.useOverlay({
        ...props,
        isDismissable: isDismissable && isOpen
    }, ref);
    let { modalProps: modalProps  } = $8cRSW$reactariaoverlays.useModal({
        isDisabled: isNonModal
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("div", {
        ...$8cRSW$reactariautils.mergeProps(otherProps, overlayProps, modalProps),
        ref: ref,
        className: $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($48cb872f5de2827e$exports)), 'spectrum-Popover', `spectrum-Popover--${placement}`, {
            'spectrum-Popover--withTip': !hideArrow,
            'is-open': isOpen
        }, $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($a953be4953d2cab8$exports)), 'spectrum-Popover', 'react-spectrum-Popover'), otherProps.className),
        role: "presentation",
        "data-testid": "popover"
    }, children, hideArrow ? null : /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($64fb880c78fcbb16$var$Arrow, {
        arrowProps: arrowProps,
        direction: $64fb880c78fcbb16$var$arrowPlacement[placement]
    })));
});
let $64fb880c78fcbb16$var$ROOT_2 = Math.sqrt(2);
function $64fb880c78fcbb16$var$Arrow(props) {
    let [size, setSize] = $8cRSW$react.useState(20);
    let [borderWidth, setBorderWidth] = $8cRSW$react.useState(1);
    let ref = $8cRSW$react.useRef();
    // get the css value for the tip size and divide it by 2 for this arrow implementation
    $8cRSW$reactariautils.useLayoutEffect(()=>{
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
    let borderDiagonal = borderWidth * $64fb880c78fcbb16$var$ROOT_2;
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
    /* use ceil because the svg needs to always accomodate the path inside it */ return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("svg", {
        xmlns: "http://www.w3.org/svg/2000",
        width: Math.ceil(landscape ? secondary : primary),
        height: Math.ceil(landscape ? primary : secondary),
        style: props.style,
        className: $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($48cb872f5de2827e$exports)), 'spectrum-Popover-tip'),
        ref: ref,
        ...arrowProps
    }, /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("path", {
        className: $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($48cb872f5de2827e$exports)), 'spectrum-Popover-tip-triangle'),
        d: pathData.join(' ')
    })));
}
let $64fb880c78fcbb16$export$5b6b19405a83ff9d = /*#__PURE__*/ $8cRSW$react.forwardRef($64fb880c78fcbb16$var$Popover);


var $828a6d104de5d23f$exports = {};

$parcel$export($828a6d104de5d23f$exports, "Modal", () => $828a6d104de5d23f$export$2b77a92f1a5ad772);


var $0c5ac1a2f93ce6a5$exports = {};

$parcel$export($0c5ac1a2f93ce6a5$exports, "spectrum-Modal", () => $0c5ac1a2f93ce6a5$export$4c0b1e44c3834c85, (v) => $0c5ac1a2f93ce6a5$export$4c0b1e44c3834c85 = v);
$parcel$export($0c5ac1a2f93ce6a5$exports, "is-open", () => $0c5ac1a2f93ce6a5$export$a9781837241c946d, (v) => $0c5ac1a2f93ce6a5$export$a9781837241c946d = v);
$parcel$export($0c5ac1a2f93ce6a5$exports, "spectrum-Modal-wrapper", () => $0c5ac1a2f93ce6a5$export$35bea187ff802494, (v) => $0c5ac1a2f93ce6a5$export$35bea187ff802494 = v);
$parcel$export($0c5ac1a2f93ce6a5$exports, "spectrum-Modal--responsive", () => $0c5ac1a2f93ce6a5$export$fd1e42aa8ea02a1, (v) => $0c5ac1a2f93ce6a5$export$fd1e42aa8ea02a1 = v);
$parcel$export($0c5ac1a2f93ce6a5$exports, "spectrum-Modal--fullscreen", () => $0c5ac1a2f93ce6a5$export$a4423fa77727431a, (v) => $0c5ac1a2f93ce6a5$export$a4423fa77727431a = v);
$parcel$export($0c5ac1a2f93ce6a5$exports, "spectrum-Modal--fullscreenTakeover", () => $0c5ac1a2f93ce6a5$export$175dd699720b5fb7, (v) => $0c5ac1a2f93ce6a5$export$175dd699720b5fb7 = v);
var $0c5ac1a2f93ce6a5$export$4c0b1e44c3834c85;
var $0c5ac1a2f93ce6a5$export$a9781837241c946d;
var $0c5ac1a2f93ce6a5$export$35bea187ff802494;
var $0c5ac1a2f93ce6a5$export$fd1e42aa8ea02a1;
var $0c5ac1a2f93ce6a5$export$a4423fa77727431a;
var $0c5ac1a2f93ce6a5$export$175dd699720b5fb7;
$0c5ac1a2f93ce6a5$export$4c0b1e44c3834c85 = "_spectrum-Modal_f81956";
$0c5ac1a2f93ce6a5$export$a9781837241c946d = "_is-open_f81956";
$0c5ac1a2f93ce6a5$export$35bea187ff802494 = "_spectrum-Modal-wrapper_f81956";
$0c5ac1a2f93ce6a5$export$fd1e42aa8ea02a1 = "_spectrum-Modal--responsive_f81956";
$0c5ac1a2f93ce6a5$export$a4423fa77727431a = "_spectrum-Modal--fullscreen_f81956";
$0c5ac1a2f93ce6a5$export$175dd699720b5fb7 = "_spectrum-Modal--fullscreenTakeover_f81956";







var $df855ba513d337db$exports = {};

$parcel$export($df855ba513d337db$exports, "spectrum-Underlay", () => $df855ba513d337db$export$74470528f463af97, (v) => $df855ba513d337db$export$74470528f463af97 = v);
$parcel$export($df855ba513d337db$exports, "is-open", () => $df855ba513d337db$export$a9781837241c946d, (v) => $df855ba513d337db$export$a9781837241c946d = v);
var $df855ba513d337db$export$74470528f463af97;
var $df855ba513d337db$export$a9781837241c946d;
$df855ba513d337db$export$74470528f463af97 = "_spectrum-Underlay_eb7615";
$df855ba513d337db$export$a9781837241c946d = "_is-open_eb7615";


function $8978bda53ec18c37$export$f360afc887607b02({ isOpen: isOpen  }) {
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("div", {
        className: $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($df855ba513d337db$exports)), 'spectrum-Underlay', {
            'is-open': isOpen
        })
    }));
}



function $828a6d104de5d23f$var$Modal(props, ref) {
    let { children: children , onClose: onClose , type: type , ...otherProps } = props;
    let domRef = $8cRSW$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $8cRSW$reactspectrumutils.useStyleProps(props);
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = $8cRSW$reactariaoverlays.useOverlay(props, domRef);
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($b540788c12974c8e$export$c6fdb837b070b4ff, otherProps, /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($8978bda53ec18c37$export$f360afc887607b02, underlayProps), /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($828a6d104de5d23f$var$ModalWrapper, {
        ...styleProps,
        onClose: onClose,
        type: type,
        ref: domRef,
        overlayProps: overlayProps
    }, children)));
}
let $828a6d104de5d23f$var$typeMap = {
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
let $828a6d104de5d23f$var$ModalWrapper = /*#__PURE__*/ $8cRSW$react.forwardRef(function(props, ref) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children , isOpen: isOpen , type: type , overlayProps: overlayProps , ...otherProps } = props;
    let typeVariant = $828a6d104de5d23f$var$typeMap[type];
    $8cRSW$reactariaoverlays.usePreventScroll();
    let { modalProps: modalProps  } = $8cRSW$reactariaoverlays.useModal();
    let wrapperClassName = $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($0c5ac1a2f93ce6a5$exports)), 'spectrum-Modal-wrapper', $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($a953be4953d2cab8$exports)), 'spectrum-Modal-wrapper', 'react-spectrum-Modal-wrapper'));
    let modalClassName = $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($0c5ac1a2f93ce6a5$exports)), 'spectrum-Modal', {
        'is-open': isOpen
    }, $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($a953be4953d2cab8$exports)), 'spectrum-Modal', 'react-spectrum-Modal'), {
        [`spectrum-Modal--${typeVariant}`]: typeVariant
    }, otherProps.className);
    let viewport = $8cRSW$reactariautils.useViewportSize();
    let style = {
        '--spectrum-visual-viewport-height': viewport.height + 'px'
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("div", {
        className: wrapperClassName,
        style: style
    }, /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("div", {
        ...$8cRSW$reactariautils.mergeProps(otherProps, overlayProps, modalProps),
        ref: ref,
        className: modalClassName,
        "data-testid": "modal"
    }, children)));
});
let $828a6d104de5d23f$export$2b77a92f1a5ad772 = /*#__PURE__*/ $8cRSW$react.forwardRef($828a6d104de5d23f$var$Modal);


var $e500a77196c80ea2$exports = {};

$parcel$export($e500a77196c80ea2$exports, "Tray", () => $e500a77196c80ea2$export$4589ed81930b555c);





var $ecd7426ac7f39d00$exports = {};

$parcel$export($ecd7426ac7f39d00$exports, "spectrum-Tray", () => $ecd7426ac7f39d00$export$ce0704cd084c4f0d, (v) => $ecd7426ac7f39d00$export$ce0704cd084c4f0d = v);
$parcel$export($ecd7426ac7f39d00$exports, "is-open", () => $ecd7426ac7f39d00$export$a9781837241c946d, (v) => $ecd7426ac7f39d00$export$a9781837241c946d = v);
$parcel$export($ecd7426ac7f39d00$exports, "spectrum-Tray-wrapper", () => $ecd7426ac7f39d00$export$641b9b70c23dce66, (v) => $ecd7426ac7f39d00$export$641b9b70c23dce66 = v);
$parcel$export($ecd7426ac7f39d00$exports, "spectrum-Tray--fixedHeight", () => $ecd7426ac7f39d00$export$79bfb05e59a300b, (v) => $ecd7426ac7f39d00$export$79bfb05e59a300b = v);
var $ecd7426ac7f39d00$export$ce0704cd084c4f0d;
var $ecd7426ac7f39d00$export$a9781837241c946d;
var $ecd7426ac7f39d00$export$641b9b70c23dce66;
var $ecd7426ac7f39d00$export$79bfb05e59a300b;
$ecd7426ac7f39d00$export$ce0704cd084c4f0d = "_spectrum-Tray_23bf66";
$ecd7426ac7f39d00$export$a9781837241c946d = "_is-open_23bf66";
$ecd7426ac7f39d00$export$641b9b70c23dce66 = "_spectrum-Tray-wrapper_23bf66";
$ecd7426ac7f39d00$export$79bfb05e59a300b = "_spectrum-Tray--fixedHeight_23bf66";




function $e500a77196c80ea2$var$Tray(props, ref) {
    let { children: children , onClose: onClose , isFixedHeight: isFixedHeight , isNonModal: isNonModal , ...otherProps } = props;
    let domRef = $8cRSW$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $8cRSW$reactspectrumutils.useStyleProps(props);
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = $8cRSW$reactariaoverlays.useOverlay({
        ...props,
        isDismissable: true
    }, domRef);
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($b540788c12974c8e$export$c6fdb837b070b4ff, otherProps, /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($8978bda53ec18c37$export$f360afc887607b02, underlayProps), /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement($e500a77196c80ea2$var$TrayWrapper, {
        ...styleProps,
        onClose: onClose,
        ref: domRef,
        overlayProps: overlayProps,
        isFixedHeight: isFixedHeight,
        isNonModal: isNonModal
    }, children)));
}
let $e500a77196c80ea2$var$TrayWrapper = /*#__PURE__*/ $8cRSW$react.forwardRef(function(props, ref) {
    let { children: children , isOpen: isOpen , isFixedHeight: isFixedHeight , isNonModal: isNonModal , overlayProps: overlayProps , ...otherProps } = props;
    $8cRSW$reactariaoverlays.usePreventScroll();
    let { modalProps: modalProps  } = $8cRSW$reactariaoverlays.useModal({
        isDisabled: isNonModal
    });
    // We need to measure the window's height in JS rather than using percentages in CSS
    // so that contents (e.g. menu) can inherit the max-height properly. Using percentages
    // does not work properly because there is nothing to base the percentage on.
    // We cannot use vh units because mobile browsers adjust the window height dynamically
    // when the address bar/bottom toolbars show and hide on scroll and vh units are fixed.
    // Also, the visual viewport is smaller than the layout viewport when the virtual keyboard
    // is up, so use the VisualViewport API to ensure the tray is displayed above the keyboard.
    let viewport = $8cRSW$reactariautils.useViewportSize();
    let [height, setHeight] = $8cRSW$react.useState(viewport.height);
    let timeoutRef = $8cRSW$react.useRef();
    $8cRSW$react.useEffect(()=>{
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
    let wrapperClassName = $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecd7426ac7f39d00$exports)), 'spectrum-Tray-wrapper');
    let className = $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ecd7426ac7f39d00$exports)), 'spectrum-Tray', {
        'is-open': isOpen,
        'spectrum-Tray--fixedHeight': isFixedHeight
    }, $8cRSW$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($a953be4953d2cab8$exports)), 'spectrum-Tray', 'react-spectrum-Tray'), otherProps.className);
    let domProps = $8cRSW$reactariautils.mergeProps(otherProps, overlayProps);
    return(/*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("div", {
        className: wrapperClassName,
        style: wrapperStyle
    }, /*#__PURE__*/ ($parcel$interopDefault($8cRSW$react)).createElement("div", {
        ...domProps,
        ...modalProps,
        className: className,
        ref: ref,
        "data-testid": "tray"
    }, children)));
});
let $e500a77196c80ea2$export$4589ed81930b555c = /*#__PURE__*/ $8cRSW$react.forwardRef($e500a77196c80ea2$var$Tray);



$parcel$exportWildcard(module.exports, $b540788c12974c8e$exports);
$parcel$exportWildcard(module.exports, $64fb880c78fcbb16$exports);
$parcel$exportWildcard(module.exports, $828a6d104de5d23f$exports);
$parcel$exportWildcard(module.exports, $e500a77196c80ea2$exports);
$parcel$exportWildcard(module.exports, $fe33865652297ea4$exports);


//# sourceMappingURL=main.js.map
