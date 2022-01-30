import "./main.css";
import {createCalendar as $fhxpv$createCalendar, endOfMonth as $fhxpv$endOfMonth, startOfWeek as $fhxpv$startOfWeek, getWeeksInMonth as $fhxpv$getWeeksInMonth, isSameMonth as $fhxpv$isSameMonth, isSameDay as $fhxpv$isSameDay, getDayOfWeek as $fhxpv$getDayOfWeek, isEqualDay as $fhxpv$isEqualDay, isToday as $fhxpv$isToday} from "@internationalized/date";
import $fhxpv$react, {useMemo as $fhxpv$useMemo, useRef as $fhxpv$useRef, useState as $fhxpv$useState, useEffect as $fhxpv$useEffect} from "react";
import {useCalendar as $fhxpv$useCalendar, useCalendarGrid as $fhxpv$useCalendarGrid, useCalendarCell as $fhxpv$useCalendarCell, useRangeCalendar as $fhxpv$useRangeCalendar} from "@react-aria/calendar";
import {useCalendarState as $fhxpv$useCalendarState, useRangeCalendarState as $fhxpv$useRangeCalendarState} from "@react-stately/calendar";
import {useLocale as $fhxpv$useLocale, useDateFormatter as $fhxpv$useDateFormatter} from "@react-aria/i18n";
import {ActionButton as $fhxpv$ActionButton} from "@react-spectrum/button";
import $fhxpv$spectrumiconsuiChevronLeftLarge from "@spectrum-icons/ui/ChevronLeftLarge";
import $fhxpv$spectrumiconsuiChevronRightLarge from "@spectrum-icons/ui/ChevronRightLarge";
import {classNames as $fhxpv$classNames} from "@react-spectrum/utils";
import {useProviderProps as $fhxpv$useProviderProps} from "@react-spectrum/provider";
import {VisuallyHidden as $fhxpv$VisuallyHidden} from "@react-aria/visually-hidden";
import {mergeProps as $fhxpv$mergeProps} from "@react-aria/utils";
import {useFocusRing as $fhxpv$useFocusRing} from "@react-aria/focus";
import {useHover as $fhxpv$useHover} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $78ebab2ea7d4dce7$exports = {};

$parcel$export($78ebab2ea7d4dce7$exports, "Calendar", () => $78ebab2ea7d4dce7$export$e1aef45b828286de);






var $379ac1916cfdd10c$exports = {};

$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar", () => $379ac1916cfdd10c$export$2d9837ea36f7a875, (v) => $379ac1916cfdd10c$export$2d9837ea36f7a875 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar--padded", () => $379ac1916cfdd10c$export$8d90e3a3d21fe428, (v) => $379ac1916cfdd10c$export$8d90e3a3d21fe428 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-header", () => $379ac1916cfdd10c$export$7efb9b56af6e2d09, (v) => $379ac1916cfdd10c$export$7efb9b56af6e2d09 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-monthHeader", () => $379ac1916cfdd10c$export$185018e73e57145f, (v) => $379ac1916cfdd10c$export$185018e73e57145f = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-title", () => $379ac1916cfdd10c$export$98ee27555a2b7c01, (v) => $379ac1916cfdd10c$export$98ee27555a2b7c01 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-prevMonth", () => $379ac1916cfdd10c$export$d4c1c2a202a50db2, (v) => $379ac1916cfdd10c$export$d4c1c2a202a50db2 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-nextMonth", () => $379ac1916cfdd10c$export$7876229ab722b448, (v) => $379ac1916cfdd10c$export$7876229ab722b448 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-months", () => $379ac1916cfdd10c$export$5dacd232bfef6687, (v) => $379ac1916cfdd10c$export$5dacd232bfef6687 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-dayOfWeek", () => $379ac1916cfdd10c$export$7ff21fe81b21fa51, (v) => $379ac1916cfdd10c$export$7ff21fe81b21fa51 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-body", () => $379ac1916cfdd10c$export$33407a73687c0e62, (v) => $379ac1916cfdd10c$export$33407a73687c0e62 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-table", () => $379ac1916cfdd10c$export$27f4c38933cceedf, (v) => $379ac1916cfdd10c$export$27f4c38933cceedf = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-tableCell", () => $379ac1916cfdd10c$export$292b81cfd590634d, (v) => $379ac1916cfdd10c$export$292b81cfd590634d = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-date", () => $379ac1916cfdd10c$export$c20fe43d14f8fa36, (v) => $379ac1916cfdd10c$export$c20fe43d14f8fa36 = v);
$parcel$export($379ac1916cfdd10c$exports, "spectrum-Calendar-dateText", () => $379ac1916cfdd10c$export$cc48a6e73fdb7719, (v) => $379ac1916cfdd10c$export$cc48a6e73fdb7719 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-disabled", () => $379ac1916cfdd10c$export$d35bc1e505d1ebbf, (v) => $379ac1916cfdd10c$export$d35bc1e505d1ebbf = v);
$parcel$export($379ac1916cfdd10c$exports, "is-outsideMonth", () => $379ac1916cfdd10c$export$93ff5b06817b3d41, (v) => $379ac1916cfdd10c$export$93ff5b06817b3d41 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-focused", () => $379ac1916cfdd10c$export$e7dc768d35940237, (v) => $379ac1916cfdd10c$export$e7dc768d35940237 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-range-selection", () => $379ac1916cfdd10c$export$cd2839d8bb0c6407, (v) => $379ac1916cfdd10c$export$cd2839d8bb0c6407 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-range-start", () => $379ac1916cfdd10c$export$4ce7d3d24e42e411, (v) => $379ac1916cfdd10c$export$4ce7d3d24e42e411 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-selection-start", () => $379ac1916cfdd10c$export$f0091c9d6b8c19d3, (v) => $379ac1916cfdd10c$export$f0091c9d6b8c19d3 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-range-end", () => $379ac1916cfdd10c$export$52890a3cb1ab46b, (v) => $379ac1916cfdd10c$export$52890a3cb1ab46b = v);
$parcel$export($379ac1916cfdd10c$exports, "is-selection-end", () => $379ac1916cfdd10c$export$50722ae5663230f9, (v) => $379ac1916cfdd10c$export$50722ae5663230f9 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-range-selecting", () => $379ac1916cfdd10c$export$7a763a0407a04336, (v) => $379ac1916cfdd10c$export$7a763a0407a04336 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-today", () => $379ac1916cfdd10c$export$189f6cc7eaf68d8b, (v) => $379ac1916cfdd10c$export$189f6cc7eaf68d8b = v);
$parcel$export($379ac1916cfdd10c$exports, "is-selected", () => $379ac1916cfdd10c$export$1e0fb04f31d3c22a, (v) => $379ac1916cfdd10c$export$1e0fb04f31d3c22a = v);
$parcel$export($379ac1916cfdd10c$exports, "is-hovered", () => $379ac1916cfdd10c$export$b8813cd5d7824ce7, (v) => $379ac1916cfdd10c$export$b8813cd5d7824ce7 = v);
$parcel$export($379ac1916cfdd10c$exports, "is-pressed", () => $379ac1916cfdd10c$export$15b73a232798b8d3, (v) => $379ac1916cfdd10c$export$15b73a232798b8d3 = v);
var $379ac1916cfdd10c$export$2d9837ea36f7a875;
var $379ac1916cfdd10c$export$8d90e3a3d21fe428;
var $379ac1916cfdd10c$export$7efb9b56af6e2d09;
var $379ac1916cfdd10c$export$185018e73e57145f;
var $379ac1916cfdd10c$export$98ee27555a2b7c01;
var $379ac1916cfdd10c$export$d4c1c2a202a50db2;
var $379ac1916cfdd10c$export$7876229ab722b448;
var $379ac1916cfdd10c$export$5dacd232bfef6687;
var $379ac1916cfdd10c$export$7ff21fe81b21fa51;
var $379ac1916cfdd10c$export$33407a73687c0e62;
var $379ac1916cfdd10c$export$27f4c38933cceedf;
var $379ac1916cfdd10c$export$292b81cfd590634d;
var $379ac1916cfdd10c$export$c20fe43d14f8fa36;
var $379ac1916cfdd10c$export$cc48a6e73fdb7719;
var $379ac1916cfdd10c$export$d35bc1e505d1ebbf;
var $379ac1916cfdd10c$export$93ff5b06817b3d41;
var $379ac1916cfdd10c$export$e7dc768d35940237;
var $379ac1916cfdd10c$export$cd2839d8bb0c6407;
var $379ac1916cfdd10c$export$4ce7d3d24e42e411;
var $379ac1916cfdd10c$export$f0091c9d6b8c19d3;
var $379ac1916cfdd10c$export$52890a3cb1ab46b;
var $379ac1916cfdd10c$export$50722ae5663230f9;
var $379ac1916cfdd10c$export$7a763a0407a04336;
var $379ac1916cfdd10c$export$189f6cc7eaf68d8b;
var $379ac1916cfdd10c$export$1e0fb04f31d3c22a;
var $379ac1916cfdd10c$export$b8813cd5d7824ce7;
var $379ac1916cfdd10c$export$15b73a232798b8d3;
$379ac1916cfdd10c$export$2d9837ea36f7a875 = "_spectrum-Calendar_6099b6";
$379ac1916cfdd10c$export$8d90e3a3d21fe428 = "_spectrum-Calendar--padded_6099b6";
$379ac1916cfdd10c$export$7efb9b56af6e2d09 = "_spectrum-Calendar-header_6099b6";
$379ac1916cfdd10c$export$185018e73e57145f = "_spectrum-Calendar-monthHeader_6099b6";
$379ac1916cfdd10c$export$98ee27555a2b7c01 = "_spectrum-Calendar-title_6099b6";
$379ac1916cfdd10c$export$d4c1c2a202a50db2 = "_spectrum-Calendar-prevMonth_6099b6";
$379ac1916cfdd10c$export$7876229ab722b448 = "_spectrum-Calendar-nextMonth_6099b6";
$379ac1916cfdd10c$export$5dacd232bfef6687 = "_spectrum-Calendar-months_6099b6";
$379ac1916cfdd10c$export$7ff21fe81b21fa51 = "_spectrum-Calendar-dayOfWeek_6099b6";
$379ac1916cfdd10c$export$33407a73687c0e62 = "_spectrum-Calendar-body_6099b6";
$379ac1916cfdd10c$export$27f4c38933cceedf = "_spectrum-Calendar-table_6099b6";
$379ac1916cfdd10c$export$292b81cfd590634d = "_spectrum-Calendar-tableCell_6099b6";
$379ac1916cfdd10c$export$c20fe43d14f8fa36 = "_spectrum-Calendar-date_6099b6";
$379ac1916cfdd10c$export$cc48a6e73fdb7719 = "_spectrum-Calendar-dateText_6099b6";
$379ac1916cfdd10c$export$d35bc1e505d1ebbf = "_is-disabled_6099b6";
$379ac1916cfdd10c$export$93ff5b06817b3d41 = "_is-outsideMonth_6099b6";
$379ac1916cfdd10c$export$e7dc768d35940237 = "_is-focused_6099b6";
$379ac1916cfdd10c$export$cd2839d8bb0c6407 = "_is-range-selection_6099b6";
$379ac1916cfdd10c$export$4ce7d3d24e42e411 = "_is-range-start_6099b6";
$379ac1916cfdd10c$export$f0091c9d6b8c19d3 = "_is-selection-start_6099b6";
$379ac1916cfdd10c$export$52890a3cb1ab46b = "_is-range-end_6099b6";
$379ac1916cfdd10c$export$50722ae5663230f9 = "_is-selection-end_6099b6";
$379ac1916cfdd10c$export$7a763a0407a04336 = "_is-range-selecting_6099b6";
$379ac1916cfdd10c$export$189f6cc7eaf68d8b = "_is-today_6099b6";
$379ac1916cfdd10c$export$1e0fb04f31d3c22a = "_is-selected_6099b6";
$379ac1916cfdd10c$export$b8813cd5d7824ce7 = "_is-hovered_6099b6";
$379ac1916cfdd10c$export$15b73a232798b8d3 = "_is-pressed_6099b6";





function $bc5e91c62e8fa9b1$export$5d847498420df57b({ state: state , currentMonth: currentMonth , ...props }) {
    let ref = $fhxpv$useRef();
    let { cellProps: cellProps , buttonProps: buttonProps , isPressed: isPressed  } = $fhxpv$useCalendarCell({
        ...props,
        isDisabled: !$fhxpv$isSameMonth(props.date, currentMonth)
    }, state, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $fhxpv$useHover({
    });
    let dateFormatter = $fhxpv$useDateFormatter({
        day: 'numeric',
        timeZone: state.timeZone,
        calendar: currentMonth.calendar.identifier
    });
    let isSelected = state.isSelected(props.date);
    let highlightedRange = 'highlightedRange' in state && state.highlightedRange;
    let isSelectionStart = highlightedRange && $fhxpv$isSameDay(props.date, highlightedRange.start);
    let isSelectionEnd = highlightedRange && $fhxpv$isSameDay(props.date, highlightedRange.end);
    let { locale: locale  } = $fhxpv$useLocale();
    let dayOfWeek = $fhxpv$getDayOfWeek(props.date, locale);
    let isRangeStart = isSelected && (dayOfWeek === 0 || props.date.day === 1);
    let isRangeEnd = isSelected && (dayOfWeek === 6 || props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth));
    let { focusProps: focusProps , isFocusVisible: isFocusVisible  } = $fhxpv$useFocusRing();
    // For performance, reuse the same date object as before if the new date prop is the same.
    // This allows subsequent useMemo results to be reused.
    let date = props.date;
    let lastDate = $fhxpv$useRef(null);
    if (lastDate.current && $fhxpv$isEqualDay(date, lastDate.current)) date = lastDate.current;
    lastDate.current = date;
    let nativeDate = $fhxpv$useMemo(()=>date.toDate(state.timeZone)
    , [
        date,
        state.timeZone
    ]);
    let formatted = $fhxpv$useMemo(()=>dateFormatter.format(nativeDate)
    , [
        dateFormatter,
        nativeDate
    ]);
    return(/*#__PURE__*/ $fhxpv$react.createElement("td", {
        ...cellProps,
        className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-tableCell')
    }, /*#__PURE__*/ $fhxpv$react.createElement("span", {
        ...$fhxpv$mergeProps(buttonProps, hoverProps, focusProps),
        ref: ref,
        className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-date', {
            'is-today': $fhxpv$isToday(props.date, state.timeZone),
            'is-selected': isSelected,
            'is-focused': state.isCellFocused(props.date) && isFocusVisible,
            'is-disabled': state.isCellDisabled(props.date),
            'is-outsideMonth': !$fhxpv$isSameMonth(props.date, currentMonth),
            'is-range-start': isRangeStart,
            'is-range-end': isRangeEnd,
            'is-range-selection': isSelected && 'highlightedRange' in state,
            'is-selection-start': isSelectionStart,
            'is-selection-end': isSelectionEnd,
            'is-hovered': isHovered,
            'is-pressed': isPressed
        })
    }, /*#__PURE__*/ $fhxpv$react.createElement("span", {
        className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-dateText')
    }, formatted))));
}










function $5947906adb11f37c$export$26e2752316b9a375(props) {
    props = $fhxpv$useProviderProps(props);
    let { state: state , startDate: startDate  } = props;
    let { gridProps: gridProps  } = $fhxpv$useCalendarGrid({
        ...props,
        endDate: $fhxpv$endOfMonth(startDate)
    }, state);
    let dayFormatter = $fhxpv$useDateFormatter({
        weekday: 'narrow'
    });
    let dayFormatterLong = $fhxpv$useDateFormatter({
        weekday: 'long'
    });
    let { locale: locale  } = $fhxpv$useLocale();
    let monthStart = $fhxpv$startOfWeek(startDate, locale);
    let weeksInMonth = $fhxpv$getWeeksInMonth(startDate, locale);
    let [isRangeSelecting, setRangeSelecting] = $fhxpv$useState(false);
    let hasAnchorDate = 'anchorDate' in state && state.anchorDate != null;
    // Update isRangeSelecting immediately when it becomes true.
    // This feels weird but is actually fine...
    // https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
    if (hasAnchorDate && !isRangeSelecting) setRangeSelecting(true);
    // Delay removing the is-range-selecting class for a frame after selection ends.
    // This avoids an undesired animation on touch devices.
    $fhxpv$useEffect(()=>{
        if (!hasAnchorDate && isRangeSelecting) {
            let raf = requestAnimationFrame(()=>setRangeSelecting(false)
            );
            return ()=>cancelAnimationFrame(raf)
            ;
        }
    }, [
        hasAnchorDate,
        isRangeSelecting
    ]);
    return(/*#__PURE__*/ $fhxpv$react.createElement("table", {
        ...gridProps,
        className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-body', 'spectrum-Calendar-table', {
            'is-range-selecting': isRangeSelecting
        })
    }, /*#__PURE__*/ $fhxpv$react.createElement("thead", null, /*#__PURE__*/ $fhxpv$react.createElement("tr", null, [
        ...new Array(7).keys()
    ].map((index)=>{
        let date = monthStart.add({
            days: index
        });
        let dateDay = date.toDate(state.timeZone);
        let day = dayFormatter.format(dateDay);
        let dayLong = dayFormatterLong.format(dateDay);
        return(/*#__PURE__*/ $fhxpv$react.createElement("th", {
            key: index,
            className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-tableCell')
        }, /*#__PURE__*/ $fhxpv$react.createElement($fhxpv$VisuallyHidden, null, dayLong), /*#__PURE__*/ $fhxpv$react.createElement("span", {
            "aria-hidden": "true",
            className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-dayOfWeek')
        }, day)));
    }))), /*#__PURE__*/ $fhxpv$react.createElement("tbody", null, [
        ...new Array(weeksInMonth).keys()
    ].map((weekIndex)=>/*#__PURE__*/ $fhxpv$react.createElement("tr", {
            key: weekIndex
        }, [
            ...new Array(7).keys()
        ].map((dayIndex)=>/*#__PURE__*/ $fhxpv$react.createElement($bc5e91c62e8fa9b1$export$5d847498420df57b, {
                key: dayIndex,
                state: state,
                date: monthStart.add({
                    weeks: weekIndex,
                    days: dayIndex
                }),
                currentMonth: startDate
            })
        ))
    ))));
}









function $9d32f3fa11549b02$export$bfd52a43017368fe(props) {
    props = $fhxpv$useProviderProps(props);
    let { state: state , useCalendar: useCalendar , visibleMonths: visibleMonths = 1  } = props;
    let { direction: direction  } = $fhxpv$useLocale();
    let currentMonth = state.visibleRange.start;
    let monthDateFormatter = $fhxpv$useDateFormatter({
        month: 'long',
        year: 'numeric',
        era: currentMonth.calendar.identifier !== 'gregory' ? 'long' : undefined,
        calendar: currentMonth.calendar.identifier
    });
    let ref = $fhxpv$useRef(null);
    let { calendarProps: calendarProps , prevButtonProps: prevButtonProps , nextButtonProps: nextButtonProps  } = useCalendar(props, state, ref);
    let titles = [];
    let calendars = [];
    for(let i = 0; i < visibleMonths; i++){
        titles.push(/*#__PURE__*/ $fhxpv$react.createElement("div", {
            key: i,
            className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-monthHeader')
        }, i === 0 && /*#__PURE__*/ $fhxpv$react.createElement($fhxpv$ActionButton, {
            ...prevButtonProps,
            UNSAFE_className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-prevMonth'),
            isQuiet: true
        }, direction === 'rtl' ? /*#__PURE__*/ $fhxpv$react.createElement($fhxpv$spectrumiconsuiChevronRightLarge, null) : /*#__PURE__*/ $fhxpv$react.createElement($fhxpv$spectrumiconsuiChevronLeftLarge, null)), /*#__PURE__*/ $fhxpv$react.createElement("h2", {
            className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-title')
        }, monthDateFormatter.format(currentMonth.add({
            months: i
        }).toDate(state.timeZone))), i === visibleMonths - 1 && /*#__PURE__*/ $fhxpv$react.createElement($fhxpv$ActionButton, {
            ...nextButtonProps,
            UNSAFE_className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-nextMonth'),
            isQuiet: true
        }, direction === 'rtl' ? /*#__PURE__*/ $fhxpv$react.createElement($fhxpv$spectrumiconsuiChevronLeftLarge, null) : /*#__PURE__*/ $fhxpv$react.createElement($fhxpv$spectrumiconsuiChevronRightLarge, null))));
        let d = currentMonth.add({
            months: i
        });
        calendars.push(/*#__PURE__*/ $fhxpv$react.createElement($5947906adb11f37c$export$26e2752316b9a375, {
            ...props,
            key: `${d.year}-${d.month}-${d.day}`,
            state: state,
            startDate: d
        }));
    }
    return(/*#__PURE__*/ $fhxpv$react.createElement("div", {
        ...calendarProps,
        ref: ref,
        className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar')
    }, /*#__PURE__*/ $fhxpv$react.createElement("div", {
        className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-header')
    }, titles), /*#__PURE__*/ $fhxpv$react.createElement("div", {
        className: $fhxpv$classNames((/*@__PURE__*/$parcel$interopDefault($379ac1916cfdd10c$exports)), 'spectrum-Calendar-months')
    }, calendars)));
}







function $78ebab2ea7d4dce7$export$e1aef45b828286de(props) {
    let { visibleMonths: visibleMonths = 1  } = props;
    let visibleDuration = $fhxpv$useMemo(()=>({
            months: visibleMonths
        })
    , [
        visibleMonths
    ]);
    let { locale: locale  } = $fhxpv$useLocale();
    let state = $fhxpv$useCalendarState({
        ...props,
        locale: locale,
        visibleDuration: visibleDuration,
        createCalendar: $fhxpv$createCalendar
    });
    return(/*#__PURE__*/ $fhxpv$react.createElement($9d32f3fa11549b02$export$bfd52a43017368fe, {
        ...props,
        state: state,
        useCalendar: $fhxpv$useCalendar
    }));
}


var $7442e6a753bfca40$exports = {};

$parcel$export($7442e6a753bfca40$exports, "RangeCalendar", () => $7442e6a753bfca40$export$a4f5c8b89d277a8d);






function $7442e6a753bfca40$export$a4f5c8b89d277a8d(props) {
    let { visibleMonths: visibleMonths = 1  } = props;
    let visibleDuration = $fhxpv$useMemo(()=>({
            months: visibleMonths
        })
    , [
        visibleMonths
    ]);
    let { locale: locale  } = $fhxpv$useLocale();
    let state = $fhxpv$useRangeCalendarState({
        ...props,
        locale: locale,
        visibleDuration: visibleDuration,
        createCalendar: $fhxpv$createCalendar
    });
    return(/*#__PURE__*/ $fhxpv$react.createElement($9d32f3fa11549b02$export$bfd52a43017368fe, {
        ...props,
        state: state,
        useCalendar: $fhxpv$useRangeCalendar
    }));
}




export {$78ebab2ea7d4dce7$export$e1aef45b828286de as Calendar, $7442e6a753bfca40$export$a4f5c8b89d277a8d as RangeCalendar};
//# sourceMappingURL=module.js.map
