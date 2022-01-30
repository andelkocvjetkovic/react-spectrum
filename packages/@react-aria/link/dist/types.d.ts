import { AriaLinkProps } from "@react-types/link";
import { HTMLAttributes, RefObject } from "react";
export interface AriaLinkOptions extends AriaLinkProps {
    /** Whether the link is disabled. */
    isDisabled?: boolean;
    /**
     * The HTML element used to render the link, e.g. 'a', or 'span'.
     * @default 'a'
     */
    elementType?: string;
}
export interface LinkAria {
    /** Props for the link element. */
    linkProps: HTMLAttributes<HTMLElement>;
    /** Whether the link is currently pressed. */
    isPressed: boolean;
}
/**
 * Provides the behavior and accessibility implementation for a link component.
 * A link allows a user to navigate to another page or resource within a web page
 * or application.
 */
export function useLink(props: AriaLinkOptions, ref: RefObject<HTMLElement>): LinkAria;

//# sourceMappingURL=types.d.ts.map