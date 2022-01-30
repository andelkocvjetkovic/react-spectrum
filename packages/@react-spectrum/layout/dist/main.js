require("./main.css");
var $7sZ04$reactspectrumutils = require("@react-spectrum/utils");
var $7sZ04$reactariautils = require("@react-aria/utils");
var $7sZ04$react = require("react");
var $7sZ04$reactariassr = require("@react-aria/ssr");

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
var $702303612cb59c6a$exports = {};

$parcel$export($702303612cb59c6a$exports, "repeat", () => $702303612cb59c6a$export$76d90c956114f2c2);
$parcel$export($702303612cb59c6a$exports, "minmax", () => $702303612cb59c6a$export$9c1b655deaca4988);
$parcel$export($702303612cb59c6a$exports, "fitContent", () => $702303612cb59c6a$export$2f0b47b0911ce698);
$parcel$export($702303612cb59c6a$exports, "Grid", () => $702303612cb59c6a$export$ef2184bd89960b14);



const $702303612cb59c6a$var$gridStyleProps = {
    ...$7sZ04$reactspectrumutils.baseStyleProps,
    autoFlow: [
        'gridAutoFlow',
        $7sZ04$reactspectrumutils.passthroughStyle
    ],
    autoColumns: [
        'gridAutoColumns',
        $702303612cb59c6a$var$gridDimensionValue
    ],
    autoRows: [
        'gridAutoRows',
        $702303612cb59c6a$var$gridDimensionValue
    ],
    areas: [
        'gridTemplateAreas',
        $702303612cb59c6a$var$gridTemplateAreasValue
    ],
    columns: [
        'gridTemplateColumns',
        $702303612cb59c6a$var$gridTemplateValue
    ],
    rows: [
        'gridTemplateRows',
        $702303612cb59c6a$var$gridTemplateValue
    ],
    gap: [
        'gap',
        $7sZ04$reactspectrumutils.dimensionValue
    ],
    rowGap: [
        'rowGap',
        $7sZ04$reactspectrumutils.dimensionValue
    ],
    columnGap: [
        'columnGap',
        $7sZ04$reactspectrumutils.dimensionValue
    ],
    justifyItems: [
        'justifyItems',
        $7sZ04$reactspectrumutils.passthroughStyle
    ],
    justifyContent: [
        'justifyContent',
        $7sZ04$reactspectrumutils.passthroughStyle
    ],
    alignItems: [
        'alignItems',
        $7sZ04$reactspectrumutils.passthroughStyle
    ],
    alignContent: [
        'alignContent',
        $7sZ04$reactspectrumutils.passthroughStyle
    ]
};
function $702303612cb59c6a$var$Grid(props, ref) {
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $7sZ04$reactspectrumutils.useStyleProps(otherProps, $702303612cb59c6a$var$gridStyleProps);
    styleProps.style.display = 'grid'; // inline-grid?
    let domRef = $7sZ04$reactspectrumutils.useDOMRef(ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($7sZ04$react)).createElement("div", {
        ...$7sZ04$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, children));
}
function $702303612cb59c6a$export$76d90c956114f2c2(count, $702303612cb59c6a$export$76d90c956114f2c2) {
    return `repeat(${count}, ${$702303612cb59c6a$var$gridTemplateValue($702303612cb59c6a$export$76d90c956114f2c2)})`;
}
function $702303612cb59c6a$export$9c1b655deaca4988(min, max) {
    return `minmax(${$702303612cb59c6a$var$gridDimensionValue(min)}, ${$702303612cb59c6a$var$gridDimensionValue(max)})`;
}
function $702303612cb59c6a$export$2f0b47b0911ce698(dimension) {
    return `fit-content(${$702303612cb59c6a$var$gridDimensionValue(dimension)})`;
}
function $702303612cb59c6a$var$gridTemplateAreasValue(value) {
    return value.map((v)=>`"${v}"`
    ).join('\n');
}
function $702303612cb59c6a$var$gridDimensionValue(value) {
    if (/^max-content|min-content|minmax|auto|fit-content|repeat|subgrid/.test(value)) return value;
    return $7sZ04$reactspectrumutils.dimensionValue(value);
}
function $702303612cb59c6a$var$gridTemplateValue(value) {
    if (Array.isArray(value)) return value.map($702303612cb59c6a$var$gridDimensionValue).join(' ');
    return $702303612cb59c6a$var$gridDimensionValue(value);
}
/**
 * A layout container using CSS grid. Supports Spectrum dimensions as values to
 * ensure consistent and adaptive sizing and spacing.
 */ const $702303612cb59c6a$export$ef2184bd89960b14 = /*#__PURE__*/ $7sZ04$react.forwardRef($702303612cb59c6a$var$Grid);


var $e321e5cdc9cc685b$exports = {};

$parcel$export($e321e5cdc9cc685b$exports, "Flex", () => $e321e5cdc9cc685b$export$f51f4c4ede09e011);



var $5965d0ff00ce6fc2$exports = {};

$parcel$export($5965d0ff00ce6fc2$exports, "flex-container", () => $5965d0ff00ce6fc2$export$69d7a39fa31a000b, (v) => $5965d0ff00ce6fc2$export$69d7a39fa31a000b = v);
$parcel$export($5965d0ff00ce6fc2$exports, "flex", () => $5965d0ff00ce6fc2$export$97691fbb80847c19, (v) => $5965d0ff00ce6fc2$export$97691fbb80847c19 = v);
$parcel$export($5965d0ff00ce6fc2$exports, "flex-gap", () => $5965d0ff00ce6fc2$export$31a9da8b58047a44, (v) => $5965d0ff00ce6fc2$export$31a9da8b58047a44 = v);
var $5965d0ff00ce6fc2$export$69d7a39fa31a000b;
var $5965d0ff00ce6fc2$export$97691fbb80847c19;
var $5965d0ff00ce6fc2$export$31a9da8b58047a44;
$5965d0ff00ce6fc2$export$69d7a39fa31a000b = "_flex-container_e15493";
$5965d0ff00ce6fc2$export$97691fbb80847c19 = "_flex_e15493";
$5965d0ff00ce6fc2$export$31a9da8b58047a44 = "_flex-gap_e15493";



const $e321e5cdc9cc685b$var$flexStyleProps = {
    direction: [
        'flexDirection',
        $7sZ04$reactspectrumutils.passthroughStyle
    ],
    wrap: [
        'flexWrap',
        $e321e5cdc9cc685b$var$flexWrapValue
    ],
    justifyContent: [
        'justifyContent',
        $e321e5cdc9cc685b$var$flexAlignValue
    ],
    alignItems: [
        'alignItems',
        $e321e5cdc9cc685b$var$flexAlignValue
    ],
    alignContent: [
        'alignContent',
        $e321e5cdc9cc685b$var$flexAlignValue
    ]
};
function $e321e5cdc9cc685b$var$Flex(props, ref) {
    let { children: children , ...otherProps } = props;
    let breakpointProvider = $7sZ04$reactspectrumutils.useBreakpoint();
    let matchedBreakpoints = breakpointProvider?.matchedBreakpoints || [
        'base'
    ];
    let { styleProps: styleProps  } = $7sZ04$reactspectrumutils.useStyleProps(otherProps);
    let { styleProps: flexStyle  } = $7sZ04$reactspectrumutils.useStyleProps(otherProps, $e321e5cdc9cc685b$var$flexStyleProps);
    let domRef = $7sZ04$reactspectrumutils.useDOMRef(ref);
    let isSSR = $7sZ04$reactariassr.useIsSSR();
    // If a gap property is specified, and there is no native support or we're in SSR, use a shim.
    // Two divs are required for this: the outer one contains most style properties, and the inner
    // one is the flex container. Each item inside the flex container gets a margin around it based
    // on the gap, and the flex container has a negative margin to counteract this. The outer container
    // is necessary to allow nesting of flex containers with gaps, so that the inner CSS variable doesn't
    // override the outer one.
    if ((props.gap || props.rowGap || props.columnGap) && (isSSR || !$e321e5cdc9cc685b$var$isFlexGapSupported())) {
        let style = {
            ...flexStyle.style,
            '--column-gap': props.columnGap != null ? $7sZ04$reactspectrumutils.responsiveDimensionValue(props.columnGap, matchedBreakpoints) : undefined,
            '--row-gap': props.rowGap != null ? $7sZ04$reactspectrumutils.responsiveDimensionValue(props.rowGap, matchedBreakpoints) : undefined,
            '--gap': props.gap != null ? $7sZ04$reactspectrumutils.responsiveDimensionValue(props.gap, matchedBreakpoints) : undefined
        };
        return(/*#__PURE__*/ ($parcel$interopDefault($7sZ04$react)).createElement("div", {
            ...$7sZ04$reactariautils.filterDOMProps(otherProps),
            ...styleProps,
            className: $7sZ04$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($5965d0ff00ce6fc2$exports)), 'flex-container', styleProps.className),
            ref: domRef
        }, /*#__PURE__*/ ($parcel$interopDefault($7sZ04$react)).createElement("div", {
            className: $7sZ04$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($5965d0ff00ce6fc2$exports)), 'flex', 'flex-gap'),
            style: style
        }, children)));
    }
    // If no gaps, or native support exists, then we only need to render a single div.
    let style = {
        ...styleProps.style,
        ...flexStyle.style
    };
    if (props.gap != null) style.gap = $7sZ04$reactspectrumutils.responsiveDimensionValue(props.gap, matchedBreakpoints);
    if (props.columnGap != null) style.columnGap = $7sZ04$reactspectrumutils.responsiveDimensionValue(props.columnGap, matchedBreakpoints);
    if (props.rowGap != null) style.rowGap = $7sZ04$reactspectrumutils.responsiveDimensionValue(props.rowGap, matchedBreakpoints);
    return(/*#__PURE__*/ ($parcel$interopDefault($7sZ04$react)).createElement("div", {
        ...$7sZ04$reactariautils.filterDOMProps(otherProps),
        className: $7sZ04$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($5965d0ff00ce6fc2$exports)), 'flex', styleProps.className),
        style: style,
        ref: domRef
    }, children));
}
/**
 * Normalize 'start' and 'end' alignment values to 'flex-start' and 'flex-end'
 * in flex containers for browser compatibility.
 */ function $e321e5cdc9cc685b$var$flexAlignValue(value) {
    if (value === 'start') return 'flex-start';
    if (value === 'end') return 'flex-end';
    return value;
}
/**
 * Takes a boolean and translates it to flex wrap or nowrap.
 */ function $e321e5cdc9cc685b$var$flexWrapValue(value) {
    if (typeof value === 'boolean') return value ? 'wrap' : 'nowrap';
    return value;
}
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/Modernizr/Modernizr/blob/7efb9d0edd66815fb115fdce95fabaf019ce8db5/feature-detects/css/flexgap.js
let $e321e5cdc9cc685b$var$_isFlexGapSupported = null;
function $e321e5cdc9cc685b$var$isFlexGapSupported() {
    if ($e321e5cdc9cc685b$var$_isFlexGapSupported != null) return $e321e5cdc9cc685b$var$_isFlexGapSupported;
    if (typeof document === 'undefined') return false;
    // create flex container with row-gap set
    var flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';
    // create two, elements inside it
    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));
    // append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);
    $e321e5cdc9cc685b$var$_isFlexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    flex.parentNode.removeChild(flex);
    return $e321e5cdc9cc685b$var$_isFlexGapSupported;
}
/**
 * A layout container using flexbox. Provides Spectrum dimension values, and supports the gap
 * property to define consistent spacing between items.
 */ const $e321e5cdc9cc685b$export$f51f4c4ede09e011 = /*#__PURE__*/ $7sZ04$react.forwardRef($e321e5cdc9cc685b$var$Flex);


$parcel$exportWildcard(module.exports, $702303612cb59c6a$exports);
$parcel$exportWildcard(module.exports, $e321e5cdc9cc685b$exports);


//# sourceMappingURL=main.js.map
