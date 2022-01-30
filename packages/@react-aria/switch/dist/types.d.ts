import { AriaSwitchProps } from "@react-types/switch";
import { InputHTMLAttributes, RefObject } from "react";
import { ToggleState } from "@react-stately/toggle";
export interface SwitchAria {
    /** Props for the input element. */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}
/**
 * Provides the behavior and accessibility implementation for a switch component.
 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
 * @param props - Props for the switch.
 * @param state - State for the switch, as returned by `useToggleState`.
 * @param ref - Ref to the HTML input element.
 */
export function useSwitch(props: AriaSwitchProps, state: ToggleState, ref: RefObject<HTMLInputElement>): SwitchAria;

//# sourceMappingURL=types.d.ts.map