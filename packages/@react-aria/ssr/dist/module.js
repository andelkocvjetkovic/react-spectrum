import $emqhM$react, {useContext as $emqhM$useContext, useMemo as $emqhM$useMemo, useState as $emqhM$useState} from "react";
import {useLayoutEffect as $emqhM$useLayoutEffect} from "@react-aria/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $255230677dccb73b$exports = {};

$parcel$export($255230677dccb73b$exports, "SSRProvider", () => $255230677dccb73b$export$9f8ac96af4b1b2ae);
$parcel$export($255230677dccb73b$exports, "useSSRSafeId", () => $255230677dccb73b$export$619500959fc48b26);
$parcel$export($255230677dccb73b$exports, "useIsSSR", () => $255230677dccb73b$export$535bd6ca7f90a273);


// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $255230677dccb73b$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $255230677dccb73b$var$SSRContext = /*#__PURE__*/ $emqhM$react.createContext($255230677dccb73b$var$defaultContext);
function $255230677dccb73b$export$9f8ac96af4b1b2ae(props) {
    let cur = $emqhM$useContext($255230677dccb73b$var$SSRContext);
    let value = $emqhM$useMemo(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $255230677dccb73b$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
            current: 0
        })
    , [
        cur
    ]);
    return(/*#__PURE__*/ $emqhM$react.createElement($255230677dccb73b$var$SSRContext.Provider, {
        value: value
    }, props.children));
}
let $255230677dccb73b$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
function $255230677dccb73b$export$619500959fc48b26(defaultId) {
    let ctx = $emqhM$useContext($255230677dccb73b$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $255230677dccb73b$var$defaultContext && !$255230677dccb73b$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    return $emqhM$useMemo(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`
    , [
        defaultId
    ]);
}
function $255230677dccb73b$export$535bd6ca7f90a273() {
    let cur = $emqhM$useContext($255230677dccb73b$var$SSRContext);
    let isInSSRContext = cur !== $255230677dccb73b$var$defaultContext;
    let [isSSR, setIsSSR] = $emqhM$useState(isInSSRContext);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $emqhM$useLayoutEffect(()=>{
        setIsSSR(false);
    }, []);
    return isSSR;
}




export {$255230677dccb73b$export$9f8ac96af4b1b2ae as SSRProvider, $255230677dccb73b$export$619500959fc48b26 as useSSRSafeId, $255230677dccb73b$export$535bd6ca7f90a273 as useIsSSR};
//# sourceMappingURL=module.js.map
