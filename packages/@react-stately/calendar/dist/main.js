var $iUi8f$internationalizeddate = require("@internationalized/date");
var $iUi8f$reactstatelyutils = require("@react-stately/utils");
var $iUi8f$reactariai18n = require("@react-aria/i18n");
var $iUi8f$react = require("react");

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
var $bdfceb7c4b57da39$exports = {};


var $6c0a8c647037ad43$exports = {};

$parcel$export($6c0a8c647037ad43$exports, "useCalendarState", () => $6c0a8c647037ad43$export$6d095e787d2b5e1f);

function $da856c074c1b8d5f$export$eac50920cf2fd59a(date, minValue, maxValue) {
    return minValue != null && date.compare(minValue) < 0 || maxValue != null && date.compare(maxValue) > 0;
}
function $da856c074c1b8d5f$export$f4a51ff076cc9a09(date, duration, locale, minValue, maxValue) {
    let halfDuration = {
    };
    for(let key in duration){
        halfDuration[key] = Math.floor(duration[key] / 2);
        if (halfDuration[key] > 0 && duration[key] % 2 === 0) halfDuration[key]--;
    }
    let aligned = $da856c074c1b8d5f$export$144a00ba6044eb9(date, duration, locale).subtract(halfDuration);
    return $da856c074c1b8d5f$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $da856c074c1b8d5f$export$144a00ba6044eb9(date, duration, locale, minValue, maxValue) {
    // align to the start of the largest unit
    let aligned = date;
    if (duration.years) aligned = $iUi8f$internationalizeddate.startOfYear(date);
    else if (duration.months) aligned = $iUi8f$internationalizeddate.startOfMonth(date);
    else if (duration.weeks) aligned = $iUi8f$internationalizeddate.startOfWeek(date, locale);
    return $da856c074c1b8d5f$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $da856c074c1b8d5f$export$530edbfc915b2b04(date, duration, locale, minValue, maxValue) {
    let d = {
        ...duration
    };
    // subtract 1 from the smallest unit
    if (duration.days) d.days--;
    else if (duration.weeks) d.weeks--;
    else if (duration.months) d.months--;
    else if (duration.years) d.years--;
    let aligned = $da856c074c1b8d5f$export$144a00ba6044eb9(date, duration, locale).subtract(d);
    return $da856c074c1b8d5f$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $da856c074c1b8d5f$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue) {
    if (minValue && date.compare(minValue) >= 0) aligned = $iUi8f$internationalizeddate.maxDate(aligned, $da856c074c1b8d5f$export$144a00ba6044eb9($iUi8f$internationalizeddate.toCalendarDate(minValue), duration, locale));
    if (maxValue && date.compare(maxValue) <= 0) aligned = $iUi8f$internationalizeddate.minDate(aligned, $da856c074c1b8d5f$export$530edbfc915b2b04($iUi8f$internationalizeddate.toCalendarDate(maxValue), duration, locale));
    return aligned;
}
function $da856c074c1b8d5f$export$4f5203c0d889109e(date, minValue, maxValue) {
    if (minValue) date = $iUi8f$internationalizeddate.maxDate(date, $iUi8f$internationalizeddate.toCalendarDate(minValue));
    if (maxValue) date = $iUi8f$internationalizeddate.minDate(date, $iUi8f$internationalizeddate.toCalendarDate(maxValue));
    return date;
}






function $6c0a8c647037ad43$export$6d095e787d2b5e1f(props) {
    let defaultFormatter = $iUi8f$reactariai18n.useDateFormatter();
    let resolvedOptions = $iUi8f$react.useMemo(()=>defaultFormatter.resolvedOptions()
    , [
        defaultFormatter
    ]);
    let { locale: locale , createCalendar: createCalendar , visibleDuration: visibleDuration = {
        months: 1
    } , minValue: minValue , maxValue: maxValue , selectionAlignment: selectionAlignment  } = props;
    let calendar = $iUi8f$react.useMemo(()=>createCalendar(resolvedOptions.calendar)
    , [
        createCalendar,
        resolvedOptions.calendar
    ]);
    let [value, setControlledValue] = $iUi8f$reactstatelyutils.useControlledState(props.value, props.defaultValue, props.onChange);
    let calendarDateValue = $iUi8f$react.useMemo(()=>value ? $iUi8f$internationalizeddate.toCalendar($iUi8f$internationalizeddate.toCalendarDate(value), calendar) : null
    , [
        value,
        calendar
    ]);
    let timeZone = $iUi8f$react.useMemo(()=>value && 'timeZone' in value ? value.timeZone : resolvedOptions.timeZone
    , [
        value,
        resolvedOptions.timeZone
    ]);
    let defaultDate = $iUi8f$react.useMemo(()=>calendarDateValue || $da856c074c1b8d5f$export$4f5203c0d889109e($iUi8f$internationalizeddate.toCalendar($iUi8f$internationalizeddate.today(timeZone), calendar), minValue, maxValue)
    , [
        calendarDateValue,
        timeZone,
        calendar,
        minValue,
        maxValue
    ]);
    let [startDate, setStartDate] = $iUi8f$react.useState(()=>{
        switch(selectionAlignment){
            case 'start':
                return $da856c074c1b8d5f$export$144a00ba6044eb9(defaultDate, visibleDuration, locale, minValue, maxValue);
            case 'end':
                return $da856c074c1b8d5f$export$530edbfc915b2b04(defaultDate, visibleDuration, locale, minValue, maxValue);
            case 'center':
            default:
                return $da856c074c1b8d5f$export$f4a51ff076cc9a09(defaultDate, visibleDuration, locale, minValue, maxValue);
        }
    });
    let [focusedDate, setFocusedDate] = $iUi8f$react.useState(defaultDate);
    let [isFocused, setFocused] = $iUi8f$react.useState(props.autoFocus || false);
    let endDate = $iUi8f$react.useMemo(()=>startDate.add(visibleDuration).subtract({
            days: 1
        })
    , [
        startDate,
        visibleDuration
    ]);
    // Reset focused date and visible range when calendar changes.
    let lastCalendarIdentifier = $iUi8f$react.useRef(calendar.identifier);
    $iUi8f$react.useEffect(()=>{
        if (calendar.identifier !== lastCalendarIdentifier.current) {
            let newFocusedDate = $iUi8f$internationalizeddate.toCalendar(focusedDate, calendar);
            setStartDate($da856c074c1b8d5f$export$f4a51ff076cc9a09(newFocusedDate, visibleDuration, locale, minValue, maxValue));
            setFocusedDate(newFocusedDate);
            lastCalendarIdentifier.current = calendar.identifier;
        }
    }, [
        calendar,
        focusedDate,
        visibleDuration,
        locale,
        minValue,
        maxValue
    ]);
    // Sets focus to a specific cell date
    function focusCell(date) {
        // date = constrain(focusedDate, date, visibleDuration, locale, minValue, maxValue);
        date = $da856c074c1b8d5f$export$4f5203c0d889109e(date, minValue, maxValue);
        let next = startDate.add(visibleDuration);
        if (date.compare(startDate) < 0) setStartDate($da856c074c1b8d5f$export$530edbfc915b2b04(date, visibleDuration, locale, minValue, maxValue));
        else if (date.compare(next) >= 0) setStartDate($da856c074c1b8d5f$export$144a00ba6044eb9(date, visibleDuration, locale, minValue, maxValue));
        setFocusedDate(date);
    }
    function setValue(newValue) {
        if (!props.isDisabled && !props.isReadOnly) {
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            newValue = $iUi8f$internationalizeddate.toCalendar(newValue, value?.calendar || new $iUi8f$internationalizeddate.GregorianCalendar());
            // Preserve time if the input value had one.
            if (value && 'hour' in value) setControlledValue(value.set(newValue));
            else setControlledValue(newValue);
        }
    }
    return {
        isDisabled: props.isDisabled,
        isReadOnly: props.isReadOnly,
        value: calendarDateValue,
        setValue: setValue,
        visibleRange: {
            start: startDate,
            end: endDate
        },
        focusedDate: focusedDate,
        timeZone: timeZone,
        setFocusedDate (date) {
            setFocusedDate(date);
            setFocused(true);
        },
        focusNextDay () {
            focusCell(focusedDate.add({
                days: 1
            }));
        },
        focusPreviousDay () {
            focusCell(focusedDate.subtract({
                days: 1
            }));
        },
        focusNextRow () {
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                weeks: 1
            }));
        },
        focusPreviousRow () {
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                weeks: 1
            }));
        },
        focusNextPage () {
            let start = startDate.add(visibleDuration);
            setStartDate($da856c074c1b8d5f$export$5bb865b12696a77d(focusedDate, start, visibleDuration, locale, minValue, maxValue));
            setFocusedDate($da856c074c1b8d5f$export$4f5203c0d889109e(focusedDate.add(visibleDuration), minValue, maxValue));
        },
        focusPreviousPage () {
            let start = startDate.subtract(visibleDuration);
            setStartDate($da856c074c1b8d5f$export$5bb865b12696a77d(focusedDate, start, visibleDuration, locale, minValue, maxValue));
            setFocusedDate($da856c074c1b8d5f$export$4f5203c0d889109e(focusedDate.subtract(visibleDuration), minValue, maxValue));
        },
        focusPageStart () {
            focusCell(startDate);
        },
        focusPageEnd () {
            focusCell(endDate);
        },
        focusNextSection () {
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.add({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                years: 1
            }));
        },
        focusPreviousSection () {
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.subtract({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                years: 1
            }));
        },
        selectFocusedDate () {
            setValue(focusedDate);
        },
        selectDate (date) {
            setValue(date);
        },
        isFocused: isFocused,
        setFocused: setFocused,
        isInvalid (date) {
            return $da856c074c1b8d5f$export$eac50920cf2fd59a(date, minValue, maxValue);
        },
        isSelected (date) {
            return calendarDateValue != null && $iUi8f$internationalizeddate.isSameDay(date, calendarDateValue);
        },
        isCellFocused (date) {
            return isFocused && focusedDate && $iUi8f$internationalizeddate.isSameDay(date, focusedDate);
        },
        isCellDisabled (date) {
            return props.isDisabled || date.compare(startDate) < 0 || date.compare(endDate) > 0 || $da856c074c1b8d5f$export$eac50920cf2fd59a(date, minValue, maxValue);
        },
        isPreviousVisibleRangeInvalid () {
            return $da856c074c1b8d5f$export$eac50920cf2fd59a(startDate.subtract({
                days: 1
            }), minValue, maxValue);
        },
        isNextVisibleRangeInvalid () {
            return $da856c074c1b8d5f$export$eac50920cf2fd59a(endDate.add({
                days: 1
            }), minValue, maxValue);
        }
    };
}


var $65911ba90eda5d23$exports = {};

$parcel$export($65911ba90eda5d23$exports, "useRangeCalendarState", () => $65911ba90eda5d23$export$9a987164d97ecc90);





function $65911ba90eda5d23$export$9a987164d97ecc90(props) {
    let { value: valueProp , defaultValue: defaultValue , onChange: onChange , createCalendar: createCalendar , locale: locale , visibleDuration: visibleDuration = {
        months: 1
    } , minValue: minValue , maxValue: maxValue , ...calendarProps } = props;
    let [value, setValue] = $iUi8f$reactstatelyutils.useControlledState(valueProp, defaultValue, onChange);
    let [anchorDate, setAnchorDate] = $iUi8f$react.useState(null);
    let alignment = 'center';
    if (value && value.start && value.end) {
        let start = $da856c074c1b8d5f$export$f4a51ff076cc9a09($iUi8f$internationalizeddate.toCalendarDate(value.start), visibleDuration, locale, minValue, maxValue);
        let end = start.add(visibleDuration).subtract({
            days: 1
        });
        if (value.end.compare(end) > 0) alignment = 'start';
    }
    let calendar = $6c0a8c647037ad43$export$6d095e787d2b5e1f({
        ...calendarProps,
        value: value && value.start,
        createCalendar: createCalendar,
        locale: locale,
        visibleDuration: visibleDuration,
        minValue: minValue,
        maxValue: maxValue,
        selectionAlignment: alignment
    });
    let highlightedRange = anchorDate ? $65911ba90eda5d23$var$makeRange(anchorDate, calendar.focusedDate) : value && $65911ba90eda5d23$var$makeRange(value.start, value.end);
    let selectDate = (date)=>{
        if (props.isReadOnly) return;
        if (!anchorDate) setAnchorDate(date);
        else {
            let range = $65911ba90eda5d23$var$makeRange(anchorDate, date);
            setValue({
                start: $65911ba90eda5d23$var$convertValue(range.start, value?.start),
                end: $65911ba90eda5d23$var$convertValue(range.end, value?.end)
            });
            setAnchorDate(null);
        }
    };
    let [isDragging, setDragging] = $iUi8f$react.useState(false);
    return {
        ...calendar,
        value: value,
        setValue: setValue,
        anchorDate: anchorDate,
        setAnchorDate: setAnchorDate,
        highlightedRange: highlightedRange,
        selectFocusedDate () {
            selectDate(calendar.focusedDate);
        },
        selectDate: selectDate,
        highlightDate (date) {
            if (anchorDate) calendar.setFocusedDate(date);
        },
        isSelected (date) {
            return highlightedRange && date.compare(highlightedRange.start) >= 0 && date.compare(highlightedRange.end) <= 0;
        },
        isDragging: isDragging,
        setDragging: setDragging
    };
}
function $65911ba90eda5d23$var$makeRange(start, end) {
    if (!start || !end) return null;
    if (end.compare(start) < 0) [start, end] = [
        end,
        start
    ];
    return {
        start: $iUi8f$internationalizeddate.toCalendarDate(start),
        end: $iUi8f$internationalizeddate.toCalendarDate(end)
    };
}
function $65911ba90eda5d23$var$convertValue(newValue, oldValue) {
    // The display calendar should not have any effect on the emitted value.
    // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
    newValue = $iUi8f$internationalizeddate.toCalendar(newValue, oldValue?.calendar || new $iUi8f$internationalizeddate.GregorianCalendar());
    // Preserve time if the input value had one.
    if (oldValue && 'hour' in oldValue) return oldValue.set(newValue);
    return newValue;
}


$parcel$exportWildcard(module.exports, $bdfceb7c4b57da39$exports);
$parcel$exportWildcard(module.exports, $6c0a8c647037ad43$exports);
$parcel$exportWildcard(module.exports, $65911ba90eda5d23$exports);


//# sourceMappingURL=main.js.map
