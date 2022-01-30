import {filterDOMProps as $jkzr8$filterDOMProps} from "@react-aria/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $29e7319faf397093$exports = {};

$parcel$export($29e7319faf397093$exports, "useSeparator", () => $29e7319faf397093$export$52210f68a14655d0);

function $29e7319faf397093$export$52210f68a14655d0(props) {
    let domProps = $jkzr8$filterDOMProps(props, {
        labelable: true
    });
    let ariaOrientation;
    // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
    // if it's vertical, we need to specify it
    if (props.orientation === 'vertical') ariaOrientation = 'vertical';
    // hr elements implicitly have role = separator and a horizontal orientation
    if (props.elementType !== 'hr') return {
        separatorProps: {
            ...domProps,
            role: 'separator',
            'aria-orientation': ariaOrientation
        }
    };
    return {
        separatorProps: domProps
    };
}




export {$29e7319faf397093$export$52210f68a14655d0 as useSeparator};
//# sourceMappingURL=module.js.map
