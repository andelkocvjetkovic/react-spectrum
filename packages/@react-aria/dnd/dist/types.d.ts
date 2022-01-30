import { AriaButtonProps } from "@react-types/button";
import { DragEndEvent, DragItem, DragMoveEvent, DragStartEvent, DropOperation, DropActivateEvent, DropEnterEvent, DropEvent, DropExitEvent, DropMoveEvent, DragTypes, DroppableCollectionProps, DropTarget, KeyboardDelegate, DropItem } from "@react-types/shared";
import { HTMLAttributes, RefObject, Key } from "react";
import { DroppableCollectionState, DraggableCollectionState } from "@react-stately/dnd";
interface DragOptions {
    onDragStart?: (e: DragStartEvent) => void;
    onDragMove?: (e: DragMoveEvent) => void;
    onDragEnd?: (e: DragEndEvent) => void;
    getItems: () => DragItem[];
    renderPreview?: (items: DragItem[]) => JSX.Element;
    getAllowedDropOperations?: () => DropOperation[];
}
interface DragResult {
    dragProps: HTMLAttributes<HTMLElement>;
    dragButtonProps: AriaButtonProps;
    isDragging: boolean;
}
export function useDrag(options: DragOptions): DragResult;
interface DropOptions {
    ref: RefObject<HTMLElement>;
    getDropOperation?: (types: DragTypes, allowedOperations: DropOperation[]) => DropOperation;
    getDropOperationForPoint?: (types: DragTypes, allowedOperations: DropOperation[], x: number, y: number) => DropOperation;
    onDropEnter?: (e: DropEnterEvent) => void;
    onDropMove?: (e: DropMoveEvent) => void;
    onDropActivate?: (e: DropActivateEvent) => void;
    onDropExit?: (e: DropExitEvent) => void;
    onDrop?: (e: DropEvent) => void;
}
interface DropResult {
    dropProps: HTMLAttributes<HTMLElement>;
    isDropTarget: boolean;
}
export function useDrop(options: DropOptions): DropResult;
interface DroppableCollectionOptions extends DroppableCollectionProps {
    keyboardDelegate: KeyboardDelegate;
    getDropTargetFromPoint: (x: number, y: number) => DropTarget | null;
}
interface DroppableCollectionResult {
    collectionProps: HTMLAttributes<HTMLElement>;
}
export function useDroppableCollection(props: DroppableCollectionOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement>): DroppableCollectionResult;
interface DroppableItemOptions {
    target: DropTarget;
}
interface DroppableItemResult {
    dropProps: HTMLAttributes<HTMLElement>;
}
export function useDroppableItem(options: DroppableItemOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement>): DroppableItemResult;
interface DropIndicatorProps {
    target: DropTarget;
}
interface DropIndicatorAria {
    dropIndicatorProps: HTMLAttributes<HTMLElement>;
}
export function useDropIndicator(props: DropIndicatorProps, state: DroppableCollectionState, ref: RefObject<HTMLElement>): DropIndicatorAria;
interface DraggableItemProps {
    key: Key;
}
interface DraggableItemResult {
    dragProps: HTMLAttributes<HTMLElement>;
    dragButtonProps: AriaButtonProps;
}
export function useDraggableItem(props: DraggableItemProps, state: DraggableCollectionState): DraggableItemResult;
interface ClipboardProps {
    getItems?: () => DragItem[];
    onCopy?: () => void;
    onCut?: () => void;
    onPaste?: (items: DropItem[]) => void;
}
interface ClipboardResult {
    clipboardProps: HTMLAttributes<HTMLElement>;
}
export function useClipboard(options: ClipboardProps): ClipboardResult;

//# sourceMappingURL=types.d.ts.map
