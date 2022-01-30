var $12Xhq$react = require("react");
var $12Xhq$reactstatelyselection = require("@react-stately/selection");
var $12Xhq$reactstatelycollections = require("@react-stately/collections");
var $12Xhq$reactstatelyutils = require("@react-stately/utils");

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
var $0ca6fb377e78c376$exports = {};

$parcel$export($0ca6fb377e78c376$exports, "useListState", () => $0ca6fb377e78c376$export$2f645645f7bca764);

var $99881fbe031fe9b4$exports = {};

$parcel$export($99881fbe031fe9b4$exports, "ListCollection", () => $99881fbe031fe9b4$export$d085fb9e920b5ca7);
class $99881fbe031fe9b4$export$d085fb9e920b5ca7 {
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




function $0ca6fb377e78c376$export$2f645645f7bca764(props) {
    let { filter: filter  } = props;
    let selectionState = $12Xhq$reactstatelyselection.useMultipleSelectionState(props);
    let disabledKeys = $12Xhq$react.useMemo(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let factory = (nodes)=>filter ? new $99881fbe031fe9b4$export$d085fb9e920b5ca7(filter(nodes)) : new $99881fbe031fe9b4$export$d085fb9e920b5ca7(nodes)
    ;
    let context = $12Xhq$react.useMemo(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        })
    , [
        props.suppressTextValueWarning
    ]);
    let collection = $12Xhq$reactstatelycollections.useCollection(props, factory, context, [
        filter
    ]);
    // Reset focused key if that item is deleted from the collection.
    $12Xhq$react.useEffect(()=>{
        if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    }, [
        collection,
        selectionState.focusedKey
    ]);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: new $12Xhq$reactstatelyselection.SelectionManager(collection, selectionState)
    };
}


var $c2295dabe3bb5bbb$exports = {};

$parcel$export($c2295dabe3bb5bbb$exports, "useSingleSelectListState", () => $c2295dabe3bb5bbb$export$e7f05e985daf4b5f);



function $c2295dabe3bb5bbb$export$e7f05e985daf4b5f(props) {
    let [selectedKey, setSelectedKey] = $12Xhq$reactstatelyutils.useControlledState(props.selectedKey, props.defaultSelectedKey ?? null, props.onSelectionChange);
    let selectedKeys = $12Xhq$react.useMemo(()=>selectedKey != null ? [
            selectedKey
        ] : []
    , [
        selectedKey
    ]);
    let { collection: collection , disabledKeys: disabledKeys , selectionManager: selectionManager  } = $0ca6fb377e78c376$export$2f645645f7bca764({
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



$parcel$exportWildcard(module.exports, $0ca6fb377e78c376$exports);
$parcel$exportWildcard(module.exports, $c2295dabe3bb5bbb$exports);
$parcel$exportWildcard(module.exports, $99881fbe031fe9b4$exports);


//# sourceMappingURL=main.js.map
