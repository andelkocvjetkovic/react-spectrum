import {Section as $85d1946e7f6d42c5$re_export$Section, useCollection as $bnqkB$useCollection} from "@react-stately/collections";
import {useGridState as $bnqkB$useGridState, GridCollection as $bnqkB$GridCollection} from "@react-stately/grid";
import $bnqkB$react, {useMemo as $bnqkB$useMemo} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5988e1c94b1ddb4c$exports = {};

$parcel$export($5988e1c94b1ddb4c$exports, "useTableState", () => $5988e1c94b1ddb4c$export$907bcc6c48325fd6);



const $45e77d1d71e8160d$var$ROW_HEADER_COLUMN_KEY = 'row-header-column-' + Math.random().toString(36).slice(2);
function $45e77d1d71e8160d$var$buildHeaderRows(keyMap, columnNodes) {
    let columns = [];
    let seen = new Map();
    for (let column of columnNodes){
        let parentKey = column.parentKey;
        let col = [
            column
        ];
        while(parentKey){
            let parent = keyMap.get(parentKey);
            // If we've already seen this parent, than it is shared
            // with a previous column. If the current column is taller
            // than the previous column, than we need to shift the parent
            // in the previous column so it's level with the current column.
            if (seen.has(parent)) {
                parent.colspan++;
                let { column: column , index: index  } = seen.get(parent);
                if (index > col.length) break;
                for(let i = index; i < col.length; i++)column.splice(i, 0, null);
                // Adjust shifted indices
                for(let i1 = col.length; i1 < column.length; i1++)if (column[i1] && seen.has(column[i1])) seen.get(column[i1]).index = i1;
            } else {
                parent.colspan = 1;
                col.push(parent);
                seen.set(parent, {
                    column: col,
                    index: col.length - 1
                });
            }
            parentKey = parent.parentKey;
        }
        columns.push(col);
        column.index = columns.length - 1;
    }
    let maxLength = Math.max(...columns.map((c)=>c.length
    ));
    let headerRows = Array(maxLength).fill(0).map(()=>[]
    );
    // Convert columns into rows.
    let colIndex = 0;
    for (let column1 of columns){
        let i = maxLength - 1;
        for (let item of column1){
            if (item) {
                // Fill the space up until the current column with a placeholder
                let row = headerRows[i];
                let rowLength = row.reduce((p, c)=>p + c.colspan
                , 0);
                if (rowLength < colIndex) {
                    let placeholder = {
                        type: 'placeholder',
                        key: 'placeholder-' + item.key,
                        colspan: colIndex - rowLength,
                        index: rowLength,
                        value: null,
                        rendered: null,
                        level: i,
                        hasChildNodes: false,
                        childNodes: [],
                        textValue: null
                    };
                    if (row.length > 0) {
                        row[row.length - 1].nextKey = placeholder.key;
                        placeholder.prevKey = row[row.length - 1].key;
                    }
                    row.push(placeholder);
                }
                if (row.length > 0) {
                    row[row.length - 1].nextKey = item.key;
                    item.prevKey = row[row.length - 1].key;
                }
                item.level = i;
                item.index = colIndex;
                row.push(item);
            }
            i--;
        }
        colIndex++;
    }
    // Add placeholders at the end of each row that is shorter than the maximum
    let i = 0;
    for (let row1 of headerRows){
        let rowLength = row1.reduce((p, c)=>p + c.colspan
        , 0);
        if (rowLength < columnNodes.length) {
            let placeholder = {
                type: 'placeholder',
                key: 'placeholder-' + row1[row1.length - 1].key,
                colspan: columnNodes.length - rowLength,
                index: rowLength,
                value: null,
                rendered: null,
                level: i,
                hasChildNodes: false,
                childNodes: [],
                textValue: null,
                prevKey: row1[row1.length - 1].key
            };
            row1.push(placeholder);
        }
        i++;
    }
    return headerRows.map((childNodes, index)=>{
        let row = {
            type: 'headerrow',
            key: 'headerrow-' + index,
            index: index,
            value: null,
            rendered: null,
            level: 0,
            hasChildNodes: true,
            childNodes: childNodes,
            textValue: null
        };
        return row;
    });
}
class $45e77d1d71e8160d$export$596e1b2e2cf93690 extends $bnqkB$GridCollection {
    constructor(nodes, prev, opts){
        let rowHeaderColumnKeys = new Set();
        let body;
        let columns = [];
        // Add cell for selection checkboxes if needed.
        if (opts?.showSelectionCheckboxes) {
            let rowHeaderColumn = {
                type: 'column',
                key: $45e77d1d71e8160d$var$ROW_HEADER_COLUMN_KEY,
                value: null,
                textValue: '',
                level: 0,
                index: 0,
                hasChildNodes: false,
                rendered: null,
                childNodes: [],
                props: {
                    isSelectionCell: true
                }
            };
            columns.unshift(rowHeaderColumn);
        }
        let rows = [];
        let columnKeyMap = new Map();
        let visit = (node)=>{
            switch(node.type){
                case 'body':
                    body = node;
                    break;
                case 'column':
                    columnKeyMap.set(node.key, node);
                    if (!node.hasChildNodes) {
                        columns.push(node);
                        if (node.props.isRowHeader) rowHeaderColumnKeys.add(node.key);
                    }
                    break;
                case 'item':
                    rows.push(node);
                    return; // do not go into childNodes
            }
            for (let child of node.childNodes)visit(child);
        };
        for (let node1 of nodes)visit(node1);
        let headerRows = $45e77d1d71e8160d$var$buildHeaderRows(columnKeyMap, columns);
        headerRows.forEach((row, i)=>rows.splice(i, 0, row)
        );
        super({
            columnCount: columns.length,
            items: rows,
            visitNode: (node)=>{
                node.column = columns[node.index];
                return node;
            }
        });
        this.columns = columns;
        this.rowHeaderColumnKeys = rowHeaderColumnKeys;
        this.body = body;
        this.headerRows = headerRows;
        // Default row header column to the first one.
        if (this.rowHeaderColumnKeys.size === 0) this.rowHeaderColumnKeys.add(this.columns[opts?.showSelectionCheckboxes ? 1 : 0].key);
    }
    *[Symbol.iterator]() {
        yield* this.body.childNodes;
    }
    get size() {
        return [
            ...this.body.childNodes
        ].length;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey : null;
    }
    getFirstKey() {
        return [
            ...this.body.childNodes
        ][0]?.key;
    }
    getLastKey() {
        let rows = [
            ...this.body.childNodes
        ];
        return rows[rows.length - 1]?.key;
    }
    getItem(key) {
        return this.keyMap.get(key);
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
}



const $5988e1c94b1ddb4c$var$OPPOSITE_SORT_DIRECTION = {
    ascending: 'descending',
    descending: 'ascending'
};
function $5988e1c94b1ddb4c$export$907bcc6c48325fd6(props) {
    let { selectionMode: selectionMode = 'none'  } = props;
    let context = $bnqkB$useMemo(()=>({
            showSelectionCheckboxes: props.showSelectionCheckboxes && selectionMode !== 'none',
            selectionMode: selectionMode,
            columns: []
        })
    , [
        props.children,
        props.showSelectionCheckboxes,
        selectionMode
    ]);
    let collection = $bnqkB$useCollection(props, (nodes, prev)=>new $45e77d1d71e8160d$export$596e1b2e2cf93690(nodes, prev, context)
    , context);
    let { disabledKeys: disabledKeys , selectionManager: selectionManager  } = $bnqkB$useGridState({
        ...props,
        collection: collection
    });
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        showSelectionCheckboxes: props.showSelectionCheckboxes || false,
        sortDescriptor: props.sortDescriptor,
        sort (columnKey) {
            props.onSortChange({
                column: columnKey,
                direction: props.sortDescriptor?.column === columnKey ? $5988e1c94b1ddb4c$var$OPPOSITE_SORT_DIRECTION[props.sortDescriptor.direction] : 'ascending'
            });
        }
    };
}


var $b286aed832ce8fd8$exports = {};

$parcel$export($b286aed832ce8fd8$exports, "TableHeader", () => $b286aed832ce8fd8$export$f850895b287ef28e);

function $b286aed832ce8fd8$var$TableHeader(props) {
    return null;
}
$b286aed832ce8fd8$var$TableHeader.getCollectionNode = function* getCollectionNode(props) {
    let { children: children , columns: columns  } = props;
    if (typeof children === 'function') {
        if (!columns) throw new Error('props.children was a function but props.columns is missing');
        for (let column of columns)yield {
            type: 'column',
            value: column,
            renderer: children
        };
    } else {
        let columns = [];
        $bnqkB$react.Children.forEach(children, (column)=>{
            columns.push({
                type: 'column',
                element: column
            });
        });
        yield* columns;
    }
};
/**
 * A TableHeader is a container for the Column elements in a Table. Columns can be statically defined
 * as children, or generated dynamically using a function based on the data passed to the `columns` prop.
 */ // We don't want getCollectionNode to show up in the type definition
let $b286aed832ce8fd8$export$f850895b287ef28e = $b286aed832ce8fd8$var$TableHeader;


var $5c39000d73a44af7$exports = {};

$parcel$export($5c39000d73a44af7$exports, "TableBody", () => $5c39000d73a44af7$export$76ccd210b9029917);

function $5c39000d73a44af7$var$TableBody(props) {
    return null;
}
$5c39000d73a44af7$var$TableBody.getCollectionNode = function* getCollectionNode(props) {
    let { children: children , items: items1  } = props;
    yield {
        type: 'body',
        hasChildNodes: true,
        props: props,
        *childNodes () {
            if (typeof children === 'function') {
                if (!items1) throw new Error('props.children was a function but props.items is missing');
                for (let item of items1)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                $bnqkB$react.Children.forEach(children, (item)=>{
                    items.push({
                        type: 'item',
                        element: item
                    });
                });
                yield* items;
            }
        }
    };
};
/**
 * A TableBody is a container for the Row elements of a Table. Rows can be statically defined
 * as children, or generated dynamically using a function based on the data passed to the `items` prop.
 */ // We don't want getCollectionNode to show up in the type definition
let $5c39000d73a44af7$export$76ccd210b9029917 = $5c39000d73a44af7$var$TableBody;


var $601a0eca3e620c51$exports = {};

$parcel$export($601a0eca3e620c51$exports, "Column", () => $601a0eca3e620c51$export$816b5d811295e6bc);

function $601a0eca3e620c51$var$Column(props) {
    return null;
}
$601a0eca3e620c51$var$Column.getCollectionNode = function* getCollectionNode(props, context1) {
    let { title: title , children: children , childColumns: childColumns1  } = props;
    let rendered = title || children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'];
    let fullNodes = yield {
        type: 'column',
        hasChildNodes: !!childColumns1 || title && $bnqkB$react.Children.count(children) > 0,
        rendered: rendered,
        textValue: textValue,
        props: props,
        *childNodes () {
            if (childColumns1) for (let child1 of childColumns1)yield {
                type: 'column',
                value: child1
            };
            else if (title) {
                let childColumns = [];
                $bnqkB$react.Children.forEach(children, (child)=>{
                    childColumns.push({
                        type: 'column',
                        element: child
                    });
                });
                yield* childColumns;
            }
        },
        shouldInvalidate (newContext) {
            // This is a bit of a hack, but it works.
            // If this method is called, then there's a cached version of this node available.
            // But, we need to keep the list of columns in the new context up to date.
            updateContext(newContext);
            return false;
        }
    };
    let updateContext = (context)=>{
        // register leaf columns on the context so that <Row> can access them
        for (let node of fullNodes)if (!node.hasChildNodes) context.columns.push(node);
    };
    updateContext(context1);
};
/**
 * A Column represents a field of each item within a Table. Columns may also contain nested
 * Column elements to represent column groups. Nested columns can be statically defined as
 * children, or dynamically generated using a function based on the `childColumns` prop.
 */ // We don't want getCollectionNode to show up in the type definition
let $601a0eca3e620c51$export$816b5d811295e6bc = $601a0eca3e620c51$var$Column;


var $18fe3bbcee2d7365$exports = {};

$parcel$export($18fe3bbcee2d7365$exports, "Row", () => $18fe3bbcee2d7365$export$b59bdbef9ce70de2);

function $18fe3bbcee2d7365$var$Row(props) {
    return null;
}
$18fe3bbcee2d7365$var$Row.getCollectionNode = function* getCollectionNode(props, context) {
    let { children: children , textValue: textValue  } = props;
    yield {
        type: 'item',
        props: props,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: true,
        *childNodes () {
            // Process cells first
            if (context.showSelectionCheckboxes && context.selectionMode !== 'none') yield {
                type: 'cell',
                key: 'header',
                props: {
                    isSelectionCell: true
                }
            };
            if (typeof children === 'function') for (let column of context.columns)yield {
                type: 'cell',
                element: children(column.key),
                key: column.key // this is combined with the row key by CollectionBuilder
            };
            else {
                let cells = [];
                $bnqkB$react.Children.forEach(children, (cell)=>{
                    cells.push({
                        type: 'cell',
                        element: cell
                    });
                });
                if (cells.length !== context.columns.length) throw new Error(`Cell count must match column count. Found ${cells.length} cells and ${context.columns.length} columns.`);
                yield* cells;
            }
        },
        shouldInvalidate (newContext) {
            // Invalidate all rows if the columns changed.
            return newContext.columns.length !== context.columns.length || newContext.columns.some((c, i)=>c.key !== context.columns[i].key
            ) || newContext.showSelectionCheckboxes !== context.showSelectionCheckboxes || newContext.selectionMode !== context.selectionMode;
        }
    };
};
/**
 * A Row represents a single item in a Table and contains Cell elements for each column.
 * Cells can be statically defined as children, or generated dynamically using a function
 * based on the columns defined in the TableHeader.
 */ // We don't want getCollectionNode to show up in the type definition
let $18fe3bbcee2d7365$export$b59bdbef9ce70de2 = $18fe3bbcee2d7365$var$Row;


var $979115644a7d18aa$exports = {};

$parcel$export($979115644a7d18aa$exports, "Cell", () => $979115644a7d18aa$export$f6f0c3fe4ec306ea);
function $979115644a7d18aa$var$Cell(props) {
    return null;
}
$979115644a7d18aa$var$Cell.getCollectionNode = function* getCollectionNode(props) {
    let { children: children  } = props;
    let textValue = props.textValue || (typeof children === 'string' ? children : '') || props['aria-label'] || '';
    yield {
        type: 'cell',
        props: props,
        rendered: children,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: false
    };
};
/**
 * A Cell represents the value of a single Column within a Table Row.
 */ // We don't want getCollectionNode to show up in the type definition
let $979115644a7d18aa$export$f6f0c3fe4ec306ea = $979115644a7d18aa$var$Cell;





export {$85d1946e7f6d42c5$re_export$Section as Section, $5988e1c94b1ddb4c$export$907bcc6c48325fd6 as useTableState, $b286aed832ce8fd8$export$f850895b287ef28e as TableHeader, $5c39000d73a44af7$export$76ccd210b9029917 as TableBody, $601a0eca3e620c51$export$816b5d811295e6bc as Column, $18fe3bbcee2d7365$export$b59bdbef9ce70de2 as Row, $979115644a7d18aa$export$f6f0c3fe4ec306ea as Cell};
//# sourceMappingURL=module.js.map
