import { Color, ColorSliderProps, ColorWheelProps, ColorFieldProps } from "@react-types/color";
import { SliderState } from "@react-stately/slider";
/** Parses a color from a string value. Throws an error if the string could not be parsed. */
export function parseColor(value: string): Color;
export interface ColorSliderState extends SliderState {
    /** The current color value represented by the color slider. */
    readonly value: Color;
    /** Sets the current color value. If a string is passed, it will be parsed to a Color. */
    setValue(value: string | Color): void;
    /** Returns the color that should be displayed in the slider instead of `value` or the optional parameter. */
    getDisplayColor(): Color;
}
interface ColorSliderStateOptions extends ColorSliderProps {
    /** The locale to use for formatting the color channel value. */
    locale: string;
}
/**
 * Provides state management for a color slider component.
 * Color sliders allow users to adjust an individual channel of a color value.
 */
export function useColorSliderState(props: ColorSliderStateOptions): ColorSliderState;
export interface ColorWheelState {
    /** The current color value represented by the color wheel. */
    readonly value: Color;
    /** Sets the color value represented by the color wheel, and triggers `onChange`. */
    setValue(value: string | Color): void;
    /** The current value of the hue channel displayed by the color wheel. */
    readonly hue: number;
    /** Sets the hue channel of the current color value and triggers `onChange`. */
    setHue(value: number): void;
    /** Sets the hue channel of the current color value based on the given coordinates and radius of the color wheel, and triggers `onChange`. */
    setHueFromPoint(x: number, y: number, radius: number): void;
    /** Returns the coordinates of the thumb relative to the center point of the color wheel. */
    getThumbPosition(radius: number): {
        x: number;
        y: number;
    };
    /** Increments the hue by the given amount (defaults to 1). */
    increment(minStepSize?: number): void;
    /** Decrements the hue by the given amount (defaults to 1). */
    decrement(minStepSize?: number): void;
    /** Whether the color wheel is currently being dragged. */
    readonly isDragging: boolean;
    /** Sets whether the color wheel is being dragged. */
    setDragging(value: boolean): void;
    /** Returns the color that should be displayed in the color wheel instead of `value`. */
    getDisplayColor(): Color;
}
/**
 * Provides state management for a color wheel component.
 * Color wheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */
export function useColorWheelState(props: ColorWheelProps): ColorWheelState;
export interface ColorFieldState {
    /**
     * The current text value of the input. Updated as the user types,
     * and formatted according to `formatOptions` on blur.
     */
    readonly inputValue: string;
    /**
     * The currently parsed color value, or null if the field is empty.
     * Updated based on the `inputValue` as the user types.
     */
    readonly colorValue: Color;
    /** Sets the current text value of the input. */
    setInputValue(value: string): void;
    /**
     * Updates the input value based on the currently parsed color value.
     * Typically this is called when the field is blurred.
     */
    commit(): void;
    /** Increments the current input value to the next step boundary, and fires `onChange`. */
    increment(): void;
    /** Decrements the current input value to the next step boundary, and fires `onChange`. */
    decrement(): void;
    /** Sets the current value to the maximum color value, and fires `onChange`. */
    incrementToMax(): void;
    /** Sets the current value to the minimum color value, and fires `onChange`. */
    decrementToMin(): void;
    /**
     * Validates a user input string.
     * Values can be partially entered, and may be valid even if they cannot currently be parsed to a color.
     * Can be used to implement validation as a user types.
     */
    validate(value: string): boolean;
}
/**
 * Provides state management for a color field component. Color fields allow
 * users to enter and adjust a hex color value.
 */
export function useColorFieldState(props: ColorFieldProps): ColorFieldState;

//# sourceMappingURL=types.d.ts.map
