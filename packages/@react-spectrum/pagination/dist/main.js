require("./main.css");
var $2PjMT$reactspectrumbutton = require("@react-spectrum/button");
var $2PjMT$spectrumiconsuiChevronLeftMedium = require("@spectrum-icons/ui/ChevronLeftMedium");
var $2PjMT$spectrumiconsuiChevronRightMedium = require("@spectrum-icons/ui/ChevronRightMedium");
var $2PjMT$reactspectrumutils = require("@react-spectrum/utils");
var $2PjMT$react = require("react");
var $2PjMT$reactspectrumtextfield = require("@react-spectrum/textfield");
var $2PjMT$reactariai18n = require("@react-aria/i18n");
var $2PjMT$reactariapagination = require("@react-aria/pagination");
var $2PjMT$reactstatelypagination = require("@react-stately/pagination");
var $2PjMT$reactspectrumprovider = require("@react-spectrum/provider");

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
var $ff75440415e6c4ff$exports = {};

$parcel$export($ff75440415e6c4ff$exports, "PaginationInput", () => $ff75440415e6c4ff$export$8118807542a01a54);




var $2c6edde86aedc2e5$exports = {};
var $f18738fa29b93392$exports = {};
$f18738fa29b93392$exports = JSON.parse("{\"page_count\":\"من {n, plural, one{# صفحة} other{# من الصفحات}}\"}");


var $b68a3c47a4d3f28c$exports = {};
$b68a3c47a4d3f28c$exports = JSON.parse("{\"page_count\":\"на {n, plural, one{# страници} other{# страници}}\"}");


var $521d2c02d1c1594f$exports = {};
$521d2c02d1c1594f$exports = JSON.parse("{\"page_count\":\"z {n, plural, one{# stránky} other{# stránek}}\"}");


var $8750ea6581619994$exports = {};
$8750ea6581619994$exports = JSON.parse("{\"page_count\":\"af {n, plural, one{# side} other{# sider}}\"}");


var $0d0c90d01fca0d39$exports = {};
$0d0c90d01fca0d39$exports = JSON.parse("{\"page_count\":\"von {n, plural, one{# Seite} other{# Seiten}}\"}");


var $514a39a1960e7e74$exports = {};
$514a39a1960e7e74$exports = JSON.parse("{\"page_count\":\"από {n, plural, one{# σελίδα} other{# σελίδες}}\"}");


var $c6ed51d666cbfda5$exports = {};
$c6ed51d666cbfda5$exports = JSON.parse("{\"page_count\":\"of {n, plural, one{# page} other{# pages}}\"}");


var $cf54bfaa526f9671$exports = {};
$cf54bfaa526f9671$exports = JSON.parse("{\"page_count\":\"de {n, plural, one{# página} other{# páginas}}\"}");


var $016fd02f8028b9cc$exports = {};
$016fd02f8028b9cc$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# lk} other{# lk}}\"}");


var $d47bc0ac7b81933c$exports = {};
$d47bc0ac7b81933c$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# sivu} other{# sivua}}\"}");


var $fb1e6c6f9afcb7a5$exports = {};
$fb1e6c6f9afcb7a5$exports = JSON.parse("{\"page_count\":\"sur {n, plural, one{# page} other{# pages}}\"}");


var $9ac63ee0334a4479$exports = {};
$9ac63ee0334a4479$exports = JSON.parse("{\"page_count\":\"מתוך {n, plural, one{דף #} other{דפים #}}\"}");


var $efdc7cfd0b5bf7b8$exports = {};
$efdc7cfd0b5bf7b8$exports = JSON.parse("{\"page_count\":\"od {n, plural, one{# stranica} other{# stranica}}\"}");


var $adff694226940de3$exports = {};
$adff694226940de3$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# oldal} other{# oldal}}\"}");


var $d40c4afd989169b6$exports = {};
$d40c4afd989169b6$exports = JSON.parse("{\"page_count\":\"di {n, plural, one{# pagina} other{# pagine}}\"}");


var $129b731bfaea334e$exports = {};
$129b731bfaea334e$exports = JSON.parse("{\"page_count\":\"／ {n, plural, one{# ページ} other{# ページ}}\"}");


var $482b2d668ef3451e$exports = {};
$482b2d668ef3451e$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# 페이지} other{# 페이지}}\"}");


var $c8cf78bfe11dcd87$exports = {};
$c8cf78bfe11dcd87$exports = JSON.parse("{\"page_count\":\"iš {n, plural, one{# psl.} other{# psl.}}\"}");


var $f3e8e5dace020e47$exports = {};
$f3e8e5dace020e47$exports = JSON.parse("{\"page_count\":\"no {n, plural, one{# lpp.} other{# lpp.}}\"}");


var $b8f3608d91a1af8d$exports = {};
$b8f3608d91a1af8d$exports = JSON.parse("{\"page_count\":\"av {n, plural, one{# side} other{# sider}}\"}");


var $273501b29c65fb9f$exports = {};
$273501b29c65fb9f$exports = JSON.parse("{\"page_count\":\"van {n, plural, one{# pagina} other{# pagina's}}\"}");


var $b9e751525fd189b7$exports = {};
$b9e751525fd189b7$exports = JSON.parse("{\"page_count\":\"z {n, plural, one{# nr strony} other{# liczba stron}}\"}");


var $94e0dec3551568b8$exports = {};
$94e0dec3551568b8$exports = JSON.parse("{\"page_count\":\"de {n, plural, one{# página} other{# páginas}}\"}");


var $5b9603734801f648$exports = {};
$5b9603734801f648$exports = JSON.parse("{\"page_count\":\"de {n, plural, one{# página} other{# páginas}}\"}");


var $6304441df8c22877$exports = {};
$6304441df8c22877$exports = JSON.parse("{\"page_count\":\"sau {n, plural, one{# pagină} other{# pagini}}\"}");


var $ad4968439328601a$exports = {};
$ad4968439328601a$exports = JSON.parse("{\"page_count\":\"из {n, plural, one{# стр.} other{# стр.}}\"}");


var $0f9f83e215d66639$exports = {};
$0f9f83e215d66639$exports = JSON.parse("{\"page_count\":\"z {n, plural, one{# strany} other{# strán}}\"}");


var $e9d9ace54d6624fd$exports = {};
$e9d9ace54d6624fd$exports = JSON.parse("{\"page_count\":\"od {n, plural, one{# strani} other{# strani}}\"}");


var $704990d7a59d814d$exports = {};
$704990d7a59d814d$exports = JSON.parse("{\"page_count\":\"od {n, plural, one{# strana} other{# strana}}\"}");


var $057f53abfe9d1835$exports = {};
$057f53abfe9d1835$exports = JSON.parse("{\"page_count\":\"av {n, plural, one{# sida} other{# sidor}}\"}");


var $dfd2634d0d020cce$exports = {};
$dfd2634d0d020cce$exports = JSON.parse("{\"page_count\":\"/ {n, plural, one{# sayfa} other{# sayfa}}\"}");


var $21c65e71361a36d5$exports = {};
$21c65e71361a36d5$exports = JSON.parse("{\"page_count\":\"із {n, plural, one{# сторінки} other{# стор.}}\"}");


var $9cc57c8267fb272d$exports = {};
$9cc57c8267fb272d$exports = JSON.parse("{\"page_count\":\"（共 {n, plural, one{# 页} other{# 页}}）\"}");


var $88c199682c7a4f1f$exports = {};
$88c199682c7a4f1f$exports = JSON.parse("{\"page_count\":\"共 {n, plural, one{# 頁} other{# 頁}}\"}");


$2c6edde86aedc2e5$exports = {
    "ar-AE": $f18738fa29b93392$exports,
    "bg-BG": $b68a3c47a4d3f28c$exports,
    "cs-CZ": $521d2c02d1c1594f$exports,
    "da-DK": $8750ea6581619994$exports,
    "de-DE": $0d0c90d01fca0d39$exports,
    "el-GR": $514a39a1960e7e74$exports,
    "en-US": $c6ed51d666cbfda5$exports,
    "es-ES": $cf54bfaa526f9671$exports,
    "et-EE": $016fd02f8028b9cc$exports,
    "fi-FI": $d47bc0ac7b81933c$exports,
    "fr-FR": $fb1e6c6f9afcb7a5$exports,
    "he-IL": $9ac63ee0334a4479$exports,
    "hr-HR": $efdc7cfd0b5bf7b8$exports,
    "hu-HU": $adff694226940de3$exports,
    "it-IT": $d40c4afd989169b6$exports,
    "ja-JP": $129b731bfaea334e$exports,
    "ko-KR": $482b2d668ef3451e$exports,
    "lt-LT": $c8cf78bfe11dcd87$exports,
    "lv-LV": $f3e8e5dace020e47$exports,
    "nb-NO": $b8f3608d91a1af8d$exports,
    "nl-NL": $273501b29c65fb9f$exports,
    "pl-PL": $b9e751525fd189b7$exports,
    "pt-BR": $94e0dec3551568b8$exports,
    "pt-PT": $5b9603734801f648$exports,
    "ro-RO": $6304441df8c22877$exports,
    "ru-RU": $ad4968439328601a$exports,
    "sk-SK": $0f9f83e215d66639$exports,
    "sl-SI": $e9d9ace54d6624fd$exports,
    "sr-SP": $704990d7a59d814d$exports,
    "sv-SE": $057f53abfe9d1835$exports,
    "tr-TR": $dfd2634d0d020cce$exports,
    "uk-UA": $21c65e71361a36d5$exports,
    "zh-CN": $9cc57c8267fb272d$exports,
    "zh-TW": $88c199682c7a4f1f$exports
};



var $f92ab194883646dd$exports = {};

$parcel$export($f92ab194883646dd$exports, "spectrum-Pagination--explicit", () => $f92ab194883646dd$export$5a3db73292ad8bfd, (v) => $f92ab194883646dd$export$5a3db73292ad8bfd = v);
$parcel$export($f92ab194883646dd$exports, "spectrum-Pagination--listing", () => $f92ab194883646dd$export$f49aa012cf1f6a0a, (v) => $f92ab194883646dd$export$f49aa012cf1f6a0a = v);
$parcel$export($f92ab194883646dd$exports, "spectrum-Pagination-input", () => $f92ab194883646dd$export$c3aeb9478cba36bc, (v) => $f92ab194883646dd$export$c3aeb9478cba36bc = v);
$parcel$export($f92ab194883646dd$exports, "spectrum-Pagination-counter", () => $f92ab194883646dd$export$27f7c88dc4300e36, (v) => $f92ab194883646dd$export$27f7c88dc4300e36 = v);
$parcel$export($f92ab194883646dd$exports, "spectrum-Pagination-prevButton", () => $f92ab194883646dd$export$bda715408b8fb39, (v) => $f92ab194883646dd$export$bda715408b8fb39 = v);
$parcel$export($f92ab194883646dd$exports, "spectrum-Pagination-nextButton", () => $f92ab194883646dd$export$6f8762a4fe55ec84, (v) => $f92ab194883646dd$export$6f8762a4fe55ec84 = v);
$parcel$export($f92ab194883646dd$exports, "spectrum-Pagination-pageButton", () => $f92ab194883646dd$export$64bd655d468887a6, (v) => $f92ab194883646dd$export$64bd655d468887a6 = v);
$parcel$export($f92ab194883646dd$exports, "is-hovered", () => $f92ab194883646dd$export$b8813cd5d7824ce7, (v) => $f92ab194883646dd$export$b8813cd5d7824ce7 = v);
$parcel$export($f92ab194883646dd$exports, "is-selected", () => $f92ab194883646dd$export$1e0fb04f31d3c22a, (v) => $f92ab194883646dd$export$1e0fb04f31d3c22a = v);
var $f92ab194883646dd$export$5a3db73292ad8bfd;
var $f92ab194883646dd$export$f49aa012cf1f6a0a;
var $f92ab194883646dd$export$c3aeb9478cba36bc;
var $f92ab194883646dd$export$27f7c88dc4300e36;
var $f92ab194883646dd$export$bda715408b8fb39;
var $f92ab194883646dd$export$6f8762a4fe55ec84;
var $f92ab194883646dd$export$64bd655d468887a6;
var $f92ab194883646dd$export$b8813cd5d7824ce7;
var $f92ab194883646dd$export$1e0fb04f31d3c22a;
$f92ab194883646dd$export$5a3db73292ad8bfd = "_spectrum-Pagination--explicit_2ea8bb";
$f92ab194883646dd$export$f49aa012cf1f6a0a = "_spectrum-Pagination--listing_2ea8bb";
$f92ab194883646dd$export$c3aeb9478cba36bc = "_spectrum-Pagination-input_2ea8bb";
$f92ab194883646dd$export$27f7c88dc4300e36 = "_spectrum-Pagination-counter_2ea8bb";
$f92ab194883646dd$export$bda715408b8fb39 = "_spectrum-Pagination-prevButton_2ea8bb";
$f92ab194883646dd$export$6f8762a4fe55ec84 = "_spectrum-Pagination-nextButton_2ea8bb";
$f92ab194883646dd$export$64bd655d468887a6 = "_spectrum-Pagination-pageButton_2ea8bb";
$f92ab194883646dd$export$b8813cd5d7824ce7 = "_is-hovered_2ea8bb";
$f92ab194883646dd$export$1e0fb04f31d3c22a = "_is-selected_2ea8bb";



var $3eb41091774285b4$exports = {};

$parcel$export($3eb41091774285b4$exports, "spectrum", () => $3eb41091774285b4$export$3311ab3a441bc141, (v) => $3eb41091774285b4$export$3311ab3a441bc141 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body1", () => $3eb41091774285b4$export$f4376f45bb47a757, (v) => $3eb41091774285b4$export$f4376f45bb47a757 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body2", () => $3eb41091774285b4$export$7c31637f867016d8, (v) => $3eb41091774285b4$export$7c31637f867016d8 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body--large", () => $3eb41091774285b4$export$b60efff0f5e39371, (v) => $3eb41091774285b4$export$b60efff0f5e39371 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body3", () => $3eb41091774285b4$export$ff409df257db2795, (v) => $3eb41091774285b4$export$ff409df257db2795 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body4", () => $3eb41091774285b4$export$c12cdeddc868f1e0, (v) => $3eb41091774285b4$export$c12cdeddc868f1e0 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body--secondary", () => $3eb41091774285b4$export$1680534854574ec6, (v) => $3eb41091774285b4$export$1680534854574ec6 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body5", () => $3eb41091774285b4$export$4c8f73f73220f3ce, (v) => $3eb41091774285b4$export$4c8f73f73220f3ce = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body--small", () => $3eb41091774285b4$export$feaaa3299f5f7635, (v) => $3eb41091774285b4$export$feaaa3299f5f7635 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading1", () => $3eb41091774285b4$export$b67f0aab38cf89b3, (v) => $3eb41091774285b4$export$b67f0aab38cf89b3 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading2", () => $3eb41091774285b4$export$91a77c93c220b803, (v) => $3eb41091774285b4$export$91a77c93c220b803 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading3", () => $3eb41091774285b4$export$1e676464c02e275f, (v) => $3eb41091774285b4$export$1e676464c02e275f = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading4", () => $3eb41091774285b4$export$eafe058d4d509311, (v) => $3eb41091774285b4$export$eafe058d4d509311 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading--subtitle1", () => $3eb41091774285b4$export$6058c4be808f20db, (v) => $3eb41091774285b4$export$6058c4be808f20db = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading5", () => $3eb41091774285b4$export$1404f882cef9a3ed, (v) => $3eb41091774285b4$export$1404f882cef9a3ed = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading6", () => $3eb41091774285b4$export$44c17a884f81a3b5, (v) => $3eb41091774285b4$export$44c17a884f81a3b5 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading--subtitle2", () => $3eb41091774285b4$export$8ad5be02f9a4dde5, (v) => $3eb41091774285b4$export$8ad5be02f9a4dde5 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Subheading", () => $3eb41091774285b4$export$9e1486a1854cd57, (v) => $3eb41091774285b4$export$9e1486a1854cd57 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading--subtitle3", () => $3eb41091774285b4$export$1547e1f1dc65f7a0, (v) => $3eb41091774285b4$export$1547e1f1dc65f7a0 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Detail", () => $3eb41091774285b4$export$20561d663b5b1d49, (v) => $3eb41091774285b4$export$20561d663b5b1d49 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading1--quiet", () => $3eb41091774285b4$export$17a651f057029b2f, (v) => $3eb41091774285b4$export$17a651f057029b2f = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading2--quiet", () => $3eb41091774285b4$export$e458358c06b40d44, (v) => $3eb41091774285b4$export$e458358c06b40d44 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading--pageTitle", () => $3eb41091774285b4$export$63e9e087a73f808b, (v) => $3eb41091774285b4$export$63e9e087a73f808b = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading1--strong", () => $3eb41091774285b4$export$6daeef3b7089be9d, (v) => $3eb41091774285b4$export$6daeef3b7089be9d = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading2--strong", () => $3eb41091774285b4$export$1bcca2ed08e7298f, (v) => $3eb41091774285b4$export$1bcca2ed08e7298f = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading1--display", () => $3eb41091774285b4$export$9fc923153172ae68, (v) => $3eb41091774285b4$export$9fc923153172ae68 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading2--display", () => $3eb41091774285b4$export$d0c7a0c7fe919066, (v) => $3eb41091774285b4$export$d0c7a0c7fe919066 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Heading--display", () => $3eb41091774285b4$export$4f42ad86e3f61c2c, (v) => $3eb41091774285b4$export$4f42ad86e3f61c2c = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Typography", () => $3eb41091774285b4$export$11d9f61884cf1652, (v) => $3eb41091774285b4$export$11d9f61884cf1652 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Article", () => $3eb41091774285b4$export$9cd1cfe738c09dc2, (v) => $3eb41091774285b4$export$9cd1cfe738c09dc2 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Code1", () => $3eb41091774285b4$export$26901199693150e4, (v) => $3eb41091774285b4$export$26901199693150e4 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Code2", () => $3eb41091774285b4$export$c1aa920debd257f8, (v) => $3eb41091774285b4$export$c1aa920debd257f8 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Code3", () => $3eb41091774285b4$export$c6ee6a58899cb85d, (v) => $3eb41091774285b4$export$c6ee6a58899cb85d = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Code4", () => $3eb41091774285b4$export$d310c5c110379d50, (v) => $3eb41091774285b4$export$d310c5c110379d50 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Code5", () => $3eb41091774285b4$export$aa3e15b3843ca319, (v) => $3eb41091774285b4$export$aa3e15b3843ca319 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body", () => $3eb41091774285b4$export$a30bf7810c8453d1, (v) => $3eb41091774285b4$export$a30bf7810c8453d1 = v);
$parcel$export($3eb41091774285b4$exports, "spectrum-Body--italic", () => $3eb41091774285b4$export$7b2dac1166f6ec4c, (v) => $3eb41091774285b4$export$7b2dac1166f6ec4c = v);
var $3eb41091774285b4$export$3311ab3a441bc141;
var $3eb41091774285b4$export$f4376f45bb47a757;
var $3eb41091774285b4$export$7c31637f867016d8;
var $3eb41091774285b4$export$b60efff0f5e39371;
var $3eb41091774285b4$export$ff409df257db2795;
var $3eb41091774285b4$export$c12cdeddc868f1e0;
var $3eb41091774285b4$export$1680534854574ec6;
var $3eb41091774285b4$export$4c8f73f73220f3ce;
var $3eb41091774285b4$export$feaaa3299f5f7635;
var $3eb41091774285b4$export$b67f0aab38cf89b3;
var $3eb41091774285b4$export$91a77c93c220b803;
var $3eb41091774285b4$export$1e676464c02e275f;
var $3eb41091774285b4$export$eafe058d4d509311;
var $3eb41091774285b4$export$6058c4be808f20db;
var $3eb41091774285b4$export$1404f882cef9a3ed;
var $3eb41091774285b4$export$44c17a884f81a3b5;
var $3eb41091774285b4$export$8ad5be02f9a4dde5;
var $3eb41091774285b4$export$9e1486a1854cd57;
var $3eb41091774285b4$export$1547e1f1dc65f7a0;
var $3eb41091774285b4$export$20561d663b5b1d49;
var $3eb41091774285b4$export$17a651f057029b2f;
var $3eb41091774285b4$export$e458358c06b40d44;
var $3eb41091774285b4$export$63e9e087a73f808b;
var $3eb41091774285b4$export$6daeef3b7089be9d;
var $3eb41091774285b4$export$1bcca2ed08e7298f;
var $3eb41091774285b4$export$9fc923153172ae68;
var $3eb41091774285b4$export$d0c7a0c7fe919066;
var $3eb41091774285b4$export$4f42ad86e3f61c2c;
var $3eb41091774285b4$export$11d9f61884cf1652;
var $3eb41091774285b4$export$9cd1cfe738c09dc2;
var $3eb41091774285b4$export$26901199693150e4;
var $3eb41091774285b4$export$c1aa920debd257f8;
var $3eb41091774285b4$export$c6ee6a58899cb85d;
var $3eb41091774285b4$export$d310c5c110379d50;
var $3eb41091774285b4$export$aa3e15b3843ca319;
var $3eb41091774285b4$export$a30bf7810c8453d1;
var $3eb41091774285b4$export$7b2dac1166f6ec4c;
$3eb41091774285b4$export$3311ab3a441bc141 = "_spectrum_6a1039";
$3eb41091774285b4$export$f4376f45bb47a757 = "_spectrum-Body1_6a1039";
$3eb41091774285b4$export$7c31637f867016d8 = "_spectrum-Body2_6a1039";
$3eb41091774285b4$export$b60efff0f5e39371 = "_spectrum-Body--large_6a1039";
$3eb41091774285b4$export$ff409df257db2795 = "_spectrum-Body3_6a1039";
$3eb41091774285b4$export$c12cdeddc868f1e0 = "_spectrum-Body4_6a1039";
$3eb41091774285b4$export$1680534854574ec6 = "_spectrum-Body--secondary_6a1039";
$3eb41091774285b4$export$4c8f73f73220f3ce = "_spectrum-Body5_6a1039";
$3eb41091774285b4$export$feaaa3299f5f7635 = "_spectrum-Body--small_6a1039";
$3eb41091774285b4$export$b67f0aab38cf89b3 = "_spectrum-Heading1_6a1039";
$3eb41091774285b4$export$91a77c93c220b803 = "_spectrum-Heading2_6a1039";
$3eb41091774285b4$export$1e676464c02e275f = "_spectrum-Heading3_6a1039";
$3eb41091774285b4$export$eafe058d4d509311 = "_spectrum-Heading4_6a1039";
$3eb41091774285b4$export$6058c4be808f20db = "_spectrum-Heading--subtitle1_6a1039";
$3eb41091774285b4$export$1404f882cef9a3ed = "_spectrum-Heading5_6a1039";
$3eb41091774285b4$export$44c17a884f81a3b5 = "_spectrum-Heading6_6a1039";
$3eb41091774285b4$export$8ad5be02f9a4dde5 = "_spectrum-Heading--subtitle2_6a1039";
$3eb41091774285b4$export$9e1486a1854cd57 = "_spectrum-Subheading_6a1039";
$3eb41091774285b4$export$1547e1f1dc65f7a0 = "_spectrum-Heading--subtitle3_6a1039";
$3eb41091774285b4$export$20561d663b5b1d49 = "_spectrum-Detail_6a1039";
$3eb41091774285b4$export$17a651f057029b2f = "_spectrum-Heading1--quiet_6a1039";
$3eb41091774285b4$export$e458358c06b40d44 = "_spectrum-Heading2--quiet_6a1039";
$3eb41091774285b4$export$63e9e087a73f808b = "_spectrum-Heading--pageTitle_6a1039";
$3eb41091774285b4$export$6daeef3b7089be9d = "_spectrum-Heading1--strong_6a1039";
$3eb41091774285b4$export$1bcca2ed08e7298f = "_spectrum-Heading2--strong_6a1039";
$3eb41091774285b4$export$9fc923153172ae68 = "_spectrum-Heading1--display_6a1039";
$3eb41091774285b4$export$d0c7a0c7fe919066 = "_spectrum-Heading2--display_6a1039";
$3eb41091774285b4$export$4f42ad86e3f61c2c = "_spectrum-Heading--display_6a1039";
$3eb41091774285b4$export$11d9f61884cf1652 = "_spectrum-Typography_6a1039";
$3eb41091774285b4$export$9cd1cfe738c09dc2 = "_spectrum-Article_6a1039";
$3eb41091774285b4$export$26901199693150e4 = "_spectrum-Code1_6a1039";
$3eb41091774285b4$export$c1aa920debd257f8 = "_spectrum-Code2_6a1039";
$3eb41091774285b4$export$c6ee6a58899cb85d = "_spectrum-Code3_6a1039";
$3eb41091774285b4$export$d310c5c110379d50 = "_spectrum-Code4_6a1039";
$3eb41091774285b4$export$aa3e15b3843ca319 = "_spectrum-Code5_6a1039";
$3eb41091774285b4$export$a30bf7810c8453d1 = "_spectrum-Body_6a1039";
$3eb41091774285b4$export$7b2dac1166f6ec4c = "_spectrum-Body--italic_6a1039";






function $ff75440415e6c4ff$export$8118807542a01a54(props) {
    props = Object.assign({
    }, {
        defaultValue: 1
    }, props);
    props = $2PjMT$reactspectrumprovider.useProviderProps(props);
    let state = $2PjMT$reactstatelypagination.usePaginationState(props);
    let { prevButtonProps: prevButtonProps , nextButtonProps: nextButtonProps , textProps: textProps  } = $2PjMT$reactariapagination.usePagination(props, state);
    let formatMessage = $2PjMT$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($2c6edde86aedc2e5$exports)));
    let { direction: direction  } = $2PjMT$reactariai18n.useLocale();
    const { maxValue: maxValue  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement("nav", {
        className: $2PjMT$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f92ab194883646dd$exports)), 'spectrum-Pagination', 'spectrum-Pagination--explicit')
    }, /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement($2PjMT$reactspectrumbutton.ActionButton, {
        ...prevButtonProps,
        isQuiet: true
    }, direction === 'rtl' ? /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement(($parcel$interopDefault($2PjMT$spectrumiconsuiChevronRightMedium)), null) : /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement(($parcel$interopDefault($2PjMT$spectrumiconsuiChevronLeftMedium)), null)), /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement($2PjMT$reactspectrumtextfield.TextField, {
        ...textProps,
        value: state.value,
        onChange: state.onChange,
        UNSAFE_className: $2PjMT$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f92ab194883646dd$exports)), 'spectrum-Pagination-input')
    }), /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement("span", {
        className: $2PjMT$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($3eb41091774285b4$exports)), 'spectrum-Body--secondary', $2PjMT$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f92ab194883646dd$exports)), 'spectrum-Pagination-counter'))
    }, formatMessage('page_count', {
        n: maxValue
    })), /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement($2PjMT$reactspectrumbutton.ActionButton, {
        ...nextButtonProps,
        isQuiet: true
    }, direction === 'rtl' ? /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement(($parcel$interopDefault($2PjMT$spectrumiconsuiChevronLeftMedium)), null) : /*#__PURE__*/ ($parcel$interopDefault($2PjMT$react)).createElement(($parcel$interopDefault($2PjMT$spectrumiconsuiChevronRightMedium)), null))));
}


$parcel$exportWildcard(module.exports, $ff75440415e6c4ff$exports);


//# sourceMappingURL=main.js.map
