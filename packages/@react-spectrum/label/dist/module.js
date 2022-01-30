import "./main.css";
import {useStyleProps as $9WYwu$useStyleProps, classNames as $9WYwu$classNames, useDOMRef as $9WYwu$useDOMRef} from "@react-spectrum/utils";
import {Flex as $9WYwu$Flex} from "@react-spectrum/layout";
import {mergeProps as $9WYwu$mergeProps, filterDOMProps as $9WYwu$filterDOMProps} from "@react-aria/utils";
import $9WYwu$react from "react";
import {useFormProps as $9WYwu$useFormProps} from "@react-spectrum/form";
import $9WYwu$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $9WYwu$spectrumiconsuiAsterisk from "@spectrum-icons/ui/Asterisk";
import {useMessageFormatter as $9WYwu$useMessageFormatter} from "@react-aria/i18n";
import {useProviderProps as $9WYwu$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b097885375468e91$exports = {};

$parcel$export($b097885375468e91$exports, "Field", () => $b097885375468e91$export$a455218a85c89869);


var $4d519cc5ef24fb93$exports = {};

$parcel$export($4d519cc5ef24fb93$exports, "HelpText", () => $4d519cc5ef24fb93$export$a67c0bc59081311a);



var $cfd0522ee97d3022$exports = {};

$parcel$export($cfd0522ee97d3022$exports, "spectrum-HelpText", () => $cfd0522ee97d3022$export$c0875e83c57c7736, (v) => $cfd0522ee97d3022$export$c0875e83c57c7736 = v);
$parcel$export($cfd0522ee97d3022$exports, "spectrum-HelpText-validationIcon", () => $cfd0522ee97d3022$export$527776642b333691, (v) => $cfd0522ee97d3022$export$527776642b333691 = v);
$parcel$export($cfd0522ee97d3022$exports, "spectrum-HelpText-text", () => $cfd0522ee97d3022$export$a512452beb4231bf, (v) => $cfd0522ee97d3022$export$a512452beb4231bf = v);
$parcel$export($cfd0522ee97d3022$exports, "spectrum-HelpText--neutral", () => $cfd0522ee97d3022$export$6e9351b1ad13c, (v) => $cfd0522ee97d3022$export$6e9351b1ad13c = v);
$parcel$export($cfd0522ee97d3022$exports, "is-disabled", () => $cfd0522ee97d3022$export$d35bc1e505d1ebbf, (v) => $cfd0522ee97d3022$export$d35bc1e505d1ebbf = v);
$parcel$export($cfd0522ee97d3022$exports, "spectrum-HelpText--negative", () => $cfd0522ee97d3022$export$d31dd875d69daee0, (v) => $cfd0522ee97d3022$export$d31dd875d69daee0 = v);
var $cfd0522ee97d3022$export$c0875e83c57c7736;
var $cfd0522ee97d3022$export$527776642b333691;
var $cfd0522ee97d3022$export$a512452beb4231bf;
var $cfd0522ee97d3022$export$6e9351b1ad13c;
var $cfd0522ee97d3022$export$d35bc1e505d1ebbf;
var $cfd0522ee97d3022$export$d31dd875d69daee0;
$cfd0522ee97d3022$export$c0875e83c57c7736 = "_spectrum-HelpText_f395de";
$cfd0522ee97d3022$export$527776642b333691 = "_spectrum-HelpText-validationIcon_f395de";
$cfd0522ee97d3022$export$a512452beb4231bf = "_spectrum-HelpText-text_f395de";
$cfd0522ee97d3022$export$6e9351b1ad13c = "_spectrum-HelpText--neutral_f395de";
$cfd0522ee97d3022$export$d35bc1e505d1ebbf = "_is-disabled_f395de";
$cfd0522ee97d3022$export$d31dd875d69daee0 = "_spectrum-HelpText--negative_f395de";


function $4d519cc5ef24fb93$var$HelpText(props, ref) {
    let { description: description , errorMessage: errorMessage , validationState: validationState , isDisabled: isDisabled , showErrorIcon: showErrorIcon , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = props;
    let domRef = $9WYwu$useDOMRef(ref);
    let isErrorMessage = errorMessage && validationState === 'invalid';
    return(/*#__PURE__*/ $9WYwu$react.createElement("div", {
        className: $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($cfd0522ee97d3022$exports)), 'spectrum-HelpText', `spectrum-HelpText--${isErrorMessage ? 'negative' : 'neutral'}`, {
            'is-disabled': isDisabled
        }),
        ref: domRef
    }, isErrorMessage ? /*#__PURE__*/ $9WYwu$react.createElement($9WYwu$react.Fragment, null, showErrorIcon && /*#__PURE__*/ $9WYwu$react.createElement($9WYwu$spectrumiconsuiAlertMedium, {
        UNSAFE_className: $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($cfd0522ee97d3022$exports)), 'spectrum-HelpText-validationIcon')
    }), /*#__PURE__*/ $9WYwu$react.createElement("div", {
        ...errorMessageProps,
        className: $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($cfd0522ee97d3022$exports)), 'spectrum-HelpText-text')
    }, errorMessage)) : /*#__PURE__*/ $9WYwu$react.createElement("div", {
        ...descriptionProps,
        className: $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($cfd0522ee97d3022$exports)), 'spectrum-HelpText-text')
    }, description)));
}
/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It's commonly used in forms.
 */ const $4d519cc5ef24fb93$export$a67c0bc59081311a = /*#__PURE__*/ $9WYwu$react.forwardRef($4d519cc5ef24fb93$var$HelpText);


var $2398881d4a2e3798$exports = {};

$parcel$export($2398881d4a2e3798$exports, "Label", () => $2398881d4a2e3798$export$b04be29aa201d4f5);



var $d4b7371819919cba$exports = {};
var $1837457b86182c9b$exports = {};
$1837457b86182c9b$exports = JSON.parse("{\"(optional)\":\"(اختياري)\",\"(required)\":\"(مطلوب)\"}");


var $6eb4c0a35bb8102d$exports = {};
$6eb4c0a35bb8102d$exports = JSON.parse("{\"(optional)\":\"(незадължително)\",\"(required)\":\"(задължително)\"}");


var $ad270d82f40d2dde$exports = {};
$ad270d82f40d2dde$exports = JSON.parse("{\"(optional)\":\"(volitelně)\",\"(required)\":\"(požadováno)\"}");


var $21c8ca01334a1615$exports = {};
$21c8ca01334a1615$exports = JSON.parse("{\"(optional)\":\"(valgfrit)\",\"(required)\":\"(obligatorisk)\"}");


var $bfc8c16bce92a1f3$exports = {};
$bfc8c16bce92a1f3$exports = JSON.parse("{\"(optional)\":\"(optional)\",\"(required)\":\"(erforderlich)\"}");


var $ffb9a8bd7f99465c$exports = {};
$ffb9a8bd7f99465c$exports = JSON.parse("{\"(optional)\":\"(προαιρετικό)\",\"(required)\":\"(απαιτείται)\"}");


var $95b1c66d67f725fd$exports = {};
$95b1c66d67f725fd$exports = JSON.parse("{\"(required)\":\"(required)\",\"(optional)\":\"(optional)\"}");


var $0b60a0fe35e25e62$exports = {};
$0b60a0fe35e25e62$exports = JSON.parse("{\"(optional)\":\"(opcional)\",\"(required)\":\"(necesario)\"}");


var $a8aab04baa218b47$exports = {};
$a8aab04baa218b47$exports = JSON.parse("{\"(optional)\":\"(valikuline)\",\"(required)\":\"(nõutav)\"}");


var $8199f452c83fe9f7$exports = {};
$8199f452c83fe9f7$exports = JSON.parse("{\"(optional)\":\"(valinnainen)\",\"(required)\":\"(pakollinen)\"}");


var $382faedbeb162e4e$exports = {};
$382faedbeb162e4e$exports = JSON.parse("{\"(optional)\":\"(facultatif)\",\"(required)\":\"(requis)\"}");


var $ec2d6b88c3d77d71$exports = {};
$ec2d6b88c3d77d71$exports = JSON.parse("{\"(optional)\":\"(אופציונלי)\",\"(required)\":\"(נדרש)\"}");


var $0b8c8ee773dfc001$exports = {};
$0b8c8ee773dfc001$exports = JSON.parse("{\"(optional)\":\"(opcionalno)\",\"(required)\":\"(obvezno)\"}");


var $fb7e9632b0d75491$exports = {};
$fb7e9632b0d75491$exports = JSON.parse("{\"(optional)\":\"(opcionális)\",\"(required)\":\"(kötelező)\"}");


var $95b431586eb0c00d$exports = {};
$95b431586eb0c00d$exports = JSON.parse("{\"(optional)\":\"(facoltativo)\",\"(required)\":\"(obbligatorio)\"}");


var $0a837cbcdd9f48da$exports = {};
$0a837cbcdd9f48da$exports = JSON.parse("{\"(optional)\":\"（オプション）\",\"(required)\":\"（必須）\"}");


var $651bb5ca920efc9d$exports = {};
$651bb5ca920efc9d$exports = JSON.parse("{\"(optional)\":\"(선택 사항)\",\"(required)\":\"(필수 사항)\"}");


var $5393b4d74df2b8bb$exports = {};
$5393b4d74df2b8bb$exports = JSON.parse("{\"(optional)\":\"(pasirenkama)\",\"(required)\":\"(privaloma)\"}");


var $3495fefff7f63251$exports = {};
$3495fefff7f63251$exports = JSON.parse("{\"(optional)\":\"(neobligāti)\",\"(required)\":\"(obligāti)\"}");


var $71e3aecc3d3d77ea$exports = {};
$71e3aecc3d3d77ea$exports = JSON.parse("{\"(optional)\":\"(valgfritt)\",\"(required)\":\"(obligatorisk)\"}");


var $06d24f3bcf4f392d$exports = {};
$06d24f3bcf4f392d$exports = JSON.parse("{\"(optional)\":\"(optioneel)\",\"(required)\":\"(vereist)\"}");


var $f93bcc96737a4617$exports = {};
$f93bcc96737a4617$exports = JSON.parse("{\"(optional)\":\"(opcjonalne)\",\"(required)\":\"(wymagane)\"}");


var $32f668c3e3f06fcd$exports = {};
$32f668c3e3f06fcd$exports = JSON.parse("{\"(optional)\":\"(opcional)\",\"(required)\":\"(obrigatório)\"}");


var $b8c7bf5afb33cd48$exports = {};
$b8c7bf5afb33cd48$exports = JSON.parse("{\"(optional)\":\"(opcional)\",\"(required)\":\"(obrigatório)\"}");


var $a6e0e855a292ef13$exports = {};
$a6e0e855a292ef13$exports = JSON.parse("{\"(optional)\":\"(opţional)\",\"(required)\":\"(obligatoriu)\"}");


var $8b91fb5c0170d1a9$exports = {};
$8b91fb5c0170d1a9$exports = JSON.parse("{\"(optional)\":\"(дополнительно)\",\"(required)\":\"(обязательно)\"}");


var $6d7b1f711e5a5b5a$exports = {};
$6d7b1f711e5a5b5a$exports = JSON.parse("{\"(optional)\":\"(nepovinné)\",\"(required)\":\"(povinné)\"}");


var $3ebdd557854ee822$exports = {};
$3ebdd557854ee822$exports = JSON.parse("{\"(optional)\":\"(opcijsko)\",\"(required)\":\"(obvezno)\"}");


var $19853710fec704b4$exports = {};
$19853710fec704b4$exports = JSON.parse("{\"(optional)\":\"(opciono)\",\"(required)\":\"(obavezno)\"}");


var $d85c58af1e08cd32$exports = {};
$d85c58af1e08cd32$exports = JSON.parse("{\"(optional)\":\"(valfritt)\",\"(required)\":\"(krävs)\"}");


var $eee2ae10bc7704ee$exports = {};
$eee2ae10bc7704ee$exports = JSON.parse("{\"(optional)\":\"(isteğe bağlı)\",\"(required)\":\"(gerekli)\"}");


var $0aa5f29fcaf283ff$exports = {};
$0aa5f29fcaf283ff$exports = JSON.parse("{\"(optional)\":\"(необов’язково)\",\"(required)\":\"(обов’язково)\"}");


var $2ae7e29d32c71a8c$exports = {};
$2ae7e29d32c71a8c$exports = JSON.parse("{\"(optional)\":\"（可选）\",\"(required)\":\"（必填）\"}");


var $71428b81468edeac$exports = {};
$71428b81468edeac$exports = JSON.parse("{\"(optional)\":\"(選填)\",\"(required)\":\"(必填)\"}");


$d4b7371819919cba$exports = {
    "ar-AE": $1837457b86182c9b$exports,
    "bg-BG": $6eb4c0a35bb8102d$exports,
    "cs-CZ": $ad270d82f40d2dde$exports,
    "da-DK": $21c8ca01334a1615$exports,
    "de-DE": $bfc8c16bce92a1f3$exports,
    "el-GR": $ffb9a8bd7f99465c$exports,
    "en-US": $95b1c66d67f725fd$exports,
    "es-ES": $0b60a0fe35e25e62$exports,
    "et-EE": $a8aab04baa218b47$exports,
    "fi-FI": $8199f452c83fe9f7$exports,
    "fr-FR": $382faedbeb162e4e$exports,
    "he-IL": $ec2d6b88c3d77d71$exports,
    "hr-HR": $0b8c8ee773dfc001$exports,
    "hu-HU": $fb7e9632b0d75491$exports,
    "it-IT": $95b431586eb0c00d$exports,
    "ja-JP": $0a837cbcdd9f48da$exports,
    "ko-KR": $651bb5ca920efc9d$exports,
    "lt-LT": $5393b4d74df2b8bb$exports,
    "lv-LV": $3495fefff7f63251$exports,
    "nb-NO": $71e3aecc3d3d77ea$exports,
    "nl-NL": $06d24f3bcf4f392d$exports,
    "pl-PL": $f93bcc96737a4617$exports,
    "pt-BR": $32f668c3e3f06fcd$exports,
    "pt-PT": $b8c7bf5afb33cd48$exports,
    "ro-RO": $a6e0e855a292ef13$exports,
    "ru-RU": $8b91fb5c0170d1a9$exports,
    "sk-SK": $6d7b1f711e5a5b5a$exports,
    "sl-SI": $3ebdd557854ee822$exports,
    "sr-SP": $19853710fec704b4$exports,
    "sv-SE": $d85c58af1e08cd32$exports,
    "tr-TR": $eee2ae10bc7704ee$exports,
    "uk-UA": $0aa5f29fcaf283ff$exports,
    "zh-CN": $2ae7e29d32c71a8c$exports,
    "zh-TW": $71428b81468edeac$exports
};



var $29047d5b2695cedc$exports = {};

$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel", () => $29047d5b2695cedc$export$493d18e796ae054, (v) => $29047d5b2695cedc$export$493d18e796ae054 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel--positionSide", () => $29047d5b2695cedc$export$9e6f19dc21f22f2e, (v) => $29047d5b2695cedc$export$9e6f19dc21f22f2e = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel-requiredIcon", () => $29047d5b2695cedc$export$7c47642c7d46f3c9, (v) => $29047d5b2695cedc$export$7c47642c7d46f3c9 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel--alignEnd", () => $29047d5b2695cedc$export$885efcc08143a987, (v) => $29047d5b2695cedc$export$885efcc08143a987 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field", () => $29047d5b2695cedc$export$f6d480ae1e56eba0, (v) => $29047d5b2695cedc$export$f6d480ae1e56eba0 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field--positionTop", () => $29047d5b2695cedc$export$a4ea780a9064d7f9, (v) => $29047d5b2695cedc$export$a4ea780a9064d7f9 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-field", () => $29047d5b2695cedc$export$3ab8a3dc7f0563d, (v) => $29047d5b2695cedc$export$3ab8a3dc7f0563d = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-field--multiline", () => $29047d5b2695cedc$export$f58a1e966a92ba5e, (v) => $29047d5b2695cedc$export$f58a1e966a92ba5e = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field--positionSide", () => $29047d5b2695cedc$export$2963225c91179589, (v) => $29047d5b2695cedc$export$2963225c91179589 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-wrapper", () => $29047d5b2695cedc$export$127df0b7290eb8ef, (v) => $29047d5b2695cedc$export$127df0b7290eb8ef = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form", () => $29047d5b2695cedc$export$94d2bcc94afabd89, (v) => $29047d5b2695cedc$export$94d2bcc94afabd89 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form--positionSide", () => $29047d5b2695cedc$export$7f44db659563c8f4, (v) => $29047d5b2695cedc$export$7f44db659563c8f4 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form--positionTop", () => $29047d5b2695cedc$export$11b8bc81fe551057, (v) => $29047d5b2695cedc$export$11b8bc81fe551057 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form-itemLabel", () => $29047d5b2695cedc$export$51ec27881a1e3928, (v) => $29047d5b2695cedc$export$51ec27881a1e3928 = v);
$parcel$export($29047d5b2695cedc$exports, "is-disabled", () => $29047d5b2695cedc$export$d35bc1e505d1ebbf, (v) => $29047d5b2695cedc$export$d35bc1e505d1ebbf = v);
var $29047d5b2695cedc$export$493d18e796ae054;
var $29047d5b2695cedc$export$9e6f19dc21f22f2e;
var $29047d5b2695cedc$export$7c47642c7d46f3c9;
var $29047d5b2695cedc$export$885efcc08143a987;
var $29047d5b2695cedc$export$f6d480ae1e56eba0;
var $29047d5b2695cedc$export$a4ea780a9064d7f9;
var $29047d5b2695cedc$export$3ab8a3dc7f0563d;
var $29047d5b2695cedc$export$f58a1e966a92ba5e;
var $29047d5b2695cedc$export$2963225c91179589;
var $29047d5b2695cedc$export$127df0b7290eb8ef;
var $29047d5b2695cedc$export$94d2bcc94afabd89;
var $29047d5b2695cedc$export$7f44db659563c8f4;
var $29047d5b2695cedc$export$11b8bc81fe551057;
var $29047d5b2695cedc$export$51ec27881a1e3928;
var $29047d5b2695cedc$export$d35bc1e505d1ebbf;
$29047d5b2695cedc$export$493d18e796ae054 = "_spectrum-FieldLabel_d2db1f";
$29047d5b2695cedc$export$9e6f19dc21f22f2e = "_spectrum-FieldLabel--positionSide_d2db1f";
$29047d5b2695cedc$export$7c47642c7d46f3c9 = "_spectrum-FieldLabel-requiredIcon_d2db1f";
$29047d5b2695cedc$export$885efcc08143a987 = "_spectrum-FieldLabel--alignEnd_d2db1f";
$29047d5b2695cedc$export$f6d480ae1e56eba0 = "_spectrum-Field_d2db1f";
$29047d5b2695cedc$export$a4ea780a9064d7f9 = "_spectrum-Field--positionTop_d2db1f";
$29047d5b2695cedc$export$3ab8a3dc7f0563d = "_spectrum-Field-field_d2db1f";
$29047d5b2695cedc$export$f58a1e966a92ba5e = "_spectrum-Field-field--multiline_d2db1f";
$29047d5b2695cedc$export$2963225c91179589 = "_spectrum-Field--positionSide_d2db1f";
$29047d5b2695cedc$export$127df0b7290eb8ef = "_spectrum-Field-wrapper_d2db1f";
$29047d5b2695cedc$export$94d2bcc94afabd89 = "_spectrum-Form_d2db1f";
$29047d5b2695cedc$export$7f44db659563c8f4 = "_spectrum-Form--positionSide_d2db1f";
$29047d5b2695cedc$export$11b8bc81fe551057 = "_spectrum-Form--positionTop_d2db1f";
$29047d5b2695cedc$export$51ec27881a1e3928 = "_spectrum-Form-itemLabel_d2db1f";
$29047d5b2695cedc$export$d35bc1e505d1ebbf = "_is-disabled_d2db1f";




function $2398881d4a2e3798$var$Label(props, ref) {
    props = $9WYwu$useProviderProps(props);
    let { children: children , labelPosition: labelPosition = 'top' , labelAlign: labelAlign = labelPosition === 'side' ? 'start' : null , isRequired: isRequired , necessityIndicator: necessityIndicator = isRequired != null ? 'icon' : null , includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName = false , htmlFor: htmlFor , for: labelFor , elementType: ElementType = 'label' , onClick: onClick , ...otherProps } = props;
    let domRef = $9WYwu$useDOMRef(ref);
    let { styleProps: styleProps  } = $9WYwu$useStyleProps(otherProps);
    let formatMessage = $9WYwu$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($d4b7371819919cba$exports)));
    let necessityLabel = isRequired ? formatMessage('(required)') : formatMessage('(optional)');
    let icon = /*#__PURE__*/ $9WYwu$react.createElement($9WYwu$spectrumiconsuiAsterisk, {
        UNSAFE_className: $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-FieldLabel-requiredIcon'),
        "aria-label": includeNecessityIndicatorInAccessibilityName ? formatMessage('(required)') : undefined
    });
    let labelClassNames = $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-FieldLabel', {
        'spectrum-FieldLabel--positionSide': labelPosition === 'side',
        'spectrum-FieldLabel--alignEnd': labelAlign === 'end'
    }, styleProps.className);
    return(/*#__PURE__*/ $9WYwu$react.createElement(ElementType, {
        ...$9WYwu$filterDOMProps(otherProps),
        ...styleProps,
        onClick: onClick,
        ref: domRef,
        className: labelClassNames,
        htmlFor: ElementType === 'label' ? labelFor || htmlFor : undefined
    }, children, (necessityIndicator === 'label' || necessityIndicator === 'icon' && isRequired) && ' \u200b', necessityIndicator === 'label' && /*#__PURE__*/ $9WYwu$react.createElement("span", {
        "aria-hidden": !includeNecessityIndicatorInAccessibilityName ? isRequired : undefined
    }, necessityLabel), necessityIndicator === 'icon' && isRequired && icon));
}
let $2398881d4a2e3798$export$b04be29aa201d4f5 = /*#__PURE__*/ $9WYwu$react.forwardRef($2398881d4a2e3798$var$Label);






function $b097885375468e91$var$Field(props, ref) {
    props = $9WYwu$useFormProps(props);
    let { label: label , labelPosition: labelPosition = 'top' , labelAlign: labelAlign , isRequired: isRequired , necessityIndicator: necessityIndicator , includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName , validationState: validationState , description: description , errorMessage: errorMessage , isDisabled: isDisabled , showErrorIcon: showErrorIcon , children: children , labelProps: labelProps , descriptionProps: // Not every component that uses <Field> supports help text.
    descriptionProps = {
    } , errorMessageProps: errorMessageProps = {
    } , elementType: elementType , wrapperClassName: wrapperClassName , ...otherProps } = props;
    let { styleProps: styleProps  } = $9WYwu$useStyleProps(otherProps);
    let hasHelpText = !!description || errorMessage && validationState === 'invalid';
    if (label || hasHelpText) {
        let labelWrapperClass = $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-Field', {
            'spectrum-Field--positionTop': labelPosition === 'top',
            'spectrum-Field--positionSide': labelPosition === 'side'
        }, styleProps.className, wrapperClassName);
        children = /*#__PURE__*/ $9WYwu$react.cloneElement(children, $9WYwu$mergeProps(children.props, {
            className: $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-Field-field')
        }));
        let renderHelpText = ()=>/*#__PURE__*/ $9WYwu$react.createElement($4d519cc5ef24fb93$export$a67c0bc59081311a, {
                descriptionProps: descriptionProps,
                errorMessageProps: errorMessageProps,
                description: description,
                errorMessage: errorMessage,
                validationState: validationState,
                isDisabled: isDisabled,
                showErrorIcon: showErrorIcon
            })
        ;
        let renderChildren = ()=>/*#__PURE__*/ $9WYwu$react.createElement($9WYwu$Flex, {
                direction: "column",
                UNSAFE_className: $9WYwu$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-Field-wrapper')
            }, children, hasHelpText && renderHelpText())
        ;
        return(/*#__PURE__*/ $9WYwu$react.createElement("div", {
            ...styleProps,
            ref: ref,
            className: labelWrapperClass
        }, label && /*#__PURE__*/ $9WYwu$react.createElement($2398881d4a2e3798$export$b04be29aa201d4f5, {
            ...labelProps,
            labelPosition: labelPosition,
            labelAlign: labelAlign,
            isRequired: isRequired,
            necessityIndicator: necessityIndicator,
            includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName,
            elementType: elementType
        }, label), renderChildren()));
    }
    return(/*#__PURE__*/ $9WYwu$react.cloneElement(children, $9WYwu$mergeProps(children.props, {
        ...styleProps,
        ref: ref
    })));
}
let $b097885375468e91$export$a455218a85c89869 = /*#__PURE__*/ $9WYwu$react.forwardRef($b097885375468e91$var$Field);






export {$b097885375468e91$export$a455218a85c89869 as Field, $2398881d4a2e3798$export$b04be29aa201d4f5 as Label, $4d519cc5ef24fb93$export$a67c0bc59081311a as HelpText};
//# sourceMappingURL=module.js.map
