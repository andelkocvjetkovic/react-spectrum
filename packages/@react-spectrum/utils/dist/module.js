import $ewYfP$clsx from "clsx";
import $ewYfP$react, {useState as $ewYfP$useState, useEffect as $ewYfP$useEffect, useRef as $ewYfP$useRef, useImperativeHandle as $ewYfP$useImperativeHandle, useMemo as $ewYfP$useMemo, useContext as $ewYfP$useContext} from "react";
import {useIsSSR as $ewYfP$useIsSSR} from "@react-aria/ssr";
import {useLocale as $ewYfP$useLocale} from "@react-aria/i18n";
import {mergeProps as $ewYfP$mergeProps, useLayoutEffect as $ewYfP$useLayoutEffect, useResizeObserver as $53b23f94fd4d69d2$re_export$useResizeObserver, useValueEffect as $c5d8381c01e97b61$re_export$useValueEffect} from "@react-aria/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $952aca3e1c50eaf2$exports = {};

$parcel$export($952aca3e1c50eaf2$exports, "shouldKeepSpectrumClassNames", () => $952aca3e1c50eaf2$export$46d604dce8bf8724);
$parcel$export($952aca3e1c50eaf2$exports, "keepSpectrumClassNames", () => $952aca3e1c50eaf2$export$f9d3bfd10703eb31);
$parcel$export($952aca3e1c50eaf2$exports, "classNames", () => $952aca3e1c50eaf2$export$ce4ab0c55987d1ff);

let $952aca3e1c50eaf2$export$46d604dce8bf8724 = false;
function $952aca3e1c50eaf2$export$f9d3bfd10703eb31() {
    $952aca3e1c50eaf2$export$46d604dce8bf8724 = true;
    console.warn("Legacy spectrum-prefixed class names enabled for backward compatibility. We recommend replacing instances of CSS overrides targeting spectrum selectors in your app with custom class names of your own, and disabling this flag.");
}
function $952aca3e1c50eaf2$export$ce4ab0c55987d1ff(cssModule, ...values) {
    let classes = [];
    for (let value of values){
        if (typeof value === 'object' && value) {
            let mapped = {
            };
            for(let key in value){
                if (cssModule[key]) mapped[cssModule[key]] = value[key];
                if ($952aca3e1c50eaf2$export$46d604dce8bf8724 || !cssModule[key]) mapped[key] = value[key];
            }
            classes.push(mapped);
        } else if (typeof value === 'string') {
            if (cssModule[value]) classes.push(cssModule[value]);
            if ($952aca3e1c50eaf2$export$46d604dce8bf8724 || !cssModule[value]) classes.push(value);
        } else classes.push(value);
    }
    return $ewYfP$clsx(...classes);
}


var $e73c3851ce221e63$exports = {};

$parcel$export($e73c3851ce221e63$exports, "getWrappedElement", () => $e73c3851ce221e63$export$a5f5a6912b18861c);

function $e73c3851ce221e63$export$a5f5a6912b18861c(children) {
    let element;
    if (typeof children === 'string') element = /*#__PURE__*/ $ewYfP$react.createElement("span", null, children);
    else element = $ewYfP$react.Children.only(children);
    return element;
}


var $35b0c5bcd7f82ddc$exports = {};

$parcel$export($35b0c5bcd7f82ddc$exports, "useMediaQuery", () => $35b0c5bcd7f82ddc$export$32d5543ab307c01);


function $35b0c5bcd7f82ddc$export$32d5543ab307c01(query) {
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let [matches, setMatches] = $ewYfP$useState(()=>supportsMatchMedia ? window.matchMedia(query).matches : false
    );
    $ewYfP$useEffect(()=>{
        if (!supportsMatchMedia) return;
        let mq = window.matchMedia(query);
        let onChange = (evt)=>{
            setMatches(evt.matches);
        };
        mq.addListener(onChange);
        return ()=>{
            mq.removeListener(onChange);
        };
    }, [
        supportsMatchMedia,
        query
    ]);
    // If in SSR, the media query should never match. Once the page hydrates,
    // this will update and the real value will be returned.
    let isSSR = $ewYfP$useIsSSR();
    return isSSR ? false : matches;
}


var $4cbaf6a966866814$exports = {};

$parcel$export($4cbaf6a966866814$exports, "createDOMRef", () => $4cbaf6a966866814$export$a5795cc979dfae80);
$parcel$export($4cbaf6a966866814$exports, "createFocusableRef", () => $4cbaf6a966866814$export$79d69eee6ae4b329);
$parcel$export($4cbaf6a966866814$exports, "useDOMRef", () => $4cbaf6a966866814$export$c2c55ef9111cafd8);
$parcel$export($4cbaf6a966866814$exports, "useFocusableRef", () => $4cbaf6a966866814$export$96a734597687c040);
$parcel$export($4cbaf6a966866814$exports, "unwrapDOMRef", () => $4cbaf6a966866814$export$c7e28c72a4823176);
$parcel$export($4cbaf6a966866814$exports, "useUnwrapDOMRef", () => $4cbaf6a966866814$export$1d5cc31d9d8df817);

function $4cbaf6a966866814$export$a5795cc979dfae80(ref) {
    return {
        UNSAFE_getDOMNode () {
            return ref.current;
        }
    };
}
function $4cbaf6a966866814$export$79d69eee6ae4b329(domRef, focusableRef = domRef) {
    return {
        ...$4cbaf6a966866814$export$a5795cc979dfae80(domRef),
        focus () {
            if (focusableRef.current) focusableRef.current.focus();
        }
    };
}
function $4cbaf6a966866814$export$c2c55ef9111cafd8(ref) {
    let domRef = $ewYfP$useRef(null);
    $ewYfP$useImperativeHandle(ref, ()=>$4cbaf6a966866814$export$a5795cc979dfae80(domRef)
    );
    return domRef;
}
function $4cbaf6a966866814$export$96a734597687c040(ref, focusableRef) {
    let domRef = $ewYfP$useRef(null);
    $ewYfP$useImperativeHandle(ref, ()=>$4cbaf6a966866814$export$79d69eee6ae4b329(domRef, focusableRef)
    );
    return domRef;
}
function $4cbaf6a966866814$export$c7e28c72a4823176(ref) {
    return {
        get current () {
            return ref.current && ref.current.UNSAFE_getDOMNode();
        }
    };
}
function $4cbaf6a966866814$export$1d5cc31d9d8df817(ref) {
    return $ewYfP$useMemo(()=>$4cbaf6a966866814$export$c7e28c72a4823176(ref)
    , [
        ref
    ]);
}


var $c009a7be3354269a$exports = {};

$parcel$export($c009a7be3354269a$exports, "baseStyleProps", () => $c009a7be3354269a$export$fe9c6e915565b4e8);
$parcel$export($c009a7be3354269a$exports, "dimensionValue", () => $c009a7be3354269a$export$abc24f5b99744ea6);
$parcel$export($c009a7be3354269a$exports, "passthroughStyle", () => $c009a7be3354269a$export$46b6c81d11d2c30a);
$parcel$export($c009a7be3354269a$exports, "viewStyleProps", () => $c009a7be3354269a$export$e0705d1a55f297c);
$parcel$export($c009a7be3354269a$exports, "responsiveDimensionValue", () => $c009a7be3354269a$export$f348bec194f2e6b5);
$parcel$export($c009a7be3354269a$exports, "getResponsiveProp", () => $c009a7be3354269a$export$52dbfdbe1b2c3541);
$parcel$export($c009a7be3354269a$exports, "convertStyleProps", () => $c009a7be3354269a$export$f3c39bb9534218d0);
$parcel$export($c009a7be3354269a$exports, "useStyleProps", () => $c009a7be3354269a$export$b8e6fb9d2dff3f41);
var $cd4df7f5da17a0d8$exports = {};

$parcel$export($cd4df7f5da17a0d8$exports, "BreakpointProvider", () => $cd4df7f5da17a0d8$export$8214320346cf5104);
$parcel$export($cd4df7f5da17a0d8$exports, "useMatchedBreakpoints", () => $cd4df7f5da17a0d8$export$140ae7baa51cca23);
$parcel$export($cd4df7f5da17a0d8$exports, "useBreakpoint", () => $cd4df7f5da17a0d8$export$199d6754bdf4e1e3);


const $cd4df7f5da17a0d8$var$Context = /*#__PURE__*/ $ewYfP$react.createContext(null);
$cd4df7f5da17a0d8$var$Context.displayName = 'BreakpointContext';
function $cd4df7f5da17a0d8$export$8214320346cf5104(props) {
    let { children: children , matchedBreakpoints: matchedBreakpoints  } = props;
    return(/*#__PURE__*/ $ewYfP$react.createElement($cd4df7f5da17a0d8$var$Context.Provider, {
        value: {
            matchedBreakpoints: matchedBreakpoints
        }
    }, children));
}
function $cd4df7f5da17a0d8$export$140ae7baa51cca23(breakpoints) {
    let entries = Object.entries(breakpoints).sort(([, valueA], [, valueB])=>valueB - valueA
    );
    let breakpointQueries = entries.map(([, value])=>`(min-width: ${value}px)`
    );
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let getBreakpointHandler = ()=>{
        let matched = [];
        for(let i in breakpointQueries){
            let query = breakpointQueries[i];
            if (window.matchMedia(query).matches) matched.push(entries[i][0]);
        }
        matched.push('base');
        return matched;
    };
    let [breakpoint1, setBreakpoint] = $ewYfP$useState(()=>supportsMatchMedia ? getBreakpointHandler() : [
            'base'
        ]
    );
    $ewYfP$useEffect(()=>{
        if (!supportsMatchMedia) return;
        let onResize = ()=>{
            const breakpointHandler = getBreakpointHandler();
            setBreakpoint((previousBreakpointHandler)=>{
                if (previousBreakpointHandler.length !== breakpointHandler.length || previousBreakpointHandler.some((breakpoint, idx)=>breakpoint !== breakpointHandler[idx]
                )) return [
                    ...breakpointHandler
                ]; // Return a new array to force state change
                return previousBreakpointHandler;
            });
        };
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        };
    }, [
        supportsMatchMedia
    ]);
    // If in SSR, the media query should never match. Once the page hydrates,
    // this will update and the real value will be returned.
    let isSSR = $ewYfP$useIsSSR();
    return isSSR ? [
        'base'
    ] : breakpoint1;
}
function $cd4df7f5da17a0d8$export$199d6754bdf4e1e3() {
    return $ewYfP$useContext($cd4df7f5da17a0d8$var$Context);
}



const $c009a7be3354269a$export$fe9c6e915565b4e8 = {
    margin: [
        'margin',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    marginStart: [
        $c009a7be3354269a$var$rtl('marginLeft', 'marginRight'),
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    marginEnd: [
        $c009a7be3354269a$var$rtl('marginRight', 'marginLeft'),
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    // marginLeft: ['marginLeft', dimensionValue],
    // marginRight: ['marginRight', dimensionValue],
    marginTop: [
        'marginTop',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    marginBottom: [
        'marginBottom',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    marginX: [
        [
            'marginLeft',
            'marginRight'
        ],
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    marginY: [
        [
            'marginTop',
            'marginBottom'
        ],
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    width: [
        'width',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    height: [
        'height',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    minWidth: [
        'minWidth',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    minHeight: [
        'minHeight',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    maxWidth: [
        'maxWidth',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    maxHeight: [
        'maxHeight',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    isHidden: [
        'display',
        $c009a7be3354269a$var$hiddenValue
    ],
    alignSelf: [
        'alignSelf',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    justifySelf: [
        'justifySelf',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    position: [
        'position',
        $c009a7be3354269a$var$anyValue
    ],
    zIndex: [
        'zIndex',
        $c009a7be3354269a$var$anyValue
    ],
    top: [
        'top',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    bottom: [
        'bottom',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    start: [
        $c009a7be3354269a$var$rtl('left', 'right'),
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    end: [
        $c009a7be3354269a$var$rtl('right', 'left'),
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    left: [
        'left',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    right: [
        'right',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    order: [
        'order',
        $c009a7be3354269a$var$anyValue
    ],
    flex: [
        'flex',
        $c009a7be3354269a$var$flexValue
    ],
    flexGrow: [
        'flexGrow',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    flexShrink: [
        'flexShrink',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    flexBasis: [
        'flexBasis',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    gridArea: [
        'gridArea',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    gridColumn: [
        'gridColumn',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    gridColumnEnd: [
        'gridColumnEnd',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    gridColumnStart: [
        'gridColumnStart',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    gridRow: [
        'gridRow',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    gridRowEnd: [
        'gridRowEnd',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ],
    gridRowStart: [
        'gridRowStart',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ]
};
const $c009a7be3354269a$export$e0705d1a55f297c = {
    ...$c009a7be3354269a$export$fe9c6e915565b4e8,
    backgroundColor: [
        'backgroundColor',
        $c009a7be3354269a$var$backgroundColorValue
    ],
    borderWidth: [
        'borderWidth',
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderStartWidth: [
        $c009a7be3354269a$var$rtl('borderLeftWidth', 'borderRightWidth'),
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderEndWidth: [
        $c009a7be3354269a$var$rtl('borderRightWidth', 'borderLeftWidth'),
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderLeftWidth: [
        'borderLeftWidth',
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderRightWidth: [
        'borderRightWidth',
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderTopWidth: [
        'borderTopWidth',
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderBottomWidth: [
        'borderBottomWidth',
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderXWidth: [
        [
            'borderLeftWidth',
            'borderRightWidth'
        ],
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderYWidth: [
        [
            'borderTopWidth',
            'borderBottomWidth'
        ],
        $c009a7be3354269a$var$borderSizeValue
    ],
    borderColor: [
        'borderColor',
        $c009a7be3354269a$var$borderColorValue
    ],
    borderStartColor: [
        $c009a7be3354269a$var$rtl('borderLeftColor', 'borderRightColor'),
        $c009a7be3354269a$var$borderColorValue
    ],
    borderEndColor: [
        $c009a7be3354269a$var$rtl('borderRightColor', 'borderLeftColor'),
        $c009a7be3354269a$var$borderColorValue
    ],
    borderLeftColor: [
        'borderLeftColor',
        $c009a7be3354269a$var$borderColorValue
    ],
    borderRightColor: [
        'borderRightColor',
        $c009a7be3354269a$var$borderColorValue
    ],
    borderTopColor: [
        'borderTopColor',
        $c009a7be3354269a$var$borderColorValue
    ],
    borderBottomColor: [
        'borderBottomColor',
        $c009a7be3354269a$var$borderColorValue
    ],
    borderXColor: [
        [
            'borderLeftColor',
            'borderRightColor'
        ],
        $c009a7be3354269a$var$borderColorValue
    ],
    borderYColor: [
        [
            'borderTopColor',
            'borderBottomColor'
        ],
        $c009a7be3354269a$var$borderColorValue
    ],
    borderRadius: [
        'borderRadius',
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderTopStartRadius: [
        $c009a7be3354269a$var$rtl('borderTopLeftRadius', 'borderTopRightRadius'),
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderTopEndRadius: [
        $c009a7be3354269a$var$rtl('borderTopRightRadius', 'borderTopLeftRadius'),
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderBottomStartRadius: [
        $c009a7be3354269a$var$rtl('borderBottomLeftRadius', 'borderBottomRightRadius'),
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderBottomEndRadius: [
        $c009a7be3354269a$var$rtl('borderBottomRightRadius', 'borderBottomLeftRadius'),
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderTopLeftRadius: [
        'borderTopLeftRadius',
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderTopRightRadius: [
        'borderTopRightRadius',
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderBottomLeftRadius: [
        'borderBottomLeftRadius',
        $c009a7be3354269a$var$borderRadiusValue
    ],
    borderBottomRightRadius: [
        'borderBottomRightRadius',
        $c009a7be3354269a$var$borderRadiusValue
    ],
    padding: [
        'padding',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingStart: [
        $c009a7be3354269a$var$rtl('paddingLeft', 'paddingRight'),
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingEnd: [
        $c009a7be3354269a$var$rtl('paddingRight', 'paddingLeft'),
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingLeft: [
        'paddingLeft',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingRight: [
        'paddingRight',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingTop: [
        'paddingTop',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingBottom: [
        'paddingBottom',
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingX: [
        [
            'paddingLeft',
            'paddingRight'
        ],
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    paddingY: [
        [
            'paddingTop',
            'paddingBottom'
        ],
        $c009a7be3354269a$export$abc24f5b99744ea6
    ],
    overflow: [
        'overflow',
        $c009a7be3354269a$export$46b6c81d11d2c30a
    ]
};
const $c009a7be3354269a$var$borderStyleProps = {
    borderWidth: 'borderStyle',
    borderLeftWidth: 'borderLeftStyle',
    borderRightWidth: 'borderRightStyle',
    borderTopWidth: 'borderTopStyle',
    borderBottomWidth: 'borderBottomStyle'
};
function $c009a7be3354269a$var$rtl(ltr, rtl) {
    return (direction)=>direction === 'rtl' ? rtl : ltr
    ;
}
const $c009a7be3354269a$var$UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/;
const $c009a7be3354269a$var$FUNC_RE = /^\s*\w+\(/;
const $c009a7be3354269a$var$SPECTRUM_VARIABLE_RE = /(static-)?size-\d+|single-line-(height|width)/g;
function $c009a7be3354269a$export$abc24f5b99744ea6(value) {
    if (typeof value === 'number') return value + 'px';
    if ($c009a7be3354269a$var$UNIT_RE.test(value)) return value;
    if ($c009a7be3354269a$var$FUNC_RE.test(value)) return value.replace($c009a7be3354269a$var$SPECTRUM_VARIABLE_RE, 'var(--spectrum-global-dimension-$&, var(--spectrum-alias-$&))');
    return `var(--spectrum-global-dimension-${value}, var(--spectrum-alias-${value}))`;
}
function $c009a7be3354269a$export$f348bec194f2e6b5(value, matchedBreakpoints) {
    value = $c009a7be3354269a$export$52dbfdbe1b2c3541(value, matchedBreakpoints);
    return $c009a7be3354269a$export$abc24f5b99744ea6(value);
}
function $c009a7be3354269a$var$colorValue(value, type = 'default') {
    return `var(--spectrum-global-color-${value}, var(--spectrum-semantic-${value}-color-${type}))`;
}
function $c009a7be3354269a$var$backgroundColorValue(value) {
    return `var(--spectrum-alias-background-color-${value}, ${$c009a7be3354269a$var$colorValue(value, 'background')})`;
}
function $c009a7be3354269a$var$borderColorValue(value) {
    if (value === 'default') return 'var(--spectrum-alias-border-color)';
    return `var(--spectrum-alias-border-color-${value}, ${$c009a7be3354269a$var$colorValue(value, 'border')})`;
}
function $c009a7be3354269a$var$borderSizeValue(value) {
    return `var(--spectrum-alias-border-size-${value})`;
}
function $c009a7be3354269a$var$borderRadiusValue(value) {
    return `var(--spectrum-alias-border-radius-${value})`;
}
function $c009a7be3354269a$var$hiddenValue(value) {
    return value ? 'none' : undefined;
}
function $c009a7be3354269a$var$anyValue(value) {
    return value;
}
function $c009a7be3354269a$var$flexValue(value) {
    if (typeof value === 'boolean') return value ? '1' : undefined;
    return '' + value;
}
function $c009a7be3354269a$export$f3c39bb9534218d0(props, handlers, direction, matchedBreakpoints) {
    let style = {
    };
    for(let key in props){
        let styleProp = handlers[key];
        if (!styleProp || props[key] == null) continue;
        let [name, convert] = styleProp;
        if (typeof name === 'function') name = name(direction);
        let prop = $c009a7be3354269a$export$52dbfdbe1b2c3541(props[key], matchedBreakpoints);
        let value = convert(prop);
        if (Array.isArray(name)) for (let k of name)style[k] = value;
        else style[name] = value;
    }
    for(let prop in $c009a7be3354269a$var$borderStyleProps)if (style[prop]) {
        style[$c009a7be3354269a$var$borderStyleProps[prop]] = 'solid';
        style.boxSizing = 'border-box';
    }
    return style;
}
function $c009a7be3354269a$export$b8e6fb9d2dff3f41(props, handlers = $c009a7be3354269a$export$fe9c6e915565b4e8, options = {
}) {
    let { UNSAFE_className: UNSAFE_className , UNSAFE_style: UNSAFE_style , ...otherProps } = props;
    let breakpointProvider = $cd4df7f5da17a0d8$export$199d6754bdf4e1e3();
    let { direction: direction  } = $ewYfP$useLocale();
    let { matchedBreakpoints: matchedBreakpoints = breakpointProvider?.matchedBreakpoints || [
        'base'
    ]  } = options;
    let styles = $c009a7be3354269a$export$f3c39bb9534218d0(props, handlers, direction, matchedBreakpoints);
    let style = {
        ...UNSAFE_style,
        ...styles
    };
    // @ts-ignore
    if (otherProps.className) console.warn("The className prop is unsafe and is unsupported in React Spectrum v3. Please use style props with Spectrum variables, or UNSAFE_className if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.");
    // @ts-ignore
    if (otherProps.style) console.warn("The style prop is unsafe and is unsupported in React Spectrum v3. Please use style props with Spectrum variables, or UNSAFE_style if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.");
    let styleProps = {
        style: style,
        className: UNSAFE_className
    };
    if ($c009a7be3354269a$export$52dbfdbe1b2c3541(props.isHidden, matchedBreakpoints)) styleProps.hidden = true;
    return {
        styleProps: styleProps
    };
}
function $c009a7be3354269a$export$46b6c81d11d2c30a(value) {
    return value;
}
function $c009a7be3354269a$export$52dbfdbe1b2c3541(prop, matchedBreakpoints) {
    if (prop && typeof prop === 'object' && !Array.isArray(prop)) {
        for(let i = 0; i < matchedBreakpoints.length; i++){
            let breakpoint = matchedBreakpoints[i];
            if (prop[breakpoint] != null) return prop[breakpoint];
        }
        return prop.base;
    }
    return prop;
}


var $88ec9803277392ca$exports = {};

$parcel$export($88ec9803277392ca$exports, "useSlotProps", () => $88ec9803277392ca$export$1e5c9e6e4e15efe3);
$parcel$export($88ec9803277392ca$exports, "cssModuleToSlots", () => $88ec9803277392ca$export$365cf34cda9978e2);
$parcel$export($88ec9803277392ca$exports, "SlotProvider", () => $88ec9803277392ca$export$8107b24b91795686);
$parcel$export($88ec9803277392ca$exports, "ClearSlots", () => $88ec9803277392ca$export$ceb145244332b7a2);


let $88ec9803277392ca$var$SlotContext = /*#__PURE__*/ $ewYfP$react.createContext(null);
function $88ec9803277392ca$export$1e5c9e6e4e15efe3(props, defaultSlot) {
    let slot = props.slot || defaultSlot;
    let { [slot]: slotProps = {
    }  } = $ewYfP$useContext($88ec9803277392ca$var$SlotContext) || {
    };
    return $ewYfP$mergeProps(props, $ewYfP$mergeProps(slotProps, {
        id: props.id
    }));
}
function $88ec9803277392ca$export$365cf34cda9978e2(cssModule) {
    return Object.keys(cssModule).reduce((acc, slot)=>{
        acc[slot] = {
            UNSAFE_className: cssModule[slot]
        };
        return acc;
    }, {
    });
}
function $88ec9803277392ca$export$8107b24b91795686(props) {
    let parentSlots = $ewYfP$useContext($88ec9803277392ca$var$SlotContext) || {
    };
    let { slots: slots = {
    } , children: children  } = props;
    // Merge props for each slot from parent context and props
    let value = $ewYfP$useMemo(()=>Object.keys(parentSlots).concat(Object.keys(slots)).reduce((o, p)=>({
                ...o,
                [p]: $ewYfP$mergeProps(parentSlots[p] || {
                }, slots[p] || {
                })
            })
        , {
        })
    , [
        parentSlots,
        slots
    ]);
    return(/*#__PURE__*/ $ewYfP$react.createElement($88ec9803277392ca$var$SlotContext.Provider, {
        value: value
    }, children));
}
function $88ec9803277392ca$export$ceb145244332b7a2(props) {
    let { children: children , ...otherProps } = props;
    let content = children;
    if ($ewYfP$react.Children.toArray(children).length <= 1) {
        if (typeof children === 'function') content = /*#__PURE__*/ $ewYfP$react.cloneElement($ewYfP$react.Children.only(children), otherProps);
    }
    return(/*#__PURE__*/ $ewYfP$react.createElement($88ec9803277392ca$var$SlotContext.Provider, {
        value: {
        }
    }, content));
}


var $fd76978e7ca7e785$exports = {};

$parcel$export($fd76978e7ca7e785$exports, "useHasChild", () => $fd76978e7ca7e785$export$e52e2242b6d0f1d4);


function $fd76978e7ca7e785$export$e52e2242b6d0f1d4(query, ref) {
    let [hasChild, setHasChild] = $ewYfP$useState(true);
    $ewYfP$useLayoutEffect(()=>{
        setHasChild(!!(ref.current && ref.current.querySelector(query)));
    }, [
        setHasChild,
        query,
        ref
    ]);
    return hasChild;
}


var $53b23f94fd4d69d2$exports = {};

$parcel$export($53b23f94fd4d69d2$exports, "useResizeObserver", () => $53b23f94fd4d69d2$re_export$useResizeObserver);



var $963a2f7e516dcead$exports = {};

$parcel$export($963a2f7e516dcead$exports, "useIsMobileDevice", () => $963a2f7e516dcead$export$736bf165441b18c7);

const $963a2f7e516dcead$var$MOBILE_SCREEN_WIDTH = 700;
function $963a2f7e516dcead$export$736bf165441b18c7() {
    let isSSR = $ewYfP$useIsSSR();
    if (isSSR || typeof window === 'undefined') return false;
    return window.screen.width <= $963a2f7e516dcead$var$MOBILE_SCREEN_WIDTH;
}


var $c5d8381c01e97b61$exports = {};

$parcel$export($c5d8381c01e97b61$exports, "useValueEffect", () => $c5d8381c01e97b61$re_export$useValueEffect);






export {$952aca3e1c50eaf2$export$46d604dce8bf8724 as shouldKeepSpectrumClassNames, $952aca3e1c50eaf2$export$f9d3bfd10703eb31 as keepSpectrumClassNames, $952aca3e1c50eaf2$export$ce4ab0c55987d1ff as classNames, $e73c3851ce221e63$export$a5f5a6912b18861c as getWrappedElement, $35b0c5bcd7f82ddc$export$32d5543ab307c01 as useMediaQuery, $4cbaf6a966866814$export$a5795cc979dfae80 as createDOMRef, $4cbaf6a966866814$export$79d69eee6ae4b329 as createFocusableRef, $4cbaf6a966866814$export$c2c55ef9111cafd8 as useDOMRef, $4cbaf6a966866814$export$96a734597687c040 as useFocusableRef, $4cbaf6a966866814$export$c7e28c72a4823176 as unwrapDOMRef, $4cbaf6a966866814$export$1d5cc31d9d8df817 as useUnwrapDOMRef, $c009a7be3354269a$export$fe9c6e915565b4e8 as baseStyleProps, $c009a7be3354269a$export$abc24f5b99744ea6 as dimensionValue, $c009a7be3354269a$export$46b6c81d11d2c30a as passthroughStyle, $c009a7be3354269a$export$e0705d1a55f297c as viewStyleProps, $c009a7be3354269a$export$f348bec194f2e6b5 as responsiveDimensionValue, $c009a7be3354269a$export$52dbfdbe1b2c3541 as getResponsiveProp, $c009a7be3354269a$export$f3c39bb9534218d0 as convertStyleProps, $c009a7be3354269a$export$b8e6fb9d2dff3f41 as useStyleProps, $88ec9803277392ca$export$1e5c9e6e4e15efe3 as useSlotProps, $88ec9803277392ca$export$365cf34cda9978e2 as cssModuleToSlots, $88ec9803277392ca$export$8107b24b91795686 as SlotProvider, $88ec9803277392ca$export$ceb145244332b7a2 as ClearSlots, $fd76978e7ca7e785$export$e52e2242b6d0f1d4 as useHasChild, $53b23f94fd4d69d2$re_export$useResizeObserver as useResizeObserver, $963a2f7e516dcead$export$736bf165441b18c7 as useIsMobileDevice, $c5d8381c01e97b61$re_export$useValueEffect as useValueEffect, $cd4df7f5da17a0d8$export$8214320346cf5104 as BreakpointProvider, $cd4df7f5da17a0d8$export$140ae7baa51cca23 as useMatchedBreakpoints, $cd4df7f5da17a0d8$export$199d6754bdf4e1e3 as useBreakpoint};
//# sourceMappingURL=module.js.map
