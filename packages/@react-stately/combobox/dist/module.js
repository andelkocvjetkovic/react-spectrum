import {useSingleSelectListState as $b3Vhr$useSingleSelectListState, ListCollection as $b3Vhr$ListCollection} from "@react-stately/list";
import {useControlledState as $b3Vhr$useControlledState} from "@react-stately/utils";
import {useState as $b3Vhr$useState, useMemo as $b3Vhr$useMemo, useRef as $b3Vhr$useRef, useEffect as $b3Vhr$useEffect} from "react";
import {useMenuTriggerState as $b3Vhr$useMenuTriggerState} from "@react-stately/menu";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $8a266aa7013d42fb$exports = {};

$parcel$export($8a266aa7013d42fb$exports, "useComboBoxState", () => $8a266aa7013d42fb$export$b453a3bfd4a5fa9e);




function $8a266aa7013d42fb$export$b453a3bfd4a5fa9e(props) {
    let { defaultFilter: defaultFilter , menuTrigger: menuTrigger = 'input' , allowsEmptyCollection: allowsEmptyCollection = false , allowsCustomValue: allowsCustomValue , shouldCloseOnBlur: shouldCloseOnBlur = true  } = props;
    let [showAllItems, setShowAllItems] = $b3Vhr$useState(false);
    let [isFocused1, setFocusedState] = $b3Vhr$useState(false);
    let [inputValue, setInputValue] = $b3Vhr$useControlledState(props.inputValue, props.defaultInputValue ?? '', props.onInputChange);
    let onSelectionChange = (key)=>{
        if (props.onSelectionChange) props.onSelectionChange(key);
        // If key is the same, reset the inputValue and close the menu
        // (scenario: user clicks on already selected option)
        if (key === selectedKey) {
            resetInputValue();
            triggerState.close();
        }
    };
    let { collection: collection , selectionManager: selectionManager , selectedKey: selectedKey , setSelectedKey: setSelectedKey , selectedItem: selectedItem , disabledKeys: disabledKeys  } = $b3Vhr$useSingleSelectListState({
        ...props,
        onSelectionChange: onSelectionChange,
        items: props.items ?? props.defaultItems
    });
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = $b3Vhr$useMemo(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : $8a266aa7013d42fb$var$filterCollection(collection, inputValue, defaultFilter)
    , [
        collection,
        inputValue,
        defaultFilter,
        props.items
    ]);
    // Track what action is attempting to open the menu
    let menuOpenTrigger = $b3Vhr$useRef('focus');
    let onOpenChange = (open)=>{
        if (props.onOpenChange) props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
    };
    let triggerState = $b3Vhr$useMenuTriggerState({
        ...props,
        onOpenChange: onOpenChange,
        isOpen: undefined,
        defaultOpen: undefined
    });
    let open1 = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // Prevent open operations from triggering if there is nothing to display
        // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
        // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
        if (allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) {
            if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is manually opened. Only care about this if items are undefined
            setShowAllItems(true);
            menuOpenTrigger.current = trigger;
            triggerState.open(focusStrategy);
        }
    };
    let toggle = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
        if (!(allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) && !triggerState.isOpen) return;
        if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is toggled open. Only care about this if items are undefined
        setShowAllItems(true);
        // Only update the menuOpenTrigger if menu is currently closed
        if (!triggerState.isOpen) menuOpenTrigger.current = trigger;
        triggerState.toggle(focusStrategy);
    };
    let lastValue = $b3Vhr$useRef(inputValue);
    let resetInputValue = ()=>{
        let itemText = collection.getItem(selectedKey)?.textValue ?? '';
        lastValue.current = itemText;
        setInputValue(itemText);
    };
    let isInitialRender = $b3Vhr$useRef(true);
    let lastSelectedKey = $b3Vhr$useRef((props.selectedKey ?? props.defaultSelectedKey) ?? null);
    let lastSelectedKeyText = $b3Vhr$useRef(collection.getItem(selectedKey)?.textValue ?? '');
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    $b3Vhr$useEffect(()=>{
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused1 && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue.current && menuTrigger !== 'manual') open1(null, 'input');
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) triggerState.close();
        // Close when an item is selected.
        if (selectedKey != null && selectedKey !== lastSelectedKey.current) triggerState.close();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue.current) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set selectedKey to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (inputValue === '' && (props.inputValue === undefined || props.selectedKey === undefined)) setSelectedKey(null);
        }
        // If it is the intial render and inputValue isn't controlled nor has an intial value, set input to match current selected key if any
        if (isInitialRender.current && props.inputValue === undefined && props.defaultInputValue === undefined) resetInputValue();
        // If the selectedKey changed, update the input value.
        // Do nothing if both inputValue and selectedKey are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (selectedKey !== lastSelectedKey.current && (props.inputValue === undefined || props.selectedKey === undefined)) resetInputValue();
        else lastValue.current = inputValue;
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = collection.getItem(selectedKey)?.textValue ?? '';
        if (!isFocused1 && selectedKey != null && props.inputValue === undefined && selectedKey === lastSelectedKey.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                lastValue.current = selectedItemText;
                setInputValue(selectedItemText);
            }
        }
        isInitialRender.current = false;
        lastSelectedKey.current = selectedKey;
        lastSelectedKeyText.current = selectedItemText;
    });
    $b3Vhr$useEffect(()=>{
        // Reset focused key when the menu closes
        if (!triggerState.isOpen) selectionManager.setFocusedKey(null);
    }, [
        triggerState.isOpen,
        selectionManager
    ]);
    // Revert input value and close menu
    let revert = ()=>{
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        lastSelectedKey.current = null;
        setSelectedKey(null);
        triggerState.close();
    };
    let commitSelection = ()=>{
        // If multiple things are controlled, call onSelectionChange
        if (props.selectedKey !== undefined && props.inputValue !== undefined) {
            props.onSelectionChange(selectedKey);
            // Stop menu from reopening from useEffect
            let itemText = collection.getItem(selectedKey)?.textValue ?? '';
            lastValue.current = itemText;
            triggerState.close();
        } else {
            // If only a single aspect of combobox is controlled, reset input value and close menu for the user
            resetInputValue();
            triggerState.close();
        }
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectedKey === selectionManager.focusedKey) commitSelection();
            else setSelectedKey(selectionManager.focusedKey);
        } else if (allowsCustomValue) commitCustomValue();
        else // Reset inputValue and close menu if no item is focused but user triggers a commit
        commitSelection();
    };
    let setFocused = (isFocused)=>{
        if (isFocused) {
            if (menuTrigger === 'focus') open1(null, 'focus');
        } else if (shouldCloseOnBlur) {
            let itemText = collection.getItem(selectedKey)?.textValue ?? '';
            if (allowsCustomValue && inputValue !== itemText) commitCustomValue();
            else commitSelection();
        }
        setFocusedState(isFocused);
    };
    return {
        ...triggerState,
        toggle: toggle,
        open: open1,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        disabledKeys: disabledKeys,
        isFocused: isFocused1,
        setFocused: setFocused,
        selectedItem: selectedItem,
        collection: showAllItems ? originalCollection : filteredCollection,
        inputValue: inputValue,
        setInputValue: setInputValue,
        commit: commit,
        revert: revert
    };
}
function $8a266aa7013d42fb$var$filterCollection(collection, inputValue, filter) {
    return new $b3Vhr$ListCollection($8a266aa7013d42fb$var$filterNodes(collection, inputValue, filter));
}
function $8a266aa7013d42fb$var$filterNodes(nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === 'section' && node.hasChildNodes) {
            let filtered = $8a266aa7013d42fb$var$filterNodes(node.childNodes, inputValue, filter);
            if ([
                ...filtered
            ].length > 0) filteredNode.push({
                ...node,
                childNodes: filtered
            });
        } else if (node.type !== 'section' && filter(node.textValue, inputValue)) filteredNode.push({
            ...node
        });
    }
    return filteredNode;
}




export {$8a266aa7013d42fb$export$b453a3bfd4a5fa9e as useComboBoxState};
//# sourceMappingURL=module.js.map