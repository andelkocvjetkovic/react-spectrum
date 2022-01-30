import {useRef as $eBeNp$useRef, useState as $eBeNp$useState, useEffect as $eBeNp$useEffect, useCallback as $eBeNp$useCallback} from "react";
import $eBeNp$reactdom from "react-dom";
import {useDescription as $eBeNp$useDescription, useId as $eBeNp$useId, useLayoutEffect as $eBeNp$useLayoutEffect, mergeProps as $eBeNp$mergeProps, getScrollParent as $eBeNp$getScrollParent, isWebKit as $eBeNp$isWebKit, isIOS as $eBeNp$isIOS, chain as $eBeNp$chain} from "@react-aria/utils";
import {useMessageFormatter as $eBeNp$useMessageFormatter} from "@react-aria/i18n";
import {announce as $eBeNp$announce} from "@react-aria/live-announcer";
import {ariaHideOutside as $eBeNp$ariaHideOutside} from "@react-aria/overlays";
import {useInteractionModality as $eBeNp$useInteractionModality, getInteractionModality as $eBeNp$getInteractionModality, setInteractionModality as $eBeNp$setInteractionModality, useFocus as $eBeNp$useFocus} from "@react-aria/interactions";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2c10c4496b29acfa$exports = {};

$parcel$export($2c10c4496b29acfa$exports, "useDrag", () => $2c10c4496b29acfa$export$7941f8aafa4b6021);



let $d9fbf74f15b7641a$export$60b7b4bcf3903d8e;
(function($d9fbf74f15b7641a$export$60b7b4bcf3903d8e) {
    $d9fbf74f15b7641a$export$60b7b4bcf3903d8e[$d9fbf74f15b7641a$export$60b7b4bcf3903d8e["none"] = 0] = "none";
    $d9fbf74f15b7641a$export$60b7b4bcf3903d8e[$d9fbf74f15b7641a$export$60b7b4bcf3903d8e["cancel"] = 0] = "cancel";
    $d9fbf74f15b7641a$export$60b7b4bcf3903d8e[$d9fbf74f15b7641a$export$60b7b4bcf3903d8e["move"] = 1] = "move";
    $d9fbf74f15b7641a$export$60b7b4bcf3903d8e[$d9fbf74f15b7641a$export$60b7b4bcf3903d8e["copy"] = 2] = "copy";
    $d9fbf74f15b7641a$export$60b7b4bcf3903d8e[$d9fbf74f15b7641a$export$60b7b4bcf3903d8e["link"] = 4] = "link";
    $d9fbf74f15b7641a$export$60b7b4bcf3903d8e[$d9fbf74f15b7641a$export$60b7b4bcf3903d8e["all"] = 7] = "all";
})($d9fbf74f15b7641a$export$60b7b4bcf3903d8e || ($d9fbf74f15b7641a$export$60b7b4bcf3903d8e = {
}));
const $d9fbf74f15b7641a$export$9bbdfc78cf083e16 = {
    ...$d9fbf74f15b7641a$export$60b7b4bcf3903d8e,
    copyMove: $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.copy | $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.move,
    copyLink: $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.copy | $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.link,
    linkMove: $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.link | $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.move,
    all: $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.all,
    uninitialized: $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.all
};
const $d9fbf74f15b7641a$export$dd0165308d8bff45 = $d9fbf74f15b7641a$var$invert($d9fbf74f15b7641a$export$9bbdfc78cf083e16);
const $d9fbf74f15b7641a$export$d7ebf00f36b7a95e = $d9fbf74f15b7641a$var$invert($d9fbf74f15b7641a$export$60b7b4bcf3903d8e);
const $d9fbf74f15b7641a$export$608ecc6f1b23c35d = {
    none: 'cancel',
    link: 'link',
    copy: 'copy',
    move: 'move'
};
const $d9fbf74f15b7641a$export$5eacb0769d26d3b2 = $d9fbf74f15b7641a$var$invert($d9fbf74f15b7641a$export$608ecc6f1b23c35d);
function $d9fbf74f15b7641a$var$invert(object) {
    let res = {
    };
    for(let key in object)res[object[key]] = key;
    return res;
}
const $d9fbf74f15b7641a$export$4a7729b856e9a690 = new Set([
    'text/plain',
    'text/uri-list',
    'text/html'
]);
const $d9fbf74f15b7641a$export$fd9f9fc120c5402d = 'application/vnd.react-aria.items+json';
const $d9fbf74f15b7641a$export$f8fc6581787339b3 = 'application/octet-stream';




const $67f3878ab73216e8$var$droppableCollectionIds = new WeakMap();
function $67f3878ab73216e8$export$b1601eb39394a581(state) {
    let id = $eBeNp$useId();
    $67f3878ab73216e8$var$droppableCollectionIds.set(state, id);
    return id;
}
function $67f3878ab73216e8$export$3093291712f09a77(state) {
    let id = $67f3878ab73216e8$var$droppableCollectionIds.get(state);
    if (!id) throw new Error('Droppable item outside a droppable collection');
    return id;
}
function $67f3878ab73216e8$export$e1d41611756c6326(items) {
    let types = new Set();
    for (let item of items)for (let type of Object.keys(item))types.add(type);
    return types;
}
function $67f3878ab73216e8$var$mapModality(modality) {
    if (!modality) modality = 'virtual';
    if (modality === 'pointer') modality = 'virtual';
    if (modality === 'virtual' && 'ontouchstart' in window) modality = 'touch';
    return modality;
}
function $67f3878ab73216e8$export$49bac5d6d4b352ea() {
    return $67f3878ab73216e8$var$mapModality($eBeNp$useInteractionModality());
}
function $67f3878ab73216e8$export$1fb2158d224b542c() {
    return $67f3878ab73216e8$var$mapModality($eBeNp$getInteractionModality());
}
function $67f3878ab73216e8$export$f9c1490890ddd063(dataTransfer, items) {
    // The data transfer API doesn't support more than one item of a given type at once.
    // In addition, only a small set of types are supported natively for transfer between applications.
    // We allow for both multiple items, as well as multiple representations of a single item.
    // In order to make our API work with the native API, we serialize all items to JSON and
    // store as a single native item. We only need to do this if there is more than one item
    // of the same type, or if an item has more than one representation. Otherwise the native
    // API is sufficient.
    //
    // The DataTransferItemList API also theoretically supports adding files, which would enable
    // dragging binary data out of the browser onto the user's desktop for example. Unfortunately,
    // this does not currently work in any browser, so it is not currently supported by our API.
    // See e.g. https://bugs.chromium.org/p/chromium/issues/detail?id=438479.
    let groupedByType = new Map();
    let needsCustomData = false;
    let customData = [];
    for (let item of items){
        let types = Object.keys(item);
        if (types.length > 1) needsCustomData = true;
        let dataByType = {
        };
        for (let type of types){
            let typeItems = groupedByType.get(type);
            if (!typeItems) {
                typeItems = [];
                groupedByType.set(type, typeItems);
            } else needsCustomData = true;
            let data = item[type];
            dataByType[type] = data;
            typeItems.push(data);
        }
        customData.push(dataByType);
    }
    for (let [type, items1] of groupedByType)if ($d9fbf74f15b7641a$export$4a7729b856e9a690.has(type)) {
        // Only one item of a given type can be set on a data transfer.
        // Join all of the items together separated by newlines.
        let data = items1.join('\n');
        dataTransfer.items.add(data, type);
    } else // Set data to the first item so we have access to the list of types.
    dataTransfer.items.add(items1[0], type);
    if (needsCustomData) {
        let data = JSON.stringify(customData);
        dataTransfer.items.add(data, $d9fbf74f15b7641a$export$fd9f9fc120c5402d);
    }
}
class $67f3878ab73216e8$export$7f04ce188c91447c {
    constructor(dataTransfer){
        this.types = new Set();
        let hasFiles = false;
        for (let item of dataTransfer.items)if (item.type !== $d9fbf74f15b7641a$export$fd9f9fc120c5402d) {
            if (item.kind === 'file') hasFiles = true;
            if (item.type) this.types.add(item.type);
            else // Files with unknown types or extensions that don't map to a known mime type
            // are sometimes exposed as an empty string by the browser. Map to a generic
            // mime type instead. Note that this could also be a directory as there's no
            // way to determine if something is a file or directory until drop.
            this.types.add($d9fbf74f15b7641a$export$f8fc6581787339b3);
        }
        // In Safari, when dragging files, the dataTransfer.items list is empty, but dataTransfer.types contains "Files".
        // Unfortunately, this doesn't tell us what types of files the user is dragging, so we need to assume that any
        // type the user checks for is included. See https://bugs.webkit.org/show_bug.cgi?id=223517.
        this.includesUnknownTypes = !hasFiles && dataTransfer.types.includes('Files');
    }
    has(type) {
        if (this.includesUnknownTypes) return true;
        return this.types.has(type);
    }
}
function $67f3878ab73216e8$export$d9e760437831f8b3(dataTransfer) {
    let items = [];
    // If our custom drag type is available, use that. This is a JSON serialized
    // representation of all items in the drag, set when there are multiple items
    // of the same type, or an individual item has multiple representations.
    let hasCustomType = false;
    if (dataTransfer.types.includes($d9fbf74f15b7641a$export$fd9f9fc120c5402d)) try {
        let data = dataTransfer.getData($d9fbf74f15b7641a$export$fd9f9fc120c5402d);
        let parsed = JSON.parse(data);
        for (let item of parsed)items.push({
            kind: 'text',
            types: new Set(Object.keys(item)),
            getText: (type)=>Promise.resolve(item[type])
        });
        hasCustomType = true;
    } catch (e) {
    // ignore
    }
    // Otherwise, map native drag items to items of a single representation.
    if (!hasCustomType) {
        let stringItems = new Map();
        for (let item of dataTransfer.items){
            if (item.kind === 'string') // The data for all formats must be read here because the data transfer gets
            // cleared out after the event handler finishes. If the item has an empty string
            // as a type, the mime type is unknown. Map to a generic mime type instead.
            stringItems.set(item.type || $d9fbf74f15b7641a$export$f8fc6581787339b3, dataTransfer.getData(item.type));
            else if (item.kind === 'file') {
                // Despite the name, webkitGetAsEntry is also implemented in Firefox and Edge.
                // In the future, we may use getAsFileSystemHandle instead, but that's currently
                // only implemented in Chrome.
                if (typeof item.webkitGetAsEntry === 'function') {
                    let entry = item.webkitGetAsEntry();
                    if (!entry) continue;
                    if (entry.isFile) items.push($67f3878ab73216e8$var$createFileItem(item.getAsFile()));
                    else if (entry.isDirectory) items.push($67f3878ab73216e8$var$createDirectoryItem(entry));
                } else // Assume it's a file.
                items.push($67f3878ab73216e8$var$createFileItem(item.getAsFile()));
            }
        }
        // All string items are different representations of the same item. There's no way to have
        // multiple string items at once in the current DataTransfer API.
        if (stringItems.size > 0) items.push({
            kind: 'text',
            types: new Set(stringItems.keys()),
            getText: (type)=>Promise.resolve(stringItems.get(type))
        });
    }
    return items;
}
function $67f3878ab73216e8$var$blobToString(blob) {
    if (typeof blob.text === 'function') return blob.text();
    // Safari doesn't have the Blob#text() method yet...
    return new Promise((resolve, reject)=>{
        let reader = new FileReader;
        reader.onload = ()=>{
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(blob);
    });
}
function $67f3878ab73216e8$var$createFileItem(file) {
    return {
        kind: 'file',
        type: file.type || $d9fbf74f15b7641a$export$f8fc6581787339b3,
        name: file.name,
        getText: ()=>$67f3878ab73216e8$var$blobToString(file)
        ,
        getFile: ()=>Promise.resolve(file)
    };
}
function $67f3878ab73216e8$var$createDirectoryItem(entry) {
    return {
        kind: 'directory',
        name: entry.name,
        getEntries: ()=>$67f3878ab73216e8$var$getEntries(entry)
    };
}
async function* $67f3878ab73216e8$var$getEntries(item) {
    let reader = item.createReader();
    // We must call readEntries repeatedly because there may be a limit to the
    // number of entries that are returned at once.
    let entries;
    do {
        entries = await new Promise((resolve, reject)=>{
            reader.readEntries(resolve, reject);
        });
        for (let entry of entries){
            if (entry.isFile) {
                let file = await $67f3878ab73216e8$var$getEntryFile(entry);
                yield $67f3878ab73216e8$var$createFileItem(file);
            } else if (entry.isDirectory) yield $67f3878ab73216e8$var$createDirectoryItem(entry);
        }
    }while (entries.length > 0)
}
function $67f3878ab73216e8$var$getEntryFile(entry) {
    return new Promise((resolve, reject)=>entry.file(resolve, reject)
    );
}



let $9a3afe2ad7f63a27$var$dropTargets = new Map();
let $9a3afe2ad7f63a27$var$dropItems = new Map();
let $9a3afe2ad7f63a27$var$dragSession = null;
let $9a3afe2ad7f63a27$var$subscriptions = new Set();
function $9a3afe2ad7f63a27$export$c28d9fb4a54e471a(target) {
    $9a3afe2ad7f63a27$var$dropTargets.set(target.element, target);
    $9a3afe2ad7f63a27$var$dragSession?.updateValidDropTargets();
    return ()=>{
        $9a3afe2ad7f63a27$var$dropTargets.delete(target.element);
        $9a3afe2ad7f63a27$var$dragSession?.updateValidDropTargets();
    };
}
function $9a3afe2ad7f63a27$export$aef80212ac99c003(item) {
    $9a3afe2ad7f63a27$var$dropItems.set(item.element, item);
    return ()=>{
        $9a3afe2ad7f63a27$var$dropItems.delete(item.element);
    };
}
function $9a3afe2ad7f63a27$export$549dbcf8649bf3b2(target, formatMessage) {
    if ($9a3afe2ad7f63a27$var$dragSession) throw new Error('Cannot begin dragging while already dragging');
    $9a3afe2ad7f63a27$var$dragSession = new $9a3afe2ad7f63a27$var$DragSession(target, formatMessage);
    requestAnimationFrame(()=>{
        $9a3afe2ad7f63a27$var$dragSession.setup();
        if ($67f3878ab73216e8$export$1fb2158d224b542c() === 'keyboard') $9a3afe2ad7f63a27$var$dragSession.next();
    });
    for (let cb of $9a3afe2ad7f63a27$var$subscriptions)cb();
}
function $9a3afe2ad7f63a27$export$418e185dd3f1b968() {
    let [session, setSession] = $eBeNp$useState($9a3afe2ad7f63a27$var$dragSession);
    $eBeNp$useEffect(()=>{
        let cb = ()=>setSession($9a3afe2ad7f63a27$var$dragSession)
        ;
        $9a3afe2ad7f63a27$var$subscriptions.add(cb);
        return ()=>{
            $9a3afe2ad7f63a27$var$subscriptions.delete(cb);
        };
    }, []);
    return session;
}
function $9a3afe2ad7f63a27$var$endDragging() {
    $9a3afe2ad7f63a27$var$dragSession = null;
    for (let cb of $9a3afe2ad7f63a27$var$subscriptions)cb();
}
const $9a3afe2ad7f63a27$var$CANCELED_EVENTS = [
    'pointerdown',
    'pointermove',
    'pointerenter',
    'pointerleave',
    'pointerover',
    'pointerout',
    'pointerup',
    'mousedown',
    'mousemove',
    'mouseenter',
    'mouseleave',
    'mouseover',
    'mouseout',
    'mouseup',
    'touchstart',
    'touchmove',
    'touchend',
    'keyup',
    'focusin',
    'focusout'
];
const $9a3afe2ad7f63a27$var$CLICK_EVENTS = [
    'pointerup',
    'mouseup',
    'touchend'
];
const $9a3afe2ad7f63a27$var$MESSAGES = {
    keyboard: 'dragStartedKeyboard',
    touch: 'dragStartedTouch',
    virtual: 'dragStartedVirtual'
};
class $9a3afe2ad7f63a27$var$DragSession {
    constructor(target, formatMessage){
        this.dragTarget = target;
        this.formatMessage = formatMessage;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.cancelEvent = this.cancelEvent.bind(this);
    }
    setup() {
        document.addEventListener('keydown', this.onKeyDown, true);
        window.addEventListener('focus', this.onFocus, true);
        window.addEventListener('blur', this.onBlur, true);
        document.addEventListener('click', this.onClick, true);
        for (let event of $9a3afe2ad7f63a27$var$CANCELED_EVENTS)document.addEventListener(event, this.cancelEvent, true);
        this.mutationObserver = new MutationObserver(()=>this.updateValidDropTargets()
        );
        this.updateValidDropTargets();
        $eBeNp$announce(this.formatMessage($9a3afe2ad7f63a27$var$MESSAGES[$67f3878ab73216e8$export$1fb2158d224b542c()]));
    }
    teardown() {
        document.removeEventListener('keydown', this.onKeyDown, true);
        window.removeEventListener('focus', this.onFocus, true);
        window.removeEventListener('blur', this.onBlur, true);
        document.removeEventListener('click', this.onClick, true);
        for (let event of $9a3afe2ad7f63a27$var$CANCELED_EVENTS)document.removeEventListener(event, this.cancelEvent, true);
        this.mutationObserver.disconnect();
        this.restoreAriaHidden();
        if (this.mutationImmediate) clearImmediate(this.mutationImmediate);
    }
    onKeyDown(e) {
        this.cancelEvent(e);
        if (e.key === 'Escape') {
            this.cancel();
            return;
        }
        if (e.key === 'Enter') {
            if (e.altKey) this.activate();
            else this.drop();
            return;
        }
        if (e.key === 'Tab' && !(e.metaKey || e.altKey || e.ctrlKey)) {
            if (e.shiftKey) this.previous();
            else this.next();
        }
        if (typeof this.currentDropTarget?.onKeyDown === 'function') this.currentDropTarget.onKeyDown(e, this.dragTarget);
    }
    onFocus(e) {
        // Prevent focus events, except to the original drag target.
        if (e.target !== this.dragTarget.element) this.cancelEvent(e);
        // Ignore focus events on the window/document (JSDOM). Will be handled in onBlur, below.
        if (!(e.target instanceof HTMLElement) || e.target === this.dragTarget.element) return;
        let dropTarget = this.validDropTargets.find((target)=>target.element.contains(e.target)
        );
        if (!dropTarget) {
            if (this.currentDropTarget) this.currentDropTarget.element.focus();
            else this.dragTarget.element.focus();
            return;
        }
        let item = $9a3afe2ad7f63a27$var$dropItems.get(e.target);
        this.setCurrentDropTarget(dropTarget, item);
    }
    onBlur(e) {
        if (e.target !== this.dragTarget.element) this.cancelEvent(e);
        // If nothing is gaining focus, or e.relatedTarget is the window/document (JSDOM),
        // restore focus back to the current drop target if any, or the original drag target.
        if (!e.relatedTarget || !(e.relatedTarget instanceof HTMLElement)) {
            if (this.currentDropTarget) this.currentDropTarget.element.focus();
            else this.dragTarget.element.focus();
        }
    }
    onClick(e) {
        this.cancelEvent(e);
        if (e.detail !== 0) return;
        if (e.target === this.dragTarget.element) {
            this.cancel();
            return;
        }
        let dropTarget = this.validDropTargets.find((target)=>target.element.contains(e.target)
        );
        if (dropTarget) {
            let item = $9a3afe2ad7f63a27$var$dropItems.get(e.target);
            this.setCurrentDropTarget(dropTarget, item);
            this.drop(item);
        }
    }
    cancelEvent(e) {
        // Allow default for events that might cancel a click event
        if (!$9a3afe2ad7f63a27$var$CLICK_EVENTS.includes(e.type)) e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
    updateValidDropTargets() {
        if (!this.mutationObserver) return;
        this.mutationObserver.disconnect();
        if (this.restoreAriaHidden) this.restoreAriaHidden();
        this.validDropTargets = $9a3afe2ad7f63a27$var$findValidDropTargets(this.dragTarget);
        if (this.currentDropTarget && !this.validDropTargets.includes(this.currentDropTarget)) this.setCurrentDropTarget(this.validDropTargets[0]);
        // Find valid drop items within collections
        let types = $67f3878ab73216e8$export$e1d41611756c6326(this.dragTarget.items);
        let validDropItems = [
            ...$9a3afe2ad7f63a27$var$dropItems.values()
        ].filter((item)=>{
            if (typeof item.getDropOperation === 'function') return item.getDropOperation(types, this.dragTarget.allowedDropOperations) !== 'cancel';
            return true;
        });
        // Filter out drop targets that contain valid items. We don't want to stop hiding elements
        // other than the drop items that exist inside the collection.
        let visibleDropTargets = this.validDropTargets.filter((target)=>!validDropItems.some((item)=>target.element.contains(item.element)
            )
        );
        this.restoreAriaHidden = $eBeNp$ariaHideOutside([
            this.dragTarget.element,
            ...validDropItems.map((item)=>item.element
            ),
            ...visibleDropTargets.map((target)=>target.element
            )
        ]);
        this.mutationObserver.observe(document.body, {
            subtree: true,
            attributes: true,
            attributeFilter: [
                'aria-hidden'
            ]
        });
    }
    next() {
        if (!this.currentDropTarget) {
            this.setCurrentDropTarget(this.validDropTargets[0]);
            return;
        }
        let index = this.validDropTargets.indexOf(this.currentDropTarget);
        if (index < 0) {
            this.setCurrentDropTarget(this.validDropTargets[0]);
            return;
        }
        // If we've reached the end of the valid drop targets, cycle back to the original drag target.
        // This lets the user cancel the drag in case they don't have an Escape key (e.g. iPad keyboard case).
        if (index === this.validDropTargets.length - 1) {
            if (!this.dragTarget.element.closest('[aria-hidden="true"]')) {
                this.setCurrentDropTarget(null);
                this.dragTarget.element.focus();
            } else this.setCurrentDropTarget(this.validDropTargets[0]);
        } else this.setCurrentDropTarget(this.validDropTargets[index + 1]);
    }
    previous() {
        if (!this.currentDropTarget) {
            this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
            return;
        }
        let index = this.validDropTargets.indexOf(this.currentDropTarget);
        if (index < 0) {
            this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
            return;
        }
        // If we've reached the start of the valid drop targets, cycle back to the original drag target.
        // This lets the user cancel the drag in case they don't have an Escape key (e.g. iPad keyboard case).
        if (index === 0) {
            if (!this.dragTarget.element.closest('[aria-hidden="true"]')) {
                this.setCurrentDropTarget(null);
                this.dragTarget.element.focus();
            } else this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
        } else this.setCurrentDropTarget(this.validDropTargets[index - 1]);
    }
    setCurrentDropTarget(dropTarget, item) {
        if (dropTarget !== this.currentDropTarget) {
            if (this.currentDropTarget && typeof this.currentDropTarget.onDropExit === 'function') {
                let rect = this.currentDropTarget.element.getBoundingClientRect();
                this.currentDropTarget.onDropExit({
                    type: 'dropexit',
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                });
            }
            this.currentDropTarget = dropTarget;
            if (dropTarget) {
                if (typeof dropTarget.onDropEnter === 'function') {
                    let rect = dropTarget.element.getBoundingClientRect();
                    dropTarget.onDropEnter({
                        type: 'dropenter',
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2
                    }, this.dragTarget);
                }
                if (!item) dropTarget?.element.focus();
            }
        }
        if (item !== this.currentDropItem) {
            if (item && typeof this.currentDropTarget.onDropTargetEnter === 'function') this.currentDropTarget.onDropTargetEnter(item?.target);
            item?.element.focus();
            this.currentDropItem = item;
        }
    }
    end() {
        this.teardown();
        if (typeof this.dragTarget.onDragEnd === 'function') {
            let target = this.currentDropTarget && this.dropOperation !== 'cancel' ? this.currentDropTarget : this.dragTarget;
            let rect = target.element.getBoundingClientRect();
            this.dragTarget.onDragEnd({
                type: 'dragend',
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2,
                dropOperation: this.dropOperation
            });
        }
        this.setCurrentDropTarget(null);
        $9a3afe2ad7f63a27$var$endDragging();
    }
    cancel() {
        this.end();
        if (!this.dragTarget.element.closest('[aria-hidden="true"]')) this.dragTarget.element.focus();
        $eBeNp$announce(this.formatMessage('dropCanceled'));
    }
    drop(item1) {
        if (!this.currentDropTarget) {
            this.cancel();
            return;
        }
        if (typeof item1?.getDropOperation === 'function') {
            let types = $67f3878ab73216e8$export$e1d41611756c6326(this.dragTarget.items);
            this.dropOperation = item1.getDropOperation(types, this.dragTarget.allowedDropOperations);
        } else if (typeof this.currentDropTarget.getDropOperation === 'function') {
            let types = $67f3878ab73216e8$export$e1d41611756c6326(this.dragTarget.items);
            this.dropOperation = this.currentDropTarget.getDropOperation(types, this.dragTarget.allowedDropOperations);
        } else // TODO: show menu ??
        this.dropOperation = this.dragTarget.allowedDropOperations[0];
        if (typeof this.currentDropTarget.onDrop === 'function') {
            let items = this.dragTarget.items.map((item)=>({
                    kind: 'text',
                    types: new Set(Object.keys(item)),
                    getText: (type)=>Promise.resolve(item[type])
                })
            );
            let rect = this.currentDropTarget.element.getBoundingClientRect();
            this.currentDropTarget.onDrop({
                type: 'drop',
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                items: items,
                dropOperation: this.dropOperation
            }, item1?.target);
        }
        this.end();
        $eBeNp$announce(this.formatMessage('dropComplete'));
    }
    activate() {
        if (this.currentDropTarget && typeof this.currentDropTarget.onDropActivate === 'function') {
            let rect = this.currentDropTarget.element.getBoundingClientRect();
            this.currentDropTarget.onDropActivate({
                type: 'dropactivate',
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            });
        }
    }
}
function $9a3afe2ad7f63a27$var$findValidDropTargets(options) {
    let types = $67f3878ab73216e8$export$e1d41611756c6326(options.items);
    return [
        ...$9a3afe2ad7f63a27$var$dropTargets.values()
    ].filter((target)=>{
        if (target.element.closest('[aria-hidden="true"]')) return false;
        if (typeof target.getDropOperation === 'function') return target.getDropOperation(types, options.allowedDropOperations) !== 'cancel';
        return true;
    });
}



var $14fe5d66280042fb$exports = {};
var $1c9f1b04a7993480$exports = {};
$1c9f1b04a7993480$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"اضغط Enter لبدء السحب.\",\"dragDescriptionTouch\":\"اضغط مرتين لبدء السحب.\",\"dragDescriptionVirtual\":\"انقر لبدء السحب.\",\"dragItem\":\"اسحب {itemText}\",\"dragSelectedItems\":\"اسحب {count, plural, one {# عنصر محدد} other {# عناصر محددة}}\",\"dragStartedKeyboard\":\"بدأ السحب. اضغط Tab للانتقال إلى موضع الإفلات، ثم اضغط Enter للإفلات، أو اضغط Escape للإلغاء.\",\"dragStartedTouch\":\"بدأ السحب. انتقل إلى موضع الإفلات، ثم اضغط مرتين للإفلات.\",\"dragStartedVirtual\":\"بدأ السحب. انتقل إلى مكان الإفلات، ثم انقر أو اضغط Enter للإفلات.\",\"dropCanceled\":\"تم إلغاء الإفلات.\",\"dropComplete\":\"اكتمل الإفلات.\",\"dropDescriptionKeyboard\":\"اضغط Enter للإفلات. اضغط Escape لإلغاء السحب.\",\"dropDescriptionTouch\":\"اضغط مرتين للإفلات.\",\"dropDescriptionVirtual\":\"انقر للإفلات.\",\"dropIndicator\":\"مؤشر الإفلات\",\"dropOnItem\":\"إفلات {itemText}\",\"dropOnRoot\":\"الإفلات\",\"endDragKeyboard\":\"السحب. اضغط Enter لإلغاء السحب.\",\"endDragTouch\":\"السحب. اضغط مرتين لإلغاء السحب.\",\"endDragVirtual\":\"السحب. انقر لإلغاء السحب.\",\"insertAfter\":\"أدخل بعد {itemText}\",\"insertBefore\":\"أدخل قبل {itemText}\",\"insertBetween\":\"أدخل بين {beforeItemText} و {afterItemText}\"}");


var $09631426f15616cc$exports = {};
$09631426f15616cc$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Натиснете „Enter“, за да започнете да плъзгате.\",\"dragDescriptionTouch\":\"Натиснете двукратно, за да започнете да плъзгате.\",\"dragDescriptionVirtual\":\"Щракнете, за да започнете да плъзгате.\",\"dragItem\":\"Плъзни {itemText}\",\"dragSelectedItems\":\"Плъзни {count, plural, one {# избран елемент} other {# избрани елемента}}\",\"dragStartedKeyboard\":\"Започна плъзгане. Натиснете „Tab“, за да се придвижите до целта, след което натиснете „Enter“ за пускане или натиснете „Escape“ за отмяна.\",\"dragStartedTouch\":\"Започна плъзгане. Придвижете се до целта, след което натиснете двукратно, за да пуснете.\",\"dragStartedVirtual\":\"Започна плъзгане. Придвижете се до целта, след което щракнете или натиснете „Enter“ за пускане.\",\"dropCanceled\":\"Пускането е отменено.\",\"dropComplete\":\"Пускането е завършено.\",\"dropDescriptionKeyboard\":\"Натиснете „Enter“ за пускане. Натиснете „Escape“ за отмяна на плъзгането.\",\"dropDescriptionTouch\":\"Натиснете двукратно за пускане.\",\"dropDescriptionVirtual\":\"Щракнете за пускане.\",\"dropIndicator\":\"индикатор за пускане\",\"dropOnItem\":\"Пусни върху {itemText}\",\"dropOnRoot\":\"Пусни върху\",\"endDragKeyboard\":\"Плъзгане. Натиснете „Enter“ за отмяна на плъзгането.\",\"endDragTouch\":\"Плъзгане. Натиснете двукратно за отмяна на плъзгането.\",\"endDragVirtual\":\"Плъзгане. Щракнете за отмяна.\",\"insertAfter\":\"Вмъкни след {itemText}\",\"insertBefore\":\"Вмъкни преди {itemText}\",\"insertBetween\":\"Вмъкни между {beforeItemText} и {afterItemText}\"}");


var $cdad92161242fec2$exports = {};
$cdad92161242fec2$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Stisknutím klávesy Enter začnete s přetahováním.\",\"dragDescriptionTouch\":\"Poklepáním začnete s přetahováním.\",\"dragDescriptionVirtual\":\"Kliknutím začnete s přetahováním.\",\"dragItem\":\"Přetáhnout {itemText}\",\"dragSelectedItems\":\"Přetáhnout {count, plural, one {# vybranou položku} few {# vybrané položky} other {# vybraných položek}}\",\"dragStartedKeyboard\":\"Začněte s přetahováním. Po stisknutí klávesy Tab najděte požadovaný cíl a stisknutím klávesy Enter přetažení dokončete nebo stisknutím klávesy Esc akci zrušte.\",\"dragStartedTouch\":\"Začněte s přetahováním. Najděte požadovaný cíl a poklepáním přetažení dokončete.\",\"dragStartedVirtual\":\"Začněte s přetahováním. Najděte požadovaný cíl a kliknutím nebo stisknutím klávesy Enter přetažení dokončete.\",\"dropCanceled\":\"Přetažení bylo zrušeno.\",\"dropComplete\":\"Přetažení bylo dokončeno.\",\"dropDescriptionKeyboard\":\"Stisknutím klávesy Enter přetažení dokončete nebo stisknutím klávesy Esc akci zrušte.\",\"dropDescriptionTouch\":\"Poklepáním přetažení dokončete.\",\"dropDescriptionVirtual\":\"Kliknutím objekt přetáhněte.\",\"dropIndicator\":\"indikátor přetažení\",\"dropOnItem\":\"Přetáhnout na {itemText}\",\"dropOnRoot\":\"Přetáhnout na\",\"endDragKeyboard\":\"Probíhá přetahování. Stisknutím klávesy Enter přetažení zrušíte.\",\"endDragTouch\":\"Probíhá přetahování. Poklepáním přetažení zrušíte.\",\"endDragVirtual\":\"Probíhá přetahování. Kliknutím přetažení zrušíte.\",\"insertAfter\":\"Vložit za {itemText}\",\"insertBefore\":\"Vložit před {itemText}\",\"insertBetween\":\"Vložit mezi {beforeItemText} a {afterItemText}\"}");


var $7e062bc20b4172c5$exports = {};
$7e062bc20b4172c5$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Tryk på Enter for at starte med at trække.\",\"dragDescriptionTouch\":\"Dobbelttryk for at starte med at trække.\",\"dragDescriptionVirtual\":\"Klik for at starte med at trække.\",\"dragItem\":\"Træk {itemText}\",\"dragSelectedItems\":\"Træk {count, plural, one {# valgt element} other {# valgte elementer}}\",\"dragStartedKeyboard\":\"Startet med at trække. Tryk på Tab for at gå til et slip-mål, tryk derefter på Enter for at slippe, eller tryk på Escape for at annullere.\",\"dragStartedTouch\":\"Startet med at trække. Gå til et slip-mål, og dobbelttryk derefter for at slippe.\",\"dragStartedVirtual\":\"Startet med at trække. Gå til et slip-mål, og klik eller tryk derefter på enter for at slippe.\",\"dropCanceled\":\"Slip annulleret.\",\"dropComplete\":\"Slip fuldført.\",\"dropDescriptionKeyboard\":\"Tryk på Enter for at slippe. Tryk på Escape for at annullere trækning.\",\"dropDescriptionTouch\":\"Dobbelttryk for at slippe.\",\"dropDescriptionVirtual\":\"Klik for at slippe.\",\"dropIndicator\":\"slip-indikator\",\"dropOnItem\":\"Slip på {itemText}\",\"dropOnRoot\":\"Slip på\",\"endDragKeyboard\":\"Trækning. Tryk på enter for at annullere træk.\",\"endDragTouch\":\"Trækning. Dobbelttryk for at annullere træk.\",\"endDragVirtual\":\"Trækning. Klik for at annullere trækning.\",\"insertAfter\":\"Indsæt efter {itemText}\",\"insertBefore\":\"Indsæt før {itemText}\",\"insertBetween\":\"Indsæt mellem {beforeItemText} og {afterItemText}\"}");


var $a842ff80116835b7$exports = {};
$a842ff80116835b7$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Drücken Sie die Eingabetaste, um den Ziehvorgang zu starten.\",\"dragDescriptionTouch\":\"Tippen Sie doppelt, um den Ziehvorgang zu starten.\",\"dragDescriptionVirtual\":\"Zum Starten des Ziehvorgangs klicken.\",\"dragItem\":\"{itemText} ziehen\",\"dragSelectedItems\":\"{count, plural, one {# ausgewähltes Objekt} other {# ausgewählte Objekte}} ziehen\",\"dragStartedKeyboard\":\"Ziehvorgang gestartet. Drücken Sie die Tabulatortaste, um zu einem Ablegeziel zu navigieren und drücken Sie dann die Eingabetaste, um das Objekt abzulegen, oder Escape, um den Vorgang abzubrechen.\",\"dragStartedTouch\":\"Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und tippen Sie doppelt, um das Objekt abzulegen.\",\"dragStartedVirtual\":\"Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und klicken Sie oder drücken Sie die Eingabetaste, um das Objekt abzulegen.\",\"dropCanceled\":\"Ablegen abgebrochen.\",\"dropComplete\":\"Ablegen abgeschlossen.\",\"dropDescriptionKeyboard\":\"Drücken Sie die Eingabetaste, um das Objekt abzulegen. Drücken Sie Escape, um den Vorgang abzubrechen.\",\"dropDescriptionTouch\":\"Tippen Sie doppelt, um das Objekt abzulegen.\",\"dropDescriptionVirtual\":\"Zum Ablegen klicken.\",\"dropIndicator\":\"Ablegeanzeiger\",\"dropOnItem\":\"Auf {itemText} ablegen\",\"dropOnRoot\":\"Ablegen auf\",\"endDragKeyboard\":\"Ziehvorgang läuft. Drücken Sie die Eingabetaste, um den Vorgang abzubrechen.\",\"endDragTouch\":\"Ziehvorgang läuft. Tippen Sie doppelt, um den Vorgang abzubrechen.\",\"endDragVirtual\":\"Ziehvorgang läuft. Klicken Sie, um den Vorgang abzubrechen.\",\"insertAfter\":\"Nach {itemText} einfügen\",\"insertBefore\":\"Vor {itemText} einfügen\",\"insertBetween\":\"Zwischen {beforeItemText} und {afterItemText} einfügen\"}");


var $f97e2dbf52569ee0$exports = {};
$f97e2dbf52569ee0$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Πατήστε Enter για έναρξη της μεταφοράς.\",\"dragDescriptionTouch\":\"Πατήστε δύο φορές για έναρξη της μεταφοράς.\",\"dragDescriptionVirtual\":\"Κάντε κλικ για να ξεκινήσετε τη μεταφορά.\",\"dragItem\":\"Μεταφορά {itemText}\",\"dragSelectedItems\":\"Μεταφορά σε {count, plural, one {# επιλεγμένο στοιχείο} other {# επιλεγμένα στοιχεία}}\",\"dragStartedKeyboard\":\"Η μεταφορά ξεκίνησε. Πατήστε το πλήκτρο Tab για να μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, πατήστε Enter για απόθεση ή πατήστε Escape για ακύρωση.\",\"dragStartedTouch\":\"Η μεταφορά ξεκίνησε. Μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, πατήστε δύο φορές για απόθεση.\",\"dragStartedVirtual\":\"Η μεταφορά ξεκίνησε. Μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, κάντε κλικ ή πατήστε Enter για απόθεση.\",\"dropCanceled\":\"Η απόθεση ακυρώθηκε.\",\"dropComplete\":\"Η απόθεση ολοκληρώθηκε.\",\"dropDescriptionKeyboard\":\"Πατήστε Enter για απόθεση. Πατήστε Escape για ακύρωση της μεταφοράς.\",\"dropDescriptionTouch\":\"Πατήστε δύο φορές για απόθεση.\",\"dropDescriptionVirtual\":\"Κάντε κλικ για απόθεση.\",\"dropIndicator\":\"δείκτης απόθεσης\",\"dropOnItem\":\"Απόθεση σε {itemText}\",\"dropOnRoot\":\"Απόθεση σε\",\"endDragKeyboard\":\"Μεταφορά σε εξέλιξη. Πατήστε Enter για ακύρωση της μεταφοράς.\",\"endDragTouch\":\"Μεταφορά σε εξέλιξη. Πατήστε δύο φορές για ακύρωση της μεταφοράς.\",\"endDragVirtual\":\"Μεταφορά σε εξέλιξη. Κάντε κλικ για ακύρωση της μεταφοράς.\",\"insertAfter\":\"Εισαγωγή μετά από {itemText}\",\"insertBefore\":\"Εισαγωγή πριν από {itemText}\",\"insertBetween\":\"Εισαγωγή μεταξύ {beforeItemText} και {afterItemText}\"}");


var $791591d534a2b953$exports = {};
$791591d534a2b953$exports = JSON.parse("{\"dragItem\":\"Drag {itemText}\",\"dragSelectedItems\":\"Drag {count, plural, one {# selected item} other {# selected items}}\",\"dragDescriptionKeyboard\":\"Press Enter to start dragging.\",\"dragDescriptionTouch\":\"Double tap to start dragging.\",\"dragDescriptionVirtual\":\"Click to start dragging.\",\"dragStartedKeyboard\":\"Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.\",\"dragStartedTouch\":\"Started dragging. Navigate to a drop target, then double tap to drop.\",\"dragStartedVirtual\":\"Started dragging. Navigate to a drop target, then click or press Enter to drop.\",\"endDragKeyboard\":\"Dragging. Press Enter to cancel drag.\",\"endDragTouch\":\"Dragging. Double tap to cancel drag.\",\"endDragVirtual\":\"Dragging. Click to cancel drag.\",\"dropDescriptionKeyboard\":\"Press Enter to drop. Press Escape to cancel drag.\",\"dropDescriptionTouch\":\"Double tap to drop.\",\"dropDescriptionVirtual\":\"Click to drop.\",\"dropCanceled\":\"Drop canceled.\",\"dropComplete\":\"Drop complete.\",\"dropIndicator\":\"drop indicator\",\"dropOnRoot\":\"Drop on\",\"dropOnItem\":\"Drop on {itemText}\",\"insertBefore\":\"Insert before {itemText}\",\"insertBetween\":\"Insert between {beforeItemText} and {afterItemText}\",\"insertAfter\":\"Insert after {itemText}\"}");


var $dda8603fa7652de8$exports = {};
$dda8603fa7652de8$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Pulse Intro para empezar a arrastrar.\",\"dragDescriptionTouch\":\"Pulse dos veces para iniciar el arrastre.\",\"dragDescriptionVirtual\":\"Haga clic para iniciar el arrastre.\",\"dragItem\":\"Arrastrar {itemText}\",\"dragSelectedItems\":\"Arrastrar {count, plural, one {# elemento seleccionado} other {# elementos seleccionados}}\",\"dragStartedKeyboard\":\"Se ha empezado a arrastrar. Pulse el tabulador para ir al destino de colocación y, a continuación, pulse Intro para soltar, o pulse Escape para cancelar.\",\"dragStartedTouch\":\"Se ha empezado a arrastrar. Vaya al destino de colocación y, a continuación, pulse dos veces para soltar.\",\"dragStartedVirtual\":\"Se ha empezado a arrastrar. Vaya al destino de colocación y, a continuación, haga clic o pulse Intro para soltar.\",\"dropCanceled\":\"Se ha cancelado la colocación.\",\"dropComplete\":\"Colocación finalizada.\",\"dropDescriptionKeyboard\":\"Pulse Intro para soltar. Pulse Escape para cancelar el arrastre.\",\"dropDescriptionTouch\":\"Pulse dos veces para soltar.\",\"dropDescriptionVirtual\":\"Haga clic para soltar.\",\"dropIndicator\":\"indicador de colocación\",\"dropOnItem\":\"Soltar en {itemText}\",\"dropOnRoot\":\"Soltar en\",\"endDragKeyboard\":\"Arrastrando. Pulse Intro para cancelar el arrastre.\",\"endDragTouch\":\"Arrastrando. Pulse dos veces para cancelar el arrastre.\",\"endDragVirtual\":\"Arrastrando. Haga clic para cancelar el arrastre.\",\"insertAfter\":\"Insertar después de {itemText}\",\"insertBefore\":\"Insertar antes de {itemText}\",\"insertBetween\":\"Insertar entre {beforeItemText} y {afterItemText}\"}");


var $f5cda914d8054ee8$exports = {};
$f5cda914d8054ee8$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Lohistamise alustamiseks vajutage klahvi Enter.\",\"dragDescriptionTouch\":\"Topeltpuudutage lohistamise alustamiseks.\",\"dragDescriptionVirtual\":\"Klõpsake lohistamise alustamiseks.\",\"dragItem\":\"Lohista {itemText}\",\"dragSelectedItems\":\"Lohista {count, plural, one {# valitud üksust} other {# valitud üksust}}\",\"dragStartedKeyboard\":\"Alustati lohistamist. Kukutamise sihtmärgi juurde navigeerimiseks vajutage klahvi Tab, seejärel vajutage kukutamiseks klahvi Enter või loobumiseks klahvi Escape.\",\"dragStartedTouch\":\"Alustati lohistamist. Navigeerige kukutamise sihtmärgi juurde ja topeltpuudutage kukutamiseks.\",\"dragStartedVirtual\":\"Alustati lohistamist. Navigeerige kukutamise sihtmärgi juurde ja kukutamiseks klõpsake või vajutage klahvi Enter.\",\"dropCanceled\":\"Lohistamisest loobuti.\",\"dropComplete\":\"Lohistamine on tehtud.\",\"dropDescriptionKeyboard\":\"Kukutamiseks vajutage klahvi Enter. Lohistamisest loobumiseks vajutage klahvi Escape.\",\"dropDescriptionTouch\":\"Kukutamiseks topeltpuudutage.\",\"dropDescriptionVirtual\":\"Kukutamiseks klõpsake.\",\"dropIndicator\":\"lohistamise indikaator\",\"dropOnItem\":\"Kukuta asukohta {itemText}\",\"dropOnRoot\":\"Kukuta asukohta\",\"endDragKeyboard\":\"Lohistamine. Lohistamisest loobumiseks vajutage klahvi Enter.\",\"endDragTouch\":\"Lohistamine. Lohistamisest loobumiseks topeltpuudutage.\",\"endDragVirtual\":\"Lohistamine. Lohistamisest loobumiseks klõpsake.\",\"insertAfter\":\"Sisesta {itemText} järele\",\"insertBefore\":\"Sisesta {itemText} ette\",\"insertBetween\":\"Sisesta {beforeItemText} ja {afterItemText} vahele\"}");


var $5a23ae8363c8caf2$exports = {};
$5a23ae8363c8caf2$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Aloita vetäminen painamalla Enter-näppäintä.\",\"dragDescriptionTouch\":\"Aloita vetäminen kaksoisnapauttamalla.\",\"dragDescriptionVirtual\":\"Aloita vetäminen napsauttamalla.\",\"dragItem\":\"Vedä kohdetta {itemText}\",\"dragSelectedItems\":\"Vedä {count, plural, one {# valittua kohdetta} other {# valittua kohdetta}}\",\"dragStartedKeyboard\":\"Vetäminen aloitettu. Siirry pudotuskohteeseen painamalla sarkainnäppäintä ja sitten pudota painamalla Enter-näppäintä tai peruuta painamalla Escape-näppäintä.\",\"dragStartedTouch\":\"Vetäminen aloitettu. Siirry pudotuskohteeseen ja pudota kaksoisnapauttamalla.\",\"dragStartedVirtual\":\"Vetäminen aloitettu. Siirry pudotuskohteeseen ja pudota napsauttamalla tai painamalla Enter-näppäintä.\",\"dropCanceled\":\"Pudotus peruutettu.\",\"dropComplete\":\"Pudotus suoritettu.\",\"dropDescriptionKeyboard\":\"Pudota painamalla Enter-näppäintä. Peruuta vetäminen painamalla Escape-näppäintä.\",\"dropDescriptionTouch\":\"Pudota kaksoisnapauttamalla.\",\"dropDescriptionVirtual\":\"Pudota napsauttamalla.\",\"dropIndicator\":\"pudotuksen ilmaisin\",\"dropOnItem\":\"Pudota kohteeseen {itemText}\",\"dropOnRoot\":\"Pudota kohteeseen\",\"endDragKeyboard\":\"Vedetään. Peruuta vetäminen painamalla Enter-näppäintä.\",\"endDragTouch\":\"Vedetään. Peruuta vetäminen kaksoisnapauttamalla.\",\"endDragVirtual\":\"Vedetään. Peruuta vetäminen napsauttamalla.\",\"insertAfter\":\"Lisää kohteen {itemText} jälkeen\",\"insertBefore\":\"Lisää ennen kohdetta {itemText}\",\"insertBetween\":\"Lisää kohteiden {beforeItemText} ja {afterItemText} väliin\"}");


var $b7f10f5819e7a10c$exports = {};
$b7f10f5819e7a10c$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Appuyez sur Entrée pour commencer le déplacement.\",\"dragDescriptionTouch\":\"Touchez deux fois pour commencer le déplacement.\",\"dragDescriptionVirtual\":\"Cliquez pour commencer le déplacement.\",\"dragItem\":\"Déplacer {itemText}\",\"dragSelectedItems\":\"Déplacer {count, plural, one {# élément sélectionné} other {# éléments sélectionnés}}\",\"dragStartedKeyboard\":\"Déplacement commencé. Appuyez sur Tabulation pour accéder à une cible de dépôt, puis appuyez sur Entrée pour déposer, ou appuyez sur Échap pour annuler.\",\"dragStartedTouch\":\"Déplacement commencé. Accédez à une cible de dépôt, puis touchez deux fois pour déposer.\",\"dragStartedVirtual\":\"Déplacement commencé. Accédez à une cible de dépôt, puis cliquez ou appuyez sur Entrée pour déposer.\",\"dropCanceled\":\"Dépôt annulé.\",\"dropComplete\":\"Dépôt terminé.\",\"dropDescriptionKeyboard\":\"Appuyez sur Entrée pour déposer. Appuyez sur Échap pour annuler le déplacement.\",\"dropDescriptionTouch\":\"Touchez deux fois pour déposer.\",\"dropDescriptionVirtual\":\"Cliquez pour déposer.\",\"dropIndicator\":\"indicateur de dépôt\",\"dropOnItem\":\"Déposer sur {itemText}\",\"dropOnRoot\":\"Déposer sur\",\"endDragKeyboard\":\"Déplacement. Appuyez sur Entrée pour annuler le déplacement.\",\"endDragTouch\":\"Déplacement. Touchez deux fois pour annuler le déplacement.\",\"endDragVirtual\":\"Déplacement. Cliquez pour annuler le déplacement.\",\"insertAfter\":\"Insérer après {itemText}\",\"insertBefore\":\"Insérer avant {itemText}\",\"insertBetween\":\"Insérer entre {beforeItemText} et {afterItemText}\"}");


var $692d7246b536b83c$exports = {};
$692d7246b536b83c$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"הקש על Enter כדי להתחיל לגרור.\",\"dragDescriptionTouch\":\"הקש פעמיים כדי להתחיל בגרירה.\",\"dragDescriptionVirtual\":\"לחץ כדי להתחיל לגרור.\",\"dragItem\":\"גרור את {itemText}\",\"dragSelectedItems\":\"גרור {count, plural, one {פריט נבחר #} other {# פריטים שנבחרו}}\",\"dragStartedKeyboard\":\"התחלת לגרור. הקש על Tab כדי לנווט לנקודת הגרירה ולאחר מכן הקש על Enter כדי לשחרר או על Escape כדי לבטל.\",\"dragStartedTouch\":\"התחלת לגרור. נווט לנקודת השחרור ולאחר מכן הקש פעמיים כדי לשחרר.\",\"dragStartedVirtual\":\"התחלת לגרור. נווט לנקודת השחרור ולאחר מכן לחץ או הקש על Enter כדי לשחרר.\",\"dropCanceled\":\"השחרור בוטל.\",\"dropComplete\":\"השחרור הושלם.\",\"dropDescriptionKeyboard\":\"הקש על Enter כדי לשחרר. הקש על Escape כדי לבטל את הגרירה.\",\"dropDescriptionTouch\":\"הקש פעמיים כדי לשחרר.\",\"dropDescriptionVirtual\":\"לחץ כדי לשחרר.\",\"dropIndicator\":\"מחוון שחרור\",\"dropOnItem\":\"שחרר על {itemText}\",\"dropOnRoot\":\"שחרר על\",\"endDragKeyboard\":\"גורר. הקש על Enter כדי לבטל את הגרירה.\",\"endDragTouch\":\"גורר. הקש פעמיים כדי לבטל את הגרירה.\",\"endDragVirtual\":\"גורר. לחץ כדי לבטל את הגרירה.\",\"insertAfter\":\"הוסף אחרי {itemText}\",\"insertBefore\":\"הוסף לפני {itemText}\",\"insertBetween\":\"הוסף בין {beforeItemText} לבין {afterItemText}\"}");


var $cf83430be2ce79e8$exports = {};
$cf83430be2ce79e8$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Pritisnite Enter da biste počeli povlačiti.\",\"dragDescriptionTouch\":\"Dvaput dodirnite da biste počeli povlačiti.\",\"dragDescriptionVirtual\":\"Kliknite da biste počeli povlačiti.\",\"dragItem\":\"Povucite stavku {itemText}\",\"dragSelectedItems\":\"Povucite {count, plural, one {# odabranu stavku} other {ovoliko odabranih stavki: #}}\",\"dragStartedKeyboard\":\"Počeli ste povlačiti. Pritisnite tipku tabulatora da biste došli do cilja ispuštanja, a zatim Enter da biste ispustili stavku ili Escape da biste prekinuli povlačenje.\",\"dragStartedTouch\":\"Počeli ste povlačiti. Dođite do cilja ispuštanja, a zatim dvaput dodirnite da biste ispustili stavku.\",\"dragStartedVirtual\":\"Počeli ste povlačiti. Dođite do cilja ispuštanja, a zatim kliknite ili pritisnite Enter da biste ispustili stavku.\",\"dropCanceled\":\"Povlačenje je prekinuto.\",\"dropComplete\":\"Ispuštanje je dovršeno.\",\"dropDescriptionKeyboard\":\"Pritisnite Enter da biste ispustili stavku. Pritisnite Escape da biste prekinuli povlačenje.\",\"dropDescriptionTouch\":\"Dvaput dodirnite da biste ispustili stavku.\",\"dropDescriptionVirtual\":\"Kliknite da biste ispustili stavku.\",\"dropIndicator\":\"pokazatelj ispuštanja\",\"dropOnItem\":\"Ispustite na stavku {itemText}\",\"dropOnRoot\":\"Ispustite na\",\"endDragKeyboard\":\"Povlačenje. Pritisnite Enter da biste prekinuli povlačenje.\",\"endDragTouch\":\"Povlačenje. Dvaput dodirnite da biste prekinuli povlačenje.\",\"endDragVirtual\":\"Povlačenje. Kliknite da biste prekinuli povlačenje.\",\"insertAfter\":\"Umetnite iza stavke {itemText}\",\"insertBefore\":\"Ispustite ispred stavke {itemText}\",\"insertBetween\":\"Umetnite između stavki {beforeItemText} i {afterItemText}\"}");


var $cabb05addba23acf$exports = {};
$cabb05addba23acf$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Nyomja le az Enter billentyűt a húzás megkezdéséhez.\",\"dragDescriptionTouch\":\"Koppintson duplán a húzás megkezdéséhez.\",\"dragDescriptionVirtual\":\"Kattintson a húzás megkezdéséhez.\",\"dragItem\":\"{itemText} húzása\",\"dragSelectedItems\":\"{count, plural, one {# kijelölt elem} other {# kijelölt elem}} húzása\",\"dragStartedKeyboard\":\"Húzás megkezdve. Nyomja le a Tab billentyűt az elengedési célhoz navigálásához, majd nyomja le az Enter billentyűt az elengedéshez, vagy nyomja le az Escape billentyűt a megszakításhoz.\",\"dragStartedTouch\":\"Húzás megkezdve. Navigáljon egy elengedési célhoz, majd koppintson duplán az elengedéshez.\",\"dragStartedVirtual\":\"Húzás megkezdve. Navigáljon egy elengedési célhoz, majd kattintson vagy nyomja le az Enter billentyűt az elengedéshez.\",\"dropCanceled\":\"Elengedés megszakítva.\",\"dropComplete\":\"Elengedés teljesítve.\",\"dropDescriptionKeyboard\":\"Nyomja le az Enter billentyűt az elengedéshez. Nyomja le az Escape billentyűt a húzás megszakításához.\",\"dropDescriptionTouch\":\"Koppintson duplán az elengedéshez.\",\"dropDescriptionVirtual\":\"Kattintson az elengedéshez.\",\"dropIndicator\":\"elengedésjelző\",\"dropOnItem\":\"Elengedés erre: {itemText}\",\"dropOnRoot\":\"Elengedés erre:\",\"endDragKeyboard\":\"Húzás folyamatban. Nyomja le az Enter billentyűt a húzás megszakításához.\",\"endDragTouch\":\"Húzás folyamatban. Koppintson duplán a húzás megszakításához.\",\"endDragVirtual\":\"Húzás folyamatban. Kattintson a húzás megszakításához.\",\"insertAfter\":\"Beszúrás {itemText} után\",\"insertBefore\":\"Beszúrás {itemText} elé\",\"insertBetween\":\"Beszúrás {beforeItemText} és {afterItemText} közé\"}");


var $34016bd87df3b623$exports = {};
$34016bd87df3b623$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Premi Invio per iniziare a trascinare.\",\"dragDescriptionTouch\":\"Tocca due volte per iniziare a trascinare.\",\"dragDescriptionVirtual\":\"Fai clic per iniziare a trascinare.\",\"dragItem\":\"Trascina {itemText}\",\"dragSelectedItems\":\"Trascina {count, plural, one {# altro elemento selezionato} other {# altri elementi selezionati}}\",\"dragStartedKeyboard\":\"Hai iniziato a trascinare. Premi Tab per arrivare sull’area di destinazione, quindi premi Invio per rilasciare o Esc per annullare.\",\"dragStartedTouch\":\"Hai iniziato a trascinare. Arriva sull’area di destinazione, quindi tocca due volte per rilasciare.\",\"dragStartedVirtual\":\"Hai iniziato a trascinare. Arriva sull’area di destinazione, quindi fai clic o premi Invio per rilasciare.\",\"dropCanceled\":\"Rilascio annullato.\",\"dropComplete\":\"Rilascio completato.\",\"dropDescriptionKeyboard\":\"Premi Invio per rilasciare. Premi Esc per annullare.\",\"dropDescriptionTouch\":\"Tocca due volte per rilasciare.\",\"dropDescriptionVirtual\":\"Fai clic per rilasciare.\",\"dropIndicator\":\"indicatore di rilascio\",\"dropOnItem\":\"Rilascia su {itemText}\",\"dropOnRoot\":\"Rilascia su\",\"endDragKeyboard\":\"Trascinamento. Premi Invio per annullare.\",\"endDragTouch\":\"Trascinamento. Tocca due volte per annullare.\",\"endDragVirtual\":\"Trascinamento. Fai clic per annullare.\",\"insertAfter\":\"Inserisci dopo {itemText}\",\"insertBefore\":\"Inserisci prima di {itemText}\",\"insertBetween\":\"Inserisci tra {beforeItemText} e {afterItemText}\"}");


var $0a1ecc1b673f0898$exports = {};
$0a1ecc1b673f0898$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Enter キーを押してドラッグを開始してください。\",\"dragDescriptionTouch\":\"ダブルタップしてドラッグを開始します。\",\"dragDescriptionVirtual\":\"クリックしてドラッグを開始します。\",\"dragItem\":\"{itemText} をドラッグ\",\"dragSelectedItems\":\"{count, plural, one {# 個の選択項目} other {# 個の選択項目}} をドラッグ\",\"dragStartedKeyboard\":\"ドラッグを開始します。Tab キーを押してドロップターゲットにいどうし、Enter キーを押してドロップするか、Esc キーを押してキャンセルします。\",\"dragStartedTouch\":\"ドラッグを開始しました。ドロップのターゲットに移動し、ダブルタップしてドロップします。\",\"dragStartedVirtual\":\"ドラッグを開始しました。ドロップのターゲットに移動し、クリックまたは Enter キーを押してドロップします。\",\"dropCanceled\":\"ドロップがキャンセルされました。\",\"dropComplete\":\"ドロップが完了しました。\",\"dropDescriptionKeyboard\":\"Enter キーを押してドロップします。Esc キーを押してドラッグをキャンセルします。\",\"dropDescriptionTouch\":\"ダブルタップしてドロップします。\",\"dropDescriptionVirtual\":\"クリックしてドロップします。\",\"dropIndicator\":\"ドロップインジケーター\",\"dropOnItem\":\"{itemText} にドロップ\",\"dropOnRoot\":\"ドロップ場所\",\"endDragKeyboard\":\"ドラッグしています。Enter キーを押してドラッグをキャンセルします。\",\"endDragTouch\":\"ドラッグしています。ダブルタップしてドラッグをキャンセルします。\",\"endDragVirtual\":\"ドラッグしています。クリックしてドラッグをキャンセルします。\",\"insertAfter\":\"{itemText} の後に挿入\",\"insertBefore\":\"{itemText} の前に挿入\",\"insertBetween\":\"{beforeItemText} と {afterItemText} の間に挿入\"}");


var $1dcd7f4553d3c317$exports = {};
$1dcd7f4553d3c317$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"드래그를 시작하려면 Enter를 누르세요.\",\"dragDescriptionTouch\":\"드래그를 시작하려면 더블 탭하세요.\",\"dragDescriptionVirtual\":\"드래그를 시작하려면 클릭하세요.\",\"dragItem\":\"{itemText} 드래그\",\"dragSelectedItems\":\"{count, plural, one {#개 선택 항목} other {#개 선택 항목}} 드래그\",\"dragStartedKeyboard\":\"드래그가 시작되었습니다. Tab을 눌러 드롭 대상으로 이동한 다음 Enter를 눌러 드롭하거나 Esc를 눌러 취소하세요.\",\"dragStartedTouch\":\"드래그가 시작되었습니다. 드롭 대상으로 이동한 다음 더블 탭하여 드롭하세요.\",\"dragStartedVirtual\":\"드래그가 시작되었습니다. 드롭 대상으로 이동한 다음 클릭하거나 Enter를 눌러 드롭하세요.\",\"dropCanceled\":\"드롭이 취소되었습니다.\",\"dropComplete\":\"드롭이 완료되었습니다.\",\"dropDescriptionKeyboard\":\"드롭하려면 Enter를 누르세요. 드래그를 취소하려면 Esc를 누르세요.\",\"dropDescriptionTouch\":\"더블 탭하여 드롭하세요.\",\"dropDescriptionVirtual\":\"드롭하려면 클릭하세요.\",\"dropIndicator\":\"드롭 표시기\",\"dropOnItem\":\"{itemText}에 드롭\",\"dropOnRoot\":\"드롭 대상\",\"endDragKeyboard\":\"드래그 중입니다. 드래그를 취소하려면 Enter를 누르세요.\",\"endDragTouch\":\"드래그 중입니다. 드래그를 취소하려면 더블 탭하세요.\",\"endDragVirtual\":\"드래그 중입니다. 드래그를 취소하려면 클릭하세요.\",\"insertAfter\":\"{itemText} 이후에 삽입\",\"insertBefore\":\"{itemText} 이전에 삽입\",\"insertBetween\":\"{beforeItemText} 및 {afterItemText} 사이에 삽입\"}");


var $aa5500b11842b014$exports = {};
$aa5500b11842b014$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Paspauskite „Enter“, kad pradėtumėte vilkti.\",\"dragDescriptionTouch\":\"Palieskite dukart, kad pradėtumėte vilkti.\",\"dragDescriptionVirtual\":\"Spustelėkite, kad pradėtumėte vilkti.\",\"dragItem\":\"Vilkti {itemText}\",\"dragSelectedItems\":\"Vilkti {count, plural, one {# pasirinktą elementą} other {# pasirinktus elementus}}\",\"dragStartedKeyboard\":\"Pradėta vilkti. Paspauskite „Tab“, kad pereitumėte į tiesioginę paskirties vietą, tada paspauskite „Enter“, kad numestumėte, arba „Escape“, kad atšauktumėte.\",\"dragStartedTouch\":\"Pradėta vilkti. Eikite į tiesioginę paskirties vietą, tada palieskite dukart, kad numestumėte.\",\"dragStartedVirtual\":\"Pradėta vilkti. Eikite į tiesioginę paskirties vietą ir spustelėkite arba paspauskite „Enter“, kad numestumėte.\",\"dropCanceled\":\"Numetimas atšauktas.\",\"dropComplete\":\"Numesta.\",\"dropDescriptionKeyboard\":\"Paspauskite „Enter“, kad numestumėte. Paspauskite „Escape“, kad atšauktumėte vilkimą.\",\"dropDescriptionTouch\":\"Palieskite dukart, kad numestumėte.\",\"dropDescriptionVirtual\":\"Spustelėkite, kad numestumėte.\",\"dropIndicator\":\"numetimo indikatorius\",\"dropOnItem\":\"Numesti ant {itemText}\",\"dropOnRoot\":\"Numesti ant\",\"endDragKeyboard\":\"Velkama. Paspauskite „Enter“, kad atšauktumėte vilkimą.\",\"endDragTouch\":\"Velkama. Spustelėkite dukart, kad atšauktumėte vilkimą.\",\"endDragVirtual\":\"Velkama. Spustelėkite, kad atšauktumėte vilkimą.\",\"insertAfter\":\"Įterpti po {itemText}\",\"insertBefore\":\"Įterpti prieš {itemText}\",\"insertBetween\":\"Įterpti tarp {beforeItemText} ir {afterItemText}\"}");


var $eaa4373391373ab0$exports = {};
$eaa4373391373ab0$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Nospiediet Enter, lai sāktu vilkšanu.\",\"dragDescriptionTouch\":\"Veiciet dubultskārienu, lai sāktu vilkšanu.\",\"dragDescriptionVirtual\":\"Noklikšķiniet, lai sāktu vilkšanu.\",\"dragItem\":\"Velciet {itemText}\",\"dragSelectedItems\":\"Velciet {count, plural, one {# atlasīto vienumu} other {# atlasītos vienumus}}\",\"dragStartedKeyboard\":\"Uzsākta vilkšana. Nospiediet taustiņu Tab, lai pārietu uz nomešanas mērķi, pēc tam nospiediet Enter, lai nomestu, vai nospiediet Escape, lai atceltu.\",\"dragStartedTouch\":\"Uzsākta vilkšana. Pārejiet uz nomešanas mērķi, pēc tam veiciet dubultskārienu, lai nomestu.\",\"dragStartedVirtual\":\"Uzsākta vilkšana. Pārejiet uz nomešanas mērķi, pēc tam nospiediet Enter, lai nomestu.\",\"dropCanceled\":\"Nomešana atcelta.\",\"dropComplete\":\"Nomešana pabeigta.\",\"dropDescriptionKeyboard\":\"Nospiediet Enter, lai nomestu. Nospiediet Escape, lai atceltu vilkšanu.\",\"dropDescriptionTouch\":\"Veiciet dubultskārienu, lai nomestu.\",\"dropDescriptionVirtual\":\"Noklikšķiniet, lai nomestu.\",\"dropIndicator\":\"nomešanas indikators\",\"dropOnItem\":\"Nometiet uz {itemText}\",\"dropOnRoot\":\"Nometiet uz\",\"endDragKeyboard\":\"Notiek vilkšana. Nospiediet Enter, lai atceltu vilkšanu.\",\"endDragTouch\":\"Notiek vilkšana. Veiciet dubultskārienu, lai atceltu vilkšanu.\",\"endDragVirtual\":\"Notiek vilkšana. Noklikšķiniet, lai atceltu vilkšanu.\",\"insertAfter\":\"Ievietojiet pēc {itemText}\",\"insertBefore\":\"Ievietojiet pirms {itemText}\",\"insertBetween\":\"Ievietojiet starp {beforeItemText} un {afterItemText}\"}");


var $e6059fc992dff5a0$exports = {};
$e6059fc992dff5a0$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Trykk på Enter for å begynne å dra.\",\"dragDescriptionTouch\":\"Dobbelttrykk for å begynne å dra.\",\"dragDescriptionVirtual\":\"Klikk for å begynne å dra.\",\"dragItem\":\"Dra {itemText}\",\"dragSelectedItems\":\"Dra {count, plural, one {# merket element} other {# merkede elementer}}\",\"dragStartedKeyboard\":\"Begynte å dra. Trykk på Tab for å navigere til et mål, og trykk deretter på Enter for å slippe eller på Esc for å avbryte.\",\"dragStartedTouch\":\"Begynte å dra. Naviger til et mål, og dobbelttrykk for å slippe.\",\"dragStartedVirtual\":\"Begynte å dra. Naviger til et mål, og klikk eller trykk på Enter for å slippe.\",\"dropCanceled\":\"Avbrøt slipping.\",\"dropComplete\":\"Slippingen er fullført.\",\"dropDescriptionKeyboard\":\"Trykk på Enter for å slippe. Trykk på Esc hvis du vil avbryte draingen.\",\"dropDescriptionTouch\":\"Dobbelttrykk for å slippe.\",\"dropDescriptionVirtual\":\"Klikk for å slippe.\",\"dropIndicator\":\"slippeindikator\",\"dropOnItem\":\"Slipp på {itemText}\",\"dropOnRoot\":\"Slipp på\",\"endDragKeyboard\":\"Drar. Trykk på Enter hvis du vil avbryte.\",\"endDragTouch\":\"Drar. Dobbelttrykk hvis du vil avbryte.\",\"endDragVirtual\":\"Drar. Klikk hvis du vil avbryte.\",\"insertAfter\":\"Sett inn etter {itemText}\",\"insertBefore\":\"Sett inn før {itemText}\",\"insertBetween\":\"Sett inn mellom {beforeItemText} og {afterItemText}\"}");


var $a8ff6e4691fe50ef$exports = {};
$a8ff6e4691fe50ef$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Druk op Enter om te slepen.\",\"dragDescriptionTouch\":\"Dubbeltik om te slepen.\",\"dragDescriptionVirtual\":\"Klik om met slepen te starten.\",\"dragItem\":\"{itemText} slepen\",\"dragSelectedItems\":\"{count, plural, one {# geselecteerd item} other {# geselecteerde items}} slepen\",\"dragStartedKeyboard\":\"Begonnen met slepen. Druk op Tab om naar een locatie te gaan. Druk dan op Enter om neer te zetten, of op Esc om te annuleren.\",\"dragStartedTouch\":\"Begonnen met slepen. Ga naar de gewenste locatie en dubbeltik om neer te zetten.\",\"dragStartedVirtual\":\"Begonnen met slepen. Ga naar de gewenste locatie en klik of druk op Enter om neer te zetten.\",\"dropCanceled\":\"Neerzetten geannuleerd.\",\"dropComplete\":\"Neerzetten voltooid.\",\"dropDescriptionKeyboard\":\"Druk op Enter om neer te zetten. Druk op Esc om het slepen te annuleren.\",\"dropDescriptionTouch\":\"Dubbeltik om neer te zetten.\",\"dropDescriptionVirtual\":\"Klik om neer te zetten.\",\"dropIndicator\":\"aanwijzer voor neerzetten\",\"dropOnItem\":\"Neerzetten op {itemText}\",\"dropOnRoot\":\"Neerzetten op\",\"endDragKeyboard\":\"Bezig met slepen. Druk op Enter om te annuleren.\",\"endDragTouch\":\"Bezig met slepen. Dubbeltik om te annuleren.\",\"endDragVirtual\":\"Bezig met slepen. Klik om te annuleren.\",\"insertAfter\":\"Plaatsen na {itemText}\",\"insertBefore\":\"Plaatsen vóór {itemText}\",\"insertBetween\":\"Plaatsen tussen {beforeItemText} en {afterItemText}\"}");


var $a24be3a44c8e585c$exports = {};
$a24be3a44c8e585c$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Naciśnij Enter, aby rozpocząć przeciąganie.\",\"dragDescriptionTouch\":\"Dotknij dwukrotnie, aby rozpocząć przeciąganie.\",\"dragDescriptionVirtual\":\"Kliknij, aby rozpocząć przeciąganie.\",\"dragItem\":\"Przeciągnij {itemText}\",\"dragSelectedItems\":\"Przeciągnij {count, plural, one {# wybrany element} other {# wybranych elementów}}\",\"dragStartedKeyboard\":\"Rozpoczęto przeciąganie. Naciśnij Tab, aby wybrać miejsce docelowe, a następnie naciśnij Enter, aby upuścić, lub Escape, aby anulować.\",\"dragStartedTouch\":\"Rozpoczęto przeciąganie. Wybierz miejsce, w którym chcesz upuścić element, a następnie dotknij dwukrotnie, aby upuścić.F\",\"dragStartedVirtual\":\"Rozpoczęto przeciąganie. Wybierz miejsce, w którym chcesz upuścić element, a następnie kliknij lub naciśnij Enter, aby upuścić.\",\"dropCanceled\":\"Anulowano upuszczenie.\",\"dropComplete\":\"Zakończono upuszczanie.\",\"dropDescriptionKeyboard\":\"Naciśnij Enter, aby upuścić. Naciśnij Escape, aby anulować przeciągnięcie.\",\"dropDescriptionTouch\":\"Dotknij dwukrotnie, aby upuścić.\",\"dropDescriptionVirtual\":\"Kliknij, aby upuścić.\",\"dropIndicator\":\"wskaźnik upuszczenia\",\"dropOnItem\":\"Upuść na {itemText}\",\"dropOnRoot\":\"Upuść\",\"endDragKeyboard\":\"Przeciąganie. Naciśnij Enter, aby anulować przeciągnięcie.\",\"endDragTouch\":\"Przeciąganie. Kliknij dwukrotnie, aby anulować przeciągnięcie.\",\"endDragVirtual\":\"Przeciąganie. Kliknij, aby anulować przeciąganie.\",\"insertAfter\":\"Umieść za {itemText}\",\"insertBefore\":\"Umieść przed {itemText}\",\"insertBetween\":\"Umieść między {beforeItemText} i {afterItemText}\"}");


var $f3714bf5903b5c08$exports = {};
$f3714bf5903b5c08$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Pressione Enter para começar a arrastar.\",\"dragDescriptionTouch\":\"Toque duas vezes para começar a arrastar.\",\"dragDescriptionVirtual\":\"Clique para começar a arrastar.\",\"dragItem\":\"Arrastar {itemText}\",\"dragSelectedItems\":\"Arrastar {count, plural, one {# item selecionado} other {# itens selecionados}}\",\"dragStartedKeyboard\":\"Comece a arrastar. Pressione Tab para navegar até um alvo e, em seguida, pressione Enter para soltar ou pressione Escape para cancelar.\",\"dragStartedTouch\":\"Comece a arrastar. Navegue até um alvo e toque duas vezes para soltar.\",\"dragStartedVirtual\":\"Comece a arrastar. Navegue até um alvo e clique ou pressione Enter para soltar.\",\"dropCanceled\":\"Liberação cancelada.\",\"dropComplete\":\"Liberação concluída.\",\"dropDescriptionKeyboard\":\"Pressione Enter para soltar. Pressione Escape para cancelar.\",\"dropDescriptionTouch\":\"Toque duas vezes para soltar.\",\"dropDescriptionVirtual\":\"Clique para soltar.\",\"dropIndicator\":\"indicador de liberação\",\"dropOnItem\":\"Soltar em {itemText}\",\"dropOnRoot\":\"Soltar\",\"endDragKeyboard\":\"Arrastando. Pressione Enter para cancelar.\",\"endDragTouch\":\"Arrastando. Toque duas vezes para cancelar.\",\"endDragVirtual\":\"Arrastando. Clique para cancelar.\",\"insertAfter\":\"Inserir após {itemText}\",\"insertBefore\":\"Inserir antes de {itemText}\",\"insertBetween\":\"Inserir entre {beforeItemText} e {afterItemText}\"}");


var $504bc2695c05f082$exports = {};
$504bc2695c05f082$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Prima Enter para iniciar o arrasto.\",\"dragDescriptionTouch\":\"Faça duplo toque para começar a arrastar.\",\"dragDescriptionVirtual\":\"Clique para iniciar o arrasto.\",\"dragItem\":\"Arrastar {itemText}\",\"dragSelectedItems\":\"Arrastar {count, plural, one {# item selecionado} outro {# itens selecionados}}\",\"dragStartedKeyboard\":\"Arrasto iniciado. Prima a tecla de tabulação para navegar para um destino para largar, e em seguida prima Enter para largar ou prima Escape para cancelar.\",\"dragStartedTouch\":\"Arrasto iniciado. Navegue para um destino para largar, e em seguida faça duplo toque para largar.\",\"dragStartedVirtual\":\"Arrasto iniciado. Navegue para um destino para largar, e em seguida clique ou prima Enter para largar.\",\"dropCanceled\":\"Largar cancelado.\",\"dropComplete\":\"Largar completo.\",\"dropDescriptionKeyboard\":\"Prima Enter para largar. Prima Escape para cancelar o arrasto.\",\"dropDescriptionTouch\":\"Faça duplo toque para largar.\",\"dropDescriptionVirtual\":\"Clique para largar.\",\"dropIndicator\":\"Indicador de largar\",\"dropOnItem\":\"Largar em {itemText}\",\"dropOnRoot\":\"Largar em\",\"endDragKeyboard\":\"A arrastar. Prima Enter para cancelar o arrasto.\",\"endDragTouch\":\"A arrastar. Faça duplo toque para cancelar o arrasto.\",\"endDragVirtual\":\"A arrastar. Clique para cancelar o arrasto.\",\"insertAfter\":\"Inserir depois de {itemText}\",\"insertBefore\":\"Inserir antes de {itemText}\",\"insertBetween\":\"Inserir entre {beforeItemText} e {afterItemText}\"}");


var $9dd99c60c9b3d8bf$exports = {};
$9dd99c60c9b3d8bf$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Apăsați pe Enter pentru a începe glisarea.\",\"dragDescriptionTouch\":\"Atingeți de două ori pentru a începe să glisați.\",\"dragDescriptionVirtual\":\"Faceți clic pentru a începe glisarea.\",\"dragItem\":\"Glisați {itemText}\",\"dragSelectedItems\":\"Glisați {count, plural, one {# element selectat} other {# elemente selectate}}\",\"dragStartedKeyboard\":\"A început glisarea. Apăsați pe Tab pentru a naviga la o țintă de fixare, apoi apăsați pe Enter pentru a fixa sau apăsați pe Escape pentru a anula glisarea.\",\"dragStartedTouch\":\"A început glisarea. Navigați la o țintă de fixare, apoi atingeți de două ori pentru a fixa.\",\"dragStartedVirtual\":\"A început glisarea. Navigați la o țintă de fixare, apoi faceți clic sau apăsați pe Enter pentru a fixa.\",\"dropCanceled\":\"Fixare anulată.\",\"dropComplete\":\"Fixare finalizată.\",\"dropDescriptionKeyboard\":\"Apăsați pe Enter pentru a fixa. Apăsați pe Escape pentru a anula glisarea.\",\"dropDescriptionTouch\":\"Atingeți de două ori pentru a fixa.\",\"dropDescriptionVirtual\":\"Faceți clic pentru a fixa.\",\"dropIndicator\":\"indicator de fixare\",\"dropOnItem\":\"Fixați pe {itemText}\",\"dropOnRoot\":\"Fixare pe\",\"endDragKeyboard\":\"Se glisează. Apăsați pe Enter pentru a anula glisarea.\",\"endDragTouch\":\"Se glisează. Atingeți de două ori pentru a anula glisarea.\",\"endDragVirtual\":\"Se glisează. Faceți clic pentru a anula glisarea.\",\"insertAfter\":\"Inserați după {itemText}\",\"insertBefore\":\"Inserați înainte de {itemText}\",\"insertBetween\":\"Inserați între {beforeItemText} și {afterItemText}\"}");


var $9bd2293a23586a62$exports = {};
$9bd2293a23586a62$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Нажмите клавишу Enter для начала перетаскивания.\",\"dragDescriptionTouch\":\"Дважды нажмите для начала перетаскивания.\",\"dragDescriptionVirtual\":\"Щелкните для начала перетаскивания.\",\"dragItem\":\"Перетащить {itemText}\",\"dragSelectedItems\":\"Перетащить {count, plural, one {# выбранный элемент} other {# выбранных элем}}\",\"dragStartedKeyboard\":\"Начато перетаскивание. Нажмите клавишу Tab для выбора цели, затем нажмите клавишу Enter, чтобы применить перетаскивание, или клавишу Escape для отмены действия.\",\"dragStartedTouch\":\"Начато перетаскивание. Выберите цель, затем дважды нажмите, чтобы применить перетаскивание.\",\"dragStartedVirtual\":\"Начато перетаскивание. Нажмите клавишу Tab для выбора цели, затем нажмите клавишу Enter, чтобы применить перетаскивание.\",\"dropCanceled\":\"Перетаскивание отменено.\",\"dropComplete\":\"Перетаскивание завершено.\",\"dropDescriptionKeyboard\":\"Нажмите клавишу Enter, чтобы применить перетаскивание. Нажмите клавишу Escape для отмены.\",\"dropDescriptionTouch\":\"Дважды нажмите, чтобы применить перетаскивание.\",\"dropDescriptionVirtual\":\"Щелкните, чтобы применить перетаскивание.\",\"dropIndicator\":\"индикатор перетаскивания\",\"dropOnItem\":\"Перетащить на {itemText}\",\"dropOnRoot\":\"Перетащить на\",\"endDragKeyboard\":\"Перетаскивание. Нажмите клавишу Enter для отмены.\",\"endDragTouch\":\"Перетаскивание. Дважды нажмите для отмены.\",\"endDragVirtual\":\"Перетаскивание. Щелкните для отмены.\",\"insertAfter\":\"Вставить после {itemText}\",\"insertBefore\":\"Вставить перед {itemText}\",\"insertBetween\":\"Вставить между {beforeItemText} и {afterItemText}\"}");


var $0ac761b409ad5969$exports = {};
$0ac761b409ad5969$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Stlačením klávesu Enter začnete presúvanie.\",\"dragDescriptionTouch\":\"Dvojitým kliknutím začnete presúvanie.\",\"dragDescriptionVirtual\":\"Kliknutím začnete presúvanie.\",\"dragItem\":\"Presunúť položku {itemText}\",\"dragSelectedItems\":\"Presunúť {count, plural, one {# vybratú položku} other {# vybraté položky}}\",\"dragStartedKeyboard\":\"Presúvanie sa začalo. Do cieľového umiestnenia prejdete stlačením klávesu Tab. Ak chcete položku umiestniť, stlačte kláves Enter alebo stlačte kláves Esc, ak chcete presúvanie zrušiť.\",\"dragStartedTouch\":\"Presúvanie sa začalo. Prejdite na cieľové umiestnenie a dvojitým kliknutím umiestnite položku.\",\"dragStartedVirtual\":\"Presúvanie sa začalo. Prejdite na cieľové umiestnenie a kliknutím alebo stlačením klávesu Enter umiestnite položku.\",\"dropCanceled\":\"Umiestnenie zrušené.\",\"dropComplete\":\"Umiestnenie dokončené.\",\"dropDescriptionKeyboard\":\"Stlačením klávesu Enter umiestnite položku. Stlačením klávesu Esc zrušíte presúvanie.\",\"dropDescriptionTouch\":\"Dvojitým kliknutím umiestnite položku.\",\"dropDescriptionVirtual\":\"Kliknutím umiestnite položku.\",\"dropIndicator\":\"indikátor umiestnenia\",\"dropOnItem\":\"Umiestniť na položku {itemText}\",\"dropOnRoot\":\"Umiestniť na\",\"endDragKeyboard\":\"Prebieha presúvanie. Ak ho chcete zrušiť, stlačte kláves Enter.\",\"endDragTouch\":\"Prebieha presúvanie. Dvojitým kliknutím ho môžete zrušiť.\",\"endDragVirtual\":\"Prebieha presúvanie.\",\"insertAfter\":\"Vložiť za položku {itemText}\",\"insertBefore\":\"Vložiť pred položku {itemText}\",\"insertBetween\":\"Vložiť medzi položky {beforeItemText} a {afterItemText}\"}");


var $51c1f861269be288$exports = {};
$51c1f861269be288$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Pritisnite tipko Enter za začetek vlečenja.\",\"dragDescriptionTouch\":\"Dvotapnite za začetek vlečenja.\",\"dragDescriptionVirtual\":\"Kliknite za začetek vlečenja.\",\"dragItem\":\"Povleci {itemText}\",\"dragSelectedItems\":\"Povlecite {count, plural, one {# izbran element} other {izbrane elemente (#)}}\",\"dragStartedKeyboard\":\"Vlečenje se je začelo. Pritisnite tipko Tab za pomik na mesto, kamor želite spustiti elemente, in pritisnite tipko Enter, da jih spustite, ali tipko Escape, da prekličete postopek.\",\"dragStartedTouch\":\"Vlečenje se je začelo. Pomaknite se na mesto, kamor želite spustiti elemente, in dvotapnite, da jih spustite.\",\"dragStartedVirtual\":\"Vlečenje se je začelo. Pomaknite se na mesto, kamor želite spustiti elemente, in kliknite ali pritisnite tipko Enter, da jih spustite.\",\"dropCanceled\":\"Spust je preklican.\",\"dropComplete\":\"Spust je končan.\",\"dropDescriptionKeyboard\":\"Pritisnite tipko Enter, da spustite. Pritisnite tipko Escape, da prekličete vlečenje.\",\"dropDescriptionTouch\":\"Dvotapnite, da spustite.\",\"dropDescriptionVirtual\":\"Kliknite, da spustite.\",\"dropIndicator\":\"indikator spusta\",\"dropOnItem\":\"Spusti na mesto {itemText}\",\"dropOnRoot\":\"Spusti na mesto\",\"endDragKeyboard\":\"Vlečenje. Pritisnite tipko Enter za preklic vlečenja.\",\"endDragTouch\":\"Vlečenje. Dvotapnite za preklic vlečenja.\",\"endDragVirtual\":\"Vlečenje. Kliknite, da prekličete vlečenje.\",\"insertAfter\":\"Vstavi za {itemText}\",\"insertBefore\":\"Vstavi pred {itemText}\",\"insertBetween\":\"Vstavi med {beforeItemText} in {afterItemText}\"}");


var $8b1c2798614a98f8$exports = {};
$8b1c2798614a98f8$exports = JSON.parse("{\"dragItem\":\"Prevucite {itemText}\",\"dragSelectedItems\":\"Prevucite {count, plural, one {# izabranu stavku} other {# izabrane stavke}}\",\"dragDescriptionKeyboard\":\"Pritisnite Enter da biste započeli prevlačenje..\",\"dragDescriptionTouch\":\"Dvaput dodirnite za otpuštanje.\",\"dragDescriptionVirtual\":\"Kliknite da biste započeli prevlačenje.\",\"dragStartedKeyboard\":\"Prevlačenje je započeto. Pritisnite Tab da biste otišli do cilja za otpuštanje, zatim pritisnite Enter za ispuštanje ili pritisnite Escape za otkazivanje.\",\"dragStartedTouch\":\"Prevlačenje je započeto. Idite do cilja za otpuštanje, a zatim dvaput dodirnite za otpuštanje.\",\"dragStartedVirtual\":\"Prevlačenje je započeto. Idite do cilja za otpuštanje, a zatim kliknite ili pritinite Enter za otpuštanje.\",\"endDragKeyboard\":\"Prevlačenje u toku. Pritisnite Enter da biste otkazali prevlačenje.\",\"endDragTouch\":\"Prevlačenje u toku. Dvaput dodirnite da biste otkazali prevlačenje.\",\"endDragVirtual\":\"Prevlačenje u toku. Kliknite da biste otkazali prevlačenje.\",\"dropDescriptionKeyboard\":\"Pritisnite Enter da biste otpustili. Pritisnite Escape da biste otkazali prevlačenje.\",\"dropDescriptionTouch\":\"Dvaput dodirnite za otpuštanje.\",\"dropDescriptionVirtual\":\"Kliknite za otpuštanje.\",\"dropCanceled\":\"Otpuštanje je otkazano.\",\"dropComplete\":\"Prevlačenje je završeno.\",\"dropIndicator\":\"Indikator otpuštanja\",\"dropOnRoot\":\"Otpusti na\",\"dropOnItem\":\"Otpusti na {itemText}\",\"insertBefore\":\"Umetnite ispred {itemText}\",\"insertBetween\":\"Umetnite između {beforeItemText} i {afterItemText}\",\"insertAfter\":\"Umetnite posle {itemText}\"}");


var $93a046d6ec95b68d$exports = {};
$93a046d6ec95b68d$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Tryck på enter för att börja dra.\",\"dragDescriptionTouch\":\"Dubbeltryck för att börja dra.\",\"dragDescriptionVirtual\":\"Klicka för att börja dra.\",\"dragItem\":\"Dra {itemText}\",\"dragSelectedItems\":\"Dra {count, plural, one {# valt objekt} other {# valda objekt}}\",\"dragStartedKeyboard\":\"Börja dra. Tryck på tabb för att navigera till målet, tryck på enter för att släppa eller på escape för att avbryta.\",\"dragStartedTouch\":\"Börja dra. Navigera till ett mål och dubbeltryck för att släppa.\",\"dragStartedVirtual\":\"Börja dra. Navigera till ett mål och klicka eller tryck på enter för att släppa.\",\"dropCanceled\":\"Släppåtgärd avbröts.\",\"dropComplete\":\"Släppåtgärd klar.\",\"dropDescriptionKeyboard\":\"Tryck på enter för att släppa. Tryck på escape för att avbryta dragåtgärd.\",\"dropDescriptionTouch\":\"Dubbeltryck för att släppa.\",\"dropDescriptionVirtual\":\"Klicka för att släppa.\",\"dropIndicator\":\"släppindikator\",\"dropOnItem\":\"Släpp på {itemText}\",\"dropOnRoot\":\"Släpp på\",\"endDragKeyboard\":\"Drar. Tryck på enter för att avbryta dragåtgärd.\",\"endDragTouch\":\"Drar. Dubbeltryck för att avbryta dragåtgärd.\",\"endDragVirtual\":\"Drar. Klicka för att avbryta dragåtgärd.\",\"insertAfter\":\"Infoga efter {itemText}\",\"insertBefore\":\"Infoga före {itemText}\",\"insertBetween\":\"Infoga mellan {beforeItemText} och {afterItemText}\"}");


var $f25034a03361b32f$exports = {};
$f25034a03361b32f$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Sürüklemeyi başlatmak için Enter'a basın.\",\"dragDescriptionTouch\":\"Sürüklemeyi başlatmak için çift tıklayın.\",\"dragDescriptionVirtual\":\"Sürüklemeyi başlatmak için tıklayın.\",\"dragItem\":\"{itemText}’i sürükle\",\"dragSelectedItems\":\"Sürükle {count, plural, one {# seçili öge} other {# seçili öge}}\",\"dragStartedKeyboard\":\"Sürükleme başlatıldı. Bir bırakma hedefine gitmek için Tab’a basın, ardından bırakmak için Enter’a basın veya iptal etmek için Escape’e basın.\",\"dragStartedTouch\":\"Sürükleme başlatıldı. Bir bırakma hedefine gidin, ardından bırakmak için çift tıklayın.\",\"dragStartedVirtual\":\"Sürükleme başlatıldı. Bir bırakma hedefine gidin, ardından bırakmak için Enter’a tıklayın veya basın.\",\"dropCanceled\":\"Bırakma iptal edildi.\",\"dropComplete\":\"Bırakma tamamlandı.\",\"dropDescriptionKeyboard\":\"Bırakmak için Enter'a basın. Sürüklemeyi iptal etmek için Escape'e basın.\",\"dropDescriptionTouch\":\"Bırakmak için çift tıklayın.\",\"dropDescriptionVirtual\":\"Bırakmak için tıklayın.\",\"dropIndicator\":\"bırakma göstergesi\",\"dropOnItem\":\"{itemText} üzerine bırak\",\"dropOnRoot\":\"Bırakın\",\"endDragKeyboard\":\"Sürükleme. Sürüklemeyi iptal etmek için Enter'a basın.\",\"endDragTouch\":\"Sürükleme. Sürüklemeyi iptal etmek için çift tıklayın.\",\"endDragVirtual\":\"Sürükleme. Sürüklemeyi iptal etmek için tıklayın.\",\"insertAfter\":\"{itemText}’den sonra gir\",\"insertBefore\":\"{itemText}’den önce gir\",\"insertBetween\":\"{beforeItemText} ve {afterItemText} arasına gir\"}");


var $a08e3c611ee49da2$exports = {};
$a08e3c611ee49da2$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"Натисніть Enter, щоб почати перетягування.\",\"dragDescriptionTouch\":\"Натисніть двічі, щоб почати перетягування.\",\"dragDescriptionVirtual\":\"Натисніть, щоб почати перетягування.\",\"dragItem\":\"Перетягнути {itemText}\",\"dragSelectedItems\":\"Перетягніть {count, plural, one {# вибраний елемент} other {# вибраних елем}}\",\"dragStartedKeyboard\":\"Перетягування почалося. Натисніть Tab, щоб перейти до цілі перетягування, потім натисніть Enter, щоб перетягнути, або Escape, щоб скасувати.\",\"dragStartedTouch\":\"Перетягування почалося. Перейдіть до цілі перетягування, потім натисніть двічі, щоб перетягнути.\",\"dragStartedVirtual\":\"Перетягування почалося. Перейдіть до цілі перетягування, потім натисніть Enter, щоб перетягнути.\",\"dropCanceled\":\"Перетягування скасовано.\",\"dropComplete\":\"Перетягування завершено.\",\"dropDescriptionKeyboard\":\"Натисніть Enter, щоб перетягнути. Натисніть Escape, щоб скасувати перетягування.\",\"dropDescriptionTouch\":\"Натисніть двічі, щоб перетягнути.\",\"dropDescriptionVirtual\":\"Натисніть, щоб перетягнути.\",\"dropIndicator\":\"індикатор перетягування\",\"dropOnItem\":\"Перетягнути на {itemText}\",\"dropOnRoot\":\"Перетягнути на\",\"endDragKeyboard\":\"Триває перетягування. Натисніть Enter, щоб скасувати перетягування.\",\"endDragTouch\":\"Триває перетягування. Натисніть двічі, щоб скасувати перетягування.\",\"endDragVirtual\":\"Триває перетягування. Натисніть, щоб скасувати перетягування.\",\"insertAfter\":\"Вставити після {itemText}\",\"insertBefore\":\"Вставити перед {itemText}\",\"insertBetween\":\"Вставити між {beforeItemText} і {afterItemText}\"}");


var $61a4d9e64a6cdab9$exports = {};
$61a4d9e64a6cdab9$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"按 Enter 开始拖动。\",\"dragDescriptionTouch\":\"双击开始拖动。\",\"dragDescriptionVirtual\":\"单击开始拖动。\",\"dragItem\":\"拖动 {itemText}\",\"dragSelectedItems\":\"拖动 {count, plural, one {# 选中项目} other {# 选中项目}}\",\"dragStartedKeyboard\":\"已开始拖动。按 Tab 导航到放置目标，然后按 Enter 放置或按 Escape 取消。\",\"dragStartedTouch\":\"已开始拖动。导航到放置目标，然后双击放置。\",\"dragStartedVirtual\":\"已开始拖动。导航到放置目标，然后单击或按 Enter 放置。\",\"dropCanceled\":\"放置已取消。\",\"dropComplete\":\"放置已完成。\",\"dropDescriptionKeyboard\":\"按 Enter 放置。按 Escape 取消拖动。\",\"dropDescriptionTouch\":\"双击放置。\",\"dropDescriptionVirtual\":\"单击放置。\",\"dropIndicator\":\"放置标记\",\"dropOnItem\":\"放置于 {itemText}\",\"dropOnRoot\":\"放置于\",\"endDragKeyboard\":\"正在拖动。按 Enter 取消拖动。\",\"endDragTouch\":\"正在拖动。双击取消拖动。\",\"endDragVirtual\":\"正在拖动。单击取消拖动。\",\"insertAfter\":\"插入到 {itemText} 之后\",\"insertBefore\":\"插入到 {itemText} 之前\",\"insertBetween\":\"插入到 {beforeItemText} 和 {afterItemText} 之间\"}");


var $17c8e502212f630e$exports = {};
$17c8e502212f630e$exports = JSON.parse("{\"dragDescriptionKeyboard\":\"按 Enter 鍵以開始拖曳。\",\"dragDescriptionTouch\":\"輕點兩下以開始拖曳。\",\"dragDescriptionVirtual\":\"按一下滑鼠以開始拖曳。\",\"dragItem\":\"拖曳「{itemText}」\",\"dragSelectedItems\":\"拖曳 {count, plural, one {# 個選定項目} other {# 個選定項目}}\",\"dragStartedKeyboard\":\"已開始拖曳。按 Tab 鍵以瀏覽至放置目標，然後按 Enter 鍵以放置，或按 Escape 鍵以取消。\",\"dragStartedTouch\":\"已開始拖曳。瀏覽至放置目標，然後輕點兩下以放置。\",\"dragStartedVirtual\":\"已開始拖曳。瀏覽至放置目標，然後按一下滑鼠或按 Enter 鍵以放置。\",\"dropCanceled\":\"放置已取消。\",\"dropComplete\":\"放置已完成。\",\"dropDescriptionKeyboard\":\"按 Enter 鍵以放置。按 Escape 鍵以取消拖曳。\",\"dropDescriptionTouch\":\"輕點兩下以放置。\",\"dropDescriptionVirtual\":\"按一下滑鼠以放置。\",\"dropIndicator\":\"放置指示器\",\"dropOnItem\":\"放置在「{itemText}」上\",\"dropOnRoot\":\"放置在\",\"endDragKeyboard\":\"拖曳中。按 Enter 鍵以取消拖曳。\",\"endDragTouch\":\"拖曳中。輕點兩下以取消拖曳。\",\"endDragVirtual\":\"拖曳中。按一下滑鼠以取消拖曳。\",\"insertAfter\":\"插入至「{itemText}」之後\",\"insertBefore\":\"插入至「{itemText}」之前\",\"insertBetween\":\"插入至「{beforeItemText}」和「{afterItemText}」之間\"}");


$14fe5d66280042fb$exports = {
    "ar-AE": $1c9f1b04a7993480$exports,
    "bg-BG": $09631426f15616cc$exports,
    "cs-CZ": $cdad92161242fec2$exports,
    "da-DK": $7e062bc20b4172c5$exports,
    "de-DE": $a842ff80116835b7$exports,
    "el-GR": $f97e2dbf52569ee0$exports,
    "en-US": $791591d534a2b953$exports,
    "es-ES": $dda8603fa7652de8$exports,
    "et-EE": $f5cda914d8054ee8$exports,
    "fi-FI": $5a23ae8363c8caf2$exports,
    "fr-FR": $b7f10f5819e7a10c$exports,
    "he-IL": $692d7246b536b83c$exports,
    "hr-HR": $cf83430be2ce79e8$exports,
    "hu-HU": $cabb05addba23acf$exports,
    "it-IT": $34016bd87df3b623$exports,
    "ja-JP": $0a1ecc1b673f0898$exports,
    "ko-KR": $1dcd7f4553d3c317$exports,
    "lt-LT": $aa5500b11842b014$exports,
    "lv-LV": $eaa4373391373ab0$exports,
    "nb-NO": $e6059fc992dff5a0$exports,
    "nl-NL": $a8ff6e4691fe50ef$exports,
    "pl-PL": $a24be3a44c8e585c$exports,
    "pt-BR": $f3714bf5903b5c08$exports,
    "pt-PT": $504bc2695c05f082$exports,
    "ro-RO": $9dd99c60c9b3d8bf$exports,
    "ru-RU": $9bd2293a23586a62$exports,
    "sk-SK": $0ac761b409ad5969$exports,
    "sl-SI": $51c1f861269be288$exports,
    "sr-SP": $8b1c2798614a98f8$exports,
    "sv-SE": $93a046d6ec95b68d$exports,
    "tr-TR": $f25034a03361b32f$exports,
    "uk-UA": $a08e3c611ee49da2$exports,
    "zh-CN": $61a4d9e64a6cdab9$exports,
    "zh-TW": $17c8e502212f630e$exports
};







const $2c10c4496b29acfa$var$MESSAGES = {
    keyboard: {
        start: 'dragDescriptionKeyboard',
        end: 'endDragKeyboard'
    },
    touch: {
        start: 'dragDescriptionTouch',
        end: 'endDragTouch'
    },
    virtual: {
        start: 'dragDescriptionVirtual',
        end: 'endDragVirtual'
    }
};
function $2c10c4496b29acfa$export$7941f8aafa4b6021(options) {
    let formatMessage = $eBeNp$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($14fe5d66280042fb$exports)));
    let state = $eBeNp$useRef({
        options: options,
        x: 0,
        y: 0
    }).current;
    state.options = options;
    let [isDragging, setDragging] = $eBeNp$useState(false);
    let onDragStart = (e)=>{
        let items = options.getItems();
        $67f3878ab73216e8$export$f9c1490890ddd063(e.dataTransfer, items);
        if (typeof options.getAllowedDropOperations === 'function') {
            let allowedOperations = options.getAllowedDropOperations();
            let allowed = $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.none;
            for (let operation of allowedOperations)allowed |= $d9fbf74f15b7641a$export$60b7b4bcf3903d8e[operation] || $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.none;
            e.dataTransfer.effectAllowed = $d9fbf74f15b7641a$export$dd0165308d8bff45[allowed] || 'none';
        }
        // If there is a renderPreview function, use it to render a custom preview image that will
        // appear under the pointer while dragging. If not, the element itself is dragged by the browser.
        if (typeof options.renderPreview === 'function') {
            let preview = options.renderPreview(items);
            if (preview) {
                // Create an off-screen div to render the preview into.
                let node = document.createElement('div');
                node.style.zIndex = '-100';
                node.style.position = 'absolute';
                node.style.top = '0';
                node.style.left = '-100000px';
                document.body.appendChild(node);
                // Call renderPreview to get a JSX element, and render it into the div with React DOM.
                $eBeNp$reactdom.render(preview, node);
                // Compute the offset that the preview will appear under the mouse.
                // If possible, this is based on the point the user clicked on the target.
                // If the preview is much smaller, then just use the center point of the preview.
                let size = node.getBoundingClientRect();
                let rect = e.currentTarget.getBoundingClientRect();
                let x = e.clientX - rect.x;
                let y = e.clientY - rect.y;
                if (x > size.width || y > size.height) {
                    x = size.width / 2;
                    y = size.height / 2;
                }
                e.dataTransfer.setDragImage(node, x, y);
                // Remove the preview from the DOM after a frame so the browser has time to paint.
                requestAnimationFrame(()=>{
                    document.body.removeChild(node);
                });
            }
        }
        if (typeof options.onDragStart === 'function') options.onDragStart({
            type: 'dragstart',
            x: e.clientX,
            y: e.clientY
        });
        state.x = e.clientX;
        state.y = e.clientY;
        // Wait a frame before we set dragging to true so that the browser has time to
        // render the preview image before we update the element that has been dragged.
        requestAnimationFrame(()=>{
            setDragging(true);
        });
    };
    let onDrag = (e)=>{
        if (e.clientX === state.x && e.clientY === state.y) return;
        if (typeof options.onDragMove === 'function') options.onDragMove({
            type: 'dragmove',
            x: e.clientX,
            y: e.clientY
        });
        state.x = e.clientX;
        state.y = e.clientY;
    };
    let onDragEnd = (e)=>{
        if (typeof options.onDragEnd === 'function') options.onDragEnd({
            type: 'dragend',
            x: e.clientX,
            y: e.clientY,
            dropOperation: $d9fbf74f15b7641a$export$608ecc6f1b23c35d[e.dataTransfer.dropEffect]
        });
        setDragging(false);
    };
    let onPress = (e1)=>{
        if (e1.pointerType !== 'keyboard' && e1.pointerType !== 'virtual') return;
        if (typeof state.options.onDragStart === 'function') {
            let rect = e1.target.getBoundingClientRect();
            state.options.onDragStart({
                type: 'dragstart',
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2
            });
        }
        $9a3afe2ad7f63a27$export$549dbcf8649bf3b2({
            element: e1.target,
            items: state.options.getItems(),
            allowedDropOperations: typeof state.options.getAllowedDropOperations === 'function' ? state.options.getAllowedDropOperations() : [
                'move',
                'copy',
                'link'
            ],
            onDragEnd (e) {
                setDragging(false);
                if (typeof state.options.onDragEnd === 'function') state.options.onDragEnd(e);
            }
        }, formatMessage);
        setDragging(true);
    };
    let modality = $67f3878ab73216e8$export$49bac5d6d4b352ea();
    let descriptionProps = $eBeNp$useDescription(formatMessage(!isDragging ? $2c10c4496b29acfa$var$MESSAGES[modality].start : $2c10c4496b29acfa$var$MESSAGES[modality].end));
    return {
        dragProps: {
            draggable: 'true',
            onDragStart: onDragStart,
            onDrag: onDrag,
            onDragEnd: onDragEnd
        },
        dragButtonProps: {
            ...descriptionProps,
            onPress: onPress
        },
        isDragging: isDragging
    };
}


var $60df018aac3cdddd$exports = {};

$parcel$export($60df018aac3cdddd$exports, "useDrop", () => $60df018aac3cdddd$export$ccdee5eaf73cf661);










const $2de2bf8f8fbf3769$var$MESSAGES = {
    keyboard: 'dropDescriptionKeyboard',
    touch: 'dropDescriptionTouch',
    virtual: 'dropDescriptionVirtual'
};
function $2de2bf8f8fbf3769$export$62447ad3d2ec7da6() {
    let formatMessage = $eBeNp$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($14fe5d66280042fb$exports)));
    let modality = $67f3878ab73216e8$export$49bac5d6d4b352ea();
    let dragSession = $9a3afe2ad7f63a27$export$418e185dd3f1b968();
    let descriptionProps = $eBeNp$useDescription(dragSession ? formatMessage($2de2bf8f8fbf3769$var$MESSAGES[modality]) : '');
    return {
        dropProps: {
            ...descriptionProps,
            // Mobile Safari does not properly bubble click events on elements except links or inputs
            // unless there is an onclick handler bound directly to the element itself. By adding this
            // handler, React will take care of adding that for us, and we are able to handle document
            // level click events in the DragManager.
            // See https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
            onClick: ()=>{
            }
        }
    };
}


const $60df018aac3cdddd$var$DROP_ACTIVATE_TIMEOUT = 800;
function $60df018aac3cdddd$export$ccdee5eaf73cf661(options) {
    let [isDropTarget, setDropTarget] = $eBeNp$useState(false);
    let state = $eBeNp$useRef({
        x: 0,
        y: 0,
        dragEnterCount: 0,
        dropEffect: 'none',
        dropActivateTimer: null
    }).current;
    let onDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.clientX === state.x && e.clientY === state.y) {
            e.dataTransfer.dropEffect = state.dropEffect;
            return;
        }
        state.x = e.clientX;
        state.y = e.clientY;
        if (typeof options.getDropOperationForPoint === 'function') {
            let allowedOperations = $60df018aac3cdddd$var$effectAllowedToOperations(e.dataTransfer.effectAllowed);
            let types = new $67f3878ab73216e8$export$7f04ce188c91447c(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            let dropOperation = options.getDropOperationForPoint(types, allowedOperations, state.x - rect.x, state.y - rect.y);
            state.dropEffect = $d9fbf74f15b7641a$export$5eacb0769d26d3b2[dropOperation] || 'none';
        }
        e.dataTransfer.dropEffect = state.dropEffect;
        if (typeof options.onDropMove === 'function') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropMove({
                type: 'dropmove',
                x: state.x - rect.x,
                y: state.y - rect.y
            });
        }
        clearTimeout(state.dropActivateTimer);
        if (typeof options.onDropActivate === 'function' && state.dropEffect !== 'none') {
            let rect = e.currentTarget.getBoundingClientRect();
            state.dropActivateTimer = setTimeout(()=>{
                options.onDropActivate({
                    type: 'dropactivate',
                    x: state.x - rect.x,
                    y: state.y - rect.y
                });
            }, $60df018aac3cdddd$var$DROP_ACTIVATE_TIMEOUT);
        }
    };
    let onDragEnter = (e)=>{
        e.stopPropagation();
        state.dragEnterCount++;
        if (state.dragEnterCount > 1) return;
        let allowedOperations = $60df018aac3cdddd$var$effectAllowedToOperations(e.dataTransfer.effectAllowed);
        let dropOperation = allowedOperations[0];
        if (typeof options.getDropOperation === 'function') {
            let types = new $67f3878ab73216e8$export$7f04ce188c91447c(e.dataTransfer);
            dropOperation = options.getDropOperation(types, allowedOperations);
        }
        if (dropOperation !== 'cancel') setDropTarget(true);
        if (typeof options.getDropOperationForPoint === 'function') {
            let types = new $67f3878ab73216e8$export$7f04ce188c91447c(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            dropOperation = options.getDropOperationForPoint(types, allowedOperations, e.clientX - rect.x, e.clientY - rect.y);
        }
        state.dropEffect = $d9fbf74f15b7641a$export$5eacb0769d26d3b2[dropOperation] || 'none';
        e.dataTransfer.dropEffect = state.dropEffect;
        if (typeof options.onDropEnter === 'function' && dropOperation !== 'cancel') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropEnter({
                type: 'dropenter',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y
            });
        }
        state.x = e.clientX;
        state.y = e.clientY;
    };
    let onDragLeave = (e)=>{
        e.stopPropagation();
        state.dragEnterCount--;
        if (state.dragEnterCount > 0) return;
        if (typeof options.onDropExit === 'function' && state.dropEffect !== 'none') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropExit({
                type: 'dropexit',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y
            });
        }
        setDropTarget(false);
        clearTimeout(state.dropActivateTimer);
    };
    let onDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (typeof options.onDrop === 'function') {
            let dropOperation = $d9fbf74f15b7641a$export$608ecc6f1b23c35d[state.dropEffect];
            let items = $67f3878ab73216e8$export$d9e760437831f8b3(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            let event = {
                type: 'drop',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y,
                items: items,
                dropOperation: dropOperation
            };
            // Wait a frame to dispatch the drop event so that we ensure the dragend event fires first.
            // Otherwise, if onDrop removes the original dragged element from the DOM, dragend will never be fired.
            // This behavior is consistent across browsers, but see this issue for details:
            // https://bugzilla.mozilla.org/show_bug.cgi?id=460801
            setTimeout(()=>{
                options.onDrop(event);
            }, 0);
        }
        if (typeof options.onDropExit === 'function') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropExit({
                type: 'dropexit',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y
            });
        }
        state.dragEnterCount = 0;
        setDropTarget(false);
        clearTimeout(state.dropActivateTimer);
    };
    let optionsRef = $eBeNp$useRef(options);
    optionsRef.current = options;
    $eBeNp$useLayoutEffect(()=>$9a3afe2ad7f63a27$export$c28d9fb4a54e471a({
            element: optionsRef.current.ref.current,
            getDropOperation: optionsRef.current.getDropOperation,
            onDropEnter (e) {
                setDropTarget(true);
                if (typeof optionsRef.current.onDropEnter === 'function') optionsRef.current.onDropEnter(e);
            },
            onDropExit (e) {
                setDropTarget(false);
                if (typeof optionsRef.current.onDropExit === 'function') optionsRef.current.onDropExit(e);
            },
            onDrop (e) {
                if (typeof optionsRef.current.onDrop === 'function') optionsRef.current.onDrop(e);
            },
            onDropActivate (e) {
                if (typeof optionsRef.current.onDropActivate === 'function') optionsRef.current.onDropActivate(e);
            }
        })
    , [
        optionsRef
    ]);
    let { dropProps: dropProps  } = $2de2bf8f8fbf3769$export$62447ad3d2ec7da6();
    return {
        dropProps: {
            ...dropProps,
            onDragEnter: onDragEnter,
            onDragOver: onDragOver,
            onDragLeave: onDragLeave,
            onDrop: onDrop
        },
        isDropTarget: isDropTarget
    };
}
function $60df018aac3cdddd$var$effectAllowedToOperations(effectAllowed) {
    let allowedOperationsBits = $d9fbf74f15b7641a$export$9bbdfc78cf083e16[effectAllowed];
    let allowedOperations = [];
    if (allowedOperationsBits & $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.move) allowedOperations.push('move');
    if (allowedOperationsBits & $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.copy) allowedOperations.push('copy');
    if (allowedOperationsBits & $d9fbf74f15b7641a$export$60b7b4bcf3903d8e.link) allowedOperations.push('link');
    return allowedOperations;
}


var $3f2fc1fa14321642$exports = {};

$parcel$export($3f2fc1fa14321642$exports, "useDroppableCollection", () => $3f2fc1fa14321642$export$f4e2f423c21f7b04);







const $52094732beff43d4$var$AUTOSCROLL_AREA_SIZE = 20;
function $52094732beff43d4$export$6323452ca4533ed8(ref) {
    let scrollableRef = $eBeNp$useRef(null);
    $eBeNp$useEffect(()=>{
        if (ref.current) scrollableRef.current = $eBeNp$getScrollParent(ref.current);
    }, [
        ref
    ]);
    let state = $eBeNp$useRef({
        timer: null,
        dx: 0,
        dy: 0
    }).current;
    let scroll = $eBeNp$useCallback(()=>{
        scrollableRef.current.scrollLeft += state.dx;
        scrollableRef.current.scrollTop += state.dy;
        if (state.timer) state.timer = requestAnimationFrame(scroll);
    }, [
        scrollableRef,
        state
    ]);
    return {
        move (x, y) {
            // Most browsers auto scroll natively, but WebKit on macOS does not (iOS does 🤷‍♂️).
            // https://bugs.webkit.org/show_bug.cgi?id=222636
            if (!$eBeNp$isWebKit() || $eBeNp$isIOS() || !scrollableRef.current) return;
            let box = scrollableRef.current.getBoundingClientRect();
            let left = $52094732beff43d4$var$AUTOSCROLL_AREA_SIZE;
            let top = $52094732beff43d4$var$AUTOSCROLL_AREA_SIZE;
            let bottom = box.height - $52094732beff43d4$var$AUTOSCROLL_AREA_SIZE;
            let right = box.width - $52094732beff43d4$var$AUTOSCROLL_AREA_SIZE;
            if (x < left || x > right || y < top || y > bottom) {
                if (x < left) state.dx = x - left;
                else if (x > right) state.dx = x - right;
                if (y < top) state.dy = y - top;
                else if (y > bottom) state.dy = y - bottom;
                if (!state.timer) state.timer = requestAnimationFrame(scroll);
            } else this.stop();
        },
        stop () {
            if (state.timer) {
                cancelAnimationFrame(state.timer);
                state.timer = null;
            }
        }
    };
}




const $3f2fc1fa14321642$var$DROP_POSITIONS = [
    'before',
    'on',
    'after'
];
function $3f2fc1fa14321642$export$f4e2f423c21f7b04(props, state1, ref) {
    let localState = $eBeNp$useRef({
        props: props,
        state: state1,
        nextTarget: null,
        dropOperation: null
    }).current;
    localState.props = props;
    localState.state = state1;
    let autoScroll = $52094732beff43d4$export$6323452ca4533ed8(ref);
    let { dropProps: dropProps  } = $60df018aac3cdddd$export$ccdee5eaf73cf661({
        ref: ref,
        onDropEnter (e) {
            let target = props.getDropTargetFromPoint(e.x, e.y);
            state1.setTarget(target);
        },
        onDropMove (e) {
            state1.setTarget(localState.nextTarget);
            autoScroll.move(e.x, e.y);
        },
        getDropOperationForPoint (types, allowedOperations, x, y) {
            let target = props.getDropTargetFromPoint(x, y);
            if (!target) {
                localState.dropOperation = 'cancel';
                localState.nextTarget = null;
                return 'cancel';
            }
            if (state1.isDropTarget(target)) {
                localState.nextTarget = target;
                return localState.dropOperation;
            }
            localState.dropOperation = state1.getDropOperation(target, types, allowedOperations);
            // If the target doesn't accept the drop, see if the root accepts it instead.
            if (localState.dropOperation === 'cancel') {
                let rootTarget = {
                    type: 'root'
                };
                let dropOperation = state1.getDropOperation(rootTarget, types, allowedOperations);
                if (dropOperation !== 'cancel') {
                    target = rootTarget;
                    localState.dropOperation = dropOperation;
                }
            }
            localState.nextTarget = localState.dropOperation === 'cancel' ? null : target;
            return localState.dropOperation;
        },
        onDropExit () {
            state1.setTarget(null);
            autoScroll.stop();
        },
        onDropActivate (e) {
            if (state1.target?.type === 'item' && state1.target?.dropPosition === 'on' && typeof props.onDropActivate === 'function') props.onDropActivate({
                type: 'dropactivate',
                x: e.x,
                y: e.y,
                target: state1.target
            });
        },
        onDrop (e) {
            if (state1.target && typeof props.onDrop === 'function') onDrop(e, state1.target);
        }
    });
    let droppingState = $eBeNp$useRef(null);
    let onDrop = $eBeNp$useCallback((e, target)=>{
        let { state: state2  } = localState;
        // Focus the collection.
        state2.selectionManager.setFocused(true);
        // Save some state of the collection/selection before the drop occurs so we can compare later.
        let focusedKey = state2.selectionManager.focusedKey;
        droppingState.current = {
            timeout: null,
            focusedKey: focusedKey,
            collection: state2.collection,
            selectedKeys: state2.selectionManager.selectedKeys
        };
        localState.props.onDrop({
            type: 'drop',
            x: e.x,
            y: e.y,
            target: target,
            items: e.items,
            dropOperation: e.dropOperation
        });
        // Wait for a short time period after the onDrop is called to allow the data to be read asynchronously
        // and for React to re-render. If an insert occurs during this time, it will be selected/focused below.
        // If items are not "immediately" inserted by the onDrop handler, the application will need to handle
        // selecting and focusing those items themselves.
        droppingState.current.timeout = setTimeout(()=>{
            // If focus didn't move already (e.g. due to an insert), and the user dropped on an item,
            // focus that item and show the focus ring to give the user feedback that the drop occurred.
            // Also show the focus ring if the focused key is not selected, e.g. in case of a reorder.
            let { state: state  } = localState;
            if (state.selectionManager.focusedKey === focusedKey) {
                if (target.type === 'item' && target.dropPosition === 'on' && state.collection.getItem(target.key) != null) {
                    state.selectionManager.setFocusedKey(target.key);
                    state.selectionManager.setFocused(true);
                    $eBeNp$setInteractionModality('keyboard');
                } else if (!state.selectionManager.isSelected(focusedKey)) $eBeNp$setInteractionModality('keyboard');
            }
            droppingState.current = null;
        }, 50);
    }, [
        localState
    ]);
    // eslint-disable-next-line arrow-body-style
    $eBeNp$useEffect(()=>{
        return ()=>{
            if (droppingState.current) clearTimeout(droppingState.current.timeout);
        };
    }, []);
    $eBeNp$useLayoutEffect(()=>{
        // If an insert occurs during a drop, we want to immediately select these items to give
        // feedback to the user that a drop occurred. Only do this if the selection didn't change
        // since the drop started so we don't override if the user or application did something.
        if (droppingState.current && state1.selectionManager.isFocused && state1.collection.size > droppingState.current.collection.size && state1.selectionManager.isSelectionEqual(droppingState.current.selectedKeys)) {
            let newKeys = new Set();
            for (let key of state1.collection.getKeys())if (!droppingState.current.collection.getItem(key)) newKeys.add(key);
            state1.selectionManager.setSelectedKeys(newKeys);
            // If the focused item didn't change since the drop occurred, also focus the first
            // inserted item. If selection is disabled, then also show the focus ring so there
            // is some indication that items were added.
            if (state1.selectionManager.focusedKey === droppingState.current.focusedKey) {
                let first = newKeys.keys().next().value;
                state1.selectionManager.setFocusedKey(first);
                if (state1.selectionManager.selectionMode === 'none') $eBeNp$setInteractionModality('keyboard');
            }
            droppingState.current = null;
        }
    });
    $eBeNp$useEffect(()=>{
        let getNextTarget1 = (target, wrap = true)=>{
            if (!target) return {
                type: 'root'
            };
            let { keyboardDelegate: keyboardDelegate  } = localState.props;
            let nextKey = target.type === 'item' ? keyboardDelegate.getKeyBelow(target.key) : keyboardDelegate.getFirstKey();
            let dropPosition = 'before';
            if (target.type === 'item') {
                let positionIndex = $3f2fc1fa14321642$var$DROP_POSITIONS.indexOf(target.dropPosition);
                let nextDropPosition = $3f2fc1fa14321642$var$DROP_POSITIONS[positionIndex + 1];
                if (positionIndex < $3f2fc1fa14321642$var$DROP_POSITIONS.length - 1 && !(nextDropPosition === 'after' && nextKey != null)) return {
                    type: 'item',
                    key: target.key,
                    dropPosition: nextDropPosition
                };
                // If the last drop position was 'after', then 'before' on the next key is equivalent.
                // Switch to 'on' instead.
                if (target.dropPosition === 'after') dropPosition = 'on';
            }
            if (nextKey == null) {
                if (wrap) return {
                    type: 'root'
                };
                return null;
            }
            return {
                type: 'item',
                key: nextKey,
                dropPosition: dropPosition
            };
        };
        let getPreviousTarget = (target, wrap = true)=>{
            let { keyboardDelegate: keyboardDelegate  } = localState.props;
            let nextKey = target?.type === 'item' ? keyboardDelegate.getKeyAbove(target.key) : keyboardDelegate.getLastKey();
            let dropPosition = !target || target.type === 'root' ? 'after' : 'on';
            if (target?.type === 'item') {
                let positionIndex = $3f2fc1fa14321642$var$DROP_POSITIONS.indexOf(target.dropPosition);
                let nextDropPosition = $3f2fc1fa14321642$var$DROP_POSITIONS[positionIndex - 1];
                if (positionIndex > 0 && nextDropPosition !== 'after') return {
                    type: 'item',
                    key: target.key,
                    dropPosition: nextDropPosition
                };
                // If the last drop position was 'before', then 'after' on the previous key is equivalent.
                // Switch to 'on' instead.
                if (target.dropPosition === 'before') dropPosition = 'on';
            }
            if (nextKey == null) {
                if (wrap) return {
                    type: 'root'
                };
                return null;
            }
            return {
                type: 'item',
                key: nextKey,
                dropPosition: dropPosition
            };
        };
        let nextValidTarget = (target, types, allowedDropOperations, getNextTarget, wrap = true)=>{
            let seenRoot = 0;
            let operation;
            do {
                let nextTarget = getNextTarget(target, wrap);
                if (!nextTarget) return null;
                target = nextTarget;
                operation = localState.state.getDropOperation(nextTarget, types, allowedDropOperations);
                if (target.type === 'root') seenRoot++;
            }while (operation === 'cancel' && !localState.state.isDropTarget(target) && seenRoot < 2)
            if (operation === 'cancel') return null;
            return target;
        };
        return $9a3afe2ad7f63a27$export$c28d9fb4a54e471a({
            element: ref.current,
            getDropOperation (types, allowedOperations) {
                if (localState.state.target) return localState.state.getDropOperation(localState.state.target, types, allowedOperations);
                // Check if any of the targets accept the drop.
                // TODO: should we have a faster way of doing this or e.g. for pagination?
                let target = nextValidTarget(null, types, allowedOperations, getNextTarget1);
                return target ? 'move' : 'cancel';
            },
            onDropEnter (e, drag) {
                let types = $67f3878ab73216e8$export$e1d41611756c6326(drag.items);
                let selectionManager = localState.state.selectionManager;
                let target;
                // When entering the droppable collection for the first time, the default drop target
                // is after the focused key.
                let key = selectionManager.focusedKey;
                let dropPosition = 'after';
                // If the focused key is a cell, get the parent item instead.
                // For now, we assume that individual cells cannot be dropped on.
                let item = localState.state.collection.getItem(key);
                if (item?.type === 'cell') key = item.parentKey;
                // If the focused item is also selected, the default drop target is after the last selected item.
                // But if the focused key is the first selected item, then default to before the first selected item.
                // This is to make reordering lists slightly easier. If you select top down, we assume you want to
                // move the items down. If you select bottom up, we assume you want to move the items up.
                if (selectionManager.isSelected(key)) {
                    if (selectionManager.selectedKeys.size > 1 && selectionManager.firstSelectedKey === key) dropPosition = 'before';
                    else key = selectionManager.lastSelectedKey;
                }
                if (key != null) {
                    target = {
                        type: 'item',
                        key: key,
                        dropPosition: dropPosition
                    };
                    // If the default target is not valid, find the next one that is.
                    if (localState.state.getDropOperation(target, types, drag.allowedDropOperations) === 'cancel') target = nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget1, false) ?? nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false);
                }
                // If no focused key, then start from the root.
                if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget1);
                localState.state.setTarget(target);
            },
            onDropExit () {
                localState.state.setTarget(null);
            },
            onDropTargetEnter (target) {
                localState.state.setTarget(target);
            },
            onDropActivate (e) {
                if (localState.state.target?.type === 'item' && localState.state.target?.dropPosition === 'on' && typeof localState.props.onDropActivate === 'function') localState.props.onDropActivate({
                    type: 'dropactivate',
                    x: e.x,
                    y: e.y,
                    target: localState.state.target
                });
            },
            onDrop (e, target) {
                if (localState.state.target && typeof localState.props.onDrop === 'function') onDrop(e, target || localState.state.target);
            },
            onKeyDown (e, drag) {
                let { keyboardDelegate: keyboardDelegate  } = localState.props;
                let types = $67f3878ab73216e8$export$e1d41611756c6326(drag.items);
                switch(e.key){
                    case 'ArrowDown':
                        if (keyboardDelegate.getKeyBelow) {
                            let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, getNextTarget1);
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'ArrowUp':
                        if (keyboardDelegate.getKeyAbove) {
                            let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, getPreviousTarget);
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'Home':
                        if (keyboardDelegate.getFirstKey) {
                            let target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget1);
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'End':
                        if (keyboardDelegate.getLastKey) {
                            let target = nextValidTarget(null, types, drag.allowedDropOperations, getPreviousTarget);
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'PageDown':
                        if (keyboardDelegate.getKeyPageBelow) {
                            let target = localState.state.target;
                            if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget1);
                            else {
                                // If on the root, go to the item a page below the top. Otherwise a page below the current item.
                                let nextKey = keyboardDelegate.getKeyPageBelow(target.type === 'item' ? target.key : keyboardDelegate.getFirstKey());
                                let dropPosition = target.type === 'item' ? target.dropPosition : 'after';
                                // If there is no next key, or we are starting on the last key, jump to the last possible position.
                                if (nextKey == null || target.type === 'item' && target.key === keyboardDelegate.getLastKey()) {
                                    nextKey = keyboardDelegate.getLastKey();
                                    dropPosition = 'after';
                                }
                                target = {
                                    type: 'item',
                                    key: nextKey,
                                    dropPosition: dropPosition
                                };
                                // If the target does not accept the drop, find the next valid target.
                                // If no next valid target, find the previous valid target.
                                let operation = localState.state.getDropOperation(target, types, drag.allowedDropOperations);
                                if (operation === 'cancel') target = nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget1, false) ?? nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false);
                            }
                            localState.state.setTarget(target ?? localState.state.target);
                        }
                        break;
                    case 'PageUp':
                        {
                            if (!keyboardDelegate.getKeyPageAbove) break;
                            let target = localState.state.target;
                            if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getPreviousTarget);
                            else if (target.type === 'item') {
                                // If at the top already, switch to the root. Otherwise navigate a page up.
                                if (target.key === keyboardDelegate.getFirstKey()) target = {
                                    type: 'root'
                                };
                                else {
                                    let nextKey = keyboardDelegate.getKeyPageAbove(target.key);
                                    let dropPosition = target.dropPosition;
                                    if (nextKey == null) {
                                        nextKey = keyboardDelegate.getFirstKey();
                                        dropPosition = 'before';
                                    }
                                    target = {
                                        type: 'item',
                                        key: nextKey,
                                        dropPosition: dropPosition
                                    };
                                }
                                // If the target does not accept the drop, find the previous valid target.
                                // If no next valid target, find the next valid target.
                                let operation = localState.state.getDropOperation(target, types, drag.allowedDropOperations);
                                if (operation === 'cancel') target = nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false) ?? nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget1, false);
                            }
                            localState.state.setTarget(target ?? localState.state.target);
                            break;
                        }
                }
            }
        });
    }, [
        localState,
        ref,
        onDrop
    ]);
    let id = $67f3878ab73216e8$export$b1601eb39394a581(state1);
    return {
        collectionProps: $eBeNp$mergeProps(dropProps, {
            id: id,
            // Remove description from collection element. If dropping on the entire collection,
            // there should be a drop indicator that has this description, so no need to double announce.
            'aria-describedby': null
        })
    };
}


var $4857be9777f5de1c$exports = {};

$parcel$export($4857be9777f5de1c$exports, "useDroppableItem", () => $4857be9777f5de1c$export$f7b0c5d28b66b6a5);




function $4857be9777f5de1c$export$f7b0c5d28b66b6a5(options, state, ref) {
    let { dropProps: dropProps  } = $2de2bf8f8fbf3769$export$62447ad3d2ec7da6();
    $eBeNp$useEffect(()=>{
        if (ref.current) return $9a3afe2ad7f63a27$export$aef80212ac99c003({
            element: ref.current,
            target: options.target,
            getDropOperation (types, allowedOperations) {
                return state.getDropOperation(options.target, types, allowedOperations);
            }
        });
    }, [
        ref,
        options.target,
        state
    ]);
    let dragSession = $9a3afe2ad7f63a27$export$418e185dd3f1b968();
    let isValidDropTarget = dragSession && state.getDropOperation(options.target, $67f3878ab73216e8$export$e1d41611756c6326(dragSession.dragTarget.items), dragSession.dragTarget.allowedDropOperations) !== 'cancel';
    let isDropTarget = state.isDropTarget(options.target);
    $eBeNp$useEffect(()=>{
        if (dragSession && isDropTarget && ref.current) ref.current.focus();
    }, [
        isDropTarget,
        dragSession,
        ref
    ]);
    return {
        dropProps: {
            ...dropProps,
            'aria-hidden': !dragSession || isValidDropTarget ? undefined : 'true'
        }
    };
}


var $9f4fc3c7686f5514$exports = {};

$parcel$export($9f4fc3c7686f5514$exports, "useDropIndicator", () => $9f4fc3c7686f5514$export$8d0e41d2815afac5);






function $9f4fc3c7686f5514$export$8d0e41d2815afac5(props, state, ref) {
    let { target: target  } = props;
    let { collection: collection  } = state;
    let formatMessage = $eBeNp$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($14fe5d66280042fb$exports)));
    let dragSession = $9a3afe2ad7f63a27$export$418e185dd3f1b968();
    let { dropProps: dropProps  } = $4857be9777f5de1c$export$f7b0c5d28b66b6a5(props, state, ref);
    let id = $eBeNp$useId();
    let getText = (key)=>collection.getItem(key)?.textValue
    ;
    let label = '';
    let labelledBy;
    if (target.type === 'root') {
        label = formatMessage('dropOnRoot');
        labelledBy = `${id} ${$67f3878ab73216e8$export$3093291712f09a77(state)}`;
    } else if (target.dropPosition === 'on') label = formatMessage('dropOnItem', {
        itemText: getText(target.key)
    });
    else {
        let before = target.dropPosition === 'before' ? collection.getKeyBefore(target.key) : target.key;
        let after = target.dropPosition === 'after' ? collection.getKeyAfter(target.key) : target.key;
        if (before && after) label = formatMessage('insertBetween', {
            beforeItemText: getText(before),
            afterItemText: getText(after)
        });
        else if (before) label = formatMessage('insertAfter', {
            itemText: getText(before)
        });
        else if (after) label = formatMessage('insertBefore', {
            itemText: getText(after)
        });
    }
    return {
        dropIndicatorProps: {
            ...dropProps,
            id: id,
            'aria-roledescription': formatMessage('dropIndicator'),
            'aria-label': label,
            'aria-labelledby': labelledBy,
            'aria-hidden': !dragSession ? 'true' : dropProps['aria-hidden'],
            tabIndex: -1
        }
    };
}


var $2be3859d58f3a6eb$exports = {};

$parcel$export($2be3859d58f3a6eb$exports, "useDraggableItem", () => $2be3859d58f3a6eb$export$b35afafff42da2d9);



function $2be3859d58f3a6eb$export$b35afafff42da2d9(props, state) {
    let formatMessage = $eBeNp$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($14fe5d66280042fb$exports)));
    let { dragProps: dragProps , dragButtonProps: dragButtonProps  } = $2c10c4496b29acfa$export$7941f8aafa4b6021({
        getItems () {
            return state.getItems(props.key);
        },
        renderPreview () {
            return state.renderPreview(props.key);
        },
        onDragStart (e) {
            state.startDrag(props.key, e);
        },
        onDragMove (e) {
            state.moveDrag(e);
        },
        onDragEnd (e) {
            state.endDrag(e);
        }
    });
    let item = state.collection.getItem(props.key);
    let numSelectedKeys = state.selectionManager.selectedKeys.size;
    let isSelected = state.selectionManager.isSelected(props.key);
    let message;
    if (isSelected && numSelectedKeys > 1) message = formatMessage('dragSelectedItems', {
        count: numSelectedKeys
    });
    else message = formatMessage('dragItem', {
        itemText: item?.textValue ?? ''
    });
    return {
        dragProps: dragProps,
        dragButtonProps: {
            ...dragButtonProps,
            'aria-label': message
        }
    };
}


var $fa57ef3af29fe2be$exports = {};

$parcel$export($fa57ef3af29fe2be$exports, "useClipboard", () => $fa57ef3af29fe2be$export$2314ca2a3e892862);




const $fa57ef3af29fe2be$var$globalEvents = new Map();
function $fa57ef3af29fe2be$var$addGlobalEventListener(event, fn) {
    let eventData = $fa57ef3af29fe2be$var$globalEvents.get(event);
    if (!eventData) {
        let handlers = new Set();
        let listener = (e)=>{
            for (let handler of handlers)handler(e);
        };
        eventData = {
            listener: listener,
            handlers: handlers
        };
        $fa57ef3af29fe2be$var$globalEvents.set(event, eventData);
        document.addEventListener(event, listener);
    }
    eventData.handlers.add(fn);
    return ()=>{
        eventData.handlers.delete(fn);
        if (eventData.handlers.size === 0) {
            document.removeEventListener(event, eventData.listener);
            $fa57ef3af29fe2be$var$globalEvents.delete(event);
        }
    };
}
function $fa57ef3af29fe2be$export$2314ca2a3e892862(options1) {
    let ref = $eBeNp$useRef(options1);
    ref.current = options1;
    let isFocusedRef = $eBeNp$useRef(false);
    let { focusProps: focusProps  } = $eBeNp$useFocus({
        onFocusChange: (isFocused)=>{
            isFocusedRef.current = isFocused;
        }
    });
    $eBeNp$useEffect(()=>{
        let onBeforeCopy = (e)=>{
            // Enable the "Copy" menu item in Safari if this element is focused and copying is supported.
            let options = ref.current;
            if (isFocusedRef.current && options.getItems) e.preventDefault();
        };
        let onCopy = (e)=>{
            let options = ref.current;
            if (!isFocusedRef.current || !options.getItems) return;
            e.preventDefault();
            $67f3878ab73216e8$export$f9c1490890ddd063(e.clipboardData, options.getItems());
            options.onCopy?.();
        };
        let onBeforeCut = (e)=>{
            let options = ref.current;
            if (isFocusedRef.current && options.onCut && options.getItems) e.preventDefault();
        };
        let onCut = (e)=>{
            let options = ref.current;
            if (!isFocusedRef.current || !options.onCut || !options.getItems) return;
            e.preventDefault();
            $67f3878ab73216e8$export$f9c1490890ddd063(e.clipboardData, options.getItems());
            options.onCut();
        };
        let onBeforePaste = (e)=>{
            let options = ref.current;
            // Unfortunately, e.clipboardData.types is not available in this event so we always
            // have to enable the Paste menu item even if the type of data is unsupported.
            if (isFocusedRef.current && options.onPaste) e.preventDefault();
        };
        let onPaste = (e)=>{
            let options = ref.current;
            if (!isFocusedRef.current || !options.onPaste) return;
            e.preventDefault();
            let items = $67f3878ab73216e8$export$d9e760437831f8b3(e.clipboardData);
            options.onPaste(items);
        };
        return $eBeNp$chain($fa57ef3af29fe2be$var$addGlobalEventListener('beforecopy', onBeforeCopy), $fa57ef3af29fe2be$var$addGlobalEventListener('copy', onCopy), $fa57ef3af29fe2be$var$addGlobalEventListener('beforecut', onBeforeCut), $fa57ef3af29fe2be$var$addGlobalEventListener('cut', onCut), $fa57ef3af29fe2be$var$addGlobalEventListener('beforepaste', onBeforePaste), $fa57ef3af29fe2be$var$addGlobalEventListener('paste', onPaste));
    }, []);
    return {
        clipboardProps: focusProps
    };
}




export {$2c10c4496b29acfa$export$7941f8aafa4b6021 as useDrag, $60df018aac3cdddd$export$ccdee5eaf73cf661 as useDrop, $3f2fc1fa14321642$export$f4e2f423c21f7b04 as useDroppableCollection, $4857be9777f5de1c$export$f7b0c5d28b66b6a5 as useDroppableItem, $9f4fc3c7686f5514$export$8d0e41d2815afac5 as useDropIndicator, $2be3859d58f3a6eb$export$b35afafff42da2d9 as useDraggableItem, $fa57ef3af29fe2be$export$2314ca2a3e892862 as useClipboard};
//# sourceMappingURL=module.js.map
