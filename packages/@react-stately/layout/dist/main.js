var $bz2xS$reactstatelyvirtualizer = require("@react-stately/virtualizer");

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
var $aed36882df94379f$exports = {};

$parcel$export($aed36882df94379f$exports, "ListLayout", () => $aed36882df94379f$export$cacbb3924155d68e);

const $aed36882df94379f$var$DEFAULT_HEIGHT = 48;
class $aed36882df94379f$export$cacbb3924155d68e extends $bz2xS$reactstatelyvirtualizer.Layout {
    /**
   * Creates a new ListLayout with options. See the list of properties below for a description
   * of the options that can be provided.
   */ constructor(options = {
    }){
        super();
        this.disabledKeys = new Set();
        this.rowHeight = options.rowHeight;
        this.estimatedRowHeight = options.estimatedRowHeight;
        this.headingHeight = options.headingHeight;
        this.estimatedHeadingHeight = options.estimatedHeadingHeight;
        this.padding = options.padding || 0;
        this.indentationForItem = options.indentationForItem;
        this.collator = options.collator;
        this.loaderHeight = options.loaderHeight;
        this.placeholderHeight = options.placeholderHeight;
        this.layoutInfos = new Map();
        this.layoutNodes = new Map();
        this.rootNodes = [];
        this.lastWidth = 0;
        this.lastCollection = null;
    }
    getLayoutInfo(key) {
        return this.layoutInfos.get(key);
    }
    getVisibleLayoutInfos(rect) {
        let res = [];
        let addNodes = (nodes)=>{
            for (let node of nodes)if (this.isVisible(node, rect)) {
                res.push(node.layoutInfo);
                if (node.header) res.push(node.header);
                if (node.children) addNodes(node.children);
            }
        };
        addNodes(this.rootNodes);
        return res;
    }
    isVisible(node, rect) {
        return node.layoutInfo.rect.intersects(rect) || node.layoutInfo.isSticky;
    }
    validate(invalidationContext) {
        // Invalidate cache if the size of the collection changed.
        // In this case, we need to recalculate the entire layout.
        this.invalidateEverything = invalidationContext.sizeChanged;
        this.collection = this.virtualizer.collection;
        this.rootNodes = this.buildCollection();
        // Remove deleted layout nodes
        if (this.lastCollection) {
            for (let key of this.lastCollection.getKeys())if (!this.collection.getItem(key)) {
                let layoutNode = this.layoutNodes.get(key);
                if (layoutNode) {
                    this.layoutInfos.delete(layoutNode.layoutInfo.key);
                    this.layoutInfos.delete(layoutNode.header?.key);
                    this.layoutNodes.delete(key);
                }
            }
        }
        this.lastWidth = this.virtualizer.visibleRect.width;
        this.lastCollection = this.collection;
    }
    buildCollection() {
        let y = this.padding;
        let nodes = [];
        for (let node of this.collection){
            let layoutNode = this.buildChild(node, 0, y);
            y = layoutNode.layoutInfo.rect.maxY;
            nodes.push(layoutNode);
        }
        if (this.isLoading) {
            let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, this.virtualizer.visibleRect.width, this.loaderHeight ?? this.virtualizer.visibleRect.height);
            let loader = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('loader', 'loader', rect);
            this.layoutInfos.set('loader', loader);
            nodes.push({
                layoutInfo: loader
            });
            y = loader.rect.maxY;
        }
        if (nodes.length === 0) {
            let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, this.virtualizer.visibleRect.width, this.placeholderHeight ?? this.virtualizer.visibleRect.height);
            let placeholder = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('placeholder', 'placeholder', rect);
            this.layoutInfos.set('placeholder', placeholder);
            nodes.push({
                layoutInfo: placeholder
            });
            y = placeholder.rect.maxY;
        }
        this.contentSize = new $bz2xS$reactstatelyvirtualizer.Size(this.virtualizer.visibleRect.width, y + this.padding);
        return nodes;
    }
    buildChild(node, x, y) {
        let cached = this.layoutNodes.get(node.key);
        if (!this.invalidateEverything && cached && cached.node === node && y === (cached.header || cached.layoutInfo).rect.y) return cached;
        let layoutNode = this.buildNode(node, x, y);
        layoutNode.node = node;
        layoutNode.layoutInfo.parentKey = node.parentKey || null;
        this.layoutInfos.set(layoutNode.layoutInfo.key, layoutNode.layoutInfo);
        if (layoutNode.header) this.layoutInfos.set(layoutNode.header.key, layoutNode.header);
        this.layoutNodes.set(node.key, layoutNode);
        return layoutNode;
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'section':
                return this.buildSection(node, x, y);
            case 'item':
                return this.buildItem(node, x, y);
        }
    }
    buildSection(node, x, y) {
        let width = this.virtualizer.visibleRect.width;
        let rectHeight = this.headingHeight;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall collection view changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode && previousLayoutNode.header) {
                let curNode = this.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                rectHeight = previousLayoutNode.header.rect.height;
                isEstimated = width !== this.lastWidth || curNode !== lastNode || previousLayoutNode.header.estimatedSize;
            } else {
                rectHeight = node.rendered ? this.estimatedHeadingHeight : 0;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $aed36882df94379f$var$DEFAULT_HEIGHT;
        let headerRect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, width, rectHeight);
        let header = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('header', node.key + ':header', headerRect);
        header.estimatedSize = isEstimated;
        header.parentKey = node.key;
        y += header.rect.height;
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, width, 0);
        let layoutInfo = new $bz2xS$reactstatelyvirtualizer.LayoutInfo(node.type, node.key, rect);
        let startY = y;
        let children = [];
        for (let child of node.childNodes){
            let layoutNode = this.buildChild(child, x, y);
            y = layoutNode.layoutInfo.rect.maxY;
            children.push(layoutNode);
        }
        rect.height = y - startY;
        return {
            header: header,
            layoutInfo: layoutInfo,
            children: children
        };
    }
    buildItem(node, x, y) {
        let width = this.virtualizer.visibleRect.width;
        let rectHeight = this.rowHeight;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall collection view changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                let curNode = this.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                rectHeight = previousLayoutNode.layoutInfo.rect.height;
                isEstimated = width !== this.lastWidth || curNode !== lastNode || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                rectHeight = this.estimatedRowHeight;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $aed36882df94379f$var$DEFAULT_HEIGHT;
        if (typeof this.indentationForItem === 'function') x += this.indentationForItem(this.collection, node.key) || 0;
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(x, y, width - x, rectHeight);
        let layoutInfo = new $bz2xS$reactstatelyvirtualizer.LayoutInfo(node.type, node.key, rect);
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo
        };
    }
    updateItemSize(key, size) {
        let layoutInfo = this.layoutInfos.get(key);
        // If no layoutInfo, item has been deleted/removed.
        if (!layoutInfo) return false;
        layoutInfo.estimatedSize = false;
        if (layoutInfo.rect.height !== size.height) {
            // Copy layout info rather than mutating so that later caches are invalidated.
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            this.layoutInfos.set(key, newLayoutInfo);
            // Invalidate layout for this layout node and all parents
            this.updateLayoutNode(key, layoutInfo, newLayoutInfo);
            let node = this.collection.getItem(layoutInfo.parentKey);
            while(node){
                this.updateLayoutNode(node.key, layoutInfo, newLayoutInfo);
                node = this.collection.getItem(node.parentKey);
            }
            return true;
        }
        return false;
    }
    updateLayoutNode(key, oldLayoutInfo, newLayoutInfo) {
        let n = this.layoutNodes.get(key);
        if (n) {
            // Invalidate by clearing node.
            n.node = null;
            // Replace layout info in LayoutNode
            if (n.header === oldLayoutInfo) n.header = newLayoutInfo;
            else if (n.layoutInfo === oldLayoutInfo) n.layoutInfo = newLayoutInfo;
        }
    }
    getContentSize() {
        return this.contentSize;
    }
    getKeyAbove(key) {
        let collection = this.collection;
        key = collection.getKeyBefore(key);
        while(key != null){
            let item = collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(item.key)) return key;
            key = collection.getKeyBefore(key);
        }
    }
    getKeyBelow(key) {
        let collection = this.collection;
        key = collection.getKeyAfter(key);
        while(key != null){
            let item = collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(item.key)) return key;
            key = collection.getKeyAfter(key);
        }
    }
    getKeyPageAbove(key) {
        let layoutInfo = this.getLayoutInfo(key);
        if (layoutInfo) {
            let pageY = Math.max(0, layoutInfo.rect.y + layoutInfo.rect.height - this.virtualizer.visibleRect.height);
            while(layoutInfo && layoutInfo.rect.y > pageY){
                let keyAbove = this.getKeyAbove(layoutInfo.key);
                layoutInfo = this.getLayoutInfo(keyAbove);
            }
            if (layoutInfo) return layoutInfo.key;
        }
        return this.getFirstKey();
    }
    getKeyPageBelow(key) {
        let layoutInfo = this.getLayoutInfo(key != null ? key : this.getFirstKey());
        if (layoutInfo) {
            let pageY = Math.min(this.virtualizer.contentSize.height, layoutInfo.rect.y - layoutInfo.rect.height + this.virtualizer.visibleRect.height);
            while(layoutInfo && layoutInfo.rect.y < pageY){
                let keyBelow = this.getKeyBelow(layoutInfo.key);
                layoutInfo = this.getLayoutInfo(keyBelow);
            }
            if (layoutInfo) return layoutInfo.key;
        }
        return this.getLastKey();
    }
    getFirstKey() {
        let collection = this.collection;
        let key = collection.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(item.key)) return key;
            key = collection.getKeyAfter(key);
        }
    }
    getLastKey() {
        let collection = this.collection;
        let key = collection.getLastKey();
        while(key != null){
            let item = collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(item.key)) return key;
            key = collection.getKeyBefore(key);
        }
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getKeyBelow(key);
        }
        return null;
    }
    // getDragTarget(point: Point): DragTarget {
    //   let visible = this.getVisibleLayoutInfos(new Rect(point.x, point.y, 1, 1));
    //   if (visible.length > 0) {
    //     visible = visible.sort((a, b) => b.zIndex - a.zIndex);
    //     return {
    //       type: 'item',
    //       key: visible[0].key
    //     };
    //   }
    //   return null;
    // }
    // getDropTarget(point: Point): DropTarget {
    //   let key = this.virtualizer.keyAtPoint(point);
    //   if (key) {
    //     return {
    //       type: 'item',
    //       key,
    //       dropPosition: DropPosition.ON
    //     };
    //   }
    //   return null;
    // }
    getInitialLayoutInfo(layoutInfo) {
        layoutInfo.opacity = 0;
        layoutInfo.transform = 'scale3d(0.8, 0.8, 0.8)';
        return layoutInfo;
    }
    getFinalLayoutInfo(layoutInfo) {
        layoutInfo.opacity = 0;
        layoutInfo.transform = 'scale3d(0.8, 0.8, 0.8)';
        return layoutInfo;
    }
}


var $df0363d94e6d34b1$exports = {};

$parcel$export($df0363d94e6d34b1$exports, "TableLayout", () => $df0363d94e6d34b1$export$62444c3c724b1b20);


class $df0363d94e6d34b1$export$62444c3c724b1b20 extends $aed36882df94379f$export$cacbb3924155d68e {
    constructor(options){
        super(options);
        this.wasLoading = false;
        this.isLoading = false;
        this.getDefaultWidth = options.getDefaultWidth;
    }
    buildCollection() {
        // If columns changed, clear layout cache.
        if (!this.lastCollection || this.collection.columns.length !== this.lastCollection.columns.length || this.collection.columns.some((c, i)=>c.key !== this.lastCollection.columns[i].key
        )) // Invalidate everything in this layout pass. Will be reset in ListLayout on the next pass.
        this.invalidateEverything = true;
        // Track whether we were previously loading. This is used to adjust the animations of async loading vs inserts.
        let loadingState = this.collection.body.props.loadingState;
        this.wasLoading = this.isLoading;
        this.isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
        this.buildColumnWidths();
        let header = this.buildHeader();
        let body = this.buildBody(0);
        body.layoutInfo.rect.width = Math.max(header.layoutInfo.rect.width, body.layoutInfo.rect.width);
        this.contentSize = new $bz2xS$reactstatelyvirtualizer.Size(body.layoutInfo.rect.width, body.layoutInfo.rect.maxY);
        return [
            header,
            body
        ];
    }
    buildColumnWidths() {
        this.columnWidths = new Map();
        this.stickyColumnIndices = [];
        // Pass 1: set widths for all explicitly defined columns.
        let remainingColumns = new Set();
        let remainingSpace = this.virtualizer.visibleRect.width;
        for (let column of this.collection.columns){
            let props = column.props;
            let width = props.width ?? this.getDefaultWidth(props);
            if (width != null) {
                let w = this.parseWidth(width);
                this.columnWidths.set(column.key, w);
                remainingSpace -= w;
            } else remainingColumns.add(column);
            // The selection cell and any other sticky columns always need to be visible.
            // In addition, row headers need to be in the DOM for accessibility labeling.
            if (column.props.isSelectionCell || this.collection.rowHeaderColumnKeys.has(column.key)) this.stickyColumnIndices.push(column.index);
        }
        // Pass 2: if there are remaining columns, then distribute the remaining space evenly.
        if (remainingColumns.size > 0) {
            let columnWidth = remainingSpace / (this.collection.columns.length - this.columnWidths.size);
            for (let column of remainingColumns){
                let props = column.props;
                let minWidth = props.minWidth != null ? this.parseWidth(props.minWidth) : 75;
                let maxWidth = props.maxWidth != null ? this.parseWidth(props.maxWidth) : Infinity;
                let width = Math.max(minWidth, Math.min(maxWidth, columnWidth));
                this.columnWidths.set(column.key, width);
                remainingSpace -= width;
                if (width !== columnWidth) columnWidth = remainingSpace / (this.collection.columns.length - this.columnWidths.size);
            }
        }
    }
    parseWidth(width) {
        if (typeof width === 'string') {
            let match = width.match(/^(\d+)%$/);
            if (!match) throw new Error('Only percentages are supported as column widths');
            return this.virtualizer.visibleRect.width * (parseInt(match[1], 10) / 100);
        }
        return width;
    }
    buildHeader() {
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, 0, 0, 0);
        let layoutInfo = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('header', 'header', rect);
        let y = 0;
        let width = 0;
        let children = [];
        for (let headerRow of this.collection.headerRows){
            let layoutNode = this.buildChild(headerRow, 0, y);
            layoutNode.layoutInfo.parentKey = 'header';
            y = layoutNode.layoutInfo.rect.maxY;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            children.push(layoutNode);
        }
        rect.width = width;
        rect.height = y;
        this.layoutInfos.set('header', layoutInfo);
        return {
            layoutInfo: layoutInfo,
            children: children
        };
    }
    buildHeaderRow(headerRow, x, y) {
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, 0, 0);
        let row = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('headerrow', headerRow.key, rect);
        let height = 0;
        let columns = [];
        for (let cell of headerRow.childNodes){
            let layoutNode = this.buildChild(cell, x, y);
            layoutNode.layoutInfo.parentKey = row.key;
            x = layoutNode.layoutInfo.rect.maxX;
            height = Math.max(height, layoutNode.layoutInfo.rect.height);
            columns.push(layoutNode);
        }
        this.setChildHeights(columns, height);
        rect.height = height;
        rect.width = x;
        return {
            layoutInfo: row,
            children: columns
        };
    }
    setChildHeights(children, height) {
        for (let child of children)if (child.layoutInfo.rect.height !== height) {
            // Need to copy the layout info before we mutate it.
            child.layoutInfo = child.layoutInfo.copy();
            this.layoutInfos.set(child.layoutInfo.key, child.layoutInfo);
            child.layoutInfo.rect.height = height;
        }
    }
    getColumnWidth(node) {
        let colspan = node.colspan ?? 1;
        let width = 0;
        for(let i = 0; i < colspan; i++){
            let column = this.collection.columns[node.index + i];
            width += this.columnWidths.get(column.key);
        }
        return width;
    }
    getEstimatedHeight(node, width, height, estimatedHeight) {
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (height == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall collection view changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                let curNode = this.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                height = previousLayoutNode.layoutInfo.rect.height;
                isEstimated = curNode !== lastNode || width !== previousLayoutNode.layoutInfo.rect.width || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                height = estimatedHeight;
                isEstimated = true;
            }
        }
        return {
            height: height,
            isEstimated: isEstimated
        };
    }
    buildColumn(node, x, y) {
        let width = this.getColumnWidth(node);
        let { height: height , isEstimated: isEstimated  } = this.getEstimatedHeight(node, width, this.headingHeight, this.estimatedHeadingHeight);
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(x, y, width, height);
        let layoutInfo = new $bz2xS$reactstatelyvirtualizer.LayoutInfo(node.type, node.key, rect);
        layoutInfo.isSticky = node.props?.isSelectionCell;
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo
        };
    }
    buildBody(y) {
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, 0, 0);
        let layoutInfo = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('rowgroup', 'body', rect);
        let startY = y;
        let width = 0;
        let children = [];
        for (let node of this.collection.body.childNodes){
            let layoutNode = this.buildChild(node, 0, y);
            layoutNode.layoutInfo.parentKey = 'body';
            y = layoutNode.layoutInfo.rect.maxY;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            children.push(layoutNode);
        }
        if (this.isLoading) {
            let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, width || this.virtualizer.visibleRect.width, children.length === 0 ? this.virtualizer.visibleRect.height : 60);
            let loader = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('loader', 'loader', rect);
            loader.parentKey = 'body';
            loader.isSticky = children.length === 0;
            this.layoutInfos.set('loader', loader);
            children.push({
                layoutInfo: loader
            });
            y = loader.rect.maxY;
            width = Math.max(width, rect.width);
        } else if (children.length === 0) {
            let rect = new $bz2xS$reactstatelyvirtualizer.Rect(0, y, this.virtualizer.visibleRect.width, this.virtualizer.visibleRect.height);
            let empty = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('empty', 'empty', rect);
            empty.parentKey = 'body';
            empty.isSticky = true;
            this.layoutInfos.set('empty', empty);
            children.push({
                layoutInfo: empty
            });
            y = empty.rect.maxY;
            width = Math.max(width, rect.width);
        }
        rect.width = width;
        rect.height = y - startY;
        this.layoutInfos.set('body', layoutInfo);
        return {
            layoutInfo: layoutInfo,
            children: children
        };
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'headerrow':
                return this.buildHeaderRow(node, x, y);
            case 'item':
                return this.buildRow(node, x, y);
            case 'column':
            case 'placeholder':
                return this.buildColumn(node, x, y);
            case 'cell':
                return this.buildCell(node, x, y);
            default:
                throw new Error('Unknown node type ' + node.type);
        }
    }
    buildRow(node, x, y) {
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(x, y, 0, 0);
        let layoutInfo = new $bz2xS$reactstatelyvirtualizer.LayoutInfo('row', node.key, rect);
        let children = [];
        let height = 0;
        for (let child of node.childNodes){
            let layoutNode = this.buildChild(child, x, y);
            x = layoutNode.layoutInfo.rect.maxX;
            height = Math.max(height, layoutNode.layoutInfo.rect.height);
            children.push(layoutNode);
        }
        this.setChildHeights(children, height);
        rect.width = x;
        rect.height = height + 1; // +1 for bottom border
        return {
            layoutInfo: layoutInfo,
            children: children
        };
    }
    buildCell(node, x, y) {
        let width = this.getColumnWidth(node);
        let { height: height , isEstimated: isEstimated  } = this.getEstimatedHeight(node, width, this.rowHeight, this.estimatedRowHeight);
        let rect = new $bz2xS$reactstatelyvirtualizer.Rect(x, y, width, height);
        let layoutInfo = new $bz2xS$reactstatelyvirtualizer.LayoutInfo(node.type, node.key, rect);
        layoutInfo.isSticky = node.props?.isSelectionCell;
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo
        };
    }
    getVisibleLayoutInfos(rect) {
        let res = [];
        for (let node of this.rootNodes){
            res.push(node.layoutInfo);
            this.addVisibleLayoutInfos(res, node, rect);
        }
        return res;
    }
    addVisibleLayoutInfos(res, node, rect) {
        if (!node.children || node.children.length === 0) return;
        switch(node.layoutInfo.type){
            case 'header':
                for (let child of node.children){
                    res.push(child.layoutInfo);
                    this.addVisibleLayoutInfos(res, child, rect);
                }
                break;
            case 'rowgroup':
                {
                    let firstVisibleRow = this.binarySearch(node.children, rect.topLeft, 'y');
                    let lastVisibleRow = this.binarySearch(node.children, rect.bottomRight, 'y');
                    for(let i = firstVisibleRow; i <= lastVisibleRow; i++){
                        res.push(node.children[i].layoutInfo);
                        this.addVisibleLayoutInfos(res, node.children[i], rect);
                    }
                    break;
                }
            case 'headerrow':
            case 'row':
                {
                    let firstVisibleCell = this.binarySearch(node.children, rect.topLeft, 'x');
                    let lastVisibleCell = this.binarySearch(node.children, rect.topRight, 'x');
                    let stickyIndex = 0;
                    for(let i = firstVisibleCell; i <= lastVisibleCell; i++){
                        // Sticky columns and row headers are always in the DOM. Interleave these
                        // with the visible range so that they are in the right order.
                        if (stickyIndex < this.stickyColumnIndices.length) {
                            let idx = this.stickyColumnIndices[stickyIndex];
                            while(idx < i){
                                res.push(node.children[idx].layoutInfo);
                                idx = this.stickyColumnIndices[stickyIndex++];
                            }
                        }
                        res.push(node.children[i].layoutInfo);
                    }
                    while(stickyIndex < this.stickyColumnIndices.length){
                        let idx = this.stickyColumnIndices[stickyIndex++];
                        res.push(node.children[idx].layoutInfo);
                    }
                    break;
                }
            default:
                throw new Error('Unknown node type ' + node.layoutInfo.type);
        }
    }
    binarySearch(items, point, axis) {
        let low = 0;
        let high = items.length - 1;
        while(low <= high){
            let mid = low + high >> 1;
            let item = items[mid];
            if (axis === 'x' && item.layoutInfo.rect.maxX < point.x || axis === 'y' && item.layoutInfo.rect.maxY < point.y) low = mid + 1;
            else if (axis === 'x' && item.layoutInfo.rect.x > point.x || axis === 'y' && item.layoutInfo.rect.y > point.y) high = mid - 1;
            else return mid;
        }
        return Math.max(0, Math.min(items.length - 1, low));
    }
    getInitialLayoutInfo(layoutInfo) {
        let res = super.getInitialLayoutInfo(layoutInfo);
        // If this insert was the result of async loading, remove the zoom effect and just keep the fade in.
        if (this.wasLoading) res.transform = null;
        return res;
    }
}


$parcel$exportWildcard(module.exports, $aed36882df94379f$exports);
$parcel$exportWildcard(module.exports, $df0363d94e6d34b1$exports);


//# sourceMappingURL=main.js.map