require("./main.css");
var $lh4Iq$reactspectrumutils = require("@react-spectrum/utils");
var $lh4Iq$reactspectrumlayout = require("@react-spectrum/layout");
var $lh4Iq$reactariautils = require("@react-aria/utils");
var $lh4Iq$react = require("react");
var $lh4Iq$reactspectrumform = require("@react-spectrum/form");
var $lh4Iq$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $lh4Iq$spectrumiconsuiAsterisk = require("@spectrum-icons/ui/Asterisk");
var $lh4Iq$reactariai18n = require("@react-aria/i18n");
var $lh4Iq$reactspectrumprovider = require("@react-spectrum/provider");

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
var $1feca1330f4a4636$exports = {};

$parcel$export($1feca1330f4a4636$exports, "Field", () => $1feca1330f4a4636$export$a455218a85c89869);


var $3d8d47a9abc23df8$exports = {};

$parcel$export($3d8d47a9abc23df8$exports, "HelpText", () => $3d8d47a9abc23df8$export$a67c0bc59081311a);



var $225b0cd2fca96581$exports = {};

$parcel$export($225b0cd2fca96581$exports, "spectrum-HelpText", () => $225b0cd2fca96581$export$c0875e83c57c7736, (v) => $225b0cd2fca96581$export$c0875e83c57c7736 = v);
$parcel$export($225b0cd2fca96581$exports, "spectrum-HelpText-validationIcon", () => $225b0cd2fca96581$export$527776642b333691, (v) => $225b0cd2fca96581$export$527776642b333691 = v);
$parcel$export($225b0cd2fca96581$exports, "spectrum-HelpText-text", () => $225b0cd2fca96581$export$a512452beb4231bf, (v) => $225b0cd2fca96581$export$a512452beb4231bf = v);
$parcel$export($225b0cd2fca96581$exports, "spectrum-HelpText--neutral", () => $225b0cd2fca96581$export$6e9351b1ad13c, (v) => $225b0cd2fca96581$export$6e9351b1ad13c = v);
$parcel$export($225b0cd2fca96581$exports, "is-disabled", () => $225b0cd2fca96581$export$d35bc1e505d1ebbf, (v) => $225b0cd2fca96581$export$d35bc1e505d1ebbf = v);
$parcel$export($225b0cd2fca96581$exports, "spectrum-HelpText--negative", () => $225b0cd2fca96581$export$d31dd875d69daee0, (v) => $225b0cd2fca96581$export$d31dd875d69daee0 = v);
var $225b0cd2fca96581$export$c0875e83c57c7736;
var $225b0cd2fca96581$export$527776642b333691;
var $225b0cd2fca96581$export$a512452beb4231bf;
var $225b0cd2fca96581$export$6e9351b1ad13c;
var $225b0cd2fca96581$export$d35bc1e505d1ebbf;
var $225b0cd2fca96581$export$d31dd875d69daee0;
$225b0cd2fca96581$export$c0875e83c57c7736 = "_spectrum-HelpText_f395de";
$225b0cd2fca96581$export$527776642b333691 = "_spectrum-HelpText-validationIcon_f395de";
$225b0cd2fca96581$export$a512452beb4231bf = "_spectrum-HelpText-text_f395de";
$225b0cd2fca96581$export$6e9351b1ad13c = "_spectrum-HelpText--neutral_f395de";
$225b0cd2fca96581$export$d35bc1e505d1ebbf = "_is-disabled_f395de";
$225b0cd2fca96581$export$d31dd875d69daee0 = "_spectrum-HelpText--negative_f395de";


function $3d8d47a9abc23df8$var$HelpText(props, ref) {
    let { description: description , errorMessage: errorMessage , validationState: validationState , isDisabled: isDisabled , showErrorIcon: showErrorIcon , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = props;
    let domRef = $lh4Iq$reactspectrumutils.useDOMRef(ref);
    let isErrorMessage = errorMessage && validationState === 'invalid';
    return(/*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement("div", {
        className: $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($225b0cd2fca96581$exports)), 'spectrum-HelpText', `spectrum-HelpText--${isErrorMessage ? 'negative' : 'neutral'}`, {
            'is-disabled': isDisabled
        }),
        ref: domRef
    }, isErrorMessage ? /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement(($parcel$interopDefault($lh4Iq$react)).Fragment, null, showErrorIcon && /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement(($parcel$interopDefault($lh4Iq$spectrumiconsuiAlertMedium)), {
        UNSAFE_className: $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($225b0cd2fca96581$exports)), 'spectrum-HelpText-validationIcon')
    }), /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement("div", {
        ...errorMessageProps,
        className: $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($225b0cd2fca96581$exports)), 'spectrum-HelpText-text')
    }, errorMessage)) : /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement("div", {
        ...descriptionProps,
        className: $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($225b0cd2fca96581$exports)), 'spectrum-HelpText-text')
    }, description)));
}
/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It's commonly used in forms.
 */ const $3d8d47a9abc23df8$export$a67c0bc59081311a = /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).forwardRef($3d8d47a9abc23df8$var$HelpText);


var $442b043a58f6f3a5$exports = {};

$parcel$export($442b043a58f6f3a5$exports, "Label", () => $442b043a58f6f3a5$export$b04be29aa201d4f5);



var $18e03bf4602a8023$exports = {};
var $9264d0dac60d7201$exports = {};
$9264d0dac60d7201$exports = JSON.parse("{\"(optional)\":\"(اختياري)\",\"(required)\":\"(مطلوب)\"}");


var $0d353cbb95700e06$exports = {};
$0d353cbb95700e06$exports = JSON.parse("{\"(optional)\":\"(незадължително)\",\"(required)\":\"(задължително)\"}");


var $6d79ee982c3e38da$exports = {};
$6d79ee982c3e38da$exports = JSON.parse("{\"(optional)\":\"(volitelně)\",\"(required)\":\"(požadováno)\"}");


var $a0bc3adafd081074$exports = {};
$a0bc3adafd081074$exports = JSON.parse("{\"(optional)\":\"(valgfrit)\",\"(required)\":\"(obligatorisk)\"}");


var $82909a4c41803a55$exports = {};
$82909a4c41803a55$exports = JSON.parse("{\"(optional)\":\"(optional)\",\"(required)\":\"(erforderlich)\"}");


var $b64ce131e673a6f8$exports = {};
$b64ce131e673a6f8$exports = JSON.parse("{\"(optional)\":\"(προαιρετικό)\",\"(required)\":\"(απαιτείται)\"}");


var $00f9bb3e9c31a608$exports = {};
$00f9bb3e9c31a608$exports = JSON.parse("{\"(required)\":\"(required)\",\"(optional)\":\"(optional)\"}");


var $739c08d7312c5bd5$exports = {};
$739c08d7312c5bd5$exports = JSON.parse("{\"(optional)\":\"(opcional)\",\"(required)\":\"(necesario)\"}");


var $93b0f82f71d71c30$exports = {};
$93b0f82f71d71c30$exports = JSON.parse("{\"(optional)\":\"(valikuline)\",\"(required)\":\"(nõutav)\"}");


var $3f87326ca2840878$exports = {};
$3f87326ca2840878$exports = JSON.parse("{\"(optional)\":\"(valinnainen)\",\"(required)\":\"(pakollinen)\"}");


var $2b4d073ed935a2d2$exports = {};
$2b4d073ed935a2d2$exports = JSON.parse("{\"(optional)\":\"(facultatif)\",\"(required)\":\"(requis)\"}");


var $7477b2887982fdb1$exports = {};
$7477b2887982fdb1$exports = JSON.parse("{\"(optional)\":\"(אופציונלי)\",\"(required)\":\"(נדרש)\"}");


var $3d4451dfd2f13001$exports = {};
$3d4451dfd2f13001$exports = JSON.parse("{\"(optional)\":\"(opcionalno)\",\"(required)\":\"(obvezno)\"}");


var $5d2041db12cfbd3a$exports = {};
$5d2041db12cfbd3a$exports = JSON.parse("{\"(optional)\":\"(opcionális)\",\"(required)\":\"(kötelező)\"}");


var $a9ad61f690e1c784$exports = {};
$a9ad61f690e1c784$exports = JSON.parse("{\"(optional)\":\"(facoltativo)\",\"(required)\":\"(obbligatorio)\"}");


var $8ccd3e79c813a472$exports = {};
$8ccd3e79c813a472$exports = JSON.parse("{\"(optional)\":\"（オプション）\",\"(required)\":\"（必須）\"}");


var $8f77afd1e7815bf8$exports = {};
$8f77afd1e7815bf8$exports = JSON.parse("{\"(optional)\":\"(선택 사항)\",\"(required)\":\"(필수 사항)\"}");


var $0c7ce348bfaca1c0$exports = {};
$0c7ce348bfaca1c0$exports = JSON.parse("{\"(optional)\":\"(pasirenkama)\",\"(required)\":\"(privaloma)\"}");


var $4cc19553c46a87ca$exports = {};
$4cc19553c46a87ca$exports = JSON.parse("{\"(optional)\":\"(neobligāti)\",\"(required)\":\"(obligāti)\"}");


var $e00244ac66222698$exports = {};
$e00244ac66222698$exports = JSON.parse("{\"(optional)\":\"(valgfritt)\",\"(required)\":\"(obligatorisk)\"}");


var $a2bcde2f2751143f$exports = {};
$a2bcde2f2751143f$exports = JSON.parse("{\"(optional)\":\"(optioneel)\",\"(required)\":\"(vereist)\"}");


var $906f3c85d13263b2$exports = {};
$906f3c85d13263b2$exports = JSON.parse("{\"(optional)\":\"(opcjonalne)\",\"(required)\":\"(wymagane)\"}");


var $0e38241b9693cf81$exports = {};
$0e38241b9693cf81$exports = JSON.parse("{\"(optional)\":\"(opcional)\",\"(required)\":\"(obrigatório)\"}");


var $77e32b11e4ad92b4$exports = {};
$77e32b11e4ad92b4$exports = JSON.parse("{\"(optional)\":\"(opcional)\",\"(required)\":\"(obrigatório)\"}");


var $9cde095f8420ee9f$exports = {};
$9cde095f8420ee9f$exports = JSON.parse("{\"(optional)\":\"(opţional)\",\"(required)\":\"(obligatoriu)\"}");


var $89eb9cc2b617c0b3$exports = {};
$89eb9cc2b617c0b3$exports = JSON.parse("{\"(optional)\":\"(дополнительно)\",\"(required)\":\"(обязательно)\"}");


var $57ec48c99f2e2ff8$exports = {};
$57ec48c99f2e2ff8$exports = JSON.parse("{\"(optional)\":\"(nepovinné)\",\"(required)\":\"(povinné)\"}");


var $3d826201cf9a2299$exports = {};
$3d826201cf9a2299$exports = JSON.parse("{\"(optional)\":\"(opcijsko)\",\"(required)\":\"(obvezno)\"}");


var $6b00a19bb52c8a46$exports = {};
$6b00a19bb52c8a46$exports = JSON.parse("{\"(optional)\":\"(opciono)\",\"(required)\":\"(obavezno)\"}");


var $a389cfa2dc94f3d8$exports = {};
$a389cfa2dc94f3d8$exports = JSON.parse("{\"(optional)\":\"(valfritt)\",\"(required)\":\"(krävs)\"}");


var $4755f5350f9c95b4$exports = {};
$4755f5350f9c95b4$exports = JSON.parse("{\"(optional)\":\"(isteğe bağlı)\",\"(required)\":\"(gerekli)\"}");


var $3bc98b2bdbcc971e$exports = {};
$3bc98b2bdbcc971e$exports = JSON.parse("{\"(optional)\":\"(необов’язково)\",\"(required)\":\"(обов’язково)\"}");


var $7f314ff1a566ea52$exports = {};
$7f314ff1a566ea52$exports = JSON.parse("{\"(optional)\":\"（可选）\",\"(required)\":\"（必填）\"}");


var $c1d9eb6fdcb368d4$exports = {};
$c1d9eb6fdcb368d4$exports = JSON.parse("{\"(optional)\":\"(選填)\",\"(required)\":\"(必填)\"}");


$18e03bf4602a8023$exports = {
    "ar-AE": $9264d0dac60d7201$exports,
    "bg-BG": $0d353cbb95700e06$exports,
    "cs-CZ": $6d79ee982c3e38da$exports,
    "da-DK": $a0bc3adafd081074$exports,
    "de-DE": $82909a4c41803a55$exports,
    "el-GR": $b64ce131e673a6f8$exports,
    "en-US": $00f9bb3e9c31a608$exports,
    "es-ES": $739c08d7312c5bd5$exports,
    "et-EE": $93b0f82f71d71c30$exports,
    "fi-FI": $3f87326ca2840878$exports,
    "fr-FR": $2b4d073ed935a2d2$exports,
    "he-IL": $7477b2887982fdb1$exports,
    "hr-HR": $3d4451dfd2f13001$exports,
    "hu-HU": $5d2041db12cfbd3a$exports,
    "it-IT": $a9ad61f690e1c784$exports,
    "ja-JP": $8ccd3e79c813a472$exports,
    "ko-KR": $8f77afd1e7815bf8$exports,
    "lt-LT": $0c7ce348bfaca1c0$exports,
    "lv-LV": $4cc19553c46a87ca$exports,
    "nb-NO": $e00244ac66222698$exports,
    "nl-NL": $a2bcde2f2751143f$exports,
    "pl-PL": $906f3c85d13263b2$exports,
    "pt-BR": $0e38241b9693cf81$exports,
    "pt-PT": $77e32b11e4ad92b4$exports,
    "ro-RO": $9cde095f8420ee9f$exports,
    "ru-RU": $89eb9cc2b617c0b3$exports,
    "sk-SK": $57ec48c99f2e2ff8$exports,
    "sl-SI": $3d826201cf9a2299$exports,
    "sr-SP": $6b00a19bb52c8a46$exports,
    "sv-SE": $a389cfa2dc94f3d8$exports,
    "tr-TR": $4755f5350f9c95b4$exports,
    "uk-UA": $3bc98b2bdbcc971e$exports,
    "zh-CN": $7f314ff1a566ea52$exports,
    "zh-TW": $c1d9eb6fdcb368d4$exports
};



var $6cac92f0e3226af5$exports = {};

$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel", () => $6cac92f0e3226af5$export$493d18e796ae054, (v) => $6cac92f0e3226af5$export$493d18e796ae054 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel--positionSide", () => $6cac92f0e3226af5$export$9e6f19dc21f22f2e, (v) => $6cac92f0e3226af5$export$9e6f19dc21f22f2e = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel-requiredIcon", () => $6cac92f0e3226af5$export$7c47642c7d46f3c9, (v) => $6cac92f0e3226af5$export$7c47642c7d46f3c9 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-FieldLabel--alignEnd", () => $6cac92f0e3226af5$export$885efcc08143a987, (v) => $6cac92f0e3226af5$export$885efcc08143a987 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field", () => $6cac92f0e3226af5$export$f6d480ae1e56eba0, (v) => $6cac92f0e3226af5$export$f6d480ae1e56eba0 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field--positionTop", () => $6cac92f0e3226af5$export$a4ea780a9064d7f9, (v) => $6cac92f0e3226af5$export$a4ea780a9064d7f9 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field-field", () => $6cac92f0e3226af5$export$3ab8a3dc7f0563d, (v) => $6cac92f0e3226af5$export$3ab8a3dc7f0563d = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field-field--multiline", () => $6cac92f0e3226af5$export$f58a1e966a92ba5e, (v) => $6cac92f0e3226af5$export$f58a1e966a92ba5e = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field--positionSide", () => $6cac92f0e3226af5$export$2963225c91179589, (v) => $6cac92f0e3226af5$export$2963225c91179589 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Field-wrapper", () => $6cac92f0e3226af5$export$127df0b7290eb8ef, (v) => $6cac92f0e3226af5$export$127df0b7290eb8ef = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form", () => $6cac92f0e3226af5$export$94d2bcc94afabd89, (v) => $6cac92f0e3226af5$export$94d2bcc94afabd89 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form--positionSide", () => $6cac92f0e3226af5$export$7f44db659563c8f4, (v) => $6cac92f0e3226af5$export$7f44db659563c8f4 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form--positionTop", () => $6cac92f0e3226af5$export$11b8bc81fe551057, (v) => $6cac92f0e3226af5$export$11b8bc81fe551057 = v);
$parcel$export($6cac92f0e3226af5$exports, "spectrum-Form-itemLabel", () => $6cac92f0e3226af5$export$51ec27881a1e3928, (v) => $6cac92f0e3226af5$export$51ec27881a1e3928 = v);
$parcel$export($6cac92f0e3226af5$exports, "is-disabled", () => $6cac92f0e3226af5$export$d35bc1e505d1ebbf, (v) => $6cac92f0e3226af5$export$d35bc1e505d1ebbf = v);
var $6cac92f0e3226af5$export$493d18e796ae054;
var $6cac92f0e3226af5$export$9e6f19dc21f22f2e;
var $6cac92f0e3226af5$export$7c47642c7d46f3c9;
var $6cac92f0e3226af5$export$885efcc08143a987;
var $6cac92f0e3226af5$export$f6d480ae1e56eba0;
var $6cac92f0e3226af5$export$a4ea780a9064d7f9;
var $6cac92f0e3226af5$export$3ab8a3dc7f0563d;
var $6cac92f0e3226af5$export$f58a1e966a92ba5e;
var $6cac92f0e3226af5$export$2963225c91179589;
var $6cac92f0e3226af5$export$127df0b7290eb8ef;
var $6cac92f0e3226af5$export$94d2bcc94afabd89;
var $6cac92f0e3226af5$export$7f44db659563c8f4;
var $6cac92f0e3226af5$export$11b8bc81fe551057;
var $6cac92f0e3226af5$export$51ec27881a1e3928;
var $6cac92f0e3226af5$export$d35bc1e505d1ebbf;
$6cac92f0e3226af5$export$493d18e796ae054 = "_spectrum-FieldLabel_d2db1f";
$6cac92f0e3226af5$export$9e6f19dc21f22f2e = "_spectrum-FieldLabel--positionSide_d2db1f";
$6cac92f0e3226af5$export$7c47642c7d46f3c9 = "_spectrum-FieldLabel-requiredIcon_d2db1f";
$6cac92f0e3226af5$export$885efcc08143a987 = "_spectrum-FieldLabel--alignEnd_d2db1f";
$6cac92f0e3226af5$export$f6d480ae1e56eba0 = "_spectrum-Field_d2db1f";
$6cac92f0e3226af5$export$a4ea780a9064d7f9 = "_spectrum-Field--positionTop_d2db1f";
$6cac92f0e3226af5$export$3ab8a3dc7f0563d = "_spectrum-Field-field_d2db1f";
$6cac92f0e3226af5$export$f58a1e966a92ba5e = "_spectrum-Field-field--multiline_d2db1f";
$6cac92f0e3226af5$export$2963225c91179589 = "_spectrum-Field--positionSide_d2db1f";
$6cac92f0e3226af5$export$127df0b7290eb8ef = "_spectrum-Field-wrapper_d2db1f";
$6cac92f0e3226af5$export$94d2bcc94afabd89 = "_spectrum-Form_d2db1f";
$6cac92f0e3226af5$export$7f44db659563c8f4 = "_spectrum-Form--positionSide_d2db1f";
$6cac92f0e3226af5$export$11b8bc81fe551057 = "_spectrum-Form--positionTop_d2db1f";
$6cac92f0e3226af5$export$51ec27881a1e3928 = "_spectrum-Form-itemLabel_d2db1f";
$6cac92f0e3226af5$export$d35bc1e505d1ebbf = "_is-disabled_d2db1f";




function $442b043a58f6f3a5$var$Label(props, ref) {
    props = $lh4Iq$reactspectrumprovider.useProviderProps(props);
    let { children: children , labelPosition: labelPosition = 'top' , labelAlign: labelAlign = labelPosition === 'side' ? 'start' : null , isRequired: isRequired , necessityIndicator: necessityIndicator = isRequired != null ? 'icon' : null , includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName = false , htmlFor: htmlFor , for: labelFor , elementType: ElementType = 'label' , onClick: onClick , ...otherProps } = props;
    let domRef = $lh4Iq$reactspectrumutils.useDOMRef(ref);
    let { styleProps: styleProps  } = $lh4Iq$reactspectrumutils.useStyleProps(otherProps);
    let formatMessage = $lh4Iq$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($18e03bf4602a8023$exports)));
    let necessityLabel = isRequired ? formatMessage('(required)') : formatMessage('(optional)');
    let icon = /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement(($parcel$interopDefault($lh4Iq$spectrumiconsuiAsterisk)), {
        UNSAFE_className: $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($6cac92f0e3226af5$exports)), 'spectrum-FieldLabel-requiredIcon'),
        "aria-label": includeNecessityIndicatorInAccessibilityName ? formatMessage('(required)') : undefined
    });
    let labelClassNames = $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($6cac92f0e3226af5$exports)), 'spectrum-FieldLabel', {
        'spectrum-FieldLabel--positionSide': labelPosition === 'side',
        'spectrum-FieldLabel--alignEnd': labelAlign === 'end'
    }, styleProps.className);
    return(/*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement(ElementType, {
        ...$lh4Iq$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        onClick: onClick,
        ref: domRef,
        className: labelClassNames,
        htmlFor: ElementType === 'label' ? labelFor || htmlFor : undefined
    }, children, (necessityIndicator === 'label' || necessityIndicator === 'icon' && isRequired) && ' \u200b', necessityIndicator === 'label' && /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement("span", {
        "aria-hidden": !includeNecessityIndicatorInAccessibilityName ? isRequired : undefined
    }, necessityLabel), necessityIndicator === 'icon' && isRequired && icon));
}
let $442b043a58f6f3a5$export$b04be29aa201d4f5 = /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).forwardRef($442b043a58f6f3a5$var$Label);






function $1feca1330f4a4636$var$Field(props, ref) {
    props = $lh4Iq$reactspectrumform.useFormProps(props);
    let { label: label , labelPosition: labelPosition = 'top' , labelAlign: labelAlign , isRequired: isRequired , necessityIndicator: necessityIndicator , includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName , validationState: validationState , description: description , errorMessage: errorMessage , isDisabled: isDisabled , showErrorIcon: showErrorIcon , children: children , labelProps: labelProps , descriptionProps: // Not every component that uses <Field> supports help text.
    descriptionProps = {
    } , errorMessageProps: errorMessageProps = {
    } , elementType: elementType , wrapperClassName: wrapperClassName , ...otherProps } = props;
    let { styleProps: styleProps  } = $lh4Iq$reactspectrumutils.useStyleProps(otherProps);
    let hasHelpText = !!description || errorMessage && validationState === 'invalid';
    if (label || hasHelpText) {
        let labelWrapperClass = $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($6cac92f0e3226af5$exports)), 'spectrum-Field', {
            'spectrum-Field--positionTop': labelPosition === 'top',
            'spectrum-Field--positionSide': labelPosition === 'side'
        }, styleProps.className, wrapperClassName);
        children = /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).cloneElement(children, $lh4Iq$reactariautils.mergeProps(children.props, {
            className: $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($6cac92f0e3226af5$exports)), 'spectrum-Field-field')
        }));
        let renderHelpText = ()=>/*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement($3d8d47a9abc23df8$export$a67c0bc59081311a, {
                descriptionProps: descriptionProps,
                errorMessageProps: errorMessageProps,
                description: description,
                errorMessage: errorMessage,
                validationState: validationState,
                isDisabled: isDisabled,
                showErrorIcon: showErrorIcon
            })
        ;
        let renderChildren = ()=>/*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement($lh4Iq$reactspectrumlayout.Flex, {
                direction: "column",
                UNSAFE_className: $lh4Iq$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($6cac92f0e3226af5$exports)), 'spectrum-Field-wrapper')
            }, children, hasHelpText && renderHelpText())
        ;
        return(/*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement("div", {
            ...styleProps,
            ref: ref,
            className: labelWrapperClass
        }, label && /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).createElement($442b043a58f6f3a5$export$b04be29aa201d4f5, {
            ...labelProps,
            labelPosition: labelPosition,
            labelAlign: labelAlign,
            isRequired: isRequired,
            necessityIndicator: necessityIndicator,
            includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName,
            elementType: elementType
        }, label), renderChildren()));
    }
    return(/*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).cloneElement(children, $lh4Iq$reactariautils.mergeProps(children.props, {
        ...styleProps,
        ref: ref
    })));
}
let $1feca1330f4a4636$export$a455218a85c89869 = /*#__PURE__*/ ($parcel$interopDefault($lh4Iq$react)).forwardRef($1feca1330f4a4636$var$Field);




$parcel$exportWildcard(module.exports, $1feca1330f4a4636$exports);
$parcel$exportWildcard(module.exports, $442b043a58f6f3a5$exports);
$parcel$exportWildcard(module.exports, $3d8d47a9abc23df8$exports);


//# sourceMappingURL=main.js.map
