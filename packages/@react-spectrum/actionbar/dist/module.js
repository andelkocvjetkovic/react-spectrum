import "./main.css";
import {Item as $245b81a0eaf8cad7$re_export$Item} from "@react-stately/collections";
import {ActionButton as $bEdRd$ActionButton} from "@react-spectrum/button";
import {ActionGroup as $bEdRd$ActionGroup} from "@react-spectrum/actiongroup";
import {announce as $bEdRd$announce} from "@react-aria/live-announcer";
import {useStyleProps as $bEdRd$useStyleProps, useDOMRef as $bEdRd$useDOMRef, classNames as $bEdRd$classNames} from "@react-spectrum/utils";
import $bEdRd$spectrumiconsuiCrossLarge from "@spectrum-icons/ui/CrossLarge";
import {filterDOMProps as $bEdRd$filterDOMProps} from "@react-aria/utils";
import {FocusScope as $bEdRd$FocusScope} from "@react-aria/focus";
import {OpenTransition as $bEdRd$OpenTransition} from "@react-spectrum/overlays";
import $bEdRd$react, {useRef as $bEdRd$useRef, useEffect as $bEdRd$useEffect} from "react";
import {Text as $bEdRd$Text} from "@react-spectrum/text";
import {useKeyboard as $bEdRd$useKeyboard} from "@react-aria/interactions";
import {useMessageFormatter as $bEdRd$useMessageFormatter} from "@react-aria/i18n";
import {useProviderProps as $bEdRd$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9eea395ed8034497$exports = {};

$parcel$export($9eea395ed8034497$exports, "ActionBar", () => $9eea395ed8034497$export$e213cebad6250b4a);







var $6ad5e2abfceadf7d$exports = {};
var $95451780b98dc72c$exports = {};
$95451780b98dc72c$exports = JSON.parse("{\"actions\":\"الإجراءات\",\"actionsAvailable\":\"الإجراءات المتاحة.\",\"clearSelection\":\"إزالة التحديد\",\"selected\":\"{count, plural, =0 {غير محدد} other {# محدد}}\",\"selectedAll\":\"تم تحديد الكل\"}");


var $eecdd371519f05e8$exports = {};
$eecdd371519f05e8$exports = JSON.parse("{\"actions\":\"Действия\",\"actionsAvailable\":\"Налични действия.\",\"clearSelection\":\"Изчистване на избора\",\"selected\":\"{count, plural, =0 {Няма избрани} other {# избрани}}\",\"selectedAll\":\"Всички избрани\"}");


var $6cf58071d77bfb3d$exports = {};
$6cf58071d77bfb3d$exports = JSON.parse("{\"actions\":\"Akce\",\"actionsAvailable\":\"Dostupné akce.\",\"clearSelection\":\"Vymazat výběr\",\"selected\":\"{count, plural, =0 {Nic není vybráno} other {Vybráno #}}\",\"selectedAll\":\"Vybráno vše\"}");


var $c3c7c8595af8114b$exports = {};
$c3c7c8595af8114b$exports = JSON.parse("{\"actions\":\"Handlinger\",\"actionsAvailable\":\"Tilgængelige handlinger.\",\"clearSelection\":\"Ryd markering\",\"selected\":\"{count, plural, =0 {Ingen valgt} other {# valgt}}\",\"selectedAll\":\"Alle valgt\"}");


var $704b40fd3b6d3a12$exports = {};
$704b40fd3b6d3a12$exports = JSON.parse("{\"actions\":\"Aktionen\",\"actionsAvailable\":\"Aktionen verfügbar.\",\"clearSelection\":\"Auswahl löschen\",\"selected\":\"{count, plural, =0 {Nichts ausgewählt} other {# ausgewählt}}\",\"selectedAll\":\"Alles ausgewählt\"}");


var $50ec67e0efbb5300$exports = {};
$50ec67e0efbb5300$exports = JSON.parse("{\"actions\":\"Ενέργειες\",\"actionsAvailable\":\"Υπάρχουν διαθέσιμες ενέργειες.\",\"clearSelection\":\"Εκκαθάριση επιλογής\",\"selected\":\"{count, plural, =0 {Δεν επιλέχθηκε κανένα} other {Επιλέχθηκαν #}}\",\"selectedAll\":\"Επιλέχθηκαν όλα\"}");


var $d27d26bf999bd0bc$exports = {};
$d27d26bf999bd0bc$exports = JSON.parse("{\"clearSelection\":\"Clear selection\",\"selected\":\"{count, plural, =0 {None selected} other {# selected}}\",\"selectedAll\":\"All selected\",\"actions\":\"Actions\",\"actionsAvailable\":\"Actions available.\"}");


var $3a76636ecb52f700$exports = {};
$3a76636ecb52f700$exports = JSON.parse("{\"actions\":\"Acciones\",\"actionsAvailable\":\"Acciones disponibles.\",\"clearSelection\":\"Borrar selección\",\"selected\":\"{count, plural, =0 {Nada seleccionado} other {# seleccionado}}\",\"selectedAll\":\"Todo seleccionado\"}");


var $3bbde97076433809$exports = {};
$3bbde97076433809$exports = JSON.parse("{\"actions\":\"Toimingud\",\"actionsAvailable\":\"Toimingud saadaval.\",\"clearSelection\":\"Puhasta valik\",\"selected\":\"{count, plural, =0 {Pole valitud} other {# valitud}}\",\"selectedAll\":\"Kõik valitud\"}");


var $1dd1e51550eb2342$exports = {};
$1dd1e51550eb2342$exports = JSON.parse("{\"actions\":\"Toiminnot\",\"actionsAvailable\":\"Toiminnot käytettävissä.\",\"clearSelection\":\"Poista valinta\",\"selected\":\"{count, plural, =0 {Ei mitään valittu} other {# valittu}}\",\"selectedAll\":\"Kaikki valittu\"}");


var $ee82549939d95172$exports = {};
$ee82549939d95172$exports = JSON.parse("{\"actions\":\"Actions\",\"actionsAvailable\":\"Actions disponibles.\",\"clearSelection\":\"Supprimer la sélection\",\"selected\":\"{count, plural, =0 {Aucun élément sélectionné} other {# sélectionnés}}\",\"selectedAll\":\"Toute la sélection\"}");


var $377b67cf326ffb48$exports = {};
$377b67cf326ffb48$exports = JSON.parse("{\"actions\":\"פעולות\",\"actionsAvailable\":\"פעולות זמינות.\",\"clearSelection\":\"נקה בחירה\",\"selected\":\"{count, plural, =0 {לא בוצעה בחירה} other {# נבחרו}}\",\"selectedAll\":\"כל הפריטים שנבחרו\"}");


var $e470cb95541d7efe$exports = {};
$e470cb95541d7efe$exports = JSON.parse("{\"actions\":\"Radnje\",\"actionsAvailable\":\"Dostupne radnje.\",\"clearSelection\":\"Poništi odabir\",\"selected\":\"{count, plural, =0 {Nijedna nije odabrana} other {# je odabrano}}\",\"selectedAll\":\"Sve je odabrano\"}");


var $e609546deb60450c$exports = {};
$e609546deb60450c$exports = JSON.parse("{\"actions\":\"Műveletek\",\"actionsAvailable\":\"Műveletek állnak rendelkezésre.\",\"clearSelection\":\"Kijelölés törlése\",\"selected\":\"{count, plural, =0 {Egy sincs kijelölve} other {# kijelölve}}\",\"selectedAll\":\"Mind kijelölve\"}");


var $b81c6e7bed5f835d$exports = {};
$b81c6e7bed5f835d$exports = JSON.parse("{\"actions\":\"Azioni\",\"actionsAvailable\":\"Azioni disponibili.\",\"clearSelection\":\"Annulla selezione\",\"selected\":\"{count, plural, =0 {Nessuno selezionato} other {# selezionato/i}}\",\"selectedAll\":\"Tutti selezionati\"}");


var $81161e585d315f91$exports = {};
$81161e585d315f91$exports = JSON.parse("{\"actions\":\"アクション\",\"actionsAvailable\":\"アクションを利用できます。\",\"clearSelection\":\"選択をクリア\",\"selected\":\"{count, plural, =0 {選択されていません} other {# 個を選択しました}}\",\"selectedAll\":\"すべてを選択\"}");


var $43a1204157a6b522$exports = {};
$43a1204157a6b522$exports = JSON.parse("{\"actions\":\"액션\",\"actionsAvailable\":\"사용 가능한 액션\",\"clearSelection\":\"선택 항목 지우기\",\"selected\":\"{count, plural, =0 {선택된 항목 없음} other {#개 선택됨}}\",\"selectedAll\":\"모두 선택됨\"}");


var $6ccc7d073d3bfedc$exports = {};
$6ccc7d073d3bfedc$exports = JSON.parse("{\"actions\":\"Veiksmai\",\"actionsAvailable\":\"Galimi veiksmai.\",\"clearSelection\":\"Išvalyti pasirinkimą\",\"selected\":\"{count, plural, =0 {Nieko nepasirinkta} other {Pasirinkta #}}\",\"selectedAll\":\"Pasirinkta viskas\"}");


var $00efe6318876b118$exports = {};
$00efe6318876b118$exports = JSON.parse("{\"actions\":\"Darbības\",\"actionsAvailable\":\"Pieejamas darbības.\",\"clearSelection\":\"Notīrīt atlasi\",\"selected\":\"{count, plural, =0 {Nav atlasīts nekas} other {Atlasīts: #}}\",\"selectedAll\":\"Atlasīts viss\"}");


var $8cb1521aedde692a$exports = {};
$8cb1521aedde692a$exports = JSON.parse("{\"actions\":\"Handlinger\",\"actionsAvailable\":\"Tilgjengelige handlinger.\",\"clearSelection\":\"Tøm utvalg\",\"selected\":\"{count, plural, =0 {Ingen er valgt} other {# er valgt}}\",\"selectedAll\":\"Alle er valgt\"}");


var $d36a667115969994$exports = {};
$d36a667115969994$exports = JSON.parse("{\"actions\":\"Acties\",\"actionsAvailable\":\"Acties beschikbaar.\",\"clearSelection\":\"Selectie wissen\",\"selected\":\"{count, plural, =0 {Niets geselecteerd} other {# geselecteerd}}\",\"selectedAll\":\"Alles geselecteerd\"}");


var $8bf2688f8717656b$exports = {};
$8bf2688f8717656b$exports = JSON.parse("{\"actions\":\"Działania\",\"actionsAvailable\":\"Dostępne działania.\",\"clearSelection\":\"Wyczyść zaznaczenie\",\"selected\":\"{count, plural, =0 {Nie zaznaczono żadnego elementu} other {# zaznaczonych}}\",\"selectedAll\":\"Wszystkie zaznaczone\"}");


var $596f825c2a4936e9$exports = {};
$596f825c2a4936e9$exports = JSON.parse("{\"actions\":\"Ações\",\"actionsAvailable\":\"Ações disponíveis.\",\"clearSelection\":\"Limpar seleção\",\"selected\":\"{count, plural, =0 {Nada selecionado} other {# selecionado}}\",\"selectedAll\":\"Todos selecionados\"}");


var $f4db15ae3e48b05d$exports = {};
$f4db15ae3e48b05d$exports = JSON.parse("{\"actions\":\"Ações\",\"actionsAvailable\":\"Ações disponíveis.\",\"clearSelection\":\"Limpar seleção\",\"selected\":\"{count, plural, =0 {Nenhum selecionado} other {# selecionado}}\",\"selectedAll\":\"Tudo selecionado\"}");


var $9d74c6c7acccee8b$exports = {};
$9d74c6c7acccee8b$exports = JSON.parse("{\"actions\":\"Acțiuni\",\"actionsAvailable\":\"Acțiuni disponibile.\",\"clearSelection\":\"Goliți selecția\",\"selected\":\"{count, plural, =0 {Niciunul selectat} other {# selectate}}\",\"selectedAll\":\"Toate selectate\"}");


var $7de0f865888baddf$exports = {};
$7de0f865888baddf$exports = JSON.parse("{\"actions\":\"Действия\",\"actionsAvailable\":\"Возможно выполнение действий.\",\"clearSelection\":\"Очистить выбор\",\"selected\":\"{count, plural, =0 {Ничего не выбоано} other {# выбрано}}\",\"selectedAll\":\"Выбрано все\"}");


var $028fe501a860d1f9$exports = {};
$028fe501a860d1f9$exports = JSON.parse("{\"actions\":\"Akcie\",\"actionsAvailable\":\"Dostupné akcie.\",\"clearSelection\":\"Vymazať výber\",\"selected\":\"{count, plural, =0 {Žiadne vybraté položky} other {Počet vybratých položiek: #}}\",\"selectedAll\":\"Všetky vybraté položky\"}");


var $52a901f1a39a1535$exports = {};
$52a901f1a39a1535$exports = JSON.parse("{\"actions\":\"Dejanja\",\"actionsAvailable\":\"Na voljo so dejanja.\",\"clearSelection\":\"Počisti izbor\",\"selected\":\"{count, plural, =0 {Nič izbranih} other {# izbranih}}\",\"selectedAll\":\"Vsi izbrani\"}");


var $f304aa0ec2da6029$exports = {};
$f304aa0ec2da6029$exports = JSON.parse("{\"actions\":\"Radnje\",\"actionsAvailable\":\"Dostupne su radnje.\",\"clearSelection\":\"Poništi izbor\",\"selected\":\"{count, plural, =0 {Ništa nije izabrano} other {# je izabrano}}\",\"selectedAll\":\"Sve je izabrano\"}");


var $c8b9b6d85835e5be$exports = {};
$c8b9b6d85835e5be$exports = JSON.parse("{\"actions\":\"Åtgärder\",\"actionsAvailable\":\"Åtgärder finns.\",\"clearSelection\":\"Rensa markering\",\"selected\":\"{count, plural, =0 {Inga markerade} other {# markerade}}\",\"selectedAll\":\"Alla markerade\"}");


var $8f0ddee87d9111ed$exports = {};
$8f0ddee87d9111ed$exports = JSON.parse("{\"actions\":\"Eylemler\",\"actionsAvailable\":\"Eylemler mevcut.\",\"clearSelection\":\"Seçimi temizle\",\"selected\":\"{count, plural, =0 {Hiçbiri seçilmedi} other {# seçildi}}\",\"selectedAll\":\"Tümü seçildi\"}");


var $5f9292843dad2f22$exports = {};
$5f9292843dad2f22$exports = JSON.parse("{\"actions\":\"Дії\",\"actionsAvailable\":\"Доступні дії.\",\"clearSelection\":\"Очистити вибір\",\"selected\":\"{count, plural, =0 {Нічого не вибрано} other {Вибрано: #}}\",\"selectedAll\":\"Усе вибрано\"}");


var $990b9de741575b4c$exports = {};
$990b9de741575b4c$exports = JSON.parse("{\"actions\":\"操作\",\"actionsAvailable\":\"有可用操作。\",\"clearSelection\":\"清除选择\",\"selected\":\"{count, plural, =0 {无选择} other {已选择 # 个}}\",\"selectedAll\":\"全选\"}");


var $306e79c57479cdff$exports = {};
$306e79c57479cdff$exports = JSON.parse("{\"actions\":\"動作\",\"actionsAvailable\":\"可執行的動作。\",\"clearSelection\":\"清除選取項目\",\"selected\":\"{count, plural, =0 {未選取任何項目} other {已選取 # 個}}\",\"selectedAll\":\"已選取所有項目\"}");


$6ad5e2abfceadf7d$exports = {
    "ar-AE": $95451780b98dc72c$exports,
    "bg-BG": $eecdd371519f05e8$exports,
    "cs-CZ": $6cf58071d77bfb3d$exports,
    "da-DK": $c3c7c8595af8114b$exports,
    "de-DE": $704b40fd3b6d3a12$exports,
    "el-GR": $50ec67e0efbb5300$exports,
    "en-US": $d27d26bf999bd0bc$exports,
    "es-ES": $3a76636ecb52f700$exports,
    "et-EE": $3bbde97076433809$exports,
    "fi-FI": $1dd1e51550eb2342$exports,
    "fr-FR": $ee82549939d95172$exports,
    "he-IL": $377b67cf326ffb48$exports,
    "hr-HR": $e470cb95541d7efe$exports,
    "hu-HU": $e609546deb60450c$exports,
    "it-IT": $b81c6e7bed5f835d$exports,
    "ja-JP": $81161e585d315f91$exports,
    "ko-KR": $43a1204157a6b522$exports,
    "lt-LT": $6ccc7d073d3bfedc$exports,
    "lv-LV": $00efe6318876b118$exports,
    "nb-NO": $8cb1521aedde692a$exports,
    "nl-NL": $d36a667115969994$exports,
    "pl-PL": $8bf2688f8717656b$exports,
    "pt-BR": $596f825c2a4936e9$exports,
    "pt-PT": $f4db15ae3e48b05d$exports,
    "ro-RO": $9d74c6c7acccee8b$exports,
    "ru-RU": $7de0f865888baddf$exports,
    "sk-SK": $028fe501a860d1f9$exports,
    "sl-SI": $52a901f1a39a1535$exports,
    "sr-SP": $f304aa0ec2da6029$exports,
    "sv-SE": $c8b9b6d85835e5be$exports,
    "tr-TR": $8f0ddee87d9111ed$exports,
    "uk-UA": $5f9292843dad2f22$exports,
    "zh-CN": $990b9de741575b4c$exports,
    "zh-TW": $306e79c57479cdff$exports
};




var $db712b327383ea75$exports = {};

$parcel$export($db712b327383ea75$exports, "ActionBarContainer", () => $db712b327383ea75$export$ac2eb07f267e434c, (v) => $db712b327383ea75$export$ac2eb07f267e434c = v);
$parcel$export($db712b327383ea75$exports, "react-spectrum-ActionBar", () => $db712b327383ea75$export$71a4c2be37bc4ee5, (v) => $db712b327383ea75$export$71a4c2be37bc4ee5 = v);
$parcel$export($db712b327383ea75$exports, "is-open", () => $db712b327383ea75$export$a9781837241c946d, (v) => $db712b327383ea75$export$a9781837241c946d = v);
$parcel$export($db712b327383ea75$exports, "react-spectrum-ActionBar-bar", () => $db712b327383ea75$export$ea5a1c79ca7998e9, (v) => $db712b327383ea75$export$ea5a1c79ca7998e9 = v);
$parcel$export($db712b327383ea75$exports, "react-spectrum-ActionBar--emphasized", () => $db712b327383ea75$export$3377f5e3cddd68a7, (v) => $db712b327383ea75$export$3377f5e3cddd68a7 = v);
$parcel$export($db712b327383ea75$exports, "react-spectrum-ActionBar-selectedCount", () => $db712b327383ea75$export$8b9fb52122670f9e, (v) => $db712b327383ea75$export$8b9fb52122670f9e = v);
$parcel$export($db712b327383ea75$exports, "react-spectrum-ActionBar-actionGroup", () => $db712b327383ea75$export$adc2706661946993, (v) => $db712b327383ea75$export$adc2706661946993 = v);
var $db712b327383ea75$export$ac2eb07f267e434c;
var $db712b327383ea75$export$71a4c2be37bc4ee5;
var $db712b327383ea75$export$a9781837241c946d;
var $db712b327383ea75$export$ea5a1c79ca7998e9;
var $db712b327383ea75$export$3377f5e3cddd68a7;
var $db712b327383ea75$export$8b9fb52122670f9e;
var $db712b327383ea75$export$adc2706661946993;
$db712b327383ea75$export$ac2eb07f267e434c = "_ActionBarContainer_cca088";
$db712b327383ea75$export$71a4c2be37bc4ee5 = "_react-spectrum-ActionBar_cca088";
$db712b327383ea75$export$a9781837241c946d = "_is-open_cca088";
$db712b327383ea75$export$ea5a1c79ca7998e9 = "_react-spectrum-ActionBar-bar_cca088";
$db712b327383ea75$export$3377f5e3cddd68a7 = "_react-spectrum-ActionBar--emphasized_cca088";
$db712b327383ea75$export$8b9fb52122670f9e = "_react-spectrum-ActionBar-selectedCount_cca088";
$db712b327383ea75$export$adc2706661946993 = "_react-spectrum-ActionBar-actionGroup_cca088";






function $9eea395ed8034497$var$ActionBar(props, ref) {
    let isOpen = props.selectedItemCount !== 0;
    return(/*#__PURE__*/ $bEdRd$react.createElement($bEdRd$OpenTransition, {
        in: isOpen,
        mountOnEnter: true,
        unmountOnExit: true
    }, /*#__PURE__*/ $bEdRd$react.createElement($9eea395ed8034497$var$ActionBarInner, {
        ...props,
        ref: ref
    })));
}
const $9eea395ed8034497$var$ActionBarInner = /*#__PURE__*/ $bEdRd$react.forwardRef((props, ref)=>{
    props = $bEdRd$useProviderProps(props);
    let { children: children , isEmphasized: isEmphasized , onAction: onAction , onClearSelection: onClearSelection , selectedItemCount: selectedItemCount , isOpen: isOpen  } = props;
    let { styleProps: styleProps  } = $bEdRd$useStyleProps(props);
    let domRef = $bEdRd$useDOMRef(ref);
    let formatMessage = $bEdRd$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($6ad5e2abfceadf7d$exports)));
    // Store the last count greater than zero in a ref so that we can retain it while rendering the fade-out animation.
    let lastCount = $bEdRd$useRef(selectedItemCount);
    if (selectedItemCount === 'all' || selectedItemCount > 0) lastCount.current = selectedItemCount;
    let { keyboardProps: keyboardProps  } = $bEdRd$useKeyboard({
        onKeyDown (e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClearSelection();
            }
        }
    });
    // Announce "actions available" on mount.
    $bEdRd$useEffect(()=>{
        $bEdRd$announce(formatMessage('actionsAvailable'));
    }, [
        formatMessage
    ]);
    return(/*#__PURE__*/ $bEdRd$react.createElement($bEdRd$FocusScope, {
        restoreFocus: true
    }, /*#__PURE__*/ $bEdRd$react.createElement("div", {
        ...$bEdRd$filterDOMProps(props),
        ...styleProps,
        ...keyboardProps,
        ref: domRef,
        className: $bEdRd$classNames((/*@__PURE__*/$parcel$interopDefault($db712b327383ea75$exports)), 'react-spectrum-ActionBar', {
            'react-spectrum-ActionBar--emphasized': isEmphasized,
            'is-open': isOpen
        }, styleProps.className)
    }, /*#__PURE__*/ $bEdRd$react.createElement("div", {
        className: $bEdRd$classNames((/*@__PURE__*/$parcel$interopDefault($db712b327383ea75$exports)), 'react-spectrum-ActionBar-bar')
    }, /*#__PURE__*/ $bEdRd$react.createElement($bEdRd$ActionGroup, {
        "aria-label": formatMessage('actions'),
        isQuiet: true,
        staticColor: isEmphasized ? 'white' : null,
        overflowMode: "collapse",
        buttonLabelBehavior: "collapse",
        onAction: onAction,
        UNSAFE_className: $bEdRd$classNames((/*@__PURE__*/$parcel$interopDefault($db712b327383ea75$exports)), 'react-spectrum-ActionBar-actionGroup')
    }, children), /*#__PURE__*/ $bEdRd$react.createElement($bEdRd$ActionButton, {
        gridArea: "clear",
        "aria-label": formatMessage('clearSelection'),
        onPress: ()=>onClearSelection()
        ,
        isQuiet: true,
        staticColor: isEmphasized ? 'white' : null
    }, /*#__PURE__*/ $bEdRd$react.createElement($bEdRd$spectrumiconsuiCrossLarge, null)), /*#__PURE__*/ $bEdRd$react.createElement($bEdRd$Text, {
        UNSAFE_className: $bEdRd$classNames((/*@__PURE__*/$parcel$interopDefault($db712b327383ea75$exports)), 'react-spectrum-ActionBar-selectedCount')
    }, lastCount.current === 'all' ? formatMessage('selectedAll') : formatMessage('selected', {
        count: lastCount.current
    }))))));
});
/**
 * TODO: Add description of component here.
 */ const $9eea395ed8034497$export$e213cebad6250b4a = /*#__PURE__*/ $bEdRd$react.forwardRef($9eea395ed8034497$var$ActionBar);


var $ad8bda26c000f697$exports = {};

$parcel$export($ad8bda26c000f697$exports, "ActionBarContainer", () => $ad8bda26c000f697$export$ac2eb07f267e434c);





function $ad8bda26c000f697$var$ActionBarContainer(props, ref) {
    // Grabs specific props from the closest Provider (see https://react-spectrum.adobe.com/react-spectrum/Provider.html#property-groups). Remove if your component doesn't support any of the listed props.
    props = $bEdRd$useProviderProps(props);
    let { children: children  } = props;
    let { styleProps: styleProps  } = $bEdRd$useStyleProps(props);
    let domRef = $bEdRd$useDOMRef(ref);
    return(/*#__PURE__*/ $bEdRd$react.createElement("div", {
        ...$bEdRd$filterDOMProps(props),
        ...styleProps,
        ref: domRef,
        className: $bEdRd$classNames((/*@__PURE__*/$parcel$interopDefault($db712b327383ea75$exports)), 'ActionBarContainer', styleProps.className)
    }, children));
}
/**
 * TODO: Add description of component here.
 */ const $ad8bda26c000f697$export$ac2eb07f267e434c = /*#__PURE__*/ $bEdRd$react.forwardRef($ad8bda26c000f697$var$ActionBarContainer);





export {$245b81a0eaf8cad7$re_export$Item as Item, $9eea395ed8034497$export$e213cebad6250b4a as ActionBar, $ad8bda26c000f697$export$ac2eb07f267e434c as ActionBarContainer};
//# sourceMappingURL=module.js.map
