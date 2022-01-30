var $50NHm$reactariautils = require("@react-aria/utils");
var $50NHm$reactariafocus = require("@react-aria/focus");
var $50NHm$reactariainteractions = require("@react-aria/interactions");

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
var $53658ac97a8caccd$exports = {};

$parcel$export($53658ac97a8caccd$exports, "useLink", () => $53658ac97a8caccd$export$dcf14c9974fe2767);



function $53658ac97a8caccd$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a' , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , // @ts-ignore
    onClick: deprecatedOnClick , isDisabled: isDisabled , ...otherProps } = props;
    let linkProps;
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps  } = $50NHm$reactariafocus.useFocusable(props, ref);
    let { pressProps: pressProps , isPressed: isPressed  } = $50NHm$reactariainteractions.usePress({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = $50NHm$reactariautils.filterDOMProps(otherProps, {
        labelable: true
    });
    let interactionHandlers = $50NHm$reactariautils.mergeProps(focusableProps, pressProps);
    return {
        isPressed: isPressed,
        linkProps: $50NHm$reactariautils.mergeProps(domProps, {
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


$parcel$exportWildcard(module.exports, $53658ac97a8caccd$exports);


//# sourceMappingURL=main.js.map
