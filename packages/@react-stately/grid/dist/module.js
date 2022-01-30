import {useMemo as $be5ec$useMemo, useEffect as $be5ec$useEffect} from "react";
import {useMultipleSelectionState as $be5ec$useMultipleSelectionState, SelectionManager as $be5ec$SelectionManager} from "@react-stately/selection";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c40bc2996decec31$exports = {};

$parcel$export($c40bc2996decec31$exports, "useGridState", () => $c40bc2996decec31$export$4007ac09ff9c68ed);


function $c40bc2996decec31$export$4007ac09ff9c68ed(props) {
    let { collection: collection , focusMode: focusMode  } = props;
    let selectionState = $be5ec$useMultipleSelectionState(props);
    let disabledKeys = $be5ec$useMemo(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let setFocusedKey = selectionState.setFocusedKey;
    selectionState.setFocusedKey = (key, child)=>{
        // If focusMode is cell and an item is focused, focus a child cell instead.
        if (focusMode === 'cell' && key != null) {
            let item = collection.getItem(key);
            if (item?.type === 'item') {
                let children = [
                    ...item.childNodes
                ];
                if (child === 'last') key = children[children.length - 1]?.key;
                else key = children[0]?.key;
            }
        }
        setFocusedKey(key, child);
    };
    // Reset focused key if that item is deleted from the collection.
    $be5ec$useEffect(()=>{
        if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    }, [
        collection,
        selectionState.focusedKey
    ]);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: new $be5ec$SelectionManager(collection, selectionState)
    };
}


var $8c07656437c834f0$exports = {};

$parcel$export($8c07656437c834f0$exports, "GridCollection", () => $8c07656437c834f0$export$de3fdf6493c353d);
class $8c07656437c834f0$export$de3fdf6493c353d {
    constructor(opts){
        this.keyMap = new Map();
        this.keyMap = new Map();
        this.columnCount = opts?.columnCount;
        this.rows = [];
        let visit = (node)=>{
            // If the node is the same object as the previous node for the same key,
            // we can skip this node and its children. We always visit columns though,
            // because we depend on order to build the columns array.
            let prevNode = this.keyMap.get(node.key);
            if (opts.visitNode) node = opts.visitNode(node);
            this.keyMap.set(node.key, node);
            let childKeys = new Set();
            let last;
            for (let child of node.childNodes){
                if (child.type === 'cell' && child.parentKey == null) // if child is a cell parent key isn't already established by the collection, match child node to parent row
                child.parentKey = node.key;
                childKeys.add(child.key);
                if (last) {
                    last.nextKey = child.key;
                    child.prevKey = last.key;
                } else child.prevKey = null;
                visit(child);
                last = child;
            }
            if (last) last.nextKey = null;
            // Remove deleted nodes and their children from the key map
            if (prevNode) {
                for (let child of prevNode.childNodes)if (!childKeys.has(child.key)) remove(child);
            }
        };
        let remove = (node)=>{
            this.keyMap.delete(node.key);
            for (let child of node.childNodes)if (this.keyMap.get(child.key) === child) remove(child);
        };
        let last1;
        opts.items.forEach((node, i)=>{
            let rowNode = {
                level: 0,
                key: 'row-' + i,
                type: 'row',
                value: undefined,
                hasChildNodes: true,
                childNodes: [
                    ...node.childNodes
                ],
                rendered: undefined,
                textValue: undefined,
                ...node,
                index: i
            };
            if (last1) {
                last1.nextKey = rowNode.key;
                rowNode.prevKey = last1.key;
            } else rowNode.prevKey = null;
            this.rows.push(rowNode);
            visit(rowNode);
            last1 = rowNode;
        });
        if (last1) last1.nextKey = null;
    }
    *[Symbol.iterator]() {
        yield* [
            ...this.rows
        ];
    }
    get size() {
        return [
            ...this.rows
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
            ...this.rows
        ][0]?.key;
    }
    getLastKey() {
        let rows = [
            ...this.rows
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




export {$c40bc2996decec31$export$4007ac09ff9c68ed as useGridState, $8c07656437c834f0$export$de3fdf6493c353d as GridCollection};
//# sourceMappingURL=module.js.map
