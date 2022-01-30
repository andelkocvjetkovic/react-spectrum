import {createFocusManager as $BCzw5$createFocusManager} from "@react-aria/focus";
import {filterDOMProps as $BCzw5$filterDOMProps, mergeProps as $BCzw5$mergeProps} from "@react-aria/utils";
import {useLocale as $BCzw5$useLocale} from "@react-aria/i18n";
import {useRef as $BCzw5$useRef, useEffect as $BCzw5$useEffect} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fc182f041faf8dff$exports = {};

$parcel$export($fc182f041faf8dff$exports, "useActionGroup", () => $fc182f041faf8dff$export$f4bf8d43c16de704);



const $fc182f041faf8dff$var$BUTTON_GROUP_ROLES = {
    'none': 'toolbar',
    'single': 'radiogroup',
    'multiple': 'toolbar'
};
function $fc182f041faf8dff$export$f4bf8d43c16de704(props, state, ref) {
    let { isDisabled: isDisabled , orientation: orientation = 'horizontal'  } = props;
    let allKeys = [
        ...state.collection.getKeys()
    ];
    if (!allKeys.some((key)=>!state.disabledKeys.has(key)
    )) isDisabled = true;
    let { direction: direction  } = $BCzw5$useLocale();
    let focusManager = $BCzw5$createFocusManager(ref);
    let flipDirection = direction === 'rtl' && orientation === 'horizontal';
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target)) return;
        switch(e.key){
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                e.stopPropagation();
                if (e.key === 'ArrowRight' && flipDirection) focusManager.focusPrevious({
                    wrap: true
                });
                else focusManager.focusNext({
                    wrap: true
                });
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                e.stopPropagation();
                if (e.key === 'ArrowLeft' && flipDirection) focusManager.focusNext({
                    wrap: true
                });
                else focusManager.focusPrevious({
                    wrap: true
                });
                break;
        }
    };
    let role = $fc182f041faf8dff$var$BUTTON_GROUP_ROLES[state.selectionManager.selectionMode];
    return {
        actionGroupProps: {
            ...$BCzw5$filterDOMProps(props, {
                labelable: true
            }),
            role: role,
            'aria-orientation': role === 'toolbar' ? orientation : null,
            'aria-disabled': isDisabled,
            onKeyDown: onKeyDown
        }
    };
}


var $4d716f4bf4beb52c$exports = {};

$parcel$export($4d716f4bf4beb52c$exports, "useActionGroupItem", () => $4d716f4bf4beb52c$export$9597202bd3099a29);


const $4d716f4bf4beb52c$var$BUTTON_ROLES = {
    'none': null,
    'single': 'radio',
    'multiple': 'checkbox'
};
function $4d716f4bf4beb52c$export$9597202bd3099a29(props, state, ref) {
    let selectionMode = state.selectionManager.selectionMode;
    let buttonProps = {
        role: $4d716f4bf4beb52c$var$BUTTON_ROLES[selectionMode]
    };
    if (selectionMode !== 'none') {
        let isSelected = state.selectionManager.isSelected(props.key);
        buttonProps['aria-checked'] = isSelected;
    }
    let isFocused = props.key === state.selectionManager.focusedKey;
    let lastRender = $BCzw5$useRef({
        isFocused: isFocused,
        state: state
    });
    lastRender.current = {
        isFocused: isFocused,
        state: state
    };
    // If the focused item is removed from the DOM, reset the focused key to null.
    // eslint-disable-next-line arrow-body-style
    $BCzw5$useEffect(()=>{
        return ()=>{
            if (lastRender.current.isFocused) lastRender.current.state.selectionManager.setFocusedKey(null);
        };
    }, []);
    return {
        buttonProps: $BCzw5$mergeProps(buttonProps, {
            tabIndex: isFocused || state.selectionManager.focusedKey == null ? 0 : -1,
            onFocus () {
                state.selectionManager.setFocusedKey(props.key);
            },
            onPress () {
                state.selectionManager.select(props.key);
            }
        })
    };
}




export {$fc182f041faf8dff$export$f4bf8d43c16de704 as useActionGroup, $4d716f4bf4beb52c$export$9597202bd3099a29 as useActionGroupItem};
//# sourceMappingURL=module.js.map
