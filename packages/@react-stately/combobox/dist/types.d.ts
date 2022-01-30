import { FocusStrategy } from "@react-types/shared";
import { ComboBoxProps, MenuTriggerAction } from "@react-types/combobox";
import { SelectState } from "@react-stately/select";
export interface ComboBoxState<T> extends SelectState<T> {
    /** The current value of the combo box input. */
    inputValue: string;
    /** Sets the value of the combo box input. */
    setInputValue(value: string): void;
    /** Selects the currently focused item and updates the input value. */
    commit(): void;
    /** Opens the menu. */
    open(focusStrategy?: FocusStrategy | null, trigger?: MenuTriggerAction): void;
    /** Toggles the menu. */
    toggle(focusStrategy?: FocusStrategy | null, trigger?: MenuTriggerAction): void;
    /** Resets the input value to the previously selected item's text if any and closes the menu.  */
    revert(): void;
}
type FilterFn = (textValue: string, inputValue: string) => boolean;
interface ComboBoxStateProps<T> extends ComboBoxProps<T> {
    /** The filter function used to determine if a option should be included in the combo box list. */
    defaultFilter?: FilterFn;
    /** Whether the combo box allows the menu to be open when the collection is empty. */
    allowsEmptyCollection?: boolean;
    /** Whether the combo box menu should close on blur. */
    shouldCloseOnBlur?: boolean;
}
/**
 * Provides state management for a combo box component. Handles building a collection
 * of items from props and manages the option selection state of the combo box. In addition, it tracks the input value,
 * focus state, and other properties of the combo box.
 */
export function useComboBoxState<T extends object>(props: ComboBoxStateProps<T>): ComboBoxState<T>;

//# sourceMappingURL=types.d.ts.map
