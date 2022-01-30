import "./main.css";
import {Item as $9bebe0bd899521d2$re_export$Item, Section as $9bebe0bd899521d2$re_export$Section} from "@react-stately/collections";
import $9LdFq$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import {useIsMobileDevice as $9LdFq$useIsMobileDevice, useUnwrapDOMRef as $9LdFq$useUnwrapDOMRef, useFocusableRef as $9LdFq$useFocusableRef, useResizeObserver as $9LdFq$useResizeObserver, classNames as $9LdFq$classNames, unwrapDOMRef as $9LdFq$unwrapDOMRef} from "@react-spectrum/utils";
import {useOverlayPosition as $9LdFq$useOverlayPosition, DismissButton as $9LdFq$DismissButton, useOverlayTrigger as $9LdFq$useOverlayTrigger} from "@react-aria/overlays";
import {Field as $9LdFq$Field} from "@react-spectrum/label";
import {FieldButton as $9LdFq$FieldButton, ClearButton as $9LdFq$ClearButton} from "@react-spectrum/button";
import {FocusRing as $9LdFq$FocusRing, focusSafely as $9LdFq$focusSafely, FocusScope as $9LdFq$FocusScope} from "@react-aria/focus";
import {useListBoxLayout as $9LdFq$useListBoxLayout, ListBoxBase as $9LdFq$ListBoxBase} from "@react-spectrum/listbox";
import {Popover as $9LdFq$Popover, Tray as $9LdFq$Tray} from "@react-spectrum/overlays";
import {useHover as $9LdFq$useHover, PressResponder as $9LdFq$PressResponder, setInteractionModality as $9LdFq$setInteractionModality} from "@react-aria/interactions";
import {ProgressCircle as $9LdFq$ProgressCircle} from "@react-spectrum/progress";
import $9LdFq$react, {useRef as $9LdFq$useRef, useState as $9LdFq$useState, useCallback as $9LdFq$useCallback, useEffect as $9LdFq$useEffect} from "react";
import {TextFieldBase as $9LdFq$TextFieldBase} from "@react-spectrum/textfield";
import {useComboBox as $9LdFq$useComboBox} from "@react-aria/combobox";
import {useComboBoxState as $9LdFq$useComboBoxState} from "@react-stately/combobox";
import {useMessageFormatter as $9LdFq$useMessageFormatter, useFilter as $9LdFq$useFilter} from "@react-aria/i18n";
import {useLayoutEffect as $9LdFq$useLayoutEffect, mergeProps as $9LdFq$mergeProps, useId as $9LdFq$useId} from "@react-aria/utils";
import {useProviderProps as $9LdFq$useProviderProps, useProvider as $9LdFq$useProvider} from "@react-spectrum/provider";
import $9LdFq$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $9LdFq$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {useButton as $9LdFq$useButton} from "@react-aria/button";
import {useDialog as $9LdFq$useDialog} from "@react-aria/dialog";
import {useField as $9LdFq$useField} from "@react-aria/label";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $934aeeeb7b1e4f80$exports = {};

$parcel$export($934aeeeb7b1e4f80$exports, "ComboBox", () => $934aeeeb7b1e4f80$export$72b9695b8216309a);


var $d19a056b45e63e97$exports = {};

$parcel$export($d19a056b45e63e97$exports, "no-results", () => $d19a056b45e63e97$export$5b1939da91820a47, (v) => $d19a056b45e63e97$export$5b1939da91820a47 = v);
$parcel$export($d19a056b45e63e97$exports, "mobile-combobox", () => $d19a056b45e63e97$export$31f2f19e6c50453d, (v) => $d19a056b45e63e97$export$31f2f19e6c50453d = v);
$parcel$export($d19a056b45e63e97$exports, "mobile-input", () => $d19a056b45e63e97$export$bededa1c0ac414c5, (v) => $d19a056b45e63e97$export$bededa1c0ac414c5 = v);
$parcel$export($d19a056b45e63e97$exports, "mobile-value", () => $d19a056b45e63e97$export$e32ca2bb9f795355, (v) => $d19a056b45e63e97$export$e32ca2bb9f795355 = v);
$parcel$export($d19a056b45e63e97$exports, "tray-dialog", () => $d19a056b45e63e97$export$3d4198eea215577a, (v) => $d19a056b45e63e97$export$3d4198eea215577a = v);
$parcel$export($d19a056b45e63e97$exports, "tray-textfield", () => $d19a056b45e63e97$export$73cc97e04e76a6d0, (v) => $d19a056b45e63e97$export$73cc97e04e76a6d0 = v);
$parcel$export($d19a056b45e63e97$exports, "has-label", () => $d19a056b45e63e97$export$b8e014ff9ad5e5e2, (v) => $d19a056b45e63e97$export$b8e014ff9ad5e5e2 = v);
$parcel$export($d19a056b45e63e97$exports, "tray-textfield-input", () => $d19a056b45e63e97$export$feb70b7bc717e2b8, (v) => $d19a056b45e63e97$export$feb70b7bc717e2b8 = v);
$parcel$export($d19a056b45e63e97$exports, "tray-listbox", () => $d19a056b45e63e97$export$7281dc54d38d4bed, (v) => $d19a056b45e63e97$export$7281dc54d38d4bed = v);
var $d19a056b45e63e97$export$5b1939da91820a47;
var $d19a056b45e63e97$export$31f2f19e6c50453d;
var $d19a056b45e63e97$export$bededa1c0ac414c5;
var $d19a056b45e63e97$export$e32ca2bb9f795355;
var $d19a056b45e63e97$export$3d4198eea215577a;
var $d19a056b45e63e97$export$73cc97e04e76a6d0;
var $d19a056b45e63e97$export$b8e014ff9ad5e5e2;
var $d19a056b45e63e97$export$feb70b7bc717e2b8;
var $d19a056b45e63e97$export$7281dc54d38d4bed;
$d19a056b45e63e97$export$5b1939da91820a47 = "_no-results_743018";
$d19a056b45e63e97$export$31f2f19e6c50453d = "_mobile-combobox_743018";
$d19a056b45e63e97$export$bededa1c0ac414c5 = "_mobile-input_743018";
$d19a056b45e63e97$export$e32ca2bb9f795355 = "_mobile-value_743018";
$d19a056b45e63e97$export$3d4198eea215577a = "_tray-dialog_743018";
$d19a056b45e63e97$export$73cc97e04e76a6d0 = "_tray-textfield_743018";
$d19a056b45e63e97$export$b8e014ff9ad5e5e2 = "_has-label_743018";
$d19a056b45e63e97$export$feb70b7bc717e2b8 = "_tray-textfield-input_743018";
$d19a056b45e63e97$export$7281dc54d38d4bed = "_tray-listbox_743018";






var $3e29a2ed63b3bab0$exports = {};
var $eb944d251c2892f7$exports = {};
$eb944d251c2892f7$exports = JSON.parse("{\"clear\":\"مسح\",\"invalid\":\"(غير صالح)\",\"loading\":\"جارٍ التحميل...\",\"noResults\":\"لا توجد نتائج\"}");


var $3a03a562daf78023$exports = {};
$3a03a562daf78023$exports = JSON.parse("{\"clear\":\"Изчисти\",\"invalid\":\"(невалиден)\",\"loading\":\"Зареждане...\",\"noResults\":\"Няма резултати\"}");


var $455c8134a22791ae$exports = {};
$455c8134a22791ae$exports = JSON.parse("{\"clear\":\"Vymazat\",\"invalid\":\"(neplatné)\",\"loading\":\"Načítání...\",\"noResults\":\"Žádné výsledky\"}");


var $421a8c6398705e40$exports = {};
$421a8c6398705e40$exports = JSON.parse("{\"clear\":\"Ryd\",\"invalid\":\"(ugyldig)\",\"loading\":\"Indlæser ...\",\"noResults\":\"Ingen resultater\"}");


var $6ac494d49a5be6e2$exports = {};
$6ac494d49a5be6e2$exports = JSON.parse("{\"clear\":\"Löschen\",\"invalid\":\"(ungültig)\",\"loading\":\"Wird geladen...\",\"noResults\":\"Keine Ergebnisse\"}");


var $e509a9505c613d4c$exports = {};
$e509a9505c613d4c$exports = JSON.parse("{\"clear\":\"Καθαρισμός\",\"invalid\":\"(δεν ισχύει)\",\"loading\":\"Φόρτωση...\",\"noResults\":\"Χωρίς αποτέλεσμα\"}");


var $96f137838a71cd56$exports = {};
$96f137838a71cd56$exports = JSON.parse("{\"loading\":\"Loading...\",\"noResults\":\"No results\",\"clear\":\"Clear\",\"invalid\":\"(invalid)\"}");


var $954e2629ebb70b9a$exports = {};
$954e2629ebb70b9a$exports = JSON.parse("{\"clear\":\"Borrar\",\"invalid\":\"(no válido)\",\"loading\":\"Cargando...\",\"noResults\":\"Sin resultados\"}");


var $b99e531a31c02ba4$exports = {};
$b99e531a31c02ba4$exports = JSON.parse("{\"clear\":\"Puhasta\",\"invalid\":\"(kehtetu)\",\"loading\":\"Laadimine...\",\"noResults\":\"Tulemusi pole\"}");


var $13cc385173b86610$exports = {};
$13cc385173b86610$exports = JSON.parse("{\"clear\":\"Kirkas\",\"invalid\":\"(epäkelpo)\",\"loading\":\"Ladataan...\",\"noResults\":\"Ei tuloksia\"}");


var $e562aeafe23ed61c$exports = {};
$e562aeafe23ed61c$exports = JSON.parse("{\"clear\":\"Effacer\",\"invalid\":\"(non valide)\",\"loading\":\"Chargement en cours...\",\"noResults\":\"Aucun résultat\"}");


var $e7bba0eeb6e7d42d$exports = {};
$e7bba0eeb6e7d42d$exports = JSON.parse("{\"clear\":\"נקי\",\"invalid\":\"(לא חוקי)\",\"loading\":\"טוען...\",\"noResults\":\"אין תוצאות\"}");


var $1e55b7117734ea61$exports = {};
$1e55b7117734ea61$exports = JSON.parse("{\"clear\":\"Izbriši\",\"invalid\":\"(nevažeće)\",\"loading\":\"Učitavam...\",\"noResults\":\"Nema rezultata\"}");


var $1ce755086f6ffdc8$exports = {};
$1ce755086f6ffdc8$exports = JSON.parse("{\"clear\":\"Törlés\",\"invalid\":\"(érvénytelen)\",\"loading\":\"Betöltés folyamatban…\",\"noResults\":\"Nincsenek találatok\"}");


var $f7d147f3f32ad537$exports = {};
$f7d147f3f32ad537$exports = JSON.parse("{\"clear\":\"Cancella\",\"invalid\":\"(non valido)\",\"loading\":\"Caricamento in corso...\",\"noResults\":\"Nessun risultato\"}");


var $10906f62c87f0ea9$exports = {};
$10906f62c87f0ea9$exports = JSON.parse("{\"clear\":\"クリア\",\"invalid\":\"(無効)\",\"loading\":\"読み込み中...\",\"noResults\":\"結果なし\"}");


var $9f2afc8e0fefa590$exports = {};
$9f2afc8e0fefa590$exports = JSON.parse("{\"clear\":\"지우기\",\"invalid\":\"(유효하지 않음)\",\"loading\":\"로드 중...\",\"noResults\":\"결과 없음\"}");


var $144753a1aa2b8705$exports = {};
$144753a1aa2b8705$exports = JSON.parse("{\"clear\":\"Skaidrus\",\"invalid\":\"(netinkama)\",\"loading\":\"Įkeliama...\",\"noResults\":\"Be rezultatų\"}");


var $78a1f78322d1f0d0$exports = {};
$78a1f78322d1f0d0$exports = JSON.parse("{\"clear\":\"Notīrīt\",\"invalid\":\"(nederīgs)\",\"loading\":\"Notiek ielāde...\",\"noResults\":\"Nav rezultātu\"}");


var $621fd3db6253d987$exports = {};
$621fd3db6253d987$exports = JSON.parse("{\"clear\":\"Tøm\",\"invalid\":\"(ugyldig)\",\"loading\":\"Laster inn ...\",\"noResults\":\"Ingen resultater\"}");


var $2e78b428737e4dac$exports = {};
$2e78b428737e4dac$exports = JSON.parse("{\"clear\":\"Helder\",\"invalid\":\"(ongeldig)\",\"loading\":\"Laden...\",\"noResults\":\"Geen resultaten\"}");


var $6df3401dcd2da987$exports = {};
$6df3401dcd2da987$exports = JSON.parse("{\"clear\":\"Wyczyść\",\"invalid\":\"(nieprawidłowy)\",\"loading\":\"Trwa ładowanie...\",\"noResults\":\"Brak wyników\"}");


var $5094cba9061d1826$exports = {};
$5094cba9061d1826$exports = JSON.parse("{\"clear\":\"Limpar\",\"invalid\":\"(inválido)\",\"loading\":\"Carregando...\",\"noResults\":\"Nenhum resultado\"}");


var $b7e31d0e82865691$exports = {};
$b7e31d0e82865691$exports = JSON.parse("{\"clear\":\"Limpar\",\"invalid\":\"(inválido)\",\"loading\":\"A carregar...\",\"noResults\":\"Sem resultados\"}");


var $33aaa94b97df6581$exports = {};
$33aaa94b97df6581$exports = JSON.parse("{\"clear\":\"Golire\",\"invalid\":\"(nevalid)\",\"loading\":\"Se încarcă...\",\"noResults\":\"Niciun rezultat\"}");


var $bea4d99a56ed844a$exports = {};
$bea4d99a56ed844a$exports = JSON.parse("{\"clear\":\"Очистить\",\"invalid\":\"(недействительно)\",\"loading\":\"Загрузка...\",\"noResults\":\"Результаты отсутствуют\"}");


var $507320cf7259e27c$exports = {};
$507320cf7259e27c$exports = JSON.parse("{\"clear\":\"Vymazať\",\"invalid\":\"(neplatné)\",\"loading\":\"Načítava sa...\",\"noResults\":\"Žiadne výsledky\"}");


var $61eec90ba0aa258a$exports = {};
$61eec90ba0aa258a$exports = JSON.parse("{\"clear\":\"Jasen\",\"invalid\":\"(neveljavno)\",\"loading\":\"Nalaganje...\",\"noResults\":\"Ni rezultatov\"}");


var $79ecc7c19883f4eb$exports = {};
$79ecc7c19883f4eb$exports = JSON.parse("{\"clear\":\"Izbriši\",\"invalid\":\"(nevažeće)\",\"loading\":\"Učitavam...\",\"noResults\":\"Nema rezultata\"}");


var $32f47bebba470a51$exports = {};
$32f47bebba470a51$exports = JSON.parse("{\"clear\":\"Rensa\",\"invalid\":\"(ogiltigt)\",\"loading\":\"Läser in...\",\"noResults\":\"Inga resultat\"}");


var $6f30a884e803de22$exports = {};
$6f30a884e803de22$exports = JSON.parse("{\"clear\":\"Temizle\",\"invalid\":\"(geçersiz)\",\"loading\":\"Yükleniyor...\",\"noResults\":\"Sonuç yok\"}");


var $4a5fb4d14009ce53$exports = {};
$4a5fb4d14009ce53$exports = JSON.parse("{\"clear\":\"Очистити\",\"invalid\":\"(недійсне)\",\"loading\":\"Завантаження...\",\"noResults\":\"Результатів немає\"}");


var $fb76e5278c3a5830$exports = {};
$fb76e5278c3a5830$exports = JSON.parse("{\"clear\":\"透明\",\"invalid\":\"（无效）\",\"loading\":\"正在加载...\",\"noResults\":\"无结果\"}");


var $a379231c675e4f7a$exports = {};
$a379231c675e4f7a$exports = JSON.parse("{\"clear\":\"清除\",\"invalid\":\"(無效)\",\"loading\":\"正在載入...\",\"noResults\":\"無任何結果\"}");


$3e29a2ed63b3bab0$exports = {
    "ar-AE": $eb944d251c2892f7$exports,
    "bg-BG": $3a03a562daf78023$exports,
    "cs-CZ": $455c8134a22791ae$exports,
    "da-DK": $421a8c6398705e40$exports,
    "de-DE": $6ac494d49a5be6e2$exports,
    "el-GR": $e509a9505c613d4c$exports,
    "en-US": $96f137838a71cd56$exports,
    "es-ES": $954e2629ebb70b9a$exports,
    "et-EE": $b99e531a31c02ba4$exports,
    "fi-FI": $13cc385173b86610$exports,
    "fr-FR": $e562aeafe23ed61c$exports,
    "he-IL": $e7bba0eeb6e7d42d$exports,
    "hr-HR": $1e55b7117734ea61$exports,
    "hu-HU": $1ce755086f6ffdc8$exports,
    "it-IT": $f7d147f3f32ad537$exports,
    "ja-JP": $10906f62c87f0ea9$exports,
    "ko-KR": $9f2afc8e0fefa590$exports,
    "lt-LT": $144753a1aa2b8705$exports,
    "lv-LV": $78a1f78322d1f0d0$exports,
    "nb-NO": $621fd3db6253d987$exports,
    "nl-NL": $2e78b428737e4dac$exports,
    "pl-PL": $6df3401dcd2da987$exports,
    "pt-BR": $5094cba9061d1826$exports,
    "pt-PT": $b7e31d0e82865691$exports,
    "ro-RO": $33aaa94b97df6581$exports,
    "ru-RU": $bea4d99a56ed844a$exports,
    "sk-SK": $507320cf7259e27c$exports,
    "sl-SI": $61eec90ba0aa258a$exports,
    "sr-SP": $79ecc7c19883f4eb$exports,
    "sv-SE": $32f47bebba470a51$exports,
    "tr-TR": $6f30a884e803de22$exports,
    "uk-UA": $4a5fb4d14009ce53$exports,
    "zh-CN": $fb76e5278c3a5830$exports,
    "zh-TW": $a379231c675e4f7a$exports
};




var $91cc66a793b0c871$exports = {};

$parcel$export($91cc66a793b0c871$exports, "spectrum-Button", () => $91cc66a793b0c871$export$1db4cca5b4ade39a, (v) => $91cc66a793b0c871$export$1db4cca5b4ade39a = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton", () => $91cc66a793b0c871$export$53da69f51b770d3, (v) => $91cc66a793b0c871$export$53da69f51b770d3 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-LogicButton", () => $91cc66a793b0c871$export$36ae67a131730482, (v) => $91cc66a793b0c871$export$36ae67a131730482 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-FieldButton", () => $91cc66a793b0c871$export$a024c99ecf6b5741, (v) => $91cc66a793b0c871$export$a024c99ecf6b5741 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ClearButton", () => $91cc66a793b0c871$export$b752ce409e5660c, (v) => $91cc66a793b0c871$export$b752ce409e5660c = v);
$parcel$export($91cc66a793b0c871$exports, "focus-ring", () => $91cc66a793b0c871$export$f39a09f249340e2a, (v) => $91cc66a793b0c871$export$f39a09f249340e2a = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Icon", () => $91cc66a793b0c871$export$d374b04f30360026, (v) => $91cc66a793b0c871$export$d374b04f30360026 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--emphasized", () => $91cc66a793b0c871$export$5aabb61a966e266f, (v) => $91cc66a793b0c871$export$5aabb61a966e266f = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--staticColor", () => $91cc66a793b0c871$export$29b7b5d6a5a497c5, (v) => $91cc66a793b0c871$export$29b7b5d6a5a497c5 = v);
$parcel$export($91cc66a793b0c871$exports, "is-hovered", () => $91cc66a793b0c871$export$b8813cd5d7824ce7, (v) => $91cc66a793b0c871$export$b8813cd5d7824ce7 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button-label", () => $91cc66a793b0c871$export$c081ba562e204942, (v) => $91cc66a793b0c871$export$c081ba562e204942 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton-label", () => $91cc66a793b0c871$export$ebb4635c66bacdb9, (v) => $91cc66a793b0c871$export$ebb4635c66bacdb9 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton-hold", () => $91cc66a793b0c871$export$4a4f01c443eff992, (v) => $91cc66a793b0c871$export$4a4f01c443eff992 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--quiet", () => $91cc66a793b0c871$export$40e1f009544bacf3, (v) => $91cc66a793b0c871$export$40e1f009544bacf3 = v);
$parcel$export($91cc66a793b0c871$exports, "is-disabled", () => $91cc66a793b0c871$export$d35bc1e505d1ebbf, (v) => $91cc66a793b0c871$export$d35bc1e505d1ebbf = v);
$parcel$export($91cc66a793b0c871$exports, "is-open", () => $91cc66a793b0c871$export$a9781837241c946d, (v) => $91cc66a793b0c871$export$a9781837241c946d = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-FieldButton--quiet", () => $91cc66a793b0c871$export$5ca7b274e4fff9fc, (v) => $91cc66a793b0c871$export$5ca7b274e4fff9fc = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ClearButton--overBackground", () => $91cc66a793b0c871$export$116f2fccf941d34d, (v) => $91cc66a793b0c871$export$116f2fccf941d34d = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ClearButton--small", () => $91cc66a793b0c871$export$49280ffa5236ba8b, (v) => $91cc66a793b0c871$export$49280ffa5236ba8b = v);
$parcel$export($91cc66a793b0c871$exports, "is-focused", () => $91cc66a793b0c871$export$e7dc768d35940237, (v) => $91cc66a793b0c871$export$e7dc768d35940237 = v);
$parcel$export($91cc66a793b0c871$exports, "is-active", () => $91cc66a793b0c871$export$20fd0f7cd4e6112f, (v) => $91cc66a793b0c871$export$20fd0f7cd4e6112f = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--cta", () => $91cc66a793b0c871$export$b818fdf0052a2cab, (v) => $91cc66a793b0c871$export$b818fdf0052a2cab = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--primary", () => $91cc66a793b0c871$export$c1c3511f5e96e926, (v) => $91cc66a793b0c871$export$c1c3511f5e96e926 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--secondary", () => $91cc66a793b0c871$export$4f1b75526afd8ff3, (v) => $91cc66a793b0c871$export$4f1b75526afd8ff3 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--warning", () => $91cc66a793b0c871$export$6f97cef817ff1cac, (v) => $91cc66a793b0c871$export$6f97cef817ff1cac = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--overBackground", () => $91cc66a793b0c871$export$5cda1128f9112d2e, (v) => $91cc66a793b0c871$export$5cda1128f9112d2e = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--quiet", () => $91cc66a793b0c871$export$25f049c049371040, (v) => $91cc66a793b0c871$export$25f049c049371040 = v);
$parcel$export($91cc66a793b0c871$exports, "is-selected", () => $91cc66a793b0c871$export$1e0fb04f31d3c22a, (v) => $91cc66a793b0c871$export$1e0fb04f31d3c22a = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--staticWhite", () => $91cc66a793b0c871$export$ccc536e1adbdc059, (v) => $91cc66a793b0c871$export$ccc536e1adbdc059 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--staticBlack", () => $91cc66a793b0c871$export$8f7c9db66978d20f, (v) => $91cc66a793b0c871$export$8f7c9db66978d20f = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-LogicButton--and", () => $91cc66a793b0c871$export$e52daab43a62c528, (v) => $91cc66a793b0c871$export$e52daab43a62c528 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-LogicButton--or", () => $91cc66a793b0c871$export$da76be6126aaa633, (v) => $91cc66a793b0c871$export$da76be6126aaa633 = v);
$parcel$export($91cc66a793b0c871$exports, "is-placeholder", () => $91cc66a793b0c871$export$e5b2f5233e4e5194, (v) => $91cc66a793b0c871$export$e5b2f5233e4e5194 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-FieldButton--invalid", () => $91cc66a793b0c871$export$c9f503f672e8a3c1, (v) => $91cc66a793b0c871$export$c9f503f672e8a3c1 = v);
var $91cc66a793b0c871$export$1db4cca5b4ade39a;
var $91cc66a793b0c871$export$53da69f51b770d3;
var $91cc66a793b0c871$export$36ae67a131730482;
var $91cc66a793b0c871$export$a024c99ecf6b5741;
var $91cc66a793b0c871$export$b752ce409e5660c;
var $91cc66a793b0c871$export$f39a09f249340e2a;
var $91cc66a793b0c871$export$d374b04f30360026;
var $91cc66a793b0c871$export$5aabb61a966e266f;
var $91cc66a793b0c871$export$29b7b5d6a5a497c5;
var $91cc66a793b0c871$export$b8813cd5d7824ce7;
var $91cc66a793b0c871$export$c081ba562e204942;
var $91cc66a793b0c871$export$ebb4635c66bacdb9;
var $91cc66a793b0c871$export$4a4f01c443eff992;
var $91cc66a793b0c871$export$40e1f009544bacf3;
var $91cc66a793b0c871$export$d35bc1e505d1ebbf;
var $91cc66a793b0c871$export$a9781837241c946d;
var $91cc66a793b0c871$export$5ca7b274e4fff9fc;
var $91cc66a793b0c871$export$116f2fccf941d34d;
var $91cc66a793b0c871$export$49280ffa5236ba8b;
var $91cc66a793b0c871$export$e7dc768d35940237;
var $91cc66a793b0c871$export$20fd0f7cd4e6112f;
var $91cc66a793b0c871$export$b818fdf0052a2cab;
var $91cc66a793b0c871$export$c1c3511f5e96e926;
var $91cc66a793b0c871$export$4f1b75526afd8ff3;
var $91cc66a793b0c871$export$6f97cef817ff1cac;
var $91cc66a793b0c871$export$5cda1128f9112d2e;
var $91cc66a793b0c871$export$25f049c049371040;
var $91cc66a793b0c871$export$1e0fb04f31d3c22a;
var $91cc66a793b0c871$export$ccc536e1adbdc059;
var $91cc66a793b0c871$export$8f7c9db66978d20f;
var $91cc66a793b0c871$export$e52daab43a62c528;
var $91cc66a793b0c871$export$da76be6126aaa633;
var $91cc66a793b0c871$export$e5b2f5233e4e5194;
var $91cc66a793b0c871$export$c9f503f672e8a3c1;
$91cc66a793b0c871$export$1db4cca5b4ade39a = "_spectrum-Button_e2d99e";
$91cc66a793b0c871$export$53da69f51b770d3 = "_spectrum-ActionButton_e2d99e";
$91cc66a793b0c871$export$36ae67a131730482 = "_spectrum-LogicButton_e2d99e";
$91cc66a793b0c871$export$a024c99ecf6b5741 = "_spectrum-FieldButton_e2d99e";
$91cc66a793b0c871$export$b752ce409e5660c = "_spectrum-ClearButton_e2d99e";
$91cc66a793b0c871$export$f39a09f249340e2a = "_focus-ring_e2d99e";
$91cc66a793b0c871$export$d374b04f30360026 = "_spectrum-Icon_e2d99e";
$91cc66a793b0c871$export$5aabb61a966e266f = "_spectrum-ActionButton--emphasized_e2d99e";
$91cc66a793b0c871$export$29b7b5d6a5a497c5 = "_spectrum-ActionButton--staticColor_e2d99e";
$91cc66a793b0c871$export$b8813cd5d7824ce7 = "_is-hovered_e2d99e";
$91cc66a793b0c871$export$c081ba562e204942 = "_spectrum-Button-label_e2d99e";
$91cc66a793b0c871$export$ebb4635c66bacdb9 = "_spectrum-ActionButton-label_e2d99e";
$91cc66a793b0c871$export$4a4f01c443eff992 = "_spectrum-ActionButton-hold_e2d99e";
$91cc66a793b0c871$export$40e1f009544bacf3 = "_spectrum-ActionButton--quiet_e2d99e";
$91cc66a793b0c871$export$d35bc1e505d1ebbf = "_is-disabled_e2d99e";
$91cc66a793b0c871$export$a9781837241c946d = "_is-open_e2d99e";
$91cc66a793b0c871$export$5ca7b274e4fff9fc = "_spectrum-FieldButton--quiet_e2d99e";
$91cc66a793b0c871$export$116f2fccf941d34d = "_spectrum-ClearButton--overBackground_e2d99e";
$91cc66a793b0c871$export$49280ffa5236ba8b = "_spectrum-ClearButton--small_e2d99e";
$91cc66a793b0c871$export$e7dc768d35940237 = "_is-focused_e2d99e";
$91cc66a793b0c871$export$20fd0f7cd4e6112f = "_is-active_e2d99e";
$91cc66a793b0c871$export$b818fdf0052a2cab = "_spectrum-Button--cta_e2d99e";
$91cc66a793b0c871$export$c1c3511f5e96e926 = "_spectrum-Button--primary_e2d99e";
$91cc66a793b0c871$export$4f1b75526afd8ff3 = "_spectrum-Button--secondary_e2d99e";
$91cc66a793b0c871$export$6f97cef817ff1cac = "_spectrum-Button--warning_e2d99e";
$91cc66a793b0c871$export$5cda1128f9112d2e = "_spectrum-Button--overBackground_e2d99e";
$91cc66a793b0c871$export$25f049c049371040 = "_spectrum-Button--quiet_e2d99e";
$91cc66a793b0c871$export$1e0fb04f31d3c22a = "_is-selected_e2d99e";
$91cc66a793b0c871$export$ccc536e1adbdc059 = "_spectrum-ActionButton--staticWhite_e2d99e";
$91cc66a793b0c871$export$8f7c9db66978d20f = "_spectrum-ActionButton--staticBlack_e2d99e";
$91cc66a793b0c871$export$e52daab43a62c528 = "_spectrum-LogicButton--and_e2d99e";
$91cc66a793b0c871$export$da76be6126aaa633 = "_spectrum-LogicButton--or_e2d99e";
$91cc66a793b0c871$export$e5b2f5233e4e5194 = "_is-placeholder_e2d99e";
$91cc66a793b0c871$export$c9f503f672e8a3c1 = "_spectrum-FieldButton--invalid_e2d99e";













var $29047d5b2695cedc$exports = {};

$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel", () => $29047d5b2695cedc$export$493d18e796ae054, (v) => $29047d5b2695cedc$export$493d18e796ae054 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel--positionSide", () => $29047d5b2695cedc$export$9e6f19dc21f22f2e, (v) => $29047d5b2695cedc$export$9e6f19dc21f22f2e = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel-requiredIcon", () => $29047d5b2695cedc$export$7c47642c7d46f3c9, (v) => $29047d5b2695cedc$export$7c47642c7d46f3c9 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-FieldLabel--alignEnd", () => $29047d5b2695cedc$export$885efcc08143a987, (v) => $29047d5b2695cedc$export$885efcc08143a987 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field", () => $29047d5b2695cedc$export$f6d480ae1e56eba0, (v) => $29047d5b2695cedc$export$f6d480ae1e56eba0 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field--positionTop", () => $29047d5b2695cedc$export$a4ea780a9064d7f9, (v) => $29047d5b2695cedc$export$a4ea780a9064d7f9 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-field", () => $29047d5b2695cedc$export$3ab8a3dc7f0563d, (v) => $29047d5b2695cedc$export$3ab8a3dc7f0563d = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-field--multiline", () => $29047d5b2695cedc$export$f58a1e966a92ba5e, (v) => $29047d5b2695cedc$export$f58a1e966a92ba5e = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field--positionSide", () => $29047d5b2695cedc$export$2963225c91179589, (v) => $29047d5b2695cedc$export$2963225c91179589 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Field-wrapper", () => $29047d5b2695cedc$export$127df0b7290eb8ef, (v) => $29047d5b2695cedc$export$127df0b7290eb8ef = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form", () => $29047d5b2695cedc$export$94d2bcc94afabd89, (v) => $29047d5b2695cedc$export$94d2bcc94afabd89 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form--positionSide", () => $29047d5b2695cedc$export$7f44db659563c8f4, (v) => $29047d5b2695cedc$export$7f44db659563c8f4 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form--positionTop", () => $29047d5b2695cedc$export$11b8bc81fe551057, (v) => $29047d5b2695cedc$export$11b8bc81fe551057 = v);
$parcel$export($29047d5b2695cedc$exports, "spectrum-Form-itemLabel", () => $29047d5b2695cedc$export$51ec27881a1e3928, (v) => $29047d5b2695cedc$export$51ec27881a1e3928 = v);
$parcel$export($29047d5b2695cedc$exports, "is-disabled", () => $29047d5b2695cedc$export$d35bc1e505d1ebbf, (v) => $29047d5b2695cedc$export$d35bc1e505d1ebbf = v);
var $29047d5b2695cedc$export$493d18e796ae054;
var $29047d5b2695cedc$export$9e6f19dc21f22f2e;
var $29047d5b2695cedc$export$7c47642c7d46f3c9;
var $29047d5b2695cedc$export$885efcc08143a987;
var $29047d5b2695cedc$export$f6d480ae1e56eba0;
var $29047d5b2695cedc$export$a4ea780a9064d7f9;
var $29047d5b2695cedc$export$3ab8a3dc7f0563d;
var $29047d5b2695cedc$export$f58a1e966a92ba5e;
var $29047d5b2695cedc$export$2963225c91179589;
var $29047d5b2695cedc$export$127df0b7290eb8ef;
var $29047d5b2695cedc$export$94d2bcc94afabd89;
var $29047d5b2695cedc$export$7f44db659563c8f4;
var $29047d5b2695cedc$export$11b8bc81fe551057;
var $29047d5b2695cedc$export$51ec27881a1e3928;
var $29047d5b2695cedc$export$d35bc1e505d1ebbf;
$29047d5b2695cedc$export$493d18e796ae054 = "_spectrum-FieldLabel_d2db1f";
$29047d5b2695cedc$export$9e6f19dc21f22f2e = "_spectrum-FieldLabel--positionSide_d2db1f";
$29047d5b2695cedc$export$7c47642c7d46f3c9 = "_spectrum-FieldLabel-requiredIcon_d2db1f";
$29047d5b2695cedc$export$885efcc08143a987 = "_spectrum-FieldLabel--alignEnd_d2db1f";
$29047d5b2695cedc$export$f6d480ae1e56eba0 = "_spectrum-Field_d2db1f";
$29047d5b2695cedc$export$a4ea780a9064d7f9 = "_spectrum-Field--positionTop_d2db1f";
$29047d5b2695cedc$export$3ab8a3dc7f0563d = "_spectrum-Field-field_d2db1f";
$29047d5b2695cedc$export$f58a1e966a92ba5e = "_spectrum-Field-field--multiline_d2db1f";
$29047d5b2695cedc$export$2963225c91179589 = "_spectrum-Field--positionSide_d2db1f";
$29047d5b2695cedc$export$127df0b7290eb8ef = "_spectrum-Field-wrapper_d2db1f";
$29047d5b2695cedc$export$94d2bcc94afabd89 = "_spectrum-Form_d2db1f";
$29047d5b2695cedc$export$7f44db659563c8f4 = "_spectrum-Form--positionSide_d2db1f";
$29047d5b2695cedc$export$11b8bc81fe551057 = "_spectrum-Form--positionTop_d2db1f";
$29047d5b2695cedc$export$51ec27881a1e3928 = "_spectrum-Form-itemLabel_d2db1f";
$29047d5b2695cedc$export$d35bc1e505d1ebbf = "_is-disabled_d2db1f";






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












const $6506b3972132f452$export$7637df911c069b4d = /*#__PURE__*/ $9LdFq$react.forwardRef(function $6506b3972132f452$export$7637df911c069b4d(props, ref) {
    props = $9LdFq$useProviderProps(props);
    let { isQuiet: isQuiet , isDisabled: isDisabled , validationState: validationState , isReadOnly: isReadOnly  } = props;
    let { contains: contains  } = $9LdFq$useFilter({
        sensitivity: 'base'
    });
    let state = $9LdFq$useComboBoxState({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: true,
        // Needs to be false here otherwise we double up on commitSelection/commitCustomValue calls when
        // user taps on underlay (i.e. initial tap will call setFocused(false) -> commitSelection/commitCustomValue via onBlur,
        // then the closing of the tray will call setFocused(false) again due to cleanup effect)
        shouldCloseOnBlur: false
    });
    let buttonRef = $9LdFq$useRef();
    let domRef = $9LdFq$useFocusableRef(ref, buttonRef);
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $9LdFq$useOverlayTrigger({
        type: 'listbox'
    }, state, buttonRef);
    let { labelProps: labelProps , fieldProps: fieldProps  } = $9LdFq$useField({
        ...props,
        labelElementType: 'span'
    });
    // Focus the button and show focus ring when clicking on the label
    labelProps.onClick = ()=>{
        if (!props.isDisabled) {
            buttonRef.current.focus();
            $9LdFq$setInteractionModality('keyboard');
        }
    };
    let onClose = ()=>state.commit()
    ;
    return(/*#__PURE__*/ $9LdFq$react.createElement($9LdFq$react.Fragment, null, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$Field, {
        ...props,
        labelProps: labelProps,
        elementType: "span",
        ref: domRef,
        includeNecessityIndicatorInAccessibilityName: true
    }, /*#__PURE__*/ $9LdFq$react.createElement($6506b3972132f452$var$ComboBoxButton, {
        ...$9LdFq$mergeProps(triggerProps, fieldProps, {
            autoFocus: props.autoFocus
        }),
        ref: buttonRef,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        isPlaceholder: !state.inputValue,
        validationState: validationState,
        onPress: ()=>!isReadOnly && state.open(null, 'manual')
    }, state.inputValue || props.placeholder || '')), /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$Tray, {
        isOpen: state.isOpen,
        onClose: onClose,
        isFixedHeight: true,
        isNonModal: true,
        ...overlayProps
    }, /*#__PURE__*/ $9LdFq$react.createElement($6506b3972132f452$var$ComboBoxTray, {
        ...props,
        onClose: onClose,
        overlayProps: overlayProps,
        state: state
    }))));
});
const $6506b3972132f452$var$ComboBoxButton = /*#__PURE__*/ $9LdFq$react.forwardRef(function ComboBoxButton(props, ref) {
    let { isQuiet: isQuiet , isDisabled: isDisabled , isPlaceholder: isPlaceholder , validationState: validationState , children: children , style: style , className: className  } = props;
    let formatMessage = $9LdFq$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($3e29a2ed63b3bab0$exports)));
    let valueId = $9LdFq$useId();
    let invalidId = $9LdFq$useId();
    let validationIcon = validationState === 'invalid' ? /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$spectrumiconsuiAlertMedium, {
        id: invalidId,
        "aria-label": formatMessage('invalid')
    }) : /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$spectrumiconsuiCheckmarkMedium, null);
    let validation = /*#__PURE__*/ $9LdFq$react.cloneElement(validationIcon, {
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-validationIcon', $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input-validationIcon'))
    });
    let { hoverProps: hoverProps , isHovered: isHovered  } = $9LdFq$useHover({
    });
    let { buttonProps: buttonProps , isPressed: isPressed  } = $9LdFq$useButton({
        ...props,
        'aria-labelledby': [
            props['aria-labelledby'],
            props['aria-label'] && !props['aria-labelledby'] ? props.id : null,
            valueId,
            validationState === 'invalid' ? invalidId : null
        ].filter(Boolean).join(' '),
        elementType: 'div'
    }, ref);
    return(/*#__PURE__*/ $9LdFq$react.createElement($9LdFq$FocusRing, {
        focusClass: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'is-focused'),
        focusRingClass: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'focus-ring')
    }, /*#__PURE__*/ $9LdFq$react.createElement("div", {
        ...$9LdFq$mergeProps(hoverProps, buttonProps),
        "aria-haspopup": "dialog",
        ref: ref,
        style: {
            ...style,
            outline: 'none'
        },
        className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'mobile-combobox'), className)
    }, /*#__PURE__*/ $9LdFq$react.createElement("div", {
        className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': validationState === 'invalid',
            'spectrum-Textfield--valid': validationState === 'valid',
            'spectrum-Textfield--quiet': isQuiet
        }, $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-field'))
    }, /*#__PURE__*/ $9LdFq$react.createElement("div", {
        className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-input', {
            'is-hovered': isHovered,
            'is-placeholder': isPlaceholder,
            'is-disabled': isDisabled
        }, $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input', $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($29047d5b2695cedc$exports)), 'spectrum-Field-field')), $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'mobile-input'))
    }, /*#__PURE__*/ $9LdFq$react.createElement("span", {
        id: valueId,
        className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'mobile-value')
    }, children)), validationState ? validation : null), /*#__PURE__*/ $9LdFq$react.createElement("div", {
        className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($91cc66a793b0c871$exports)), 'spectrum-FieldButton', {
            'spectrum-FieldButton--quiet': isQuiet,
            'is-active': isPressed,
            'is-disabled': isDisabled,
            'spectrum-FieldButton--invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-FieldButton'))
    }, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$spectrumiconsuiChevronDownMedium, {
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-Dropdown-chevron')
    })))));
});
function $6506b3972132f452$var$ComboBoxTray(props) {
    let { state: // completionMode = 'suggest',
    state , isDisabled: isDisabled , validationState: validationState , label: label , overlayProps: overlayProps , loadingState: loadingState , onLoadMore: onLoadMore , onClose: onClose  } = props;
    let timeout = $9LdFq$useRef(null);
    let [showLoading, setShowLoading] = $9LdFq$useState(false);
    let inputRef = $9LdFq$useRef();
    let buttonRef = $9LdFq$useRef();
    let popoverRef = $9LdFq$useRef();
    let listBoxRef = $9LdFq$useRef();
    let layout = $9LdFq$useListBoxLayout(state);
    let formatMessage = $9LdFq$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($3e29a2ed63b3bab0$exports)));
    let { inputProps: inputProps , listBoxProps: listBoxProps , labelProps: labelProps  } = $9LdFq$useComboBox({
        ...props,
        // completionMode,
        keyboardDelegate: layout,
        buttonRef: $9LdFq$unwrapDOMRef(buttonRef),
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef
    }, state);
    $9LdFq$react.useEffect(()=>{
        $9LdFq$focusSafely(inputRef.current);
        // When the tray unmounts, set state.isFocused (i.e. the tray input's focus tracker) to false.
        // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
        // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
        // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
        return ()=>{
            state.setFocused(false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let { dialogProps: dialogProps  } = $9LdFq$useDialog({
        'aria-labelledby': $9LdFq$useId(labelProps.id)
    }, popoverRef);
    // Override the role of the input to "searchbox" instead of "combobox".
    // Since the listbox is always visible, the combobox role doesn't really give us anything.
    // VoiceOver on iOS reads "double tap to collapse" when focused on the input rather than
    // "double tap to edit text", as with a textbox or searchbox. We'd like double tapping to
    // open the virtual keyboard rather than closing the tray.
    inputProps.role = 'searchbox';
    inputProps['aria-haspopup'] = 'listbox';
    delete inputProps.onTouchEnd;
    let clearButton = /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$ClearButton, {
        preventFocus: true,
        "aria-label": formatMessage('clear'),
        excludeFromTabOrder: true,
        onPress: ()=>{
            state.setInputValue('');
            inputRef.current.focus();
        },
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let loadingCircle = /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$ProgressCircle, {
        "aria-label": formatMessage('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-circleLoader', $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-circleLoader'))
    });
    // Close the software keyboard on scroll to give the user a bigger area to scroll.
    // But only do this if scrolling with touch, otherwise it can cause issues with touch
    // screen readers.
    let isTouchDown = $9LdFq$useRef(false);
    let onTouchStart = ()=>{
        isTouchDown.current = true;
    };
    let onTouchEnd = ()=>{
        isTouchDown.current = false;
    };
    let onScroll = $9LdFq$useCallback(()=>{
        if (!inputRef.current || document.activeElement !== inputRef.current || !isTouchDown.current) return;
        popoverRef.current.focus();
    }, [
        inputRef,
        popoverRef,
        isTouchDown
    ]);
    let inputValue = inputProps.value;
    let lastInputValue = $9LdFq$useRef(inputValue);
    $9LdFq$useEffect(()=>{
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
        // Close virtual keyboard if user hits Enter w/o any focused options
        if (e.key === 'Enter' && state.selectionManager.focusedKey == null) popoverRef.current.focus();
        else inputProps.onKeyDown(e);
    };
    return(/*#__PURE__*/ $9LdFq$react.createElement($9LdFq$FocusScope, {
        restoreFocus: true,
        contain: true
    }, /*#__PURE__*/ $9LdFq$react.createElement("div", {
        ...$9LdFq$mergeProps(overlayProps, dialogProps),
        ref: popoverRef,
        className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'tray-dialog')
    }, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$DismissButton, {
        onDismiss: onClose
    }), /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$TextFieldBase, {
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
        labelAlign: "start",
        labelPosition: "top",
        wrapperChildren: (state.inputValue !== '' || loadingState === 'filtering' || validationState != null) && !props.isReadOnly && clearButton,
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search', 'spectrum-Textfield', 'spectrum-Search--loadable', {
            'spectrum-Search--invalid': validationState === 'invalid',
            'spectrum-Search--valid': validationState === 'valid'
        }, $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'tray-textfield', {
            'has-label': !!props.label
        })),
        inputClassName: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'tray-textfield-input', $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-input')),
        validationIconClassName: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($f3224a2f471fe717$exports)), 'spectrum-Search-validationIcon')
    }), /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$ListBoxBase, {
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
        renderEmptyState: ()=>loadingState !== 'loading' && /*#__PURE__*/ $9LdFq$react.createElement("span", {
                className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'no-results')
            }, formatMessage('noResults'))
        ,
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'tray-listbox'),
        ref: listBoxRef,
        onScroll: onScroll,
        onLoadMore: onLoadMore,
        isLoading: loadingState === 'loading' || loadingState === 'loadingMore'
    }), /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$DismissButton, {
        onDismiss: onClose
    }))));
}















function $934aeeeb7b1e4f80$var$ComboBox(props, ref) {
    props = $9LdFq$useProviderProps(props);
    let isMobile = $9LdFq$useIsMobileDevice();
    if (isMobile) // menuTrigger=focus/manual don't apply to mobile combobox
    return(/*#__PURE__*/ $9LdFq$react.createElement($6506b3972132f452$export$7637df911c069b4d, {
        ...props,
        menuTrigger: "input",
        ref: ref
    }));
    else return(/*#__PURE__*/ $9LdFq$react.createElement($934aeeeb7b1e4f80$var$ComboBoxBase, {
        ...props,
        ref: ref
    }));
}
const $934aeeeb7b1e4f80$var$ComboBoxBase = /*#__PURE__*/ $9LdFq$react.forwardRef(function ComboBoxBase(props, ref) {
    let { menuTrigger: menuTrigger = 'input' , shouldFlip: shouldFlip = true , direction: direction = 'bottom' , isQuiet: isQuiet , loadingState: loadingState , onLoadMore: onLoadMore  } = props;
    let formatMessage = $9LdFq$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($3e29a2ed63b3bab0$exports)));
    let isAsync = loadingState != null;
    let popoverRef = $9LdFq$useRef();
    let unwrappedPopoverRef = $9LdFq$useUnwrapDOMRef(popoverRef);
    let buttonRef = $9LdFq$useRef();
    let unwrappedButtonRef = $9LdFq$useUnwrapDOMRef(buttonRef);
    let listBoxRef = $9LdFq$useRef();
    let inputRef = $9LdFq$useRef();
    let domRef = $9LdFq$useFocusableRef(ref, inputRef);
    let { contains: contains  } = $9LdFq$useFilter({
        sensitivity: 'base'
    });
    let state = $9LdFq$useComboBoxState({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: isAsync
    });
    let layout = $9LdFq$useListBoxLayout(state);
    let { buttonProps: buttonProps , inputProps: inputProps , listBoxProps: listBoxProps , labelProps: labelProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $9LdFq$useComboBox({
        ...props,
        keyboardDelegate: layout,
        buttonRef: unwrappedButtonRef,
        popoverRef: unwrappedPopoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        menuTrigger: menuTrigger
    }, state);
    let { overlayProps: overlayProps , placement: placement , updatePosition: updatePosition  } = $9LdFq$useOverlayPosition({
        targetRef: unwrappedButtonRef,
        overlayRef: unwrappedPopoverRef,
        scrollRef: listBoxRef,
        placement: `${direction} end`,
        shouldFlip: shouldFlip,
        isOpen: state.isOpen,
        onClose: state.close
    });
    // Measure the width of the inputfield and the button to inform the width of the menu (below).
    let [menuWidth, setMenuWidth] = $9LdFq$useState(null);
    let { scale: scale  } = $9LdFq$useProvider();
    let onResize = $9LdFq$useCallback(()=>{
        if (unwrappedButtonRef.current && inputRef.current) {
            let buttonWidth = unwrappedButtonRef.current.offsetWidth;
            let inputWidth = inputRef.current.offsetWidth;
            setMenuWidth(buttonWidth + inputWidth);
        }
    }, [
        unwrappedButtonRef,
        inputRef,
        setMenuWidth
    ]);
    $9LdFq$useResizeObserver({
        ref: domRef,
        onResize: onResize
    });
    $9LdFq$useLayoutEffect(onResize, [
        scale,
        onResize
    ]);
    // Update position once the ListBox has rendered. This ensures that
    // it flips properly when it doesn't fit in the available space.
    // TODO: add ResizeObserver to useOverlayPosition so we don't need this.
    $9LdFq$useLayoutEffect(()=>{
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
    return(/*#__PURE__*/ $9LdFq$react.createElement($9LdFq$react.Fragment, null, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$Field, {
        ...props,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        labelProps: labelProps,
        ref: domRef
    }, /*#__PURE__*/ $9LdFq$react.createElement($934aeeeb7b1e4f80$var$ComboBoxInput, {
        ...props,
        isOpen: state.isOpen,
        loadingState: loadingState,
        inputProps: inputProps,
        inputRef: inputRef,
        triggerProps: buttonProps,
        triggerRef: buttonRef
    })), /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$Popover, {
        isOpen: state.isOpen,
        UNSAFE_style: style,
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-popover', {
            'spectrum-InputGroup-popover--quiet': isQuiet
        }),
        ref: popoverRef,
        placement: placement,
        hideArrow: true,
        isNonModal: true,
        isDismissable: false
    }, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$ListBoxBase, {
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
        renderEmptyState: ()=>isAsync && /*#__PURE__*/ $9LdFq$react.createElement("span", {
                className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($d19a056b45e63e97$exports)), 'no-results')
            }, loadingState === 'loading' ? formatMessage('loading') : formatMessage('noResults'))
    }), /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$DismissButton, {
        onDismiss: ()=>state.close()
    }))));
});
const $934aeeeb7b1e4f80$var$ComboBoxInput = /*#__PURE__*/ $9LdFq$react.forwardRef(function ComboBoxInput(props, ref) {
    let { isQuiet: isQuiet , isDisabled: isDisabled , validationState: validationState , inputProps: inputProps , inputRef: inputRef , triggerProps: triggerProps , triggerRef: triggerRef , autoFocus: autoFocus , style: style , className: className , loadingState: loadingState , isOpen: isOpen , menuTrigger: menuTrigger  } = props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $9LdFq$useHover({
    });
    let formatMessage = $9LdFq$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($3e29a2ed63b3bab0$exports)));
    let timeout = $9LdFq$useRef(null);
    let [showLoading, setShowLoading] = $9LdFq$useState(false);
    let loadingCircle = /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$ProgressCircle, {
        "aria-label": formatMessage('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-circleLoader', $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input-circleLoader'))
    });
    let isLoading = loadingState === 'loading' || loadingState === 'filtering';
    let inputValue = inputProps.value;
    let lastInputValue = $9LdFq$useRef(inputValue);
    $9LdFq$useEffect(()=>{
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
    return(/*#__PURE__*/ $9LdFq$react.createElement($9LdFq$FocusRing, {
        within: true,
        isTextInput: true,
        focusClass: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'is-focused'),
        focusRingClass: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ $9LdFq$react.createElement("div", {
        ...hoverProps,
        ref: ref,
        style: style,
        className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid',
            'is-hovered': isHovered
        }, className)
    }, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$TextFieldBase, {
        inputProps: inputProps,
        inputRef: inputRef,
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-field'),
        inputClassName: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input'),
        validationIconClassName: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input-validationIcon'),
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        // loading circle should only be displayed if menu is open, if menuTrigger is "manual", or first time load (to stop circle from showing up when user selects an option)
        // TODO: add special case for completionMode: complete as well
        isLoading: showLoading && (isOpen || menuTrigger === 'manual' || loadingState === 'loading'),
        loadingIndicator: loadingState != null && loadingCircle
    }), /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$PressResponder, {
        preventFocusOnPress: true,
        isPressed: isOpen
    }, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$FieldButton, {
        ...triggerProps,
        ref: triggerRef,
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: validationState
    }, /*#__PURE__*/ $9LdFq$react.createElement($9LdFq$spectrumiconsuiChevronDownMedium, {
        UNSAFE_className: $9LdFq$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-Dropdown-chevron')
    }))))));
});
/**
 * ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */ const $934aeeeb7b1e4f80$export$72b9695b8216309a = /*#__PURE__*/ $9LdFq$react.forwardRef($934aeeeb7b1e4f80$var$ComboBox);





export {$9bebe0bd899521d2$re_export$Item as Item, $9bebe0bd899521d2$re_export$Section as Section, $934aeeeb7b1e4f80$export$72b9695b8216309a as ComboBox};
//# sourceMappingURL=module.js.map
