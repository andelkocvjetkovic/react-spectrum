var $juWZw$clsx = require("clsx");
var $juWZw$react = require("react");
var $juWZw$reactariassr = require("@react-aria/ssr");
var $juWZw$reactariai18n = require("@react-aria/i18n");
var $juWZw$reactariautils = require("@react-aria/utils");

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
var $378fc89cc102a298$exports = {};

$parcel$export($378fc89cc102a298$exports, "shouldKeepSpectrumClassNames", () => $378fc89cc102a298$export$46d604dce8bf8724);
$parcel$export($378fc89cc102a298$exports, "keepSpectrumClassNames", () => $378fc89cc102a298$export$f9d3bfd10703eb31);
$parcel$export($378fc89cc102a298$exports, "classNames", () => $378fc89cc102a298$export$ce4ab0c55987d1ff);

let $378fc89cc102a298$export$46d604dce8bf8724 = false;
function $378fc89cc102a298$export$f9d3bfd10703eb31() {
    $378fc89cc102a298$export$46d604dce8bf8724 = true;
    console.warn("Legacy spectrum-prefixed class names enabled for backward compatibility. We recommend replacing instances of CSS overrides targeting spectrum selectors in your app with custom class names of your own, and disabling this flag.");
}
function $378fc89cc102a298$export$ce4ab0c55987d1ff(cssModule, ...values) {
    let classes = [];
    for (let value of values){
        if (typeof value === 'object' && value) {
            let mapped = {
            };
            for(let key in value){
                if (cssModule[key]) mapped[cssModule[key]] = value[key];
                if ($378fc89cc102a298$export$46d604dce8bf8724 || !cssModule[key]) mapped[key] = value[key];
            }
            classes.push(mapped);
        } else if (typeof value === 'string') {
            if (cssModule[value]) classes.push(cssModule[value]);
            if ($378fc89cc102a298$export$46d604dce8bf8724 || !cssModule[value]) classes.push(value);
        } else classes.push(value);
    }
    return ($parcel$interopDefault($juWZw$clsx))(...classes);
}


var $fbe4b66b4adca899$exports = {};

$parcel$export($fbe4b66b4adca899$exports, "getWrappedElement", () => $fbe4b66b4adca899$export$a5f5a6912b18861c);

function $fbe4b66b4adca899$export$a5f5a6912b18861c(children) {
    let element;
    if (typeof children === 'string') element = /*#__PURE__*/ ($parcel$interopDefault($juWZw$react)).createElement("span", null, children);
    else element = ($parcel$interopDefault($juWZw$react)).Children.only(children);
    return element;
}


var $1876fcc4f0127e7e$exports = {};

$parcel$export($1876fcc4f0127e7e$exports, "useMediaQuery", () => $1876fcc4f0127e7e$export$32d5543ab307c01);


function $1876fcc4f0127e7e$export$32d5543ab307c01(query) {
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let [matches, setMatches] = $juWZw$react.useState(()=>supportsMatchMedia ? window.matchMedia(query).matches : false
    );
    $juWZw$react.useEffect(()=>{
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
    let isSSR = $juWZw$reactariassr.useIsSSR();
    return isSSR ? false : matches;
}


var $d3b530e96467ff2f$exports = {};

$parcel$export($d3b530e96467ff2f$exports, "createDOMRef", () => $d3b530e96467ff2f$export$a5795cc979dfae80);
$parcel$export($d3b530e96467ff2f$exports, "createFocusableRef", () => $d3b530e96467ff2f$export$79d69eee6ae4b329);
$parcel$export($d3b530e96467ff2f$exports, "useDOMRef", () => $d3b530e96467ff2f$export$c2c55ef9111cafd8);
$parcel$export($d3b530e96467ff2f$exports, "useFocusableRef", () => $d3b530e96467ff2f$export$96a734597687c040);
$parcel$export($d3b530e96467ff2f$exports, "unwrapDOMRef", () => $d3b530e96467ff2f$export$c7e28c72a4823176);
$parcel$export($d3b530e96467ff2f$exports, "useUnwrapDOMRef", () => $d3b530e96467ff2f$export$1d5cc31d9d8df817);

function $d3b530e96467ff2f$export$a5795cc979dfae80(ref) {
    return {
        UNSAFE_getDOMNode () {
            return ref.current;
        }
    };
}
function $d3b530e96467ff2f$export$79d69eee6ae4b329(domRef, focusableRef = domRef) {
    return {
        ...$d3b530e96467ff2f$export$a5795cc979dfae80(domRef),
        focus () {
            if (focusableRef.current) focusableRef.current.focus();
        }
    };
}
function $d3b530e96467ff2f$export$c2c55ef9111cafd8(ref) {
    let domRef = $juWZw$react.useRef(null);
    $juWZw$react.useImperativeHandle(ref, ()=>$d3b530e96467ff2f$export$a5795cc979dfae80(domRef)
    );
    return domRef;
}
function $d3b530e96467ff2f$export$96a734597687c040(ref, focusableRef) {
    let domRef = $juWZw$react.useRef(null);
    $juWZw$react.useImperativeHandle(ref, ()=>$d3b530e96467ff2f$export$79d69eee6ae4b329(domRef, focusableRef)
    );
    return domRef;
}
function $d3b530e96467ff2f$export$c7e28c72a4823176(ref) {
    return {
        get current () {
            return ref.current && ref.current.UNSAFE_getDOMNode();
        }
    };
}
function $d3b530e96467ff2f$export$1d5cc31d9d8df817(ref) {
    return $juWZw$react.useMemo(()=>$d3b530e96467ff2f$export$c7e28c72a4823176(ref)
    , [
        ref
    ]);
}


var $3223e346e4a472d3$exports = {};

$parcel$export($3223e346e4a472d3$exports, "baseStyleProps", () => $3223e346e4a472d3$export$fe9c6e915565b4e8);
$parcel$export($3223e346e4a472d3$exports, "dimensionValue", () => $3223e346e4a472d3$export$abc24f5b99744ea6);
$parcel$export($3223e346e4a472d3$exports, "passthroughStyle", () => $3223e346e4a472d3$export$46b6c81d11d2c30a);
$parcel$export($3223e346e4a472d3$exports, "viewStyleProps", () => $3223e346e4a472d3$export$e0705d1a55f297c);
$parcel$export($3223e346e4a472d3$exports, "responsiveDimensionValue", () => $3223e346e4a472d3$export$f348bec194f2e6b5);
$parcel$export($3223e346e4a472d3$exports, "getResponsiveProp", () => $3223e346e4a472d3$export$52dbfdbe1b2c3541);
$parcel$export($3223e346e4a472d3$exports, "convertStyleProps", () => $3223e346e4a472d3$export$f3c39bb9534218d0);
$parcel$export($3223e346e4a472d3$exports, "useStyleProps", () => $3223e346e4a472d3$export$b8e6fb9d2dff3f41);
var $1821a10729468c0e$exports = {};

$parcel$export($1821a10729468c0e$exports, "BreakpointProvider", () => $1821a10729468c0e$export$8214320346cf5104);
$parcel$export($1821a10729468c0e$exports, "useMatchedBreakpoints", () => $1821a10729468c0e$export$140ae7baa51cca23);
$parcel$export($1821a10729468c0e$exports, "useBreakpoint", () => $1821a10729468c0e$export$199d6754bdf4e1e3);


const $1821a10729468c0e$var$Context = /*#__PURE__*/ ($parcel$interopDefault($juWZw$react)).createContext(null);
$1821a10729468c0e$var$Context.displayName = 'BreakpointContext';
function $1821a10729468c0e$export$8214320346cf5104(props) {
    let { children: children , matchedBreakpoints: matchedBreakpoints  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($juWZw$react)).createElement($1821a10729468c0e$var$Context.Provider, {
        value: {
            matchedBreakpoints: matchedBreakpoints
        }
    }, children));
}
function $1821a10729468c0e$export$140ae7baa51cca23(breakpoints) {
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
    let [breakpoint1, setBreakpoint] = $juWZw$react.useState(()=>supportsMatchMedia ? getBreakpointHandler() : [
            'base'
        ]
    );
    $juWZw$react.useEffect(()=>{
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
    let isSSR = $juWZw$reactariassr.useIsSSR();
    return isSSR ? [
        'base'
    ] : breakpoint1;
}
function $1821a10729468c0e$export$199d6754bdf4e1e3() {
    return $juWZw$react.useContext($1821a10729468c0e$var$Context);
}



const $3223e346e4a472d3$export$fe9c6e915565b4e8 = {
    margin: [
        'margin',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    marginStart: [
        $3223e346e4a472d3$var$rtl('marginLeft', 'marginRight'),
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    marginEnd: [
        $3223e346e4a472d3$var$rtl('marginRight', 'marginLeft'),
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    // marginLeft: ['marginLeft', dimensionValue],
    // marginRight: ['marginRight', dimensionValue],
    marginTop: [
        'marginTop',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    marginBottom: [
        'marginBottom',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    marginX: [
        [
            'marginLeft',
            'marginRight'
        ],
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    marginY: [
        [
            'marginTop',
            'marginBottom'
        ],
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    width: [
        'width',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    height: [
        'height',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    minWidth: [
        'minWidth',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    minHeight: [
        'minHeight',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    maxWidth: [
        'maxWidth',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    maxHeight: [
        'maxHeight',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    isHidden: [
        'display',
        $3223e346e4a472d3$var$hiddenValue
    ],
    alignSelf: [
        'alignSelf',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    justifySelf: [
        'justifySelf',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    position: [
        'position',
        $3223e346e4a472d3$var$anyValue
    ],
    zIndex: [
        'zIndex',
        $3223e346e4a472d3$var$anyValue
    ],
    top: [
        'top',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    bottom: [
        'bottom',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    start: [
        $3223e346e4a472d3$var$rtl('left', 'right'),
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    end: [
        $3223e346e4a472d3$var$rtl('right', 'left'),
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    left: [
        'left',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    right: [
        'right',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    order: [
        'order',
        $3223e346e4a472d3$var$anyValue
    ],
    flex: [
        'flex',
        $3223e346e4a472d3$var$flexValue
    ],
    flexGrow: [
        'flexGrow',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    flexShrink: [
        'flexShrink',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    flexBasis: [
        'flexBasis',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    gridArea: [
        'gridArea',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    gridColumn: [
        'gridColumn',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    gridColumnEnd: [
        'gridColumnEnd',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    gridColumnStart: [
        'gridColumnStart',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    gridRow: [
        'gridRow',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    gridRowEnd: [
        'gridRowEnd',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ],
    gridRowStart: [
        'gridRowStart',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ]
};
const $3223e346e4a472d3$export$e0705d1a55f297c = {
    ...$3223e346e4a472d3$export$fe9c6e915565b4e8,
    backgroundColor: [
        'backgroundColor',
        $3223e346e4a472d3$var$backgroundColorValue
    ],
    borderWidth: [
        'borderWidth',
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderStartWidth: [
        $3223e346e4a472d3$var$rtl('borderLeftWidth', 'borderRightWidth'),
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderEndWidth: [
        $3223e346e4a472d3$var$rtl('borderRightWidth', 'borderLeftWidth'),
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderLeftWidth: [
        'borderLeftWidth',
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderRightWidth: [
        'borderRightWidth',
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderTopWidth: [
        'borderTopWidth',
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderBottomWidth: [
        'borderBottomWidth',
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderXWidth: [
        [
            'borderLeftWidth',
            'borderRightWidth'
        ],
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderYWidth: [
        [
            'borderTopWidth',
            'borderBottomWidth'
        ],
        $3223e346e4a472d3$var$borderSizeValue
    ],
    borderColor: [
        'borderColor',
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderStartColor: [
        $3223e346e4a472d3$var$rtl('borderLeftColor', 'borderRightColor'),
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderEndColor: [
        $3223e346e4a472d3$var$rtl('borderRightColor', 'borderLeftColor'),
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderLeftColor: [
        'borderLeftColor',
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderRightColor: [
        'borderRightColor',
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderTopColor: [
        'borderTopColor',
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderBottomColor: [
        'borderBottomColor',
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderXColor: [
        [
            'borderLeftColor',
            'borderRightColor'
        ],
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderYColor: [
        [
            'borderTopColor',
            'borderBottomColor'
        ],
        $3223e346e4a472d3$var$borderColorValue
    ],
    borderRadius: [
        'borderRadius',
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderTopStartRadius: [
        $3223e346e4a472d3$var$rtl('borderTopLeftRadius', 'borderTopRightRadius'),
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderTopEndRadius: [
        $3223e346e4a472d3$var$rtl('borderTopRightRadius', 'borderTopLeftRadius'),
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderBottomStartRadius: [
        $3223e346e4a472d3$var$rtl('borderBottomLeftRadius', 'borderBottomRightRadius'),
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderBottomEndRadius: [
        $3223e346e4a472d3$var$rtl('borderBottomRightRadius', 'borderBottomLeftRadius'),
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderTopLeftRadius: [
        'borderTopLeftRadius',
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderTopRightRadius: [
        'borderTopRightRadius',
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderBottomLeftRadius: [
        'borderBottomLeftRadius',
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    borderBottomRightRadius: [
        'borderBottomRightRadius',
        $3223e346e4a472d3$var$borderRadiusValue
    ],
    padding: [
        'padding',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingStart: [
        $3223e346e4a472d3$var$rtl('paddingLeft', 'paddingRight'),
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingEnd: [
        $3223e346e4a472d3$var$rtl('paddingRight', 'paddingLeft'),
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingLeft: [
        'paddingLeft',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingRight: [
        'paddingRight',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingTop: [
        'paddingTop',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingBottom: [
        'paddingBottom',
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingX: [
        [
            'paddingLeft',
            'paddingRight'
        ],
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    paddingY: [
        [
            'paddingTop',
            'paddingBottom'
        ],
        $3223e346e4a472d3$export$abc24f5b99744ea6
    ],
    overflow: [
        'overflow',
        $3223e346e4a472d3$export$46b6c81d11d2c30a
    ]
};
const $3223e346e4a472d3$var$borderStyleProps = {
    borderWidth: 'borderStyle',
    borderLeftWidth: 'borderLeftStyle',
    borderRightWidth: 'borderRightStyle',
    borderTopWidth: 'borderTopStyle',
    borderBottomWidth: 'borderBottomStyle'
};
function $3223e346e4a472d3$var$rtl(ltr, rtl) {
    return (direction)=>direction === 'rtl' ? rtl : ltr
    ;
}
const $3223e346e4a472d3$var$UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/;
const $3223e346e4a472d3$var$FUNC_RE = /^\s*\w+\(/;
const $3223e346e4a472d3$var$SPECTRUM_VARIABLE_RE = /(static-)?size-\d+|single-line-(height|width)/g;
function $3223e346e4a472d3$export$abc24f5b99744ea6(value) {
    if (typeof value === 'number') return value + 'px';
    if ($3223e346e4a472d3$var$UNIT_RE.test(value)) return value;
    if ($3223e346e4a472d3$var$FUNC_RE.test(value)) return value.replace($3223e346e4a472d3$var$SPECTRUM_VARIABLE_RE, 'var(--spectrum-global-dimension-$&, var(--spectrum-alias-$&))');
    return `var(--spectrum-global-dimension-${value}, var(--spectrum-alias-${value}))`;
}
function $3223e346e4a472d3$export$f348bec194f2e6b5(value, matchedBreakpoints) {
    value = $3223e346e4a472d3$export$52dbfdbe1b2c3541(value, matchedBreakpoints);
    return $3223e346e4a472d3$export$abc24f5b99744ea6(value);
}
function $3223e346e4a472d3$var$colorValue(value, type = 'default') {
    return `var(--spectrum-global-color-${value}, var(--spectrum-semantic-${value}-color-${type}))`;
}
function $3223e346e4a472d3$var$backgroundColorValue(value) {
    return `var(--spectrum-alias-background-color-${value}, ${$3223e346e4a472d3$var$colorValue(value, 'background')})`;
}
function $3223e346e4a472d3$var$borderColorValue(value) {
    if (value === 'default') return 'var(--spectrum-alias-border-color)';
    return `var(--spectrum-alias-border-color-${value}, ${$3223e346e4a472d3$var$colorValue(value, 'border')})`;
}
function $3223e346e4a472d3$var$borderSizeValue(value) {
    return `var(--spectrum-alias-border-size-${value})`;
}
function $3223e346e4a472d3$var$borderRadiusValue(value) {
    return `var(--spectrum-alias-border-radius-${value})`;
}
function $3223e346e4a472d3$var$hiddenValue(value) {
    return value ? 'none' : undefined;
}
function $3223e346e4a472d3$var$anyValue(value) {
    return value;
}
function $3223e346e4a472d3$var$flexValue(value) {
    if (typeof value === 'boolean') return value ? '1' : undefined;
    return '' + value;
}
function $3223e346e4a472d3$export$f3c39bb9534218d0(props, handlers, direction, matchedBreakpoints) {
    let style = {
    };
    for(let key in props){
        let styleProp = handlers[key];
        if (!styleProp || props[key] == null) continue;
        let [name, convert] = styleProp;
        if (typeof name === 'function') name = name(direction);
        let prop = $3223e346e4a472d3$export$52dbfdbe1b2c3541(props[key], matchedBreakpoints);
        let value = convert(prop);
        if (Array.isArray(name)) for (let k of name)style[k] = value;
        else style[name] = value;
    }
    for(let prop in $3223e346e4a472d3$var$borderStyleProps)if (style[prop]) {
        style[$3223e346e4a472d3$var$borderStyleProps[prop]] = 'solid';
        style.boxSizing = 'border-box';
    }
    return style;
}
function $3223e346e4a472d3$export$b8e6fb9d2dff3f41(props, handlers = $3223e346e4a472d3$export$fe9c6e915565b4e8, options = {
}) {
    let { UNSAFE_className: UNSAFE_className , UNSAFE_style: UNSAFE_style , ...otherProps } = props;
    let breakpointProvider = $1821a10729468c0e$export$199d6754bdf4e1e3();
    let { direction: direction  } = $juWZw$reactariai18n.useLocale();
    let { matchedBreakpoints: matchedBreakpoints = breakpointProvider?.matchedBreakpoints || [
        'base'
    ]  } = options;
    let styles = $3223e346e4a472d3$export$f3c39bb9534218d0(props, handlers, direction, matchedBreakpoints);
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
    if ($3223e346e4a472d3$export$52dbfdbe1b2c3541(props.isHidden, matchedBreakpoints)) styleProps.hidden = true;
    return {
        styleProps: styleProps
    };
}
function $3223e346e4a472d3$export$46b6c81d11d2c30a(value) {
    return value;
}
function $3223e346e4a472d3$export$52dbfdbe1b2c3541(prop, matchedBreakpoints) {
    if (prop && typeof prop === 'object' && !Array.isArray(prop)) {
        for(let i = 0; i < matchedBreakpoints.length; i++){
            let breakpoint = matchedBreakpoints[i];
            if (prop[breakpoint] != null) return prop[breakpoint];
        }
        return prop.base;
    }
    return prop;
}


var $34f1d0c3d9364b06$exports = {};

$parcel$export($34f1d0c3d9364b06$exports, "useSlotProps", () => $34f1d0c3d9364b06$export$1e5c9e6e4e15efe3);
$parcel$export($34f1d0c3d9364b06$exports, "cssModuleToSlots", () => $34f1d0c3d9364b06$export$365cf34cda9978e2);
$parcel$export($34f1d0c3d9364b06$exports, "SlotProvider", () => $34f1d0c3d9364b06$export$8107b24b91795686);
$parcel$export($34f1d0c3d9364b06$exports, "ClearSlots", () => $34f1d0c3d9364b06$export$ceb145244332b7a2);


let $34f1d0c3d9364b06$var$SlotContext = /*#__PURE__*/ ($parcel$interopDefault($juWZw$react)).createContext(null);
function $34f1d0c3d9364b06$export$1e5c9e6e4e15efe3(props, defaultSlot) {
    let slot = props.slot || defaultSlot;
    let { [slot]: slotProps = {
    }  } = $juWZw$react.useContext($34f1d0c3d9364b06$var$SlotContext) || {
    };
    return $juWZw$reactariautils.mergeProps(props, $juWZw$reactariautils.mergeProps(slotProps, {
        id: props.id
    }));
}
function $34f1d0c3d9364b06$export$365cf34cda9978e2(cssModule) {
    return Object.keys(cssModule).reduce((acc, slot)=>{
        acc[slot] = {
            UNSAFE_className: cssModule[slot]
        };
        return acc;
    }, {
    });
}
function $34f1d0c3d9364b06$export$8107b24b91795686(props) {
    let parentSlots = $juWZw$react.useContext($34f1d0c3d9364b06$var$SlotContext) || {
    };
    let { slots: slots = {
    } , children: children  } = props;
    // Merge props for each slot from parent context and props
    let value = $juWZw$react.useMemo(()=>Object.keys(parentSlots).concat(Object.keys(slots)).reduce((o, p)=>({
                ...o,
                [p]: $juWZw$reactariautils.mergeProps(parentSlots[p] || {
                }, slots[p] || {
                })
            })
        , {
        })
    , [
        parentSlots,
        slots
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($juWZw$react)).createElement($34f1d0c3d9364b06$var$SlotContext.Provider, {
        value: value
    }, children));
}
function $34f1d0c3d9364b06$export$ceb145244332b7a2(props) {
    let { children: children , ...otherProps } = props;
    let content = children;
    if (($parcel$interopDefault($juWZw$react)).Children.toArray(children).length <= 1) {
        if (typeof children === 'function') content = /*#__PURE__*/ ($parcel$interopDefault($juWZw$react)).cloneElement(($parcel$interopDefault($juWZw$react)).Children.only(children), otherProps);
    }
    return(/*#__PURE__*/ ($parcel$interopDefault($juWZw$react)).createElement($34f1d0c3d9364b06$var$SlotContext.Provider, {
        value: {
        }
    }, content));
}


var $2621ac800d8fc0cf$exports = {};

$parcel$export($2621ac800d8fc0cf$exports, "useHasChild", () => $2621ac800d8fc0cf$export$e52e2242b6d0f1d4);


function $2621ac800d8fc0cf$export$e52e2242b6d0f1d4(query, ref) {
    let [hasChild, setHasChild] = $juWZw$react.useState(true);
    $juWZw$reactariautils.useLayoutEffect(()=>{
        setHasChild(!!(ref.current && ref.current.querySelector(query)));
    }, [
        setHasChild,
        query,
        ref
    ]);
    return hasChild;
}


var $49759230dc1e28b7$exports = {};

$parcel$export($49759230dc1e28b7$exports, "useResizeObserver", () => $49759230dc1e28b7$re_export$useResizeObserver);



var $d44cc3ee5a58023c$exports = {};

$parcel$export($d44cc3ee5a58023c$exports, "useIsMobileDevice", () => $d44cc3ee5a58023c$export$736bf165441b18c7);

const $d44cc3ee5a58023c$var$MOBILE_SCREEN_WIDTH = 700;
function $d44cc3ee5a58023c$export$736bf165441b18c7() {
    let isSSR = $juWZw$reactariassr.useIsSSR();
    if (isSSR || typeof window === 'undefined') return false;
    return window.screen.width <= $d44cc3ee5a58023c$var$MOBILE_SCREEN_WIDTH;
}


var $09efc5a4bdaa5119$exports = {};

$parcel$export($09efc5a4bdaa5119$exports, "useValueEffect", () => $09efc5a4bdaa5119$re_export$useValueEffect);




$parcel$exportWildcard(module.exports, $378fc89cc102a298$exports);
$parcel$exportWildcard(module.exports, $fbe4b66b4adca899$exports);
$parcel$exportWildcard(module.exports, $1876fcc4f0127e7e$exports);
$parcel$exportWildcard(module.exports, $d3b530e96467ff2f$exports);
$parcel$exportWildcard(module.exports, $3223e346e4a472d3$exports);
$parcel$exportWildcard(module.exports, $34f1d0c3d9364b06$exports);
$parcel$exportWildcard(module.exports, $2621ac800d8fc0cf$exports);
$parcel$exportWildcard(module.exports, $49759230dc1e28b7$exports);
$parcel$exportWildcard(module.exports, $d44cc3ee5a58023c$exports);
$parcel$exportWildcard(module.exports, $09efc5a4bdaa5119$exports);
$parcel$exportWildcard(module.exports, $1821a10729468c0e$exports);


//# sourceMappingURL=main.js.map
