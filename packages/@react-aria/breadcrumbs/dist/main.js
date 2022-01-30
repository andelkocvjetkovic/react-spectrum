var $jobD6$reactarialink = require("@react-aria/link");
var $jobD6$reactariautils = require("@react-aria/utils");
var $jobD6$reactariai18n = require("@react-aria/i18n");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $bcad9b1de2379fdd$exports = {};

$parcel$export($bcad9b1de2379fdd$exports, "useBreadcrumbItem", () => $bcad9b1de2379fdd$export$452b38fce62c9384);

function $bcad9b1de2379fdd$export$452b38fce62c9384(props, ref) {
    let { isCurrent: isCurrent , isDisabled: isDisabled , 'aria-current': ariaCurrent , elementType: elementType = 'a' , ...otherProps } = props;
    let { linkProps: linkProps  } = $jobD6$reactarialink.useLink({
        isDisabled: isDisabled || isCurrent,
        elementType: elementType,
        ...otherProps
    }, ref);
    let isHeading = /^h[1-6]$/.test(elementType);
    let itemProps = {
    };
    if (!isHeading) itemProps = linkProps;
    if (isCurrent) itemProps['aria-current'] = ariaCurrent || 'page';
    return {
        itemProps: {
            'aria-disabled': isDisabled,
            ...itemProps
        }
    };
}


var $b7dde658210763bf$exports = {};

$parcel$export($b7dde658210763bf$exports, "useBreadcrumbs", () => $b7dde658210763bf$export$8cefe241bd876ca0);

var $1e4cf1adc86485a4$exports = {};
var $ba963946b617577b$exports = {};
$ba963946b617577b$exports = JSON.parse("{\"breadcrumbs\":\"عناصر الواجهة\"}");


var $0cb334bb6e8d07d8$exports = {};
$0cb334bb6e8d07d8$exports = JSON.parse("{\"breadcrumbs\":\"Трохи хляб\"}");


var $aec8c78d7274b6a4$exports = {};
$aec8c78d7274b6a4$exports = JSON.parse("{\"breadcrumbs\":\"Popis cesty\"}");


var $3bc38304447bb901$exports = {};
$3bc38304447bb901$exports = JSON.parse("{\"breadcrumbs\":\"Brødkrummer\"}");


var $be6d9b71fc9c1dfe$exports = {};
$be6d9b71fc9c1dfe$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $427a7707b688aa93$exports = {};
$427a7707b688aa93$exports = JSON.parse("{\"breadcrumbs\":\"Πλοηγήσεις breadcrumb\"}");


var $a117a3d0b92f4a8d$exports = {};
$a117a3d0b92f4a8d$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $1ec50929e8f8745a$exports = {};
$1ec50929e8f8745a$exports = JSON.parse("{\"breadcrumbs\":\"Migas de pan\"}");


var $04c9bc86e4ceca07$exports = {};
$04c9bc86e4ceca07$exports = JSON.parse("{\"breadcrumbs\":\"Lingiread\"}");


var $010ca6b9b2f19b09$exports = {};
$010ca6b9b2f19b09$exports = JSON.parse("{\"breadcrumbs\":\"Navigointilinkit\"}");


var $49bfefe786c10a91$exports = {};
$49bfefe786c10a91$exports = JSON.parse("{\"breadcrumbs\":\"Chemin de navigation\"}");


var $44694deeae38f699$exports = {};
$44694deeae38f699$exports = JSON.parse("{\"breadcrumbs\":\"שבילי ניווט\"}");


var $c055581e6d1aa56f$exports = {};
$c055581e6d1aa56f$exports = JSON.parse("{\"breadcrumbs\":\"Navigacijski putovi\"}");


var $bd0d4a5cfb774274$exports = {};
$bd0d4a5cfb774274$exports = JSON.parse("{\"breadcrumbs\":\"Morzsamenü\"}");


var $1bb5f6646da0a534$exports = {};
$1bb5f6646da0a534$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumb\"}");


var $18edb4ee7c07a10c$exports = {};
$18edb4ee7c07a10c$exports = JSON.parse("{\"breadcrumbs\":\"パンくずリスト\"}");


var $56c243691c23d2d2$exports = {};
$56c243691c23d2d2$exports = JSON.parse("{\"breadcrumbs\":\"탐색 표시\"}");


var $18b92ed4ea9d1bdf$exports = {};
$18b92ed4ea9d1bdf$exports = JSON.parse("{\"breadcrumbs\":\"Naršymo kelias\"}");


var $ef4aad770ef0e5c6$exports = {};
$ef4aad770ef0e5c6$exports = JSON.parse("{\"breadcrumbs\":\"Atpakaļceļi\"}");


var $60d183d7eba0e7d4$exports = {};
$60d183d7eba0e7d4$exports = JSON.parse("{\"breadcrumbs\":\"Navigasjonsstier\"}");


var $2d68ab93b4ecd31b$exports = {};
$2d68ab93b4ecd31b$exports = JSON.parse("{\"breadcrumbs\":\"Broodkruimels\"}");


var $f16438fbc7d0ea25$exports = {};
$f16438fbc7d0ea25$exports = JSON.parse("{\"breadcrumbs\":\"Struktura nawigacyjna\"}");


var $b4d3cd338ef6bf9e$exports = {};
$b4d3cd338ef6bf9e$exports = JSON.parse("{\"breadcrumbs\":\"Caminho detalhado\"}");


var $96fd1db7d93c32c9$exports = {};
$96fd1db7d93c32c9$exports = JSON.parse("{\"breadcrumbs\":\"Categorias\"}");


var $7e4dac09e218cb36$exports = {};
$7e4dac09e218cb36$exports = JSON.parse("{\"breadcrumbs\":\"Miez de pâine\"}");


var $589320e77e418bc3$exports = {};
$589320e77e418bc3$exports = JSON.parse("{\"breadcrumbs\":\"Навигация\"}");


var $1fffc74ec0bfd6c5$exports = {};
$1fffc74ec0bfd6c5$exports = JSON.parse("{\"breadcrumbs\":\"Navigačné prvky Breadcrumbs\"}");


var $143864617f820ef6$exports = {};
$143864617f820ef6$exports = JSON.parse("{\"breadcrumbs\":\"Drobtine\"}");


var $6fa258f0ee2fc112$exports = {};
$6fa258f0ee2fc112$exports = JSON.parse("{\"breadcrumbs\":\"Putanje navigacije\"}");


var $8a9ee28a4da83dc9$exports = {};
$8a9ee28a4da83dc9$exports = JSON.parse("{\"breadcrumbs\":\"Sökvägar\"}");


var $dbb3337e21069b99$exports = {};
$dbb3337e21069b99$exports = JSON.parse("{\"breadcrumbs\":\"İçerik haritaları\"}");


var $b3f0d5387ef77caa$exports = {};
$b3f0d5387ef77caa$exports = JSON.parse("{\"breadcrumbs\":\"Навігаційна стежка\"}");


var $340004c2b0826130$exports = {};
$340004c2b0826130$exports = JSON.parse("{\"breadcrumbs\":\"导航栏\"}");


var $0e01adb185bc0668$exports = {};
$0e01adb185bc0668$exports = JSON.parse("{\"breadcrumbs\":\"導覽列\"}");


$1e4cf1adc86485a4$exports = {
    "ar-AE": $ba963946b617577b$exports,
    "bg-BG": $0cb334bb6e8d07d8$exports,
    "cs-CZ": $aec8c78d7274b6a4$exports,
    "da-DK": $3bc38304447bb901$exports,
    "de-DE": $be6d9b71fc9c1dfe$exports,
    "el-GR": $427a7707b688aa93$exports,
    "en-US": $a117a3d0b92f4a8d$exports,
    "es-ES": $1ec50929e8f8745a$exports,
    "et-EE": $04c9bc86e4ceca07$exports,
    "fi-FI": $010ca6b9b2f19b09$exports,
    "fr-FR": $49bfefe786c10a91$exports,
    "he-IL": $44694deeae38f699$exports,
    "hr-HR": $c055581e6d1aa56f$exports,
    "hu-HU": $bd0d4a5cfb774274$exports,
    "it-IT": $1bb5f6646da0a534$exports,
    "ja-JP": $18edb4ee7c07a10c$exports,
    "ko-KR": $56c243691c23d2d2$exports,
    "lt-LT": $18b92ed4ea9d1bdf$exports,
    "lv-LV": $ef4aad770ef0e5c6$exports,
    "nb-NO": $60d183d7eba0e7d4$exports,
    "nl-NL": $2d68ab93b4ecd31b$exports,
    "pl-PL": $f16438fbc7d0ea25$exports,
    "pt-BR": $b4d3cd338ef6bf9e$exports,
    "pt-PT": $96fd1db7d93c32c9$exports,
    "ro-RO": $7e4dac09e218cb36$exports,
    "ru-RU": $589320e77e418bc3$exports,
    "sk-SK": $1fffc74ec0bfd6c5$exports,
    "sl-SI": $143864617f820ef6$exports,
    "sr-SP": $6fa258f0ee2fc112$exports,
    "sv-SE": $8a9ee28a4da83dc9$exports,
    "tr-TR": $dbb3337e21069b99$exports,
    "uk-UA": $b3f0d5387ef77caa$exports,
    "zh-CN": $340004c2b0826130$exports,
    "zh-TW": $0e01adb185bc0668$exports
};



function $b7dde658210763bf$export$8cefe241bd876ca0(props) {
    let { 'aria-label': ariaLabel , ...otherProps } = props;
    let formatMessage = $jobD6$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($1e4cf1adc86485a4$exports)));
    return {
        navProps: {
            ...$jobD6$reactariautils.filterDOMProps(otherProps, {
                labelable: true
            }),
            'aria-label': ariaLabel || formatMessage('breadcrumbs')
        }
    };
}


$parcel$exportWildcard(module.exports, $bcad9b1de2379fdd$exports);
$parcel$exportWildcard(module.exports, $b7dde658210763bf$exports);


//# sourceMappingURL=main.js.map
