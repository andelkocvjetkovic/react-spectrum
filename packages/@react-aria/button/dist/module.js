import {mergeProps as $g2YqU$mergeProps, filterDOMProps as $g2YqU$filterDOMProps, chain as $g2YqU$chain} from "@react-aria/utils";
import {useFocusable as $g2YqU$useFocusable} from "@react-aria/focus";
import {usePress as $g2YqU$usePress} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $048ee1f31949f9fd$exports = {};

$parcel$export($048ee1f31949f9fd$exports, "useButton", () => $048ee1f31949f9fd$export$ea18c227d4417cc3);




function $048ee1f31949f9fd$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = 'button' , isDisabled: isDisabled , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , onPressChange: onPressChange , preventFocusOnPress: // @ts-ignore - undocumented
    preventFocusOnPress , allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled , // @ts-ignore
    onClick: deprecatedOnClick , href: href , target: target , rel: rel , type: type = 'button'  } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type: type,
        disabled: isDisabled
    };
    else additionalProps = {
        role: 'button',
        tabIndex: isDisabled ? undefined : 0,
        href: elementType === 'a' && isDisabled ? undefined : href,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps: pressProps , isPressed: isPressed  } = $g2YqU$usePress({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps  } = $g2YqU$useFocusable(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = $g2YqU$mergeProps(focusableProps, pressProps, $g2YqU$filterDOMProps(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: $g2YqU$mergeProps(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            onClick: (e)=>{
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
            }
        })
    };
}


var $cbd434df81526325$exports = {};

$parcel$export($cbd434df81526325$exports, "useToggleButton", () => $cbd434df81526325$export$51e84d46ca0bc451);



function $cbd434df81526325$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected  } = state;
    const { isPressed: isPressed , buttonProps: buttonProps  } = $048ee1f31949f9fd$export$ea18c227d4417cc3({
        ...props,
        onPress: $g2YqU$chain(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        buttonProps: $g2YqU$mergeProps(buttonProps, {
            'aria-pressed': isSelected
        })
    };
}




export {$048ee1f31949f9fd$export$ea18c227d4417cc3 as useButton, $cbd434df81526325$export$51e84d46ca0bc451 as useToggleButton};
//# sourceMappingURL=module.js.map
