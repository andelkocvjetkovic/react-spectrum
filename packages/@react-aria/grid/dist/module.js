import {Rect as $3kJvh$Rect} from "@react-stately/virtualizer";
import {announce as $3kJvh$announce} from "@react-aria/live-announcer";
import {useId as $3kJvh$useId, filterDOMProps as $3kJvh$filterDOMProps, mergeProps as $3kJvh$mergeProps, useUpdateEffect as $3kJvh$useUpdateEffect, useDescription as $3kJvh$useDescription} from "@react-aria/utils";
import {useMemo as $3kJvh$useMemo, useRef as $3kJvh$useRef} from "react";
import {useMessageFormatter as $3kJvh$useMessageFormatter, useCollator as $3kJvh$useCollator, useLocale as $3kJvh$useLocale} from "@react-aria/i18n";
import {useSelectableCollection as $3kJvh$useSelectableCollection, useSelectableItem as $3kJvh$useSelectableItem} from "@react-aria/selection";
import {useInteractionModality as $3kJvh$useInteractionModality, isFocusVisible as $3kJvh$isFocusVisible} from "@react-aria/interactions";
import {getFocusableTreeWalker as $3kJvh$getFocusableTreeWalker, focusSafely as $3kJvh$focusSafely} from "@react-aria/focus";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $69f98c82367193c7$exports = {};

$parcel$export($69f98c82367193c7$exports, "GridKeyboardDelegate", () => $69f98c82367193c7$export$de9feff04fda126e);

class $69f98c82367193c7$export$de9feff04fda126e {
    constructor(options){
        this.collection = options.collection;
        this.disabledKeys = options.disabledKeys;
        this.ref = options.ref;
        this.direction = options.direction;
        this.collator = options.collator;
        this.layout = options.layout;
        this.focusMode = options.focusMode || 'row';
    }
    isCell(node) {
        return node.type === 'cell';
    }
    isRow(node) {
        return node.type === 'row' || node.type === 'item';
    }
    findPreviousKey(fromKey, pred) {
        let key = fromKey != null ? this.collection.getKeyBefore(fromKey) : this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (!pred || pred(item)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    findNextKey(fromKey, pred) {
        let key = fromKey != null ? this.collection.getKeyAfter(fromKey) : this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (!pred || pred(item)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getKeyBelow(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus was on a cell, start searching from the parent row
        if (this.isCell(startItem)) key = startItem.parentKey;
        // Find the next item
        key = this.findNextKey(key);
        if (key != null) {
            // If focus was on a cell, focus the cell with the same index in the next row.
            if (this.isCell(startItem)) {
                let item = this.collection.getItem(key);
                return [
                    ...item.childNodes
                ][startItem.index].key;
            }
            // Otherwise, focus the next row
            if (this.focusMode === 'row') return key;
        }
    }
    getKeyAbove(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus is on a cell, start searching from the parent row
        if (this.isCell(startItem)) key = startItem.parentKey;
        // Find the previous item
        key = this.findPreviousKey(key);
        if (key != null) {
            // If focus was on a cell, focus the cell with the same index in the previous row.
            if (this.isCell(startItem)) {
                let item = this.collection.getItem(key);
                return [
                    ...item.childNodes
                ][startItem.index].key;
            }
            // Otherwise, focus the previous row
            if (this.focusMode === 'row') return key;
        }
    }
    getKeyRightOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus is on a row, focus the first child cell.
        if (this.isRow(item)) {
            let children = [
                ...item.childNodes
            ];
            return this.direction === 'rtl' ? children[children.length - 1].key : children[0].key;
        }
        // If focus is on a cell, focus the next cell if any,
        // otherwise focus the parent row.
        if (this.isCell(item)) {
            let parent = this.collection.getItem(item.parentKey);
            let children = [
                ...parent.childNodes
            ];
            let next = this.direction === 'rtl' ? children[item.index - 1] : children[item.index + 1];
            if (next) return next.key;
            // focus row only if focusMode is set to row
            if (this.focusMode === 'row') return item.parentKey;
            return this.direction === 'rtl' ? this.getFirstKey(key) : this.getLastKey(key);
        }
    }
    getKeyLeftOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus is on a row, focus the last child cell.
        if (this.isRow(item)) {
            let children = [
                ...item.childNodes
            ];
            return this.direction === 'rtl' ? children[0].key : children[children.length - 1].key;
        }
        // If focus is on a cell, focus the previous cell if any,
        // otherwise focus the parent row.
        if (this.isCell(item)) {
            let parent = this.collection.getItem(item.parentKey);
            let children = [
                ...parent.childNodes
            ];
            let prev = this.direction === 'rtl' ? children[item.index + 1] : children[item.index - 1];
            if (prev) return prev.key;
            // focus row only if focusMode is set to row
            if (this.focusMode === 'row') return item.parentKey;
            return this.direction === 'rtl' ? this.getLastKey(key) : this.getFirstKey(key);
        }
    }
    getFirstKey(key, global) {
        let item;
        if (key != null) {
            item = this.collection.getItem(key);
            if (!item) return;
            // If global flag is not set, and a cell is currently focused,
            // move focus to the first cell in the parent row.
            if (this.isCell(item) && !global) {
                let parent = this.collection.getItem(item.parentKey);
                return [
                    ...parent.childNodes
                ][0].key;
            }
        }
        // Find the first row
        key = this.findNextKey();
        // If global flag is set (or if focus mode is cell), focus the first cell in the first row.
        if (key != null && item && this.isCell(item) && global || this.focusMode === 'cell') {
            let item = this.collection.getItem(key);
            key = [
                ...item.childNodes
            ][0].key;
        }
        // Otherwise, focus the row itself.
        return key;
    }
    getLastKey(key, global) {
        let item;
        if (key != null) {
            item = this.collection.getItem(key);
            if (!item) return;
            // If global flag is not set, and a cell is currently focused,
            // move focus to the last cell in the parent row.
            if (this.isCell(item) && !global) {
                let parent = this.collection.getItem(item.parentKey);
                let children = [
                    ...parent.childNodes
                ];
                return children[children.length - 1].key;
            }
        }
        // Find the last row
        key = this.findPreviousKey();
        // If global flag is set (or if focus mode is cell), focus the last cell in the last row.
        if (key != null && item && this.isCell(item) && global || this.focusMode === 'cell') {
            let item = this.collection.getItem(key);
            let children = [
                ...item.childNodes
            ];
            key = children[children.length - 1].key;
        }
        // Otherwise, focus the row itself.
        return key;
    }
    getItem(key) {
        return this.ref.current.querySelector(`[data-key="${key}"]`);
    }
    getItemRect(key) {
        if (this.layout) return this.layout.getLayoutInfo(key)?.rect;
        let item = this.getItem(key);
        if (item) return new $3kJvh$Rect(item.offsetLeft, item.offsetTop, item.offsetWidth, item.offsetHeight);
    }
    getPageHeight() {
        if (this.layout) return this.layout.virtualizer?.visibleRect.height;
        return this.ref?.current?.offsetHeight;
    }
    getContentHeight() {
        if (this.layout) return this.layout.getContentSize().height;
        return this.ref?.current?.scrollHeight;
    }
    getKeyPageAbove(key) {
        let itemRect = this.getItemRect(key);
        if (!itemRect) return null;
        let pageY = Math.max(0, itemRect.maxY - this.getPageHeight());
        while(itemRect && itemRect.y > pageY){
            key = this.getKeyAbove(key);
            itemRect = this.getItemRect(key);
        }
        return key;
    }
    getKeyPageBelow(key) {
        let itemRect = this.getItemRect(key);
        if (!itemRect) return null;
        let pageHeight = this.getPageHeight();
        let pageY = Math.min(this.getContentHeight(), itemRect.y + pageHeight);
        while(itemRect && itemRect.maxY < pageY){
            let nextKey = this.getKeyBelow(key);
            itemRect = this.getItemRect(nextKey);
            // Guard against case where maxY of the last key is barely less than pageY due to rounding
            // and thus it attempts to set key to null
            if (nextKey != null) key = nextKey;
        }
        return key;
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey ?? this.getFirstKey();
        // If the starting key is a cell, search from its parent row.
        let startItem = collection.getItem(key);
        if (startItem.type === 'cell') key = startItem.parentKey;
        let hasWrapped = false;
        while(key != null){
            let item = collection.getItem(key);
            // check row text value for match
            if (item.textValue) {
                let substring = item.textValue.slice(0, search.length);
                if (this.collator.compare(substring, search) === 0) {
                    if (this.isRow(item) && this.focusMode === 'cell') return [
                        ...item.childNodes
                    ][0].key;
                    return item.key;
                }
            }
            key = this.findNextKey(key);
            // Wrap around when reaching the end of the collection
            if (key == null && !hasWrapped) {
                key = this.getFirstKey();
                hasWrapped = true;
            }
        }
        return null;
    }
}


var $fd031bb2048425f4$exports = {};

$parcel$export($fd031bb2048425f4$exports, "useGrid", () => $fd031bb2048425f4$export$f6b86a04e5d66d90);



const $e4453144b5834237$export$e6235c0d09b995d0 = new WeakMap();



var $eb094eaa77dcc8eb$exports = {};
var $043e5682799eacf8$exports = {};
$043e5682799eacf8$exports = JSON.parse("{\"deselectedItem\":\"{item} غير المحدد\",\"longPressToSelect\":\"اضغط مطولًا للدخول إلى وضع التحديد.\",\"select\":\"تحديد\",\"selectedAll\":\"جميع العناصر المحددة.\",\"selectedCount\":\"{count, plural, =0 {لم يتم تحديد عناصر} one {# عنصر محدد} other {# عنصر محدد}}.\",\"selectedItem\":\"{item} المحدد\"}");


var $6bbf4f5902303b91$exports = {};
$6bbf4f5902303b91$exports = JSON.parse("{\"deselectedItem\":\"{item} не е избран.\",\"longPressToSelect\":\"Натиснете и задръжте за да влезете в избирателен режим.\",\"select\":\"Изберете\",\"selectedAll\":\"Всички елементи са избрани.\",\"selectedCount\":\"{count, plural, =0 {Няма избрани елементи} one {# избран елемент} other {# избрани елементи}}.\",\"selectedItem\":\"{item} избран.\"}");


var $e8f87958168a66f9$exports = {};
$e8f87958168a66f9$exports = JSON.parse("{\"deselectedItem\":\"Položka {item} není vybrána.\",\"longPressToSelect\":\"Dlouhým stisknutím přejdete do režimu výběru.\",\"select\":\"Vybrat\",\"selectedAll\":\"Vybrány všechny položky.\",\"selectedCount\":\"{count, plural, =0 {Nevybrány žádné položky} one {Vybrána # položka} other {Vybráno # položek}}.\",\"selectedItem\":\"Vybrána položka {item}.\"}");


var $43599f4e5eca74af$exports = {};
$43599f4e5eca74af$exports = JSON.parse("{\"deselectedItem\":\"{item} ikke valgt.\",\"longPressToSelect\":\"Lav et langt tryk for at aktivere valgtilstand.\",\"select\":\"Vælg\",\"selectedAll\":\"Alle elementer valgt.\",\"selectedCount\":\"{count, plural, =0 {Ingen elementer valgt} one {# element valgt} other {# elementer valgt}}.\",\"selectedItem\":\"{item} valgt.\"}");


var $9a204f30ecb90301$exports = {};
$9a204f30ecb90301$exports = JSON.parse("{\"deselectedItem\":\"{item} nicht ausgewählt.\",\"longPressToSelect\":\"Gedrückt halten, um Auswahlmodus zu öffnen.\",\"select\":\"Auswählen\",\"selectedAll\":\"Alle Elemente ausgewählt.\",\"selectedCount\":\"{count, plural, =0 {Keine Elemente ausgewählt} one {# Element ausgewählt} other {# Elemente ausgewählt}}.\",\"selectedItem\":\"{item} ausgewählt.\"}");


var $be8e783208d788e4$exports = {};
$be8e783208d788e4$exports = JSON.parse("{\"deselectedItem\":\"Δεν επιλέχθηκε το στοιχείο {item}.\",\"longPressToSelect\":\"Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.\",\"select\":\"Επιλογή\",\"selectedAll\":\"Επιλέχθηκαν όλα τα στοιχεία.\",\"selectedCount\":\"{count, plural, =0 {Δεν επιλέχθηκαν στοιχεία} one {Επιλέχθηκε # στοιχείο} other {Επιλέχθηκαν # στοιχεία}}.\",\"selectedItem\":\"Επιλέχθηκε το στοιχείο {item}.\"}");


var $7bbafbcf58dd96b9$exports = {};
$7bbafbcf58dd96b9$exports = JSON.parse("{\"deselectedItem\":\"{item} not selected.\",\"select\":\"Select\",\"selectedCount\":\"{count, plural, =0 {No items selected} one {# item selected} other {# items selected}}.\",\"selectedAll\":\"All items selected.\",\"selectedItem\":\"{item} selected.\",\"longPressToSelect\":\"Long press to enter selection mode.\"}");


var $7d78821ac5b9a95a$exports = {};
$7d78821ac5b9a95a$exports = JSON.parse("{\"deselectedItem\":\"{item} no seleccionado.\",\"longPressToSelect\":\"Mantenga pulsado para abrir el modo de selección.\",\"select\":\"Seleccionar\",\"selectedAll\":\"Todos los elementos seleccionados.\",\"selectedCount\":\"{count, plural, =0 {Ningún elemento seleccionado} one {# elemento seleccionado} other {# elementos seleccionados}}.\",\"selectedItem\":\"{item} seleccionado.\"}");


var $e9dd74d36333a746$exports = {};
$e9dd74d36333a746$exports = JSON.parse("{\"deselectedItem\":\"{item} pole valitud.\",\"longPressToSelect\":\"Valikurežiimi sisenemiseks vajutage pikalt.\",\"select\":\"Vali\",\"selectedAll\":\"Kõik üksused valitud.\",\"selectedCount\":\"{count, plural, =0 {Üksusi pole valitud} one {# üksus valitud} other {# üksust valitud}}.\",\"selectedItem\":\"{item} valitud.\"}");


var $f253d41a05cf1210$exports = {};
$f253d41a05cf1210$exports = JSON.parse("{\"deselectedItem\":\"Kohdetta {item} ei valittu.\",\"longPressToSelect\":\"Siirry valintatilaan painamalla pitkään.\",\"select\":\"Valitse\",\"selectedAll\":\"Kaikki kohteet valittu.\",\"selectedCount\":\"{count, plural, =0 {Ei yhtään kohdetta valittu} one {# kohde valittu} other {# kohdetta valittu}}.\",\"selectedItem\":\"{item} valittu.\"}");


var $ceefa21b633bdfd1$exports = {};
$ceefa21b633bdfd1$exports = JSON.parse("{\"deselectedItem\":\"{item} non sélectionné.\",\"longPressToSelect\":\"Appuyez de manière prolongée pour passer en mode de sélection.\",\"select\":\"Sélectionner\",\"selectedAll\":\"Tous les éléments sélectionnés.\",\"selectedCount\":\"{count, plural, =0 {Aucun élément sélectionné} one {# élément sélectionné} other {# éléments sélectionnés}}.\",\"selectedItem\":\"{item} sélectionné.\"}");


var $9031e72fd2339a44$exports = {};
$9031e72fd2339a44$exports = JSON.parse("{\"deselectedItem\":\"{item} לא נבחר.\",\"longPressToSelect\":\"הקשה ארוכה לכניסה למצב בחירה.\",\"select\":\"בחר\",\"selectedAll\":\"כל הפריטים נבחרו.\",\"selectedCount\":\"{count, plural, =0 {לא נבחרו פריטים} one {פריט # נבחר} other {# פריטים נבחרו}}.\",\"selectedItem\":\"{item} נבחר.\"}");


var $5f8e18a5466332e6$exports = {};
$5f8e18a5466332e6$exports = JSON.parse("{\"deselectedItem\":\"Stavka {item} nije odabrana.\",\"longPressToSelect\":\"Dugo pritisnite za ulazak u način odabira.\",\"select\":\"Odaberite\",\"selectedAll\":\"Odabrane su sve stavke.\",\"selectedCount\":\"{count, plural, =0 {Nije odabrana nijedna stavka} one {Odabrana je # stavka} other {Odabrano je # stavki}}.\",\"selectedItem\":\"Stavka {item} je odabrana.\"}");


var $fdc3e889596eb32f$exports = {};
$fdc3e889596eb32f$exports = JSON.parse("{\"deselectedItem\":\"{item} nincs kijelölve.\",\"longPressToSelect\":\"Nyomja hosszan a kijelöléshez.\",\"select\":\"Kijelölés\",\"selectedAll\":\"Az összes elem kijelölve.\",\"selectedCount\":\"{count, plural, =0 {Egy elem sincs kijelölve} one {# elem kijelölve} other {# elem kijelölve}}.\",\"selectedItem\":\"{item} kijelölve.\"}");


var $69e7216d066cdc50$exports = {};
$69e7216d066cdc50$exports = JSON.parse("{\"deselectedItem\":\"{item} non selezionato.\",\"longPressToSelect\":\"Premi a lungo per passare alla modalità di selezione.\",\"select\":\"Seleziona\",\"selectedAll\":\"Tutti gli elementi selezionati.\",\"selectedCount\":\"{count, plural, =0 {Nessun elemento selezionato} one {# elemento selezionato} other {# elementi selezionati}}.\",\"selectedItem\":\"{item} selezionato.\"}");


var $8cfaaafd68223006$exports = {};
$8cfaaafd68223006$exports = JSON.parse("{\"deselectedItem\":\"{item} が選択されていません。\",\"longPressToSelect\":\"長押しして選択モードを開きます。\",\"select\":\"選択\",\"selectedAll\":\"すべての項目を選択しました。\",\"selectedCount\":\"{count, plural, =0 {項目が選択されていません} one {# 項目を選択しました} other {# 項目を選択しました}}。\",\"selectedItem\":\"{item} を選択しました。\"}");


var $9b8f1e9a2a82b32d$exports = {};
$9b8f1e9a2a82b32d$exports = JSON.parse("{\"deselectedItem\":\"{item}이(가) 선택되지 않았습니다.\",\"longPressToSelect\":\"선택 모드로 들어가려면 길게 누르십시오.\",\"select\":\"선택\",\"selectedAll\":\"모든 항목이 선택되었습니다.\",\"selectedCount\":\"{count, plural, =0 {선택된 항목이 없습니다} one {#개 항목이 선택되었습니다} other {#개 항목이 선택되었습니다}}.\",\"selectedItem\":\"{item}이(가) 선택되었습니다.\"}");


var $a8e5c43e03146460$exports = {};
$a8e5c43e03146460$exports = JSON.parse("{\"deselectedItem\":\"{item} nepasirinkta.\",\"longPressToSelect\":\"Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.\",\"select\":\"Pasirinkti\",\"selectedAll\":\"Pasirinkti visi elementai.\",\"selectedCount\":\"{count, plural, =0 {Nepasirinktas nė vienas elementas} one {Pasirinktas # elementas} other {Pasirinkta elementų: #}}.\",\"selectedItem\":\"Pasirinkta: {item}.\"}");


var $613f6a1812d5b791$exports = {};
$613f6a1812d5b791$exports = JSON.parse("{\"deselectedItem\":\"Vienums {item} nav atlasīts.\",\"longPressToSelect\":\"Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.\",\"select\":\"Atlasīt\",\"selectedAll\":\"Atlasīti visi vienumi.\",\"selectedCount\":\"{count, plural, =0 {Nav atlasīts neviens vienums} one {Atlasīto vienumu skaits: #} other {Atlasīto vienumu skaits: #}}.\",\"selectedItem\":\"Atlasīts vienums {item}.\"}");


var $52f961bedc571a1b$exports = {};
$52f961bedc571a1b$exports = JSON.parse("{\"deselectedItem\":\"{item} er ikke valgt.\",\"longPressToSelect\":\"Bruk et langt trykk for å gå inn i valgmodus.\",\"select\":\"Velg\",\"selectedAll\":\"Alle elementer er valgt.\",\"selectedCount\":\"{count, plural, =0 {Ingen elementer er valgt} one {# element er valgt} other {# elementer er valgt}}.\",\"selectedItem\":\"{item} er valgt.\"}");


var $3b19febfc54b24dd$exports = {};
$3b19febfc54b24dd$exports = JSON.parse("{\"deselectedItem\":\"{item} niet geselecteerd.\",\"longPressToSelect\":\"Druk lang om de selectiemodus te openen.\",\"select\":\"Selecteren\",\"selectedAll\":\"Alle items geselecteerd.\",\"selectedCount\":\"{count, plural, =0 {Geen items geselecteerd} one {# item geselecteerd} other {# items geselecteerd}}.\",\"selectedItem\":\"{item} geselecteerd.\"}");


var $db0c1fe2a1b3d572$exports = {};
$db0c1fe2a1b3d572$exports = JSON.parse("{\"deselectedItem\":\"Nie zaznaczono {item}.\",\"longPressToSelect\":\"Naciśnij i przytrzymaj, aby wejść do trybu wyboru.\",\"select\":\"Zaznacz\",\"selectedAll\":\"Wszystkie zaznaczone elementy.\",\"selectedCount\":\"{count, plural, =0 {Nie zaznaczono żadnych elementów} one {# zaznaczony element} other {# zaznaczonych elementów}}.\",\"selectedItem\":\"Zaznaczono {item}.\"}");


var $c6ecffdf72376e5d$exports = {};
$c6ecffdf72376e5d$exports = JSON.parse("{\"deselectedItem\":\"{item} não selecionado.\",\"longPressToSelect\":\"Mantenha pressionado para entrar no modo de seleção.\",\"select\":\"Selecionar\",\"selectedAll\":\"Todos os itens selecionados.\",\"selectedCount\":\"{count, plural, =0 {Nenhum item selecionado} one {# item selecionado} other {# itens selecionados}}.\",\"selectedItem\":\"{item} selecionado.\"}");


var $45e793497393d536$exports = {};
$45e793497393d536$exports = JSON.parse("{\"deselectedItem\":\"{item} não selecionado.\",\"longPressToSelect\":\"Prima continuamente para entrar no modo de seleção.\",\"select\":\"Selecionar\",\"selectedAll\":\"Todos os itens selecionados.\",\"selectedCount\":\"{count, plural, =0 {Nenhum item selecionado} one {# item selecionado} other {# itens selecionados}}.\",\"selectedItem\":\"{item} selecionado.\"}");


var $ea7a2f4f1664707c$exports = {};
$ea7a2f4f1664707c$exports = JSON.parse("{\"deselectedItem\":\"{item} neselectat.\",\"longPressToSelect\":\"Apăsați lung pentru a intra în modul de selectare.\",\"select\":\"Selectare\",\"selectedAll\":\"Toate elementele selectate.\",\"selectedCount\":\"{count, plural, =0 {Niciun element selectat} one {# element selectat} other {# elemente selectate}}.\",\"selectedItem\":\"{item} selectat.\"}");


var $972fb5aa74e718ea$exports = {};
$972fb5aa74e718ea$exports = JSON.parse("{\"deselectedItem\":\"{Item} не выбрано.\",\"longPressToSelect\":\"Нажмите и удерживайте для входа в режим выбора.\",\"select\":\"Выбрать\",\"selectedAll\":\"Выбраны все элементы.\",\"selectedCount\":\"{count, plural, =0 {Нет выбранных элементов} one {# элемент выбран} other {# элементов выбрано}}.\",\"selectedItem\":\"{Item} выбрано.\"}");


var $c901fd29601ee709$exports = {};
$c901fd29601ee709$exports = JSON.parse("{\"deselectedItem\":\"Nevybraté položky: {item}.\",\"longPressToSelect\":\"Dlhším stlačením prejdite do režimu výberu.\",\"select\":\"Vybrať\",\"selectedAll\":\"Všetky vybraté položky.\",\"selectedCount\":\"{count, plural, =0 {Žiadne vybraté položky} one {# vybratá položka} other {Počet vybratých položiek:#}}.\",\"selectedItem\":\"Vybraté položky: {item}.\"}");


var $d6a355e36eb719b8$exports = {};
$d6a355e36eb719b8$exports = JSON.parse("{\"deselectedItem\":\"Element {item} ni izbran.\",\"longPressToSelect\":\"Za izbirni način pritisnite in dlje časa držite.\",\"select\":\"Izberite\",\"selectedAll\":\"Vsi elementi so izbrani.\",\"selectedCount\":\"{count, plural, =0 {Noben element ni izbran} one {# element je izbran} other {# elementov je izbranih}}.\",\"selectedItem\":\"Element {item} je izbran.\"}");


var $ddac4b3d60aa25cb$exports = {};
$ddac4b3d60aa25cb$exports = JSON.parse("{\"deselectedItem\":\"{item} nije izabrano.\",\"longPressToSelect\":\"Dugo pritisnite za ulazak u režim biranja.\",\"select\":\"Izaberite\",\"selectedAll\":\"Izabrane su sve stavke.\",\"selectedCount\":\"{count, plural, =0 {Nije izabrana nijedna stavka} one {Izabrana je # stavka} other {Izabrano je # stavki}}.\",\"selectedItem\":\"{Item} je izabrano.\"}");


var $a4525473b426fa52$exports = {};
$a4525473b426fa52$exports = JSON.parse("{\"deselectedItem\":\"{item} ej markerat.\",\"longPressToSelect\":\"Tryck länge när du vill öppna väljarläge.\",\"select\":\"Markera\",\"selectedAll\":\"Alla markerade objekt.\",\"selectedCount\":\"{count, plural, =0 {Inga markerade objekt} one {# markerat objekt} other {# markerade objekt}}.\",\"selectedItem\":\"{item} markerat.\"}");


var $04f14dddbea0dd5a$exports = {};
$04f14dddbea0dd5a$exports = JSON.parse("{\"deselectedItem\":\"{item} seçilmedi.\",\"longPressToSelect\":\"Seçim moduna girmek için uzun basın.\",\"select\":\"Seç\",\"selectedAll\":\"Tüm ögeler seçildi.\",\"selectedCount\":\"{count, plural, =0 {Hiçbir öge seçilmedi} one {# öge seçildi} other {# öge seçildi}}.\",\"selectedItem\":\"{item} seçildi.\"}");


var $aeabd4701fcb56ce$exports = {};
$aeabd4701fcb56ce$exports = JSON.parse("{\"deselectedItem\":\"{item} не вибрано.\",\"longPressToSelect\":\"Виконайте довге натиснення, щоб перейти в режим вибору.\",\"select\":\"Вибрати\",\"selectedAll\":\"Усі елементи вибрано.\",\"selectedCount\":\"{count, plural, =0 {Жодних елементів не вибрано} one {# елемент вибрано} other {Вибрано елементів: #}}.\",\"selectedItem\":\"{item} вибрано.\"}");


var $f60e3634f967a2b0$exports = {};
$f60e3634f967a2b0$exports = JSON.parse("{\"deselectedItem\":\"未选择 {item}。\",\"longPressToSelect\":\"长按以进入选择模式。\",\"select\":\"选择\",\"selectedAll\":\"已选择所有项目。\",\"selectedCount\":\"{count, plural, =0 {未选择项目} one {已选择 # 个项目} other {已选择 # 个项目}}。\",\"selectedItem\":\"已选择 {item}。\"}");


var $ea61bcaaf9d2a14f$exports = {};
$ea61bcaaf9d2a14f$exports = JSON.parse("{\"deselectedItem\":\"未選取「{item}」。\",\"longPressToSelect\":\"長按以進入選擇模式。\",\"select\":\"選取\",\"selectedAll\":\"已選取所有項目。\",\"selectedCount\":\"{count, plural, =0 {未選取任何項目} one {已選取 # 個項目} other {已選取 # 個項目}}。\",\"selectedItem\":\"已選取「{item}」。\"}");


$eb094eaa77dcc8eb$exports = {
    "ar-AE": $043e5682799eacf8$exports,
    "bg-BG": $6bbf4f5902303b91$exports,
    "cs-CZ": $e8f87958168a66f9$exports,
    "da-DK": $43599f4e5eca74af$exports,
    "de-DE": $9a204f30ecb90301$exports,
    "el-GR": $be8e783208d788e4$exports,
    "en-US": $7bbafbcf58dd96b9$exports,
    "es-ES": $7d78821ac5b9a95a$exports,
    "et-EE": $e9dd74d36333a746$exports,
    "fi-FI": $f253d41a05cf1210$exports,
    "fr-FR": $ceefa21b633bdfd1$exports,
    "he-IL": $9031e72fd2339a44$exports,
    "hr-HR": $5f8e18a5466332e6$exports,
    "hu-HU": $fdc3e889596eb32f$exports,
    "it-IT": $69e7216d066cdc50$exports,
    "ja-JP": $8cfaaafd68223006$exports,
    "ko-KR": $9b8f1e9a2a82b32d$exports,
    "lt-LT": $a8e5c43e03146460$exports,
    "lv-LV": $613f6a1812d5b791$exports,
    "nb-NO": $52f961bedc571a1b$exports,
    "nl-NL": $3b19febfc54b24dd$exports,
    "pl-PL": $db0c1fe2a1b3d572$exports,
    "pt-BR": $c6ecffdf72376e5d$exports,
    "pt-PT": $45e793497393d536$exports,
    "ro-RO": $ea7a2f4f1664707c$exports,
    "ru-RU": $972fb5aa74e718ea$exports,
    "sk-SK": $c901fd29601ee709$exports,
    "sl-SI": $d6a355e36eb719b8$exports,
    "sr-SP": $ddac4b3d60aa25cb$exports,
    "sv-SE": $a4525473b426fa52$exports,
    "tr-TR": $04f14dddbea0dd5a$exports,
    "uk-UA": $aeabd4701fcb56ce$exports,
    "zh-CN": $f60e3634f967a2b0$exports,
    "zh-TW": $ea61bcaaf9d2a14f$exports
};








function $24360d76ee801ede$export$be42ebdab07ae4c2(props) {
    let formatMessage = $3kJvh$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($eb094eaa77dcc8eb$exports)));
    let modality = $3kJvh$useInteractionModality();
    // null is the default if the user hasn't interacted with the table at all yet or the rest of the page
    let shouldLongPress = (modality === 'pointer' || modality === 'virtual' || modality == null) && typeof window !== 'undefined' && 'ontouchstart' in window;
    let interactionDescription = $3kJvh$useMemo(()=>{
        let selectionMode = props.selectionManager.selectionMode;
        let selectionBehavior = props.selectionManager.selectionBehavior;
        let message = undefined;
        if (shouldLongPress) message = formatMessage('longPressToSelect');
        return selectionBehavior === 'replace' && selectionMode !== 'none' && props.hasItemActions ? message : undefined;
    }, [
        props.selectionManager.selectionMode,
        props.selectionManager.selectionBehavior,
        props.hasItemActions,
        formatMessage,
        shouldLongPress
    ]);
    let descriptionProps = $3kJvh$useDescription(interactionDescription);
    return descriptionProps;
}



function $fd031bb2048425f4$export$f6b86a04e5d66d90(props, state, ref) {
    let { isVirtualized: isVirtualized , keyboardDelegate: keyboardDelegate , focusMode: focusMode , getRowText: getRowText = (key)=>state.collection.getItem(key)?.textValue
     , scrollRef: scrollRef , onRowAction: onRowAction , onCellAction: onCellAction  } = props;
    let formatMessage = $3kJvh$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($eb094eaa77dcc8eb$exports)));
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $3kJvh$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let { direction: direction  } = $3kJvh$useLocale();
    let delegate = $3kJvh$useMemo(()=>keyboardDelegate || new $69f98c82367193c7$export$de9feff04fda126e({
            collection: state.collection,
            disabledKeys: state.disabledKeys,
            ref: ref,
            direction: direction,
            collator: collator,
            focusMode: focusMode
        })
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        ref,
        direction,
        collator,
        focusMode
    ]);
    let { collectionProps: collectionProps  } = $3kJvh$useSelectableCollection({
        ref: ref,
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        isVirtualized: isVirtualized,
        scrollRef: scrollRef
    });
    let id = $3kJvh$useId();
    $e4453144b5834237$export$e6235c0d09b995d0.set(state, {
        keyboardDelegate: delegate,
        actions: {
            onRowAction: onRowAction,
            onCellAction: onCellAction
        }
    });
    let descriptionProps = $24360d76ee801ede$export$be42ebdab07ae4c2({
        selectionManager: state.selectionManager,
        hasItemActions: !!(onRowAction || onCellAction)
    });
    let domProps = $3kJvh$filterDOMProps(props, {
        labelable: true
    });
    let gridProps = $3kJvh$mergeProps(domProps, {
        role: 'grid',
        id: id,
        'aria-multiselectable': state.selectionManager.selectionMode === 'multiple' ? 'true' : undefined
    }, collectionProps, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = state.collection.columnCount;
    }
    // Many screen readers do not announce when items in a grid are selected/deselected.
    // We do this using an ARIA live region.
    let selection = state.selectionManager.rawSelection;
    let lastSelection = $3kJvh$useRef(selection);
    $3kJvh$useUpdateEffect(()=>{
        if (!state.selectionManager.isFocused) {
            lastSelection.current = selection;
            return;
        }
        let addedKeys = $fd031bb2048425f4$var$diffSelection(selection, lastSelection.current);
        let removedKeys = $fd031bb2048425f4$var$diffSelection(lastSelection.current, selection);
        // If adding or removing a single row from the selection, announce the name of that item.
        let isReplace = state.selectionManager.selectionBehavior === 'replace';
        let messages = [];
        if (state.selectionManager.selectedKeys.size === 1 && isReplace) {
            if (state.collection.getItem(state.selectionManager.selectedKeys.keys().next().value)) {
                let currentSelectionText = getRowText(state.selectionManager.selectedKeys.keys().next().value);
                if (currentSelectionText) messages.push(formatMessage('selectedItem', {
                    item: currentSelectionText
                }));
            }
        } else if (addedKeys.size === 1 && removedKeys.size === 0) {
            let addedText = getRowText(addedKeys.keys().next().value);
            if (addedText) messages.push(formatMessage('selectedItem', {
                item: addedText
            }));
        } else if (removedKeys.size === 1 && addedKeys.size === 0) {
            if (state.collection.getItem(removedKeys.keys().next().value)) {
                let removedText = getRowText(removedKeys.keys().next().value);
                if (removedText) messages.push(formatMessage('deselectedItem', {
                    item: removedText
                }));
            }
        }
        // Announce how many items are selected, except when selecting the first item.
        if (state.selectionManager.selectionMode === 'multiple') {
            if (messages.length === 0 || selection === 'all' || selection.size > 1 || lastSelection.current === 'all' || lastSelection.current?.size > 1) messages.push(selection === 'all' ? formatMessage('selectedAll') : formatMessage('selectedCount', {
                count: selection.size
            }));
        }
        if (messages.length > 0) $3kJvh$announce(messages.join(' '));
        lastSelection.current = selection;
    }, [
        selection
    ]);
    return {
        gridProps: gridProps
    };
}
function $fd031bb2048425f4$var$diffSelection(a, b) {
    let res = new Set();
    if (a === 'all' || b === 'all') return res;
    for (let key of a.keys())if (!b.has(key)) res.add(key);
    return res;
}


var $b227c7c9b2ba8ba9$exports = {};

$parcel$export($b227c7c9b2ba8ba9$exports, "useGridRowGroup", () => $b227c7c9b2ba8ba9$export$d3037f5d3f3e51bf);
function $b227c7c9b2ba8ba9$export$d3037f5d3f3e51bf() {
    return {
        rowGroupProps: {
            role: 'rowgroup'
        }
    };
}


var $4ff64020f9634c57$exports = {};

$parcel$export($4ff64020f9634c57$exports, "useGridRow", () => $4ff64020f9634c57$export$96357d5a73f686fa);


function $4ff64020f9634c57$export$96357d5a73f686fa(props, state, ref) {
    let { node: node , isVirtualized: isVirtualized , shouldSelectOnPressUp: shouldSelectOnPressUp , onAction: onAction  } = props;
    let { actions: { onRowAction: onRowAction  }  } = $e4453144b5834237$export$e6235c0d09b995d0.get(state);
    let { itemProps: itemProps , isPressed: isPressed  } = $3kJvh$useSelectableItem({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        onAction: onRowAction ? ()=>onRowAction(node.key)
         : onAction
    });
    let isSelected = state.selectionManager.isSelected(node.key);
    let rowProps = {
        role: 'row',
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined,
        ...itemProps
    };
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
    return {
        rowProps: rowProps,
        isPressed: isPressed
    };
}


var $3683439514e446de$exports = {};

$parcel$export($3683439514e446de$exports, "useGridCell", () => $3683439514e446de$export$c7e10bfc0c59f67c);






function $3683439514e446de$export$c7e10bfc0c59f67c(props, state, ref) {
    let { node: node , isVirtualized: isVirtualized , focusMode: focusMode = 'child' , shouldSelectOnPressUp: shouldSelectOnPressUp , onAction: onAction  } = props;
    let { direction: direction  } = $3kJvh$useLocale();
    let { keyboardDelegate: keyboardDelegate , actions: { onCellAction: onCellAction  }  } = $e4453144b5834237$export$e6235c0d09b995d0.get(state);
    // Handles focusing the cell. If there is a focusable child,
    // it is focused, otherwise the cell itself is focused.
    let focus = ()=>{
        let treeWalker = $3kJvh$getFocusableTreeWalker(ref.current);
        if (focusMode === 'child') {
            let focusable = state.selectionManager.childFocusStrategy === 'last' ? $3683439514e446de$var$last(treeWalker) : treeWalker.firstChild();
            if (focusable) {
                $3kJvh$focusSafely(focusable);
                return;
            }
        }
        if (!ref.current.contains(document.activeElement)) $3kJvh$focusSafely(ref.current);
    };
    let { itemProps: itemProps , isPressed: isPressed  } = $3kJvh$useSelectableItem({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        focus: focus,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        onAction: onCellAction ? ()=>onCellAction(node.key)
         : onAction
    });
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target)) return;
        let walker = $3kJvh$getFocusableTreeWalker(ref.current);
        walker.currentNode = document.activeElement;
        switch(e.key){
            case 'ArrowLeft':
                {
                    // Find the next focusable element within the cell.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    // Don't focus the cell itself if focusMode is "child"
                    if (focusMode === 'child' && focusable === ref.current) focusable = null;
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        $3kJvh$focusSafely(focusable);
                    } else {
                        // If there is no next focusable child, then move to the next cell to the left of this one.
                        // This will be handled by useSelectableCollection. However, if there is no cell to the left
                        // of this one, only one column, and the grid doesn't focus rows, then the next key will be the
                        // same as this one. In that case we need to handle focusing either the cell or the first/last
                        // child, depending on the focus mode.
                        let prev = keyboardDelegate.getKeyLeftOf(node.key);
                        if (prev !== node.key) break;
                        e.preventDefault();
                        e.stopPropagation();
                        if (focusMode === 'cell' && direction === 'rtl') $3kJvh$focusSafely(ref.current);
                        else {
                            walker.currentNode = ref.current;
                            focusable = direction === 'rtl' ? walker.firstChild() : $3683439514e446de$var$last(walker);
                            if (focusable) $3kJvh$focusSafely(focusable);
                        }
                    }
                    break;
                }
            case 'ArrowRight':
                {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusMode === 'child' && focusable === ref.current) focusable = null;
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        $3kJvh$focusSafely(focusable);
                    } else {
                        let next = keyboardDelegate.getKeyRightOf(node.key);
                        if (next !== node.key) break;
                        e.preventDefault();
                        e.stopPropagation();
                        if (focusMode === 'cell' && direction === 'ltr') $3kJvh$focusSafely(ref.current);
                        else {
                            walker.currentNode = ref.current;
                            focusable = direction === 'rtl' ? $3683439514e446de$var$last(walker) : walker.firstChild();
                            if (focusable) $3kJvh$focusSafely(focusable);
                        }
                    }
                    break;
                }
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching cell children, e.g. menu buttons. We want arrow keys to navigate
                // to the cell above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && ref.current.contains(e.target)) {
                    e.stopPropagation();
                    e.preventDefault();
                    ref.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    // Grid cells can have focusable elements inside them. In this case, focus should
    // be marshalled to that element rather than focusing the cell itself.
    let onFocus = (e)=>{
        if (e.target !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the gridcell itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row/cell
            // in that case since the table should act like a single tab stop.
            if (!$3kJvh$isFocusVisible()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
        // If the cell itself is focused, wait a frame so that focus finishes propagatating
        // up to the tree, and move focus to a focusable child if possible.
        requestAnimationFrame(()=>{
            if (focusMode === 'child' && document.activeElement === ref.current) focus();
        });
    };
    let gridCellProps = $3kJvh$mergeProps(itemProps, {
        role: 'gridcell',
        onKeyDownCapture: onKeyDown,
        onFocus: onFocus
    });
    if (isVirtualized) gridCellProps['aria-colindex'] = node.index + 1; // aria-colindex is 1-based
    return {
        gridCellProps: gridCellProps,
        isPressed: isPressed
    };
}
function $3683439514e446de$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}


var $c42097102f6e6b2c$exports = {};

$parcel$export($c42097102f6e6b2c$exports, "useGridSelectionCheckbox", () => $c42097102f6e6b2c$export$70e2eed1a92976ad);



function $c42097102f6e6b2c$export$70e2eed1a92976ad(props, state) {
    let { key: key  } = props;
    let manager = state.selectionManager;
    let checkboxId = $3kJvh$useId();
    let isDisabled = state.disabledKeys.has(key);
    let isSelected = state.selectionManager.isSelected(key);
    let onChange = ()=>manager.select(key)
    ;
    const formatMessage = $3kJvh$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($eb094eaa77dcc8eb$exports)));
    return {
        checkboxProps: {
            id: checkboxId,
            'aria-label': formatMessage('select'),
            isSelected: isSelected,
            isDisabled: isDisabled || manager.selectionMode === 'none',
            onChange: onChange
        }
    };
}




export {$69f98c82367193c7$export$de9feff04fda126e as GridKeyboardDelegate, $fd031bb2048425f4$export$f6b86a04e5d66d90 as useGrid, $b227c7c9b2ba8ba9$export$d3037f5d3f3e51bf as useGridRowGroup, $4ff64020f9634c57$export$96357d5a73f686fa as useGridRow, $3683439514e446de$export$c7e10bfc0c59f67c as useGridCell, $c42097102f6e6b2c$export$70e2eed1a92976ad as useGridSelectionCheckbox};
//# sourceMappingURL=module.js.map
