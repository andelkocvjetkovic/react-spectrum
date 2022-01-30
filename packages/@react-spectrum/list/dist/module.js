import "./main.css";
import {Item as $1b608861d492f426$re_export$Item} from "@react-stately/collections";
import {useDOMRef as $hXTE3$useDOMRef, useStyleProps as $hXTE3$useStyleProps, classNames as $hXTE3$classNames, SlotProvider as $hXTE3$SlotProvider, ClearSlots as $hXTE3$ClearSlots} from "@react-spectrum/utils";
import {GridCollection as $hXTE3$GridCollection, useGridState as $hXTE3$useGridState} from "@react-stately/grid";
import {GridKeyboardDelegate as $hXTE3$GridKeyboardDelegate, useGrid as $hXTE3$useGrid, useGridRow as $hXTE3$useGridRow, useGridCell as $hXTE3$useGridCell, useGridSelectionCheckbox as $hXTE3$useGridSelectionCheckbox} from "@react-aria/grid";
import {ListLayout as $hXTE3$ListLayout} from "@react-stately/layout";
import {useListState as $hXTE3$useListState} from "@react-stately/list";
import {ProgressCircle as $hXTE3$ProgressCircle} from "@react-spectrum/progress";
import $hXTE3$react, {useMemo as $hXTE3$useMemo, useContext as $hXTE3$useContext, useRef as $hXTE3$useRef} from "react";
import {useCollator as $hXTE3$useCollator, useMessageFormatter as $hXTE3$useMessageFormatter, useLocale as $hXTE3$useLocale} from "@react-aria/i18n";
import {useProvider as $hXTE3$useProvider} from "@react-spectrum/provider";
import {Virtualizer as $hXTE3$Virtualizer} from "@react-aria/virtualizer";
import {Checkbox as $hXTE3$Checkbox} from "@react-spectrum/checkbox";
import $hXTE3$spectrumiconsuiChevronLeftMedium from "@spectrum-icons/ui/ChevronLeftMedium";
import $hXTE3$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {Content as $hXTE3$Content} from "@react-spectrum/view";
import {Grid as $hXTE3$Grid} from "@react-spectrum/layout";
import {mergeProps as $hXTE3$mergeProps} from "@react-aria/utils";
import {useFocusRing as $hXTE3$useFocusRing} from "@react-aria/focus";
import {useHover as $hXTE3$useHover, usePress as $hXTE3$usePress} from "@react-aria/interactions";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



var $425757dffd6a785f$exports = {};
var $e19b57873bd6db2c$exports = {};
$e19b57873bd6db2c$exports = JSON.parse("{\"loading\":\"جارٍ التحميل...\",\"loadingMore\":\"جارٍ تحميل المزيد...\"}");


var $d8d4c70120ac000d$exports = {};
$d8d4c70120ac000d$exports = JSON.parse("{\"loading\":\"Зареждане...\",\"loadingMore\":\"Зареждане на още...\"}");


var $8e59d167c3090cc7$exports = {};
$8e59d167c3090cc7$exports = JSON.parse("{\"loading\":\"Načítání...\",\"loadingMore\":\"Načítání dalších...\"}");


var $3c76b5c3fcbd8a85$exports = {};
$3c76b5c3fcbd8a85$exports = JSON.parse("{\"loading\":\"Indlæser...\",\"loadingMore\":\"Indlæser flere...\"}");


var $869c8bcc25718ffc$exports = {};
$869c8bcc25718ffc$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Mehr laden ...\"}");


var $428ab2864e265d3e$exports = {};
$428ab2864e265d3e$exports = JSON.parse("{\"loading\":\"Φόρτωση...\",\"loadingMore\":\"Φόρτωση περισσότερων...\"}");


var $b761f3ada1f0f74a$exports = {};
$b761f3ada1f0f74a$exports = JSON.parse("{\"loading\":\"Loading…\",\"loadingMore\":\"Loading more…\"}");


var $ecc54ba10092e62b$exports = {};
$ecc54ba10092e62b$exports = JSON.parse("{\"loading\":\"Cargando…\",\"loadingMore\":\"Cargando más…\"}");


var $c58a0c0ae0c06543$exports = {};
$c58a0c0ae0c06543$exports = JSON.parse("{\"loading\":\"Laadimine...\",\"loadingMore\":\"Laadi rohkem...\"}");


var $6234fc228aec8fdf$exports = {};
$6234fc228aec8fdf$exports = JSON.parse("{\"loading\":\"Ladataan…\",\"loadingMore\":\"Ladataan lisää…\"}");


var $8f67600d92ab8184$exports = {};
$8f67600d92ab8184$exports = JSON.parse("{\"loading\":\"Chargement...\",\"loadingMore\":\"Chargement supplémentaire...\"}");


var $1178288e93101cb2$exports = {};
$1178288e93101cb2$exports = JSON.parse("{\"loading\":\"טוען...\",\"loadingMore\":\"טוען עוד...\"}");


var $176403cb1d932e8d$exports = {};
$176403cb1d932e8d$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $07452506b4baba6f$exports = {};
$07452506b4baba6f$exports = JSON.parse("{\"loading\":\"Betöltés folyamatban…\",\"loadingMore\":\"Továbbiak betöltése folyamatban…\"}");


var $eb3484bbc32e9f21$exports = {};
$eb3484bbc32e9f21$exports = JSON.parse("{\"loading\":\"Caricamento...\",\"loadingMore\":\"Caricamento altri...\"}");


var $97ea7a6a78ce3107$exports = {};
$97ea7a6a78ce3107$exports = JSON.parse("{\"loading\":\"読み込み中...\",\"loadingMore\":\"さらに読み込み中...\"}");


var $f040fc2243811e42$exports = {};
$f040fc2243811e42$exports = JSON.parse("{\"loading\":\"로드 중…\",\"loadingMore\":\"추가 로드 중…\"}");


var $b3778af2c10598ee$exports = {};
$b3778af2c10598ee$exports = JSON.parse("{\"loading\":\"Įkeliama...\",\"loadingMore\":\"Įkeliama daugiau...\"}");


var $ec1ca33c369068d3$exports = {};
$ec1ca33c369068d3$exports = JSON.parse("{\"loading\":\"Notiek ielāde...\",\"loadingMore\":\"Tiek ielādēts vēl...\"}");


var $a74a9cd89e1b842b$exports = {};
$a74a9cd89e1b842b$exports = JSON.parse("{\"loading\":\"Laster inn ...\",\"loadingMore\":\"Laster inn flere ...\"}");


var $03a883da7299aa12$exports = {};
$03a883da7299aa12$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Meer laden...\"}");


var $77e57383db6392ed$exports = {};
$77e57383db6392ed$exports = JSON.parse("{\"loading\":\"Ładowanie...\",\"loadingMore\":\"Wczytywanie większej liczby...\"}");


var $3f853106528e2b92$exports = {};
$3f853106528e2b92$exports = JSON.parse("{\"loading\":\"Carregando...\",\"loadingMore\":\"Carregando mais...\"}");


var $ce00449cc30d25cc$exports = {};
$ce00449cc30d25cc$exports = JSON.parse("{\"loading\":\"A carregar...\",\"loadingMore\":\"A carregar mais...\"}");


var $cf15810ac64058be$exports = {};
$cf15810ac64058be$exports = JSON.parse("{\"loading\":\"Se încarcă...\",\"loadingMore\":\"Se încarcă mai multe...\"}");


var $37e06c8458c49346$exports = {};
$37e06c8458c49346$exports = JSON.parse("{\"loading\":\"Загрузка...\",\"loadingMore\":\"Дополнительная загрузка...\"}");


var $5496cb5c832de880$exports = {};
$5496cb5c832de880$exports = JSON.parse("{\"loading\":\"Načítava sa...\",\"loadingMore\":\"Načítava sa viac...\"}");


var $27fa09324e070713$exports = {};
$27fa09324e070713$exports = JSON.parse("{\"loading\":\"Nalaganje ...\",\"loadingMore\":\"Nalaganje več vsebine ...\"}");


var $7b57536f512b5e27$exports = {};
$7b57536f512b5e27$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $8044e66371ab324b$exports = {};
$8044e66371ab324b$exports = JSON.parse("{\"loading\":\"Läser in...\",\"loadingMore\":\"Läser in mer...\"}");


var $ac24e006d8a8299f$exports = {};
$ac24e006d8a8299f$exports = JSON.parse("{\"loading\":\"Yükleniyor...\",\"loadingMore\":\"Daha fazla yükleniyor...\"}");


var $2c95c5c2c1c8fd08$exports = {};
$2c95c5c2c1c8fd08$exports = JSON.parse("{\"loading\":\"Завантаження…\",\"loadingMore\":\"Завантаження інших об’єктів...\"}");


var $6cf9eff1dec11065$exports = {};
$6cf9eff1dec11065$exports = JSON.parse("{\"loading\":\"正在加载...\",\"loadingMore\":\"正在加载更多...\"}");


var $6c920ad96192de4c$exports = {};
$6c920ad96192de4c$exports = JSON.parse("{\"loading\":\"載入中…\",\"loadingMore\":\"正在載入更多…\"}");


$425757dffd6a785f$exports = {
    "ar-AE": $e19b57873bd6db2c$exports,
    "bg-BG": $d8d4c70120ac000d$exports,
    "cs-CZ": $8e59d167c3090cc7$exports,
    "da-DK": $3c76b5c3fcbd8a85$exports,
    "de-DE": $869c8bcc25718ffc$exports,
    "el-GR": $428ab2864e265d3e$exports,
    "en-US": $b761f3ada1f0f74a$exports,
    "es-ES": $ecc54ba10092e62b$exports,
    "et-EE": $c58a0c0ae0c06543$exports,
    "fi-FI": $6234fc228aec8fdf$exports,
    "fr-FR": $8f67600d92ab8184$exports,
    "he-IL": $1178288e93101cb2$exports,
    "hr-HR": $176403cb1d932e8d$exports,
    "hu-HU": $07452506b4baba6f$exports,
    "it-IT": $eb3484bbc32e9f21$exports,
    "ja-JP": $97ea7a6a78ce3107$exports,
    "ko-KR": $f040fc2243811e42$exports,
    "lt-LT": $b3778af2c10598ee$exports,
    "lv-LV": $ec1ca33c369068d3$exports,
    "nb-NO": $a74a9cd89e1b842b$exports,
    "nl-NL": $03a883da7299aa12$exports,
    "pl-PL": $77e57383db6392ed$exports,
    "pt-BR": $3f853106528e2b92$exports,
    "pt-PT": $ce00449cc30d25cc$exports,
    "ro-RO": $cf15810ac64058be$exports,
    "ru-RU": $37e06c8458c49346$exports,
    "sk-SK": $5496cb5c832de880$exports,
    "sl-SI": $27fa09324e070713$exports,
    "sr-SP": $7b57536f512b5e27$exports,
    "sv-SE": $8044e66371ab324b$exports,
    "tr-TR": $ac24e006d8a8299f$exports,
    "uk-UA": $2c95c5c2c1c8fd08$exports,
    "zh-CN": $6cf9eff1dec11065$exports,
    "zh-TW": $6c920ad96192de4c$exports
};




var $c5ca14163236de6f$exports = {};

$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListView", () => $c5ca14163236de6f$export$4ad4709e9aee8e02, (v) => $c5ca14163236de6f$export$4ad4709e9aee8e02 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListView--quiet", () => $c5ca14163236de6f$export$b01cb9680b0b8d22, (v) => $c5ca14163236de6f$export$b01cb9680b0b8d22 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem", () => $c5ca14163236de6f$export$ce8c93b50eec2d4f, (v) => $c5ca14163236de6f$export$ce8c93b50eec2d4f = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListView--emphasized", () => $c5ca14163236de6f$export$eb0d5352b2a55473, (v) => $c5ca14163236de6f$export$eb0d5352b2a55473 = v);
$parcel$export($c5ca14163236de6f$exports, "is-selected", () => $c5ca14163236de6f$export$1e0fb04f31d3c22a, (v) => $c5ca14163236de6f$export$1e0fb04f31d3c22a = v);
$parcel$export($c5ca14163236de6f$exports, "is-hovered", () => $c5ca14163236de6f$export$b8813cd5d7824ce7, (v) => $c5ca14163236de6f$export$b8813cd5d7824ce7 = v);
$parcel$export($c5ca14163236de6f$exports, "is-active", () => $c5ca14163236de6f$export$20fd0f7cd4e6112f, (v) => $c5ca14163236de6f$export$20fd0f7cd4e6112f = v);
$parcel$export($c5ca14163236de6f$exports, "is-previous-selected", () => $c5ca14163236de6f$export$714358c802c073a3, (v) => $c5ca14163236de6f$export$714358c802c073a3 = v);
$parcel$export($c5ca14163236de6f$exports, "is-focused", () => $c5ca14163236de6f$export$e7dc768d35940237, (v) => $c5ca14163236de6f$export$e7dc768d35940237 = v);
$parcel$export($c5ca14163236de6f$exports, "focus-ring", () => $c5ca14163236de6f$export$f39a09f249340e2a, (v) => $c5ca14163236de6f$export$f39a09f249340e2a = v);
$parcel$export($c5ca14163236de6f$exports, "has-checkbox", () => $c5ca14163236de6f$export$27f4d14f7fc5b94, (v) => $c5ca14163236de6f$export$27f4d14f7fc5b94 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-grid", () => $c5ca14163236de6f$export$aaaf83100348d389, (v) => $c5ca14163236de6f$export$aaaf83100348d389 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-checkbox", () => $c5ca14163236de6f$export$f979f76ca45242f2, (v) => $c5ca14163236de6f$export$f979f76ca45242f2 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-icon", () => $c5ca14163236de6f$export$2b56ca744bd31ebd, (v) => $c5ca14163236de6f$export$2b56ca744bd31ebd = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-image", () => $c5ca14163236de6f$export$1260770e51d5a8c4, (v) => $c5ca14163236de6f$export$1260770e51d5a8c4 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-content", () => $c5ca14163236de6f$export$dc2b0b08d47555, (v) => $c5ca14163236de6f$export$dc2b0b08d47555 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-description", () => $c5ca14163236de6f$export$5d2adfeb248e654a, (v) => $c5ca14163236de6f$export$5d2adfeb248e654a = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-actions", () => $c5ca14163236de6f$export$26480389595d4515, (v) => $c5ca14163236de6f$export$26480389595d4515 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-actionmenu", () => $c5ca14163236de6f$export$58dfda3903289699, (v) => $c5ca14163236de6f$export$58dfda3903289699 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListViewItem-parentIndicator", () => $c5ca14163236de6f$export$39b42a8a24290c17, (v) => $c5ca14163236de6f$export$39b42a8a24290c17 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListView--compact", () => $c5ca14163236de6f$export$1f55b27adf96a61e, (v) => $c5ca14163236de6f$export$1f55b27adf96a61e = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListView--spacious", () => $c5ca14163236de6f$export$cbd30c7809acdd81, (v) => $c5ca14163236de6f$export$cbd30c7809acdd81 = v);
$parcel$export($c5ca14163236de6f$exports, "react-spectrum-ListView-centeredWrapper", () => $c5ca14163236de6f$export$1b66ee5cd8394caf, (v) => $c5ca14163236de6f$export$1b66ee5cd8394caf = v);
var $c5ca14163236de6f$export$4ad4709e9aee8e02;
var $c5ca14163236de6f$export$b01cb9680b0b8d22;
var $c5ca14163236de6f$export$ce8c93b50eec2d4f;
var $c5ca14163236de6f$export$eb0d5352b2a55473;
var $c5ca14163236de6f$export$1e0fb04f31d3c22a;
var $c5ca14163236de6f$export$b8813cd5d7824ce7;
var $c5ca14163236de6f$export$20fd0f7cd4e6112f;
var $c5ca14163236de6f$export$714358c802c073a3;
var $c5ca14163236de6f$export$e7dc768d35940237;
var $c5ca14163236de6f$export$f39a09f249340e2a;
var $c5ca14163236de6f$export$27f4d14f7fc5b94;
var $c5ca14163236de6f$export$aaaf83100348d389;
var $c5ca14163236de6f$export$f979f76ca45242f2;
var $c5ca14163236de6f$export$2b56ca744bd31ebd;
var $c5ca14163236de6f$export$1260770e51d5a8c4;
var $c5ca14163236de6f$export$dc2b0b08d47555;
var $c5ca14163236de6f$export$5d2adfeb248e654a;
var $c5ca14163236de6f$export$26480389595d4515;
var $c5ca14163236de6f$export$58dfda3903289699;
var $c5ca14163236de6f$export$39b42a8a24290c17;
var $c5ca14163236de6f$export$1f55b27adf96a61e;
var $c5ca14163236de6f$export$cbd30c7809acdd81;
var $c5ca14163236de6f$export$1b66ee5cd8394caf;
$c5ca14163236de6f$export$4ad4709e9aee8e02 = "_react-spectrum-ListView_d68562";
$c5ca14163236de6f$export$b01cb9680b0b8d22 = "_react-spectrum-ListView--quiet_d68562";
$c5ca14163236de6f$export$ce8c93b50eec2d4f = "_react-spectrum-ListViewItem_d68562";
$c5ca14163236de6f$export$eb0d5352b2a55473 = "_react-spectrum-ListView--emphasized_d68562";
$c5ca14163236de6f$export$1e0fb04f31d3c22a = "_is-selected_d68562";
$c5ca14163236de6f$export$b8813cd5d7824ce7 = "_is-hovered_d68562";
$c5ca14163236de6f$export$20fd0f7cd4e6112f = "_is-active_d68562";
$c5ca14163236de6f$export$714358c802c073a3 = "_is-previous-selected_d68562";
$c5ca14163236de6f$export$e7dc768d35940237 = "_is-focused_d68562";
$c5ca14163236de6f$export$f39a09f249340e2a = "_focus-ring_d68562";
$c5ca14163236de6f$export$27f4d14f7fc5b94 = "_has-checkbox_d68562";
$c5ca14163236de6f$export$aaaf83100348d389 = "_react-spectrum-ListViewItem-grid_d68562";
$c5ca14163236de6f$export$f979f76ca45242f2 = "_react-spectrum-ListViewItem-checkbox_d68562";
$c5ca14163236de6f$export$2b56ca744bd31ebd = "_react-spectrum-ListViewItem-icon_d68562";
$c5ca14163236de6f$export$1260770e51d5a8c4 = "_react-spectrum-ListViewItem-image_d68562";
$c5ca14163236de6f$export$dc2b0b08d47555 = "_react-spectrum-ListViewItem-content_d68562";
$c5ca14163236de6f$export$5d2adfeb248e654a = "_react-spectrum-ListViewItem-description_d68562";
$c5ca14163236de6f$export$26480389595d4515 = "_react-spectrum-ListViewItem-actions_d68562";
$c5ca14163236de6f$export$58dfda3903289699 = "_react-spectrum-ListViewItem-actionmenu_d68562";
$c5ca14163236de6f$export$39b42a8a24290c17 = "_react-spectrum-ListViewItem-parentIndicator_d68562";
$c5ca14163236de6f$export$1f55b27adf96a61e = "_react-spectrum-ListView--compact_d68562";
$c5ca14163236de6f$export$cbd30c7809acdd81 = "_react-spectrum-ListView--spacious_d68562";
$c5ca14163236de6f$export$1b66ee5cd8394caf = "_react-spectrum-ListView-centeredWrapper_d68562";
















function $4a93ba5290811a53$export$c6bde0c04b033c0e(props) {
    let { item: item , onAction: onAction , isEmphasized: isEmphasized  } = props;
    let cellNode = [
        ...item.childNodes
    ][0];
    let { state: state  } = $hXTE3$useContext($1a1011f6f560fb64$export$870039b0abfe3de0);
    let { direction: direction  } = $hXTE3$useLocale();
    let rowRef = $hXTE3$useRef();
    let cellRef = $hXTE3$useRef();
    let { isFocusVisible: isFocusVisibleWithin , focusProps: focusWithinProps  } = $hXTE3$useFocusRing({
        within: true
    });
    let { isFocusVisible: isFocusVisible , focusProps: focusProps  } = $hXTE3$useFocusRing();
    let allowsInteraction = state.selectionManager.selectionMode !== 'none' || onAction;
    let isDisabled = !allowsInteraction || state.disabledKeys.has(item.key);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $hXTE3$useHover({
        isDisabled: isDisabled
    });
    let { pressProps: pressProps , isPressed: isPressed  } = $hXTE3$usePress({
        isDisabled: isDisabled
    });
    let { rowProps: rowProps  } = $hXTE3$useGridRow({
        node: item,
        isVirtualized: true,
        onAction: onAction ? ()=>onAction(item.key)
         : undefined
    }, state, rowRef);
    let { gridCellProps: gridCellProps  } = $hXTE3$useGridCell({
        node: cellNode,
        focusMode: 'cell'
    }, state, cellRef);
    const mergedProps = $hXTE3$mergeProps(gridCellProps, hoverProps, focusWithinProps, focusProps);
    let { checkboxProps: checkboxProps  } = $hXTE3$useGridSelectionCheckbox({
        ...props,
        key: item.key
    }, state);
    let chevron = null;
    if (item.props.hasChildItems) chevron = direction === 'ltr' ? /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$spectrumiconsuiChevronRightMedium, {
        "aria-hidden": "true",
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-parentIndicator']
    }) : /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$spectrumiconsuiChevronLeftMedium, {
        "aria-hidden": "true",
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-parentIndicator']
    });
    let showCheckbox = state.selectionManager.selectionMode !== 'none' && state.selectionManager.selectionBehavior === 'toggle';
    let isSelected = state.selectionManager.isSelected(item.key);
    return(/*#__PURE__*/ $hXTE3$react.createElement("div", {
        ...$hXTE3$mergeProps(rowProps, pressProps),
        ref: rowRef
    }, /*#__PURE__*/ $hXTE3$react.createElement("div", {
        className: $hXTE3$classNames((/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports)), 'react-spectrum-ListViewItem', {
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
    }, /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$Grid, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-grid']
    }, showCheckbox && /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$Checkbox, {
        UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-checkbox'],
        ...checkboxProps,
        isEmphasized: isEmphasized
    }), /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$SlotProvider, {
        slots: {
            content: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-content']
            },
            text: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-content']
            },
            description: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-description']
            },
            icon: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-icon'],
                size: 'M'
            },
            image: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-image']
            },
            link: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-content'],
                isQuiet: true
            },
            actionButton: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-actions'],
                isQuiet: true
            },
            actionGroup: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-actions'],
                isQuiet: true,
                density: 'compact'
            },
            actionMenu: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports))['react-spectrum-ListViewItem-actionmenu'],
                isQuiet: true
            }
        }
    }, typeof item.rendered === 'string' ? /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$Content, null, item.rendered) : item.rendered, /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$ClearSlots, null, chevron))))));
}







const $1a1011f6f560fb64$export$870039b0abfe3de0 = /*#__PURE__*/ $hXTE3$react.createContext(null);
const $1a1011f6f560fb64$var$ROW_HEIGHTS = {
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
function $1a1011f6f560fb64$export$bea90da51ec70dea(state, density) {
    let { scale: scale  } = $hXTE3$useProvider();
    let collator = $hXTE3$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let layout = $hXTE3$useMemo(()=>new $hXTE3$ListLayout({
            estimatedRowHeight: $1a1011f6f560fb64$var$ROW_HEIGHTS[density][scale],
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
function $1a1011f6f560fb64$var$ListView(props, ref) {
    let { density: density = 'regular' , loadingState: loadingState , isQuiet: isQuiet , transitionDuration: transitionDuration = 0 , onAction: onAction  } = props;
    let domRef = $hXTE3$useDOMRef(ref);
    let { collection: collection  } = $hXTE3$useListState(props);
    let formatMessage = $hXTE3$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($425757dffd6a785f$exports)));
    let { styleProps: styleProps  } = $hXTE3$useStyleProps(props);
    let { direction: direction  } = $hXTE3$useLocale();
    let collator = $hXTE3$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let gridCollection = $hXTE3$useMemo(()=>new $hXTE3$GridCollection({
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
    let state = $hXTE3$useGridState({
        ...props,
        collection: gridCollection,
        focusMode: 'cell',
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    let layout = $1a1011f6f560fb64$export$bea90da51ec70dea(state, props.density || 'regular');
    let keyboardDelegate = $hXTE3$useMemo(()=>new $hXTE3$GridKeyboardDelegate({
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
    let { gridProps: gridProps  } = $hXTE3$useGrid({
        ...props,
        isVirtualized: true,
        keyboardDelegate: keyboardDelegate
    }, state, domRef);
    // Sync loading state into the layout.
    layout.isLoading = loadingState === 'loading';
    let focusedKey = state.selectionManager.focusedKey;
    let focusedItem = gridCollection.getItem(state.selectionManager.focusedKey);
    if (focusedItem?.parentKey != null) focusedKey = focusedItem.parentKey;
    return(/*#__PURE__*/ $hXTE3$react.createElement($1a1011f6f560fb64$export$870039b0abfe3de0.Provider, {
        value: {
            state: state,
            keyboardDelegate: keyboardDelegate
        }
    }, /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$Virtualizer, {
        ...gridProps,
        ...styleProps,
        ref: domRef,
        focusedKey: focusedKey,
        scrollDirection: "vertical",
        className: $hXTE3$classNames((/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports)), 'react-spectrum-ListView', `react-spectrum-ListView--${density}`, 'react-spectrum-ListView--emphasized', {
            'react-spectrum-ListView--quiet': isQuiet
        }, styleProps.className),
        layout: layout,
        collection: gridCollection,
        transitionDuration: transitionDuration
    }, (type, item)=>{
        if (type === 'item') return(/*#__PURE__*/ $hXTE3$react.createElement($4a93ba5290811a53$export$c6bde0c04b033c0e, {
            item: item,
            onAction: onAction,
            isEmphasized: true
        }));
        else if (type === 'loader') return(/*#__PURE__*/ $hXTE3$react.createElement($1a1011f6f560fb64$var$CenteredWrapper, null, /*#__PURE__*/ $hXTE3$react.createElement($hXTE3$ProgressCircle, {
            isIndeterminate: true,
            "aria-label": state.collection.size > 0 ? formatMessage('loadingMore') : formatMessage('loading')
        })));
        else if (type === 'placeholder') {
            let emptyState = props.renderEmptyState ? props.renderEmptyState() : null;
            if (emptyState == null) return null;
            return(/*#__PURE__*/ $hXTE3$react.createElement($1a1011f6f560fb64$var$CenteredWrapper, null, emptyState));
        }
    })));
}
function $1a1011f6f560fb64$var$CenteredWrapper({ children: children  }) {
    let { state: state  } = $hXTE3$useContext($1a1011f6f560fb64$export$870039b0abfe3de0);
    return(/*#__PURE__*/ $hXTE3$react.createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.size + 1,
        className: $hXTE3$classNames((/*@__PURE__*/$parcel$interopDefault($c5ca14163236de6f$exports)), 'react-spectrum-ListView-centeredWrapper')
    }, /*#__PURE__*/ $hXTE3$react.createElement("div", {
        role: "gridcell"
    }, children)));
}
const $1a1011f6f560fb64$export$84d0dd190d551cd1 = /*#__PURE__*/ $hXTE3$react.forwardRef($1a1011f6f560fb64$var$ListView);





export {$1a1011f6f560fb64$export$84d0dd190d551cd1 as ListView, $1b608861d492f426$re_export$Item as Item};
//# sourceMappingURL=module.js.map
