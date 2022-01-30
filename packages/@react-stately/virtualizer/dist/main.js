var $fLTjP$react = require("react");
var $fLTjP$reactariautils = require("@react-aria/utils");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $7d1bafeee40d368b$exports = {};

$parcel$export($7d1bafeee40d368b$exports, "Layout", () => $7d1bafeee40d368b$export$c84671f46d6a1ca);
class $7d1bafeee40d368b$export$c84671f46d6a1ca {
    /**
   * Returns whether the layout should invalidate in response to
   * visible rectangle changes. By default, it only invalidates
   * when the collection view's size changes. Return true always
   * to make the layout invalidate while scrolling (e.g. sticky headers).
   */ shouldInvalidate(newRect, oldRect) {
        // By default, invalidate when the size changes
        return newRect.width !== oldRect.width || newRect.height !== oldRect.height;
    }
    /**
   * This method allows the layout to perform any pre-computation
   * it needs to in order to prepare {@link LayoutInfo}s for retrieval.
   * Called by the collection view before {@link getVisibleLayoutInfos}
   * or {@link getLayoutInfo} are called.
   */ validate(invalidationContext) {
    }
    /**
   * Returns a {@link DragTarget} describing a view at the given point to be dragged.
   * Return `null` to cancel the drag. The default implementation returns the view at the given point.
   * @param point The point at which the drag occurred.
   */ // getDragTarget(point: Point): DragTarget | null {
    //   let target = this.virtualizer.keyAtPoint(point);
    //   if (!target) {
    //     return null;
    //   }
    //   return {
    //     type: 'item',
    //     key: target
    //   };
    // }
    /**
   * Returns a {@link DragTarget} object describing where a drop should occur. Return `null`
   * to reject the drop. The dropped items will be inserted before the resulting target.
   * @param point The point at which the drop occurred.
   */ // getDropTarget(point: Point): DropTarget | null {
    //   return null;
    // }
    /**
   * Returns the starting attributes for an animated insertion.
   * The view is animated from this {@link LayoutInfo} to the one returned by {@link getLayoutInfo}.
   * The default implementation just returns its input.
   *
   * @param layoutInfo The proposed LayoutInfo for this view.
   */ getInitialLayoutInfo(layoutInfo) {
        return layoutInfo;
    }
    /**
   * Returns the ending attributes for an animated removal.
   * The view is animated from the {@link LayoutInfo} returned by {@link getLayoutInfo}
   * to the one returned by this method. The default implementation returns its input.
   *
   * @param layoutInfo The original LayoutInfo for this view.
   */ getFinalLayoutInfo(layoutInfo) {
        return layoutInfo;
    }
}


var $59fb774cf167c850$exports = {};

$parcel$export($59fb774cf167c850$exports, "LayoutInfo", () => $59fb774cf167c850$export$7e0eeb9da702a085);
class $59fb774cf167c850$export$7e0eeb9da702a085 {
    /**
   * @param type A string representing the view type. Should be `'item'` for item views.
                            Other types are used by supplementary views.
   * @param key The unique key for this view.
   * @param rect The rectangle describing the size and position of this view.
   */ constructor(type, key, rect){
        this.type = type;
        this.key = key;
        this.parentKey = null;
        this.rect = rect;
        this.estimatedSize = false;
        this.isSticky = false;
        this.opacity = 1;
        this.transform = null;
        this.zIndex = 0;
        this.allowOverflow = false;
    }
    /**
   * Returns a copy of the LayoutInfo.
   */ copy() {
        let res = new $59fb774cf167c850$export$7e0eeb9da702a085(this.type, this.key, this.rect.copy());
        res.estimatedSize = this.estimatedSize;
        res.opacity = this.opacity;
        res.transform = this.transform;
        res.parentKey = this.parentKey;
        res.isSticky = this.isSticky;
        res.zIndex = this.zIndex;
        res.allowOverflow = this.allowOverflow;
        return res;
    }
}


var $a6cfd219fe9c9e67$exports = {};

$parcel$export($a6cfd219fe9c9e67$exports, "Point", () => $a6cfd219fe9c9e67$export$baf26146a414f24a);
class $a6cfd219fe9c9e67$export$baf26146a414f24a {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    /**
   * Returns a copy of this point.
   */ copy() {
        return new $a6cfd219fe9c9e67$export$baf26146a414f24a(this.x, this.y);
    }
    /**
   * Checks if two points are equal.
   */ equals(point) {
        return this.x === point.x && this.y === point.y;
    }
    /**
   * Returns true if this point is the origin.
   */ isOrigin() {
        return this.x === 0 && this.y === 0;
    }
}


var $3d780642f4e7fb5d$exports = {};

$parcel$export($3d780642f4e7fb5d$exports, "Rect", () => $3d780642f4e7fb5d$export$c79fc6492f3af13d);

class $3d780642f4e7fb5d$export$c79fc6492f3af13d {
    constructor(x = 0, y = 0, width = 0, height = 0){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
   * The maximum x-coordinate in the rectangle.
   */ get maxX() {
        return this.x + this.width;
    }
    /**
   * The maximum y-coordinate in the rectangle.
   */ get maxY() {
        return this.y + this.height;
    }
    /**
   * The area of the rectangle.
   */ get area() {
        return this.width * this.height;
    }
    /**
   * The top left corner of the rectangle.
   */ get topLeft() {
        return new $a6cfd219fe9c9e67$export$baf26146a414f24a(this.x, this.y);
    }
    /**
   * The top right corner of the rectangle.
   */ get topRight() {
        return new $a6cfd219fe9c9e67$export$baf26146a414f24a(this.maxX, this.y);
    }
    /**
   * The bottom left corner of the rectangle.
   */ get bottomLeft() {
        return new $a6cfd219fe9c9e67$export$baf26146a414f24a(this.x, this.maxY);
    }
    /**
   * The bottom right corner of the rectangle.
   */ get bottomRight() {
        return new $a6cfd219fe9c9e67$export$baf26146a414f24a(this.maxX, this.maxY);
    }
    /**
   * Returns whether this rectangle intersects another rectangle.
   * @param rect - The rectangle to check.
   */ intersects(rect) {
        return this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
    }
    /**
   * Returns whether this rectangle fully contains another rectangle.
   * @param rect - The rectangle to check.
   */ containsRect(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
    }
    /**
   * Returns whether the rectangle contains the given point.
   * @param point - The point to check.
   */ containsPoint(point) {
        return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
    }
    /**
   * Returns the first corner of this rectangle (from top to bottom, left to right)
   * that is contained in the given rectangle, or null of the rectangles do not intersect.
   * @param rect - The rectangle to check.
   */ getCornerInRect(rect) {
        for (let key of [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]){
            if (rect.containsPoint(this[key])) return key;
        }
        return null;
    }
    equals(rect) {
        return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
    }
    pointEquals(point) {
        return this.x === point.x && this.y === point.y;
    }
    sizeEquals(size) {
        return this.width === size.width && this.height === size.height;
    }
    /**
   * Returns a copy of this rectangle.
   */ copy() {
        return new $3d780642f4e7fb5d$export$c79fc6492f3af13d(this.x, this.y, this.width, this.height);
    }
}


var $7729f76ac8a56bcb$exports = {};

$parcel$export($7729f76ac8a56bcb$exports, "Size", () => $7729f76ac8a56bcb$export$cb6da89c6af1a8ec);
class $7729f76ac8a56bcb$export$cb6da89c6af1a8ec {
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
    }
    /**
   * Returns a copy of this size.
   */ copy() {
        return new $7729f76ac8a56bcb$export$cb6da89c6af1a8ec(this.width, this.height);
    }
    /**
   * Returns whether this size is equal to another one.
   */ equals(other) {
        return this.width === other.width && this.height === other.height;
    }
}


var $2a46fa22283edea8$exports = {};

$parcel$export($2a46fa22283edea8$exports, "ReusableView", () => $2a46fa22283edea8$export$1a5223887c560441);
let $2a46fa22283edea8$var$KEY = 0;
class $2a46fa22283edea8$export$1a5223887c560441 {
    constructor(virtualizer){
        this.virtualizer = virtualizer;
        this.key = ++$2a46fa22283edea8$var$KEY;
    }
    /**
   * Prepares the view for reuse. Called just before the view is removed from the DOM.
   */ prepareForReuse() {
        this.content = null;
        this.rendered = null;
        this.layoutInfo = null;
    }
}


var $7351e62c82814357$exports = {};

$parcel$export($7351e62c82814357$exports, "useVirtualizerState", () => $7351e62c82814357$export$1505db82fe357e65);




// use high res timer if available
let $c48fb8933aeded9d$var$perf = typeof window !== 'undefined' ? window.performance : null;
// @ts-ignore
let $c48fb8933aeded9d$var$perfNow = $c48fb8933aeded9d$var$perf && ($c48fb8933aeded9d$var$perf.now || $c48fb8933aeded9d$var$perf.webkitNow || $c48fb8933aeded9d$var$perf.msNow || $c48fb8933aeded9d$var$perf.mozNow);
let $c48fb8933aeded9d$var$getTime = $c48fb8933aeded9d$var$perfNow ? $c48fb8933aeded9d$var$perfNow.bind($c48fb8933aeded9d$var$perf) : function() {
    return Date.now ? Date.now() : new Date().getTime();
};
let $c48fb8933aeded9d$var$fixTs;
function $c48fb8933aeded9d$export$dc0b63720788090c(begin, end, duration, ease, fn) {
    let canceled = false;
    let raf_id;
    let promise = new Promise((resolve)=>{
        let start = $c48fb8933aeded9d$var$getTime();
        let diffX = end.x - begin.x;
        let diffY = end.y - begin.y;
        raf_id = requestAnimationFrame(function run(t) {
            // if we're using a high res timer, make sure timestamp is not the old epoch-based value.
            // http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
            if ($c48fb8933aeded9d$var$fixTs == null) $c48fb8933aeded9d$var$fixTs = t > 1000000000000 !== $c48fb8933aeded9d$var$getTime() > 1000000000000;
            if ($c48fb8933aeded9d$var$fixTs) t = $c48fb8933aeded9d$var$getTime();
            // check if we're done
            let delta = t - start;
            if (delta > duration) {
                fn(end);
                resolve();
            } else {
                // call frame callback after computing eased time and get the next frame
                let proceed = fn(new $a6cfd219fe9c9e67$export$baf26146a414f24a(begin.x + diffX * ease(delta / duration), begin.y + diffY * ease(delta / duration)));
                if (proceed !== false && !canceled) raf_id = requestAnimationFrame(run);
            }
        });
    });
    promise.cancel = function() {
        canceled = true;
        cancelAnimationFrame(raf_id);
    };
    return promise;
}
function $c48fb8933aeded9d$export$77860c106b4a6a2e(t) {
    return t;
}
function $c48fb8933aeded9d$export$57636bb43b1ccbb0(t) {
    return Math.sin(t * Math.PI / 2);
}


function $ad374c0b55447c87$export$37a26b283fd7740e(a, b) {
    let res = new Set();
    for (let key of a.keys())if (!b.has(key)) res.add(key);
    return res;
}
function $ad374c0b55447c87$export$acaf96a27438246b(a, b) {
    let toRemove = $ad374c0b55447c87$export$37a26b283fd7740e(a, b);
    let toAdd = $ad374c0b55447c87$export$37a26b283fd7740e(b, a);
    let toUpdate = new Set;
    for (let key of a.keys())if (b.has(key)) toUpdate.add(key);
    return {
        toRemove: toRemove,
        toAdd: toAdd,
        toUpdate: toUpdate
    };
}
function* $ad374c0b55447c87$export$cfc14088dfefce5f(...iterators) {
    for (let iterator of iterators)yield* iterator;
}
function $ad374c0b55447c87$export$6897c284b6f9f4dc(object) {
    let res = {
    };
    for(let key in object)res[object[key]] = key;
    return res;
}




class $9461cb6198885a47$var$RollingAverage {
    addSample(sample) {
        this.count++;
        this.value += (sample - this.value) / this.count;
    }
    constructor(){
        this.count = 0;
        this.value = 0;
    }
}
class $9461cb6198885a47$export$4455ee6afb38dcbb {
    setVisibleRect(rect) {
        let time = performance.now() - this.startTime;
        if (time < 500) {
            this.averageTime.addSample(time);
            if (rect.x !== this.visibleRect.x && time > 0) this.velocity.x = (rect.x - this.visibleRect.x) / time;
            if (rect.y !== this.visibleRect.y && time > 0) this.velocity.y = (rect.y - this.visibleRect.y) / time;
        }
        this.startTime = performance.now();
        this.visibleRect = rect;
    }
    collectMetrics() {
        let time = performance.now() - this.startTime;
        if (time < 500) this.averagePerf.addSample(time);
        if (this.visibleRect.height > 0) {
            let o = Math.abs(this.velocity.y * (this.averageTime.value + this.averagePerf.value));
            this.overscanY.addSample(o);
        }
        if (this.visibleRect.width > 0) {
            let o = Math.abs(this.velocity.x * (this.averageTime.value + this.averagePerf.value));
            this.overscanX.addSample(o);
        }
    }
    getOverscannedRect() {
        let overscanned = this.visibleRect.copy();
        let overscanY = Math.round(Math.min(this.visibleRect.height * 2, this.overscanY.value) / 100) * 100;
        if (this.velocity.y > 0) {
            overscanned.y -= overscanY * 0.2;
            overscanned.height += overscanY + overscanY * 0.2;
        } else {
            overscanned.y -= overscanY;
            overscanned.height += overscanY + overscanY * 0.2;
        }
        let overscanX = Math.round(Math.min(this.visibleRect.width * 2, this.overscanX.value) / 100) * 100;
        if (this.velocity.x > 0) {
            overscanned.x -= overscanX * 0.2;
            overscanned.width += overscanX + overscanX * 0.2;
        } else {
            overscanned.x -= overscanX;
            overscanned.width += overscanX + overscanX * 0.2;
        }
        return overscanned;
    }
    constructor(){
        this.startTime = 0;
        this.averagePerf = new $9461cb6198885a47$var$RollingAverage();
        this.averageTime = new $9461cb6198885a47$var$RollingAverage();
        this.velocity = new $a6cfd219fe9c9e67$export$baf26146a414f24a(5, 5);
        this.overscanX = new $9461cb6198885a47$var$RollingAverage();
        this.overscanY = new $9461cb6198885a47$var$RollingAverage();
        this.visibleRect = new $3d780642f4e7fb5d$export$c79fc6492f3af13d();
    }
}






class $d160844559a6f370$export$febc5573c75cefb0 {
    constructor(){
        this.level = 0;
        this.actions = [];
        this.animated = true;
        this.initialMap = new Map();
        this.finalMap = new Map();
        this.initialLayoutInfo = new Map();
        this.finalLayoutInfo = new Map();
        this.removed = new Map();
        this.toRemove = new Map();
    }
}


class $d40a369183baa2ed$export$89be5a243e59c4b2 {
    constructor(options = {
    }){
        this._contentSize = new $7729f76ac8a56bcb$export$cb6da89c6af1a8ec;
        this._visibleRect = new $3d780642f4e7fb5d$export$c79fc6492f3af13d;
        this._reusableViews = {
        };
        this._visibleLayoutInfos = new Map();
        this._visibleViews = new Map();
        this._renderedContent = new WeakMap();
        this._children = new Set();
        this._invalidationContext = null;
        this._overscanManager = new $9461cb6198885a47$export$4455ee6afb38dcbb();
        this._scrollAnimation = null;
        this._isScrolling = false;
        this._sizeUpdateQueue = new Map();
        this._animatedContentOffset = new $a6cfd219fe9c9e67$export$baf26146a414f24a(0, 0);
        this._transaction = null;
        this._nextTransaction = null;
        this._transactionQueue = [];
        // Set options from passed object if given
        this.transitionDuration = options.transitionDuration ?? 500;
        this.anchorScrollPosition = options.anchorScrollPosition || false;
        this.anchorScrollPositionAtTop = options.anchorScrollPositionAtTop || false;
        this.shouldOverscan = options.shouldOverscan !== false;
        for (let key of [
            'delegate',
            'size',
            'layout',
            'collection'
        ])if (options[key]) this[key] = options[key];
    }
    _setContentSize(size) {
        this._contentSize = size;
        this.delegate.setContentSize(size);
    }
    _setContentOffset(offset) {
        let rect = new $3d780642f4e7fb5d$export$c79fc6492f3af13d(offset.x, offset.y, this._visibleRect.width, this._visibleRect.height);
        this.delegate.setVisibleRect(rect);
    }
    /**
   * Get the size of the scrollable content.
   */ get contentSize() {
        return this._contentSize;
    }
    /**
   * Get the collection view's currently visible rectangle.
   */ get visibleRect() {
        return this._visibleRect;
    }
    /**
   * Set the collection view's currently visible rectangle.
   */ set visibleRect(rect) {
        this._setVisibleRect(rect);
    }
    _setVisibleRect(rect, forceUpdate = false) {
        let current = this._visibleRect;
        // Ignore if the rects are equal
        if (rect.equals(current)) return;
        if (this.shouldOverscan) this._overscanManager.setVisibleRect(rect);
        let shouldInvalidate = this.layout && this.layout.shouldInvalidate(rect, this._visibleRect);
        this._resetAnimatedContentOffset();
        this._visibleRect = rect;
        if (shouldInvalidate) this.relayout({
            offsetChanged: !rect.pointEquals(current),
            sizeChanged: !rect.sizeEquals(current)
        });
        else this.updateSubviews(forceUpdate);
    }
    get collection() {
        return this._collection;
    }
    set collection(data) {
        this._setData(data);
    }
    _setData(data) {
        if (data === this._collection) return;
        if (this._collection) this._runTransaction(()=>{
            this._collection = data;
        }, this.transitionDuration > 0);
        else {
            this._collection = data;
            this.reloadData();
        }
    }
    /**
   * Reloads the data from the data source and relayouts the collection view.
   * Does not animate any changes. Equivalent to re-assigning the same data source
   * to the collection view.
   */ reloadData() {
        this.relayout({
            contentChanged: true
        });
    }
    /**
   * Returns the item with the given key.
   */ getItem(key) {
        return this._collection ? this._collection.getItem(key) : null;
    }
    /**
   * Get the collection view's layout.
   */ get layout() {
        return this._layout;
    }
    /**
   * Set the collection view's layout.
   */ set layout(layout) {
        this.setLayout(layout);
    }
    /**
   * Sets the collection view's layout, optionally with an animated transition
   * from the current layout to the new layout.
   * @param layout The layout to switch to.
   * @param animated Whether to animate the layout change.
   */ setLayout(layout, animated = false) {
        if (layout === this._layout) return;
        let applyLayout = ()=>{
            if (this._layout) // @ts-ignore
            this._layout.virtualizer = null;
            layout.virtualizer = this;
            this._layout = layout;
        };
        if (animated) // Animated layout transitions are really simple, thanks to our transaction support.
        // We just set the layout inside a transaction action, which runs after the initial
        // layout infos for the animation are retrieved from the previous layout. Then, the
        // final layout infos are retrieved from the new layout, and animations occur.
        this._runTransaction(applyLayout);
        else {
            applyLayout();
            this.relayout();
        }
    }
    _getReuseType(layoutInfo, content) {
        if (layoutInfo.type === 'item' && content) {
            let type = this.delegate.getType ? this.delegate.getType(content) : 'item';
            let reuseType = type === 'item' ? 'item' : layoutInfo.type + '_' + type;
            return {
                type: type,
                reuseType: reuseType
            };
        }
        return {
            type: layoutInfo.type,
            reuseType: layoutInfo.type
        };
    }
    getReusableView(layoutInfo) {
        let content = this.getItem(layoutInfo.key);
        let { reuseType: reuseType  } = this._getReuseType(layoutInfo, content);
        if (!this._reusableViews[reuseType]) this._reusableViews[reuseType] = [];
        let reusable = this._reusableViews[reuseType];
        let view = reusable.length > 0 ? reusable.pop() : new $2a46fa22283edea8$export$1a5223887c560441(this);
        view.viewType = reuseType;
        if (!this._animatedContentOffset.isOrigin()) {
            layoutInfo = layoutInfo.copy();
            layoutInfo.rect.x += this._animatedContentOffset.x;
            layoutInfo.rect.y += this._animatedContentOffset.y;
        }
        view.layoutInfo = layoutInfo;
        this._renderView(view);
        return view;
    }
    _renderView(reusableView) {
        let { type: type , key: key  } = reusableView.layoutInfo;
        reusableView.content = this.getItem(key);
        reusableView.rendered = this._renderContent(type, reusableView.content);
    }
    _renderContent(type, content) {
        let cached = this._renderedContent.get(content);
        if (cached != null) return cached;
        let rendered = this.delegate.renderView(type, content);
        if (content) this._renderedContent.set(content, rendered);
        return rendered;
    }
    /**
   * Returns an array of all currently visible views, including both
   * item views and supplementary views.
   */ get visibleViews() {
        return Array.from(this._visibleViews.values());
    }
    /**
   * Gets the visible view for the given type and key. Returns null if
   * the view is not currently visible.
   *
   * @param key The key of the view to retrieve.
   */ getView(key) {
        return this._visibleViews.get(key) || null;
    }
    /**
   * Returns an array of visible views matching the given type.
   * @param type The view type to find.
   */ getViewsOfType(type) {
        return this.visibleViews.filter((v)=>v.layoutInfo && v.layoutInfo.type === type
        );
    }
    /**
   * Returns the key for the given view. Returns null
   * if the view is not currently visible.
   */ keyForView(view) {
        if (view && view.layoutInfo) return view.layoutInfo.key;
        return null;
    }
    /**
   * Returns the key for the item view currently at the given point.
   */ keyAtPoint(point) {
        let rect = new $3d780642f4e7fb5d$export$c79fc6492f3af13d(point.x, point.y, 1, 1);
        let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
        let layoutInfo = layoutInfos[0];
        if (!layoutInfo) return null;
        return layoutInfo.key;
    }
    /**
   * Cleanup for when the Virtualizer will be unmounted.
   */ willUnmount() {
        cancelAnimationFrame(this._relayoutRaf);
    }
    /**
   * Triggers a layout invalidation, and updates the visible subviews.
   */ relayout(context = {
    }) {
        // Ignore relayouts while animating the scroll position
        if (this._scrollAnimation || typeof requestAnimationFrame === 'undefined') return;
        // If we already scheduled a relayout, extend the invalidation
        // context so we coalesce multiple relayouts in the same frame.
        if (this._invalidationContext) {
            Object.assign(this._invalidationContext, context);
            return;
        }
        this._invalidationContext = context;
        this._relayoutRaf = requestAnimationFrame(()=>{
            this._relayoutRaf = null;
            this.relayoutNow();
        });
    }
    /**
   * Performs a relayout immediately. Prefer {@link relayout} over this method
   * where possible, since it coalesces multiple layout passes in the same tick.
   */ relayoutNow(context = this._invalidationContext || {
    }) {
        // Cancel the scheduled relayout, since we're doing it now.
        if (this._relayoutRaf) {
            cancelAnimationFrame(this._relayoutRaf);
            this._relayoutRaf = null;
            // Update the provided context with the current invalidationContext since we are cancelling
            // a scheduled relayoutNow call that has this._invalidationContext set as its default context arg (relayoutNow() in relayout)
            context = {
                ...this._invalidationContext,
                ...context
            };
        }
        // Reset the invalidation context
        this._invalidationContext = null;
        // Do nothing if we don't have a layout or content, or we are
        // in the middle of an animated scroll transition.
        if (!this.layout || !this._collection || this._scrollAnimation) return;
        let scrollAnchor = this._getScrollAnchor();
        // Trigger the beforeLayout hook, if provided
        if (typeof context.beforeLayout === 'function') context.beforeLayout();
        // Validate the layout
        this.layout.validate(context);
        this._setContentSize(this.layout.getContentSize());
        // Trigger the afterLayout hook, if provided
        if (typeof context.afterLayout === 'function') context.afterLayout();
        // Adjust scroll position based on scroll anchor, and constrain.
        // If the content changed, scroll to the top.
        let visibleRect = this.getVisibleRect();
        let restoredScrollAnchor = this._restoreScrollAnchor(scrollAnchor, context);
        let contentOffsetX = context.contentChanged ? 0 : restoredScrollAnchor.x;
        let contentOffsetY = context.contentChanged ? 0 : restoredScrollAnchor.y;
        contentOffsetX = Math.max(0, Math.min(this.contentSize.width - visibleRect.width, contentOffsetX));
        contentOffsetY = Math.max(0, Math.min(this.contentSize.height - visibleRect.height, contentOffsetY));
        let hasLayoutUpdates = false;
        if (contentOffsetX !== visibleRect.x || contentOffsetY !== visibleRect.y) {
            // If this is an animated relayout, we do not immediately scroll because it would be jittery.
            // Save the difference between the current and new content offsets, and apply it to the
            // individual content items instead. At the end of the animation, we'll reset and set the
            // scroll offset for real. This ensures jitter-free animation since we don't need to sync
            // the scroll animation and the content animation.
            if (context.animated || !this._animatedContentOffset.isOrigin()) {
                this._animatedContentOffset.x += visibleRect.x - contentOffsetX;
                this._animatedContentOffset.y += visibleRect.y - contentOffsetY;
                hasLayoutUpdates = this.updateSubviews(context.contentChanged);
            } else this._setContentOffset(new $a6cfd219fe9c9e67$export$baf26146a414f24a(contentOffsetX, contentOffsetY));
        } else hasLayoutUpdates = this.updateSubviews(context.contentChanged);
        // Apply layout infos, unless this is coming from an animated transaction
        if (!(context.transaction && context.animated)) this._applyLayoutInfos();
        // Wait for animations, and apply the afterAnimation hook, if provided
        if (context.animated && hasLayoutUpdates) {
            this._enableTransitions();
            let done = ()=>{
                this._disableTransitions();
                // Reset scroll position after animations (see above comment).
                if (!this._animatedContentOffset.isOrigin()) {
                    // Get the content offset to scroll to, taking _animatedContentOffset into account.
                    let { x: x , y: y  } = this.getVisibleRect();
                    this._resetAnimatedContentOffset();
                    this._setContentOffset(new $a6cfd219fe9c9e67$export$baf26146a414f24a(x, y));
                }
                if (typeof context.afterAnimation === 'function') context.afterAnimation();
            };
            // Sometimes the animation takes slightly longer than expected.
            setTimeout(done, this.transitionDuration + 100);
            return;
        } else if (typeof context.afterAnimation === 'function') context.afterAnimation();
    }
    /**
   * Corrects DOM order of visible views to match item order of collection.
   */ _correctItemOrder() {
        // Defer until after scrolling and animated transactions are complete
        if (this._isScrolling || this._transaction) return;
        for (let key of this._visibleLayoutInfos.keys()){
            let view = this._visibleViews.get(key);
            this._children.delete(view);
            this._children.add(view);
        }
    }
    _enableTransitions() {
        this.delegate.beginAnimations();
    }
    _disableTransitions() {
        this.delegate.endAnimations();
    }
    _getScrollAnchor() {
        if (!this.anchorScrollPosition) return null;
        let visibleRect = this.getVisibleRect();
        // Ask the delegate to provide a scroll anchor, if possible
        if (this.delegate.getScrollAnchor) {
            let key = this.delegate.getScrollAnchor(visibleRect);
            if (key) {
                let layoutInfo = this.layout.getLayoutInfo(key);
                let corner = layoutInfo.rect.getCornerInRect(visibleRect);
                if (corner) {
                    let key = layoutInfo.key;
                    let offset = layoutInfo.rect[corner].y - visibleRect.y;
                    return {
                        key: key,
                        layoutInfo: layoutInfo,
                        corner: corner,
                        offset: offset
                    };
                }
            }
        }
        // No need to anchor the scroll position if it is at the top
        if (visibleRect.y === 0 && !this.anchorScrollPositionAtTop) return null;
        // Find a view with a visible corner that has the smallest distance to the top of the collection view
        let cornerAnchor = null;
        for (let [key, view] of this._visibleViews){
            let layoutInfo = view.layoutInfo;
            if (layoutInfo && layoutInfo.rect.area > 0) {
                let corner = layoutInfo.rect.getCornerInRect(visibleRect);
                if (corner) {
                    let offset = layoutInfo.rect[corner].y - visibleRect.y;
                    if (!cornerAnchor || offset < cornerAnchor.offset) cornerAnchor = {
                        key: key,
                        layoutInfo: layoutInfo,
                        corner: corner,
                        offset: offset
                    };
                }
            }
        }
        return cornerAnchor;
    }
    _restoreScrollAnchor(scrollAnchor, context) {
        let contentOffset = this.getVisibleRect();
        if (scrollAnchor) {
            let finalAnchor = context.transaction?.animated ? context.transaction.finalMap.get(scrollAnchor.key) : this.layout.getLayoutInfo(scrollAnchor.layoutInfo.key);
            if (finalAnchor) {
                let adjustment = finalAnchor.rect[scrollAnchor.corner].y - contentOffset.y - scrollAnchor.offset;
                contentOffset.y += adjustment;
            }
        }
        return contentOffset;
    }
    getVisibleRect() {
        let v = this.visibleRect;
        let x = v.x - this._animatedContentOffset.x;
        let y = v.y - this._animatedContentOffset.y;
        return new $3d780642f4e7fb5d$export$c79fc6492f3af13d(x, y, v.width, v.height);
    }
    getVisibleLayoutInfos() {
        let rect = this.shouldOverscan ? this._overscanManager.getOverscannedRect() : this.getVisibleRect();
        this._visibleLayoutInfos = this._getLayoutInfoMap(rect);
        return this._visibleLayoutInfos;
    }
    _getLayoutInfoMap(rect, copy = false) {
        let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
        let map = new Map;
        for (let layoutInfo of layoutInfos){
            if (copy) layoutInfo = layoutInfo.copy();
            map.set(layoutInfo.key, layoutInfo);
        }
        return map;
    }
    updateSubviews(forceUpdate = false) {
        if (!this._collection) return;
        let visibleLayoutInfos = this.getVisibleLayoutInfos();
        let currentlyVisible = this._visibleViews;
        let toAdd, toRemove, toUpdate;
        // If this is a force update, remove and re-add all views.
        // Otherwise, find and update the diff.
        if (forceUpdate) {
            toAdd = visibleLayoutInfos;
            toRemove = currentlyVisible;
            toUpdate = new Set();
        } else {
            ({ toAdd: toAdd , toRemove: toRemove , toUpdate: toUpdate  } = $ad374c0b55447c87$export$acaf96a27438246b(currentlyVisible, visibleLayoutInfos));
            for (let key of toUpdate){
                let view = currentlyVisible.get(key);
                if (!view || !view.layoutInfo) continue;
                let item = this.getItem(visibleLayoutInfos.get(key).key);
                if (view.content === item) toUpdate.delete(key);
                else {
                    // If the view type changes, delete and recreate the view instead of updating
                    let { reuseType: reuseType  } = this._getReuseType(view.layoutInfo, item);
                    if (view.viewType !== reuseType) {
                        toUpdate.delete(key);
                        toAdd.add(key);
                        toRemove.add(key);
                    }
                }
            }
            // We are done if the sets are equal
            if (toAdd.size === 0 && toRemove.size === 0 && toUpdate.size === 0) {
                if (this._transaction) this._applyLayoutInfos();
                return;
            }
        }
        // Track views that should be removed. They are not removed from
        // the DOM immediately, since we may reuse and need to re-insert
        // them back into the DOM anyway.
        let removed = new Set();
        for (let key of toRemove.keys()){
            let view = this._visibleViews.get(key);
            if (view) {
                removed.add(view);
                this._visibleViews.delete(key);
                // If we are in the middle of a transaction, wait until the end
                // of the animations to remove the views from the DOM. Also means
                // we can't reuse those views immediately.
                if (this._transaction) this._transaction.toRemove.set(key, view);
                else this.reuseView(view);
            }
        }
        for (let key1 of toAdd.keys()){
            let layoutInfo = visibleLayoutInfos.get(key1);
            let view;
            // If we're in a transaction, and a layout change happens
            // during the animations such that a view that was going
            // to be removed is now not, we don't create a new view
            // since the old one is still in the DOM, marked as toRemove.
            if (this._transaction) {
                // if transaction, get initial layout attributes for the animation
                if (this._transaction.initialLayoutInfo.has(key1)) layoutInfo = this._transaction.initialLayoutInfo.get(key1);
                view = this._transaction.toRemove.get(key1);
                if (view) {
                    this._transaction.toRemove.delete(key1);
                    this._applyLayoutInfo(view, layoutInfo);
                }
            }
            if (!view) {
                // Create or reuse a view for this row
                view = this.getReusableView(layoutInfo);
                // Add the view to the DOM if needed
                if (!removed.has(view)) this._children.add(view);
            }
            this._visibleViews.set(key1, view);
            removed.delete(view);
        }
        for (let key2 of toUpdate){
            let view = currentlyVisible.get(key2);
            this._renderedContent.delete(key2);
            this._renderView(view);
        }
        // Remove the remaining rows to delete from the DOM
        if (!this._transaction) this.removeViews(removed);
        this._correctItemOrder();
        this._flushVisibleViews();
        let hasLayoutUpdates = this._transaction && (toAdd.size > 0 || toRemove.size > 0 || this._hasLayoutUpdates());
        if (hasLayoutUpdates) requestAnimationFrame(()=>{
            // If we're in a transaction, apply animations to visible views
            // and "to be removed" views, which animate off screen.
            if (this._transaction) requestAnimationFrame(()=>this._applyLayoutInfos()
            );
        });
        return hasLayoutUpdates;
    }
    afterRender() {
        if (this.shouldOverscan) this._overscanManager.collectMetrics();
    }
    _flushVisibleViews() {
        // CollectionVirtualizer deals with a flattened set of LayoutInfos, but they can represent heirarchy
        // by referencing a parentKey. Just before rendering the visible views, we rebuild this heirarchy
        // by creating a mapping of views by parent key and recursively calling the delegate's renderWrapper
        // method to build the final tree.
        let viewsByParentKey = new Map([
            [
                null,
                []
            ]
        ]);
        for (let view1 of this._children){
            if (!viewsByParentKey.has(view1.layoutInfo.parentKey)) viewsByParentKey.set(view1.layoutInfo.parentKey, []);
            viewsByParentKey.get(view1.layoutInfo.parentKey).push(view1);
            if (!viewsByParentKey.has(view1.layoutInfo.key)) viewsByParentKey.set(view1.layoutInfo.key, []);
        }
        let buildTree = (parent, views)=>views.map((view)=>{
                let children = viewsByParentKey.get(view.layoutInfo.key);
                return this.delegate.renderWrapper(parent, view, children, (childViews)=>buildTree(view, childViews)
                );
            })
        ;
        let children1 = buildTree(null, viewsByParentKey.get(null));
        this.delegate.setVisibleViews(children1);
    }
    _applyLayoutInfo(view, layoutInfo) {
        if (view.layoutInfo === layoutInfo) return false;
        view.layoutInfo = layoutInfo;
        return true;
    }
    _applyLayoutInfos() {
        let updated = false;
        // Apply layout infos to visible views
        for (let view of this._visibleViews.values()){
            let cur = view.layoutInfo;
            if (cur) {
                let layoutInfo = this.layout.getLayoutInfo(cur.key);
                if (this._applyLayoutInfo(view, layoutInfo)) updated = true;
            }
        }
        // Apply final layout infos for views that will be removed
        if (this._transaction) {
            for (let view of this._transaction.toRemove.values()){
                let cur = view.layoutInfo;
                let layoutInfo = this.layout.getLayoutInfo(cur.key);
                if (this._applyLayoutInfo(view, layoutInfo)) updated = true;
            }
            for (let view2 of this._transaction.removed.values()){
                let cur = view2.layoutInfo;
                let layoutInfo = this._transaction.finalLayoutInfo.get(cur.key) || cur;
                layoutInfo = this.layout.getFinalLayoutInfo(layoutInfo.copy());
                if (this._applyLayoutInfo(view2, layoutInfo)) updated = true;
            }
        }
        if (updated) this._flushVisibleViews();
    }
    _hasLayoutUpdates() {
        if (!this._transaction) return false;
        for (let view of this._visibleViews.values()){
            let cur = view.layoutInfo;
            if (!cur) return true;
            let layoutInfo = this.layout.getLayoutInfo(cur.key);
            if (// Uses equals rather than pointEquals so that width/height changes are taken into account
            !cur.rect.equals(layoutInfo.rect) || cur.opacity !== layoutInfo.opacity || cur.transform !== layoutInfo.transform) return true;
        }
        return false;
    }
    reuseView(view) {
        view.prepareForReuse();
        this._reusableViews[view.viewType].push(view);
    }
    removeViews(toRemove) {
        for (let view of toRemove)this._children.delete(view);
    }
    updateItemSize(key, size) {
        // TODO: we should be able to invalidate a single index path
        // @ts-ignore
        if (!this.layout.updateItemSize) return;
        // If the scroll position is currently animating, add the update
        // to a queue to be processed after the animation is complete.
        if (this._scrollAnimation) {
            this._sizeUpdateQueue.set(key, size);
            return;
        }
        // @ts-ignore
        let changed = this.layout.updateItemSize(key, size);
        if (changed) this.relayout();
    }
    startScrolling() {
        this._isScrolling = true;
    }
    endScrolling() {
        this._isScrolling = false;
        this._correctItemOrder();
        this._flushVisibleViews();
    }
    _resetAnimatedContentOffset() {
        // Reset the animated content offset of subviews. See comment in relayoutNow for details.
        if (!this._animatedContentOffset.isOrigin()) {
            this._animatedContentOffset = new $a6cfd219fe9c9e67$export$baf26146a414f24a(0, 0);
            this._applyLayoutInfos();
        }
    }
    /**
   * Scrolls the item with the given key into view, optionally with an animation.
   * @param key The key of the item to scroll into view.
   * @param duration The duration of the scroll animation.
   */ scrollToItem(key, options) {
        // key can be 0, so check if null or undefined
        if (key == null) return;
        let layoutInfo = this.layout.getLayoutInfo(key);
        if (!layoutInfo) return;
        let { duration: duration = 300 , shouldScrollX: shouldScrollX = true , shouldScrollY: shouldScrollY = true , offsetX: offsetX = 0 , offsetY: offsetY = 0  } = options;
        let x = this.visibleRect.x;
        let y = this.visibleRect.y;
        let minX = layoutInfo.rect.x - offsetX;
        let minY = layoutInfo.rect.y - offsetY;
        let maxX = x + this.visibleRect.width;
        let maxY = y + this.visibleRect.height;
        if (shouldScrollX) {
            if (minX <= x || maxX === 0) x = minX;
            else if (layoutInfo.rect.maxX > maxX) x += layoutInfo.rect.maxX - maxX;
        }
        if (shouldScrollY) {
            if (minY <= y || maxY === 0) y = minY;
            else if (layoutInfo.rect.maxY > maxY) y += layoutInfo.rect.maxY - maxY;
        }
        return this.scrollTo(new $a6cfd219fe9c9e67$export$baf26146a414f24a(x, y), duration);
    }
    /**
   * Performs an animated scroll to the given offset.
   * @param offset - The offset to scroll to.
   * @param duration The duration of the animation.
   * @returns A promise that resolves when the animation is complete.
   */ scrollTo(offset1, duration = 300) {
        // Cancel the current scroll animation
        if (this._scrollAnimation) {
            this._scrollAnimation.cancel();
            this._scrollAnimation = null;
        }
        // Set the content offset synchronously if the duration is zero
        if (duration <= 0 || this.visibleRect.pointEquals(offset1)) {
            this._setContentOffset(offset1);
            return Promise.resolve();
        }
        this.startScrolling();
        this._scrollAnimation = $c48fb8933aeded9d$export$dc0b63720788090c(this.visibleRect, offset1, duration, $c48fb8933aeded9d$export$57636bb43b1ccbb0, (offset)=>{
            this._setContentOffset(offset);
        });
        this._scrollAnimation.then(()=>{
            this._scrollAnimation = null;
            // Process view size updates that occurred during the animation.
            // Only views that are still visible will be actually updated.
            for (let [key, size] of this._sizeUpdateQueue)this.updateItemSize(key, size);
            this._sizeUpdateQueue.clear();
            this.relayout();
            this._processTransactionQueue();
            this.endScrolling();
        });
        return this._scrollAnimation;
    }
    _runTransaction(action, animated) {
        this._startTransaction();
        if (this._nextTransaction) this._nextTransaction.actions.push(action);
        this._endTransaction(animated);
    }
    _startTransaction() {
        if (!this._nextTransaction) this._nextTransaction = new $d160844559a6f370$export$febc5573c75cefb0;
        this._nextTransaction.level++;
    }
    _endTransaction(animated) {
        if (!this._nextTransaction) return false;
        // Save whether the transaction should be animated.
        if (animated != null) this._nextTransaction.animated = animated;
        // If we haven't reached level 0, we are still in a
        // nested transaction. Wait for the parent to end.
        if (--this._nextTransaction.level > 0) return false;
        // Do nothing for empty transactions
        if (this._nextTransaction.actions.length === 0) {
            this._nextTransaction = null;
            return false;
        }
        // Default animations to true
        if (this._nextTransaction.animated == null) this._nextTransaction.animated = true;
        // Enqueue the transaction
        this._transactionQueue.push(this._nextTransaction);
        this._nextTransaction = null;
        this._processTransactionQueue();
        return true;
    }
    _processTransactionQueue() {
        // If the current transaction is animating, wait until the end
        // to process the next transaction.
        if (this._transaction || this._scrollAnimation) return;
        let next = this._transactionQueue.shift();
        if (next) this._performTransaction(next);
    }
    _getContentRect() {
        return new $3d780642f4e7fb5d$export$c79fc6492f3af13d(0, 0, this.contentSize.width, this.contentSize.height);
    }
    _performTransaction(transaction) {
        this._transaction = transaction;
        this.relayoutNow({
            transaction: transaction,
            animated: transaction.animated,
            beforeLayout: ()=>{
                // Get the initial layout infos for all views before the updates
                // so we can figure out which views to add and remove.
                if (transaction.animated) transaction.initialMap = this._getLayoutInfoMap(this._getContentRect(), true);
                // Apply the actions that occurred during this transaction
                for (let action of transaction.actions)action();
            },
            afterLayout: ()=>{
                // Get the final layout infos after the updates
                if (transaction.animated) {
                    transaction.finalMap = this._getLayoutInfoMap(this._getContentRect());
                    this._setupTransactionAnimations(transaction);
                } else this._transaction = null;
            },
            afterAnimation: ()=>{
                // Remove and reuse views when animations are done
                if (transaction.toRemove.size > 0 || transaction.removed.size > 0) for (let view of $ad374c0b55447c87$export$cfc14088dfefce5f(transaction.toRemove.values(), transaction.removed.values())){
                    this._children.delete(view);
                    this.reuseView(view);
                }
                this._transaction = null;
                // Ensure DOM order is correct for accessibility after animations are complete
                this._correctItemOrder();
                this._flushVisibleViews();
                this._processTransactionQueue();
            }
        });
    }
    _setupTransactionAnimations(transaction) {
        let { initialMap: initialMap , finalMap: finalMap  } = transaction;
        // Store initial and final layout infos for animations
        for (let [key, layoutInfo] of initialMap)if (finalMap.has(key)) // Store the initial layout info for use during animations.
        transaction.initialLayoutInfo.set(key, layoutInfo);
        else // This view was removed. Store the layout info for use
        // in Layout#getFinalLayoutInfo during animations.
        transaction.finalLayoutInfo.set(layoutInfo.key, layoutInfo);
        // Get initial layout infos for views that were added
        for (let [key3, layoutInfo1] of finalMap)if (!initialMap.has(key3)) {
            let initialLayoutInfo = this.layout.getInitialLayoutInfo(layoutInfo1.copy());
            transaction.initialLayoutInfo.set(key3, initialLayoutInfo);
        }
        // Figure out which views were removed.
        for (let [key4, view] of this._visibleViews)if (!finalMap.has(key4)) {
            transaction.removed.set(key4, view);
            this._visibleViews.delete(key4);
            // In case something weird happened, where we have a view but no
            // initial layout info, use the one attached to the view.
            if (view.layoutInfo) {
                if (!transaction.finalLayoutInfo.has(view.layoutInfo.key)) transaction.finalLayoutInfo.set(view.layoutInfo.key, view.layoutInfo);
            }
        }
    }
}


function $7351e62c82814357$export$1505db82fe357e65(opts) {
    let [visibleViews, setVisibleViews] = $fLTjP$react.useState([]);
    let [contentSize, setContentSize] = $fLTjP$react.useState(new $7729f76ac8a56bcb$export$cb6da89c6af1a8ec());
    let [isAnimating, setAnimating] = $fLTjP$react.useState(false);
    let [isScrolling, setScrolling] = $fLTjP$react.useState(false);
    let virtualizer = $fLTjP$react.useMemo(()=>new $d40a369183baa2ed$export$89be5a243e59c4b2()
    , []);
    virtualizer.delegate = {
        setVisibleViews: setVisibleViews,
        setVisibleRect (rect) {
            virtualizer.visibleRect = rect;
            opts.onVisibleRectChange(rect);
        },
        setContentSize: setContentSize,
        renderView: opts.renderView,
        renderWrapper: opts.renderWrapper,
        beginAnimations: ()=>setAnimating(true)
        ,
        endAnimations: ()=>setAnimating(false)
        ,
        getScrollAnchor: opts.getScrollAnchor
    };
    virtualizer.layout = opts.layout;
    virtualizer.collection = opts.collection;
    virtualizer.transitionDuration = opts.transitionDuration;
    $fLTjP$reactariautils.useLayoutEffect(()=>{
        virtualizer.afterRender();
    });
    // eslint-disable-next-line arrow-body-style
    $fLTjP$react.useEffect(()=>{
        return ()=>virtualizer.willUnmount()
        ;
    }, []);
    return {
        virtualizer: virtualizer,
        visibleViews: visibleViews,
        setVisibleRect: $fLTjP$react.useCallback((rect)=>{
            virtualizer.visibleRect = rect;
        }, [
            virtualizer
        ]),
        contentSize: contentSize,
        isAnimating: isAnimating,
        isScrolling: isScrolling,
        startScrolling: $fLTjP$react.useCallback(()=>{
            virtualizer.startScrolling();
            setScrolling(true);
        }, [
            virtualizer
        ]),
        endScrolling: $fLTjP$react.useCallback(()=>{
            virtualizer.endScrolling();
            setScrolling(false);
        }, [
            virtualizer
        ])
    };
}


$parcel$exportWildcard(module.exports, $7d1bafeee40d368b$exports);
$parcel$exportWildcard(module.exports, $59fb774cf167c850$exports);
$parcel$exportWildcard(module.exports, $a6cfd219fe9c9e67$exports);
$parcel$exportWildcard(module.exports, $3d780642f4e7fb5d$exports);
$parcel$exportWildcard(module.exports, $7729f76ac8a56bcb$exports);
$parcel$exportWildcard(module.exports, $2a46fa22283edea8$exports);
$parcel$exportWildcard(module.exports, $7351e62c82814357$exports);


//# sourceMappingURL=main.js.map