import { AriaRadioProps, AriaRadioGroupProps } from "@react-types/radio";
import { InputHTMLAttributes, RefObject, HTMLAttributes } from "react";
import { RadioGroupState } from "@react-stately/radio";
interface RadioAria {
    /** Props for the input element. */
    inputProps: InputHTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for an individual
 * radio button in a radio group.
 * @param props - Props for the radio.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 * @param ref - Ref to the HTML input element.
 */
export function useRadio(props: AriaRadioProps, state: RadioGroupState, ref: RefObject<HTMLElement>): RadioAria;
interface RadioGroupAria {
    /** Props for the radio group wrapper element. */
    radioGroupProps: HTMLAttributes<HTMLElement>;
    /** Props for the radio group's visible label (if any). */
    labelProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a radio group component.
 * Radio groups allow users to select a single item from a list of mutually exclusive options.
 * @param props - Props for the radio group.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 */
export function useRadioGroup(props: AriaRadioGroupProps, state: RadioGroupState): RadioGroupAria;

//# sourceMappingURL=types.d.ts.map