var $9HkwT$react = require("react");
var $9HkwT$reactariassr = require("@react-aria/ssr");
var $9HkwT$internationalizedmessage = require("@internationalized/message");
var $9HkwT$internationalizeddate = require("@internationalized/date");
var $9HkwT$internationalizednumber = require("@internationalized/number");

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
var $d8d315b8fdca59e5$exports = {};

$parcel$export($d8d315b8fdca59e5$exports, "I18nProvider", () => $d8d315b8fdca59e5$export$a54013f0d02a8f82);
$parcel$export($d8d315b8fdca59e5$exports, "useLocale", () => $d8d315b8fdca59e5$export$43bb16f9c6d9e3f7);
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
const $1774ecd32b6469d0$var$RTL_SCRIPTS = new Set([
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
const $1774ecd32b6469d0$var$RTL_LANGS = new Set([
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
function $1774ecd32b6469d0$export$702d680b21cbd764(locale) {
    // If the Intl.Locale API is available, use it to get the script for the locale.
    // This is more accurate than guessing by language, since languages can be written in multiple scripts.
    // @ts-ignore
    if (Intl.Locale) {
        // @ts-ignore
        let script = new Intl.Locale(locale).maximize().script;
        return $1774ecd32b6469d0$var$RTL_SCRIPTS.has(script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = locale.split('-')[0];
    return $1774ecd32b6469d0$var$RTL_LANGS.has(lang);
}





function $397683a59a76be62$export$f09106e7c6677ec5() {
    // @ts-ignore
    let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    return {
        locale: locale,
        direction: $1774ecd32b6469d0$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    };
}
let $397683a59a76be62$var$currentLocale = $397683a59a76be62$export$f09106e7c6677ec5();
let $397683a59a76be62$var$listeners = new Set();
function $397683a59a76be62$var$updateLocale() {
    $397683a59a76be62$var$currentLocale = $397683a59a76be62$export$f09106e7c6677ec5();
    for (let listener of $397683a59a76be62$var$listeners)listener($397683a59a76be62$var$currentLocale);
}
function $397683a59a76be62$export$188ec29ebc2bdc3a() {
    let isSSR = $9HkwT$reactariassr.useIsSSR();
    let [defaultLocale, setDefaultLocale] = $9HkwT$react.useState($397683a59a76be62$var$currentLocale);
    $9HkwT$react.useEffect(()=>{
        if ($397683a59a76be62$var$listeners.size === 0) window.addEventListener('languagechange', $397683a59a76be62$var$updateLocale);
        $397683a59a76be62$var$listeners.add(setDefaultLocale);
        return ()=>{
            $397683a59a76be62$var$listeners.delete(setDefaultLocale);
            if ($397683a59a76be62$var$listeners.size === 0) window.removeEventListener('languagechange', $397683a59a76be62$var$updateLocale);
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



const $d8d315b8fdca59e5$var$I18nContext = /*#__PURE__*/ ($parcel$interopDefault($9HkwT$react)).createContext(null);
function $d8d315b8fdca59e5$export$a54013f0d02a8f82(props) {
    let { locale: locale , children: children  } = props;
    let defaultLocale = $397683a59a76be62$export$188ec29ebc2bdc3a();
    let value = locale ? {
        locale: locale,
        direction: $1774ecd32b6469d0$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    } : defaultLocale;
    return(/*#__PURE__*/ ($parcel$interopDefault($9HkwT$react)).createElement($d8d315b8fdca59e5$var$I18nContext.Provider, {
        value: value
    }, children));
}
function $d8d315b8fdca59e5$export$43bb16f9c6d9e3f7() {
    let defaultLocale = $397683a59a76be62$export$188ec29ebc2bdc3a();
    let context = $9HkwT$react.useContext($d8d315b8fdca59e5$var$I18nContext);
    return context || defaultLocale;
}


var $fc70a6f17a60462c$exports = {};

$parcel$export($fc70a6f17a60462c$exports, "useMessageFormatter", () => $fc70a6f17a60462c$export$ec23bf898b1eed85);



const $fc70a6f17a60462c$var$cache = new WeakMap();
function $fc70a6f17a60462c$var$getCachedDictionary(strings) {
    let dictionary = $fc70a6f17a60462c$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new $9HkwT$internationalizedmessage.MessageDictionary(strings);
        $fc70a6f17a60462c$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fc70a6f17a60462c$export$ec23bf898b1eed85(strings) {
    let { locale: locale  } = $d8d315b8fdca59e5$export$43bb16f9c6d9e3f7();
    let dictionary = $9HkwT$react.useMemo(()=>$fc70a6f17a60462c$var$getCachedDictionary(strings)
    , [
        strings
    ]);
    let formatter = $9HkwT$react.useMemo(()=>new $9HkwT$internationalizedmessage.MessageFormatter(locale, dictionary)
    , [
        locale,
        dictionary
    ]);
    return $9HkwT$react.useCallback((key, variables)=>formatter.format(key, variables)
    , [
        formatter
    ]);
}


var $686b85870fb0a83d$exports = {};

$parcel$export($686b85870fb0a83d$exports, "useDateFormatter", () => $686b85870fb0a83d$export$85fd5fdf27bacc79);



function $686b85870fb0a83d$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    let lastOptions = $9HkwT$react.useRef(null);
    if (options && lastOptions.current && $686b85870fb0a83d$var$isEqual(options, lastOptions.current)) options = lastOptions.current;
    lastOptions.current = options;
    let { locale: locale  } = $d8d315b8fdca59e5$export$43bb16f9c6d9e3f7();
    return $9HkwT$react.useMemo(()=>new $9HkwT$internationalizeddate.DateFormatter(locale, options)
    , [
        locale,
        options
    ]);
}
function $686b85870fb0a83d$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


var $39f54ae46265611e$exports = {};

$parcel$export($39f54ae46265611e$exports, "useNumberFormatter", () => $39f54ae46265611e$export$b7a616150fdb9f44);



function $39f54ae46265611e$export$b7a616150fdb9f44(options = {
}) {
    let { locale: locale  } = $d8d315b8fdca59e5$export$43bb16f9c6d9e3f7();
    return $9HkwT$react.useMemo(()=>new $9HkwT$internationalizednumber.NumberFormatter(locale, options)
    , [
        locale,
        options
    ]);
}


var $6d5ed160238086f2$exports = {};

$parcel$export($6d5ed160238086f2$exports, "useCollator", () => $6d5ed160238086f2$export$a16aca283550c30d);

let $6d5ed160238086f2$var$cache = new Map();
function $6d5ed160238086f2$export$a16aca283550c30d(options) {
    let { locale: locale  } = $d8d315b8fdca59e5$export$43bb16f9c6d9e3f7();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($6d5ed160238086f2$var$cache.has(cacheKey)) return $6d5ed160238086f2$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $6d5ed160238086f2$var$cache.set(cacheKey, formatter);
    return formatter;
}


var $a11120070c0f5e87$exports = {};

$parcel$export($a11120070c0f5e87$exports, "useFilter", () => $a11120070c0f5e87$export$3274cf84b703fff);

function $a11120070c0f5e87$export$3274cf84b703fff(options) {
    let collator = $6d5ed160238086f2$export$a16aca283550c30d({
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


$parcel$exportWildcard(module.exports, $d8d315b8fdca59e5$exports);
$parcel$exportWildcard(module.exports, $fc70a6f17a60462c$exports);
$parcel$exportWildcard(module.exports, $686b85870fb0a83d$exports);
$parcel$exportWildcard(module.exports, $39f54ae46265611e$exports);
$parcel$exportWildcard(module.exports, $6d5ed160238086f2$exports);
$parcel$exportWildcard(module.exports, $a11120070c0f5e87$exports);


//# sourceMappingURL=main.js.map
