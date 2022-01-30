require("./main.css");
var $fadik$reactspectrumutils = require("@react-spectrum/utils");
var $fadik$reactariautils = require("@react-aria/utils");
var $fadik$reactspectrumprovider = require("@react-spectrum/provider");
var $fadik$react = require("react");

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
var $c30474aa2e2ed478$exports = {};

$parcel$export($c30474aa2e2ed478$exports, "ButtonGroup", () => $c30474aa2e2ed478$export$69b1032f2ecdf404);




var $53a033bfcc659fdc$exports = {};

$parcel$export($53a033bfcc659fdc$exports, "spectrum-ButtonGroup", () => $53a033bfcc659fdc$export$a92faf51352ac608, (v) => $53a033bfcc659fdc$export$a92faf51352ac608 = v);
$parcel$export($53a033bfcc659fdc$exports, "spectrum-ButtonGroup-Button", () => $53a033bfcc659fdc$export$7184de2337c1927f, (v) => $53a033bfcc659fdc$export$7184de2337c1927f = v);
$parcel$export($53a033bfcc659fdc$exports, "spectrum-ButtonGroup--alignEnd", () => $53a033bfcc659fdc$export$30e96c53d7beca11, (v) => $53a033bfcc659fdc$export$30e96c53d7beca11 = v);
$parcel$export($53a033bfcc659fdc$exports, "spectrum-ButtonGroup--alignCenter", () => $53a033bfcc659fdc$export$252bc7c4ae05757, (v) => $53a033bfcc659fdc$export$252bc7c4ae05757 = v);
$parcel$export($53a033bfcc659fdc$exports, "spectrum-ButtonGroup--vertical", () => $53a033bfcc659fdc$export$84d9c0e1917a4eaf, (v) => $53a033bfcc659fdc$export$84d9c0e1917a4eaf = v);
var $53a033bfcc659fdc$export$a92faf51352ac608;
var $53a033bfcc659fdc$export$7184de2337c1927f;
var $53a033bfcc659fdc$export$30e96c53d7beca11;
var $53a033bfcc659fdc$export$252bc7c4ae05757;
var $53a033bfcc659fdc$export$84d9c0e1917a4eaf;
$53a033bfcc659fdc$export$a92faf51352ac608 = "_spectrum-ButtonGroup_b10c2f";
$53a033bfcc659fdc$export$7184de2337c1927f = "_spectrum-ButtonGroup-Button_b10c2f";
$53a033bfcc659fdc$export$30e96c53d7beca11 = "_spectrum-ButtonGroup--alignEnd_b10c2f";
$53a033bfcc659fdc$export$252bc7c4ae05757 = "_spectrum-ButtonGroup--alignCenter_b10c2f";
$53a033bfcc659fdc$export$84d9c0e1917a4eaf = "_spectrum-ButtonGroup--vertical_b10c2f";


function $c30474aa2e2ed478$var$ButtonGroup(props, ref) {
    let { scale: scale  } = $fadik$reactspectrumprovider.useProvider();
    props = $fadik$reactspectrumprovider.useProviderProps(props);
    props = $fadik$reactspectrumutils.useSlotProps(props, 'buttonGroup');
    let { children: children , orientation: orientation = 'horizontal' , isDisabled: isDisabled , align: align = 'start' , ...otherProps } = props;
    let { styleProps: styleProps  } = $fadik$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $fadik$reactspectrumutils.useDOMRef(ref);
    let [hasOverflow, setHasOverflow] = $fadik$reactariautils.useValueEffect(false);
    let checkForOverflow = $fadik$react.useCallback(()=>{
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
    $fadik$react.useEffect(()=>{
        checkForOverflow();
    }, [
        checkForOverflow
    ]);
    // 2. External changes: buttongroup won't change size due to any parents changing size, so listen to its container for size changes to figure out if we should remeasure
    let parent = $fadik$react.useRef();
    $fadik$react.useEffect(()=>{
        parent.current = domRef.current.parentElement;
    }, [
        domRef.current
    ]);
    $fadik$reactspectrumutils.useResizeObserver({
        ref: parent,
        onResize: checkForOverflow
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($fadik$react)).createElement("div", {
        ...$fadik$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef,
        className: $fadik$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($53a033bfcc659fdc$exports)), 'spectrum-ButtonGroup', {
            'spectrum-ButtonGroup--vertical': orientation === 'vertical' || hasOverflow,
            'spectrum-ButtonGroup--alignEnd': align === 'end',
            'spectrum-ButtonGroup--alignCenter': align === 'center'
        }, styleProps.className)
    }, /*#__PURE__*/ ($parcel$interopDefault($fadik$react)).createElement($fadik$reactspectrumutils.SlotProvider, {
        slots: {
            button: {
                UNSAFE_className: $fadik$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($53a033bfcc659fdc$exports)), 'spectrum-ButtonGroup-Button')
            }
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($fadik$react)).createElement($fadik$reactspectrumprovider.Provider, {
        isDisabled: isDisabled
    }, children))));
}
/**
 * ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.
 */ let $c30474aa2e2ed478$export$69b1032f2ecdf404 = /*#__PURE__*/ ($parcel$interopDefault($fadik$react)).forwardRef($c30474aa2e2ed478$var$ButtonGroup);


$parcel$exportWildcard(module.exports, $c30474aa2e2ed478$exports);


//# sourceMappingURL=main.js.map
