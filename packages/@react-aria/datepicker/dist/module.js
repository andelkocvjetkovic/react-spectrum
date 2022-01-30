import {createFocusManager as $9lWL5$createFocusManager, useFocusManager as $9lWL5$useFocusManager} from "@react-aria/focus";
import {useId as $9lWL5$useId, useDescription as $9lWL5$useDescription, mergeProps as $9lWL5$mergeProps, isMac as $9lWL5$isMac, scrollIntoView as $9lWL5$scrollIntoView, getScrollParent as $9lWL5$getScrollParent, useEvent as $9lWL5$useEvent, isIOS as $9lWL5$isIOS, useLabels as $9lWL5$useLabels} from "@react-aria/utils";
import {useField as $9lWL5$useField} from "@react-aria/label";
import {useMessageFormatter as $9lWL5$useMessageFormatter, useLocale as $9lWL5$useLocale, useDateFormatter as $9lWL5$useDateFormatter, useFilter as $9lWL5$useFilter} from "@react-aria/i18n";
import {usePress as $9lWL5$usePress, useFocusWithin as $9lWL5$useFocusWithin} from "@react-aria/interactions";
import {NumberParser as $9lWL5$NumberParser} from "@internationalized/number";
import $9lWL5$react, {useRef as $9lWL5$useRef, useMemo as $9lWL5$useMemo} from "react";
import {useSpinButton as $9lWL5$useSpinButton} from "@react-aria/spinbutton";
import {MessageDictionary as $9lWL5$MessageDictionary} from "@internationalized/message";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $dd56a33159a0ea2f$exports = {};

$parcel$export($dd56a33159a0ea2f$exports, "useDatePicker", () => $dd56a33159a0ea2f$export$42df105a73306d51);

var $c88f0745d72552c8$exports = {};
var $b66741465864725b$exports = {};
$b66741465864725b$exports = JSON.parse("{\"calendar\":\"التقويم\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} إلى {end, date, long}\",\"date\":\"التاريخ\",\"dateRange\":\"نطاق التاريخ\",\"day\":\"يوم\",\"dayPeriod\":\"ص/م\",\"endDate\":\"تاريخ الانتهاء\",\"era\":\"العصر\",\"hour\":\"الساعات\",\"minute\":\"الدقائق\",\"month\":\"الشهر\",\"second\":\"الثواني\",\"startDate\":\"تاريخ البدء\",\"year\":\"السنة\",\"weekday\":\"اليوم\",\"timeZoneName\":\"التوقيت\"}");


var $fd62b6ab6cc4afd3$exports = {};
$fd62b6ab6cc4afd3$exports = JSON.parse("{\"calendar\":\"Календар\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} до {end, date, long}\",\"date\":\"Дата\",\"dateRange\":\"Времеви интервал\",\"day\":\"ден\",\"dayPeriod\":\"пр.об./сл.об.\",\"endDate\":\"Крайна дата\",\"era\":\"ера\",\"hour\":\"час\",\"minute\":\"минута\",\"month\":\"месец\",\"second\":\"секунда\",\"startDate\":\"Начална дата\",\"year\":\"година\",\"weekday\":\"ден от седмицата\",\"timeZoneName\":\"часова зона\"}");


var $96034e6af4ca60e8$exports = {};
$96034e6af4ca60e8$exports = JSON.parse("{\"calendar\":\"Kalendář\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} až {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Rozsah dat\",\"day\":\"den\",\"dayPeriod\":\"část dne\",\"endDate\":\"Konečné datum\",\"era\":\"letopočet\",\"hour\":\"hodina\",\"minute\":\"minuta\",\"month\":\"měsíc\",\"second\":\"sekunda\",\"startDate\":\"Počáteční datum\",\"year\":\"rok\",\"weekday\":\"den v týdnu\",\"timeZoneName\":\"časové pásmo\"}");


var $b6865a17e8fa424c$exports = {};
$b6865a17e8fa424c$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} til {end, date, long}\",\"date\":\"Dato\",\"dateRange\":\"Datointerval\",\"day\":\"dag\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Slutdato\",\"era\":\"æra\",\"hour\":\"time\",\"minute\":\"minut\",\"month\":\"måned\",\"second\":\"sekund\",\"startDate\":\"Startdato\",\"year\":\"år\",\"weekday\":\"ugedag\",\"timeZoneName\":\"tidszone\"}");


var $94b56b225df1a6bd$exports = {};
$94b56b225df1a6bd$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} bis {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumsbereich\",\"day\":\"Tag\",\"dayPeriod\":\"Tageshälfte\",\"endDate\":\"Enddatum\",\"era\":\"Epoche\",\"hour\":\"Stunde\",\"minute\":\"Minute\",\"month\":\"Monat\",\"second\":\"Sekunde\",\"startDate\":\"Anfangsdatum\",\"year\":\"Jahr\",\"weekday\":\"Wochentag\",\"timeZoneName\":\"Zeitzone\"}");


var $e75dc58cf55c6539$exports = {};
$e75dc58cf55c6539$exports = JSON.parse("{\"calendar\":\"Ημερολόγιο\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} ως {end, date, long}\",\"date\":\"Ημερομηνία\",\"dateRange\":\"Εύρος ημερομηνιών\",\"day\":\"ημέρα\",\"dayPeriod\":\"π.μ./μ.μ.\",\"endDate\":\"Ημερομηνία λήξης\",\"era\":\"περίοδος\",\"hour\":\"ώρα\",\"minute\":\"λεπτό\",\"month\":\"μήνας\",\"second\":\"δευτερόλεπτο\",\"startDate\":\"Ημερομηνία έναρξης\",\"year\":\"έτος\",\"weekday\":\"καθημερινή\",\"timeZoneName\":\"ζώνη ώρας\"}");


var $dcb39f4e423b97cb$exports = {};
$dcb39f4e423b97cb$exports = JSON.parse("{\"era\":\"era\",\"year\":\"year\",\"month\":\"month\",\"day\":\"day\",\"hour\":\"hour\",\"minute\":\"minute\",\"second\":\"second\",\"dayPeriod\":\"AM/PM\",\"calendar\":\"Calendar\",\"date\":\"Date\",\"dateRange\":\"Date Range\",\"startDate\":\"Start Date\",\"endDate\":\"End Date\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} to {end, date, long}\",\"weekday\":\"day of the week\",\"timeZoneName\":\"time zone\"}");


var $63920c019496dec9$exports = {};
$63920c019496dec9$exports = JSON.parse("{\"calendar\":\"Calendario\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} a {end, date, long}\",\"date\":\"Fecha\",\"dateRange\":\"Intervalo de fecha\",\"day\":\"día\",\"dayPeriod\":\"a. m./p. m.\",\"endDate\":\"Fecha final\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mes\",\"second\":\"segundo\",\"startDate\":\"Fecha de inicio\",\"year\":\"año\",\"weekday\":\"día de la semana\",\"timeZoneName\":\"zona horaria\"}");


var $b1946d77d2948489$exports = {};
$b1946d77d2948489$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} kuni {end, date, long}\",\"date\":\"Kuupäev\",\"dateRange\":\"Kuupäevavahemik\",\"day\":\"päev\",\"dayPeriod\":\"enne/pärast lõunat\",\"endDate\":\"Lõppkuupäev\",\"era\":\"ajastu\",\"hour\":\"tund\",\"minute\":\"minut\",\"month\":\"kuu\",\"second\":\"sekund\",\"startDate\":\"Alguskuupäev\",\"year\":\"aasta\",\"weekday\":\"nädalapäev\",\"timeZoneName\":\"ajavöönd\"}");


var $c7baa1d2ecd7d699$exports = {};
$c7baa1d2ecd7d699$exports = JSON.parse("{\"calendar\":\"Kalenteri\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long}–{end, date, long}\",\"date\":\"Päivämäärä\",\"dateRange\":\"Päivämääräalue\",\"day\":\"päivä\",\"dayPeriod\":\"vuorokaudenaika\",\"endDate\":\"Päättymispäivä\",\"era\":\"aikakausi\",\"hour\":\"tunti\",\"minute\":\"minuutti\",\"month\":\"kuukausi\",\"second\":\"sekunti\",\"startDate\":\"Alkamispäivä\",\"year\":\"vuosi\",\"weekday\":\"viikonpäivä\",\"timeZoneName\":\"aikavyöhyke\"}");


var $cbdcbb52562a89fc$exports = {};
$cbdcbb52562a89fc$exports = JSON.parse("{\"calendar\":\"Calendrier\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} au {end, date, long}\",\"date\":\"Date\",\"dateRange\":\"Plage de dates\",\"day\":\"jour\",\"dayPeriod\":\"cadran\",\"endDate\":\"Date de fin\",\"era\":\"ère\",\"hour\":\"heure\",\"minute\":\"minute\",\"month\":\"mois\",\"second\":\"seconde\",\"startDate\":\"Date de début\",\"year\":\"année\",\"weekday\":\"jour de la semaine\",\"timeZoneName\":\"fuseau horaire\"}");


var $248a7a89e556c57a$exports = {};
$248a7a89e556c57a$exports = JSON.parse("{\"calendar\":\"לוח שנה\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"מ-{start, date, long} ועד {end, date, long}\",\"date\":\"תאריך\",\"dateRange\":\"טווח תאריכים\",\"day\":\"יום\",\"dayPeriod\":\"לפנה״צ/אחה״צ\",\"endDate\":\"תאריך סיום\",\"era\":\"תקופה\",\"hour\":\"שעה\",\"minute\":\"דקה\",\"month\":\"חודש\",\"second\":\"שנייה\",\"startDate\":\"תאריך התחלה\",\"year\":\"שנה\",\"weekday\":\"יום בשבוע\",\"timeZoneName\":\"אזור זמן\"}");


var $8ce353224be16851$exports = {};
$8ce353224be16851$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Raspon datuma\",\"day\":\"dan\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Datum završetka\",\"era\":\"era\",\"hour\":\"sat\",\"minute\":\"minuta\",\"month\":\"mjesec\",\"second\":\"sekunda\",\"startDate\":\"Datum početka\",\"year\":\"godina\",\"weekday\":\"dan u tjednu\",\"timeZoneName\":\"vremenska zona\"}");


var $eace1a72409bb6f2$exports = {};
$eace1a72409bb6f2$exports = JSON.parse("{\"calendar\":\"Naptár\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} – {end, date, long}\",\"date\":\"Dátum\",\"dateRange\":\"Dátumtartomány\",\"day\":\"nap\",\"dayPeriod\":\"napszak\",\"endDate\":\"Befejező dátum\",\"era\":\"éra\",\"hour\":\"óra\",\"minute\":\"perc\",\"month\":\"hónap\",\"second\":\"másodperc\",\"startDate\":\"Kezdő dátum\",\"year\":\"év\",\"weekday\":\"hét napja\",\"timeZoneName\":\"időzóna\"}");


var $2d94c3d691299197$exports = {};
$2d94c3d691299197$exports = JSON.parse("{\"calendar\":\"Calendario\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"Da {start, date, long} a {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Intervallo date\",\"day\":\"giorno\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Data finale\",\"era\":\"era\",\"hour\":\"ora\",\"minute\":\"minuto\",\"month\":\"mese\",\"second\":\"secondo\",\"startDate\":\"Data iniziale\",\"year\":\"anno\",\"weekday\":\"giorno della settimana\",\"timeZoneName\":\"fuso orario\"}");


var $fcf81d751ab58cec$exports = {};
$fcf81d751ab58cec$exports = JSON.parse("{\"calendar\":\"カレンダー\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} ～ {end, date, long}\",\"date\":\"日付\",\"dateRange\":\"日付範囲\",\"day\":\"日\",\"dayPeriod\":\"午前/午後\",\"endDate\":\"終了日\",\"era\":\"時代\",\"hour\":\"時\",\"minute\":\"分\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日\",\"year\":\"年\",\"weekday\":\"曜日\",\"timeZoneName\":\"タイムゾーン\"}");


var $c7f35236b044430d$exports = {};
$c7f35236b044430d$exports = JSON.parse("{\"calendar\":\"달력\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} ~ {end, date, long}\",\"date\":\"날짜\",\"dateRange\":\"날짜 범위\",\"day\":\"일\",\"dayPeriod\":\"오전/오후\",\"endDate\":\"종료 날짜\",\"era\":\"연호\",\"hour\":\"시\",\"minute\":\"분\",\"month\":\"월\",\"second\":\"초\",\"startDate\":\"시작 날짜\",\"year\":\"년\",\"weekday\":\"요일\",\"timeZoneName\":\"시간대\"}");


var $9be2320f60783e73$exports = {};
$9be2320f60783e73$exports = JSON.parse("{\"calendar\":\"Kalendorius\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"Nuo {start, date, long} iki {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Datų intervalas\",\"day\":\"diena\",\"dayPeriod\":\"iki pietų / po pietų\",\"endDate\":\"Pabaigos data\",\"era\":\"era\",\"hour\":\"valanda\",\"minute\":\"minutė\",\"month\":\"mėnuo\",\"second\":\"sekundė\",\"startDate\":\"Pradžios data\",\"year\":\"metai\",\"weekday\":\"savaitės diena\",\"timeZoneName\":\"laiko juosta\"}");


var $8295bce7c0abeeaf$exports = {};
$8295bce7c0abeeaf$exports = JSON.parse("{\"calendar\":\"Kalendārs\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} līdz {end, date, long}\",\"date\":\"Datums\",\"dateRange\":\"Datumu diapazons\",\"day\":\"diena\",\"dayPeriod\":\"priekšpusdienā/pēcpusdienā\",\"endDate\":\"Beigu datums\",\"era\":\"ēra\",\"hour\":\"stundas\",\"minute\":\"minūtes\",\"month\":\"mēnesis\",\"second\":\"sekundes\",\"startDate\":\"Sākuma datums\",\"year\":\"gads\",\"weekday\":\"nedēļas diena\",\"timeZoneName\":\"laika josla\"}");


var $1a235269701fa747$exports = {};
$1a235269701fa747$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} til {end, date, long}\",\"date\":\"Dato\",\"dateRange\":\"Datoområde\",\"day\":\"dag\",\"dayPeriod\":\"a.m./p.m.\",\"endDate\":\"Sluttdato\",\"era\":\"tidsalder\",\"hour\":\"time\",\"minute\":\"minutt\",\"month\":\"måned\",\"second\":\"sekund\",\"startDate\":\"Startdato\",\"year\":\"år\",\"weekday\":\"ukedag\",\"timeZoneName\":\"tidssone\"}");


var $b89e13305e4051cc$exports = {};
$b89e13305e4051cc$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} t/m {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumbereik\",\"day\":\"dag\",\"dayPeriod\":\"a.m./p.m.\",\"endDate\":\"Einddatum\",\"era\":\"tijdperk\",\"hour\":\"uur\",\"minute\":\"minuut\",\"month\":\"maand\",\"second\":\"seconde\",\"startDate\":\"Startdatum\",\"year\":\"jaar\",\"weekday\":\"dag van de week\",\"timeZoneName\":\"tijdzone\"}");


var $edf7ddc399f5a7b3$exports = {};
$edf7ddc399f5a7b3$exports = JSON.parse("{\"calendar\":\"Kalendarz\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Zakres dat\",\"day\":\"dzień\",\"dayPeriod\":\"rano / po południu / wieczorem\",\"endDate\":\"Data końcowa\",\"era\":\"era\",\"hour\":\"godzina\",\"minute\":\"minuta\",\"month\":\"miesiąc\",\"second\":\"sekunda\",\"startDate\":\"Data początkowa\",\"year\":\"rok\",\"weekday\":\"dzień tygodnia\",\"timeZoneName\":\"strefa czasowa\"}");


var $ef0a3cd4e0b723b0$exports = {};
$ef0a3cd4e0b723b0$exports = JSON.parse("{\"calendar\":\"Calendário\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} a {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Intervalo de datas\",\"day\":\"dia\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Data final\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mês\",\"second\":\"segundo\",\"startDate\":\"Data inicial\",\"year\":\"ano\",\"weekday\":\"dia da semana\",\"timeZoneName\":\"fuso horário\"}");


var $a41117d6e9bdf8e7$exports = {};
$a41117d6e9bdf8e7$exports = JSON.parse("{\"calendar\":\"Calendário\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} a {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Intervalo de datas\",\"day\":\"dia\",\"dayPeriod\":\"am/pm\",\"endDate\":\"Data de Término\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mês\",\"second\":\"segundo\",\"startDate\":\"Data de Início\",\"year\":\"ano\",\"weekday\":\"dia da semana\",\"timeZoneName\":\"fuso horário\"}");


var $a1167e857bce6b12$exports = {};
$a1167e857bce6b12$exports = JSON.parse("{\"calendar\":\"Calendar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} - {end, date, long}\",\"date\":\"Dată\",\"dateRange\":\"Raza datei\",\"day\":\"zi\",\"dayPeriod\":\"a.m/p.m.\",\"endDate\":\"Dată final\",\"era\":\"eră\",\"hour\":\"oră\",\"minute\":\"minut\",\"month\":\"lună\",\"second\":\"secundă\",\"startDate\":\"Dată început\",\"year\":\"an\",\"weekday\":\"ziua din săptămână\",\"timeZoneName\":\"fus orar\"}");


var $249d91dc236cd3fa$exports = {};
$249d91dc236cd3fa$exports = JSON.parse("{\"calendar\":\"Календарь\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} – {end, date, long}\",\"date\":\"Дата\",\"dateRange\":\"Диапазон дат\",\"day\":\"день\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Дата окончания\",\"era\":\"эра\",\"hour\":\"час\",\"minute\":\"минута\",\"month\":\"месяц\",\"second\":\"секунда\",\"startDate\":\"Дата начала\",\"year\":\"год\",\"weekday\":\"день недели\",\"timeZoneName\":\"часовой пояс\"}");


var $7d527844ccab55f9$exports = {};
$7d527844ccab55f9$exports = JSON.parse("{\"calendar\":\"Kalendár\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Dátum\",\"dateRange\":\"Rozsah dátumov\",\"day\":\"deň\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Dátum ukončenia\",\"era\":\"letopočet\",\"hour\":\"hodina\",\"minute\":\"minúta\",\"month\":\"mesiac\",\"second\":\"sekunda\",\"startDate\":\"Dátum začatia\",\"year\":\"rok\",\"weekday\":\"deň týždňa\",\"timeZoneName\":\"časové pásmo\"}");


var $a95d4a5acb39e35b$exports = {};
$a95d4a5acb39e35b$exports = JSON.parse("{\"calendar\":\"Koledar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumski obseg\",\"day\":\"dan\",\"dayPeriod\":\"dop/pop\",\"endDate\":\"Datum konca\",\"era\":\"doba\",\"hour\":\"ura\",\"minute\":\"minuta\",\"month\":\"mesec\",\"second\":\"sekunda\",\"startDate\":\"Datum začetka\",\"year\":\"leto\",\"weekday\":\"dan v tednu\",\"timeZoneName\":\"časovni pas\"}");


var $82576688b1e1ef0a$exports = {};
$82576688b1e1ef0a$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Opseg datuma\",\"day\":\"дан\",\"dayPeriod\":\"пре подне/по подне\",\"endDate\":\"Datum završetka\",\"era\":\"ера\",\"hour\":\"сат\",\"minute\":\"минут\",\"month\":\"месец\",\"second\":\"секунд\",\"startDate\":\"Datum početka\",\"year\":\"година\",\"weekday\":\"дан у недељи\",\"timeZoneName\":\"временска зона\"}");


var $aa605c86f39879f8$exports = {};
$aa605c86f39879f8$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} till {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumintervall\",\"day\":\"dag\",\"dayPeriod\":\"fm/em\",\"endDate\":\"Slutdatum\",\"era\":\"era\",\"hour\":\"timme\",\"minute\":\"minut\",\"month\":\"månad\",\"second\":\"sekund\",\"startDate\":\"Startdatum\",\"year\":\"år\",\"weekday\":\"veckodag\",\"timeZoneName\":\"tidszon\"}");


var $72af5f52c93eeaaf$exports = {};
$72af5f52c93eeaaf$exports = JSON.parse("{\"calendar\":\"Takvim\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} - {end, date, long}\",\"date\":\"Tarih\",\"dateRange\":\"Tarih Aralığı\",\"day\":\"gün\",\"dayPeriod\":\"ÖÖ/ÖS\",\"endDate\":\"Bitiş Tarihi\",\"era\":\"çağ\",\"hour\":\"saat\",\"minute\":\"dakika\",\"month\":\"ay\",\"second\":\"saniye\",\"startDate\":\"Başlangıç Tarihi\",\"year\":\"yıl\",\"weekday\":\"haftanın günü\",\"timeZoneName\":\"saat dilimi\"}");


var $f6b0be5e98e820ca$exports = {};
$f6b0be5e98e820ca$exports = JSON.parse("{\"calendar\":\"Календар\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"Від {start, date, long} до {end, date, long}\",\"date\":\"Дата\",\"dateRange\":\"Діапазон дат\",\"day\":\"день\",\"dayPeriod\":\"дп/пп\",\"endDate\":\"Дата завершення\",\"era\":\"ера\",\"hour\":\"година\",\"minute\":\"хвилина\",\"month\":\"місяць\",\"second\":\"секунда\",\"startDate\":\"Дата початку\",\"year\":\"рік\",\"weekday\":\"день тижня\",\"timeZoneName\":\"часовий пояс\"}");


var $cabb9f4bff9b2ed5$exports = {};
$cabb9f4bff9b2ed5$exports = JSON.parse("{\"calendar\":\"日历\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} 至 {end, date, long}\",\"date\":\"日期\",\"dateRange\":\"日期范围\",\"day\":\"日\",\"dayPeriod\":\"上午/下午\",\"endDate\":\"结束日期\",\"era\":\"纪元\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"开始日期\",\"year\":\"年\",\"weekday\":\"工作日\",\"timeZoneName\":\"时区\"}");


var $c5e6c845e5ea5381$exports = {};
$c5e6c845e5ea5381$exports = JSON.parse("{\"calendar\":\"日曆\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long}至 {end, date, long}\",\"date\":\"日期\",\"dateRange\":\"日期範圍\",\"day\":\"日\",\"dayPeriod\":\"上午/下午\",\"endDate\":\"結束日期\",\"era\":\"纪元\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日期\",\"year\":\"年\",\"weekday\":\"工作日\",\"timeZoneName\":\"时区\"}");


$c88f0745d72552c8$exports = {
    "ar-AE": $b66741465864725b$exports,
    "bg-BG": $fd62b6ab6cc4afd3$exports,
    "cs-CZ": $96034e6af4ca60e8$exports,
    "da-DK": $b6865a17e8fa424c$exports,
    "de-DE": $94b56b225df1a6bd$exports,
    "el-GR": $e75dc58cf55c6539$exports,
    "en-US": $dcb39f4e423b97cb$exports,
    "es-ES": $63920c019496dec9$exports,
    "et-EE": $b1946d77d2948489$exports,
    "fi-FI": $c7baa1d2ecd7d699$exports,
    "fr-FR": $cbdcbb52562a89fc$exports,
    "he-IL": $248a7a89e556c57a$exports,
    "hr-HR": $8ce353224be16851$exports,
    "hu-HU": $eace1a72409bb6f2$exports,
    "it-IT": $2d94c3d691299197$exports,
    "ja-JP": $fcf81d751ab58cec$exports,
    "ko-KR": $c7f35236b044430d$exports,
    "lt-LT": $9be2320f60783e73$exports,
    "lv-LV": $8295bce7c0abeeaf$exports,
    "nb-NO": $1a235269701fa747$exports,
    "nl-NL": $b89e13305e4051cc$exports,
    "pl-PL": $edf7ddc399f5a7b3$exports,
    "pt-BR": $ef0a3cd4e0b723b0$exports,
    "pt-PT": $a41117d6e9bdf8e7$exports,
    "ro-RO": $a1167e857bce6b12$exports,
    "ru-RU": $249d91dc236cd3fa$exports,
    "sk-SK": $7d527844ccab55f9$exports,
    "sl-SI": $a95d4a5acb39e35b$exports,
    "sr-SP": $82576688b1e1ef0a$exports,
    "sv-SE": $aa605c86f39879f8$exports,
    "tr-TR": $72af5f52c93eeaaf$exports,
    "uk-UA": $f6b0be5e98e820ca$exports,
    "zh-CN": $cabb9f4bff9b2ed5$exports,
    "zh-TW": $c5e6c845e5ea5381$exports
};





function $2bf1c991883828b3$export$4a931266a3838b86(state, ref) {
    // Open the popover on alt + arrow down
    let onKeyDown = (e)=>{
        if (e.altKey && e.key === 'ArrowDown' && 'setOpen' in state) {
            e.preventDefault();
            e.stopPropagation();
            state.setOpen(true);
        }
    };
    // Focus the first placeholder segment from the end on mouse down/touch up in the field.
    let focusLast = ()=>{
        let elements = ref.current.querySelectorAll('[tabindex="0"]');
        let index = elements.length - 1;
        while(index >= 0 && elements[index].getAttribute('aria-placeholder'))index--;
        index = Math.min(index + 1, elements.length - 1);
        let element = elements[index];
        if (element) element.focus();
    };
    let { pressProps: pressProps  } = $9lWL5$usePress({
        onPressStart (e) {
            if (e.pointerType === 'mouse') focusLast();
        },
        onPress (e) {
            if (e.pointerType !== 'mouse') focusLast();
        }
    });
    return $9lWL5$mergeProps(pressProps, {
        onKeyDown: onKeyDown
    });
}




function $dd56a33159a0ea2f$export$42df105a73306d51(props, state, ref) {
    let buttonId = $9lWL5$useId();
    let dialogId = $9lWL5$useId();
    let formatMessage = $9lWL5$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($c88f0745d72552c8$exports)));
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $9lWL5$useField({
        ...props,
        labelElementType: 'span'
    });
    let groupProps = $2bf1c991883828b3$export$4a931266a3838b86(state, ref);
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale  } = $9lWL5$useLocale();
    let descProps = $9lWL5$useDescription(state.formatValue(locale, {
        month: 'long'
    }));
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    return {
        groupProps: $9lWL5$mergeProps(groupProps, descProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-labelledby': labelledBy,
            'aria-describedby': ariaDescribedBy
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                let focusManager = $9lWL5$createFocusManager(ref);
                focusManager.focusFirst();
            }
        },
        fieldProps: fieldProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        buttonProps: {
            ...descProps,
            id: buttonId,
            excludeFromTabOrder: true,
            'aria-haspopup': 'dialog',
            'aria-label': formatMessage('calendar'),
            'aria-labelledby': `${labelledBy} ${buttonId}`,
            'aria-describedby': ariaDescribedBy
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${labelledBy} ${buttonId}`
        }
    };
}


var $8913372aff0980af$exports = {};

$parcel$export($8913372aff0980af$exports, "useDateSegment", () => $8913372aff0980af$export$1315d136e6f7581);

var $423e84bb76847e49$exports = {};

$parcel$export($423e84bb76847e49$exports, "labelIds", () => $423e84bb76847e49$export$beb2340c1222c6d);
$parcel$export($423e84bb76847e49$exports, "useDateField", () => $423e84bb76847e49$export$5591b0b878c1a989);






const $423e84bb76847e49$export$beb2340c1222c6d = new WeakMap();
function $423e84bb76847e49$export$5591b0b878c1a989(props, state, ref) {
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $9lWL5$useField({
        ...props,
        labelElementType: 'span'
    });
    let groupProps = $2bf1c991883828b3$export$4a931266a3838b86(state, ref);
    let { focusWithinProps: focusWithinProps  } = $9lWL5$useFocusWithin({
        onBlurWithin () {
            state.confirmPlaceholder();
        }
    });
    let formatter = $9lWL5$useDateFormatter(state.getFormatOptions({
        month: 'long'
    }));
    let descProps = $9lWL5$useDescription(state.value ? formatter.format(state.dateValue) : null);
    let segmentLabelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let describedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    $423e84bb76847e49$export$beb2340c1222c6d.set(state, {
        ariaLabelledBy: segmentLabelledBy,
        ariaDescribedBy: describedBy
    });
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                let focusManager = $9lWL5$createFocusManager(ref);
                focusManager.focusFirst();
            }
        },
        fieldProps: $9lWL5$mergeProps(fieldProps, descProps, groupProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || undefined,
            'aria-describedby': describedBy
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}





var $c3b2c5822bfa6f61$exports = {};

$parcel$export($c3b2c5822bfa6f61$exports, "useDisplayNames", () => $c3b2c5822bfa6f61$export$d42c60378c8168f8);




function $c3b2c5822bfa6f61$export$d42c60378c8168f8() {
    let { locale: locale  } = $9lWL5$useLocale();
    return $9lWL5$useMemo(()=>{
        // Try to use Intl.DisplayNames if possible. It may be supported in browsers, but not support the dateTimeField
        // type as that was only added in v2. https://github.com/tc39/intl-displaynames-v2
        try {
            // @ts-ignore
            return new Intl.DisplayNames(locale, {
                type: 'dateTimeField'
            });
        } catch (err) {
            return new $c3b2c5822bfa6f61$var$DisplayNamesPolyfill(locale);
        }
    }, [
        locale
    ]);
}
class $c3b2c5822bfa6f61$var$DisplayNamesPolyfill {
    constructor(locale){
        this.locale = locale;
        this.dictionary = new $9lWL5$MessageDictionary((/*@__PURE__*/$parcel$interopDefault($c88f0745d72552c8$exports)));
    }
    of(field) {
        return this.dictionary.getStringForLocale(field, this.locale);
    }
}





function $8913372aff0980af$export$1315d136e6f7581(props, segment, state, ref) {
    let enteredKeys = $9lWL5$useRef('');
    let { locale: locale , direction: direction  } = $9lWL5$useLocale();
    let displayNames = $c3b2c5822bfa6f61$export$d42c60378c8168f8();
    let focusManager = $9lWL5$useFocusManager();
    let textValue = segment.text;
    let options = $9lWL5$useMemo(()=>state.dateFormatter.resolvedOptions()
    , [
        state.dateFormatter
    ]);
    let monthDateFormatter = $9lWL5$useDateFormatter({
        month: 'long',
        timeZone: options.timeZone
    });
    let hourDateFormatter = $9lWL5$useDateFormatter({
        hour: 'numeric',
        hour12: options.hour12,
        timeZone: options.timeZone
    });
    if (segment.type === 'month') {
        let monthTextValue = monthDateFormatter.format(state.dateValue);
        textValue = monthTextValue !== textValue ? `${textValue} – ${monthTextValue}` : monthTextValue;
    } else if (segment.type === 'hour' || segment.type === 'dayPeriod') textValue = hourDateFormatter.format(state.dateValue);
    let { spinButtonProps: spinButtonProps  } = $9lWL5$useSpinButton({
        value: segment.value,
        textValue: textValue,
        minValue: segment.minValue,
        maxValue: segment.maxValue,
        isDisabled: props.isDisabled,
        isReadOnly: props.isReadOnly || !segment.isEditable,
        isRequired: props.isRequired,
        onIncrement: ()=>{
            enteredKeys.current = '';
            state.increment(segment.type);
        },
        onDecrement: ()=>{
            enteredKeys.current = '';
            state.decrement(segment.type);
        },
        onIncrementPage: ()=>{
            enteredKeys.current = '';
            state.incrementPage(segment.type);
        },
        onDecrementPage: ()=>{
            enteredKeys.current = '';
            state.decrementPage(segment.type);
        },
        onIncrementToMax: ()=>{
            enteredKeys.current = '';
            state.setSegment(segment.type, segment.maxValue);
        },
        onDecrementToMin: ()=>{
            enteredKeys.current = '';
            state.setSegment(segment.type, segment.minValue);
        }
    });
    let parser = $9lWL5$useMemo(()=>new $9lWL5$NumberParser(locale, {
            maximumFractionDigits: 0
        })
    , [
        locale
    ]);
    let backspace = ()=>{
        if (parser.isValidPartialNumber(segment.text) && !props.isReadOnly && !segment.isPlaceholder) {
            let newValue = segment.text.slice(0, -1);
            let parsed = parser.parse(newValue);
            if (newValue.length === 0 || parsed === 0) state.clearSegment(segment.type);
            else state.setSegment(segment.type, parsed);
            enteredKeys.current = newValue;
        } else if (segment.type === 'dayPeriod') state.clearSegment(segment.type);
    };
    let onKeyDown = (e)=>{
        // Firefox does not fire selectstart for Ctrl/Cmd + A
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1742153
        if (e.key === 'a' && ($9lWL5$isMac() ? e.metaKey : e.ctrlKey)) e.preventDefault();
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        switch(e.key){
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') focusManager.focusNext();
                else focusManager.focusPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') focusManager.focusPrevious();
                else focusManager.focusNext();
                break;
            case 'Enter':
                e.preventDefault();
                e.stopPropagation();
                if (segment.isPlaceholder && !props.isReadOnly) state.confirmPlaceholder(segment.type);
                focusManager.focusNext();
                break;
            case 'Tab':
                break;
            case 'Backspace':
            case 'Delete':
                // Safari on iOS does not fire beforeinput for the backspace key because the cursor is at the start.
                e.preventDefault();
                e.stopPropagation();
                backspace();
                break;
        }
    };
    // Safari dayPeriod option doesn't work...
    let { startsWith: startsWith  } = $9lWL5$useFilter({
        sensitivity: 'base'
    });
    let amPmFormatter = $9lWL5$useDateFormatter({
        hour: 'numeric',
        hour12: true
    });
    let am = $9lWL5$useMemo(()=>{
        let date = new Date();
        date.setHours(0);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod'
        ).value;
    }, [
        amPmFormatter
    ]);
    let pm = $9lWL5$useMemo(()=>{
        let date = new Date();
        date.setHours(12);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod'
        ).value;
    }, [
        amPmFormatter
    ]);
    let onInput = (key)=>{
        if (props.isDisabled || props.isReadOnly) return;
        let newValue = enteredKeys.current + key;
        switch(segment.type){
            case 'dayPeriod':
                if (startsWith(am, key)) state.setSegment('dayPeriod', 0);
                else if (startsWith(pm, key)) state.setSegment('dayPeriod', 12);
                else break;
                focusManager.focusNext();
                break;
            case 'day':
            case 'hour':
            case 'minute':
            case 'second':
            case 'month':
            case 'year':
                {
                    if (!parser.isValidPartialNumber(newValue)) return;
                    let numberValue = parser.parse(newValue);
                    let segmentValue = numberValue;
                    let allowsZero = segment.minValue === 0;
                    if (segment.type === 'hour' && state.dateFormatter.resolvedOptions().hour12) {
                        switch(state.dateFormatter.resolvedOptions().hourCycle){
                            case 'h11':
                                if (numberValue > 11) segmentValue = parser.parse(key);
                                break;
                            case 'h12':
                                allowsZero = false;
                                if (numberValue > 12) segmentValue = parser.parse(key);
                                break;
                        }
                        if (segment.value >= 12 && numberValue > 1) numberValue += 12;
                    } else if (numberValue > segment.maxValue) segmentValue = parser.parse(key);
                    if (isNaN(numberValue)) return;
                    let shouldSetValue = segmentValue !== 0 || allowsZero;
                    if (shouldSetValue) state.setSegment(segment.type, segmentValue);
                    if (Number(numberValue + '0') > segment.maxValue || newValue.length >= String(segment.maxValue).length) {
                        enteredKeys.current = '';
                        if (shouldSetValue) focusManager.focusNext();
                    } else enteredKeys.current = newValue;
                    break;
                }
        }
    };
    let onFocus = ()=>{
        enteredKeys.current = '';
        $9lWL5$scrollIntoView($9lWL5$getScrollParent(ref.current), ref.current);
        // Safari requires that a selection is set or it won't fire input events.
        // Since usePress disables text selection, this won't happen by default.
        ref.current.style.webkitUserSelect = 'text';
        let selection = window.getSelection();
        selection.collapse(ref.current);
        ref.current.style.webkitUserSelect = '';
    };
    let compositionRef = $9lWL5$useRef('');
    // @ts-ignore - TODO: possibly old TS version? doesn't fail in my editor...
    $9lWL5$useEvent(ref, 'beforeinput', (e)=>{
        e.preventDefault();
        switch(e.inputType){
            case 'deleteContentBackward':
            case 'deleteContentForward':
                if (parser.isValidPartialNumber(segment.text) && !props.isReadOnly) backspace();
                break;
            case 'insertCompositionText':
                // insertCompositionText cannot be canceled.
                // Record the current state of the element so we can restore it in the `input` event below.
                compositionRef.current = ref.current.textContent;
                // Safari gets stuck in a composition state unless we also assign to the value here.
                // eslint-disable-next-line no-self-assign
                ref.current.textContent = ref.current.textContent;
                break;
            default:
                if (e.data != null) onInput(e.data);
                break;
        }
    });
    $9lWL5$useEvent(ref, 'input', (e)=>{
        let { inputType: inputType , data: data  } = e;
        switch(inputType){
            case 'insertCompositionText':
                // Reset the DOM to how it was in the beforeinput event.
                ref.current.textContent = compositionRef.current;
                // Android sometimes fires key presses of letters as composition events. Need to handle am/pm keys here too.
                // Can also happen e.g. with Pinyin keyboard on iOS.
                if (startsWith(am, data) || startsWith(pm, data)) onInput(data);
                break;
        }
    });
    // Focus on mouse down/touch up to match native textfield behavior.
    // usePress handles canceling text selection.
    let { pressProps: pressProps  } = $9lWL5$usePress({
        preventFocusOnPress: true,
        onPressStart: (e)=>{
            if (e.pointerType === 'mouse') e.target.focus();
        },
        onPress (e) {
            if (e.pointerType !== 'mouse') e.target.focus();
        }
    });
    // For Android: prevent selection on long press.
    $9lWL5$useEvent(ref, 'selectstart', (e)=>{
        e.preventDefault();
    });
    // spinbuttons cannot be focused with VoiceOver on iOS.
    let touchPropOverrides = $9lWL5$isIOS() || segment.type === 'timeZoneName' ? {
        role: 'textbox',
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuetext': null,
        'aria-valuenow': null
    } : {
    };
    let { ariaLabelledBy: ariaLabelledBy , ariaDescribedBy: ariaDescribedBy  } = $423e84bb76847e49$export$beb2340c1222c6d.get(state);
    // Only apply aria-describedby to the first segment, unless the field is invalid. This avoids it being
    // read every time the user navigates to a new segment.
    let firstSegment = $9lWL5$useMemo(()=>state.segments.find((s)=>s.isEditable
        )
    , [
        state.segments
    ]);
    if (segment !== firstSegment && state.validationState !== 'invalid') ariaDescribedBy = undefined;
    let id = $9lWL5$useId(props.id);
    let isEditable = !props.isDisabled && !props.isReadOnly && segment.isEditable;
    return {
        segmentProps: $9lWL5$mergeProps(spinButtonProps, pressProps, {
            id: id,
            ...touchPropOverrides,
            'aria-controls': props['aria-controls'],
            // 'aria-haspopup': props['aria-haspopup'], // deprecated in ARIA 1.2
            'aria-invalid': state.validationState === 'invalid' ? 'true' : undefined,
            'aria-label': segment.type !== 'literal' ? displayNames.of(segment.type) : undefined,
            'aria-labelledby': `${ariaLabelledBy} ${id}`,
            'aria-describedby': ariaDescribedBy,
            'aria-placeholder': segment.isPlaceholder ? segment.text : undefined,
            'aria-readonly': props.isReadOnly || !segment.isEditable ? 'true' : undefined,
            contentEditable: isEditable,
            suppressContentEditableWarning: isEditable,
            spellCheck: isEditable ? 'false' : undefined,
            autoCapitalize: isEditable ? 'off' : undefined,
            autoCorrect: isEditable ? 'off' : undefined,
            // Capitalization was changed in React 17...
            [parseInt($9lWL5$react.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: isEditable ? 'next' : undefined,
            inputMode: props.isDisabled || segment.type === 'dayPeriod' || !isEditable ? undefined : 'numeric',
            tabIndex: props.isDisabled ? undefined : 0,
            onKeyDown: onKeyDown,
            onFocus: onFocus
        })
    };
}



var $fd2ce5f0d182d3e9$exports = {};

$parcel$export($fd2ce5f0d182d3e9$exports, "useDateRangePicker", () => $fd2ce5f0d182d3e9$export$12fd5f0e9f4bb192);







function $fd2ce5f0d182d3e9$export$12fd5f0e9f4bb192(props, state, ref) {
    let formatMessage = $9lWL5$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($c88f0745d72552c8$exports)));
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $9lWL5$useField({
        ...props,
        labelElementType: 'span'
    });
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale  } = $9lWL5$useLocale();
    let description = state.formatValue(locale, {
        month: 'long'
    });
    let descProps = $9lWL5$useDescription(description);
    let startFieldProps = $9lWL5$useLabels({
        'aria-label': formatMessage('startDate'),
        'aria-labelledby': labelledBy
    });
    let endFieldProps = $9lWL5$useLabels({
        'aria-label': formatMessage('endDate'),
        'aria-labelledby': labelledBy
    });
    let buttonId = $9lWL5$useId();
    let dialogId = $9lWL5$useId();
    let groupProps = $2bf1c991883828b3$export$4a931266a3838b86(state, ref);
    let { focusWithinProps: focusWithinProps  } = $9lWL5$useFocusWithin({
        onBlurWithin () {
            state.confirmPlaceholder();
        }
    });
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    return {
        groupProps: $9lWL5$mergeProps(groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-describedby': ariaDescribedBy
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                let focusManager = $9lWL5$createFocusManager(ref);
                focusManager.focusFirst();
            }
        },
        buttonProps: {
            ...descProps,
            id: buttonId,
            excludeFromTabOrder: true,
            'aria-haspopup': 'dialog',
            'aria-label': formatMessage('calendar'),
            'aria-labelledby': `${labelledBy} ${buttonId}`,
            'aria-describedby': ariaDescribedBy
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${labelledBy} ${buttonId}`
        },
        startFieldProps: {
            ...startFieldProps,
            'aria-describedby': fieldProps['aria-describedby']
        },
        endFieldProps: {
            ...endFieldProps,
            'aria-describedby': fieldProps['aria-describedby']
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}





export {$dd56a33159a0ea2f$export$42df105a73306d51 as useDatePicker, $8913372aff0980af$export$1315d136e6f7581 as useDateSegment, $423e84bb76847e49$export$beb2340c1222c6d as labelIds, $423e84bb76847e49$export$5591b0b878c1a989 as useDateField, $fd2ce5f0d182d3e9$export$12fd5f0e9f4bb192 as useDateRangePicker, $c3b2c5822bfa6f61$export$d42c60378c8168f8 as useDisplayNames};
//# sourceMappingURL=module.js.map
