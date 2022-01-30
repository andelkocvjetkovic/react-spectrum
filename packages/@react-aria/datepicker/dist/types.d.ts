import { AriaButtonProps } from "@react-types/button";
import { AriaDatePickerProps, DateValue, DatePickerProps, AriaDateRangePickerProps } from "@react-types/datepicker";
import { AriaDialogProps } from "@react-types/dialog";
import { DatePickerState, DatePickerFieldState, DateSegment, DateRangePickerState } from "@react-stately/datepicker";
import { HTMLAttributes, LabelHTMLAttributes, RefObject } from "react";
import { DOMProps } from "@react-types/shared";
interface DatePickerAria<T extends DateValue> {
    groupProps: HTMLAttributes<HTMLElement>;
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    fieldProps: AriaDatePickerProps<T>;
    /** Props for the description element, if any. */
    descriptionProps: HTMLAttributes<HTMLElement>;
    /** Props for the error message element, if any. */
    errorMessageProps: HTMLAttributes<HTMLElement>;
    buttonProps: AriaButtonProps;
    dialogProps: AriaDialogProps;
}
export function useDatePicker<T extends DateValue>(props: AriaDatePickerProps<T>, state: DatePickerState, ref: RefObject<HTMLElement>): DatePickerAria<T>;
interface DateFieldProps<T extends DateValue> extends Omit<AriaDatePickerProps<T>, 'value' | 'defaultValue' | 'onChange' | 'minValue' | 'maxValue' | 'placeholderValue'> {
}
interface DateFieldAria {
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    fieldProps: HTMLAttributes<HTMLElement>;
    /** Props for the description element, if any. */
    descriptionProps: HTMLAttributes<HTMLElement>;
    /** Props for the error message element, if any. */
    errorMessageProps: HTMLAttributes<HTMLElement>;
}
export const labelIds: WeakMap<DatePickerFieldState, {
    ariaLabelledBy: string;
    ariaDescribedBy: string;
}>;
export function useDateField<T extends DateValue>(props: DateFieldProps<T>, state: DatePickerFieldState, ref: RefObject<HTMLElement>): DateFieldAria;
type Field = 'era' | 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'dayPeriod' | 'timeZoneName' | 'weekday';
interface DisplayNames {
    of(field: Field): string;
}
export function useDisplayNames(): DisplayNames;
interface DateSegmentAria {
    segmentProps: HTMLAttributes<HTMLDivElement>;
}
export function useDateSegment<T extends DateValue>(props: DatePickerProps<T> & DOMProps, segment: DateSegment, state: DatePickerFieldState, ref: RefObject<HTMLElement>): DateSegmentAria;
interface DateRangePickerAria<T extends DateValue> {
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    groupProps: HTMLAttributes<HTMLElement>;
    startFieldProps: AriaDatePickerProps<T>;
    endFieldProps: AriaDatePickerProps<T>;
    /** Props for the description element, if any. */
    descriptionProps: HTMLAttributes<HTMLElement>;
    /** Props for the error message element, if any. */
    errorMessageProps: HTMLAttributes<HTMLElement>;
    buttonProps: AriaButtonProps;
    dialogProps: AriaDialogProps;
}
export function useDateRangePicker<T extends DateValue>(props: AriaDateRangePickerProps<T>, state: DateRangePickerState, ref: RefObject<HTMLElement>): DateRangePickerAria<T>;

//# sourceMappingURL=types.d.ts.map
