import { FocusStrategy, LongPressEvent, PressEvent, Selection, SelectionBehavior, SelectionMode, MultipleSelection, Collection, Node } from "@react-types/shared";
import { Key } from "react";
export interface FocusState {
    /** Whether the collection is currently focused. */
    readonly isFocused: boolean;
    /** Sets whether the collection is focused. */
    setFocused(isFocused: boolean): void;
    /** The current focused key in the collection. */
    readonly focusedKey: Key;
    /** Whether the first or last child of the focused key should receive focus. */
    readonly childFocusStrategy: FocusStrategy;
    /** Sets the focused key, and optionally, whether the first or last child of that key should receive focus. */
    setFocusedKey(key: Key, child?: FocusStrategy): void;
}
export interface SingleSelectionState extends FocusState {
    /** Whether the collection allows empty selection. */
    readonly disallowEmptySelection?: boolean;
    /** The currently selected key in the collection. */
    readonly selectedKey: Key;
    /** Sets the selected key in the collection. */
    setSelectedKey(key: Key): void;
}
export interface MultipleSelectionState extends FocusState {
    /** The type of selection that is allowed in the collection. */
    readonly selectionMode: SelectionMode;
    /** The selection behavior for the collection. */
    readonly selectionBehavior: SelectionBehavior;
    /** Sets the selection behavior for the collection. */
    setSelectionBehavior(selectionBehavior: SelectionBehavior): void;
    /** Whether the collection allows empty selection. */
    readonly disallowEmptySelection: boolean;
    /** The currently selected keys in the collection. */
    readonly selectedKeys: Selection;
    /** Sets the selected keys in the collection. */
    setSelectedKeys(keys: Selection): void;
    /** The currently disabled keys in the collection. */
    readonly disabledKeys: Set<Key>;
}
export interface MultipleSelectionManager extends FocusState {
    /** The type of selection that is allowed in the collection. */
    readonly selectionMode: SelectionMode;
    /** The selection behavior for the collection. */
    readonly selectionBehavior: SelectionBehavior;
    /** Whether the collection allows empty selection. */
    readonly disallowEmptySelection?: boolean;
    /** The currently selected keys in the collection. */
    readonly selectedKeys: Set<Key>;
    /** Whether the selection is empty. */
    readonly isEmpty: boolean;
    /** Whether all items in the collection are selected. */
    readonly isSelectAll: boolean;
    /** The first selected key in the collection. */
    readonly firstSelectedKey: Key | null;
    /** The last selected key in the collection. */
    readonly lastSelectedKey: Key | null;
    /** Returns whether a key is selected. */
    isSelected(key: Key): boolean;
    /** Returns whether the current selection is equal to the given selection. */
    isSelectionEqual(selection: Set<Key>): boolean;
    /** Extends the selection to the given key. */
    extendSelection(toKey: Key): void;
    /** Toggles whether the given key is selected. */
    toggleSelection(key: Key): void;
    /** Replaces the selection with only the given key. */
    replaceSelection(key: Key): void;
    /** Replaces the selection with the given keys. */
    setSelectedKeys(keys: Iterable<Key>): void;
    /** Selects all items in the collection. */
    selectAll(): void;
    /** Removes all keys from the selection. */
    clearSelection(): void;
    /** Toggles between select all and an empty selection. */
    toggleSelectAll(): void;
    /**
     * Toggles, replaces, or extends selection to the given key depending
     * on the pointer event and collection's selection mode.
     */
    select(key: Key, e?: PressEvent | LongPressEvent | PointerEvent): void;
    /** Returns whether the given key can be selected. */
    canSelectItem(key: Key): boolean;
    /** Sets the selection behavior for the collection. */
    setSelectionBehavior(selectionBehavior: SelectionBehavior): void;
}
export interface MultipleSelectionStateProps extends MultipleSelection {
    /** How multiple selection should behave in the collection. */
    selectionBehavior?: SelectionBehavior;
    /** Whether onSelectionChange should fire even if the new set of keys is the same as the last. */
    allowDuplicateSelectionEvents?: boolean;
}
/**
 * Manages state for multiple selection and focus in a collection.
 */
export function useMultipleSelectionState(props: MultipleSelectionStateProps): MultipleSelectionState;
interface SelectionManagerOptions {
    allowsCellSelection?: boolean;
}
/**
 * An interface for reading and updating multiple selection state.
 */
export class SelectionManager implements MultipleSelectionManager {
    constructor(collection: Collection<Node<unknown>>, state: MultipleSelectionState, options?: SelectionManagerOptions);
    /**
     * The type of selection that is allowed in the collection.
     */
    get selectionMode(): SelectionMode;
    /**
     * Whether the collection allows empty selection.
     */
    get disallowEmptySelection(): boolean;
    /**
     * The selection behavior for the collection.
     */
    get selectionBehavior(): SelectionBehavior;
    /**
     * Sets the selection behavior for the collection.
     */
    setSelectionBehavior(selectionBehavior: SelectionBehavior): void;
    /**
     * Whether the collection is currently focused.
     */
    get isFocused(): boolean;
    /**
     * Sets whether the collection is focused.
     */
    setFocused(isFocused: boolean): void;
    /**
     * The current focused key in the collection.
     */
    get focusedKey(): Key;
    /** Whether the first or last child of the focused key should receive focus. */
    get childFocusStrategy(): FocusStrategy;
    /**
     * Sets the focused key.
     */
    setFocusedKey(key: Key, childFocusStrategy?: FocusStrategy): void;
    /**
     * The currently selected keys in the collection.
     */
    get selectedKeys(): Set<Key>;
    /**
     * The raw selection value for the collection.
     * Either 'all' for select all, or a set of keys.
     */
    get rawSelection(): Selection;
    /**
     * Returns whether a key is selected.
     */
    isSelected(key: Key): boolean;
    /**
     * Whether the selection is empty.
     */
    get isEmpty(): boolean;
    /**
     * Whether all items in the collection are selected.
     */
    get isSelectAll(): boolean;
    get firstSelectedKey(): Key | null;
    get lastSelectedKey(): Key | null;
    /**
     * Extends the selection to the given key.
     */
    extendSelection(toKey: Key): void;
    /**
     * Toggles whether the given key is selected.
     */
    toggleSelection(key: Key): void;
    /**
     * Replaces the selection with only the given key.
     */
    replaceSelection(key: Key): void;
    /**
     * Replaces the selection with the given keys.
     */
    setSelectedKeys(keys: Iterable<Key>): void;
    /**
     * Selects all items in the collection.
     */
    selectAll(): void;
    /**
     * Removes all keys from the selection.
     */
    clearSelection(): void;
    /**
     * Toggles between select all and an empty selection.
     */
    toggleSelectAll(): void;
    select(key: Key, e?: PressEvent | LongPressEvent | PointerEvent): void;
    /**
     * Returns whether the current selection is equal to the given selection.
     */
    isSelectionEqual(selection: Set<Key>): boolean;
    canSelectItem(key: Key): boolean;
}

//# sourceMappingURL=types.d.ts.map