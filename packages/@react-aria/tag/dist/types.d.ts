import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { DOMProps, Removable } from "@react-types/shared";
export interface AriaTagProps extends Removable<ReactNode, void>, DOMProps {
    children?: ReactNode;
    isDisabled?: boolean;
    validationState?: 'invalid' | 'valid';
    isSelected?: boolean;
    role?: string;
}
export interface TagAria {
    tagProps: HTMLAttributes<HTMLElement>;
    labelProps: HTMLAttributes<HTMLElement>;
    clearButtonProps: ButtonHTMLAttributes<HTMLButtonElement>;
}
export function useTag(props: AriaTagProps): TagAria;
interface AriaTagGroupProps extends DOMProps {
    isDisabled?: boolean;
    isReadOnly?: boolean;
    validationState?: 'valid' | 'invalid';
}
interface TagGroupAria {
    tagGroupProps: HTMLAttributes<HTMLElement>;
}
export function useTagGroup(props: AriaTagGroupProps): TagGroupAria;

//# sourceMappingURL=types.d.ts.map
