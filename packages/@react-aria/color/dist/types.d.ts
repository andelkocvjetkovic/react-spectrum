import { AriaColorSliderProps, AriaColorWheelProps, AriaColorFieldProps } from "@react-types/color";
import { ColorSliderState, ColorWheelState, ColorFieldState } from "@react-stately/color";
import { HTMLAttributes, RefObject, InputHTMLAttributes, LabelHTMLAttributes } from "react";
interface ColorSliderAriaOptions extends AriaColorSliderProps {
    /** A ref for the track element. */
    trackRef: RefObject<HTMLElement>;
    /** A ref for the input element. */
    inputRef: RefObject<HTMLInputElement>;
}
interface ColorSliderAria {
    /** Props for the label element. */
    labelProps: HTMLAttributes<HTMLElement>;
    /** Props for the track element. */
    trackProps: HTMLAttributes<HTMLElement>;
    /** Props for the thumb element. */
    thumbProps: HTMLAttributes<HTMLElement>;
    /** Props for the visually hidden range input element. */
    inputProps: HTMLAttributes<HTMLElement>;
    /** Props for the output element, displaying the value of the color slider. */
    outputProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a color slider component.
 * Color sliders allow users to adjust an individual channel of a color value.
 */
export function useColorSlider(props: ColorSliderAriaOptions, state: ColorSliderState): ColorSliderAria;
interface ColorWheelAriaProps extends AriaColorWheelProps {
    /** The outer radius of the color wheel. */
    outerRadius: number;
    /** The inner radius of the color wheel. */
    innerRadius: number;
}
interface ColorWheelAria {
    /** Props for the track element. */
    trackProps: HTMLAttributes<HTMLElement>;
    /** Props for the thumb element. */
    thumbProps: HTMLAttributes<HTMLElement>;
    /** Props for the visually hidden range input element. */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}
/**
 * Provides the behavior and accessibility implementation for a color wheel component.
 * Color wheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */
export function useColorWheel(props: ColorWheelAriaProps, state: ColorWheelState, inputRef: RefObject<HTMLElement>): ColorWheelAria;
interface ColorFieldAria {
    /** Props for the label element. */
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    /** Props for the input element. */
    inputProps: HTMLAttributes<HTMLInputElement>;
}
/**
 * Provides the behavior and accessibility implementation for a color field component.
 * Color fields allow users to enter and adjust a hex color value.
 */
export function useColorField(props: AriaColorFieldProps, state: ColorFieldState, ref: RefObject<HTMLInputElement>): ColorFieldAria;

//# sourceMappingURL=types.d.ts.map
