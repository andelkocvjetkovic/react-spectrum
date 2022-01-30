import AlertMedium from "@spectrum-icons/ui/AlertMedium";
import InfoMedium from "@spectrum-icons/ui/InfoMedium";
import React, { ReactElement, ReactNode } from "react";
import SuccessMedium from "@spectrum-icons/ui/SuccessMedium";
import { ToastProps, ToastState, ToastOptions } from "@react-types/toast";
interface SpectrumToastProps extends ToastProps, ToastState {
}
export const ICONS: {
    info: typeof InfoMedium;
    negative: typeof AlertMedium;
    positive: typeof SuccessMedium;
};
export let Toast: React.ForwardRefExoticComponent<SpectrumToastProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
export function ToastContainer(props: ToastState): ReactElement;
interface ToastContextProps {
    positive?: (content: ReactNode, options: ToastOptions) => void;
    negative?: (content: ReactNode, options: ToastOptions) => void;
    neutral?: (content: ReactNode, options: ToastOptions) => void;
    info?: (content: ReactNode, options: ToastOptions) => void;
}
interface ToastProviderProps {
    children: ReactNode;
}
export const ToastContext: React.Context<ToastContextProps>;
export function useToastProvider(): ToastContextProps;
export function ToastProvider(props: ToastProviderProps): ReactElement;

//# sourceMappingURL=types.d.ts.map
