require("./main.css");
var $2NmhC$reactspectrumutils = require("@react-spectrum/utils");
var $2NmhC$clsx = require("clsx");
var $2NmhC$reactariautils = require("@react-aria/utils");
var $2NmhC$reactariai18n = require("@react-aria/i18n");
var $2NmhC$reactariaoverlays = require("@react-aria/overlays");
var $2NmhC$react = require("react");

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
var $5cde3205b175dbab$exports = {};

$parcel$export($5cde3205b175dbab$exports, "useProvider", () => $5cde3205b175dbab$export$693cdb10cec23617);
$parcel$export($5cde3205b175dbab$exports, "Provider", () => $5cde3205b175dbab$export$2881499e37b75b9a);
$parcel$export($5cde3205b175dbab$exports, "useProviderProps", () => $5cde3205b175dbab$export$521c373ccc32c300);






var $42b2dd52f8612d6f$exports = {};

$parcel$export($42b2dd52f8612d6f$exports, "spectrum", () => $42b2dd52f8612d6f$export$3311ab3a441bc141, (v) => $42b2dd52f8612d6f$export$3311ab3a441bc141 = v);
var $42b2dd52f8612d6f$export$3311ab3a441bc141;
$42b2dd52f8612d6f$export$3311ab3a441bc141 = "_spectrum_b37d53";


var $97a15cad98500c4c$exports = {};

$parcel$export($97a15cad98500c4c$exports, "spectrum", () => $97a15cad98500c4c$export$3311ab3a441bc141, (v) => $97a15cad98500c4c$export$3311ab3a441bc141 = v);
$parcel$export($97a15cad98500c4c$exports, "spectrum-Body", () => $97a15cad98500c4c$export$a30bf7810c8453d1, (v) => $97a15cad98500c4c$export$a30bf7810c8453d1 = v);
$parcel$export($97a15cad98500c4c$exports, "spectrum-Body--italic", () => $97a15cad98500c4c$export$7b2dac1166f6ec4c, (v) => $97a15cad98500c4c$export$7b2dac1166f6ec4c = v);
var $97a15cad98500c4c$export$3311ab3a441bc141;
var $97a15cad98500c4c$export$a30bf7810c8453d1;
var $97a15cad98500c4c$export$7b2dac1166f6ec4c;
$97a15cad98500c4c$export$3311ab3a441bc141 = "_spectrum_2a241c";
$97a15cad98500c4c$export$a30bf7810c8453d1 = "_spectrum-Body_2a241c";
$97a15cad98500c4c$export$7b2dac1166f6ec4c = "_spectrum-Body--italic_2a241c";



function $3966dc1efb3f0caf$export$6343629ee1b29116(theme, defaultColorScheme) {
    let matchesDark = $2NmhC$reactspectrumutils.useMediaQuery('(prefers-color-scheme: dark)');
    let matchesLight = $2NmhC$reactspectrumutils.useMediaQuery('(prefers-color-scheme: light)');
    // importance OS > default > omitted
    if (theme.dark && matchesDark) return 'dark';
    if (theme.light && matchesLight) return 'light';
    if (theme.dark && defaultColorScheme === 'dark') return 'dark';
    if (theme.light && defaultColorScheme === 'light') return 'light';
    if (!theme.dark) return 'light';
    if (!theme.light) return 'dark';
    return 'light';
}
function $3966dc1efb3f0caf$export$a8d2043b2d807f4d(theme) {
    let matchesFine = $2NmhC$reactspectrumutils.useMediaQuery('(any-pointer: fine)');
    if (matchesFine && theme.medium) return 'medium';
    if (theme.large) return 'large';
    return 'medium';
}


var $8cbe581d15d2be01$exports = {};
$8cbe581d15d2be01$exports = JSON.parse("{\"name\":\"@react-spectrum/provider\",\"version\":\"3.2.2\",\"description\":\"Spectrum UI components in React\",\"license\":\"Apache-2.0\",\"main\":\"dist/main.js\",\"module\":\"dist/module.js\",\"types\":\"dist/types.d.ts\",\"source\":\"src/index.ts\",\"files\":[\"dist\",\"src\"],\"sideEffects\":[\"*.css\"],\"targets\":{\"main\":{\"includeNodeModules\":[\"@adobe/spectrum-css-temp\"]},\"module\":{\"includeNodeModules\":[\"@adobe/spectrum-css-temp\"]}},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/adobe/react-spectrum\"},\"dependencies\":{\"@babel/runtime\":\"^7.6.2\",\"@react-aria/i18n\":\"^3.3.2\",\"@react-aria/overlays\":\"^3.7.2\",\"@react-aria/utils\":\"^3.8.2\",\"@react-spectrum/utils\":\"^3.6.2\",\"@react-types/provider\":\"^3.3.2\",\"@react-types/shared\":\"^3.8.0\",\"clsx\":\"^1.1.1\"},\"devDependencies\":{\"@adobe/spectrum-css-temp\":\"3.0.0-alpha.1\"},\"peerDependencies\":{\"react\":\"^16.8.0 || ^17.0.0-rc.1\",\"react-dom\":\"^16.8.0 || ^17.0.0-rc.1\"},\"publishConfig\":{\"access\":\"public\"}}");


const $5cde3205b175dbab$var$Context = /*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).createContext(null);
$5cde3205b175dbab$var$Context.displayName = 'ProviderContext';
const $5cde3205b175dbab$var$DEFAULT_BREAKPOINTS = {
    S: 640,
    M: 768,
    L: 1024,
    XL: 1280,
    XXL: 1536
};
function $5cde3205b175dbab$var$Provider(props, ref) {
    let prevContext = $5cde3205b175dbab$export$693cdb10cec23617();
    let prevColorScheme = prevContext && prevContext.colorScheme;
    let prevBreakpoints = prevContext && prevContext.breakpoints;
    let { theme: theme = prevContext && prevContext.theme , defaultColorScheme: defaultColorScheme  } = props;
    // Hooks must always be called.
    let autoColorScheme = $3966dc1efb3f0caf$export$6343629ee1b29116(theme, defaultColorScheme);
    let autoScale = $3966dc1efb3f0caf$export$a8d2043b2d807f4d(theme);
    let { locale: prevLocale  } = $2NmhC$reactariai18n.useLocale();
    // if the new theme doesn't support the prevColorScheme, we must resort to the auto
    let usePrevColorScheme = !!theme[prevColorScheme];
    // importance of color scheme props > parent > auto:(OS > default > omitted)
    let { colorScheme: colorScheme = usePrevColorScheme ? prevColorScheme : autoColorScheme , scale: scale = prevContext ? prevContext.scale : autoScale , locale: locale = prevContext ? prevLocale : null , breakpoints: breakpoints = prevContext ? prevBreakpoints : $5cde3205b175dbab$var$DEFAULT_BREAKPOINTS , children: children , isQuiet: isQuiet , isEmphasized: isEmphasized , isDisabled: isDisabled , isRequired: isRequired , isReadOnly: isReadOnly , validationState: validationState , ...otherProps } = props;
    // select only the props with values so undefined props don't overwrite prevContext values
    let currentProps = {
        version: $8cbe581d15d2be01$exports.version,
        theme: theme,
        breakpoints: breakpoints,
        colorScheme: colorScheme,
        scale: scale,
        isQuiet: isQuiet,
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isRequired: isRequired,
        isReadOnly: isReadOnly,
        validationState: validationState
    };
    let matchedBreakpoints = $2NmhC$reactspectrumutils.useMatchedBreakpoints(breakpoints);
    let filteredProps = {
    };
    Object.entries(currentProps).forEach(([key, value])=>value !== undefined && (filteredProps[key] = value)
    );
    // Merge options with parent provider
    let context = Object.assign({
    }, prevContext, filteredProps);
    // Only wrap in a DOM node if the theme, colorScheme, or scale changed
    let contents = children;
    let domProps = $2NmhC$reactariautils.filterDOMProps(otherProps);
    let { styleProps: styleProps  } = $2NmhC$reactspectrumutils.useStyleProps(otherProps, undefined, {
        matchedBreakpoints: matchedBreakpoints
    });
    if (!prevContext || props.locale || theme !== prevContext.theme || colorScheme !== prevContext.colorScheme || scale !== prevContext.scale || Object.keys(domProps).length > 0 || otherProps.UNSAFE_className || Object.keys(styleProps.style).length > 0) contents = /*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).createElement($5cde3205b175dbab$var$ProviderWrapper, {
        ...props,
        UNSAFE_style: {
            isolation: !prevContext ? 'isolate' : undefined,
            ...styleProps.style
        },
        ref: ref
    }, contents);
    return(/*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).createElement($5cde3205b175dbab$var$Context.Provider, {
        value: context
    }, /*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).createElement($2NmhC$reactariai18n.I18nProvider, {
        locale: locale
    }, /*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).createElement($2NmhC$reactspectrumutils.BreakpointProvider, {
        matchedBreakpoints: matchedBreakpoints
    }, /*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).createElement($2NmhC$reactariaoverlays.ModalProvider, null, contents)))));
}
/**
 * Provider is the container for all React Spectrum applications.
 * It defines the theme, locale, and other application level settings,
 * and can also be used to provide common properties to a group of components.
 */ let $5cde3205b175dbab$export$2881499e37b75b9a = /*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).forwardRef($5cde3205b175dbab$var$Provider);
const $5cde3205b175dbab$var$ProviderWrapper = /*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).forwardRef(function ProviderWrapper(props, ref) {
    let { children: children , ...otherProps } = props;
    let { locale: locale , direction: direction  } = $2NmhC$reactariai18n.useLocale();
    let { theme: theme , colorScheme: colorScheme , scale: scale  } = $5cde3205b175dbab$export$693cdb10cec23617();
    let { modalProviderProps: modalProviderProps  } = $2NmhC$reactariaoverlays.useModalProvider();
    let { styleProps: styleProps  } = $2NmhC$reactspectrumutils.useStyleProps(otherProps);
    let domRef = $2NmhC$reactspectrumutils.useDOMRef(ref);
    let themeKey = Object.keys(theme[colorScheme])[0];
    let scaleKey = Object.keys(theme[scale])[0];
    let className = ($parcel$interopDefault($2NmhC$clsx))(styleProps.className, (/*@__PURE__*/$parcel$interopDefault($42b2dd52f8612d6f$exports))['spectrum'], (/*@__PURE__*/$parcel$interopDefault($97a15cad98500c4c$exports))['spectrum'], theme[colorScheme][themeKey], theme[scale][scaleKey], theme.global ? Object.values(theme.global) : null, {
        'react-spectrum-provider': $2NmhC$reactspectrumutils.shouldKeepSpectrumClassNames,
        spectrum: $2NmhC$reactspectrumutils.shouldKeepSpectrumClassNames,
        [themeKey]: $2NmhC$reactspectrumutils.shouldKeepSpectrumClassNames,
        [scaleKey]: $2NmhC$reactspectrumutils.shouldKeepSpectrumClassNames
    });
    let style = {
        ...styleProps.style,
        // This ensures that browser native UI like scrollbars are rendered in the right color scheme.
        // See https://web.dev/color-scheme/.
        colorScheme: (props.colorScheme ?? colorScheme) ?? Object.keys(theme).filter((k)=>k === 'light' || k === 'dark'
        ).join(' ')
    };
    let hasWarned = $2NmhC$react.useRef(false);
    $2NmhC$react.useEffect(()=>{
        if (direction && domRef.current) {
            let closestDir = domRef.current.parentElement.closest('[dir]');
            let dir = closestDir && closestDir.getAttribute('dir');
            if (dir && dir !== direction && !hasWarned.current) {
                console.warn(`Language directions cannot be nested. ${direction} inside ${dir}.`);
                hasWarned.current = true;
            }
        }
    }, [
        direction,
        domRef,
        hasWarned
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($2NmhC$react)).createElement("div", {
        ...$2NmhC$reactariautils.filterDOMProps(otherProps),
        ...styleProps,
        ...modalProviderProps,
        className: className,
        style: style,
        lang: locale,
        dir: direction,
        ref: domRef
    }, children));
});
function $5cde3205b175dbab$export$693cdb10cec23617() {
    return $2NmhC$react.useContext($5cde3205b175dbab$var$Context);
}
function $5cde3205b175dbab$export$521c373ccc32c300(props) {
    let context = $5cde3205b175dbab$export$693cdb10cec23617();
    if (!context) return props;
    return Object.assign({
    }, {
        isQuiet: context.isQuiet,
        isEmphasized: context.isEmphasized,
        isDisabled: context.isDisabled,
        isRequired: context.isRequired,
        isReadOnly: context.isReadOnly,
        validationState: context.validationState
    }, props);
}


$parcel$exportWildcard(module.exports, $5cde3205b175dbab$exports);


//# sourceMappingURL=main.js.map
