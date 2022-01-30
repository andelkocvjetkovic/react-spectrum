import "./main.css";
import {Column as $gCg3G$Column, TableHeader as $205c88095226d41f$re_export$TableHeader, TableBody as $205c88095226d41f$re_export$TableBody, Section as $205c88095226d41f$re_export$Section, Row as $205c88095226d41f$re_export$Row, Cell as $205c88095226d41f$re_export$Cell, useTableState as $gCg3G$useTableState} from "@react-stately/table";
import $gCg3G$spectrumiconsuiArrowDownSmall from "@spectrum-icons/ui/ArrowDownSmall";
import {Checkbox as $gCg3G$Checkbox} from "@react-spectrum/checkbox";
import {useStyleProps as $gCg3G$useStyleProps, useDOMRef as $gCg3G$useDOMRef, classNames as $gCg3G$classNames} from "@react-spectrum/utils";
import {FocusRing as $gCg3G$FocusRing, useFocusRing as $gCg3G$useFocusRing} from "@react-aria/focus";
import {layoutInfoToStyle as $gCg3G$layoutInfoToStyle, VirtualizerItem as $gCg3G$VirtualizerItem, setScrollLeft as $gCg3G$setScrollLeft, useVirtualizer as $gCg3G$useVirtualizer, ScrollView as $gCg3G$ScrollView} from "@react-aria/virtualizer";
import {useLayoutEffect as $gCg3G$useLayoutEffect, mergeProps as $gCg3G$mergeProps} from "@react-aria/utils";
import {ProgressCircle as $gCg3G$ProgressCircle} from "@react-spectrum/progress";
import $gCg3G$react, {useContext as $gCg3G$useContext, useState as $gCg3G$useState, useMemo as $gCg3G$useMemo, useRef as $gCg3G$useRef, useCallback as $gCg3G$useCallback} from "react";
import {useVirtualizerState as $gCg3G$useVirtualizerState} from "@react-stately/virtualizer";
import {TableLayout as $gCg3G$TableLayout} from "@react-stately/layout";
import {TooltipTrigger as $gCg3G$TooltipTrigger, Tooltip as $gCg3G$Tooltip} from "@react-spectrum/tooltip";
import {useHover as $gCg3G$useHover, usePress as $gCg3G$usePress} from "@react-aria/interactions";
import {useMessageFormatter as $gCg3G$useMessageFormatter, useLocale as $gCg3G$useLocale} from "@react-aria/i18n";
import {useProviderProps as $gCg3G$useProviderProps, useProvider as $gCg3G$useProvider} from "@react-spectrum/provider";
import {useTable as $gCg3G$useTable, useTableRowGroup as $gCg3G$useTableRowGroup, useTableColumnHeader as $gCg3G$useTableColumnHeader, useTableSelectAllCheckbox as $gCg3G$useTableSelectAllCheckbox, useTableRow as $gCg3G$useTableRow, useTableHeaderRow as $gCg3G$useTableHeaderRow, useTableCell as $gCg3G$useTableCell, useTableSelectionCheckbox as $gCg3G$useTableSelectionCheckbox} from "@react-aria/table";
import {VisuallyHidden as $gCg3G$VisuallyHidden} from "@react-aria/visually-hidden";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $95cb46dca468eda3$exports = {};

$parcel$export($95cb46dca468eda3$exports, "TableView", () => $95cb46dca468eda3$export$b3c27e869d856b7);




var $90c9d1762ab2062e$exports = {};
var $83ba88602455d244$exports = {};
$83ba88602455d244$exports = JSON.parse("{\"loading\":\"جارٍ التحميل...\",\"loadingMore\":\"جارٍ تحميل المزيد...\"}");


var $5fe0d315cc5a7183$exports = {};
$5fe0d315cc5a7183$exports = JSON.parse("{\"loading\":\"Зареждане...\",\"loadingMore\":\"Зареждане на още...\"}");


var $e87b1e583c4cf368$exports = {};
$e87b1e583c4cf368$exports = JSON.parse("{\"loading\":\"Načítání...\",\"loadingMore\":\"Načítání dalších...\"}");


var $ae35d0c53ccc9975$exports = {};
$ae35d0c53ccc9975$exports = JSON.parse("{\"loading\":\"Indlæser ...\",\"loadingMore\":\"Indlæser flere ...\"}");


var $2fae94c2aa57f981$exports = {};
$2fae94c2aa57f981$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Mehr laden ...\"}");


var $5bfe961f5325a182$exports = {};
$5bfe961f5325a182$exports = JSON.parse("{\"loading\":\"Φόρτωση...\",\"loadingMore\":\"Φόρτωση περισσότερων...\"}");


var $ab4c0070667f518c$exports = {};
$ab4c0070667f518c$exports = JSON.parse("{\"loading\":\"Loading…\",\"loadingMore\":\"Loading more…\"}");


var $80e2e54ab7449672$exports = {};
$80e2e54ab7449672$exports = JSON.parse("{\"loading\":\"Cargando…\",\"loadingMore\":\"Cargando más…\"}");


var $8345b65fa608a917$exports = {};
$8345b65fa608a917$exports = JSON.parse("{\"loading\":\"Laadimine...\",\"loadingMore\":\"Laadi rohkem...\"}");


var $8559421ff678028e$exports = {};
$8559421ff678028e$exports = JSON.parse("{\"loading\":\"Ladataan…\",\"loadingMore\":\"Ladataan lisää…\"}");


var $7a1ebc5ef338a437$exports = {};
$7a1ebc5ef338a437$exports = JSON.parse("{\"loading\":\"Chargement...\",\"loadingMore\":\"Chargement supplémentaire...\"}");


var $1bc40825bd0b7718$exports = {};
$1bc40825bd0b7718$exports = JSON.parse("{\"loading\":\"טוען...\",\"loadingMore\":\"טוען עוד...\"}");


var $331a3b0b67416ae5$exports = {};
$331a3b0b67416ae5$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $58012a7770aac62c$exports = {};
$58012a7770aac62c$exports = JSON.parse("{\"loading\":\"Betöltés folyamatban…\",\"loadingMore\":\"Továbbiak betöltése folyamatban…\"}");


var $28acb1be6015d74f$exports = {};
$28acb1be6015d74f$exports = JSON.parse("{\"loading\":\"Caricamento...\",\"loadingMore\":\"Caricamento altri...\"}");


var $80e3f20426438faa$exports = {};
$80e3f20426438faa$exports = JSON.parse("{\"loading\":\"読み込み中...\",\"loadingMore\":\"さらに読み込み中...\"}");


var $00e6a58ccb25d5e3$exports = {};
$00e6a58ccb25d5e3$exports = JSON.parse("{\"loading\":\"로드 중\",\"loadingMore\":\"추가 로드 중\"}");


var $15b98ca5ea6ae78d$exports = {};
$15b98ca5ea6ae78d$exports = JSON.parse("{\"loading\":\"Įkeliama...\",\"loadingMore\":\"Įkeliama daugiau...\"}");


var $a8bfc82de5ff914b$exports = {};
$a8bfc82de5ff914b$exports = JSON.parse("{\"loading\":\"Notiek ielāde...\",\"loadingMore\":\"Tiek ielādēts vēl...\"}");


var $a8f9ea5c9defdc32$exports = {};
$a8f9ea5c9defdc32$exports = JSON.parse("{\"loading\":\"Laster inn ...\",\"loadingMore\":\"Laster inn flere ...\"}");


var $0802d703e66a0b2d$exports = {};
$0802d703e66a0b2d$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Meer laden...\"}");


var $da4cf573cba48b9e$exports = {};
$da4cf573cba48b9e$exports = JSON.parse("{\"loading\":\"Ładowanie...\",\"loadingMore\":\"Wczytywanie większej liczby...\"}");


var $69cdbf03630980c5$exports = {};
$69cdbf03630980c5$exports = JSON.parse("{\"loading\":\"Carregando...\",\"loadingMore\":\"Carregando mais...\"}");


var $949b50db0fd091e1$exports = {};
$949b50db0fd091e1$exports = JSON.parse("{\"loading\":\"A carregar...\",\"loadingMore\":\"A carregar mais...\"}");


var $aae417613867a5ef$exports = {};
$aae417613867a5ef$exports = JSON.parse("{\"loading\":\"Se încarcă...\",\"loadingMore\":\"Se încarcă mai multe...\"}");


var $2578c3da0cb2a8d2$exports = {};
$2578c3da0cb2a8d2$exports = JSON.parse("{\"loading\":\"Загрузка...\",\"loadingMore\":\"Дополнительная загрузка...\"}");


var $fcab097a855724b9$exports = {};
$fcab097a855724b9$exports = JSON.parse("{\"loading\":\"Načítava sa...\",\"loadingMore\":\"Načítava sa viac...\"}");


var $e603ad2e6bfdc38f$exports = {};
$e603ad2e6bfdc38f$exports = JSON.parse("{\"loading\":\"Nalaganje...\",\"loadingMore\":\"Nalaganje več vsebine...\"}");


var $1a443d2a1eedfc8a$exports = {};
$1a443d2a1eedfc8a$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $02a96f4f58b5c33e$exports = {};
$02a96f4f58b5c33e$exports = JSON.parse("{\"loading\":\"Läser in...\",\"loadingMore\":\"Läser in mer...\"}");


var $54fd1be4fe495b72$exports = {};
$54fd1be4fe495b72$exports = JSON.parse("{\"loading\":\"Yükleniyor...\",\"loadingMore\":\"Daha fazla yükleniyor...\"}");


var $79bd4fd399d96bff$exports = {};
$79bd4fd399d96bff$exports = JSON.parse("{\"loading\":\"Завантаження…\",\"loadingMore\":\"Завантаження інших об’єктів...\"}");


var $62ffa7e50e6a6388$exports = {};
$62ffa7e50e6a6388$exports = JSON.parse("{\"loading\":\"正在加载...\",\"loadingMore\":\"正在加载更多...\"}");


var $3c946fc8849b9401$exports = {};
$3c946fc8849b9401$exports = JSON.parse("{\"loading\":\"正在載入\",\"loadingMore\":\"正在載入更多…\"}");


$90c9d1762ab2062e$exports = {
    "ar-AE": $83ba88602455d244$exports,
    "bg-BG": $5fe0d315cc5a7183$exports,
    "cs-CZ": $e87b1e583c4cf368$exports,
    "da-DK": $ae35d0c53ccc9975$exports,
    "de-DE": $2fae94c2aa57f981$exports,
    "el-GR": $5bfe961f5325a182$exports,
    "en-US": $ab4c0070667f518c$exports,
    "es-ES": $80e2e54ab7449672$exports,
    "et-EE": $8345b65fa608a917$exports,
    "fi-FI": $8559421ff678028e$exports,
    "fr-FR": $7a1ebc5ef338a437$exports,
    "he-IL": $1bc40825bd0b7718$exports,
    "hr-HR": $331a3b0b67416ae5$exports,
    "hu-HU": $58012a7770aac62c$exports,
    "it-IT": $28acb1be6015d74f$exports,
    "ja-JP": $80e3f20426438faa$exports,
    "ko-KR": $00e6a58ccb25d5e3$exports,
    "lt-LT": $15b98ca5ea6ae78d$exports,
    "lv-LV": $a8bfc82de5ff914b$exports,
    "nb-NO": $a8f9ea5c9defdc32$exports,
    "nl-NL": $0802d703e66a0b2d$exports,
    "pl-PL": $da4cf573cba48b9e$exports,
    "pt-BR": $69cdbf03630980c5$exports,
    "pt-PT": $949b50db0fd091e1$exports,
    "ro-RO": $aae417613867a5ef$exports,
    "ru-RU": $2578c3da0cb2a8d2$exports,
    "sk-SK": $fcab097a855724b9$exports,
    "sl-SI": $e603ad2e6bfdc38f$exports,
    "sr-SP": $1a443d2a1eedfc8a$exports,
    "sv-SE": $02a96f4f58b5c33e$exports,
    "tr-TR": $54fd1be4fe495b72$exports,
    "uk-UA": $79bd4fd399d96bff$exports,
    "zh-CN": $62ffa7e50e6a6388$exports,
    "zh-TW": $3c946fc8849b9401$exports
};







var $f3d3deb347e96d4b$exports = {};

$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table", () => $f3d3deb347e96d4b$export$455c59d2b5bafef0, (v) => $f3d3deb347e96d4b$export$455c59d2b5bafef0 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-sortedIcon", () => $f3d3deb347e96d4b$export$7d48ded8ceef1e62, (v) => $f3d3deb347e96d4b$export$7d48ded8ceef1e62 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-headWrapper", () => $f3d3deb347e96d4b$export$a08929593e9a2fb2, (v) => $f3d3deb347e96d4b$export$a08929593e9a2fb2 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-headCellContents", () => $f3d3deb347e96d4b$export$ce66f3b8316b228e, (v) => $f3d3deb347e96d4b$export$ce66f3b8316b228e = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-headCell", () => $f3d3deb347e96d4b$export$f64307d6c29e2f55, (v) => $f3d3deb347e96d4b$export$f64307d6c29e2f55 = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-sortable", () => $f3d3deb347e96d4b$export$c5f84948d72c03fb, (v) => $f3d3deb347e96d4b$export$c5f84948d72c03fb = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-sorted-asc", () => $f3d3deb347e96d4b$export$24499792d6b87cb, (v) => $f3d3deb347e96d4b$export$24499792d6b87cb = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-sorted-desc", () => $f3d3deb347e96d4b$export$cda6d7b632f895cc, (v) => $f3d3deb347e96d4b$export$cda6d7b632f895cc = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-cell--alignCenter", () => $f3d3deb347e96d4b$export$7e9bb4c3d8ec70e2, (v) => $f3d3deb347e96d4b$export$7e9bb4c3d8ec70e2 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-cell--alignEnd", () => $f3d3deb347e96d4b$export$94db5e2e979379b6, (v) => $f3d3deb347e96d4b$export$94db5e2e979379b6 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-body", () => $f3d3deb347e96d4b$export$c841a58af70827c7, (v) => $f3d3deb347e96d4b$export$c841a58af70827c7 = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-drop-target", () => $f3d3deb347e96d4b$export$d8467f38d2d00bd0, (v) => $f3d3deb347e96d4b$export$d8467f38d2d00bd0 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-row", () => $f3d3deb347e96d4b$export$fefa57dcd4648052, (v) => $f3d3deb347e96d4b$export$fefa57dcd4648052 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table--quiet", () => $f3d3deb347e96d4b$export$80f179961079d85e, (v) => $f3d3deb347e96d4b$export$80f179961079d85e = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-cell", () => $f3d3deb347e96d4b$export$c073926c283bb618, (v) => $f3d3deb347e96d4b$export$c073926c283bb618 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table--compact", () => $f3d3deb347e96d4b$export$bcb43fe016211cab, (v) => $f3d3deb347e96d4b$export$bcb43fe016211cab = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table--spacious", () => $f3d3deb347e96d4b$export$eef21b0715bc0914, (v) => $f3d3deb347e96d4b$export$eef21b0715bc0914 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-cellContents", () => $f3d3deb347e96d4b$export$683061182a3353d3, (v) => $f3d3deb347e96d4b$export$683061182a3353d3 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-cell--hideHeader", () => $f3d3deb347e96d4b$export$8ff2ab45f5f0045d, (v) => $f3d3deb347e96d4b$export$8ff2ab45f5f0045d = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table--wrap", () => $f3d3deb347e96d4b$export$9d4c255d6285f0ec, (v) => $f3d3deb347e96d4b$export$9d4c255d6285f0ec = v);
$parcel$export($f3d3deb347e96d4b$exports, "focus-ring", () => $f3d3deb347e96d4b$export$f39a09f249340e2a, (v) => $f3d3deb347e96d4b$export$f39a09f249340e2a = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-focused", () => $f3d3deb347e96d4b$export$e7dc768d35940237, (v) => $f3d3deb347e96d4b$export$e7dc768d35940237 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-cell--divider", () => $f3d3deb347e96d4b$export$9531650467e5785b, (v) => $f3d3deb347e96d4b$export$9531650467e5785b = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-checkboxCell", () => $f3d3deb347e96d4b$export$ae17a7501a9fd0b3, (v) => $f3d3deb347e96d4b$export$ae17a7501a9fd0b3 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-checkbox", () => $f3d3deb347e96d4b$export$9c494845d6df55df, (v) => $f3d3deb347e96d4b$export$9c494845d6df55df = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-hovered", () => $f3d3deb347e96d4b$export$b8813cd5d7824ce7, (v) => $f3d3deb347e96d4b$export$b8813cd5d7824ce7 = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-cellWrapper", () => $f3d3deb347e96d4b$export$fe4389976827e927, (v) => $f3d3deb347e96d4b$export$fe4389976827e927 = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-active", () => $f3d3deb347e96d4b$export$20fd0f7cd4e6112f, (v) => $f3d3deb347e96d4b$export$20fd0f7cd4e6112f = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-disabled", () => $f3d3deb347e96d4b$export$d35bc1e505d1ebbf, (v) => $f3d3deb347e96d4b$export$d35bc1e505d1ebbf = v);
$parcel$export($f3d3deb347e96d4b$exports, "is-selected", () => $f3d3deb347e96d4b$export$1e0fb04f31d3c22a, (v) => $f3d3deb347e96d4b$export$1e0fb04f31d3c22a = v);
$parcel$export($f3d3deb347e96d4b$exports, "spectrum-Table-row--highlightSelection", () => $f3d3deb347e96d4b$export$31ebb0cbc2669cfb, (v) => $f3d3deb347e96d4b$export$31ebb0cbc2669cfb = v);
var $f3d3deb347e96d4b$export$455c59d2b5bafef0;
var $f3d3deb347e96d4b$export$7d48ded8ceef1e62;
var $f3d3deb347e96d4b$export$a08929593e9a2fb2;
var $f3d3deb347e96d4b$export$ce66f3b8316b228e;
var $f3d3deb347e96d4b$export$f64307d6c29e2f55;
var $f3d3deb347e96d4b$export$c5f84948d72c03fb;
var $f3d3deb347e96d4b$export$24499792d6b87cb;
var $f3d3deb347e96d4b$export$cda6d7b632f895cc;
var $f3d3deb347e96d4b$export$7e9bb4c3d8ec70e2;
var $f3d3deb347e96d4b$export$94db5e2e979379b6;
var $f3d3deb347e96d4b$export$c841a58af70827c7;
var $f3d3deb347e96d4b$export$d8467f38d2d00bd0;
var $f3d3deb347e96d4b$export$fefa57dcd4648052;
var $f3d3deb347e96d4b$export$80f179961079d85e;
var $f3d3deb347e96d4b$export$c073926c283bb618;
var $f3d3deb347e96d4b$export$bcb43fe016211cab;
var $f3d3deb347e96d4b$export$eef21b0715bc0914;
var $f3d3deb347e96d4b$export$683061182a3353d3;
var $f3d3deb347e96d4b$export$8ff2ab45f5f0045d;
var $f3d3deb347e96d4b$export$9d4c255d6285f0ec;
var $f3d3deb347e96d4b$export$f39a09f249340e2a;
var $f3d3deb347e96d4b$export$e7dc768d35940237;
var $f3d3deb347e96d4b$export$9531650467e5785b;
var $f3d3deb347e96d4b$export$ae17a7501a9fd0b3;
var $f3d3deb347e96d4b$export$9c494845d6df55df;
var $f3d3deb347e96d4b$export$b8813cd5d7824ce7;
var $f3d3deb347e96d4b$export$fe4389976827e927;
var $f3d3deb347e96d4b$export$20fd0f7cd4e6112f;
var $f3d3deb347e96d4b$export$d35bc1e505d1ebbf;
var $f3d3deb347e96d4b$export$1e0fb04f31d3c22a;
var $f3d3deb347e96d4b$export$31ebb0cbc2669cfb;
$f3d3deb347e96d4b$export$455c59d2b5bafef0 = "_spectrum-Table_d0fc74";
$f3d3deb347e96d4b$export$7d48ded8ceef1e62 = "_spectrum-Table-sortedIcon_d0fc74";
$f3d3deb347e96d4b$export$a08929593e9a2fb2 = "_spectrum-Table-headWrapper_d0fc74";
$f3d3deb347e96d4b$export$ce66f3b8316b228e = "_spectrum-Table-headCellContents_d0fc74";
$f3d3deb347e96d4b$export$f64307d6c29e2f55 = "_spectrum-Table-headCell_d0fc74";
$f3d3deb347e96d4b$export$c5f84948d72c03fb = "_is-sortable_d0fc74";
$f3d3deb347e96d4b$export$24499792d6b87cb = "_is-sorted-asc_d0fc74";
$f3d3deb347e96d4b$export$cda6d7b632f895cc = "_is-sorted-desc_d0fc74";
$f3d3deb347e96d4b$export$7e9bb4c3d8ec70e2 = "_spectrum-Table-cell--alignCenter_d0fc74";
$f3d3deb347e96d4b$export$94db5e2e979379b6 = "_spectrum-Table-cell--alignEnd_d0fc74";
$f3d3deb347e96d4b$export$c841a58af70827c7 = "_spectrum-Table-body_d0fc74";
$f3d3deb347e96d4b$export$d8467f38d2d00bd0 = "_is-drop-target_d0fc74";
$f3d3deb347e96d4b$export$fefa57dcd4648052 = "_spectrum-Table-row_d0fc74";
$f3d3deb347e96d4b$export$80f179961079d85e = "_spectrum-Table--quiet_d0fc74";
$f3d3deb347e96d4b$export$c073926c283bb618 = "_spectrum-Table-cell_d0fc74";
$f3d3deb347e96d4b$export$bcb43fe016211cab = "_spectrum-Table--compact_d0fc74";
$f3d3deb347e96d4b$export$eef21b0715bc0914 = "_spectrum-Table--spacious_d0fc74";
$f3d3deb347e96d4b$export$683061182a3353d3 = "_spectrum-Table-cellContents_d0fc74";
$f3d3deb347e96d4b$export$8ff2ab45f5f0045d = "_spectrum-Table-cell--hideHeader_d0fc74";
$f3d3deb347e96d4b$export$9d4c255d6285f0ec = "_spectrum-Table--wrap_d0fc74";
$f3d3deb347e96d4b$export$f39a09f249340e2a = "_focus-ring_d0fc74";
$f3d3deb347e96d4b$export$e7dc768d35940237 = "_is-focused_d0fc74";
$f3d3deb347e96d4b$export$9531650467e5785b = "_spectrum-Table-cell--divider_d0fc74";
$f3d3deb347e96d4b$export$ae17a7501a9fd0b3 = "_spectrum-Table-checkboxCell_d0fc74";
$f3d3deb347e96d4b$export$9c494845d6df55df = "_spectrum-Table-checkbox_d0fc74";
$f3d3deb347e96d4b$export$b8813cd5d7824ce7 = "_is-hovered_d0fc74";
$f3d3deb347e96d4b$export$fe4389976827e927 = "_spectrum-Table-cellWrapper_d0fc74";
$f3d3deb347e96d4b$export$20fd0f7cd4e6112f = "_is-active_d0fc74";
$f3d3deb347e96d4b$export$d35bc1e505d1ebbf = "_is-disabled_d0fc74";
$f3d3deb347e96d4b$export$1e0fb04f31d3c22a = "_is-selected_d0fc74";
$f3d3deb347e96d4b$export$31ebb0cbc2669cfb = "_spectrum-Table-row--highlightSelection_d0fc74";


var $fa01235f232096f7$exports = {};

$parcel$export($fa01235f232096f7$exports, "react-spectrum-Table", () => $fa01235f232096f7$export$8cc7e6e5f955c192, (v) => $fa01235f232096f7$export$8cc7e6e5f955c192 = v);
$parcel$export($fa01235f232096f7$exports, "react-spectrum-Table-cell", () => $fa01235f232096f7$export$19015e98090cea63, (v) => $fa01235f232096f7$export$19015e98090cea63 = v);
$parcel$export($fa01235f232096f7$exports, "react-spectrum-Table-cellWrapper", () => $fa01235f232096f7$export$ea1d9f40910c509, (v) => $fa01235f232096f7$export$ea1d9f40910c509 = v);
$parcel$export($fa01235f232096f7$exports, "react-spectrum-Table-cell--alignStart", () => $fa01235f232096f7$export$25d7f56ba6d0d442, (v) => $fa01235f232096f7$export$25d7f56ba6d0d442 = v);
$parcel$export($fa01235f232096f7$exports, "react-spectrum-Table-cell--alignCenter", () => $fa01235f232096f7$export$14101ea2699002fc, (v) => $fa01235f232096f7$export$14101ea2699002fc = v);
$parcel$export($fa01235f232096f7$exports, "react-spectrum-Table-cell--alignEnd", () => $fa01235f232096f7$export$c594335f8535fc47, (v) => $fa01235f232096f7$export$c594335f8535fc47 = v);
$parcel$export($fa01235f232096f7$exports, "react-spectrum-Table-centeredWrapper", () => $fa01235f232096f7$export$8bffb31c98aaf8d5, (v) => $fa01235f232096f7$export$8bffb31c98aaf8d5 = v);
var $fa01235f232096f7$export$8cc7e6e5f955c192;
var $fa01235f232096f7$export$19015e98090cea63;
var $fa01235f232096f7$export$ea1d9f40910c509;
var $fa01235f232096f7$export$25d7f56ba6d0d442;
var $fa01235f232096f7$export$14101ea2699002fc;
var $fa01235f232096f7$export$c594335f8535fc47;
var $fa01235f232096f7$export$8bffb31c98aaf8d5;
$fa01235f232096f7$export$8cc7e6e5f955c192 = "_react-spectrum-Table_e844a7";
$fa01235f232096f7$export$19015e98090cea63 = "_react-spectrum-Table-cell_e844a7";
$fa01235f232096f7$export$ea1d9f40910c509 = "_react-spectrum-Table-cellWrapper_e844a7";
$fa01235f232096f7$export$25d7f56ba6d0d442 = "_react-spectrum-Table-cell--alignStart_e844a7";
$fa01235f232096f7$export$14101ea2699002fc = "_react-spectrum-Table-cell--alignCenter_e844a7";
$fa01235f232096f7$export$c594335f8535fc47 = "_react-spectrum-Table-cell--alignEnd_e844a7";
$fa01235f232096f7$export$8bffb31c98aaf8d5 = "_react-spectrum-Table-centeredWrapper_e844a7";











const $95cb46dca468eda3$var$DEFAULT_HEADER_HEIGHT = {
    medium: 34,
    large: 40
};
const $95cb46dca468eda3$var$DEFAULT_HIDE_HEADER_CELL_WIDTH = {
    medium: 36,
    large: 44
};
const $95cb46dca468eda3$var$ROW_HEIGHTS = {
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
const $95cb46dca468eda3$var$SELECTION_CELL_DEFAULT_WIDTH = {
    medium: 38,
    large: 48
};
const $95cb46dca468eda3$var$TableContext = /*#__PURE__*/ $gCg3G$react.createContext(null);
function $95cb46dca468eda3$var$useTableContext() {
    return $gCg3G$useContext($95cb46dca468eda3$var$TableContext);
}
function $95cb46dca468eda3$var$TableView(props, ref) {
    props = $gCg3G$useProviderProps(props);
    let { isQuiet: isQuiet , onAction: onAction  } = props;
    let { styleProps: styleProps  } = $gCg3G$useStyleProps(props);
    let [showSelectionCheckboxes, setShowSelectionCheckboxes] = $gCg3G$useState(props.selectionStyle !== 'highlight');
    let state = $gCg3G$useTableState({
        ...props,
        showSelectionCheckboxes: showSelectionCheckboxes,
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    // If the selection behavior changes in state, we need to update showSelectionCheckboxes here due to the circular dependency...
    let shouldShowCheckboxes = state.selectionManager.selectionBehavior !== 'replace';
    if (shouldShowCheckboxes !== showSelectionCheckboxes) setShowSelectionCheckboxes(shouldShowCheckboxes);
    let domRef = $gCg3G$useDOMRef(ref);
    let formatMessage = $gCg3G$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($90c9d1762ab2062e$exports)));
    let { scale: scale  } = $gCg3G$useProvider();
    let density = props.density || 'regular';
    let layout = $gCg3G$useMemo(()=>new $gCg3G$TableLayout({
            // If props.rowHeight is auto, then use estimated heights based on scale, otherwise use fixed heights.
            rowHeight: props.overflowMode === 'wrap' ? null : $95cb46dca468eda3$var$ROW_HEIGHTS[density][scale],
            estimatedRowHeight: props.overflowMode === 'wrap' ? $95cb46dca468eda3$var$ROW_HEIGHTS[density][scale] : null,
            headingHeight: props.overflowMode === 'wrap' ? null : $95cb46dca468eda3$var$DEFAULT_HEADER_HEIGHT[scale],
            estimatedHeadingHeight: props.overflowMode === 'wrap' ? $95cb46dca468eda3$var$DEFAULT_HEADER_HEIGHT[scale] : null,
            getDefaultWidth: ({ hideHeader: hideHeader , isSelectionCell: isSelectionCell , showDivider: showDivider  })=>{
                if (hideHeader) {
                    let width = $95cb46dca468eda3$var$DEFAULT_HIDE_HEADER_CELL_WIDTH[scale];
                    return showDivider ? width + 1 : width;
                } else if (isSelectionCell) return $95cb46dca468eda3$var$SELECTION_CELL_DEFAULT_WIDTH[scale];
            }
        })
    , [
        props.overflowMode,
        scale,
        density
    ]);
    let { direction: direction  } = $gCg3G$useLocale();
    layout.collection = state.collection;
    let { gridProps: gridProps  } = $gCg3G$useTable({
        ...props,
        isVirtualized: true,
        layout: layout,
        onRowAction: onAction
    }, state, domRef);
    let renderWrapper = (parent, reusableView, children, renderChildren)=>{
        let style = $gCg3G$layoutInfoToStyle(reusableView.layoutInfo, direction, parent && parent.layoutInfo);
        if (style.overflow === 'hidden') style.overflow = 'visible'; // needed to support position: sticky
        if (reusableView.viewType === 'rowgroup') return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableRowGroup, {
            key: reusableView.key,
            style: style
        }, renderChildren(children)));
        if (reusableView.viewType === 'header') return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableHeader, {
            key: reusableView.key,
            style: style
        }, renderChildren(children)));
        if (reusableView.viewType === 'row') return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableRow, {
            key: reusableView.key,
            item: reusableView.content,
            style: style,
            hasActions: onAction
        }, renderChildren(children)));
        if (reusableView.viewType === 'headerrow') return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableHeaderRow, {
            key: reusableView.key,
            style: style,
            item: reusableView.content
        }, renderChildren(children)));
        return(/*#__PURE__*/ $gCg3G$react.createElement($gCg3G$VirtualizerItem, {
            key: reusableView.key,
            reusableView: reusableView,
            parent: parent,
            className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-cellWrapper', $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($fa01235f232096f7$exports)), {
                'react-spectrum-Table-cellWrapper': !reusableView.layoutInfo.estimatedSize
            }))
        }));
    };
    let renderView = (type, item)=>{
        switch(type){
            case 'header':
            case 'rowgroup':
            case 'section':
            case 'row':
            case 'headerrow':
                return null;
            case 'cell':
                if (item.props.isSelectionCell) return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableCheckboxCell, {
                    cell: item
                }));
                return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableCell, {
                    cell: item
                }));
            case 'placeholder':
                // TODO: move to react-aria?
                return(/*#__PURE__*/ $gCg3G$react.createElement("div", {
                    role: "gridcell",
                    "aria-colindex": item.index + 1,
                    "aria-colspan": item.colspan > 1 ? item.colspan : null
                }));
            case 'column':
                if (item.props.isSelectionCell) return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableSelectAllCell, {
                    column: item
                }));
                if (item.props.hideHeader) return(/*#__PURE__*/ $gCg3G$react.createElement($gCg3G$TooltipTrigger, {
                    placement: "top",
                    trigger: "focus"
                }, /*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableColumnHeader, {
                    column: item
                }), /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$Tooltip, {
                    placement: "top"
                }, item.rendered)));
                return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableColumnHeader, {
                    column: item
                }));
            case 'loader':
                return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$CenteredWrapper, null, /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$ProgressCircle, {
                    isIndeterminate: true,
                    "aria-label": state.collection.size > 0 ? formatMessage('loadingMore') : formatMessage('loading')
                })));
            case 'empty':
                {
                    let emptyState = props.renderEmptyState ? props.renderEmptyState() : null;
                    if (emptyState == null) return null;
                    return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$CenteredWrapper, null, emptyState));
                }
        }
    };
    return(/*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableContext.Provider, {
        value: state
    }, /*#__PURE__*/ $gCg3G$react.createElement($95cb46dca468eda3$var$TableVirtualizer, {
        ...gridProps,
        ...styleProps,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table', `spectrum-Table--${density}`, {
            'spectrum-Table--quiet': isQuiet,
            'spectrum-Table--wrap': props.overflowMode === 'wrap'
        }, $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($fa01235f232096f7$exports)), 'react-spectrum-Table')),
        layout: layout,
        collection: state.collection,
        focusedKey: state.selectionManager.focusedKey,
        renderView: renderView,
        renderWrapper: renderWrapper,
        domRef: domRef
    })));
}
// This is a custom Virtualizer that also has a header that syncs its scroll position with the body.
function $95cb46dca468eda3$var$TableVirtualizer({ layout: layout , collection: collection , focusedKey: focusedKey , renderView: renderView , renderWrapper: renderWrapper , domRef: domRef , ...otherProps }) {
    let { direction: direction  } = $gCg3G$useLocale();
    let headerRef = $gCg3G$useRef();
    let bodyRef = $gCg3G$useRef();
    let loadingState = collection.body.props.loadingState;
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let onLoadMore = collection.body.props.onLoadMore;
    let state = $gCg3G$useVirtualizerState({
        layout: layout,
        collection: collection,
        renderView: renderView,
        renderWrapper: renderWrapper,
        onVisibleRectChange (rect) {
            bodyRef.current.scrollTop = rect.y;
            $gCg3G$setScrollLeft(bodyRef.current, direction, rect.x);
        },
        transitionDuration: isLoading ? 160 : 220
    });
    let { virtualizerProps: virtualizerProps  } = $gCg3G$useVirtualizer({
        focusedKey: focusedKey,
        scrollToItem (key) {
            let item = collection.getItem(key);
            let column = collection.columns[0];
            state.virtualizer.scrollToItem(key, {
                duration: 0,
                // Prevent scrolling to the top when clicking on column headers.
                shouldScrollY: item?.type !== 'column',
                // Offset scroll position by width of selection cell
                // (which is sticky and will overlap the cell we're scrolling to).
                offsetX: column.props.isSelectionCell ? layout.columnWidths.get(column.key) : 0
            });
        }
    }, state, domRef);
    let headerHeight = layout.getLayoutInfo('header')?.rect.height || 0;
    let visibleRect = state.virtualizer.visibleRect;
    // Sync the scroll position from the table body to the header container.
    let onScroll = $gCg3G$useCallback(()=>{
        headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
    }, [
        bodyRef
    ]);
    let onVisibleRectChange = $gCg3G$useCallback((rect)=>{
        state.setVisibleRect(rect);
        if (!isLoading && onLoadMore) {
            let scrollOffset = state.virtualizer.contentSize.height - rect.height * 2;
            if (rect.y > scrollOffset) onLoadMore();
        }
    }, [
        onLoadMore,
        isLoading,
        state.setVisibleRect,
        state.virtualizer
    ]);
    $gCg3G$useLayoutEffect(()=>{
        if (!isLoading && onLoadMore && !state.isAnimating) {
            if (state.contentSize.height <= state.virtualizer.visibleRect.height) onLoadMore();
        }
    }, [
        state.contentSize,
        state.virtualizer,
        state.isAnimating,
        onLoadMore,
        isLoading
    ]);
    return(/*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...$gCg3G$mergeProps(otherProps, virtualizerProps),
        ref: domRef
    }, /*#__PURE__*/ $gCg3G$react.createElement("div", {
        role: "presentation",
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-headWrapper'),
        style: {
            width: visibleRect.width,
            height: headerHeight,
            overflow: 'hidden',
            position: 'relative',
            willChange: state.isScrolling ? 'scroll-position' : '',
            transition: state.isAnimating ? `none ${state.virtualizer.transitionDuration}ms` : undefined
        },
        ref: headerRef
    }, state.visibleViews[0]), /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$ScrollView, {
        role: "presentation",
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-body'),
        style: {
            flex: 1
        },
        innerStyle: {
            overflow: 'visible',
            transition: state.isAnimating ? `none ${state.virtualizer.transitionDuration}ms` : undefined
        },
        ref: bodyRef,
        contentSize: state.contentSize,
        onVisibleRectChange: onVisibleRectChange,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling,
        onScroll: onScroll
    }, state.visibleViews[1])));
}
function $95cb46dca468eda3$var$TableHeader({ children: children , ...otherProps }) {
    let { rowGroupProps: rowGroupProps  } = $gCg3G$useTableRowGroup();
    return(/*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...rowGroupProps,
        ...otherProps,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-head')
    }, children));
}
function $95cb46dca468eda3$var$TableColumnHeader({ column: column  }) {
    let ref = $gCg3G$useRef();
    let state = $95cb46dca468eda3$var$useTableContext();
    let { columnHeaderProps: columnHeaderProps  } = $gCg3G$useTableColumnHeader({
        node: column,
        isVirtualized: true
    }, state, ref);
    let columnProps = column.props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $gCg3G$useHover({
    });
    return(/*#__PURE__*/ $gCg3G$react.createElement($gCg3G$FocusRing, {
        focusRingClass: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'focus-ring')
    }, /*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...$gCg3G$mergeProps(columnHeaderProps, hoverProps),
        ref: ref,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-headCell', {
            'is-sortable': columnProps.allowsSorting,
            'is-sorted-desc': state.sortDescriptor?.column === column.key && state.sortDescriptor?.direction === 'descending',
            'is-sorted-asc': state.sortDescriptor?.column === column.key && state.sortDescriptor?.direction === 'ascending',
            'is-hovered': isHovered,
            'spectrum-Table-cell--hideHeader': columnProps.hideHeader
        }, $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($fa01235f232096f7$exports)), 'react-spectrum-Table-cell', {
            'react-spectrum-Table-cell--alignCenter': columnProps.align === 'center' || column.colspan > 1,
            'react-spectrum-Table-cell--alignEnd': columnProps.align === 'end'
        }))
    }, columnProps.hideHeader ? /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$VisuallyHidden, null, column.rendered) : /*#__PURE__*/ $gCg3G$react.createElement("div", {
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-headCellContents')
    }, column.rendered), columnProps.allowsSorting && /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$spectrumiconsuiArrowDownSmall, {
        UNSAFE_className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-sortedIcon')
    }))));
}
function $95cb46dca468eda3$var$TableSelectAllCell({ column: column  }) {
    let ref = $gCg3G$useRef();
    let state = $95cb46dca468eda3$var$useTableContext();
    let isSingleSelectionMode = state.selectionManager.selectionMode === 'single';
    let { columnHeaderProps: columnHeaderProps  } = $gCg3G$useTableColumnHeader({
        node: column,
        isVirtualized: true
    }, state, ref);
    let { checkboxProps: checkboxProps  } = $gCg3G$useTableSelectAllCheckbox(state);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $gCg3G$useHover({
    });
    return(/*#__PURE__*/ $gCg3G$react.createElement($gCg3G$FocusRing, {
        focusRingClass: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'focus-ring')
    }, /*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...$gCg3G$mergeProps(columnHeaderProps, hoverProps),
        ref: ref,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-headCell', 'spectrum-Table-checkboxCell', {
            'is-hovered': isHovered
        })
    }, /*
            In single selection mode, the checkbox will be hidden.
            So to avoid leaving a column header with no accessible content,
            we use a VisuallyHidden component to include the aria-label from the checkbox,
            which for single selection will be "Select."
          */ isSingleSelectionMode && /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$VisuallyHidden, null, checkboxProps['aria-label']), /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$Checkbox, {
        ...checkboxProps,
        isDisabled: isSingleSelectionMode,
        isEmphasized: true,
        UNSAFE_style: isSingleSelectionMode ? {
            visibility: 'hidden'
        } : undefined,
        UNSAFE_className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-checkbox')
    }))));
}
function $95cb46dca468eda3$var$TableRowGroup({ children: children , ...otherProps }) {
    let { rowGroupProps: rowGroupProps  } = $gCg3G$useTableRowGroup();
    return(/*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...rowGroupProps,
        ...otherProps
    }, children));
}
function $95cb46dca468eda3$var$TableRow({ item: item , children: children , hasActions: hasActions , ...otherProps }) {
    let ref = $gCg3G$useRef();
    let state = $95cb46dca468eda3$var$useTableContext();
    let allowsInteraction = state.selectionManager.selectionMode !== 'none' || hasActions;
    let isDisabled = !allowsInteraction || state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(item.key);
    let { rowProps: rowProps  } = $gCg3G$useTableRow({
        node: item,
        isVirtualized: true
    }, state, ref);
    let { pressProps: pressProps , isPressed: isPressed  } = $gCg3G$usePress({
        isDisabled: isDisabled
    });
    // The row should show the focus background style when any cell inside it is focused.
    // If the row itself is focused, then it should have a blue focus indicator on the left.
    let { isFocusVisible: isFocusVisibleWithin , focusProps: focusWithinProps  } = $gCg3G$useFocusRing({
        within: true
    });
    let { isFocusVisible: isFocusVisible , focusProps: focusProps  } = $gCg3G$useFocusRing();
    let { hoverProps: hoverProps , isHovered: isHovered  } = $gCg3G$useHover({
        isDisabled: isDisabled
    });
    let props = $gCg3G$mergeProps(rowProps, otherProps, focusWithinProps, focusProps, hoverProps, pressProps);
    return(/*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...props,
        ref: ref,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-row', {
            'is-active': isPressed,
            'is-selected': isSelected,
            'spectrum-Table-row--highlightSelection': state.selectionManager.selectionBehavior === 'replace' && (isSelected || state.selectionManager.isSelected(item.nextKey)),
            'is-focused': isFocusVisibleWithin,
            'focus-ring': isFocusVisible,
            'is-hovered': isHovered,
            'is-disabled': isDisabled
        })
    }, children));
}
function $95cb46dca468eda3$var$TableHeaderRow({ item: item , children: children , style: style  }) {
    let state = $95cb46dca468eda3$var$useTableContext();
    let ref = $gCg3G$useRef();
    let { rowProps: rowProps  } = $gCg3G$useTableHeaderRow({
        node: item,
        isVirtualized: true
    }, state, ref);
    return(/*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...rowProps,
        ref: ref,
        style: style
    }, children));
}
function $95cb46dca468eda3$var$TableCheckboxCell({ cell: cell  }) {
    let ref = $gCg3G$useRef();
    let state = $95cb46dca468eda3$var$useTableContext();
    let isDisabled = state.disabledKeys.has(cell.parentKey);
    let { gridCellProps: gridCellProps  } = $gCg3G$useTableCell({
        node: cell,
        isVirtualized: true
    }, state, ref);
    let { checkboxProps: checkboxProps  } = $gCg3G$useTableSelectionCheckbox({
        key: cell.parentKey
    }, state);
    return(/*#__PURE__*/ $gCg3G$react.createElement($gCg3G$FocusRing, {
        focusRingClass: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'focus-ring')
    }, /*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...gridCellProps,
        ref: ref,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-cell', 'spectrum-Table-checkboxCell', {
            'is-disabled': isDisabled
        }, $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($fa01235f232096f7$exports)), 'react-spectrum-Table-cell'))
    }, state.selectionManager.selectionMode !== 'none' && /*#__PURE__*/ $gCg3G$react.createElement($gCg3G$Checkbox, {
        ...checkboxProps,
        isEmphasized: true,
        isDisabled: isDisabled,
        UNSAFE_className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-checkbox')
    }))));
}
function $95cb46dca468eda3$var$TableCell({ cell: cell  }) {
    let state = $95cb46dca468eda3$var$useTableContext();
    let ref = $gCg3G$useRef();
    let columnProps = cell.column.props;
    let isDisabled = state.disabledKeys.has(cell.parentKey);
    let { gridCellProps: gridCellProps  } = $gCg3G$useTableCell({
        node: cell,
        isVirtualized: true
    }, state, ref);
    return(/*#__PURE__*/ $gCg3G$react.createElement($gCg3G$FocusRing, {
        focusRingClass: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'focus-ring')
    }, /*#__PURE__*/ $gCg3G$react.createElement("div", {
        ...gridCellProps,
        ref: ref,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-cell', {
            'spectrum-Table-cell--divider': columnProps.showDivider && cell.column.nextKey !== null,
            'spectrum-Table-cell--hideHeader': columnProps.hideHeader,
            'is-disabled': isDisabled
        }, $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($fa01235f232096f7$exports)), 'react-spectrum-Table-cell', {
            'react-spectrum-Table-cell--alignStart': columnProps.align === 'start',
            'react-spectrum-Table-cell--alignCenter': columnProps.align === 'center',
            'react-spectrum-Table-cell--alignEnd': columnProps.align === 'end'
        }))
    }, /*#__PURE__*/ $gCg3G$react.createElement("span", {
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($f3d3deb347e96d4b$exports)), 'spectrum-Table-cellContents')
    }, cell.rendered))));
}
function $95cb46dca468eda3$var$CenteredWrapper({ children: children  }) {
    let state = $95cb46dca468eda3$var$useTableContext();
    return(/*#__PURE__*/ $gCg3G$react.createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.headerRows.length + state.collection.size + 1,
        className: $gCg3G$classNames((/*@__PURE__*/$parcel$interopDefault($fa01235f232096f7$exports)), 'react-spectrum-Table-centeredWrapper')
    }, /*#__PURE__*/ $gCg3G$react.createElement("div", {
        role: "rowheader",
        "aria-colspan": state.collection.columns.length
    }, children)));
}
/**
 * Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.
 */ const $95cb46dca468eda3$export$b3c27e869d856b7 = /*#__PURE__*/ $gCg3G$react.forwardRef($95cb46dca468eda3$var$TableView);




// Override TS for Column to support spectrum specific props.
const $205c88095226d41f$export$816b5d811295e6bc = $gCg3G$Column;


export {$205c88095226d41f$export$816b5d811295e6bc as Column, $205c88095226d41f$re_export$TableHeader as TableHeader, $205c88095226d41f$re_export$TableBody as TableBody, $205c88095226d41f$re_export$Section as Section, $205c88095226d41f$re_export$Row as Row, $205c88095226d41f$re_export$Cell as Cell, $95cb46dca468eda3$export$b3c27e869d856b7 as TableView};
//# sourceMappingURL=module.js.map
