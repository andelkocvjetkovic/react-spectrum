var $7plFg$reactariafocus = require("@react-aria/focus");
var $7plFg$reactariautils = require("@react-aria/utils");
var $7plFg$reactariai18n = require("@react-aria/i18n");
var $7plFg$react = require("react");

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
var $f04a3cd2f8d93328$exports = {};

$parcel$export($f04a3cd2f8d93328$exports, "useActionGroup", () => $f04a3cd2f8d93328$export$f4bf8d43c16de704);



const $f04a3cd2f8d93328$var$BUTTON_GROUP_ROLES = {
    'none': 'toolbar',
    'single': 'radiogroup',
    'multiple': 'toolbar'
};
function $f04a3cd2f8d93328$export$f4bf8d43c16de704(props, state, ref) {
    let { isDisabled: isDisabled , orientation: orientation = 'horizontal'  } = props;
    let allKeys = [
        ...state.collection.getKeys()
    ];
    if (!allKeys.some((key)=>!state.disabledKeys.has(key)
    )) isDisabled = true;
    let { direction: direction  } = $7plFg$reactariai18n.useLocale();
    let focusManager = $7plFg$reactariafocus.createFocusManager(ref);
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
    let role = $f04a3cd2f8d93328$var$BUTTON_GROUP_ROLES[state.selectionManager.selectionMode];
    return {
        actionGroupProps: {
            ...$7plFg$reactariautils.filterDOMProps(props, {
                labelable: true
            }),
            role: role,
            'aria-orientation': role === 'toolbar' ? orientation : null,
            'aria-disabled': isDisabled,
            onKeyDown: onKeyDown
        }
    };
}


var $549a2ca943703af8$exports = {};

$parcel$export($549a2ca943703af8$exports, "useActionGroupItem", () => $549a2ca943703af8$export$9597202bd3099a29);


const $549a2ca943703af8$var$BUTTON_ROLES = {
    'none': null,
    'single': 'radio',
    'multiple': 'checkbox'
};
function $549a2ca943703af8$export$9597202bd3099a29(props, state, ref) {
    let selectionMode = state.selectionManager.selectionMode;
    let buttonProps = {
        role: $549a2ca943703af8$var$BUTTON_ROLES[selectionMode]
    };
    if (selectionMode !== 'none') {
        let isSelected = state.selectionManager.isSelected(props.key);
        buttonProps['aria-checked'] = isSelected;
    }
    let isFocused = props.key === state.selectionManager.focusedKey;
    let lastRender = $7plFg$react.useRef({
        isFocused: isFocused,
        state: state
    });
    lastRender.current = {
        isFocused: isFocused,
        state: state
    };
    // If the focused item is removed from the DOM, reset the focused key to null.
    // eslint-disable-next-line arrow-body-style
    $7plFg$react.useEffect(()=>{
        return ()=>{
            if (lastRender.current.isFocused) lastRender.current.state.selectionManager.setFocusedKey(null);
        };
    }, []);
    return {
        buttonProps: $7plFg$reactariautils.mergeProps(buttonProps, {
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


$parcel$exportWildcard(module.exports, $f04a3cd2f8d93328$exports);
$parcel$exportWildcard(module.exports, $549a2ca943703af8$exports);


//# sourceMappingURL=main.js.map
