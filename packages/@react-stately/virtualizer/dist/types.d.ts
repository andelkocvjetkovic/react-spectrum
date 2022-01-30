import { Key } from "react";
import { Collection } from "@react-types/shared";
export class Point {
    /** The x-coordinate of the point. */
    x: number;
    /** The y-coordinate of the point. */
    y: number;
    constructor(x?: number, y?: number);
    /**
     * Returns a copy of this point.
     */
    copy(): Point;
    /**
     * Checks if two points are equal.
     */
    equals(point: Point): boolean;
    /**
     * Returns true if this point is the origin.
     */
    isOrigin(): boolean;
}
export class Size {
    width: number;
    height: number;
    constructor(width?: number, height?: number);
    /**
     * Returns a copy of this size.
     */
    copy(): Size;
    /**
     * Returns whether this size is equal to another one.
     */
    equals(other: Size): boolean;
}
export type RectCorner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
/**
 * Represents a rectangle.
 */
export class Rect {
    /** The x-coordinate of the rectangle. */
    x: number;
    /** The y-coordinate of the rectangle. */
    y: number;
    /** The width of the rectangle. */
    width: number;
    /** The height of the rectangle. */
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * The maximum x-coordinate in the rectangle.
     */
    get maxX(): number;
    /**
     * The maximum y-coordinate in the rectangle.
     */
    get maxY(): number;
    /**
     * The area of the rectangle.
     */
    get area(): number;
    /**
     * The top left corner of the rectangle.
     */
    get topLeft(): Point;
    /**
     * The top right corner of the rectangle.
     */
    get topRight(): Point;
    /**
     * The bottom left corner of the rectangle.
     */
    get bottomLeft(): Point;
    /**
     * The bottom right corner of the rectangle.
     */
    get bottomRight(): Point;
    /**
     * Returns whether this rectangle intersects another rectangle.
     * @param rect - The rectangle to check.
     */
    intersects(rect: Rect): boolean;
    /**
     * Returns whether this rectangle fully contains another rectangle.
     * @param rect - The rectangle to check.
     */
    containsRect(rect: Rect): boolean;
    /**
     * Returns whether the rectangle contains the given point.
     * @param point - The point to check.
     */
    containsPoint(point: Point): boolean;
    /**
     * Returns the first corner of this rectangle (from top to bottom, left to right)
     * that is contained in the given rectangle, or null of the rectangles do not intersect.
     * @param rect - The rectangle to check.
     */
    getCornerInRect(rect: Rect): RectCorner | null;
    equals(rect: Rect): boolean;
    pointEquals(point: Point | Rect): boolean;
    sizeEquals(size: Size | Rect): boolean;
    /**
     * Returns a copy of this rectangle.
     */
    copy(): Rect;
}
/**
 * Instances of this lightweight class are created by {@link Layout} subclasses
 * to represent each view in the {@link CollectionView}. LayoutInfo objects describe
 * various properties of a view, such as its position and size, and style information.
 * The collection view uses this information when creating actual views to display.
 */
export class LayoutInfo {
    /**
     * A string representing the view type. Should be `'item'` for item views.
     * Other types are used by supplementary views.
     */
    type: string;
    /**
     * A unique key for this view. For item views, it should match the content key.
     */
    key: Key;
    /**
     * The key for a parent layout info, if any.
     */
    parentKey: Key | null;
    /**
     * The rectangle describing the size and position of this view.
     */
    rect: Rect;
    /**
     * Whether the size is estimated. `false` by default.
     */
    estimatedSize: boolean;
    /**
     * Whether the layout info sticks to the viewport when scrolling.
     */
    isSticky: boolean;
    /**
     * The view's opacity. 1 by default.
     */
    opacity: number;
    /**
     * A CSS transform string to apply to the view. `null` by default.
     */
    transform: string | null;
    /**
     * The z-index of the view. 0 by default.
     */
    zIndex: number;
    /**
     * Whether the layout info allows its contents to overflow its container.
     * @default false
     */
    allowOverflow: boolean;
    /**
     * @param type A string representing the view type. Should be `'item'` for item views.
                              Other types are used by supplementary views.
     * @param key The unique key for this view.
     * @param rect The rectangle describing the size and position of this view.
     */
    constructor(type: string, key: Key, rect: Rect);
    /**
     * Returns a copy of the LayoutInfo.
     */
    copy(): LayoutInfo;
}
type LayoutInfoMap = Map<Key, LayoutInfo>;
declare class Transaction<T extends object, V> {
    level: number;
    actions: (() => void)[];
    animated: boolean;
    initialMap: LayoutInfoMap;
    finalMap: LayoutInfoMap;
    initialLayoutInfo: LayoutInfoMap;
    finalLayoutInfo: LayoutInfoMap;
    removed: Map<Key, ReusableView<T, V>>;
    toRemove: Map<Key, ReusableView<T, V>>;
}
/**
 * The CollectionView class renders a scrollable collection of data using customizable layouts,
 * and manages animated updates to the data over time. It supports very large collections by
 * only rendering visible views to the DOM, reusing them as you scroll. Collection views can
 * present any type of view, including non-item views such as section headers and footers.
 * Optionally, the {@link EditableCollectionView} subclass can be used to enable user interaction
 * with the collection, including drag and drop, multiple selection, and keyboard interacton.
 *
 * Collection views get their data from a {@link DataSource} object that you provide. Items are
 * grouped into sections by the data source, and the collection view calls its methods to retrieve
 * the data. When data changes, the data source emits change events, and the collection view
 * updates as appropriate, optionally with an animated transition. There is one built-in data source
 * implementation, {@link ArrayDataSource}, which renders content from a 2d array.
 *
 * Collection views use {@link Layout} objects to compute what views should be visible, and how
 * to position and style them. This means that collection views can have their items arranged in
 * a stack, a grid, a circle, or any other layout you can think of. The layout can be changed
 * dynamically at runtime as well, optionally with an animated transition between the layouts.
 *
 * Layouts produce information on what views should appear in the collection view, but do not create
 * the views themselves directly. It is the responsibility of the {@link CollectionViewDelegate} object
 * to create instances of {@link ReusableView} subclasses which render the items into DOM nodes.
 * The delegate determines what type of view to display for each item, and creates instances of
 * views as needed by the collection view. Those views are then reused by the collection view as
 * the user scrolls through the content.
 */
declare class Virtualizer<T extends object, V, W> {
    /**
     * The collection view delegate. The delegate is used by the collection view
     * to create and configure views.
     */
    delegate: VirtualizerDelegate<T, V, W>;
    /** The duration of animated layout changes, in milliseconds. Default is 500ms. */
    transitionDuration: number;
    /**
     * Whether to enable scroll anchoring. This will attempt to restore the scroll position
     * after layout changes outside the viewport. Default is off.
     */
    anchorScrollPosition: boolean;
    /** Whether to anchor the scroll position when at the top of the content. Default is off. */
    anchorScrollPositionAtTop: boolean;
    /**
     * Whether to overscan the visible area to pre-render items slightly outside and
     * improve performance. Default is on.
     */
    shouldOverscan: boolean;
    constructor(options?: VirtualizerOptions<T, V, W>);
    _setContentSize(size: Size): void;
    _setContentOffset(offset: Point): void;
    /**
     * Get the size of the scrollable content.
     */
    get contentSize(): Size;
    /**
     * Get the collection view's currently visible rectangle.
     */
    get visibleRect(): Rect;
    /**
     * Set the collection view's currently visible rectangle.
     */
    set visibleRect(rect: Rect);
    _setVisibleRect(rect: Rect, forceUpdate?: boolean): void;
    get collection(): Collection<T>;
    set collection(data: Collection<T>);
    /**
     * Reloads the data from the data source and relayouts the collection view.
     * Does not animate any changes. Equivalent to re-assigning the same data source
     * to the collection view.
     */
    reloadData(): void;
    /**
     * Returns the item with the given key.
     */
    getItem(key: Key): T;
    /**
     * Get the collection view's layout.
     */
    get layout(): Layout<T>;
    /**
     * Set the collection view's layout.
     */
    set layout(layout: Layout<T>);
    /**
     * Sets the collection view's layout, optionally with an animated transition
     * from the current layout to the new layout.
     * @param layout The layout to switch to.
     * @param animated Whether to animate the layout change.
     */
    setLayout(layout: Layout<T>, animated?: boolean): void;
    getReusableView(layoutInfo: LayoutInfo): ReusableView<T, V>;
    /**
     * Returns an array of all currently visible views, including both
     * item views and supplementary views.
     */
    get visibleViews(): ReusableView<T, V>[];
    /**
     * Gets the visible view for the given type and key. Returns null if
     * the view is not currently visible.
     *
     * @param key The key of the view to retrieve.
     */
    getView(key: Key): ReusableView<T, V> | null;
    /**
     * Returns an array of visible views matching the given type.
     * @param type The view type to find.
     */
    getViewsOfType(type: string): ReusableView<T, V>[];
    /**
     * Returns the key for the given view. Returns null
     * if the view is not currently visible.
     */
    keyForView(view: ReusableView<T, V>): Key | null;
    /**
     * Returns the key for the item view currently at the given point.
     */
    keyAtPoint(point: Point): Key | null;
    /**
     * Cleanup for when the Virtualizer will be unmounted.
     */
    willUnmount(): void;
    /**
     * Triggers a layout invalidation, and updates the visible subviews.
     */
    relayout(context?: InvalidationContext<T, V>): void;
    /**
     * Performs a relayout immediately. Prefer {@link relayout} over this method
     * where possible, since it coalesces multiple layout passes in the same tick.
     */
    relayoutNow(context?: InvalidationContext<T, V>): void;
    getVisibleRect(): Rect;
    getVisibleLayoutInfos(): Map<Key, LayoutInfo>;
    updateSubviews(forceUpdate?: boolean): boolean;
    afterRender(): void;
    reuseView(view: ReusableView<T, V>): void;
    removeViews(toRemove: Set<ReusableView<T, V>>): void;
    updateItemSize(key: Key, size: Size): void;
    startScrolling(): void;
    endScrolling(): void;
    /**
     * Scrolls the item with the given key into view, optionally with an animation.
     * @param key The key of the item to scroll into view.
     * @param duration The duration of the scroll animation.
     */
    scrollToItem(key: Key, options?: ScrollToItemOptions): Promise<void>;
    /**
     * Performs an animated scroll to the given offset.
     * @param offset - The offset to scroll to.
     * @param duration The duration of the animation.
     * @returns A promise that resolves when the animation is complete.
     */
    scrollTo(offset: Point, duration?: number): Promise<void>;
}
/**
 * [CollectionView]{@link CollectionView} creates instances of the [ReusableView]{@link ReusableView} class to
 * represent views currently being displayed. ReusableViews manage a DOM node, handle
 * applying {@link LayoutInfo} objects to the view, and render content
 * as needed. Subclasses must implement the {@link render} method at a
 * minimum. Other methods can be overridden to customize behavior.
 */
export class ReusableView<T extends object, V> {
    /** The CollectionVirtualizer this view is a part of. */
    virtualizer: Virtualizer<T, V, unknown>;
    /** The LayoutInfo this view is currently representing. */
    layoutInfo: LayoutInfo | null;
    /** The content currently being displayed by this view, set by the collection view. */
    content: T;
    rendered: V;
    viewType: string;
    key: Key;
    constructor(virtualizer: Virtualizer<T, V, unknown>);
    /**
     * Prepares the view for reuse. Called just before the view is removed from the DOM.
     */
    prepareForReuse(): void;
}
export interface InvalidationContext<T extends object, V> {
    contentChanged?: boolean;
    offsetChanged?: boolean;
    sizeChanged?: boolean;
    animated?: boolean;
    beforeLayout?(): void;
    afterLayout?(): void;
    afterAnimation?(): void;
    transaction?: Transaction<T, V>;
}
interface VirtualizerDelegate<T extends object, V, W> {
    setVisibleViews(views: W[]): void;
    setContentSize(size: Size): void;
    setVisibleRect(rect: Rect): void;
    getType?(content: T): string;
    renderView(type: string, content: T): V;
    renderWrapper(parent: ReusableView<T, V> | null, reusableView: ReusableView<T, V>, children: ReusableView<T, V>[], renderChildren: (views: ReusableView<T, V>[]) => W[]): W;
    beginAnimations(): void;
    endAnimations(): void;
    getScrollAnchor?(rect: Rect): Key;
}
interface ScrollToItemOptions {
    duration?: number;
    shouldScrollX?: boolean;
    shouldScrollY?: boolean;
    offsetX?: number;
    offsetY?: number;
}
interface VirtualizerOptions<T extends object, V, W> {
    collection?: Collection<T>;
    layout?: Layout<T>;
    delegate?: VirtualizerDelegate<T, V, W>;
    transitionDuration?: number;
    anchorScrollPosition?: boolean;
    anchorScrollPositionAtTop?: boolean;
    shouldOverscan?: boolean;
}
/**
 * [CollectionView]{@link CollectionView} supports arbitrary layout objects, which compute what views are visible, and how
 * to position and style them. However, layouts do not create the views themselves directly. Instead,
 * layouts produce lightweight {@link LayoutInfo} objects which describe various properties of a view,
 * such as its position and size. The {@link CollectionView} is then responsible for creating the actual
 * views as needed, based on this layout information.
 *
 * Every layout extends from the {@link Layout} abstract base class. Layouts must implement a minimum of the
 * two methods listed below. All other methods can be optionally overridden to implement custom behavior.
 *
 * @see {@link getVisibleLayoutInfos}
 * @see {@link getLayoutInfo}
 */
export abstract class Layout<T extends object> {
    /** The CollectionView the layout is currently attached to. */
    virtualizer: Virtualizer<T, any, any>;
    /**
     * Returns whether the layout should invalidate in response to
     * visible rectangle changes. By default, it only invalidates
     * when the collection view's size changes. Return true always
     * to make the layout invalidate while scrolling (e.g. sticky headers).
     */
    shouldInvalidate(newRect: Rect, oldRect: Rect): boolean;
    /**
     * This method allows the layout to perform any pre-computation
     * it needs to in order to prepare {@link LayoutInfo}s for retrieval.
     * Called by the collection view before {@link getVisibleLayoutInfos}
     * or {@link getLayoutInfo} are called.
     */
    validate(invalidationContext: InvalidationContext<T, any>): void;
    /**
     * Returns an array of {@link LayoutInfo} objects which are inside the given rectangle.
     * Should be implemented by subclasses.
     * @param rect The rectangle that should contain the returned LayoutInfo objects.
     */
    abstract getVisibleLayoutInfos(rect: Rect): LayoutInfo[];
    /**
     * Returns a {@link LayoutInfo} for the given key.
     * Should be implemented by subclasses.
     * @param key The key of the LayoutInfo to retrieve.
     */
    abstract getLayoutInfo(key: Key): LayoutInfo;
    /**
     * Returns size of the content. By default, it returns collectionView's size.
     */
    abstract getContentSize(): Size;
    /**
     * Returns a {@link DragTarget} describing a view at the given point to be dragged.
     * Return `null` to cancel the drag. The default implementation returns the view at the given point.
     * @param point The point at which the drag occurred.
     */
    /**
     * Returns a {@link DragTarget} object describing where a drop should occur. Return `null`
     * to reject the drop. The dropped items will be inserted before the resulting target.
     * @param point The point at which the drop occurred.
     */
    /**
     * Returns the starting attributes for an animated insertion.
     * The view is animated from this {@link LayoutInfo} to the one returned by {@link getLayoutInfo}.
     * The default implementation just returns its input.
     *
     * @param layoutInfo The proposed LayoutInfo for this view.
     */
    getInitialLayoutInfo(layoutInfo: LayoutInfo): LayoutInfo;
    /**
     * Returns the ending attributes for an animated removal.
     * The view is animated from the {@link LayoutInfo} returned by {@link getLayoutInfo}
     * to the one returned by this method. The default implementation returns its input.
     *
     * @param layoutInfo The original LayoutInfo for this view.
     */
    getFinalLayoutInfo(layoutInfo: LayoutInfo): LayoutInfo;
}
interface VirtualizerProps<T extends object, V, W> {
    renderView(type: string, content: T): V;
    renderWrapper(parent: ReusableView<T, V> | null, reusableView: ReusableView<T, V>, children: ReusableView<T, V>[], renderChildren: (views: ReusableView<T, V>[]) => W[]): W;
    layout: Layout<T>;
    collection: Collection<T>;
    onVisibleRectChange(rect: Rect): void;
    getScrollAnchor?(rect: Rect): Key;
    transitionDuration?: number;
}
export interface VirtualizerState<T extends object, V, W> {
    visibleViews: W[];
    setVisibleRect: (rect: Rect) => void;
    contentSize: Size;
    isAnimating: boolean;
    virtualizer: Virtualizer<T, V, W>;
    isScrolling: boolean;
    startScrolling: () => void;
    endScrolling: () => void;
}
export function useVirtualizerState<T extends object, V, W>(opts: VirtualizerProps<T, V, W>): VirtualizerState<T, V, W>;

//# sourceMappingURL=types.d.ts.map