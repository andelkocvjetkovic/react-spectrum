var $RqPov$reactariafocus = require("@react-aria/focus");
var $RqPov$reactariautils = require("@react-aria/utils");
var $RqPov$reactarialabel = require("@react-aria/label");
var $RqPov$reactariai18n = require("@react-aria/i18n");
var $RqPov$reactariainteractions = require("@react-aria/interactions");
var $RqPov$internationalizednumber = require("@internationalized/number");
var $RqPov$react = require("react");
var $RqPov$reactariaspinbutton = require("@react-aria/spinbutton");
var $RqPov$internationalizedmessage = require("@internationalized/message");

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
var $cb7d2152263d2ab6$exports = {};

$parcel$export($cb7d2152263d2ab6$exports, "useDatePicker", () => $cb7d2152263d2ab6$export$42df105a73306d51);

var $5766533e00be07f5$exports = {};
var $7e1d533dafdd7a3c$exports = {};
$7e1d533dafdd7a3c$exports = JSON.parse("{\"calendar\":\"التقويم\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} إلى {end, date, long}\",\"date\":\"التاريخ\",\"dateRange\":\"نطاق التاريخ\",\"day\":\"يوم\",\"dayPeriod\":\"ص/م\",\"endDate\":\"تاريخ الانتهاء\",\"era\":\"العصر\",\"hour\":\"الساعات\",\"minute\":\"الدقائق\",\"month\":\"الشهر\",\"second\":\"الثواني\",\"startDate\":\"تاريخ البدء\",\"year\":\"السنة\",\"weekday\":\"اليوم\",\"timeZoneName\":\"التوقيت\"}");


var $b645e4c88eddb7bc$exports = {};
$b645e4c88eddb7bc$exports = JSON.parse("{\"calendar\":\"Календар\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} до {end, date, long}\",\"date\":\"Дата\",\"dateRange\":\"Времеви интервал\",\"day\":\"ден\",\"dayPeriod\":\"пр.об./сл.об.\",\"endDate\":\"Крайна дата\",\"era\":\"ера\",\"hour\":\"час\",\"minute\":\"минута\",\"month\":\"месец\",\"second\":\"секунда\",\"startDate\":\"Начална дата\",\"year\":\"година\",\"weekday\":\"ден от седмицата\",\"timeZoneName\":\"часова зона\"}");


var $c74d7d9a3a492e14$exports = {};
$c74d7d9a3a492e14$exports = JSON.parse("{\"calendar\":\"Kalendář\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} až {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Rozsah dat\",\"day\":\"den\",\"dayPeriod\":\"část dne\",\"endDate\":\"Konečné datum\",\"era\":\"letopočet\",\"hour\":\"hodina\",\"minute\":\"minuta\",\"month\":\"měsíc\",\"second\":\"sekunda\",\"startDate\":\"Počáteční datum\",\"year\":\"rok\",\"weekday\":\"den v týdnu\",\"timeZoneName\":\"časové pásmo\"}");


var $2fdf441aacd54e7a$exports = {};
$2fdf441aacd54e7a$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} til {end, date, long}\",\"date\":\"Dato\",\"dateRange\":\"Datointerval\",\"day\":\"dag\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Slutdato\",\"era\":\"æra\",\"hour\":\"time\",\"minute\":\"minut\",\"month\":\"måned\",\"second\":\"sekund\",\"startDate\":\"Startdato\",\"year\":\"år\",\"weekday\":\"ugedag\",\"timeZoneName\":\"tidszone\"}");


var $cc895f32c87cd395$exports = {};
$cc895f32c87cd395$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} bis {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumsbereich\",\"day\":\"Tag\",\"dayPeriod\":\"Tageshälfte\",\"endDate\":\"Enddatum\",\"era\":\"Epoche\",\"hour\":\"Stunde\",\"minute\":\"Minute\",\"month\":\"Monat\",\"second\":\"Sekunde\",\"startDate\":\"Anfangsdatum\",\"year\":\"Jahr\",\"weekday\":\"Wochentag\",\"timeZoneName\":\"Zeitzone\"}");


var $5f40c68998a77c84$exports = {};
$5f40c68998a77c84$exports = JSON.parse("{\"calendar\":\"Ημερολόγιο\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} ως {end, date, long}\",\"date\":\"Ημερομηνία\",\"dateRange\":\"Εύρος ημερομηνιών\",\"day\":\"ημέρα\",\"dayPeriod\":\"π.μ./μ.μ.\",\"endDate\":\"Ημερομηνία λήξης\",\"era\":\"περίοδος\",\"hour\":\"ώρα\",\"minute\":\"λεπτό\",\"month\":\"μήνας\",\"second\":\"δευτερόλεπτο\",\"startDate\":\"Ημερομηνία έναρξης\",\"year\":\"έτος\",\"weekday\":\"καθημερινή\",\"timeZoneName\":\"ζώνη ώρας\"}");


var $8ce6e70e61f75190$exports = {};
$8ce6e70e61f75190$exports = JSON.parse("{\"era\":\"era\",\"year\":\"year\",\"month\":\"month\",\"day\":\"day\",\"hour\":\"hour\",\"minute\":\"minute\",\"second\":\"second\",\"dayPeriod\":\"AM/PM\",\"calendar\":\"Calendar\",\"date\":\"Date\",\"dateRange\":\"Date Range\",\"startDate\":\"Start Date\",\"endDate\":\"End Date\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} to {end, date, long}\",\"weekday\":\"day of the week\",\"timeZoneName\":\"time zone\"}");


var $435f97ce46f2f3b7$exports = {};
$435f97ce46f2f3b7$exports = JSON.parse("{\"calendar\":\"Calendario\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} a {end, date, long}\",\"date\":\"Fecha\",\"dateRange\":\"Intervalo de fecha\",\"day\":\"día\",\"dayPeriod\":\"a. m./p. m.\",\"endDate\":\"Fecha final\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mes\",\"second\":\"segundo\",\"startDate\":\"Fecha de inicio\",\"year\":\"año\",\"weekday\":\"día de la semana\",\"timeZoneName\":\"zona horaria\"}");


var $6c72b2fc022593ee$exports = {};
$6c72b2fc022593ee$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} kuni {end, date, long}\",\"date\":\"Kuupäev\",\"dateRange\":\"Kuupäevavahemik\",\"day\":\"päev\",\"dayPeriod\":\"enne/pärast lõunat\",\"endDate\":\"Lõppkuupäev\",\"era\":\"ajastu\",\"hour\":\"tund\",\"minute\":\"minut\",\"month\":\"kuu\",\"second\":\"sekund\",\"startDate\":\"Alguskuupäev\",\"year\":\"aasta\",\"weekday\":\"nädalapäev\",\"timeZoneName\":\"ajavöönd\"}");


var $2c0058ef1406d1e1$exports = {};
$2c0058ef1406d1e1$exports = JSON.parse("{\"calendar\":\"Kalenteri\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long}–{end, date, long}\",\"date\":\"Päivämäärä\",\"dateRange\":\"Päivämääräalue\",\"day\":\"päivä\",\"dayPeriod\":\"vuorokaudenaika\",\"endDate\":\"Päättymispäivä\",\"era\":\"aikakausi\",\"hour\":\"tunti\",\"minute\":\"minuutti\",\"month\":\"kuukausi\",\"second\":\"sekunti\",\"startDate\":\"Alkamispäivä\",\"year\":\"vuosi\",\"weekday\":\"viikonpäivä\",\"timeZoneName\":\"aikavyöhyke\"}");


var $351fc2d9da05f66d$exports = {};
$351fc2d9da05f66d$exports = JSON.parse("{\"calendar\":\"Calendrier\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} au {end, date, long}\",\"date\":\"Date\",\"dateRange\":\"Plage de dates\",\"day\":\"jour\",\"dayPeriod\":\"cadran\",\"endDate\":\"Date de fin\",\"era\":\"ère\",\"hour\":\"heure\",\"minute\":\"minute\",\"month\":\"mois\",\"second\":\"seconde\",\"startDate\":\"Date de début\",\"year\":\"année\",\"weekday\":\"jour de la semaine\",\"timeZoneName\":\"fuseau horaire\"}");


var $1c3921a882c95ab5$exports = {};
$1c3921a882c95ab5$exports = JSON.parse("{\"calendar\":\"לוח שנה\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"מ-{start, date, long} ועד {end, date, long}\",\"date\":\"תאריך\",\"dateRange\":\"טווח תאריכים\",\"day\":\"יום\",\"dayPeriod\":\"לפנה״צ/אחה״צ\",\"endDate\":\"תאריך סיום\",\"era\":\"תקופה\",\"hour\":\"שעה\",\"minute\":\"דקה\",\"month\":\"חודש\",\"second\":\"שנייה\",\"startDate\":\"תאריך התחלה\",\"year\":\"שנה\",\"weekday\":\"יום בשבוע\",\"timeZoneName\":\"אזור זמן\"}");


var $c20d0e8e557c2a17$exports = {};
$c20d0e8e557c2a17$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Raspon datuma\",\"day\":\"dan\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Datum završetka\",\"era\":\"era\",\"hour\":\"sat\",\"minute\":\"minuta\",\"month\":\"mjesec\",\"second\":\"sekunda\",\"startDate\":\"Datum početka\",\"year\":\"godina\",\"weekday\":\"dan u tjednu\",\"timeZoneName\":\"vremenska zona\"}");


var $2cc5b3664294ea6e$exports = {};
$2cc5b3664294ea6e$exports = JSON.parse("{\"calendar\":\"Naptár\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} – {end, date, long}\",\"date\":\"Dátum\",\"dateRange\":\"Dátumtartomány\",\"day\":\"nap\",\"dayPeriod\":\"napszak\",\"endDate\":\"Befejező dátum\",\"era\":\"éra\",\"hour\":\"óra\",\"minute\":\"perc\",\"month\":\"hónap\",\"second\":\"másodperc\",\"startDate\":\"Kezdő dátum\",\"year\":\"év\",\"weekday\":\"hét napja\",\"timeZoneName\":\"időzóna\"}");


var $beafd07706552b1a$exports = {};
$beafd07706552b1a$exports = JSON.parse("{\"calendar\":\"Calendario\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"Da {start, date, long} a {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Intervallo date\",\"day\":\"giorno\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Data finale\",\"era\":\"era\",\"hour\":\"ora\",\"minute\":\"minuto\",\"month\":\"mese\",\"second\":\"secondo\",\"startDate\":\"Data iniziale\",\"year\":\"anno\",\"weekday\":\"giorno della settimana\",\"timeZoneName\":\"fuso orario\"}");


var $b65cee7817fd570b$exports = {};
$b65cee7817fd570b$exports = JSON.parse("{\"calendar\":\"カレンダー\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} ～ {end, date, long}\",\"date\":\"日付\",\"dateRange\":\"日付範囲\",\"day\":\"日\",\"dayPeriod\":\"午前/午後\",\"endDate\":\"終了日\",\"era\":\"時代\",\"hour\":\"時\",\"minute\":\"分\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日\",\"year\":\"年\",\"weekday\":\"曜日\",\"timeZoneName\":\"タイムゾーン\"}");


var $db6eff1d2cc9305e$exports = {};
$db6eff1d2cc9305e$exports = JSON.parse("{\"calendar\":\"달력\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} ~ {end, date, long}\",\"date\":\"날짜\",\"dateRange\":\"날짜 범위\",\"day\":\"일\",\"dayPeriod\":\"오전/오후\",\"endDate\":\"종료 날짜\",\"era\":\"연호\",\"hour\":\"시\",\"minute\":\"분\",\"month\":\"월\",\"second\":\"초\",\"startDate\":\"시작 날짜\",\"year\":\"년\",\"weekday\":\"요일\",\"timeZoneName\":\"시간대\"}");


var $39c9eeb53669dbc8$exports = {};
$39c9eeb53669dbc8$exports = JSON.parse("{\"calendar\":\"Kalendorius\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"Nuo {start, date, long} iki {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Datų intervalas\",\"day\":\"diena\",\"dayPeriod\":\"iki pietų / po pietų\",\"endDate\":\"Pabaigos data\",\"era\":\"era\",\"hour\":\"valanda\",\"minute\":\"minutė\",\"month\":\"mėnuo\",\"second\":\"sekundė\",\"startDate\":\"Pradžios data\",\"year\":\"metai\",\"weekday\":\"savaitės diena\",\"timeZoneName\":\"laiko juosta\"}");


var $c28282c169c4dba9$exports = {};
$c28282c169c4dba9$exports = JSON.parse("{\"calendar\":\"Kalendārs\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} līdz {end, date, long}\",\"date\":\"Datums\",\"dateRange\":\"Datumu diapazons\",\"day\":\"diena\",\"dayPeriod\":\"priekšpusdienā/pēcpusdienā\",\"endDate\":\"Beigu datums\",\"era\":\"ēra\",\"hour\":\"stundas\",\"minute\":\"minūtes\",\"month\":\"mēnesis\",\"second\":\"sekundes\",\"startDate\":\"Sākuma datums\",\"year\":\"gads\",\"weekday\":\"nedēļas diena\",\"timeZoneName\":\"laika josla\"}");


var $779bf05b7c5c6985$exports = {};
$779bf05b7c5c6985$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} til {end, date, long}\",\"date\":\"Dato\",\"dateRange\":\"Datoområde\",\"day\":\"dag\",\"dayPeriod\":\"a.m./p.m.\",\"endDate\":\"Sluttdato\",\"era\":\"tidsalder\",\"hour\":\"time\",\"minute\":\"minutt\",\"month\":\"måned\",\"second\":\"sekund\",\"startDate\":\"Startdato\",\"year\":\"år\",\"weekday\":\"ukedag\",\"timeZoneName\":\"tidssone\"}");


var $665a9e26595f0b7a$exports = {};
$665a9e26595f0b7a$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} t/m {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumbereik\",\"day\":\"dag\",\"dayPeriod\":\"a.m./p.m.\",\"endDate\":\"Einddatum\",\"era\":\"tijdperk\",\"hour\":\"uur\",\"minute\":\"minuut\",\"month\":\"maand\",\"second\":\"seconde\",\"startDate\":\"Startdatum\",\"year\":\"jaar\",\"weekday\":\"dag van de week\",\"timeZoneName\":\"tijdzone\"}");


var $b75ff73faae35a35$exports = {};
$b75ff73faae35a35$exports = JSON.parse("{\"calendar\":\"Kalendarz\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Zakres dat\",\"day\":\"dzień\",\"dayPeriod\":\"rano / po południu / wieczorem\",\"endDate\":\"Data końcowa\",\"era\":\"era\",\"hour\":\"godzina\",\"minute\":\"minuta\",\"month\":\"miesiąc\",\"second\":\"sekunda\",\"startDate\":\"Data początkowa\",\"year\":\"rok\",\"weekday\":\"dzień tygodnia\",\"timeZoneName\":\"strefa czasowa\"}");


var $d012e405a4afd3e7$exports = {};
$d012e405a4afd3e7$exports = JSON.parse("{\"calendar\":\"Calendário\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} a {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Intervalo de datas\",\"day\":\"dia\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Data final\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mês\",\"second\":\"segundo\",\"startDate\":\"Data inicial\",\"year\":\"ano\",\"weekday\":\"dia da semana\",\"timeZoneName\":\"fuso horário\"}");


var $defe0662285d1701$exports = {};
$defe0662285d1701$exports = JSON.parse("{\"calendar\":\"Calendário\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} a {end, date, long}\",\"date\":\"Data\",\"dateRange\":\"Intervalo de datas\",\"day\":\"dia\",\"dayPeriod\":\"am/pm\",\"endDate\":\"Data de Término\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mês\",\"second\":\"segundo\",\"startDate\":\"Data de Início\",\"year\":\"ano\",\"weekday\":\"dia da semana\",\"timeZoneName\":\"fuso horário\"}");


var $f9acea7b67f5fdff$exports = {};
$f9acea7b67f5fdff$exports = JSON.parse("{\"calendar\":\"Calendar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} - {end, date, long}\",\"date\":\"Dată\",\"dateRange\":\"Raza datei\",\"day\":\"zi\",\"dayPeriod\":\"a.m/p.m.\",\"endDate\":\"Dată final\",\"era\":\"eră\",\"hour\":\"oră\",\"minute\":\"minut\",\"month\":\"lună\",\"second\":\"secundă\",\"startDate\":\"Dată început\",\"year\":\"an\",\"weekday\":\"ziua din săptămână\",\"timeZoneName\":\"fus orar\"}");


var $44d161a4fd9a4479$exports = {};
$44d161a4fd9a4479$exports = JSON.parse("{\"calendar\":\"Календарь\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} – {end, date, long}\",\"date\":\"Дата\",\"dateRange\":\"Диапазон дат\",\"day\":\"день\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Дата окончания\",\"era\":\"эра\",\"hour\":\"час\",\"minute\":\"минута\",\"month\":\"месяц\",\"second\":\"секунда\",\"startDate\":\"Дата начала\",\"year\":\"год\",\"weekday\":\"день недели\",\"timeZoneName\":\"часовой пояс\"}");


var $f88e5125acb59f4e$exports = {};
$f88e5125acb59f4e$exports = JSON.parse("{\"calendar\":\"Kalendár\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Dátum\",\"dateRange\":\"Rozsah dátumov\",\"day\":\"deň\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Dátum ukončenia\",\"era\":\"letopočet\",\"hour\":\"hodina\",\"minute\":\"minúta\",\"month\":\"mesiac\",\"second\":\"sekunda\",\"startDate\":\"Dátum začatia\",\"year\":\"rok\",\"weekday\":\"deň týždňa\",\"timeZoneName\":\"časové pásmo\"}");


var $3f60f00afb879ab9$exports = {};
$3f60f00afb879ab9$exports = JSON.parse("{\"calendar\":\"Koledar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumski obseg\",\"day\":\"dan\",\"dayPeriod\":\"dop/pop\",\"endDate\":\"Datum konca\",\"era\":\"doba\",\"hour\":\"ura\",\"minute\":\"minuta\",\"month\":\"mesec\",\"second\":\"sekunda\",\"startDate\":\"Datum začetka\",\"year\":\"leto\",\"weekday\":\"dan v tednu\",\"timeZoneName\":\"časovni pas\"}");


var $2c429c74b95fbbb3$exports = {};
$2c429c74b95fbbb3$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} do {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Opseg datuma\",\"day\":\"дан\",\"dayPeriod\":\"пре подне/по подне\",\"endDate\":\"Datum završetka\",\"era\":\"ера\",\"hour\":\"сат\",\"minute\":\"минут\",\"month\":\"месец\",\"second\":\"секунд\",\"startDate\":\"Datum početka\",\"year\":\"година\",\"weekday\":\"дан у недељи\",\"timeZoneName\":\"временска зона\"}");


var $c3ae416e0c8ea35d$exports = {};
$c3ae416e0c8ea35d$exports = JSON.parse("{\"calendar\":\"Kalender\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} till {end, date, long}\",\"date\":\"Datum\",\"dateRange\":\"Datumintervall\",\"day\":\"dag\",\"dayPeriod\":\"fm/em\",\"endDate\":\"Slutdatum\",\"era\":\"era\",\"hour\":\"timme\",\"minute\":\"minut\",\"month\":\"månad\",\"second\":\"sekund\",\"startDate\":\"Startdatum\",\"year\":\"år\",\"weekday\":\"veckodag\",\"timeZoneName\":\"tidszon\"}");


var $6548dada79dc88ed$exports = {};
$6548dada79dc88ed$exports = JSON.parse("{\"calendar\":\"Takvim\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} - {end, date, long}\",\"date\":\"Tarih\",\"dateRange\":\"Tarih Aralığı\",\"day\":\"gün\",\"dayPeriod\":\"ÖÖ/ÖS\",\"endDate\":\"Bitiş Tarihi\",\"era\":\"çağ\",\"hour\":\"saat\",\"minute\":\"dakika\",\"month\":\"ay\",\"second\":\"saniye\",\"startDate\":\"Başlangıç Tarihi\",\"year\":\"yıl\",\"weekday\":\"haftanın günü\",\"timeZoneName\":\"saat dilimi\"}");


var $75ff58c24ecc2405$exports = {};
$75ff58c24ecc2405$exports = JSON.parse("{\"calendar\":\"Календар\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"Від {start, date, long} до {end, date, long}\",\"date\":\"Дата\",\"dateRange\":\"Діапазон дат\",\"day\":\"день\",\"dayPeriod\":\"дп/пп\",\"endDate\":\"Дата завершення\",\"era\":\"ера\",\"hour\":\"година\",\"minute\":\"хвилина\",\"month\":\"місяць\",\"second\":\"секунда\",\"startDate\":\"Дата початку\",\"year\":\"рік\",\"weekday\":\"день тижня\",\"timeZoneName\":\"часовий пояс\"}");


var $b300ea50d0bc8474$exports = {};
$b300ea50d0bc8474$exports = JSON.parse("{\"calendar\":\"日历\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long} 至 {end, date, long}\",\"date\":\"日期\",\"dateRange\":\"日期范围\",\"day\":\"日\",\"dayPeriod\":\"上午/下午\",\"endDate\":\"结束日期\",\"era\":\"纪元\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"开始日期\",\"year\":\"年\",\"weekday\":\"工作日\",\"timeZoneName\":\"时区\"}");


var $a018547010e33d31$exports = {};
$a018547010e33d31$exports = JSON.parse("{\"calendar\":\"日曆\",\"currentDate\":\"{date, date, full}\",\"currentDateRange\":\"{start, date, long}至 {end, date, long}\",\"date\":\"日期\",\"dateRange\":\"日期範圍\",\"day\":\"日\",\"dayPeriod\":\"上午/下午\",\"endDate\":\"結束日期\",\"era\":\"纪元\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日期\",\"year\":\"年\",\"weekday\":\"工作日\",\"timeZoneName\":\"时区\"}");


$5766533e00be07f5$exports = {
    "ar-AE": $7e1d533dafdd7a3c$exports,
    "bg-BG": $b645e4c88eddb7bc$exports,
    "cs-CZ": $c74d7d9a3a492e14$exports,
    "da-DK": $2fdf441aacd54e7a$exports,
    "de-DE": $cc895f32c87cd395$exports,
    "el-GR": $5f40c68998a77c84$exports,
    "en-US": $8ce6e70e61f75190$exports,
    "es-ES": $435f97ce46f2f3b7$exports,
    "et-EE": $6c72b2fc022593ee$exports,
    "fi-FI": $2c0058ef1406d1e1$exports,
    "fr-FR": $351fc2d9da05f66d$exports,
    "he-IL": $1c3921a882c95ab5$exports,
    "hr-HR": $c20d0e8e557c2a17$exports,
    "hu-HU": $2cc5b3664294ea6e$exports,
    "it-IT": $beafd07706552b1a$exports,
    "ja-JP": $b65cee7817fd570b$exports,
    "ko-KR": $db6eff1d2cc9305e$exports,
    "lt-LT": $39c9eeb53669dbc8$exports,
    "lv-LV": $c28282c169c4dba9$exports,
    "nb-NO": $779bf05b7c5c6985$exports,
    "nl-NL": $665a9e26595f0b7a$exports,
    "pl-PL": $b75ff73faae35a35$exports,
    "pt-BR": $d012e405a4afd3e7$exports,
    "pt-PT": $defe0662285d1701$exports,
    "ro-RO": $f9acea7b67f5fdff$exports,
    "ru-RU": $44d161a4fd9a4479$exports,
    "sk-SK": $f88e5125acb59f4e$exports,
    "sl-SI": $3f60f00afb879ab9$exports,
    "sr-SP": $2c429c74b95fbbb3$exports,
    "sv-SE": $c3ae416e0c8ea35d$exports,
    "tr-TR": $6548dada79dc88ed$exports,
    "uk-UA": $75ff58c24ecc2405$exports,
    "zh-CN": $b300ea50d0bc8474$exports,
    "zh-TW": $a018547010e33d31$exports
};





function $56725a1cb2afa258$export$4a931266a3838b86(state, ref) {
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
    let { pressProps: pressProps  } = $RqPov$reactariainteractions.usePress({
        onPressStart (e) {
            if (e.pointerType === 'mouse') focusLast();
        },
        onPress (e) {
            if (e.pointerType !== 'mouse') focusLast();
        }
    });
    return $RqPov$reactariautils.mergeProps(pressProps, {
        onKeyDown: onKeyDown
    });
}




function $cb7d2152263d2ab6$export$42df105a73306d51(props, state, ref) {
    let buttonId = $RqPov$reactariautils.useId();
    let dialogId = $RqPov$reactariautils.useId();
    let formatMessage = $RqPov$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($5766533e00be07f5$exports)));
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $RqPov$reactarialabel.useField({
        ...props,
        labelElementType: 'span'
    });
    let groupProps = $56725a1cb2afa258$export$4a931266a3838b86(state, ref);
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale  } = $RqPov$reactariai18n.useLocale();
    let descProps = $RqPov$reactariautils.useDescription(state.formatValue(locale, {
        month: 'long'
    }));
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    return {
        groupProps: $RqPov$reactariautils.mergeProps(groupProps, descProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-labelledby': labelledBy,
            'aria-describedby': ariaDescribedBy
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                let focusManager = $RqPov$reactariafocus.createFocusManager(ref);
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


var $93e3e69cab166b00$exports = {};

$parcel$export($93e3e69cab166b00$exports, "useDateSegment", () => $93e3e69cab166b00$export$1315d136e6f7581);

var $0a17b9b24fd61cc6$exports = {};

$parcel$export($0a17b9b24fd61cc6$exports, "labelIds", () => $0a17b9b24fd61cc6$export$beb2340c1222c6d);
$parcel$export($0a17b9b24fd61cc6$exports, "useDateField", () => $0a17b9b24fd61cc6$export$5591b0b878c1a989);






const $0a17b9b24fd61cc6$export$beb2340c1222c6d = new WeakMap();
function $0a17b9b24fd61cc6$export$5591b0b878c1a989(props, state, ref) {
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $RqPov$reactarialabel.useField({
        ...props,
        labelElementType: 'span'
    });
    let groupProps = $56725a1cb2afa258$export$4a931266a3838b86(state, ref);
    let { focusWithinProps: focusWithinProps  } = $RqPov$reactariainteractions.useFocusWithin({
        onBlurWithin () {
            state.confirmPlaceholder();
        }
    });
    let formatter = $RqPov$reactariai18n.useDateFormatter(state.getFormatOptions({
        month: 'long'
    }));
    let descProps = $RqPov$reactariautils.useDescription(state.value ? formatter.format(state.dateValue) : null);
    let segmentLabelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let describedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    $0a17b9b24fd61cc6$export$beb2340c1222c6d.set(state, {
        ariaLabelledBy: segmentLabelledBy,
        ariaDescribedBy: describedBy
    });
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                let focusManager = $RqPov$reactariafocus.createFocusManager(ref);
                focusManager.focusFirst();
            }
        },
        fieldProps: $RqPov$reactariautils.mergeProps(fieldProps, descProps, groupProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || undefined,
            'aria-describedby': describedBy
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}





var $2b06c75983817eb5$exports = {};

$parcel$export($2b06c75983817eb5$exports, "useDisplayNames", () => $2b06c75983817eb5$export$d42c60378c8168f8);




function $2b06c75983817eb5$export$d42c60378c8168f8() {
    let { locale: locale  } = $RqPov$reactariai18n.useLocale();
    return $RqPov$react.useMemo(()=>{
        // Try to use Intl.DisplayNames if possible. It may be supported in browsers, but not support the dateTimeField
        // type as that was only added in v2. https://github.com/tc39/intl-displaynames-v2
        try {
            // @ts-ignore
            return new Intl.DisplayNames(locale, {
                type: 'dateTimeField'
            });
        } catch (err) {
            return new $2b06c75983817eb5$var$DisplayNamesPolyfill(locale);
        }
    }, [
        locale
    ]);
}
class $2b06c75983817eb5$var$DisplayNamesPolyfill {
    constructor(locale){
        this.locale = locale;
        this.dictionary = new $RqPov$internationalizedmessage.MessageDictionary((/*@__PURE__*/$parcel$interopDefault($5766533e00be07f5$exports)));
    }
    of(field) {
        return this.dictionary.getStringForLocale(field, this.locale);
    }
}





function $93e3e69cab166b00$export$1315d136e6f7581(props, segment, state, ref) {
    let enteredKeys = $RqPov$react.useRef('');
    let { locale: locale , direction: direction  } = $RqPov$reactariai18n.useLocale();
    let displayNames = $2b06c75983817eb5$export$d42c60378c8168f8();
    let focusManager = $RqPov$reactariafocus.useFocusManager();
    let textValue = segment.text;
    let options = $RqPov$react.useMemo(()=>state.dateFormatter.resolvedOptions()
    , [
        state.dateFormatter
    ]);
    let monthDateFormatter = $RqPov$reactariai18n.useDateFormatter({
        month: 'long',
        timeZone: options.timeZone
    });
    let hourDateFormatter = $RqPov$reactariai18n.useDateFormatter({
        hour: 'numeric',
        hour12: options.hour12,
        timeZone: options.timeZone
    });
    if (segment.type === 'month') {
        let monthTextValue = monthDateFormatter.format(state.dateValue);
        textValue = monthTextValue !== textValue ? `${textValue} – ${monthTextValue}` : monthTextValue;
    } else if (segment.type === 'hour' || segment.type === 'dayPeriod') textValue = hourDateFormatter.format(state.dateValue);
    let { spinButtonProps: spinButtonProps  } = $RqPov$reactariaspinbutton.useSpinButton({
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
    let parser = $RqPov$react.useMemo(()=>new $RqPov$internationalizednumber.NumberParser(locale, {
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
        if (e.key === 'a' && ($RqPov$reactariautils.isMac() ? e.metaKey : e.ctrlKey)) e.preventDefault();
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
    let { startsWith: startsWith  } = $RqPov$reactariai18n.useFilter({
        sensitivity: 'base'
    });
    let amPmFormatter = $RqPov$reactariai18n.useDateFormatter({
        hour: 'numeric',
        hour12: true
    });
    let am = $RqPov$react.useMemo(()=>{
        let date = new Date();
        date.setHours(0);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod'
        ).value;
    }, [
        amPmFormatter
    ]);
    let pm = $RqPov$react.useMemo(()=>{
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
        $RqPov$reactariautils.scrollIntoView($RqPov$reactariautils.getScrollParent(ref.current), ref.current);
        // Safari requires that a selection is set or it won't fire input events.
        // Since usePress disables text selection, this won't happen by default.
        ref.current.style.webkitUserSelect = 'text';
        let selection = window.getSelection();
        selection.collapse(ref.current);
        ref.current.style.webkitUserSelect = '';
    };
    let compositionRef = $RqPov$react.useRef('');
    // @ts-ignore - TODO: possibly old TS version? doesn't fail in my editor...
    $RqPov$reactariautils.useEvent(ref, 'beforeinput', (e)=>{
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
    $RqPov$reactariautils.useEvent(ref, 'input', (e)=>{
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
    let { pressProps: pressProps  } = $RqPov$reactariainteractions.usePress({
        preventFocusOnPress: true,
        onPressStart: (e)=>{
            if (e.pointerType === 'mouse') e.target.focus();
        },
        onPress (e) {
            if (e.pointerType !== 'mouse') e.target.focus();
        }
    });
    // For Android: prevent selection on long press.
    $RqPov$reactariautils.useEvent(ref, 'selectstart', (e)=>{
        e.preventDefault();
    });
    // spinbuttons cannot be focused with VoiceOver on iOS.
    let touchPropOverrides = $RqPov$reactariautils.isIOS() || segment.type === 'timeZoneName' ? {
        role: 'textbox',
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuetext': null,
        'aria-valuenow': null
    } : {
    };
    let { ariaLabelledBy: ariaLabelledBy , ariaDescribedBy: ariaDescribedBy  } = $0a17b9b24fd61cc6$export$beb2340c1222c6d.get(state);
    // Only apply aria-describedby to the first segment, unless the field is invalid. This avoids it being
    // read every time the user navigates to a new segment.
    let firstSegment = $RqPov$react.useMemo(()=>state.segments.find((s)=>s.isEditable
        )
    , [
        state.segments
    ]);
    if (segment !== firstSegment && state.validationState !== 'invalid') ariaDescribedBy = undefined;
    let id = $RqPov$reactariautils.useId(props.id);
    let isEditable = !props.isDisabled && !props.isReadOnly && segment.isEditable;
    return {
        segmentProps: $RqPov$reactariautils.mergeProps(spinButtonProps, pressProps, {
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
            [parseInt(($parcel$interopDefault($RqPov$react)).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: isEditable ? 'next' : undefined,
            inputMode: props.isDisabled || segment.type === 'dayPeriod' || !isEditable ? undefined : 'numeric',
            tabIndex: props.isDisabled ? undefined : 0,
            onKeyDown: onKeyDown,
            onFocus: onFocus
        })
    };
}



var $53ea40b9383d8ad0$exports = {};

$parcel$export($53ea40b9383d8ad0$exports, "useDateRangePicker", () => $53ea40b9383d8ad0$export$12fd5f0e9f4bb192);







function $53ea40b9383d8ad0$export$12fd5f0e9f4bb192(props, state, ref) {
    let formatMessage = $RqPov$reactariai18n.useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($5766533e00be07f5$exports)));
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $RqPov$reactarialabel.useField({
        ...props,
        labelElementType: 'span'
    });
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale  } = $RqPov$reactariai18n.useLocale();
    let description = state.formatValue(locale, {
        month: 'long'
    });
    let descProps = $RqPov$reactariautils.useDescription(description);
    let startFieldProps = $RqPov$reactariautils.useLabels({
        'aria-label': formatMessage('startDate'),
        'aria-labelledby': labelledBy
    });
    let endFieldProps = $RqPov$reactariautils.useLabels({
        'aria-label': formatMessage('endDate'),
        'aria-labelledby': labelledBy
    });
    let buttonId = $RqPov$reactariautils.useId();
    let dialogId = $RqPov$reactariautils.useId();
    let groupProps = $56725a1cb2afa258$export$4a931266a3838b86(state, ref);
    let { focusWithinProps: focusWithinProps  } = $RqPov$reactariainteractions.useFocusWithin({
        onBlurWithin () {
            state.confirmPlaceholder();
        }
    });
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    return {
        groupProps: $RqPov$reactariautils.mergeProps(groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-describedby': ariaDescribedBy
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                let focusManager = $RqPov$reactariafocus.createFocusManager(ref);
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



$parcel$exportWildcard(module.exports, $cb7d2152263d2ab6$exports);
$parcel$exportWildcard(module.exports, $93e3e69cab166b00$exports);
$parcel$exportWildcard(module.exports, $0a17b9b24fd61cc6$exports);
$parcel$exportWildcard(module.exports, $53ea40b9383d8ad0$exports);
$parcel$exportWildcard(module.exports, $2b06c75983817eb5$exports);


//# sourceMappingURL=main.js.map
