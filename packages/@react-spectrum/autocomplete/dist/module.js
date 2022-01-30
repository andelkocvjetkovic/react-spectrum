import "./main.css";
import {Item as $37102f496db7391d$re_export$Item, Section as $37102f496db7391d$re_export$Section} from "@react-stately/collections";
import {useIsMobileDevice as $kwVxT$useIsMobileDevice, useUnwrapDOMRef as $kwVxT$useUnwrapDOMRef, useFocusableRef as $kwVxT$useFocusableRef, useResizeObserver as $kwVxT$useResizeObserver, classNames as $kwVxT$classNames} from "@react-spectrum/utils";
import {ClearButton as $kwVxT$ClearButton} from "@react-spectrum/button";
import {useOverlayPosition as $kwVxT$useOverlayPosition, DismissButton as $kwVxT$DismissButton, useOverlayTrigger as $kwVxT$useOverlayTrigger} from "@react-aria/overlays";
import {Field as $kwVxT$Field} from "@react-spectrum/label";
import {FocusRing as $kwVxT$FocusRing, focusSafely as $kwVxT$focusSafely, FocusScope as $kwVxT$FocusScope} from "@react-aria/focus";
import {useListBoxLayout as $kwVxT$useListBoxLayout, ListBoxBase as $kwVxT$ListBoxBase} from "@react-spectrum/listbox";
import $kwVxT$spectrumiconsuiMagnifier from "@spectrum-icons/ui/Magnifier";
import {Popover as $kwVxT$Popover, Tray as $kwVxT$Tray} from "@react-spectrum/overlays";
import {ProgressCircle as $kwVxT$ProgressCircle} from "@react-spectrum/progress";
import $kwVxT$react, {useRef as $kwVxT$useRef, useState as $kwVxT$useState, useCallback as $kwVxT$useCallback, useEffect as $kwVxT$useEffect, forwardRef as $kwVxT$forwardRef} from "react";
import {TextFieldBase as $kwVxT$TextFieldBase} from "@react-spectrum/textfield";
import {useComboBoxState as $kwVxT$useComboBoxState} from "@react-stately/combobox";
import {useMessageFormatter as $kwVxT$useMessageFormatter, useFilter as $kwVxT$useFilter} from "@react-aria/i18n";
import {useHover as $kwVxT$useHover, setInteractionModality as $kwVxT$setInteractionModality} from "@react-aria/interactions";
import {useLayoutEffect as $kwVxT$useLayoutEffect, mergeProps as $kwVxT$mergeProps, useId as $kwVxT$useId} from "@react-aria/utils";
import {useProviderProps as $kwVxT$useProviderProps, useProvider as $kwVxT$useProvider} from "@react-spectrum/provider";
import {useSearchAutocomplete as $kwVxT$useSearchAutocomplete} from "@react-aria/autocomplete";
import $kwVxT$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $kwVxT$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {useButton as $kwVxT$useButton} from "@react-aria/button";
import {useDialog as $kwVxT$useDialog} from "@react-aria/dialog";
import {useLabel as $kwVxT$useLabel} from "@react-aria/label";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $e4c979564f73d360$exports = {};

$parcel$export($e4c979564f73d360$exports, "SearchAutocomplete", () => $e4c979564f73d360$export$dd65332a5b19fa63);





var $18d8aa33fc728576$exports = {};
var $5afe678c256d9d26$exports = {};
$5afe678c256d9d26$exports = JSON.parse("{\"clear\":\"مسح\",\"invalid\":\"(غير صالح)\",\"loading\":\"جارٍ التحميل...\",\"noResults\":\"لا توجد نتائج\"}");


var $119485cafa7bf372$exports = {};
$119485cafa7bf372$exports = JSON.parse("{\"clear\":\"Изчисти\",\"invalid\":\"(невалиден)\",\"loading\":\"Зареждане...\",\"noResults\":\"Няма резултати\"}");


var $242770200b49ec0c$exports = {};
$242770200b49ec0c$exports = JSON.parse("{\"clear\":\"Vymazat\",\"invalid\":\"(neplatné)\",\"loading\":\"Načítání...\",\"noResults\":\"Žádné výsledky\"}");


var $d4fbdb4c61d4e831$exports = {};
$d4fbdb4c61d4e831$exports = JSON.parse("{\"clear\":\"Ryd\",\"invalid\":\"(ugyldig)\",\"loading\":\"Indlæser ...\",\"noResults\":\"Ingen resultater\"}");


var $7e183fe78ef4c72f$exports = {};
$7e183fe78ef4c72f$exports = JSON.parse("{\"clear\":\"Löschen\",\"invalid\":\"(ungültig)\",\"loading\":\"Wird geladen...\",\"noResults\":\"Keine Ergebnisse\"}");


var $a248c09d95c44c64$exports = {};
$a248c09d95c44c64$exports = JSON.parse("{\"clear\":\"Καθαρισμός\",\"invalid\":\"(δεν ισχύει)\",\"loading\":\"Φόρτωση...\",\"noResults\":\"Χωρίς αποτέλεσμα\"}");


var $70e622e2f96221d8$exports = {};
$70e622e2f96221d8$exports = JSON.parse("{\"loading\":\"Loading...\",\"noResults\":\"No results\",\"clear\":\"Clear\",\"invalid\":\"(invalid)\"}");


var $8ee5cbaf5567a113$exports = {};
$8ee5cbaf5567a113$exports = JSON.parse("{\"clear\":\"Borrar\",\"invalid\":\"(no válido)\",\"loading\":\"Cargando...\",\"noResults\":\"Sin resultados\"}");


var $fb862cf84db4836f$exports = {};
$fb862cf84db4836f$exports = JSON.parse("{\"clear\":\"Puhasta\",\"invalid\":\"(kehtetu)\",\"loading\":\"Laadimine...\",\"noResults\":\"Tulemusi pole\"}");


var $07dabc0d5bb75553$exports = {};
$07dabc0d5bb75553$exports = JSON.parse("{\"clear\":\"Kirkas\",\"invalid\":\"(epäkelpo)\",\"loading\":\"Ladataan...\",\"noResults\":\"Ei tuloksia\"}");


var $4dc35c258dbd7efe$exports = {};
$4dc35c258dbd7efe$exports = JSON.parse("{\"clear\":\"Effacer\",\"invalid\":\"(non valide)\",\"loading\":\"Chargement en cours...\",\"noResults\":\"Aucun résultat\"}");


var $54242fb3eeba4f8c$exports = {};
$54242fb3eeba4f8c$exports = JSON.parse("{\"clear\":\"נקי\",\"invalid\":\"(לא חוקי)\",\"loading\":\"טוען...\",\"noResults\":\"אין תוצאות\"}");


var $e6e69f58f14cbe8b$exports = {};
$e6e69f58f14cbe8b$exports = JSON.parse("{\"clear\":\"Izbriši\",\"invalid\":\"(nevažeće)\",\"loading\":\"Učitavam...\",\"noResults\":\"Nema rezultata\"}");


var $1d43e772ae91d857$exports = {};
$1d43e772ae91d857$exports = JSON.parse("{\"clear\":\"Törlés\",\"invalid\":\"(érvénytelen)\",\"loading\":\"Betöltés folyamatban…\",\"noResults\":\"Nincsenek találatok\"}");


var $6c519178aaef2613$exports = {};
$6c519178aaef2613$exports = JSON.parse("{\"clear\":\"Cancella\",\"invalid\":\"(non valido)\",\"loading\":\"Caricamento in corso...\",\"noResults\":\"Nessun risultato\"}");


var $10cce5c019ee08bf$exports = {};
$10cce5c019ee08bf$exports = JSON.parse("{\"clear\":\"クリア\",\"invalid\":\"(無効)\",\"loading\":\"読み込み中...\",\"noResults\":\"結果なし\"}");


var $2270dafe2300f8e3$exports = {};
$2270dafe2300f8e3$exports = JSON.parse("{\"clear\":\"지우기\",\"invalid\":\"(유효하지 않음)\",\"loading\":\"로드 중...\",\"noResults\":\"결과 없음\"}");


var $075e537813eecc8c$exports = {};
$075e537813eecc8c$exports = JSON.parse("{\"clear\":\"Skaidrus\",\"invalid\":\"(netinkama)\",\"loading\":\"Įkeliama...\",\"noResults\":\"Be rezultatų\"}");


var $438e24042406f401$exports = {};
$438e24042406f401$exports = JSON.parse("{\"clear\":\"Notīrīt\",\"invalid\":\"(nederīgs)\",\"loading\":\"Notiek ielāde...\",\"noResults\":\"Nav rezultātu\"}");


var $e2292e271f11155f$exports = {};
$e2292e271f11155f$exports = JSON.parse("{\"clear\":\"Tøm\",\"invalid\":\"(ugyldig)\",\"loading\":\"Laster inn ...\",\"noResults\":\"Ingen resultater\"}");


var $b4a4a58410733a94$exports = {};
$b4a4a58410733a94$exports = JSON.parse("{\"clear\":\"Helder\",\"invalid\":\"(ongeldig)\",\"loading\":\"Laden...\",\"noResults\":\"Geen resultaten\"}");


var $253ce579240dfd45$exports = {};
$253ce579240dfd45$exports = JSON.parse("{\"clear\":\"Wyczyść\",\"invalid\":\"(nieprawidłowy)\",\"loading\":\"Trwa ładowanie...\",\"noResults\":\"Brak wyników\"}");


var $624d6c07c838ff04$exports = {};
$624d6c07c838ff04$exports = JSON.parse("{\"clear\":\"Limpar\",\"invalid\":\"(inválido)\",\"loading\":\"Carregando...\",\"noResults\":\"Nenhum resultado\"}");


var $bca7cc056e821935$exports = {};
$bca7cc056e821935$exports = JSON.parse("{\"clear\":\"Limpar\",\"invalid\":\"(inválido)\",\"loading\":\"A carregar...\",\"noResults\":\"Sem resultados\"}");


var $e06d8366eb91ec38$exports = {};
$e06d8366eb91ec38$exports = JSON.parse("{\"clear\":\"Golire\",\"invalid\":\"(nevalid)\",\"loading\":\"Se încarcă...\",\"noResults\":\"Niciun rezultat\"}");


var $dc06b36f742eea3f$exports = {};
$dc06b36f742eea3f$exports = JSON.parse("{\"clear\":\"Очистить\",\"invalid\":\"(недействительно)\",\"loading\":\"Загрузка...\",\"noResults\":\"Результаты отсутствуют\"}");


var $82cef8cc1fce41a8$exports = {};
$82cef8cc1fce41a8$exports = JSON.parse("{\"clear\":\"Vymazať\",\"invalid\":\"(neplatné)\",\"loading\":\"Načítava sa...\",\"noResults\":\"Žiadne výsledky\"}");


var $b14ff835aff241c3$exports = {};
$b14ff835aff241c3$exports = JSON.parse("{\"clear\":\"Jasen\",\"invalid\":\"(neveljavno)\",\"loading\":\"Nalaganje...\",\"noResults\":\"Ni rezultatov\"}");


var $ad22a0228721d76a$exports = {};
$ad22a0228721d76a$exports = JSON.parse("{\"clear\":\"Izbriši\",\"invalid\":\"(nevažeće)\",\"loading\":\"Učitavam...\",\"noResults\":\"Nema rezultata\"}");


var $ba4643647f1f94f9$exports = {};
$ba4643647f1f94f9$exports = JSON.parse("{\"clear\":\"Rensa\",\"invalid\":\"(ogiltigt)\",\"loading\":\"Läser in...\",\"noResults\":\"Inga resultat\"}");


var $3ead23c36ff6826a$exports = {};
$3ead23c36ff6826a$exports = JSON.parse("{\"clear\":\"Temizle\",\"invalid\":\"(geçersiz)\",\"loading\":\"Yükleniyor...\",\"noResults\":\"Sonuç yok\"}");


var $14f3ad8320f467ec$exports = {};
$14f3ad8320f467ec$exports = JSON.parse("{\"clear\":\"Очистити\",\"invalid\":\"(недійсне)\",\"loading\":\"Завантаження...\",\"noResults\":\"Результатів немає\"}");


var $da715ff46a04d627$exports = {};
$da715ff46a04d627$exports = JSON.parse("{\"clear\":\"透明\",\"invalid\":\"（无效）\",\"loading\":\"正在加载...\",\"noResults\":\"无结果\"}");


var $28f7818769eb3757$exports = {};
$28f7818769eb3757$exports = JSON.parse("{\"clear\":\"清除\",\"invalid\":\"(無效)\",\"loading\":\"正在載入...\",\"noResults\":\"無任何結果\"}");


$18d8aa33fc728576$exports = {
    "ar-AE": $5afe678c256d9d26$exports,
    "bg-BG": $119485cafa7bf372$exports,
    "cs-CZ": $242770200b49ec0c$exports,
    "da-DK": $d4fbdb4c61d4e831$exports,
    "de-DE": $7e183fe78ef4c72f$exports,
    "el-GR": $a248c09d95c44c64$exports,
    "en-US": $70e622e2f96221d8$exports,
    "es-ES": $8ee5cbaf5567a113$exports,
    "et-EE": $fb862cf84db4836f$exports,
    "fi-FI": $07dabc0d5bb75553$exports,
    "fr-FR": $4dc35c258dbd7efe$exports,
    "he-IL": $54242fb3eeba4f8c$exports,
    "hr-HR": $e6e69f58f14cbe8b$exports,
    "hu-HU": $1d43e772ae91d857$exports,
    "it-IT": $6c519178aaef2613$exports,
    "ja-JP": $10cce5c019ee08bf$exports,
    "ko-KR": $2270dafe2300f8e3$exports,
    "lt-LT": $075e537813eecc8c$exports,
    "lv-LV": $438e24042406f401$exports,
    "nb-NO": $e2292e271f11155f$exports,
    "nl-NL": $b4a4a58410733a94$exports,
    "pl-PL": $253ce579240dfd45$exports,
    "pt-BR": $624d6c07c838ff04$exports,
    "pt-PT": $bca7cc056e821935$exports,
    "ro-RO": $e06d8366eb91ec38$exports,
    "ru-RU": $dc06b36f742eea3f$exports,
    "sk-SK": $82cef8cc1fce41a8$exports,
    "sl-SI": $b14ff835aff241c3$exports,
    "sr-SP": $ad22a0228721d76a$exports,
    "sv-SE": $ba4643647f1f94f9$exports,
    "tr-TR": $3ead23c36ff6826a$exports,
    "uk-UA": $14f3ad8320f467ec$exports,
    "zh-CN": $da715ff46a04d627$exports,
    "zh-TW": $28f7818769eb3757$exports
};



















var $980ffbda28106d6b$exports = {};

$parcel$export($980ffbda28106d6b$exports, "no-results", () => $980ffbda28106d6b$export$5b1939da91820a47, (v) => $980ffbda28106d6b$export$5b1939da91820a47 = v);
$parcel$export($980ffbda28106d6b$exports, "mobile-searchautocomplete", () => $980ffbda28106d6b$export$3117ea626976198e, (v) => $980ffbda28106d6b$export$3117ea626976198e = v);
$parcel$export($980ffbda28106d6b$exports, "mobile-input", () => $980ffbda28106d6b$export$bededa1c0ac414c5, (v) => $980ffbda28106d6b$export$bededa1c0ac414c5 = v);
$parcel$export($980ffbda28106d6b$exports, "mobile-value", () => $980ffbda28106d6b$export$e32ca2bb9f795355, (v) => $980ffbda28106d6b$export$e32ca2bb9f795355 = v);
$parcel$export($980ffbda28106d6b$exports, "tray-dialog", () => $980ffbda28106d6b$export$3d4198eea215577a, (v) => $980ffbda28106d6b$export$3d4198eea215577a = v);
$parcel$export($980ffbda28106d6b$exports, "tray-textfield", () => $980ffbda28106d6b$export$73cc97e04e76a6d0, (v) => $980ffbda28106d6b$export$73cc97e04e76a6d0 = v);
$parcel$export($980ffbda28106d6b$exports, "has-label", () => $980ffbda28106d6b$export$b8e014ff9ad5e5e2, (v) => $980ffbda28106d6b$export$b8e014ff9ad5e5e2 = v);
$parcel$export($980ffbda28106d6b$exports, "tray-textfield-input", () => $980ffbda28106d6b$export$feb70b7bc717e2b8, (v) => $980ffbda28106d6b$export$feb70b7bc717e2b8 = v);
$parcel$export($980ffbda28106d6b$exports, "tray-listbox", () => $980ffbda28106d6b$export$7281dc54d38d4bed, (v) => $980ffbda28106d6b$export$7281dc54d38d4bed = v);
var $980ffbda28106d6b$export$5b1939da91820a47;
var $980ffbda28106d6b$export$3117ea626976198e;
var $980ffbda28106d6b$export$bededa1c0ac414c5;
var $980ffbda28106d6b$export$e32ca2bb9f795355;
var $980ffbda28106d6b$export$3d4198eea215577a;
var $980ffbda28106d6b$export$73cc97e04e76a6d0;
var $980ffbda28106d6b$export$b8e014ff9ad5e5e2;
var $980ffbda28106d6b$export$feb70b7bc717e2b8;
var $980ffbda28106d6b$export$7281dc54d38d4bed;
$980ffbda28106d6b$export$5b1939da91820a47 = "_no-results_83bf62";
$980ffbda28106d6b$export$3117ea626976198e = "_mobile-searchautocomplete_83bf62";
$980ffbda28106d6b$export$bededa1c0ac414c5 = "_mobile-input_83bf62";
$980ffbda28106d6b$export$e32ca2bb9f795355 = "_mobile-value_83bf62";
$980ffbda28106d6b$export$3d4198eea215577a = "_tray-dialog_83bf62";
$980ffbda28106d6b$export$73cc97e04e76a6d0 = "_tray-textfield_83bf62";
$980ffbda28106d6b$export$b8e014ff9ad5e5e2 = "_has-label_83bf62";
$980ffbda28106d6b$export$feb70b7bc717e2b8 = "_tray-textfield-input_83bf62";
$980ffbda28106d6b$export$7281dc54d38d4bed = "_tray-listbox_83bf62";


var $f3224a2f471fe717$exports = {};

$parcel$export($f3224a2f471fe717$exports, "spectrum-Search", () => $f3224a2f471fe717$export$713911d754e1e4ae, (v) => $f3224a2f471fe717$export$713911d754e1e4ae = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-ClearButton", () => $f3224a2f471fe717$export$b752ce409e5660c, (v) => $f3224a2f471fe717$export$b752ce409e5660c = v);
$parcel$export($f3224a2f471fe717$exports, "is-quiet", () => $f3224a2f471fe717$export$6d5c5433f0da4241, (v) => $f3224a2f471fe717$export$6d5c5433f0da4241 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search-input", () => $f3224a2f471fe717$export$50e02603f2d97ae1, (v) => $f3224a2f471fe717$export$50e02603f2d97ae1 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search--invalid", () => $f3224a2f471fe717$export$77a6151a0b46a6a3, (v) => $f3224a2f471fe717$export$77a6151a0b46a6a3 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search--valid", () => $f3224a2f471fe717$export$aa81e3ab40f37567, (v) => $f3224a2f471fe717$export$aa81e3ab40f37567 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search--loadable", () => $f3224a2f471fe717$export$9c74d64afae3b2d4, (v) => $f3224a2f471fe717$export$9c74d64afae3b2d4 = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search-circleLoader", () => $f3224a2f471fe717$export$70ae4353602451dc, (v) => $f3224a2f471fe717$export$70ae4353602451dc = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Search-validationIcon", () => $f3224a2f471fe717$export$938f0981825eae6e, (v) => $f3224a2f471fe717$export$938f0981825eae6e = v);
$parcel$export($f3224a2f471fe717$exports, "spectrum-Textfield", () => $f3224a2f471fe717$export$2c8a10299d8b3418, (v) => $f3224a2f471fe717$export$2c8a10299d8b3418 = v);
var $f3224a2f471fe717$export$713911d754e1e4ae;
var $f3224a2f471fe717$export$b752ce409e5660c;
var $f3224a2f471fe717$export$6d5c5433f0da4241;
var $f3224a2f471fe717$export$50e02603f2d97ae1;
var $f3224a2f471fe717$export$77a6151a0b46a6a3;
var $f3224a2f471fe717$export$aa81e3ab40f37567;
var $f3224a2f471fe717$export$9c74d64afae3b2d4;
var $f3224a2f471fe717$export$70ae4353602451dc;
var $f3224a2f471fe717$export$938f0981825eae6e;
var $f3224a2f471fe717$export$2c8a10299d8b3418;
$f3224a2f471fe717$export$713911d754e1e4ae = "_spectrum-Search_d3c0f3";
$f3224a2f471fe717$export$b752ce409e5660c = "_spectrum-ClearButton_d3c0f3";
$f3224a2f471fe717$export$6d5c5433f0da4241 = "_is-quiet_d3c0f3";
$f3224a2f471fe717$export$50e02603f2d97ae1 = "_spectrum-Search-input_d3c0f3";
$f3224a2f471fe717$export$77a6151a0b46a6a3 = "_spectrum-Search--invalid_d3c0f3";
$f3224a2f471fe717$export$aa81e3ab40f37567 = "_spectrum-Search--valid_d3c0f3";
$f3224a2f471fe717$export$9c74d64afae3b2d4 = "_spectrum-Search--loadable_d3c0f3";
$f3224a2f471fe717$export$70ae4353602451dc = "_spectrum-Search-circleLoader_d3c0f3";
$f3224a2f471fe717$export$938f0981825eae6e = "_spectrum-Search-validationIcon_d3c0f3";
$f3224a2f471fe717$export$2c8a10299d8b3418 = "_spectrum-Textfield_d3c0f3";



var $5114045f2eace5e5$exports = {};

$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup", () => $5114045f2eace5e5$export$5be359c1227eedcb, (v) => $5114045f2eace5e5$export$5be359c1227eedcb = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-FieldButton", () => $5114045f2eace5e5$export$a024c99ecf6b5741, (v) => $5114045f2eace5e5$export$a024c99ecf6b5741 = v);
$parcel$export($5114045f2eace5e5$exports, "is-disabled", () => $5114045f2eace5e5$export$d35bc1e505d1ebbf, (v) => $5114045f2eace5e5$export$d35bc1e505d1ebbf = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup--invalid", () => $5114045f2eace5e5$export$3b48509739a9cda0, (v) => $5114045f2eace5e5$export$3b48509739a9cda0 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup--quiet", () => $5114045f2eace5e5$export$ebf265ffc062029b, (v) => $5114045f2eace5e5$export$ebf265ffc062029b = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-field", () => $5114045f2eace5e5$export$ea77459595e26bec, (v) => $5114045f2eace5e5$export$ea77459595e26bec = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-input-validationIcon", () => $5114045f2eace5e5$export$f7ab13ee113f4884, (v) => $5114045f2eace5e5$export$f7ab13ee113f4884 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-input-circleLoader", () => $5114045f2eace5e5$export$dcc9e00cdad967fa, (v) => $5114045f2eace5e5$export$dcc9e00cdad967fa = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-input", () => $5114045f2eace5e5$export$92706f5c6fe4074, (v) => $5114045f2eace5e5$export$92706f5c6fe4074 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-icon", () => $5114045f2eace5e5$export$b91b6af799fd93a8, (v) => $5114045f2eace5e5$export$b91b6af799fd93a8 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-popover--quiet", () => $5114045f2eace5e5$export$5e116178f9b1556a, (v) => $5114045f2eace5e5$export$5e116178f9b1556a = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker--range", () => $5114045f2eace5e5$export$1d8b0b29e11d7cd, (v) => $5114045f2eace5e5$export$1d8b0b29e11d7cd = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker--datetimeRange", () => $5114045f2eace5e5$export$58dd7cd23c92699f, (v) => $5114045f2eace5e5$export$58dd7cd23c92699f = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker-startField", () => $5114045f2eace5e5$export$80f9c838a8406469, (v) => $5114045f2eace5e5$export$80f9c838a8406469 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker-endField", () => $5114045f2eace5e5$export$1c72fb41fa4f21ee, (v) => $5114045f2eace5e5$export$1c72fb41fa4f21ee = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker--rangeDash", () => $5114045f2eace5e5$export$202113e883898dc, (v) => $5114045f2eace5e5$export$202113e883898dc = v);
$parcel$export($5114045f2eace5e5$exports, "is-focused", () => $5114045f2eace5e5$export$e7dc768d35940237, (v) => $5114045f2eace5e5$export$e7dc768d35940237 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker-focusRing", () => $5114045f2eace5e5$export$eb262b15b9261fde, (v) => $5114045f2eace5e5$export$eb262b15b9261fde = v);
$parcel$export($5114045f2eace5e5$exports, "is-hovered", () => $5114045f2eace5e5$export$b8813cd5d7824ce7, (v) => $5114045f2eace5e5$export$b8813cd5d7824ce7 = v);
$parcel$export($5114045f2eace5e5$exports, "focus-ring", () => $5114045f2eace5e5$export$f39a09f249340e2a, (v) => $5114045f2eace5e5$export$f39a09f249340e2a = v);
$parcel$export($5114045f2eace5e5$exports, "is-selected", () => $5114045f2eace5e5$export$1e0fb04f31d3c22a, (v) => $5114045f2eace5e5$export$1e0fb04f31d3c22a = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-FieldButton--invalid", () => $5114045f2eace5e5$export$c9f503f672e8a3c1, (v) => $5114045f2eace5e5$export$c9f503f672e8a3c1 = v);
var $5114045f2eace5e5$export$5be359c1227eedcb;
var $5114045f2eace5e5$export$a024c99ecf6b5741;
var $5114045f2eace5e5$export$d35bc1e505d1ebbf;
var $5114045f2eace5e5$export$3b48509739a9cda0;
var $5114045f2eace5e5$export$ebf265ffc062029b;
var $5114045f2eace5e5$export$ea77459595e26bec;
var $5114045f2eace5e5$export$f7ab13ee113f4884;
var $5114045f2eace5e5$export$dcc9e00cdad967fa;
var $5114045f2eace5e5$export$92706f5c6fe4074;
var $5114045f2eace5e5$export$b91b6af799fd93a8;
var $5114045f2eace5e5$export$5e116178f9b1556a;
var $5114045f2eace5e5$export$1d8b0b29e11d7cd;
var $5114045f2eace5e5$export$58dd7cd23c92699f;
var $5114045f2eace5e5$export$80f9c838a8406469;
var $5114045f2eace5e5$export$1c72fb41fa4f21ee;
var $5114045f2eace5e5$export$202113e883898dc;
var $5114045f2eace5e5$export$e7dc768d35940237;
var $5114045f2eace5e5$export$eb262b15b9261fde;
var $5114045f2eace5e5$export$b8813cd5d7824ce7;
var $5114045f2eace5e5$export$f39a09f249340e2a;
var $5114045f2eace5e5$export$1e0fb04f31d3c22a;
var $5114045f2eace5e5$export$c9f503f672e8a3c1;
$5114045f2eace5e5$export$5be359c1227eedcb = "_spectrum-InputGroup_a0942f";
$5114045f2eace5e5$export$a024c99ecf6b5741 = "_spectrum-FieldButton_a0942f";
$5114045f2eace5e5$export$d35bc1e505d1ebbf = "_is-disabled_a0942f";
$5114045f2eace5e5$export$3b48509739a9cda0 = "_spectrum-InputGroup--invalid_a0942f";
$5114045f2eace5e5$export$ebf265ffc062029b = "_spectrum-InputGroup--quiet_a0942f";
$5114045f2eace5e5$export$ea77459595e26bec = "_spectrum-InputGroup-field_a0942f";
$5114045f2eace5e5$export$f7ab13ee113f4884 = "_spectrum-InputGroup-input-validationIcon_a0942f";
$5114045f2eace5e5$export$dcc9e00cdad967fa = "_spectrum-InputGroup-input-circleLoader_a0942f";
$5114045f2eace5e5$export$92706f5c6fe4074 = "_spectrum-InputGroup-input_a0942f";
$5114045f2eace5e5$export$b91b6af799fd93a8 = "_spectrum-InputGroup-icon_a0942f";
$5114045f2eace5e5$export$5e116178f9b1556a = "_spectrum-InputGroup-popover--quiet_a0942f";
$5114045f2eace5e5$export$1d8b0b29e11d7cd = "_spectrum-Datepicker--range_a0942f";
$5114045f2eace5e5$export$58dd7cd23c92699f = "_spectrum-Datepicker--datetimeRange_a0942f";
$5114045f2eace5e5$export$80f9c838a8406469 = "_spectrum-Datepicker-startField_a0942f";
$5114045f2eace5e5$export$1c72fb41fa4f21ee = "_spectrum-Datepicker-endField_a0942f";
$5114045f2eace5e5$export$202113e883898dc = "_spectrum-Datepicker--rangeDash_a0942f";
$5114045f2eace5e5$export$e7dc768d35940237 = "_is-focused_a0942f";
$5114045f2eace5e5$export$eb262b15b9261fde = "_spectrum-Datepicker-focusRing_a0942f";
$5114045f2eace5e5$export$b8813cd5d7824ce7 = "_is-hovered_a0942f";
$5114045f2eace5e5$export$f39a09f249340e2a = "_focus-ring_a0942f";
$5114045f2eace5e5$export$1e0fb04f31d3c22a = "_is-selected_a0942f";
$5114045f2eace5e5$export$c9f503f672e8a3c1 = "_spectrum-FieldButton--invalid_a0942f";



var $e10bd19c72c588e6$exports = {};

$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-input", () => $e10bd19c72c588e6$export$1ac009feb2b0bd0c, (v) => $e10bd19c72c588e6$export$1ac009feb2b0bd0c = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield", () => $e10bd19c72c588e6$export$2c8a10299d8b3418, (v) => $e10bd19c72c588e6$export$2c8a10299d8b3418 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--quiet", () => $e10bd19c72c588e6$export$bffd5e3d61a81737, (v) => $e10bd19c72c588e6$export$bffd5e3d61a81737 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--multiline", () => $e10bd19c72c588e6$export$9699f1c538a448a0, (v) => $e10bd19c72c588e6$export$9699f1c538a448a0 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-placeholder", () => $e10bd19c72c588e6$export$e5b2f5233e4e5194, (v) => $e10bd19c72c588e6$export$e5b2f5233e4e5194 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-hovered", () => $e10bd19c72c588e6$export$b8813cd5d7824ce7, (v) => $e10bd19c72c588e6$export$b8813cd5d7824ce7 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--valid", () => $e10bd19c72c588e6$export$c2abbc3f970170b7, (v) => $e10bd19c72c588e6$export$c2abbc3f970170b7 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--invalid", () => $e10bd19c72c588e6$export$58e50b10d30123df, (v) => $e10bd19c72c588e6$export$58e50b10d30123df = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--loadable", () => $e10bd19c72c588e6$export$14fd30fea6f1348c, (v) => $e10bd19c72c588e6$export$14fd30fea6f1348c = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-validationIcon", () => $e10bd19c72c588e6$export$cf0ead5b44db0da3, (v) => $e10bd19c72c588e6$export$cf0ead5b44db0da3 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-icon", () => $e10bd19c72c588e6$export$222d1ccd1870be1d, (v) => $e10bd19c72c588e6$export$222d1ccd1870be1d = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-inputIcon", () => $e10bd19c72c588e6$export$c1cdcaa5fe76a871, (v) => $e10bd19c72c588e6$export$c1cdcaa5fe76a871 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-circleLoader", () => $e10bd19c72c588e6$export$82a249fb4d6127, (v) => $e10bd19c72c588e6$export$82a249fb4d6127 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-focused", () => $e10bd19c72c588e6$export$e7dc768d35940237, (v) => $e10bd19c72c588e6$export$e7dc768d35940237 = v);
$parcel$export($e10bd19c72c588e6$exports, "focus-ring", () => $e10bd19c72c588e6$export$f39a09f249340e2a, (v) => $e10bd19c72c588e6$export$f39a09f249340e2a = v);
$parcel$export($e10bd19c72c588e6$exports, "is-disabled", () => $e10bd19c72c588e6$export$d35bc1e505d1ebbf, (v) => $e10bd19c72c588e6$export$d35bc1e505d1ebbf = v);
var $e10bd19c72c588e6$export$1ac009feb2b0bd0c;
var $e10bd19c72c588e6$export$2c8a10299d8b3418;
var $e10bd19c72c588e6$export$bffd5e3d61a81737;
var $e10bd19c72c588e6$export$9699f1c538a448a0;
var $e10bd19c72c588e6$export$e5b2f5233e4e5194;
var $e10bd19c72c588e6$export$b8813cd5d7824ce7;
var $e10bd19c72c588e6$export$c2abbc3f970170b7;
var $e10bd19c72c588e6$export$58e50b10d30123df;
var $e10bd19c72c588e6$export$14fd30fea6f1348c;
var $e10bd19c72c588e6$export$cf0ead5b44db0da3;
var $e10bd19c72c588e6$export$222d1ccd1870be1d;
var $e10bd19c72c588e6$export$c1cdcaa5fe76a871;
var $e10bd19c72c588e6$export$82a249fb4d6127;
var $e10bd19c72c588e6$export$e7dc768d35940237;
var $e10bd19c72c588e6$export$f39a09f249340e2a;
var $e10bd19c72c588e6$export$d35bc1e505d1ebbf;
$e10bd19c72c588e6$export$1ac009feb2b0bd0c = "_spectrum-Textfield-input_73bc77";
$e10bd19c72c588e6$export$2c8a10299d8b3418 = "_spectrum-Textfield_73bc77";
$e10bd19c72c588e6$export$bffd5e3d61a81737 = "_spectrum-Textfield--quiet_73bc77";
$e10bd19c72c588e6$export$9699f1c538a448a0 = "_spectrum-Textfield--multiline_73bc77";
$e10bd19c72c588e6$export$e5b2f5233e4e5194 = "_is-placeholder_73bc77";
$e10bd19c72c588e6$export$b8813cd5d7824ce7 = "_is-hovered_73bc77";
$e10bd19c72c588e6$export$c2abbc3f970170b7 = "_spectrum-Textfield--valid_73bc77";
$e10bd19c72c588e6$export$58e50b10d30123df = "_spectrum-Textfield--invalid_73bc77";
$e10bd19c72c588e6$export$14fd30fea6f1348c = "_spectrum-Textfield--loadable_73bc77";
$e10bd19c72c588e6$export$cf0ead5b44db0da3 = "_spectrum-Textfield-validationIcon_73bc77";
$e10bd19c72c588e6$export$222d1ccd1870be1d = "_spectrum-Textfield-icon_73bc77";
$e10bd19c72c588e6$export$c1cdcaa5fe76a871 = "_spectrum-Textfield-inputIcon_73bc77";
$e10bd19c72c588e6$export$82a249fb4d6127 = "_spectrum-Textfield-circleLoader_73bc77";
$e10bd19c72c588e6$export$e7dc768d35940237 = "_is-focused_73bc77";
$e10bd19c72c588e6$export$f39a09f249340e2a = "_focus-ring_73bc77";
$e10bd19c72c588e6$export$d35bc1e505d1ebbf = "_is-disabled_73bc77";











const $8e6a4aea4ee20b05$export$e7a90f7d6b078162 = /*#__PURE__*/ $kwVxT$react.forwardRef(function $8e6a4aea4ee20b05$export$e7a90f7d6b078162(props, ref) {
    props = $kwVxT$useProviderProps(props);
    let { isQuiet: isQuiet , isDisabled: isDisabled , validationState: validationState , isReadOnly: isReadOnly , onSubmit: onSubmit = ()=>{
    }  } = props;
    let { contains: contains  } = $kwVxT$useFilter({
        sensitivity: 'base'
    });
    let state = $kwVxT$useComboBoxState({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: true,
        // Needs to be false here otherwise we double up on commitSelection/commitCustomValue calls when
        // user taps on underlay (i.e. initial tap will call setFocused(false) -> commitSelection/commitCustomValue via onBlur,
        // then the closing of the tray will call setFocused(false) again due to cleanup effect)
        shouldCloseOnBlur: false,
        allowsCustomValue: true,
        onSelectionChange: (key)=>key !== null && onSubmit(null, key)
        ,
        selectedKey: undefined,
        defaultSelectedKey: undefined
    });
    let buttonRef = $kwVxT$useRef();
    let domRef = $kwVxT$useFocusableRef(ref, buttonRef);
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $kwVxT$useOverlayTrigger({
        type: 'listbox'
    }, state, buttonRef);
    let { labelProps: labelProps , fieldProps: fieldProps  } = $kwVxT$useLabel({
        ...props,
        labelElementType: 'span'
    });
    // Focus the button and show focus ring when clicking on the label
    labelProps.onClick = ()=>{
        if (!props.isDisabled) {
            buttonRef.current.focus();
            $kwVxT$setInteractionModality('keyboard');
        }
    };
    let onClose = ()=>state.commit()
    ;
    return(/*#__PURE__*/ $kwVxT$react.createElement($kwVxT$react.Fragment, null, /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$Field, {
        ...props,
        labelProps: labelProps,
        elementType: "span",
        ref: domRef,
        includeNecessityIndicatorInAccessibilityName: true
    }, /*#__PURE__*/ $kwVxT$react.createElement($8e6a4aea4ee20b05$var$SearchAutocompleteButton, {
        ...$kwVxT$mergeProps(triggerProps, fieldProps, {
            autoFocus: props.autoFocus
        }),
        ref: buttonRef,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isPlaceholder: !state.inputValue,
        validationState: validationState,
        inputValue: state.inputValue,
        clearInput: ()=>state.setInputValue('')
        ,
        onPress: ()=>!isReadOnly && state.open(null, 'manual')
    }, state.inputValue || props.placeholder || '')), /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$Tray, {
        isOpen: state.isOpen,
        onClose: onClose,
        isFixedHeight: true,
        isNonModal: true,
        ...overlayProps
    }, /*#__PURE__*/ $kwVxT$react.createElement($8e6a4aea4ee20b05$var$SearchAutocompleteTray, {
        ...props,
        onClose: onClose,
        overlayProps: overlayProps,
        state: state
    }))));
});
const $8e6a4aea4ee20b05$var$SearchAutocompleteButton = /*#__PURE__*/ $kwVxT$react.forwardRef(function SearchAutocompleteButton(props, ref) {
    let { isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , isPlaceholder: isPlaceholder , validationState: validationState , inputValue: inputValue , clearInput: clearInput , children: children , style: style , className: className  } = props;
    let formatMessage = $kwVxT$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($18d8aa33fc728576$exports)));
    let valueId = $kwVxT$useId();
    let invalidId = $kwVxT$useId();
    let validationIcon = validationState === 'invalid' ? /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$spectrumiconsuiAlertMedium, {
        id: invalidId,
        "aria-label": formatMessage('invalid')
    }) : /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$spectrumiconsuiCheckmarkMedium, null);
    let searchIcon = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$spectrumiconsuiMagnifier, {
        "data-testid": "searchicon"
    });
    let icon = /*#__PURE__*/ $kwVxT$react.cloneElement(searchIcon, {
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    let clearButton = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$ClearButton, {
        onPress: (e)=>{
            clearInput();
            props.onPress(e);
        },
        preventFocus: true,
        "aria-label": formatMessage('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let validation = /*#__PURE__*/ $kwVxT$react.cloneElement(validationIcon, {
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-validationIcon', $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input-validationIcon'))
    });
    let { hoverProps: hoverProps , isHovered: isHovered  } = $kwVxT$useHover({
    });
    let { buttonProps: buttonProps  } = $kwVxT$useButton({
        ...props,
        'aria-labelledby': [
            props['aria-labelledby'],
            props['aria-label'] && !props['aria-labelledby'] ? props.id : null,
            valueId,
            validationState === 'invalid' ? invalidId : null
        ].filter(Boolean).join(' '),
        elementType: 'div'
    }, ref);
    return(/*#__PURE__*/ $kwVxT$react.createElement($kwVxT$FocusRing, {
        focusClass: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'is-focused'),
        focusRingClass: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'focus-ring')
    }, /*#__PURE__*/ $kwVxT$react.createElement("div", {
        ...$kwVxT$mergeProps(hoverProps, buttonProps),
        "aria-haspopup": "dialog",
        ref: ref,
        style: {
            ...style,
            outline: 'none'
        },
        className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($980ffbda28106d6b$exports)), 'mobile-searchautocomplete'), className)
    }, /*#__PURE__*/ $kwVxT$react.createElement("div", {
        className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': validationState === 'invalid',
            'spectrum-Textfield--valid': validationState === 'valid',
            'spectrum-Textfield--quiet': isQuiet
        }, $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid',
            'spectrum-Search--valid': validationState === 'valid'
        }))
    }, /*#__PURE__*/ $kwVxT$react.createElement("div", {
        className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-input', 'spectrum-Textfield-inputIcon', {
            'is-hovered': isHovered,
            'is-placeholder': isPlaceholder,
            'is-disabled': isDisabled,
            'is-quiet': isQuiet
        }, $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-input'))
    }, icon, /*#__PURE__*/ $kwVxT$react.createElement("span", {
        id: valueId,
        className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($980ffbda28106d6b$exports)), 'mobile-value')
    }, children)), validationState ? validation : null, (inputValue !== '' || validationState != null) && !isReadOnly && clearButton))));
});
function $8e6a4aea4ee20b05$var$SearchAutocompleteTray(props) {
    let { state: // completionMode = 'suggest',
    state , isDisabled: isDisabled , validationState: validationState , label: label , overlayProps: overlayProps , loadingState: loadingState , onLoadMore: onLoadMore , onClose: onClose , onSubmit: onSubmit  } = props;
    let timeout = $kwVxT$useRef(null);
    let [showLoading, setShowLoading] = $kwVxT$useState(false);
    let inputRef = $kwVxT$useRef();
    let popoverRef = $kwVxT$useRef();
    let listBoxRef = $kwVxT$useRef();
    let layout = $kwVxT$useListBoxLayout(state);
    let formatMessage = $kwVxT$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($18d8aa33fc728576$exports)));
    let { inputProps: inputProps , listBoxProps: listBoxProps , labelProps: labelProps , clearButtonProps: clearButtonProps  } = $kwVxT$useSearchAutocomplete({
        ...props,
        keyboardDelegate: layout,
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef
    }, state);
    $kwVxT$react.useEffect(()=>{
        $kwVxT$focusSafely(inputRef.current);
        // When the tray unmounts, set state.isFocused (i.e. the tray input's focus tracker) to false.
        // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
        // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
        // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
        return ()=>{
            state.setFocused(false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let { dialogProps: dialogProps  } = $kwVxT$useDialog({
        'aria-labelledby': $kwVxT$useId(labelProps.id)
    }, popoverRef);
    // Override the role of the input to "searchbox" instead of "combobox".
    // Since the listbox is always visible, the combobox role doesn't really give us anything.
    // VoiceOver on iOS reads "double tap to collapse" when focused on the input rather than
    // "double tap to edit text", as with a textbox or searchbox. We'd like double tapping to
    // open the virtual keyboard rather than closing the tray.
    inputProps.role = 'searchbox';
    inputProps['aria-haspopup'] = 'listbox';
    delete inputProps.onTouchEnd;
    let clearButton = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$ClearButton, {
        ...clearButtonProps,
        preventFocus: true,
        "aria-label": formatMessage('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let loadingCircle = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$ProgressCircle, {
        "aria-label": formatMessage('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-circleLoader', $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-circleLoader'))
    });
    // Close the software keyboard on scroll to give the user a bigger area to scroll.
    // But only do this if scrolling with touch, otherwise it can cause issues with touch
    // screen readers.
    let isTouchDown = $kwVxT$useRef(false);
    let onTouchStart = ()=>{
        isTouchDown.current = true;
    };
    let onTouchEnd = ()=>{
        isTouchDown.current = false;
    };
    let onScroll = $kwVxT$useCallback(()=>{
        if (!inputRef.current || document.activeElement !== inputRef.current || !isTouchDown.current) return;
        popoverRef.current.focus();
    }, [
        inputRef,
        popoverRef,
        isTouchDown
    ]);
    let inputValue = inputProps.value;
    let lastInputValue = $kwVxT$useRef(inputValue);
    $kwVxT$useEffect(()=>{
        if (loadingState === 'filtering' && !showLoading) {
            if (timeout.current === null) timeout.current = setTimeout(()=>{
                setShowLoading(true);
            }, 500);
            // If user is typing, clear the timer and restart since it is a new request
            if (inputValue !== lastInputValue.current) {
                clearTimeout(timeout.current);
                timeout.current = setTimeout(()=>{
                    setShowLoading(true);
                }, 500);
            }
        } else if (loadingState !== 'filtering') {
            // If loading is no longer happening, clear any timers and hide the loading circle
            setShowLoading(false);
            clearTimeout(timeout.current);
            timeout.current = null;
        }
        lastInputValue.current = inputValue;
    }, [
        loadingState,
        inputValue,
        showLoading
    ]);
    let onKeyDown = (e)=>{
        // Close virtual keyboard, close tray, and fire onSubmit if user hits Enter w/o any focused options
        if (e.key === 'Enter' && state.selectionManager.focusedKey == null) {
            popoverRef.current.focus();
            onClose();
            onSubmit(inputValue.toString(), null);
        } else inputProps.onKeyDown(e);
    };
    let searchIcon = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$spectrumiconsuiMagnifier, {
        "data-testid": "searchicon"
    });
    let icon = /*#__PURE__*/ $kwVxT$react.cloneElement(searchIcon, {
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    return(/*#__PURE__*/ $kwVxT$react.createElement($kwVxT$FocusScope, {
        restoreFocus: true,
        contain: true
    }, /*#__PURE__*/ $kwVxT$react.createElement("div", {
        ...$kwVxT$mergeProps(overlayProps, dialogProps),
        ref: popoverRef,
        className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($980ffbda28106d6b$exports)), 'tray-dialog')
    }, /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$DismissButton, {
        onDismiss: onClose
    }), /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$TextFieldBase, {
        label: label,
        labelProps: labelProps,
        inputProps: {
            ...inputProps,
            onKeyDown: onKeyDown
        },
        inputRef: inputRef,
        isDisabled: isDisabled,
        isLoading: showLoading && loadingState === 'filtering',
        loadingIndicator: loadingState != null && loadingCircle,
        validationState: validationState,
        wrapperChildren: (state.inputValue !== '' || loadingState === 'filtering' || validationState != null) && !props.isReadOnly && clearButton,
        icon: icon,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search', 'spectrum-Textfield', 'spectrum-Search--loadable', {
            'spectrum-Search--invalid': validationState === 'invalid',
            'spectrum-Search--valid': validationState === 'valid'
        }, $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($980ffbda28106d6b$exports)), 'tray-textfield', {
            'has-label': !!props.label
        })),
        inputClassName: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-input'),
        validationIconClassName: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-validationIcon')
    }), /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$ListBoxBase, {
        ...listBoxProps,
        domProps: {
            onTouchStart: onTouchStart,
            onTouchEnd: onTouchEnd
        },
        disallowEmptySelection: true,
        shouldSelectOnPressUp: true,
        focusOnPointerEnter: true,
        layout: layout,
        state: state,
        shouldUseVirtualFocus: true,
        renderEmptyState: ()=>loadingState !== 'loading' && /*#__PURE__*/ $kwVxT$react.createElement("span", {
                className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($980ffbda28106d6b$exports)), 'no-results')
            }, formatMessage('noResults'))
        ,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($980ffbda28106d6b$exports)), 'tray-listbox'),
        ref: listBoxRef,
        onScroll: onScroll,
        onLoadMore: onLoadMore,
        isLoading: loadingState === 'loading' || loadingState === 'loadingMore'
    }), /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$DismissButton, {
        onDismiss: onClose
    }))));
}















function $e4c979564f73d360$var$SearchAutocomplete(props, ref) {
    props = $kwVxT$useProviderProps(props);
    let isMobile = $kwVxT$useIsMobileDevice();
    if (isMobile) // menuTrigger=focus/manual don't apply to mobile searchwithin
    return(/*#__PURE__*/ $kwVxT$react.createElement($8e6a4aea4ee20b05$export$e7a90f7d6b078162, {
        ...props,
        menuTrigger: "input",
        ref: ref
    }));
    else return(/*#__PURE__*/ $kwVxT$react.createElement($e4c979564f73d360$var$SearchAutocompleteBase, {
        ...props,
        ref: ref
    }));
}
const $e4c979564f73d360$var$SearchAutocompleteBase = /*#__PURE__*/ $kwVxT$react.forwardRef(function SearchAutocompleteBase(props, ref) {
    props = $kwVxT$useProviderProps(props);
    let { menuTrigger: menuTrigger = 'input' , shouldFlip: shouldFlip = true , direction: direction = 'bottom' , isQuiet: isQuiet , loadingState: loadingState , onLoadMore: onLoadMore , onSubmit: onSubmit = ()=>{
    }  } = props;
    let formatMessage = $kwVxT$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($18d8aa33fc728576$exports)));
    let isAsync = loadingState != null;
    let popoverRef = $kwVxT$useRef();
    let unwrappedPopoverRef = $kwVxT$useUnwrapDOMRef(popoverRef);
    let listBoxRef = $kwVxT$useRef();
    let inputRef = $kwVxT$useRef();
    let domRef = $kwVxT$useFocusableRef(ref, inputRef);
    let { contains: contains  } = $kwVxT$useFilter({
        sensitivity: 'base'
    });
    let state = $kwVxT$useComboBoxState({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: isAsync,
        allowsCustomValue: true,
        onSelectionChange: (key)=>key !== null && onSubmit(null, key)
        ,
        selectedKey: undefined,
        defaultSelectedKey: undefined
    });
    let layout = $kwVxT$useListBoxLayout(state);
    let { inputProps: inputProps , listBoxProps: listBoxProps , labelProps: labelProps , clearButtonProps: clearButtonProps  } = $kwVxT$useSearchAutocomplete({
        ...props,
        keyboardDelegate: layout,
        popoverRef: unwrappedPopoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        menuTrigger: menuTrigger
    }, state);
    let { overlayProps: overlayProps , placement: placement , updatePosition: updatePosition  } = $kwVxT$useOverlayPosition({
        targetRef: inputRef,
        overlayRef: unwrappedPopoverRef,
        scrollRef: listBoxRef,
        placement: `${direction} end`,
        shouldFlip: shouldFlip,
        isOpen: state.isOpen,
        onClose: state.close
    });
    // Measure the width of the inputfield to inform the width of the menu (below).
    let [menuWidth, setMenuWidth] = $kwVxT$useState(null);
    let { scale: scale  } = $kwVxT$useProvider();
    let onResize = $kwVxT$useCallback(()=>{
        if (inputRef.current) {
            let inputWidth = inputRef.current.offsetWidth;
            setMenuWidth(inputWidth);
        }
    }, [
        inputRef,
        setMenuWidth
    ]);
    $kwVxT$useResizeObserver({
        ref: domRef,
        onResize: onResize
    });
    $kwVxT$useLayoutEffect(onResize, [
        scale,
        onResize
    ]);
    // Update position once the ListBox has rendered. This ensures that
    // it flips properly when it doesn't fit in the available space.
    // TODO: add ResizeObserver to useOverlayPosition so we don't need this.
    $kwVxT$useLayoutEffect(()=>{
        if (state.isOpen) requestAnimationFrame(()=>{
            updatePosition();
        });
    }, [
        state.isOpen,
        updatePosition
    ]);
    let style = {
        ...overlayProps.style,
        width: isQuiet ? null : menuWidth,
        minWidth: isQuiet ? `calc(${menuWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : menuWidth
    };
    return(/*#__PURE__*/ $kwVxT$react.createElement($kwVxT$react.Fragment, null, /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$Field, {
        ...props,
        labelProps: labelProps,
        ref: domRef
    }, /*#__PURE__*/ $kwVxT$react.createElement($e4c979564f73d360$var$SearchAutocompleteInput, {
        ...props,
        isOpen: state.isOpen,
        loadingState: loadingState,
        inputProps: inputProps,
        inputRef: inputRef,
        clearButtonProps: clearButtonProps
    })), /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$Popover, {
        isOpen: state.isOpen,
        UNSAFE_style: style,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-popover', {
            'spectrum-InputGroup-popover--quiet': isQuiet
        }),
        ref: popoverRef,
        placement: placement,
        hideArrow: true,
        isNonModal: true,
        isDismissable: false
    }, /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$ListBoxBase, {
        ...listBoxProps,
        ref: listBoxRef,
        disallowEmptySelection: true,
        autoFocus: state.focusStrategy,
        shouldSelectOnPressUp: true,
        focusOnPointerEnter: true,
        layout: layout,
        state: state,
        shouldUseVirtualFocus: true,
        isLoading: loadingState === 'loadingMore',
        onLoadMore: onLoadMore,
        renderEmptyState: ()=>isAsync && /*#__PURE__*/ $kwVxT$react.createElement("span", null, formatMessage('noResults'))
    }), /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$DismissButton, {
        onDismiss: ()=>state.close()
    }))));
});
const $e4c979564f73d360$var$SearchAutocompleteInput = /*#__PURE__*/ $kwVxT$react.forwardRef(function SearchAutocompleteInput(props, ref) {
    let { isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , validationState: validationState , inputProps: inputProps , inputRef: inputRef , autoFocus: autoFocus , style: style , className: className , loadingState: loadingState , isOpen: isOpen , menuTrigger: menuTrigger , clearButtonProps: clearButtonProps  } = props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $kwVxT$useHover({
    });
    let formatMessage = $kwVxT$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($18d8aa33fc728576$exports)));
    let timeout = $kwVxT$useRef(null);
    let [showLoading, setShowLoading] = $kwVxT$useState(false);
    let loadingCircle = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$ProgressCircle, {
        "aria-label": formatMessage('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-circleLoader', $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input-circleLoader'))
    });
    let searchIcon = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$spectrumiconsuiMagnifier, {
        "data-testid": "searchicon"
    });
    let clearButton = /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$ClearButton, {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let isLoading = loadingState === 'loading' || loadingState === 'filtering';
    let inputValue = inputProps.value;
    let lastInputValue = $kwVxT$useRef(inputValue);
    $kwVxT$useEffect(()=>{
        if (isLoading && !showLoading) {
            if (timeout.current === null) timeout.current = setTimeout(()=>{
                setShowLoading(true);
            }, 500);
            // If user is typing, clear the timer and restart since it is a new request
            if (inputValue !== lastInputValue.current) {
                clearTimeout(timeout.current);
                timeout.current = setTimeout(()=>{
                    setShowLoading(true);
                }, 500);
            }
        } else if (!isLoading) {
            // If loading is no longer happening, clear any timers and hide the loading circle
            setShowLoading(false);
            clearTimeout(timeout.current);
            timeout.current = null;
        }
        lastInputValue.current = inputValue;
    }, [
        isLoading,
        showLoading,
        inputValue
    ]);
    return(/*#__PURE__*/ $kwVxT$react.createElement($kwVxT$FocusRing, {
        within: true,
        isTextInput: true,
        focusClass: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'is-focused'),
        focusRingClass: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ $kwVxT$react.createElement("div", {
        ...hoverProps,
        ref: ref,
        style: style,
        className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, className)
    }, /*#__PURE__*/ $kwVxT$react.createElement($kwVxT$TextFieldBase, {
        inputProps: inputProps,
        inputRef: inputRef,
        UNSAFE_className: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid',
            'spectrum-Search--valid': validationState === 'valid'
        }),
        inputClassName: $kwVxT$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-input'),
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        isLoading: showLoading && (isOpen || menuTrigger === 'manual' || loadingState === 'loading'),
        loadingIndicator: loadingState != null && loadingCircle,
        icon: searchIcon,
        wrapperChildren: inputValue !== '' && !isReadOnly && clearButton
    }))));
});
/**
 * A SearchAutocomplete is a searchfield that supports a dynamic list of suggestions.
 */ let $e4c979564f73d360$export$dd65332a5b19fa63 = /*#__PURE__*/ $kwVxT$forwardRef($e4c979564f73d360$var$SearchAutocomplete);





export {$37102f496db7391d$re_export$Item as Item, $37102f496db7391d$re_export$Section as Section, $e4c979564f73d360$export$dd65332a5b19fa63 as SearchAutocomplete};
//# sourceMappingURL=module.js.map
