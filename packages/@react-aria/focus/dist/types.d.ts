import React, { ReactNode, RefObject, HTMLAttributes, ReactElement, MutableRefObject } from "react";
import { FocusableDOMProps, FocusableProps } from "@react-types/shared";
/**
 * A utility function that focuses an element while avoiding undesired side effects such
 * as page scrolling and screen reader issues with CSS transitions.
 */
export function focusSafely(element: HTMLElement): void;
interface FocusScopeProps {
    /** The contents of the focus scope. */
    children: ReactNode;
    /**
     * Whether to contain focus inside the scope, so users cannot
     * move focus outside, for example in a modal dialog.
     */
    contain?: boolean;
    /**
     * Whether to restore focus back to the element that was focused
     * when the focus scope mounted, after the focus scope unmounts.
     */
    restoreFocus?: boolean;
    /** Whether to auto focus the first focusable element in the focus scope on mount. */
    autoFocus?: boolean;
}
interface FocusManagerOptions {
    /** The element to start searching from. The currently focused element by default. */
    from?: HTMLElement;
    /** Whether to only include tabbable elements, or all focusable elements. */
    tabbable?: boolean;
    /** Whether focus should wrap around when it reaches the end of the scope. */
    wrap?: boolean;
}
interface FocusManager {
    /** Moves focus to the next focusable or tabbable element in the focus scope. */
    focusNext(opts?: FocusManagerOptions): HTMLElement;
    /** Moves focus to the previous focusable or tabbable element in the focus scope. */
    focusPrevious(opts?: FocusManagerOptions): HTMLElement;
    /** Moves focus to the first focusable or tabbable element in the focus scope. */
    focusFirst(opts?: FocusManagerOptions): HTMLElement;
    /** Moves focus to the last focusable or tabbable element in the focus scope. */
    focusLast(opts?: FocusManagerOptions): HTMLElement;
}
/**
 * A FocusScope manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 */
export function FocusScope(props: FocusScopeProps): JSX.Element;
/**
 * Returns a FocusManager interface for the parent FocusScope.
 * A FocusManager can be used to programmatically move focus within
 * a FocusScope, e.g. in response to user events like keyboard navigation.
 */
export function useFocusManager(): FocusManager;
/**
 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
 * that matches all focusable/tabbable elements.
 */
export function getFocusableTreeWalker(root: HTMLElement, opts?: FocusManagerOptions, scope?: HTMLElement[]): TreeWalker;
/**
 * Creates a FocusManager object that can be used to move focus within an element.
 */
export function createFocusManager(ref: RefObject<HTMLElement>): FocusManager;
interface FocusRingProps {
    /**
     * Whether to show the focus ring when something
     * inside the container element has focus (true), or
     * only if the container itself has focus (false).
     * @default 'false'
     */
    within?: boolean;
    /** Whether the element is a text input. */
    isTextInput?: boolean;
    /** Whether the element will be auto focused. */
    autoFocus?: boolean;
}
interface FocusRingAria {
    /** Whether the element is currently focused. */
    isFocused: boolean;
    /** Whether keyboard focus should be visible. */
    isFocusVisible: boolean;
    /** Props to apply to the container element with the focus ring. */
    focusProps: HTMLAttributes<HTMLElement>;
}
/**
 * Determines whether a focus ring should be shown to indicate keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
export function useFocusRing(props?: FocusRingProps): FocusRingAria;
interface _FocusRingProps1 {
    /** Child element to apply CSS classes to. */
    children: ReactElement;
    /** CSS class to apply when the element is focused. */
    focusClass?: string;
    /** CSS class to apply when the element has keyboard focus. */
    focusRingClass?: string;
    /**
     * Whether to show the focus ring when something
     * inside the container element has focus (true), or
     * only if the container itself has focus (false).
     * @default false
     */
    within?: boolean;
    /** Whether the element is a text input. */
    isTextInput?: boolean;
    /** Whether the element will be auto focused. */
    autoFocus?: boolean;
}
/**
 * A utility component that applies a CSS class when an element has keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
export function FocusRing(props: _FocusRingProps1): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
interface FocusableOptions extends FocusableProps, FocusableDOMProps {
    /** Whether focus should be disabled. */
    isDisabled?: boolean;
}
interface FocusableProviderProps extends HTMLAttributes<HTMLElement> {
    /** The child element to provide DOM props to. */
    children?: ReactNode;
}
interface FocusableContextValue extends FocusableProviderProps {
    ref?: MutableRefObject<HTMLElement>;
}
export let FocusableProvider: React.ForwardRefExoticComponent<FocusableProviderProps & React.RefAttributes<HTMLElement>>;
/**
 * Used to make an element focusable and capable of auto focus.
 */
export function useFocusable(props: FocusableOptions, domRef: RefObject<HTMLElement>): {
    focusableProps: FocusableContextValue & {
        tabIndex: number;
        defaultChecked?: boolean;
        defaultValue?: string | number | readonly string[];
        suppressContentEditableWarning?: boolean;
        suppressHydrationWarning?: boolean;
        accessKey?: string;
        className?: string;
        contentEditable?: "inherit" | (boolean | "false" | "true");
        contextMenu?: string;
        dir?: string;
        draggable?: boolean | "false" | "true";
        hidden?: boolean;
        id?: string;
        lang?: string;
        placeholder?: string;
        slot?: string;
        spellCheck?: boolean | "false" | "true";
        style?: React.CSSProperties;
        title?: string;
        translate?: "yes" | "no";
        radioGroup?: string;
        role?: React.AriaRole;
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: "on" | "off";
        inputMode?: "search" | "numeric" | "none" | "url" | "text" | "tel" | "email" | "decimal";
        is?: string;
        'aria-activedescendant'?: string;
        'aria-atomic'?: boolean | "false" | "true";
        'aria-autocomplete'?: "inline" | "both" | "none" | "list";
        'aria-busy'?: boolean | "false" | "true";
        'aria-checked'?: boolean | "mixed" | "false" | "true";
        'aria-colcount'?: number;
        'aria-colindex'?: number;
        'aria-colspan'?: number;
        'aria-controls'?: string;
        'aria-current'?: boolean | "location" | "time" | "page" | "false" | "true" | "step" | "date";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: boolean | "false" | "true";
        'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup";
        'aria-errormessage'?: string;
        'aria-expanded'?: boolean | "false" | "true";
        'aria-flowto'?: string;
        'aria-grabbed'?: boolean | "false" | "true";
        'aria-haspopup'?: boolean | "grid" | "dialog" | "menu" | "listbox" | "false" | "true" | "tree";
        'aria-hidden'?: boolean | "false" | "true";
        'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: number;
        'aria-live'?: "off" | "assertive" | "polite";
        'aria-modal'?: boolean | "false" | "true";
        'aria-multiline'?: boolean | "false" | "true";
        'aria-multiselectable'?: boolean | "false" | "true";
        'aria-orientation'?: "horizontal" | "vertical";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: number;
        'aria-pressed'?: boolean | "mixed" | "false" | "true";
        'aria-readonly'?: boolean | "false" | "true";
        'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
        'aria-required'?: boolean | "false" | "true";
        'aria-roledescription'?: string;
        'aria-rowcount'?: number;
        'aria-rowindex'?: number;
        'aria-rowspan'?: number;
        'aria-selected'?: boolean | "false" | "true";
        'aria-setsize'?: number;
        'aria-sort'?: "none" | "other" | "ascending" | "descending";
        'aria-valuemax'?: number;
        'aria-valuemin'?: number;
        'aria-valuenow'?: number;
        'aria-valuetext'?: string;
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        };
        onCopy?: React.ClipboardEventHandler<HTMLElement>;
        onCopyCapture?: React.ClipboardEventHandler<HTMLElement>;
        onCut?: React.ClipboardEventHandler<HTMLElement>;
        onCutCapture?: React.ClipboardEventHandler<HTMLElement>;
        onPaste?: React.ClipboardEventHandler<HTMLElement>;
        onPasteCapture?: React.ClipboardEventHandler<HTMLElement>;
        onCompositionEnd?: React.CompositionEventHandler<HTMLElement>;
        onCompositionEndCapture?: React.CompositionEventHandler<HTMLElement>;
        onCompositionStart?: React.CompositionEventHandler<HTMLElement>;
        onCompositionStartCapture?: React.CompositionEventHandler<HTMLElement>;
        onCompositionUpdate?: React.CompositionEventHandler<HTMLElement>;
        onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLElement>;
        onFocus?: React.FocusEventHandler<HTMLElement>;
        onFocusCapture?: React.FocusEventHandler<HTMLElement>;
        onBlur?: React.FocusEventHandler<HTMLElement>;
        onBlurCapture?: React.FocusEventHandler<HTMLElement>;
        onChange?: React.FormEventHandler<HTMLElement>;
        onChangeCapture?: React.FormEventHandler<HTMLElement>;
        onBeforeInput?: React.FormEventHandler<HTMLElement>;
        onBeforeInputCapture?: React.FormEventHandler<HTMLElement>;
        onInput?: React.FormEventHandler<HTMLElement>;
        onInputCapture?: React.FormEventHandler<HTMLElement>;
        onReset?: React.FormEventHandler<HTMLElement>;
        onResetCapture?: React.FormEventHandler<HTMLElement>;
        onSubmit?: React.FormEventHandler<HTMLElement>;
        onSubmitCapture?: React.FormEventHandler<HTMLElement>;
        onInvalid?: React.FormEventHandler<HTMLElement>;
        onInvalidCapture?: React.FormEventHandler<HTMLElement>;
        onLoad?: React.ReactEventHandler<HTMLElement>;
        onLoadCapture?: React.ReactEventHandler<HTMLElement>;
        onError?: React.ReactEventHandler<HTMLElement>;
        onErrorCapture?: React.ReactEventHandler<HTMLElement>;
        onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
        onKeyDownCapture?: React.KeyboardEventHandler<HTMLElement>;
        onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
        onKeyPressCapture?: React.KeyboardEventHandler<HTMLElement>;
        onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
        onKeyUpCapture?: React.KeyboardEventHandler<HTMLElement>;
        onAbort?: React.ReactEventHandler<HTMLElement>;
        onAbortCapture?: React.ReactEventHandler<HTMLElement>;
        onCanPlay?: React.ReactEventHandler<HTMLElement>;
        onCanPlayCapture?: React.ReactEventHandler<HTMLElement>;
        onCanPlayThrough?: React.ReactEventHandler<HTMLElement>;
        onCanPlayThroughCapture?: React.ReactEventHandler<HTMLElement>;
        onDurationChange?: React.ReactEventHandler<HTMLElement>;
        onDurationChangeCapture?: React.ReactEventHandler<HTMLElement>;
        onEmptied?: React.ReactEventHandler<HTMLElement>;
        onEmptiedCapture?: React.ReactEventHandler<HTMLElement>;
        onEncrypted?: React.ReactEventHandler<HTMLElement>;
        onEncryptedCapture?: React.ReactEventHandler<HTMLElement>;
        onEnded?: React.ReactEventHandler<HTMLElement>;
        onEndedCapture?: React.ReactEventHandler<HTMLElement>;
        onLoadedData?: React.ReactEventHandler<HTMLElement>;
        onLoadedDataCapture?: React.ReactEventHandler<HTMLElement>;
        onLoadedMetadata?: React.ReactEventHandler<HTMLElement>;
        onLoadedMetadataCapture?: React.ReactEventHandler<HTMLElement>;
        onLoadStart?: React.ReactEventHandler<HTMLElement>;
        onLoadStartCapture?: React.ReactEventHandler<HTMLElement>;
        onPause?: React.ReactEventHandler<HTMLElement>;
        onPauseCapture?: React.ReactEventHandler<HTMLElement>;
        onPlay?: React.ReactEventHandler<HTMLElement>;
        onPlayCapture?: React.ReactEventHandler<HTMLElement>;
        onPlaying?: React.ReactEventHandler<HTMLElement>;
        onPlayingCapture?: React.ReactEventHandler<HTMLElement>;
        onProgress?: React.ReactEventHandler<HTMLElement>;
        onProgressCapture?: React.ReactEventHandler<HTMLElement>;
        onRateChange?: React.ReactEventHandler<HTMLElement>;
        onRateChangeCapture?: React.ReactEventHandler<HTMLElement>;
        onSeeked?: React.ReactEventHandler<HTMLElement>;
        onSeekedCapture?: React.ReactEventHandler<HTMLElement>;
        onSeeking?: React.ReactEventHandler<HTMLElement>;
        onSeekingCapture?: React.ReactEventHandler<HTMLElement>;
        onStalled?: React.ReactEventHandler<HTMLElement>;
        onStalledCapture?: React.ReactEventHandler<HTMLElement>;
        onSuspend?: React.ReactEventHandler<HTMLElement>;
        onSuspendCapture?: React.ReactEventHandler<HTMLElement>;
        onTimeUpdate?: React.ReactEventHandler<HTMLElement>;
        onTimeUpdateCapture?: React.ReactEventHandler<HTMLElement>;
        onVolumeChange?: React.ReactEventHandler<HTMLElement>;
        onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement>;
        onWaiting?: React.ReactEventHandler<HTMLElement>;
        onWaitingCapture?: React.ReactEventHandler<HTMLElement>;
        onAuxClick?: React.MouseEventHandler<HTMLElement>;
        onAuxClickCapture?: React.MouseEventHandler<HTMLElement>;
        onClick?: React.MouseEventHandler<HTMLElement>;
        onClickCapture?: React.MouseEventHandler<HTMLElement>;
        onContextMenu?: React.MouseEventHandler<HTMLElement>;
        onContextMenuCapture?: React.MouseEventHandler<HTMLElement>;
        onDoubleClick?: React.MouseEventHandler<HTMLElement>;
        onDoubleClickCapture?: React.MouseEventHandler<HTMLElement>;
        onDrag?: React.DragEventHandler<HTMLElement>;
        onDragCapture?: React.DragEventHandler<HTMLElement>;
        onDragEnd?: React.DragEventHandler<HTMLElement>;
        onDragEndCapture?: React.DragEventHandler<HTMLElement>;
        onDragEnter?: React.DragEventHandler<HTMLElement>;
        onDragEnterCapture?: React.DragEventHandler<HTMLElement>;
        onDragExit?: React.DragEventHandler<HTMLElement>;
        onDragExitCapture?: React.DragEventHandler<HTMLElement>;
        onDragLeave?: React.DragEventHandler<HTMLElement>;
        onDragLeaveCapture?: React.DragEventHandler<HTMLElement>;
        onDragOver?: React.DragEventHandler<HTMLElement>;
        onDragOverCapture?: React.DragEventHandler<HTMLElement>;
        onDragStart?: React.DragEventHandler<HTMLElement>;
        onDragStartCapture?: React.DragEventHandler<HTMLElement>;
        onDrop?: React.DragEventHandler<HTMLElement>;
        onDropCapture?: React.DragEventHandler<HTMLElement>;
        onMouseDown?: React.MouseEventHandler<HTMLElement>;
        onMouseDownCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseEnter?: React.MouseEventHandler<HTMLElement>;
        onMouseLeave?: React.MouseEventHandler<HTMLElement>;
        onMouseMove?: React.MouseEventHandler<HTMLElement>;
        onMouseMoveCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseOut?: React.MouseEventHandler<HTMLElement>;
        onMouseOutCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseOver?: React.MouseEventHandler<HTMLElement>;
        onMouseOverCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseUp?: React.MouseEventHandler<HTMLElement>;
        onMouseUpCapture?: React.MouseEventHandler<HTMLElement>;
        onSelect?: React.ReactEventHandler<HTMLElement>;
        onSelectCapture?: React.ReactEventHandler<HTMLElement>;
        onTouchCancel?: React.TouchEventHandler<HTMLElement>;
        onTouchCancelCapture?: React.TouchEventHandler<HTMLElement>;
        onTouchEnd?: React.TouchEventHandler<HTMLElement>;
        onTouchEndCapture?: React.TouchEventHandler<HTMLElement>;
        onTouchMove?: React.TouchEventHandler<HTMLElement>;
        onTouchMoveCapture?: React.TouchEventHandler<HTMLElement>;
        onTouchStart?: React.TouchEventHandler<HTMLElement>;
        onTouchStartCapture?: React.TouchEventHandler<HTMLElement>;
        onPointerDown?: React.PointerEventHandler<HTMLElement>;
        onPointerDownCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerMove?: React.PointerEventHandler<HTMLElement>;
        onPointerMoveCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerUp?: React.PointerEventHandler<HTMLElement>;
        onPointerUpCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerCancel?: React.PointerEventHandler<HTMLElement>;
        onPointerCancelCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerEnter?: React.PointerEventHandler<HTMLElement>;
        onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerLeave?: React.PointerEventHandler<HTMLElement>;
        onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerOver?: React.PointerEventHandler<HTMLElement>;
        onPointerOverCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerOut?: React.PointerEventHandler<HTMLElement>;
        onPointerOutCapture?: React.PointerEventHandler<HTMLElement>;
        onGotPointerCapture?: React.PointerEventHandler<HTMLElement>;
        onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLElement>;
        onLostPointerCapture?: React.PointerEventHandler<HTMLElement>;
        onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLElement>;
        onScroll?: React.UIEventHandler<HTMLElement>;
        onScrollCapture?: React.UIEventHandler<HTMLElement>;
        onWheel?: React.WheelEventHandler<HTMLElement>;
        onWheelCapture?: React.WheelEventHandler<HTMLElement>;
        onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
        onAnimationStartCapture?: React.AnimationEventHandler<HTMLElement>;
        onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
        onAnimationEndCapture?: React.AnimationEventHandler<HTMLElement>;
        onAnimationIteration?: React.AnimationEventHandler<HTMLElement>;
        onAnimationIterationCapture?: React.AnimationEventHandler<HTMLElement>;
        onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
        onTransitionEndCapture?: React.TransitionEventHandler<HTMLElement>;
    };
};

//# sourceMappingURL=types.d.ts.map