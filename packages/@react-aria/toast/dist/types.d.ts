import { DOMProps } from "@react-types/shared";
import { HTMLAttributes, ImgHTMLAttributes } from "react";
import { PressProps } from "@react-aria/interactions";
import { ToastProps, ToastState } from "@react-types/toast";
interface ToastAriaProps extends ToastProps {
}
interface ToastAria {
    toastProps: HTMLAttributes<HTMLElement>;
    iconProps: ImgHTMLAttributes<HTMLElement>;
    actionButtonProps: PressProps;
    closeButtonProps: DOMProps & PressProps;
}
export function useToast(props: ToastAriaProps, state: ToastState): ToastAria;

//# sourceMappingURL=types.d.ts.map
