import "./main.css";
import {ActionButton as $3mgTB$ActionButton} from "@react-spectrum/button";
import $3mgTB$spectrumiconsuiChevronLeftMedium from "@spectrum-icons/ui/ChevronLeftMedium";
import $3mgTB$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {classNames as $3mgTB$classNames} from "@react-spectrum/utils";
import $3mgTB$react from "react";
import {TextField as $3mgTB$TextField} from "@react-spectrum/textfield";
import {useMessageFormatter as $3mgTB$useMessageFormatter, useLocale as $3mgTB$useLocale} from "@react-aria/i18n";
import {usePagination as $3mgTB$usePagination} from "@react-aria/pagination";
import {usePaginationState as $3mgTB$usePaginationState} from "@react-stately/pagination";
import {useProviderProps as $3mgTB$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $84d91fcd1a20407b$exports = {};

$parcel$export($84d91fcd1a20407b$exports, "PaginationInput", () => $84d91fcd1a20407b$export$8118807542a01a54);




var $609fcfc654dfe254$exports = {};
var $4a57eab4f890b1d0$exports = {};
$4a57eab4f890b1d0$exports = JSON.parse("{\"page_count\":\"من {n, plural, one{# صفحة} other{# من الصفحات}}\"}");


var $b6ba8c8f622de2ef$exports = {};
$b6ba8c8f622de2ef$exports = JSON.parse("{\"page_count\":\"на {n, plural, one{# страници} other{# страници}}\"}");


var $cfa32336169e5a01$exports = {};
$cfa32336169e5a01$exports = JSON.parse("{\"page_count\":\"z {n, plural, one{# stránky} other{# stránek}}\"}");


var $6340bfc7582f942a$exports = {};
$6340bfc7582f942a$exports = JSON.parse("{\"page_count\":\"af {n, plural, one{# side} other{# sider}}\"}");


var $e7b385de7288f94d$exports = {};
$e7b385de7288f94d$exports = JSON.parse("{\"page_count\":\"von {n, plural, one{# Seite} other{# Seiten}}\"}");


var $d2d04965c2a28630$exports = {};
$d2d04965c2a28630$exports = JSON.parse("{\"page_count\":\"από {n, plural, one{# σελίδα} other{# σελίδες}}\"}");


var $0e5c3486ad0f8fb8$exports = {};
$0e5c3486ad0f8fb8$exports = JSON.parse("{\"page_count\":\"of {n, plural, one{# page} other{# pages}}\"}");


var $036dc3a378fbae98$exports = {};
$036dc3a378fbae98$exports = JSON.parse("{\"page_count\":\"de {n, plural, one{# página} other{# páginas}}\"}");


var $8e256c60299643ae$exports = {};
$8e256c60299643ae$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# lk} other{# lk}}\"}");


var $aadfdcce530c5a3f$exports = {};
$aadfdcce530c5a3f$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# sivu} other{# sivua}}\"}");


var $3a54b657e39012a4$exports = {};
$3a54b657e39012a4$exports = JSON.parse("{\"page_count\":\"sur {n, plural, one{# page} other{# pages}}\"}");


var $5cfc427dca3d9424$exports = {};
$5cfc427dca3d9424$exports = JSON.parse("{\"page_count\":\"מתוך {n, plural, one{דף #} other{דפים #}}\"}");


var $0a6349bb467587a2$exports = {};
$0a6349bb467587a2$exports = JSON.parse("{\"page_count\":\"od {n, plural, one{# stranica} other{# stranica}}\"}");


var $d9d3e6d5d879d969$exports = {};
$d9d3e6d5d879d969$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# oldal} other{# oldal}}\"}");


var $e5de4dd1f372389a$exports = {};
$e5de4dd1f372389a$exports = JSON.parse("{\"page_count\":\"di {n, plural, one{# pagina} other{# pagine}}\"}");


var $fb6090a15443add5$exports = {};
$fb6090a15443add5$exports = JSON.parse("{\"page_count\":\"／ {n, plural, one{# ページ} other{# ページ}}\"}");


var $46e321b4fd9456dc$exports = {};
$46e321b4fd9456dc$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# 페이지} other{# 페이지}}\"}");


var $79352934d4294ac8$exports = {};
$79352934d4294ac8$exports = JSON.parse("{\"page_count\":\"iš {n, plural, one{# psl.} other{# psl.}}\"}");


var $fefb7d34445dcca4$exports = {};
$fefb7d34445dcca4$exports = JSON.parse("{\"page_count\":\"no {n, plural, one{# lpp.} other{# lpp.}}\"}");


var $be255a759b2724e7$exports = {};
$be255a759b2724e7$exports = JSON.parse("{\"page_count\":\"av {n, plural, one{# side} other{# sider}}\"}");


var $d3041ce7a38e51a8$exports = {};
$d3041ce7a38e51a8$exports = JSON.parse("{\"page_count\":\"van {n, plural, one{# pagina} other{# pagina's}}\"}");


var $d724403c118140ef$exports = {};
$d724403c118140ef$exports = JSON.parse("{\"page_count\":\"z {n, plural, one{# nr strony} other{# liczba stron}}\"}");


var $f3eadf328b0e253f$exports = {};
$f3eadf328b0e253f$exports = JSON.parse("{\"page_count\":\"de {n, plural, one{# página} other{# páginas}}\"}");


var $51a75267f66043a1$exports = {};
$51a75267f66043a1$exports = JSON.parse("{\"page_count\":\"de {n, plural, one{# página} other{# páginas}}\"}");


var $9b009984e918d1ab$exports = {};
$9b009984e918d1ab$exports = JSON.parse("{\"page_count\":\"sau {n, plural, one{# pagină} other{# pagini}}\"}");


var $a8dd11e995b24a1c$exports = {};
$a8dd11e995b24a1c$exports = JSON.parse("{\"page_count\":\"из {n, plural, one{# стр.} other{# стр.}}\"}");


var $cf213d86dc6a7d4e$exports = {};
$cf213d86dc6a7d4e$exports = JSON.parse("{\"page_count\":\"z {n, plural, one{# strany} other{# strán}}\"}");


var $ab4bdcccad60bc93$exports = {};
$ab4bdcccad60bc93$exports = JSON.parse("{\"page_count\":\"od {n, plural, one{# strani} other{# strani}}\"}");


var $6e5d94973d50d27e$exports = {};
$6e5d94973d50d27e$exports = JSON.parse("{\"page_count\":\"od {n, plural, one{# strana} other{# strana}}\"}");


var $f03f7fbf4e556462$exports = {};
$f03f7fbf4e556462$exports = JSON.parse("{\"page_count\":\"av {n, plural, one{# sida} other{# sidor}}\"}");


var $2f63c5e5fdcd86c2$exports = {};
$2f63c5e5fdcd86c2$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# sayfa} other{# sayfa}}\"}");


var $f7f5a6acf0d4da64$exports = {};
$f7f5a6acf0d4da64$exports = JSON.parse("{\"page_count\":\"із {n, plural, one{# сторінки} other{# стор.}}\"}");


var $c4c7ba388aa718ad$exports = {};
$c4c7ba388aa718ad$exports = JSON.parse("{\"page_count\":\"（共 {n, plural, one{# 页} other{# 页}}）\"}");


var $c4043232f32f8b17$exports = {};
$c4043232f32f8b17$exports = JSON.parse("{\"page_count\":\"共 {n, plural, one{# 頁} other{# 頁}}\"}");


$609fcfc654dfe254$exports = {
    "ar-AE": $4a57eab4f890b1d0$exports,
    "bg-BG": $b6ba8c8f622de2ef$exports,
    "cs-CZ": $cfa32336169e5a01$exports,
    "da-DK": $6340bfc7582f942a$exports,
    "de-DE": $e7b385de7288f94d$exports,
    "el-GR": $d2d04965c2a28630$exports,
    "en-US": $0e5c3486ad0f8fb8$exports,
    "es-ES": $036dc3a378fbae98$exports,
    "et-EE": $8e256c60299643ae$exports,
    "fi-FI": $aadfdcce530c5a3f$exports,
    "fr-FR": $3a54b657e39012a4$exports,
    "he-IL": $5cfc427dca3d9424$exports,
    "hr-HR": $0a6349bb467587a2$exports,
    "hu-HU": $d9d3e6d5d879d969$exports,
    "it-IT": $e5de4dd1f372389a$exports,
    "ja-JP": $fb6090a15443add5$exports,
    "ko-KR": $46e321b4fd9456dc$exports,
    "lt-LT": $79352934d4294ac8$exports,
    "lv-LV": $fefb7d34445dcca4$exports,
    "nb-NO": $be255a759b2724e7$exports,
    "nl-NL": $d3041ce7a38e51a8$exports,
    "pl-PL": $d724403c118140ef$exports,
    "pt-BR": $f3eadf328b0e253f$exports,
    "pt-PT": $51a75267f66043a1$exports,
    "ro-RO": $9b009984e918d1ab$exports,
    "ru-RU": $a8dd11e995b24a1c$exports,
    "sk-SK": $cf213d86dc6a7d4e$exports,
    "sl-SI": $ab4bdcccad60bc93$exports,
    "sr-SP": $6e5d94973d50d27e$exports,
    "sv-SE": $f03f7fbf4e556462$exports,
    "tr-TR": $2f63c5e5fdcd86c2$exports,
    "uk-UA": $f7f5a6acf0d4da64$exports,
    "zh-CN": $c4c7ba388aa718ad$exports,
    "zh-TW": $c4043232f32f8b17$exports
};



var $0511f88c9c52416e$exports = {};

$parcel$export($0511f88c9c52416e$exports, "spectrum-Pagination--explicit", () => $0511f88c9c52416e$export$5a3db73292ad8bfd, (v) => $0511f88c9c52416e$export$5a3db73292ad8bfd = v);
$parcel$export($0511f88c9c52416e$exports, "spectrum-Pagination--listing", () => $0511f88c9c52416e$export$f49aa012cf1f6a0a, (v) => $0511f88c9c52416e$export$f49aa012cf1f6a0a = v);
$parcel$export($0511f88c9c52416e$exports, "spectrum-Pagination-input", () => $0511f88c9c52416e$export$c3aeb9478cba36bc, (v) => $0511f88c9c52416e$export$c3aeb9478cba36bc = v);
$parcel$export($0511f88c9c52416e$exports, "spectrum-Pagination-counter", () => $0511f88c9c52416e$export$27f7c88dc4300e36, (v) => $0511f88c9c52416e$export$27f7c88dc4300e36 = v);
$parcel$export($0511f88c9c52416e$exports, "spectrum-Pagination-prevButton", () => $0511f88c9c52416e$export$bda715408b8fb39, (v) => $0511f88c9c52416e$export$bda715408b8fb39 = v);
$parcel$export($0511f88c9c52416e$exports, "spectrum-Pagination-nextButton", () => $0511f88c9c52416e$export$6f8762a4fe55ec84, (v) => $0511f88c9c52416e$export$6f8762a4fe55ec84 = v);
$parcel$export($0511f88c9c52416e$exports, "spectrum-Pagination-pageButton", () => $0511f88c9c52416e$export$64bd655d468887a6, (v) => $0511f88c9c52416e$export$64bd655d468887a6 = v);
$parcel$export($0511f88c9c52416e$exports, "is-hovered", () => $0511f88c9c52416e$export$b8813cd5d7824ce7, (v) => $0511f88c9c52416e$export$b8813cd5d7824ce7 = v);
$parcel$export($0511f88c9c52416e$exports, "is-selected", () => $0511f88c9c52416e$export$1e0fb04f31d3c22a, (v) => $0511f88c9c52416e$export$1e0fb04f31d3c22a = v);
var $0511f88c9c52416e$export$5a3db73292ad8bfd;
var $0511f88c9c52416e$export$f49aa012cf1f6a0a;
var $0511f88c9c52416e$export$c3aeb9478cba36bc;
var $0511f88c9c52416e$export$27f7c88dc4300e36;
var $0511f88c9c52416e$export$bda715408b8fb39;
var $0511f88c9c52416e$export$6f8762a4fe55ec84;
var $0511f88c9c52416e$export$64bd655d468887a6;
var $0511f88c9c52416e$export$b8813cd5d7824ce7;
var $0511f88c9c52416e$export$1e0fb04f31d3c22a;
$0511f88c9c52416e$export$5a3db73292ad8bfd = "_spectrum-Pagination--explicit_2ea8bb";
$0511f88c9c52416e$export$f49aa012cf1f6a0a = "_spectrum-Pagination--listing_2ea8bb";
$0511f88c9c52416e$export$c3aeb9478cba36bc = "_spectrum-Pagination-input_2ea8bb";
$0511f88c9c52416e$export$27f7c88dc4300e36 = "_spectrum-Pagination-counter_2ea8bb";
$0511f88c9c52416e$export$bda715408b8fb39 = "_spectrum-Pagination-prevButton_2ea8bb";
$0511f88c9c52416e$export$6f8762a4fe55ec84 = "_spectrum-Pagination-nextButton_2ea8bb";
$0511f88c9c52416e$export$64bd655d468887a6 = "_spectrum-Pagination-pageButton_2ea8bb";
$0511f88c9c52416e$export$b8813cd5d7824ce7 = "_is-hovered_2ea8bb";
$0511f88c9c52416e$export$1e0fb04f31d3c22a = "_is-selected_2ea8bb";



var $246d09bd84581062$exports = {};

$parcel$export($246d09bd84581062$exports, "spectrum", () => $246d09bd84581062$export$3311ab3a441bc141, (v) => $246d09bd84581062$export$3311ab3a441bc141 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body1", () => $246d09bd84581062$export$f4376f45bb47a757, (v) => $246d09bd84581062$export$f4376f45bb47a757 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body2", () => $246d09bd84581062$export$7c31637f867016d8, (v) => $246d09bd84581062$export$7c31637f867016d8 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body--large", () => $246d09bd84581062$export$b60efff0f5e39371, (v) => $246d09bd84581062$export$b60efff0f5e39371 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body3", () => $246d09bd84581062$export$ff409df257db2795, (v) => $246d09bd84581062$export$ff409df257db2795 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body4", () => $246d09bd84581062$export$c12cdeddc868f1e0, (v) => $246d09bd84581062$export$c12cdeddc868f1e0 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body--secondary", () => $246d09bd84581062$export$1680534854574ec6, (v) => $246d09bd84581062$export$1680534854574ec6 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body5", () => $246d09bd84581062$export$4c8f73f73220f3ce, (v) => $246d09bd84581062$export$4c8f73f73220f3ce = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body--small", () => $246d09bd84581062$export$feaaa3299f5f7635, (v) => $246d09bd84581062$export$feaaa3299f5f7635 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading1", () => $246d09bd84581062$export$b67f0aab38cf89b3, (v) => $246d09bd84581062$export$b67f0aab38cf89b3 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading2", () => $246d09bd84581062$export$91a77c93c220b803, (v) => $246d09bd84581062$export$91a77c93c220b803 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading3", () => $246d09bd84581062$export$1e676464c02e275f, (v) => $246d09bd84581062$export$1e676464c02e275f = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading4", () => $246d09bd84581062$export$eafe058d4d509311, (v) => $246d09bd84581062$export$eafe058d4d509311 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading--subtitle1", () => $246d09bd84581062$export$6058c4be808f20db, (v) => $246d09bd84581062$export$6058c4be808f20db = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading5", () => $246d09bd84581062$export$1404f882cef9a3ed, (v) => $246d09bd84581062$export$1404f882cef9a3ed = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading6", () => $246d09bd84581062$export$44c17a884f81a3b5, (v) => $246d09bd84581062$export$44c17a884f81a3b5 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading--subtitle2", () => $246d09bd84581062$export$8ad5be02f9a4dde5, (v) => $246d09bd84581062$export$8ad5be02f9a4dde5 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Subheading", () => $246d09bd84581062$export$9e1486a1854cd57, (v) => $246d09bd84581062$export$9e1486a1854cd57 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading--subtitle3", () => $246d09bd84581062$export$1547e1f1dc65f7a0, (v) => $246d09bd84581062$export$1547e1f1dc65f7a0 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Detail", () => $246d09bd84581062$export$20561d663b5b1d49, (v) => $246d09bd84581062$export$20561d663b5b1d49 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading1--quiet", () => $246d09bd84581062$export$17a651f057029b2f, (v) => $246d09bd84581062$export$17a651f057029b2f = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading2--quiet", () => $246d09bd84581062$export$e458358c06b40d44, (v) => $246d09bd84581062$export$e458358c06b40d44 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading--pageTitle", () => $246d09bd84581062$export$63e9e087a73f808b, (v) => $246d09bd84581062$export$63e9e087a73f808b = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading1--strong", () => $246d09bd84581062$export$6daeef3b7089be9d, (v) => $246d09bd84581062$export$6daeef3b7089be9d = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading2--strong", () => $246d09bd84581062$export$1bcca2ed08e7298f, (v) => $246d09bd84581062$export$1bcca2ed08e7298f = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading1--display", () => $246d09bd84581062$export$9fc923153172ae68, (v) => $246d09bd84581062$export$9fc923153172ae68 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading2--display", () => $246d09bd84581062$export$d0c7a0c7fe919066, (v) => $246d09bd84581062$export$d0c7a0c7fe919066 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Heading--display", () => $246d09bd84581062$export$4f42ad86e3f61c2c, (v) => $246d09bd84581062$export$4f42ad86e3f61c2c = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Typography", () => $246d09bd84581062$export$11d9f61884cf1652, (v) => $246d09bd84581062$export$11d9f61884cf1652 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Article", () => $246d09bd84581062$export$9cd1cfe738c09dc2, (v) => $246d09bd84581062$export$9cd1cfe738c09dc2 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Code1", () => $246d09bd84581062$export$26901199693150e4, (v) => $246d09bd84581062$export$26901199693150e4 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Code2", () => $246d09bd84581062$export$c1aa920debd257f8, (v) => $246d09bd84581062$export$c1aa920debd257f8 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Code3", () => $246d09bd84581062$export$c6ee6a58899cb85d, (v) => $246d09bd84581062$export$c6ee6a58899cb85d = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Code4", () => $246d09bd84581062$export$d310c5c110379d50, (v) => $246d09bd84581062$export$d310c5c110379d50 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Code5", () => $246d09bd84581062$export$aa3e15b3843ca319, (v) => $246d09bd84581062$export$aa3e15b3843ca319 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body", () => $246d09bd84581062$export$a30bf7810c8453d1, (v) => $246d09bd84581062$export$a30bf7810c8453d1 = v);
$parcel$export($246d09bd84581062$exports, "spectrum-Body--italic", () => $246d09bd84581062$export$7b2dac1166f6ec4c, (v) => $246d09bd84581062$export$7b2dac1166f6ec4c = v);
var $246d09bd84581062$export$3311ab3a441bc141;
var $246d09bd84581062$export$f4376f45bb47a757;
var $246d09bd84581062$export$7c31637f867016d8;
var $246d09bd84581062$export$b60efff0f5e39371;
var $246d09bd84581062$export$ff409df257db2795;
var $246d09bd84581062$export$c12cdeddc868f1e0;
var $246d09bd84581062$export$1680534854574ec6;
var $246d09bd84581062$export$4c8f73f73220f3ce;
var $246d09bd84581062$export$feaaa3299f5f7635;
var $246d09bd84581062$export$b67f0aab38cf89b3;
var $246d09bd84581062$export$91a77c93c220b803;
var $246d09bd84581062$export$1e676464c02e275f;
var $246d09bd84581062$export$eafe058d4d509311;
var $246d09bd84581062$export$6058c4be808f20db;
var $246d09bd84581062$export$1404f882cef9a3ed;
var $246d09bd84581062$export$44c17a884f81a3b5;
var $246d09bd84581062$export$8ad5be02f9a4dde5;
var $246d09bd84581062$export$9e1486a1854cd57;
var $246d09bd84581062$export$1547e1f1dc65f7a0;
var $246d09bd84581062$export$20561d663b5b1d49;
var $246d09bd84581062$export$17a651f057029b2f;
var $246d09bd84581062$export$e458358c06b40d44;
var $246d09bd84581062$export$63e9e087a73f808b;
var $246d09bd84581062$export$6daeef3b7089be9d;
var $246d09bd84581062$export$1bcca2ed08e7298f;
var $246d09bd84581062$export$9fc923153172ae68;
var $246d09bd84581062$export$d0c7a0c7fe919066;
var $246d09bd84581062$export$4f42ad86e3f61c2c;
var $246d09bd84581062$export$11d9f61884cf1652;
var $246d09bd84581062$export$9cd1cfe738c09dc2;
var $246d09bd84581062$export$26901199693150e4;
var $246d09bd84581062$export$c1aa920debd257f8;
var $246d09bd84581062$export$c6ee6a58899cb85d;
var $246d09bd84581062$export$d310c5c110379d50;
var $246d09bd84581062$export$aa3e15b3843ca319;
var $246d09bd84581062$export$a30bf7810c8453d1;
var $246d09bd84581062$export$7b2dac1166f6ec4c;
$246d09bd84581062$export$3311ab3a441bc141 = "_spectrum_6a1039";
$246d09bd84581062$export$f4376f45bb47a757 = "_spectrum-Body1_6a1039";
$246d09bd84581062$export$7c31637f867016d8 = "_spectrum-Body2_6a1039";
$246d09bd84581062$export$b60efff0f5e39371 = "_spectrum-Body--large_6a1039";
$246d09bd84581062$export$ff409df257db2795 = "_spectrum-Body3_6a1039";
$246d09bd84581062$export$c12cdeddc868f1e0 = "_spectrum-Body4_6a1039";
$246d09bd84581062$export$1680534854574ec6 = "_spectrum-Body--secondary_6a1039";
$246d09bd84581062$export$4c8f73f73220f3ce = "_spectrum-Body5_6a1039";
$246d09bd84581062$export$feaaa3299f5f7635 = "_spectrum-Body--small_6a1039";
$246d09bd84581062$export$b67f0aab38cf89b3 = "_spectrum-Heading1_6a1039";
$246d09bd84581062$export$91a77c93c220b803 = "_spectrum-Heading2_6a1039";
$246d09bd84581062$export$1e676464c02e275f = "_spectrum-Heading3_6a1039";
$246d09bd84581062$export$eafe058d4d509311 = "_spectrum-Heading4_6a1039";
$246d09bd84581062$export$6058c4be808f20db = "_spectrum-Heading--subtitle1_6a1039";
$246d09bd84581062$export$1404f882cef9a3ed = "_spectrum-Heading5_6a1039";
$246d09bd84581062$export$44c17a884f81a3b5 = "_spectrum-Heading6_6a1039";
$246d09bd84581062$export$8ad5be02f9a4dde5 = "_spectrum-Heading--subtitle2_6a1039";
$246d09bd84581062$export$9e1486a1854cd57 = "_spectrum-Subheading_6a1039";
$246d09bd84581062$export$1547e1f1dc65f7a0 = "_spectrum-Heading--subtitle3_6a1039";
$246d09bd84581062$export$20561d663b5b1d49 = "_spectrum-Detail_6a1039";
$246d09bd84581062$export$17a651f057029b2f = "_spectrum-Heading1--quiet_6a1039";
$246d09bd84581062$export$e458358c06b40d44 = "_spectrum-Heading2--quiet_6a1039";
$246d09bd84581062$export$63e9e087a73f808b = "_spectrum-Heading--pageTitle_6a1039";
$246d09bd84581062$export$6daeef3b7089be9d = "_spectrum-Heading1--strong_6a1039";
$246d09bd84581062$export$1bcca2ed08e7298f = "_spectrum-Heading2--strong_6a1039";
$246d09bd84581062$export$9fc923153172ae68 = "_spectrum-Heading1--display_6a1039";
$246d09bd84581062$export$d0c7a0c7fe919066 = "_spectrum-Heading2--display_6a1039";
$246d09bd84581062$export$4f42ad86e3f61c2c = "_spectrum-Heading--display_6a1039";
$246d09bd84581062$export$11d9f61884cf1652 = "_spectrum-Typography_6a1039";
$246d09bd84581062$export$9cd1cfe738c09dc2 = "_spectrum-Article_6a1039";
$246d09bd84581062$export$26901199693150e4 = "_spectrum-Code1_6a1039";
$246d09bd84581062$export$c1aa920debd257f8 = "_spectrum-Code2_6a1039";
$246d09bd84581062$export$c6ee6a58899cb85d = "_spectrum-Code3_6a1039";
$246d09bd84581062$export$d310c5c110379d50 = "_spectrum-Code4_6a1039";
$246d09bd84581062$export$aa3e15b3843ca319 = "_spectrum-Code5_6a1039";
$246d09bd84581062$export$a30bf7810c8453d1 = "_spectrum-Body_6a1039";
$246d09bd84581062$export$7b2dac1166f6ec4c = "_spectrum-Body--italic_6a1039";






function $84d91fcd1a20407b$export$8118807542a01a54(props) {
    props = Object.assign({
    }, {
        defaultValue: 1
    }, props);
    props = $3mgTB$useProviderProps(props);
    let state = $3mgTB$usePaginationState(props);
    let { prevButtonProps: prevButtonProps , nextButtonProps: nextButtonProps , textProps: textProps  } = $3mgTB$usePagination(props, state);
    let formatMessage = $3mgTB$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($609fcfc654dfe254$exports)));
    let { direction: direction  } = $3mgTB$useLocale();
    const { maxValue: maxValue  } = props;
    return(/*#__PURE__*/ $3mgTB$react.createElement("nav", {
        className: $3mgTB$classNames((/*@__PURE__*/$parcel$interopDefault($0511f88c9c52416e$exports)), 'spectrum-Pagination', 'spectrum-Pagination--explicit')
    }, /*#__PURE__*/ $3mgTB$react.createElement($3mgTB$ActionButton, {
        ...prevButtonProps,
        isQuiet: true
    }, direction === 'rtl' ? /*#__PURE__*/ $3mgTB$react.createElement($3mgTB$spectrumiconsuiChevronRightMedium, null) : /*#__PURE__*/ $3mgTB$react.createElement($3mgTB$spectrumiconsuiChevronLeftMedium, null)), /*#__PURE__*/ $3mgTB$react.createElement($3mgTB$TextField, {
        ...textProps,
        value: state.value,
        onChange: state.onChange,
        UNSAFE_className: $3mgTB$classNames((/*@__PURE__*/$parcel$interopDefault($0511f88c9c52416e$exports)), 'spectrum-Pagination-input')
    }), /*#__PURE__*/ $3mgTB$react.createElement("span", {
        className: $3mgTB$classNames((/*@__PURE__*/$parcel$interopDefault($246d09bd84581062$exports)), 'spectrum-Body--secondary', $3mgTB$classNames((/*@__PURE__*/$parcel$interopDefault($0511f88c9c52416e$exports)), 'spectrum-Pagination-counter'))
    }, formatMessage('page_count', {
        n: maxValue
    })), /*#__PURE__*/ $3mgTB$react.createElement($3mgTB$ActionButton, {
        ...nextButtonProps,
        isQuiet: true
    }, direction === 'rtl' ? /*#__PURE__*/ $3mgTB$react.createElement($3mgTB$spectrumiconsuiChevronLeftMedium, null) : /*#__PURE__*/ $3mgTB$react.createElement($3mgTB$spectrumiconsuiChevronRightMedium, null))));
}




export {$84d91fcd1a20407b$export$8118807542a01a54 as PaginationInput};
//# sourceMappingURL=module.js.map
