import { Direction, KeyboardDelegate, Node, AriaLabelingProps, DOMProps } from "@react-types/shared";
import { GridCollection } from "@react-types/grid";
import { Key, RefObject, HTMLAttributes } from "react";
import { Layout } from "@react-stately/virtualizer";
import { GridState } from "@react-stately/grid";
import { AriaCheckboxProps } from "@react-types/checkbox";
export interface GridKeyboardDelegateOptions<T, C> {
    collection: C;
    disabledKeys: Set<Key>;
    ref?: RefObject<HTMLElement>;
    direction: Direction;
    collator?: Intl.Collator;
    layout?: Layout<Node<T>>;
    focusMode?: 'row' | 'cell';
}
export class GridKeyboardDelegate<T, C extends GridCollection<T>> implements KeyboardDelegate {
    collection: C;
    protected disabledKeys: Set<Key>;
    protected ref: RefObject<HTMLElement>;
    protected direction: Direction;
    protected collator: Intl.Collator;
    protected layout: Layout<Node<T>>;
    protected focusMode: any;
    constructor(options: GridKeyboardDelegateOptions<T, C>);
    protected isCell(node: Node<T>): boolean;
    protected isRow(node: Node<T>): boolean;
    protected findPreviousKey(fromKey?: Key, pred?: (item: Node<T>) => boolean): Key;
    protected findNextKey(fromKey?: Key, pred?: (item: Node<T>) => boolean): Key;
    getKeyBelow(key: Key): Key;
    getKeyAbove(key: Key): Key;
    getKeyRightOf(key: Key): Key;
    getKeyLeftOf(key: Key): Key;
    getFirstKey(key?: Key, global?: boolean): Key;
    getLastKey(key?: Key, global?: boolean): Key;
    getKeyPageAbove(key: Key): Key;
    getKeyPageBelow(key: Key): Key;
    getKeyForSearch(search: string, fromKey?: Key): Key;
}
export interface GridProps extends DOMProps, AriaLabelingProps {
    /** Whether the grid uses virtual scrolling. */
    isVirtualized?: boolean;
    /**
     * An optional keyboard delegate implementation for type to select,
     * to override the default.
     */
    keyboardDelegate?: KeyboardDelegate;
    /**
     * Whether initial grid focus should be placed on the grid row or grid cell.
     * @default 'row'
     */
    focusMode?: 'row' | 'cell';
    /**
     * A function that returns the text that should be announced by assistive technology when a row is added or removed from selection.
     * @default (key) => state.collection.getItem(key)?.textValue
     */
    getRowText?: (key: Key) => string;
    /**
     * The ref attached to the scrollable body. Used to provided automatic scrolling on item focus for non-virtualized grids.
     */
    scrollRef?: RefObject<HTMLElement>;
    /** Handler that is called when a user performs an action on the row. */
    onRowAction?: (key: Key) => void;
    /** Handler that is called when a user performs an action on the cell. */
    onCellAction?: (key: Key) => void;
}
export interface GridAria {
    /** Props for the grid element. */
    gridProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a grid component.
 * A grid displays data in one or more rows and columns and enables a user to navigate its contents via directional navigation keys.
 * @param props - Props for the grid.
 * @param state - State for the grid, as returned by `useGridState`.
 * @param ref - The ref attached to the grid element.
 */
export function useGrid<T>(props: GridProps, state: GridState<T, GridCollection<T>>, ref: RefObject<HTMLElement>): GridAria;
interface GridRowGroupAria {
    /** Props for the row group element. */
    rowGroupProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the accessibility implementation for a row group in a grid.
 */
export function useGridRowGroup(): GridRowGroupAria;
export interface GridRowProps<T> {
    /** An object representing the grid row. Contains all the relevant information that makes up the grid row. */
    node: Node<T>;
    /** Whether the grid row is contained in a virtual scroller. */
    isVirtualized?: boolean;
    /** Whether selection should occur on press up instead of press down. */
    shouldSelectOnPressUp?: boolean;
    /**
     * Handler that is called when a user performs an action on the row.
     * Please use onCellAction at the collection level instead.
     * @deprecated
     **/
    onAction?: () => void;
}
export interface GridRowAria {
    /** Props for the grid row element. */
    rowProps: HTMLAttributes<HTMLElement>;
    /** Whether the row is currently in a pressed state. */
    isPressed: boolean;
}
/**
 * Provides the behavior and accessibility implementation for a row in a grid.
 * @param props - Props for the row.
 * @param state - State of the parent grid, as returned by `useGridState`.
 */
export function useGridRow<T, C extends GridCollection<T>, S extends GridState<T, C>>(props: GridRowProps<T>, state: S, ref: RefObject<HTMLElement>): GridRowAria;
interface GridCellProps {
    /** An object representing the grid cell. Contains all the relevant information that makes up the grid cell. */
    node: Node<unknown>;
    /** Whether the grid cell is contained in a virtual scroller. */
    isVirtualized?: boolean;
    /** Whether the cell or its first focusable child element should be focused when the grid cell is focused. */
    focusMode?: 'child' | 'cell';
    /** Whether selection should occur on press up instead of press down. */
    shouldSelectOnPressUp?: boolean;
    /**
     * Handler that is called when a user performs an action on the cell.
     * Please use onCellAction at the collection level instead.
     * @deprecated
     **/
    onAction?: () => void;
}
interface GridCellAria {
    /** Props for the grid cell element. */
    gridCellProps: HTMLAttributes<HTMLElement>;
    /** Whether the cell is currently in a pressed state. */
    isPressed: boolean;
}
/**
 * Provides the behavior and accessibility implementation for a cell in a grid.
 * @param props - Props for the cell.
 * @param state - State of the parent grid, as returned by `useGridState`.
 */
export function useGridCell<T, C extends GridCollection<T>>(props: GridCellProps, state: GridState<T, C>, ref: RefObject<HTMLElement>): GridCellAria;
interface SelectionCheckboxProps {
    /** A unique key for the checkbox. */
    key: Key;
}
interface SelectionCheckboxAria {
    /** Props for the row selection checkbox element. */
    checkboxProps: AriaCheckboxProps;
}
/**
 * Provides the behavior and accessibility implementation for a selection checkbox in a grid.
 * @param props - Props for the selection checkbox.
 * @param state - State of the grid, as returned by `useGridState`.
 */
export function useGridSelectionCheckbox<T, C extends GridCollection<T>>(props: SelectionCheckboxProps, state: GridState<T, C>): SelectionCheckboxAria;

//# sourceMappingURL=types.d.ts.map