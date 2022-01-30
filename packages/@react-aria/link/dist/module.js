import {filterDOMProps as $iEmVk$filterDOMProps, mergeProps as $iEmVk$mergeProps} from "@react-aria/utils";
import {useFocusable as $iEmVk$useFocusable} from "@react-aria/focus";
import {usePress as $iEmVk$usePress} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c58dc5b4629c0a38$exports = {};

$parcel$export($c58dc5b4629c0a38$exports, "useLink", () => $c58dc5b4629c0a38$export$dcf14c9974fe2767);



function $c58dc5b4629c0a38$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a' , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , // @ts-ignore
    onClick: deprecatedOnClick , isDisabled: isDisabled , ...otherProps } = props;
    let linkProps;
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps  } = $iEmVk$useFocusable(props, ref);
    let { pressProps: pressProps , isPressed: isPressed  } = $iEmVk$usePress({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = $iEmVk$filterDOMProps(otherProps, {
        labelable: true
    });
    let interactionHandlers = $iEmVk$mergeProps(focusableProps, pressProps);
    return {
        isPressed: isPressed,
        linkProps: $iEmVk$mergeProps(domProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            onClick: (e)=>{
                pressProps.onClick(e);
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
            }
        })
    };
}




export {$c58dc5b4629c0a38$export$dcf14c9974fe2767 as useLink};
//# sourceMappingURL=module.js.map
