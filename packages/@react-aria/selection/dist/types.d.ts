import { HTMLAttributes, Key, RefObject } from "react";
import { KeyboardDelegate, FocusStrategy, Collection, Node } from "@react-types/shared";
import { MultipleSelectionManager } from "@react-stately/selection";
interface TypeSelectOptions {
    /**
     * A delegate that returns collection item keys with respect to visual layout.
     */
    keyboardDelegate: KeyboardDelegate;
    /**
     * An interface for reading and updating multiple selection state.
     */
    selectionManager: MultipleSelectionManager;
    /**
     * Called when an item is focused by typing.
     */
    onTypeSelect?: (key: Key) => void;
}
interface TypeSelectAria {
    /**
     * Props to be spread on the owner of the options.
     */
    typeSelectProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles typeahead interactions with collections.
 */
export function useTypeSelect(options: TypeSelectOptions): TypeSelectAria;
interface SelectableCollectionOptions {
    /**
     * An interface for reading and updating multiple selection state.
     */
    selectionManager: MultipleSelectionManager;
    /**
     * A delegate object that implements behavior for keyboard focus movement.
     */
    keyboardDelegate: KeyboardDelegate;
    /**
     * The ref attached to the element representing the collection.
     */
    ref: RefObject<HTMLElement>;
    /**
     * Whether the collection or one of its items should be automatically focused upon render.
     * @default false
     */
    autoFocus?: boolean | FocusStrategy;
    /**
     * Whether focus should wrap around when the end/start is reached.
     * @default false
     */
    shouldFocusWrap?: boolean;
    /**
     * Whether the collection allows empty selection.
     * @default false
     */
    disallowEmptySelection?: boolean;
    /**
     * Whether the collection allows the user to select all items via keyboard shortcut.
     * @default false
     */
    disallowSelectAll?: boolean;
    /**
     * Whether selection should occur automatically on focus.
     * @default false
     */
    selectOnFocus?: boolean;
    /**
     * Whether typeahead is disabled.
     * @default false
     */
    disallowTypeAhead?: boolean;
    /**
     * Whether the collection items should use virtual focus instead of being focused directly.
     */
    shouldUseVirtualFocus?: boolean;
    /**
     * Whether navigation through tab key is enabled.
     */
    allowsTabNavigation?: boolean;
    /**
     * Whether the collection items are contained in a virtual scroller.
     */
    isVirtualized?: boolean;
    /**
     * The ref attached to the scrollable body. Used to provide automatic scrolling on item focus for non-virtualized collections.
     * If not provided, defaults to the collection ref.
     */
    scrollRef?: RefObject<HTMLElement>;
}
interface SelectableCollectionAria {
    /** Props for the collection element. */
    collectionProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles interactions with selectable collections.
 */
export function useSelectableCollection(options: SelectableCollectionOptions): SelectableCollectionAria;
interface SelectableItemOptions {
    /**
     * An interface for reading and updating multiple selection state.
     */
    selectionManager: MultipleSelectionManager;
    /**
     * A unique key for the item.
     */
    key: Key;
    /**
     * Ref to the item.
     */
    ref: RefObject<HTMLElement>;
    /**
     * By default, selection occurs on pointer down. This can be strange if selecting an
     * item causes the UI to disappear immediately (e.g. menus).
     */
    shouldSelectOnPressUp?: boolean;
    /**
     * Whether the option is contained in a virtual scroller.
     */
    isVirtualized?: boolean;
    /**
     * Function to focus the item.
     */
    focus?: () => void;
    /**
     * Whether the option should use virtual focus instead of being focused directly.
     */
    shouldUseVirtualFocus?: boolean;
    /** Whether the item is disabled. */
    isDisabled?: boolean;
    /**
     * Handler that is called when a user performs an action on the cell. The exact user event depends on
     * the collection's `selectionBehavior` prop and the interaction modality.
     */
    onAction?: () => void;
}
interface SelectableItemAria {
    /**
     * Props to be spread on the item root node.
     */
    itemProps: HTMLAttributes<HTMLElement>;
    /** Whether the item is currently in a pressed state. */
    isPressed: boolean;
}
/**
 * Handles interactions with an item in a selectable collection.
 */
export function useSelectableItem(options: SelectableItemOptions): SelectableItemAria;
export class ListKeyboardDelegate<T> implements KeyboardDelegate {
    constructor(collection: Collection<Node<T>>, disabledKeys: Set<Key>, ref: RefObject<HTMLElement>, collator?: Intl.Collator);
    getKeyBelow(key: Key): Key;
    getKeyAbove(key: Key): Key;
    getFirstKey(): Key;
    getLastKey(): Key;
    getKeyPageAbove(key: Key): Key;
    getKeyPageBelow(key: Key): Key;
    getKeyForSearch(search: string, fromKey?: Key): Key;
}
interface SelectableListOptions {
    /**
     * An interface for reading and updating multiple selection state.
     */
    selectionManager: MultipleSelectionManager;
    /**
     * State of the collection.
     */
    collection: Collection<Node<unknown>>;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys: Set<Key>;
    /**
     * A ref to the item.
     */
    ref?: RefObject<HTMLElement>;
    /**
     * A delegate that returns collection item keys with respect to visual layout.
     */
    keyboardDelegate?: KeyboardDelegate;
    /**
     * Whether the collection or one of its items should be automatically focused upon render.
     * @default false
     */
    autoFocus?: boolean | FocusStrategy;
    /**
     * Whether focus should wrap around when the end/start is reached.
     * @default false
     */
    shouldFocusWrap?: boolean;
    /**
     * Whether the option is contained in a virtual scroller.
     */
    isVirtualized?: boolean;
    /**
     * Whether the collection allows empty selection.
     * @default false
     */
    disallowEmptySelection?: boolean;
    /**
     * Whether selection should occur automatically on focus.
     * @default false
     */
    selectOnFocus?: boolean;
    /**
     * Whether typeahead is disabled.
     * @default false
     */
    disallowTypeAhead?: boolean;
    /**
     * Whether the collection items should use virtual focus instead of being focused directly.
     */
    shouldUseVirtualFocus?: boolean;
    /**
     * Whether navigation through tab key is enabled.
     */
    allowsTabNavigation?: boolean;
}
interface SelectableListAria {
    /**
     * Props for the option element.
     */
    listProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles interactions with a selectable list.
 */
export function useSelectableList(props: SelectableListOptions): SelectableListAria;

//# sourceMappingURL=types.d.ts.map