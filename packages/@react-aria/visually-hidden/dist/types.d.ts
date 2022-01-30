import { HTMLAttributes, JSXElementConstructor, ReactNode } from "react";
interface VisuallyHiddenProps extends HTMLAttributes<HTMLElement> {
    /** The content to visually hide. */
    children?: ReactNode;
    /**
     * The element type for the container.
     * @default 'div'
     */
    elementType?: string | JSXElementConstructor<any>;
    /** Whether the element should become visible on focus, for example skip links. */
    isFocusable?: boolean;
}
interface VisuallyHiddenAria {
    visuallyHiddenProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */
export function useVisuallyHidden(props?: VisuallyHiddenProps): VisuallyHiddenAria;
/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */
export function VisuallyHidden(props: VisuallyHiddenProps): JSX.Element;

//# sourceMappingURL=types.d.ts.map