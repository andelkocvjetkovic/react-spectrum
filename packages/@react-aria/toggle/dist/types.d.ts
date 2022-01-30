import { AriaToggleProps } from "@react-types/checkbox";
import { InputHTMLAttributes, RefObject } from "react";
import { ToggleState } from "@react-stately/toggle";
export interface ToggleAria {
    /**
     * Props to be spread on the input element.
     */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}
/**
 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
 */
export function useToggle(props: AriaToggleProps, state: ToggleState, ref: RefObject<HTMLElement>): ToggleAria;

//# sourceMappingURL=types.d.ts.map
