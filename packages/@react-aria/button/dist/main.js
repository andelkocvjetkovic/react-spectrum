var $aTJy2$reactariautils = require("@react-aria/utils");
var $aTJy2$reactariafocus = require("@react-aria/focus");
var $aTJy2$reactariainteractions = require("@react-aria/interactions");

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
var $183ed812e03a7a09$exports = {};

$parcel$export($183ed812e03a7a09$exports, "useButton", () => $183ed812e03a7a09$export$ea18c227d4417cc3);




function $183ed812e03a7a09$export$ea18c227d4417cc3(props, ref) {
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
    let { pressProps: pressProps , isPressed: isPressed  } = $aTJy2$reactariainteractions.usePress({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps  } = $aTJy2$reactariafocus.useFocusable(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = $aTJy2$reactariautils.mergeProps(focusableProps, pressProps, $aTJy2$reactariautils.filterDOMProps(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: $aTJy2$reactariautils.mergeProps(additionalProps, buttonProps, {
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


var $a53e5214abeab36d$exports = {};

$parcel$export($a53e5214abeab36d$exports, "useToggleButton", () => $a53e5214abeab36d$export$51e84d46ca0bc451);



function $a53e5214abeab36d$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected  } = state;
    const { isPressed: isPressed , buttonProps: buttonProps  } = $183ed812e03a7a09$export$ea18c227d4417cc3({
        ...props,
        onPress: $aTJy2$reactariautils.chain(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        buttonProps: $aTJy2$reactariautils.mergeProps(buttonProps, {
            'aria-pressed': isSelected
        })
    };
}


$parcel$exportWildcard(module.exports, $183ed812e03a7a09$exports);
$parcel$exportWildcard(module.exports, $a53e5214abeab36d$exports);


//# sourceMappingURL=main.js.map
