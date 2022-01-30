import { Collection, KeyboardDelegate, Node } from "@react-types/shared";
import { InvalidationContext, Layout, LayoutInfo, Rect, Size, Point } from "@react-stately/virtualizer";
import { Key } from "react";
import { TableCollection } from "@react-types/table";
import { GridNode } from "@react-types/grid";
export type ListLayoutOptions<T> = {
    /** The height of a row in px. */
    rowHeight?: number;
    estimatedRowHeight?: number;
    headingHeight?: number;
    estimatedHeadingHeight?: number;
    padding?: number;
    indentationForItem?: (collection: Collection<Node<T>>, key: Key) => number;
    collator?: Intl.Collator;
    loaderHeight?: number;
    placeholderHeight?: number;
};
export interface LayoutNode {
    node?: Node<unknown>;
    layoutInfo: LayoutInfo;
    header?: LayoutInfo;
    children?: LayoutNode[];
}
/**
 * The ListLayout class is an implementation of a collection view {@link Layout}
 * it is used for creating lists and lists with indented sub-lists.
 *
 * To configure a ListLayout, you can use the properties to define the
 * layouts and/or use the method for defining indentation.
 * The {@link ListKeyboardDelegate} extends the existing collection view
 * delegate with an additional method to do this (it uses the same delegate object as
 * the collection view itself).
 */
export class ListLayout<T> extends Layout<Node<T>> implements KeyboardDelegate {
    protected rowHeight: number;
    protected estimatedRowHeight: number;
    protected headingHeight: number;
    protected estimatedHeadingHeight: number;
    protected padding: number;
    protected indentationForItem?: (collection: Collection<Node<T>>, key: Key) => number;
    protected layoutInfos: Map<Key, LayoutInfo>;
    protected layoutNodes: Map<Key, LayoutNode>;
    protected contentSize: Size;
    collection: Collection<Node<T>>;
    disabledKeys: Set<Key>;
    isLoading: boolean;
    protected lastWidth: number;
    protected lastCollection: Collection<Node<T>>;
    protected rootNodes: LayoutNode[];
    protected collator: Intl.Collator;
    protected invalidateEverything: boolean;
    protected loaderHeight: number;
    protected placeholderHeight: number;
    /**
     * Creates a new ListLayout with options. See the list of properties below for a description
     * of the options that can be provided.
     */
    constructor(options?: ListLayoutOptions<T>);
    getLayoutInfo(key: Key): LayoutInfo;
    getVisibleLayoutInfos(rect: Rect): LayoutInfo[];
    isVisible(node: LayoutNode, rect: Rect): boolean;
    validate(invalidationContext: InvalidationContext<Node<T>, unknown>): void;
    buildCollection(): LayoutNode[];
    buildChild(node: Node<T>, x: number, y: number): LayoutNode;
    buildNode(node: Node<T>, x: number, y: number): LayoutNode;
    buildSection(node: Node<T>, x: number, y: number): LayoutNode;
    buildItem(node: Node<T>, x: number, y: number): LayoutNode;
    updateItemSize(key: Key, size: Size): boolean;
    updateLayoutNode(key: Key, oldLayoutInfo: LayoutInfo, newLayoutInfo: LayoutInfo): void;
    getContentSize(): Size;
    getKeyAbove(key: Key): Key;
    getKeyBelow(key: Key): Key;
    getKeyPageAbove(key: Key): Key;
    getKeyPageBelow(key: Key): Key;
    getFirstKey(): Key;
    getLastKey(): Key;
    getKeyForSearch(search: string, fromKey?: Key): Key;
    getInitialLayoutInfo(layoutInfo: LayoutInfo): LayoutInfo;
    getFinalLayoutInfo(layoutInfo: LayoutInfo): LayoutInfo;
}
type TableLayoutOptions<T> = ListLayoutOptions<T> & {
    getDefaultWidth: (props: any) => string | number;
};
export class TableLayout<T> extends ListLayout<T> {
    collection: TableCollection<T>;
    lastCollection: TableCollection<T>;
    columnWidths: Map<Key, number>;
    stickyColumnIndices: number[];
    getDefaultWidth: (props: any) => string | number;
    wasLoading: boolean;
    isLoading: boolean;
    constructor(options: TableLayoutOptions<T>);
    buildCollection(): LayoutNode[];
    buildColumnWidths(): void;
    parseWidth(width: number | string): number;
    buildHeader(): LayoutNode;
    buildHeaderRow(headerRow: GridNode<T>, x: number, y: number): {
        layoutInfo: LayoutInfo;
        children: LayoutNode[];
    };
    setChildHeights(children: LayoutNode[], height: number): void;
    getColumnWidth(node: GridNode<T>): number;
    getEstimatedHeight(node: GridNode<T>, width: number, height: number, estimatedHeight: number): {
        height: number;
        isEstimated: boolean;
    };
    buildColumn(node: GridNode<T>, x: number, y: number): LayoutNode;
    buildBody(y: number): LayoutNode;
    buildNode(node: GridNode<T>, x: number, y: number): LayoutNode;
    buildRow(node: GridNode<T>, x: number, y: number): LayoutNode;
    buildCell(node: GridNode<T>, x: number, y: number): LayoutNode;
    getVisibleLayoutInfos(rect: Rect): LayoutInfo[];
    addVisibleLayoutInfos(res: LayoutInfo[], node: LayoutNode, rect: Rect): void;
    binarySearch(items: LayoutNode[], point: Point, axis: 'x' | 'y'): number;
    getInitialLayoutInfo(layoutInfo: LayoutInfo): LayoutInfo;
}

//# sourceMappingURL=types.d.ts.map