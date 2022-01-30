import {useId as $iLc8L$useId, filterDOMProps as $iLc8L$filterDOMProps, mergeProps as $iLc8L$mergeProps, useSlotId as $iLc8L$useSlotId} from "@react-aria/utils";
import {useOverlayTrigger as $iLc8L$useOverlayTrigger} from "@react-aria/overlays";
import {useSelectableList as $iLc8L$useSelectableList, useSelectableItem as $iLc8L$useSelectableItem} from "@react-aria/selection";
import {getItemCount as $iLc8L$getItemCount} from "@react-stately/collections";
import {usePress as $iLc8L$usePress, useHover as $iLc8L$useHover, isFocusVisible as $iLc8L$isFocusVisible} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $67e957d00676eeca$exports = {};

$parcel$export($67e957d00676eeca$exports, "useMenuTrigger", () => $67e957d00676eeca$export$dc9c12ed27dd1b49);


function $67e957d00676eeca$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu' , isDisabled: isDisabled  } = props;
    let menuTriggerId = $iLc8L$useId();
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $iLc8L$useOverlayTrigger({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (ref && ref.current) switch(e.key){
            case 'ArrowDown':
            case 'Enter':
            case ' ':
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('first');
                break;
            case 'ArrowUp':
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('last');
                break;
        }
    };
    return {
        menuTriggerProps: {
            ...triggerProps,
            id: menuTriggerId,
            onPressStart (e) {
                // For consistency with native, open the menu on mouse/key down, but touch up.
                if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) // If opened with a screen reader, auto focus the first item.
                // Otherwise, the menu itself will be focused.
                state.toggle(e.pointerType === 'virtual' ? 'first' : null);
            },
            onPress (e) {
                if (e.pointerType === 'touch' && !isDisabled) state.toggle();
            },
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId
        }
    };
}


var $f8473e84867a4480$exports = {};

$parcel$export($f8473e84867a4480$exports, "useMenu", () => $f8473e84867a4480$export$38eaa17faae8f579);


function $f8473e84867a4480$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true , ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = $iLc8L$filterDOMProps(props, {
        labelable: true
    });
    let { listProps: listProps  } = $iLc8L$useSelectableList({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap
    });
    return {
        menuProps: $iLc8L$mergeProps(domProps, {
            role: 'menu',
            ...listProps
        })
    };
}


var $42974637716cfffc$exports = {};

$parcel$export($42974637716cfffc$exports, "useMenuItem", () => $42974637716cfffc$export$9d32628fc2aea7da);




function $42974637716cfffc$export$9d32628fc2aea7da(props, state, ref) {
    let { isSelected: isSelected , isDisabled: isDisabled , key: key , onClose: onClose , closeOnSelect: closeOnSelect , isVirtualized: isVirtualized , onAction: onAction  } = props;
    let role = 'menuitem';
    if (state.selectionManager.selectionMode === 'single') role = 'menuitemradio';
    else if (state.selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    let labelId = $iLc8L$useSlotId();
    let descriptionId = $iLc8L$useSlotId();
    let keyboardId = $iLc8L$useSlotId();
    let ariaProps = {
        'aria-disabled': isDisabled,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined
    };
    if (state.selectionManager.selectionMode !== 'none') ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = state.collection.getItem(key).index;
        ariaProps['aria-setsize'] = $iLc8L$getItemCount(state.collection);
    }
    let onKeyDown = (e)=>{
        // Ignore repeating events, which may have started on the menu trigger before moving
        // focus to the menu item. We want to wait for a second complete key press sequence.
        if (e.repeat) return;
        switch(e.key){
            case ' ':
                if (!isDisabled && state.selectionManager.selectionMode === 'none' && closeOnSelect !== false && onClose) onClose();
                break;
            case 'Enter':
                // The Enter key should always close on select, except if overridden.
                if (!isDisabled && closeOnSelect !== false && onClose) onClose();
                break;
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType === 'keyboard' && onAction) onAction(key);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') {
            if (onAction) onAction(key);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (onClose && (closeOnSelect ?? state.selectionManager.selectionMode !== 'multiple')) onClose();
        }
    };
    let { itemProps: itemProps  } = $iLc8L$useSelectableItem({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true
    });
    let { pressProps: pressProps  } = $iLc8L$usePress({
        onPressStart: onPressStart,
        onPressUp: onPressUp,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = $iLc8L$useHover({
        isDisabled: isDisabled,
        onHoverStart () {
            if (!$iLc8L$isFocusVisible()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        menuItemProps: {
            ...ariaProps,
            ...$iLc8L$mergeProps(itemProps, pressProps, hoverProps, {
                onKeyDown: onKeyDown
            })
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        }
    };
}


var $2256bedceb8433c1$exports = {};

$parcel$export($2256bedceb8433c1$exports, "useMenuSection", () => $2256bedceb8433c1$export$73f7a44322579622);

function $2256bedceb8433c1$export$73f7a44322579622(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = $iLc8L$useId();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, and only use it
            // as a label for the nested group.
            id: headingId,
            'aria-hidden': true
        } : {
        },
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}




export {$67e957d00676eeca$export$dc9c12ed27dd1b49 as useMenuTrigger, $f8473e84867a4480$export$38eaa17faae8f579 as useMenu, $42974637716cfffc$export$9d32628fc2aea7da as useMenuItem, $2256bedceb8433c1$export$73f7a44322579622 as useMenuSection};
//# sourceMappingURL=module.js.map
