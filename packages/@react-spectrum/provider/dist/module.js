import "./main.css";
import {useMatchedBreakpoints as $4E7NT$useMatchedBreakpoints, useStyleProps as $4E7NT$useStyleProps, BreakpointProvider as $4E7NT$BreakpointProvider, useDOMRef as $4E7NT$useDOMRef, shouldKeepSpectrumClassNames as $4E7NT$shouldKeepSpectrumClassNames, useMediaQuery as $4E7NT$useMediaQuery} from "@react-spectrum/utils";
import $4E7NT$clsx from "clsx";
import {filterDOMProps as $4E7NT$filterDOMProps} from "@react-aria/utils";
import {useLocale as $4E7NT$useLocale, I18nProvider as $4E7NT$I18nProvider} from "@react-aria/i18n";
import {ModalProvider as $4E7NT$ModalProvider, useModalProvider as $4E7NT$useModalProvider} from "@react-aria/overlays";
import $4E7NT$react, {useRef as $4E7NT$useRef, useEffect as $4E7NT$useEffect, useContext as $4E7NT$useContext} from "react";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $1aa5b87680ffb7f1$exports = {};

$parcel$export($1aa5b87680ffb7f1$exports, "useProvider", () => $1aa5b87680ffb7f1$export$693cdb10cec23617);
$parcel$export($1aa5b87680ffb7f1$exports, "Provider", () => $1aa5b87680ffb7f1$export$2881499e37b75b9a);
$parcel$export($1aa5b87680ffb7f1$exports, "useProviderProps", () => $1aa5b87680ffb7f1$export$521c373ccc32c300);






var $b9b9f4cfa9e63391$exports = {};

$parcel$export($b9b9f4cfa9e63391$exports, "spectrum", () => $b9b9f4cfa9e63391$export$3311ab3a441bc141, (v) => $b9b9f4cfa9e63391$export$3311ab3a441bc141 = v);
var $b9b9f4cfa9e63391$export$3311ab3a441bc141;
$b9b9f4cfa9e63391$export$3311ab3a441bc141 = "_spectrum_b37d53";


var $10cf45aeadd2c3ce$exports = {};

$parcel$export($10cf45aeadd2c3ce$exports, "spectrum", () => $10cf45aeadd2c3ce$export$3311ab3a441bc141, (v) => $10cf45aeadd2c3ce$export$3311ab3a441bc141 = v);
$parcel$export($10cf45aeadd2c3ce$exports, "spectrum-Body", () => $10cf45aeadd2c3ce$export$a30bf7810c8453d1, (v) => $10cf45aeadd2c3ce$export$a30bf7810c8453d1 = v);
$parcel$export($10cf45aeadd2c3ce$exports, "spectrum-Body--italic", () => $10cf45aeadd2c3ce$export$7b2dac1166f6ec4c, (v) => $10cf45aeadd2c3ce$export$7b2dac1166f6ec4c = v);
var $10cf45aeadd2c3ce$export$3311ab3a441bc141;
var $10cf45aeadd2c3ce$export$a30bf7810c8453d1;
var $10cf45aeadd2c3ce$export$7b2dac1166f6ec4c;
$10cf45aeadd2c3ce$export$3311ab3a441bc141 = "_spectrum_2a241c";
$10cf45aeadd2c3ce$export$a30bf7810c8453d1 = "_spectrum-Body_2a241c";
$10cf45aeadd2c3ce$export$7b2dac1166f6ec4c = "_spectrum-Body--italic_2a241c";



function $e65f161070fb9aca$export$6343629ee1b29116(theme, defaultColorScheme) {
    let matchesDark = $4E7NT$useMediaQuery('(prefers-color-scheme: dark)');
    let matchesLight = $4E7NT$useMediaQuery('(prefers-color-scheme: light)');
    // importance OS > default > omitted
    if (theme.dark && matchesDark) return 'dark';
    if (theme.light && matchesLight) return 'light';
    if (theme.dark && defaultColorScheme === 'dark') return 'dark';
    if (theme.light && defaultColorScheme === 'light') return 'light';
    if (!theme.dark) return 'light';
    if (!theme.light) return 'dark';
    return 'light';
}
function $e65f161070fb9aca$export$a8d2043b2d807f4d(theme) {
    let matchesFine = $4E7NT$useMediaQuery('(any-pointer: fine)');
    if (matchesFine && theme.medium) return 'medium';
    if (theme.large) return 'large';
    return 'medium';
}


var $b2286c78d321caca$exports = {};
$b2286c78d321caca$exports = JSON.parse("{\"name\":\"@react-spectrum/provider\",\"version\":\"3.2.2\",\"description\":\"Spectrum UI components in React\",\"license\":\"Apache-2.0\",\"main\":\"dist/main.js\",\"module\":\"dist/module.js\",\"types\":\"dist/types.d.ts\",\"source\":\"src/index.ts\",\"files\":[\"dist\",\"src\"],\"sideEffects\":[\"*.css\"],\"targets\":{\"main\":{\"includeNodeModules\":[\"@adobe/spectrum-css-temp\"]},\"module\":{\"includeNodeModules\":[\"@adobe/spectrum-css-temp\"]}},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/adobe/react-spectrum\"},\"dependencies\":{\"@babel/runtime\":\"^7.6.2\",\"@react-aria/i18n\":\"^3.3.2\",\"@react-aria/overlays\":\"^3.7.2\",\"@react-aria/utils\":\"^3.8.2\",\"@react-spectrum/utils\":\"^3.6.2\",\"@react-types/provider\":\"^3.3.2\",\"@react-types/shared\":\"^3.8.0\",\"clsx\":\"^1.1.1\"},\"devDependencies\":{\"@adobe/spectrum-css-temp\":\"3.0.0-alpha.1\"},\"peerDependencies\":{\"react\":\"^16.8.0 || ^17.0.0-rc.1\",\"react-dom\":\"^16.8.0 || ^17.0.0-rc.1\"},\"publishConfig\":{\"access\":\"public\"}}");


const $1aa5b87680ffb7f1$var$Context = /*#__PURE__*/ $4E7NT$react.createContext(null);
$1aa5b87680ffb7f1$var$Context.displayName = 'ProviderContext';
const $1aa5b87680ffb7f1$var$DEFAULT_BREAKPOINTS = {
    S: 640,
    M: 768,
    L: 1024,
    XL: 1280,
    XXL: 1536
};
function $1aa5b87680ffb7f1$var$Provider(props, ref) {
    let prevContext = $1aa5b87680ffb7f1$export$693cdb10cec23617();
    let prevColorScheme = prevContext && prevContext.colorScheme;
    let prevBreakpoints = prevContext && prevContext.breakpoints;
    let { theme: theme = prevContext && prevContext.theme , defaultColorScheme: defaultColorScheme  } = props;
    // Hooks must always be called.
    let autoColorScheme = $e65f161070fb9aca$export$6343629ee1b29116(theme, defaultColorScheme);
    let autoScale = $e65f161070fb9aca$export$a8d2043b2d807f4d(theme);
    let { locale: prevLocale  } = $4E7NT$useLocale();
    // if the new theme doesn't support the prevColorScheme, we must resort to the auto
    let usePrevColorScheme = !!theme[prevColorScheme];
    // importance of color scheme props > parent > auto:(OS > default > omitted)
    let { colorScheme: colorScheme = usePrevColorScheme ? prevColorScheme : autoColorScheme , scale: scale = prevContext ? prevContext.scale : autoScale , locale: locale = prevContext ? prevLocale : null , breakpoints: breakpoints = prevContext ? prevBreakpoints : $1aa5b87680ffb7f1$var$DEFAULT_BREAKPOINTS , children: children , isQuiet: isQuiet , isEmphasized: isEmphasized , isDisabled: isDisabled , isRequired: isRequired , isReadOnly: isReadOnly , validationState: validationState , ...otherProps } = props;
    // select only the props with values so undefined props don't overwrite prevContext values
    let currentProps = {
        version: $b2286c78d321caca$exports.version,
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
    let matchedBreakpoints = $4E7NT$useMatchedBreakpoints(breakpoints);
    let filteredProps = {
    };
    Object.entries(currentProps).forEach(([key, value])=>value !== undefined && (filteredProps[key] = value)
    );
    // Merge options with parent provider
    let context = Object.assign({
    }, prevContext, filteredProps);
    // Only wrap in a DOM node if the theme, colorScheme, or scale changed
    let contents = children;
    let domProps = $4E7NT$filterDOMProps(otherProps);
    let { styleProps: styleProps  } = $4E7NT$useStyleProps(otherProps, undefined, {
        matchedBreakpoints: matchedBreakpoints
    });
    if (!prevContext || props.locale || theme !== prevContext.theme || colorScheme !== prevContext.colorScheme || scale !== prevContext.scale || Object.keys(domProps).length > 0 || otherProps.UNSAFE_className || Object.keys(styleProps.style).length > 0) contents = /*#__PURE__*/ $4E7NT$react.createElement($1aa5b87680ffb7f1$var$ProviderWrapper, {
        ...props,
        UNSAFE_style: {
            isolation: !prevContext ? 'isolate' : undefined,
            ...styleProps.style
        },
        ref: ref
    }, contents);
    return(/*#__PURE__*/ $4E7NT$react.createElement($1aa5b87680ffb7f1$var$Context.Provider, {
        value: context
    }, /*#__PURE__*/ $4E7NT$react.createElement($4E7NT$I18nProvider, {
        locale: locale
    }, /*#__PURE__*/ $4E7NT$react.createElement($4E7NT$BreakpointProvider, {
        matchedBreakpoints: matchedBreakpoints
    }, /*#__PURE__*/ $4E7NT$react.createElement($4E7NT$ModalProvider, null, contents)))));
}
/**
 * Provider is the container for all React Spectrum applications.
 * It defines the theme, locale, and other application level settings,
 * and can also be used to provide common properties to a group of components.
 */ let $1aa5b87680ffb7f1$export$2881499e37b75b9a = /*#__PURE__*/ $4E7NT$react.forwardRef($1aa5b87680ffb7f1$var$Provider);
const $1aa5b87680ffb7f1$var$ProviderWrapper = /*#__PURE__*/ $4E7NT$react.forwardRef(function ProviderWrapper(props, ref) {
    let { children: children , ...otherProps } = props;
    let { locale: locale , direction: direction  } = $4E7NT$useLocale();
    let { theme: theme , colorScheme: colorScheme , scale: scale  } = $1aa5b87680ffb7f1$export$693cdb10cec23617();
    let { modalProviderProps: modalProviderProps  } = $4E7NT$useModalProvider();
    let { styleProps: styleProps  } = $4E7NT$useStyleProps(otherProps);
    let domRef = $4E7NT$useDOMRef(ref);
    let themeKey = Object.keys(theme[colorScheme])[0];
    let scaleKey = Object.keys(theme[scale])[0];
    let className = $4E7NT$clsx(styleProps.className, (/*@__PURE__*/$parcel$interopDefault($b9b9f4cfa9e63391$exports))['spectrum'], (/*@__PURE__*/$parcel$interopDefault($10cf45aeadd2c3ce$exports))['spectrum'], theme[colorScheme][themeKey], theme[scale][scaleKey], theme.global ? Object.values(theme.global) : null, {
        'react-spectrum-provider': $4E7NT$shouldKeepSpectrumClassNames,
        spectrum: $4E7NT$shouldKeepSpectrumClassNames,
        [themeKey]: $4E7NT$shouldKeepSpectrumClassNames,
        [scaleKey]: $4E7NT$shouldKeepSpectrumClassNames
    });
    let style = {
        ...styleProps.style,
        // This ensures that browser native UI like scrollbars are rendered in the right color scheme.
        // See https://web.dev/color-scheme/.
        colorScheme: (props.colorScheme ?? colorScheme) ?? Object.keys(theme).filter((k)=>k === 'light' || k === 'dark'
        ).join(' ')
    };
    let hasWarned = $4E7NT$useRef(false);
    $4E7NT$useEffect(()=>{
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
    return(/*#__PURE__*/ $4E7NT$react.createElement("div", {
        ...$4E7NT$filterDOMProps(otherProps),
        ...styleProps,
        ...modalProviderProps,
        className: className,
        style: style,
        lang: locale,
        dir: direction,
        ref: domRef
    }, children));
});
function $1aa5b87680ffb7f1$export$693cdb10cec23617() {
    return $4E7NT$useContext($1aa5b87680ffb7f1$var$Context);
}
function $1aa5b87680ffb7f1$export$521c373ccc32c300(props) {
    let context = $1aa5b87680ffb7f1$export$693cdb10cec23617();
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




export {$1aa5b87680ffb7f1$export$693cdb10cec23617 as useProvider, $1aa5b87680ffb7f1$export$2881499e37b75b9a as Provider, $1aa5b87680ffb7f1$export$521c373ccc32c300 as useProviderProps};
//# sourceMappingURL=module.js.map
