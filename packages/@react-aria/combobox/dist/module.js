import {announce as $grhDk$announce} from "@react-aria/live-announcer";
import {ariaHideOutside as $grhDk$ariaHideOutside} from "@react-aria/overlays";
import {listData as $grhDk$listData, getItemId as $grhDk$getItemId} from "@react-aria/listbox";
import {chain as $grhDk$chain, useLabels as $grhDk$useLabels, isAppleDevice as $grhDk$isAppleDevice, mergeProps as $grhDk$mergeProps} from "@react-aria/utils";
import {useMemo as $grhDk$useMemo, useRef as $grhDk$useRef, useEffect as $grhDk$useEffect} from "react";
import {getItemCount as $grhDk$getItemCount} from "@react-stately/collections";
import {ListKeyboardDelegate as $grhDk$ListKeyboardDelegate, useSelectableCollection as $grhDk$useSelectableCollection} from "@react-aria/selection";
import {useMenuTrigger as $grhDk$useMenuTrigger} from "@react-aria/menu";
import {useMessageFormatter as $grhDk$useMessageFormatter} from "@react-aria/i18n";
import {useTextField as $grhDk$useTextField} from "@react-aria/textfield";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $adf929fa89c44b49$exports = {};

$parcel$export($adf929fa89c44b49$exports, "useComboBox", () => $adf929fa89c44b49$export$8c18d1b4f7232bbf);






var $76518d5431fb5f2a$exports = {};
var $ea62dee6c9cc0fab$exports = {};
$ea62dee6c9cc0fab$exports = JSON.parse("{\"buttonLabel\":\"عرض المقترحات\",\"countAnnouncement\":\"{optionCount, plural, one {# خيار} other {# خيارات}} متاحة.\",\"focusAnnouncement\":\"{isGroupChange, select, true {المجموعة المدخلة {groupTitle}, مع {groupCount, plural, one {# خيار} other {# خيارات}}. } other {}}{optionText}{isSelected, select, true {, محدد} other {}}\",\"listboxLabel\":\"مقترحات\",\"selectedAnnouncement\":\"{optionText}، محدد\"}");


var $7b8b25a79b4788f1$exports = {};
$7b8b25a79b4788f1$exports = JSON.parse("{\"buttonLabel\":\"Покажи предложения\",\"countAnnouncement\":\"{optionCount, plural, one {# опция} other {# опции}} на разположение.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Въведена група {groupTitle}, с {groupCount, plural, one {# опция} other {# опции}}. } other {}}{optionText}{isSelected, select, true {, избрани} other {}}\",\"listboxLabel\":\"Предложения\",\"selectedAnnouncement\":\"{optionText}, избрани\"}");


var $33723afd1f350a75$exports = {};
$33723afd1f350a75$exports = JSON.parse("{\"buttonLabel\":\"Zobrazit doporučení\",\"countAnnouncement\":\"K dispozici {optionCount, plural, one {je # možnost} other {jsou/je # možnosti/-í}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadaná skupina „{groupTitle}“ {groupCount, plural, one {s # možností} other {se # možnostmi}}. } other {}}{optionText}{isSelected, select, true { (vybráno)} other {}}\",\"listboxLabel\":\"Návrhy\",\"selectedAnnouncement\":\"{optionText}, vybráno\"}");


var $35e05cc8ca1255b7$exports = {};
$35e05cc8ca1255b7$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# mulighed tilgængelig} other {# muligheder tilgængelige}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angivet gruppe {groupTitle}, med {groupCount, plural, one {# mulighed} other {# muligheder}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $338e54a1c3a590e3$exports = {};
$338e54a1c3a590e3$exports = JSON.parse("{\"buttonLabel\":\"Empfehlungen anzeigen\",\"countAnnouncement\":\"{optionCount, plural, one {# Option} other {# Optionen}} verfügbar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Eingetretene Gruppe {groupTitle}, mit {groupCount, plural, one {# Option} other {# Optionen}}. } other {}}{optionText}{isSelected, select, true {, ausgewählt} other {}}\",\"listboxLabel\":\"Empfehlungen\",\"selectedAnnouncement\":\"{optionText}, ausgewählt\"}");


var $32627d34f79cf921$exports = {};
$32627d34f79cf921$exports = JSON.parse("{\"buttonLabel\":\"Προβολή προτάσεων\",\"countAnnouncement\":\"{optionCount, plural, one {# επιλογή} other {# επιλογές }} διαθέσιμες.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Εισαγμένη ομάδα {groupTitle}, με {groupCount, plural, one {# επιλογή} other {# επιλογές}}. } other {}}{optionText}{isSelected, select, true {, επιλεγμένο} other {}}\",\"listboxLabel\":\"Προτάσεις\",\"selectedAnnouncement\":\"{optionText}, επιλέχθηκε\"}");


var $89c888556a5db8d6$exports = {};
$89c888556a5db8d6$exports = JSON.parse("{\"focusAnnouncement\":\"{isGroupChange, select, true {Entered group {groupTitle}, with {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, selected} other {}}\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} available.\",\"selectedAnnouncement\":\"{optionText}, selected\",\"buttonLabel\":\"Show suggestions\",\"listboxLabel\":\"Suggestions\"}");


var $e80704521b2a5972$exports = {};
$e80704521b2a5972$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugerencias\",\"countAnnouncement\":\"{optionCount, plural, one {# opción} other {# opciones}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Se ha unido al grupo {groupTitle}, con {groupCount, plural, one {# opción} other {# opciones}}. } other {}}{optionText}{isSelected, select, true {, seleccionado} other {}}\",\"listboxLabel\":\"Sugerencias\",\"selectedAnnouncement\":\"{optionText}, seleccionado\"}");


var $d389c540cabee073$exports = {};
$d389c540cabee073$exports = JSON.parse("{\"buttonLabel\":\"Kuva soovitused\",\"countAnnouncement\":\"{optionCount, plural, one {# valik} other {# valikud}} saadaval.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Sisestatud rühm {groupTitle}, valikuga {groupCount, plural, one {# valik} other {# valikud}}. } other {}}{optionText}{isSelected, select, true {, valitud} other {}}\",\"listboxLabel\":\"Soovitused\",\"selectedAnnouncement\":\"{optionText}, valitud\"}");


var $c82cce69513db274$exports = {};
$c82cce69513db274$exports = JSON.parse("{\"buttonLabel\":\"Näytä ehdotukset\",\"countAnnouncement\":\"{optionCount, plural, one {# vaihtoehto} other {# vaihtoehdot}} saatavilla.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Mentiin ryhmään {groupTitle}, {groupCount, plural, one {# vaihtoehdon} other {# vaihtoehdon}} kanssa.} other {}}{optionText}{isSelected, select, true {, valittu} other {}}\",\"listboxLabel\":\"Ehdotukset\",\"selectedAnnouncement\":\"{optionText}, valittu\"}");


var $82e924797060de3c$exports = {};
$82e924797060de3c$exports = JSON.parse("{\"buttonLabel\":\"Afficher les suggestions\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groupe {groupTitle} saisi, avec {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, sélectionné(s)} other {}}\",\"listboxLabel\":\"Suggestions\",\"selectedAnnouncement\":\"{optionText}, sélectionné\"}");


var $f0494191f1570410$exports = {};
$f0494191f1570410$exports = JSON.parse("{\"buttonLabel\":\"הצג הצעות\",\"countAnnouncement\":\"{optionCount, plural, one {אפשרות #} other {# אפשרויות}} במצב זמין.\",\"focusAnnouncement\":\"{isGroupChange, select, true {נכנס לקבוצה {groupTitle}, עם {groupCount, plural, one {אפשרות #} other {# אפשרויות}}. } other {}}{optionText}{isSelected, select, true {, נבחר} other {}}\",\"listboxLabel\":\"הצעות\",\"selectedAnnouncement\":\"{optionText}, נבחר\"}");


var $6124981429f90a15$exports = {};
$6124981429f90a15$exports = JSON.parse("{\"buttonLabel\":\"Prikaži prijedloge\",\"countAnnouncement\":\"Dostupno još: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena skupina {groupTitle}, s {groupCount, plural, one {# opcijom} other {# opcije/a}}. } other {}}{optionText}{isSelected, select, true {, odabranih} other {}}\",\"listboxLabel\":\"Prijedlozi\",\"selectedAnnouncement\":\"{optionText}, odabrano\"}");


var $933c925585c2da9e$exports = {};
$933c925585c2da9e$exports = JSON.parse("{\"buttonLabel\":\"Javaslatok megjelenítése\",\"countAnnouncement\":\"{optionCount, plural, one {# lehetőség} other {# lehetőség}} áll rendelkezésre.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Belépett a(z) {groupTitle} csoportba, amely {groupCount, plural, one {# lehetőséget} other {# lehetőséget}} tartalmaz. } other {}}{optionText}{isSelected, select, true {, kijelölve} other {}}\",\"listboxLabel\":\"Javaslatok\",\"selectedAnnouncement\":\"{optionText}, kijelölve\"}");


var $728e6242ec51fc69$exports = {};
$728e6242ec51fc69$exports = JSON.parse("{\"buttonLabel\":\"Mostra suggerimenti\",\"countAnnouncement\":\"{optionCount, plural, one {# opzione disponibile} other {# opzioni disponibili}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingresso nel gruppo {groupTitle}, con {groupCount, plural, one {# opzione} other {# opzioni}}. } other {}}{optionText}{isSelected, select, true {, selezionato} other {}}\",\"listboxLabel\":\"Suggerimenti\",\"selectedAnnouncement\":\"{optionText}, selezionato\"}");


var $4605799db3bc9fba$exports = {};
$4605799db3bc9fba$exports = JSON.parse("{\"buttonLabel\":\"候補を表示\",\"countAnnouncement\":\"{optionCount, plural, one {# 個のオプション} other {# 個のオプション}}を利用できます。\",\"focusAnnouncement\":\"{isGroupChange, select, true {入力されたグループ {groupTitle}、{groupCount, plural, one {# 個のオプション} other {# 個のオプション}}を含む。} other {}}{optionText}{isSelected, select, true {、選択済み} other {}}\",\"listboxLabel\":\"候補\",\"selectedAnnouncement\":\"{optionText}、選択済み\"}");


var $cabf71be726a67d1$exports = {};
$cabf71be726a67d1$exports = JSON.parse("{\"buttonLabel\":\"제안 사항 표시\",\"countAnnouncement\":\"{optionCount, plural, one {#개 옵션} other {#개 옵션}}을 사용할 수 있습니다.\",\"focusAnnouncement\":\"{isGroupChange, select, true {입력한 그룹 {groupTitle}, {groupCount, plural, one {#개 옵션} other {#개 옵션}}. } other {}}{optionText}{isSelected, select, true {, 선택됨} other {}}\",\"listboxLabel\":\"제안\",\"selectedAnnouncement\":\"{optionText}, 선택됨\"}");


var $fb1a93548a71572d$exports = {};
$fb1a93548a71572d$exports = JSON.parse("{\"buttonLabel\":\"Rodyti pasiūlymus\",\"countAnnouncement\":\"Yra {optionCount, plural, one {# parinktis} other {# parinktys (-ių)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Įvesta grupė {groupTitle}, su {groupCount, plural, one {# parinktimi} other {# parinktimis (-ių)}}. } other {}}{optionText}{isSelected, select, true {, pasirinkta} other {}}\",\"listboxLabel\":\"Pasiūlymai\",\"selectedAnnouncement\":\"{optionText}, pasirinkta\"}");


var $e63e1f4b6be454c1$exports = {};
$e63e1f4b6be454c1$exports = JSON.parse("{\"buttonLabel\":\"Rādīt ieteikumus\",\"countAnnouncement\":\"Pieejamo opciju skaits: {optionCount, plural, one {# opcija} other {# opcijas}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ievadīta grupa {groupTitle}, ar {groupCount, plural, one {# opciju} other {# opcijām}}. } other {}}{optionText}{isSelected, select, true {, atlasīta} other {}}\",\"listboxLabel\":\"Ieteikumi\",\"selectedAnnouncement\":\"{optionText}, atlasīta\"}");


var $a5c5631058957269$exports = {};
$a5c5631058957269$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativer}} finnes.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angitt gruppe {groupTitle}, med {groupCount, plural, one {# alternativ} other {# alternativer}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $040a4cd9a89b23e7$exports = {};
$040a4cd9a89b23e7$exports = JSON.parse("{\"buttonLabel\":\"Suggesties weergeven\",\"countAnnouncement\":\"{optionCount, plural, one {# optie} other {# opties}} beschikbaar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groep {groupTitle} ingevoerd met {groupCount, plural, one {# optie} other {# opties}}. } other {}}{optionText}{isSelected, select, true {, geselecteerd} other {}}\",\"listboxLabel\":\"Suggesties\",\"selectedAnnouncement\":\"{optionText}, geselecteerd\"}");


var $7aec2f4edfddda7e$exports = {};
$7aec2f4edfddda7e$exports = JSON.parse("{\"buttonLabel\":\"Wyświetlaj sugestie\",\"countAnnouncement\":\"dostępna/dostępne(-nych) {optionCount, plural, one {# opcja} other {# opcje(-i)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Dołączono do grupy {groupTitle}, z {groupCount, plural, one {# opcją} other {# opcjami}}. } other {}}{optionText}{isSelected, select, true {, wybrano} other {}}\",\"listboxLabel\":\"Sugestie\",\"selectedAnnouncement\":\"{optionText}, wybrano\"}");


var $4443a07cac1a9d97$exports = {};
$4443a07cac1a9d97$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugestões\",\"countAnnouncement\":\"{optionCount, plural, one {# opção} other {# opções}} disponível.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo inserido {groupTitle}, com {groupCount, plural, one {# opção} other {# opções}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugestões\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $fa2ec51f54c6bb2d$exports = {};
$fa2ec51f54c6bb2d$exports = JSON.parse("{\"buttonLabel\":\"Apresentar sugestões\",\"countAnnouncement\":\"{optionCount, plural, one {# opção} other {# opções}} disponível.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo introduzido {groupTitle}, com {groupCount, plural, one {# opção} other {# opções}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugestões\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $af3d205c18b20c48$exports = {};
$af3d205c18b20c48$exports = JSON.parse("{\"buttonLabel\":\"Afișare sugestii\",\"countAnnouncement\":\"{optionCount, plural, one {# opțiune} other {# opțiuni}} disponibile.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grup {groupTitle} introdus, cu {groupCount, plural, one {# opțiune} other {# opțiuni}}. } other {}}{optionText}{isSelected, select, true {, selectat} other {}}\",\"listboxLabel\":\"Sugestii\",\"selectedAnnouncement\":\"{optionText}, selectat\"}");


var $2183be534a8f40a4$exports = {};
$2183be534a8f40a4$exports = JSON.parse("{\"buttonLabel\":\"Показать предложения\",\"countAnnouncement\":\"{optionCount, plural, one {# параметр} other {# параметров}} доступно.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Введенная группа {groupTitle}, с {groupCount, plural, one {# параметром} other {# параметрами}}. } other {}}{optionText}{isSelected, select, true {, выбранными} other {}}\",\"listboxLabel\":\"Предложения\",\"selectedAnnouncement\":\"{optionText}, выбрано\"}");


var $1531802e84c89919$exports = {};
$1531802e84c89919$exports = JSON.parse("{\"buttonLabel\":\"Zobraziť návrhy\",\"countAnnouncement\":\"{optionCount, plural, one {# možnosť} other {# možnosti/-í}} k dispozícii.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadaná skupina {groupTitle}, s {groupCount, plural, one {# možnosťou} other {# možnosťami}}. } other {}}{optionText}{isSelected, select, true {, vybraté} other {}}\",\"listboxLabel\":\"Návrhy\",\"selectedAnnouncement\":\"{optionText}, vybraté\"}");


var $0d1d51d3ca407b61$exports = {};
$0d1d51d3ca407b61$exports = JSON.parse("{\"buttonLabel\":\"Prikaži predloge\",\"countAnnouncement\":\"Na voljo je {optionCount, plural, one {# opcija} other {# opcije}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Vnesena skupina {groupTitle}, z {groupCount, plural, one {# opcija} other {# opcije}}. } other {}}{optionText}{isSelected, select, true {, izbrano} other {}}\",\"listboxLabel\":\"Predlogi\",\"selectedAnnouncement\":\"{optionText}, izbrano\"}");


var $312464326e7459b6$exports = {};
$312464326e7459b6$exports = JSON.parse("{\"buttonLabel\":\"Prikaži predloge\",\"countAnnouncement\":\"Dostupno još: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena grupa {groupTitle}, s {groupCount, plural, one {# opcijom} other {# optione/a}}. } other {}}{optionText}{isSelected, select, true {, izabranih} other {}}\",\"listboxLabel\":\"Predlozi\",\"selectedAnnouncement\":\"{optionText}, izabrano\"}");


var $d2d53a4f87495d64$exports = {};
$d2d53a4f87495d64$exports = JSON.parse("{\"buttonLabel\":\"Visa förslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativ}} tillgängliga.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingick i gruppen {groupTitle} med {groupCount, plural, one {# alternativ} other {# alternativ}}. } other {}}{optionText}{isSelected, select, true {, valda} other {}}\",\"listboxLabel\":\"Förslag\",\"selectedAnnouncement\":\"{optionText}, valda\"}");


var $cd578e839021f7f2$exports = {};
$cd578e839021f7f2$exports = JSON.parse("{\"buttonLabel\":\"Önerileri göster\",\"countAnnouncement\":\"{optionCount, plural, one {# seçenek} other {# seçenekler}} kullanılabilir.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Girilen grup {groupTitle}, ile {groupCount, plural, one {# seçenek} other {# seçenekler}}. } other {}}{optionText}{isSelected, select, true {, seçildi} other {}}\",\"listboxLabel\":\"Öneriler\",\"selectedAnnouncement\":\"{optionText}, seçildi\"}");


var $48bf335c366a4806$exports = {};
$48bf335c366a4806$exports = JSON.parse("{\"buttonLabel\":\"Показати пропозиції\",\"countAnnouncement\":\"{optionCount, plural, one {# параметр} other {# параметри(-ів)}} доступно.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Введена група {groupTitle}, з {groupCount, plural, one {# параметр} other {# параметри(-ів)}}. } other {}}{optionText}{isSelected, select, true {, вибрано} other {}}\",\"listboxLabel\":\"Пропозиції\",\"selectedAnnouncement\":\"{optionText}, вибрано\"}");


var $abac7207d602b28c$exports = {};
$abac7207d602b28c$exports = JSON.parse("{\"buttonLabel\":\"显示建议\",\"countAnnouncement\":\"有 {optionCount, plural, one {# 个选项} other {# 个选项}}可用。\",\"focusAnnouncement\":\"{isGroupChange, select, true {进入了 {groupTitle} 组，其中有 {groupCount, plural, one {# 个选项} other {# 个选项}}. } other {}}{optionText}{isSelected, select, true {, 已选择} other {}}\",\"listboxLabel\":\"建议\",\"selectedAnnouncement\":\"{optionText}, 已选择\"}");


var $51b433ad01d77f1b$exports = {};
$51b433ad01d77f1b$exports = JSON.parse("{\"buttonLabel\":\"顯示建議\",\"countAnnouncement\":\"{optionCount, plural, one {# 選項} other {# 選項}} 可用。\",\"focusAnnouncement\":\"{isGroupChange, select, true {輸入的群組 {groupTitle}, 有 {groupCount, plural, one {# 選項} other {# 選項}}. } other {}}{optionText}{isSelected, select, true {, 已選取} other {}}\",\"listboxLabel\":\"建議\",\"selectedAnnouncement\":\"{optionText}, 已選取\"}");


$76518d5431fb5f2a$exports = {
    "ar-AE": $ea62dee6c9cc0fab$exports,
    "bg-BG": $7b8b25a79b4788f1$exports,
    "cs-CZ": $33723afd1f350a75$exports,
    "da-DK": $35e05cc8ca1255b7$exports,
    "de-DE": $338e54a1c3a590e3$exports,
    "el-GR": $32627d34f79cf921$exports,
    "en-US": $89c888556a5db8d6$exports,
    "es-ES": $e80704521b2a5972$exports,
    "et-EE": $d389c540cabee073$exports,
    "fi-FI": $c82cce69513db274$exports,
    "fr-FR": $82e924797060de3c$exports,
    "he-IL": $f0494191f1570410$exports,
    "hr-HR": $6124981429f90a15$exports,
    "hu-HU": $933c925585c2da9e$exports,
    "it-IT": $728e6242ec51fc69$exports,
    "ja-JP": $4605799db3bc9fba$exports,
    "ko-KR": $cabf71be726a67d1$exports,
    "lt-LT": $fb1a93548a71572d$exports,
    "lv-LV": $e63e1f4b6be454c1$exports,
    "nb-NO": $a5c5631058957269$exports,
    "nl-NL": $040a4cd9a89b23e7$exports,
    "pl-PL": $7aec2f4edfddda7e$exports,
    "pt-BR": $4443a07cac1a9d97$exports,
    "pt-PT": $fa2ec51f54c6bb2d$exports,
    "ro-RO": $af3d205c18b20c48$exports,
    "ru-RU": $2183be534a8f40a4$exports,
    "sk-SK": $1531802e84c89919$exports,
    "sl-SI": $0d1d51d3ca407b61$exports,
    "sr-SP": $312464326e7459b6$exports,
    "sv-SE": $d2d53a4f87495d64$exports,
    "tr-TR": $cd578e839021f7f2$exports,
    "uk-UA": $48bf335c366a4806$exports,
    "zh-CN": $abac7207d602b28c$exports,
    "zh-TW": $51b433ad01d77f1b$exports
};






function $adf929fa89c44b49$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef , popoverRef: popoverRef , inputRef: inputRef , listBoxRef: listBoxRef , keyboardDelegate: keyboardDelegate , shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap , isReadOnly: isReadOnly , isDisabled: isDisabled  } = props;
    let formatMessage = $grhDk$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($76518d5431fb5f2a$exports)));
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = $grhDk$useMenuTrigger({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    $grhDk$listData.set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let delegate = $grhDk$useMemo(()=>keyboardDelegate || new $grhDk$ListKeyboardDelegate(state.collection, state.disabledKeys, listBoxRef)
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps  } = $grhDk$useSelectableCollection({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Enter':
            case 'Tab':
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === 'Enter') e.preventDefault();
                state.commit();
                break;
            case 'Escape':
                state.revert();
                break;
            case 'ArrowDown':
                state.open('first', 'manual');
                break;
            case 'ArrowUp':
                state.open('last', 'manual');
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        // Ignore blur if focused moved to the button or into the popover.
        if (e.relatedTarget === buttonRef?.current || popoverRef.current?.contains(e.relatedTarget)) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $grhDk$useTextField({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly && $grhDk$chain(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown),
        onBlur: onBlur,
        value: state.inputValue,
        onFocus: onFocus,
        autoComplete: 'off'
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            // Focus the input field in case it isn't focused yet
            inputRef.current.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            inputRef.current.focus();
            state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null, 'manual');
        }
    };
    let triggerLabelProps = $grhDk$useLabels({
        id: menuTriggerProps.id,
        'aria-label': formatMessage('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = $grhDk$useLabels({
        id: menuProps.id,
        'aria-label': formatMessage('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = $grhDk$useRef(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            e.preventDefault();
            inputRef.current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + 0.5 * rect.width);
        let centerY = Math.ceil(rect.top + 0.5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            e.preventDefault();
            inputRef.current.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    let sectionKey = focusedItem?.parentKey ?? null;
    let itemKey = state.selectionManager.focusedKey ?? null;
    let lastSection = $grhDk$useRef(sectionKey);
    let lastItem = $grhDk$useRef(itemKey);
    $grhDk$useEffect(()=>{
        if ($grhDk$isAppleDevice() && focusedItem != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = section?.['aria-label'] || (typeof section?.rendered === 'string' ? section.rendered : '') || '';
            let announcement = formatMessage('focusAnnouncement', {
                isGroupChange: section && sectionKey !== lastSection.current,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...section.childNodes
                ].length : 0,
                optionText: focusedItem['aria-label'] || focusedItem.textValue || '',
                isSelected: isSelected
            });
            $grhDk$announce(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = $grhDk$getItemCount(state.collection);
    let lastSize = $grhDk$useRef(optionCount);
    let lastOpen = $grhDk$useRef(state.isOpen);
    $grhDk$useEffect(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || $grhDk$isAppleDevice());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = formatMessage('countAnnouncement', {
                optionCount: optionCount
            });
            $grhDk$announce(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = $grhDk$useRef(state.selectedKey);
    $grhDk$useEffect(()=>{
        if ($grhDk$isAppleDevice() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = formatMessage('selectedAnnouncement', {
                optionText: optionText
            });
            $grhDk$announce(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    $grhDk$useEffect(()=>{
        if (state.isOpen) return $grhDk$ariaHideOutside([
            inputRef.current,
            popoverRef.current
        ]);
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: $grhDk$mergeProps(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? $grhDk$getItemId(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: $grhDk$mergeProps(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}




export {$adf929fa89c44b49$export$8c18d1b4f7232bbf as useComboBox};
//# sourceMappingURL=module.js.map
