require("./main.css");
var $cr7Fp$reactspectrumbutton = require("@react-spectrum/button");
var $cr7Fp$reactspectrumdialog = require("@react-spectrum/dialog");
var $cr7Fp$spectrumiconsworkflowHelpOutline = require("@spectrum-icons/workflow/HelpOutline");
var $cr7Fp$spectrumiconsworkflowInfoOutline = require("@spectrum-icons/workflow/InfoOutline");
var $cr7Fp$react = require("react");
var $cr7Fp$reactspectrumutils = require("@react-spectrum/utils");
var $cr7Fp$reactariai18n = require("@react-aria/i18n");

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
var $0a199d2d7699beec$exports = {};

$parcel$export($0a199d2d7699beec$exports, "ContextualHelp", () => $0a199d2d7699beec$export$7d3cdb256c2ba320);



var $e2344e09710fe52f$exports = {};

$parcel$export($e2344e09710fe52f$exports, "react-spectrum-ContextualHelp-button", () => $e2344e09710fe52f$export$20d9583c9f1529c1, (v) => $e2344e09710fe52f$export$20d9583c9f1529c1 = v);
$parcel$export($e2344e09710fe52f$exports, "react-spectrum-ContextualHelp-dialog", () => $e2344e09710fe52f$export$ab2d873674d20d28, (v) => $e2344e09710fe52f$export$ab2d873674d20d28 = v);
$parcel$export($e2344e09710fe52f$exports, "react-spectrum-ContextualHelp-content", () => $e2344e09710fe52f$export$a1f805890cf58c4, (v) => $e2344e09710fe52f$export$a1f805890cf58c4 = v);
$parcel$export($e2344e09710fe52f$exports, "react-spectrum-ContextualHelp-footer", () => $e2344e09710fe52f$export$d901bc3fa82b87a6, (v) => $e2344e09710fe52f$export$d901bc3fa82b87a6 = v);
var $e2344e09710fe52f$export$20d9583c9f1529c1;
var $e2344e09710fe52f$export$ab2d873674d20d28;
var $e2344e09710fe52f$export$a1f805890cf58c4;
var $e2344e09710fe52f$export$d901bc3fa82b87a6;
$e2344e09710fe52f$export$20d9583c9f1529c1 = "_react-spectrum-ContextualHelp-button_d88303";
$e2344e09710fe52f$export$ab2d873674d20d28 = "_react-spectrum-ContextualHelp-dialog_d88303";
$e2344e09710fe52f$export$a1f805890cf58c4 = "_react-spectrum-ContextualHelp-content_d88303";
$e2344e09710fe52f$export$d901bc3fa82b87a6 = "_react-spectrum-ContextualHelp-footer_d88303";



var $d77ca09d774d58ee$exports = {};
var $96b758205cd6eaf5$exports = {};
$96b758205cd6eaf5$exports = JSON.parse("{\"open\":\"Open help\"}");


$d77ca09d774d58ee$exports = {
    "en-US": $96b758205cd6eaf5$exports
};





function $0a199d2d7699beec$export$7d3cdb256c2ba320(props) {
    let { variant: variant = 'help' , placement: placement = 'bottom end' , children: children , ...otherProps } = props;
    let formatMessage = $cr7Fp$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($d77ca09d774d58ee$exports)));
    let icon = variant === 'info' ? /*#__PURE__*/ ($parcel$interopDefault($cr7Fp$react)).createElement(($parcel$interopDefault($cr7Fp$spectrumiconsworkflowInfoOutline)), null) : /*#__PURE__*/ ($parcel$interopDefault($cr7Fp$react)).createElement(($parcel$interopDefault($cr7Fp$spectrumiconsworkflowHelpOutline)), null);
    let slots = {
        content: {
            UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($e2344e09710fe52f$exports))['react-spectrum-ContextualHelp-content']
        },
        footer: {
            UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($e2344e09710fe52f$exports))['react-spectrum-ContextualHelp-footer']
        }
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($cr7Fp$react)).createElement($cr7Fp$reactspectrumdialog.DialogTrigger, {
        type: "popover",
        placement: placement,
        hideArrow: true,
        ...otherProps
    }, /*#__PURE__*/ ($parcel$interopDefault($cr7Fp$react)).createElement($cr7Fp$reactspectrumbutton.ActionButton, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($e2344e09710fe52f$exports))['react-spectrum-ContextualHelp-button'],
        isQuiet: true,
        "aria-label": formatMessage('open')
    }, icon), /*#__PURE__*/ ($parcel$interopDefault($cr7Fp$react)).createElement($cr7Fp$reactspectrumutils.SlotProvider, {
        slots: slots
    }, /*#__PURE__*/ ($parcel$interopDefault($cr7Fp$react)).createElement($cr7Fp$reactspectrumdialog.Dialog, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($e2344e09710fe52f$exports))['react-spectrum-ContextualHelp-dialog']
    }, children))));
}


$parcel$exportWildcard(module.exports, $0a199d2d7699beec$exports);


//# sourceMappingURL=main.js.map
