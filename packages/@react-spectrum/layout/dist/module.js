import "./main.css";
import {baseStyleProps as $4QZis$baseStyleProps, passthroughStyle as $4QZis$passthroughStyle, dimensionValue as $4QZis$dimensionValue, useStyleProps as $4QZis$useStyleProps, useDOMRef as $4QZis$useDOMRef, useBreakpoint as $4QZis$useBreakpoint, responsiveDimensionValue as $4QZis$responsiveDimensionValue, classNames as $4QZis$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $4QZis$filterDOMProps} from "@react-aria/utils";
import $4QZis$react, {forwardRef as $4QZis$forwardRef} from "react";
import {useIsSSR as $4QZis$useIsSSR} from "@react-aria/ssr";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $698863dbed9612fa$exports = {};

$parcel$export($698863dbed9612fa$exports, "repeat", () => $698863dbed9612fa$export$76d90c956114f2c2);
$parcel$export($698863dbed9612fa$exports, "minmax", () => $698863dbed9612fa$export$9c1b655deaca4988);
$parcel$export($698863dbed9612fa$exports, "fitContent", () => $698863dbed9612fa$export$2f0b47b0911ce698);
$parcel$export($698863dbed9612fa$exports, "Grid", () => $698863dbed9612fa$export$ef2184bd89960b14);



const $698863dbed9612fa$var$gridStyleProps = {
    ...$4QZis$baseStyleProps,
    autoFlow: [
        'gridAutoFlow',
        $4QZis$passthroughStyle
    ],
    autoColumns: [
        'gridAutoColumns',
        $698863dbed9612fa$var$gridDimensionValue
    ],
    autoRows: [
        'gridAutoRows',
        $698863dbed9612fa$var$gridDimensionValue
    ],
    areas: [
        'gridTemplateAreas',
        $698863dbed9612fa$var$gridTemplateAreasValue
    ],
    columns: [
        'gridTemplateColumns',
        $698863dbed9612fa$var$gridTemplateValue
    ],
    rows: [
        'gridTemplateRows',
        $698863dbed9612fa$var$gridTemplateValue
    ],
    gap: [
        'gap',
        $4QZis$dimensionValue
    ],
    rowGap: [
        'rowGap',
        $4QZis$dimensionValue
    ],
    columnGap: [
        'columnGap',
        $4QZis$dimensionValue
    ],
    justifyItems: [
        'justifyItems',
        $4QZis$passthroughStyle
    ],
    justifyContent: [
        'justifyContent',
        $4QZis$passthroughStyle
    ],
    alignItems: [
        'alignItems',
        $4QZis$passthroughStyle
    ],
    alignContent: [
        'alignContent',
        $4QZis$passthroughStyle
    ]
};
function $698863dbed9612fa$var$Grid(props, ref) {
    let { children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $4QZis$useStyleProps(otherProps, $698863dbed9612fa$var$gridStyleProps);
    styleProps.style.display = 'grid'; // inline-grid?
    let domRef = $4QZis$useDOMRef(ref);
    return(/*#__PURE__*/ $4QZis$react.createElement("div", {
        ...$4QZis$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef
    }, children));
}
function $698863dbed9612fa$export$76d90c956114f2c2(count, $698863dbed9612fa$export$76d90c956114f2c2) {
    return `repeat(${count}, ${$698863dbed9612fa$var$gridTemplateValue($698863dbed9612fa$export$76d90c956114f2c2)})`;
}
function $698863dbed9612fa$export$9c1b655deaca4988(min, max) {
    return `minmax(${$698863dbed9612fa$var$gridDimensionValue(min)}, ${$698863dbed9612fa$var$gridDimensionValue(max)})`;
}
function $698863dbed9612fa$export$2f0b47b0911ce698(dimension) {
    return `fit-content(${$698863dbed9612fa$var$gridDimensionValue(dimension)})`;
}
function $698863dbed9612fa$var$gridTemplateAreasValue(value) {
    return value.map((v)=>`"${v}"`
    ).join('\n');
}
function $698863dbed9612fa$var$gridDimensionValue(value) {
    if (/^max-content|min-content|minmax|auto|fit-content|repeat|subgrid/.test(value)) return value;
    return $4QZis$dimensionValue(value);
}
function $698863dbed9612fa$var$gridTemplateValue(value) {
    if (Array.isArray(value)) return value.map($698863dbed9612fa$var$gridDimensionValue).join(' ');
    return $698863dbed9612fa$var$gridDimensionValue(value);
}
/**
 * A layout container using CSS grid. Supports Spectrum dimensions as values to
 * ensure consistent and adaptive sizing and spacing.
 */ const $698863dbed9612fa$export$ef2184bd89960b14 = /*#__PURE__*/ $4QZis$forwardRef($698863dbed9612fa$var$Grid);


var $be7a0a56123cb91a$exports = {};

$parcel$export($be7a0a56123cb91a$exports, "Flex", () => $be7a0a56123cb91a$export$f51f4c4ede09e011);



var $a719c1e6c17b3619$exports = {};

$parcel$export($a719c1e6c17b3619$exports, "flex-container", () => $a719c1e6c17b3619$export$69d7a39fa31a000b, (v) => $a719c1e6c17b3619$export$69d7a39fa31a000b = v);
$parcel$export($a719c1e6c17b3619$exports, "flex", () => $a719c1e6c17b3619$export$97691fbb80847c19, (v) => $a719c1e6c17b3619$export$97691fbb80847c19 = v);
$parcel$export($a719c1e6c17b3619$exports, "flex-gap", () => $a719c1e6c17b3619$export$31a9da8b58047a44, (v) => $a719c1e6c17b3619$export$31a9da8b58047a44 = v);
var $a719c1e6c17b3619$export$69d7a39fa31a000b;
var $a719c1e6c17b3619$export$97691fbb80847c19;
var $a719c1e6c17b3619$export$31a9da8b58047a44;
$a719c1e6c17b3619$export$69d7a39fa31a000b = "_flex-container_e15493";
$a719c1e6c17b3619$export$97691fbb80847c19 = "_flex_e15493";
$a719c1e6c17b3619$export$31a9da8b58047a44 = "_flex-gap_e15493";



const $be7a0a56123cb91a$var$flexStyleProps = {
    direction: [
        'flexDirection',
        $4QZis$passthroughStyle
    ],
    wrap: [
        'flexWrap',
        $be7a0a56123cb91a$var$flexWrapValue
    ],
    justifyContent: [
        'justifyContent',
        $be7a0a56123cb91a$var$flexAlignValue
    ],
    alignItems: [
        'alignItems',
        $be7a0a56123cb91a$var$flexAlignValue
    ],
    alignContent: [
        'alignContent',
        $be7a0a56123cb91a$var$flexAlignValue
    ]
};
function $be7a0a56123cb91a$var$Flex(props, ref) {
    let { children: children , ...otherProps } = props;
    let breakpointProvider = $4QZis$useBreakpoint();
    let matchedBreakpoints = breakpointProvider?.matchedBreakpoints || [
        'base'
    ];
    let { styleProps: styleProps  } = $4QZis$useStyleProps(otherProps);
    let { styleProps: flexStyle  } = $4QZis$useStyleProps(otherProps, $be7a0a56123cb91a$var$flexStyleProps);
    let domRef = $4QZis$useDOMRef(ref);
    let isSSR = $4QZis$useIsSSR();
    // If a gap property is specified, and there is no native support or we're in SSR, use a shim.
    // Two divs are required for this: the outer one contains most style properties, and the inner
    // one is the flex container. Each item inside the flex container gets a margin around it based
    // on the gap, and the flex container has a negative margin to counteract this. The outer container
    // is necessary to allow nesting of flex containers with gaps, so that the inner CSS variable doesn't
    // override the outer one.
    if ((props.gap || props.rowGap || props.columnGap) && (isSSR || !$be7a0a56123cb91a$var$isFlexGapSupported())) {
        let style = {
            ...flexStyle.style,
            '--column-gap': props.columnGap != null ? $4QZis$responsiveDimensionValue(props.columnGap, matchedBreakpoints) : undefined,
            '--row-gap': props.rowGap != null ? $4QZis$responsiveDimensionValue(props.rowGap, matchedBreakpoints) : undefined,
            '--gap': props.gap != null ? $4QZis$responsiveDimensionValue(props.gap, matchedBreakpoints) : undefined
        };
        return(/*#__PURE__*/ $4QZis$react.createElement("div", {
            ...$4QZis$filterDOMProps(otherProps),
            ...styleProps,
            className: $4QZis$classNames((/*@__PURE__*/$parcel$interopDefault($a719c1e6c17b3619$exports)), 'flex-container', styleProps.className),
            ref: domRef
        }, /*#__PURE__*/ $4QZis$react.createElement("div", {
            className: $4QZis$classNames((/*@__PURE__*/$parcel$interopDefault($a719c1e6c17b3619$exports)), 'flex', 'flex-gap'),
            style: style
        }, children)));
    }
    // If no gaps, or native support exists, then we only need to render a single div.
    let style = {
        ...styleProps.style,
        ...flexStyle.style
    };
    if (props.gap != null) style.gap = $4QZis$responsiveDimensionValue(props.gap, matchedBreakpoints);
    if (props.columnGap != null) style.columnGap = $4QZis$responsiveDimensionValue(props.columnGap, matchedBreakpoints);
    if (props.rowGap != null) style.rowGap = $4QZis$responsiveDimensionValue(props.rowGap, matchedBreakpoints);
    return(/*#__PURE__*/ $4QZis$react.createElement("div", {
        ...$4QZis$filterDOMProps(otherProps),
        className: $4QZis$classNames((/*@__PURE__*/$parcel$interopDefault($a719c1e6c17b3619$exports)), 'flex', styleProps.className),
        style: style,
        ref: domRef
    }, children));
}
/**
 * Normalize 'start' and 'end' alignment values to 'flex-start' and 'flex-end'
 * in flex containers for browser compatibility.
 */ function $be7a0a56123cb91a$var$flexAlignValue(value) {
    if (value === 'start') return 'flex-start';
    if (value === 'end') return 'flex-end';
    return value;
}
/**
 * Takes a boolean and translates it to flex wrap or nowrap.
 */ function $be7a0a56123cb91a$var$flexWrapValue(value) {
    if (typeof value === 'boolean') return value ? 'wrap' : 'nowrap';
    return value;
}
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/Modernizr/Modernizr/blob/7efb9d0edd66815fb115fdce95fabaf019ce8db5/feature-detects/css/flexgap.js
let $be7a0a56123cb91a$var$_isFlexGapSupported = null;
function $be7a0a56123cb91a$var$isFlexGapSupported() {
    if ($be7a0a56123cb91a$var$_isFlexGapSupported != null) return $be7a0a56123cb91a$var$_isFlexGapSupported;
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
    $be7a0a56123cb91a$var$_isFlexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    flex.parentNode.removeChild(flex);
    return $be7a0a56123cb91a$var$_isFlexGapSupported;
}
/**
 * A layout container using flexbox. Provides Spectrum dimension values, and supports the gap
 * property to define consistent spacing between items.
 */ const $be7a0a56123cb91a$export$f51f4c4ede09e011 = /*#__PURE__*/ $4QZis$forwardRef($be7a0a56123cb91a$var$Flex);




export {$698863dbed9612fa$export$76d90c956114f2c2 as repeat, $698863dbed9612fa$export$9c1b655deaca4988 as minmax, $698863dbed9612fa$export$2f0b47b0911ce698 as fitContent, $698863dbed9612fa$export$ef2184bd89960b14 as Grid, $be7a0a56123cb91a$export$f51f4c4ede09e011 as Flex};
//# sourceMappingURL=module.js.map
