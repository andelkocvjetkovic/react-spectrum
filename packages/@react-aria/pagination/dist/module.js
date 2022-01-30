import {useMessageFormatter as $9ZhMV$useMessageFormatter} from "@react-aria/i18n";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $72a7cc5a995e66e7$exports = {};

$parcel$export($72a7cc5a995e66e7$exports, "usePagination", () => $72a7cc5a995e66e7$export$f80c710216eae131);
var $43227b56627f417c$exports = {};
$43227b56627f417c$exports = JSON.parse("{\"next\":\"Další\",\"previous\":\"Předchozí\"}");


var $a04f9ff2ae359073$exports = {};
$a04f9ff2ae359073$exports = JSON.parse("{\"next\":\"Næste\",\"previous\":\"Forrige\"}");


var $3a343b24a2a187cd$exports = {};
$3a343b24a2a187cd$exports = JSON.parse("{\"next\":\"Weiter\",\"previous\":\"Zurück\"}");


var $ce9f2bb646af9af9$exports = {};
$ce9f2bb646af9af9$exports = JSON.parse("{\"previous\":\"Previous\",\"next\":\"Next\"}");


var $0164f3f938eb54b2$exports = {};
$0164f3f938eb54b2$exports = JSON.parse("{\"next\":\"Siguiente\",\"previous\":\"Anterior\"}");


var $d24963e9843c9137$exports = {};
$d24963e9843c9137$exports = JSON.parse("{\"next\":\"Seuraava\",\"previous\":\"Edellinen\"}");


var $0e75933ec611bb84$exports = {};
$0e75933ec611bb84$exports = JSON.parse("{\"next\":\"Suivant\",\"previous\":\"Précédent\"}");


var $98b0218653e4df56$exports = {};
$98b0218653e4df56$exports = JSON.parse("{\"next\":\"Successivo\",\"previous\":\"Precedente\"}");


var $81d10d30e954077e$exports = {};
$81d10d30e954077e$exports = JSON.parse("{\"next\":\"次へ\",\"previous\":\"前へ\"}");


var $ffbdfd361031eae3$exports = {};
$ffbdfd361031eae3$exports = JSON.parse("{\"next\":\"다음\",\"previous\":\"이전\"}");


var $48c12d0e57bf8698$exports = {};
$48c12d0e57bf8698$exports = JSON.parse("{\"next\":\"Neste\",\"previous\":\"Forrige\"}");


var $c8083c14a35e70c9$exports = {};
$c8083c14a35e70c9$exports = JSON.parse("{\"next\":\"Volgende\",\"previous\":\"Vorige\"}");


var $aad8f99bb6e2a14a$exports = {};
$aad8f99bb6e2a14a$exports = JSON.parse("{\"next\":\"Dalej\",\"previous\":\"Wstecz\"}");


var $b78be81c63a8a2e0$exports = {};
$b78be81c63a8a2e0$exports = JSON.parse("{\"next\":\"Próximo\",\"previous\":\"Anterior\"}");


var $590773f9750086f7$exports = {};
$590773f9750086f7$exports = JSON.parse("{\"next\":\"Далее\",\"previous\":\"Назад\"}");


var $0be80772dd400900$exports = {};
$0be80772dd400900$exports = JSON.parse("{\"next\":\"Nästa\",\"previous\":\"Föregående\"}");


var $e44a5eb44494ab5a$exports = {};
$e44a5eb44494ab5a$exports = JSON.parse("{\"next\":\"Sonraki\",\"previous\":\"Önceki\"}");


var $8e0e233f23bb6879$exports = {};
$8e0e233f23bb6879$exports = JSON.parse("{\"next\":\"下一页\",\"previous\":\"上一页\"}");


var $04fda608a6877b14$exports = {};
$04fda608a6877b14$exports = JSON.parse("{\"next\":\"下一頁\",\"previous\":\"上一頁\"}");


var $1c0e8716f9e242f9$export$2e2bcd8739ae039 = {
    'cs-CZ': (/*@__PURE__*/$parcel$interopDefault($43227b56627f417c$exports)),
    'da-DK': (/*@__PURE__*/$parcel$interopDefault($a04f9ff2ae359073$exports)),
    'de-DE': (/*@__PURE__*/$parcel$interopDefault($3a343b24a2a187cd$exports)),
    'en-US': (/*@__PURE__*/$parcel$interopDefault($ce9f2bb646af9af9$exports)),
    'es-ES': (/*@__PURE__*/$parcel$interopDefault($0164f3f938eb54b2$exports)),
    'fi-FI': (/*@__PURE__*/$parcel$interopDefault($d24963e9843c9137$exports)),
    'fr-FR': (/*@__PURE__*/$parcel$interopDefault($0e75933ec611bb84$exports)),
    'it-IT': (/*@__PURE__*/$parcel$interopDefault($98b0218653e4df56$exports)),
    'ja-JP': (/*@__PURE__*/$parcel$interopDefault($81d10d30e954077e$exports)),
    'ko-KR': (/*@__PURE__*/$parcel$interopDefault($ffbdfd361031eae3$exports)),
    'nb-NO': (/*@__PURE__*/$parcel$interopDefault($48c12d0e57bf8698$exports)),
    'nl-NL': (/*@__PURE__*/$parcel$interopDefault($c8083c14a35e70c9$exports)),
    'pl-PL': (/*@__PURE__*/$parcel$interopDefault($aad8f99bb6e2a14a$exports)),
    'pt-BR': (/*@__PURE__*/$parcel$interopDefault($b78be81c63a8a2e0$exports)),
    'ru-RU': (/*@__PURE__*/$parcel$interopDefault($590773f9750086f7$exports)),
    'sv-SE': (/*@__PURE__*/$parcel$interopDefault($0be80772dd400900$exports)),
    'tr-TR': (/*@__PURE__*/$parcel$interopDefault($e44a5eb44494ab5a$exports)),
    'zh-CN': (/*@__PURE__*/$parcel$interopDefault($8e0e233f23bb6879$exports)),
    'zh-TW': (/*@__PURE__*/$parcel$interopDefault($04fda608a6877b14$exports))
};



function $72a7cc5a995e66e7$export$f80c710216eae131(props, state) {
    let formatMessage = $9ZhMV$useMessageFormatter($1c0e8716f9e242f9$export$2e2bcd8739ae039);
    let onPrevious = ()=>{
        state.onDecrement();
        if (props.onPrevious) props.onPrevious(state.ref.current);
    };
    let onNext = ()=>{
        state.onIncrement();
        if (props.onNext) props.onNext(state.ref.current);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowUp':
            case 'Up':
                state.onIncrement();
                break;
            case 'ArrowDown':
            case 'Down':
                state.onDecrement();
                break;
            case 'Enter':
            case ' ':
                break;
            default:
        }
    };
    return {
        prevButtonProps: {
            ...props,
            'aria-label': formatMessage('previous'),
            onPress: onPrevious
        },
        nextButtonProps: {
            ...props,
            'aria-label': formatMessage('next'),
            onPress: onNext
        },
        textProps: {
            ...props,
            onKeyDown: onKeyDown
        }
    };
}




export {$72a7cc5a995e66e7$export$f80c710216eae131 as usePagination};
//# sourceMappingURL=module.js.map
