import {useRef as $lOBbn$useRef, useState as $lOBbn$useState, useMemo as $lOBbn$useMemo} from "react";
import {useControlledState as $lOBbn$useControlledState} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a6edc5e0a08f1930$exports = {};

$parcel$export($a6edc5e0a08f1930$exports, "useMultipleSelectionState", () => $a6edc5e0a08f1930$export$253fe78d46329472);

class $297acaaea274be2f$export$52baac22726c72bf extends Set {
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof $297acaaea274be2f$export$52baac22726c72bf) {
            this.anchorKey = anchorKey || keys.anchorKey;
            this.currentKey = currentKey || keys.currentKey;
        } else {
            this.anchorKey = anchorKey;
            this.currentKey = currentKey;
        }
    }
}



function $a6edc5e0a08f1930$var$equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function $a6edc5e0a08f1930$export$253fe78d46329472(props) {
    let { selectionMode: selectionMode = 'none' , disallowEmptySelection: disallowEmptySelection , allowDuplicateSelectionEvents: allowDuplicateSelectionEvents  } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = $lOBbn$useRef(false);
    let [, setFocused] = $lOBbn$useState(false);
    let focusedKeyRef = $lOBbn$useRef(null);
    let childFocusStrategyRef = $lOBbn$useRef(null);
    let [, setFocusedKey] = $lOBbn$useState(null);
    let selectedKeysProp = $lOBbn$useMemo(()=>$a6edc5e0a08f1930$var$convertSelection(props.selectedKeys)
    , [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = $lOBbn$useMemo(()=>$a6edc5e0a08f1930$var$convertSelection(props.defaultSelectedKeys, new $297acaaea274be2f$export$52baac22726c72bf())
    , [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = $lOBbn$useControlledState(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = $lOBbn$useMemo(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = $lOBbn$useState(props.selectionBehavior || 'toggle');
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (props.selectionBehavior === 'replace' && selectionBehavior === 'toggle' && typeof selectedKeys === 'object' && selectedKeys.size === 0) setSelectionBehavior('replace');
    return {
        selectionMode: selectionMode,
        disallowEmptySelection: disallowEmptySelection,
        selectionBehavior: selectionBehavior,
        setSelectionBehavior: setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = 'first') {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys: selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !$a6edc5e0a08f1930$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp
    };
}
function $a6edc5e0a08f1930$var$convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === 'all' ? 'all' : new $297acaaea274be2f$export$52baac22726c72bf(selection);
}


var $124dcf7158c33c89$exports = {};

$parcel$export($124dcf7158c33c89$exports, "SelectionManager", () => $124dcf7158c33c89$export$6c8a5aaad13c9852);

class $124dcf7158c33c89$export$6c8a5aaad13c9852 {
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        this.allowsCellSelection = options?.allowsCellSelection ?? false;
        this._isSelectAll = null;
    }
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === 'none') return false;
        key = this.getKey(key);
        return this.state.selectedKeys === 'all' ? !this.state.disabledKeys.has(key) : this.state.selectedKeys.has(key);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === 'all') return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k)
        );
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || item?.index < first.index) first = item;
        }
        return first?.key;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || item?.index > last.index) last = item;
        }
        return last?.key;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            this.replaceSelection(toKey);
            return;
        }
        toKey = this.getKey(toKey);
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === 'all') selection = new $297acaaea274be2f$export$52baac22726c72bf([
            toKey
        ], toKey, toKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            let anchorKey = selectedKeys.anchorKey || toKey;
            selection = new $297acaaea274be2f$export$52baac22726c72bf(selectedKeys, anchorKey, toKey);
            for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey))selection.delete(key);
            for (let key1 of this.getKeyRange(toKey, anchorKey))if (!this.state.disabledKeys.has(key1)) selection.add(key1);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if (fromItem.index <= toItem.index) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        let keys = [];
        let key = from;
        while(key){
            let item = this.collection.getItem(key);
            if (item && item.type === 'item' || item.type === 'cell' && this.allowsCellSelection) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) // ¯\_(ツ)_/¯
        return key;
        // If cell selection is allowed, just return the key.
        if (item.type === 'cell' && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item.type !== 'item' && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== 'item') return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single' && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        key = this.getKey(key);
        if (key == null) return;
        let keys = new $297acaaea274be2f$export$52baac22726c72bf(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(key)) keys.delete(key);
        else {
            keys.add(key);
            keys.anchorKey = key;
            keys.currentKey = key;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === 'none') return;
        key = this.getKey(key);
        if (key == null) return;
        this.state.setSelectedKeys(new $297acaaea274be2f$export$52baac22726c72bf([
            key
        ], key, key));
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === 'none') return;
        let selection = new $297acaaea274be2f$export$52baac22726c72bf();
        for (let key of keys){
            key = this.getKey(key);
            if (key != null) {
                selection.add(key);
                if (this.selectionMode === 'single') break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        let keys = [];
        let addKeys = (key)=>{
            while(key){
                if (!this.state.disabledKeys.has(key)) {
                    let item = this.collection.getItem(key);
                    if (item.type === 'item') keys.push(key);
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if (item.hasChildNodes && (this.allowsCellSelection || item.type !== 'item')) addKeys([
                        ...item.childNodes
                    ][0].key);
                }
                key = this.collection.getKeyAfter(key);
            }
        };
        addKeys(this.collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (this.selectionMode === 'multiple') this.state.setSelectedKeys('all');
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $297acaaea274be2f$export$52baac22726c72bf());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === 'toggle' || e && (e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
        this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key2 of selectedKeys){
            if (!selection.has(key2)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(key)) return false;
        let item = this.collection.getItem(key);
        if (!item || item.type === 'cell' && !this.allowsCellSelection) return false;
        return true;
    }
}


var $17e2bafb460fca7f$exports = {};




export {$a6edc5e0a08f1930$export$253fe78d46329472 as useMultipleSelectionState, $124dcf7158c33c89$export$6c8a5aaad13c9852 as SelectionManager};
//# sourceMappingURL=module.js.map
