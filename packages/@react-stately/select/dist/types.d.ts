import { MenuTriggerState } from "@react-stately/menu";
import { SelectProps } from "@react-types/select";
import { SingleSelectListState } from "@react-stately/list";
export interface SelectState<T> extends SingleSelectListState<T>, MenuTriggerState {
    /** Whether the select is currently focused. */
    readonly isFocused: boolean;
    /** Sets whether the select is focused. */
    setFocused(isFocused: boolean): void;
}
/**
 * Provides state management for a select component. Handles building a collection
 * of items from props, handles the open state for the popup menu, and manages
 * multiple selection state.
 */
export function useSelectState<T extends object>(props: SelectProps<T>): SelectState<T>;

//# sourceMappingURL=types.d.ts.map