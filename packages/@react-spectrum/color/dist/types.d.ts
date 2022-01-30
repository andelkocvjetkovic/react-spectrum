import React from "react";
import { SpectrumColorWheelProps, SpectrumColorSliderProps, SpectrumColorFieldProps } from "@react-types/color";
import { TextFieldRef } from "@react-types/textfield";
/**
 * ColorWheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */
export let ColorWheel: React.ForwardRefExoticComponent<SpectrumColorWheelProps & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
/**
 * ColorSliders allow users to adjust an individual channel of a color value.
 */
export let ColorSlider: React.ForwardRefExoticComponent<SpectrumColorSliderProps & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
/**
 * ColorFields allow users to enter a color in #rrggbb hexadecimal format.
 */
export const ColorField: React.ForwardRefExoticComponent<SpectrumColorFieldProps & React.RefAttributes<TextFieldRef>>;

//# sourceMappingURL=types.d.ts.map
