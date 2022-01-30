import "./main.css";
import {ActionButton as $ZBuvA$ActionButton} from "@react-spectrum/button";
import {DialogTrigger as $ZBuvA$DialogTrigger, Dialog as $ZBuvA$Dialog} from "@react-spectrum/dialog";
import $ZBuvA$spectrumiconsworkflowHelpOutline from "@spectrum-icons/workflow/HelpOutline";
import $ZBuvA$spectrumiconsworkflowInfoOutline from "@spectrum-icons/workflow/InfoOutline";
import $ZBuvA$react from "react";
import {SlotProvider as $ZBuvA$SlotProvider} from "@react-spectrum/utils";
import {useMessageFormatter as $ZBuvA$useMessageFormatter} from "@react-aria/i18n";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $83d8f692d73506a2$exports = {};

$parcel$export($83d8f692d73506a2$exports, "ContextualHelp", () => $83d8f692d73506a2$export$7d3cdb256c2ba320);



var $3049f65fb8cae9a8$exports = {};

$parcel$export($3049f65fb8cae9a8$exports, "react-spectrum-ContextualHelp-button", () => $3049f65fb8cae9a8$export$20d9583c9f1529c1, (v) => $3049f65fb8cae9a8$export$20d9583c9f1529c1 = v);
$parcel$export($3049f65fb8cae9a8$exports, "react-spectrum-ContextualHelp-dialog", () => $3049f65fb8cae9a8$export$ab2d873674d20d28, (v) => $3049f65fb8cae9a8$export$ab2d873674d20d28 = v);
$parcel$export($3049f65fb8cae9a8$exports, "react-spectrum-ContextualHelp-content", () => $3049f65fb8cae9a8$export$a1f805890cf58c4, (v) => $3049f65fb8cae9a8$export$a1f805890cf58c4 = v);
$parcel$export($3049f65fb8cae9a8$exports, "react-spectrum-ContextualHelp-footer", () => $3049f65fb8cae9a8$export$d901bc3fa82b87a6, (v) => $3049f65fb8cae9a8$export$d901bc3fa82b87a6 = v);
var $3049f65fb8cae9a8$export$20d9583c9f1529c1;
var $3049f65fb8cae9a8$export$ab2d873674d20d28;
var $3049f65fb8cae9a8$export$a1f805890cf58c4;
var $3049f65fb8cae9a8$export$d901bc3fa82b87a6;
$3049f65fb8cae9a8$export$20d9583c9f1529c1 = "_react-spectrum-ContextualHelp-button_d88303";
$3049f65fb8cae9a8$export$ab2d873674d20d28 = "_react-spectrum-ContextualHelp-dialog_d88303";
$3049f65fb8cae9a8$export$a1f805890cf58c4 = "_react-spectrum-ContextualHelp-content_d88303";
$3049f65fb8cae9a8$export$d901bc3fa82b87a6 = "_react-spectrum-ContextualHelp-footer_d88303";



var $20ae4797e858ab1e$exports = {};
var $be59dd1caf30c23b$exports = {};
$be59dd1caf30c23b$exports = JSON.parse("{\"open\":\"Open help\"}");


$20ae4797e858ab1e$exports = {
    "en-US": $be59dd1caf30c23b$exports
};





function $83d8f692d73506a2$export$7d3cdb256c2ba320(props) {
    let { variant: variant = 'help' , placement: placement = 'bottom end' , children: children , ...otherProps } = props;
    let formatMessage = $ZBuvA$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($20ae4797e858ab1e$exports)));
    let icon = variant === 'info' ? /*#__PURE__*/ $ZBuvA$react.createElement($ZBuvA$spectrumiconsworkflowInfoOutline, null) : /*#__PURE__*/ $ZBuvA$react.createElement($ZBuvA$spectrumiconsworkflowHelpOutline, null);
    let slots = {
        content: {
            UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($3049f65fb8cae9a8$exports))['react-spectrum-ContextualHelp-content']
        },
        footer: {
            UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($3049f65fb8cae9a8$exports))['react-spectrum-ContextualHelp-footer']
        }
    };
    return(/*#__PURE__*/ $ZBuvA$react.createElement($ZBuvA$DialogTrigger, {
        type: "popover",
        placement: placement,
        hideArrow: true,
        ...otherProps
    }, /*#__PURE__*/ $ZBuvA$react.createElement($ZBuvA$ActionButton, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($3049f65fb8cae9a8$exports))['react-spectrum-ContextualHelp-button'],
        isQuiet: true,
        "aria-label": formatMessage('open')
    }, icon), /*#__PURE__*/ $ZBuvA$react.createElement($ZBuvA$SlotProvider, {
        slots: slots
    }, /*#__PURE__*/ $ZBuvA$react.createElement($ZBuvA$Dialog, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($3049f65fb8cae9a8$exports))['react-spectrum-ContextualHelp-dialog']
    }, children))));
}




export {$83d8f692d73506a2$export$7d3cdb256c2ba320 as ContextualHelp};
//# sourceMappingURL=module.js.map
