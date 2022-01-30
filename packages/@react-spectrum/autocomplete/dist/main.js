require("./main.css");
var $e6Qpx$reactstatelycollections = require("@react-stately/collections");
var $e6Qpx$reactspectrumutils = require("@react-spectrum/utils");
var $e6Qpx$reactspectrumbutton = require("@react-spectrum/button");
var $e6Qpx$reactariaoverlays = require("@react-aria/overlays");
var $e6Qpx$reactspectrumlabel = require("@react-spectrum/label");
var $e6Qpx$reactariafocus = require("@react-aria/focus");
var $e6Qpx$reactspectrumlistbox = require("@react-spectrum/listbox");
var $e6Qpx$spectrumiconsuiMagnifier = require("@spectrum-icons/ui/Magnifier");
var $e6Qpx$reactspectrumoverlays = require("@react-spectrum/overlays");
var $e6Qpx$reactspectrumprogress = require("@react-spectrum/progress");
var $e6Qpx$react = require("react");
var $e6Qpx$reactspectrumtextfield = require("@react-spectrum/textfield");
var $e6Qpx$reactstatelycombobox = require("@react-stately/combobox");
var $e6Qpx$reactariai18n = require("@react-aria/i18n");
var $e6Qpx$reactariainteractions = require("@react-aria/interactions");
var $e6Qpx$reactariautils = require("@react-aria/utils");
var $e6Qpx$reactspectrumprovider = require("@react-spectrum/provider");
var $e6Qpx$reactariaautocomplete = require("@react-aria/autocomplete");
var $e6Qpx$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $e6Qpx$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $e6Qpx$reactariabutton = require("@react-aria/button");
var $e6Qpx$reactariadialog = require("@react-aria/dialog");
var $e6Qpx$reactarialabel = require("@react-aria/label");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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

$parcel$export(module.exports, "Item", () => $039d68c00d7eac20$re_export$Item);
$parcel$export(module.exports, "Section", () => $039d68c00d7eac20$re_export$Section);
var $9e82be70851d3404$exports = {};

$parcel$export($9e82be70851d3404$exports, "SearchAutocomplete", () => $9e82be70851d3404$export$dd65332a5b19fa63);





var $ea1666a117bf81f2$exports = {};
var $104bf7fba64f12ca$exports = {};
$104bf7fba64f12ca$exports = JSON.parse("{\"clear\":\"مسح\",\"invalid\":\"(غير صالح)\",\"loading\":\"جارٍ التحميل...\",\"noResults\":\"لا توجد نتائج\"}");


var $e0b93b858e15760a$exports = {};
$e0b93b858e15760a$exports = JSON.parse("{\"clear\":\"Изчисти\",\"invalid\":\"(невалиден)\",\"loading\":\"Зареждане...\",\"noResults\":\"Няма резултати\"}");


var $0cedcd99acc7ba9b$exports = {};
$0cedcd99acc7ba9b$exports = JSON.parse("{\"clear\":\"Vymazat\",\"invalid\":\"(neplatné)\",\"loading\":\"Načítání...\",\"noResults\":\"Žádné výsledky\"}");


var $4b995a0b6d285cde$exports = {};
$4b995a0b6d285cde$exports = JSON.parse("{\"clear\":\"Ryd\",\"invalid\":\"(ugyldig)\",\"loading\":\"Indlæser ...\",\"noResults\":\"Ingen resultater\"}");


var $dd652a392d5bc670$exports = {};
$dd652a392d5bc670$exports = JSON.parse("{\"clear\":\"Löschen\",\"invalid\":\"(ungültig)\",\"loading\":\"Wird geladen...\",\"noResults\":\"Keine Ergebnisse\"}");


var $f877bb4db509136c$exports = {};
$f877bb4db509136c$exports = JSON.parse("{\"clear\":\"Καθαρισμός\",\"invalid\":\"(δεν ισχύει)\",\"loading\":\"Φόρτωση...\",\"noResults\":\"Χωρίς αποτέλεσμα\"}");


var $a3ca3d94bf0952f8$exports = {};
$a3ca3d94bf0952f8$exports = JSON.parse("{\"loading\":\"Loading...\",\"noResults\":\"No results\",\"clear\":\"Clear\",\"invalid\":\"(invalid)\"}");


var $d062e3d234f48044$exports = {};
$d062e3d234f48044$exports = JSON.parse("{\"clear\":\"Borrar\",\"invalid\":\"(no válido)\",\"loading\":\"Cargando...\",\"noResults\":\"Sin resultados\"}");


var $37c1474c00b6e12e$exports = {};
$37c1474c00b6e12e$exports = JSON.parse("{\"clear\":\"Puhasta\",\"invalid\":\"(kehtetu)\",\"loading\":\"Laadimine...\",\"noResults\":\"Tulemusi pole\"}");


var $1d22ec00c36f6fb9$exports = {};
$1d22ec00c36f6fb9$exports = JSON.parse("{\"clear\":\"Kirkas\",\"invalid\":\"(epäkelpo)\",\"loading\":\"Ladataan...\",\"noResults\":\"Ei tuloksia\"}");


var $ea50ef56ddbcc5ca$exports = {};
$ea50ef56ddbcc5ca$exports = JSON.parse("{\"clear\":\"Effacer\",\"invalid\":\"(non valide)\",\"loading\":\"Chargement en cours...\",\"noResults\":\"Aucun résultat\"}");


var $10d38dd077e886e7$exports = {};
$10d38dd077e886e7$exports = JSON.parse("{\"clear\":\"נקי\",\"invalid\":\"(לא חוקי)\",\"loading\":\"טוען...\",\"noResults\":\"אין תוצאות\"}");


var $161c326924ec9b6d$exports = {};
$161c326924ec9b6d$exports = JSON.parse("{\"clear\":\"Izbriši\",\"invalid\":\"(nevažeće)\",\"loading\":\"Učitavam...\",\"noResults\":\"Nema rezultata\"}");


var $791b1252dbdda259$exports = {};
$791b1252dbdda259$exports = JSON.parse("{\"clear\":\"Törlés\",\"invalid\":\"(érvénytelen)\",\"loading\":\"Betöltés folyamatban…\",\"noResults\":\"Nincsenek találatok\"}");


var $b66bd67dc0bdb88f$exports = {};
$b66bd67dc0bdb88f$exports = JSON.parse("{\"clear\":\"Cancella\",\"invalid\":\"(non valido)\",\"loading\":\"Caricamento in corso...\",\"noResults\":\"Nessun risultato\"}");


var $a808e25a54465fbb$exports = {};
$a808e25a54465fbb$exports = JSON.parse("{\"clear\":\"クリア\",\"invalid\":\"(無効)\",\"loading\":\"読み込み中...\",\"noResults\":\"結果なし\"}");


var $8fb3df4f8558ce8c$exports = {};
$8fb3df4f8558ce8c$exports = JSON.parse("{\"clear\":\"지우기\",\"invalid\":\"(유효하지 않음)\",\"loading\":\"로드 중...\",\"noResults\":\"결과 없음\"}");


var $58bfe4654c74d8da$exports = {};
$58bfe4654c74d8da$exports = JSON.parse("{\"clear\":\"Skaidrus\",\"invalid\":\"(netinkama)\",\"loading\":\"Įkeliama...\",\"noResults\":\"Be rezultatų\"}");


var $f9b5f50f259f1049$exports = {};
$f9b5f50f259f1049$exports = JSON.parse("{\"clear\":\"Notīrīt\",\"invalid\":\"(nederīgs)\",\"loading\":\"Notiek ielāde...\",\"noResults\":\"Nav rezultātu\"}");


var $fd16a1bbbc6e9475$exports = {};
$fd16a1bbbc6e9475$exports = JSON.parse("{\"clear\":\"Tøm\",\"invalid\":\"(ugyldig)\",\"loading\":\"Laster inn ...\",\"noResults\":\"Ingen resultater\"}");


var $bf3f70e26063eba9$exports = {};
$bf3f70e26063eba9$exports = JSON.parse("{\"clear\":\"Helder\",\"invalid\":\"(ongeldig)\",\"loading\":\"Laden...\",\"noResults\":\"Geen resultaten\"}");


var $c0b91e28884f4be6$exports = {};
$c0b91e28884f4be6$exports = JSON.parse("{\"clear\":\"Wyczyść\",\"invalid\":\"(nieprawidłowy)\",\"loading\":\"Trwa ładowanie...\",\"noResults\":\"Brak wyników\"}");


var $29d8a6fe059b8497$exports = {};
$29d8a6fe059b8497$exports = JSON.parse("{\"clear\":\"Limpar\",\"invalid\":\"(inválido)\",\"loading\":\"Carregando...\",\"noResults\":\"Nenhum resultado\"}");


var $657efd0201cdcb93$exports = {};
$657efd0201cdcb93$exports = JSON.parse("{\"clear\":\"Limpar\",\"invalid\":\"(inválido)\",\"loading\":\"A carregar...\",\"noResults\":\"Sem resultados\"}");


var $61d23cb86be66535$exports = {};
$61d23cb86be66535$exports = JSON.parse("{\"clear\":\"Golire\",\"invalid\":\"(nevalid)\",\"loading\":\"Se încarcă...\",\"noResults\":\"Niciun rezultat\"}");


var $369ea5b217b3e5dd$exports = {};
$369ea5b217b3e5dd$exports = JSON.parse("{\"clear\":\"Очистить\",\"invalid\":\"(недействительно)\",\"loading\":\"Загрузка...\",\"noResults\":\"Результаты отсутствуют\"}");


var $bbd752811e36eef1$exports = {};
$bbd752811e36eef1$exports = JSON.parse("{\"clear\":\"Vymazať\",\"invalid\":\"(neplatné)\",\"loading\":\"Načítava sa...\",\"noResults\":\"Žiadne výsledky\"}");


var $4f49d78d8a5d1131$exports = {};
$4f49d78d8a5d1131$exports = JSON.parse("{\"clear\":\"Jasen\",\"invalid\":\"(neveljavno)\",\"loading\":\"Nalaganje...\",\"noResults\":\"Ni rezultatov\"}");


var $1ac1fc0f01db4388$exports = {};
$1ac1fc0f01db4388$exports = JSON.parse("{\"clear\":\"Izbriši\",\"invalid\":\"(nevažeće)\",\"loading\":\"Učitavam...\",\"noResults\":\"Nema rezultata\"}");


var $34fb4a38e8e7f2d4$exports = {};
$34fb4a38e8e7f2d4$exports = JSON.parse("{\"clear\":\"Rensa\",\"invalid\":\"(ogiltigt)\",\"loading\":\"Läser in...\",\"noResults\":\"Inga resultat\"}");


var $3206f4f486fa284c$exports = {};
$3206f4f486fa284c$exports = JSON.parse("{\"clear\":\"Temizle\",\"invalid\":\"(geçersiz)\",\"loading\":\"Yükleniyor...\",\"noResults\":\"Sonuç yok\"}");


var $31c843effbfe1da1$exports = {};
$31c843effbfe1da1$exports = JSON.parse("{\"clear\":\"Очистити\",\"invalid\":\"(недійсне)\",\"loading\":\"Завантаження...\",\"noResults\":\"Результатів немає\"}");


var $2cc09220ad1a8601$exports = {};
$2cc09220ad1a8601$exports = JSON.parse("{\"clear\":\"透明\",\"invalid\":\"（无效）\",\"loading\":\"正在加载...\",\"noResults\":\"无结果\"}");


var $0fad2df0e0c55b18$exports = {};
$0fad2df0e0c55b18$exports = JSON.parse("{\"clear\":\"清除\",\"invalid\":\"(無效)\",\"loading\":\"正在載入...\",\"noResults\":\"無任何結果\"}");


$ea1666a117bf81f2$exports = {
    "ar-AE": $104bf7fba64f12ca$exports,
    "bg-BG": $e0b93b858e15760a$exports,
    "cs-CZ": $0cedcd99acc7ba9b$exports,
    "da-DK": $4b995a0b6d285cde$exports,
    "de-DE": $dd652a392d5bc670$exports,
    "el-GR": $f877bb4db509136c$exports,
    "en-US": $a3ca3d94bf0952f8$exports,
    "es-ES": $d062e3d234f48044$exports,
    "et-EE": $37c1474c00b6e12e$exports,
    "fi-FI": $1d22ec00c36f6fb9$exports,
    "fr-FR": $ea50ef56ddbcc5ca$exports,
    "he-IL": $10d38dd077e886e7$exports,
    "hr-HR": $161c326924ec9b6d$exports,
    "hu-HU": $791b1252dbdda259$exports,
    "it-IT": $b66bd67dc0bdb88f$exports,
    "ja-JP": $a808e25a54465fbb$exports,
    "ko-KR": $8fb3df4f8558ce8c$exports,
    "lt-LT": $58bfe4654c74d8da$exports,
    "lv-LV": $f9b5f50f259f1049$exports,
    "nb-NO": $fd16a1bbbc6e9475$exports,
    "nl-NL": $bf3f70e26063eba9$exports,
    "pl-PL": $c0b91e28884f4be6$exports,
    "pt-BR": $29d8a6fe059b8497$exports,
    "pt-PT": $657efd0201cdcb93$exports,
    "ro-RO": $61d23cb86be66535$exports,
    "ru-RU": $369ea5b217b3e5dd$exports,
    "sk-SK": $bbd752811e36eef1$exports,
    "sl-SI": $4f49d78d8a5d1131$exports,
    "sr-SP": $1ac1fc0f01db4388$exports,
    "sv-SE": $34fb4a38e8e7f2d4$exports,
    "tr-TR": $3206f4f486fa284c$exports,
    "uk-UA": $31c843effbfe1da1$exports,
    "zh-CN": $2cc09220ad1a8601$exports,
    "zh-TW": $0fad2df0e0c55b18$exports
};



















var $61a5ff1890ec9315$exports = {};

$parcel$export($61a5ff1890ec9315$exports, "no-results", () => $61a5ff1890ec9315$export$5b1939da91820a47, (v) => $61a5ff1890ec9315$export$5b1939da91820a47 = v);
$parcel$export($61a5ff1890ec9315$exports, "mobile-searchautocomplete", () => $61a5ff1890ec9315$export$3117ea626976198e, (v) => $61a5ff1890ec9315$export$3117ea626976198e = v);
$parcel$export($61a5ff1890ec9315$exports, "mobile-input", () => $61a5ff1890ec9315$export$bededa1c0ac414c5, (v) => $61a5ff1890ec9315$export$bededa1c0ac414c5 = v);
$parcel$export($61a5ff1890ec9315$exports, "mobile-value", () => $61a5ff1890ec9315$export$e32ca2bb9f795355, (v) => $61a5ff1890ec9315$export$e32ca2bb9f795355 = v);
$parcel$export($61a5ff1890ec9315$exports, "tray-dialog", () => $61a5ff1890ec9315$export$3d4198eea215577a, (v) => $61a5ff1890ec9315$export$3d4198eea215577a = v);
$parcel$export($61a5ff1890ec9315$exports, "tray-textfield", () => $61a5ff1890ec9315$export$73cc97e04e76a6d0, (v) => $61a5ff1890ec9315$export$73cc97e04e76a6d0 = v);
$parcel$export($61a5ff1890ec9315$exports, "has-label", () => $61a5ff1890ec9315$export$b8e014ff9ad5e5e2, (v) => $61a5ff1890ec9315$export$b8e014ff9ad5e5e2 = v);
$parcel$export($61a5ff1890ec9315$exports, "tray-textfield-input", () => $61a5ff1890ec9315$export$feb70b7bc717e2b8, (v) => $61a5ff1890ec9315$export$feb70b7bc717e2b8 = v);
$parcel$export($61a5ff1890ec9315$exports, "tray-listbox", () => $61a5ff1890ec9315$export$7281dc54d38d4bed, (v) => $61a5ff1890ec9315$export$7281dc54d38d4bed = v);
var $61a5ff1890ec9315$export$5b1939da91820a47;
var $61a5ff1890ec9315$export$3117ea626976198e;
var $61a5ff1890ec9315$export$bededa1c0ac414c5;
var $61a5ff1890ec9315$export$e32ca2bb9f795355;
var $61a5ff1890ec9315$export$3d4198eea215577a;
var $61a5ff1890ec9315$export$73cc97e04e76a6d0;
var $61a5ff1890ec9315$export$b8e014ff9ad5e5e2;
var $61a5ff1890ec9315$export$feb70b7bc717e2b8;
var $61a5ff1890ec9315$export$7281dc54d38d4bed;
$61a5ff1890ec9315$export$5b1939da91820a47 = "_no-results_83bf62";
$61a5ff1890ec9315$export$3117ea626976198e = "_mobile-searchautocomplete_83bf62";
$61a5ff1890ec9315$export$bededa1c0ac414c5 = "_mobile-input_83bf62";
$61a5ff1890ec9315$export$e32ca2bb9f795355 = "_mobile-value_83bf62";
$61a5ff1890ec9315$export$3d4198eea215577a = "_tray-dialog_83bf62";
$61a5ff1890ec9315$export$73cc97e04e76a6d0 = "_tray-textfield_83bf62";
$61a5ff1890ec9315$export$b8e014ff9ad5e5e2 = "_has-label_83bf62";
$61a5ff1890ec9315$export$feb70b7bc717e2b8 = "_tray-textfield-input_83bf62";
$61a5ff1890ec9315$export$7281dc54d38d4bed = "_tray-listbox_83bf62";


var $70e964570b1e0fa9$exports = {};

$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search", () => $70e964570b1e0fa9$export$713911d754e1e4ae, (v) => $70e964570b1e0fa9$export$713911d754e1e4ae = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-ClearButton", () => $70e964570b1e0fa9$export$b752ce409e5660c, (v) => $70e964570b1e0fa9$export$b752ce409e5660c = v);
$parcel$export($70e964570b1e0fa9$exports, "is-quiet", () => $70e964570b1e0fa9$export$6d5c5433f0da4241, (v) => $70e964570b1e0fa9$export$6d5c5433f0da4241 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search-input", () => $70e964570b1e0fa9$export$50e02603f2d97ae1, (v) => $70e964570b1e0fa9$export$50e02603f2d97ae1 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search--invalid", () => $70e964570b1e0fa9$export$77a6151a0b46a6a3, (v) => $70e964570b1e0fa9$export$77a6151a0b46a6a3 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search--valid", () => $70e964570b1e0fa9$export$aa81e3ab40f37567, (v) => $70e964570b1e0fa9$export$aa81e3ab40f37567 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search--loadable", () => $70e964570b1e0fa9$export$9c74d64afae3b2d4, (v) => $70e964570b1e0fa9$export$9c74d64afae3b2d4 = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search-circleLoader", () => $70e964570b1e0fa9$export$70ae4353602451dc, (v) => $70e964570b1e0fa9$export$70ae4353602451dc = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Search-validationIcon", () => $70e964570b1e0fa9$export$938f0981825eae6e, (v) => $70e964570b1e0fa9$export$938f0981825eae6e = v);
$parcel$export($70e964570b1e0fa9$exports, "spectrum-Textfield", () => $70e964570b1e0fa9$export$2c8a10299d8b3418, (v) => $70e964570b1e0fa9$export$2c8a10299d8b3418 = v);
var $70e964570b1e0fa9$export$713911d754e1e4ae;
var $70e964570b1e0fa9$export$b752ce409e5660c;
var $70e964570b1e0fa9$export$6d5c5433f0da4241;
var $70e964570b1e0fa9$export$50e02603f2d97ae1;
var $70e964570b1e0fa9$export$77a6151a0b46a6a3;
var $70e964570b1e0fa9$export$aa81e3ab40f37567;
var $70e964570b1e0fa9$export$9c74d64afae3b2d4;
var $70e964570b1e0fa9$export$70ae4353602451dc;
var $70e964570b1e0fa9$export$938f0981825eae6e;
var $70e964570b1e0fa9$export$2c8a10299d8b3418;
$70e964570b1e0fa9$export$713911d754e1e4ae = "_spectrum-Search_d3c0f3";
$70e964570b1e0fa9$export$b752ce409e5660c = "_spectrum-ClearButton_d3c0f3";
$70e964570b1e0fa9$export$6d5c5433f0da4241 = "_is-quiet_d3c0f3";
$70e964570b1e0fa9$export$50e02603f2d97ae1 = "_spectrum-Search-input_d3c0f3";
$70e964570b1e0fa9$export$77a6151a0b46a6a3 = "_spectrum-Search--invalid_d3c0f3";
$70e964570b1e0fa9$export$aa81e3ab40f37567 = "_spectrum-Search--valid_d3c0f3";
$70e964570b1e0fa9$export$9c74d64afae3b2d4 = "_spectrum-Search--loadable_d3c0f3";
$70e964570b1e0fa9$export$70ae4353602451dc = "_spectrum-Search-circleLoader_d3c0f3";
$70e964570b1e0fa9$export$938f0981825eae6e = "_spectrum-Search-validationIcon_d3c0f3";
$70e964570b1e0fa9$export$2c8a10299d8b3418 = "_spectrum-Textfield_d3c0f3";



var $e95066272e91f55e$exports = {};

$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup", () => $e95066272e91f55e$export$5be359c1227eedcb, (v) => $e95066272e91f55e$export$5be359c1227eedcb = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-FieldButton", () => $e95066272e91f55e$export$a024c99ecf6b5741, (v) => $e95066272e91f55e$export$a024c99ecf6b5741 = v);
$parcel$export($e95066272e91f55e$exports, "is-disabled", () => $e95066272e91f55e$export$d35bc1e505d1ebbf, (v) => $e95066272e91f55e$export$d35bc1e505d1ebbf = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup--invalid", () => $e95066272e91f55e$export$3b48509739a9cda0, (v) => $e95066272e91f55e$export$3b48509739a9cda0 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup--quiet", () => $e95066272e91f55e$export$ebf265ffc062029b, (v) => $e95066272e91f55e$export$ebf265ffc062029b = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-field", () => $e95066272e91f55e$export$ea77459595e26bec, (v) => $e95066272e91f55e$export$ea77459595e26bec = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-input-validationIcon", () => $e95066272e91f55e$export$f7ab13ee113f4884, (v) => $e95066272e91f55e$export$f7ab13ee113f4884 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-input-circleLoader", () => $e95066272e91f55e$export$dcc9e00cdad967fa, (v) => $e95066272e91f55e$export$dcc9e00cdad967fa = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-input", () => $e95066272e91f55e$export$92706f5c6fe4074, (v) => $e95066272e91f55e$export$92706f5c6fe4074 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-icon", () => $e95066272e91f55e$export$b91b6af799fd93a8, (v) => $e95066272e91f55e$export$b91b6af799fd93a8 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-popover--quiet", () => $e95066272e91f55e$export$5e116178f9b1556a, (v) => $e95066272e91f55e$export$5e116178f9b1556a = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker--range", () => $e95066272e91f55e$export$1d8b0b29e11d7cd, (v) => $e95066272e91f55e$export$1d8b0b29e11d7cd = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker--datetimeRange", () => $e95066272e91f55e$export$58dd7cd23c92699f, (v) => $e95066272e91f55e$export$58dd7cd23c92699f = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker-startField", () => $e95066272e91f55e$export$80f9c838a8406469, (v) => $e95066272e91f55e$export$80f9c838a8406469 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker-endField", () => $e95066272e91f55e$export$1c72fb41fa4f21ee, (v) => $e95066272e91f55e$export$1c72fb41fa4f21ee = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker--rangeDash", () => $e95066272e91f55e$export$202113e883898dc, (v) => $e95066272e91f55e$export$202113e883898dc = v);
$parcel$export($e95066272e91f55e$exports, "is-focused", () => $e95066272e91f55e$export$e7dc768d35940237, (v) => $e95066272e91f55e$export$e7dc768d35940237 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker-focusRing", () => $e95066272e91f55e$export$eb262b15b9261fde, (v) => $e95066272e91f55e$export$eb262b15b9261fde = v);
$parcel$export($e95066272e91f55e$exports, "is-hovered", () => $e95066272e91f55e$export$b8813cd5d7824ce7, (v) => $e95066272e91f55e$export$b8813cd5d7824ce7 = v);
$parcel$export($e95066272e91f55e$exports, "focus-ring", () => $e95066272e91f55e$export$f39a09f249340e2a, (v) => $e95066272e91f55e$export$f39a09f249340e2a = v);
$parcel$export($e95066272e91f55e$exports, "is-selected", () => $e95066272e91f55e$export$1e0fb04f31d3c22a, (v) => $e95066272e91f55e$export$1e0fb04f31d3c22a = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-FieldButton--invalid", () => $e95066272e91f55e$export$c9f503f672e8a3c1, (v) => $e95066272e91f55e$export$c9f503f672e8a3c1 = v);
var $e95066272e91f55e$export$5be359c1227eedcb;
var $e95066272e91f55e$export$a024c99ecf6b5741;
var $e95066272e91f55e$export$d35bc1e505d1ebbf;
var $e95066272e91f55e$export$3b48509739a9cda0;
var $e95066272e91f55e$export$ebf265ffc062029b;
var $e95066272e91f55e$export$ea77459595e26bec;
var $e95066272e91f55e$export$f7ab13ee113f4884;
var $e95066272e91f55e$export$dcc9e00cdad967fa;
var $e95066272e91f55e$export$92706f5c6fe4074;
var $e95066272e91f55e$export$b91b6af799fd93a8;
var $e95066272e91f55e$export$5e116178f9b1556a;
var $e95066272e91f55e$export$1d8b0b29e11d7cd;
var $e95066272e91f55e$export$58dd7cd23c92699f;
var $e95066272e91f55e$export$80f9c838a8406469;
var $e95066272e91f55e$export$1c72fb41fa4f21ee;
var $e95066272e91f55e$export$202113e883898dc;
var $e95066272e91f55e$export$e7dc768d35940237;
var $e95066272e91f55e$export$eb262b15b9261fde;
var $e95066272e91f55e$export$b8813cd5d7824ce7;
var $e95066272e91f55e$export$f39a09f249340e2a;
var $e95066272e91f55e$export$1e0fb04f31d3c22a;
var $e95066272e91f55e$export$c9f503f672e8a3c1;
$e95066272e91f55e$export$5be359c1227eedcb = "_spectrum-InputGroup_a0942f";
$e95066272e91f55e$export$a024c99ecf6b5741 = "_spectrum-FieldButton_a0942f";
$e95066272e91f55e$export$d35bc1e505d1ebbf = "_is-disabled_a0942f";
$e95066272e91f55e$export$3b48509739a9cda0 = "_spectrum-InputGroup--invalid_a0942f";
$e95066272e91f55e$export$ebf265ffc062029b = "_spectrum-InputGroup--quiet_a0942f";
$e95066272e91f55e$export$ea77459595e26bec = "_spectrum-InputGroup-field_a0942f";
$e95066272e91f55e$export$f7ab13ee113f4884 = "_spectrum-InputGroup-input-validationIcon_a0942f";
$e95066272e91f55e$export$dcc9e00cdad967fa = "_spectrum-InputGroup-input-circleLoader_a0942f";
$e95066272e91f55e$export$92706f5c6fe4074 = "_spectrum-InputGroup-input_a0942f";
$e95066272e91f55e$export$b91b6af799fd93a8 = "_spectrum-InputGroup-icon_a0942f";
$e95066272e91f55e$export$5e116178f9b1556a = "_spectrum-InputGroup-popover--quiet_a0942f";
$e95066272e91f55e$export$1d8b0b29e11d7cd = "_spectrum-Datepicker--range_a0942f";
$e95066272e91f55e$export$58dd7cd23c92699f = "_spectrum-Datepicker--datetimeRange_a0942f";
$e95066272e91f55e$export$80f9c838a8406469 = "_spectrum-Datepicker-startField_a0942f";
$e95066272e91f55e$export$1c72fb41fa4f21ee = "_spectrum-Datepicker-endField_a0942f";
$e95066272e91f55e$export$202113e883898dc = "_spectrum-Datepicker--rangeDash_a0942f";
$e95066272e91f55e$export$e7dc768d35940237 = "_is-focused_a0942f";
$e95066272e91f55e$export$eb262b15b9261fde = "_spectrum-Datepicker-focusRing_a0942f";
$e95066272e91f55e$export$b8813cd5d7824ce7 = "_is-hovered_a0942f";
$e95066272e91f55e$export$f39a09f249340e2a = "_focus-ring_a0942f";
$e95066272e91f55e$export$1e0fb04f31d3c22a = "_is-selected_a0942f";
$e95066272e91f55e$export$c9f503f672e8a3c1 = "_spectrum-FieldButton--invalid_a0942f";



var $ada5dd581443c125$exports = {};

$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-input", () => $ada5dd581443c125$export$1ac009feb2b0bd0c, (v) => $ada5dd581443c125$export$1ac009feb2b0bd0c = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield", () => $ada5dd581443c125$export$2c8a10299d8b3418, (v) => $ada5dd581443c125$export$2c8a10299d8b3418 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--quiet", () => $ada5dd581443c125$export$bffd5e3d61a81737, (v) => $ada5dd581443c125$export$bffd5e3d61a81737 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--multiline", () => $ada5dd581443c125$export$9699f1c538a448a0, (v) => $ada5dd581443c125$export$9699f1c538a448a0 = v);
$parcel$export($ada5dd581443c125$exports, "is-placeholder", () => $ada5dd581443c125$export$e5b2f5233e4e5194, (v) => $ada5dd581443c125$export$e5b2f5233e4e5194 = v);
$parcel$export($ada5dd581443c125$exports, "is-hovered", () => $ada5dd581443c125$export$b8813cd5d7824ce7, (v) => $ada5dd581443c125$export$b8813cd5d7824ce7 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--valid", () => $ada5dd581443c125$export$c2abbc3f970170b7, (v) => $ada5dd581443c125$export$c2abbc3f970170b7 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--invalid", () => $ada5dd581443c125$export$58e50b10d30123df, (v) => $ada5dd581443c125$export$58e50b10d30123df = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--loadable", () => $ada5dd581443c125$export$14fd30fea6f1348c, (v) => $ada5dd581443c125$export$14fd30fea6f1348c = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-validationIcon", () => $ada5dd581443c125$export$cf0ead5b44db0da3, (v) => $ada5dd581443c125$export$cf0ead5b44db0da3 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-icon", () => $ada5dd581443c125$export$222d1ccd1870be1d, (v) => $ada5dd581443c125$export$222d1ccd1870be1d = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-inputIcon", () => $ada5dd581443c125$export$c1cdcaa5fe76a871, (v) => $ada5dd581443c125$export$c1cdcaa5fe76a871 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-circleLoader", () => $ada5dd581443c125$export$82a249fb4d6127, (v) => $ada5dd581443c125$export$82a249fb4d6127 = v);
$parcel$export($ada5dd581443c125$exports, "is-focused", () => $ada5dd581443c125$export$e7dc768d35940237, (v) => $ada5dd581443c125$export$e7dc768d35940237 = v);
$parcel$export($ada5dd581443c125$exports, "focus-ring", () => $ada5dd581443c125$export$f39a09f249340e2a, (v) => $ada5dd581443c125$export$f39a09f249340e2a = v);
$parcel$export($ada5dd581443c125$exports, "is-disabled", () => $ada5dd581443c125$export$d35bc1e505d1ebbf, (v) => $ada5dd581443c125$export$d35bc1e505d1ebbf = v);
var $ada5dd581443c125$export$1ac009feb2b0bd0c;
var $ada5dd581443c125$export$2c8a10299d8b3418;
var $ada5dd581443c125$export$bffd5e3d61a81737;
var $ada5dd581443c125$export$9699f1c538a448a0;
var $ada5dd581443c125$export$e5b2f5233e4e5194;
var $ada5dd581443c125$export$b8813cd5d7824ce7;
var $ada5dd581443c125$export$c2abbc3f970170b7;
var $ada5dd581443c125$export$58e50b10d30123df;
var $ada5dd581443c125$export$14fd30fea6f1348c;
var $ada5dd581443c125$export$cf0ead5b44db0da3;
var $ada5dd581443c125$export$222d1ccd1870be1d;
var $ada5dd581443c125$export$c1cdcaa5fe76a871;
var $ada5dd581443c125$export$82a249fb4d6127;
var $ada5dd581443c125$export$e7dc768d35940237;
var $ada5dd581443c125$export$f39a09f249340e2a;
var $ada5dd581443c125$export$d35bc1e505d1ebbf;
$ada5dd581443c125$export$1ac009feb2b0bd0c = "_spectrum-Textfield-input_73bc77";
$ada5dd581443c125$export$2c8a10299d8b3418 = "_spectrum-Textfield_73bc77";
$ada5dd581443c125$export$bffd5e3d61a81737 = "_spectrum-Textfield--quiet_73bc77";
$ada5dd581443c125$export$9699f1c538a448a0 = "_spectrum-Textfield--multiline_73bc77";
$ada5dd581443c125$export$e5b2f5233e4e5194 = "_is-placeholder_73bc77";
$ada5dd581443c125$export$b8813cd5d7824ce7 = "_is-hovered_73bc77";
$ada5dd581443c125$export$c2abbc3f970170b7 = "_spectrum-Textfield--valid_73bc77";
$ada5dd581443c125$export$58e50b10d30123df = "_spectrum-Textfield--invalid_73bc77";
$ada5dd581443c125$export$14fd30fea6f1348c = "_spectrum-Textfield--loadable_73bc77";
$ada5dd581443c125$export$cf0ead5b44db0da3 = "_spectrum-Textfield-validationIcon_73bc77";
$ada5dd581443c125$export$222d1ccd1870be1d = "_spectrum-Textfield-icon_73bc77";
$ada5dd581443c125$export$c1cdcaa5fe76a871 = "_spectrum-Textfield-inputIcon_73bc77";
$ada5dd581443c125$export$82a249fb4d6127 = "_spectrum-Textfield-circleLoader_73bc77";
$ada5dd581443c125$export$e7dc768d35940237 = "_is-focused_73bc77";
$ada5dd581443c125$export$f39a09f249340e2a = "_focus-ring_73bc77";
$ada5dd581443c125$export$d35bc1e505d1ebbf = "_is-disabled_73bc77";











const $a6342f866114236b$export$e7a90f7d6b078162 = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).forwardRef(function $a6342f866114236b$export$e7a90f7d6b078162(props, ref) {
    props = $e6Qpx$reactspectrumprovider.useProviderProps(props);
    let { isQuiet: isQuiet , isDisabled: isDisabled , validationState: validationState , isReadOnly: isReadOnly , onSubmit: onSubmit = ()=>{
    }  } = props;
    let { contains: contains  } = $e6Qpx$reactariai18n.useFilter({
        sensitivity: 'base'
    });
    let state = $e6Qpx$reactstatelycombobox.useComboBoxState({
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
    let buttonRef = $e6Qpx$react.useRef();
    let domRef = $e6Qpx$reactspectrumutils.useFocusableRef(ref, buttonRef);
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $e6Qpx$reactariaoverlays.useOverlayTrigger({
        type: 'listbox'
    }, state, buttonRef);
    let { labelProps: labelProps , fieldProps: fieldProps  } = $e6Qpx$reactarialabel.useLabel({
        ...props,
        labelElementType: 'span'
    });
    // Focus the button and show focus ring when clicking on the label
    labelProps.onClick = ()=>{
        if (!props.isDisabled) {
            buttonRef.current.focus();
            $e6Qpx$reactariainteractions.setInteractionModality('keyboard');
        }
    };
    let onClose = ()=>state.commit()
    ;
    return(/*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement(($parcel$interopDefault($e6Qpx$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumlabel.Field, {
        ...props,
        labelProps: labelProps,
        elementType: "span",
        ref: domRef,
        includeNecessityIndicatorInAccessibilityName: true
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($a6342f866114236b$var$SearchAutocompleteButton, {
        ...$e6Qpx$reactariautils.mergeProps(triggerProps, fieldProps, {
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
    }, state.inputValue || props.placeholder || '')), /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumoverlays.Tray, {
        isOpen: state.isOpen,
        onClose: onClose,
        isFixedHeight: true,
        isNonModal: true,
        ...overlayProps
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($a6342f866114236b$var$SearchAutocompleteTray, {
        ...props,
        onClose: onClose,
        overlayProps: overlayProps,
        state: state
    }))));
});
const $a6342f866114236b$var$SearchAutocompleteButton = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).forwardRef(function SearchAutocompleteButton(props, ref) {
    let { isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , isPlaceholder: isPlaceholder , validationState: validationState , inputValue: inputValue , clearInput: clearInput , children: children , style: style , className: className  } = props;
    let formatMessage = $e6Qpx$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($ea1666a117bf81f2$exports)));
    let valueId = $e6Qpx$reactariautils.useId();
    let invalidId = $e6Qpx$reactariautils.useId();
    let validationIcon = validationState === 'invalid' ? /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement(($parcel$interopDefault($e6Qpx$spectrumiconsuiAlertMedium)), {
        id: invalidId,
        "aria-label": formatMessage('invalid')
    }) : /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement(($parcel$interopDefault($e6Qpx$spectrumiconsuiCheckmarkMedium)), null);
    let searchIcon = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement(($parcel$interopDefault($e6Qpx$spectrumiconsuiMagnifier)), {
        "data-testid": "searchicon"
    });
    let icon = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).cloneElement(searchIcon, {
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    let clearButton = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumbutton.ClearButton, {
        onPress: (e)=>{
            clearInput();
            props.onPress(e);
        },
        preventFocus: true,
        "aria-label": formatMessage('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let validation = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).cloneElement(validationIcon, {
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-validationIcon', $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup-input-validationIcon'))
    });
    let { hoverProps: hoverProps , isHovered: isHovered  } = $e6Qpx$reactariainteractions.useHover({
    });
    let { buttonProps: buttonProps  } = $e6Qpx$reactariabutton.useButton({
        ...props,
        'aria-labelledby': [
            props['aria-labelledby'],
            props['aria-label'] && !props['aria-labelledby'] ? props.id : null,
            valueId,
            validationState === 'invalid' ? invalidId : null
        ].filter(Boolean).join(' '),
        elementType: 'div'
    }, ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactariafocus.FocusRing, {
        focusClass: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'is-focused'),
        focusRingClass: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'focus-ring')
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("div", {
        ...$e6Qpx$reactariautils.mergeProps(hoverProps, buttonProps),
        "aria-haspopup": "dialog",
        ref: ref,
        style: {
            ...style,
            outline: 'none'
        },
        className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($61a5ff1890ec9315$exports)), 'mobile-searchautocomplete'), className)
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("div", {
        className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': validationState === 'invalid',
            'spectrum-Textfield--valid': validationState === 'valid',
            'spectrum-Textfield--quiet': isQuiet
        }, $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid',
            'spectrum-Search--valid': validationState === 'valid'
        }))
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("div", {
        className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-input', 'spectrum-Textfield-inputIcon', {
            'is-hovered': isHovered,
            'is-placeholder': isPlaceholder,
            'is-disabled': isDisabled,
            'is-quiet': isQuiet
        }, $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search-input'))
    }, icon, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("span", {
        id: valueId,
        className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($61a5ff1890ec9315$exports)), 'mobile-value')
    }, children)), validationState ? validation : null, (inputValue !== '' || validationState != null) && !isReadOnly && clearButton))));
});
function $a6342f866114236b$var$SearchAutocompleteTray(props) {
    let { state: // completionMode = 'suggest',
    state , isDisabled: isDisabled , validationState: validationState , label: label , overlayProps: overlayProps , loadingState: loadingState , onLoadMore: onLoadMore , onClose: onClose , onSubmit: onSubmit  } = props;
    let timeout = $e6Qpx$react.useRef(null);
    let [showLoading, setShowLoading] = $e6Qpx$react.useState(false);
    let inputRef = $e6Qpx$react.useRef();
    let popoverRef = $e6Qpx$react.useRef();
    let listBoxRef = $e6Qpx$react.useRef();
    let layout = $e6Qpx$reactspectrumlistbox.useListBoxLayout(state);
    let formatMessage = $e6Qpx$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($ea1666a117bf81f2$exports)));
    let { inputProps: inputProps , listBoxProps: listBoxProps , labelProps: labelProps , clearButtonProps: clearButtonProps  } = $e6Qpx$reactariaautocomplete.useSearchAutocomplete({
        ...props,
        keyboardDelegate: layout,
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef
    }, state);
    ($parcel$interopDefault($e6Qpx$react)).useEffect(()=>{
        $e6Qpx$reactariafocus.focusSafely(inputRef.current);
        // When the tray unmounts, set state.isFocused (i.e. the tray input's focus tracker) to false.
        // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
        // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
        // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
        return ()=>{
            state.setFocused(false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let { dialogProps: dialogProps  } = $e6Qpx$reactariadialog.useDialog({
        'aria-labelledby': $e6Qpx$reactariautils.useId(labelProps.id)
    }, popoverRef);
    // Override the role of the input to "searchbox" instead of "combobox".
    // Since the listbox is always visible, the combobox role doesn't really give us anything.
    // VoiceOver on iOS reads "double tap to collapse" when focused on the input rather than
    // "double tap to edit text", as with a textbox or searchbox. We'd like double tapping to
    // open the virtual keyboard rather than closing the tray.
    inputProps.role = 'searchbox';
    inputProps['aria-haspopup'] = 'listbox';
    delete inputProps.onTouchEnd;
    let clearButton = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumbutton.ClearButton, {
        ...clearButtonProps,
        preventFocus: true,
        "aria-label": formatMessage('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let loadingCircle = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumprogress.ProgressCircle, {
        "aria-label": formatMessage('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search-circleLoader', $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-circleLoader'))
    });
    // Close the software keyboard on scroll to give the user a bigger area to scroll.
    // But only do this if scrolling with touch, otherwise it can cause issues with touch
    // screen readers.
    let isTouchDown = $e6Qpx$react.useRef(false);
    let onTouchStart = ()=>{
        isTouchDown.current = true;
    };
    let onTouchEnd = ()=>{
        isTouchDown.current = false;
    };
    let onScroll = $e6Qpx$react.useCallback(()=>{
        if (!inputRef.current || document.activeElement !== inputRef.current || !isTouchDown.current) return;
        popoverRef.current.focus();
    }, [
        inputRef,
        popoverRef,
        isTouchDown
    ]);
    let inputValue = inputProps.value;
    let lastInputValue = $e6Qpx$react.useRef(inputValue);
    $e6Qpx$react.useEffect(()=>{
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
    let searchIcon = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement(($parcel$interopDefault($e6Qpx$spectrumiconsuiMagnifier)), {
        "data-testid": "searchicon"
    });
    let icon = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).cloneElement(searchIcon, {
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactariafocus.FocusScope, {
        restoreFocus: true,
        contain: true
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("div", {
        ...$e6Qpx$reactariautils.mergeProps(overlayProps, dialogProps),
        ref: popoverRef,
        className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($61a5ff1890ec9315$exports)), 'tray-dialog')
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactariaoverlays.DismissButton, {
        onDismiss: onClose
    }), /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumtextfield.TextFieldBase, {
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
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search', 'spectrum-Textfield', 'spectrum-Search--loadable', {
            'spectrum-Search--invalid': validationState === 'invalid',
            'spectrum-Search--valid': validationState === 'valid'
        }, $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($61a5ff1890ec9315$exports)), 'tray-textfield', {
            'has-label': !!props.label
        })),
        inputClassName: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search-input'),
        validationIconClassName: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search-validationIcon')
    }), /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumlistbox.ListBoxBase, {
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
        renderEmptyState: ()=>loadingState !== 'loading' && /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("span", {
                className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($61a5ff1890ec9315$exports)), 'no-results')
            }, formatMessage('noResults'))
        ,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($61a5ff1890ec9315$exports)), 'tray-listbox'),
        ref: listBoxRef,
        onScroll: onScroll,
        onLoadMore: onLoadMore,
        isLoading: loadingState === 'loading' || loadingState === 'loadingMore'
    }), /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactariaoverlays.DismissButton, {
        onDismiss: onClose
    }))));
}















function $9e82be70851d3404$var$SearchAutocomplete(props, ref) {
    props = $e6Qpx$reactspectrumprovider.useProviderProps(props);
    let isMobile = $e6Qpx$reactspectrumutils.useIsMobileDevice();
    if (isMobile) // menuTrigger=focus/manual don't apply to mobile searchwithin
    return(/*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($a6342f866114236b$export$e7a90f7d6b078162, {
        ...props,
        menuTrigger: "input",
        ref: ref
    }));
    else return(/*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($9e82be70851d3404$var$SearchAutocompleteBase, {
        ...props,
        ref: ref
    }));
}
const $9e82be70851d3404$var$SearchAutocompleteBase = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).forwardRef(function SearchAutocompleteBase(props, ref) {
    props = $e6Qpx$reactspectrumprovider.useProviderProps(props);
    let { menuTrigger: menuTrigger = 'input' , shouldFlip: shouldFlip = true , direction: direction = 'bottom' , isQuiet: isQuiet , loadingState: loadingState , onLoadMore: onLoadMore , onSubmit: onSubmit = ()=>{
    }  } = props;
    let formatMessage = $e6Qpx$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($ea1666a117bf81f2$exports)));
    let isAsync = loadingState != null;
    let popoverRef = $e6Qpx$react.useRef();
    let unwrappedPopoverRef = $e6Qpx$reactspectrumutils.useUnwrapDOMRef(popoverRef);
    let listBoxRef = $e6Qpx$react.useRef();
    let inputRef = $e6Qpx$react.useRef();
    let domRef = $e6Qpx$reactspectrumutils.useFocusableRef(ref, inputRef);
    let { contains: contains  } = $e6Qpx$reactariai18n.useFilter({
        sensitivity: 'base'
    });
    let state = $e6Qpx$reactstatelycombobox.useComboBoxState({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: isAsync,
        allowsCustomValue: true,
        onSelectionChange: (key)=>key !== null && onSubmit(null, key)
        ,
        selectedKey: undefined,
        defaultSelectedKey: undefined
    });
    let layout = $e6Qpx$reactspectrumlistbox.useListBoxLayout(state);
    let { inputProps: inputProps , listBoxProps: listBoxProps , labelProps: labelProps , clearButtonProps: clearButtonProps  } = $e6Qpx$reactariaautocomplete.useSearchAutocomplete({
        ...props,
        keyboardDelegate: layout,
        popoverRef: unwrappedPopoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        menuTrigger: menuTrigger
    }, state);
    let { overlayProps: overlayProps , placement: placement , updatePosition: updatePosition  } = $e6Qpx$reactariaoverlays.useOverlayPosition({
        targetRef: inputRef,
        overlayRef: unwrappedPopoverRef,
        scrollRef: listBoxRef,
        placement: `${direction} end`,
        shouldFlip: shouldFlip,
        isOpen: state.isOpen,
        onClose: state.close
    });
    // Measure the width of the inputfield to inform the width of the menu (below).
    let [menuWidth, setMenuWidth] = $e6Qpx$react.useState(null);
    let { scale: scale  } = $e6Qpx$reactspectrumprovider.useProvider();
    let onResize = $e6Qpx$react.useCallback(()=>{
        if (inputRef.current) {
            let inputWidth = inputRef.current.offsetWidth;
            setMenuWidth(inputWidth);
        }
    }, [
        inputRef,
        setMenuWidth
    ]);
    $e6Qpx$reactspectrumutils.useResizeObserver({
        ref: domRef,
        onResize: onResize
    });
    $e6Qpx$reactariautils.useLayoutEffect(onResize, [
        scale,
        onResize
    ]);
    // Update position once the ListBox has rendered. This ensures that
    // it flips properly when it doesn't fit in the available space.
    // TODO: add ResizeObserver to useOverlayPosition so we don't need this.
    $e6Qpx$reactariautils.useLayoutEffect(()=>{
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
    return(/*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement(($parcel$interopDefault($e6Qpx$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumlabel.Field, {
        ...props,
        labelProps: labelProps,
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($9e82be70851d3404$var$SearchAutocompleteInput, {
        ...props,
        isOpen: state.isOpen,
        loadingState: loadingState,
        inputProps: inputProps,
        inputRef: inputRef,
        clearButtonProps: clearButtonProps
    })), /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumoverlays.Popover, {
        isOpen: state.isOpen,
        UNSAFE_style: style,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup-popover', {
            'spectrum-InputGroup-popover--quiet': isQuiet
        }),
        ref: popoverRef,
        placement: placement,
        hideArrow: true,
        isNonModal: true,
        isDismissable: false
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumlistbox.ListBoxBase, {
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
        renderEmptyState: ()=>isAsync && /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("span", null, formatMessage('noResults'))
    }), /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactariaoverlays.DismissButton, {
        onDismiss: ()=>state.close()
    }))));
});
const $9e82be70851d3404$var$SearchAutocompleteInput = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).forwardRef(function SearchAutocompleteInput(props, ref) {
    let { isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , validationState: validationState , inputProps: inputProps , inputRef: inputRef , autoFocus: autoFocus , style: style , className: className , loadingState: loadingState , isOpen: isOpen , menuTrigger: menuTrigger , clearButtonProps: clearButtonProps  } = props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $e6Qpx$reactariainteractions.useHover({
    });
    let formatMessage = $e6Qpx$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($ea1666a117bf81f2$exports)));
    let timeout = $e6Qpx$react.useRef(null);
    let [showLoading, setShowLoading] = $e6Qpx$react.useState(false);
    let loadingCircle = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumprogress.ProgressCircle, {
        "aria-label": formatMessage('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-circleLoader', $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup-input-circleLoader'))
    });
    let searchIcon = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement(($parcel$interopDefault($e6Qpx$spectrumiconsuiMagnifier)), {
        "data-testid": "searchicon"
    });
    let clearButton = /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumbutton.ClearButton, {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let isLoading = loadingState === 'loading' || loadingState === 'filtering';
    let inputValue = inputProps.value;
    let lastInputValue = $e6Qpx$react.useRef(inputValue);
    $e6Qpx$react.useEffect(()=>{
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
    return(/*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactariafocus.FocusRing, {
        within: true,
        isTextInput: true,
        focusClass: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'is-focused'),
        focusRingClass: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement("div", {
        ...hoverProps,
        ref: ref,
        style: style,
        className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, className)
    }, /*#__PURE__*/ ($parcel$interopDefault($e6Qpx$react)).createElement($e6Qpx$reactspectrumtextfield.TextFieldBase, {
        inputProps: inputProps,
        inputRef: inputRef,
        UNSAFE_className: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid',
            'spectrum-Search--valid': validationState === 'valid'
        }),
        inputClassName: $e6Qpx$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($70e964570b1e0fa9$exports)), 'spectrum-Search-input'),
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
 */ let $9e82be70851d3404$export$dd65332a5b19fa63 = /*#__PURE__*/ $e6Qpx$react.forwardRef($9e82be70851d3404$var$SearchAutocomplete);



$parcel$exportWildcard(module.exports, $9e82be70851d3404$exports);


//# sourceMappingURL=main.js.map
