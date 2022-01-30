require("./main.css");
var $jStK1$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $jStK1$reactspectrumbutton = require("@react-spectrum/button");
var $jStK1$reactspectrumbuttongroup = require("@react-spectrum/buttongroup");
var $jStK1$reactariautils = require("@react-aria/utils");
var $jStK1$reactspectrumutils = require("@react-spectrum/utils");
var $jStK1$reactspectrumview = require("@react-spectrum/view");
var $jStK1$reactspectrumdivider = require("@react-spectrum/divider");
var $jStK1$reactspectrumtext = require("@react-spectrum/text");
var $jStK1$react = require("react");
var $jStK1$reactariai18n = require("@react-aria/i18n");
var $jStK1$spectrumiconsuiCrossLarge = require("@spectrum-icons/ui/CrossLarge");
var $jStK1$reactariaoverlays = require("@react-aria/overlays");
var $jStK1$reactariafocus = require("@react-aria/focus");
var $jStK1$reactspectrumlayout = require("@react-spectrum/layout");
var $jStK1$reactariadialog = require("@react-aria/dialog");
var $jStK1$reactspectrumoverlays = require("@react-spectrum/overlays");
var $jStK1$reactstatelyoverlays = require("@react-stately/overlays");
var $jStK1$reactariainteractions = require("@react-aria/interactions");

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
var $0fe6f5ca8dcf3d26$exports = {};

$parcel$export($0fe6f5ca8dcf3d26$exports, "AlertDialog", () => $0fe6f5ca8dcf3d26$export$de466dd8317b0b75);






var $c0f7f2d10e38f47a$exports = {};

$parcel$export($c0f7f2d10e38f47a$exports, "Dialog", () => $c0f7f2d10e38f47a$export$3ddf2d174ce01153);




const $7bbf2d2bb114fbce$export$8b93a07348a7730c = ($parcel$interopDefault($jStK1$react)).createContext(null);





var $d7ecf681861477fb$exports = {};
var $aa651b25949eb773$exports = {};
$aa651b25949eb773$exports = JSON.parse("{\"alert\":\"تنبيه\",\"dismiss\":\"تجاهل\"}");


var $47e9e0f97c884222$exports = {};
$47e9e0f97c884222$exports = JSON.parse("{\"alert\":\"Сигнал\",\"dismiss\":\"Отхвърляне\"}");


var $185b1bf42eff4c29$exports = {};
$185b1bf42eff4c29$exports = JSON.parse("{\"alert\":\"Výstraha\",\"dismiss\":\"Odstranit\"}");


var $e2015196ce6a5a20$exports = {};
$e2015196ce6a5a20$exports = JSON.parse("{\"alert\":\"Advarsel\",\"dismiss\":\"Luk\"}");


var $3b8b88cc2a2748bd$exports = {};
$3b8b88cc2a2748bd$exports = JSON.parse("{\"alert\":\"Warnhinweis\",\"dismiss\":\"Schließen\"}");


var $f8f2c8ddd292022d$exports = {};
$f8f2c8ddd292022d$exports = JSON.parse("{\"alert\":\"Ειδοποίηση\",\"dismiss\":\"Απόρριψη\"}");


var $8de1e2bda7404884$exports = {};
$8de1e2bda7404884$exports = JSON.parse("{\"dismiss\":\"Dismiss\",\"alert\":\"Alert\"}");


var $bbe2a139187a00f9$exports = {};
$bbe2a139187a00f9$exports = JSON.parse("{\"alert\":\"Alerta\",\"dismiss\":\"Descartar\"}");


var $9da142a81ff5b031$exports = {};
$9da142a81ff5b031$exports = JSON.parse("{\"alert\":\"Teade\",\"dismiss\":\"Lõpeta\"}");


var $cb558cb2b58cb261$exports = {};
$cb558cb2b58cb261$exports = JSON.parse("{\"alert\":\"Hälytys\",\"dismiss\":\"Hylkää\"}");


var $f978f8fcfe15b3ae$exports = {};
$f978f8fcfe15b3ae$exports = JSON.parse("{\"alert\":\"Alerte\",\"dismiss\":\"Rejeter\"}");


var $f6f05a877072e295$exports = {};
$f6f05a877072e295$exports = JSON.parse("{\"alert\":\"התראה\",\"dismiss\":\"התעלם\"}");


var $4dcc6b07c6afa1a8$exports = {};
$4dcc6b07c6afa1a8$exports = JSON.parse("{\"alert\":\"Upozorenje\",\"dismiss\":\"Odbaci\"}");


var $177cc577129b6426$exports = {};
$177cc577129b6426$exports = JSON.parse("{\"alert\":\"Figyelmeztetés\",\"dismiss\":\"Elutasítás\"}");


var $f756a82a1f7380aa$exports = {};
$f756a82a1f7380aa$exports = JSON.parse("{\"alert\":\"Avviso\",\"dismiss\":\"Ignora\"}");


var $08ff3d30cbc309af$exports = {};
$08ff3d30cbc309af$exports = JSON.parse("{\"alert\":\"アラート\",\"dismiss\":\"閉じる\"}");


var $c1eba2e01cdbc49c$exports = {};
$c1eba2e01cdbc49c$exports = JSON.parse("{\"alert\":\"경고\",\"dismiss\":\"무시\"}");


var $5b2e87879486cdf2$exports = {};
$5b2e87879486cdf2$exports = JSON.parse("{\"alert\":\"Įspėjimas\",\"dismiss\":\"Atmesti\"}");


var $db4d5818dbe82a3f$exports = {};
$db4d5818dbe82a3f$exports = JSON.parse("{\"alert\":\"Brīdinājums\",\"dismiss\":\"Nerādīt\"}");


var $a7a2b9348b2ba000$exports = {};
$a7a2b9348b2ba000$exports = JSON.parse("{\"alert\":\"Varsel\",\"dismiss\":\"Lukk\"}");


var $b0748dd69d523dc6$exports = {};
$b0748dd69d523dc6$exports = JSON.parse("{\"alert\":\"Melding\",\"dismiss\":\"Negeren\"}");


var $ded7eabf92d51ba5$exports = {};
$ded7eabf92d51ba5$exports = JSON.parse("{\"alert\":\"Ostrzeżenie\",\"dismiss\":\"Zignoruj\"}");


var $e7448a73bcc0012f$exports = {};
$e7448a73bcc0012f$exports = JSON.parse("{\"alert\":\"Alerta\",\"dismiss\":\"Descartar\"}");


var $e6ea1aec35f903f3$exports = {};
$e6ea1aec35f903f3$exports = JSON.parse("{\"alert\":\"Alerta\",\"dismiss\":\"Dispensar\"}");


var $666f6ca585ec05e7$exports = {};
$666f6ca585ec05e7$exports = JSON.parse("{\"alert\":\"Alertă\",\"dismiss\":\"Revocare\"}");


var $76a3fad6fd6c3062$exports = {};
$76a3fad6fd6c3062$exports = JSON.parse("{\"alert\":\"Предупреждение\",\"dismiss\":\"Пропустить\"}");


var $c9b203e53d47cb7e$exports = {};
$c9b203e53d47cb7e$exports = JSON.parse("{\"alert\":\"Upozornenie\",\"dismiss\":\"Zrušiť\"}");


var $e5d697c5fb230c1d$exports = {};
$e5d697c5fb230c1d$exports = JSON.parse("{\"alert\":\"Opozorilo\",\"dismiss\":\"Opusti\"}");


var $8c108c40bc80c6be$exports = {};
$8c108c40bc80c6be$exports = JSON.parse("{\"alert\":\"Upozorenje\",\"dismiss\":\"Odbaci\"}");


var $b16c92251689b4d9$exports = {};
$b16c92251689b4d9$exports = JSON.parse("{\"alert\":\"Varning\",\"dismiss\":\"Avvisa\"}");


var $ad08ef486f1af05c$exports = {};
$ad08ef486f1af05c$exports = JSON.parse("{\"alert\":\"Uyarı\",\"dismiss\":\"Kapat\"}");


var $3c714c93db95febf$exports = {};
$3c714c93db95febf$exports = JSON.parse("{\"alert\":\"Сигнал тривоги\",\"dismiss\":\"Скасувати\"}");


var $39c7e22824904a89$exports = {};
$39c7e22824904a89$exports = JSON.parse("{\"alert\":\"警报\",\"dismiss\":\"取消\"}");


var $b7ae09dd65a603fa$exports = {};
$b7ae09dd65a603fa$exports = JSON.parse("{\"alert\":\"警示\",\"dismiss\":\"關閉\"}");


$d7ecf681861477fb$exports = {
    "ar-AE": $aa651b25949eb773$exports,
    "bg-BG": $47e9e0f97c884222$exports,
    "cs-CZ": $185b1bf42eff4c29$exports,
    "da-DK": $e2015196ce6a5a20$exports,
    "de-DE": $3b8b88cc2a2748bd$exports,
    "el-GR": $f8f2c8ddd292022d$exports,
    "en-US": $8de1e2bda7404884$exports,
    "es-ES": $bbe2a139187a00f9$exports,
    "et-EE": $9da142a81ff5b031$exports,
    "fi-FI": $cb558cb2b58cb261$exports,
    "fr-FR": $f978f8fcfe15b3ae$exports,
    "he-IL": $f6f05a877072e295$exports,
    "hr-HR": $4dcc6b07c6afa1a8$exports,
    "hu-HU": $177cc577129b6426$exports,
    "it-IT": $f756a82a1f7380aa$exports,
    "ja-JP": $08ff3d30cbc309af$exports,
    "ko-KR": $c1eba2e01cdbc49c$exports,
    "lt-LT": $5b2e87879486cdf2$exports,
    "lv-LV": $db4d5818dbe82a3f$exports,
    "nb-NO": $a7a2b9348b2ba000$exports,
    "nl-NL": $b0748dd69d523dc6$exports,
    "pl-PL": $ded7eabf92d51ba5$exports,
    "pt-BR": $e7448a73bcc0012f$exports,
    "pt-PT": $e6ea1aec35f903f3$exports,
    "ro-RO": $666f6ca585ec05e7$exports,
    "ru-RU": $76a3fad6fd6c3062$exports,
    "sk-SK": $c9b203e53d47cb7e$exports,
    "sl-SI": $e5d697c5fb230c1d$exports,
    "sr-SP": $8c108c40bc80c6be$exports,
    "sv-SE": $b16c92251689b4d9$exports,
    "tr-TR": $ad08ef486f1af05c$exports,
    "uk-UA": $3c714c93db95febf$exports,
    "zh-CN": $39c7e22824904a89$exports,
    "zh-TW": $b7ae09dd65a603fa$exports
};




var $2480d14fdbd4daa4$exports = {};

$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog", () => $2480d14fdbd4daa4$export$4681f3bcac39b2b1, (v) => $2480d14fdbd4daa4$export$4681f3bcac39b2b1 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--small", () => $2480d14fdbd4daa4$export$5f2d9cc47409bd63, (v) => $2480d14fdbd4daa4$export$5f2d9cc47409bd63 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--medium", () => $2480d14fdbd4daa4$export$b9b8ef443d0a67ca, (v) => $2480d14fdbd4daa4$export$b9b8ef443d0a67ca = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--large", () => $2480d14fdbd4daa4$export$b73c0c2fca84be2b, (v) => $2480d14fdbd4daa4$export$b73c0c2fca84be2b = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-hero", () => $2480d14fdbd4daa4$export$d405fb0a0231aa1a, (v) => $2480d14fdbd4daa4$export$d405fb0a0231aa1a = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-grid", () => $2480d14fdbd4daa4$export$c03cd5e23af67ff5, (v) => $2480d14fdbd4daa4$export$c03cd5e23af67ff5 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-heading", () => $2480d14fdbd4daa4$export$94335d73b7b209ec, (v) => $2480d14fdbd4daa4$export$94335d73b7b209ec = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-heading--noHeader", () => $2480d14fdbd4daa4$export$ade8307239736e89, (v) => $2480d14fdbd4daa4$export$ade8307239736e89 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-header", () => $2480d14fdbd4daa4$export$1e158eaa6363e131, (v) => $2480d14fdbd4daa4$export$1e158eaa6363e131 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-typeIcon", () => $2480d14fdbd4daa4$export$5beee9480fc6ff07, (v) => $2480d14fdbd4daa4$export$5beee9480fc6ff07 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-divider", () => $2480d14fdbd4daa4$export$dd7633d642d0bc1c, (v) => $2480d14fdbd4daa4$export$dd7633d642d0bc1c = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--noDivider", () => $2480d14fdbd4daa4$export$22425527a8943917, (v) => $2480d14fdbd4daa4$export$22425527a8943917 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-content", () => $2480d14fdbd4daa4$export$cb8eccd0f3639238, (v) => $2480d14fdbd4daa4$export$cb8eccd0f3639238 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-footer", () => $2480d14fdbd4daa4$export$3ecb5025a06fe08f, (v) => $2480d14fdbd4daa4$export$3ecb5025a06fe08f = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Button", () => $2480d14fdbd4daa4$export$1db4cca5b4ade39a, (v) => $2480d14fdbd4daa4$export$1db4cca5b4ade39a = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-buttonGroup", () => $2480d14fdbd4daa4$export$570ae852861555b7, (v) => $2480d14fdbd4daa4$export$570ae852861555b7 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-buttonGroup--noFooter", () => $2480d14fdbd4daa4$export$39dd75369bf2e830, (v) => $2480d14fdbd4daa4$export$39dd75369bf2e830 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--dismissable", () => $2480d14fdbd4daa4$export$9461b285d631d575, (v) => $2480d14fdbd4daa4$export$9461b285d631d575 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog-closeButton", () => $2480d14fdbd4daa4$export$a8494287d763a75d, (v) => $2480d14fdbd4daa4$export$a8494287d763a75d = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--error", () => $2480d14fdbd4daa4$export$6b5beff56972a3b, (v) => $2480d14fdbd4daa4$export$6b5beff56972a3b = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--fullscreen", () => $2480d14fdbd4daa4$export$118506da5d3ee7c4, (v) => $2480d14fdbd4daa4$export$118506da5d3ee7c4 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--fullscreenTakeover", () => $2480d14fdbd4daa4$export$5c061b2d3664fda9, (v) => $2480d14fdbd4daa4$export$5c061b2d3664fda9 = v);
$parcel$export($2480d14fdbd4daa4$exports, "spectrum-Dialog--warning", () => $2480d14fdbd4daa4$export$4e66396adf61534f, (v) => $2480d14fdbd4daa4$export$4e66396adf61534f = v);
var $2480d14fdbd4daa4$export$4681f3bcac39b2b1;
var $2480d14fdbd4daa4$export$5f2d9cc47409bd63;
var $2480d14fdbd4daa4$export$b9b8ef443d0a67ca;
var $2480d14fdbd4daa4$export$b73c0c2fca84be2b;
var $2480d14fdbd4daa4$export$d405fb0a0231aa1a;
var $2480d14fdbd4daa4$export$c03cd5e23af67ff5;
var $2480d14fdbd4daa4$export$94335d73b7b209ec;
var $2480d14fdbd4daa4$export$ade8307239736e89;
var $2480d14fdbd4daa4$export$1e158eaa6363e131;
var $2480d14fdbd4daa4$export$5beee9480fc6ff07;
var $2480d14fdbd4daa4$export$dd7633d642d0bc1c;
var $2480d14fdbd4daa4$export$22425527a8943917;
var $2480d14fdbd4daa4$export$cb8eccd0f3639238;
var $2480d14fdbd4daa4$export$3ecb5025a06fe08f;
var $2480d14fdbd4daa4$export$1db4cca5b4ade39a;
var $2480d14fdbd4daa4$export$570ae852861555b7;
var $2480d14fdbd4daa4$export$39dd75369bf2e830;
var $2480d14fdbd4daa4$export$9461b285d631d575;
var $2480d14fdbd4daa4$export$a8494287d763a75d;
var $2480d14fdbd4daa4$export$6b5beff56972a3b;
var $2480d14fdbd4daa4$export$118506da5d3ee7c4;
var $2480d14fdbd4daa4$export$5c061b2d3664fda9;
var $2480d14fdbd4daa4$export$4e66396adf61534f;
$2480d14fdbd4daa4$export$4681f3bcac39b2b1 = "_spectrum-Dialog_6d8b48";
$2480d14fdbd4daa4$export$5f2d9cc47409bd63 = "_spectrum-Dialog--small_6d8b48";
$2480d14fdbd4daa4$export$b9b8ef443d0a67ca = "_spectrum-Dialog--medium_6d8b48";
$2480d14fdbd4daa4$export$b73c0c2fca84be2b = "_spectrum-Dialog--large_6d8b48";
$2480d14fdbd4daa4$export$d405fb0a0231aa1a = "_spectrum-Dialog-hero_6d8b48";
$2480d14fdbd4daa4$export$c03cd5e23af67ff5 = "_spectrum-Dialog-grid_6d8b48";
$2480d14fdbd4daa4$export$94335d73b7b209ec = "_spectrum-Dialog-heading_6d8b48";
$2480d14fdbd4daa4$export$ade8307239736e89 = "_spectrum-Dialog-heading--noHeader_6d8b48";
$2480d14fdbd4daa4$export$1e158eaa6363e131 = "_spectrum-Dialog-header_6d8b48";
$2480d14fdbd4daa4$export$5beee9480fc6ff07 = "_spectrum-Dialog-typeIcon_6d8b48";
$2480d14fdbd4daa4$export$dd7633d642d0bc1c = "_spectrum-Dialog-divider_6d8b48";
$2480d14fdbd4daa4$export$22425527a8943917 = "_spectrum-Dialog--noDivider_6d8b48";
$2480d14fdbd4daa4$export$cb8eccd0f3639238 = "_spectrum-Dialog-content_6d8b48";
$2480d14fdbd4daa4$export$3ecb5025a06fe08f = "_spectrum-Dialog-footer_6d8b48";
$2480d14fdbd4daa4$export$1db4cca5b4ade39a = "_spectrum-Button_6d8b48";
$2480d14fdbd4daa4$export$570ae852861555b7 = "_spectrum-Dialog-buttonGroup_6d8b48";
$2480d14fdbd4daa4$export$39dd75369bf2e830 = "_spectrum-Dialog-buttonGroup--noFooter_6d8b48";
$2480d14fdbd4daa4$export$9461b285d631d575 = "_spectrum-Dialog--dismissable_6d8b48";
$2480d14fdbd4daa4$export$a8494287d763a75d = "_spectrum-Dialog-closeButton_6d8b48";
$2480d14fdbd4daa4$export$6b5beff56972a3b = "_spectrum-Dialog--error_6d8b48";
$2480d14fdbd4daa4$export$118506da5d3ee7c4 = "_spectrum-Dialog--fullscreen_6d8b48";
$2480d14fdbd4daa4$export$5c061b2d3664fda9 = "_spectrum-Dialog--fullscreenTakeover_6d8b48";
$2480d14fdbd4daa4$export$4e66396adf61534f = "_spectrum-Dialog--warning_6d8b48";




let $c0f7f2d10e38f47a$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large',
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
function $c0f7f2d10e38f47a$var$Dialog(props, ref) {
    let { type: type = 'modal' , ...contextProps } = $jStK1$react.useContext($7bbf2d2bb114fbce$export$8b93a07348a7730c) || {
    };
    let { children: children , isDismissable: isDismissable = contextProps.isDismissable , onDismiss: onDismiss = contextProps.onClose , size: size , ...otherProps } = props;
    let formatMessage = $jStK1$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($d7ecf681861477fb$exports)));
    let { styleProps: styleProps  } = $jStK1$reactspectrumutils.useStyleProps(otherProps);
    size = type === 'popover' ? size || 'S' : size || 'L';
    let domRef = $jStK1$reactspectrumutils.useDOMRef(ref);
    let gridRef = $jStK1$react.useRef();
    let sizeVariant = $c0f7f2d10e38f47a$var$sizeMap[type] || $c0f7f2d10e38f47a$var$sizeMap[size];
    let { dialogProps: dialogProps , titleProps: titleProps  } = $jStK1$reactariadialog.useDialog($jStK1$reactariautils.mergeProps(contextProps, props), domRef);
    let hasHeader = $jStK1$reactspectrumutils.useHasChild(`.${(/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-header']}`, $jStK1$reactspectrumutils.unwrapDOMRef(gridRef));
    let hasFooter = $jStK1$reactspectrumutils.useHasChild(`.${(/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-footer']}`, $jStK1$reactspectrumutils.unwrapDOMRef(gridRef));
    let slots = $jStK1$react.useMemo(()=>({
            hero: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-hero']
            },
            header: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-header']
            },
            heading: {
                UNSAFE_className: $jStK1$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports)), 'spectrum-Dialog-heading', {
                    'spectrum-Dialog-heading--noHeader': !hasHeader
                }),
                level: 2,
                ...titleProps
            },
            typeIcon: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-typeIcon']
            },
            divider: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-divider'],
                size: 'M'
            },
            content: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-content']
            },
            footer: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-footer']
            },
            buttonGroup: {
                UNSAFE_className: $jStK1$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports)), 'spectrum-Dialog-buttonGroup', {
                    'spectrum-Dialog-buttonGroup--noFooter': !hasFooter
                }),
                align: 'end'
            }
        })
    , [
        (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports)),
        hasFooter,
        hasHeader,
        titleProps
    ]);
    // If rendered in a popover or tray there won't be a visible dismiss button,
    // so we render a hidden one for screen readers.
    let dismissButton;
    if (type === 'popover' || type === 'tray') dismissButton = /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactariaoverlays.DismissButton, {
        onDismiss: onDismiss
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactariafocus.FocusScope, {
        contain: true,
        restoreFocus: true
    }, /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement("section", {
        ...styleProps,
        ...dialogProps,
        className: $jStK1$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports)), 'spectrum-Dialog', {
            [`spectrum-Dialog--${sizeVariant}`]: sizeVariant,
            'spectrum-Dialog--dismissable': isDismissable
        }, styleProps.className),
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumlayout.Grid, {
        ref: gridRef,
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-grid']
    }, /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumutils.SlotProvider, {
        slots: slots
    }, children), isDismissable && /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumbutton.ActionButton, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports))['spectrum-Dialog-closeButton'],
        isQuiet: true,
        "aria-label": formatMessage('dismiss'),
        onPress: onDismiss
    }, /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement(($parcel$interopDefault($jStK1$spectrumiconsuiCrossLarge)), null))), dismissButton)));
}
/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */ let $c0f7f2d10e38f47a$export$3ddf2d174ce01153 = /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).forwardRef($c0f7f2d10e38f47a$var$Dialog);









/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */ function $0fe6f5ca8dcf3d26$var$AlertDialog(props, ref) {
    let { onClose: onClose = ()=>{
    }  } = $jStK1$react.useContext($7bbf2d2bb114fbce$export$8b93a07348a7730c) || {
    };
    let { variant: variant , children: children , primaryActionLabel: primaryActionLabel , secondaryActionLabel: secondaryActionLabel , cancelLabel: cancelLabel , autoFocusButton: autoFocusButton , title: title , isPrimaryActionDisabled: isPrimaryActionDisabled , isSecondaryActionDisabled: isSecondaryActionDisabled , onCancel: onCancel = ()=>{
    } , onPrimaryAction: onPrimaryAction = ()=>{
    } , onSecondaryAction: onSecondaryAction = ()=>{
    } , ...otherProps } = props;
    let { styleProps: styleProps  } = $jStK1$reactspectrumutils.useStyleProps(otherProps);
    let formatMessage = $jStK1$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($d7ecf681861477fb$exports)));
    let confirmVariant = 'primary';
    if (variant) {
        if (variant === 'confirmation') confirmVariant = 'cta';
        else if (variant === 'destructive') confirmVariant = 'negative';
    }
    return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($c0f7f2d10e38f47a$export$3ddf2d174ce01153, {
        UNSAFE_style: styleProps.style,
        UNSAFE_className: $jStK1$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($2480d14fdbd4daa4$exports)), {
            [`spectrum-Dialog--${variant}`]: variant
        }, styleProps.className),
        isHidden: styleProps.hidden,
        size: "M",
        role: "alertdialog",
        ref: ref
    }, /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumtext.Heading, null, title), (variant === 'error' || variant === 'warning') && /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement(($parcel$interopDefault($jStK1$spectrumiconsuiAlertMedium)), {
        slot: "typeIcon",
        "aria-label": formatMessage('alert')
    }), /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumdivider.Divider, null), /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumview.Content, null, children), /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumbuttongroup.ButtonGroup, {
        align: "end"
    }, cancelLabel && /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumbutton.Button, {
        variant: "secondary",
        onPress: ()=>$jStK1$reactariautils.chain(onClose(), onCancel())
        ,
        autoFocus: autoFocusButton === 'cancel'
    }, cancelLabel), secondaryActionLabel && /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumbutton.Button, {
        variant: "secondary",
        onPress: ()=>$jStK1$reactariautils.chain(onClose(), onSecondaryAction())
        ,
        isDisabled: isSecondaryActionDisabled,
        autoFocus: autoFocusButton === 'secondary'
    }, secondaryActionLabel), /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumbutton.Button, {
        variant: confirmVariant,
        onPress: ()=>$jStK1$reactariautils.chain(onClose(), onPrimaryAction())
        ,
        isDisabled: isPrimaryActionDisabled,
        autoFocus: autoFocusButton === 'primary'
    }, primaryActionLabel))));
}
/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */ let $0fe6f5ca8dcf3d26$export$de466dd8317b0b75 = /*#__PURE__*/ $jStK1$react.forwardRef($0fe6f5ca8dcf3d26$var$AlertDialog);



var $01bf12b44e3adefa$exports = {};

$parcel$export($01bf12b44e3adefa$exports, "DialogTrigger", () => $01bf12b44e3adefa$export$2e1e1122cf0cba88);







function $01bf12b44e3adefa$var$DialogTrigger(props) {
    let { children: children , type: type = 'modal' , mobileType: mobileType = type === 'popover' ? 'modal' : type , hideArrow: hideArrow , targetRef: targetRef , isDismissable: isDismissable , isKeyboardDismissDisabled: isKeyboardDismissDisabled , ...positionProps } = props;
    if (!Array.isArray(children) || children.length > 2) throw new Error('DialogTrigger must have exactly 2 children');
    // if a function is passed as the second child, it won't appear in toArray
    let [trigger, content] = children;
    // On small devices, show a modal or tray instead of a popover.
    // TODO: DNA variable?
    let isMobile = $jStK1$reactspectrumutils.useMediaQuery('(max-width: 700px)');
    if (isMobile) {
        // handle cases where desktop popovers need a close button for the mobile modal view
        if (type !== 'modal' && mobileType === 'modal') isDismissable = true;
        type = mobileType;
    }
    let state = $jStK1$reactstatelyoverlays.useOverlayTriggerState(props);
    let wasOpen = $jStK1$react.useRef(false);
    wasOpen.current = state.isOpen;
    let isExiting = $jStK1$react.useRef(false);
    let onExiting = ()=>isExiting.current = true
    ;
    let onExited = ()=>isExiting.current = false
    ;
    // eslint-disable-next-line arrow-body-style
    $jStK1$react.useEffect(()=>{
        return ()=>{
            if ((wasOpen.current || isExiting.current) && type !== 'popover' && type !== 'tray') console.warn('A DialogTrigger unmounted while open. This is likely due to being placed within a trigger that unmounts or inside a conditional. Consider using a DialogContainer instead.');
        };
    }, []);
    if (type === 'popover') return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($01bf12b44e3adefa$var$PopoverTrigger, {
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
                return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumoverlays.Modal, {
                    isOpen: state.isOpen,
                    isDismissable: type === 'modal' ? isDismissable : false,
                    onClose: state.close,
                    type: type,
                    isKeyboardDismissDisabled: isKeyboardDismissDisabled,
                    onExiting: onExiting,
                    onExited: onExited
                }, typeof content === 'function' ? content(state.close) : content));
            case 'tray':
                return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumoverlays.Tray, {
                    isOpen: state.isOpen,
                    onClose: state.close,
                    isKeyboardDismissDisabled: isKeyboardDismissDisabled
                }, typeof content === 'function' ? content(state.close) : content));
        }
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($01bf12b44e3adefa$var$DialogTriggerBase, {
        type: type,
        state: state,
        isDismissable: isDismissable,
        trigger: trigger,
        overlay: renderOverlay()
    }));
}
// Support DialogTrigger inside components using CollectionBuilder.
$01bf12b44e3adefa$var$DialogTrigger.getCollectionNode = function*(props) {
    let [trigger] = ($parcel$interopDefault($jStK1$react)).Children.toArray(props.children);
    let [, content] = props.children;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($01bf12b44e3adefa$var$DialogTrigger, {
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
let $01bf12b44e3adefa$export$2e1e1122cf0cba88 = $01bf12b44e3adefa$var$DialogTrigger;
function $01bf12b44e3adefa$var$PopoverTrigger({ state: state , targetRef: targetRef , trigger: trigger , content: content , hideArrow: hideArrow , isKeyboardDismissDisabled: isKeyboardDismissDisabled , ...props }) {
    let triggerRef = $jStK1$react.useRef();
    let overlayRef = $jStK1$react.useRef();
    let { overlayProps: popoverProps , placement: placement , arrowProps: arrowProps  } = $jStK1$reactariaoverlays.useOverlayPosition({
        targetRef: targetRef || triggerRef,
        overlayRef: $jStK1$reactspectrumutils.unwrapDOMRef(overlayRef),
        placement: props.placement,
        containerPadding: props.containerPadding,
        offset: props.offset,
        crossOffset: props.crossOffset,
        shouldFlip: props.shouldFlip,
        isOpen: state.isOpen
    });
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $jStK1$reactariaoverlays.useOverlayTrigger({
        type: 'dialog'
    }, state, triggerRef);
    let triggerPropsWithRef = {
        ...triggerProps,
        ref: targetRef ? undefined : triggerRef
    };
    let overlay = /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumoverlays.Popover, {
        isOpen: state.isOpen,
        UNSAFE_style: popoverProps.style,
        ref: overlayRef,
        onClose: state.close,
        placement: placement,
        arrowProps: arrowProps,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        hideArrow: hideArrow
    }, typeof content === 'function' ? content(state.close) : content);
    return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($01bf12b44e3adefa$var$DialogTriggerBase, {
        type: "popover",
        state: state,
        triggerProps: triggerPropsWithRef,
        dialogProps: overlayProps,
        trigger: trigger,
        overlay: overlay
    }));
}
function $01bf12b44e3adefa$var$DialogTriggerBase({ type: type , state: state , isDismissable: isDismissable , dialogProps: dialogProps = {
} , triggerProps: triggerProps = {
} , overlay: overlay , trigger: trigger  }) {
    let context = {
        type: type,
        onClose: state.close,
        isDismissable: isDismissable,
        ...dialogProps
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$react.Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactariainteractions.PressResponder, {
        ...triggerProps,
        onPress: state.toggle,
        isPressed: state.isOpen && type !== 'modal' && type !== 'fullscreen' && type !== 'fullscreenTakeover'
    }, trigger), /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($7bbf2d2bb114fbce$export$8b93a07348a7730c.Provider, {
        value: context
    }, overlay)));
}


var $b422ff74a7ad9914$exports = {};

$parcel$export($b422ff74a7ad9914$exports, "DialogContainer", () => $b422ff74a7ad9914$export$547754aada6e339f);



function $b422ff74a7ad9914$export$547754aada6e339f(props) {
    let { children: children , type: type = 'modal' , onDismiss: onDismiss , isDismissable: isDismissable , isKeyboardDismissDisabled: isKeyboardDismissDisabled  } = props;
    let childArray = ($parcel$interopDefault($jStK1$react)).Children.toArray(children);
    if (childArray.length > 1) throw new Error('Only a single child can be passed to DialogContainer.');
    let lastChild = $jStK1$react.useRef(null);
    let child = /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).isValidElement(childArray[0]) ? childArray[0] : null;
    if (child) lastChild.current = child;
    let context = {
        type: type,
        onClose: onDismiss,
        isDismissable: isDismissable
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($jStK1$reactspectrumoverlays.Modal, {
        isOpen: !!child,
        onClose: onDismiss,
        type: type,
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled
    }, /*#__PURE__*/ ($parcel$interopDefault($jStK1$react)).createElement($7bbf2d2bb114fbce$export$8b93a07348a7730c.Provider, {
        value: context
    }, lastChild.current)));
}


var $0f536e4b7eee71a6$exports = {};

$parcel$export($0f536e4b7eee71a6$exports, "useDialogContainer", () => $0f536e4b7eee71a6$export$a2f2d8fa6720dab1);


function $0f536e4b7eee71a6$export$a2f2d8fa6720dab1() {
    let context = $jStK1$react.useContext($7bbf2d2bb114fbce$export$8b93a07348a7730c);
    if (!context) throw new Error('Cannot call useDialogContext outside a <DialogTrigger> or <DialogContainer>.');
    return {
        type: context.type,
        dismiss () {
            context.onClose();
        }
    };
}


$parcel$exportWildcard(module.exports, $0fe6f5ca8dcf3d26$exports);
$parcel$exportWildcard(module.exports, $c0f7f2d10e38f47a$exports);
$parcel$exportWildcard(module.exports, $01bf12b44e3adefa$exports);
$parcel$exportWildcard(module.exports, $b422ff74a7ad9914$exports);
$parcel$exportWildcard(module.exports, $0f536e4b7eee71a6$exports);


//# sourceMappingURL=main.js.map
