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

$parcel$export(module.exports, "GregorianCalendar", () => $701770b0bf6ae333$export$80ee6245ec4f29ec);
$parcel$export(module.exports, "JapaneseCalendar", () => $e0545968568f43c3$export$b746ab2b60cdffbf);
$parcel$export(module.exports, "BuddhistCalendar", () => $d1f96e9f1fc8d7f8$export$42d20a78301dee44);
$parcel$export(module.exports, "TaiwanCalendar", () => $fa5894f4110ff96a$export$65e01080afcb0799);
$parcel$export(module.exports, "PersianCalendar", () => $eca18228d7a4cb36$export$37fccdbfd14c5939);
$parcel$export(module.exports, "IndianCalendar", () => $96bc42a3edeb2fe8$export$39f31c639fa15726);
$parcel$export(module.exports, "IslamicCivilCalendar", () => $014e261cff34a38b$export$2066795aadd37bfc);
$parcel$export(module.exports, "IslamicTabularCalendar", () => $014e261cff34a38b$export$37f0887f2f9d22f7);
$parcel$export(module.exports, "IslamicUmalquraCalendar", () => $014e261cff34a38b$export$5baab4758c231076);
$parcel$export(module.exports, "HebrewCalendar", () => $eb9be94c20a917ae$export$ca405048b8fb5af);
$parcel$export(module.exports, "EthiopicCalendar", () => $2123090736a8b03e$export$26ba6eab5e20cd7d);
$parcel$export(module.exports, "EthiopicAmeteAlemCalendar", () => $2123090736a8b03e$export$d72e0c37005a4914);
$parcel$export(module.exports, "CopticCalendar", () => $2123090736a8b03e$export$fe6243cbe1a4b7c1);
$parcel$export(module.exports, "createCalendar", () => $29be8c8f7c0c2684$export$dd0bbc9b26defe37);
var $598186d9e30d5ae4$exports = {};

$parcel$export($598186d9e30d5ae4$exports, "CalendarDate", () => $598186d9e30d5ae4$export$99faa760c7908e4f);
$parcel$export($598186d9e30d5ae4$exports, "Time", () => $598186d9e30d5ae4$export$680ea196effce5f);
$parcel$export($598186d9e30d5ae4$exports, "CalendarDateTime", () => $598186d9e30d5ae4$export$ca871e8dbb80966f);
$parcel$export($598186d9e30d5ae4$exports, "ZonedDateTime", () => $598186d9e30d5ae4$export$d3b7288e7994edea);
var $c27c3f0399d7391c$exports = {};

$parcel$export($c27c3f0399d7391c$exports, "epochFromDate", () => $c27c3f0399d7391c$export$bd4fb2bc8bb06fb);
$parcel$export($c27c3f0399d7391c$exports, "toCalendar", () => $c27c3f0399d7391c$export$b4a036af3fc0b032);
$parcel$export($c27c3f0399d7391c$exports, "getTimeZoneOffset", () => $c27c3f0399d7391c$export$59c99f3515d3493f);
$parcel$export($c27c3f0399d7391c$exports, "possibleAbsolutes", () => $c27c3f0399d7391c$export$136f38efe7caf549);
$parcel$export($c27c3f0399d7391c$exports, "toAbsolute", () => $c27c3f0399d7391c$export$5107c82f94518f5c);
$parcel$export($c27c3f0399d7391c$exports, "toCalendarDateTime", () => $c27c3f0399d7391c$export$b21e0b124e224484);
$parcel$export($c27c3f0399d7391c$exports, "toDate", () => $c27c3f0399d7391c$export$e67a095c620b86fe);
$parcel$export($c27c3f0399d7391c$exports, "fromAbsolute", () => $c27c3f0399d7391c$export$1b96692a1ba042ac);
$parcel$export($c27c3f0399d7391c$exports, "fromDate", () => $c27c3f0399d7391c$export$e57ff100d91bd4b9);
$parcel$export($c27c3f0399d7391c$exports, "fromDateToLocal", () => $c27c3f0399d7391c$export$d7f92bcd3596b086);
$parcel$export($c27c3f0399d7391c$exports, "toCalendarDate", () => $c27c3f0399d7391c$export$93522d1a439f3617);
$parcel$export($c27c3f0399d7391c$exports, "toDateFields", () => $c27c3f0399d7391c$export$6f4d78149f3f53ac);
$parcel$export($c27c3f0399d7391c$exports, "toTimeFields", () => $c27c3f0399d7391c$export$4d0393e732857be5);
$parcel$export($c27c3f0399d7391c$exports, "toTime", () => $c27c3f0399d7391c$export$d33f79e3ffc3dc83);
$parcel$export($c27c3f0399d7391c$exports, "toZoned", () => $c27c3f0399d7391c$export$84c95a83c799e074);
$parcel$export($c27c3f0399d7391c$exports, "toTimeZone", () => $c27c3f0399d7391c$export$538b00033cc11c75);
$parcel$export($c27c3f0399d7391c$exports, "zonedToDate", () => $c27c3f0399d7391c$export$83aac07b4c37b25);
$parcel$export($c27c3f0399d7391c$exports, "toLocalTimeZone", () => $c27c3f0399d7391c$export$d9b67bc93c097491);

var $cd73a3ba4ef2cccc$exports = {};

$parcel$export($cd73a3ba4ef2cccc$exports, "isSameDay", () => $cd73a3ba4ef2cccc$export$ea39ec197993aef0);
$parcel$export($cd73a3ba4ef2cccc$exports, "isSameMonth", () => $cd73a3ba4ef2cccc$export$a18c89cbd24170ff);
$parcel$export($cd73a3ba4ef2cccc$exports, "startOfMonth", () => $cd73a3ba4ef2cccc$export$a5a3b454ada2268e);
$parcel$export($cd73a3ba4ef2cccc$exports, "isSameYear", () => $cd73a3ba4ef2cccc$export$5841f9eb9773f25f);
$parcel$export($cd73a3ba4ef2cccc$exports, "startOfYear", () => $cd73a3ba4ef2cccc$export$f91e89d3d0406102);
$parcel$export($cd73a3ba4ef2cccc$exports, "isEqualDay", () => $cd73a3ba4ef2cccc$export$91b62ebf2ba703ee);
$parcel$export($cd73a3ba4ef2cccc$exports, "isEqualMonth", () => $cd73a3ba4ef2cccc$export$5a8da0c44a3afdf2);
$parcel$export($cd73a3ba4ef2cccc$exports, "isEqualYear", () => $cd73a3ba4ef2cccc$export$ea840f5a6dda8147);
$parcel$export($cd73a3ba4ef2cccc$exports, "isToday", () => $cd73a3ba4ef2cccc$export$629b0a497aa65267);
$parcel$export($cd73a3ba4ef2cccc$exports, "today", () => $cd73a3ba4ef2cccc$export$d0bdf45af03a6ea3);
$parcel$export($cd73a3ba4ef2cccc$exports, "getDayOfWeek", () => $cd73a3ba4ef2cccc$export$2061056d06d7cdf7);
$parcel$export($cd73a3ba4ef2cccc$exports, "now", () => $cd73a3ba4ef2cccc$export$461939dd4422153);
$parcel$export($cd73a3ba4ef2cccc$exports, "compareDate", () => $cd73a3ba4ef2cccc$export$68781ddf31c0090f);
$parcel$export($cd73a3ba4ef2cccc$exports, "compareTime", () => $cd73a3ba4ef2cccc$export$c19a80a9721b80f6);
$parcel$export($cd73a3ba4ef2cccc$exports, "getHoursInDay", () => $cd73a3ba4ef2cccc$export$126c91c941de7e);
$parcel$export($cd73a3ba4ef2cccc$exports, "getLocalTimeZone", () => $cd73a3ba4ef2cccc$export$aa8b41735afcabd2);
$parcel$export($cd73a3ba4ef2cccc$exports, "endOfMonth", () => $cd73a3ba4ef2cccc$export$a2258d9c4118825c);
$parcel$export($cd73a3ba4ef2cccc$exports, "endOfYear", () => $cd73a3ba4ef2cccc$export$8b7aa55c66d5569e);
$parcel$export($cd73a3ba4ef2cccc$exports, "getMinimumMonthInYear", () => $cd73a3ba4ef2cccc$export$5412ac11713b72ad);
$parcel$export($cd73a3ba4ef2cccc$exports, "getMinimumDayInMonth", () => $cd73a3ba4ef2cccc$export$b2f4953d301981d5);
$parcel$export($cd73a3ba4ef2cccc$exports, "startOfWeek", () => $cd73a3ba4ef2cccc$export$42c81a444fbfb5d4);
$parcel$export($cd73a3ba4ef2cccc$exports, "endOfWeek", () => $cd73a3ba4ef2cccc$export$ef8b6d9133084f4e);
$parcel$export($cd73a3ba4ef2cccc$exports, "getWeeksInMonth", () => $cd73a3ba4ef2cccc$export$ccc1b2479e7dd654);
$parcel$export($cd73a3ba4ef2cccc$exports, "minDate", () => $cd73a3ba4ef2cccc$export$5c333a116e949cdd);
$parcel$export($cd73a3ba4ef2cccc$exports, "maxDate", () => $cd73a3ba4ef2cccc$export$a75f2bff57811055);
$parcel$export($cd73a3ba4ef2cccc$exports, "isWeekend", () => $cd73a3ba4ef2cccc$export$618d60ea299da42);
$parcel$export($cd73a3ba4ef2cccc$exports, "isWeekday", () => $cd73a3ba4ef2cccc$export$ee9d87258e1d19ed);

const $ed456c08525bde7f$export$7a5acbd77d414bd9 = {
    '001': 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AT: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1
};


function $cd73a3ba4ef2cccc$export$ea39ec197993aef0(a, b) {
    b = $c27c3f0399d7391c$export$b4a036af3fc0b032(b, a.calendar);
    return a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $cd73a3ba4ef2cccc$export$a18c89cbd24170ff(a, b) {
    b = $c27c3f0399d7391c$export$b4a036af3fc0b032(b, a.calendar);
    // In the Japanese calendar, months can span multiple eras/years, so only compare the first of the month.
    a = $cd73a3ba4ef2cccc$export$a5a3b454ada2268e(a);
    b = $cd73a3ba4ef2cccc$export$a5a3b454ada2268e(b);
    return a.era === b.era && a.year === b.year && a.month === b.month;
}
function $cd73a3ba4ef2cccc$export$5841f9eb9773f25f(a, b) {
    b = $c27c3f0399d7391c$export$b4a036af3fc0b032(b, a.calendar);
    a = $cd73a3ba4ef2cccc$export$f91e89d3d0406102(a);
    b = $cd73a3ba4ef2cccc$export$f91e89d3d0406102(b);
    return a.era === b.era && a.year === b.year;
}
function $cd73a3ba4ef2cccc$export$91b62ebf2ba703ee(a, b) {
    return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $cd73a3ba4ef2cccc$export$5a8da0c44a3afdf2(a, b) {
    a = $cd73a3ba4ef2cccc$export$a5a3b454ada2268e(a);
    b = $cd73a3ba4ef2cccc$export$a5a3b454ada2268e(b);
    return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year && a.month === b.month;
}
function $cd73a3ba4ef2cccc$export$ea840f5a6dda8147(a, b) {
    a = $cd73a3ba4ef2cccc$export$f91e89d3d0406102(a);
    b = $cd73a3ba4ef2cccc$export$f91e89d3d0406102(b);
    return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year;
}
function $cd73a3ba4ef2cccc$export$629b0a497aa65267(date, timeZone) {
    return $cd73a3ba4ef2cccc$export$ea39ec197993aef0(date, $cd73a3ba4ef2cccc$export$d0bdf45af03a6ea3(timeZone));
}
function $cd73a3ba4ef2cccc$export$2061056d06d7cdf7(date, locale) {
    let julian = date.calendar.toJulianDay(date);
    // If julian is negative, then julian % 7 will be negative, so we adjust
    // accordingly.  Julian day 0 is Monday.
    let dayOfWeek = Math.ceil(julian + 1 - $cd73a3ba4ef2cccc$var$getWeekStart(locale)) % 7;
    if (dayOfWeek < 0) dayOfWeek += 7;
    return dayOfWeek;
}
function $cd73a3ba4ef2cccc$export$461939dd4422153(timeZone) {
    return $c27c3f0399d7391c$export$1b96692a1ba042ac(Date.now(), timeZone);
}
function $cd73a3ba4ef2cccc$export$d0bdf45af03a6ea3(timeZone) {
    return $c27c3f0399d7391c$export$93522d1a439f3617($cd73a3ba4ef2cccc$export$461939dd4422153(timeZone));
}
function $cd73a3ba4ef2cccc$export$68781ddf31c0090f(a, b) {
    return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $cd73a3ba4ef2cccc$export$c19a80a9721b80f6(a, b) {
    return $cd73a3ba4ef2cccc$var$timeToMs(a) - $cd73a3ba4ef2cccc$var$timeToMs(b);
}
function $cd73a3ba4ef2cccc$var$timeToMs(a) {
    return a.hour * 3600000 + a.minute * 60000 + a.second * 1000 + a.millisecond;
}
function $cd73a3ba4ef2cccc$export$126c91c941de7e(a, timeZone) {
    let ms = $c27c3f0399d7391c$export$5107c82f94518f5c(a, timeZone);
    let tomorrow = a.add({
        days: 1
    });
    let tomorrowMs = $c27c3f0399d7391c$export$5107c82f94518f5c(tomorrow, timeZone);
    return (tomorrowMs - ms) / 3600000;
}
let $cd73a3ba4ef2cccc$var$localTimeZone = null;
function $cd73a3ba4ef2cccc$export$aa8b41735afcabd2() {
    // TODO: invalidate this somehow?
    if ($cd73a3ba4ef2cccc$var$localTimeZone == null) $cd73a3ba4ef2cccc$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    return $cd73a3ba4ef2cccc$var$localTimeZone;
}
function $cd73a3ba4ef2cccc$export$a5a3b454ada2268e(date) {
    // Use `subtract` instead of `set` so we don't get constrained in an era.
    return date.subtract({
        days: date.day - 1
    });
}
function $cd73a3ba4ef2cccc$export$a2258d9c4118825c(date) {
    return date.add({
        days: date.calendar.getDaysInMonth(date) - date.day
    });
}
function $cd73a3ba4ef2cccc$export$f91e89d3d0406102(date) {
    return $cd73a3ba4ef2cccc$export$a5a3b454ada2268e(date.subtract({
        months: date.month - 1
    }));
}
function $cd73a3ba4ef2cccc$export$8b7aa55c66d5569e(date) {
    return $cd73a3ba4ef2cccc$export$a2258d9c4118825c(date.add({
        months: date.calendar.getMonthsInYear(date) - date.month
    }));
}
function $cd73a3ba4ef2cccc$export$5412ac11713b72ad(date) {
    if (date.calendar.getMinimumMonthInYear) return date.calendar.getMinimumMonthInYear(date);
    return 1;
}
function $cd73a3ba4ef2cccc$export$b2f4953d301981d5(date) {
    if (date.calendar.getMinimumDayInMonth) return date.calendar.getMinimumDayInMonth(date);
    return 1;
}
function $cd73a3ba4ef2cccc$export$42c81a444fbfb5d4(date, locale) {
    let dayOfWeek = $cd73a3ba4ef2cccc$export$2061056d06d7cdf7(date, locale);
    return date.subtract({
        days: dayOfWeek
    });
}
function $cd73a3ba4ef2cccc$export$ef8b6d9133084f4e(date, locale) {
    return $cd73a3ba4ef2cccc$export$42c81a444fbfb5d4(date, locale).add({
        days: 6
    });
}
const $cd73a3ba4ef2cccc$var$cachedRegions = new Map();
function $cd73a3ba4ef2cccc$var$getRegion(locale) {
    // If the Intl.Locale API is available, use it to get the region for the locale.
    // @ts-ignore
    if (Intl.Locale) {
        // Constructing an Intl.Locale is expensive, so cache the result.
        let region = $cd73a3ba4ef2cccc$var$cachedRegions.get(locale);
        if (!region) {
            // @ts-ignore
            region = new Intl.Locale(locale).maximize().region;
            $cd73a3ba4ef2cccc$var$cachedRegions.set(locale, region);
        }
        return region;
    }
    // If not, just try splitting the string.
    // If the second part of the locale string is 'u',
    // then this is a unicode extension, so ignore it.
    // Otherwise, it should be the region.
    let part = locale.split('-')[1];
    return part === 'u' ? null : part;
}
function $cd73a3ba4ef2cccc$var$getWeekStart(locale) {
    // TODO: use Intl.Locale for this once browsers support the weekInfo property
    // https://github.com/tc39/proposal-intl-locale-info
    let region = $cd73a3ba4ef2cccc$var$getRegion(locale);
    return $ed456c08525bde7f$export$7a5acbd77d414bd9[region] || 0;
}
function $cd73a3ba4ef2cccc$export$ccc1b2479e7dd654(date, locale) {
    let days = date.calendar.getDaysInMonth(date);
    return Math.ceil(($cd73a3ba4ef2cccc$export$2061056d06d7cdf7($cd73a3ba4ef2cccc$export$a5a3b454ada2268e(date), locale) + days) / 7);
}
function $cd73a3ba4ef2cccc$export$5c333a116e949cdd(a, b) {
    return a.compare(b) <= 0 ? a : b;
}
function $cd73a3ba4ef2cccc$export$a75f2bff57811055(a, b) {
    return a.compare(b) >= 0 ? a : b;
}
const $cd73a3ba4ef2cccc$var$WEEKEND_DATA = {
    AF: [
        4,
        5
    ],
    AE: [
        5,
        6
    ],
    BH: [
        5,
        6
    ],
    DZ: [
        5,
        6
    ],
    EG: [
        5,
        6
    ],
    IL: [
        5,
        6
    ],
    IQ: [
        5,
        6
    ],
    IR: [
        5,
        5
    ],
    JO: [
        5,
        6
    ],
    KW: [
        5,
        6
    ],
    LY: [
        5,
        6
    ],
    OM: [
        5,
        6
    ],
    QA: [
        5,
        6
    ],
    SA: [
        5,
        6
    ],
    SD: [
        5,
        6
    ],
    SY: [
        5,
        6
    ],
    YE: [
        5,
        6
    ]
};
function $cd73a3ba4ef2cccc$export$618d60ea299da42(date, locale) {
    let julian = date.calendar.toJulianDay(date);
    // If julian is negative, then julian % 7 will be negative, so we adjust
    // accordingly.  Julian day 0 is Monday.
    let dayOfWeek = Math.ceil(julian + 1) % 7;
    if (dayOfWeek < 0) dayOfWeek += 7;
    let region = $cd73a3ba4ef2cccc$var$getRegion(locale);
    // Use Intl.Locale for this once weekInfo is supported.
    // https://github.com/tc39/proposal-intl-locale-info
    let [start, end] = $cd73a3ba4ef2cccc$var$WEEKEND_DATA[region] || [
        6,
        0
    ];
    return dayOfWeek === start || dayOfWeek === end;
}
function $cd73a3ba4ef2cccc$export$ee9d87258e1d19ed(date, locale) {
    return !$cd73a3ba4ef2cccc$export$618d60ea299da42(date, locale);
}




function $38ff99aeedf86c8f$export$842a2cf37af977e1(amount, numerator) {
    return amount - numerator * Math.floor(amount / numerator);
}
function $38ff99aeedf86c8f$export$784d13d8ee351f07(date) {
    if (date.era) return new $598186d9e30d5ae4$export$99faa760c7908e4f(date.calendar, date.era, date.year, date.month, date.day);
    else return new $598186d9e30d5ae4$export$99faa760c7908e4f(date.calendar, date.year, date.month, date.day);
}
function $38ff99aeedf86c8f$export$27fa0172ae2644b3(date) {
    if (date.era) return new $598186d9e30d5ae4$export$ca871e8dbb80966f(date.calendar, date.era, date.year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
    else return new $598186d9e30d5ae4$export$ca871e8dbb80966f(date.calendar, date.year, date.month, date.day, date.hour, date.minute, date.second);
}


const $701770b0bf6ae333$var$EPOCH = 1721426; // 001/01/03 Julian C.E.
function $701770b0bf6ae333$export$f297eb839006d339(year, month, day) {
    let y1 = year - 1;
    let monthOffset = -2;
    if (month <= 2) monthOffset = 0;
    else if ($701770b0bf6ae333$export$553d7fa8e3805fc0(year)) monthOffset = -1;
    return $701770b0bf6ae333$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $701770b0bf6ae333$export$553d7fa8e3805fc0(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
const $701770b0bf6ae333$var$daysInMonth = {
    standard: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    leapyear: [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
};
class $701770b0bf6ae333$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let jd0 = jd;
        let depoch = jd0 - $701770b0bf6ae333$var$EPOCH;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = $38ff99aeedf86c8f$export$842a2cf37af977e1(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = $38ff99aeedf86c8f$export$842a2cf37af977e1(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = $38ff99aeedf86c8f$export$842a2cf37af977e1(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let year = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
        let yearDay = jd0 - $701770b0bf6ae333$export$f297eb839006d339(year, 1, 1);
        let leapAdj = 2;
        if (jd0 < $701770b0bf6ae333$export$f297eb839006d339(year, 3, 1)) leapAdj = 0;
        else if ($701770b0bf6ae333$export$553d7fa8e3805fc0(year)) leapAdj = 1;
        let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
        let day = jd0 - $701770b0bf6ae333$export$f297eb839006d339(year, month, 1) + 1;
        return new $598186d9e30d5ae4$export$99faa760c7908e4f(this, year, month, day);
    }
    toJulianDay(date) {
        return $701770b0bf6ae333$export$f297eb839006d339(date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $701770b0bf6ae333$var$daysInMonth[$701770b0bf6ae333$export$553d7fa8e3805fc0(date.year) ? 'leapyear' : 'standard'][date.month - 1];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMonthsInYear(date) {
        return 12;
    }
    getDaysInYear(date) {
        return $701770b0bf6ae333$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearsInEra(date) {
        return 9999;
    }
    getEras() {
        return [
            'BC',
            'AD'
        ];
    }
    getYearsToAdd(date, years) {
        return date.era === 'BC' ? -years : years;
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BC' ? 'AD' : 'BC';
            date.year = 1 - date.year;
        }
    }
    constructor(){
        this.identifier = 'gregory';
    }
}


function $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(date) {
    date = $c27c3f0399d7391c$export$b4a036af3fc0b032(date, new $701770b0bf6ae333$export$80ee6245ec4f29ec());
    return $c27c3f0399d7391c$var$epochFromParts(date.year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $c27c3f0399d7391c$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    let date = new Date();
    date.setUTCHours(hour, minute, second, millisecond);
    date.setUTCFullYear(year, month - 1, day);
    return date.getTime();
}
function $c27c3f0399d7391c$export$59c99f3515d3493f(ms, timeZone) {
    // Fast path: for local timezone, use native Date.
    if (timeZone === $cd73a3ba4ef2cccc$export$aa8b41735afcabd2()) return new Date(ms).getTimezoneOffset() * -60000;
    let { year: year , month: month , day: day , hour: hour , minute: minute , second: second  } = $c27c3f0399d7391c$var$getTimeZoneParts(ms, timeZone);
    let utc = $c27c3f0399d7391c$var$epochFromParts(year, month, day, hour, minute, second, 0);
    return utc - Math.floor(ms / 1000) * 1000;
}
const $c27c3f0399d7391c$var$formattersByTimeZone = new Map();
function $c27c3f0399d7391c$var$getTimeZoneParts(ms, timeZone) {
    let formatter = $c27c3f0399d7391c$var$formattersByTimeZone.get(timeZone);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            hour12: false,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        $c27c3f0399d7391c$var$formattersByTimeZone.set(timeZone, formatter);
    }
    let parts = formatter.formatToParts(new Date(ms));
    let namedParts = {
    };
    for (let part of parts)if (part.type !== 'literal') namedParts[part.type] = part.value;
    return {
        year: namedParts.era === 'BC' ? -namedParts.year + 1 : +namedParts.year,
        month: +namedParts.month,
        day: +namedParts.day,
        hour: namedParts.hour === '24' ? 0 : +namedParts.hour,
        minute: +namedParts.minute,
        second: +namedParts.second
    };
}
const $c27c3f0399d7391c$var$DAYMILLIS = 86400000;
function $c27c3f0399d7391c$export$136f38efe7caf549(date, timeZone) {
    let ms = $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(date);
    let earlier = ms - $c27c3f0399d7391c$export$59c99f3515d3493f(ms - $c27c3f0399d7391c$var$DAYMILLIS, timeZone);
    let later = ms - $c27c3f0399d7391c$export$59c99f3515d3493f(ms + $c27c3f0399d7391c$var$DAYMILLIS, timeZone);
    return $c27c3f0399d7391c$var$getValidWallTimes(date, timeZone, earlier, later);
}
function $c27c3f0399d7391c$var$getValidWallTimes(date, timeZone, earlier, later) {
    let found = earlier === later ? [
        earlier
    ] : [
        earlier,
        later
    ];
    return found.filter((absolute)=>$c27c3f0399d7391c$var$isValidWallTime(date, timeZone, absolute)
    );
}
function $c27c3f0399d7391c$var$isValidWallTime(date, timeZone, absolute) {
    let parts = $c27c3f0399d7391c$var$getTimeZoneParts(absolute, timeZone);
    return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $c27c3f0399d7391c$export$5107c82f94518f5c(date, timeZone, disambiguation = 'compatible') {
    let dateTime = $c27c3f0399d7391c$export$b21e0b124e224484(date);
    // Fast path: if the time zone is the local timezone and disambiguation is compatible, use native Date.
    if (timeZone === $cd73a3ba4ef2cccc$export$aa8b41735afcabd2() && disambiguation === 'compatible') {
        dateTime = $c27c3f0399d7391c$export$b4a036af3fc0b032(dateTime, new $701770b0bf6ae333$export$80ee6245ec4f29ec());
        // Don't use Date constructor here because two-digit years are interpreted in the 20th century.
        let date = new Date();
        date.setFullYear(dateTime.year, dateTime.month - 1, dateTime.day);
        date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
        return date.getTime();
    }
    let ms = $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(dateTime);
    let offsetBefore = $c27c3f0399d7391c$export$59c99f3515d3493f(ms - $c27c3f0399d7391c$var$DAYMILLIS, timeZone);
    let offsetAfter = $c27c3f0399d7391c$export$59c99f3515d3493f(ms + $c27c3f0399d7391c$var$DAYMILLIS, timeZone);
    let valid = $c27c3f0399d7391c$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
    if (valid.length === 1) return valid[0];
    if (valid.length > 1) switch(disambiguation){
        // 'compatible' means 'earlier' for "fall back" transitions
        case 'compatible':
        case 'earlier':
            return valid[0];
        case 'later':
            return valid[valid.length - 1];
        case 'reject':
            throw new RangeError('Multiple possible absolute times found');
    }
    switch(disambiguation){
        case 'earlier':
            return Math.min(ms - offsetBefore, ms - offsetAfter);
        // 'compatible' means 'later' for "spring forward" transitions
        case 'compatible':
        case 'later':
            return Math.max(ms - offsetBefore, ms - offsetAfter);
        case 'reject':
            throw new RangeError('No such absolute time found');
    }
}
function $c27c3f0399d7391c$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = 'compatible') {
    return new Date($c27c3f0399d7391c$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $c27c3f0399d7391c$export$1b96692a1ba042ac(ms, timeZone) {
    let offset = $c27c3f0399d7391c$export$59c99f3515d3493f(ms, timeZone);
    let date = new Date(ms + offset);
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let hour = date.getUTCHours();
    let minute = date.getUTCMinutes();
    let second = date.getUTCSeconds();
    let millisecond = date.getUTCMilliseconds();
    return new $598186d9e30d5ae4$export$d3b7288e7994edea(year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $c27c3f0399d7391c$export$e57ff100d91bd4b9(date, timeZone) {
    return $c27c3f0399d7391c$export$1b96692a1ba042ac(date.getTime(), timeZone);
}
function $c27c3f0399d7391c$export$d7f92bcd3596b086(date) {
    return $c27c3f0399d7391c$export$e57ff100d91bd4b9(date, $cd73a3ba4ef2cccc$export$aa8b41735afcabd2());
}
function $c27c3f0399d7391c$export$93522d1a439f3617(dateTime) {
    return new $598186d9e30d5ae4$export$99faa760c7908e4f(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $c27c3f0399d7391c$export$6f4d78149f3f53ac(date) {
    return {
        era: date.era,
        year: date.year,
        month: date.month,
        day: date.day
    };
}
function $c27c3f0399d7391c$export$4d0393e732857be5(date) {
    return {
        hour: date.hour,
        minute: date.minute,
        second: date.second,
        millisecond: date.millisecond
    };
}
function $c27c3f0399d7391c$export$b21e0b124e224484(date, time) {
    let hour = 0, minute = 0, second = 0, millisecond = 0;
    if ('timeZone' in date) ({ hour: hour , minute: minute , second: second , millisecond: millisecond  } = date);
    else if ('hour' in date && !time) return date;
    if (time) ({ hour: hour , minute: minute , second: second , millisecond: millisecond  } = time);
    return new $598186d9e30d5ae4$export$ca871e8dbb80966f(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $c27c3f0399d7391c$export$d33f79e3ffc3dc83(dateTime) {
    return new $598186d9e30d5ae4$export$680ea196effce5f(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
}
function $c27c3f0399d7391c$export$b4a036af3fc0b032(date, calendar) {
    if (date.calendar.identifier === calendar.identifier) return date;
    let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
    let copy = date.copy();
    copy.calendar = calendar;
    copy.era = calendarDate.era;
    copy.year = calendarDate.year;
    copy.month = calendarDate.month;
    copy.day = calendarDate.day;
    return copy;
}
function $c27c3f0399d7391c$export$84c95a83c799e074(date, timeZone, disambiguation) {
    if (date instanceof $598186d9e30d5ae4$export$d3b7288e7994edea) {
        if (date.timeZone === timeZone) return date;
        return $c27c3f0399d7391c$export$538b00033cc11c75(date, timeZone);
    }
    let ms = $c27c3f0399d7391c$export$5107c82f94518f5c(date, timeZone, disambiguation);
    return $c27c3f0399d7391c$export$1b96692a1ba042ac(ms, timeZone);
}
function $c27c3f0399d7391c$export$83aac07b4c37b25(date) {
    let ms = $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(date) - date.offset;
    return new Date(ms);
}
function $c27c3f0399d7391c$export$538b00033cc11c75(date, timeZone) {
    let ms = $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(date) - date.offset;
    return $c27c3f0399d7391c$export$b4a036af3fc0b032($c27c3f0399d7391c$export$1b96692a1ba042ac(ms, timeZone), date.calendar);
}
function $c27c3f0399d7391c$export$d9b67bc93c097491(date) {
    return $c27c3f0399d7391c$export$538b00033cc11c75(date, $cd73a3ba4ef2cccc$export$aa8b41735afcabd2());
}



const $e4f1432b211ba340$var$ONE_HOUR = 3600000;
function $e4f1432b211ba340$export$e16d8520af44a096(date, duration) {
    let mutableDate = date.copy();
    let days = 'hour' in date ? $e4f1432b211ba340$var$addTimeFields(date, duration) : 0;
    $e4f1432b211ba340$var$addYears(mutableDate, duration.years || 0);
    if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
    mutableDate.month += duration.months || 0;
    $e4f1432b211ba340$var$balanceYearMonth(mutableDate);
    $e4f1432b211ba340$var$constrainMonthDay(mutableDate);
    mutableDate.day += (duration.weeks || 0) * 7;
    mutableDate.day += duration.days || 0;
    mutableDate.day += days;
    $e4f1432b211ba340$var$balanceDay(mutableDate);
    if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
    return mutableDate;
}
function $e4f1432b211ba340$var$addYears(date, years) {
    if (date.calendar.getYearsToAdd) years = date.calendar.getYearsToAdd(date, years);
    date.year += years;
}
function $e4f1432b211ba340$var$balanceYearMonth(date) {
    while(date.month < 1){
        $e4f1432b211ba340$var$addYears(date, -1);
        date.month += date.calendar.getMonthsInYear(date);
    }
    let monthsInYear = 0;
    while(date.month > (monthsInYear = date.calendar.getMonthsInYear(date))){
        date.month -= monthsInYear;
        $e4f1432b211ba340$var$addYears(date, 1);
    }
}
function $e4f1432b211ba340$var$balanceDay(date) {
    while(date.day < 1){
        date.month--;
        $e4f1432b211ba340$var$balanceYearMonth(date);
        date.day += date.calendar.getDaysInMonth(date);
    }
    while(date.day > date.calendar.getDaysInMonth(date)){
        date.day -= date.calendar.getDaysInMonth(date);
        date.month++;
        $e4f1432b211ba340$var$balanceYearMonth(date);
    }
}
function $e4f1432b211ba340$var$constrainMonthDay(date) {
    date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
    date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $e4f1432b211ba340$export$c4e2ecac49351ef2(date) {
    if (date.calendar.constrainDate) date.calendar.constrainDate(date);
    date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
    $e4f1432b211ba340$var$constrainMonthDay(date);
}
function $e4f1432b211ba340$export$3e2544e88a25bff8(duration) {
    let inverseDuration = {
    };
    for(let key in duration)if (typeof duration[key] === 'number') inverseDuration[key] = -duration[key];
    return inverseDuration;
}
function $e4f1432b211ba340$export$4e2d2ead65e5f7e3(date, duration) {
    return $e4f1432b211ba340$export$e16d8520af44a096(date, $e4f1432b211ba340$export$3e2544e88a25bff8(duration));
}
function $e4f1432b211ba340$export$adaa4cf7ef1b65be(date, fields) {
    let mutableDate = date.copy();
    if (fields.era != null) mutableDate.era = fields.era;
    if (fields.year != null) mutableDate.year = fields.year;
    if (fields.month != null) mutableDate.month = fields.month;
    if (fields.day != null) mutableDate.day = fields.day;
    $e4f1432b211ba340$export$c4e2ecac49351ef2(mutableDate);
    return mutableDate;
}
function $e4f1432b211ba340$export$e5d5e1c1822b6e56(value, fields) {
    let mutableValue = value.copy();
    if (fields.hour != null) mutableValue.hour = fields.hour;
    if (fields.minute != null) mutableValue.minute = fields.minute;
    if (fields.second != null) mutableValue.second = fields.second;
    if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
    $e4f1432b211ba340$export$7555de1e070510cb(mutableValue);
    return mutableValue;
}
function $e4f1432b211ba340$var$balanceTime(time) {
    time.second += Math.floor(time.millisecond / 1000);
    time.millisecond = $e4f1432b211ba340$var$nonNegativeMod(time.millisecond, 1000);
    time.minute += Math.floor(time.second / 60);
    time.second = $e4f1432b211ba340$var$nonNegativeMod(time.second, 60);
    time.hour += Math.floor(time.minute / 60);
    time.minute = $e4f1432b211ba340$var$nonNegativeMod(time.minute, 60);
    let days = Math.floor(time.hour / 24);
    time.hour = $e4f1432b211ba340$var$nonNegativeMod(time.hour, 24);
    return days;
}
function $e4f1432b211ba340$export$7555de1e070510cb(time) {
    time.millisecond = Math.max(0, Math.min(time.millisecond, 1000));
    time.second = Math.max(0, Math.min(time.second, 59));
    time.minute = Math.max(0, Math.min(time.minute, 59));
    time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $e4f1432b211ba340$var$nonNegativeMod(a, b) {
    let result = a % b;
    if (result < 0) result += b;
    return result;
}
function $e4f1432b211ba340$var$addTimeFields(time, duration) {
    time.hour += duration.hours || 0;
    time.minute += duration.minutes || 0;
    time.second += duration.seconds || 0;
    time.millisecond += duration.milliseconds || 0;
    return $e4f1432b211ba340$var$balanceTime(time);
}
function $e4f1432b211ba340$export$7ed87b6bc2506470(time, duration) {
    let res = time.copy();
    $e4f1432b211ba340$var$addTimeFields(res, duration);
    return res;
}
function $e4f1432b211ba340$export$fe34d3a381cd7501(time, duration) {
    return $e4f1432b211ba340$export$7ed87b6bc2506470(time, $e4f1432b211ba340$export$3e2544e88a25bff8(duration));
}
function $e4f1432b211ba340$export$d52ced6badfb9a4c(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'era':
            {
                let eras = value.calendar.getEras();
                let eraIndex = eras.indexOf(value.era);
                if (eraIndex < 0) throw new Error('Invalid era: ' + value.era);
                eraIndex = $e4f1432b211ba340$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options?.round);
                mutable.era = eras[eraIndex];
                // Constrain the year and other fields within the era, so the era doesn't change when we balance below.
                $e4f1432b211ba340$export$c4e2ecac49351ef2(mutable);
                break;
            }
        case 'year':
            if (mutable.calendar.getYearsToAdd) amount = mutable.calendar.getYearsToAdd(mutable, amount);
            // The year field should not cycle within the era as that can cause weird behavior affecting other fields.
            // We need to also allow values < 1 so that decrementing goes to the previous era. If we get -Infinity back
            // we know we wrapped around after reaching 9999 (the maximum), so set the year back to 1.
            mutable.year = $e4f1432b211ba340$var$cycleValue(value.year, amount, -Infinity, 9999, options?.round);
            if (mutable.year === -Infinity) mutable.year = 1;
            if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
            break;
        case 'month':
            mutable.month = $e4f1432b211ba340$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options?.round);
            break;
        case 'day':
            mutable.day = $e4f1432b211ba340$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options?.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
    $e4f1432b211ba340$export$c4e2ecac49351ef2(mutable);
    return mutable;
}
function $e4f1432b211ba340$export$dd02b3e0007dfe28(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'hour':
            {
                let hours = value.hour;
                let min = 0;
                let max = 23;
                if (options?.hourCycle === 12) {
                    let isPM = hours >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                mutable.hour = $e4f1432b211ba340$var$cycleValue(hours, amount, min, max, options?.round);
                break;
            }
        case 'minute':
            mutable.minute = $e4f1432b211ba340$var$cycleValue(value.minute, amount, 0, 59, options?.round);
            break;
        case 'second':
            mutable.second = $e4f1432b211ba340$var$cycleValue(value.second, amount, 0, 59, options?.round);
            break;
        case 'millisecond':
            mutable.millisecond = $e4f1432b211ba340$var$cycleValue(value.millisecond, amount, 0, 999, options?.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    return mutable;
}
function $e4f1432b211ba340$var$cycleValue(value, amount, min, max, round = false) {
    if (round) {
        value += Math.sign(amount);
        if (value < min) value = max;
        let div = Math.abs(amount);
        if (amount > 0) value = Math.ceil(value / div) * div;
        else value = Math.floor(value / div) * div;
        if (value > max) value = min;
    } else {
        value += amount;
        if (value < min) value = max - (min - value - 1);
        else if (value > max) value = min + (value - max - 1);
    }
    return value;
}
function $e4f1432b211ba340$export$96b1d28349274637(dateTime, duration) {
    let ms;
    if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.days != null && duration.days !== 0) {
        let res = $e4f1432b211ba340$export$e16d8520af44a096($c27c3f0399d7391c$export$b21e0b124e224484(dateTime), {
            years: duration.years,
            months: duration.months,
            days: duration.days
        });
        // Changing the date may change the timezone offset, so we need to recompute
        // using the 'compatible' disambiguation.
        ms = $c27c3f0399d7391c$export$5107c82f94518f5c(res, dateTime.timeZone);
    } else // Otherwise, preserve the offset of the original date.
    ms = $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
    // Perform time manipulation in milliseconds rather than on the original time fields to account for DST.
    // For example, adding one hour during a DST transition may result in the hour field staying the same or
    // skipping an hour. This results in the offset field changing value instead of the specified field.
    ms += duration.milliseconds || 0;
    ms += (duration.seconds || 0) * 1000;
    ms += (duration.minutes || 0) * 60000;
    ms += (duration.hours || 0) * 3600000;
    let res = $c27c3f0399d7391c$export$1b96692a1ba042ac(ms, dateTime.timeZone);
    return $c27c3f0399d7391c$export$b4a036af3fc0b032(res, dateTime.calendar);
}
function $e4f1432b211ba340$export$6814caac34ca03c7(dateTime, duration) {
    return $e4f1432b211ba340$export$96b1d28349274637(dateTime, $e4f1432b211ba340$export$3e2544e88a25bff8(duration));
}
function $e4f1432b211ba340$export$9a297d111fc86b79(dateTime, field, amount, options) {
    // For date fields, we want the time to remain consistent and the UTC offset to potentially change to account for DST changes.
    // For time fields, we want the time to change by the amount given. This may result in the hour field staying the same, but the UTC
    // offset changing in the case of a backward DST transition, or skipping an hour in the case of a forward DST transition.
    switch(field){
        case 'hour':
            {
                let min = 0;
                let max = 23;
                if (options?.hourCycle === 12) {
                    let isPM = dateTime.hour >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                // The minimum and maximum hour may be affected by daylight saving time.
                // For example, it might jump forward at midnight, and skip 1am.
                // Or it might end at midnight and repeat the 11pm hour. To handle this, we get
                // the possible absolute times for the min and max, and find the maximum range
                // that is within the current day.
                let plainDateTime = $c27c3f0399d7391c$export$b21e0b124e224484(dateTime);
                let minDate = $c27c3f0399d7391c$export$b4a036af3fc0b032($e4f1432b211ba340$export$e5d5e1c1822b6e56(plainDateTime, {
                    hour: min
                }), new $701770b0bf6ae333$export$80ee6245ec4f29ec());
                let minAbsolute = [
                    $c27c3f0399d7391c$export$5107c82f94518f5c(minDate, dateTime.timeZone, 'earlier'),
                    $c27c3f0399d7391c$export$5107c82f94518f5c(minDate, dateTime.timeZone, 'later')
                ].filter((ms)=>$c27c3f0399d7391c$export$1b96692a1ba042ac(ms, dateTime.timeZone).day === minDate.day
                )[0];
                let maxDate = $c27c3f0399d7391c$export$b4a036af3fc0b032($e4f1432b211ba340$export$e5d5e1c1822b6e56(plainDateTime, {
                    hour: max
                }), new $701770b0bf6ae333$export$80ee6245ec4f29ec());
                let maxAbsolute = [
                    $c27c3f0399d7391c$export$5107c82f94518f5c(maxDate, dateTime.timeZone, 'earlier'),
                    $c27c3f0399d7391c$export$5107c82f94518f5c(maxDate, dateTime.timeZone, 'later')
                ].filter((ms)=>$c27c3f0399d7391c$export$1b96692a1ba042ac(ms, dateTime.timeZone).day === maxDate.day
                ).pop();
                // Since hours may repeat, we need to operate on the absolute time in milliseconds.
                // This is done in hours from the Unix epoch so that cycleValue works correctly,
                // and then converted back to milliseconds.
                let ms1 = $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
                let hours = Math.floor(ms1 / $e4f1432b211ba340$var$ONE_HOUR);
                let remainder = ms1 % $e4f1432b211ba340$var$ONE_HOUR;
                ms1 = $e4f1432b211ba340$var$cycleValue(hours, amount, Math.floor(minAbsolute / $e4f1432b211ba340$var$ONE_HOUR), Math.floor(maxAbsolute / $e4f1432b211ba340$var$ONE_HOUR), options?.round) * $e4f1432b211ba340$var$ONE_HOUR + remainder;
                // Now compute the new timezone offset, and convert the absolute time back to local time.
                return $c27c3f0399d7391c$export$b4a036af3fc0b032($c27c3f0399d7391c$export$1b96692a1ba042ac(ms1, dateTime.timeZone), dateTime.calendar);
            }
        case 'minute':
        case 'second':
        case 'millisecond':
            // @ts-ignore
            return $e4f1432b211ba340$export$dd02b3e0007dfe28(dateTime, field, amount, options);
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            {
                let res = $e4f1432b211ba340$export$d52ced6badfb9a4c($c27c3f0399d7391c$export$b21e0b124e224484(dateTime), field, amount, options);
                let ms = $c27c3f0399d7391c$export$5107c82f94518f5c(res, dateTime.timeZone);
                return $c27c3f0399d7391c$export$b4a036af3fc0b032($c27c3f0399d7391c$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
            }
        default:
            throw new Error('Unsupported field ' + field);
    }
}
function $e4f1432b211ba340$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
    // Set the date/time fields, and recompute the UTC offset to account for DST changes.
    // We also need to validate by converting back to a local time in case hours are skipped during forward DST transitions.
    let plainDateTime = $c27c3f0399d7391c$export$b21e0b124e224484(dateTime);
    let res = $e4f1432b211ba340$export$e5d5e1c1822b6e56($e4f1432b211ba340$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
    // If the resulting plain date time values are equal, return the original time.
    // We don't want to change the offset when setting the time to the same value.
    if (res.compare(plainDateTime) === 0) return dateTime;
    let ms = $c27c3f0399d7391c$export$5107c82f94518f5c(res, dateTime.timeZone, disambiguation);
    return $c27c3f0399d7391c$export$b4a036af3fc0b032($c27c3f0399d7391c$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
}



var $c3d184df86365cba$exports = {};

$parcel$export($c3d184df86365cba$exports, "parseTime", () => $c3d184df86365cba$export$c9698ec7f05a07e1);
$parcel$export($c3d184df86365cba$exports, "parseDate", () => $c3d184df86365cba$export$6b862160d295c8e);
$parcel$export($c3d184df86365cba$exports, "parseDateTime", () => $c3d184df86365cba$export$588937bcd60ade55);
$parcel$export($c3d184df86365cba$exports, "parseZonedDateTime", () => $c3d184df86365cba$export$fd7893f06e92a6a4);
$parcel$export($c3d184df86365cba$exports, "dateTimeToString", () => $c3d184df86365cba$export$4223de14708adc63);
$parcel$export($c3d184df86365cba$exports, "parseAbsolute", () => $c3d184df86365cba$export$5adfdab05168c219);
$parcel$export($c3d184df86365cba$exports, "parseAbsoluteToLocal", () => $c3d184df86365cba$export$8e384432362ed0f0);
$parcel$export($c3d184df86365cba$exports, "timeToString", () => $c3d184df86365cba$export$f59dee82248f5ad4);
$parcel$export($c3d184df86365cba$exports, "dateToString", () => $c3d184df86365cba$export$60dfd74aa96791bd);
$parcel$export($c3d184df86365cba$exports, "zonedDateTimeToString", () => $c3d184df86365cba$export$bf79f1ebf4b18792);




const $c3d184df86365cba$var$TIME_RE = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
const $c3d184df86365cba$var$DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const $c3d184df86365cba$var$DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
const $c3d184df86365cba$var$ZONED_DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::(\d{2}))?)?\[(.*?)\]$/;
const $c3d184df86365cba$var$ABSOLUTE_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::(\d{2}))?)|Z)$/;
function $c3d184df86365cba$export$c9698ec7f05a07e1(value) {
    let m = value.match($c3d184df86365cba$var$TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 time string: ' + value);
    return new $598186d9e30d5ae4$export$680ea196effce5f($c3d184df86365cba$var$parseNumber(m[1], 0, 23), m[2] ? $c3d184df86365cba$var$parseNumber(m[2], 0, 59) : 0, m[3] ? $c3d184df86365cba$var$parseNumber(m[3], 0, 59) : 0, m[4] ? $c3d184df86365cba$var$parseNumber(m[4], 0, Infinity) * 1000 : 0);
}
function $c3d184df86365cba$export$6b862160d295c8e(value) {
    let m = value.match($c3d184df86365cba$var$DATE_RE);
    if (!m) throw new Error('Invalid ISO 8601 date string: ' + value);
    let date = new $598186d9e30d5ae4$export$99faa760c7908e4f($c3d184df86365cba$var$parseNumber(m[1], 0, 9999), $c3d184df86365cba$var$parseNumber(m[2], 1, 12), 1);
    date.day = $c3d184df86365cba$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    return date;
}
function $c3d184df86365cba$export$588937bcd60ade55(value) {
    let m = value.match($c3d184df86365cba$var$DATE_TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let date = new $598186d9e30d5ae4$export$ca871e8dbb80966f($c3d184df86365cba$var$parseNumber(m[1], 1, 9999), $c3d184df86365cba$var$parseNumber(m[2], 1, 12), 1, m[4] ? $c3d184df86365cba$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $c3d184df86365cba$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $c3d184df86365cba$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $c3d184df86365cba$var$parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = $c3d184df86365cba$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    return date;
}
function $c3d184df86365cba$export$fd7893f06e92a6a4(value, disambiguation) {
    let m = value.match($c3d184df86365cba$var$ZONED_DATE_TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let date = new $598186d9e30d5ae4$export$d3b7288e7994edea($c3d184df86365cba$var$parseNumber(m[1], 1, 9999), $c3d184df86365cba$var$parseNumber(m[2], 1, 12), 1, m[10], 0, m[4] ? $c3d184df86365cba$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $c3d184df86365cba$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $c3d184df86365cba$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $c3d184df86365cba$var$parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = $c3d184df86365cba$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    let plainDateTime = $c27c3f0399d7391c$export$b21e0b124e224484(date);
    let ms;
    if (m[8]) {
        date.offset = $c3d184df86365cba$var$parseNumber(m[8], -23, 23) * 3600000 + $c3d184df86365cba$var$parseNumber(m[9] ?? '0', 0, 59) * 60000;
        ms = $c27c3f0399d7391c$export$bd4fb2bc8bb06fb(date) - date.offset;
        // Validate offset against parsed date.
        let absolutes = $c27c3f0399d7391c$export$136f38efe7caf549(plainDateTime, date.timeZone);
        if (!absolutes.includes(ms)) throw new Error(`Offset ${$c3d184df86365cba$var$offsetToString(date.offset)} is invalid for ${$c3d184df86365cba$export$4223de14708adc63(date)} in ${date.timeZone}`);
    } else // Convert to absolute and back to fix invalid times due to DST.
    ms = $c27c3f0399d7391c$export$5107c82f94518f5c($c27c3f0399d7391c$export$b21e0b124e224484(plainDateTime), date.timeZone, disambiguation);
    return $c27c3f0399d7391c$export$1b96692a1ba042ac(ms, date.timeZone);
}
function $c3d184df86365cba$export$5adfdab05168c219(value, timeZone) {
    let m = value.match($c3d184df86365cba$var$ABSOLUTE_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let date = new $598186d9e30d5ae4$export$d3b7288e7994edea($c3d184df86365cba$var$parseNumber(m[1], 1, 9999), $c3d184df86365cba$var$parseNumber(m[2], 1, 12), 1, timeZone, 0, m[4] ? $c3d184df86365cba$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $c3d184df86365cba$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $c3d184df86365cba$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $c3d184df86365cba$var$parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = $c3d184df86365cba$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    if (m[8]) date.offset = $c3d184df86365cba$var$parseNumber(m[8], -23, 23) * 3600000 + $c3d184df86365cba$var$parseNumber(m[9] ?? '0', 0, 59) * 60000;
    return $c27c3f0399d7391c$export$538b00033cc11c75(date, timeZone);
}
function $c3d184df86365cba$export$8e384432362ed0f0(value) {
    return $c3d184df86365cba$export$5adfdab05168c219(value, $cd73a3ba4ef2cccc$export$aa8b41735afcabd2());
}
function $c3d184df86365cba$var$parseNumber(value, min, max) {
    let val = Number(value);
    if (val < min || val > max) throw new RangeError(`Value out of range: ${min} <= ${val} <= ${max}`);
    return val;
}
function $c3d184df86365cba$export$f59dee82248f5ad4(time) {
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}:${String(time.second).padStart(2, '0')}${time.millisecond ? String(time.millisecond / 1000).slice(1) : ''}`;
}
function $c3d184df86365cba$export$60dfd74aa96791bd(date) {
    let gregorianDate = $c27c3f0399d7391c$export$b4a036af3fc0b032(date, new $701770b0bf6ae333$export$80ee6245ec4f29ec());
    return `${String(gregorianDate.year).padStart(4, '0')}-${String(gregorianDate.month).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`;
}
function $c3d184df86365cba$export$4223de14708adc63(date) {
    // @ts-ignore
    return `${$c3d184df86365cba$export$60dfd74aa96791bd(date)}T${$c3d184df86365cba$export$f59dee82248f5ad4(date)}`;
}
function $c3d184df86365cba$var$offsetToString(offset) {
    let sign = Math.sign(offset) < 0 ? '-' : '+';
    offset = Math.abs(offset);
    let offsetHours = Math.floor(offset / 3600000);
    let offsetMinutes = offset % 3600000 / 60000;
    return `${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;
}
function $c3d184df86365cba$export$bf79f1ebf4b18792(date) {
    return `${$c3d184df86365cba$export$4223de14708adc63(date)}${$c3d184df86365cba$var$offsetToString(date.offset)}[${date.timeZone}]`;
}




function $598186d9e30d5ae4$var$shiftArgs(args) {
    let calendar = typeof args[0] === 'object' ? args.shift() : new $701770b0bf6ae333$export$80ee6245ec4f29ec();
    let era;
    if (typeof args[0] === 'string') era = args.shift();
    else {
        let eras = calendar.getEras();
        era = eras[eras.length - 1];
    }
    let year = args.shift();
    let month = args.shift();
    let day = args.shift();
    return [
        calendar,
        era,
        year,
        month,
        day
    ];
}
class $598186d9e30d5ae4$export$99faa760c7908e4f {
    // This prevents TypeScript from allowing other types with the same fields to match.
    // i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
    // If that behavior is desired, use the AnyCalendarDate interface instead.
    #type;
    constructor(...args){
        let [calendar, era, year, month, day] = $598186d9e30d5ae4$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        $e4f1432b211ba340$export$c4e2ecac49351ef2(this);
    }
    copy() {
        if (this.era) return new $598186d9e30d5ae4$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
        else return new $598186d9e30d5ae4$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
    }
    add(duration) {
        return $e4f1432b211ba340$export$e16d8520af44a096(this, duration);
    }
    subtract(duration) {
        return $e4f1432b211ba340$export$4e2d2ead65e5f7e3(this, duration);
    }
    set(fields) {
        return $e4f1432b211ba340$export$adaa4cf7ef1b65be(this, fields);
    }
    cycle(field, amount, options) {
        return $e4f1432b211ba340$export$d52ced6badfb9a4c(this, field, amount, options);
    }
    toDate(timeZone) {
        return $c27c3f0399d7391c$export$e67a095c620b86fe(this, timeZone);
    }
    toString() {
        return $c3d184df86365cba$export$60dfd74aa96791bd(this);
    }
    compare(b) {
        return $cd73a3ba4ef2cccc$export$68781ddf31c0090f(this, b);
    }
}
class $598186d9e30d5ae4$export$680ea196effce5f {
    // This prevents TypeScript from allowing other types with the same fields to match.
    #type;
    constructor(hour = 0, minute = 0, second = 0, millisecond = 0){
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        $e4f1432b211ba340$export$7555de1e070510cb(this);
    }
    copy() {
        return new $598186d9e30d5ae4$export$680ea196effce5f(this.hour, this.minute, this.second, this.millisecond);
    }
    add(duration) {
        return $e4f1432b211ba340$export$7ed87b6bc2506470(this, duration);
    }
    subtract(duration) {
        return $e4f1432b211ba340$export$fe34d3a381cd7501(this, duration);
    }
    set(fields) {
        return $e4f1432b211ba340$export$e5d5e1c1822b6e56(this, fields);
    }
    cycle(field, amount, options) {
        return $e4f1432b211ba340$export$dd02b3e0007dfe28(this, field, amount, options);
    }
    toString() {
        return $c3d184df86365cba$export$f59dee82248f5ad4(this);
    }
    compare(b) {
        return $cd73a3ba4ef2cccc$export$c19a80a9721b80f6(this, b);
    }
}
class $598186d9e30d5ae4$export$ca871e8dbb80966f {
    // This prevents TypeScript from allowing other types with the same fields to match.
    #type;
    constructor(...args){
        let [calendar, era, year, month, day] = $598186d9e30d5ae4$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        $e4f1432b211ba340$export$c4e2ecac49351ef2(this);
    }
    copy() {
        if (this.era) return new $598186d9e30d5ae4$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
        else return new $598186d9e30d5ae4$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(duration) {
        return $e4f1432b211ba340$export$e16d8520af44a096(this, duration);
    }
    subtract(duration) {
        return $e4f1432b211ba340$export$4e2d2ead65e5f7e3(this, duration);
    }
    set(fields) {
        return $e4f1432b211ba340$export$adaa4cf7ef1b65be($e4f1432b211ba340$export$e5d5e1c1822b6e56(this, fields), fields);
    }
    cycle(field, amount, options) {
        switch(field){
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return $e4f1432b211ba340$export$d52ced6badfb9a4c(this, field, amount, options);
            default:
                return $e4f1432b211ba340$export$dd02b3e0007dfe28(this, field, amount, options);
        }
    }
    toDate(timeZone) {
        return $c27c3f0399d7391c$export$e67a095c620b86fe(this, timeZone);
    }
    toString() {
        return $c3d184df86365cba$export$4223de14708adc63(this);
    }
    compare(b) {
        let res = $cd73a3ba4ef2cccc$export$68781ddf31c0090f(this, b);
        if (res === 0) return $cd73a3ba4ef2cccc$export$c19a80a9721b80f6(this, $c27c3f0399d7391c$export$b21e0b124e224484(b));
        return res;
    }
}
class $598186d9e30d5ae4$export$d3b7288e7994edea {
    // This prevents TypeScript from allowing other types with the same fields to match.
    #type;
    constructor(...args){
        let [calendar, era, year, month, day] = $598186d9e30d5ae4$var$shiftArgs(args);
        let timeZone = args.shift();
        let offset = args.shift();
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.timeZone = timeZone;
        this.offset = offset;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        $e4f1432b211ba340$export$c4e2ecac49351ef2(this);
    }
    copy() {
        if (this.era) return new $598186d9e30d5ae4$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
        else return new $598186d9e30d5ae4$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    add(duration) {
        return $e4f1432b211ba340$export$96b1d28349274637(this, duration);
    }
    subtract(duration) {
        return $e4f1432b211ba340$export$6814caac34ca03c7(this, duration);
    }
    set(fields, disambiguation) {
        return $e4f1432b211ba340$export$31b5430eb18be4f8(this, fields, disambiguation);
    }
    cycle(field, amount, options) {
        return $e4f1432b211ba340$export$9a297d111fc86b79(this, field, amount, options);
    }
    toDate() {
        return $c27c3f0399d7391c$export$83aac07b4c37b25(this);
    }
    toString() {
        return $c3d184df86365cba$export$bf79f1ebf4b18792(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(b) {
        // TODO: Is this a bad idea??
        return this.toDate().getTime() - $c27c3f0399d7391c$export$84c95a83c799e074(b, this.timeZone).toDate().getTime();
    }
}





const $e0545968568f43c3$var$ERA_START_DATES = [
    [
        1868,
        9,
        8
    ],
    [
        1912,
        7,
        30
    ],
    [
        1926,
        12,
        25
    ],
    [
        1989,
        1,
        8
    ],
    [
        2019,
        5,
        1
    ]
];
const $e0545968568f43c3$var$ERA_END_DATES = [
    [
        1912,
        7,
        29
    ],
    [
        1926,
        12,
        24
    ],
    [
        1989,
        1,
        7
    ],
    [
        2019,
        4,
        30
    ]
];
const $e0545968568f43c3$var$ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const $e0545968568f43c3$var$ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function $e0545968568f43c3$var$findEraFromGregorianDate(date) {
    const idx = $e0545968568f43c3$var$ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return $e0545968568f43c3$var$ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function $e0545968568f43c3$var$toGregorian(date) {
    let eraAddend = $e0545968568f43c3$var$ERA_ADDENDS[$e0545968568f43c3$var$ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new $598186d9e30d5ae4$export$99faa760c7908e4f(date.year + eraAddend, date.month, date.day);
}
class $e0545968568f43c3$export$b746ab2b60cdffbf extends $701770b0bf6ae333$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = $e0545968568f43c3$var$findEraFromGregorianDate(date);
        date.era = $e0545968568f43c3$var$ERA_NAMES[era];
        date.year -= $e0545968568f43c3$var$ERA_ADDENDS[era];
        return date;
    }
    toJulianDay(date) {
        return super.toJulianDay($e0545968568f43c3$var$toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = $e0545968568f43c3$var$toGregorian(date);
        let era = $e0545968568f43c3$var$findEraFromGregorianDate(gregorianDate);
        if ($e0545968568f43c3$var$ERA_NAMES[era] !== date.era) {
            date.era = $e0545968568f43c3$var$ERA_NAMES[era];
            date.year = gregorianDate.year - $e0545968568f43c3$var$ERA_ADDENDS[era];
        }
    }
    constrainDate(date) {
        let idx = $e0545968568f43c3$var$ERA_NAMES.indexOf(date.era);
        let end = $e0545968568f43c3$var$ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - $e0545968568f43c3$var$ERA_ADDENDS[idx];
            date.year = Math.min(maxYear, date.year);
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
            if (date.year === 1) {
                let [, startMonth, startDay] = $e0545968568f43c3$var$ERA_START_DATES[idx];
                date.month = Math.max(startMonth, date.month);
                if (date.month === startMonth) date.day = Math.max(startDay, date.day);
            }
        }
    }
    getEras() {
        return $e0545968568f43c3$var$ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = $e0545968568f43c3$var$ERA_NAMES.indexOf(date.era);
        let next = $e0545968568f43c3$var$ERA_START_DATES[era + 1];
        if (next == null) return 9999;
        let cur = $e0545968568f43c3$var$ERA_START_DATES[era];
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getMinimumMonthInYear(date) {
        let start = $e0545968568f43c3$var$getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = $e0545968568f43c3$var$getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
    constructor(...args){
        super(...args);
        this.identifier = 'japanese';
    }
}
function $e0545968568f43c3$var$getMinimums(date) {
    if (date.year === 1) {
        let idx = $e0545968568f43c3$var$ERA_NAMES.indexOf(date.era);
        return $e0545968568f43c3$var$ERA_START_DATES[idx];
    }
}




const $d1f96e9f1fc8d7f8$var$BUDDHIST_ERA_START = -543;
class $d1f96e9f1fc8d7f8$export$42d20a78301dee44 extends $701770b0bf6ae333$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        date.year -= $d1f96e9f1fc8d7f8$var$BUDDHIST_ERA_START;
        return date;
    }
    toJulianDay(date) {
        return super.toJulianDay(new $598186d9e30d5ae4$export$99faa760c7908e4f(date.year + $d1f96e9f1fc8d7f8$var$BUDDHIST_ERA_START, date.month, date.day));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    constructor(...args){
        super(...args);
        this.identifier = 'buddhist';
    }
}




const $fa5894f4110ff96a$var$TAIWAN_ERA_START = 1911;
function $fa5894f4110ff96a$var$gregorianYear(date) {
    return date.era === 'minguo' ? date.year + $fa5894f4110ff96a$var$TAIWAN_ERA_START : 1 - date.year + $fa5894f4110ff96a$var$TAIWAN_ERA_START;
}
function $fa5894f4110ff96a$var$gregorianToTaiwan(year, date) {
    let y = year - $fa5894f4110ff96a$var$TAIWAN_ERA_START;
    if (y > 0) {
        date.era = 'minguo';
        date.year = y;
    } else {
        date.era = 'before_minguo';
        date.year = 1 - y;
    }
}
class $fa5894f4110ff96a$export$65e01080afcb0799 extends $701770b0bf6ae333$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        $fa5894f4110ff96a$var$gregorianToTaiwan(date.year, date);
        return date;
    }
    toJulianDay(date) {
        return super.toJulianDay(new $598186d9e30d5ae4$export$99faa760c7908e4f($fa5894f4110ff96a$var$gregorianYear(date), date.month, date.day));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        $fa5894f4110ff96a$var$gregorianToTaiwan($fa5894f4110ff96a$var$gregorianYear(date), date);
    }
    getYearsToAdd(date, years) {
        return date.era === 'before_minguo' ? -years : years;
    }
    constructor(...args){
        super(...args);
        this.identifier // Republic of China
         = 'roc';
    }
}




const $eca18228d7a4cb36$var$PERSIAN_EPOCH = 1948321; // 622/03/19 Julian C.E.
function $eca18228d7a4cb36$var$isLeapYear(year) {
    let y0 = year > 0 ? year - 474 : year - 473;
    let y1 = $38ff99aeedf86c8f$export$842a2cf37af977e1(y0, 2820) + 474;
    return $38ff99aeedf86c8f$export$842a2cf37af977e1((y1 + 38) * 31, 128) < 31;
}
function $eca18228d7a4cb36$var$persianToJulianDay(year, month, day) {
    let y0 = year > 0 ? year - 474 : year - 473;
    let y1 = $38ff99aeedf86c8f$export$842a2cf37af977e1(y0, 2820) + 474;
    let offset = month <= 7 ? 31 * (month - 1) : 30 * (month - 1) + 6;
    return $eca18228d7a4cb36$var$PERSIAN_EPOCH - 1 + 1029983 * Math.floor(y0 / 2820) + 365 * (y1 - 1) + Math.floor((31 * y1 - 5) / 128) + offset + day;
}
class $eca18228d7a4cb36$export$37fccdbfd14c5939 {
    fromJulianDay(jd) {
        let d0 = jd - $eca18228d7a4cb36$var$persianToJulianDay(475, 1, 1);
        let n2820 = Math.floor(d0 / 1029983);
        let d1 = $38ff99aeedf86c8f$export$842a2cf37af977e1(d0, 1029983);
        let y2820 = d1 === 1029982 ? 2820 : Math.floor((128 * d1 + 46878) / 46751);
        let year = 474 + 2820 * n2820 + y2820;
        if (year <= 0) year--;
        let yDay = jd - $eca18228d7a4cb36$var$persianToJulianDay(year, 1, 1) + 1;
        let month = yDay <= 186 ? Math.ceil(yDay / 31) : Math.ceil((yDay - 6) / 31);
        let day = jd - $eca18228d7a4cb36$var$persianToJulianDay(year, month, 1) + 1;
        return new $598186d9e30d5ae4$export$99faa760c7908e4f(this, year, month, day);
    }
    toJulianDay(date) {
        return $eca18228d7a4cb36$var$persianToJulianDay(date.year, date.month, date.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(date) {
        if (date.month <= 6) return 31;
        if (date.month <= 11) return 30;
        return $eca18228d7a4cb36$var$isLeapYear(date.year) ? 30 : 29;
    }
    getEras() {
        return [
            'AP'
        ];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(){
        this.identifier = 'persian';
    }
}




// Starts in 78 AD,
const $96bc42a3edeb2fe8$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $96bc42a3edeb2fe8$var$INDIAN_YEAR_START = 80;
class $96bc42a3edeb2fe8$export$39f31c639fa15726 extends $701770b0bf6ae333$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - $96bc42a3edeb2fe8$var$INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - $701770b0bf6ae333$export$f297eb839006d339(date.year, 1, 1);
        let leapMonth;
        if (yDay < $96bc42a3edeb2fe8$var$INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = $701770b0bf6ae333$export$553d7fa8e3805fc0(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = $701770b0bf6ae333$export$553d7fa8e3805fc0(date.year) ? 31 : 30;
            yDay -= $96bc42a3edeb2fe8$var$INDIAN_YEAR_START;
        }
        let indianMonth;
        let indianDay;
        if (yDay < leapMonth) {
            indianMonth = 1;
            indianDay = yDay + 1;
        } else {
            let mDay = yDay - leapMonth;
            if (mDay < 155) {
                indianMonth = Math.floor(mDay / 31) + 2;
                indianDay = mDay % 31 + 1;
            } else {
                mDay -= 155;
                indianMonth = Math.floor(mDay / 30) + 7;
                indianDay = mDay % 30 + 1;
            }
        }
        return new $598186d9e30d5ae4$export$99faa760c7908e4f(this, indianYear, indianMonth, indianDay);
    }
    toJulianDay(date) {
        let year = date.year + $96bc42a3edeb2fe8$var$INDIAN_ERA_START;
        let leapMonth;
        let jd;
        if ($701770b0bf6ae333$export$553d7fa8e3805fc0(year)) {
            leapMonth = 31;
            jd = $701770b0bf6ae333$export$f297eb839006d339(year, 3, 21);
        } else {
            leapMonth = 30;
            jd = $701770b0bf6ae333$export$f297eb839006d339(year, 3, 22);
        }
        if (date.month === 1) return jd + date.day - 1;
        jd += leapMonth + Math.min(date.month - 2, 5) * 31;
        if (date.month >= 8) jd += (date.month - 7) * 30;
        jd += date.day - 1;
        return jd;
    }
    getDaysInMonth(date) {
        if (date.month === 1 && $701770b0bf6ae333$export$553d7fa8e3805fc0(date.year + $96bc42a3edeb2fe8$var$INDIAN_ERA_START)) return 31;
        if (date.month >= 2 && date.month <= 6) return 31;
        return 30;
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'saka'
        ];
    }
    constructor(...args){
        super(...args);
        this.identifier = 'indian';
    }
}



const $014e261cff34a38b$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $014e261cff34a38b$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $014e261cff34a38b$var$UMALQURA_YEAR_START = 1300;
const $014e261cff34a38b$var$UMALQURA_YEAR_END = 1600;
const $014e261cff34a38b$var$UMALQURA_START_DAYS = 460322;
function $014e261cff34a38b$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $014e261cff34a38b$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $014e261cff34a38b$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $014e261cff34a38b$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new $598186d9e30d5ae4$export$99faa760c7908e4f(calendar, year, month, day);
}
function $014e261cff34a38b$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $014e261cff34a38b$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $014e261cff34a38b$var$julianDayToIslamic(this, $014e261cff34a38b$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $014e261cff34a38b$var$islamicToJulianDay($014e261cff34a38b$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $014e261cff34a38b$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $014e261cff34a38b$var$isLeapYear(date.year) ? 355 : 354;
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'AH'
        ];
    }
    constructor(){
        this.identifier = 'islamic-civil';
    }
}
class $014e261cff34a38b$export$37f0887f2f9d22f7 extends $014e261cff34a38b$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $014e261cff34a38b$var$julianDayToIslamic(this, $014e261cff34a38b$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $014e261cff34a38b$var$islamicToJulianDay($014e261cff34a38b$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args);
        this.identifier = 'islamic-tbla';
    }
}
// Generated by scripts/generate-umalqura.js
const $014e261cff34a38b$var$UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let $014e261cff34a38b$var$UMALQURA_MONTHLENGTH;
let $014e261cff34a38b$var$UMALQURA_YEAR_START_TABLE;
function $014e261cff34a38b$var$umalquraYearStart(year) {
    return $014e261cff34a38b$var$UMALQURA_START_DAYS + $014e261cff34a38b$var$UMALQURA_YEAR_START_TABLE[year - $014e261cff34a38b$var$UMALQURA_YEAR_START];
}
function $014e261cff34a38b$var$umalquraMonthLength(year, month) {
    let idx = year - $014e261cff34a38b$var$UMALQURA_YEAR_START;
    let mask = 1 << 11 - (month - 1);
    if (($014e261cff34a38b$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $014e261cff34a38b$var$umalquraMonthStart(year, month) {
    let day = $014e261cff34a38b$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $014e261cff34a38b$var$umalquraMonthLength(year, i);
    return day;
}
function $014e261cff34a38b$var$umalquraYearLength(year) {
    return $014e261cff34a38b$var$UMALQURA_YEAR_START_TABLE[year + 1 - $014e261cff34a38b$var$UMALQURA_YEAR_START] - $014e261cff34a38b$var$UMALQURA_YEAR_START_TABLE[year - $014e261cff34a38b$var$UMALQURA_YEAR_START];
}
class $014e261cff34a38b$export$5baab4758c231076 extends $014e261cff34a38b$export$2066795aadd37bfc {
    constructor(){
        super();
        this.identifier = 'islamic-umalqura';
        if (!$014e261cff34a38b$var$UMALQURA_MONTHLENGTH) $014e261cff34a38b$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($014e261cff34a38b$var$UMALQURA_DATA), (c)=>c.charCodeAt(0)
        ).buffer);
        if (!$014e261cff34a38b$var$UMALQURA_YEAR_START_TABLE) {
            $014e261cff34a38b$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($014e261cff34a38b$var$UMALQURA_YEAR_END - $014e261cff34a38b$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $014e261cff34a38b$var$UMALQURA_YEAR_START; year <= $014e261cff34a38b$var$UMALQURA_YEAR_END; year++){
                $014e261cff34a38b$var$UMALQURA_YEAR_START_TABLE[year - $014e261cff34a38b$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $014e261cff34a38b$var$umalquraMonthLength(year, i);
            }
        }
    }
    fromJulianDay(jd) {
        let days = jd - $014e261cff34a38b$var$CIVIL_EPOC;
        let startDays = $014e261cff34a38b$var$umalquraYearStart($014e261cff34a38b$var$UMALQURA_YEAR_START);
        let endDays = $014e261cff34a38b$var$umalquraYearStart($014e261cff34a38b$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $014e261cff34a38b$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $014e261cff34a38b$var$umalquraYearStart(y) + 1;
                let yearLength = $014e261cff34a38b$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $014e261cff34a38b$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $014e261cff34a38b$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new $598186d9e30d5ae4$export$99faa760c7908e4f(this, y, m, days - $014e261cff34a38b$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $014e261cff34a38b$var$UMALQURA_YEAR_START || date.year > $014e261cff34a38b$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $014e261cff34a38b$var$CIVIL_EPOC + $014e261cff34a38b$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $014e261cff34a38b$var$UMALQURA_YEAR_START || date.year > $014e261cff34a38b$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $014e261cff34a38b$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $014e261cff34a38b$var$UMALQURA_YEAR_START || date.year > $014e261cff34a38b$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $014e261cff34a38b$var$umalquraYearLength(date.year);
    }
}




const $eb9be94c20a917ae$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $eb9be94c20a917ae$var$HOUR_PARTS = 1080;
const $eb9be94c20a917ae$var$DAY_PARTS = 24 * $eb9be94c20a917ae$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $eb9be94c20a917ae$var$MONTH_DAYS = 29;
const $eb9be94c20a917ae$var$MONTH_FRACT = 12 * $eb9be94c20a917ae$var$HOUR_PARTS + 793;
const $eb9be94c20a917ae$var$MONTH_PARTS = $eb9be94c20a917ae$var$MONTH_DAYS * $eb9be94c20a917ae$var$DAY_PARTS + $eb9be94c20a917ae$var$MONTH_FRACT;
function $eb9be94c20a917ae$var$isLeapYear(year) {
    return $38ff99aeedf86c8f$export$842a2cf37af977e1(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $eb9be94c20a917ae$var$hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if ($38ff99aeedf86c8f$export$842a2cf37af977e1(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function $eb9be94c20a917ae$var$hebrewDelay2(year) {
    let last = $eb9be94c20a917ae$var$hebrewDelay1(year - 1);
    let present = $eb9be94c20a917ae$var$hebrewDelay1(year);
    let next = $eb9be94c20a917ae$var$hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function $eb9be94c20a917ae$var$startOfYear(year) {
    return $eb9be94c20a917ae$var$hebrewDelay1(year) + $eb9be94c20a917ae$var$hebrewDelay2(year);
}
function $eb9be94c20a917ae$var$getDaysInYear(year) {
    return $eb9be94c20a917ae$var$startOfYear(year + 1) - $eb9be94c20a917ae$var$startOfYear(year);
}
function $eb9be94c20a917ae$var$getYearType(year) {
    let yearLength = $eb9be94c20a917ae$var$getDaysInYear(year);
    if (yearLength > 380) yearLength -= 30; // Subtract length of leap month.
    switch(yearLength){
        case 353:
            return 0; // deficient
        case 354:
            return 1; // normal
        case 355:
            return 2; // complete
    }
}
function $eb9be94c20a917ae$var$getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !$eb9be94c20a917ae$var$isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = $eb9be94c20a917ae$var$getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return $eb9be94c20a917ae$var$isLeapYear(year) ? 30 : 0;
    return 30;
}
class $eb9be94c20a917ae$export$ca405048b8fb5af {
    fromJulianDay(jd) {
        let d = jd - $eb9be94c20a917ae$var$HEBREW_EPOCH;
        let m = d * $eb9be94c20a917ae$var$DAY_PARTS / $eb9be94c20a917ae$var$MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = $eb9be94c20a917ae$var$startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = $eb9be94c20a917ae$var$startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += $eb9be94c20a917ae$var$getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= $eb9be94c20a917ae$var$getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new $598186d9e30d5ae4$export$99faa760c7908e4f(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = $eb9be94c20a917ae$var$startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += $eb9be94c20a917ae$var$getDaysInMonth(date.year, month);
        return jd + date.day + $eb9be94c20a917ae$var$HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return $eb9be94c20a917ae$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return $eb9be94c20a917ae$var$isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return $eb9be94c20a917ae$var$getDaysInYear(date.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'AM'
        ];
    }
    balanceYearMonth(date, previousDate) {
        // Keep date in the same month when switching between leap years and non leap years
        if (previousDate.year !== date.year) {
            if ($eb9be94c20a917ae$var$isLeapYear(previousDate.year) && !$eb9be94c20a917ae$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!$eb9be94c20a917ae$var$isLeapYear(previousDate.year) && $eb9be94c20a917ae$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
    constructor(){
        this.identifier = 'hebrew';
    }
}



const $2123090736a8b03e$var$ETHIOPIC_EPOCH = 1723856;
const $2123090736a8b03e$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $2123090736a8b03e$var$AMETE_MIHRET_DELTA = 5500;
function $2123090736a8b03e$var$ceToJulianDay(epoch, year, month, day) {
    return epoch // difference from Julian epoch to 1,1,1
     + 365 * year // number of days from years
     + Math.floor(year / 4) // extra day of leap year
     + 30 * (month - 1) // number of days from months (1 based)
     + day - 1 // number of days for present month (1 based)
    ;
}
function $2123090736a8b03e$var$julianDayToCE(calendar, epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    let month = 1 + Math.floor((jd - $2123090736a8b03e$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - $2123090736a8b03e$var$ceToJulianDay(epoch, year, month, 1);
    return new $598186d9e30d5ae4$export$99faa760c7908e4f(calendar, year, month, day);
}
function $2123090736a8b03e$var$getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function $2123090736a8b03e$var$getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) // not intercalary month
    return 30;
    else // intercalary month 5 days + possible leap day
    return $2123090736a8b03e$var$getLeapDay(year) + 5;
}
class $2123090736a8b03e$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let date = $2123090736a8b03e$var$julianDayToCE(this, $2123090736a8b03e$var$ETHIOPIC_EPOCH, jd);
        if (date.year > 0) date.era = 'AM';
        else {
            date.era = 'AA';
            date.year += $2123090736a8b03e$var$AMETE_MIHRET_DELTA;
        }
        return date;
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $2123090736a8b03e$var$AMETE_MIHRET_DELTA;
        return $2123090736a8b03e$var$ceToJulianDay($2123090736a8b03e$var$ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $2123090736a8b03e$var$AMETE_MIHRET_DELTA;
        return $2123090736a8b03e$var$getDaysInMonth(year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + $2123090736a8b03e$var$getLeapDay(date.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'AA',
            'AM'
        ];
    }
    constructor(){
        this.identifier = 'ethiopic';
    }
}
class $2123090736a8b03e$export$d72e0c37005a4914 extends $2123090736a8b03e$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let date = $2123090736a8b03e$var$julianDayToCE(this, $2123090736a8b03e$var$ETHIOPIC_EPOCH, jd);
        date.era = 'AA';
        date.year += $2123090736a8b03e$var$AMETE_MIHRET_DELTA;
        return date;
    }
    getEras() {
        return [
            'AA'
        ];
    }
    constructor(...args){
        super(...args);
        this.identifier // also known as 'ethiopic-amete-alem' in ICU
         = 'ethioaa';
    }
}
class $2123090736a8b03e$export$fe6243cbe1a4b7c1 extends $2123090736a8b03e$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let date = $2123090736a8b03e$var$julianDayToCE(this, $2123090736a8b03e$var$COPTIC_EPOCH, jd);
        if (date.year <= 0) {
            date.era = 'BCE';
            date.year = 1 - date.year;
        } else date.era = 'CE';
        return date;
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $2123090736a8b03e$var$ceToJulianDay($2123090736a8b03e$var$COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $2123090736a8b03e$var$getDaysInMonth(year, date.month);
    }
    getYearsToAdd(date, years) {
        return date.era === 'BCE' ? -years : years;
    }
    getEras() {
        return [
            'BCE',
            'CE'
        ];
    }
    constructor(...args){
        super(...args);
        this.identifier = 'coptic';
    }
}











function $29be8c8f7c0c2684$export$dd0bbc9b26defe37(name) {
    switch(name){
        case 'buddhist':
            return new $d1f96e9f1fc8d7f8$export$42d20a78301dee44();
        case 'ethiopic':
            return new $2123090736a8b03e$export$26ba6eab5e20cd7d();
        case 'ethioaa':
            return new $2123090736a8b03e$export$d72e0c37005a4914();
        case 'coptic':
            return new $2123090736a8b03e$export$fe6243cbe1a4b7c1();
        case 'hebrew':
            return new $eb9be94c20a917ae$export$ca405048b8fb5af();
        case 'indian':
            return new $96bc42a3edeb2fe8$export$39f31c639fa15726();
        case 'islamic-civil':
            return new $014e261cff34a38b$export$2066795aadd37bfc();
        case 'islamic-tbla':
            return new $014e261cff34a38b$export$37f0887f2f9d22f7();
        case 'islamic-umalqura':
            return new $014e261cff34a38b$export$5baab4758c231076();
        case 'japanese':
            return new $e0545968568f43c3$export$b746ab2b60cdffbf();
        case 'persian':
            return new $eca18228d7a4cb36$export$37fccdbfd14c5939();
        case 'roc':
            return new $fa5894f4110ff96a$export$65e01080afcb0799();
        case 'gregory':
        default:
            return new $701770b0bf6ae333$export$80ee6245ec4f29ec();
    }
}




var $3fe428bf6f236711$exports = {};



var $10e26aef325cb00d$exports = {};

$parcel$export($10e26aef325cb00d$exports, "DateFormatter", () => $10e26aef325cb00d$export$ad991b66133851cf);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $10e26aef325cb00d$var$formatterCache = new Map();
class $10e26aef325cb00d$export$ad991b66133851cf {
    constructor(locale, options = {
    }){
        this.formatter = $10e26aef325cb00d$var$getCachedDateFormatter(locale, options);
        this.options = options;
    }
    format(value) {
        return this.formatter.format(value);
    }
    formatToParts(value) {
        return this.formatter.formatToParts(value);
    }
    formatRange(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRange === 'function') // @ts-ignore
        return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} – ${this.formatter.format(end)}`;
    }
    formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
        return this.formatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.formatter.formatToParts(start);
        let endParts = this.formatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })
            ),
            {
                type: 'literal',
                value: ' – ',
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                })
            )
        ];
    }
    resolvedOptions() {
        let resolvedOptions = this.formatter.resolvedOptions();
        if ($10e26aef325cb00d$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $10e26aef325cb00d$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        return resolvedOptions;
    }
}
// There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802
const $10e26aef325cb00d$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function $10e26aef325cb00d$var$getCachedDateFormatter(locale, options = {
}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $10e26aef325cb00d$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $10e26aef325cb00d$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref ?? defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($10e26aef325cb00d$var$formatterCache.has(cacheKey)) return $10e26aef325cb00d$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $10e26aef325cb00d$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $10e26aef325cb00d$var$_hasBuggyHour12Behavior = null;
function $10e26aef325cb00d$var$hasBuggyHour12Behavior() {
    if ($10e26aef325cb00d$var$_hasBuggyHour12Behavior == null) $10e26aef325cb00d$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $10e26aef325cb00d$var$_hasBuggyHour12Behavior;
}
let $10e26aef325cb00d$var$_hasBuggyResolvedHourCycle = null;
function $10e26aef325cb00d$var$hasBuggyResolvedHourCycle() {
    if ($10e26aef325cb00d$var$_hasBuggyResolvedHourCycle == null) $10e26aef325cb00d$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $10e26aef325cb00d$var$_hasBuggyResolvedHourCycle;
}
function $10e26aef325cb00d$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $10e26aef325cb00d$var$getCachedDateFormatter(locale, {
        ...options,
        timeZone: undefined // use local timezone
    });
    let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p)=>p.type === 'hour'
    ).value, 10);
    let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p)=>p.type === 'hour'
    ).value, 10);
    if (min === 0 && max === 23) return 'h23';
    if (min === 24 && max === 23) return 'h24';
    if (min === 0 && max === 11) return 'h11';
    if (min === 12 && max === 11) return 'h12';
    throw new Error('Unexpected hour cycle result');
}


$parcel$exportWildcard(module.exports, $598186d9e30d5ae4$exports);
$parcel$exportWildcard(module.exports, $c27c3f0399d7391c$exports);
$parcel$exportWildcard(module.exports, $cd73a3ba4ef2cccc$exports);
$parcel$exportWildcard(module.exports, $3fe428bf6f236711$exports);
$parcel$exportWildcard(module.exports, $c3d184df86365cba$exports);
$parcel$exportWildcard(module.exports, $10e26aef325cb00d$exports);


//# sourceMappingURL=main.js.map
