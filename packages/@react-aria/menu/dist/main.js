var $atA3c$reactariautils = require("@react-aria/utils");
var $atA3c$reactariaoverlays = require("@react-aria/overlays");
var $atA3c$reactariaselection = require("@react-aria/selection");
var $atA3c$reactstatelycollections = require("@react-stately/collections");
var $atA3c$reactariainteractions = require("@react-aria/interactions");

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
var $8fb8a322d465c713$exports = {};

$parcel$export($8fb8a322d465c713$exports, "useMenuTrigger", () => $8fb8a322d465c713$export$dc9c12ed27dd1b49);


function $8fb8a322d465c713$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu' , isDisabled: isDisabled  } = props;
    let menuTriggerId = $atA3c$reactariautils.useId();
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $atA3c$reactariaoverlays.useOverlayTrigger({
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


var $d6f07b39f4b1d905$exports = {};

$parcel$export($d6f07b39f4b1d905$exports, "useMenu", () => $d6f07b39f4b1d905$export$38eaa17faae8f579);


function $d6f07b39f4b1d905$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true , ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = $atA3c$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    let { listProps: listProps  } = $atA3c$reactariaselection.useSelectableList({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap
    });
    return {
        menuProps: $atA3c$reactariautils.mergeProps(domProps, {
            role: 'menu',
            ...listProps
        })
    };
}


var $dcac5248bec96ef5$exports = {};

$parcel$export($dcac5248bec96ef5$exports, "useMenuItem", () => $dcac5248bec96ef5$export$9d32628fc2aea7da);




function $dcac5248bec96ef5$export$9d32628fc2aea7da(props, state, ref) {
    let { isSelected: isSelected , isDisabled: isDisabled , key: key , onClose: onClose , closeOnSelect: closeOnSelect , isVirtualized: isVirtualized , onAction: onAction  } = props;
    let role = 'menuitem';
    if (state.selectionManager.selectionMode === 'single') role = 'menuitemradio';
    else if (state.selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    let labelId = $atA3c$reactariautils.useSlotId();
    let descriptionId = $atA3c$reactariautils.useSlotId();
    let keyboardId = $atA3c$reactariautils.useSlotId();
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
        ariaProps['aria-setsize'] = $atA3c$reactstatelycollections.getItemCount(state.collection);
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
    let { itemProps: itemProps  } = $atA3c$reactariaselection.useSelectableItem({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true
    });
    let { pressProps: pressProps  } = $atA3c$reactariainteractions.usePress({
        onPressStart: onPressStart,
        onPressUp: onPressUp,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = $atA3c$reactariainteractions.useHover({
        isDisabled: isDisabled,
        onHoverStart () {
            if (!$atA3c$reactariainteractions.isFocusVisible()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        menuItemProps: {
            ...ariaProps,
            ...$atA3c$reactariautils.mergeProps(itemProps, pressProps, hoverProps, {
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


var $5274ec7bf537d8ab$exports = {};

$parcel$export($5274ec7bf537d8ab$exports, "useMenuSection", () => $5274ec7bf537d8ab$export$73f7a44322579622);

function $5274ec7bf537d8ab$export$73f7a44322579622(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = $atA3c$reactariautils.useId();
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


$parcel$exportWildcard(module.exports, $8fb8a322d465c713$exports);
$parcel$exportWildcard(module.exports, $d6f07b39f4b1d905$exports);
$parcel$exportWildcard(module.exports, $dcac5248bec96ef5$exports);
$parcel$exportWildcard(module.exports, $5274ec7bf537d8ab$exports);


//# sourceMappingURL=main.js.map
