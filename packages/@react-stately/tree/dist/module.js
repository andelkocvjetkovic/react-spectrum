import {useMemo as $2McLo$useMemo, useEffect as $2McLo$useEffect} from "react";
import {useMultipleSelectionState as $2McLo$useMultipleSelectionState, SelectionManager as $2McLo$SelectionManager} from "@react-stately/selection";
import {useCollection as $2McLo$useCollection} from "@react-stately/collections";
import {useControlledState as $2McLo$useControlledState} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $16b6a6ca58eb930e$exports = {};

$parcel$export($16b6a6ca58eb930e$exports, "useTreeState", () => $16b6a6ca58eb930e$export$728d6ba534403756);


class $5eb04e898d6e2eeb$export$863faf230ee2118a {
    constructor(nodes, { expandedKeys: expandedKeys  } = {
    }){
        this.keyMap = new Map();
        this.iterable = nodes;
        expandedKeys = expandedKeys || new Set();
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && (node.type === 'section' || expandedKeys.has(node.key))) for (let child of node.childNodes)visit(child);
        };
        for (let node2 of nodes)visit(node2);
        let last;
        let index = 0;
        for (let [key, node1] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node1.prevKey = last.key;
            } else {
                this.firstKey = key;
                node1.prevKey = undefined;
            }
            if (node1.type === 'item') node1.index = index++;
            last = node1;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this.lastKey = last?.key;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
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
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
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




function $16b6a6ca58eb930e$export$728d6ba534403756(props) {
    let [expandedKeys, setExpandedKeys] = $2McLo$useControlledState(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange);
    let selectionState = $2McLo$useMultipleSelectionState(props);
    let disabledKeys = $2McLo$useMemo(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let tree = $2McLo$useCollection(props, (nodes)=>new $5eb04e898d6e2eeb$export$863faf230ee2118a(nodes, {
            expandedKeys: expandedKeys
        })
    , null, [
        expandedKeys
    ]);
    // Reset focused key if that item is deleted from the collection.
    $2McLo$useEffect(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys($16b6a6ca58eb930e$var$toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys: expandedKeys,
        disabledKeys: disabledKeys,
        toggleKey: onToggle,
        selectionManager: new $2McLo$SelectionManager(tree, selectionState)
    };
}
function $16b6a6ca58eb930e$var$toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}




export {$16b6a6ca58eb930e$export$728d6ba534403756 as useTreeState};
//# sourceMappingURL=module.js.map
