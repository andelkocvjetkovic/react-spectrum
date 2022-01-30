import "./main.css";
import $E5PaI$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import {Button as $E5PaI$Button, ClearButton as $E5PaI$ClearButton} from "@react-spectrum/button";
import {useDOMRef as $E5PaI$useDOMRef, useStyleProps as $E5PaI$useStyleProps, classNames as $E5PaI$classNames} from "@react-spectrum/utils";
import $E5PaI$spectrumiconsuiCrossMedium from "@spectrum-icons/ui/CrossMedium";
import $E5PaI$spectrumiconsuiInfoMedium from "@spectrum-icons/ui/InfoMedium";
import $E5PaI$react, {useContext as $E5PaI$useContext} from "react";
import $E5PaI$spectrumiconsuiSuccessMedium from "@spectrum-icons/ui/SuccessMedium";
import {useToast as $E5PaI$useToast} from "@react-aria/toast";
import {useProviderProps as $E5PaI$useProviderProps} from "@react-spectrum/provider";
import {useToastState as $E5PaI$useToastState} from "@react-stately/toast";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $15dba659600db3ef$exports = {};

$parcel$export($15dba659600db3ef$exports, "ICONS", () => $15dba659600db3ef$export$fde44257752a9f60);
$parcel$export($15dba659600db3ef$exports, "Toast", () => $15dba659600db3ef$export$8d8dc7d5f743331b);






var $b56a8b39cb3e81d3$exports = {};

$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast", () => $b56a8b39cb3e81d3$export$c8747d73d7954b9c, (v) => $b56a8b39cb3e81d3$export$c8747d73d7954b9c = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast-typeIcon", () => $b56a8b39cb3e81d3$export$8e9e50fe392680b2, (v) => $b56a8b39cb3e81d3$export$8e9e50fe392680b2 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast-content", () => $b56a8b39cb3e81d3$export$454f092ca47c3462, (v) => $b56a8b39cb3e81d3$export$454f092ca47c3462 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast-buttons", () => $b56a8b39cb3e81d3$export$19218cf016f919e5, (v) => $b56a8b39cb3e81d3$export$19218cf016f919e5 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Button", () => $b56a8b39cb3e81d3$export$1db4cca5b4ade39a, (v) => $b56a8b39cb3e81d3$export$1db4cca5b4ade39a = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-ClearButton", () => $b56a8b39cb3e81d3$export$b752ce409e5660c, (v) => $b56a8b39cb3e81d3$export$b752ce409e5660c = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast-body", () => $b56a8b39cb3e81d3$export$36e75d1f579741b3, (v) => $b56a8b39cb3e81d3$export$36e75d1f579741b3 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast--warning", () => $b56a8b39cb3e81d3$export$7a586b6675f87340, (v) => $b56a8b39cb3e81d3$export$7a586b6675f87340 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast-closeButton", () => $b56a8b39cb3e81d3$export$d150ee3e17852165, (v) => $b56a8b39cb3e81d3$export$d150ee3e17852165 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "focus-ring", () => $b56a8b39cb3e81d3$export$f39a09f249340e2a, (v) => $b56a8b39cb3e81d3$export$f39a09f249340e2a = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast--negative", () => $b56a8b39cb3e81d3$export$bd5a0b226e8b302, (v) => $b56a8b39cb3e81d3$export$bd5a0b226e8b302 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast--error", () => $b56a8b39cb3e81d3$export$8bcfde27757090b3, (v) => $b56a8b39cb3e81d3$export$8bcfde27757090b3 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast--info", () => $b56a8b39cb3e81d3$export$fcf916881d7253a9, (v) => $b56a8b39cb3e81d3$export$fcf916881d7253a9 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast--positive", () => $b56a8b39cb3e81d3$export$5c8e63d2763f4a55, (v) => $b56a8b39cb3e81d3$export$5c8e63d2763f4a55 = v);
$parcel$export($b56a8b39cb3e81d3$exports, "spectrum-Toast--success", () => $b56a8b39cb3e81d3$export$1d315533cc92876, (v) => $b56a8b39cb3e81d3$export$1d315533cc92876 = v);
var $b56a8b39cb3e81d3$export$c8747d73d7954b9c;
var $b56a8b39cb3e81d3$export$8e9e50fe392680b2;
var $b56a8b39cb3e81d3$export$454f092ca47c3462;
var $b56a8b39cb3e81d3$export$19218cf016f919e5;
var $b56a8b39cb3e81d3$export$1db4cca5b4ade39a;
var $b56a8b39cb3e81d3$export$b752ce409e5660c;
var $b56a8b39cb3e81d3$export$36e75d1f579741b3;
var $b56a8b39cb3e81d3$export$7a586b6675f87340;
var $b56a8b39cb3e81d3$export$d150ee3e17852165;
var $b56a8b39cb3e81d3$export$f39a09f249340e2a;
var $b56a8b39cb3e81d3$export$bd5a0b226e8b302;
var $b56a8b39cb3e81d3$export$8bcfde27757090b3;
var $b56a8b39cb3e81d3$export$fcf916881d7253a9;
var $b56a8b39cb3e81d3$export$5c8e63d2763f4a55;
var $b56a8b39cb3e81d3$export$1d315533cc92876;
$b56a8b39cb3e81d3$export$c8747d73d7954b9c = "_spectrum-Toast_11df86";
$b56a8b39cb3e81d3$export$8e9e50fe392680b2 = "_spectrum-Toast-typeIcon_11df86";
$b56a8b39cb3e81d3$export$454f092ca47c3462 = "_spectrum-Toast-content_11df86";
$b56a8b39cb3e81d3$export$19218cf016f919e5 = "_spectrum-Toast-buttons_11df86";
$b56a8b39cb3e81d3$export$1db4cca5b4ade39a = "_spectrum-Button_11df86";
$b56a8b39cb3e81d3$export$b752ce409e5660c = "_spectrum-ClearButton_11df86";
$b56a8b39cb3e81d3$export$36e75d1f579741b3 = "_spectrum-Toast-body_11df86";
$b56a8b39cb3e81d3$export$7a586b6675f87340 = "_spectrum-Toast--warning_11df86";
$b56a8b39cb3e81d3$export$d150ee3e17852165 = "_spectrum-Toast-closeButton_11df86";
$b56a8b39cb3e81d3$export$f39a09f249340e2a = "_focus-ring_11df86";
$b56a8b39cb3e81d3$export$bd5a0b226e8b302 = "_spectrum-Toast--negative_11df86";
$b56a8b39cb3e81d3$export$8bcfde27757090b3 = "_spectrum-Toast--error_11df86";
$b56a8b39cb3e81d3$export$fcf916881d7253a9 = "_spectrum-Toast--info_11df86";
$b56a8b39cb3e81d3$export$5c8e63d2763f4a55 = "_spectrum-Toast--positive_11df86";
$b56a8b39cb3e81d3$export$1d315533cc92876 = "_spectrum-Toast--success_11df86";



var $52b51509722d310d$exports = {};

$parcel$export($52b51509722d310d$exports, "react-spectrum-ToastContainer", () => $52b51509722d310d$export$bed15bd1aa62542d, (v) => $52b51509722d310d$export$bed15bd1aa62542d = v);
$parcel$export($52b51509722d310d$exports, "spectrum-Toast", () => $52b51509722d310d$export$c8747d73d7954b9c, (v) => $52b51509722d310d$export$c8747d73d7954b9c = v);
$parcel$export($52b51509722d310d$exports, "react-spectrum-ToastContainer--top", () => $52b51509722d310d$export$7eb02b38fb88e59d, (v) => $52b51509722d310d$export$7eb02b38fb88e59d = v);
$parcel$export($52b51509722d310d$exports, "react-spectrum-ToastContainer--bottom", () => $52b51509722d310d$export$c994420a41d91856, (v) => $52b51509722d310d$export$c994420a41d91856 = v);
$parcel$export($52b51509722d310d$exports, "react-spectrum-ToastContainer--left", () => $52b51509722d310d$export$ea1cbaa0027c5da4, (v) => $52b51509722d310d$export$ea1cbaa0027c5da4 = v);
$parcel$export($52b51509722d310d$exports, "react-spectrum-ToastContainer--center", () => $52b51509722d310d$export$ab2fabc81aee6055, (v) => $52b51509722d310d$export$ab2fabc81aee6055 = v);
$parcel$export($52b51509722d310d$exports, "react-spectrum-ToastContainer--right", () => $52b51509722d310d$export$3c1099396a3c4164, (v) => $52b51509722d310d$export$3c1099396a3c4164 = v);
var $52b51509722d310d$export$bed15bd1aa62542d;
var $52b51509722d310d$export$c8747d73d7954b9c;
var $52b51509722d310d$export$7eb02b38fb88e59d;
var $52b51509722d310d$export$c994420a41d91856;
var $52b51509722d310d$export$ea1cbaa0027c5da4;
var $52b51509722d310d$export$ab2fabc81aee6055;
var $52b51509722d310d$export$3c1099396a3c4164;
$52b51509722d310d$export$bed15bd1aa62542d = "_react-spectrum-ToastContainer_21a698";
$52b51509722d310d$export$c8747d73d7954b9c = "_spectrum-Toast_21a698";
$52b51509722d310d$export$7eb02b38fb88e59d = "_react-spectrum-ToastContainer--top_21a698";
$52b51509722d310d$export$c994420a41d91856 = "_react-spectrum-ToastContainer--bottom_21a698";
$52b51509722d310d$export$ea1cbaa0027c5da4 = "_react-spectrum-ToastContainer--left_21a698";
$52b51509722d310d$export$ab2fabc81aee6055 = "_react-spectrum-ToastContainer--center_21a698";
$52b51509722d310d$export$3c1099396a3c4164 = "_react-spectrum-ToastContainer--right_21a698";



const $15dba659600db3ef$export$fde44257752a9f60 = {
    info: $E5PaI$spectrumiconsuiInfoMedium,
    negative: $E5PaI$spectrumiconsuiAlertMedium,
    positive: $E5PaI$spectrumiconsuiSuccessMedium
};
function $15dba659600db3ef$var$Toast(props, ref) {
    let { actionLabel: actionLabel , children: children , onRemove: onRemove , variant: variant , ...otherProps } = props;
    let { actionButtonProps: actionButtonProps , closeButtonProps: closeButtonProps , iconProps: iconProps , toastProps: toastProps  } = $E5PaI$useToast({
        ...otherProps,
        variant: variant
    }, {
        onRemove: onRemove
    });
    let domRef = $E5PaI$useDOMRef(ref);
    let { styleProps: styleProps  } = $E5PaI$useStyleProps(otherProps);
    let Icon = $15dba659600db3ef$export$fde44257752a9f60[variant];
    return(/*#__PURE__*/ $E5PaI$react.createElement("div", {
        ...styleProps,
        ...toastProps,
        ref: domRef,
        className: $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($b56a8b39cb3e81d3$exports)), 'spectrum-Toast', {
            ['spectrum-Toast--' + variant]: variant
        }, styleProps.className, $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($52b51509722d310d$exports)), 'spectrum-Toast'))
    }, Icon && /*#__PURE__*/ $E5PaI$react.createElement(Icon, {
        ...iconProps,
        UNSAFE_className: $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($b56a8b39cb3e81d3$exports)), 'spectrum-Toast-typeIcon')
    }), /*#__PURE__*/ $E5PaI$react.createElement("div", {
        className: $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($b56a8b39cb3e81d3$exports)), 'spectrum-Toast-body')
    }, /*#__PURE__*/ $E5PaI$react.createElement("div", {
        className: $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($b56a8b39cb3e81d3$exports)), 'spectrum-Toast-content')
    }, children), actionLabel && /*#__PURE__*/ $E5PaI$react.createElement($E5PaI$Button, {
        ...actionButtonProps,
        UNSAFE_className: $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($b56a8b39cb3e81d3$exports)), 'spectrum-Button'),
        isQuiet: true,
        variant: "overBackground"
    }, actionLabel)), /*#__PURE__*/ $E5PaI$react.createElement("div", {
        className: $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($b56a8b39cb3e81d3$exports)), 'spectrum-Toast-buttons')
    }, /*#__PURE__*/ $E5PaI$react.createElement($E5PaI$ClearButton, {
        ...closeButtonProps,
        variant: "overBackground"
    }, /*#__PURE__*/ $E5PaI$react.createElement($E5PaI$spectrumiconsuiCrossMedium, null)))));
}
let $15dba659600db3ef$export$8d8dc7d5f743331b = /*#__PURE__*/ $E5PaI$react.forwardRef($15dba659600db3ef$var$Toast);


var $f78f95cc3654c58e$exports = {};

$parcel$export($f78f95cc3654c58e$exports, "ToastContainer", () => $f78f95cc3654c58e$export$f2815235e76a62b9);




function $f78f95cc3654c58e$export$f2815235e76a62b9(props) {
    let { onRemove: onRemove , toasts: toasts  } = props;
    // let providerProps = useProvider();
    let toastPlacement = 'bottom'; /* providerProps && providerProps.toastPlacement && providerProps.toastPlacement.split(' '); */ 
    let containerPosition = toastPlacement && toastPlacement[0];
    let containerPlacement = toastPlacement && toastPlacement[1];
    let renderToasts = ()=>toasts.map((toast)=>/*#__PURE__*/ $E5PaI$react.createElement($15dba659600db3ef$export$8d8dc7d5f743331b, {
                ...toast.props,
                key: toast.props.toastKey,
                onRemove: onRemove,
                timer: toast.timer
            }, toast.content)
        )
    ;
    return(/*#__PURE__*/ $E5PaI$react.createElement("div", {
        className: $E5PaI$classNames((/*@__PURE__*/$parcel$interopDefault($52b51509722d310d$exports)), 'react-spectrum-ToastContainer', containerPosition && `react-spectrum-ToastContainer--${containerPosition}`, containerPlacement && `react-spectrum-ToastContainer--${containerPlacement}`)
    }, renderToasts()));
}


var $eb5c9a35a6dafca6$exports = {};

$parcel$export($eb5c9a35a6dafca6$exports, "ToastContext", () => $eb5c9a35a6dafca6$export$29d4e2ed4674ecfc);
$parcel$export($eb5c9a35a6dafca6$exports, "useToastProvider", () => $eb5c9a35a6dafca6$export$44a65bae587d5541);
$parcel$export($eb5c9a35a6dafca6$exports, "ToastProvider", () => $eb5c9a35a6dafca6$export$f5d03d415824e0e);




const $eb5c9a35a6dafca6$export$29d4e2ed4674ecfc = /*#__PURE__*/ $E5PaI$react.createContext(null);
function $eb5c9a35a6dafca6$export$44a65bae587d5541() {
    return $E5PaI$useContext($eb5c9a35a6dafca6$export$29d4e2ed4674ecfc);
}
let $eb5c9a35a6dafca6$var$keyCounter = 0;
function $eb5c9a35a6dafca6$var$generateKey(pre = 'toast') {
    return `${pre}_${$eb5c9a35a6dafca6$var$keyCounter++}`;
}
function $eb5c9a35a6dafca6$export$f5d03d415824e0e(props) {
    let { onAdd: onAdd , onRemove: onRemove , toasts: toasts  } = $E5PaI$useToastState();
    let { children: children  } = $E5PaI$useProviderProps(props);
    let contextValue = {
        neutral: (content, options = {
        })=>{
            onAdd(content, {
                ...options,
                toastKey: $eb5c9a35a6dafca6$var$generateKey()
            });
        },
        positive: (content, options = {
        })=>{
            onAdd(content, {
                ...options,
                toastKey: $eb5c9a35a6dafca6$var$generateKey(),
                variant: 'positive'
            });
        },
        negative: (content, options = {
        })=>{
            onAdd(content, {
                ...options,
                toastKey: $eb5c9a35a6dafca6$var$generateKey(),
                variant: 'negative'
            });
        },
        info: (content, options = {
        })=>{
            onAdd(content, {
                ...options,
                toastKey: $eb5c9a35a6dafca6$var$generateKey(),
                variant: 'info'
            });
        }
    };
    return(/*#__PURE__*/ $E5PaI$react.createElement($eb5c9a35a6dafca6$export$29d4e2ed4674ecfc.Provider, {
        value: contextValue
    }, /*#__PURE__*/ $E5PaI$react.createElement($f78f95cc3654c58e$export$f2815235e76a62b9, {
        toasts: toasts,
        onRemove: onRemove
    }), children));
}




export {$15dba659600db3ef$export$fde44257752a9f60 as ICONS, $15dba659600db3ef$export$8d8dc7d5f743331b as Toast, $f78f95cc3654c58e$export$f2815235e76a62b9 as ToastContainer, $eb5c9a35a6dafca6$export$29d4e2ed4674ecfc as ToastContext, $eb5c9a35a6dafca6$export$44a65bae587d5541 as useToastProvider, $eb5c9a35a6dafca6$export$f5d03d415824e0e as ToastProvider};
//# sourceMappingURL=module.js.map
