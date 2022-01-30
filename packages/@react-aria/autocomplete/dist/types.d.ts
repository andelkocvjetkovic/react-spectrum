import { AriaButtonProps } from "@react-types/button";
import { AriaListBoxOptions } from "@react-aria/listbox";
import { ComboBoxState } from "@react-stately/combobox";
import { HTMLAttributes, InputHTMLAttributes, RefObject } from "react";
import { KeyboardDelegate } from "@react-types/shared";
import { SearchAutocompleteProps } from "@react-types/autocomplete";
interface AriaSearchAutocompleteProps<T> extends SearchAutocompleteProps<T> {
    /** The ref for the input element. */
    inputRef: RefObject<HTMLInputElement>;
    /** The ref for the list box popover. */
    popoverRef: RefObject<HTMLDivElement>;
    /** The ref for the list box. */
    listBoxRef: RefObject<HTMLElement>;
    /** An optional keyboard delegate implementation, to override the default. */
    keyboardDelegate?: KeyboardDelegate;
}
interface SearchAutocompleteAria<T> {
    /** Props for the label element. */
    labelProps: HTMLAttributes<HTMLElement>;
    /** Props for the search input element. */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    /** Props for the list box, to be passed to [useListBox](useListBox.html). */
    listBoxProps: AriaListBoxOptions<T>;
    /** Props for the search input's clear button. */
    clearButtonProps: AriaButtonProps;
}
/**
 * Provides the behavior and accessibility implementation for a search autocomplete component.
 * A search autocomplete combines a combobox with a searchfield, allowing users to filter a list of options to items matching a query.
 * @param props - Props for the search autocomplete.
 * @param state - State for the search autocomplete, as returned by `useSearchAutocomplete`.
 */
export function useSearchAutocomplete<T>(props: AriaSearchAutocompleteProps<T>, state: ComboBoxState<T>): SearchAutocompleteAria<T>;

//# sourceMappingURL=types.d.ts.map
