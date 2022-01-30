import {useState as $cQDsQ$useState} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3d49872db6c3ff6a$exports = {};

$parcel$export($3d49872db6c3ff6a$exports, "useDraggableCollectionState", () => $3d49872db6c3ff6a$export$29efd034f1d79f81);

function $3d49872db6c3ff6a$export$29efd034f1d79f81(props) {
    let [draggingKeys, setDraggingKeys] = $cQDsQ$useState(new Set());
    let getKeys = (key)=>{
        // The clicked item is always added to the drag. If it is selected, then all of the
        // other selected items are also dragged. If it is not selected, the only the clicked
        // item is dragged. This matches native macOS behavior.
        let keys = new Set(props.selectionManager.isSelected(key) ? props.selectionManager.selectedKeys : []);
        keys.add(key);
        return keys;
    };
    return {
        collection: props.collection,
        selectionManager: props.selectionManager,
        isDragging (key) {
            return draggingKeys.has(key);
        },
        getKeysForDrag: getKeys,
        getItems (key) {
            return props.getItems(getKeys(key));
        },
        renderPreview (key) {
            if (typeof props.renderPreview === 'function') return props.renderPreview(getKeys(key), key);
            return null;
        },
        startDrag (key, event) {
            let keys = getKeys(key);
            setDraggingKeys(keys);
            if (typeof props.onDragStart === 'function') props.onDragStart({
                ...event,
                keys: keys
            });
        },
        moveDrag (event) {
            if (typeof props.onDragMove === 'function') props.onDragMove({
                ...event,
                keys: draggingKeys
            });
        },
        endDrag (event) {
            if (typeof props.onDragEnd === 'function') props.onDragEnd({
                ...event,
                keys: draggingKeys
            });
            setDraggingKeys(new Set());
        }
    };
}


var $bffaa0c5c19165a2$exports = {};

$parcel$export($bffaa0c5c19165a2$exports, "useDroppableCollectionState", () => $bffaa0c5c19165a2$export$926850f6ecef79d0);

function $bffaa0c5c19165a2$export$926850f6ecef79d0(props) {
    let [target1, setTarget] = $cQDsQ$useState(null);
    let getOppositeTarget = (target)=>{
        if (target.dropPosition === 'before') {
            let key = props.collection.getKeyBefore(target.key);
            return key != null ? {
                type: 'item',
                key: key,
                dropPosition: 'after'
            } : null;
        } else if (target.dropPosition === 'after') {
            let key = props.collection.getKeyAfter(target.key);
            return key != null ? {
                type: 'item',
                key: key,
                dropPosition: 'before'
            } : null;
        }
    };
    return {
        collection: props.collection,
        selectionManager: props.selectionManager,
        target: target1,
        setTarget (newTarget) {
            if (this.isDropTarget(newTarget)) return;
            if (target1 && typeof props.onDropExit === 'function') props.onDropExit({
                type: 'dropexit',
                x: 0,
                y: 0,
                target: target1
            });
            if (newTarget && typeof props.onDropEnter === 'function') props.onDropEnter({
                type: 'dropenter',
                x: 0,
                y: 0,
                target: newTarget
            });
            setTarget(newTarget);
        },
        isDropTarget (dropTarget) {
            if ($bffaa0c5c19165a2$var$isEqualDropTarget(dropTarget, target1)) return true;
            // Check if the targets point at the same point between two items, one referring before, and the other after.
            if (dropTarget?.type === 'item' && target1?.type === 'item' && dropTarget.key !== target1.key && dropTarget.dropPosition !== target1.dropPosition && dropTarget.dropPosition !== 'on' && target1.dropPosition !== 'on') return $bffaa0c5c19165a2$var$isEqualDropTarget(getOppositeTarget(dropTarget), target1) || $bffaa0c5c19165a2$var$isEqualDropTarget(dropTarget, getOppositeTarget(target1));
            return false;
        },
        getDropOperation (target, types, allowedOperations) {
            return typeof props.getDropOperation === 'function' ? props.getDropOperation(target, types, allowedOperations) : allowedOperations[0];
        }
    };
}
function $bffaa0c5c19165a2$var$isEqualDropTarget(a, b) {
    if (!a) return !b;
    switch(a.type){
        case 'root':
            return b?.type === 'root';
        case 'item':
            return b?.type === 'item' && b?.key === a.key && b?.dropPosition === a.dropPosition;
    }
}




export {$3d49872db6c3ff6a$export$29efd034f1d79f81 as useDraggableCollectionState, $bffaa0c5c19165a2$export$926850f6ecef79d0 as useDroppableCollectionState};
//# sourceMappingURL=module.js.map
