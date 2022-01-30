import { AriaButtonProps } from "@react-types/button";
import { HTMLAttributes, RefObject } from "react";
import { CalendarProps, DateValue, RangeCalendarProps, CalendarPropsBase } from "@react-types/calendar";
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";
import { CalendarDate } from "@internationalized/date";
import { PressProps } from "@react-aria/interactions";
export interface CalendarAria {
    calendarProps: HTMLAttributes<HTMLElement>;
    nextButtonProps: AriaButtonProps;
    prevButtonProps: AriaButtonProps;
}
export interface CalendarGridAria {
    gridProps: HTMLAttributes<HTMLElement>;
}
export function useCalendar<T extends DateValue>(props: CalendarProps<T>, state: CalendarState): CalendarAria;
export function useRangeCalendar<T extends DateValue>(props: RangeCalendarProps<T>, state: RangeCalendarState, ref: RefObject<HTMLElement>): CalendarAria;
interface CalendarGridProps extends CalendarPropsBase {
    startDate?: CalendarDate;
    endDate?: CalendarDate;
}
export function useCalendarGrid(props: CalendarGridProps, state: CalendarState | RangeCalendarState): CalendarGridAria;
export interface AriaCalendarCellProps {
    date: CalendarDate;
    isDisabled?: boolean;
}
interface CalendarCellAria {
    cellProps: PressProps & HTMLAttributes<HTMLElement>;
    buttonProps: HTMLAttributes<HTMLElement>;
    isPressed: boolean;
}
export function useCalendarCell(props: AriaCalendarCellProps, state: CalendarState | RangeCalendarState, ref: RefObject<HTMLElement>): CalendarCellAria;
interface CalendarTableHeaderAria {
    columnHeaderProps: {
        scope?: 'col';
    };
}
export function useCalendarTableHeader(): CalendarTableHeaderAria;

//# sourceMappingURL=types.d.ts.map
