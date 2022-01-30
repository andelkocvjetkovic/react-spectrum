import { CalendarDate, Calendar, Duration } from "@internationalized/date";
import { DateValue, CalendarProps, RangeCalendarProps } from "@react-types/calendar";
import { RangeValue } from "@react-types/shared";
export interface CalendarStateBase {
    isDisabled: boolean;
    isReadOnly: boolean;
    visibleRange: RangeValue<CalendarDate>;
    timeZone: string;
    focusedDate: CalendarDate;
    setFocusedDate(value: CalendarDate): void;
    focusNextDay(): void;
    focusPreviousDay(): void;
    focusNextRow(): void;
    focusPreviousRow(): void;
    focusNextPage(): void;
    focusPreviousPage(): void;
    focusPageStart(): void;
    focusPageEnd(): void;
    focusNextSection(): void;
    focusPreviousSection(): void;
    focusNextPage(): void;
    focusPreviousPage(): void;
    selectFocusedDate(): void;
    selectDate(date: CalendarDate): void;
    isFocused: boolean;
    setFocused(value: boolean): void;
    isInvalid(date: CalendarDate): boolean;
    isSelected(date: CalendarDate): boolean;
    isCellFocused(date: CalendarDate): boolean;
    isCellDisabled(date: CalendarDate): boolean;
    isPreviousVisibleRangeInvalid(): boolean;
    isNextVisibleRangeInvalid(): boolean;
}
export interface CalendarState extends CalendarStateBase {
    value: CalendarDate;
    setValue(value: CalendarDate): void;
}
export interface RangeCalendarState extends CalendarStateBase {
    value: RangeValue<DateValue>;
    setValue(value: RangeValue<DateValue>): void;
    highlightDate(date: CalendarDate): void;
    anchorDate: CalendarDate | null;
    setAnchorDate(date: CalendarDate | null): void;
    highlightedRange: RangeValue<CalendarDate>;
    isDragging: boolean;
    setDragging(isDragging: boolean): void;
}
interface CalendarStateOptions<T extends DateValue> extends CalendarProps<T> {
    locale: string;
    createCalendar: (name: string) => Calendar;
    visibleDuration?: Duration;
    selectionAlignment?: 'start' | 'center' | 'end';
}
export function useCalendarState<T extends DateValue>(props: CalendarStateOptions<T>): CalendarState;
interface RangeCalendarStateOptions<T extends DateValue> extends RangeCalendarProps<T> {
    locale: string;
    createCalendar: (name: string) => Calendar;
    visibleDuration?: Duration;
}
export function useRangeCalendarState<T extends DateValue>(props: RangeCalendarStateOptions<T>): RangeCalendarState;

//# sourceMappingURL=types.d.ts.map
