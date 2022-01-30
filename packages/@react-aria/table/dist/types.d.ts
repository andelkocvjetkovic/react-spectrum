import { GridAria, GridProps, GridRowAria, GridRowProps } from "@react-aria/grid";
import { Layout } from "@react-stately/virtualizer";
import { Node } from "@react-types/shared";
import { RefObject, HTMLAttributes, Key } from "react";
import { TableState } from "@react-stately/table";
import { GridNode } from "@react-types/grid";
import { AriaCheckboxProps } from "@react-types/checkbox";
interface TableProps<T> extends GridProps {
    /** The layout object for the table. Computes what content is visible and how to position and style them. */
    layout?: Layout<Node<T>>;
}
/**
 * Provides the behavior and accessibility implementation for a table component.
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys,
 * and optionally supports row selection and sorting.
 * @param props - Props for the table.
 * @param state - State for the table, as returned by `useTableState`.
 * @param ref - The ref attached to the table element.
 */
export function useTable<T>(props: TableProps<T>, state: TableState<T>, ref: RefObject<HTMLElement>): GridAria;
interface ColumnHeaderProps {
    /** An object representing the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader). Contains all the relevant information that makes up the column header. */
    node: GridNode<unknown>;
    /** Whether the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader) is contained in a virtual scroller. */
    isVirtualized?: boolean;
}
interface ColumnHeaderAria {
    /** Props for the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader) element. */
    columnHeaderProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a column header in a table.
 * @param props - Props for the column header.
 * @param state - State of the table, as returned by `useTableState`.
 * @param ref - The ref attached to the column header element.
 */
export function useTableColumnHeader<T>(props: ColumnHeaderProps, state: TableState<T>, ref: RefObject<HTMLElement>): ColumnHeaderAria;
/**
 * Provides the behavior and accessibility implementation for a row in a table.
 * @param props - Props for the row.
 * @param state - State of the table, as returned by `useTableState`.
 */
export function useTableRow<T>(props: GridRowProps<T>, state: TableState<T>, ref: RefObject<HTMLElement>): GridRowAria;
export interface TableHeaderRowAria {
    /** Props for the grid row element. */
    rowProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a header row in a table.
 * @param props - Props for the row.
 * @param state - State of the table, as returned by `useTableState`.
 */
export function useTableHeaderRow<T>(props: GridRowProps<T>, state: TableState<T>, ref: RefObject<HTMLElement>): TableHeaderRowAria;
interface TableCellProps {
    /** An object representing the table cell. Contains all the relevant information that makes up the row header. */
    node: GridNode<unknown>;
    /** Whether the cell is contained in a virtual scroller. */
    isVirtualized?: boolean;
    /**
     * Handler that is called when a user performs an action on the cell.
     * Please use onCellAction at the collection level instead.
     * @deprecated
     **/
    onAction?: () => void;
}
interface TableCellAria {
    /** Props for the table cell element. */
    gridCellProps: HTMLAttributes<HTMLElement>;
    /** Whether the cell is currently in a pressed state. */
    isPressed: boolean;
}
/**
 * Provides the behavior and accessibility implementation for a cell in a table.
 * @param props - Props for the cell.
 * @param state - State of the table, as returned by `useTableState`.
 * @param ref - The ref attached to the cell element.
 */
export function useTableCell<T>(props: TableCellProps, state: TableState<T>, ref: RefObject<HTMLElement>): TableCellAria;
interface SelectionCheckboxProps {
    /** A unique key for the checkbox. */
    key: Key;
}
interface SelectionCheckboxAria {
    /** Props for the row selection checkbox element. */
    checkboxProps: AriaCheckboxProps;
}
interface SelectAllCheckboxAria {
    /** Props for the select all checkbox element. */
    checkboxProps: AriaCheckboxProps;
}
/**
 * Provides the behavior and accessibility implementation for a selection checkbox in a table.
 * @param props - Props for the selection checkbox.
 * @param state - State of the table, as returned by `useTableState`.
 */
export function useTableSelectionCheckbox<T>(props: SelectionCheckboxProps, state: TableState<T>): SelectionCheckboxAria;
/**
 * Provides the behavior and accessibility implementation for the select all checkbox in a table.
 * @param props - Props for the select all checkbox.
 * @param state - State of the table, as returned by `useTableState`.
 */
export function useTableSelectAllCheckbox<T>(state: TableState<T>): SelectAllCheckboxAria;
export { useGridRowGroup as useTableRowGroup } from '@react-aria/grid';

//# sourceMappingURL=types.d.ts.map