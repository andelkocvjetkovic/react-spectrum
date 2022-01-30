import React, { HTMLAttributes, RefObject, AriaAttributes, ReactNode } from "react";
import { PlacementAxis, PositionProps } from "@react-types/overlays";
import { AriaButtonProps } from "@react-types/button";
import { OverlayTriggerState } from "@react-stately/overlays";
interface AriaPositionProps extends PositionProps {
    /**
     * Element that that serves as the positioning boundary.
     * @default document.body
     */
    boundaryElement?: HTMLElement;
    /**
     * The ref for the element which the overlay positions itself with respect to.
     */
    targetRef: RefObject<HTMLElement>;
    /**
     * The ref for the overlay element.
     */
    overlayRef: RefObject<HTMLElement>;
    /**
     * A ref for the scrollable region within the overlay.
     * @default overlayRef
     */
    scrollRef?: RefObject<HTMLElement>;
    /**
     * Whether the overlay should update its position automatically.
     * @default true
     */
    shouldUpdatePosition?: boolean;
    /** Handler that is called when the overlay should close. */
    onClose?: () => void;
    /**
     * The maxHeight specified for the overlay element.
     * By default, it will take all space up to the current viewport height.
     */
    maxHeight?: number;
}
interface PositionAria {
    /** Props for the overlay container element. */
    overlayProps: HTMLAttributes<Element>;
    /** Props for the overlay tip arrow if any. */
    arrowProps: HTMLAttributes<Element>;
    /** Placement of the overlay with respect to the overlay trigger. */
    placement: PlacementAxis;
    /** Updates the position of the overlay. */
    updatePosition(): void;
}
/**
 * Handles positioning overlays like popovers and menus relative to a trigger
 * element, and updating the position when the window resizes.
 */
export function useOverlayPosition(props: AriaPositionProps): PositionAria;
interface OverlayProps {
    /** Whether the overlay is currently open. */
    isOpen?: boolean;
    /** Handler that is called when the overlay should close. */
    onClose?: () => void;
    /**
     * Whether to close the overlay when the user interacts outside it.
     * @default false
     */
    isDismissable?: boolean;
    /** Whether the overlay should close when focus is lost or moves outside it. */
    shouldCloseOnBlur?: boolean;
    /**
     * Whether pressing the escape key to close the overlay should be disabled.
     * @default false
     */
    isKeyboardDismissDisabled?: boolean;
    /**
     * When user interacts with the argument element outside of the overlay ref,
     * return true if onClose should be called.  This gives you a chance to filter
     * out interaction with elements that should not dismiss the overlay.
     * By default, onClose will always be called on interaction outside the overlay ref.
     */
    shouldCloseOnInteractOutside?: (element: HTMLElement) => boolean;
}
interface OverlayAria {
    /** Props to apply to the overlay container element. */
    overlayProps: HTMLAttributes<HTMLElement>;
    /** Props to apply to the underlay element, if any. */
    underlayProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior for overlays such as dialogs, popovers, and menus.
 * Hides the overlay when the user interacts outside it, when the Escape key is pressed,
 * or optionally, on blur. Only the top-most overlay will close at once.
 */
export function useOverlay(props: OverlayProps, ref: RefObject<HTMLElement>): OverlayAria;
interface OverlayTriggerProps {
    /** Type of overlay that is opened by the trigger. */
    type: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
}
interface OverlayTriggerAria {
    /** Props for the trigger element. */
    triggerProps: AriaButtonProps;
    /** Props for the overlay container element. */
    overlayProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles the behavior and accessibility for an overlay trigger, e.g. a button
 * that opens a popover, menu, or other overlay that is positioned relative to the trigger.
 */
export function useOverlayTrigger(props: OverlayTriggerProps, state: OverlayTriggerState, ref: RefObject<HTMLElement>): OverlayTriggerAria;
interface PreventScrollOptions {
    /** Whether the scroll lock is disabled. */
    isDisabled?: boolean;
}
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */
export function usePreventScroll(options?: PreventScrollOptions): void;
interface ModalProviderProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}
/**
 * Each ModalProvider tracks how many modals are open in its subtree. On mount, the modals
 * trigger `addModal` to increment the count, and trigger `removeModal` on unmount to decrement it.
 * This is done recursively so that all parent providers are incremented and decremented.
 * If the modal count is greater than zero, we add `aria-hidden` to this provider to hide its
 * subtree from screen readers. This is done using React context in order to account for things
 * like portals, which can cause the React tree and the DOM tree to differ significantly in structure.
 */
export function ModalProvider(props: ModalProviderProps): JSX.Element;
interface ModalProviderAria {
    /**
     * Props to be spread on the container element.
     */
    modalProviderProps: AriaAttributes;
}
/**
 * Used to determine if the tree should be aria-hidden based on how many
 * modals are open.
 */
export function useModalProvider(): ModalProviderAria;
/**
 * An OverlayProvider acts as a container for the top-level application.
 * Any application that uses modal dialogs or other overlays should
 * be wrapped in a `<OverlayProvider>`. This is used to ensure that
 * the main content of the application is hidden from screen readers
 * if a modal or other overlay is opened. Only the top-most modal or
 * overlay should be accessible at once.
 */
export function OverlayProvider(props: ModalProviderProps): JSX.Element;
interface OverlayContainerProps extends ModalProviderProps {
    /**
     * The container element in which the overlay portal will be placed.
     * @default document.body
     */
    portalContainer?: HTMLElement;
}
/**
 * A container for overlays like modals and popovers. Renders the overlay
 * into a Portal which is placed at the end of the document body.
 * Also ensures that the overlay is hidden from screen readers if a
 * nested modal is opened. Only the top-most modal or overlay should
 * be accessible at once.
 */
export function OverlayContainer(props: OverlayContainerProps): React.ReactPortal;
interface ModalAriaProps extends HTMLAttributes<HTMLElement> {
    /** Data attribute marks the dom node as a modal for the aria-modal-polyfill. */
    'data-ismodal': boolean;
}
interface ModalOptions {
    isDisabled?: boolean;
}
interface ModalAria {
    /** Props for the modal content element. */
    modalProps: ModalAriaProps;
}
/**
 * Hides content outside the current `<OverlayContainer>` from screen readers
 * on mount and restores it on unmount. Typically used by modal dialogs and
 * other types of overlays to ensure that only the top-most modal is
 * accessible at once.
 */
export function useModal(options?: ModalOptions): ModalAria;
interface DismissButtonProps {
    /** Called when the dismiss button is activated. */
    onDismiss?: () => void;
}
/**
 * A visually hidden button that can be used to allow screen reader
 * users to dismiss a modal or popup when there is no visual
 * affordance to do so.
 */
export function DismissButton(props: DismissButtonProps): JSX.Element;
/**
 * Hides all elements in the DOM outside the given targets from screen readers using aria-hidden,
 * and returns a function to revert these changes. In addition, changes to the DOM are watched
 * and new elements outside the targets are automatically hidden.
 * @param targets - The elements that should remain visible.
 * @param root - Nothing will be hidden above this element.
 * @returns - A function to restore all hidden elements.
 */
export function ariaHideOutside(targets: HTMLElement[], root?: HTMLElement): () => void;

//# sourceMappingURL=types.d.ts.map