import {useMemo as $lSmZo$useMemo, useEffect as $lSmZo$useEffect} from "react";
import {useMultipleSelectionState as $lSmZo$useMultipleSelectionState, SelectionManager as $lSmZo$SelectionManager} from "@react-stately/selection";
import {useCollection as $lSmZo$useCollection} from "@react-stately/collections";
import {useControlledState as $lSmZo$useControlledState} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fb0a1a056c6baecb$exports = {};

$parcel$export($fb0a1a056c6baecb$exports, "useListState", () => $fb0a1a056c6baecb$export$2f645645f7bca764);

var $c43ff68ee1e9bc26$exports = {};

$parcel$export($c43ff68ee1e9bc26$exports, "ListCollection", () => $c43ff68ee1e9bc26$export$d085fb9e920b5ca7);
class $c43ff68ee1e9bc26$export$d085fb9e920b5ca7 {
    constructor(nodes){
        this.keyMap = new Map();
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
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




function $fb0a1a056c6baecb$export$2f645645f7bca764(props) {
    let { filter: filter  } = props;
    let selectionState = $lSmZo$useMultipleSelectionState(props);
    let disabledKeys = $lSmZo$useMemo(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let factory = (nodes)=>filter ? new $c43ff68ee1e9bc26$export$d085fb9e920b5ca7(filter(nodes)) : new $c43ff68ee1e9bc26$export$d085fb9e920b5ca7(nodes)
    ;
    let context = $lSmZo$useMemo(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        })
    , [
        props.suppressTextValueWarning
    ]);
    let collection = $lSmZo$useCollection(props, factory, context, [
        filter
    ]);
    // Reset focused key if that item is deleted from the collection.
    $lSmZo$useEffect(()=>{
        if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    }, [
        collection,
        selectionState.focusedKey
    ]);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: new $lSmZo$SelectionManager(collection, selectionState)
    };
}


var $1c80eb4391abdea4$exports = {};

$parcel$export($1c80eb4391abdea4$exports, "useSingleSelectListState", () => $1c80eb4391abdea4$export$e7f05e985daf4b5f);



function $1c80eb4391abdea4$export$e7f05e985daf4b5f(props) {
    let [selectedKey, setSelectedKey] = $lSmZo$useControlledState(props.selectedKey, props.defaultSelectedKey ?? null, props.onSelectionChange);
    let selectedKeys = $lSmZo$useMemo(()=>selectedKey != null ? [
            selectedKey
        ] : []
    , [
        selectedKey
    ]);
    let { collection: collection , disabledKeys: disabledKeys , selectionManager: selectionManager  } = $fb0a1a056c6baecb$export$2f645645f7bca764({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            let key = keys.values().next().value;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
}





export {$fb0a1a056c6baecb$export$2f645645f7bca764 as useListState, $1c80eb4391abdea4$export$e7f05e985daf4b5f as useSingleSelectListState, $c43ff68ee1e9bc26$export$d085fb9e920b5ca7 as ListCollection};
//# sourceMappingURL=module.js.map
