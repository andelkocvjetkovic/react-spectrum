var $5ZyNq$react = require("react");
var $5ZyNq$reactariafocus = require("@react-aria/focus");
var $5ZyNq$reactariautils = require("@react-aria/utils");
var $5ZyNq$reactariai18n = require("@react-aria/i18n");
var $5ZyNq$reactariainteractions = require("@react-aria/interactions");

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
var $7d039047c126afc2$exports = {};

$parcel$export($7d039047c126afc2$exports, "useSelectableCollection", () => $7d039047c126afc2$export$d6daf82dcd84e87c);





function $fd902048a837f7b5$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return $5ZyNq$reactariautils.isAppleDevice() ? e.altKey : e.ctrlKey;
}
function $fd902048a837f7b5$export$16792effe837dba3(e) {
    if ($5ZyNq$reactariautils.isMac()) return e.metaKey;
    return e.ctrlKey;
}



var $f5e34458564766b6$exports = {};

$parcel$export($f5e34458564766b6$exports, "useTypeSelect", () => $f5e34458564766b6$export$e32c88dfddc6e1d8);

function $f5e34458564766b6$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate , selectionManager: selectionManager , onTypeSelect: onTypeSelect  } = options;
    let state = $5ZyNq$react.useRef({
        search: '',
        timeout: null
    }).current;
    let onKeyDown = (e)=>{
        let character = $f5e34458564766b6$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey) return;
        // Do not propagate the Spacebar event if it's meant to be part of the search.
        // When we time out, the search term becomes empty, hence the check on length.
        // Trimming is to account for the case of pressing the Spacebar more than once,
        // which should cycle through the selection/deselection of the focused item.
        if (character === ' ' && state.search.trim().length > 0) {
            e.preventDefault();
            if (!('continuePropagation' in e)) e.stopPropagation();
        }
        state.search += character;
        // Use the delegate to find a key to focus.
        // Prioritize items after the currently focused item, falling back to searching the whole list.
        let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
        // If no key found, search from the top.
        if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
        if (key != null) {
            selectionManager.setFocusedKey(key);
            if (onTypeSelect) onTypeSelect(key);
        }
        clearTimeout(state.timeout);
        state.timeout = setTimeout(()=>{
            state.search = '';
        }, 500);
    };
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
        }
    };
}
function $f5e34458564766b6$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return '';
}


function $7d039047c126afc2$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager , keyboardDelegate: delegate , ref: ref , autoFocus: autoFocus = false , shouldFocusWrap: shouldFocusWrap = false , disallowEmptySelection: disallowEmptySelection = false , disallowSelectAll: disallowSelectAll = false , selectOnFocus: selectOnFocus = manager.selectionBehavior === 'replace' , disallowTypeAhead: disallowTypeAhead = false , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation = false , isVirtualized: isVirtualized , scrollRef: // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref  } = options;
    let { direction: direction  } = $5ZyNq$reactariai18n.useLocale();
    let onKeyDown = (e)=>{
        // Prevent option + tab from doing anything since it doesn't move focus to the cells, only buttons/checkboxes
        if (e.altKey && e.key === 'Tab') e.preventDefault();
        // Keyboard events bubble through portals. Don't handle keyboard events
        // for elements outside the collection (e.g. menus).
        if (!ref.current.contains(e.target)) return;
        const navigateToKey = (key, childFocus)=>{
            if (key != null) {
                manager.setFocusedKey(key, childFocus);
                if (e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(key);
                else if (selectOnFocus && !$fd902048a837f7b5$export$d3e3bd3e26688c04(e)) manager.replaceSelection(key);
            }
        };
        switch(e.key){
            case 'ArrowDown':
                if (delegate.getKeyBelow) {
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : delegate.getFirstKey?.();
                    if (nextKey == null && shouldFocusWrap) nextKey = delegate.getFirstKey?.(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'ArrowUp':
                if (delegate.getKeyAbove) {
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : delegate.getLastKey?.();
                    if (nextKey == null && shouldFocusWrap) nextKey = delegate.getLastKey?.(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'ArrowLeft':
                if (delegate.getKeyLeftOf) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
                    navigateToKey(nextKey, direction === 'rtl' ? 'first' : 'last');
                }
                break;
            case 'ArrowRight':
                if (delegate.getKeyRightOf) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyRightOf(manager.focusedKey);
                    navigateToKey(nextKey, direction === 'rtl' ? 'last' : 'first');
                }
                break;
            case 'Home':
                if (delegate.getFirstKey) {
                    e.preventDefault();
                    let firstKey = delegate.getFirstKey(manager.focusedKey, $fd902048a837f7b5$export$16792effe837dba3(e));
                    manager.setFocusedKey(firstKey);
                    if ($fd902048a837f7b5$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(firstKey);
                    else if (selectOnFocus) manager.replaceSelection(firstKey);
                }
                break;
            case 'End':
                if (delegate.getLastKey) {
                    e.preventDefault();
                    let lastKey = delegate.getLastKey(manager.focusedKey, $fd902048a837f7b5$export$16792effe837dba3(e));
                    manager.setFocusedKey(lastKey);
                    if ($fd902048a837f7b5$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(lastKey);
                    else if (selectOnFocus) manager.replaceSelection(lastKey);
                }
                break;
            case 'PageDown':
                if (delegate.getKeyPageBelow) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'PageUp':
                if (delegate.getKeyPageAbove) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'a':
                if ($fd902048a837f7b5$export$16792effe837dba3(e) && manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
                    e.preventDefault();
                    manager.selectAll();
                }
                break;
            case 'Escape':
                e.preventDefault();
                if (!disallowEmptySelection) manager.clearSelection();
                break;
            case 'Tab':
                if (!allowsTabNavigation) {
                    // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
                    // However, collections should be treated as a single tab stop, with arrow key navigation internally.
                    // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
                    // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
                    // in the collection, so that the browser default behavior will apply starting from that element
                    // rather than the currently focused one.
                    if (e.shiftKey) ref.current.focus();
                    else {
                        let walker = $5ZyNq$reactariafocus.getFocusableTreeWalker(ref.current, {
                            tabbable: true
                        });
                        let next;
                        let last;
                        do {
                            last = walker.lastChild();
                            if (last) next = last;
                        }while (last)
                        if (next && !next.contains(document.activeElement)) $5ZyNq$reactariautils.focusWithoutScrolling(next);
                    }
                    break;
                }
        }
    };
    // Store the scroll position so we can restore it later.
    let scrollPos = $5ZyNq$react.useRef({
        top: 0,
        left: 0
    });
    $5ZyNq$reactariautils.useEvent(scrollRef, 'scroll', isVirtualized ? null : ()=>{
        scrollPos.current = {
            top: scrollRef.current.scrollTop,
            left: scrollRef.current.scrollLeft
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!e.currentTarget.contains(e.target)) return;
        manager.setFocused(true);
        if (manager.focusedKey == null) {
            let navigateToFirstKey = (key)=>{
                if (key != null) {
                    manager.setFocusedKey(key);
                    if (selectOnFocus) manager.replaceSelection(key);
                }
            };
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey(manager.lastSelectedKey ?? delegate.getLastKey());
            else navigateToFirstKey(manager.firstSelectedKey ?? delegate.getFirstKey());
        } else if (!isVirtualized) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element) {
                // This prevents a flash of focus on the first/last element in the collection
                $5ZyNq$reactariautils.focusWithoutScrolling(element);
                $5ZyNq$reactariautils.scrollIntoView(scrollRef.current, element);
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
    };
    const autoFocusRef = $5ZyNq$react.useRef(autoFocus);
    $5ZyNq$react.useEffect(()=>{
        if (autoFocusRef.current) {
            let focusedKey = null;
            // Check focus strategy to determine which item to focus
            if (autoFocus === 'first') focusedKey = delegate.getFirstKey();
            if (autoFocus === 'last') focusedKey = delegate.getLastKey();
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) focusedKey = selectedKeys.values().next().value;
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus) $5ZyNq$reactariafocus.focusSafely(ref.current);
        }
        autoFocusRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // If not virtualized, scroll the focused element into view when the focusedKey changes.
    // When virtualized, Virtualizer handles this internally.
    $5ZyNq$react.useEffect(()=>{
        if (!isVirtualized && manager.focusedKey && scrollRef?.current) {
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element) $5ZyNq$reactariautils.scrollIntoView(scrollRef.current, element);
        }
    }, [
        isVirtualized,
        scrollRef,
        manager.focusedKey
    ]);
    let handlers = {
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (e.currentTarget.contains(e.target)) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps  } = $f5e34458564766b6$export$e32c88dfddc6e1d8({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) handlers = $5ZyNq$reactariautils.mergeProps(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    // If using virtual focus, don't set a tabIndex at all so that VoiceOver on iOS 14 doesn't try
    // to move real DOM focus to the element anyway.
    let tabIndex;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    return {
        collectionProps: {
            ...handlers,
            tabIndex: tabIndex
        }
    };
}


var $3d702eb2dbbd8718$exports = {};

$parcel$export($3d702eb2dbbd8718$exports, "useSelectableItem", () => $3d702eb2dbbd8718$export$ecf600387e221c37);





function $3d702eb2dbbd8718$export$ecf600387e221c37(options) {
    let { selectionManager: manager , key: key , ref: ref , shouldSelectOnPressUp: shouldSelectOnPressUp , isVirtualized: isVirtualized , shouldUseVirtualFocus: shouldUseVirtualFocus , focus: focus , isDisabled: isDisabled , onAction: onAction  } = options;
    let onSelect = (e)=>{
        if (e.pointerType === 'keyboard' && $fd902048a837f7b5$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === 'none') return;
            if (manager.selectionMode === 'single') {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === 'toggle' || e && ($fd902048a837f7b5$export$16792effe837dba3(e) || e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    let isFocused = key === manager.focusedKey;
    $5ZyNq$react.useEffect(()=>{
        if (isFocused && manager.isFocused && !shouldUseVirtualFocus && document.activeElement !== ref.current) {
            if (focus) focus();
            else $5ZyNq$reactariafocus.focusSafely(ref.current);
        }
    }, [
        ref,
        isFocused,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {
    };
    if (!shouldUseVirtualFocus) itemProps = {
        tabIndex: isFocused ? 0 : -1,
        onFocus (e) {
            if (e.target === ref.current) manager.setFocusedKey(key);
        }
    };
    let modality = $5ZyNq$react.useRef(null);
    let hasPrimaryAction = onAction && manager.selectionMode === 'none';
    let hasSecondaryAction = onAction && manager.selectionMode !== 'none' && manager.selectionBehavior === 'replace';
    let allowsSelection = !isDisabled && manager.canSelectItem(key);
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {
    };
    if (shouldSelectOnPressUp) {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            if (e.pointerType === 'keyboard') onSelect(e);
        };
        itemPressProps.onPressUp = (e)=>{
            if (e.pointerType !== 'keyboard') onSelect(e);
        };
        itemPressProps.onPress = hasPrimaryAction ? ()=>onAction()
         : null;
    } else {
        // On touch, it feels strange to select on touch down, so we special case this.
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            if (e.pointerType !== 'touch' && e.pointerType !== 'virtual') onSelect(e);
        };
        itemPressProps.onPress = (e)=>{
            if (e.pointerType === 'touch' || e.pointerType === 'virtual' || hasPrimaryAction) {
                // Single tap on touch with selectionBehavior = 'replace' performs an action, i.e. navigation.
                // Also perform action on press up when selectionMode = 'none'.
                if (hasPrimaryAction || hasSecondaryAction) onAction();
                else onSelect(e);
            }
        };
    }
    if (!isVirtualized) itemProps['data-key'] = key;
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    let { pressProps: pressProps , isPressed: isPressed  } = $5ZyNq$reactariainteractions.usePress(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === 'mouse') {
            e.stopPropagation();
            e.preventDefault();
            onAction();
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    // TODO: what about when drag and drop is also enabled??
    let { longPressProps: longPressProps  } = $5ZyNq$reactariainteractions.useLongPress({
        isDisabled: !hasSecondaryAction,
        onLongPress (e) {
            if (e.pointerType === 'touch') {
                onSelect(e);
                manager.setSelectionBehavior('toggle');
            }
        }
    });
    // Pressing the Enter key with selectionBehavior = 'replace' performs an action (i.e. navigation).
    let onKeyUp = hasSecondaryAction ? (e)=>{
        if (e.key === 'Enter') onAction();
    } : undefined;
    return {
        itemProps: $5ZyNq$reactariautils.mergeProps(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {
        }, hasSecondaryAction ? longPressProps : {
        }, {
            onKeyUp: onKeyUp,
            onDoubleClick: onDoubleClick
        }),
        isPressed: isPressed
    };
}


var $b0cf3090db29d409$exports = {};

$parcel$export($b0cf3090db29d409$exports, "useSelectableList", () => $b0cf3090db29d409$export$b95089534ab7c1fd);

var $358ec2dd450072c1$exports = {};

$parcel$export($358ec2dd450072c1$exports, "ListKeyboardDelegate", () => $358ec2dd450072c1$export$a05409b8bb224a5a);
class $358ec2dd450072c1$export$a05409b8bb224a5a {
    constructor(collection, disabledKeys, ref, collator){
        this.collection = collection;
        this.disabledKeys = disabledKeys;
        this.ref = ref;
        this.collator = collator;
    }
    getKeyBelow(key) {
        key = this.collection.getKeyAfter(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getKeyAbove(key) {
        key = this.collection.getKeyBefore(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    getItem(key) {
        return this.ref.current.querySelector(`[data-key="${key}"]`);
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        let pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);
        while(item && item.offsetTop > pageY){
            key = this.getKeyAbove(key);
            item = this.getItem(key);
        }
        return key;
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        let pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);
        while(item && item.offsetTop < pageY){
            key = this.getKeyBelow(key);
            item = this.getItem(key);
        }
        return key;
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getKeyBelow(key);
        }
        return null;
    }
}




function $b0cf3090db29d409$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager , collection: collection , disabledKeys: disabledKeys , ref: ref , keyboardDelegate: keyboardDelegate , autoFocus: autoFocus , shouldFocusWrap: shouldFocusWrap , isVirtualized: isVirtualized , disallowEmptySelection: disallowEmptySelection , selectOnFocus: selectOnFocus = false , disallowTypeAhead: disallowTypeAhead , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $5ZyNq$reactariai18n.useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = $5ZyNq$react.useMemo(()=>keyboardDelegate || new $358ec2dd450072c1$export$a05409b8bb224a5a(collection, disabledKeys, ref, collator)
    , [
        keyboardDelegate,
        collection,
        disabledKeys,
        ref,
        collator
    ]);
    let { collectionProps: collectionProps  } = $7d039047c126afc2$export$d6daf82dcd84e87c({
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate,
        autoFocus: autoFocus,
        shouldFocusWrap: shouldFocusWrap,
        disallowEmptySelection: disallowEmptySelection,
        selectOnFocus: selectOnFocus,
        disallowTypeAhead: disallowTypeAhead,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        allowsTabNavigation: allowsTabNavigation,
        isVirtualized: isVirtualized,
        scrollRef: ref
    });
    return {
        listProps: collectionProps
    };
}




$parcel$exportWildcard(module.exports, $7d039047c126afc2$exports);
$parcel$exportWildcard(module.exports, $3d702eb2dbbd8718$exports);
$parcel$exportWildcard(module.exports, $b0cf3090db29d409$exports);
$parcel$exportWildcard(module.exports, $358ec2dd450072c1$exports);
$parcel$exportWildcard(module.exports, $f5e34458564766b6$exports);


//# sourceMappingURL=main.js.map