import {useGridRowGroup as $146deabfb74735ca$re_export$useTableRowGroup, useGrid as $lg3jf$useGrid, GridKeyboardDelegate as $lg3jf$GridKeyboardDelegate, useGridCell as $lg3jf$useGridCell, useGridRow as $lg3jf$useGridRow, useGridSelectionCheckbox as $lg3jf$useGridSelectionCheckbox} from "@react-aria/grid";
import {announce as $lg3jf$announce} from "@react-aria/live-announcer";
import {useId as $lg3jf$useId, useDescription as $lg3jf$useDescription, useUpdateEffect as $lg3jf$useUpdateEffect, mergeProps as $lg3jf$mergeProps, isAndroid as $lg3jf$isAndroid} from "@react-aria/utils";
import {useMemo as $lg3jf$useMemo} from "react";
import {useCollator as $lg3jf$useCollator, useLocale as $lg3jf$useLocale, useMessageFormatter as $lg3jf$useMessageFormatter} from "@react-aria/i18n";
import {useFocusable as $lg3jf$useFocusable} from "@react-aria/focus";
import {usePress as $lg3jf$usePress} from "@react-aria/interactions";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $de6fb1089effb836$exports = {};

$parcel$export($de6fb1089effb836$exports, "useTable", () => $de6fb1089effb836$export$25bceaac3c7e4dc7);


const $6f9c0a4e4edd770f$export$552312adfd451dab = new WeakMap();
function $6f9c0a4e4edd770f$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $6f9c0a4e4edd770f$export$37cd4213f2ad742e(state, columnKey) {
    let gridId = $6f9c0a4e4edd770f$export$552312adfd451dab.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${$6f9c0a4e4edd770f$var$normalizeKey(columnKey)}`;
}
function $6f9c0a4e4edd770f$export$19baff3266315d44(state, rowKey, columnKey) {
    let gridId = $6f9c0a4e4edd770f$export$552312adfd451dab.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${$6f9c0a4e4edd770f$var$normalizeKey(rowKey)}-${$6f9c0a4e4edd770f$var$normalizeKey(columnKey)}`;
}
function $6f9c0a4e4edd770f$export$85069b70317f543(state, rowKey) {
    // A row is labelled by it's row headers.
    return [
        ...state.collection.rowHeaderColumnKeys
    ].map((columnKey)=>$6f9c0a4e4edd770f$export$19baff3266315d44(state, rowKey, columnKey)
    ).join(' ');
}


var $f331acf2445b28d4$exports = {};
var $8a9e74dbc1040836$exports = {};
$8a9e74dbc1040836$exports = JSON.parse("{\"ascending\":\"تصاعدي\",\"ascendingSort\":\"ترتيب حسب العمود {columnName} بترتيب تصاعدي\",\"descending\":\"تنازلي\",\"descendingSort\":\"ترتيب حسب العمود {columnName} بترتيب تنازلي\",\"select\":\"تحديد\",\"selectAll\":\"تحديد الكل\",\"sortable\":\"عمود قابل للترتيب\"}");


var $6679f2cc62cec9e8$exports = {};
$6679f2cc62cec9e8$exports = JSON.parse("{\"ascending\":\"възходящ\",\"ascendingSort\":\"сортирано по колона {columnName} във възходящ ред\",\"descending\":\"низходящ\",\"descendingSort\":\"сортирано по колона {columnName} в низходящ ред\",\"select\":\"Изберете\",\"selectAll\":\"Изберете всичко\",\"sortable\":\"сортираща колона\"}");


var $e13d0b79ffcb5c0f$exports = {};
$e13d0b79ffcb5c0f$exports = JSON.parse("{\"ascending\":\"vzestupně\",\"ascendingSort\":\"řazeno vzestupně podle sloupce {columnName}\",\"descending\":\"sestupně\",\"descendingSort\":\"řazeno sestupně podle sloupce {columnName}\",\"select\":\"Vybrat\",\"selectAll\":\"Vybrat vše\",\"sortable\":\"sloupec s možností řazení\"}");


var $d003cc58a8500315$exports = {};
$d003cc58a8500315$exports = JSON.parse("{\"ascending\":\"stigende\",\"ascendingSort\":\"sorteret efter kolonne {columnName} i stigende rækkefølge\",\"descending\":\"faldende\",\"descendingSort\":\"sorteret efter kolonne {columnName} i faldende rækkefølge\",\"select\":\"Vælg\",\"selectAll\":\"Vælg alle\",\"sortable\":\"sorterbar kolonne\"}");


var $541ce29c0e38d8c1$exports = {};
$541ce29c0e38d8c1$exports = JSON.parse("{\"ascending\":\"aufsteigend\",\"ascendingSort\":\"sortiert nach Spalte {columnName} in aufsteigender Reihenfolge\",\"descending\":\"absteigend\",\"descendingSort\":\"sortiert nach Spalte {columnName} in absteigender Reihenfolge\",\"select\":\"Auswählen\",\"selectAll\":\"Alles auswählen\",\"sortable\":\"sortierbare Spalte\"}");


var $f43474cc13e15d10$exports = {};
$f43474cc13e15d10$exports = JSON.parse("{\"ascending\":\"αύξουσα\",\"ascendingSort\":\"διαλογή ανά στήλη {columnName} σε αύξουσα σειρά\",\"descending\":\"φθίνουσα\",\"descendingSort\":\"διαλογή ανά στήλη {columnName} σε φθίνουσα σειρά\",\"select\":\"Επιλογή\",\"selectAll\":\"Επιλογή όλων\",\"sortable\":\"Στήλη διαλογής\"}");


var $a9c2c8d0e0884d44$exports = {};
$a9c2c8d0e0884d44$exports = JSON.parse("{\"select\":\"Select\",\"selectAll\":\"Select All\",\"sortable\":\"sortable column\",\"ascending\":\"ascending\",\"descending\":\"descending\",\"ascendingSort\":\"sorted by column {columnName} in ascending order\",\"descendingSort\":\"sorted by column {columnName} in descending order\"}");


var $a2cf4344ecc709eb$exports = {};
$a2cf4344ecc709eb$exports = JSON.parse("{\"ascending\":\"de subida\",\"ascendingSort\":\"ordenado por columna {columnName} en orden de subida\",\"descending\":\"de bajada\",\"descendingSort\":\"ordenado por columna {columnName} en orden de bajada\",\"select\":\"Seleccionar\",\"selectAll\":\"Seleccionar todos\",\"sortable\":\"columna ordenable\"}");


var $7fbe38269f15d0f7$exports = {};
$7fbe38269f15d0f7$exports = JSON.parse("{\"ascending\":\"tõusev järjestus\",\"ascendingSort\":\"sorditud veeru järgi {columnName} tõusvas järjestuses\",\"descending\":\"laskuv järjestus\",\"descendingSort\":\"sorditud veeru järgi {columnName} laskuvas järjestuses\",\"select\":\"Vali\",\"selectAll\":\"Vali kõik\",\"sortable\":\"sorditav veerg\"}");


var $95ffeddb1e64b902$exports = {};
$95ffeddb1e64b902$exports = JSON.parse("{\"ascending\":\"nouseva\",\"ascendingSort\":\"lajiteltu sarakkeen {columnName} mukaan nousevassa järjestyksessä\",\"descending\":\"laskeva\",\"descendingSort\":\"lajiteltu sarakkeen {columnName} mukaan laskevassa järjestyksessä\",\"select\":\"Valitse\",\"selectAll\":\"Valitse kaikki\",\"sortable\":\"lajiteltava sarake\"}");


var $005c36e1d439285d$exports = {};
$005c36e1d439285d$exports = JSON.parse("{\"ascending\":\"croissant\",\"ascendingSort\":\"trié en fonction de la colonne {columnName} par ordre croissant\",\"descending\":\"décroissant\",\"descendingSort\":\"trié en fonction de la colonne {columnName} par ordre décroissant\",\"select\":\"Sélectionner\",\"selectAll\":\"Sélectionner tout\",\"sortable\":\"colonne triable\"}");


var $4a78113632cec598$exports = {};
$4a78113632cec598$exports = JSON.parse("{\"ascending\":\"עולה\",\"ascendingSort\":\"מוין לפי עמודה {columnName} בסדר עולה\",\"descending\":\"יורד\",\"descendingSort\":\"מוין לפי עמודה {columnName} בסדר יורד\",\"select\":\"בחר\",\"selectAll\":\"בחר הכול\",\"sortable\":\"עמודה שניתן למיין\"}");


var $1221ce7ccef05e93$exports = {};
$1221ce7ccef05e93$exports = JSON.parse("{\"ascending\":\"rastući\",\"ascendingSort\":\"razvrstano po stupcima {columnName} rastućem redoslijedom\",\"descending\":\"padajući\",\"descendingSort\":\"razvrstano po stupcima {columnName} padajućim redoslijedom\",\"select\":\"Odaberite\",\"selectAll\":\"Odaberite sve\",\"sortable\":\"stupac koji se može razvrstati\"}");


var $7bb3673023298448$exports = {};
$7bb3673023298448$exports = JSON.parse("{\"ascending\":\"növekvő\",\"ascendingSort\":\"rendezve a(z) {columnName} oszlop szerint, növekvő sorrendben\",\"descending\":\"csökkenő\",\"descendingSort\":\"rendezve a(z) {columnName} oszlop szerint, csökkenő sorrendben\",\"select\":\"Kijelölés\",\"selectAll\":\"Összes kijelölése\",\"sortable\":\"rendezendő oszlop\"}");


var $c373f471ee81427d$exports = {};
$c373f471ee81427d$exports = JSON.parse("{\"ascending\":\"crescente\",\"ascendingSort\":\"in ordine crescente in base alla colonna {columnName}\",\"descending\":\"decrescente\",\"descendingSort\":\"in ordine decrescente in base alla colonna {columnName}\",\"select\":\"Seleziona\",\"selectAll\":\"Seleziona tutto\",\"sortable\":\"colonna ordinabile\"}");


var $20eaaba75ebf7df5$exports = {};
$20eaaba75ebf7df5$exports = JSON.parse("{\"ascending\":\"昇順\",\"ascendingSort\":\"列 {columnName} を昇順で並べ替え\",\"descending\":\"降順\",\"descendingSort\":\"列 {columnName} を降順で並べ替え\",\"select\":\"選択\",\"selectAll\":\"すべて選択\",\"sortable\":\"並べ替え可能な列\"}");


var $39a53ddfe6020ce9$exports = {};
$39a53ddfe6020ce9$exports = JSON.parse("{\"ascending\":\"오름차순\",\"ascendingSort\":\"{columnName} 열을 기준으로 오름차순으로 정렬됨\",\"descending\":\"내림차순\",\"descendingSort\":\"{columnName} 열을 기준으로 내림차순으로 정렬됨\",\"select\":\"선택\",\"selectAll\":\"모두 선택\",\"sortable\":\"정렬 가능한 열\"}");


var $41c9bcee35232693$exports = {};
$41c9bcee35232693$exports = JSON.parse("{\"ascending\":\"didėjančia tvarka\",\"ascendingSort\":\"surikiuota pagal stulpelį {columnName} didėjančia tvarka\",\"descending\":\"mažėjančia tvarka\",\"descendingSort\":\"surikiuota pagal stulpelį {columnName} mažėjančia tvarka\",\"select\":\"Pasirinkti\",\"selectAll\":\"Pasirinkti viską\",\"sortable\":\"rikiuojamas stulpelis\"}");


var $6efed07d5f7d1391$exports = {};
$6efed07d5f7d1391$exports = JSON.parse("{\"ascending\":\"augošā secībā\",\"ascendingSort\":\"kārtots pēc kolonnas {columnName} augošā secībā\",\"descending\":\"dilstošā secībā\",\"descendingSort\":\"kārtots pēc kolonnas {columnName} dilstošā secībā\",\"select\":\"Atlasīt\",\"selectAll\":\"Atlasīt visu\",\"sortable\":\"kārtojamā kolonna\"}");


var $88d845eb4e5e6fff$exports = {};
$88d845eb4e5e6fff$exports = JSON.parse("{\"ascending\":\"stigende\",\"ascendingSort\":\"sortert etter kolonne {columnName} i stigende rekkefølge\",\"descending\":\"synkende\",\"descendingSort\":\"sortert etter kolonne {columnName} i synkende rekkefølge\",\"select\":\"Velg\",\"selectAll\":\"Velg alle\",\"sortable\":\"kolonne som kan sorteres\"}");


var $3cab459f158b1ead$exports = {};
$3cab459f158b1ead$exports = JSON.parse("{\"ascending\":\"oplopend\",\"ascendingSort\":\"gesorteerd in oplopende volgorde in kolom {columnName}\",\"descending\":\"aflopend\",\"descendingSort\":\"gesorteerd in aflopende volgorde in kolom {columnName}\",\"select\":\"Selecteren\",\"selectAll\":\"Alles selecteren\",\"sortable\":\"sorteerbare kolom\"}");


var $74a1c05a0fa4c503$exports = {};
$74a1c05a0fa4c503$exports = JSON.parse("{\"ascending\":\"rosnąco\",\"ascendingSort\":\"posortowano według kolumny {columnName} w porządku rosnącym\",\"descending\":\"malejąco\",\"descendingSort\":\"posortowano według kolumny {columnName} w porządku malejącym\",\"select\":\"Zaznacz\",\"selectAll\":\"Zaznacz wszystko\",\"sortable\":\"kolumna z możliwością sortowania\"}");


var $554bcc46906dc546$exports = {};
$554bcc46906dc546$exports = JSON.parse("{\"ascending\":\"crescente\",\"ascendingSort\":\"classificado pela coluna {columnName} em ordem crescente\",\"descending\":\"decrescente\",\"descendingSort\":\"classificado pela coluna {columnName} em ordem decrescente\",\"select\":\"Selecionar\",\"selectAll\":\"Selecionar tudo\",\"sortable\":\"coluna classificável\"}");


var $52985f1b4f2af967$exports = {};
$52985f1b4f2af967$exports = JSON.parse("{\"ascending\":\"ascendente\",\"ascendingSort\":\"Ordenar por coluna {columnName} em ordem ascendente\",\"descending\":\"descendente\",\"descendingSort\":\"Ordenar por coluna {columnName} em ordem descendente\",\"select\":\"Selecionar\",\"selectAll\":\"Selecionar tudo\",\"sortable\":\"Coluna ordenável\"}");


var $9788ba52ff33f325$exports = {};
$9788ba52ff33f325$exports = JSON.parse("{\"ascending\":\"crescătoare\",\"ascendingSort\":\"sortate după coloana {columnName} în ordine crescătoare\",\"descending\":\"descrescătoare\",\"descendingSort\":\"sortate după coloana {columnName} în ordine descrescătoare\",\"select\":\"Selectare\",\"selectAll\":\"Selectare totală\",\"sortable\":\"coloană sortabilă\"}");


var $b3c127828e4064c8$exports = {};
$b3c127828e4064c8$exports = JSON.parse("{\"ascending\":\"возрастание\",\"ascendingSort\":\"сортировать столбец {columnName} в порядке возрастания\",\"descending\":\"убывание\",\"descendingSort\":\"сортировать столбец {columnName} в порядке убывания\",\"select\":\"Выбрать\",\"selectAll\":\"Выбрать все\",\"sortable\":\"сортируемый столбец\"}");


var $113b7467d1b19583$exports = {};
$113b7467d1b19583$exports = JSON.parse("{\"ascending\":\"vzostupne\",\"ascendingSort\":\"zoradené zostupne podľa stĺpca {columnName}\",\"descending\":\"zostupne\",\"descendingSort\":\"zoradené zostupne podľa stĺpca {columnName}\",\"select\":\"Vybrať\",\"selectAll\":\"Vybrať všetko\",\"sortable\":\"zoraditeľný stĺpec\"}");


var $7a0f98b28a98bad5$exports = {};
$7a0f98b28a98bad5$exports = JSON.parse("{\"ascending\":\"naraščajoče\",\"ascendingSort\":\"razvrščeno po stolpcu {columnName} v naraščajočem vrstnem redu\",\"descending\":\"padajoče\",\"descendingSort\":\"razvrščeno po stolpcu {columnName} v padajočem vrstnem redu\",\"select\":\"Izberite\",\"selectAll\":\"Izberite vse\",\"sortable\":\"razvrstljivi stolpec\"}");


var $734fddedcd3c5f06$exports = {};
$734fddedcd3c5f06$exports = JSON.parse("{\"ascending\":\"rastući\",\"ascendingSort\":\"sortirano po kolonama {columnName} rastućim redosledom\",\"descending\":\"padajući\",\"descendingSort\":\"sortirano po kolonama {columnName} padajućim redosledom\",\"select\":\"Izaberite\",\"selectAll\":\"Izaberite sve\",\"sortable\":\"kolona koja se može sortirati\"}");


var $61c7f5070c9a4c2a$exports = {};
$61c7f5070c9a4c2a$exports = JSON.parse("{\"ascending\":\"stigande\",\"ascendingSort\":\"sorterat på kolumn {columnName} i stigande ordning\",\"descending\":\"fallande\",\"descendingSort\":\"sorterat på kolumn {columnName} i fallande ordning\",\"select\":\"Markera\",\"selectAll\":\"Markera allt\",\"sortable\":\"sorterbar kolumn\"}");


var $dc9fde7a3f46111e$exports = {};
$dc9fde7a3f46111e$exports = JSON.parse("{\"ascending\":\"artan sırada\",\"ascendingSort\":\"{columnName} sütuna göre artan düzende sırala\",\"descending\":\"azalan sırada\",\"descendingSort\":\"{columnName} sütuna göre azalan düzende sırala\",\"select\":\"Seç\",\"selectAll\":\"Tümünü Seç\",\"sortable\":\"Sıralanabilir sütun\"}");


var $b747931968423268$exports = {};
$b747931968423268$exports = JSON.parse("{\"ascending\":\"висхідний\",\"ascendingSort\":\"відсортовано за стовпцем {columnName} у висхідному порядку\",\"descending\":\"низхідний\",\"descendingSort\":\"відсортовано за стовпцем {columnName} у низхідному порядку\",\"select\":\"Вибрати\",\"selectAll\":\"Вибрати все\",\"sortable\":\"сортувальний стовпець\"}");


var $11dc14d6570210bc$exports = {};
$11dc14d6570210bc$exports = JSON.parse("{\"ascending\":\"升序\",\"ascendingSort\":\"按列 {columnName} 升序排序\",\"descending\":\"降序\",\"descendingSort\":\"按列 {columnName} 降序排序\",\"select\":\"选择\",\"selectAll\":\"全选\",\"sortable\":\"可排序的列\"}");


var $6c6e2fe08434c9f9$exports = {};
$6c6e2fe08434c9f9$exports = JSON.parse("{\"ascending\":\"遞增\",\"ascendingSort\":\"已依據「{columnName}」欄遞增排序\",\"descending\":\"遞減\",\"descendingSort\":\"已依據「{columnName}」欄遞減排序\",\"select\":\"選取\",\"selectAll\":\"全選\",\"sortable\":\"可排序的欄\"}");


$f331acf2445b28d4$exports = {
    "ar-AE": $8a9e74dbc1040836$exports,
    "bg-BG": $6679f2cc62cec9e8$exports,
    "cs-CZ": $e13d0b79ffcb5c0f$exports,
    "da-DK": $d003cc58a8500315$exports,
    "de-DE": $541ce29c0e38d8c1$exports,
    "el-GR": $f43474cc13e15d10$exports,
    "en-US": $a9c2c8d0e0884d44$exports,
    "es-ES": $a2cf4344ecc709eb$exports,
    "et-EE": $7fbe38269f15d0f7$exports,
    "fi-FI": $95ffeddb1e64b902$exports,
    "fr-FR": $005c36e1d439285d$exports,
    "he-IL": $4a78113632cec598$exports,
    "hr-HR": $1221ce7ccef05e93$exports,
    "hu-HU": $7bb3673023298448$exports,
    "it-IT": $c373f471ee81427d$exports,
    "ja-JP": $20eaaba75ebf7df5$exports,
    "ko-KR": $39a53ddfe6020ce9$exports,
    "lt-LT": $41c9bcee35232693$exports,
    "lv-LV": $6efed07d5f7d1391$exports,
    "nb-NO": $88d845eb4e5e6fff$exports,
    "nl-NL": $3cab459f158b1ead$exports,
    "pl-PL": $74a1c05a0fa4c503$exports,
    "pt-BR": $554bcc46906dc546$exports,
    "pt-PT": $52985f1b4f2af967$exports,
    "ro-RO": $9788ba52ff33f325$exports,
    "ru-RU": $b3c127828e4064c8$exports,
    "sk-SK": $113b7467d1b19583$exports,
    "sl-SI": $7a0f98b28a98bad5$exports,
    "sr-SP": $734fddedcd3c5f06$exports,
    "sv-SE": $61c7f5070c9a4c2a$exports,
    "tr-TR": $dc9fde7a3f46111e$exports,
    "uk-UA": $b747931968423268$exports,
    "zh-CN": $11dc14d6570210bc$exports,
    "zh-TW": $6c6e2fe08434c9f9$exports
};





class $36bf0a52c9552f91$export$da43f8f5cb04028d extends $lg3jf$GridKeyboardDelegate {
    isCell(node) {
        return node.type === 'cell' || node.type === 'rowheader' || node.type === 'column';
    }
    getKeyBelow(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus was on a column, then focus the first child column if any,
        // or find the corresponding cell in the first row.
        if (startItem.type === 'column') {
            let child = [
                ...startItem.childNodes
            ][0];
            if (child) return child.key;
            let firstKey = this.getFirstKey();
            if (!firstKey) return;
            let firstItem = this.collection.getItem(firstKey);
            return [
                ...firstItem.childNodes
            ][startItem.index].key;
        }
        return super.getKeyBelow(key);
    }
    getKeyAbove(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus was on a column, focus the parent column if any
        if (startItem.type === 'column') {
            let parent = this.collection.getItem(startItem.parentKey);
            if (parent && parent.type === 'column') return parent.key;
            return;
        }
        // only return above row key if not header row
        let superKey = super.getKeyAbove(key);
        if (superKey && this.collection.getItem(superKey).type !== 'headerrow') return superKey;
        // If no item was found, and focus was on a cell, then focus the
        // corresponding column header.
        if (this.isCell(startItem)) return this.collection.columns[startItem.index].key;
        // If focus was on a row, then focus the first column header.
        return this.collection.columns[0].key;
    }
    findNextColumnKey(column) {
        // Search following columns
        let key = this.findNextKey(column.key, (item)=>item.type === 'column'
        );
        if (key != null) return key;
        // Wrap around to the first column
        let row = this.collection.headerRows[column.level];
        for (let item1 of row.childNodes){
            if (item1.type === 'column') return item1.key;
        }
    }
    findPreviousColumnKey(column) {
        // Search previous columns
        let key = this.findPreviousKey(column.key, (item)=>item.type === 'column'
        );
        if (key != null) return key;
        // Wrap around to the last column
        let row = this.collection.headerRows[column.level];
        let childNodes = [
            ...row.childNodes
        ];
        for(let i = childNodes.length - 1; i >= 0; i--){
            let item = childNodes[i];
            if (item.type === 'column') return item.key;
        }
    }
    getKeyRightOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus was on a column, then focus the next column
        if (item.type === 'column') return this.direction === 'rtl' ? this.findPreviousColumnKey(item) : this.findNextColumnKey(item);
        return super.getKeyRightOf(key);
    }
    getKeyLeftOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus was on a column, then focus the previous column
        if (item.type === 'column') return this.direction === 'rtl' ? this.findNextColumnKey(item) : this.findPreviousColumnKey(item);
        return super.getKeyLeftOf(key);
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey ?? this.getFirstKey();
        if (!key) return null;
        // If the starting key is a cell, search from its parent row.
        let startItem = collection.getItem(key);
        if (startItem.type === 'cell') key = startItem.parentKey;
        let hasWrapped = false;
        while(key != null){
            let item = collection.getItem(key);
            // Check each of the row header cells in this row for a match
            for (let cell of item.childNodes){
                let column = collection.columns[cell.index];
                if (collection.rowHeaderColumnKeys.has(column.key) && cell.textValue) {
                    let substring = cell.textValue.slice(0, search.length);
                    if (this.collator.compare(substring, search) === 0) {
                        // If we started on a cell, end on the matching cell. Otherwise, end on the row.
                        let fromItem = fromKey != null ? collection.getItem(fromKey) : startItem;
                        return fromItem.type === 'cell' ? cell.key : item.key;
                    }
                }
            }
            key = this.getKeyBelow(key);
            // Wrap around when reaching the end of the collection
            if (key == null && !hasWrapped) {
                key = this.getFirstKey();
                hasWrapped = true;
            }
        }
        return null;
    }
}




function $de6fb1089effb836$export$25bceaac3c7e4dc7(props, state, ref) {
    let { keyboardDelegate: keyboardDelegate , isVirtualized: isVirtualized , layout: layout  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $lg3jf$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let { direction: direction  } = $lg3jf$useLocale();
    let delegate = $lg3jf$useMemo(()=>keyboardDelegate || new $36bf0a52c9552f91$export$da43f8f5cb04028d({
            collection: state.collection,
            disabledKeys: state.disabledKeys,
            ref: ref,
            direction: direction,
            collator: collator,
            layout: layout
        })
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        ref,
        direction,
        collator,
        layout
    ]);
    let id = $lg3jf$useId();
    $6f9c0a4e4edd770f$export$552312adfd451dab.set(state, id);
    let { gridProps: gridProps  } = $lg3jf$useGrid({
        ...props,
        id: id,
        keyboardDelegate: delegate,
        getRowText (key) {
            let added = state.collection.getItem(key);
            if (!added) return '';
            // If the row has a textValue, use that.
            if (added.textValue != null) return added.textValue;
            // Otherwise combine the text of each of the row header columns.
            let rowHeaderColumnKeys = state.collection.rowHeaderColumnKeys;
            if (rowHeaderColumnKeys) {
                let text = [];
                for (let cell of added.childNodes){
                    let column = state.collection.columns[cell.index];
                    if (rowHeaderColumnKeys.has(column.key) && cell.textValue) text.push(cell.textValue);
                    if (text.length === rowHeaderColumnKeys.size) break;
                }
                return text.join(' ');
            }
            return '';
        }
    }, state, ref);
    // Override to include header rows
    if (isVirtualized) gridProps['aria-rowcount'] = state.collection.size + state.collection.headerRows.length;
    let { column: column1 , direction: sortDirection  } = state.sortDescriptor || {
    };
    let formatMessage = $lg3jf$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($f331acf2445b28d4$exports)));
    let sortDescription = $lg3jf$useMemo(()=>{
        let columnName = state.collection.columns.find((c)=>c.key === column1
        )?.textValue;
        return sortDirection && column1 ? formatMessage(`${sortDirection}Sort`, {
            columnName: columnName
        }) : undefined;
    }, [
        sortDirection,
        column1,
        state.collection.columns
    ]);
    let descriptionProps = $lg3jf$useDescription(sortDescription);
    // Only announce after initial render, tabbing to the table will tell you the initial sort info already
    $lg3jf$useUpdateEffect(()=>{
        $lg3jf$announce(sortDescription, 'assertive', 500);
    }, [
        sortDescription
    ]);
    return {
        gridProps: $lg3jf$mergeProps(gridProps, descriptionProps, {
            // merge sort description with long press information
            'aria-describedby': [
                descriptionProps['aria-describedby'],
                gridProps['aria-describedby']
            ].filter(Boolean).join(' ')
        })
    };
}


var $b66a81492d597384$exports = {};

$parcel$export($b66a81492d597384$exports, "useTableColumnHeader", () => $b66a81492d597384$export$9514819a8c81e960);







function $b66a81492d597384$export$9514819a8c81e960(props, state, ref) {
    let { node: node  } = props;
    let allowsSorting = node.props.allowsSorting;
    let { gridCellProps: gridCellProps  } = $lg3jf$useGridCell(props, state, ref);
    let isSelectionCellDisabled = node.props.isSelectionCell && state.selectionManager.selectionMode === 'single';
    let { pressProps: pressProps  } = $lg3jf$usePress({
        isDisabled: !allowsSorting || isSelectionCellDisabled,
        onPress () {
            state.sort(node.key);
        }
    });
    // Needed to pick up the focusable context, enabling things like Tooltips for example
    let { focusableProps: focusableProps  } = $lg3jf$useFocusable({
    }, ref);
    let ariaSort = null;
    let isSortedColumn = state.sortDescriptor?.column === node.key;
    let sortDirection = state.sortDescriptor?.direction;
    // aria-sort not supported in Android Talkback
    if (node.props.allowsSorting && !$lg3jf$isAndroid()) ariaSort = isSortedColumn ? sortDirection : 'none';
    let formatMessage = $lg3jf$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($f331acf2445b28d4$exports)));
    let sortDescription;
    if (allowsSorting) {
        sortDescription = `${formatMessage('sortable')}`;
        // Android Talkback doesn't support aria-sort so we add sort order details to the aria-described by here
        if (isSortedColumn && sortDirection && $lg3jf$isAndroid()) sortDescription = `${sortDescription}, ${formatMessage(sortDirection)}`;
    }
    let descriptionProps = $lg3jf$useDescription(sortDescription);
    return {
        columnHeaderProps: {
            ...$lg3jf$mergeProps(gridCellProps, pressProps, focusableProps, descriptionProps),
            role: 'columnheader',
            id: $6f9c0a4e4edd770f$export$37cd4213f2ad742e(state, node.key),
            'aria-colspan': node.colspan && node.colspan > 1 ? node.colspan : null,
            'aria-sort': ariaSort
        }
    };
}


var $524eb66f669f2d83$exports = {};

$parcel$export($524eb66f669f2d83$exports, "useTableRow", () => $524eb66f669f2d83$export$7f2f6ae19e707aa5);


function $524eb66f669f2d83$export$7f2f6ae19e707aa5(props, state, ref) {
    let { node: node  } = props;
    let { rowProps: rowProps , isPressed: isPressed  } = $lg3jf$useGridRow(props, state, ref);
    return {
        rowProps: {
            ...rowProps,
            'aria-labelledby': $6f9c0a4e4edd770f$export$85069b70317f543(state, node.key)
        },
        isPressed: isPressed
    };
}


var $64a2fc511de73acc$exports = {};

$parcel$export($64a2fc511de73acc$exports, "useTableHeaderRow", () => $64a2fc511de73acc$export$1b95a7d2d517b841);
function $64a2fc511de73acc$export$1b95a7d2d517b841(props, state, ref) {
    let { node: node , isVirtualized: isVirtualized  } = props;
    let rowProps = {
        role: 'row'
    };
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
    return {
        rowProps: rowProps
    };
}


var $f37ca173ca3159e8$exports = {};

$parcel$export($f37ca173ca3159e8$exports, "useTableCell", () => $f37ca173ca3159e8$export$49571c903d73624c);


function $f37ca173ca3159e8$export$49571c903d73624c(props, state, ref) {
    let { gridCellProps: gridCellProps , isPressed: isPressed  } = $lg3jf$useGridCell(props, state, ref);
    let columnKey = props.node.column.key;
    if (state.collection.rowHeaderColumnKeys.has(columnKey)) {
        gridCellProps.role = 'rowheader';
        gridCellProps.id = $6f9c0a4e4edd770f$export$19baff3266315d44(state, props.node.parentKey, columnKey);
    }
    return {
        gridCellProps: gridCellProps,
        isPressed: isPressed
    };
}


var $d65952132ff0431c$exports = {};

$parcel$export($d65952132ff0431c$exports, "useTableSelectionCheckbox", () => $d65952132ff0431c$export$16ea7f650bd7c1bb);
$parcel$export($d65952132ff0431c$exports, "useTableSelectAllCheckbox", () => $d65952132ff0431c$export$1003db6a7e384b99);




function $d65952132ff0431c$export$16ea7f650bd7c1bb(props, state) {
    let { key: key  } = props;
    const { checkboxProps: checkboxProps  } = $lg3jf$useGridSelectionCheckbox(props, state);
    return {
        checkboxProps: {
            ...checkboxProps,
            'aria-labelledby': `${checkboxProps.id} ${$6f9c0a4e4edd770f$export$85069b70317f543(state, key)}`
        }
    };
}
function $d65952132ff0431c$export$1003db6a7e384b99(state) {
    let { isEmpty: isEmpty , isSelectAll: isSelectAll , selectionMode: selectionMode  } = state.selectionManager;
    const formatMessage = $lg3jf$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($f331acf2445b28d4$exports)));
    return {
        checkboxProps: {
            'aria-label': formatMessage(selectionMode === 'single' ? 'select' : 'selectAll'),
            isSelected: isSelectAll,
            isDisabled: selectionMode !== 'multiple',
            isIndeterminate: !isEmpty && !isSelectAll,
            onChange: ()=>state.selectionManager.toggleSelectAll()
        }
    };
}





export {$146deabfb74735ca$re_export$useTableRowGroup as useTableRowGroup, $de6fb1089effb836$export$25bceaac3c7e4dc7 as useTable, $b66a81492d597384$export$9514819a8c81e960 as useTableColumnHeader, $524eb66f669f2d83$export$7f2f6ae19e707aa5 as useTableRow, $64a2fc511de73acc$export$1b95a7d2d517b841 as useTableHeaderRow, $f37ca173ca3159e8$export$49571c903d73624c as useTableCell, $d65952132ff0431c$export$16ea7f650bd7c1bb as useTableSelectionCheckbox, $d65952132ff0431c$export$1003db6a7e384b99 as useTableSelectAllCheckbox};
//# sourceMappingURL=module.js.map
