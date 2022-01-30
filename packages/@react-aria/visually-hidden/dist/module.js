import {mergeProps as $1Hw1Y$mergeProps} from "@react-aria/utils";
import $1Hw1Y$react, {useState as $1Hw1Y$useState, useMemo as $1Hw1Y$useMemo} from "react";
import {useFocus as $1Hw1Y$useFocus} from "@react-aria/interactions";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $58cb7524793b3f07$exports = {};

$parcel$export($58cb7524793b3f07$exports, "useVisuallyHidden", () => $58cb7524793b3f07$export$a966af930f325cab);
$parcel$export($58cb7524793b3f07$exports, "VisuallyHidden", () => $58cb7524793b3f07$export$439d29a4e110a164);



const $58cb7524793b3f07$var$styles = {
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
function $58cb7524793b3f07$export$a966af930f325cab(props = {
}) {
    let { style: style , isFocusable: isFocusable  } = props;
    let [isFocused, setFocused] = $1Hw1Y$useState(false);
    let { focusProps: focusProps  } = $1Hw1Y$useFocus({
        isDisabled: !isFocusable,
        onFocusChange: setFocused
    });
    // If focused, don't hide the element.
    let combinedStyles = $1Hw1Y$useMemo(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$58cb7524793b3f07$var$styles,
            ...style
        };
        else return $58cb7524793b3f07$var$styles;
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
function $58cb7524793b3f07$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children , elementType: Element = 'div' , isFocusable: isFocusable , style: style , ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps  } = $58cb7524793b3f07$export$a966af930f325cab(props);
    return(/*#__PURE__*/ $1Hw1Y$react.createElement(Element, $1Hw1Y$mergeProps(otherProps, visuallyHiddenProps), children));
}




export {$58cb7524793b3f07$export$a966af930f325cab as useVisuallyHidden, $58cb7524793b3f07$export$439d29a4e110a164 as VisuallyHidden};
//# sourceMappingURL=module.js.map
