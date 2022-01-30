var $dqDM5$reactariagrid = require("@react-aria/grid");
var $dqDM5$reactarialiveannouncer = require("@react-aria/live-announcer");
var $dqDM5$reactariautils = require("@react-aria/utils");
var $dqDM5$react = require("react");
var $dqDM5$reactariai18n = require("@react-aria/i18n");
var $dqDM5$reactariafocus = require("@react-aria/focus");
var $dqDM5$reactariainteractions = require("@react-aria/interactions");

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

$parcel$export(module.exports, "useTableRowGroup", () => $7153481f4e697131$re_export$useTableRowGroup);
var $01d78efb61b3cd45$exports = {};

$parcel$export($01d78efb61b3cd45$exports, "useTable", () => $01d78efb61b3cd45$export$25bceaac3c7e4dc7);


const $9beb69b29214fe1e$export$552312adfd451dab = new WeakMap();
function $9beb69b29214fe1e$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $9beb69b29214fe1e$export$37cd4213f2ad742e(state, columnKey) {
    let gridId = $9beb69b29214fe1e$export$552312adfd451dab.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${$9beb69b29214fe1e$var$normalizeKey(columnKey)}`;
}
function $9beb69b29214fe1e$export$19baff3266315d44(state, rowKey, columnKey) {
    let gridId = $9beb69b29214fe1e$export$552312adfd451dab.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${$9beb69b29214fe1e$var$normalizeKey(rowKey)}-${$9beb69b29214fe1e$var$normalizeKey(columnKey)}`;
}
function $9beb69b29214fe1e$export$85069b70317f543(state, rowKey) {
    // A row is labelled by it's row headers.
    return [
        ...state.collection.rowHeaderColumnKeys
    ].map((columnKey)=>$9beb69b29214fe1e$export$19baff3266315d44(state, rowKey, columnKey)
    ).join(' ');
}


var $8de6eda0c99fb540$exports = {};
var $4304ade003130231$exports = {};
$4304ade003130231$exports = JSON.parse("{\"ascending\":\"تصاعدي\",\"ascendingSort\":\"ترتيب حسب العمود {columnName} بترتيب تصاعدي\",\"descending\":\"تنازلي\",\"descendingSort\":\"ترتيب حسب العمود {columnName} بترتيب تنازلي\",\"select\":\"تحديد\",\"selectAll\":\"تحديد الكل\",\"sortable\":\"عمود قابل للترتيب\"}");


var $82adbf150071a515$exports = {};
$82adbf150071a515$exports = JSON.parse("{\"ascending\":\"възходящ\",\"ascendingSort\":\"сортирано по колона {columnName} във възходящ ред\",\"descending\":\"низходящ\",\"descendingSort\":\"сортирано по колона {columnName} в низходящ ред\",\"select\":\"Изберете\",\"selectAll\":\"Изберете всичко\",\"sortable\":\"сортираща колона\"}");


var $6d0f2b2ee6279c9c$exports = {};
$6d0f2b2ee6279c9c$exports = JSON.parse("{\"ascending\":\"vzestupně\",\"ascendingSort\":\"řazeno vzestupně podle sloupce {columnName}\",\"descending\":\"sestupně\",\"descendingSort\":\"řazeno sestupně podle sloupce {columnName}\",\"select\":\"Vybrat\",\"selectAll\":\"Vybrat vše\",\"sortable\":\"sloupec s možností řazení\"}");


var $fe1829b36194993d$exports = {};
$fe1829b36194993d$exports = JSON.parse("{\"ascending\":\"stigende\",\"ascendingSort\":\"sorteret efter kolonne {columnName} i stigende rækkefølge\",\"descending\":\"faldende\",\"descendingSort\":\"sorteret efter kolonne {columnName} i faldende rækkefølge\",\"select\":\"Vælg\",\"selectAll\":\"Vælg alle\",\"sortable\":\"sorterbar kolonne\"}");


var $1057f9393e89d057$exports = {};
$1057f9393e89d057$exports = JSON.parse("{\"ascending\":\"aufsteigend\",\"ascendingSort\":\"sortiert nach Spalte {columnName} in aufsteigender Reihenfolge\",\"descending\":\"absteigend\",\"descendingSort\":\"sortiert nach Spalte {columnName} in absteigender Reihenfolge\",\"select\":\"Auswählen\",\"selectAll\":\"Alles auswählen\",\"sortable\":\"sortierbare Spalte\"}");


var $4069c58fa039a05e$exports = {};
$4069c58fa039a05e$exports = JSON.parse("{\"ascending\":\"αύξουσα\",\"ascendingSort\":\"διαλογή ανά στήλη {columnName} σε αύξουσα σειρά\",\"descending\":\"φθίνουσα\",\"descendingSort\":\"διαλογή ανά στήλη {columnName} σε φθίνουσα σειρά\",\"select\":\"Επιλογή\",\"selectAll\":\"Επιλογή όλων\",\"sortable\":\"Στήλη διαλογής\"}");


var $5f92b0c63457df07$exports = {};
$5f92b0c63457df07$exports = JSON.parse("{\"select\":\"Select\",\"selectAll\":\"Select All\",\"sortable\":\"sortable column\",\"ascending\":\"ascending\",\"descending\":\"descending\",\"ascendingSort\":\"sorted by column {columnName} in ascending order\",\"descendingSort\":\"sorted by column {columnName} in descending order\"}");


var $96532e713fc0a281$exports = {};
$96532e713fc0a281$exports = JSON.parse("{\"ascending\":\"de subida\",\"ascendingSort\":\"ordenado por columna {columnName} en orden de subida\",\"descending\":\"de bajada\",\"descendingSort\":\"ordenado por columna {columnName} en orden de bajada\",\"select\":\"Seleccionar\",\"selectAll\":\"Seleccionar todos\",\"sortable\":\"columna ordenable\"}");


var $26346bc496a8af0e$exports = {};
$26346bc496a8af0e$exports = JSON.parse("{\"ascending\":\"tõusev järjestus\",\"ascendingSort\":\"sorditud veeru järgi {columnName} tõusvas järjestuses\",\"descending\":\"laskuv järjestus\",\"descendingSort\":\"sorditud veeru järgi {columnName} laskuvas järjestuses\",\"select\":\"Vali\",\"selectAll\":\"Vali kõik\",\"sortable\":\"sorditav veerg\"}");


var $c3b7372a468078a4$exports = {};
$c3b7372a468078a4$exports = JSON.parse("{\"ascending\":\"nouseva\",\"ascendingSort\":\"lajiteltu sarakkeen {columnName} mukaan nousevassa järjestyksessä\",\"descending\":\"laskeva\",\"descendingSort\":\"lajiteltu sarakkeen {columnName} mukaan laskevassa järjestyksessä\",\"select\":\"Valitse\",\"selectAll\":\"Valitse kaikki\",\"sortable\":\"lajiteltava sarake\"}");


var $65093a11db70464c$exports = {};
$65093a11db70464c$exports = JSON.parse("{\"ascending\":\"croissant\",\"ascendingSort\":\"trié en fonction de la colonne {columnName} par ordre croissant\",\"descending\":\"décroissant\",\"descendingSort\":\"trié en fonction de la colonne {columnName} par ordre décroissant\",\"select\":\"Sélectionner\",\"selectAll\":\"Sélectionner tout\",\"sortable\":\"colonne triable\"}");


var $a05b9cd3d69570be$exports = {};
$a05b9cd3d69570be$exports = JSON.parse("{\"ascending\":\"עולה\",\"ascendingSort\":\"מוין לפי עמודה {columnName} בסדר עולה\",\"descending\":\"יורד\",\"descendingSort\":\"מוין לפי עמודה {columnName} בסדר יורד\",\"select\":\"בחר\",\"selectAll\":\"בחר הכול\",\"sortable\":\"עמודה שניתן למיין\"}");


var $824676d9ffdeafa0$exports = {};
$824676d9ffdeafa0$exports = JSON.parse("{\"ascending\":\"rastući\",\"ascendingSort\":\"razvrstano po stupcima {columnName} rastućem redoslijedom\",\"descending\":\"padajući\",\"descendingSort\":\"razvrstano po stupcima {columnName} padajućim redoslijedom\",\"select\":\"Odaberite\",\"selectAll\":\"Odaberite sve\",\"sortable\":\"stupac koji se može razvrstati\"}");


var $0e339068d0c83268$exports = {};
$0e339068d0c83268$exports = JSON.parse("{\"ascending\":\"növekvő\",\"ascendingSort\":\"rendezve a(z) {columnName} oszlop szerint, növekvő sorrendben\",\"descending\":\"csökkenő\",\"descendingSort\":\"rendezve a(z) {columnName} oszlop szerint, csökkenő sorrendben\",\"select\":\"Kijelölés\",\"selectAll\":\"Összes kijelölése\",\"sortable\":\"rendezendő oszlop\"}");


var $4fa650c54f433913$exports = {};
$4fa650c54f433913$exports = JSON.parse("{\"ascending\":\"crescente\",\"ascendingSort\":\"in ordine crescente in base alla colonna {columnName}\",\"descending\":\"decrescente\",\"descendingSort\":\"in ordine decrescente in base alla colonna {columnName}\",\"select\":\"Seleziona\",\"selectAll\":\"Seleziona tutto\",\"sortable\":\"colonna ordinabile\"}");


var $59aa01ffe249e8e7$exports = {};
$59aa01ffe249e8e7$exports = JSON.parse("{\"ascending\":\"昇順\",\"ascendingSort\":\"列 {columnName} を昇順で並べ替え\",\"descending\":\"降順\",\"descendingSort\":\"列 {columnName} を降順で並べ替え\",\"select\":\"選択\",\"selectAll\":\"すべて選択\",\"sortable\":\"並べ替え可能な列\"}");


var $702814c241cf30d2$exports = {};
$702814c241cf30d2$exports = JSON.parse("{\"ascending\":\"오름차순\",\"ascendingSort\":\"{columnName} 열을 기준으로 오름차순으로 정렬됨\",\"descending\":\"내림차순\",\"descendingSort\":\"{columnName} 열을 기준으로 내림차순으로 정렬됨\",\"select\":\"선택\",\"selectAll\":\"모두 선택\",\"sortable\":\"정렬 가능한 열\"}");


var $decc11ea0b9fdebe$exports = {};
$decc11ea0b9fdebe$exports = JSON.parse("{\"ascending\":\"didėjančia tvarka\",\"ascendingSort\":\"surikiuota pagal stulpelį {columnName} didėjančia tvarka\",\"descending\":\"mažėjančia tvarka\",\"descendingSort\":\"surikiuota pagal stulpelį {columnName} mažėjančia tvarka\",\"select\":\"Pasirinkti\",\"selectAll\":\"Pasirinkti viską\",\"sortable\":\"rikiuojamas stulpelis\"}");


var $086b72955d2bcaa1$exports = {};
$086b72955d2bcaa1$exports = JSON.parse("{\"ascending\":\"augošā secībā\",\"ascendingSort\":\"kārtots pēc kolonnas {columnName} augošā secībā\",\"descending\":\"dilstošā secībā\",\"descendingSort\":\"kārtots pēc kolonnas {columnName} dilstošā secībā\",\"select\":\"Atlasīt\",\"selectAll\":\"Atlasīt visu\",\"sortable\":\"kārtojamā kolonna\"}");


var $18fae85e1c6437c3$exports = {};
$18fae85e1c6437c3$exports = JSON.parse("{\"ascending\":\"stigende\",\"ascendingSort\":\"sortert etter kolonne {columnName} i stigende rekkefølge\",\"descending\":\"synkende\",\"descendingSort\":\"sortert etter kolonne {columnName} i synkende rekkefølge\",\"select\":\"Velg\",\"selectAll\":\"Velg alle\",\"sortable\":\"kolonne som kan sorteres\"}");


var $ffcfd431e026d6cc$exports = {};
$ffcfd431e026d6cc$exports = JSON.parse("{\"ascending\":\"oplopend\",\"ascendingSort\":\"gesorteerd in oplopende volgorde in kolom {columnName}\",\"descending\":\"aflopend\",\"descendingSort\":\"gesorteerd in aflopende volgorde in kolom {columnName}\",\"select\":\"Selecteren\",\"selectAll\":\"Alles selecteren\",\"sortable\":\"sorteerbare kolom\"}");


var $75e7ea2943572698$exports = {};
$75e7ea2943572698$exports = JSON.parse("{\"ascending\":\"rosnąco\",\"ascendingSort\":\"posortowano według kolumny {columnName} w porządku rosnącym\",\"descending\":\"malejąco\",\"descendingSort\":\"posortowano według kolumny {columnName} w porządku malejącym\",\"select\":\"Zaznacz\",\"selectAll\":\"Zaznacz wszystko\",\"sortable\":\"kolumna z możliwością sortowania\"}");


var $f8a270854e792dba$exports = {};
$f8a270854e792dba$exports = JSON.parse("{\"ascending\":\"crescente\",\"ascendingSort\":\"classificado pela coluna {columnName} em ordem crescente\",\"descending\":\"decrescente\",\"descendingSort\":\"classificado pela coluna {columnName} em ordem decrescente\",\"select\":\"Selecionar\",\"selectAll\":\"Selecionar tudo\",\"sortable\":\"coluna classificável\"}");


var $338905024b461fc8$exports = {};
$338905024b461fc8$exports = JSON.parse("{\"ascending\":\"ascendente\",\"ascendingSort\":\"Ordenar por coluna {columnName} em ordem ascendente\",\"descending\":\"descendente\",\"descendingSort\":\"Ordenar por coluna {columnName} em ordem descendente\",\"select\":\"Selecionar\",\"selectAll\":\"Selecionar tudo\",\"sortable\":\"Coluna ordenável\"}");


var $7deed4eb8afec3f4$exports = {};
$7deed4eb8afec3f4$exports = JSON.parse("{\"ascending\":\"crescătoare\",\"ascendingSort\":\"sortate după coloana {columnName} în ordine crescătoare\",\"descending\":\"descrescătoare\",\"descendingSort\":\"sortate după coloana {columnName} în ordine descrescătoare\",\"select\":\"Selectare\",\"selectAll\":\"Selectare totală\",\"sortable\":\"coloană sortabilă\"}");


var $0131efc35826574c$exports = {};
$0131efc35826574c$exports = JSON.parse("{\"ascending\":\"возрастание\",\"ascendingSort\":\"сортировать столбец {columnName} в порядке возрастания\",\"descending\":\"убывание\",\"descendingSort\":\"сортировать столбец {columnName} в порядке убывания\",\"select\":\"Выбрать\",\"selectAll\":\"Выбрать все\",\"sortable\":\"сортируемый столбец\"}");


var $e703ccb2193df85d$exports = {};
$e703ccb2193df85d$exports = JSON.parse("{\"ascending\":\"vzostupne\",\"ascendingSort\":\"zoradené zostupne podľa stĺpca {columnName}\",\"descending\":\"zostupne\",\"descendingSort\":\"zoradené zostupne podľa stĺpca {columnName}\",\"select\":\"Vybrať\",\"selectAll\":\"Vybrať všetko\",\"sortable\":\"zoraditeľný stĺpec\"}");


var $808a73f9463df120$exports = {};
$808a73f9463df120$exports = JSON.parse("{\"ascending\":\"naraščajoče\",\"ascendingSort\":\"razvrščeno po stolpcu {columnName} v naraščajočem vrstnem redu\",\"descending\":\"padajoče\",\"descendingSort\":\"razvrščeno po stolpcu {columnName} v padajočem vrstnem redu\",\"select\":\"Izberite\",\"selectAll\":\"Izberite vse\",\"sortable\":\"razvrstljivi stolpec\"}");


var $096cc827506ea56a$exports = {};
$096cc827506ea56a$exports = JSON.parse("{\"ascending\":\"rastući\",\"ascendingSort\":\"sortirano po kolonama {columnName} rastućim redosledom\",\"descending\":\"padajući\",\"descendingSort\":\"sortirano po kolonama {columnName} padajućim redosledom\",\"select\":\"Izaberite\",\"selectAll\":\"Izaberite sve\",\"sortable\":\"kolona koja se može sortirati\"}");


var $303e618a8154574b$exports = {};
$303e618a8154574b$exports = JSON.parse("{\"ascending\":\"stigande\",\"ascendingSort\":\"sorterat på kolumn {columnName} i stigande ordning\",\"descending\":\"fallande\",\"descendingSort\":\"sorterat på kolumn {columnName} i fallande ordning\",\"select\":\"Markera\",\"selectAll\":\"Markera allt\",\"sortable\":\"sorterbar kolumn\"}");


var $7d11f5eac2885080$exports = {};
$7d11f5eac2885080$exports = JSON.parse("{\"ascending\":\"artan sırada\",\"ascendingSort\":\"{columnName} sütuna göre artan düzende sırala\",\"descending\":\"azalan sırada\",\"descendingSort\":\"{columnName} sütuna göre azalan düzende sırala\",\"select\":\"Seç\",\"selectAll\":\"Tümünü Seç\",\"sortable\":\"Sıralanabilir sütun\"}");


var $0c1b45d4293ec737$exports = {};
$0c1b45d4293ec737$exports = JSON.parse("{\"ascending\":\"висхідний\",\"ascendingSort\":\"відсортовано за стовпцем {columnName} у висхідному порядку\",\"descending\":\"низхідний\",\"descendingSort\":\"відсортовано за стовпцем {columnName} у низхідному порядку\",\"select\":\"Вибрати\",\"selectAll\":\"Вибрати все\",\"sortable\":\"сортувальний стовпець\"}");


var $3c1c3f7b70864ae3$exports = {};
$3c1c3f7b70864ae3$exports = JSON.parse("{\"ascending\":\"升序\",\"ascendingSort\":\"按列 {columnName} 升序排序\",\"descending\":\"降序\",\"descendingSort\":\"按列 {columnName} 降序排序\",\"select\":\"选择\",\"selectAll\":\"全选\",\"sortable\":\"可排序的列\"}");


var $28700a39817db5f4$exports = {};
$28700a39817db5f4$exports = JSON.parse("{\"ascending\":\"遞增\",\"ascendingSort\":\"已依據「{columnName}」欄遞增排序\",\"descending\":\"遞減\",\"descendingSort\":\"已依據「{columnName}」欄遞減排序\",\"select\":\"選取\",\"selectAll\":\"全選\",\"sortable\":\"可排序的欄\"}");


$8de6eda0c99fb540$exports = {
    "ar-AE": $4304ade003130231$exports,
    "bg-BG": $82adbf150071a515$exports,
    "cs-CZ": $6d0f2b2ee6279c9c$exports,
    "da-DK": $fe1829b36194993d$exports,
    "de-DE": $1057f9393e89d057$exports,
    "el-GR": $4069c58fa039a05e$exports,
    "en-US": $5f92b0c63457df07$exports,
    "es-ES": $96532e713fc0a281$exports,
    "et-EE": $26346bc496a8af0e$exports,
    "fi-FI": $c3b7372a468078a4$exports,
    "fr-FR": $65093a11db70464c$exports,
    "he-IL": $a05b9cd3d69570be$exports,
    "hr-HR": $824676d9ffdeafa0$exports,
    "hu-HU": $0e339068d0c83268$exports,
    "it-IT": $4fa650c54f433913$exports,
    "ja-JP": $59aa01ffe249e8e7$exports,
    "ko-KR": $702814c241cf30d2$exports,
    "lt-LT": $decc11ea0b9fdebe$exports,
    "lv-LV": $086b72955d2bcaa1$exports,
    "nb-NO": $18fae85e1c6437c3$exports,
    "nl-NL": $ffcfd431e026d6cc$exports,
    "pl-PL": $75e7ea2943572698$exports,
    "pt-BR": $f8a270854e792dba$exports,
    "pt-PT": $338905024b461fc8$exports,
    "ro-RO": $7deed4eb8afec3f4$exports,
    "ru-RU": $0131efc35826574c$exports,
    "sk-SK": $e703ccb2193df85d$exports,
    "sl-SI": $808a73f9463df120$exports,
    "sr-SP": $096cc827506ea56a$exports,
    "sv-SE": $303e618a8154574b$exports,
    "tr-TR": $7d11f5eac2885080$exports,
    "uk-UA": $0c1b45d4293ec737$exports,
    "zh-CN": $3c1c3f7b70864ae3$exports,
    "zh-TW": $28700a39817db5f4$exports
};





class $6067086902ebd45e$export$da43f8f5cb04028d extends $dqDM5$reactariagrid.GridKeyboardDelegate {
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




function $01d78efb61b3cd45$export$25bceaac3c7e4dc7(props, state, ref) {
    let { keyboardDelegate: keyboardDelegate , isVirtualized: isVirtualized , layout: layout  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $dqDM5$reactariai18n.useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let { direction: direction  } = $dqDM5$reactariai18n.useLocale();
    let delegate = $dqDM5$react.useMemo(()=>keyboardDelegate || new $6067086902ebd45e$export$da43f8f5cb04028d({
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
    let id = $dqDM5$reactariautils.useId();
    $9beb69b29214fe1e$export$552312adfd451dab.set(state, id);
    let { gridProps: gridProps  } = $dqDM5$reactariagrid.useGrid({
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
    let formatMessage = $dqDM5$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($8de6eda0c99fb540$exports)));
    let sortDescription = $dqDM5$react.useMemo(()=>{
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
    let descriptionProps = $dqDM5$reactariautils.useDescription(sortDescription);
    // Only announce after initial render, tabbing to the table will tell you the initial sort info already
    $dqDM5$reactariautils.useUpdateEffect(()=>{
        $dqDM5$reactarialiveannouncer.announce(sortDescription, 'assertive', 500);
    }, [
        sortDescription
    ]);
    return {
        gridProps: $dqDM5$reactariautils.mergeProps(gridProps, descriptionProps, {
            // merge sort description with long press information
            'aria-describedby': [
                descriptionProps['aria-describedby'],
                gridProps['aria-describedby']
            ].filter(Boolean).join(' ')
        })
    };
}


var $90154d223dc4e89f$exports = {};

$parcel$export($90154d223dc4e89f$exports, "useTableColumnHeader", () => $90154d223dc4e89f$export$9514819a8c81e960);







function $90154d223dc4e89f$export$9514819a8c81e960(props, state, ref) {
    let { node: node  } = props;
    let allowsSorting = node.props.allowsSorting;
    let { gridCellProps: gridCellProps  } = $dqDM5$reactariagrid.useGridCell(props, state, ref);
    let isSelectionCellDisabled = node.props.isSelectionCell && state.selectionManager.selectionMode === 'single';
    let { pressProps: pressProps  } = $dqDM5$reactariainteractions.usePress({
        isDisabled: !allowsSorting || isSelectionCellDisabled,
        onPress () {
            state.sort(node.key);
        }
    });
    // Needed to pick up the focusable context, enabling things like Tooltips for example
    let { focusableProps: focusableProps  } = $dqDM5$reactariafocus.useFocusable({
    }, ref);
    let ariaSort = null;
    let isSortedColumn = state.sortDescriptor?.column === node.key;
    let sortDirection = state.sortDescriptor?.direction;
    // aria-sort not supported in Android Talkback
    if (node.props.allowsSorting && !$dqDM5$reactariautils.isAndroid()) ariaSort = isSortedColumn ? sortDirection : 'none';
    let formatMessage = $dqDM5$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($8de6eda0c99fb540$exports)));
    let sortDescription;
    if (allowsSorting) {
        sortDescription = `${formatMessage('sortable')}`;
        // Android Talkback doesn't support aria-sort so we add sort order details to the aria-described by here
        if (isSortedColumn && sortDirection && $dqDM5$reactariautils.isAndroid()) sortDescription = `${sortDescription}, ${formatMessage(sortDirection)}`;
    }
    let descriptionProps = $dqDM5$reactariautils.useDescription(sortDescription);
    return {
        columnHeaderProps: {
            ...$dqDM5$reactariautils.mergeProps(gridCellProps, pressProps, focusableProps, descriptionProps),
            role: 'columnheader',
            id: $9beb69b29214fe1e$export$37cd4213f2ad742e(state, node.key),
            'aria-colspan': node.colspan && node.colspan > 1 ? node.colspan : null,
            'aria-sort': ariaSort
        }
    };
}


var $b3e06969d1829492$exports = {};

$parcel$export($b3e06969d1829492$exports, "useTableRow", () => $b3e06969d1829492$export$7f2f6ae19e707aa5);


function $b3e06969d1829492$export$7f2f6ae19e707aa5(props, state, ref) {
    let { node: node  } = props;
    let { rowProps: rowProps , isPressed: isPressed  } = $dqDM5$reactariagrid.useGridRow(props, state, ref);
    return {
        rowProps: {
            ...rowProps,
            'aria-labelledby': $9beb69b29214fe1e$export$85069b70317f543(state, node.key)
        },
        isPressed: isPressed
    };
}


var $d0280e6d515f376c$exports = {};

$parcel$export($d0280e6d515f376c$exports, "useTableHeaderRow", () => $d0280e6d515f376c$export$1b95a7d2d517b841);
function $d0280e6d515f376c$export$1b95a7d2d517b841(props, state, ref) {
    let { node: node , isVirtualized: isVirtualized  } = props;
    let rowProps = {
        role: 'row'
    };
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
    return {
        rowProps: rowProps
    };
}


var $07c4383a0db32695$exports = {};

$parcel$export($07c4383a0db32695$exports, "useTableCell", () => $07c4383a0db32695$export$49571c903d73624c);


function $07c4383a0db32695$export$49571c903d73624c(props, state, ref) {
    let { gridCellProps: gridCellProps , isPressed: isPressed  } = $dqDM5$reactariagrid.useGridCell(props, state, ref);
    let columnKey = props.node.column.key;
    if (state.collection.rowHeaderColumnKeys.has(columnKey)) {
        gridCellProps.role = 'rowheader';
        gridCellProps.id = $9beb69b29214fe1e$export$19baff3266315d44(state, props.node.parentKey, columnKey);
    }
    return {
        gridCellProps: gridCellProps,
        isPressed: isPressed
    };
}


var $bc70818be23e04b6$exports = {};

$parcel$export($bc70818be23e04b6$exports, "useTableSelectionCheckbox", () => $bc70818be23e04b6$export$16ea7f650bd7c1bb);
$parcel$export($bc70818be23e04b6$exports, "useTableSelectAllCheckbox", () => $bc70818be23e04b6$export$1003db6a7e384b99);




function $bc70818be23e04b6$export$16ea7f650bd7c1bb(props, state) {
    let { key: key  } = props;
    const { checkboxProps: checkboxProps  } = $dqDM5$reactariagrid.useGridSelectionCheckbox(props, state);
    return {
        checkboxProps: {
            ...checkboxProps,
            'aria-labelledby': `${checkboxProps.id} ${$9beb69b29214fe1e$export$85069b70317f543(state, key)}`
        }
    };
}
function $bc70818be23e04b6$export$1003db6a7e384b99(state) {
    let { isEmpty: isEmpty , isSelectAll: isSelectAll , selectionMode: selectionMode  } = state.selectionManager;
    const formatMessage = $dqDM5$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($8de6eda0c99fb540$exports)));
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



$parcel$exportWildcard(module.exports, $01d78efb61b3cd45$exports);
$parcel$exportWildcard(module.exports, $90154d223dc4e89f$exports);
$parcel$exportWildcard(module.exports, $b3e06969d1829492$exports);
$parcel$exportWildcard(module.exports, $d0280e6d515f376c$exports);
$parcel$exportWildcard(module.exports, $07c4383a0db32695$exports);
$parcel$exportWildcard(module.exports, $bc70818be23e04b6$exports);


//# sourceMappingURL=main.js.map
