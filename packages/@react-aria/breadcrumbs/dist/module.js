import {useLink as $kFOo7$useLink} from "@react-aria/link";
import {filterDOMProps as $kFOo7$filterDOMProps} from "@react-aria/utils";
import {useMessageFormatter as $kFOo7$useMessageFormatter} from "@react-aria/i18n";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $d60f5b183d83da74$exports = {};

$parcel$export($d60f5b183d83da74$exports, "useBreadcrumbItem", () => $d60f5b183d83da74$export$452b38fce62c9384);

function $d60f5b183d83da74$export$452b38fce62c9384(props, ref) {
    let { isCurrent: isCurrent , isDisabled: isDisabled , 'aria-current': ariaCurrent , elementType: elementType = 'a' , ...otherProps } = props;
    let { linkProps: linkProps  } = $kFOo7$useLink({
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


var $d404671b20f3f5f1$exports = {};

$parcel$export($d404671b20f3f5f1$exports, "useBreadcrumbs", () => $d404671b20f3f5f1$export$8cefe241bd876ca0);

var $f3a9b8f7edf9b458$exports = {};
var $cd872b4396f49bc7$exports = {};
$cd872b4396f49bc7$exports = JSON.parse("{\"breadcrumbs\":\"عناصر الواجهة\"}");


var $e6af7aee9a7611a1$exports = {};
$e6af7aee9a7611a1$exports = JSON.parse("{\"breadcrumbs\":\"Трохи хляб\"}");


var $c6233945774d3389$exports = {};
$c6233945774d3389$exports = JSON.parse("{\"breadcrumbs\":\"Popis cesty\"}");


var $09ec94a846962d3e$exports = {};
$09ec94a846962d3e$exports = JSON.parse("{\"breadcrumbs\":\"Brødkrummer\"}");


var $598fc75a43391d24$exports = {};
$598fc75a43391d24$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $7f815880ec8ac972$exports = {};
$7f815880ec8ac972$exports = JSON.parse("{\"breadcrumbs\":\"Πλοηγήσεις breadcrumb\"}");


var $5f1b6c24b99433e4$exports = {};
$5f1b6c24b99433e4$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $f060908b008e21cb$exports = {};
$f060908b008e21cb$exports = JSON.parse("{\"breadcrumbs\":\"Migas de pan\"}");


var $fa6b9accfc3943f3$exports = {};
$fa6b9accfc3943f3$exports = JSON.parse("{\"breadcrumbs\":\"Lingiread\"}");


var $f87107d7d6f2497c$exports = {};
$f87107d7d6f2497c$exports = JSON.parse("{\"breadcrumbs\":\"Navigointilinkit\"}");


var $973c17a4cd96c98d$exports = {};
$973c17a4cd96c98d$exports = JSON.parse("{\"breadcrumbs\":\"Chemin de navigation\"}");


var $17b6d1bc80f9c901$exports = {};
$17b6d1bc80f9c901$exports = JSON.parse("{\"breadcrumbs\":\"שבילי ניווט\"}");


var $cb5dbd210b873ef6$exports = {};
$cb5dbd210b873ef6$exports = JSON.parse("{\"breadcrumbs\":\"Navigacijski putovi\"}");


var $ac98e8b30fa0596a$exports = {};
$ac98e8b30fa0596a$exports = JSON.parse("{\"breadcrumbs\":\"Morzsamenü\"}");


var $db756e0533093293$exports = {};
$db756e0533093293$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumb\"}");


var $1c80219d995cd821$exports = {};
$1c80219d995cd821$exports = JSON.parse("{\"breadcrumbs\":\"パンくずリスト\"}");


var $eed9be55f4ca239e$exports = {};
$eed9be55f4ca239e$exports = JSON.parse("{\"breadcrumbs\":\"탐색 표시\"}");


var $431ad136947647c8$exports = {};
$431ad136947647c8$exports = JSON.parse("{\"breadcrumbs\":\"Naršymo kelias\"}");


var $267e9dfee1a0945f$exports = {};
$267e9dfee1a0945f$exports = JSON.parse("{\"breadcrumbs\":\"Atpakaļceļi\"}");


var $cf0179d5210103f4$exports = {};
$cf0179d5210103f4$exports = JSON.parse("{\"breadcrumbs\":\"Navigasjonsstier\"}");


var $6a4b794b96e87a73$exports = {};
$6a4b794b96e87a73$exports = JSON.parse("{\"breadcrumbs\":\"Broodkruimels\"}");


var $09bd307f11aff05b$exports = {};
$09bd307f11aff05b$exports = JSON.parse("{\"breadcrumbs\":\"Struktura nawigacyjna\"}");


var $85602110d962f5ff$exports = {};
$85602110d962f5ff$exports = JSON.parse("{\"breadcrumbs\":\"Caminho detalhado\"}");


var $6acd5e85ff191d0d$exports = {};
$6acd5e85ff191d0d$exports = JSON.parse("{\"breadcrumbs\":\"Categorias\"}");


var $f53a91009c18a507$exports = {};
$f53a91009c18a507$exports = JSON.parse("{\"breadcrumbs\":\"Miez de pâine\"}");


var $e9bad7a34cb3c0ca$exports = {};
$e9bad7a34cb3c0ca$exports = JSON.parse("{\"breadcrumbs\":\"Навигация\"}");


var $9f922504ed5bfeda$exports = {};
$9f922504ed5bfeda$exports = JSON.parse("{\"breadcrumbs\":\"Navigačné prvky Breadcrumbs\"}");


var $60ad7eab7e96a7e2$exports = {};
$60ad7eab7e96a7e2$exports = JSON.parse("{\"breadcrumbs\":\"Drobtine\"}");


var $32c4499843a53481$exports = {};
$32c4499843a53481$exports = JSON.parse("{\"breadcrumbs\":\"Putanje navigacije\"}");


var $09b6b4332e376e07$exports = {};
$09b6b4332e376e07$exports = JSON.parse("{\"breadcrumbs\":\"Sökvägar\"}");


var $dc7c12197b517434$exports = {};
$dc7c12197b517434$exports = JSON.parse("{\"breadcrumbs\":\"İçerik haritaları\"}");


var $cffb1ed487612916$exports = {};
$cffb1ed487612916$exports = JSON.parse("{\"breadcrumbs\":\"Навігаційна стежка\"}");


var $ee0552b562b9c5e5$exports = {};
$ee0552b562b9c5e5$exports = JSON.parse("{\"breadcrumbs\":\"导航栏\"}");


var $f1adcd3aa8ce980f$exports = {};
$f1adcd3aa8ce980f$exports = JSON.parse("{\"breadcrumbs\":\"導覽列\"}");


$f3a9b8f7edf9b458$exports = {
    "ar-AE": $cd872b4396f49bc7$exports,
    "bg-BG": $e6af7aee9a7611a1$exports,
    "cs-CZ": $c6233945774d3389$exports,
    "da-DK": $09ec94a846962d3e$exports,
    "de-DE": $598fc75a43391d24$exports,
    "el-GR": $7f815880ec8ac972$exports,
    "en-US": $5f1b6c24b99433e4$exports,
    "es-ES": $f060908b008e21cb$exports,
    "et-EE": $fa6b9accfc3943f3$exports,
    "fi-FI": $f87107d7d6f2497c$exports,
    "fr-FR": $973c17a4cd96c98d$exports,
    "he-IL": $17b6d1bc80f9c901$exports,
    "hr-HR": $cb5dbd210b873ef6$exports,
    "hu-HU": $ac98e8b30fa0596a$exports,
    "it-IT": $db756e0533093293$exports,
    "ja-JP": $1c80219d995cd821$exports,
    "ko-KR": $eed9be55f4ca239e$exports,
    "lt-LT": $431ad136947647c8$exports,
    "lv-LV": $267e9dfee1a0945f$exports,
    "nb-NO": $cf0179d5210103f4$exports,
    "nl-NL": $6a4b794b96e87a73$exports,
    "pl-PL": $09bd307f11aff05b$exports,
    "pt-BR": $85602110d962f5ff$exports,
    "pt-PT": $6acd5e85ff191d0d$exports,
    "ro-RO": $f53a91009c18a507$exports,
    "ru-RU": $e9bad7a34cb3c0ca$exports,
    "sk-SK": $9f922504ed5bfeda$exports,
    "sl-SI": $60ad7eab7e96a7e2$exports,
    "sr-SP": $32c4499843a53481$exports,
    "sv-SE": $09b6b4332e376e07$exports,
    "tr-TR": $dc7c12197b517434$exports,
    "uk-UA": $cffb1ed487612916$exports,
    "zh-CN": $ee0552b562b9c5e5$exports,
    "zh-TW": $f1adcd3aa8ce980f$exports
};



function $d404671b20f3f5f1$export$8cefe241bd876ca0(props) {
    let { 'aria-label': ariaLabel , ...otherProps } = props;
    let formatMessage = $kFOo7$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($f3a9b8f7edf9b458$exports)));
    return {
        navProps: {
            ...$kFOo7$filterDOMProps(otherProps, {
                labelable: true
            }),
            'aria-label': ariaLabel || formatMessage('breadcrumbs')
        }
    };
}




export {$d60f5b183d83da74$export$452b38fce62c9384 as useBreadcrumbItem, $d404671b20f3f5f1$export$8cefe241bd876ca0 as useBreadcrumbs};
//# sourceMappingURL=module.js.map
