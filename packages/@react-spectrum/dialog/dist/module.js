import "./main.css";
import $SNpLt$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import {Button as $SNpLt$Button, ActionButton as $SNpLt$ActionButton} from "@react-spectrum/button";
import {ButtonGroup as $SNpLt$ButtonGroup} from "@react-spectrum/buttongroup";
import {chain as $SNpLt$chain, mergeProps as $SNpLt$mergeProps} from "@react-aria/utils";
import {useStyleProps as $SNpLt$useStyleProps, classNames as $SNpLt$classNames, useDOMRef as $SNpLt$useDOMRef, useHasChild as $SNpLt$useHasChild, unwrapDOMRef as $SNpLt$unwrapDOMRef, SlotProvider as $SNpLt$SlotProvider, useMediaQuery as $SNpLt$useMediaQuery} from "@react-spectrum/utils";
import {Content as $SNpLt$Content} from "@react-spectrum/view";
import {Divider as $SNpLt$Divider} from "@react-spectrum/divider";
import {Heading as $SNpLt$Heading} from "@react-spectrum/text";
import $SNpLt$react, {useContext as $SNpLt$useContext, forwardRef as $SNpLt$forwardRef, useRef as $SNpLt$useRef, useMemo as $SNpLt$useMemo, useEffect as $SNpLt$useEffect, Fragment as $SNpLt$Fragment} from "react";
import {useMessageFormatter as $SNpLt$useMessageFormatter} from "@react-aria/i18n";
import $SNpLt$spectrumiconsuiCrossLarge from "@spectrum-icons/ui/CrossLarge";
import {DismissButton as $SNpLt$DismissButton, useOverlayPosition as $SNpLt$useOverlayPosition, useOverlayTrigger as $SNpLt$useOverlayTrigger} from "@react-aria/overlays";
import {FocusScope as $SNpLt$FocusScope} from "@react-aria/focus";
import {Grid as $SNpLt$Grid} from "@react-spectrum/layout";
import {useDialog as $SNpLt$useDialog} from "@react-aria/dialog";
import {Modal as $SNpLt$Modal, Tray as $SNpLt$Tray, Popover as $SNpLt$Popover} from "@react-spectrum/overlays";
import {useOverlayTriggerState as $SNpLt$useOverlayTriggerState} from "@react-stately/overlays";
import {PressResponder as $SNpLt$PressResponder} from "@react-aria/interactions";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b79435df1ee4f796$exports = {};

$parcel$export($b79435df1ee4f796$exports, "AlertDialog", () => $b79435df1ee4f796$export$de466dd8317b0b75);






var $1e9ade6acb940ac4$exports = {};

$parcel$export($1e9ade6acb940ac4$exports, "Dialog", () => $1e9ade6acb940ac4$export$3ddf2d174ce01153);




const $94cff44bc8cf07f8$export$8b93a07348a7730c = $SNpLt$react.createContext(null);





var $e8ea110d849b5c53$exports = {};
var $2a0c50aed2802e09$exports = {};
$2a0c50aed2802e09$exports = JSON.parse("{\"alert\":\"تنبيه\",\"dismiss\":\"تجاهل\"}");


var $0623aa5676593b10$exports = {};
$0623aa5676593b10$exports = JSON.parse("{\"alert\":\"Сигнал\",\"dismiss\":\"Отхвърляне\"}");


var $f329485779744e1c$exports = {};
$f329485779744e1c$exports = JSON.parse("{\"alert\":\"Výstraha\",\"dismiss\":\"Odstranit\"}");


var $4c8cb15106e4c381$exports = {};
$4c8cb15106e4c381$exports = JSON.parse("{\"alert\":\"Advarsel\",\"dismiss\":\"Luk\"}");


var $bb7a95a85cdf35a8$exports = {};
$bb7a95a85cdf35a8$exports = JSON.parse("{\"alert\":\"Warnhinweis\",\"dismiss\":\"Schließen\"}");


var $7804d461f4501149$exports = {};
$7804d461f4501149$exports = JSON.parse("{\"alert\":\"Ειδοποίηση\",\"dismiss\":\"Απόρριψη\"}");


var $38b5fbf7d3e5ccc0$exports = {};
$38b5fbf7d3e5ccc0$exports = JSON.parse("{\"dismiss\":\"Dismiss\",\"alert\":\"Alert\"}");


var $8aeb43beda0cd7cc$exports = {};
$8aeb43beda0cd7cc$exports = JSON.parse("{\"alert\":\"Alerta\",\"dismiss\":\"Descartar\"}");


var $195f2bd3b6618ba5$exports = {};
$195f2bd3b6618ba5$exports = JSON.parse("{\"alert\":\"Teade\",\"dismiss\":\"Lõpeta\"}");


var $52a47ef5cdcd1b95$exports = {};
$52a47ef5cdcd1b95$exports = JSON.parse("{\"alert\":\"Hälytys\",\"dismiss\":\"Hylkää\"}");


var $20aded25ceb470ae$exports = {};
$20aded25ceb470ae$exports = JSON.parse("{\"alert\":\"Alerte\",\"dismiss\":\"Rejeter\"}");


var $217f06228e9c9ca7$exports = {};
$217f06228e9c9ca7$exports = JSON.parse("{\"alert\":\"התראה\",\"dismiss\":\"התעלם\"}");


var $766263f14df9dd16$exports = {};
$766263f14df9dd16$exports = JSON.parse("{\"alert\":\"Upozorenje\",\"dismiss\":\"Odbaci\"}");


var $d21e988f1c57a7fc$exports = {};
$d21e988f1c57a7fc$exports = JSON.parse("{\"alert\":\"Figyelmeztetés\",\"dismiss\":\"Elutasítás\"}");


var $1d1219410d4d8597$exports = {};
$1d1219410d4d8597$exports = JSON.parse("{\"alert\":\"Avviso\",\"dismiss\":\"Ignora\"}");


var $dd1c941e4f95178a$exports = {};
$dd1c941e4f95178a$exports = JSON.parse("{\"alert\":\"アラート\",\"dismiss\":\"閉じる\"}");


var $82d34487dfeaa05b$exports = {};
$82d34487dfeaa05b$exports = JSON.parse("{\"alert\":\"경고\",\"dismiss\":\"무시\"}");


var $e561d2ab31f1086c$exports = {};
$e561d2ab31f1086c$exports = JSON.parse("{\"alert\":\"Įspėjimas\",\"dismiss\":\"Atmesti\"}");


var $b9f1de7156977250$exports = {};
$b9f1de7156977250$exports = JSON.parse("{\"alert\":\"Brīdinājums\",\"dismiss\":\"Nerādīt\"}");


var $84964eb8ee757f3a$exports = {};
$84964eb8ee757f3a$exports = JSON.parse("{\"alert\":\"Varsel\",\"dismiss\":\"Lukk\"}");


var $8e493ed444af1586$exports = {};
$8e493ed444af1586$exports = JSON.parse("{\"alert\":\"Melding\",\"dismiss\":\"Negeren\"}");


var $611fe8b427883218$exports = {};
$611fe8b427883218$exports = JSON.parse("{\"alert\":\"Ostrzeżenie\",\"dismiss\":\"Zignoruj\"}");


var $b1e7c19946b04c75$exports = {};
$b1e7c19946b04c75$exports = JSON.parse("{\"alert\":\"Alerta\",\"dismiss\":\"Descartar\"}");


var $90fb4d0a389560f0$exports = {};
$90fb4d0a389560f0$exports = JSON.parse("{\"alert\":\"Alerta\",\"dismiss\":\"Dispensar\"}");


var $1d88e53a4cec489a$exports = {};
$1d88e53a4cec489a$exports = JSON.parse("{\"alert\":\"Alertă\",\"dismiss\":\"Revocare\"}");


var $272e66cc0041e7f5$exports = {};
$272e66cc0041e7f5$exports = JSON.parse("{\"alert\":\"Предупреждение\",\"dismiss\":\"Пропустить\"}");


var $28e07a23752bfb86$exports = {};
$28e07a23752bfb86$exports = JSON.parse("{\"alert\":\"Upozornenie\",\"dismiss\":\"Zrušiť\"}");


var $6ad7a81e3dfacedb$exports = {};
$6ad7a81e3dfacedb$exports = JSON.parse("{\"alert\":\"Opozorilo\",\"dismiss\":\"Opusti\"}");


var $355238c1fc4cdfe6$exports = {};
$355238c1fc4cdfe6$exports = JSON.parse("{\"alert\":\"Upozorenje\",\"dismiss\":\"Odbaci\"}");


var $2951405692e88a4b$exports = {};
$2951405692e88a4b$exports = JSON.parse("{\"alert\":\"Varning\",\"dismiss\":\"Avvisa\"}");


var $e3d1740468c06018$exports = {};
$e3d1740468c06018$exports = JSON.parse("{\"alert\":\"Uyarı\",\"dismiss\":\"Kapat\"}");


var $32f2aedcae723add$exports = {};
$32f2aedcae723add$exports = JSON.parse("{\"alert\":\"Сигнал тривоги\",\"dismiss\":\"Скасувати\"}");


var $f21f9cc6bfa85295$exports = {};
$f21f9cc6bfa85295$exports = JSON.parse("{\"alert\":\"警报\",\"dismiss\":\"取消\"}");


var $4acddef5a68cec24$exports = {};
$4acddef5a68cec24$exports = JSON.parse("{\"alert\":\"警示\",\"dismiss\":\"關閉\"}");


$e8ea110d849b5c53$exports = {
    "ar-AE": $2a0c50aed2802e09$exports,
    "bg-BG": $0623aa5676593b10$exports,
    "cs-CZ": $f329485779744e1c$exports,
    "da-DK": $4c8cb15106e4c381$exports,
    "de-DE": $bb7a95a85cdf35a8$exports,
    "el-GR": $7804d461f4501149$exports,
    "en-US": $38b5fbf7d3e5ccc0$exports,
    "es-ES": $8aeb43beda0cd7cc$exports,
    "et-EE": $195f2bd3b6618ba5$exports,
    "fi-FI": $52a47ef5cdcd1b95$exports,
    "fr-FR": $20aded25ceb470ae$exports,
    "he-IL": $217f06228e9c9ca7$exports,
    "hr-HR": $766263f14df9dd16$exports,
    "hu-HU": $d21e988f1c57a7fc$exports,
    "it-IT": $1d1219410d4d8597$exports,
    "ja-JP": $dd1c941e4f95178a$exports,
    "ko-KR": $82d34487dfeaa05b$exports,
    "lt-LT": $e561d2ab31f1086c$exports,
    "lv-LV": $b9f1de7156977250$exports,
    "nb-NO": $84964eb8ee757f3a$exports,
    "nl-NL": $8e493ed444af1586$exports,
    "pl-PL": $611fe8b427883218$exports,
    "pt-BR": $b1e7c19946b04c75$exports,
    "pt-PT": $90fb4d0a389560f0$exports,
    "ro-RO": $1d88e53a4cec489a$exports,
    "ru-RU": $272e66cc0041e7f5$exports,
    "sk-SK": $28e07a23752bfb86$exports,
    "sl-SI": $6ad7a81e3dfacedb$exports,
    "sr-SP": $355238c1fc4cdfe6$exports,
    "sv-SE": $2951405692e88a4b$exports,
    "tr-TR": $e3d1740468c06018$exports,
    "uk-UA": $32f2aedcae723add$exports,
    "zh-CN": $f21f9cc6bfa85295$exports,
    "zh-TW": $4acddef5a68cec24$exports
};




var $c0bf6b8ed1d13638$exports = {};

$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog", () => $c0bf6b8ed1d13638$export$4681f3bcac39b2b1, (v) => $c0bf6b8ed1d13638$export$4681f3bcac39b2b1 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--small", () => $c0bf6b8ed1d13638$export$5f2d9cc47409bd63, (v) => $c0bf6b8ed1d13638$export$5f2d9cc47409bd63 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--medium", () => $c0bf6b8ed1d13638$export$b9b8ef443d0a67ca, (v) => $c0bf6b8ed1d13638$export$b9b8ef443d0a67ca = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--large", () => $c0bf6b8ed1d13638$export$b73c0c2fca84be2b, (v) => $c0bf6b8ed1d13638$export$b73c0c2fca84be2b = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-hero", () => $c0bf6b8ed1d13638$export$d405fb0a0231aa1a, (v) => $c0bf6b8ed1d13638$export$d405fb0a0231aa1a = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-grid", () => $c0bf6b8ed1d13638$export$c03cd5e23af67ff5, (v) => $c0bf6b8ed1d13638$export$c03cd5e23af67ff5 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-heading", () => $c0bf6b8ed1d13638$export$94335d73b7b209ec, (v) => $c0bf6b8ed1d13638$export$94335d73b7b209ec = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-heading--noHeader", () => $c0bf6b8ed1d13638$export$ade8307239736e89, (v) => $c0bf6b8ed1d13638$export$ade8307239736e89 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-header", () => $c0bf6b8ed1d13638$export$1e158eaa6363e131, (v) => $c0bf6b8ed1d13638$export$1e158eaa6363e131 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-typeIcon", () => $c0bf6b8ed1d13638$export$5beee9480fc6ff07, (v) => $c0bf6b8ed1d13638$export$5beee9480fc6ff07 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-divider", () => $c0bf6b8ed1d13638$export$dd7633d642d0bc1c, (v) => $c0bf6b8ed1d13638$export$dd7633d642d0bc1c = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--noDivider", () => $c0bf6b8ed1d13638$export$22425527a8943917, (v) => $c0bf6b8ed1d13638$export$22425527a8943917 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-content", () => $c0bf6b8ed1d13638$export$cb8eccd0f3639238, (v) => $c0bf6b8ed1d13638$export$cb8eccd0f3639238 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-footer", () => $c0bf6b8ed1d13638$export$3ecb5025a06fe08f, (v) => $c0bf6b8ed1d13638$export$3ecb5025a06fe08f = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Button", () => $c0bf6b8ed1d13638$export$1db4cca5b4ade39a, (v) => $c0bf6b8ed1d13638$export$1db4cca5b4ade39a = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-buttonGroup", () => $c0bf6b8ed1d13638$export$570ae852861555b7, (v) => $c0bf6b8ed1d13638$export$570ae852861555b7 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-buttonGroup--noFooter", () => $c0bf6b8ed1d13638$export$39dd75369bf2e830, (v) => $c0bf6b8ed1d13638$export$39dd75369bf2e830 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--dismissable", () => $c0bf6b8ed1d13638$export$9461b285d631d575, (v) => $c0bf6b8ed1d13638$export$9461b285d631d575 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog-closeButton", () => $c0bf6b8ed1d13638$export$a8494287d763a75d, (v) => $c0bf6b8ed1d13638$export$a8494287d763a75d = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--error", () => $c0bf6b8ed1d13638$export$6b5beff56972a3b, (v) => $c0bf6b8ed1d13638$export$6b5beff56972a3b = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--fullscreen", () => $c0bf6b8ed1d13638$export$118506da5d3ee7c4, (v) => $c0bf6b8ed1d13638$export$118506da5d3ee7c4 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--fullscreenTakeover", () => $c0bf6b8ed1d13638$export$5c061b2d3664fda9, (v) => $c0bf6b8ed1d13638$export$5c061b2d3664fda9 = v);
$parcel$export($c0bf6b8ed1d13638$exports, "spectrum-Dialog--warning", () => $c0bf6b8ed1d13638$export$4e66396adf61534f, (v) => $c0bf6b8ed1d13638$export$4e66396adf61534f = v);
var $c0bf6b8ed1d13638$export$4681f3bcac39b2b1;
var $c0bf6b8ed1d13638$export$5f2d9cc47409bd63;
var $c0bf6b8ed1d13638$export$b9b8ef443d0a67ca;
var $c0bf6b8ed1d13638$export$b73c0c2fca84be2b;
var $c0bf6b8ed1d13638$export$d405fb0a0231aa1a;
var $c0bf6b8ed1d13638$export$c03cd5e23af67ff5;
var $c0bf6b8ed1d13638$export$94335d73b7b209ec;
var $c0bf6b8ed1d13638$export$ade8307239736e89;
var $c0bf6b8ed1d13638$export$1e158eaa6363e131;
var $c0bf6b8ed1d13638$export$5beee9480fc6ff07;
var $c0bf6b8ed1d13638$export$dd7633d642d0bc1c;
var $c0bf6b8ed1d13638$export$22425527a8943917;
var $c0bf6b8ed1d13638$export$cb8eccd0f3639238;
var $c0bf6b8ed1d13638$export$3ecb5025a06fe08f;
var $c0bf6b8ed1d13638$export$1db4cca5b4ade39a;
var $c0bf6b8ed1d13638$export$570ae852861555b7;
var $c0bf6b8ed1d13638$export$39dd75369bf2e830;
var $c0bf6b8ed1d13638$export$9461b285d631d575;
var $c0bf6b8ed1d13638$export$a8494287d763a75d;
var $c0bf6b8ed1d13638$export$6b5beff56972a3b;
var $c0bf6b8ed1d13638$export$118506da5d3ee7c4;
var $c0bf6b8ed1d13638$export$5c061b2d3664fda9;
var $c0bf6b8ed1d13638$export$4e66396adf61534f;
$c0bf6b8ed1d13638$export$4681f3bcac39b2b1 = "_spectrum-Dialog_6d8b48";
$c0bf6b8ed1d13638$export$5f2d9cc47409bd63 = "_spectrum-Dialog--small_6d8b48";
$c0bf6b8ed1d13638$export$b9b8ef443d0a67ca = "_spectrum-Dialog--medium_6d8b48";
$c0bf6b8ed1d13638$export$b73c0c2fca84be2b = "_spectrum-Dialog--large_6d8b48";
$c0bf6b8ed1d13638$export$d405fb0a0231aa1a = "_spectrum-Dialog-hero_6d8b48";
$c0bf6b8ed1d13638$export$c03cd5e23af67ff5 = "_spectrum-Dialog-grid_6d8b48";
$c0bf6b8ed1d13638$export$94335d73b7b209ec = "_spectrum-Dialog-heading_6d8b48";
$c0bf6b8ed1d13638$export$ade8307239736e89 = "_spectrum-Dialog-heading--noHeader_6d8b48";
$c0bf6b8ed1d13638$export$1e158eaa6363e131 = "_spectrum-Dialog-header_6d8b48";
$c0bf6b8ed1d13638$export$5beee9480fc6ff07 = "_spectrum-Dialog-typeIcon_6d8b48";
$c0bf6b8ed1d13638$export$dd7633d642d0bc1c = "_spectrum-Dialog-divider_6d8b48";
$c0bf6b8ed1d13638$export$22425527a8943917 = "_spectrum-Dialog--noDivider_6d8b48";
$c0bf6b8ed1d13638$export$cb8eccd0f3639238 = "_spectrum-Dialog-content_6d8b48";
$c0bf6b8ed1d13638$export$3ecb5025a06fe08f = "_spectrum-Dialog-footer_6d8b48";
$c0bf6b8ed1d13638$export$1db4cca5b4ade39a = "_spectrum-Button_6d8b48";
$c0bf6b8ed1d13638$export$570ae852861555b7 = "_spectrum-Dialog-buttonGroup_6d8b48";
$c0bf6b8ed1d13638$export$39dd75369bf2e830 = "_spectrum-Dialog-buttonGroup--noFooter_6d8b48";
$c0bf6b8ed1d13638$export$9461b285d631d575 = "_spectrum-Dialog--dismissable_6d8b48";
$c0bf6b8ed1d13638$export$a8494287d763a75d = "_spectrum-Dialog-closeButton_6d8b48";
$c0bf6b8ed1d13638$export$6b5beff56972a3b = "_spectrum-Dialog--error_6d8b48";
$c0bf6b8ed1d13638$export$118506da5d3ee7c4 = "_spectrum-Dialog--fullscreen_6d8b48";
$c0bf6b8ed1d13638$export$5c061b2d3664fda9 = "_spectrum-Dialog--fullscreenTakeover_6d8b48";
$c0bf6b8ed1d13638$export$4e66396adf61534f = "_spectrum-Dialog--warning_6d8b48";




let $1e9ade6acb940ac4$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large',
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
function $1e9ade6acb940ac4$var$Dialog(props, ref) {
    let { type: type = 'modal' , ...contextProps } = $SNpLt$useContext($94cff44bc8cf07f8$export$8b93a07348a7730c) || {
    };
    let { children: children , isDismissable: isDismissable = contextProps.isDismissable , onDismiss: onDismiss = contextProps.onClose , size: size , ...otherProps } = props;
    let formatMessage = $SNpLt$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($e8ea110d849b5c53$exports)));
    let { styleProps: styleProps  } = $SNpLt$useStyleProps(otherProps);
    size = type === 'popover' ? size || 'S' : size || 'L';
    let domRef = $SNpLt$useDOMRef(ref);
    let gridRef = $SNpLt$useRef();
    let sizeVariant = $1e9ade6acb940ac4$var$sizeMap[type] || $1e9ade6acb940ac4$var$sizeMap[size];
    let { dialogProps: dialogProps , titleProps: titleProps  } = $SNpLt$useDialog($SNpLt$mergeProps(contextProps, props), domRef);
    let hasHeader = $SNpLt$useHasChild(`.${(/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-header']}`, $SNpLt$unwrapDOMRef(gridRef));
    let hasFooter = $SNpLt$useHasChild(`.${(/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-footer']}`, $SNpLt$unwrapDOMRef(gridRef));
    let slots = $SNpLt$useMemo(()=>({
            hero: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-hero']
            },
            header: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-header']
            },
            heading: {
                UNSAFE_className: $SNpLt$classNames((/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports)), 'spectrum-Dialog-heading', {
                    'spectrum-Dialog-heading--noHeader': !hasHeader
                }),
                level: 2,
                ...titleProps
            },
            typeIcon: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-typeIcon']
            },
            divider: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-divider'],
                size: 'M'
            },
            content: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-content']
            },
            footer: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-footer']
            },
            buttonGroup: {
                UNSAFE_className: $SNpLt$classNames((/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports)), 'spectrum-Dialog-buttonGroup', {
                    'spectrum-Dialog-buttonGroup--noFooter': !hasFooter
                }),
                align: 'end'
            }
        })
    , [
        (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports)),
        hasFooter,
        hasHeader,
        titleProps
    ]);
    // If rendered in a popover or tray there won't be a visible dismiss button,
    // so we render a hidden one for screen readers.
    let dismissButton;
    if (type === 'popover' || type === 'tray') dismissButton = /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$DismissButton, {
        onDismiss: onDismiss
    });
    return(/*#__PURE__*/ $SNpLt$react.createElement($SNpLt$FocusScope, {
        contain: true,
        restoreFocus: true
    }, /*#__PURE__*/ $SNpLt$react.createElement("section", {
        ...styleProps,
        ...dialogProps,
        className: $SNpLt$classNames((/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports)), 'spectrum-Dialog', {
            [`spectrum-Dialog--${sizeVariant}`]: sizeVariant,
            'spectrum-Dialog--dismissable': isDismissable
        }, styleProps.className),
        ref: domRef
    }, /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Grid, {
        ref: gridRef,
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-grid']
    }, /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$SlotProvider, {
        slots: slots
    }, children), isDismissable && /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$ActionButton, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports))['spectrum-Dialog-closeButton'],
        isQuiet: true,
        "aria-label": formatMessage('dismiss'),
        onPress: onDismiss
    }, /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$spectrumiconsuiCrossLarge, null))), dismissButton)));
}
/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */ let $1e9ade6acb940ac4$export$3ddf2d174ce01153 = /*#__PURE__*/ $SNpLt$react.forwardRef($1e9ade6acb940ac4$var$Dialog);









/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */ function $b79435df1ee4f796$var$AlertDialog(props, ref) {
    let { onClose: onClose = ()=>{
    }  } = $SNpLt$useContext($94cff44bc8cf07f8$export$8b93a07348a7730c) || {
    };
    let { variant: variant , children: children , primaryActionLabel: primaryActionLabel , secondaryActionLabel: secondaryActionLabel , cancelLabel: cancelLabel , autoFocusButton: autoFocusButton , title: title , isPrimaryActionDisabled: isPrimaryActionDisabled , isSecondaryActionDisabled: isSecondaryActionDisabled , onCancel: onCancel = ()=>{
    } , onPrimaryAction: onPrimaryAction = ()=>{
    } , onSecondaryAction: onSecondaryAction = ()=>{
    } , ...otherProps } = props;
    let { styleProps: styleProps  } = $SNpLt$useStyleProps(otherProps);
    let formatMessage = $SNpLt$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($e8ea110d849b5c53$exports)));
    let confirmVariant = 'primary';
    if (variant) {
        if (variant === 'confirmation') confirmVariant = 'cta';
        else if (variant === 'destructive') confirmVariant = 'negative';
    }
    return(/*#__PURE__*/ $SNpLt$react.createElement($1e9ade6acb940ac4$export$3ddf2d174ce01153, {
        UNSAFE_style: styleProps.style,
        UNSAFE_className: $SNpLt$classNames((/*@__PURE__*/$parcel$interopDefault($c0bf6b8ed1d13638$exports)), {
            [`spectrum-Dialog--${variant}`]: variant
        }, styleProps.className),
        isHidden: styleProps.hidden,
        size: "M",
        role: "alertdialog",
        ref: ref
    }, /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Heading, null, title), (variant === 'error' || variant === 'warning') && /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$spectrumiconsuiAlertMedium, {
        slot: "typeIcon",
        "aria-label": formatMessage('alert')
    }), /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Divider, null), /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Content, null, children), /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$ButtonGroup, {
        align: "end"
    }, cancelLabel && /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Button, {
        variant: "secondary",
        onPress: ()=>$SNpLt$chain(onClose(), onCancel())
        ,
        autoFocus: autoFocusButton === 'cancel'
    }, cancelLabel), secondaryActionLabel && /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Button, {
        variant: "secondary",
        onPress: ()=>$SNpLt$chain(onClose(), onSecondaryAction())
        ,
        isDisabled: isSecondaryActionDisabled,
        autoFocus: autoFocusButton === 'secondary'
    }, secondaryActionLabel), /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Button, {
        variant: confirmVariant,
        onPress: ()=>$SNpLt$chain(onClose(), onPrimaryAction())
        ,
        isDisabled: isPrimaryActionDisabled,
        autoFocus: autoFocusButton === 'primary'
    }, primaryActionLabel))));
}
/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */ let $b79435df1ee4f796$export$de466dd8317b0b75 = /*#__PURE__*/ $SNpLt$forwardRef($b79435df1ee4f796$var$AlertDialog);



var $28308dc23dbfabbd$exports = {};

$parcel$export($28308dc23dbfabbd$exports, "DialogTrigger", () => $28308dc23dbfabbd$export$2e1e1122cf0cba88);







function $28308dc23dbfabbd$var$DialogTrigger(props) {
    let { children: children , type: type = 'modal' , mobileType: mobileType = type === 'popover' ? 'modal' : type , hideArrow: hideArrow , targetRef: targetRef , isDismissable: isDismissable , isKeyboardDismissDisabled: isKeyboardDismissDisabled , ...positionProps } = props;
    if (!Array.isArray(children) || children.length > 2) throw new Error('DialogTrigger must have exactly 2 children');
    // if a function is passed as the second child, it won't appear in toArray
    let [trigger, content] = children;
    // On small devices, show a modal or tray instead of a popover.
    // TODO: DNA variable?
    let isMobile = $SNpLt$useMediaQuery('(max-width: 700px)');
    if (isMobile) {
        // handle cases where desktop popovers need a close button for the mobile modal view
        if (type !== 'modal' && mobileType === 'modal') isDismissable = true;
        type = mobileType;
    }
    let state = $SNpLt$useOverlayTriggerState(props);
    let wasOpen = $SNpLt$useRef(false);
    wasOpen.current = state.isOpen;
    let isExiting = $SNpLt$useRef(false);
    let onExiting = ()=>isExiting.current = true
    ;
    let onExited = ()=>isExiting.current = false
    ;
    // eslint-disable-next-line arrow-body-style
    $SNpLt$useEffect(()=>{
        return ()=>{
            if ((wasOpen.current || isExiting.current) && type !== 'popover' && type !== 'tray') console.warn('A DialogTrigger unmounted while open. This is likely due to being placed within a trigger that unmounts or inside a conditional. Consider using a DialogContainer instead.');
        };
    }, []);
    if (type === 'popover') return(/*#__PURE__*/ $SNpLt$react.createElement($28308dc23dbfabbd$var$PopoverTrigger, {
        ...positionProps,
        state: state,
        targetRef: targetRef,
        trigger: trigger,
        content: content,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        hideArrow: hideArrow
    }));
    let renderOverlay = ()=>{
        switch(type){
            case 'fullscreen':
            case 'fullscreenTakeover':
            case 'modal':
                return(/*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Modal, {
                    isOpen: state.isOpen,
                    isDismissable: type === 'modal' ? isDismissable : false,
                    onClose: state.close,
                    type: type,
                    isKeyboardDismissDisabled: isKeyboardDismissDisabled,
                    onExiting: onExiting,
                    onExited: onExited
                }, typeof content === 'function' ? content(state.close) : content));
            case 'tray':
                return(/*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Tray, {
                    isOpen: state.isOpen,
                    onClose: state.close,
                    isKeyboardDismissDisabled: isKeyboardDismissDisabled
                }, typeof content === 'function' ? content(state.close) : content));
        }
    };
    return(/*#__PURE__*/ $SNpLt$react.createElement($28308dc23dbfabbd$var$DialogTriggerBase, {
        type: type,
        state: state,
        isDismissable: isDismissable,
        trigger: trigger,
        overlay: renderOverlay()
    }));
}
// Support DialogTrigger inside components using CollectionBuilder.
$28308dc23dbfabbd$var$DialogTrigger.getCollectionNode = function*(props) {
    let [trigger] = $SNpLt$react.Children.toArray(props.children);
    let [, content] = props.children;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ $SNpLt$react.createElement($28308dc23dbfabbd$var$DialogTrigger, {
                key: element.key,
                ...props
            }, element, content)
    };
};
/**
 * DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's
 * open state with the trigger's press state. Additionally, it allows you to customize the type and
 * positioning of the Dialog.
 */ // We don't want getCollectionNode to show up in the type definition
let $28308dc23dbfabbd$export$2e1e1122cf0cba88 = $28308dc23dbfabbd$var$DialogTrigger;
function $28308dc23dbfabbd$var$PopoverTrigger({ state: state , targetRef: targetRef , trigger: trigger , content: content , hideArrow: hideArrow , isKeyboardDismissDisabled: isKeyboardDismissDisabled , ...props }) {
    let triggerRef = $SNpLt$useRef();
    let overlayRef = $SNpLt$useRef();
    let { overlayProps: popoverProps , placement: placement , arrowProps: arrowProps  } = $SNpLt$useOverlayPosition({
        targetRef: targetRef || triggerRef,
        overlayRef: $SNpLt$unwrapDOMRef(overlayRef),
        placement: props.placement,
        containerPadding: props.containerPadding,
        offset: props.offset,
        crossOffset: props.crossOffset,
        shouldFlip: props.shouldFlip,
        isOpen: state.isOpen
    });
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $SNpLt$useOverlayTrigger({
        type: 'dialog'
    }, state, triggerRef);
    let triggerPropsWithRef = {
        ...triggerProps,
        ref: targetRef ? undefined : triggerRef
    };
    let overlay = /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Popover, {
        isOpen: state.isOpen,
        UNSAFE_style: popoverProps.style,
        ref: overlayRef,
        onClose: state.close,
        placement: placement,
        arrowProps: arrowProps,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        hideArrow: hideArrow
    }, typeof content === 'function' ? content(state.close) : content);
    return(/*#__PURE__*/ $SNpLt$react.createElement($28308dc23dbfabbd$var$DialogTriggerBase, {
        type: "popover",
        state: state,
        triggerProps: triggerPropsWithRef,
        dialogProps: overlayProps,
        trigger: trigger,
        overlay: overlay
    }));
}
function $28308dc23dbfabbd$var$DialogTriggerBase({ type: type , state: state , isDismissable: isDismissable , dialogProps: dialogProps = {
} , triggerProps: triggerProps = {
} , overlay: overlay , trigger: trigger  }) {
    let context = {
        type: type,
        onClose: state.close,
        isDismissable: isDismissable,
        ...dialogProps
    };
    return(/*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Fragment, null, /*#__PURE__*/ $SNpLt$react.createElement($SNpLt$PressResponder, {
        ...triggerProps,
        onPress: state.toggle,
        isPressed: state.isOpen && type !== 'modal' && type !== 'fullscreen' && type !== 'fullscreenTakeover'
    }, trigger), /*#__PURE__*/ $SNpLt$react.createElement($94cff44bc8cf07f8$export$8b93a07348a7730c.Provider, {
        value: context
    }, overlay)));
}


var $c09886ef61ca5249$exports = {};

$parcel$export($c09886ef61ca5249$exports, "DialogContainer", () => $c09886ef61ca5249$export$547754aada6e339f);



function $c09886ef61ca5249$export$547754aada6e339f(props) {
    let { children: children , type: type = 'modal' , onDismiss: onDismiss , isDismissable: isDismissable , isKeyboardDismissDisabled: isKeyboardDismissDisabled  } = props;
    let childArray = $SNpLt$react.Children.toArray(children);
    if (childArray.length > 1) throw new Error('Only a single child can be passed to DialogContainer.');
    let lastChild = $SNpLt$useRef(null);
    let child = /*#__PURE__*/ $SNpLt$react.isValidElement(childArray[0]) ? childArray[0] : null;
    if (child) lastChild.current = child;
    let context = {
        type: type,
        onClose: onDismiss,
        isDismissable: isDismissable
    };
    return(/*#__PURE__*/ $SNpLt$react.createElement($SNpLt$Modal, {
        isOpen: !!child,
        onClose: onDismiss,
        type: type,
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled
    }, /*#__PURE__*/ $SNpLt$react.createElement($94cff44bc8cf07f8$export$8b93a07348a7730c.Provider, {
        value: context
    }, lastChild.current)));
}


var $3db79495aa707fea$exports = {};

$parcel$export($3db79495aa707fea$exports, "useDialogContainer", () => $3db79495aa707fea$export$a2f2d8fa6720dab1);


function $3db79495aa707fea$export$a2f2d8fa6720dab1() {
    let context = $SNpLt$useContext($94cff44bc8cf07f8$export$8b93a07348a7730c);
    if (!context) throw new Error('Cannot call useDialogContext outside a <DialogTrigger> or <DialogContainer>.');
    return {
        type: context.type,
        dismiss () {
            context.onClose();
        }
    };
}




export {$b79435df1ee4f796$export$de466dd8317b0b75 as AlertDialog, $1e9ade6acb940ac4$export$3ddf2d174ce01153 as Dialog, $28308dc23dbfabbd$export$2e1e1122cf0cba88 as DialogTrigger, $c09886ef61ca5249$export$547754aada6e339f as DialogContainer, $3db79495aa707fea$export$a2f2d8fa6720dab1 as useDialogContainer};
//# sourceMappingURL=module.js.map
