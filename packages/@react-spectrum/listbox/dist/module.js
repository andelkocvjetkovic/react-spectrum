import "./main.css";
import {Item as $3c37b06c0a1ebc55$re_export$Item, Section as $3c37b06c0a1ebc55$re_export$Section} from "@react-stately/collections";
import $77ZMV$react, {useMemo as $77ZMV$useMemo, useContext as $77ZMV$useContext, useRef as $77ZMV$useRef, Fragment as $77ZMV$Fragment} from "react";
import {useDOMRef as $77ZMV$useDOMRef, useStyleProps as $77ZMV$useStyleProps, classNames as $77ZMV$classNames, ClearSlots as $77ZMV$ClearSlots, SlotProvider as $77ZMV$SlotProvider} from "@react-spectrum/utils";
import {useListState as $77ZMV$useListState} from "@react-stately/list";
import {useListBox as $77ZMV$useListBox, useOption as $77ZMV$useOption, useListBoxSection as $77ZMV$useListBoxSection} from "@react-aria/listbox";
import {ListLayout as $77ZMV$ListLayout} from "@react-stately/layout";
import {mergeProps as $77ZMV$mergeProps} from "@react-aria/utils";
import {ProgressCircle as $77ZMV$ProgressCircle} from "@react-spectrum/progress";
import {useCollator as $77ZMV$useCollator, useMessageFormatter as $77ZMV$useMessageFormatter, useLocale as $77ZMV$useLocale} from "@react-aria/i18n";
import {useProvider as $77ZMV$useProvider} from "@react-spectrum/provider";
import {VirtualizerItem as $77ZMV$VirtualizerItem, Virtualizer as $77ZMV$Virtualizer, useVirtualizerItem as $77ZMV$useVirtualizerItem, layoutInfoToStyle as $77ZMV$layoutInfoToStyle} from "@react-aria/virtualizer";
import $77ZMV$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {FocusRing as $77ZMV$FocusRing} from "@react-aria/focus";
import {Grid as $77ZMV$Grid} from "@react-spectrum/layout";
import {useHover as $77ZMV$useHover, isFocusVisible as $77ZMV$isFocusVisible} from "@react-aria/interactions";
import {Text as $77ZMV$Text} from "@react-spectrum/text";
import {useSeparator as $77ZMV$useSeparator} from "@react-aria/separator";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $06263863a6972bae$exports = {};

$parcel$export($06263863a6972bae$exports, "ListBox", () => $06263863a6972bae$export$41f133550aa26f48);
var $6f1e4fc6e0371b23$exports = {};

$parcel$export($6f1e4fc6e0371b23$exports, "useListBoxLayout", () => $6f1e4fc6e0371b23$export$25768ea656ae32a7);
$parcel$export($6f1e4fc6e0371b23$exports, "ListBoxBase", () => $6f1e4fc6e0371b23$export$1afdcf349979fb7e);


var $4779440fb41075bc$exports = {};
var $8f7c082495245488$exports = {};
$8f7c082495245488$exports = JSON.parse("{\"loading\":\"جارٍ التحميل...\",\"loadingMore\":\"جارٍ تحميل المزيد...\"}");


var $13c8835e5f69a782$exports = {};
$13c8835e5f69a782$exports = JSON.parse("{\"loading\":\"Зареждане...\",\"loadingMore\":\"Зареждане на още...\"}");


var $31ea8970e2cd03cd$exports = {};
$31ea8970e2cd03cd$exports = JSON.parse("{\"loading\":\"Načítání...\",\"loadingMore\":\"Načítání dalších...\"}");


var $31af26dfab10ffdd$exports = {};
$31af26dfab10ffdd$exports = JSON.parse("{\"loading\":\"Indlæser ...\",\"loadingMore\":\"Indlæser flere ...\"}");


var $66a22a1131f19de4$exports = {};
$66a22a1131f19de4$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Mehr laden ...\"}");


var $ca7bca92f53152e4$exports = {};
$ca7bca92f53152e4$exports = JSON.parse("{\"loading\":\"Φόρτωση...\",\"loadingMore\":\"Φόρτωση περισσότερων...\"}");


var $023db5e894ef8fd2$exports = {};
$023db5e894ef8fd2$exports = JSON.parse("{\"loading\":\"Loading…\",\"loadingMore\":\"Loading more…\"}");


var $1699eff41b92f6eb$exports = {};
$1699eff41b92f6eb$exports = JSON.parse("{\"loading\":\"Cargando…\",\"loadingMore\":\"Cargando más…\"}");


var $a54ec9d8552c997a$exports = {};
$a54ec9d8552c997a$exports = JSON.parse("{\"loading\":\"Laadimine...\",\"loadingMore\":\"Laadi rohkem...\"}");


var $431c3c292838fea6$exports = {};
$431c3c292838fea6$exports = JSON.parse("{\"loading\":\"Ladataan…\",\"loadingMore\":\"Ladataan lisää…\"}");


var $b6c1a76dd1c42259$exports = {};
$b6c1a76dd1c42259$exports = JSON.parse("{\"loading\":\"Chargement...\",\"loadingMore\":\"Chargement supplémentaire...\"}");


var $97e6c84c30b2d601$exports = {};
$97e6c84c30b2d601$exports = JSON.parse("{\"loading\":\"טוען...\",\"loadingMore\":\"טוען עוד...\"}");


var $7f8c40881d86d936$exports = {};
$7f8c40881d86d936$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $bd55eef1bd107751$exports = {};
$bd55eef1bd107751$exports = JSON.parse("{\"loading\":\"Betöltés folyamatban…\",\"loadingMore\":\"Továbbiak betöltése folyamatban…\"}");


var $f2d9a38d490fbd61$exports = {};
$f2d9a38d490fbd61$exports = JSON.parse("{\"loading\":\"Caricamento...\",\"loadingMore\":\"Caricamento altri...\"}");


var $6f3e12a4ec03d192$exports = {};
$6f3e12a4ec03d192$exports = JSON.parse("{\"loading\":\"読み込み中...\",\"loadingMore\":\"さらに読み込み中...\"}");


var $09cacc72aa2bac18$exports = {};
$09cacc72aa2bac18$exports = JSON.parse("{\"loading\":\"로드 중\",\"loadingMore\":\"추가 로드 중\"}");


var $b77739af7b73bbb4$exports = {};
$b77739af7b73bbb4$exports = JSON.parse("{\"loading\":\"Įkeliama...\",\"loadingMore\":\"Įkeliama daugiau...\"}");


var $26cdb35f32898151$exports = {};
$26cdb35f32898151$exports = JSON.parse("{\"loading\":\"Notiek ielāde...\",\"loadingMore\":\"Tiek ielādēts vēl...\"}");


var $979b52d6c04d986c$exports = {};
$979b52d6c04d986c$exports = JSON.parse("{\"loading\":\"Laster inn ...\",\"loadingMore\":\"Laster inn flere ...\"}");


var $5764a2a2eb49b845$exports = {};
$5764a2a2eb49b845$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Meer laden...\"}");


var $9ac9b9a1712f3560$exports = {};
$9ac9b9a1712f3560$exports = JSON.parse("{\"loading\":\"Ładowanie...\",\"loadingMore\":\"Wczytywanie większej liczby...\"}");


var $cbcb346e78384e4e$exports = {};
$cbcb346e78384e4e$exports = JSON.parse("{\"loading\":\"Carregando...\",\"loadingMore\":\"Carregando mais...\"}");


var $dae3494c9930ff97$exports = {};
$dae3494c9930ff97$exports = JSON.parse("{\"loading\":\"A carregar...\",\"loadingMore\":\"A carregar mais...\"}");


var $1041252e3791b46c$exports = {};
$1041252e3791b46c$exports = JSON.parse("{\"loading\":\"Se încarcă...\",\"loadingMore\":\"Se încarcă mai multe...\"}");


var $29ee3ecdc380a185$exports = {};
$29ee3ecdc380a185$exports = JSON.parse("{\"loading\":\"Загрузка...\",\"loadingMore\":\"Дополнительная загрузка...\"}");


var $b849ae08c7539bc5$exports = {};
$b849ae08c7539bc5$exports = JSON.parse("{\"loading\":\"Načítava sa...\",\"loadingMore\":\"Načítava sa viac...\"}");


var $fb25fd96af5f6895$exports = {};
$fb25fd96af5f6895$exports = JSON.parse("{\"loading\":\"Nalaganje...\",\"loadingMore\":\"Nalaganje več vsebine...\"}");


var $3ca338ca066242fe$exports = {};
$3ca338ca066242fe$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $d32d385b3b5ee0a8$exports = {};
$d32d385b3b5ee0a8$exports = JSON.parse("{\"loading\":\"Läser in...\",\"loadingMore\":\"Läser in mer...\"}");


var $e41d15caae787956$exports = {};
$e41d15caae787956$exports = JSON.parse("{\"loading\":\"Yükleniyor...\",\"loadingMore\":\"Daha fazla yükleniyor...\"}");


var $82ce133fc88c9cd4$exports = {};
$82ce133fc88c9cd4$exports = JSON.parse("{\"loading\":\"Завантаження…\",\"loadingMore\":\"Завантаження інших об’єктів...\"}");


var $18abfd99d2fed8d8$exports = {};
$18abfd99d2fed8d8$exports = JSON.parse("{\"loading\":\"正在加载...\",\"loadingMore\":\"正在加载更多...\"}");


var $e257a52b56ac6511$exports = {};
$e257a52b56ac6511$exports = JSON.parse("{\"loading\":\"正在載入\",\"loadingMore\":\"正在載入更多…\"}");


$4779440fb41075bc$exports = {
    "ar-AE": $8f7c082495245488$exports,
    "bg-BG": $13c8835e5f69a782$exports,
    "cs-CZ": $31ea8970e2cd03cd$exports,
    "da-DK": $31af26dfab10ffdd$exports,
    "de-DE": $66a22a1131f19de4$exports,
    "el-GR": $ca7bca92f53152e4$exports,
    "en-US": $023db5e894ef8fd2$exports,
    "es-ES": $1699eff41b92f6eb$exports,
    "et-EE": $a54ec9d8552c997a$exports,
    "fi-FI": $431c3c292838fea6$exports,
    "fr-FR": $b6c1a76dd1c42259$exports,
    "he-IL": $97e6c84c30b2d601$exports,
    "hr-HR": $7f8c40881d86d936$exports,
    "hu-HU": $bd55eef1bd107751$exports,
    "it-IT": $f2d9a38d490fbd61$exports,
    "ja-JP": $6f3e12a4ec03d192$exports,
    "ko-KR": $09cacc72aa2bac18$exports,
    "lt-LT": $b77739af7b73bbb4$exports,
    "lv-LV": $26cdb35f32898151$exports,
    "nb-NO": $979b52d6c04d986c$exports,
    "nl-NL": $5764a2a2eb49b845$exports,
    "pl-PL": $9ac9b9a1712f3560$exports,
    "pt-BR": $cbcb346e78384e4e$exports,
    "pt-PT": $dae3494c9930ff97$exports,
    "ro-RO": $1041252e3791b46c$exports,
    "ru-RU": $29ee3ecdc380a185$exports,
    "sk-SK": $b849ae08c7539bc5$exports,
    "sl-SI": $fb25fd96af5f6895$exports,
    "sr-SP": $3ca338ca066242fe$exports,
    "sv-SE": $d32d385b3b5ee0a8$exports,
    "tr-TR": $e41d15caae787956$exports,
    "uk-UA": $82ce133fc88c9cd4$exports,
    "zh-CN": $18abfd99d2fed8d8$exports,
    "zh-TW": $e257a52b56ac6511$exports
};



const $cb06e804a140e5fc$export$7ff8f37d2d81a48d = $77ZMV$react.createContext(null);










var $0da61c9ca9006f54$exports = {};

$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-popover", () => $0da61c9ca9006f54$export$d959f30786125b, (v) => $0da61c9ca9006f54$export$d959f30786125b = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu", () => $0da61c9ca9006f54$export$fae6af6decd50ac5, (v) => $0da61c9ca9006f54$export$fae6af6decd50ac5 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-sectionHeading", () => $0da61c9ca9006f54$export$c20ea4b35020fbdd, (v) => $0da61c9ca9006f54$export$c20ea4b35020fbdd = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-checkmark", () => $0da61c9ca9006f54$export$8e15a726e4f7e62d, (v) => $0da61c9ca9006f54$export$8e15a726e4f7e62d = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-item", () => $0da61c9ca9006f54$export$45faad328e6c532b, (v) => $0da61c9ca9006f54$export$45faad328e6c532b = v);
$parcel$export($0da61c9ca9006f54$exports, "is-selected", () => $0da61c9ca9006f54$export$1e0fb04f31d3c22a, (v) => $0da61c9ca9006f54$export$1e0fb04f31d3c22a = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Icon", () => $0da61c9ca9006f54$export$d374b04f30360026, (v) => $0da61c9ca9006f54$export$d374b04f30360026 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemLabel", () => $0da61c9ca9006f54$export$1aa6419c5c650567, (v) => $0da61c9ca9006f54$export$1aa6419c5c650567 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemIcon", () => $0da61c9ca9006f54$export$f431001e1bb54633, (v) => $0da61c9ca9006f54$export$f431001e1bb54633 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemLabel--wrapping", () => $0da61c9ca9006f54$export$465092164a8e1d98, (v) => $0da61c9ca9006f54$export$465092164a8e1d98 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-divider", () => $0da61c9ca9006f54$export$e892026f534efed8, (v) => $0da61c9ca9006f54$export$e892026f534efed8 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemGrid", () => $0da61c9ca9006f54$export$ee5f52784f57f9c8, (v) => $0da61c9ca9006f54$export$ee5f52784f57f9c8 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-selectable", () => $0da61c9ca9006f54$export$fbd22ba224473193, (v) => $0da61c9ca9006f54$export$fbd22ba224473193 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-end", () => $0da61c9ca9006f54$export$926a1bb74ed65667, (v) => $0da61c9ca9006f54$export$926a1bb74ed65667 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-icon", () => $0da61c9ca9006f54$export$cbbae63ef9e44c7a, (v) => $0da61c9ca9006f54$export$cbbae63ef9e44c7a = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-description", () => $0da61c9ca9006f54$export$36f1275051e39ead, (v) => $0da61c9ca9006f54$export$36f1275051e39ead = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-keyboard", () => $0da61c9ca9006f54$export$4f9817a7dff6ba0f, (v) => $0da61c9ca9006f54$export$4f9817a7dff6ba0f = v);
$parcel$export($0da61c9ca9006f54$exports, "focus-ring", () => $0da61c9ca9006f54$export$f39a09f249340e2a, (v) => $0da61c9ca9006f54$export$f39a09f249340e2a = v);
$parcel$export($0da61c9ca9006f54$exports, "is-focused", () => $0da61c9ca9006f54$export$e7dc768d35940237, (v) => $0da61c9ca9006f54$export$e7dc768d35940237 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-hovered", () => $0da61c9ca9006f54$export$b8813cd5d7824ce7, (v) => $0da61c9ca9006f54$export$b8813cd5d7824ce7 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-highlighted", () => $0da61c9ca9006f54$export$451c613d0772eb99, (v) => $0da61c9ca9006f54$export$451c613d0772eb99 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-open", () => $0da61c9ca9006f54$export$a9781837241c946d, (v) => $0da61c9ca9006f54$export$a9781837241c946d = v);
$parcel$export($0da61c9ca9006f54$exports, "is-active", () => $0da61c9ca9006f54$export$20fd0f7cd4e6112f, (v) => $0da61c9ca9006f54$export$20fd0f7cd4e6112f = v);
$parcel$export($0da61c9ca9006f54$exports, "is-disabled", () => $0da61c9ca9006f54$export$d35bc1e505d1ebbf, (v) => $0da61c9ca9006f54$export$d35bc1e505d1ebbf = v);
var $0da61c9ca9006f54$export$d959f30786125b;
var $0da61c9ca9006f54$export$fae6af6decd50ac5;
var $0da61c9ca9006f54$export$c20ea4b35020fbdd;
var $0da61c9ca9006f54$export$8e15a726e4f7e62d;
var $0da61c9ca9006f54$export$45faad328e6c532b;
var $0da61c9ca9006f54$export$1e0fb04f31d3c22a;
var $0da61c9ca9006f54$export$d374b04f30360026;
var $0da61c9ca9006f54$export$1aa6419c5c650567;
var $0da61c9ca9006f54$export$f431001e1bb54633;
var $0da61c9ca9006f54$export$465092164a8e1d98;
var $0da61c9ca9006f54$export$e892026f534efed8;
var $0da61c9ca9006f54$export$ee5f52784f57f9c8;
var $0da61c9ca9006f54$export$fbd22ba224473193;
var $0da61c9ca9006f54$export$926a1bb74ed65667;
var $0da61c9ca9006f54$export$cbbae63ef9e44c7a;
var $0da61c9ca9006f54$export$36f1275051e39ead;
var $0da61c9ca9006f54$export$4f9817a7dff6ba0f;
var $0da61c9ca9006f54$export$f39a09f249340e2a;
var $0da61c9ca9006f54$export$e7dc768d35940237;
var $0da61c9ca9006f54$export$b8813cd5d7824ce7;
var $0da61c9ca9006f54$export$451c613d0772eb99;
var $0da61c9ca9006f54$export$a9781837241c946d;
var $0da61c9ca9006f54$export$20fd0f7cd4e6112f;
var $0da61c9ca9006f54$export$d35bc1e505d1ebbf;
$0da61c9ca9006f54$export$d959f30786125b = "_spectrum-Menu-popover_7ea47c";
$0da61c9ca9006f54$export$fae6af6decd50ac5 = "_spectrum-Menu_7ea47c";
$0da61c9ca9006f54$export$c20ea4b35020fbdd = "_spectrum-Menu-sectionHeading_7ea47c";
$0da61c9ca9006f54$export$8e15a726e4f7e62d = "_spectrum-Menu-checkmark_7ea47c";
$0da61c9ca9006f54$export$45faad328e6c532b = "_spectrum-Menu-item_7ea47c";
$0da61c9ca9006f54$export$1e0fb04f31d3c22a = "_is-selected_7ea47c";
$0da61c9ca9006f54$export$d374b04f30360026 = "_spectrum-Icon_7ea47c";
$0da61c9ca9006f54$export$1aa6419c5c650567 = "_spectrum-Menu-itemLabel_7ea47c";
$0da61c9ca9006f54$export$f431001e1bb54633 = "_spectrum-Menu-itemIcon_7ea47c";
$0da61c9ca9006f54$export$465092164a8e1d98 = "_spectrum-Menu-itemLabel--wrapping_7ea47c";
$0da61c9ca9006f54$export$e892026f534efed8 = "_spectrum-Menu-divider_7ea47c";
$0da61c9ca9006f54$export$ee5f52784f57f9c8 = "_spectrum-Menu-itemGrid_7ea47c";
$0da61c9ca9006f54$export$fbd22ba224473193 = "_is-selectable_7ea47c";
$0da61c9ca9006f54$export$926a1bb74ed65667 = "_spectrum-Menu-end_7ea47c";
$0da61c9ca9006f54$export$cbbae63ef9e44c7a = "_spectrum-Menu-icon_7ea47c";
$0da61c9ca9006f54$export$36f1275051e39ead = "_spectrum-Menu-description_7ea47c";
$0da61c9ca9006f54$export$4f9817a7dff6ba0f = "_spectrum-Menu-keyboard_7ea47c";
$0da61c9ca9006f54$export$f39a09f249340e2a = "_focus-ring_7ea47c";
$0da61c9ca9006f54$export$e7dc768d35940237 = "_is-focused_7ea47c";
$0da61c9ca9006f54$export$b8813cd5d7824ce7 = "_is-hovered_7ea47c";
$0da61c9ca9006f54$export$451c613d0772eb99 = "_is-highlighted_7ea47c";
$0da61c9ca9006f54$export$a9781837241c946d = "_is-open_7ea47c";
$0da61c9ca9006f54$export$20fd0f7cd4e6112f = "_is-active_7ea47c";
$0da61c9ca9006f54$export$d35bc1e505d1ebbf = "_is-disabled_7ea47c";





function $68c902085d5bdf5f$export$feb3b6b552c14a12(props) {
    let { item: item , shouldSelectOnPressUp: shouldSelectOnPressUp , shouldFocusOnHover: shouldFocusOnHover , shouldUseVirtualFocus: shouldUseVirtualFocus  } = props;
    let { rendered: rendered , key: key  } = item;
    let state = $77ZMV$useContext($cb06e804a140e5fc$export$7ff8f37d2d81a48d);
    let ref = $77ZMV$useRef();
    let { optionProps: optionProps , labelProps: labelProps , descriptionProps: descriptionProps , isSelected: isSelected , isDisabled: isDisabled , isFocused: isFocused  } = $77ZMV$useOption({
        'aria-label': item['aria-label'],
        key: key,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        shouldFocusOnHover: shouldFocusOnHover,
        isVirtualized: true,
        shouldUseVirtualFocus: shouldUseVirtualFocus
    }, state, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $77ZMV$useHover({
        ...props,
        isDisabled: isDisabled
    });
    let contents = typeof rendered === 'string' ? /*#__PURE__*/ $77ZMV$react.createElement($77ZMV$Text, null, rendered) : rendered;
    let isKeyboardModality = $77ZMV$isFocusVisible();
    return(/*#__PURE__*/ $77ZMV$react.createElement($77ZMV$FocusRing, {
        focusRingClass: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'focus-ring')
    }, /*#__PURE__*/ $77ZMV$react.createElement("div", {
        ...$77ZMV$mergeProps(optionProps, shouldFocusOnHover ? {
        } : hoverProps),
        ref: ref,
        className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-item', {
            // If using virtual focus, apply focused styles to the item when the user is interacting with keyboard modality
            'is-focused': shouldUseVirtualFocus && isFocused && isKeyboardModality,
            'is-disabled': isDisabled,
            'is-selected': isSelected,
            'is-selectable': state.selectionManager.selectionMode !== 'none',
            // When shouldFocusOnHover is false, apply hover styles both when hovered with the mouse.
            // Otherwise, apply hover styles when focused using non-keyboard modality.
            'is-hovered': isHovered && !shouldFocusOnHover || isFocused && !isKeyboardModality
        })
    }, /*#__PURE__*/ $77ZMV$react.createElement($77ZMV$Grid, {
        UNSAFE_className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-itemGrid')
    }, /*#__PURE__*/ $77ZMV$react.createElement($77ZMV$ClearSlots, null, /*#__PURE__*/ $77ZMV$react.createElement($77ZMV$SlotProvider, {
        slots: {
            text: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-itemLabel'],
                ...labelProps
            },
            icon: {
                size: 'S',
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-icon']
            },
            description: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-description'],
                ...descriptionProps
            }
        }
    }, contents, isSelected && /*#__PURE__*/ $77ZMV$react.createElement($77ZMV$spectrumiconsuiCheckmarkMedium, {
        slot: "checkmark",
        UNSAFE_className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-checkmark')
    })))))));
}










function $bba32ae11b71d047$export$dca12b0bb56e4fc(props) {
    let { children: children , reusableView: reusableView , header: header  } = props;
    let item = reusableView.content;
    let { headingProps: headingProps , groupProps: groupProps  } = $77ZMV$useListBoxSection({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let { separatorProps: separatorProps  } = $77ZMV$useSeparator({
        elementType: 'li'
    });
    let headerRef = $77ZMV$useRef();
    $77ZMV$useVirtualizerItem({
        reusableView: header,
        ref: headerRef
    });
    let { direction: direction  } = $77ZMV$useLocale();
    let state = $77ZMV$useContext($cb06e804a140e5fc$export$7ff8f37d2d81a48d);
    return(/*#__PURE__*/ $77ZMV$react.createElement($77ZMV$Fragment, null, /*#__PURE__*/ $77ZMV$react.createElement("div", {
        role: "presentation",
        ref: headerRef,
        style: $77ZMV$layoutInfoToStyle(header.layoutInfo, direction)
    }, item.key !== state.collection.getFirstKey() && /*#__PURE__*/ $77ZMV$react.createElement("div", {
        ...separatorProps,
        className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-divider')
    }), item.rendered && /*#__PURE__*/ $77ZMV$react.createElement("div", {
        ...headingProps,
        className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-sectionHeading')
    }, item.rendered)), /*#__PURE__*/ $77ZMV$react.createElement("div", {
        ...groupProps,
        style: $77ZMV$layoutInfoToStyle(reusableView.layoutInfo, direction),
        className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu')
    }, children)));
}










function $6f1e4fc6e0371b23$export$25768ea656ae32a7(state) {
    let { scale: scale  } = $77ZMV$useProvider();
    let collator = $77ZMV$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let layout = $77ZMV$useMemo(()=>new $77ZMV$ListLayout({
            estimatedRowHeight: scale === 'large' ? 48 : 32,
            estimatedHeadingHeight: scale === 'large' ? 33 : 26,
            padding: scale === 'large' ? 5 : 4,
            loaderHeight: 40,
            placeholderHeight: scale === 'large' ? 48 : 32,
            collator: collator
        })
    , [
        collator,
        scale
    ]);
    layout.collection = state.collection;
    layout.disabledKeys = state.disabledKeys;
    return layout;
}
/** @private */ function $6f1e4fc6e0371b23$var$ListBoxBase(props, ref) {
    let { layout: layout , state: state , shouldSelectOnPressUp: shouldSelectOnPressUp , focusOnPointerEnter: focusOnPointerEnter , shouldUseVirtualFocus: shouldUseVirtualFocus , domProps: domProps = {
    } , transitionDuration: transitionDuration = 0 , onScroll: onScroll  } = props;
    let { listBoxProps: listBoxProps  } = $77ZMV$useListBox({
        ...props,
        keyboardDelegate: layout,
        isVirtualized: true
    }, state, ref);
    let { styleProps: styleProps  } = $77ZMV$useStyleProps(props);
    let formatMessage = $77ZMV$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($4779440fb41075bc$exports)));
    // Sync loading state into the layout.
    layout.isLoading = props.isLoading;
    let renderWrapper = (parent, reusableView, children, renderChildren)=>{
        if (reusableView.viewType === 'section') return(/*#__PURE__*/ $77ZMV$react.createElement($bba32ae11b71d047$export$dca12b0bb56e4fc, {
            key: reusableView.key,
            reusableView: reusableView,
            header: children.find((c)=>c.viewType === 'header'
            )
        }, renderChildren(children.filter((c)=>c.viewType === 'item'
        ))));
        return(/*#__PURE__*/ $77ZMV$react.createElement($77ZMV$VirtualizerItem, {
            key: reusableView.key,
            reusableView: reusableView,
            parent: parent
        }));
    };
    return(/*#__PURE__*/ $77ZMV$react.createElement($cb06e804a140e5fc$export$7ff8f37d2d81a48d.Provider, {
        value: state
    }, /*#__PURE__*/ $77ZMV$react.createElement($77ZMV$Virtualizer, {
        ...styleProps,
        ...$77ZMV$mergeProps(listBoxProps, domProps),
        ref: ref,
        focusedKey: state.selectionManager.focusedKey,
        sizeToFit: "height",
        scrollDirection: "vertical",
        className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu', styleProps.className),
        layout: layout,
        collection: state.collection,
        renderWrapper: renderWrapper,
        transitionDuration: transitionDuration,
        isLoading: props.isLoading,
        onLoadMore: props.onLoadMore,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        onScroll: onScroll
    }, (type, item)=>{
        if (type === 'item') return(/*#__PURE__*/ $77ZMV$react.createElement($68c902085d5bdf5f$export$feb3b6b552c14a12, {
            item: item,
            shouldSelectOnPressUp: shouldSelectOnPressUp,
            shouldFocusOnHover: focusOnPointerEnter,
            shouldUseVirtualFocus: shouldUseVirtualFocus
        }));
        else if (type === 'loader') return(// aria-selected isn't needed here since this option is not selectable.
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        /*#__PURE__*/ $77ZMV$react.createElement("div", {
            role: "option",
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }
        }, /*#__PURE__*/ $77ZMV$react.createElement($77ZMV$ProgressCircle, {
            isIndeterminate: true,
            size: "S",
            "aria-label": state.collection.size > 0 ? formatMessage('loadingMore') : formatMessage('loading'),
            UNSAFE_className: $77ZMV$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Dropdown-progressCircle')
        })));
        else if (type === 'placeholder') {
            let emptyState = props.renderEmptyState ? props.renderEmptyState() : null;
            if (emptyState == null) return null;
            return(/*#__PURE__*/ $77ZMV$react.createElement("div", {
                // aria-selected isn't needed here since this option is not selectable.
                // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                role: "option"
            }, emptyState));
        }
    })));
}
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const $6f1e4fc6e0371b23$export$1afdcf349979fb7e = /*#__PURE__*/ $77ZMV$react.forwardRef($6f1e4fc6e0371b23$var$ListBoxBase);





function $06263863a6972bae$var$ListBox(props, ref) {
    let state = $77ZMV$useListState(props);
    let layout = $6f1e4fc6e0371b23$export$25768ea656ae32a7(state);
    let domRef = $77ZMV$useDOMRef(ref);
    return(/*#__PURE__*/ $77ZMV$react.createElement($6f1e4fc6e0371b23$export$1afdcf349979fb7e, {
        ...props,
        ref: domRef,
        state: state,
        layout: layout
    }));
}
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
/**
 * A list of options that can allow selection of one or more.
 */ const $06263863a6972bae$export$41f133550aa26f48 = /*#__PURE__*/ $77ZMV$react.forwardRef($06263863a6972bae$var$ListBox);






export {$3c37b06c0a1ebc55$re_export$Item as Item, $3c37b06c0a1ebc55$re_export$Section as Section, $06263863a6972bae$export$41f133550aa26f48 as ListBox, $6f1e4fc6e0371b23$export$25768ea656ae32a7 as useListBoxLayout, $6f1e4fc6e0371b23$export$1afdcf349979fb7e as ListBoxBase};
//# sourceMappingURL=module.js.map
