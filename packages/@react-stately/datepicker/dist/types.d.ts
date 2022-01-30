import { CalendarDate, Calendar, CalendarDateTime, DateFormatter } from "@internationalized/date";
import { DatePickerProps, DateValue, Granularity, TimeValue, DateRange, DateRangePickerProps, TimePickerProps } from "@react-types/datepicker";
import { ValidationState, RangeValue } from "@react-types/shared";
type FieldOptions = Pick<Intl.DateTimeFormatOptions, 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'>;
export interface DatePickerState {
    value: DateValue;
    setValue: (value: DateValue) => void;
    dateValue: DateValue;
    setDateValue: (value: CalendarDate) => void;
    timeValue: TimeValue;
    setTimeValue: (value: TimeValue) => void;
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    validationState: ValidationState;
    formatValue(locale: string, fieldOptions: FieldOptions): string;
    granularity: Granularity;
}
export function useDatePickerState<T extends DateValue>(props: DatePickerProps<T>): DatePickerState;
export interface DateSegment {
    type: Intl.DateTimeFormatPartTypes;
    text: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    isPlaceholder: boolean;
    isEditable: boolean;
}
export interface DatePickerFieldState {
    value: DateValue;
    dateValue: Date;
    setValue: (value: CalendarDateTime) => void;
    segments: DateSegment[];
    dateFormatter: DateFormatter;
    validationState: ValidationState;
    granularity: Granularity;
    increment: (type: Intl.DateTimeFormatPartTypes) => void;
    decrement: (type: Intl.DateTimeFormatPartTypes) => void;
    incrementPage: (type: Intl.DateTimeFormatPartTypes) => void;
    decrementPage: (type: Intl.DateTimeFormatPartTypes) => void;
    setSegment: (type: Intl.DateTimeFormatPartTypes, value: number) => void;
    confirmPlaceholder: (type?: Intl.DateTimeFormatPartTypes) => void;
    clearSegment: (type?: Intl.DateTimeFormatPartTypes) => void;
    getFormatOptions(fieldOptions: FieldOptions): Intl.DateTimeFormatOptions;
}
interface DatePickerFieldProps<T extends DateValue> extends DatePickerProps<T> {
    maxGranularity?: 'year' | 'month' | DatePickerProps<T>['granularity'];
    locale: string;
    createCalendar: (name: string) => Calendar;
}
export function useDatePickerFieldState<T extends DateValue>(props: DatePickerFieldProps<T>): DatePickerFieldState;
type TimeRange = RangeValue<TimeValue>;
export interface DateRangePickerState {
    value: DateRange;
    setValue: (value: DateRange) => void;
    setDate: (part: keyof DateRange, value: DateValue) => void;
    setTime: (part: keyof TimeRange, value: TimeValue) => void;
    setDateTime: (part: keyof DateRange, value: DateValue) => void;
    dateRange: DateRange;
    setDateRange: (value: DateRange) => void;
    timeRange: TimeRange;
    setTimeRange: (value: TimeRange) => void;
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    validationState: ValidationState;
    formatValue(locale: string, fieldOptions: FieldOptions): string;
    confirmPlaceholder(): void;
    granularity: Granularity;
}
export function useDateRangePickerState<T extends DateValue>(props: DateRangePickerProps<T>): DateRangePickerState;
interface TimeFieldProps<T extends TimeValue> extends TimePickerProps<T> {
    locale: string;
    createCalendar: (name: string) => Calendar;
}
export function useTimeFieldState<T extends TimeValue>(props: TimeFieldProps<T>): import("useDatePickerFieldState").DatePickerFieldState;

//# sourceMappingURL=types.d.ts.map
