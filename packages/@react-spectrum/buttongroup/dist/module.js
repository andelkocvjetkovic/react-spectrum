import "./main.css";
import {useSlotProps as $dNanD$useSlotProps, useStyleProps as $dNanD$useStyleProps, useDOMRef as $dNanD$useDOMRef, useResizeObserver as $dNanD$useResizeObserver, classNames as $dNanD$classNames, SlotProvider as $dNanD$SlotProvider} from "@react-spectrum/utils";
import {useValueEffect as $dNanD$useValueEffect, filterDOMProps as $dNanD$filterDOMProps} from "@react-aria/utils";
import {useProvider as $dNanD$useProvider, useProviderProps as $dNanD$useProviderProps, Provider as $dNanD$Provider} from "@react-spectrum/provider";
import $dNanD$react, {useCallback as $dNanD$useCallback, useEffect as $dNanD$useEffect, useRef as $dNanD$useRef} from "react";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $089be6ba315700f8$exports = {};

$parcel$export($089be6ba315700f8$exports, "ButtonGroup", () => $089be6ba315700f8$export$69b1032f2ecdf404);




var $5bb6a3062fd4dc2f$exports = {};

$parcel$export($5bb6a3062fd4dc2f$exports, "spectrum-ButtonGroup", () => $5bb6a3062fd4dc2f$export$a92faf51352ac608, (v) => $5bb6a3062fd4dc2f$export$a92faf51352ac608 = v);
$parcel$export($5bb6a3062fd4dc2f$exports, "spectrum-ButtonGroup-Button", () => $5bb6a3062fd4dc2f$export$7184de2337c1927f, (v) => $5bb6a3062fd4dc2f$export$7184de2337c1927f = v);
$parcel$export($5bb6a3062fd4dc2f$exports, "spectrum-ButtonGroup--alignEnd", () => $5bb6a3062fd4dc2f$export$30e96c53d7beca11, (v) => $5bb6a3062fd4dc2f$export$30e96c53d7beca11 = v);
$parcel$export($5bb6a3062fd4dc2f$exports, "spectrum-ButtonGroup--alignCenter", () => $5bb6a3062fd4dc2f$export$252bc7c4ae05757, (v) => $5bb6a3062fd4dc2f$export$252bc7c4ae05757 = v);
$parcel$export($5bb6a3062fd4dc2f$exports, "spectrum-ButtonGroup--vertical", () => $5bb6a3062fd4dc2f$export$84d9c0e1917a4eaf, (v) => $5bb6a3062fd4dc2f$export$84d9c0e1917a4eaf = v);
var $5bb6a3062fd4dc2f$export$a92faf51352ac608;
var $5bb6a3062fd4dc2f$export$7184de2337c1927f;
var $5bb6a3062fd4dc2f$export$30e96c53d7beca11;
var $5bb6a3062fd4dc2f$export$252bc7c4ae05757;
var $5bb6a3062fd4dc2f$export$84d9c0e1917a4eaf;
$5bb6a3062fd4dc2f$export$a92faf51352ac608 = "_spectrum-ButtonGroup_b10c2f";
$5bb6a3062fd4dc2f$export$7184de2337c1927f = "_spectrum-ButtonGroup-Button_b10c2f";
$5bb6a3062fd4dc2f$export$30e96c53d7beca11 = "_spectrum-ButtonGroup--alignEnd_b10c2f";
$5bb6a3062fd4dc2f$export$252bc7c4ae05757 = "_spectrum-ButtonGroup--alignCenter_b10c2f";
$5bb6a3062fd4dc2f$export$84d9c0e1917a4eaf = "_spectrum-ButtonGroup--vertical_b10c2f";


function $089be6ba315700f8$var$ButtonGroup(props, ref) {
    let { scale: scale  } = $dNanD$useProvider();
    props = $dNanD$useProviderProps(props);
    props = $dNanD$useSlotProps(props, 'buttonGroup');
    let { children: children , orientation: orientation = 'horizontal' , isDisabled: isDisabled , align: align = 'start' , ...otherProps } = props;
    let { styleProps: styleProps  } = $dNanD$useStyleProps(otherProps);
    let domRef = $dNanD$useDOMRef(ref);
    let [hasOverflow, setHasOverflow] = $dNanD$useValueEffect(false);
    let checkForOverflow = $dNanD$useCallback(()=>{
        let computeHasOverflow = ()=>{
            if (domRef.current && orientation === 'horizontal') {
                let buttonGroupChildren = Array.from(domRef.current.children);
                let maxX = domRef.current.offsetWidth + 1; // + 1 to account for rounding errors
                // If any buttons have negative X positions (align="end") or extend beyond
                // the width of the button group (align="start"), then switch to vertical.
                if (buttonGroupChildren.some((child)=>child.offsetLeft < 0 || child.offsetLeft + child.offsetWidth > maxX
                )) return true;
                return false;
            }
        };
        if (orientation === 'horizontal') setHasOverflow(function*() {
            // Force to horizontal for measurement.
            yield false;
            // Measure, and update if there is overflow.
            yield computeHasOverflow();
        });
    }, [
        domRef,
        orientation,
        scale,
        setHasOverflow,
        children
    ]);
    // There are two main reasons we need to remeasure:
    // 1. Internal changes: Check for initial overflow or when orientation/scale/children change (from checkForOverflow dep array)
    $dNanD$useEffect(()=>{
        checkForOverflow();
    }, [
        checkForOverflow
    ]);
    // 2. External changes: buttongroup won't change size due to any parents changing size, so listen to its container for size changes to figure out if we should remeasure
    let parent = $dNanD$useRef();
    $dNanD$useEffect(()=>{
        parent.current = domRef.current.parentElement;
    }, [
        domRef.current
    ]);
    $dNanD$useResizeObserver({
        ref: parent,
        onResize: checkForOverflow
    });
    return(/*#__PURE__*/ $dNanD$react.createElement("div", {
        ...$dNanD$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef,
        className: $dNanD$classNames((/*@__PURE__*/$parcel$interopDefault($5bb6a3062fd4dc2f$exports)), 'spectrum-ButtonGroup', {
            'spectrum-ButtonGroup--vertical': orientation === 'vertical' || hasOverflow,
            'spectrum-ButtonGroup--alignEnd': align === 'end',
            'spectrum-ButtonGroup--alignCenter': align === 'center'
        }, styleProps.className)
    }, /*#__PURE__*/ $dNanD$react.createElement($dNanD$SlotProvider, {
        slots: {
            button: {
                UNSAFE_className: $dNanD$classNames((/*@__PURE__*/$parcel$interopDefault($5bb6a3062fd4dc2f$exports)), 'spectrum-ButtonGroup-Button')
            }
        }
    }, /*#__PURE__*/ $dNanD$react.createElement($dNanD$Provider, {
        isDisabled: isDisabled
    }, children))));
}
/**
 * ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.
 */ let $089be6ba315700f8$export$69b1032f2ecdf404 = /*#__PURE__*/ $dNanD$react.forwardRef($089be6ba315700f8$var$ButtonGroup);




export {$089be6ba315700f8$export$69b1032f2ecdf404 as ButtonGroup};
//# sourceMappingURL=module.js.map
