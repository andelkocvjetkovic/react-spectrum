var $fgbV4$reactarialiveannouncer = require("@react-aria/live-announcer");
var $fgbV4$reactariaoverlays = require("@react-aria/overlays");
var $fgbV4$reactarialistbox = require("@react-aria/listbox");
var $fgbV4$reactariautils = require("@react-aria/utils");
var $fgbV4$react = require("react");
var $fgbV4$reactstatelycollections = require("@react-stately/collections");
var $fgbV4$reactariaselection = require("@react-aria/selection");
var $fgbV4$reactariamenu = require("@react-aria/menu");
var $fgbV4$reactariai18n = require("@react-aria/i18n");
var $fgbV4$reactariatextfield = require("@react-aria/textfield");

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
var $1a707b51686ebf70$exports = {};

$parcel$export($1a707b51686ebf70$exports, "useComboBox", () => $1a707b51686ebf70$export$8c18d1b4f7232bbf);






var $3bd3973e51e6b26d$exports = {};
var $b83e8d27ada1ca06$exports = {};
$b83e8d27ada1ca06$exports = JSON.parse("{\"buttonLabel\":\"عرض المقترحات\",\"countAnnouncement\":\"{optionCount, plural, one {# خيار} other {# خيارات}} متاحة.\",\"focusAnnouncement\":\"{isGroupChange, select, true {المجموعة المدخلة {groupTitle}, مع {groupCount, plural, one {# خيار} other {# خيارات}}. } other {}}{optionText}{isSelected, select, true {, محدد} other {}}\",\"listboxLabel\":\"مقترحات\",\"selectedAnnouncement\":\"{optionText}، محدد\"}");


var $250bbc713dad1120$exports = {};
$250bbc713dad1120$exports = JSON.parse("{\"buttonLabel\":\"Покажи предложения\",\"countAnnouncement\":\"{optionCount, plural, one {# опция} other {# опции}} на разположение.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Въведена група {groupTitle}, с {groupCount, plural, one {# опция} other {# опции}}. } other {}}{optionText}{isSelected, select, true {, избрани} other {}}\",\"listboxLabel\":\"Предложения\",\"selectedAnnouncement\":\"{optionText}, избрани\"}");


var $97e8f122a585245a$exports = {};
$97e8f122a585245a$exports = JSON.parse("{\"buttonLabel\":\"Zobrazit doporučení\",\"countAnnouncement\":\"K dispozici {optionCount, plural, one {je # možnost} other {jsou/je # možnosti/-í}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadaná skupina „{groupTitle}“ {groupCount, plural, one {s # možností} other {se # možnostmi}}. } other {}}{optionText}{isSelected, select, true { (vybráno)} other {}}\",\"listboxLabel\":\"Návrhy\",\"selectedAnnouncement\":\"{optionText}, vybráno\"}");


var $6d1535c272ab19a7$exports = {};
$6d1535c272ab19a7$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# mulighed tilgængelig} other {# muligheder tilgængelige}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angivet gruppe {groupTitle}, med {groupCount, plural, one {# mulighed} other {# muligheder}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $48fd693b32c4b30a$exports = {};
$48fd693b32c4b30a$exports = JSON.parse("{\"buttonLabel\":\"Empfehlungen anzeigen\",\"countAnnouncement\":\"{optionCount, plural, one {# Option} other {# Optionen}} verfügbar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Eingetretene Gruppe {groupTitle}, mit {groupCount, plural, one {# Option} other {# Optionen}}. } other {}}{optionText}{isSelected, select, true {, ausgewählt} other {}}\",\"listboxLabel\":\"Empfehlungen\",\"selectedAnnouncement\":\"{optionText}, ausgewählt\"}");


var $862ccc74a38d1e1f$exports = {};
$862ccc74a38d1e1f$exports = JSON.parse("{\"buttonLabel\":\"Προβολή προτάσεων\",\"countAnnouncement\":\"{optionCount, plural, one {# επιλογή} other {# επιλογές }} διαθέσιμες.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Εισαγμένη ομάδα {groupTitle}, με {groupCount, plural, one {# επιλογή} other {# επιλογές}}. } other {}}{optionText}{isSelected, select, true {, επιλεγμένο} other {}}\",\"listboxLabel\":\"Προτάσεις\",\"selectedAnnouncement\":\"{optionText}, επιλέχθηκε\"}");


var $323595725b3cbbff$exports = {};
$323595725b3cbbff$exports = JSON.parse("{\"focusAnnouncement\":\"{isGroupChange, select, true {Entered group {groupTitle}, with {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, selected} other {}}\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} available.\",\"selectedAnnouncement\":\"{optionText}, selected\",\"buttonLabel\":\"Show suggestions\",\"listboxLabel\":\"Suggestions\"}");


var $3367f15548ffbdd3$exports = {};
$3367f15548ffbdd3$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugerencias\",\"countAnnouncement\":\"{optionCount, plural, one {# opción} other {# opciones}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Se ha unido al grupo {groupTitle}, con {groupCount, plural, one {# opción} other {# opciones}}. } other {}}{optionText}{isSelected, select, true {, seleccionado} other {}}\",\"listboxLabel\":\"Sugerencias\",\"selectedAnnouncement\":\"{optionText}, seleccionado\"}");


var $7189209c3d74b86a$exports = {};
$7189209c3d74b86a$exports = JSON.parse("{\"buttonLabel\":\"Kuva soovitused\",\"countAnnouncement\":\"{optionCount, plural, one {# valik} other {# valikud}} saadaval.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Sisestatud rühm {groupTitle}, valikuga {groupCount, plural, one {# valik} other {# valikud}}. } other {}}{optionText}{isSelected, select, true {, valitud} other {}}\",\"listboxLabel\":\"Soovitused\",\"selectedAnnouncement\":\"{optionText}, valitud\"}");


var $7e2992b394a1cbc7$exports = {};
$7e2992b394a1cbc7$exports = JSON.parse("{\"buttonLabel\":\"Näytä ehdotukset\",\"countAnnouncement\":\"{optionCount, plural, one {# vaihtoehto} other {# vaihtoehdot}} saatavilla.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Mentiin ryhmään {groupTitle}, {groupCount, plural, one {# vaihtoehdon} other {# vaihtoehdon}} kanssa.} other {}}{optionText}{isSelected, select, true {, valittu} other {}}\",\"listboxLabel\":\"Ehdotukset\",\"selectedAnnouncement\":\"{optionText}, valittu\"}");


var $72c541874a7265b7$exports = {};
$72c541874a7265b7$exports = JSON.parse("{\"buttonLabel\":\"Afficher les suggestions\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groupe {groupTitle} saisi, avec {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, sélectionné(s)} other {}}\",\"listboxLabel\":\"Suggestions\",\"selectedAnnouncement\":\"{optionText}, sélectionné\"}");


var $53d86515965fba18$exports = {};
$53d86515965fba18$exports = JSON.parse("{\"buttonLabel\":\"הצג הצעות\",\"countAnnouncement\":\"{optionCount, plural, one {אפשרות #} other {# אפשרויות}} במצב זמין.\",\"focusAnnouncement\":\"{isGroupChange, select, true {נכנס לקבוצה {groupTitle}, עם {groupCount, plural, one {אפשרות #} other {# אפשרויות}}. } other {}}{optionText}{isSelected, select, true {, נבחר} other {}}\",\"listboxLabel\":\"הצעות\",\"selectedAnnouncement\":\"{optionText}, נבחר\"}");


var $4d9f0ce002ca8bec$exports = {};
$4d9f0ce002ca8bec$exports = JSON.parse("{\"buttonLabel\":\"Prikaži prijedloge\",\"countAnnouncement\":\"Dostupno još: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena skupina {groupTitle}, s {groupCount, plural, one {# opcijom} other {# opcije/a}}. } other {}}{optionText}{isSelected, select, true {, odabranih} other {}}\",\"listboxLabel\":\"Prijedlozi\",\"selectedAnnouncement\":\"{optionText}, odabrano\"}");


var $9cd38c4312eea987$exports = {};
$9cd38c4312eea987$exports = JSON.parse("{\"buttonLabel\":\"Javaslatok megjelenítése\",\"countAnnouncement\":\"{optionCount, plural, one {# lehetőség} other {# lehetőség}} áll rendelkezésre.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Belépett a(z) {groupTitle} csoportba, amely {groupCount, plural, one {# lehetőséget} other {# lehetőséget}} tartalmaz. } other {}}{optionText}{isSelected, select, true {, kijelölve} other {}}\",\"listboxLabel\":\"Javaslatok\",\"selectedAnnouncement\":\"{optionText}, kijelölve\"}");


var $4f06a52736eab0df$exports = {};
$4f06a52736eab0df$exports = JSON.parse("{\"buttonLabel\":\"Mostra suggerimenti\",\"countAnnouncement\":\"{optionCount, plural, one {# opzione disponibile} other {# opzioni disponibili}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingresso nel gruppo {groupTitle}, con {groupCount, plural, one {# opzione} other {# opzioni}}. } other {}}{optionText}{isSelected, select, true {, selezionato} other {}}\",\"listboxLabel\":\"Suggerimenti\",\"selectedAnnouncement\":\"{optionText}, selezionato\"}");


var $cc4e2e7f7797c574$exports = {};
$cc4e2e7f7797c574$exports = JSON.parse("{\"buttonLabel\":\"候補を表示\",\"countAnnouncement\":\"{optionCount, plural, one {# 個のオプション} other {# 個のオプション}}を利用できます。\",\"focusAnnouncement\":\"{isGroupChange, select, true {入力されたグループ {groupTitle}、{groupCount, plural, one {# 個のオプション} other {# 個のオプション}}を含む。} other {}}{optionText}{isSelected, select, true {、選択済み} other {}}\",\"listboxLabel\":\"候補\",\"selectedAnnouncement\":\"{optionText}、選択済み\"}");


var $d5da1536e4368014$exports = {};
$d5da1536e4368014$exports = JSON.parse("{\"buttonLabel\":\"제안 사항 표시\",\"countAnnouncement\":\"{optionCount, plural, one {#개 옵션} other {#개 옵션}}을 사용할 수 있습니다.\",\"focusAnnouncement\":\"{isGroupChange, select, true {입력한 그룹 {groupTitle}, {groupCount, plural, one {#개 옵션} other {#개 옵션}}. } other {}}{optionText}{isSelected, select, true {, 선택됨} other {}}\",\"listboxLabel\":\"제안\",\"selectedAnnouncement\":\"{optionText}, 선택됨\"}");


var $4bdc90ca07202831$exports = {};
$4bdc90ca07202831$exports = JSON.parse("{\"buttonLabel\":\"Rodyti pasiūlymus\",\"countAnnouncement\":\"Yra {optionCount, plural, one {# parinktis} other {# parinktys (-ių)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Įvesta grupė {groupTitle}, su {groupCount, plural, one {# parinktimi} other {# parinktimis (-ių)}}. } other {}}{optionText}{isSelected, select, true {, pasirinkta} other {}}\",\"listboxLabel\":\"Pasiūlymai\",\"selectedAnnouncement\":\"{optionText}, pasirinkta\"}");


var $bea9afc0b53bd069$exports = {};
$bea9afc0b53bd069$exports = JSON.parse("{\"buttonLabel\":\"Rādīt ieteikumus\",\"countAnnouncement\":\"Pieejamo opciju skaits: {optionCount, plural, one {# opcija} other {# opcijas}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ievadīta grupa {groupTitle}, ar {groupCount, plural, one {# opciju} other {# opcijām}}. } other {}}{optionText}{isSelected, select, true {, atlasīta} other {}}\",\"listboxLabel\":\"Ieteikumi\",\"selectedAnnouncement\":\"{optionText}, atlasīta\"}");


var $2b8d7f24a8494c5f$exports = {};
$2b8d7f24a8494c5f$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativer}} finnes.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angitt gruppe {groupTitle}, med {groupCount, plural, one {# alternativ} other {# alternativer}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $4ab8580f4b7afc3d$exports = {};
$4ab8580f4b7afc3d$exports = JSON.parse("{\"buttonLabel\":\"Suggesties weergeven\",\"countAnnouncement\":\"{optionCount, plural, one {# optie} other {# opties}} beschikbaar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groep {groupTitle} ingevoerd met {groupCount, plural, one {# optie} other {# opties}}. } other {}}{optionText}{isSelected, select, true {, geselecteerd} other {}}\",\"listboxLabel\":\"Suggesties\",\"selectedAnnouncement\":\"{optionText}, geselecteerd\"}");


var $4f1960387c9732b0$exports = {};
$4f1960387c9732b0$exports = JSON.parse("{\"buttonLabel\":\"Wyświetlaj sugestie\",\"countAnnouncement\":\"dostępna/dostępne(-nych) {optionCount, plural, one {# opcja} other {# opcje(-i)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Dołączono do grupy {groupTitle}, z {groupCount, plural, one {# opcją} other {# opcjami}}. } other {}}{optionText}{isSelected, select, true {, wybrano} other {}}\",\"listboxLabel\":\"Sugestie\",\"selectedAnnouncement\":\"{optionText}, wybrano\"}");


var $0e1975fb651d278b$exports = {};
$0e1975fb651d278b$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugestões\",\"countAnnouncement\":\"{optionCount, plural, one {# opção} other {# opções}} disponível.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo inserido {groupTitle}, com {groupCount, plural, one {# opção} other {# opções}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugestões\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $710db41efb26dcdb$exports = {};
$710db41efb26dcdb$exports = JSON.parse("{\"buttonLabel\":\"Apresentar sugestões\",\"countAnnouncement\":\"{optionCount, plural, one {# opção} other {# opções}} disponível.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo introduzido {groupTitle}, com {groupCount, plural, one {# opção} other {# opções}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugestões\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $50f1a37784d45978$exports = {};
$50f1a37784d45978$exports = JSON.parse("{\"buttonLabel\":\"Afișare sugestii\",\"countAnnouncement\":\"{optionCount, plural, one {# opțiune} other {# opțiuni}} disponibile.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grup {groupTitle} introdus, cu {groupCount, plural, one {# opțiune} other {# opțiuni}}. } other {}}{optionText}{isSelected, select, true {, selectat} other {}}\",\"listboxLabel\":\"Sugestii\",\"selectedAnnouncement\":\"{optionText}, selectat\"}");


var $90c5736691f4bc77$exports = {};
$90c5736691f4bc77$exports = JSON.parse("{\"buttonLabel\":\"Показать предложения\",\"countAnnouncement\":\"{optionCount, plural, one {# параметр} other {# параметров}} доступно.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Введенная группа {groupTitle}, с {groupCount, plural, one {# параметром} other {# параметрами}}. } other {}}{optionText}{isSelected, select, true {, выбранными} other {}}\",\"listboxLabel\":\"Предложения\",\"selectedAnnouncement\":\"{optionText}, выбрано\"}");


var $98bd8eb77c8b56eb$exports = {};
$98bd8eb77c8b56eb$exports = JSON.parse("{\"buttonLabel\":\"Zobraziť návrhy\",\"countAnnouncement\":\"{optionCount, plural, one {# možnosť} other {# možnosti/-í}} k dispozícii.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadaná skupina {groupTitle}, s {groupCount, plural, one {# možnosťou} other {# možnosťami}}. } other {}}{optionText}{isSelected, select, true {, vybraté} other {}}\",\"listboxLabel\":\"Návrhy\",\"selectedAnnouncement\":\"{optionText}, vybraté\"}");


var $2522c58fc1b97ee5$exports = {};
$2522c58fc1b97ee5$exports = JSON.parse("{\"buttonLabel\":\"Prikaži predloge\",\"countAnnouncement\":\"Na voljo je {optionCount, plural, one {# opcija} other {# opcije}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Vnesena skupina {groupTitle}, z {groupCount, plural, one {# opcija} other {# opcije}}. } other {}}{optionText}{isSelected, select, true {, izbrano} other {}}\",\"listboxLabel\":\"Predlogi\",\"selectedAnnouncement\":\"{optionText}, izbrano\"}");


var $1bbac84315054079$exports = {};
$1bbac84315054079$exports = JSON.parse("{\"buttonLabel\":\"Prikaži predloge\",\"countAnnouncement\":\"Dostupno još: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena grupa {groupTitle}, s {groupCount, plural, one {# opcijom} other {# optione/a}}. } other {}}{optionText}{isSelected, select, true {, izabranih} other {}}\",\"listboxLabel\":\"Predlozi\",\"selectedAnnouncement\":\"{optionText}, izabrano\"}");


var $708db5fc65d6f886$exports = {};
$708db5fc65d6f886$exports = JSON.parse("{\"buttonLabel\":\"Visa förslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativ}} tillgängliga.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingick i gruppen {groupTitle} med {groupCount, plural, one {# alternativ} other {# alternativ}}. } other {}}{optionText}{isSelected, select, true {, valda} other {}}\",\"listboxLabel\":\"Förslag\",\"selectedAnnouncement\":\"{optionText}, valda\"}");


var $c26b0d3dbc838c60$exports = {};
$c26b0d3dbc838c60$exports = JSON.parse("{\"buttonLabel\":\"Önerileri göster\",\"countAnnouncement\":\"{optionCount, plural, one {# seçenek} other {# seçenekler}} kullanılabilir.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Girilen grup {groupTitle}, ile {groupCount, plural, one {# seçenek} other {# seçenekler}}. } other {}}{optionText}{isSelected, select, true {, seçildi} other {}}\",\"listboxLabel\":\"Öneriler\",\"selectedAnnouncement\":\"{optionText}, seçildi\"}");


var $5d503e95d8ff1d4f$exports = {};
$5d503e95d8ff1d4f$exports = JSON.parse("{\"buttonLabel\":\"Показати пропозиції\",\"countAnnouncement\":\"{optionCount, plural, one {# параметр} other {# параметри(-ів)}} доступно.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Введена група {groupTitle}, з {groupCount, plural, one {# параметр} other {# параметри(-ів)}}. } other {}}{optionText}{isSelected, select, true {, вибрано} other {}}\",\"listboxLabel\":\"Пропозиції\",\"selectedAnnouncement\":\"{optionText}, вибрано\"}");


var $b2dcd0c702df3398$exports = {};
$b2dcd0c702df3398$exports = JSON.parse("{\"buttonLabel\":\"显示建议\",\"countAnnouncement\":\"有 {optionCount, plural, one {# 个选项} other {# 个选项}}可用。\",\"focusAnnouncement\":\"{isGroupChange, select, true {进入了 {groupTitle} 组，其中有 {groupCount, plural, one {# 个选项} other {# 个选项}}. } other {}}{optionText}{isSelected, select, true {, 已选择} other {}}\",\"listboxLabel\":\"建议\",\"selectedAnnouncement\":\"{optionText}, 已选择\"}");


var $368202a43331effb$exports = {};
$368202a43331effb$exports = JSON.parse("{\"buttonLabel\":\"顯示建議\",\"countAnnouncement\":\"{optionCount, plural, one {# 選項} other {# 選項}} 可用。\",\"focusAnnouncement\":\"{isGroupChange, select, true {輸入的群組 {groupTitle}, 有 {groupCount, plural, one {# 選項} other {# 選項}}. } other {}}{optionText}{isSelected, select, true {, 已選取} other {}}\",\"listboxLabel\":\"建議\",\"selectedAnnouncement\":\"{optionText}, 已選取\"}");


$3bd3973e51e6b26d$exports = {
    "ar-AE": $b83e8d27ada1ca06$exports,
    "bg-BG": $250bbc713dad1120$exports,
    "cs-CZ": $97e8f122a585245a$exports,
    "da-DK": $6d1535c272ab19a7$exports,
    "de-DE": $48fd693b32c4b30a$exports,
    "el-GR": $862ccc74a38d1e1f$exports,
    "en-US": $323595725b3cbbff$exports,
    "es-ES": $3367f15548ffbdd3$exports,
    "et-EE": $7189209c3d74b86a$exports,
    "fi-FI": $7e2992b394a1cbc7$exports,
    "fr-FR": $72c541874a7265b7$exports,
    "he-IL": $53d86515965fba18$exports,
    "hr-HR": $4d9f0ce002ca8bec$exports,
    "hu-HU": $9cd38c4312eea987$exports,
    "it-IT": $4f06a52736eab0df$exports,
    "ja-JP": $cc4e2e7f7797c574$exports,
    "ko-KR": $d5da1536e4368014$exports,
    "lt-LT": $4bdc90ca07202831$exports,
    "lv-LV": $bea9afc0b53bd069$exports,
    "nb-NO": $2b8d7f24a8494c5f$exports,
    "nl-NL": $4ab8580f4b7afc3d$exports,
    "pl-PL": $4f1960387c9732b0$exports,
    "pt-BR": $0e1975fb651d278b$exports,
    "pt-PT": $710db41efb26dcdb$exports,
    "ro-RO": $50f1a37784d45978$exports,
    "ru-RU": $90c5736691f4bc77$exports,
    "sk-SK": $98bd8eb77c8b56eb$exports,
    "sl-SI": $2522c58fc1b97ee5$exports,
    "sr-SP": $1bbac84315054079$exports,
    "sv-SE": $708db5fc65d6f886$exports,
    "tr-TR": $c26b0d3dbc838c60$exports,
    "uk-UA": $5d503e95d8ff1d4f$exports,
    "zh-CN": $b2dcd0c702df3398$exports,
    "zh-TW": $368202a43331effb$exports
};






function $1a707b51686ebf70$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef , popoverRef: popoverRef , inputRef: inputRef , listBoxRef: listBoxRef , keyboardDelegate: keyboardDelegate , shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap , isReadOnly: isReadOnly , isDisabled: isDisabled  } = props;
    let formatMessage = $fgbV4$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($3bd3973e51e6b26d$exports)));
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = $fgbV4$reactariamenu.useMenuTrigger({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    $fgbV4$reactarialistbox.listData.set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let delegate = $fgbV4$react.useMemo(()=>keyboardDelegate || new $fgbV4$reactariaselection.ListKeyboardDelegate(state.collection, state.disabledKeys, listBoxRef)
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps  } = $fgbV4$reactariaselection.useSelectableCollection({
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
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $fgbV4$reactariatextfield.useTextField({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly && $fgbV4$reactariautils.chain(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown),
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
    let triggerLabelProps = $fgbV4$reactariautils.useLabels({
        id: menuTriggerProps.id,
        'aria-label': formatMessage('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = $fgbV4$reactariautils.useLabels({
        id: menuProps.id,
        'aria-label': formatMessage('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = $fgbV4$react.useRef(0);
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
    let lastSection = $fgbV4$react.useRef(sectionKey);
    let lastItem = $fgbV4$react.useRef(itemKey);
    $fgbV4$react.useEffect(()=>{
        if ($fgbV4$reactariautils.isAppleDevice() && focusedItem != null && itemKey !== lastItem.current) {
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
            $fgbV4$reactarialiveannouncer.announce(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = $fgbV4$reactstatelycollections.getItemCount(state.collection);
    let lastSize = $fgbV4$react.useRef(optionCount);
    let lastOpen = $fgbV4$react.useRef(state.isOpen);
    $fgbV4$react.useEffect(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || $fgbV4$reactariautils.isAppleDevice());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = formatMessage('countAnnouncement', {
                optionCount: optionCount
            });
            $fgbV4$reactarialiveannouncer.announce(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = $fgbV4$react.useRef(state.selectedKey);
    $fgbV4$react.useEffect(()=>{
        if ($fgbV4$reactariautils.isAppleDevice() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = formatMessage('selectedAnnouncement', {
                optionText: optionText
            });
            $fgbV4$reactarialiveannouncer.announce(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    $fgbV4$react.useEffect(()=>{
        if (state.isOpen) return $fgbV4$reactariaoverlays.ariaHideOutside([
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
        inputProps: $fgbV4$reactariautils.mergeProps(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? $fgbV4$reactarialistbox.getItemId(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: $fgbV4$reactariautils.mergeProps(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


$parcel$exportWildcard(module.exports, $1a707b51686ebf70$exports);


//# sourceMappingURL=main.js.map
