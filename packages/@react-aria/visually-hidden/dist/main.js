var $gvumk$reactariautils = require("@react-aria/utils");
var $gvumk$react = require("react");
var $gvumk$reactariainteractions = require("@react-aria/interactions");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $ba2b4f6cdeada67b$exports = {};

$parcel$export($ba2b4f6cdeada67b$exports, "useVisuallyHidden", () => $ba2b4f6cdeada67b$export$a966af930f325cab);
$parcel$export($ba2b4f6cdeada67b$exports, "VisuallyHidden", () => $ba2b4f6cdeada67b$export$439d29a4e110a164);



const $ba2b4f6cdeada67b$var$styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: '0 -1px -1px 0',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
    whiteSpace: 'nowrap'
};
function $ba2b4f6cdeada67b$export$a966af930f325cab(props = {
}) {
    let { style: style , isFocusable: isFocusable  } = props;
    let [isFocused, setFocused] = $gvumk$react.useState(false);
    let { focusProps: focusProps  } = $gvumk$reactariainteractions.useFocus({
        isDisabled: !isFocusable,
        onFocusChange: setFocused
    });
    // If focused, don't hide the element.
    let combinedStyles = $gvumk$react.useMemo(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$ba2b4f6cdeada67b$var$styles,
            ...style
        };
        else return $ba2b4f6cdeada67b$var$styles;
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusProps,
            style: combinedStyles
        }
    };
}
function $ba2b4f6cdeada67b$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children , elementType: Element = 'div' , isFocusable: isFocusable , style: style , ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps  } = $ba2b4f6cdeada67b$export$a966af930f325cab(props);
    return(/*#__PURE__*/ ($parcel$interopDefault($gvumk$react)).createElement(Element, $gvumk$reactariautils.mergeProps(otherProps, visuallyHiddenProps), children));
}


$parcel$exportWildcard(module.exports, $ba2b4f6cdeada67b$exports);


//# sourceMappingURL=main.js.map
