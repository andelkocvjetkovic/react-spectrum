var $lHd5C$intlmessageformat = require("intl-messageformat");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $29fb5af3755ddf2a$exports = {};

$parcel$export($29fb5af3755ddf2a$exports, "MessageDictionary", () => $29fb5af3755ddf2a$export$64839e615120df17);
class $29fb5af3755ddf2a$export$64839e615120df17 {
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        this.messages = {
            ...messages
        };
        this.defaultLocale = defaultLocale;
    }
    getStringForLocale(key, locale) {
        let strings = this.messages[locale];
        if (!strings) {
            strings = $29fb5af3755ddf2a$var$getStringsForLocale(locale, this.messages, this.defaultLocale);
            this.messages[locale] = strings;
        }
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
}
function $29fb5af3755ddf2a$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $29fb5af3755ddf2a$var$getLanguage(locale);
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $29fb5af3755ddf2a$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}


var $dbb5799d8eb67295$exports = {};

$parcel$export($dbb5799d8eb67295$exports, "MessageFormatter", () => $dbb5799d8eb67295$export$526ebc05ff964723);

class $dbb5799d8eb67295$export$526ebc05ff964723 {
    constructor(locale, messages){
        this.locale = locale;
        this.messages = messages;
        this.cache = {
        };
    }
    format(key, variables) {
        let message = this.cache[key];
        if (!message) {
            let msg = this.messages.getStringForLocale(key, this.locale);
            if (!msg) throw new Error(`Could not find intl message ${key} in ${this.locale} locale`);
            message = new ($parcel$interopDefault($lHd5C$intlmessageformat))(msg, this.locale);
            this.cache[key] = message;
        }
        let varCopy;
        if (variables) varCopy = Object.keys(variables).reduce((acc, key)=>{
            acc[key] = variables[key] == null ? false : variables[key];
            return acc;
        }, {
        });
        return message.format(varCopy);
    }
}


$parcel$exportWildcard(module.exports, $29fb5af3755ddf2a$exports);
$parcel$exportWildcard(module.exports, $dbb5799d8eb67295$exports);


//# sourceMappingURL=main.js.map
