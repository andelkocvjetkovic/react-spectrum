import { SpectrumTimePickerProps, TimeValue, DateValue, SpectrumDatePickerProps, SpectrumDateRangePickerProps, SpectrumDateFieldProps } from "@react-types/datepicker";
/**
 * TimeFields allow users to enter and edit time values using a keyboard.
 * Each part of the time is displayed in an individually editable segment.
 */
export function TimeField<T extends TimeValue>(props: SpectrumTimePickerProps<T>): JSX.Element;
/**
 * DatePickers combine a DateField and a Calendar popover to allow users to enter or select a date and time value.
 */
export function DatePicker<T extends DateValue>(props: SpectrumDatePickerProps<T>): JSX.Element;
/**
 * DatePickers combine two DateFields and a Calendar popover to allow users to enter or select a range of dates and times.
 */
export function DateRangePicker<T extends DateValue>(props: SpectrumDateRangePickerProps<T>): JSX.Element;
/**
 * DateFields allow users to enter and edit date and time values using a keyboard.
 * Each part of a date value is displayed in an individually editable segment.
 */
export function DateField<T extends DateValue>(props: SpectrumDateFieldProps<T>): JSX.Element;

//# sourceMappingURL=types.d.ts.map
