var $fVQNv$internationalizeddate = require("@internationalized/date");
var $fVQNv$reactstatelyutils = require("@react-stately/utils");
var $fVQNv$react = require("react");

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
var $f0afaa11cdb4d9e5$exports = {};

$parcel$export($f0afaa11cdb4d9e5$exports, "useDatePickerState", () => $f0afaa11cdb4d9e5$export$87194bb378cc3ac2);



function $b15d33af207752c1$export$eac50920cf2fd59a(value, minValue, maxValue) {
    return value != null && (minValue != null && value.compare(minValue) < 0 || maxValue != null && value.compare(maxValue) > 0);
}
const $b15d33af207752c1$var$DEFAULT_FIELD_OPTIONS = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
};
function $b15d33af207752c1$export$7e319ea407e63bc0(fieldOptions, options) {
    fieldOptions = {
        ...$b15d33af207752c1$var$DEFAULT_FIELD_OPTIONS,
        ...fieldOptions
    };
    let granularity = options.granularity || 'minute';
    let keys = Object.keys(fieldOptions);
    let startIdx = keys.indexOf(options.maxGranularity ?? 'year');
    if (startIdx < 0) startIdx = 0;
    let endIdx = keys.indexOf(granularity);
    if (endIdx < 0) endIdx = 2;
    if (startIdx > endIdx) throw new Error('maxGranularity must be greater than granularity');
    let opts1 = keys.slice(startIdx, endIdx + 1).reduce((opts, key)=>{
        opts[key] = fieldOptions[key];
        return opts;
    }, {
    });
    if (options.hourCycle != null) opts1.hour12 = options.hourCycle === 12;
    opts1.timeZone = options.timeZone || 'UTC';
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    if (hasTime && options.timeZone && !options.hideTimeZone) opts1.timeZoneName = 'short';
    return opts1;
}
function $b15d33af207752c1$export$c5221a78ef73c5e9(placeholderValue) {
    if (placeholderValue && 'hour' in placeholderValue) return placeholderValue;
    return new $fVQNv$internationalizeddate.Time();
}
function $b15d33af207752c1$export$61a490a80c552550(value, calendar) {
    if (value === null) return null;
    if (!value) return undefined;
    return $fVQNv$internationalizeddate.toCalendar(value, calendar);
}
function $b15d33af207752c1$export$66aa2b09de4b1ea5(placeholderValue, granularity, calendar, timeZone) {
    if (placeholderValue) return $b15d33af207752c1$export$61a490a80c552550(placeholderValue, calendar);
    let date = $fVQNv$internationalizeddate.toCalendar($fVQNv$internationalizeddate.now(timeZone).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }), calendar);
    if (granularity === 'year' || granularity === 'month' || granularity === 'day') return $fVQNv$internationalizeddate.toCalendarDate(date);
    if (!timeZone) return $fVQNv$internationalizeddate.toCalendarDateTime(date);
    return date;
}
function $b15d33af207752c1$export$2440da353cedad43(v, granularity) {
    // Compute default granularity and time zone from the value. If the value becomes null, keep the last values.
    let lastValue = $fVQNv$react.useRef(v);
    if (v) lastValue.current = v;
    v = lastValue.current;
    let defaultTimeZone = v && 'timeZone' in v ? v.timeZone : undefined;
    granularity = granularity || (v && 'minute' in v ? 'minute' : 'day');
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    return [
        granularity,
        defaultTimeZone
    ];
}





function $f0afaa11cdb4d9e5$export$87194bb378cc3ac2(props) {
    let [isOpen1, setOpen] = $fVQNv$react.useState(false);
    let [value, setValue] = $fVQNv$reactstatelyutils.useControlledState(props.value, props.defaultValue || null, props.onChange);
    let v = value || props.placeholderValue;
    let [granularity, defaultTimeZone] = $b15d33af207752c1$export$2440da353cedad43(v, props.granularity);
    let dateValue = value != null ? value.toDate(defaultTimeZone ?? 'UTC') : null;
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second' || granularity === 'millisecond';
    let [selectedDate, setSelectedDate] = $fVQNv$react.useState(null);
    let [selectedTime, setSelectedTime] = $fVQNv$react.useState(null);
    if (value) {
        selectedDate = value;
        if ('hour' in value) selectedTime = value;
    }
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let commitValue = (date, time)=>{
        setValue('timeZone' in time ? time.set($fVQNv$internationalizeddate.toDateFields(date)) : $fVQNv$internationalizeddate.toCalendarDateTime(date, time));
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let selectDate = (newValue)=>{
        if (hasTime) {
            if (selectedTime) commitValue(newValue, selectedTime);
            else setSelectedDate(newValue);
        } else setValue(newValue);
        if (!hasTime) setOpen(false);
    };
    let selectTime = (newValue)=>{
        if (selectedDate) commitValue(selectedDate, newValue);
        else setSelectedTime(newValue);
    };
    let validationState = props.validationState || ($b15d33af207752c1$export$eac50920cf2fd59a(value, props.minValue, props.maxValue) ? 'invalid' : null);
    return {
        value: value,
        setValue: setValue,
        dateValue: selectedDate,
        timeValue: selectedTime,
        setDateValue: selectDate,
        setTimeValue: selectTime,
        granularity: granularity,
        isOpen: isOpen1,
        setOpen (isOpen) {
            // Commit the selected date when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time was set and not the date, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !value && selectedDate && hasTime) commitValue(selectedDate, selectedTime || $b15d33af207752c1$export$c5221a78ef73c5e9(props.placeholderValue));
            setOpen(isOpen);
        },
        validationState: validationState,
        formatValue (locale, fieldOptions) {
            if (!dateValue) return '';
            let formatOptions = $b15d33af207752c1$export$7e319ea407e63bc0(fieldOptions, {
                granularity: granularity,
                timeZone: defaultTimeZone,
                hideTimeZone: props.hideTimeZone,
                hourCycle: props.hourCycle
            });
            let formatter = new $fVQNv$internationalizeddate.DateFormatter(locale, formatOptions);
            return formatter.format(dateValue);
        }
    };
}


var $db920376312b84b4$exports = {};

$parcel$export($db920376312b84b4$exports, "useDatePickerFieldState", () => $db920376312b84b4$export$714a241b39a650d6);




const $db920376312b84b4$var$EDITABLE_SEGMENTS = {
    year: true,
    month: true,
    day: true,
    hour: true,
    minute: true,
    second: true,
    dayPeriod: true,
    era: true
};
const $db920376312b84b4$var$PAGE_STEP = {
    year: 5,
    month: 2,
    day: 7,
    hour: 2,
    minute: 15,
    second: 15
};
// Node seems to convert everything to lowercase...
const $db920376312b84b4$var$TYPE_MAPPING = {
    dayperiod: 'dayPeriod'
};
function $db920376312b84b4$export$714a241b39a650d6(props) {
    let { locale: locale , createCalendar: createCalendar , hideTimeZone: hideTimeZone  } = props;
    let v1 = props.value || props.defaultValue || props.placeholderValue;
    let [granularity, defaultTimeZone] = $b15d33af207752c1$export$2440da353cedad43(v1, props.granularity);
    let timeZone = defaultTimeZone || 'UTC';
    // props.granularity must actually exist in the value if one is provided.
    if (v1 && !(granularity in v1)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v1.toString());
    let formatOpts = $fVQNv$react.useMemo(()=>({
            granularity: granularity,
            maxGranularity: props.maxGranularity ?? 'year',
            timeZone: defaultTimeZone,
            hideTimeZone: hideTimeZone,
            hourCycle: props.hourCycle
        })
    , [
        props.maxGranularity,
        granularity,
        props.hourCycle,
        defaultTimeZone,
        hideTimeZone
    ]);
    let opts = $fVQNv$react.useMemo(()=>$b15d33af207752c1$export$7e319ea407e63bc0({
        }, formatOpts)
    , [
        formatOpts
    ]);
    let dateFormatter = $fVQNv$react.useMemo(()=>new $fVQNv$internationalizeddate.DateFormatter(locale, opts)
    , [
        locale,
        opts
    ]);
    let resolvedOptions = $fVQNv$react.useMemo(()=>dateFormatter.resolvedOptions()
    , [
        dateFormatter
    ]);
    let calendar = $fVQNv$react.useMemo(()=>createCalendar(resolvedOptions.calendar)
    , [
        createCalendar,
        resolvedOptions.calendar
    ]);
    // Determine how many editable segments there are for validation purposes.
    // The result is cached for performance.
    let allSegments = $fVQNv$react.useMemo(()=>dateFormatter.formatToParts(new Date()).filter((seg)=>$db920376312b84b4$var$EDITABLE_SEGMENTS[seg.type]
        ).reduce((p, seg)=>(p[seg.type] = true, p)
        , {
        })
    , [
        dateFormatter
    ]);
    let [validSegments, setValidSegments] = $fVQNv$react.useState(()=>props.value || props.defaultValue ? {
            ...allSegments
        } : {
        }
    );
    // We keep track of the placeholder date separately in state so that onChange is not called
    // until all segments are set. If the value === null (not undefined), then assume the component
    // is controlled, so use the placeholder as the value until all segments are entered so it doesn't
    // change from uncontrolled to controlled and emit a warning.
    let [placeholderDate, setPlaceholderDate] = $fVQNv$react.useState(()=>$b15d33af207752c1$export$66aa2b09de4b1ea5(props.placeholderValue, granularity, calendar, defaultTimeZone)
    );
    // Reset placeholder when calendar changes
    let lastCalendarIdentifier = $fVQNv$react.useRef(calendar.identifier);
    $fVQNv$react.useEffect(()=>{
        if (calendar.identifier !== lastCalendarIdentifier.current) {
            lastCalendarIdentifier.current = calendar.identifier;
            setPlaceholderDate((placeholder)=>Object.keys(validSegments).length > 0 ? $fVQNv$internationalizeddate.toCalendar(placeholder, calendar) : $b15d33af207752c1$export$66aa2b09de4b1ea5(props.placeholderValue, granularity, calendar, defaultTimeZone)
            );
        }
    }, [
        calendar,
        granularity,
        validSegments,
        defaultTimeZone,
        props.placeholderValue
    ]);
    let [value1, setDate] = $fVQNv$reactstatelyutils.useControlledState(props.value, props.defaultValue, props.onChange);
    let calendarValue = $fVQNv$react.useMemo(()=>$b15d33af207752c1$export$61a490a80c552550(value1, calendar)
    , [
        value1,
        calendar
    ]);
    // If there is a value prop, and some segments were previously placeholders, mark them all as valid.
    if (value1 && Object.keys(validSegments).length < Object.keys(allSegments).length) {
        validSegments = {
            ...allSegments
        };
        setValidSegments(validSegments);
    }
    // If the value is set to null and all segments are valid, reset the placeholder.
    if (value1 == null && Object.keys(validSegments).length === Object.keys(allSegments).length) {
        validSegments = {
        };
        setValidSegments(validSegments);
        setPlaceholderDate($b15d33af207752c1$export$66aa2b09de4b1ea5(props.placeholderValue, granularity, calendar, defaultTimeZone));
    }
    // If all segments are valid, use the date from state, otherwise use the placeholder date.
    let displayValue = calendarValue && Object.keys(validSegments).length >= Object.keys(allSegments).length ? calendarValue : placeholderDate;
    let setValue = (newValue)=>{
        if (props.isDisabled || props.isReadOnly) return;
        if (Object.keys(validSegments).length >= Object.keys(allSegments).length) {
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            newValue = $fVQNv$internationalizeddate.toCalendar(newValue, v1?.calendar || new $fVQNv$internationalizeddate.GregorianCalendar());
            setDate(newValue);
        } else setPlaceholderDate(newValue);
    };
    let dateValue = $fVQNv$react.useMemo(()=>displayValue.toDate(timeZone)
    , [
        displayValue,
        timeZone
    ]);
    let segments = $fVQNv$react.useMemo(()=>dateFormatter.formatToParts(dateValue).map((segment)=>{
            let isEditable = $db920376312b84b4$var$EDITABLE_SEGMENTS[segment.type];
            if (segment.type === 'era' && calendar.getEras().length === 1) isEditable = false;
            return {
                type: $db920376312b84b4$var$TYPE_MAPPING[segment.type] || segment.type,
                text: segment.value,
                ...$db920376312b84b4$var$getSegmentLimits(displayValue, segment.type, resolvedOptions),
                isPlaceholder: $db920376312b84b4$var$EDITABLE_SEGMENTS[segment.type] && !validSegments[segment.type],
                isEditable: isEditable
            };
        })
    , [
        dateValue,
        validSegments,
        dateFormatter,
        resolvedOptions,
        displayValue,
        calendar
    ]);
    let hasEra = $fVQNv$react.useMemo(()=>segments.some((s)=>s.type === 'era'
        )
    , [
        segments
    ]);
    let markValid = (part)=>{
        validSegments[part] = true;
        if (part === 'year' && hasEra) validSegments.era = true;
        setValidSegments({
            ...validSegments
        });
    };
    let adjustSegment = (type, amount)=>{
        markValid(type);
        setValue($db920376312b84b4$var$addSegment(displayValue, type, amount, resolvedOptions));
    };
    let validationState = props.validationState || ($b15d33af207752c1$export$eac50920cf2fd59a(calendarValue, props.minValue, props.maxValue) ? 'invalid' : null);
    return {
        value: calendarValue,
        dateValue: dateValue,
        setValue: setValue,
        segments: segments,
        dateFormatter: dateFormatter,
        validationState: validationState,
        granularity: granularity,
        increment (part) {
            adjustSegment(part, 1);
        },
        decrement (part) {
            adjustSegment(part, -1);
        },
        incrementPage (part) {
            adjustSegment(part, $db920376312b84b4$var$PAGE_STEP[part] || 1);
        },
        decrementPage (part) {
            adjustSegment(part, -($db920376312b84b4$var$PAGE_STEP[part] || 1));
        },
        setSegment (part, v) {
            markValid(part);
            setValue($db920376312b84b4$var$setSegment(displayValue, part, v, resolvedOptions));
        },
        confirmPlaceholder (part) {
            if (props.isDisabled || props.isReadOnly) return;
            if (!part) {
                // Confirm the rest of the placeholder if any of the segments are valid.
                let numValid = Object.keys(validSegments).length;
                if (numValid > 0 && numValid < Object.keys(allSegments).length) {
                    validSegments = {
                        ...allSegments
                    };
                    setValidSegments(validSegments);
                    setValue(displayValue.copy());
                }
            } else if (!validSegments[part]) {
                markValid(part);
                setValue(displayValue.copy());
            }
        },
        clearSegment (part) {
            delete validSegments[part];
            setValidSegments({
                ...validSegments
            });
            let placeholder = $b15d33af207752c1$export$66aa2b09de4b1ea5(props.placeholderValue, granularity, calendar, defaultTimeZone);
            let value = displayValue;
            // Reset day period to default without changing the hour.
            if (part === 'dayPeriod' && 'hour' in displayValue && 'hour' in placeholder) {
                let isPM = displayValue.hour >= 12;
                let shouldBePM = placeholder.hour >= 12;
                if (isPM && !shouldBePM) value = displayValue.set({
                    hour: displayValue.hour - 12
                });
                else if (!isPM && shouldBePM) value = displayValue.set({
                    hour: displayValue.hour + 12
                });
            } else if (part in displayValue) value = displayValue.set({
                [part]: placeholder[part]
            });
            setDate(null);
            setValue(value);
        },
        getFormatOptions (fieldOptions) {
            return $b15d33af207752c1$export$7e319ea407e63bc0(fieldOptions, formatOpts);
        }
    };
}
function $db920376312b84b4$var$getSegmentLimits(date, type, options) {
    switch(type){
        case 'era':
            {
                let eras = date.calendar.getEras();
                return {
                    value: eras.indexOf(date.era),
                    minValue: 0,
                    maxValue: eras.length - 1
                };
            }
        case 'year':
            return {
                value: date.year,
                minValue: 1,
                maxValue: date.calendar.getYearsInEra(date)
            };
        case 'month':
            return {
                value: date.month,
                minValue: $fVQNv$internationalizeddate.getMinimumMonthInYear(date),
                maxValue: date.calendar.getMonthsInYear(date)
            };
        case 'day':
            return {
                value: date.day,
                minValue: $fVQNv$internationalizeddate.getMinimumDayInMonth(date),
                maxValue: date.calendar.getDaysInMonth(date)
            };
    }
    if ('hour' in date) switch(type){
        case 'dayPeriod':
            return {
                value: date.hour >= 12 ? 12 : 0,
                minValue: 0,
                maxValue: 12
            };
        case 'hour':
            if (options.hour12) {
                let isPM = date.hour >= 12;
                return {
                    value: date.hour,
                    minValue: isPM ? 12 : 0,
                    maxValue: isPM ? 23 : 11
                };
            }
            return {
                value: date.hour,
                minValue: 0,
                maxValue: 23
            };
        case 'minute':
            return {
                value: date.minute,
                minValue: 0,
                maxValue: 59
            };
        case 'second':
            return {
                value: date.second,
                minValue: 0,
                maxValue: 59
            };
    }
    return {
    };
}
function $db920376312b84b4$var$addSegment(value, part, amount, options) {
    switch(part){
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            return value.cycle(part, amount, {
                round: part === 'year'
            });
    }
    if ('hour' in value) switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let isPM = hours >= 12;
                return value.set({
                    hour: isPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
        case 'minute':
        case 'second':
            return value.cycle(part, amount, {
                round: part !== 'hour',
                hourCycle: options.hour12 ? 12 : 24
            });
    }
}
function $db920376312b84b4$var$setSegment(value, part, segmentValue, options) {
    switch(part){
        case 'day':
        case 'month':
        case 'year':
            return value.set({
                [part]: segmentValue
            });
    }
    if ('hour' in value) switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let wasPM = hours >= 12;
                let isPM = segmentValue >= 12;
                if (isPM === wasPM) return value;
                return value.set({
                    hour: wasPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
            // In 12 hour time, ensure that AM/PM does not change
            if (options.hour12) {
                let hours = value.hour;
                let wasPM = hours >= 12;
                if (!wasPM && segmentValue === 12) segmentValue = 0;
                if (wasPM && segmentValue < 12) segmentValue += 12;
            }
        // fallthrough
        case 'minute':
        case 'second':
            return value.set({
                [part]: segmentValue
            });
    }
}


var $142433ca1a8bbced$exports = {};

$parcel$export($142433ca1a8bbced$exports, "useDateRangePickerState", () => $142433ca1a8bbced$export$e50a61c1de9f574);




function $142433ca1a8bbced$export$e50a61c1de9f574(props) {
    let [isOpen1, setOpen] = $fVQNv$react.useState(false);
    let [controlledValue, setControlledValue] = $fVQNv$reactstatelyutils.useControlledState(props.value, props.defaultValue || null, props.onChange);
    let [placeholderValue, setPlaceholderValue] = $fVQNv$react.useState(()=>controlledValue || {
            start: null,
            end: null
        }
    );
    // Reset the placeholder if the value prop is set to null.
    if (controlledValue == null && placeholderValue.start && placeholderValue.end) {
        placeholderValue = {
            start: null,
            end: null
        };
        setPlaceholderValue(placeholderValue);
    }
    let value1 = controlledValue || placeholderValue;
    let valueRef = $fVQNv$react.useRef(value1);
    valueRef.current = value1;
    let setValue = (value)=>{
        valueRef.current = value;
        setPlaceholderValue(value);
        if (value?.start && value.end) setControlledValue(value);
        else setControlledValue(null);
    };
    let v = value1?.start || value1?.end || props.placeholderValue;
    let [granularity, defaultTimeZone] = $b15d33af207752c1$export$2440da353cedad43(v, props.granularity);
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second' || granularity === 'millisecond';
    let [dateRange1, setSelectedDateRange] = $fVQNv$react.useState(null);
    let [timeRange1, setSelectedTimeRange] = $fVQNv$react.useState(null);
    if (value1 && value1.start && value1.end) {
        dateRange1 = value1;
        if ('hour' in value1.start) timeRange1 = value1;
    }
    let commitValue = (dateRange, timeRange)=>{
        setValue({
            start: 'timeZone' in timeRange.start ? timeRange.start.set($fVQNv$internationalizeddate.toDateFields(dateRange.start)) : $fVQNv$internationalizeddate.toCalendarDateTime(dateRange.start, timeRange.start),
            end: 'timeZone' in timeRange.end ? timeRange.end.set($fVQNv$internationalizeddate.toDateFields(dateRange.end)) : $fVQNv$internationalizeddate.toCalendarDateTime(dateRange.end, timeRange.end)
        });
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let setDateRange = (range)=>{
        if (hasTime) {
            if (range.start && range.end && timeRange1?.start && timeRange1?.end) commitValue(range, timeRange1);
            else setSelectedDateRange(range);
        } else if (range.start && range.end) setValue(range);
        else setSelectedDateRange(range);
        if (!hasTime) setOpen(false);
    };
    let setTimeRange = (range)=>{
        if (dateRange1?.start && dateRange1?.end && range.start && range.end) commitValue(dateRange1, range);
        else setSelectedTimeRange(range);
    };
    let validationState = props.validationState || (value1 != null && ($b15d33af207752c1$export$eac50920cf2fd59a(value1.start, props.minValue, props.maxValue) || $b15d33af207752c1$export$eac50920cf2fd59a(value1.end, props.minValue, props.maxValue) || value1.end != null && value1.start != null && value1.end.compare(value1.start) < 0) ? 'invalid' : null);
    return {
        value: value1,
        setValue: setValue,
        dateRange: dateRange1,
        timeRange: timeRange1,
        granularity: granularity,
        setDate (part, date) {
            setDateRange({
                ...dateRange1,
                [part]: date
            });
        },
        setTime (part, time) {
            setTimeRange({
                ...timeRange1,
                [part]: time
            });
        },
        setDateTime (part, dateTime) {
            setValue({
                ...value1,
                [part]: dateTime
            });
        },
        setDateRange: setDateRange,
        setTimeRange: setTimeRange,
        isOpen: isOpen1,
        setOpen (isOpen) {
            // Commit the selected date range when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time range was set and not the date range, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !(value1?.start && value1?.end) && dateRange1?.start && dateRange1?.end && hasTime) commitValue(dateRange1, {
                start: timeRange1?.start || $b15d33af207752c1$export$c5221a78ef73c5e9(props.placeholderValue),
                end: timeRange1?.end || $b15d33af207752c1$export$c5221a78ef73c5e9(props.placeholderValue)
            });
            setOpen(isOpen);
        },
        validationState: validationState,
        formatValue (locale, fieldOptions) {
            if (!value1 || !value1.start || !value1.end) return '';
            let startTimeZone = 'timeZone' in value1.start ? value1.start.timeZone : undefined;
            let startGranularity = props.granularity || (value1.start && 'minute' in value1.start ? 'minute' : 'day');
            let endTimeZone = 'timeZone' in value1.end ? value1.end.timeZone : undefined;
            let endGranularity = props.granularity || (value1.end && 'minute' in value1.end ? 'minute' : 'day');
            let startOptions = $b15d33af207752c1$export$7e319ea407e63bc0(fieldOptions, {
                granularity: startGranularity,
                timeZone: startTimeZone,
                hideTimeZone: props.hideTimeZone,
                hourCycle: props.hourCycle
            });
            let startFormatter = new $fVQNv$internationalizeddate.DateFormatter(locale, startOptions);
            let endFormatter;
            if (startTimeZone === endTimeZone && startGranularity === endGranularity) {
                // Use formatRange, as it results in shorter output when some of the fields
                // are shared between the start and end dates (e.g. the same month).
                // Formatting will fail if the end date is before the start date. Fall back below when that happens.
                try {
                    return startFormatter.formatRange(value1.start.toDate(startTimeZone), value1.end.toDate(endTimeZone));
                } catch (e) {
                // ignore
                }
                endFormatter = startFormatter;
            } else {
                let endOptions = $b15d33af207752c1$export$7e319ea407e63bc0(fieldOptions, {
                    granularity: endGranularity,
                    timeZone: endTimeZone,
                    hideTimeZone: props.hideTimeZone,
                    hourCycle: props.hourCycle
                });
                endFormatter = new $fVQNv$internationalizeddate.DateFormatter(locale, endOptions);
            }
            return `${startFormatter.format(value1.start.toDate(startTimeZone))} – ${endFormatter.format(value1.end.toDate(endTimeZone))}`;
        },
        confirmPlaceholder () {
            // Need to use ref value here because the value can be set in the same tick as
            // a blur, which means the component won't have re-rendered yet.
            let value = valueRef.current;
            if (value && Boolean(value.start) !== Boolean(value.end)) {
                let calendar = (value.start || value.end).calendar;
                let placeholder = $b15d33af207752c1$export$66aa2b09de4b1ea5(props.placeholderValue, granularity, calendar, defaultTimeZone);
                setValue({
                    start: value.start || placeholder,
                    end: value.end || placeholder
                });
            }
        }
    };
}


var $15e3a6cb74406331$exports = {};

$parcel$export($15e3a6cb74406331$exports, "useTimeFieldState", () => $15e3a6cb74406331$export$fd53cef0cc796101);




function $15e3a6cb74406331$export$fd53cef0cc796101(props) {
    let { placeholderValue: placeholderValue = new $fVQNv$internationalizeddate.Time() , minValue: minValue , maxValue: maxValue , granularity: granularity  } = props;
    let [value, setValue] = $fVQNv$reactstatelyutils.useControlledState(props.value, props.defaultValue, props.onChange);
    let v = value || placeholderValue;
    let day = v && 'day' in v ? v : undefined;
    let placeholderDate = $fVQNv$react.useMemo(()=>$15e3a6cb74406331$var$convertValue(placeholderValue)
    , [
        placeholderValue
    ]);
    let minDate = $fVQNv$react.useMemo(()=>$15e3a6cb74406331$var$convertValue(minValue, day)
    , [
        minValue,
        day
    ]);
    let maxDate = $fVQNv$react.useMemo(()=>$15e3a6cb74406331$var$convertValue(maxValue, day)
    , [
        maxValue,
        day
    ]);
    let dateTime = $fVQNv$react.useMemo(()=>value == null ? null : $15e3a6cb74406331$var$convertValue(value)
    , [
        value
    ]);
    let onChange = (newValue)=>{
        setValue(v && 'day' in v ? newValue : newValue && $fVQNv$internationalizeddate.toTime(newValue));
    };
    return $db920376312b84b4$export$714a241b39a650d6({
        ...props,
        value: dateTime,
        defaultValue: undefined,
        minValue: minDate,
        maxValue: maxDate,
        onChange: onChange,
        granularity: granularity || 'minute',
        maxGranularity: 'hour',
        placeholderValue: placeholderDate
    });
}
function $15e3a6cb74406331$var$convertValue(value, date = $fVQNv$internationalizeddate.today($fVQNv$internationalizeddate.getLocalTimeZone())) {
    if (!value) return null;
    if ('day' in value) return value;
    return $fVQNv$internationalizeddate.toCalendarDateTime(date, value);
}


$parcel$exportWildcard(module.exports, $f0afaa11cdb4d9e5$exports);
$parcel$exportWildcard(module.exports, $db920376312b84b4$exports);
$parcel$exportWildcard(module.exports, $142433ca1a8bbced$exports);
$parcel$exportWildcard(module.exports, $15e3a6cb74406331$exports);


//# sourceMappingURL=main.js.map
