import {announce as $8ApYj$announce} from "@react-aria/live-announcer";
import {useId as $8ApYj$useId, useUpdateEffect as $8ApYj$useUpdateEffect, useDescription as $8ApYj$useDescription, mergeProps as $8ApYj$mergeProps, useEvent as $8ApYj$useEvent, useLabels as $8ApYj$useLabels, focusWithoutScrolling as $8ApYj$focusWithoutScrolling} from "@react-aria/utils";
import {useMessageFormatter as $8ApYj$useMessageFormatter, useDateFormatter as $8ApYj$useDateFormatter, useLocale as $8ApYj$useLocale} from "@react-aria/i18n";
import {isSameDay as $8ApYj$isSameDay, toDate as $8ApYj$toDate, startOfMonth as $8ApYj$startOfMonth, endOfMonth as $8ApYj$endOfMonth, isEqualDay as $8ApYj$isEqualDay, isToday as $8ApYj$isToday, isSameMonth as $8ApYj$isSameMonth} from "@internationalized/date";
import {useMemo as $8ApYj$useMemo, useRef as $8ApYj$useRef, useEffect as $8ApYj$useEffect} from "react";
import {usePress as $8ApYj$usePress} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $75c0e4bd04f78ef1$exports = {};

$parcel$export($75c0e4bd04f78ef1$exports, "useCalendar", () => $75c0e4bd04f78ef1$export$3ee915f8151bd4f1);


var $1a15bab094643210$exports = {};
var $823014d021c04649$exports = {};
$823014d021c04649$exports = JSON.parse("{\"dateSelected\":\"تم تحديد {date, date, full}\",\"finishRangeSelectionPrompt\":\"انقر لإنهاء عملية تحديد نطاق التاريخ\",\"next\":\"التالي\",\"previous\":\"السابق\",\"selectedDateDescription\":\"التاريخ المحدد: {date, date, full}\",\"selectedRangeDescription\":\"النطاق المحدد: {start, date, long} إلى {end, date, long}\",\"startRangeSelectionPrompt\":\"انقر لبدء عملية تحديد نطاق التاريخ\",\"todayDate\":\"اليوم، {date, date, full}\",\"todayDateSelected\":\"اليوم، تم تحديد {date, date, full}\"}");


var $f6e5a7350d478eb0$exports = {};
$f6e5a7350d478eb0$exports = JSON.parse("{\"dateSelected\":\"избрани {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натиснете, за да довършите избора на времеви интервал\",\"next\":\"Напред\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Избрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Избран интервал: от {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натиснете, за да пристъпите към избора на времеви интервал\",\"todayDate\":\"Днес {date, date, full}\",\"todayDateSelected\":\"Днес са избрани {date, date, full}\"}");


var $e20522dc58676867$exports = {};
$e20522dc58676867$exports = JSON.parse("{\"dateSelected\":\"Vybráno: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výběr rozsahu dat\",\"next\":\"Další\",\"previous\":\"Předchozí\",\"selectedDateDescription\":\"Zvolené datum: {date, date, full}\",\"selectedRangeDescription\":\"Zvolený rozsah: {start, date, long} až {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknutím zahájíte výběr rozsahu dat\",\"todayDate\":\"Dnes, {date, date, full}\",\"todayDateSelected\":\"Vybrán dnešek: {date, date, full}\"}");


var $a6c62202ae8d4ff8$exports = {};
$a6c62202ae8d4ff8$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valgt\",\"finishRangeSelectionPrompt\":\"Klik for at fuldføre valg af datoområde\",\"next\":\"Næste\",\"previous\":\"Forrige\",\"selectedDateDescription\":\"Valgt dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgt område: {start, date, long} til {end, date, long}\",\"startRangeSelectionPrompt\":\"Klik for at starte valg af datoområde\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\"}");


var $bf32a6b24d2b84fe$exports = {};
$bf32a6b24d2b84fe$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} ausgewählt\",\"finishRangeSelectionPrompt\":\"Klicken, um die Auswahl des Datumsbereichs zu beenden\",\"next\":\"Weiter\",\"previous\":\"Zurück\",\"selectedDateDescription\":\"Ausgewähltes Datum: {date, date, full}\",\"selectedRangeDescription\":\"Bereich auswählen: {start, date, long} bis {end, date, long}\",\"startRangeSelectionPrompt\":\"Klicken, um die Auswahl des Datumsbereichs zu beginnen\",\"todayDate\":\"Heute, {date, date, full}\",\"todayDateSelected\":\"Heute, {date, date, full} ausgewählt\"}");


var $798f88c5c4c1159f$exports = {};
$798f88c5c4c1159f$exports = JSON.parse("{\"dateSelected\":\"Επιλέχτηκε {date, date, full}\",\"finishRangeSelectionPrompt\":\"Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών\",\"next\":\"Επόμενο\",\"previous\":\"Προηγούμενο\",\"selectedDateDescription\":\"Επιλεγμένη ημερομηνία: {date, date, full}\",\"selectedRangeDescription\":\"Επιλεγμένο εύρος: {start, date, long} έως {end, date, long}\",\"startRangeSelectionPrompt\":\"Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών\",\"todayDate\":\"Σήμερα, {date, date, full}\",\"todayDateSelected\":\"Σήμερα, επιλέχτηκε {date, date, full}\"}");


var $b3f7697cdc82b4ec$exports = {};
$b3f7697cdc82b4ec$exports = JSON.parse("{\"previous\":\"Previous\",\"next\":\"Next\",\"selectedDateDescription\":\"Selected Date: {date, date, full}\",\"selectedRangeDescription\":\"Selected Range: {start, date, long} to {end, date, long}\",\"todayDate\":\"Today, {date, date, full}\",\"todayDateSelected\":\"Today, {date, date, full} selected\",\"dateSelected\":\"{date, date, full} selected\",\"startRangeSelectionPrompt\":\"Click to start selecting date range\",\"finishRangeSelectionPrompt\":\"Click to finish selecting date range\"}");


var $71c38ae5fb626ecf$exports = {};
$71c38ae5fb626ecf$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} seleccionado\",\"finishRangeSelectionPrompt\":\"Haga clic para terminar de seleccionar rango de fechas\",\"next\":\"Siguiente\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Fecha seleccionada: {date, date, full}\",\"selectedRangeDescription\":\"Seleccionar rango: {start, date, long} a {end, date, long}\",\"startRangeSelectionPrompt\":\"Haga clic para comenzar a seleccionar un rango de fechas\",\"todayDate\":\"Hoy, {date, date, full}\",\"todayDateSelected\":\"Hoy, {date, date, full} seleccionado\"}");


var $2cb484ead8856bad$exports = {};
$2cb484ead8856bad$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valitud\",\"finishRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimise lõpetamiseks\",\"next\":\"Järgmine\",\"previous\":\"Eelmine\",\"selectedDateDescription\":\"Valitud kuupäev: {date, date, full}\",\"selectedRangeDescription\":\"Valitud vahemik: {start, date, long} kuni {end, date, long}\",\"startRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimiseks\",\"todayDate\":\"Täna {date, date, full}\",\"todayDateSelected\":\"Täna {date, date, full} valitud\"}");


var $33ab53bcd66b3155$exports = {};
$33ab53bcd66b3155$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valittu\",\"finishRangeSelectionPrompt\":\"Lopeta päivämääräalueen valinta napsauttamalla tätä.\",\"next\":\"Seuraava\",\"previous\":\"Edellinen\",\"selectedDateDescription\":\"Valittu päivämäärä: {date, date, full}\",\"selectedRangeDescription\":\"Valittu alue: {start, date, long} - {end, date, long}\",\"startRangeSelectionPrompt\":\"Aloita päivämääräalueen valinta napsauttamalla tätä.\",\"todayDate\":\"Tänään, {date, date, full}\",\"todayDateSelected\":\"Tänään, {date, date, full} valittu\"}");


var $e7ff4e71a206c384$exports = {};
$e7ff4e71a206c384$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} sélectionné\",\"finishRangeSelectionPrompt\":\"Cliquer pour finir de sélectionner la plage de dates\",\"next\":\"Suivant\",\"previous\":\"Précédent\",\"selectedDateDescription\":\"Date sélectionnée : {date, date, full}\",\"selectedRangeDescription\":\"Plage sélectionnée : {start, date, long} à {end, date, long}\",\"startRangeSelectionPrompt\":\"Cliquer pour commencer à sélectionner la plage de dates\",\"todayDate\":\"Aujourd’hui, {date, date, full}\",\"todayDateSelected\":\"Aujourd’hui, {date, date, full} sélectionné\"}");


var $caa6b7e2b05512bb$exports = {};
$caa6b7e2b05512bb$exports = JSON.parse("{\"dateSelected\":\"התאריך {date, date, full} שנבחר\",\"finishRangeSelectionPrompt\":\"חץ כדי לסיים את בחירת טווח התאריכים\",\"next\":\"הבא\",\"previous\":\"הקודם\",\"selectedDateDescription\":\"התאריך שנבחר: {date, date, full}\",\"selectedRangeDescription\":\"הטווח שנבחר: מ-{start, date, long} ועד {end, date, long}\",\"startRangeSelectionPrompt\":\"לחץ כדי להתחיל בבחירת טווח התאריכים\",\"todayDate\":\"היום, {date, date, full}\",\"todayDateSelected\":\"היום, התאריך {date, date, full} שנבחר\"}");


var $9d82a8215c39ca03$exports = {};
$9d82a8215c39ca03$exports = JSON.parse("{\"dateSelected\":\"Odabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite raspon odabranih datuma\",\"next\":\"Sljedeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Odabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Odabrani raspon: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete raspon odabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, odabran {date, date, full}\"}");


var $5ff933cdf50cfbd2$exports = {};
$5ff933cdf50cfbd2$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} kijelölve\",\"finishRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének befejezéséhez\",\"next\":\"Következő\",\"previous\":\"Előző\",\"selectedDateDescription\":\"Kijelölt dátum: {date, date, full}\",\"selectedRangeDescription\":\"Kijelölt tartomány: {start, date, long} – {end, date, long}\",\"startRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének indításához\",\"todayDate\":\"Ma, {date, date, full}\",\"todayDateSelected\":\"Ma, {date, date, full} kijelölve\"}");


var $4db71acbb1f3072c$exports = {};
$4db71acbb1f3072c$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selezionato\",\"finishRangeSelectionPrompt\":\"Fai clic per completare la selezione dell’intervallo di date\",\"next\":\"Successivo\",\"previous\":\"Precedente\",\"selectedDateDescription\":\"Data selezionata: {date, date, full}\",\"selectedRangeDescription\":\"Intervallo selezionato: da {start, date, long} a {end, date, long}\",\"startRangeSelectionPrompt\":\"Fai clic per selezionare l’intervallo di date\",\"todayDate\":\"Oggi, {date, date, full}\",\"todayDateSelected\":\"Oggi, {date, date, full} selezionato\"}");


var $47824195c350e6e6$exports = {};
$47824195c350e6e6$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} を選択\",\"finishRangeSelectionPrompt\":\"クリックして日付範囲の選択を終了\",\"next\":\"次へ\",\"previous\":\"前へ\",\"selectedDateDescription\":\"日付を選択：{date, date, full}\",\"selectedRangeDescription\":\"範囲を選択：{start, date, long} から {end, date, long}\",\"startRangeSelectionPrompt\":\"クリックして日付範囲の選択を開始\",\"todayDate\":\"本日、{date, date, full}\",\"todayDateSelected\":\"本日、{date, date, full} を選択\"}");


var $5b88aa962c8db735$exports = {};
$5b88aa962c8db735$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} 선택함\",\"finishRangeSelectionPrompt\":\"날짜 범위 선택을 완료하려면 클릭하십시오.\",\"next\":\"다음\",\"previous\":\"이전\",\"selectedDateDescription\":\"선택한 날짜: {date, date, full}\",\"selectedRangeDescription\":\"선택한 범위: {start, date, long} ~ {end, date, long}\",\"startRangeSelectionPrompt\":\"날짜 범위 선택을 시작하려면 클릭하십시오.\",\"todayDate\":\"오늘, {date, date, full}\",\"todayDateSelected\":\"오늘, {date, date, full} 선택함\"}");


var $1dab0c7171983640$exports = {};
$1dab0c7171983640$exports = JSON.parse("{\"dateSelected\":\"Pasirinkta {date, date, full}\",\"finishRangeSelectionPrompt\":\"Spustelėkite, kad baigtumėte pasirinkti datų intervalą\",\"next\":\"Paskesnis\",\"previous\":\"Ankstesnis\",\"selectedDateDescription\":\"Pasirinkta data: {date, date, full}\",\"selectedRangeDescription\":\"Pasirinktas intervalas: nuo {start, date, long} iki {end, date, long}\",\"startRangeSelectionPrompt\":\"Spustelėkite, kad pradėtumėte pasirinkti datų intervalą\",\"todayDate\":\"Šiandien, {date, date, full}\",\"todayDateSelected\":\"Šiandien, pasirinkta {date, date, full}\"}");


var $ea6aab5726aa3f53$exports = {};
$ea6aab5726aa3f53$exports = JSON.parse("{\"dateSelected\":\"Atlasīts {date, date, full}\",\"finishRangeSelectionPrompt\":\"Noklikšķiniet, lai pabeigtu datumu diapazona atlasi\",\"next\":\"Tālāk\",\"previous\":\"Atpakaļ\",\"selectedDateDescription\":\"Atlasītais datums: {date, date, full}\",\"selectedRangeDescription\":\"Atlasītais diapazons: {start, date, long} līdz {end, date, long}\",\"startRangeSelectionPrompt\":\"Noklikšķiniet, lai sāktu datumu diapazona atlasi\",\"todayDate\":\"Šodiena, {date, date, full}\",\"todayDateSelected\":\"Atlasīta šodiena, {date, date, full}\"}");


var $e68ba6310ddfb7d0$exports = {};
$e68ba6310ddfb7d0$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valgt\",\"finishRangeSelectionPrompt\":\"Klikk for å fullføre valg av datoområde\",\"next\":\"Neste\",\"previous\":\"Forrige\",\"selectedDateDescription\":\"Valgt dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgt område: {start, date, long} til {end, date, long}\",\"startRangeSelectionPrompt\":\"Klikk for å starte valg av datoområde\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\"}");


var $d131454285fde0da$exports = {};
$d131454285fde0da$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} geselecteerd\",\"finishRangeSelectionPrompt\":\"Klik om de selectie van het datumbereik te voltooien\",\"next\":\"Volgende\",\"previous\":\"Vorige\",\"selectedDateDescription\":\"Geselecteerde datum: {date, date, full}\",\"selectedRangeDescription\":\"Geselecteerd bereik: {start, date, long} t/m {end, date, long}\",\"startRangeSelectionPrompt\":\"Klik om het datumbereik te selecteren\",\"todayDate\":\"Vandaag, {date, date, full}\",\"todayDateSelected\":\"Vandaag, {date, date, full} geselecteerd\"}");


var $2db43d5c4f853f2b$exports = {};
$2db43d5c4f853f2b$exports = JSON.parse("{\"dateSelected\":\"Wybrano {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknij, aby zakończyć wybór zakresu dat\",\"next\":\"Dalej\",\"previous\":\"Wstecz\",\"selectedDateDescription\":\"Wybrana data: {date, date, full}\",\"selectedRangeDescription\":\"Wybrany zakres: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknij, aby rozpocząć wybór zakresu dat\",\"todayDate\":\"Dzisiaj {date, date, full}\",\"todayDateSelected\":\"Dzisiaj wybrano {date, date, full}\"}");


var $e07ce9f5c12fabcb$exports = {};
$e07ce9f5c12fabcb$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selecionado\",\"finishRangeSelectionPrompt\":\"Clique para concluir a seleção do intervalo de datas\",\"next\":\"Próximo\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Data selecionada: {date, date, full}\",\"selectedRangeDescription\":\"Intervalo selecionado: {start, date, long} até {end, date, long}\",\"startRangeSelectionPrompt\":\"Clique para iniciar a seleção do intervalo de datas\",\"todayDate\":\"Hoje, {date, date, full}\",\"todayDateSelected\":\"Hoje, {date, date, full} selecionado\"}");


var $cb696051d2df7bcd$exports = {};
$cb696051d2df7bcd$exports = JSON.parse("{\"dateSelected\":\"{data, data, completo} selecionado\",\"finishRangeSelectionPrompt\":\"Clique para terminar de selecionar o intervalo de datas\",\"next\":\"Próximo\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Data Selecionada: {data, data, completo}\",\"selectedRangeDescription\":\"Selecionar Intervalo: {início, data, longo} a {término, data, longo}\",\"startRangeSelectionPrompt\":\"Clique para começar a selecionar o intervalo de datas\",\"todayDate\":\"Hoje, {date, date, full}\",\"todayDateSelected\":\"Hoje, {date, date, full} selecionado\"}");


var $49b23ee177235a66$exports = {};
$49b23ee177235a66$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selectată\",\"finishRangeSelectionPrompt\":\"Apăsaţi pentru a finaliza selecţia razei pentru dată\",\"next\":\"Următorul\",\"previous\":\"Înainte\",\"selectedDateDescription\":\"Dată selectată: {date, date, full}\",\"selectedRangeDescription\":\"Selectaţi raza: {start, date, long} la {end, date, long}\",\"startRangeSelectionPrompt\":\"Apăsaţi pentru a începe selecţia razei pentru dată\",\"todayDate\":\"Astăzi, {date, date, full}\",\"todayDateSelected\":\"Dată, {date, date, full} selectată\"}");


var $3d9e7383c0eddc7b$exports = {};
$3d9e7383c0eddc7b$exports = JSON.parse("{\"dateSelected\":\"выбрано {date, date, full}\",\"finishRangeSelectionPrompt\":\"Щелкните, чтобы завершить выбор диапазона дат\",\"next\":\"Далее\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Выбранная дата: {date, date, full}\",\"selectedRangeDescription\":\"Выбранный диапазон: {start, date, long} – {end, date, long}\",\"startRangeSelectionPrompt\":\"Щелкните, чтобы начать выбор диапазона дат\",\"todayDate\":\"Сегодня, {date, date, full}\",\"todayDateSelected\":\"Сегодня, выбрано {date, date, full}\"}");


var $9a22837b910b8850$exports = {};
$9a22837b910b8850$exports = JSON.parse("{\"dateSelected\":\"Vybratý dátum {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výber rozsahu dátumov\",\"next\":\"Nasledujúce\",\"previous\":\"Predchádzajúce\",\"selectedDateDescription\":\"Vybratý dátum: {date, date, full}\",\"selectedRangeDescription\":\"Vybratý rozsah dátumov: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknutím spustíte výber rozsahu dátumov\",\"todayDate\":\"Dnešný dátum, {date, date, full}\",\"todayDateSelected\":\"Vybratý dnešný dátum, {date, date, full}\"}");


var $80968c32b1e8b5aa$exports = {};
$80968c32b1e8b5aa$exports = JSON.parse("{\"dateSelected\":\"izbrano: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite za dokončanje izbire datumskega obsega\",\"next\":\"Naprej\",\"previous\":\"Nazaj\",\"selectedDateDescription\":\"Izbrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izbrani razpon: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite za začetek izbire datumskega obsega\",\"todayDate\":\"Danes, {date, date, full}\",\"todayDateSelected\":\"Danes, izbrano: {date, date, full}\"}");


var $16ff9a0c37a134d1$exports = {};
$16ff9a0c37a134d1$exports = JSON.parse("{\"dateSelected\":\"Izabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite opseg izabranih datuma\",\"next\":\"Sledeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Izabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izabrani opseg: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete opseg izabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, izabran {date, date, full}\"}");


var $eb773fa8a1c62fd0$exports = {};
$eb773fa8a1c62fd0$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} har valts\",\"finishRangeSelectionPrompt\":\"Klicka för att avsluta val av datumintervall\",\"next\":\"Nästa\",\"previous\":\"Föregående\",\"selectedDateDescription\":\"Valt datum: {date, date, full}\",\"selectedRangeDescription\":\"Valt intervall: {start, date, long} till {end, date, long}\",\"startRangeSelectionPrompt\":\"Klicka för att välja datumintervall\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} har valts\"}");


var $b568d28e0d7d2957$exports = {};
$b568d28e0d7d2957$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} seçildi\",\"finishRangeSelectionPrompt\":\"Tarih aralığı seçimini tamamlamak için tıklayın\",\"next\":\"Sonraki\",\"previous\":\"Önceki\",\"selectedDateDescription\":\"Seçili Tarih: {date, date, full}\",\"selectedRangeDescription\":\"Seçili Aralık: {start, date, long} - {end, date, long}\",\"startRangeSelectionPrompt\":\"Tarih aralığı seçimini başlatmak için tıklayın\",\"todayDate\":\"Bugün, {date, date, full}\",\"todayDateSelected\":\"Bugün, {date, date, full} seçildi\"}");


var $d6351a0e9ebd5b93$exports = {};
$d6351a0e9ebd5b93$exports = JSON.parse("{\"dateSelected\":\"Вибрано: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натисніть, щоб завершити вибір діапазону дат\",\"next\":\"Наступний\",\"previous\":\"Попередній\",\"selectedDateDescription\":\"Вибрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Вибраний діапазон: від {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натисніть, щоб почати вибір діапазону дат\",\"todayDate\":\"Сьогодні: {date, date, full}\",\"todayDateSelected\":\"Сьогодні вибрано: {date, date, full}\"}");


var $120d7858677dc86c$exports = {};
$120d7858677dc86c$exports = JSON.parse("{\"dateSelected\":\"已选择 {date, date, full}\",\"finishRangeSelectionPrompt\":\"单击以完成选择日期范围\",\"next\":\"下一页\",\"previous\":\"上一页\",\"selectedDateDescription\":\"选定的日期: {date, date, full}\",\"selectedRangeDescription\":\"选定的范围: {start, date, long} 到 {end, date, long}\",\"startRangeSelectionPrompt\":\"单击以开始选择日期范围\",\"todayDate\":\"今天（{date, date, full}）\",\"todayDateSelected\":\"已选择今天（{date, date, full}）\"}");


var $f204180467c5024c$exports = {};
$f204180467c5024c$exports = JSON.parse("{\"dateSelected\":\"已選取 {date, date, full}\",\"finishRangeSelectionPrompt\":\"按一下以完成選取日期範圍\",\"next\":\"下一頁\",\"previous\":\"上一頁\",\"selectedDateDescription\":\"選取日期: {date, date, full}\",\"selectedRangeDescription\":\"選取範圍: {start, date, long} 至 {end, date, long}\",\"startRangeSelectionPrompt\":\"按一下以開始選取日期範圍\",\"todayDate\":\"今日，{date, date, full}\",\"todayDateSelected\":\"今日，已選取 {date, date, full}\"}");


$1a15bab094643210$exports = {
    "ar-AE": $823014d021c04649$exports,
    "bg-BG": $f6e5a7350d478eb0$exports,
    "cs-CZ": $e20522dc58676867$exports,
    "da-DK": $a6c62202ae8d4ff8$exports,
    "de-DE": $bf32a6b24d2b84fe$exports,
    "el-GR": $798f88c5c4c1159f$exports,
    "en-US": $b3f7697cdc82b4ec$exports,
    "es-ES": $71c38ae5fb626ecf$exports,
    "et-EE": $2cb484ead8856bad$exports,
    "fi-FI": $33ab53bcd66b3155$exports,
    "fr-FR": $e7ff4e71a206c384$exports,
    "he-IL": $caa6b7e2b05512bb$exports,
    "hr-HR": $9d82a8215c39ca03$exports,
    "hu-HU": $5ff933cdf50cfbd2$exports,
    "it-IT": $4db71acbb1f3072c$exports,
    "ja-JP": $47824195c350e6e6$exports,
    "ko-KR": $5b88aa962c8db735$exports,
    "lt-LT": $1dab0c7171983640$exports,
    "lv-LV": $ea6aab5726aa3f53$exports,
    "nb-NO": $e68ba6310ddfb7d0$exports,
    "nl-NL": $d131454285fde0da$exports,
    "pl-PL": $2db43d5c4f853f2b$exports,
    "pt-BR": $e07ce9f5c12fabcb$exports,
    "pt-PT": $cb696051d2df7bcd$exports,
    "ro-RO": $49b23ee177235a66$exports,
    "ru-RU": $3d9e7383c0eddc7b$exports,
    "sk-SK": $9a22837b910b8850$exports,
    "sl-SI": $80968c32b1e8b5aa$exports,
    "sr-SP": $16ff9a0c37a134d1$exports,
    "sv-SE": $eb773fa8a1c62fd0$exports,
    "tr-TR": $b568d28e0d7d2957$exports,
    "uk-UA": $d6351a0e9ebd5b93$exports,
    "zh-CN": $120d7858677dc86c$exports,
    "zh-TW": $f204180467c5024c$exports
};




const $aeca145367104e0d$export$3ddff89c59628ee7 = new WeakMap();
function $aeca145367104e0d$export$b6df97c887c38e1a(state) {
    let formatMessage = $8ApYj$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($1a15bab094643210$exports)));
    let start, end;
    if ('highlightedRange' in state) ({ start: start , end: end  } = state.highlightedRange || {
    });
    else start = end = state.value;
    let anchorDate = 'anchorDate' in state ? state.anchorDate : null;
    return $8ApYj$useMemo(()=>{
        // No message if currently selecting a range, or there is nothing highlighted.
        if (!anchorDate && start && end) {
            // Use a single date message if the start and end dates are the same day,
            // otherwise include both dates.
            if ($8ApYj$isSameDay(start, end)) return formatMessage('selectedDateDescription', {
                date: $8ApYj$toDate(start, state.timeZone)
            });
            else return formatMessage('selectedRangeDescription', {
                start: $8ApYj$toDate(start, state.timeZone),
                end: $8ApYj$toDate(end, state.timeZone)
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
function $aeca145367104e0d$export$31afe65d91ef6e8(startDate, endDate, timeZone) {
    let monthFormatter = $8ApYj$useDateFormatter({
        month: 'long',
        year: 'numeric',
        era: startDate.calendar.identifier !== 'gregory' ? 'long' : undefined,
        calendar: startDate.calendar.identifier
    });
    let dateFormatter = $8ApYj$useDateFormatter({
        dateStyle: 'long',
        calendar: startDate.calendar.identifier
    });
    return $8ApYj$useMemo(()=>{
        // Special case for month granularity. Format as a single month if only a
        // single month is visible, otherwise format as a range of months.
        if ($8ApYj$isSameDay(startDate, $8ApYj$startOfMonth(startDate))) {
            if ($8ApYj$isSameDay(endDate, $8ApYj$endOfMonth(startDate))) return monthFormatter.format(startDate.toDate(timeZone));
            else if ($8ApYj$isSameDay(endDate, $8ApYj$endOfMonth(endDate))) return monthFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
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





function $27b2d2e1725b2798$export$d652b3ea2d672d5b(props, state) {
    let formatMessage = $8ApYj$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($1a15bab094643210$exports)));
    let calendarId = $8ApYj$useId(props.id);
    let visibleRangeDescription = $aeca145367104e0d$export$31afe65d91ef6e8(state.visibleRange.start, state.visibleRange.end, state.timeZone);
    // Announce when the visible date range changes
    $8ApYj$useUpdateEffect(()=>{
        // only when pressing the Previous or Next button
        if (!state.isFocused) $8ApYj$announce(visibleRangeDescription);
    }, [
        visibleRangeDescription
    ]);
    // Announce when the selected value changes
    let selectedDateDescription = $aeca145367104e0d$export$b6df97c887c38e1a(state);
    $8ApYj$useUpdateEffect(()=>{
        if (selectedDateDescription) $8ApYj$announce(selectedDateDescription, 'polite', 4000);
    // handle an update to the caption that describes the currently selected range, to announce the new value
    }, [
        selectedDateDescription
    ]);
    let descriptionProps = $8ApYj$useDescription(visibleRangeDescription);
    // Label the child grid elements by the group element if it is labelled.
    $aeca145367104e0d$export$3ddff89c59628ee7.set(state, props['aria-label'] || props['aria-labelledby'] ? calendarId : null);
    return {
        calendarProps: $8ApYj$mergeProps(descriptionProps, {
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


function $75c0e4bd04f78ef1$export$3ee915f8151bd4f1(props, state) {
    return $27b2d2e1725b2798$export$d652b3ea2d672d5b(props, state);
}


var $4130492cf32967ac$exports = {};

$parcel$export($4130492cf32967ac$exports, "useRangeCalendar", () => $4130492cf32967ac$export$87e0539f600c24e5);



function $4130492cf32967ac$export$87e0539f600c24e5(props, state, ref) {
    let res = $27b2d2e1725b2798$export$d652b3ea2d672d5b(props, state);
    res.nextButtonProps.id = $8ApYj$useId();
    res.prevButtonProps.id = $8ApYj$useId();
    // We need to ignore virtual pointer events from VoiceOver due to these bugs.
    // https://bugs.webkit.org/show_bug.cgi?id=222627
    // https://bugs.webkit.org/show_bug.cgi?id=223202
    // usePress also does this and waits for the following click event before firing.
    // We need to match that here otherwise this will fire before the press event in
    // useCalendarCell, causing range selection to not work properly.
    let isVirtualClick = $8ApYj$useRef(false);
    $8ApYj$useEvent($8ApYj$useRef(window), 'pointerdown', (e)=>{
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
    $8ApYj$useEvent($8ApYj$useRef(window), 'pointerup', endDragging);
    $8ApYj$useEvent($8ApYj$useRef(window), 'pointercancel', endDragging);
    // Prevent touch scrolling while dragging
    $8ApYj$useEvent(ref, 'touchmove', (e)=>{
        if (state.isDragging) e.preventDefault();
    }, {
        passive: false,
        capture: true
    });
    return res;
}


var $ea2b4b802b32edc6$exports = {};

$parcel$export($ea2b4b802b32edc6$exports, "useCalendarGrid", () => $ea2b4b802b32edc6$export$cb95147730a423f5);



function $ea2b4b802b32edc6$export$cb95147730a423f5(props, state) {
    let { isReadOnly: isReadOnly = false , isDisabled: isDisabled = false , startDate: startDate = state.visibleRange.start , endDate: endDate = state.visibleRange.end  } = props;
    let { direction: direction  } = $8ApYj$useLocale();
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
    let selectedDateDescription = $aeca145367104e0d$export$b6df97c887c38e1a(state);
    let descriptionProps = $8ApYj$useDescription(selectedDateDescription);
    let visibleRangeDescription = $aeca145367104e0d$export$31afe65d91ef6e8(startDate, endDate, state.timeZone);
    let labelProps = $8ApYj$useLabels({
        'aria-label': visibleRangeDescription,
        'aria-labelledby': $aeca145367104e0d$export$3ddff89c59628ee7.get(state)
    });
    return {
        gridProps: $8ApYj$mergeProps(descriptionProps, labelProps, {
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


var $e475f9325848e1c3$exports = {};

$parcel$export($e475f9325848e1c3$exports, "useCalendarCell", () => $e475f9325848e1c3$export$136073280381448e);







function $e475f9325848e1c3$export$136073280381448e(props, state, ref) {
    let { date: date , isDisabled: isDisabled  } = props;
    let formatMessage = $8ApYj$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($1a15bab094643210$exports)));
    let dateFormatter = $8ApYj$useDateFormatter({
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
    let lastDate = $8ApYj$useRef(null);
    if (lastDate.current && $8ApYj$isEqualDay(date, lastDate.current)) date = lastDate.current;
    lastDate.current = date;
    let nativeDate = $8ApYj$useMemo(()=>date.toDate(state.timeZone)
    , [
        date,
        state.timeZone
    ]);
    // aria-label should be localize Day of week, Month, Day and Year without Time.
    let isDateToday = $8ApYj$isToday(date, state.timeZone);
    let label = $8ApYj$useMemo(()=>{
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
    let isAnchorPressed = $8ApYj$useRef(false);
    let isRangeBoundaryPressed = $8ApYj$useRef(false);
    let touchDragTimerRef = $8ApYj$useRef(null);
    let { pressProps: pressProps , isPressed: isPressed  } = $8ApYj$usePress({
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
                    if ($8ApYj$isSameDay(date, state.highlightedRange.start)) {
                        state.setAnchorDate(state.highlightedRange.end);
                        state.setFocusedDate(date);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    } else if ($8ApYj$isSameDay(date, state.highlightedRange.end)) {
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
                    if ($8ApYj$isSameMonth(date, nextDay)) state.setFocusedDate(nextDay);
                } else if (e.pointerType === 'virtual') {
                    // For screen readers, just select the date on click.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                }
            }
        }
    });
    let tabIndex = null;
    if (!isDisabled) tabIndex = $8ApYj$isSameDay(date, state.focusedDate) ? 0 : -1;
    // Focus the button in the DOM when the state updates.
    $8ApYj$useEffect(()=>{
        if (isFocused && ref.current) $8ApYj$focusWithoutScrolling(ref.current);
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
        buttonProps: $8ApYj$mergeProps(pressProps, {
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


var $4d513dae4d27aef1$exports = {};

$parcel$export($4d513dae4d27aef1$exports, "useCalendarTableHeader", () => $4d513dae4d27aef1$export$2d550ec8e081e40b);
function $4d513dae4d27aef1$export$2d550ec8e081e40b() {
    return {
        columnHeaderProps: {
            scope: 'col'
        }
    };
}


var $dc027f533d027f57$exports = {};




export {$75c0e4bd04f78ef1$export$3ee915f8151bd4f1 as useCalendar, $4130492cf32967ac$export$87e0539f600c24e5 as useRangeCalendar, $ea2b4b802b32edc6$export$cb95147730a423f5 as useCalendarGrid, $e475f9325848e1c3$export$136073280381448e as useCalendarCell, $4d513dae4d27aef1$export$2d550ec8e081e40b as useCalendarTableHeader};
//# sourceMappingURL=module.js.map
