import $3SM7q$react, {useContext as $3SM7q$useContext, useState as $3SM7q$useState, useEffect as $3SM7q$useEffect, useMemo as $3SM7q$useMemo, useCallback as $3SM7q$useCallback, useRef as $3SM7q$useRef} from "react";
import {useIsSSR as $3SM7q$useIsSSR} from "@react-aria/ssr";
import {MessageDictionary as $3SM7q$MessageDictionary, MessageFormatter as $3SM7q$MessageFormatter} from "@internationalized/message";
import {DateFormatter as $3SM7q$DateFormatter} from "@internationalized/date";
import {NumberFormatter as $3SM7q$NumberFormatter} from "@internationalized/number";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $8a3024a80a5f8ca0$exports = {};

$parcel$export($8a3024a80a5f8ca0$exports, "I18nProvider", () => $8a3024a80a5f8ca0$export$a54013f0d02a8f82);
$parcel$export($8a3024a80a5f8ca0$exports, "useLocale", () => $8a3024a80a5f8ca0$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $2833922c6f7210af$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $2833922c6f7210af$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $2833922c6f7210af$export$702d680b21cbd764(locale) {
    // If the Intl.Locale API is available, use it to get the script for the locale.
    // This is more accurate than guessing by language, since languages can be written in multiple scripts.
    // @ts-ignore
    if (Intl.Locale) {
        // @ts-ignore
        let script = new Intl.Locale(locale).maximize().script;
        return $2833922c6f7210af$var$RTL_SCRIPTS.has(script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = locale.split('-')[0];
    return $2833922c6f7210af$var$RTL_LANGS.has(lang);
}





function $a335f83186f69acf$export$f09106e7c6677ec5() {
    // @ts-ignore
    let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    return {
        locale: locale,
        direction: $2833922c6f7210af$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    };
}
let $a335f83186f69acf$var$currentLocale = $a335f83186f69acf$export$f09106e7c6677ec5();
let $a335f83186f69acf$var$listeners = new Set();
function $a335f83186f69acf$var$updateLocale() {
    $a335f83186f69acf$var$currentLocale = $a335f83186f69acf$export$f09106e7c6677ec5();
    for (let listener of $a335f83186f69acf$var$listeners)listener($a335f83186f69acf$var$currentLocale);
}
function $a335f83186f69acf$export$188ec29ebc2bdc3a() {
    let isSSR = $3SM7q$useIsSSR();
    let [defaultLocale, setDefaultLocale] = $3SM7q$useState($a335f83186f69acf$var$currentLocale);
    $3SM7q$useEffect(()=>{
        if ($a335f83186f69acf$var$listeners.size === 0) window.addEventListener('languagechange', $a335f83186f69acf$var$updateLocale);
        $a335f83186f69acf$var$listeners.add(setDefaultLocale);
        return ()=>{
            $a335f83186f69acf$var$listeners.delete(setDefaultLocale);
            if ($a335f83186f69acf$var$listeners.size === 0) window.removeEventListener('languagechange', $a335f83186f69acf$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}



const $8a3024a80a5f8ca0$var$I18nContext = /*#__PURE__*/ $3SM7q$react.createContext(null);
function $8a3024a80a5f8ca0$export$a54013f0d02a8f82(props) {
    let { locale: locale , children: children  } = props;
    let defaultLocale = $a335f83186f69acf$export$188ec29ebc2bdc3a();
    let value = locale ? {
        locale: locale,
        direction: $2833922c6f7210af$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    } : defaultLocale;
    return(/*#__PURE__*/ $3SM7q$react.createElement($8a3024a80a5f8ca0$var$I18nContext.Provider, {
        value: value
    }, children));
}
function $8a3024a80a5f8ca0$export$43bb16f9c6d9e3f7() {
    let defaultLocale = $a335f83186f69acf$export$188ec29ebc2bdc3a();
    let context = $3SM7q$useContext($8a3024a80a5f8ca0$var$I18nContext);
    return context || defaultLocale;
}


var $8846e81126bc6be8$exports = {};

$parcel$export($8846e81126bc6be8$exports, "useMessageFormatter", () => $8846e81126bc6be8$export$ec23bf898b1eed85);



const $8846e81126bc6be8$var$cache = new WeakMap();
function $8846e81126bc6be8$var$getCachedDictionary(strings) {
    let dictionary = $8846e81126bc6be8$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new $3SM7q$MessageDictionary(strings);
        $8846e81126bc6be8$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $8846e81126bc6be8$export$ec23bf898b1eed85(strings) {
    let { locale: locale  } = $8a3024a80a5f8ca0$export$43bb16f9c6d9e3f7();
    let dictionary = $3SM7q$useMemo(()=>$8846e81126bc6be8$var$getCachedDictionary(strings)
    , [
        strings
    ]);
    let formatter = $3SM7q$useMemo(()=>new $3SM7q$MessageFormatter(locale, dictionary)
    , [
        locale,
        dictionary
    ]);
    return $3SM7q$useCallback((key, variables)=>formatter.format(key, variables)
    , [
        formatter
    ]);
}


var $f7ee4a00c499c6eb$exports = {};

$parcel$export($f7ee4a00c499c6eb$exports, "useDateFormatter", () => $f7ee4a00c499c6eb$export$85fd5fdf27bacc79);



function $f7ee4a00c499c6eb$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    let lastOptions = $3SM7q$useRef(null);
    if (options && lastOptions.current && $f7ee4a00c499c6eb$var$isEqual(options, lastOptions.current)) options = lastOptions.current;
    lastOptions.current = options;
    let { locale: locale  } = $8a3024a80a5f8ca0$export$43bb16f9c6d9e3f7();
    return $3SM7q$useMemo(()=>new $3SM7q$DateFormatter(locale, options)
    , [
        locale,
        options
    ]);
}
function $f7ee4a00c499c6eb$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


var $9764215977d02a3b$exports = {};

$parcel$export($9764215977d02a3b$exports, "useNumberFormatter", () => $9764215977d02a3b$export$b7a616150fdb9f44);



function $9764215977d02a3b$export$b7a616150fdb9f44(options = {
}) {
    let { locale: locale  } = $8a3024a80a5f8ca0$export$43bb16f9c6d9e3f7();
    return $3SM7q$useMemo(()=>new $3SM7q$NumberFormatter(locale, options)
    , [
        locale,
        options
    ]);
}


var $10797d91200e983f$exports = {};

$parcel$export($10797d91200e983f$exports, "useCollator", () => $10797d91200e983f$export$a16aca283550c30d);

let $10797d91200e983f$var$cache = new Map();
function $10797d91200e983f$export$a16aca283550c30d(options) {
    let { locale: locale  } = $8a3024a80a5f8ca0$export$43bb16f9c6d9e3f7();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($10797d91200e983f$var$cache.has(cacheKey)) return $10797d91200e983f$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $10797d91200e983f$var$cache.set(cacheKey, formatter);
    return formatter;
}


var $28a46ce318589100$exports = {};

$parcel$export($28a46ce318589100$exports, "useFilter", () => $28a46ce318589100$export$3274cf84b703fff);

function $28a46ce318589100$export$3274cf84b703fff(options) {
    let collator = $10797d91200e983f$export$a16aca283550c30d({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    return {
        startsWith (string, substring) {
            if (substring.length === 0) return true;
            // Normalize both strings so we can slice safely
            // TODO: take into account the ignorePunctuation option as well...
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(0, substring.length), substring) === 0;
        },
        endsWith (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(-substring.length), substring) === 0;
        },
        contains (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            let scan = 0;
            let sliceLen = substring.length;
            for(; scan + sliceLen <= string.length; scan++){
                let slice = string.slice(scan, scan + sliceLen);
                if (collator.compare(substring, slice) === 0) return true;
            }
            return false;
        }
    };
}




export {$8a3024a80a5f8ca0$export$a54013f0d02a8f82 as I18nProvider, $8a3024a80a5f8ca0$export$43bb16f9c6d9e3f7 as useLocale, $8846e81126bc6be8$export$ec23bf898b1eed85 as useMessageFormatter, $f7ee4a00c499c6eb$export$85fd5fdf27bacc79 as useDateFormatter, $9764215977d02a3b$export$b7a616150fdb9f44 as useNumberFormatter, $10797d91200e983f$export$a16aca283550c30d as useCollator, $28a46ce318589100$export$3274cf84b703fff as useFilter};
//# sourceMappingURL=module.js.map
