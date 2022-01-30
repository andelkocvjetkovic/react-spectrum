require("./main.css");
var $hVkyK$reactstatelycollections = require("@react-stately/collections");
var $hVkyK$reactspectrumutils = require("@react-spectrum/utils");
var $hVkyK$reactstatelygrid = require("@react-stately/grid");
var $hVkyK$reactariagrid = require("@react-aria/grid");
var $hVkyK$reactstatelylayout = require("@react-stately/layout");
var $hVkyK$reactstatelylist = require("@react-stately/list");
var $hVkyK$reactspectrumprogress = require("@react-spectrum/progress");
var $hVkyK$react = require("react");
var $hVkyK$reactariai18n = require("@react-aria/i18n");
var $hVkyK$reactspectrumprovider = require("@react-spectrum/provider");
var $hVkyK$reactariavirtualizer = require("@react-aria/virtualizer");
var $hVkyK$reactspectrumcheckbox = require("@react-spectrum/checkbox");
var $hVkyK$spectrumiconsuiChevronLeftMedium = require("@spectrum-icons/ui/ChevronLeftMedium");
var $hVkyK$spectrumiconsuiChevronRightMedium = require("@spectrum-icons/ui/ChevronRightMedium");
var $hVkyK$reactspectrumview = require("@react-spectrum/view");
var $hVkyK$reactspectrumlayout = require("@react-spectrum/layout");
var $hVkyK$reactariautils = require("@react-aria/utils");
var $hVkyK$reactariafocus = require("@react-aria/focus");
var $hVkyK$reactariainteractions = require("@react-aria/interactions");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "ListView", () => $61dda08a5f1a3217$export$84d0dd190d551cd1);
$parcel$export(module.exports, "Item", () => $b4041bd88bc7edb7$re_export$Item);



var $6bf886002db65430$exports = {};
var $2c98b7f9ece90056$exports = {};
$2c98b7f9ece90056$exports = JSON.parse("{\"loading\":\"جارٍ التحميل...\",\"loadingMore\":\"جارٍ تحميل المزيد...\"}");


var $acf9dae048600212$exports = {};
$acf9dae048600212$exports = JSON.parse("{\"loading\":\"Зареждане...\",\"loadingMore\":\"Зареждане на още...\"}");


var $57fe8ced060e6242$exports = {};
$57fe8ced060e6242$exports = JSON.parse("{\"loading\":\"Načítání...\",\"loadingMore\":\"Načítání dalších...\"}");


var $2cd26ea68fde3632$exports = {};
$2cd26ea68fde3632$exports = JSON.parse("{\"loading\":\"Indlæser...\",\"loadingMore\":\"Indlæser flere...\"}");


var $d999e88297676289$exports = {};
$d999e88297676289$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Mehr laden ...\"}");


var $a8b96087ee4984de$exports = {};
$a8b96087ee4984de$exports = JSON.parse("{\"loading\":\"Φόρτωση...\",\"loadingMore\":\"Φόρτωση περισσότερων...\"}");


var $265a55f25bec62da$exports = {};
$265a55f25bec62da$exports = JSON.parse("{\"loading\":\"Loading…\",\"loadingMore\":\"Loading more…\"}");


var $6b1ae3fb1bdc8acb$exports = {};
$6b1ae3fb1bdc8acb$exports = JSON.parse("{\"loading\":\"Cargando…\",\"loadingMore\":\"Cargando más…\"}");


var $ba24670a1bc583a1$exports = {};
$ba24670a1bc583a1$exports = JSON.parse("{\"loading\":\"Laadimine...\",\"loadingMore\":\"Laadi rohkem...\"}");


var $be288355dcf320e7$exports = {};
$be288355dcf320e7$exports = JSON.parse("{\"loading\":\"Ladataan…\",\"loadingMore\":\"Ladataan lisää…\"}");


var $e9f9ffb360649a07$exports = {};
$e9f9ffb360649a07$exports = JSON.parse("{\"loading\":\"Chargement...\",\"loadingMore\":\"Chargement supplémentaire...\"}");


var $b053eae3b2878a48$exports = {};
$b053eae3b2878a48$exports = JSON.parse("{\"loading\":\"טוען...\",\"loadingMore\":\"טוען עוד...\"}");


var $eeda27e1790e1a7c$exports = {};
$eeda27e1790e1a7c$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $f390a285bbb30e95$exports = {};
$f390a285bbb30e95$exports = JSON.parse("{\"loading\":\"Betöltés folyamatban…\",\"loadingMore\":\"Továbbiak betöltése folyamatban…\"}");


var $4a1a1bef7e94c1ca$exports = {};
$4a1a1bef7e94c1ca$exports = JSON.parse("{\"loading\":\"Caricamento...\",\"loadingMore\":\"Caricamento altri...\"}");


var $2172f7a15f6ba73a$exports = {};
$2172f7a15f6ba73a$exports = JSON.parse("{\"loading\":\"読み込み中...\",\"loadingMore\":\"さらに読み込み中...\"}");


var $f139d6f9efb58c31$exports = {};
$f139d6f9efb58c31$exports = JSON.parse("{\"loading\":\"로드 중…\",\"loadingMore\":\"추가 로드 중…\"}");


var $d4cbd46994a70637$exports = {};
$d4cbd46994a70637$exports = JSON.parse("{\"loading\":\"Įkeliama...\",\"loadingMore\":\"Įkeliama daugiau...\"}");


var $0eb31d9b8956cf08$exports = {};
$0eb31d9b8956cf08$exports = JSON.parse("{\"loading\":\"Notiek ielāde...\",\"loadingMore\":\"Tiek ielādēts vēl...\"}");


var $c48cb04c11bfb5ed$exports = {};
$c48cb04c11bfb5ed$exports = JSON.parse("{\"loading\":\"Laster inn ...\",\"loadingMore\":\"Laster inn flere ...\"}");


var $2d9a304124245072$exports = {};
$2d9a304124245072$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Meer laden...\"}");


var $aedf60639215a630$exports = {};
$aedf60639215a630$exports = JSON.parse("{\"loading\":\"Ładowanie...\",\"loadingMore\":\"Wczytywanie większej liczby...\"}");


var $09c372ce7fe2e385$exports = {};
$09c372ce7fe2e385$exports = JSON.parse("{\"loading\":\"Carregando...\",\"loadingMore\":\"Carregando mais...\"}");


var $3a32075678975d39$exports = {};
$3a32075678975d39$exports = JSON.parse("{\"loading\":\"A carregar...\",\"loadingMore\":\"A carregar mais...\"}");


var $a908ed454d820443$exports = {};
$a908ed454d820443$exports = JSON.parse("{\"loading\":\"Se încarcă...\",\"loadingMore\":\"Se încarcă mai multe...\"}");


var $9600347daa7680fe$exports = {};
$9600347daa7680fe$exports = JSON.parse("{\"loading\":\"Загрузка...\",\"loadingMore\":\"Дополнительная загрузка...\"}");


var $6102c33b368781b0$exports = {};
$6102c33b368781b0$exports = JSON.parse("{\"loading\":\"Načítava sa...\",\"loadingMore\":\"Načítava sa viac...\"}");


var $ad0909385ca27aa3$exports = {};
$ad0909385ca27aa3$exports = JSON.parse("{\"loading\":\"Nalaganje ...\",\"loadingMore\":\"Nalaganje več vsebine ...\"}");


var $acbd623382c14748$exports = {};
$acbd623382c14748$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $6b42732d395c6dce$exports = {};
$6b42732d395c6dce$exports = JSON.parse("{\"loading\":\"Läser in...\",\"loadingMore\":\"Läser in mer...\"}");


var $7bb06340c3dee0e5$exports = {};
$7bb06340c3dee0e5$exports = JSON.parse("{\"loading\":\"Yükleniyor...\",\"loadingMore\":\"Daha fazla yükleniyor...\"}");


var $925fa69dda220fed$exports = {};
$925fa69dda220fed$exports = JSON.parse("{\"loading\":\"Завантаження…\",\"loadingMore\":\"Завантаження інших об’єктів...\"}");


var $25d475323c85facd$exports = {};
$25d475323c85facd$exports = JSON.parse("{\"loading\":\"正在加载...\",\"loadingMore\":\"正在加载更多...\"}");


var $d010d366832e34e1$exports = {};
$d010d366832e34e1$exports = JSON.parse("{\"loading\":\"載入中…\",\"loadingMore\":\"正在載入更多…\"}");


$6bf886002db65430$exports = {
    "ar-AE": $2c98b7f9ece90056$exports,
    "bg-BG": $acf9dae048600212$exports,
    "cs-CZ": $57fe8ced060e6242$exports,
    "da-DK": $2cd26ea68fde3632$exports,
    "de-DE": $d999e88297676289$exports,
    "el-GR": $a8b96087ee4984de$exports,
    "en-US": $265a55f25bec62da$exports,
    "es-ES": $6b1ae3fb1bdc8acb$exports,
    "et-EE": $ba24670a1bc583a1$exports,
    "fi-FI": $be288355dcf320e7$exports,
    "fr-FR": $e9f9ffb360649a07$exports,
    "he-IL": $b053eae3b2878a48$exports,
    "hr-HR": $eeda27e1790e1a7c$exports,
    "hu-HU": $f390a285bbb30e95$exports,
    "it-IT": $4a1a1bef7e94c1ca$exports,
    "ja-JP": $2172f7a15f6ba73a$exports,
    "ko-KR": $f139d6f9efb58c31$exports,
    "lt-LT": $d4cbd46994a70637$exports,
    "lv-LV": $0eb31d9b8956cf08$exports,
    "nb-NO": $c48cb04c11bfb5ed$exports,
    "nl-NL": $2d9a304124245072$exports,
    "pl-PL": $aedf60639215a630$exports,
    "pt-BR": $09c372ce7fe2e385$exports,
    "pt-PT": $3a32075678975d39$exports,
    "ro-RO": $a908ed454d820443$exports,
    "ru-RU": $9600347daa7680fe$exports,
    "sk-SK": $6102c33b368781b0$exports,
    "sl-SI": $ad0909385ca27aa3$exports,
    "sr-SP": $acbd623382c14748$exports,
    "sv-SE": $6b42732d395c6dce$exports,
    "tr-TR": $7bb06340c3dee0e5$exports,
    "uk-UA": $925fa69dda220fed$exports,
    "zh-CN": $25d475323c85facd$exports,
    "zh-TW": $d010d366832e34e1$exports
};




var $524911a3155d64e3$exports = {};

$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListView", () => $524911a3155d64e3$export$4ad4709e9aee8e02, (v) => $524911a3155d64e3$export$4ad4709e9aee8e02 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListView--quiet", () => $524911a3155d64e3$export$b01cb9680b0b8d22, (v) => $524911a3155d64e3$export$b01cb9680b0b8d22 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem", () => $524911a3155d64e3$export$ce8c93b50eec2d4f, (v) => $524911a3155d64e3$export$ce8c93b50eec2d4f = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListView--emphasized", () => $524911a3155d64e3$export$eb0d5352b2a55473, (v) => $524911a3155d64e3$export$eb0d5352b2a55473 = v);
$parcel$export($524911a3155d64e3$exports, "is-selected", () => $524911a3155d64e3$export$1e0fb04f31d3c22a, (v) => $524911a3155d64e3$export$1e0fb04f31d3c22a = v);
$parcel$export($524911a3155d64e3$exports, "is-hovered", () => $524911a3155d64e3$export$b8813cd5d7824ce7, (v) => $524911a3155d64e3$export$b8813cd5d7824ce7 = v);
$parcel$export($524911a3155d64e3$exports, "is-active", () => $524911a3155d64e3$export$20fd0f7cd4e6112f, (v) => $524911a3155d64e3$export$20fd0f7cd4e6112f = v);
$parcel$export($524911a3155d64e3$exports, "is-previous-selected", () => $524911a3155d64e3$export$714358c802c073a3, (v) => $524911a3155d64e3$export$714358c802c073a3 = v);
$parcel$export($524911a3155d64e3$exports, "is-focused", () => $524911a3155d64e3$export$e7dc768d35940237, (v) => $524911a3155d64e3$export$e7dc768d35940237 = v);
$parcel$export($524911a3155d64e3$exports, "focus-ring", () => $524911a3155d64e3$export$f39a09f249340e2a, (v) => $524911a3155d64e3$export$f39a09f249340e2a = v);
$parcel$export($524911a3155d64e3$exports, "has-checkbox", () => $524911a3155d64e3$export$27f4d14f7fc5b94, (v) => $524911a3155d64e3$export$27f4d14f7fc5b94 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-grid", () => $524911a3155d64e3$export$aaaf83100348d389, (v) => $524911a3155d64e3$export$aaaf83100348d389 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-checkbox", () => $524911a3155d64e3$export$f979f76ca45242f2, (v) => $524911a3155d64e3$export$f979f76ca45242f2 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-icon", () => $524911a3155d64e3$export$2b56ca744bd31ebd, (v) => $524911a3155d64e3$export$2b56ca744bd31ebd = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-image", () => $524911a3155d64e3$export$1260770e51d5a8c4, (v) => $524911a3155d64e3$export$1260770e51d5a8c4 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-content", () => $524911a3155d64e3$export$dc2b0b08d47555, (v) => $524911a3155d64e3$export$dc2b0b08d47555 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-description", () => $524911a3155d64e3$export$5d2adfeb248e654a, (v) => $524911a3155d64e3$export$5d2adfeb248e654a = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-actions", () => $524911a3155d64e3$export$26480389595d4515, (v) => $524911a3155d64e3$export$26480389595d4515 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-actionmenu", () => $524911a3155d64e3$export$58dfda3903289699, (v) => $524911a3155d64e3$export$58dfda3903289699 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListViewItem-parentIndicator", () => $524911a3155d64e3$export$39b42a8a24290c17, (v) => $524911a3155d64e3$export$39b42a8a24290c17 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListView--compact", () => $524911a3155d64e3$export$1f55b27adf96a61e, (v) => $524911a3155d64e3$export$1f55b27adf96a61e = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListView--spacious", () => $524911a3155d64e3$export$cbd30c7809acdd81, (v) => $524911a3155d64e3$export$cbd30c7809acdd81 = v);
$parcel$export($524911a3155d64e3$exports, "react-spectrum-ListView-centeredWrapper", () => $524911a3155d64e3$export$1b66ee5cd8394caf, (v) => $524911a3155d64e3$export$1b66ee5cd8394caf = v);
var $524911a3155d64e3$export$4ad4709e9aee8e02;
var $524911a3155d64e3$export$b01cb9680b0b8d22;
var $524911a3155d64e3$export$ce8c93b50eec2d4f;
var $524911a3155d64e3$export$eb0d5352b2a55473;
var $524911a3155d64e3$export$1e0fb04f31d3c22a;
var $524911a3155d64e3$export$b8813cd5d7824ce7;
var $524911a3155d64e3$export$20fd0f7cd4e6112f;
var $524911a3155d64e3$export$714358c802c073a3;
var $524911a3155d64e3$export$e7dc768d35940237;
var $524911a3155d64e3$export$f39a09f249340e2a;
var $524911a3155d64e3$export$27f4d14f7fc5b94;
var $524911a3155d64e3$export$aaaf83100348d389;
var $524911a3155d64e3$export$f979f76ca45242f2;
var $524911a3155d64e3$export$2b56ca744bd31ebd;
var $524911a3155d64e3$export$1260770e51d5a8c4;
var $524911a3155d64e3$export$dc2b0b08d47555;
var $524911a3155d64e3$export$5d2adfeb248e654a;
var $524911a3155d64e3$export$26480389595d4515;
var $524911a3155d64e3$export$58dfda3903289699;
var $524911a3155d64e3$export$39b42a8a24290c17;
var $524911a3155d64e3$export$1f55b27adf96a61e;
var $524911a3155d64e3$export$cbd30c7809acdd81;
var $524911a3155d64e3$export$1b66ee5cd8394caf;
$524911a3155d64e3$export$4ad4709e9aee8e02 = "_react-spectrum-ListView_d68562";
$524911a3155d64e3$export$b01cb9680b0b8d22 = "_react-spectrum-ListView--quiet_d68562";
$524911a3155d64e3$export$ce8c93b50eec2d4f = "_react-spectrum-ListViewItem_d68562";
$524911a3155d64e3$export$eb0d5352b2a55473 = "_react-spectrum-ListView--emphasized_d68562";
$524911a3155d64e3$export$1e0fb04f31d3c22a = "_is-selected_d68562";
$524911a3155d64e3$export$b8813cd5d7824ce7 = "_is-hovered_d68562";
$524911a3155d64e3$export$20fd0f7cd4e6112f = "_is-active_d68562";
$524911a3155d64e3$export$714358c802c073a3 = "_is-previous-selected_d68562";
$524911a3155d64e3$export$e7dc768d35940237 = "_is-focused_d68562";
$524911a3155d64e3$export$f39a09f249340e2a = "_focus-ring_d68562";
$524911a3155d64e3$export$27f4d14f7fc5b94 = "_has-checkbox_d68562";
$524911a3155d64e3$export$aaaf83100348d389 = "_react-spectrum-ListViewItem-grid_d68562";
$524911a3155d64e3$export$f979f76ca45242f2 = "_react-spectrum-ListViewItem-checkbox_d68562";
$524911a3155d64e3$export$2b56ca744bd31ebd = "_react-spectrum-ListViewItem-icon_d68562";
$524911a3155d64e3$export$1260770e51d5a8c4 = "_react-spectrum-ListViewItem-image_d68562";
$524911a3155d64e3$export$dc2b0b08d47555 = "_react-spectrum-ListViewItem-content_d68562";
$524911a3155d64e3$export$5d2adfeb248e654a = "_react-spectrum-ListViewItem-description_d68562";
$524911a3155d64e3$export$26480389595d4515 = "_react-spectrum-ListViewItem-actions_d68562";
$524911a3155d64e3$export$58dfda3903289699 = "_react-spectrum-ListViewItem-actionmenu_d68562";
$524911a3155d64e3$export$39b42a8a24290c17 = "_react-spectrum-ListViewItem-parentIndicator_d68562";
$524911a3155d64e3$export$1f55b27adf96a61e = "_react-spectrum-ListView--compact_d68562";
$524911a3155d64e3$export$cbd30c7809acdd81 = "_react-spectrum-ListView--spacious_d68562";
$524911a3155d64e3$export$1b66ee5cd8394caf = "_react-spectrum-ListView-centeredWrapper_d68562";
















function $2a2b0a00df3cc8d5$export$c6bde0c04b033c0e(props) {
    let { item: item , onAction: onAction , isEmphasized: isEmphasized  } = props;
    let cellNode = [
        ...item.childNodes
    ][0];
    let { state: state  } = $hVkyK$react.useContext($61dda08a5f1a3217$export$870039b0abfe3de0);
    let { direction: direction  } = $hVkyK$reactariai18n.useLocale();
    let rowRef = $hVkyK$react.useRef();
    let cellRef = $hVkyK$react.useRef();
    let { isFocusVisible: isFocusVisibleWithin , focusProps: focusWithinProps  } = $hVkyK$reactariafocus.useFocusRing({
        within: true
    });
    let { isFocusVisible: isFocusVisible , focusProps: focusProps  } = $hVkyK$reactariafocus.useFocusRing();
    let allowsInteraction = state.selectionManager.selectionMode !== 'none' || onAction;
    let isDisabled = !allowsInteraction || state.disabledKeys.has(item.key);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $hVkyK$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    let { pressProps: pressProps , isPressed: isPressed  } = $hVkyK$reactariainteractions.usePress({
        isDisabled: isDisabled
    });
    let { rowProps: rowProps  } = $hVkyK$reactariagrid.useGridRow({
        node: item,
        isVirtualized: true,
        onAction: onAction ? ()=>onAction(item.key)
         : undefined
    }, state, rowRef);
    let { gridCellProps: gridCellProps  } = $hVkyK$reactariagrid.useGridCell({
        node: cellNode,
        focusMode: 'cell'
    }, state, cellRef);
    const mergedProps = $hVkyK$reactariautils.mergeProps(gridCellProps, hoverProps, focusWithinProps, focusProps);
    let { checkboxProps: checkboxProps  } = $hVkyK$reactariagrid.useGridSelectionCheckbox({
        ...props,
        key: item.key
    }, state);
    let chevron = null;
    if (item.props.hasChildItems) chevron = direction === 'ltr' ? /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement(($parcel$interopDefault($hVkyK$spectrumiconsuiChevronRightMedium)), {
        "aria-hidden": "true",
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-parentIndicator']
    }) : /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement(($parcel$interopDefault($hVkyK$spectrumiconsuiChevronLeftMedium)), {
        "aria-hidden": "true",
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-parentIndicator']
    });
    let showCheckbox = state.selectionManager.selectionMode !== 'none' && state.selectionManager.selectionBehavior === 'toggle';
    let isSelected = state.selectionManager.isSelected(item.key);
    return(/*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement("div", {
        ...$hVkyK$reactariautils.mergeProps(rowProps, pressProps),
        ref: rowRef
    }, /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement("div", {
        className: $hVkyK$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports)), 'react-spectrum-ListViewItem', {
            'is-active': isPressed,
            'is-focused': isFocusVisibleWithin,
            'focus-ring': isFocusVisible,
            'is-hovered': isHovered,
            'is-selected': isSelected,
            'is-previous-selected': state.selectionManager.isSelected(item.prevKey),
            'react-spectrum-ListViewItem--highlightSelection': state.selectionManager.selectionBehavior === 'replace' && (isSelected || state.selectionManager.isSelected(item.nextKey))
        }),
        ref: cellRef,
        ...mergedProps
    }, /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($hVkyK$reactspectrumlayout.Grid, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-grid']
    }, showCheckbox && /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($hVkyK$reactspectrumcheckbox.Checkbox, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-checkbox'],
        ...checkboxProps,
        isEmphasized: isEmphasized
    }), /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($hVkyK$reactspectrumutils.SlotProvider, {
        slots: {
            content: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-content']
            },
            text: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-content']
            },
            description: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-description']
            },
            icon: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-icon'],
                size: 'M'
            },
            image: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-image']
            },
            link: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-content'],
                isQuiet: true
            },
            actionButton: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-actions'],
                isQuiet: true
            },
            actionGroup: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-actions'],
                isQuiet: true,
                density: 'compact'
            },
            actionMenu: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports))['react-spectrum-ListViewItem-actionmenu'],
                isQuiet: true
            }
        }
    }, typeof item.rendered === 'string' ? /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($hVkyK$reactspectrumview.Content, null, item.rendered) : item.rendered, /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($hVkyK$reactspectrumutils.ClearSlots, null, chevron))))));
}







const $61dda08a5f1a3217$export$870039b0abfe3de0 = /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createContext(null);
const $61dda08a5f1a3217$var$ROW_HEIGHTS = {
    compact: {
        medium: 32,
        large: 40
    },
    regular: {
        medium: 40,
        large: 50
    },
    spacious: {
        medium: 48,
        large: 60
    }
};
function $61dda08a5f1a3217$export$bea90da51ec70dea(state, density) {
    let { scale: scale  } = $hVkyK$reactspectrumprovider.useProvider();
    let collator = $hVkyK$reactariai18n.useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let layout = $hVkyK$react.useMemo(()=>new $hVkyK$reactstatelylayout.ListLayout({
            estimatedRowHeight: $61dda08a5f1a3217$var$ROW_HEIGHTS[density][scale],
            padding: 0,
            collator: collator
        })
    , [
        collator,
        scale,
        density
    ]);
    layout.collection = state.collection;
    layout.disabledKeys = state.disabledKeys;
    return layout;
}
function $61dda08a5f1a3217$var$ListView(props, ref) {
    let { density: density = 'regular' , loadingState: loadingState , isQuiet: isQuiet , transitionDuration: transitionDuration = 0 , onAction: onAction  } = props;
    let domRef = $hVkyK$reactspectrumutils.useDOMRef(ref);
    let { collection: collection  } = $hVkyK$reactstatelylist.useListState(props);
    let formatMessage = $hVkyK$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($6bf886002db65430$exports)));
    let { styleProps: styleProps  } = $hVkyK$reactspectrumutils.useStyleProps(props);
    let { direction: direction  } = $hVkyK$reactariai18n.useLocale();
    let collator = $hVkyK$reactariai18n.useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let gridCollection = $hVkyK$react.useMemo(()=>new $hVkyK$reactstatelygrid.GridCollection({
            columnCount: 1,
            items: [
                ...collection
            ].map((item)=>({
                    ...item,
                    hasChildNodes: true,
                    childNodes: [
                        {
                            key: `cell-${item.key}`,
                            type: 'cell',
                            index: 0,
                            value: null,
                            level: 0,
                            rendered: null,
                            textValue: item.textValue,
                            hasChildNodes: false,
                            childNodes: []
                        }
                    ]
                })
            )
        })
    , [
        collection
    ]);
    let state = $hVkyK$reactstatelygrid.useGridState({
        ...props,
        collection: gridCollection,
        focusMode: 'cell',
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    let layout = $61dda08a5f1a3217$export$bea90da51ec70dea(state, props.density || 'regular');
    let keyboardDelegate = $hVkyK$react.useMemo(()=>new $hVkyK$reactariagrid.GridKeyboardDelegate({
            collection: state.collection,
            disabledKeys: state.disabledKeys,
            ref: domRef,
            direction: direction,
            collator: collator,
            // Focus the ListView cell instead of the row so that focus doesn't change with left/right arrow keys when there aren't any
            // focusable children in the cell.
            focusMode: 'cell'
        })
    , [
        state,
        domRef,
        direction,
        collator
    ]);
    let { gridProps: gridProps  } = $hVkyK$reactariagrid.useGrid({
        ...props,
        isVirtualized: true,
        keyboardDelegate: keyboardDelegate
    }, state, domRef);
    // Sync loading state into the layout.
    layout.isLoading = loadingState === 'loading';
    let focusedKey = state.selectionManager.focusedKey;
    let focusedItem = gridCollection.getItem(state.selectionManager.focusedKey);
    if (focusedItem?.parentKey != null) focusedKey = focusedItem.parentKey;
    return(/*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($61dda08a5f1a3217$export$870039b0abfe3de0.Provider, {
        value: {
            state: state,
            keyboardDelegate: keyboardDelegate
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($hVkyK$reactariavirtualizer.Virtualizer, {
        ...gridProps,
        ...styleProps,
        ref: domRef,
        focusedKey: focusedKey,
        scrollDirection: "vertical",
        className: $hVkyK$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports)), 'react-spectrum-ListView', `react-spectrum-ListView--${density}`, 'react-spectrum-ListView--emphasized', {
            'react-spectrum-ListView--quiet': isQuiet
        }, styleProps.className),
        layout: layout,
        collection: gridCollection,
        transitionDuration: transitionDuration
    }, (type, item)=>{
        if (type === 'item') return(/*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($2a2b0a00df3cc8d5$export$c6bde0c04b033c0e, {
            item: item,
            onAction: onAction,
            isEmphasized: true
        }));
        else if (type === 'loader') return(/*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($61dda08a5f1a3217$var$CenteredWrapper, null, /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($hVkyK$reactspectrumprogress.ProgressCircle, {
            isIndeterminate: true,
            "aria-label": state.collection.size > 0 ? formatMessage('loadingMore') : formatMessage('loading')
        })));
        else if (type === 'placeholder') {
            let emptyState = props.renderEmptyState ? props.renderEmptyState() : null;
            if (emptyState == null) return null;
            return(/*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement($61dda08a5f1a3217$var$CenteredWrapper, null, emptyState));
        }
    })));
}
function $61dda08a5f1a3217$var$CenteredWrapper({ children: children  }) {
    let { state: state  } = $hVkyK$react.useContext($61dda08a5f1a3217$export$870039b0abfe3de0);
    return(/*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.size + 1,
        className: $hVkyK$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($524911a3155d64e3$exports)), 'react-spectrum-ListView-centeredWrapper')
    }, /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).createElement("div", {
        role: "gridcell"
    }, children)));
}
const $61dda08a5f1a3217$export$84d0dd190d551cd1 = /*#__PURE__*/ ($parcel$interopDefault($hVkyK$react)).forwardRef($61dda08a5f1a3217$var$ListView);





//# sourceMappingURL=main.js.map
