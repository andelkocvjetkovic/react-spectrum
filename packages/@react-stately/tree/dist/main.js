var $1Tjyx$react = require("react");
var $1Tjyx$reactstatelyselection = require("@react-stately/selection");
var $1Tjyx$reactstatelycollections = require("@react-stately/collections");
var $1Tjyx$reactstatelyutils = require("@react-stately/utils");

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
var $4845ad03dd3d020b$exports = {};

$parcel$export($4845ad03dd3d020b$exports, "useTreeState", () => $4845ad03dd3d020b$export$728d6ba534403756);


class $adbbafff739f2c10$export$863faf230ee2118a {
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




function $4845ad03dd3d020b$export$728d6ba534403756(props) {
    let [expandedKeys, setExpandedKeys] = $1Tjyx$reactstatelyutils.useControlledState(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange);
    let selectionState = $1Tjyx$reactstatelyselection.useMultipleSelectionState(props);
    let disabledKeys = $1Tjyx$react.useMemo(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let tree = $1Tjyx$reactstatelycollections.useCollection(props, (nodes)=>new $adbbafff739f2c10$export$863faf230ee2118a(nodes, {
            expandedKeys: expandedKeys
        })
    , null, [
        expandedKeys
    ]);
    // Reset focused key if that item is deleted from the collection.
    $1Tjyx$react.useEffect(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys($4845ad03dd3d020b$var$toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys: expandedKeys,
        disabledKeys: disabledKeys,
        toggleKey: onToggle,
        selectionManager: new $1Tjyx$reactstatelyselection.SelectionManager(tree, selectionState)
    };
}
function $4845ad03dd3d020b$var$toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}


$parcel$exportWildcard(module.exports, $4845ad03dd3d020b$exports);


//# sourceMappingURL=main.js.map
