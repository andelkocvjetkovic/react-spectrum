import { DOMRefValue, DOMRef } from "@react-types/shared";
import React, { ReactElement } from "react";
import { SpectrumMenuTriggerProps, SpectrumMenuProps, SpectrumActionMenuProps } from "@react-types/menu";
/**
 * The MenuTrigger serves as a wrapper around a Menu and its associated trigger,
 * linking the Menu's open state with the trigger's press state.
 */
export let MenuTrigger: React.ForwardRefExoticComponent<SpectrumMenuTriggerProps & React.RefAttributes<DOMRefValue<HTMLElement>>>;
/**
 * Menus display a list of actions or options that a user can choose.
 */
export const Menu: <T>(props: SpectrumMenuProps<T> & {
    ref?: DOMRef<HTMLUListElement>;
}) => ReactElement;
/**
 * Convenience component to display an ActionButton with a Menu.
 */
export let ActionMenu: React.ForwardRefExoticComponent<SpectrumActionMenuProps<object> & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
export { Item, Section } from '@react-stately/collections';

//# sourceMappingURL=types.d.ts.map