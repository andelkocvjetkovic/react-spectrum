import React, { HTMLAttributes, RefObject, ReactElement, ReactNode, FocusEvent, SyntheticEvent } from "react";
import { PressEvents, FocusEvents, HoverEvents, KeyboardEvents, MoveEvents, ScrollEvents, LongPressEvent } from "@react-types/shared";
export interface PressProps extends PressEvents {
    /** Whether the target is in a controlled press state (e.g. an overlay it triggers is open). */
    isPressed?: boolean;
    /** Whether the press events should be disabled. */
    isDisabled?: boolean;
    /** Whether the target should not receive focus on press. */
    preventFocusOnPress?: boolean;
    /**
     * Whether press events should be canceled when the pointer leaves the target while pressed.
     * By default, this is `false`, which means if the pointer returns back over the target while
     * still pressed, onPressStart will be fired again. If set to `true`, the press is canceled
     * when the pointer leaves the target and onPressStart will not be fired if the pointer returns.
     */
    shouldCancelOnPointerExit?: boolean;
    /** Whether text selection should be enabled on the pressable element. */
    allowTextSelectionOnPress?: boolean;
}
export interface PressHookProps extends PressProps {
    /** A ref to the target element. */
    ref?: RefObject<HTMLElement>;
}
export interface PressResult {
    /** Whether the target is currently pressed. */
    isPressed: boolean;
    /** Props to spread on the target element. */
    pressProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles press interactions across mouse, touch, keyboard, and screen readers.
 * It normalizes behavior across browsers and platforms, and handles many nuances
 * of dealing with pointer and keyboard events.
 */
export function usePress(props: PressHookProps): PressResult;
interface PressableProps extends PressProps {
    children: ReactElement<HTMLAttributes<HTMLElement>, string>;
}
export const Pressable: React.ForwardRefExoticComponent<PressableProps & React.RefAttributes<HTMLElement>>;
interface PressResponderProps extends PressProps {
    children: ReactNode;
}
export const PressResponder: React.ForwardRefExoticComponent<PressResponderProps & React.RefAttributes<HTMLElement>>;
interface FocusProps extends FocusEvents {
    /** Whether the focus events should be disabled. */
    isDisabled?: boolean;
}
interface FocusResult {
    /** Props to spread onto the target element. */
    focusProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles focus events for the immediate target.
 * Focus events on child elements will be ignored.
 */
export function useFocus(props: FocusProps): FocusResult;
type Modality = 'keyboard' | 'pointer' | 'virtual';
type FocusVisibleHandler = (isFocusVisible: boolean) => void;
interface FocusVisibleProps {
    /** Whether the element is a text input. */
    isTextInput?: boolean;
    /** Whether the element will be auto focused. */
    autoFocus?: boolean;
}
interface FocusVisibleResult {
    /** Whether keyboard focus is visible globally. */
    isFocusVisible: boolean;
}
/**
 * If true, keyboard focus is visible.
 */
export function isFocusVisible(): boolean;
export function getInteractionModality(): Modality;
export function setInteractionModality(modality: Modality): void;
/**
 * Keeps state of the current modality.
 */
export function useInteractionModality(): Modality;
/**
 * Manages focus visible state for the page, and subscribes individual components for updates.
 */
export function useFocusVisible(props?: FocusVisibleProps): FocusVisibleResult;
/**
 * Listens for trigger change and reports if focus is visible (i.e., modality is not pointer).
 */
export function useFocusVisibleListener(fn: FocusVisibleHandler, deps: ReadonlyArray<any>, opts?: {
    isTextInput?: boolean;
}): void;
interface FocusWithinProps {
    /** Whether the focus within events should be disabled. */
    isDisabled?: boolean;
    /** Handler that is called when the target element or a descendant receives focus. */
    onFocusWithin?: (e: FocusEvent) => void;
    /** Handler that is called when the target element and all descendants lose focus. */
    onBlurWithin?: (e: FocusEvent) => void;
    /** Handler that is called when the the focus within state changes. */
    onFocusWithinChange?: (isFocusWithin: boolean) => void;
}
interface FocusWithinResult {
    /** Props to spread onto the target element. */
    focusWithinProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles focus events for the target and its descendants.
 */
export function useFocusWithin(props: FocusWithinProps): FocusWithinResult;
export interface HoverProps extends HoverEvents {
    /** Whether the hover events should be disabled. */
    isDisabled?: boolean;
}
interface HoverResult {
    /** Props to spread on the target element. */
    hoverProps: HTMLAttributes<HTMLElement>;
    isHovered: boolean;
}
/**
 * Handles pointer hover interactions for an element. Normalizes behavior
 * across browsers and platforms, and ignores emulated mouse events on touch devices.
 */
export function useHover(props: HoverProps): HoverResult;
interface InteractOutsideProps {
    ref: RefObject<Element>;
    onInteractOutside?: (e: SyntheticEvent) => void;
    onInteractOutsideStart?: (e: SyntheticEvent) => void;
    /** Whether the interact outside events should be disabled. */
    isDisabled?: boolean;
}
/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */
export function useInteractOutside(props: InteractOutsideProps): void;
export interface KeyboardProps extends KeyboardEvents {
    /** Whether the keyboard events should be disabled. */
    isDisabled?: boolean;
}
interface KeyboardResult {
    /** Props to spread onto the target element. */
    keyboardProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles keyboard interactions for a focusable element.
 */
export function useKeyboard(props: KeyboardProps): KeyboardResult;
interface MoveResult {
    /** Props to spread on the target element. */
    moveProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles move interactions across mouse, touch, and keyboard, including dragging with
 * the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and
 * platforms, and ignores emulated mouse events on touch devices.
 */
export function useMove(props: MoveEvents): MoveResult;
export interface ScrollWheelProps extends ScrollEvents {
    /** Whether the scroll listener should be disabled. */
    isDisabled?: boolean;
}
export function useScrollWheel(props: ScrollWheelProps, ref: RefObject<HTMLElement>): void;
interface LongPressProps {
    /** Whether long press events should be disabled. */
    isDisabled?: boolean;
    /** Handler that is called when a long press interaction starts. */
    onLongPressStart?: (e: LongPressEvent) => void;
    /**
     * Handler that is called when a long press interaction ends, either
     * over the target or when the pointer leaves the target.
     */
    onLongPressEnd?: (e: LongPressEvent) => void;
    /**
     * Handler that is called when the threshold time is met while
     * the press is over the target.
     */
    onLongPress?: (e: LongPressEvent) => void;
    /**
     * The amount of time in milliseconds to wait before triggering a long press.
     * @default 500ms
     */
    threshold?: number;
    /**
     * A description for assistive techology users indicating that a long press
     * action is available, e.g. "Long press to open menu".
     */
    accessibilityDescription?: string;
}
interface LongPressResult {
    /** Props to spread on the target element. */
    longPressProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles long press interactions across mouse and touch devices. Supports a customizable time threshold,
 * accessibility description, and normalizes behavior across browsers and devices.
 */
export function useLongPress(props: LongPressProps): LongPressResult;

//# sourceMappingURL=types.d.ts.map
