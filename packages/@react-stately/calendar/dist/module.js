import {toCalendar as $7F3MR$toCalendar, toCalendarDate as $7F3MR$toCalendarDate, today as $7F3MR$today, GregorianCalendar as $7F3MR$GregorianCalendar, isSameDay as $7F3MR$isSameDay, startOfYear as $7F3MR$startOfYear, startOfMonth as $7F3MR$startOfMonth, startOfWeek as $7F3MR$startOfWeek, maxDate as $7F3MR$maxDate, minDate as $7F3MR$minDate} from "@internationalized/date";
import {useControlledState as $7F3MR$useControlledState} from "@react-stately/utils";
import {useDateFormatter as $7F3MR$useDateFormatter} from "@react-aria/i18n";
import {useMemo as $7F3MR$useMemo, useState as $7F3MR$useState, useRef as $7F3MR$useRef, useEffect as $7F3MR$useEffect} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $103da5e0f4a8c171$exports = {};


var $071794a38ae0e339$exports = {};

$parcel$export($071794a38ae0e339$exports, "useCalendarState", () => $071794a38ae0e339$export$6d095e787d2b5e1f);

function $5415b3b7a99138bd$export$eac50920cf2fd59a(date, minValue, maxValue) {
    return minValue != null && date.compare(minValue) < 0 || maxValue != null && date.compare(maxValue) > 0;
}
function $5415b3b7a99138bd$export$f4a51ff076cc9a09(date, duration, locale, minValue, maxValue) {
    let halfDuration = {
    };
    for(let key in duration){
        halfDuration[key] = Math.floor(duration[key] / 2);
        if (halfDuration[key] > 0 && duration[key] % 2 === 0) halfDuration[key]--;
    }
    let aligned = $5415b3b7a99138bd$export$144a00ba6044eb9(date, duration, locale).subtract(halfDuration);
    return $5415b3b7a99138bd$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $5415b3b7a99138bd$export$144a00ba6044eb9(date, duration, locale, minValue, maxValue) {
    // align to the start of the largest unit
    let aligned = date;
    if (duration.years) aligned = $7F3MR$startOfYear(date);
    else if (duration.months) aligned = $7F3MR$startOfMonth(date);
    else if (duration.weeks) aligned = $7F3MR$startOfWeek(date, locale);
    return $5415b3b7a99138bd$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $5415b3b7a99138bd$export$530edbfc915b2b04(date, duration, locale, minValue, maxValue) {
    let d = {
        ...duration
    };
    // subtract 1 from the smallest unit
    if (duration.days) d.days--;
    else if (duration.weeks) d.weeks--;
    else if (duration.months) d.months--;
    else if (duration.years) d.years--;
    let aligned = $5415b3b7a99138bd$export$144a00ba6044eb9(date, duration, locale).subtract(d);
    return $5415b3b7a99138bd$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $5415b3b7a99138bd$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue) {
    if (minValue && date.compare(minValue) >= 0) aligned = $7F3MR$maxDate(aligned, $5415b3b7a99138bd$export$144a00ba6044eb9($7F3MR$toCalendarDate(minValue), duration, locale));
    if (maxValue && date.compare(maxValue) <= 0) aligned = $7F3MR$minDate(aligned, $5415b3b7a99138bd$export$530edbfc915b2b04($7F3MR$toCalendarDate(maxValue), duration, locale));
    return aligned;
}
function $5415b3b7a99138bd$export$4f5203c0d889109e(date, minValue, maxValue) {
    if (minValue) date = $7F3MR$maxDate(date, $7F3MR$toCalendarDate(minValue));
    if (maxValue) date = $7F3MR$minDate(date, $7F3MR$toCalendarDate(maxValue));
    return date;
}






function $071794a38ae0e339$export$6d095e787d2b5e1f(props) {
    let defaultFormatter = $7F3MR$useDateFormatter();
    let resolvedOptions = $7F3MR$useMemo(()=>defaultFormatter.resolvedOptions()
    , [
        defaultFormatter
    ]);
    let { locale: locale , createCalendar: createCalendar , visibleDuration: visibleDuration = {
        months: 1
    } , minValue: minValue , maxValue: maxValue , selectionAlignment: selectionAlignment  } = props;
    let calendar = $7F3MR$useMemo(()=>createCalendar(resolvedOptions.calendar)
    , [
        createCalendar,
        resolvedOptions.calendar
    ]);
    let [value, setControlledValue] = $7F3MR$useControlledState(props.value, props.defaultValue, props.onChange);
    let calendarDateValue = $7F3MR$useMemo(()=>value ? $7F3MR$toCalendar($7F3MR$toCalendarDate(value), calendar) : null
    , [
        value,
        calendar
    ]);
    let timeZone = $7F3MR$useMemo(()=>value && 'timeZone' in value ? value.timeZone : resolvedOptions.timeZone
    , [
        value,
        resolvedOptions.timeZone
    ]);
    let defaultDate = $7F3MR$useMemo(()=>calendarDateValue || $5415b3b7a99138bd$export$4f5203c0d889109e($7F3MR$toCalendar($7F3MR$today(timeZone), calendar), minValue, maxValue)
    , [
        calendarDateValue,
        timeZone,
        calendar,
        minValue,
        maxValue
    ]);
    let [startDate, setStartDate] = $7F3MR$useState(()=>{
        switch(selectionAlignment){
            case 'start':
                return $5415b3b7a99138bd$export$144a00ba6044eb9(defaultDate, visibleDuration, locale, minValue, maxValue);
            case 'end':
                return $5415b3b7a99138bd$export$530edbfc915b2b04(defaultDate, visibleDuration, locale, minValue, maxValue);
            case 'center':
            default:
                return $5415b3b7a99138bd$export$f4a51ff076cc9a09(defaultDate, visibleDuration, locale, minValue, maxValue);
        }
    });
    let [focusedDate, setFocusedDate] = $7F3MR$useState(defaultDate);
    let [isFocused, setFocused] = $7F3MR$useState(props.autoFocus || false);
    let endDate = $7F3MR$useMemo(()=>startDate.add(visibleDuration).subtract({
            days: 1
        })
    , [
        startDate,
        visibleDuration
    ]);
    // Reset focused date and visible range when calendar changes.
    let lastCalendarIdentifier = $7F3MR$useRef(calendar.identifier);
    $7F3MR$useEffect(()=>{
        if (calendar.identifier !== lastCalendarIdentifier.current) {
            let newFocusedDate = $7F3MR$toCalendar(focusedDate, calendar);
            setStartDate($5415b3b7a99138bd$export$f4a51ff076cc9a09(newFocusedDate, visibleDuration, locale, minValue, maxValue));
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
        date = $5415b3b7a99138bd$export$4f5203c0d889109e(date, minValue, maxValue);
        let next = startDate.add(visibleDuration);
        if (date.compare(startDate) < 0) setStartDate($5415b3b7a99138bd$export$530edbfc915b2b04(date, visibleDuration, locale, minValue, maxValue));
        else if (date.compare(next) >= 0) setStartDate($5415b3b7a99138bd$export$144a00ba6044eb9(date, visibleDuration, locale, minValue, maxValue));
        setFocusedDate(date);
    }
    function setValue(newValue) {
        if (!props.isDisabled && !props.isReadOnly) {
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            newValue = $7F3MR$toCalendar(newValue, value?.calendar || new $7F3MR$GregorianCalendar());
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
            setStartDate($5415b3b7a99138bd$export$5bb865b12696a77d(focusedDate, start, visibleDuration, locale, minValue, maxValue));
            setFocusedDate($5415b3b7a99138bd$export$4f5203c0d889109e(focusedDate.add(visibleDuration), minValue, maxValue));
        },
        focusPreviousPage () {
            let start = startDate.subtract(visibleDuration);
            setStartDate($5415b3b7a99138bd$export$5bb865b12696a77d(focusedDate, start, visibleDuration, locale, minValue, maxValue));
            setFocusedDate($5415b3b7a99138bd$export$4f5203c0d889109e(focusedDate.subtract(visibleDuration), minValue, maxValue));
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
            return $5415b3b7a99138bd$export$eac50920cf2fd59a(date, minValue, maxValue);
        },
        isSelected (date) {
            return calendarDateValue != null && $7F3MR$isSameDay(date, calendarDateValue);
        },
        isCellFocused (date) {
            return isFocused && focusedDate && $7F3MR$isSameDay(date, focusedDate);
        },
        isCellDisabled (date) {
            return props.isDisabled || date.compare(startDate) < 0 || date.compare(endDate) > 0 || $5415b3b7a99138bd$export$eac50920cf2fd59a(date, minValue, maxValue);
        },
        isPreviousVisibleRangeInvalid () {
            return $5415b3b7a99138bd$export$eac50920cf2fd59a(startDate.subtract({
                days: 1
            }), minValue, maxValue);
        },
        isNextVisibleRangeInvalid () {
            return $5415b3b7a99138bd$export$eac50920cf2fd59a(endDate.add({
                days: 1
            }), minValue, maxValue);
        }
    };
}


var $b4f14c36da84ed2c$exports = {};

$parcel$export($b4f14c36da84ed2c$exports, "useRangeCalendarState", () => $b4f14c36da84ed2c$export$9a987164d97ecc90);





function $b4f14c36da84ed2c$export$9a987164d97ecc90(props) {
    let { value: valueProp , defaultValue: defaultValue , onChange: onChange , createCalendar: createCalendar , locale: locale , visibleDuration: visibleDuration = {
        months: 1
    } , minValue: minValue , maxValue: maxValue , ...calendarProps } = props;
    let [value, setValue] = $7F3MR$useControlledState(valueProp, defaultValue, onChange);
    let [anchorDate, setAnchorDate] = $7F3MR$useState(null);
    let alignment = 'center';
    if (value && value.start && value.end) {
        let start = $5415b3b7a99138bd$export$f4a51ff076cc9a09($7F3MR$toCalendarDate(value.start), visibleDuration, locale, minValue, maxValue);
        let end = start.add(visibleDuration).subtract({
            days: 1
        });
        if (value.end.compare(end) > 0) alignment = 'start';
    }
    let calendar = $071794a38ae0e339$export$6d095e787d2b5e1f({
        ...calendarProps,
        value: value && value.start,
        createCalendar: createCalendar,
        locale: locale,
        visibleDuration: visibleDuration,
        minValue: minValue,
        maxValue: maxValue,
        selectionAlignment: alignment
    });
    let highlightedRange = anchorDate ? $b4f14c36da84ed2c$var$makeRange(anchorDate, calendar.focusedDate) : value && $b4f14c36da84ed2c$var$makeRange(value.start, value.end);
    let selectDate = (date)=>{
        if (props.isReadOnly) return;
        if (!anchorDate) setAnchorDate(date);
        else {
            let range = $b4f14c36da84ed2c$var$makeRange(anchorDate, date);
            setValue({
                start: $b4f14c36da84ed2c$var$convertValue(range.start, value?.start),
                end: $b4f14c36da84ed2c$var$convertValue(range.end, value?.end)
            });
            setAnchorDate(null);
        }
    };
    let [isDragging, setDragging] = $7F3MR$useState(false);
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
function $b4f14c36da84ed2c$var$makeRange(start, end) {
    if (!start || !end) return null;
    if (end.compare(start) < 0) [start, end] = [
        end,
        start
    ];
    return {
        start: $7F3MR$toCalendarDate(start),
        end: $7F3MR$toCalendarDate(end)
    };
}
function $b4f14c36da84ed2c$var$convertValue(newValue, oldValue) {
    // The display calendar should not have any effect on the emitted value.
    // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
    newValue = $7F3MR$toCalendar(newValue, oldValue?.calendar || new $7F3MR$GregorianCalendar());
    // Preserve time if the input value had one.
    if (oldValue && 'hour' in oldValue) return oldValue.set(newValue);
    return newValue;
}




export {$071794a38ae0e339$export$6d095e787d2b5e1f as useCalendarState, $b4f14c36da84ed2c$export$9a987164d97ecc90 as useRangeCalendarState};
//# sourceMappingURL=module.js.map
