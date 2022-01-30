import { DOMRef, Direction, KeyboardDelegate, Node, Orientation, DOMRefValue, ItemProps } from "@react-types/shared";
import React, { ReactElement, Key } from "react";
import { SpectrumCardViewProps, SpectrumCardProps } from "@react-types/card";
import { GridCollection } from "@react-stately/grid";
import { InvalidationContext, Layout, LayoutInfo, Rect, Size } from "@react-stately/virtualizer";
import { Scale } from "@react-types/provider";
/**
 * TODO: Add description of component here.
 */
export const CardView: <T>(props: SpectrumCardViewProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
interface BaseLayoutOptions {
    collator?: Intl.Collator;
    scale?: Scale;
    /**
     * The margin around the grid view between the edges and the items.
     * @default 24
     */
    margin?: number;
}
declare class BaseLayout<T> extends Layout<Node<T>> implements KeyboardDelegate {
    protected contentSize: Size;
    protected layoutInfos: Map<Key, LayoutInfo>;
    protected collator: Intl.Collator;
    protected lastCollection: GridCollection<T>;
    collection: GridCollection<T>;
    isLoading: boolean;
    disabledKeys: Set<Key>;
    direction: Direction;
    scale: Scale;
    margin: number;
    constructor(options?: BaseLayoutOptions);
    validate(invalidationContext: InvalidationContext<Node<T>, unknown>): void;
    buildCollection(invalidationContext?: InvalidationContext<Node<T>, unknown>): void;
    getContentSize(): Size;
    getLayoutInfo(key: Key): LayoutInfo;
    getVisibleLayoutInfos(rect: any): LayoutInfo[];
    isVisible(layoutInfo: LayoutInfo, rect: Rect): boolean;
    getInitialLayoutInfo(layoutInfo: LayoutInfo): LayoutInfo;
    getFinalLayoutInfo(layoutInfo: LayoutInfo): LayoutInfo;
    _findClosestLayoutInfo(target: Rect, rect: Rect): any;
    _findClosest(target: Rect, rect: Rect): any;
    getKeyBelow(key: Key): any;
    getKeyAbove(key: Key): any;
    getKeyRightOf(key: Key): any;
    getKeyLeftOf(key: Key): any;
    getFirstKey(): any;
    getLastKey(): any;
    getKeyPageAbove(key: Key): any;
    getKeyPageBelow(key: Key): any;
    getKeyForSearch(search: string, fromKey?: Key): Key;
}
export interface GalleryLayoutOptions extends BaseLayoutOptions {
    /**
     * The the default row height. Note this must be larger than the min item height.
     * @default 208
     */
    idealRowHeight?: number;
    /**
     * The spacing between items.
     * @default 18 x 18
     */
    itemSpacing?: Size;
    /**
     * The vertical padding for an item.
     * @default 78
     */
    itemPadding?: number;
    /**
     * Minimum size for a item in the grid.
     * @default 136 x 136
     */
    minItemSize?: Size;
    /**
     * Target for adding extra weight to elements during linear partitioning. Anything with an aspect ratio smaler than this value
     * will be targeted.
     * @type {number}
     */
    threshold?: number;
}
export class GalleryLayout<T> extends BaseLayout<T> {
    protected idealRowHeight: number;
    protected itemSpacing: Size;
    itemPadding: number;
    protected minItemSize: Size;
    protected threshold: number;
    constructor(options?: GalleryLayoutOptions);
    get layoutType(): string;
    /**
     * Takes a row of widths and if there are any widths smaller than the min-width, leech width starting from
     * the widest in the row until it can't give anymore, then move to the second widest and so forth.
     * Do this until all assets meet the min-width.
     * */
    _distributeWidths(widths: any): boolean;
    buildCollection(): void;
}
export interface GridLayoutOptions extends BaseLayoutOptions {
    /**
     * The minimum item size.
     * @default 208 x 208 for horizontal card orientation. 102 x 102 for vertical card orientation.
     */
    minItemSize?: Size;
    /**
     * The maximum item size.
     * @default Infinity
     */
    maxItemSize?: Size;
    /**
     * The minimum space required between items.
     * @default 18 x 18
     */
    minSpace?: Size;
    /**
     * The maximum number of columns.
     * @default Infinity
     */
    maxColumns?: number;
    /**
     * The additional padding along the card's main axis. Affects the sizing of the content area following the card image.
     * @default 95
     */
    itemPadding?: number;
    /**
     * The orientation of the cards withn the grid.
     * @default vertical
     */
    cardOrientation?: Orientation;
}
export class GridLayout<T> extends BaseLayout<T> {
    protected minItemSize: Size;
    protected maxItemSize: Size;
    protected minSpace: Size;
    protected maxColumns: number;
    itemPadding: number;
    cardOrientation: Orientation;
    protected itemSize: Size;
    protected numColumns: number;
    protected numRows: number;
    protected horizontalSpacing: number;
    constructor(options?: GridLayoutOptions);
    get layoutType(): string;
    getIndexAtPoint(x: any, y: any, allowInsertingAtEnd?: boolean): number;
    getVisibleLayoutInfos(rect: any): LayoutInfo[];
    buildCollection(): void;
    buildChild(node: Node<T>, y: number, index: number): LayoutInfo;
    getKeyBelow(key: Key): any;
    getKeyAbove(key: Key): any;
}
export interface WaterfallLayoutOptions extends BaseLayoutOptions {
    /**
     * The minimum item size.
     * @default 240 x 136
     */
    minItemSize?: Size;
    /**
     * The maximum item size.
     * @default Infinity
     */
    maxItemSize?: Size;
    /**
     * The minimum space required between items.
     * @default 18 x 18
     */
    minSpace?: Size;
    /**
     * The maximum number of columns.
     * @default Infinity
     */
    maxColumns?: number;
}
export class WaterfallLayout<T> extends BaseLayout<T> implements KeyboardDelegate {
    protected minItemSize: Size;
    protected maxItemSize: Size;
    protected minSpace: Size;
    protected maxColumns: number;
    protected numColumns: number;
    protected itemWidth: number;
    protected horizontalSpacing: number;
    constructor(options?: WaterfallLayoutOptions);
    get layoutType(): string;
    buildCollection(invalidationContext: InvalidationContext<Node<T>, unknown>): void;
    updateItemSize(key: Key, size: Size): boolean;
    getNextColumnIndex(columnHeights: any): number;
    getClosestRight(key: Key): any;
    getClosestLeft(key: Key): any;
    getKeyRightOf(key: Key): any;
    getKeyLeftOf(key: Key): any;
}
export let Card: React.ForwardRefExoticComponent<ItemProps<SpectrumCardProps> & SpectrumCardProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;

//# sourceMappingURL=types.d.ts.map
