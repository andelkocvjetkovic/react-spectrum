import $OrrLx$intlmessageformat from "intl-messageformat";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $66bb1da03ca047c3$exports = {};

$parcel$export($66bb1da03ca047c3$exports, "MessageDictionary", () => $66bb1da03ca047c3$export$64839e615120df17);
class $66bb1da03ca047c3$export$64839e615120df17 {
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
            strings = $66bb1da03ca047c3$var$getStringsForLocale(locale, this.messages, this.defaultLocale);
            this.messages[locale] = strings;
        }
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
}
function $66bb1da03ca047c3$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $66bb1da03ca047c3$var$getLanguage(locale);
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $66bb1da03ca047c3$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}


var $2a9c3b8a3a59b7ef$exports = {};

$parcel$export($2a9c3b8a3a59b7ef$exports, "MessageFormatter", () => $2a9c3b8a3a59b7ef$export$526ebc05ff964723);

class $2a9c3b8a3a59b7ef$export$526ebc05ff964723 {
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
            message = new $OrrLx$intlmessageformat(msg, this.locale);
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




export {$66bb1da03ca047c3$export$64839e615120df17 as MessageDictionary, $2a9c3b8a3a59b7ef$export$526ebc05ff964723 as MessageFormatter};
//# sourceMappingURL=module.js.map
