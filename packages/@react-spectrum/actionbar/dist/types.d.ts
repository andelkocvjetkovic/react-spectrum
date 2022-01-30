import { DOMRef } from "@react-types/shared";
import React, { ReactElement } from "react";
import { SpectrumActionBarProps, SpectrumActionBarContainerProps } from "@react-types/actionbar";
/**
 * TODO: Add description of component here.
 */
export const ActionBar: <T>(props: SpectrumActionBarProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
/**
 * TODO: Add description of component here.
 */
export const ActionBarContainer: React.ForwardRefExoticComponent<SpectrumActionBarContainerProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
export { Item } from '@react-stately/collections';

//# sourceMappingURL=types.d.ts.map
