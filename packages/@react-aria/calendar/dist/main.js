var $9wLDA$reactarialiveannouncer = require("@react-aria/live-announcer");
var $9wLDA$reactariautils = require("@react-aria/utils");
var $9wLDA$reactariai18n = require("@react-aria/i18n");
var $9wLDA$internationalizeddate = require("@internationalized/date");
var $9wLDA$react = require("react");
var $9wLDA$reactariainteractions = require("@react-aria/interactions");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $862988d59d7e908d$exports = {};

$parcel$export($862988d59d7e908d$exports, "useCalendar", () => $862988d59d7e908d$export$3ee915f8151bd4f1);


var $93f234201e8b5fff$exports = {};
var $1f771f59415eabe0$exports = {};
$1f771f59415eabe0$exports = JSON.parse("{\"dateSelected\":\"تم تحديد {date, date, full}\",\"finishRangeSelectionPrompt\":\"انقر لإنهاء عملية تحديد نطاق التاريخ\",\"next\":\"التالي\",\"previous\":\"السابق\",\"selectedDateDescription\":\"التاريخ المحدد: {date, date, full}\",\"selectedRangeDescription\":\"النطاق المحدد: {start, date, long} إلى {end, date, long}\",\"startRangeSelectionPrompt\":\"انقر لبدء عملية تحديد نطاق التاريخ\",\"todayDate\":\"اليوم، {date, date, full}\",\"todayDateSelected\":\"اليوم، تم تحديد {date, date, full}\"}");


var $c032bf660b7a2d4f$exports = {};
$c032bf660b7a2d4f$exports = JSON.parse("{\"dateSelected\":\"избрани {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натиснете, за да довършите избора на времеви интервал\",\"next\":\"Напред\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Избрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Избран интервал: от {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натиснете, за да пристъпите към избора на времеви интервал\",\"todayDate\":\"Днес {date, date, full}\",\"todayDateSelected\":\"Днес са избрани {date, date, full}\"}");


var $3ce30d92d97be370$exports = {};
$3ce30d92d97be370$exports = JSON.parse("{\"dateSelected\":\"Vybráno: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výběr rozsahu dat\",\"next\":\"Další\",\"previous\":\"Předchozí\",\"selectedDateDescription\":\"Zvolené datum: {date, date, full}\",\"selectedRangeDescription\":\"Zvolený rozsah: {start, date, long} až {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknutím zahájíte výběr rozsahu dat\",\"todayDate\":\"Dnes, {date, date, full}\",\"todayDateSelected\":\"Vybrán dnešek: {date, date, full}\"}");


var $dcc3912427062559$exports = {};
$dcc3912427062559$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valgt\",\"finishRangeSelectionPrompt\":\"Klik for at fuldføre valg af datoområde\",\"next\":\"Næste\",\"previous\":\"Forrige\",\"selectedDateDescription\":\"Valgt dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgt område: {start, date, long} til {end, date, long}\",\"startRangeSelectionPrompt\":\"Klik for at starte valg af datoområde\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\"}");


var $de112789671e0a20$exports = {};
$de112789671e0a20$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} ausgewählt\",\"finishRangeSelectionPrompt\":\"Klicken, um die Auswahl des Datumsbereichs zu beenden\",\"next\":\"Weiter\",\"previous\":\"Zurück\",\"selectedDateDescription\":\"Ausgewähltes Datum: {date, date, full}\",\"selectedRangeDescription\":\"Bereich auswählen: {start, date, long} bis {end, date, long}\",\"startRangeSelectionPrompt\":\"Klicken, um die Auswahl des Datumsbereichs zu beginnen\",\"todayDate\":\"Heute, {date, date, full}\",\"todayDateSelected\":\"Heute, {date, date, full} ausgewählt\"}");


var $a7efdc440a0559ab$exports = {};
$a7efdc440a0559ab$exports = JSON.parse("{\"dateSelected\":\"Επιλέχτηκε {date, date, full}\",\"finishRangeSelectionPrompt\":\"Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών\",\"next\":\"Επόμενο\",\"previous\":\"Προηγούμενο\",\"selectedDateDescription\":\"Επιλεγμένη ημερομηνία: {date, date, full}\",\"selectedRangeDescription\":\"Επιλεγμένο εύρος: {start, date, long} έως {end, date, long}\",\"startRangeSelectionPrompt\":\"Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών\",\"todayDate\":\"Σήμερα, {date, date, full}\",\"todayDateSelected\":\"Σήμερα, επιλέχτηκε {date, date, full}\"}");


var $a53981310d8c823f$exports = {};
$a53981310d8c823f$exports = JSON.parse("{\"previous\":\"Previous\",\"next\":\"Next\",\"selectedDateDescription\":\"Selected Date: {date, date, full}\",\"selectedRangeDescription\":\"Selected Range: {start, date, long} to {end, date, long}\",\"todayDate\":\"Today, {date, date, full}\",\"todayDateSelected\":\"Today, {date, date, full} selected\",\"dateSelected\":\"{date, date, full} selected\",\"startRangeSelectionPrompt\":\"Click to start selecting date range\",\"finishRangeSelectionPrompt\":\"Click to finish selecting date range\"}");


var $1a0554711ca9daf1$exports = {};
$1a0554711ca9daf1$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} seleccionado\",\"finishRangeSelectionPrompt\":\"Haga clic para terminar de seleccionar rango de fechas\",\"next\":\"Siguiente\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Fecha seleccionada: {date, date, full}\",\"selectedRangeDescription\":\"Seleccionar rango: {start, date, long} a {end, date, long}\",\"startRangeSelectionPrompt\":\"Haga clic para comenzar a seleccionar un rango de fechas\",\"todayDate\":\"Hoy, {date, date, full}\",\"todayDateSelected\":\"Hoy, {date, date, full} seleccionado\"}");


var $232dad46c79711aa$exports = {};
$232dad46c79711aa$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valitud\",\"finishRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimise lõpetamiseks\",\"next\":\"Järgmine\",\"previous\":\"Eelmine\",\"selectedDateDescription\":\"Valitud kuupäev: {date, date, full}\",\"selectedRangeDescription\":\"Valitud vahemik: {start, date, long} kuni {end, date, long}\",\"startRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimiseks\",\"todayDate\":\"Täna {date, date, full}\",\"todayDateSelected\":\"Täna {date, date, full} valitud\"}");


var $cffc7bdf537f7778$exports = {};
$cffc7bdf537f7778$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valittu\",\"finishRangeSelectionPrompt\":\"Lopeta päivämääräalueen valinta napsauttamalla tätä.\",\"next\":\"Seuraava\",\"previous\":\"Edellinen\",\"selectedDateDescription\":\"Valittu päivämäärä: {date, date, full}\",\"selectedRangeDescription\":\"Valittu alue: {start, date, long} - {end, date, long}\",\"startRangeSelectionPrompt\":\"Aloita päivämääräalueen valinta napsauttamalla tätä.\",\"todayDate\":\"Tänään, {date, date, full}\",\"todayDateSelected\":\"Tänään, {date, date, full} valittu\"}");


var $bce66ee1a738bbef$exports = {};
$bce66ee1a738bbef$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} sélectionné\",\"finishRangeSelectionPrompt\":\"Cliquer pour finir de sélectionner la plage de dates\",\"next\":\"Suivant\",\"previous\":\"Précédent\",\"selectedDateDescription\":\"Date sélectionnée : {date, date, full}\",\"selectedRangeDescription\":\"Plage sélectionnée : {start, date, long} à {end, date, long}\",\"startRangeSelectionPrompt\":\"Cliquer pour commencer à sélectionner la plage de dates\",\"todayDate\":\"Aujourd’hui, {date, date, full}\",\"todayDateSelected\":\"Aujourd’hui, {date, date, full} sélectionné\"}");


var $724d9ef63edaae82$exports = {};
$724d9ef63edaae82$exports = JSON.parse("{\"dateSelected\":\"התאריך {date, date, full} שנבחר\",\"finishRangeSelectionPrompt\":\"חץ כדי לסיים את בחירת טווח התאריכים\",\"next\":\"הבא\",\"previous\":\"הקודם\",\"selectedDateDescription\":\"התאריך שנבחר: {date, date, full}\",\"selectedRangeDescription\":\"הטווח שנבחר: מ-{start, date, long} ועד {end, date, long}\",\"startRangeSelectionPrompt\":\"לחץ כדי להתחיל בבחירת טווח התאריכים\",\"todayDate\":\"היום, {date, date, full}\",\"todayDateSelected\":\"היום, התאריך {date, date, full} שנבחר\"}");


var $efd22ea307640d61$exports = {};
$efd22ea307640d61$exports = JSON.parse("{\"dateSelected\":\"Odabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite raspon odabranih datuma\",\"next\":\"Sljedeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Odabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Odabrani raspon: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete raspon odabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, odabran {date, date, full}\"}");


var $c17b2233f6f80bb5$exports = {};
$c17b2233f6f80bb5$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} kijelölve\",\"finishRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének befejezéséhez\",\"next\":\"Következő\",\"previous\":\"Előző\",\"selectedDateDescription\":\"Kijelölt dátum: {date, date, full}\",\"selectedRangeDescription\":\"Kijelölt tartomány: {start, date, long} – {end, date, long}\",\"startRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének indításához\",\"todayDate\":\"Ma, {date, date, full}\",\"todayDateSelected\":\"Ma, {date, date, full} kijelölve\"}");


var $938420e474b8a14b$exports = {};
$938420e474b8a14b$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selezionato\",\"finishRangeSelectionPrompt\":\"Fai clic per completare la selezione dell’intervallo di date\",\"next\":\"Successivo\",\"previous\":\"Precedente\",\"selectedDateDescription\":\"Data selezionata: {date, date, full}\",\"selectedRangeDescription\":\"Intervallo selezionato: da {start, date, long} a {end, date, long}\",\"startRangeSelectionPrompt\":\"Fai clic per selezionare l’intervallo di date\",\"todayDate\":\"Oggi, {date, date, full}\",\"todayDateSelected\":\"Oggi, {date, date, full} selezionato\"}");


var $8ece48564d08e559$exports = {};
$8ece48564d08e559$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} を選択\",\"finishRangeSelectionPrompt\":\"クリックして日付範囲の選択を終了\",\"next\":\"次へ\",\"previous\":\"前へ\",\"selectedDateDescription\":\"日付を選択：{date, date, full}\",\"selectedRangeDescription\":\"範囲を選択：{start, date, long} から {end, date, long}\",\"startRangeSelectionPrompt\":\"クリックして日付範囲の選択を開始\",\"todayDate\":\"本日、{date, date, full}\",\"todayDateSelected\":\"本日、{date, date, full} を選択\"}");


var $44dd05821154329a$exports = {};
$44dd05821154329a$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} 선택함\",\"finishRangeSelectionPrompt\":\"날짜 범위 선택을 완료하려면 클릭하십시오.\",\"next\":\"다음\",\"previous\":\"이전\",\"selectedDateDescription\":\"선택한 날짜: {date, date, full}\",\"selectedRangeDescription\":\"선택한 범위: {start, date, long} ~ {end, date, long}\",\"startRangeSelectionPrompt\":\"날짜 범위 선택을 시작하려면 클릭하십시오.\",\"todayDate\":\"오늘, {date, date, full}\",\"todayDateSelected\":\"오늘, {date, date, full} 선택함\"}");


var $262d03f517b4f8d2$exports = {};
$262d03f517b4f8d2$exports = JSON.parse("{\"dateSelected\":\"Pasirinkta {date, date, full}\",\"finishRangeSelectionPrompt\":\"Spustelėkite, kad baigtumėte pasirinkti datų intervalą\",\"next\":\"Paskesnis\",\"previous\":\"Ankstesnis\",\"selectedDateDescription\":\"Pasirinkta data: {date, date, full}\",\"selectedRangeDescription\":\"Pasirinktas intervalas: nuo {start, date, long} iki {end, date, long}\",\"startRangeSelectionPrompt\":\"Spustelėkite, kad pradėtumėte pasirinkti datų intervalą\",\"todayDate\":\"Šiandien, {date, date, full}\",\"todayDateSelected\":\"Šiandien, pasirinkta {date, date, full}\"}");


var $9fc9edec1f9373cd$exports = {};
$9fc9edec1f9373cd$exports = JSON.parse("{\"dateSelected\":\"Atlasīts {date, date, full}\",\"finishRangeSelectionPrompt\":\"Noklikšķiniet, lai pabeigtu datumu diapazona atlasi\",\"next\":\"Tālāk\",\"previous\":\"Atpakaļ\",\"selectedDateDescription\":\"Atlasītais datums: {date, date, full}\",\"selectedRangeDescription\":\"Atlasītais diapazons: {start, date, long} līdz {end, date, long}\",\"startRangeSelectionPrompt\":\"Noklikšķiniet, lai sāktu datumu diapazona atlasi\",\"todayDate\":\"Šodiena, {date, date, full}\",\"todayDateSelected\":\"Atlasīta šodiena, {date, date, full}\"}");


var $c2265380b38a57af$exports = {};
$c2265380b38a57af$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valgt\",\"finishRangeSelectionPrompt\":\"Klikk for å fullføre valg av datoområde\",\"next\":\"Neste\",\"previous\":\"Forrige\",\"selectedDateDescription\":\"Valgt dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgt område: {start, date, long} til {end, date, long}\",\"startRangeSelectionPrompt\":\"Klikk for å starte valg av datoområde\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\"}");


var $eb8ec01a5795350e$exports = {};
$eb8ec01a5795350e$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} geselecteerd\",\"finishRangeSelectionPrompt\":\"Klik om de selectie van het datumbereik te voltooien\",\"next\":\"Volgende\",\"previous\":\"Vorige\",\"selectedDateDescription\":\"Geselecteerde datum: {date, date, full}\",\"selectedRangeDescription\":\"Geselecteerd bereik: {start, date, long} t/m {end, date, long}\",\"startRangeSelectionPrompt\":\"Klik om het datumbereik te selecteren\",\"todayDate\":\"Vandaag, {date, date, full}\",\"todayDateSelected\":\"Vandaag, {date, date, full} geselecteerd\"}");


var $3b8f12e2008e8c30$exports = {};
$3b8f12e2008e8c30$exports = JSON.parse("{\"dateSelected\":\"Wybrano {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknij, aby zakończyć wybór zakresu dat\",\"next\":\"Dalej\",\"previous\":\"Wstecz\",\"selectedDateDescription\":\"Wybrana data: {date, date, full}\",\"selectedRangeDescription\":\"Wybrany zakres: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknij, aby rozpocząć wybór zakresu dat\",\"todayDate\":\"Dzisiaj {date, date, full}\",\"todayDateSelected\":\"Dzisiaj wybrano {date, date, full}\"}");


var $52f3b3192290cbd7$exports = {};
$52f3b3192290cbd7$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selecionado\",\"finishRangeSelectionPrompt\":\"Clique para concluir a seleção do intervalo de datas\",\"next\":\"Próximo\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Data selecionada: {date, date, full}\",\"selectedRangeDescription\":\"Intervalo selecionado: {start, date, long} até {end, date, long}\",\"startRangeSelectionPrompt\":\"Clique para iniciar a seleção do intervalo de datas\",\"todayDate\":\"Hoje, {date, date, full}\",\"todayDateSelected\":\"Hoje, {date, date, full} selecionado\"}");


var $0048423324d67786$exports = {};
$0048423324d67786$exports = JSON.parse("{\"dateSelected\":\"{data, data, completo} selecionado\",\"finishRangeSelectionPrompt\":\"Clique para terminar de selecionar o intervalo de datas\",\"next\":\"Próximo\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Data Selecionada: {data, data, completo}\",\"selectedRangeDescription\":\"Selecionar Intervalo: {início, data, longo} a {término, data, longo}\",\"startRangeSelectionPrompt\":\"Clique para começar a selecionar o intervalo de datas\",\"todayDate\":\"Hoje, {date, date, full}\",\"todayDateSelected\":\"Hoje, {date, date, full} selecionado\"}");


var $0381b42ba1b251c8$exports = {};
$0381b42ba1b251c8$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selectată\",\"finishRangeSelectionPrompt\":\"Apăsaţi pentru a finaliza selecţia razei pentru dată\",\"next\":\"Următorul\",\"previous\":\"Înainte\",\"selectedDateDescription\":\"Dată selectată: {date, date, full}\",\"selectedRangeDescription\":\"Selectaţi raza: {start, date, long} la {end, date, long}\",\"startRangeSelectionPrompt\":\"Apăsaţi pentru a începe selecţia razei pentru dată\",\"todayDate\":\"Astăzi, {date, date, full}\",\"todayDateSelected\":\"Dată, {date, date, full} selectată\"}");


var $255f377e0fdb0567$exports = {};
$255f377e0fdb0567$exports = JSON.parse("{\"dateSelected\":\"выбрано {date, date, full}\",\"finishRangeSelectionPrompt\":\"Щелкните, чтобы завершить выбор диапазона дат\",\"next\":\"Далее\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Выбранная дата: {date, date, full}\",\"selectedRangeDescription\":\"Выбранный диапазон: {start, date, long} – {end, date, long}\",\"startRangeSelectionPrompt\":\"Щелкните, чтобы начать выбор диапазона дат\",\"todayDate\":\"Сегодня, {date, date, full}\",\"todayDateSelected\":\"Сегодня, выбрано {date, date, full}\"}");


var $7c8e235926464b8b$exports = {};
$7c8e235926464b8b$exports = JSON.parse("{\"dateSelected\":\"Vybratý dátum {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výber rozsahu dátumov\",\"next\":\"Nasledujúce\",\"previous\":\"Predchádzajúce\",\"selectedDateDescription\":\"Vybratý dátum: {date, date, full}\",\"selectedRangeDescription\":\"Vybratý rozsah dátumov: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknutím spustíte výber rozsahu dátumov\",\"todayDate\":\"Dnešný dátum, {date, date, full}\",\"todayDateSelected\":\"Vybratý dnešný dátum, {date, date, full}\"}");


var $2e79f0fe3c39942a$exports = {};
$2e79f0fe3c39942a$exports = JSON.parse("{\"dateSelected\":\"izbrano: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite za dokončanje izbire datumskega obsega\",\"next\":\"Naprej\",\"previous\":\"Nazaj\",\"selectedDateDescription\":\"Izbrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izbrani razpon: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite za začetek izbire datumskega obsega\",\"todayDate\":\"Danes, {date, date, full}\",\"todayDateSelected\":\"Danes, izbrano: {date, date, full}\"}");


var $fc50e4c53fc464b5$exports = {};
$fc50e4c53fc464b5$exports = JSON.parse("{\"dateSelected\":\"Izabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite opseg izabranih datuma\",\"next\":\"Sledeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Izabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izabrani opseg: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete opseg izabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, izabran {date, date, full}\"}");


var $1832626e1481b789$exports = {};
$1832626e1481b789$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} har valts\",\"finishRangeSelectionPrompt\":\"Klicka för att avsluta val av datumintervall\",\"next\":\"Nästa\",\"previous\":\"Föregående\",\"selectedDateDescription\":\"Valt datum: {date, date, full}\",\"selectedRangeDescription\":\"Valt intervall: {start, date, long} till {end, date, long}\",\"startRangeSelectionPrompt\":\"Klicka för att välja datumintervall\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} har valts\"}");


var $3eb5e977ac9f2cfe$exports = {};
$3eb5e977ac9f2cfe$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} seçildi\",\"finishRangeSelectionPrompt\":\"Tarih aralığı seçimini tamamlamak için tıklayın\",\"next\":\"Sonraki\",\"previous\":\"Önceki\",\"selectedDateDescription\":\"Seçili Tarih: {date, date, full}\",\"selectedRangeDescription\":\"Seçili Aralık: {start, date, long} - {end, date, long}\",\"startRangeSelectionPrompt\":\"Tarih aralığı seçimini başlatmak için tıklayın\",\"todayDate\":\"Bugün, {date, date, full}\",\"todayDateSelected\":\"Bugün, {date, date, full} seçildi\"}");


var $4f730ab7d599570b$exports = {};
$4f730ab7d599570b$exports = JSON.parse("{\"dateSelected\":\"Вибрано: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натисніть, щоб завершити вибір діапазону дат\",\"next\":\"Наступний\",\"previous\":\"Попередній\",\"selectedDateDescription\":\"Вибрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Вибраний діапазон: від {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натисніть, щоб почати вибір діапазону дат\",\"todayDate\":\"Сьогодні: {date, date, full}\",\"todayDateSelected\":\"Сьогодні вибрано: {date, date, full}\"}");


var $f8401b17fc724214$exports = {};
$f8401b17fc724214$exports = JSON.parse("{\"dateSelected\":\"已选择 {date, date, full}\",\"finishRangeSelectionPrompt\":\"单击以完成选择日期范围\",\"next\":\"下一页\",\"previous\":\"上一页\",\"selectedDateDescription\":\"选定的日期: {date, date, full}\",\"selectedRangeDescription\":\"选定的范围: {start, date, long} 到 {end, date, long}\",\"startRangeSelectionPrompt\":\"单击以开始选择日期范围\",\"todayDate\":\"今天（{date, date, full}）\",\"todayDateSelected\":\"已选择今天（{date, date, full}）\"}");


var $fcdbad9184a08c89$exports = {};
$fcdbad9184a08c89$exports = JSON.parse("{\"dateSelected\":\"已選取 {date, date, full}\",\"finishRangeSelectionPrompt\":\"按一下以完成選取日期範圍\",\"next\":\"下一頁\",\"previous\":\"上一頁\",\"selectedDateDescription\":\"選取日期: {date, date, full}\",\"selectedRangeDescription\":\"選取範圍: {start, date, long} 至 {end, date, long}\",\"startRangeSelectionPrompt\":\"按一下以開始選取日期範圍\",\"todayDate\":\"今日，{date, date, full}\",\"todayDateSelected\":\"今日，已選取 {date, date, full}\"}");


$93f234201e8b5fff$exports = {
    "ar-AE": $1f771f59415eabe0$exports,
    "bg-BG": $c032bf660b7a2d4f$exports,
    "cs-CZ": $3ce30d92d97be370$exports,
    "da-DK": $dcc3912427062559$exports,
    "de-DE": $de112789671e0a20$exports,
    "el-GR": $a7efdc440a0559ab$exports,
    "en-US": $a53981310d8c823f$exports,
    "es-ES": $1a0554711ca9daf1$exports,
    "et-EE": $232dad46c79711aa$exports,
    "fi-FI": $cffc7bdf537f7778$exports,
    "fr-FR": $bce66ee1a738bbef$exports,
    "he-IL": $724d9ef63edaae82$exports,
    "hr-HR": $efd22ea307640d61$exports,
    "hu-HU": $c17b2233f6f80bb5$exports,
    "it-IT": $938420e474b8a14b$exports,
    "ja-JP": $8ece48564d08e559$exports,
    "ko-KR": $44dd05821154329a$exports,
    "lt-LT": $262d03f517b4f8d2$exports,
    "lv-LV": $9fc9edec1f9373cd$exports,
    "nb-NO": $c2265380b38a57af$exports,
    "nl-NL": $eb8ec01a5795350e$exports,
    "pl-PL": $3b8f12e2008e8c30$exports,
    "pt-BR": $52f3b3192290cbd7$exports,
    "pt-PT": $0048423324d67786$exports,
    "ro-RO": $0381b42ba1b251c8$exports,
    "ru-RU": $255f377e0fdb0567$exports,
    "sk-SK": $7c8e235926464b8b$exports,
    "sl-SI": $2e79f0fe3c39942a$exports,
    "sr-SP": $fc50e4c53fc464b5$exports,
    "sv-SE": $1832626e1481b789$exports,
    "tr-TR": $3eb5e977ac9f2cfe$exports,
    "uk-UA": $4f730ab7d599570b$exports,
    "zh-CN": $f8401b17fc724214$exports,
    "zh-TW": $fcdbad9184a08c89$exports
};




const $135b7103a83cd0d4$export$3ddff89c59628ee7 = new WeakMap();
function $135b7103a83cd0d4$export$b6df97c887c38e1a(state) {
    let formatMessage = $9wLDA$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($93f234201e8b5fff$exports)));
    let start, end;
    if ('highlightedRange' in state) ({ start: start , end: end  } = state.highlightedRange || {
    });
    else start = end = state.value;
    let anchorDate = 'anchorDate' in state ? state.anchorDate : null;
    return $9wLDA$react.useMemo(()=>{
        // No message if currently selecting a range, or there is nothing highlighted.
        if (!anchorDate && start && end) {
            // Use a single date message if the start and end dates are the same day,
            // otherwise include both dates.
            if ($9wLDA$internationalizeddate.isSameDay(start, end)) return formatMessage('selectedDateDescription', {
                date: $9wLDA$internationalizeddate.toDate(start, state.timeZone)
            });
            else return formatMessage('selectedRangeDescription', {
                start: $9wLDA$internationalizeddate.toDate(start, state.timeZone),
                end: $9wLDA$internationalizeddate.toDate(end, state.timeZone)
            });
        }
        return '';
    }, [
        start,
        end,
        anchorDate,
        state.timeZone,
        formatMessage
    ]);
}
function $135b7103a83cd0d4$export$31afe65d91ef6e8(startDate, endDate, timeZone) {
    let monthFormatter = $9wLDA$reactariai18n.useDateFormatter({
        month: 'long',
        year: 'numeric',
        era: startDate.calendar.identifier !== 'gregory' ? 'long' : undefined,
        calendar: startDate.calendar.identifier
    });
    let dateFormatter = $9wLDA$reactariai18n.useDateFormatter({
        dateStyle: 'long',
        calendar: startDate.calendar.identifier
    });
    return $9wLDA$react.useMemo(()=>{
        // Special case for month granularity. Format as a single month if only a
        // single month is visible, otherwise format as a range of months.
        if ($9wLDA$internationalizeddate.isSameDay(startDate, $9wLDA$internationalizeddate.startOfMonth(startDate))) {
            if ($9wLDA$internationalizeddate.isSameDay(endDate, $9wLDA$internationalizeddate.endOfMonth(startDate))) return monthFormatter.format(startDate.toDate(timeZone));
            else if ($9wLDA$internationalizeddate.isSameDay(endDate, $9wLDA$internationalizeddate.endOfMonth(endDate))) return monthFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
        }
        return dateFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
    }, [
        startDate,
        endDate,
        monthFormatter,
        dateFormatter,
        timeZone
    ]);
}





function $90a53fbd3a2ba0a9$export$d652b3ea2d672d5b(props, state) {
    let formatMessage = $9wLDA$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($93f234201e8b5fff$exports)));
    let calendarId = $9wLDA$reactariautils.useId(props.id);
    let visibleRangeDescription = $135b7103a83cd0d4$export$31afe65d91ef6e8(state.visibleRange.start, state.visibleRange.end, state.timeZone);
    // Announce when the visible date range changes
    $9wLDA$reactariautils.useUpdateEffect(()=>{
        // only when pressing the Previous or Next button
        if (!state.isFocused) $9wLDA$reactarialiveannouncer.announce(visibleRangeDescription);
    }, [
        visibleRangeDescription
    ]);
    // Announce when the selected value changes
    let selectedDateDescription = $135b7103a83cd0d4$export$b6df97c887c38e1a(state);
    $9wLDA$reactariautils.useUpdateEffect(()=>{
        if (selectedDateDescription) $9wLDA$reactarialiveannouncer.announce(selectedDateDescription, 'polite', 4000);
    // handle an update to the caption that describes the currently selected range, to announce the new value
    }, [
        selectedDateDescription
    ]);
    let descriptionProps = $9wLDA$reactariautils.useDescription(visibleRangeDescription);
    // Label the child grid elements by the group element if it is labelled.
    $135b7103a83cd0d4$export$3ddff89c59628ee7.set(state, props['aria-label'] || props['aria-labelledby'] ? calendarId : null);
    return {
        calendarProps: $9wLDA$reactariautils.mergeProps(descriptionProps, {
            role: 'group',
            id: calendarId,
            'aria-label': props['aria-label'],
            'aria-labelledby': props['aria-labelledby']
        }),
        nextButtonProps: {
            onPress: ()=>state.focusNextPage()
            ,
            'aria-label': formatMessage('next'),
            isDisabled: props.isDisabled || state.isNextVisibleRangeInvalid()
        },
        prevButtonProps: {
            onPress: ()=>state.focusPreviousPage()
            ,
            'aria-label': formatMessage('previous'),
            isDisabled: props.isDisabled || state.isPreviousVisibleRangeInvalid()
        }
    };
}


function $862988d59d7e908d$export$3ee915f8151bd4f1(props, state) {
    return $90a53fbd3a2ba0a9$export$d652b3ea2d672d5b(props, state);
}


var $7a9c8b017f753795$exports = {};

$parcel$export($7a9c8b017f753795$exports, "useRangeCalendar", () => $7a9c8b017f753795$export$87e0539f600c24e5);



function $7a9c8b017f753795$export$87e0539f600c24e5(props, state, ref) {
    let res = $90a53fbd3a2ba0a9$export$d652b3ea2d672d5b(props, state);
    res.nextButtonProps.id = $9wLDA$reactariautils.useId();
    res.prevButtonProps.id = $9wLDA$reactariautils.useId();
    // We need to ignore virtual pointer events from VoiceOver due to these bugs.
    // https://bugs.webkit.org/show_bug.cgi?id=222627
    // https://bugs.webkit.org/show_bug.cgi?id=223202
    // usePress also does this and waits for the following click event before firing.
    // We need to match that here otherwise this will fire before the press event in
    // useCalendarCell, causing range selection to not work properly.
    let isVirtualClick = $9wLDA$react.useRef(false);
    $9wLDA$reactariautils.useEvent($9wLDA$react.useRef(window), 'pointerdown', (e)=>{
        isVirtualClick.current = e.width === 0 && e.height === 0;
    });
    // Stop range selection when pressing or releasing a pointer outside the calendar body,
    // except when pressing the next or previous buttons to switch months.
    let endDragging = (e)=>{
        if (isVirtualClick.current) {
            isVirtualClick.current = false;
            return;
        }
        state.setDragging(false);
        if (!state.anchorDate) return;
        let target = e.target;
        let body = document.getElementById(res.calendarProps.id);
        if ((!body.contains(target) || target.getAttribute('role') !== 'button') && !document.getElementById(res.nextButtonProps.id)?.contains(target) && !document.getElementById(res.prevButtonProps.id)?.contains(target)) state.selectFocusedDate();
    };
    $9wLDA$reactariautils.useEvent($9wLDA$react.useRef(window), 'pointerup', endDragging);
    $9wLDA$reactariautils.useEvent($9wLDA$react.useRef(window), 'pointercancel', endDragging);
    // Prevent touch scrolling while dragging
    $9wLDA$reactariautils.useEvent(ref, 'touchmove', (e)=>{
        if (state.isDragging) e.preventDefault();
    }, {
        passive: false,
        capture: true
    });
    return res;
}


var $3031be958ebaccda$exports = {};

$parcel$export($3031be958ebaccda$exports, "useCalendarGrid", () => $3031be958ebaccda$export$cb95147730a423f5);



function $3031be958ebaccda$export$cb95147730a423f5(props, state) {
    let { isReadOnly: isReadOnly = false , isDisabled: isDisabled = false , startDate: startDate = state.visibleRange.start , endDate: endDate = state.visibleRange.end  } = props;
    let { direction: direction  } = $9wLDA$reactariai18n.useLocale();
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Enter':
            case ' ':
                e.preventDefault();
                state.selectFocusedDate();
                break;
            case 'PageUp':
                e.preventDefault();
                if (e.shiftKey) state.focusPreviousSection();
                else state.focusPreviousPage();
                break;
            case 'PageDown':
                e.preventDefault();
                if (e.shiftKey) state.focusNextSection();
                else state.focusNextPage();
                break;
            case 'End':
                e.preventDefault();
                state.focusPageEnd();
                break;
            case 'Home':
                e.preventDefault();
                state.focusPageStart();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (direction === 'rtl') state.focusNextDay();
                else state.focusPreviousDay();
                break;
            case 'ArrowUp':
                e.preventDefault();
                state.focusPreviousRow();
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (direction === 'rtl') state.focusPreviousDay();
                else state.focusNextDay();
                break;
            case 'ArrowDown':
                e.preventDefault();
                state.focusNextRow();
                break;
            case 'Escape':
                // Cancel the selection.
                if ('setAnchorDate' in state) {
                    e.preventDefault();
                    state.setAnchorDate(null);
                }
                break;
        }
    };
    let selectedDateDescription = $135b7103a83cd0d4$export$b6df97c887c38e1a(state);
    let descriptionProps = $9wLDA$reactariautils.useDescription(selectedDateDescription);
    let visibleRangeDescription = $135b7103a83cd0d4$export$31afe65d91ef6e8(startDate, endDate, state.timeZone);
    let labelProps = $9wLDA$reactariautils.useLabels({
        'aria-label': visibleRangeDescription,
        'aria-labelledby': $135b7103a83cd0d4$export$3ddff89c59628ee7.get(state)
    });
    return {
        gridProps: $9wLDA$reactariautils.mergeProps(descriptionProps, labelProps, {
            role: 'grid',
            'aria-readonly': isReadOnly || null,
            'aria-disabled': isDisabled || null,
            'aria-multiselectable': 'highlightedRange' in state || undefined,
            onKeyDown: onKeyDown,
            onFocus: ()=>state.setFocused(true)
            ,
            onBlur: ()=>state.setFocused(false)
        })
    };
}


var $e3b82c594aed6306$exports = {};

$parcel$export($e3b82c594aed6306$exports, "useCalendarCell", () => $e3b82c594aed6306$export$136073280381448e);







function $e3b82c594aed6306$export$136073280381448e(props, state, ref) {
    let { date: date , isDisabled: isDisabled  } = props;
    let formatMessage = $9wLDA$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($93f234201e8b5fff$exports)));
    let dateFormatter = $9wLDA$reactariai18n.useDateFormatter({
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        era: date.calendar.identifier !== 'gregory' ? 'long' : undefined,
        timeZone: state.timeZone
    });
    let isSelected = state.isSelected(date);
    let isFocused = state.isCellFocused(date);
    isDisabled = isDisabled || state.isCellDisabled(date);
    // For performance, reuse the same date object as before if the new date prop is the same.
    // This allows subsequent useMemo results to be reused.
    let lastDate = $9wLDA$react.useRef(null);
    if (lastDate.current && $9wLDA$internationalizeddate.isEqualDay(date, lastDate.current)) date = lastDate.current;
    lastDate.current = date;
    let nativeDate = $9wLDA$react.useMemo(()=>date.toDate(state.timeZone)
    , [
        date,
        state.timeZone
    ]);
    // aria-label should be localize Day of week, Month, Day and Year without Time.
    let isDateToday = $9wLDA$internationalizeddate.isToday(date, state.timeZone);
    let label = $9wLDA$react.useMemo(()=>{
        if (isDateToday) // If date is today, set appropriate string depending on selected state:
        return formatMessage(isSelected ? 'todayDateSelected' : 'todayDate', {
            date: nativeDate
        });
        else if (isSelected) // If date is selected but not today:
        return formatMessage('dateSelected', {
            date: nativeDate
        });
        return dateFormatter.format(nativeDate);
    }, [
        dateFormatter,
        nativeDate,
        formatMessage,
        isSelected,
        isDateToday
    ]);
    // When a cell is focused and this is a range calendar, add a prompt to help
    // screenreader users know that they are in a range selection mode.
    if ('anchorDate' in state && isFocused && !state.isReadOnly) {
        let rangeSelectionPrompt = '';
        // If selection has started add "click to finish selecting range"
        if (state.anchorDate) rangeSelectionPrompt = formatMessage('finishRangeSelectionPrompt');
        else rangeSelectionPrompt = formatMessage('startRangeSelectionPrompt');
        // Append to aria-label
        if (rangeSelectionPrompt) label = `${label} (${rangeSelectionPrompt})`;
    }
    let isAnchorPressed = $9wLDA$react.useRef(false);
    let isRangeBoundaryPressed = $9wLDA$react.useRef(false);
    let touchDragTimerRef = $9wLDA$react.useRef(null);
    let { pressProps: pressProps , isPressed: isPressed  } = $9wLDA$reactariainteractions.usePress({
        // When dragging to select a range, we don't want dragging over the original anchor
        // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
        shouldCancelOnPointerExit: 'anchorDate' in state && !!state.anchorDate,
        preventFocusOnPress: true,
        isDisabled: isDisabled,
        onPressStart (e) {
            if ('highlightedRange' in state && !state.anchorDate && (e.pointerType === 'mouse' || e.pointerType === 'touch')) {
                // Allow dragging the start or end date of a range to modify it
                // rather than starting a new selection.
                if (state.highlightedRange) {
                    if ($9wLDA$internationalizeddate.isSameDay(date, state.highlightedRange.start)) {
                        state.setAnchorDate(state.highlightedRange.end);
                        state.setFocusedDate(date);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    } else if ($9wLDA$internationalizeddate.isSameDay(date, state.highlightedRange.end)) {
                        state.setAnchorDate(state.highlightedRange.start);
                        state.setFocusedDate(date);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    }
                }
                let startDragging = ()=>{
                    state.setDragging(true);
                    touchDragTimerRef.current = null;
                    state.selectDate(date);
                    state.setFocusedDate(date);
                    isAnchorPressed.current = true;
                };
                // Start selection on mouse/touch down so users can drag to select a range.
                // On touch, delay dragging to determine if the user really meant to scroll.
                if (e.pointerType === 'touch') touchDragTimerRef.current = setTimeout(startDragging, 200);
                else startDragging();
            }
        },
        onPressEnd () {
            isRangeBoundaryPressed.current = false;
            isAnchorPressed.current = false;
            clearTimeout(touchDragTimerRef.current);
            touchDragTimerRef.current = null;
        },
        onPress () {
            // For non-range selection, always select on press up.
            if (!('anchorDate' in state)) {
                state.selectDate(date);
                state.setFocusedDate(date);
            }
        },
        onPressUp (e) {
            // If the user tapped quickly, the date won't be selected yet and the
            // timer will still be in progress. In this case, select the date on touch up.
            // Timer is cleared in onPressEnd.
            if ('anchorDate' in state && touchDragTimerRef.current) {
                state.selectDate(date);
                state.setFocusedDate(date);
            }
            if ('anchorDate' in state) {
                if (isRangeBoundaryPressed.current) // When clicking on the start or end date of an already selected range,
                // start a new selection on press up to also allow dragging the date to
                // change the existing range.
                state.setAnchorDate(date);
                else if (state.anchorDate && !isAnchorPressed.current) {
                    // When releasing a drag or pressing the end date of a range, select it.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                } else if (e.pointerType === 'keyboard' && !state.anchorDate) {
                    // For range selection, auto-advance the focused date by one if using keyboard.
                    // This gives an indication that you're selecting a range rather than a single date.
                    // For mouse, this is unnecessary because users will see the indication on hover. For screen readers,
                    // there will be an announcement to "click to finish selecting range" (above).
                    state.selectDate(date);
                    let nextDay = date.add({
                        days: 1
                    });
                    if ($9wLDA$internationalizeddate.isSameMonth(date, nextDay)) state.setFocusedDate(nextDay);
                } else if (e.pointerType === 'virtual') {
                    // For screen readers, just select the date on click.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                }
            }
        }
    });
    let tabIndex = null;
    if (!isDisabled) tabIndex = $9wLDA$internationalizeddate.isSameDay(date, state.focusedDate) ? 0 : -1;
    // Focus the button in the DOM when the state updates.
    $9wLDA$react.useEffect(()=>{
        if (isFocused && ref.current) $9wLDA$reactariautils.focusWithoutScrolling(ref.current);
    }, [
        isFocused,
        ref
    ]);
    return {
        cellProps: {
            role: 'gridcell',
            'aria-disabled': isDisabled || null,
            'aria-selected': isSelected
        },
        buttonProps: $9wLDA$reactariautils.mergeProps(pressProps, {
            onFocus () {
                if (!isDisabled) state.setFocusedDate(date);
            },
            tabIndex: tabIndex,
            role: 'button',
            'aria-disabled': isDisabled || null,
            'aria-label': label,
            onPointerEnter (e) {
                // Highlight the date on hover or drag over a date when selecting a range.
                if ('highlightDate' in state && (e.pointerType !== 'touch' || state.isDragging)) state.highlightDate(date);
            },
            onPointerDown (e) {
                // This is necessary on touch devices to allow dragging
                // outside the original pressed element.
                // (JSDOM does not support this)
                if ('releasePointerCapture' in e.target) e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu (e) {
                // Prevent context menu on long press.
                e.preventDefault();
            }
        }),
        isPressed: isPressed
    };
}


var $decd081ec927bed2$exports = {};

$parcel$export($decd081ec927bed2$exports, "useCalendarTableHeader", () => $decd081ec927bed2$export$2d550ec8e081e40b);
function $decd081ec927bed2$export$2d550ec8e081e40b() {
    return {
        columnHeaderProps: {
            scope: 'col'
        }
    };
}


var $492e0e8f56db6977$exports = {};


$parcel$exportWildcard(module.exports, $862988d59d7e908d$exports);
$parcel$exportWildcard(module.exports, $7a9c8b017f753795$exports);
$parcel$exportWildcard(module.exports, $3031be958ebaccda$exports);
$parcel$exportWildcard(module.exports, $e3b82c594aed6306$exports);
$parcel$exportWildcard(module.exports, $decd081ec927bed2$exports);
$parcel$exportWildcard(module.exports, $492e0e8f56db6977$exports);


//# sourceMappingURL=main.js.map
