import {useReducer as $gP58I$useReducer, useEffect as $gP58I$useEffect, useState as $gP58I$useState, useMemo as $gP58I$useMemo} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $43e7523904d33223$exports = {};

$parcel$export($43e7523904d33223$exports, "useAsyncList", () => $43e7523904d33223$export$bc3384a35de93d66);

function $4fcdc7e415ce1487$export$762f73dccccd255d(options) {
    let { initialItems: initialItems = [] , initialSelectedKeys: initialSelectedKeys , getKey: getKey = (item)=>item.id || item.key
     , filter: filter , initialFilterText: initialFilterText = ''  } = options;
    // Store both items and filteredItems in state so we can go back to the unfiltered list
    let [state, setState] = $gP58I$useState({
        items: initialItems,
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys || []),
        filterText: initialFilterText
    });
    let filteredItems = $gP58I$useMemo(()=>filter ? state.items.filter((item)=>filter(item, state.filterText)
        ) : state.items
    , [
        state.items,
        state.filterText,
        filter
    ]);
    return {
        ...state,
        items: filteredItems,
        ...$4fcdc7e415ce1487$export$79c0c687a5963b0a({
            getKey: getKey
        }, setState),
        getItem (key) {
            return state.items.find((item)=>getKey(item) === key
            );
        }
    };
}
function $4fcdc7e415ce1487$export$79c0c687a5963b0a(opts, dispatch) {
    let { cursor: cursor , getKey: getKey  } = opts;
    return {
        setSelectedKeys (selectedKeys) {
            dispatch((state)=>({
                    ...state,
                    selectedKeys: selectedKeys
                })
            );
        },
        setFilterText (filterText) {
            dispatch((state)=>({
                    ...state,
                    filterText: filterText
                })
            );
        },
        insert (index, ...values) {
            dispatch((state)=>$4fcdc7e415ce1487$var$insert(state, index, ...values)
            );
        },
        insertBefore (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key
                );
                if (index === -1) return;
                return $4fcdc7e415ce1487$var$insert(state, index, ...values);
            });
        },
        insertAfter (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key
                );
                if (index === -1) return;
                return $4fcdc7e415ce1487$var$insert(state, index + 1, ...values);
            });
        },
        prepend (...values) {
            dispatch((state)=>$4fcdc7e415ce1487$var$insert(state, 0, ...values)
            );
        },
        append (...values) {
            dispatch((state)=>$4fcdc7e415ce1487$var$insert(state, state.items.length, ...values)
            );
        },
        remove (...keys) {
            dispatch((state)=>{
                let keySet = new Set(keys);
                let items = state.items.filter((item)=>!keySet.has(getKey(item))
                );
                let selection = 'all';
                if (state.selectedKeys !== 'all') {
                    selection = new Set(state.selectedKeys);
                    for (let key of keys)selection.delete(key);
                }
                if (cursor == null && items.length === 0) selection = new Set();
                return {
                    ...state,
                    items: items,
                    selectedKeys: selection
                };
            });
        },
        removeSelectedItems () {
            dispatch((state)=>{
                if (state.selectedKeys === 'all') return {
                    ...state,
                    items: [],
                    selectedKeys: new Set()
                };
                let selectedKeys = state.selectedKeys;
                let items = state.items.filter((item)=>!selectedKeys.has(getKey(item))
                );
                return {
                    ...state,
                    items: items,
                    selectedKeys: new Set()
                };
            });
        },
        move (key, toIndex) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key
                );
                if (index === -1) return state;
                let copy = state.items.slice();
                let [item1] = copy.splice(index, 1);
                copy.splice(toIndex, 0, item1);
                return {
                    ...state,
                    items: copy
                };
            });
        },
        moveBefore (key1, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key1
                );
                if (toIndex === -1) return state;
                // Find indices of keys to move. Sort them so that the order in the list is retained.
                let indices = keys.map((key)=>state.items.findIndex((item)=>getKey(item) === key
                    )
                ).sort();
                return $4fcdc7e415ce1487$var$move(state, indices, toIndex);
            });
        },
        moveAfter (key2, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key2
                );
                if (toIndex === -1) return state;
                let indices = keys.map((key)=>state.items.findIndex((item)=>getKey(item) === key
                    )
                ).sort();
                return $4fcdc7e415ce1487$var$move(state, indices, toIndex + 1);
            });
        },
        update (key, newValue) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key
                );
                if (index === -1) return state;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, index),
                        newValue,
                        ...state.items.slice(index + 1)
                    ]
                };
            });
        }
    };
}
function $4fcdc7e415ce1487$var$insert(state, index, ...values) {
    return {
        ...state,
        items: [
            ...state.items.slice(0, index),
            ...values,
            ...state.items.slice(index)
        ]
    };
}
function $4fcdc7e415ce1487$var$move(state, indices, toIndex) {
    // Shift the target down by the number of items being moved from before the target
    for (let index of indices)if (index < toIndex) toIndex--;
    let moves = indices.map((from)=>({
            from: from,
            to: toIndex++
        })
    );
    // Shift later from indices down if they have a larger index
    for(let i = 0; i < moves.length; i++){
        let a = moves[i].from;
        for(let j = i; j < moves.length; j++){
            let b = moves[j].from;
            if (b > a) moves[j].from--;
        }
    }
    // Interleave the moves so they can be applied one by one rather than all at once
    for(let i1 = 0; i1 < moves.length; i1++){
        let a = moves[i1];
        for(let j = moves.length - 1; j > i1; j--){
            let b = moves[j];
            if (b.from < a.to) a.to++;
            else b.from++;
        }
    }
    let copy = state.items.slice();
    for (let move of moves){
        let [item] = copy.splice(move.from, 1);
        copy.splice(move.to, 0, item);
    }
    return {
        ...state,
        items: copy
    };
}



function $43e7523904d33223$var$reducer(data, action) {
    let selectedKeys;
    switch(data.state){
        case 'idle':
        case 'error':
            switch(action.type){
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: action.abortController
                    };
                case 'update':
                    return {
                        ...data,
                        ...action.updater(data)
                    };
                case 'success':
                case 'error':
                    return data;
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loading':
        case 'sorting':
        case 'filtering':
            switch(action.type){
                case 'success':
                    // Ignore if there is a newer abortcontroller in state.
                    // This means that multiple requests were going at once.
                    // We want to take only the latest result.
                    if (action.abortController !== data.abortController) return data;
                    selectedKeys = action.selectedKeys ?? data.selectedKeys;
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: 'idle',
                        items: [
                            ...action.items
                        ],
                        selectedKeys: selectedKeys === 'all' ? 'all' : new Set(selectedKeys),
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: null,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error,
                        abortController: null
                    };
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    // We're already loading, and another load was triggered at the same time.
                    // We need to abort the previous load and start a new one.
                    data.abortController.abort();
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'update':
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...action.updater(data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loadingMore':
            switch(action.type){
                case 'success':
                    selectedKeys = data.selectedKeys === 'all' || action.selectedKeys === 'all' ? 'all' : new Set([
                        ...data.selectedKeys,
                        ...action.selectedKeys ?? []
                    ]);
                    // Append the new items
                    return {
                        ...data,
                        state: 'idle',
                        items: [
                            ...data.items,
                            ...action.items
                        ],
                        selectedKeys: selectedKeys,
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: null,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error
                    };
                case 'loading':
                case 'sorting':
                case 'filtering':
                    // We're already loading more, and another load was triggered at the same time.
                    // We need to abort the previous load more and start a new one.
                    data.abortController.abort();
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'loadingMore':
                    // If already loading more and another loading more is triggered, abort the new load more since
                    // it is a duplicate request since the cursor hasn't been updated.
                    // Do not overwrite the data.abortController
                    action.abortController.abort();
                    return data;
                case 'update':
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...action.updater(data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        default:
            throw new Error(`Invalid state "${data.state}"`);
    }
}
function $43e7523904d33223$export$bc3384a35de93d66(options) {
    const { load: load , sort: sort , initialSelectedKeys: initialSelectedKeys , initialSortDescriptor: initialSortDescriptor , getKey: getKey = (item)=>item.id || item.key
     , initialFilterText: initialFilterText = ''  } = options;
    let [data, dispatch] = $gP58I$useReducer($43e7523904d33223$var$reducer, {
        state: 'idle',
        error: null,
        items: [],
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys),
        sortDescriptor: initialSortDescriptor,
        filterText: initialFilterText
    });
    const dispatchFetch = async (action, fn)=>{
        let abortController = new AbortController();
        try {
            dispatch({
                ...action,
                abortController: abortController
            });
            let previousFilterText = action.filterText ?? data.filterText;
            let response = await fn({
                items: data.items.slice(),
                selectedKeys: data.selectedKeys,
                sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                signal: abortController.signal,
                cursor: action.type === 'loadingMore' ? data.cursor : null,
                filterText: previousFilterText
            });
            let filterText = response.filterText ?? previousFilterText;
            dispatch({
                type: 'success',
                ...response,
                abortController: abortController
            });
            // Fetch a new filtered list if filterText is updated via `load` response func rather than list.setFilterText
            // Only do this if not aborted (e.g. user triggers another filter action before load completes)
            if (filterText && filterText !== previousFilterText && !abortController.signal.aborted) dispatchFetch({
                type: 'filtering',
                filterText: filterText
            }, load);
        } catch (e) {
            dispatch({
                type: 'error',
                error: e,
                abortController: abortController
            });
        }
    };
    $gP58I$useEffect(()=>{
        dispatchFetch({
            type: 'loading'
        }, load);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        items: data.items,
        selectedKeys: data.selectedKeys,
        sortDescriptor: data.sortDescriptor,
        isLoading: data.state === 'loading' || data.state === 'loadingMore' || data.state === 'sorting' || data.state === 'filtering',
        loadingState: data.state,
        error: data.error,
        filterText: data.filterText,
        getItem (key) {
            return data.items.find((item)=>getKey(item) === key
            );
        },
        reload () {
            dispatchFetch({
                type: 'loading'
            }, load);
        },
        loadMore () {
            // Ignore if already loading more or if performing server side filtering.
            if (data.state === 'loadingMore' || data.state === 'filtering' || data.cursor == null) return;
            dispatchFetch({
                type: 'loadingMore'
            }, load);
        },
        sort (sortDescriptor) {
            dispatchFetch({
                type: 'sorting',
                sortDescriptor: sortDescriptor
            }, sort || load);
        },
        ...$4fcdc7e415ce1487$export$79c0c687a5963b0a({
            ...options,
            getKey: getKey,
            cursor: data.cursor
        }, (fn)=>{
            dispatch({
                type: 'update',
                updater: fn
            });
        }),
        setFilterText (filterText) {
            dispatchFetch({
                type: 'filtering',
                filterText: filterText
            }, load);
        }
    };
}


var $e581bc3a8fdd032b$exports = {};

$parcel$export($e581bc3a8fdd032b$exports, "useTreeData", () => $e581bc3a8fdd032b$export$d14e1352e21f4a16);

function $e581bc3a8fdd032b$export$d14e1352e21f4a16(options) {
    let { initialItems: initialItems1 = [] , initialSelectedKeys: initialSelectedKeys , getKey: getKey = (item)=>item.id || item.key
     , getChildren: getChildren = (item)=>item.children
      } = options;
    let map = $gP58I$useMemo(()=>new Map()
    , []);
    // We only want to compute this on initial render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let initialNodes = $gP58I$useMemo(()=>buildTree(initialItems1)
    , []);
    let [items1, setItems] = $gP58I$useState(initialNodes);
    let [selectedKeys, setSelectedKeys] = $gP58I$useState(new Set(initialSelectedKeys || []));
    function buildTree(initialItems = [], parentKey) {
        return initialItems.map((item)=>{
            let node = {
                key: getKey(item),
                parentKey: parentKey,
                value: item,
                children: null
            };
            node.children = buildTree(getChildren(item), node.key);
            map.set(node.key, node);
            return node;
        });
    }
    function updateTree(items, key, update) {
        let node = map.get(key);
        if (!node) return items;
        // Create a new node. If null, then delete the node, otherwise replace.
        let newNode = update(node);
        if (newNode == null) deleteNode(node);
        else addNode(newNode);
        // Walk up the tree and update each parent to refer to the new chilren.
        while(node.parentKey){
            let nextParent = map.get(node.parentKey);
            let copy = {
                key: nextParent.key,
                parentKey: nextParent.parentKey,
                value: nextParent.value,
                children: null
            };
            let children = nextParent.children;
            if (newNode == null) children = children.filter((c)=>c !== node
            );
            copy.children = children.map((child)=>{
                if (child === node) return newNode;
                return child;
            });
            map.set(copy.key, copy);
            newNode = copy;
            node = nextParent;
        }
        if (newNode == null) items = items.filter((c)=>c !== node
        );
        return items.map((item)=>{
            if (item === node) return newNode;
            return item;
        });
    }
    function addNode(node) {
        map.set(node.key, node);
        for (let child of node.children)addNode(child);
    }
    function deleteNode(node) {
        map.delete(node.key);
        for (let child of node.children)deleteNode(child);
    }
    return {
        items: items1,
        selectedKeys: selectedKeys,
        setSelectedKeys: setSelectedKeys,
        getItem (key) {
            return map.get(key);
        },
        insert (parentKey, index, ...values) {
            setItems((items)=>{
                let nodes = buildTree(values, parentKey);
                // If parentKey is null, insert into the root.
                if (parentKey == null) return [
                    ...items.slice(0, index),
                    ...nodes,
                    ...items.slice(index)
                ];
                // Otherwise, update the parent node and its ancestors.
                return updateTree(items, parentKey, (parentNode)=>({
                        key: parentNode.key,
                        parentKey: parentNode.parentKey,
                        value: parentNode.value,
                        children: [
                            ...parentNode.children.slice(0, index),
                            ...nodes,
                            ...parentNode.children.slice(index)
                        ]
                    })
                );
            });
        },
        insertBefore (key, ...values) {
            let node = map.get(key);
            if (!node) return;
            let parentNode = map.get(node.parentKey);
            let nodes = parentNode ? parentNode.children : items1;
            let index = nodes.indexOf(node);
            this.insert(parentNode?.key, index, ...values);
        },
        insertAfter (key, ...values) {
            let node = map.get(key);
            if (!node) return;
            let parentNode = map.get(node.parentKey);
            let nodes = parentNode ? parentNode.children : items1;
            let index = nodes.indexOf(node);
            this.insert(parentNode?.key, index + 1, ...values);
        },
        prepend (parentKey, ...values) {
            this.insert(parentKey, 0, ...values);
        },
        append (parentKey, ...values) {
            if (parentKey == null) this.insert(null, items1.length, ...values);
            else {
                let parentNode = map.get(parentKey);
                if (!parentNode) return;
                this.insert(parentKey, parentNode.children.length, ...values);
            }
        },
        remove (...keys) {
            let newItems = items1;
            for (let key of keys)newItems = updateTree(newItems, key, ()=>null
            );
            setItems(newItems);
            let selection = new Set(selectedKeys);
            for (let key1 of selectedKeys)if (!map.has(key1)) selection.delete(key1);
            setSelectedKeys(selection);
        },
        removeSelectedItems () {
            this.remove(...selectedKeys);
        },
        move (key, toParentKey, index) {
            setItems((items)=>{
                let node = map.get(key);
                if (!node) return items;
                items = updateTree(items, key, ()=>null
                );
                const movedNode = {
                    ...node,
                    parentKey: toParentKey
                };
                return updateTree(items, toParentKey, (parentNode)=>({
                        key: parentNode.key,
                        parentKey: parentNode.parentKey,
                        value: parentNode.value,
                        children: [
                            ...parentNode.children.slice(0, index),
                            movedNode,
                            ...parentNode.children.slice(index)
                        ]
                    })
                );
            });
        },
        update (oldKey, newValue) {
            setItems((items)=>updateTree(items, oldKey, (oldNode)=>{
                    let node = {
                        key: oldNode.key,
                        parentKey: oldNode.parentKey,
                        value: newValue,
                        children: null
                    };
                    node.children = buildTree(getChildren(newValue), node.key);
                    return node;
                })
            );
        }
    };
}





export {$4fcdc7e415ce1487$export$762f73dccccd255d as useListData, $43e7523904d33223$export$bc3384a35de93d66 as useAsyncList, $e581bc3a8fdd032b$export$d14e1352e21f4a16 as useTreeData};
//# sourceMappingURL=module.js.map
