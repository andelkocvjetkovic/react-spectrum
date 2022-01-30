import { Collection, DragEndEvent, DraggableCollectionProps, DragItem, DragMoveEvent, DragStartEvent, Node, DragTypes, DropOperation, DroppableCollectionProps, DropTarget } from "@react-types/shared";
import { Key } from "react";
import { MultipleSelectionManager } from "@react-stately/selection";
interface DraggableCollectionOptions extends DraggableCollectionProps {
    collection: Collection<Node<unknown>>;
    selectionManager: MultipleSelectionManager;
}
export interface DraggableCollectionState {
    collection: Collection<Node<unknown>>;
    selectionManager: MultipleSelectionManager;
    isDragging(key: Key): boolean;
    getKeysForDrag(key: Key): Set<Key>;
    getItems(key: Key): DragItem[];
    renderPreview(key: Key): JSX.Element;
    startDrag(key: Key, event: DragStartEvent): void;
    moveDrag(event: DragMoveEvent): void;
    endDrag(event: DragEndEvent): void;
}
export function useDraggableCollectionState(props: DraggableCollectionOptions): DraggableCollectionState;
interface DroppableCollectionStateOptions extends DroppableCollectionProps {
    collection: Collection<Node<unknown>>;
    selectionManager: MultipleSelectionManager;
}
export interface DroppableCollectionState {
    collection: Collection<Node<unknown>>;
    selectionManager: MultipleSelectionManager;
    target: DropTarget;
    setTarget(target: DropTarget): void;
    isDropTarget(target: DropTarget): boolean;
    getDropOperation(target: DropTarget, types: DragTypes, allowedOperations: DropOperation[]): DropOperation;
}
export function useDroppableCollectionState(props: DroppableCollectionStateOptions): DroppableCollectionState;

//# sourceMappingURL=types.d.ts.map
