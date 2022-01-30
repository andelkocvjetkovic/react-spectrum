import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, HTMLAttributes, InputHTMLAttributes, RefObject } from "react";
import { AriaButtonProps, AriaToggleButtonProps } from "@react-types/button";
import { ToggleState } from "@react-stately/toggle";
export interface ButtonAria<T> {
    /** Props for the button element. */
    buttonProps: T;
    /** Whether the button is currently pressed. */
    isPressed: boolean;
}
export function useButton(props: AriaButtonProps<'a'>, ref: RefObject<HTMLAnchorElement>): ButtonAria<AnchorHTMLAttributes<HTMLAnchorElement>>;
export function useButton(props: AriaButtonProps<'button'>, ref: RefObject<HTMLButtonElement>): ButtonAria<ButtonHTMLAttributes<HTMLButtonElement>>;
export function useButton(props: AriaButtonProps<'div'>, ref: RefObject<HTMLDivElement>): ButtonAria<HTMLAttributes<HTMLDivElement>>;
export function useButton(props: AriaButtonProps<'input'>, ref: RefObject<HTMLInputElement>): ButtonAria<InputHTMLAttributes<HTMLInputElement>>;
export function useButton(props: AriaButtonProps<'span'>, ref: RefObject<HTMLSpanElement>): ButtonAria<HTMLAttributes<HTMLSpanElement>>;
export function useButton(props: AriaButtonProps<ElementType>, ref: RefObject<HTMLElement>): ButtonAria<HTMLAttributes<HTMLElement>>;
export function useToggleButton(props: AriaToggleButtonProps<'a'>, state: ToggleState, ref: RefObject<HTMLAnchorElement>): ButtonAria<AnchorHTMLAttributes<HTMLAnchorElement>>;
export function useToggleButton(props: AriaToggleButtonProps<'button'>, state: ToggleState, ref: RefObject<HTMLButtonElement>): ButtonAria<ButtonHTMLAttributes<HTMLButtonElement>>;
export function useToggleButton(props: AriaToggleButtonProps<'div'>, state: ToggleState, ref: RefObject<HTMLDivElement>): ButtonAria<HTMLAttributes<HTMLDivElement>>;
export function useToggleButton(props: AriaToggleButtonProps<'input'>, state: ToggleState, ref: RefObject<HTMLInputElement>): ButtonAria<InputHTMLAttributes<HTMLInputElement>>;
export function useToggleButton(props: AriaToggleButtonProps<'span'>, state: ToggleState, ref: RefObject<HTMLSpanElement>): ButtonAria<HTMLAttributes<HTMLSpanElement>>;
export function useToggleButton(props: AriaToggleButtonProps<ElementType>, state: ToggleState, ref: RefObject<HTMLElement>): ButtonAria<HTMLAttributes<HTMLElement>>;

//# sourceMappingURL=types.d.ts.map