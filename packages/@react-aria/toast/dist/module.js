import {filterDOMProps as $1cHLb$filterDOMProps, mergeProps as $1cHLb$mergeProps, chain as $1cHLb$chain} from "@react-aria/utils";
import {useHover as $1cHLb$useHover, useFocus as $1cHLb$useFocus} from "@react-aria/interactions";
import {useMessageFormatter as $1cHLb$useMessageFormatter} from "@react-aria/i18n";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $1b9ddcfff4d8b763$exports = {};

$parcel$export($1b9ddcfff4d8b763$exports, "useToast", () => $1b9ddcfff4d8b763$export$a407b657d3044108);

var $a4a230ac40b7335b$exports = {};
var $4802ebd4ed4b160e$exports = {};
$4802ebd4ed4b160e$exports = JSON.parse("{\"close\":\"إغلاق\",\"info\":\"معلومات\",\"negative\":\"خطأ\",\"positive\":\"تم بنجاح\"}");


var $49dae558cf9db7f7$exports = {};
$49dae558cf9db7f7$exports = JSON.parse("{\"close\":\"Затвори\",\"info\":\"Инфо\",\"negative\":\"Грешка\",\"positive\":\"Успех\"}");


var $8b755296d8596d7d$exports = {};
$8b755296d8596d7d$exports = JSON.parse("{\"close\":\"Zavřít\",\"info\":\"Informace\",\"negative\":\"Chyba\",\"positive\":\"Úspěch\"}");


var $abf8e2bfd61d3cb9$exports = {};
$abf8e2bfd61d3cb9$exports = JSON.parse("{\"close\":\"Luk\",\"info\":\"Info\",\"negative\":\"Fejl\",\"positive\":\"Fuldført\"}");


var $03c5b0753391e76f$exports = {};
$03c5b0753391e76f$exports = JSON.parse("{\"close\":\"Schließen\",\"info\":\"Informationen\",\"negative\":\"Fehler\",\"positive\":\"Erfolg\"}");


var $01ed88a98978bd98$exports = {};
$01ed88a98978bd98$exports = JSON.parse("{\"close\":\"Κλείσιμο\",\"info\":\"Πληροφορίες\",\"negative\":\"Σφάλμα\",\"positive\":\"Επιτυχία\"}");


var $96e321c8df9a11f7$exports = {};
$96e321c8df9a11f7$exports = JSON.parse("{\"close\":\"Close\",\"info\":\"Info\",\"negative\":\"Error\",\"positive\":\"Success\"}");


var $6e8668627e404688$exports = {};
$6e8668627e404688$exports = JSON.parse("{\"close\":\"Cerrar\",\"info\":\"Información\",\"negative\":\"Error\",\"positive\":\"Éxito\"}");


var $5aeec6a254203bde$exports = {};
$5aeec6a254203bde$exports = JSON.parse("{\"close\":\"Sule\",\"info\":\"Teave\",\"negative\":\"Viga\",\"positive\":\"Valmis\"}");


var $f2467d7e06bad28b$exports = {};
$f2467d7e06bad28b$exports = JSON.parse("{\"close\":\"Sulje\",\"info\":\"Tiedot\",\"negative\":\"Virhe\",\"positive\":\"Onnistui\"}");


var $cb3a8adad021f74b$exports = {};
$cb3a8adad021f74b$exports = JSON.parse("{\"close\":\"Fermer\",\"info\":\"Infos\",\"negative\":\"Erreur\",\"positive\":\"Succès\"}");


var $adcda7a308e312e0$exports = {};
$adcda7a308e312e0$exports = JSON.parse("{\"close\":\"סגור\",\"info\":\"מידע\",\"negative\":\"שגיאה\",\"positive\":\"הצלחה\"}");


var $07ff0bb21ad8c5d6$exports = {};
$07ff0bb21ad8c5d6$exports = JSON.parse("{\"close\":\"Zatvori\",\"info\":\"Informacije\",\"negative\":\"Pogreška\",\"positive\":\"Uspješno\"}");


var $8fb16d290c5c43bc$exports = {};
$8fb16d290c5c43bc$exports = JSON.parse("{\"close\":\"Bezárás\",\"info\":\"Információ\",\"negative\":\"Hiba\",\"positive\":\"Siker\"}");


var $8b2c218b5ebaa48a$exports = {};
$8b2c218b5ebaa48a$exports = JSON.parse("{\"close\":\"Chiudi\",\"info\":\"Informazioni\",\"negative\":\"Errore\",\"positive\":\"Operazione riuscita\"}");


var $b9989e237c15625a$exports = {};
$b9989e237c15625a$exports = JSON.parse("{\"close\":\"閉じる\",\"info\":\"情報\",\"negative\":\"エラー\",\"positive\":\"成功\"}");


var $1c22dd76282916c4$exports = {};
$1c22dd76282916c4$exports = JSON.parse("{\"close\":\"닫기\",\"info\":\"정보\",\"negative\":\"오류\",\"positive\":\"성공\"}");


var $e4c21c7f5606b547$exports = {};
$e4c21c7f5606b547$exports = JSON.parse("{\"close\":\"Uždaryti\",\"info\":\"Informacija\",\"negative\":\"Klaida\",\"positive\":\"Sėkmingai\"}");


var $0b51d359b6ac5a38$exports = {};
$0b51d359b6ac5a38$exports = JSON.parse("{\"close\":\"Aizvērt\",\"info\":\"Informācija\",\"negative\":\"Kļūda\",\"positive\":\"Izdevās\"}");


var $ef9ef94ca40a7e97$exports = {};
$ef9ef94ca40a7e97$exports = JSON.parse("{\"close\":\"Lukk\",\"info\":\"Info\",\"negative\":\"Feil\",\"positive\":\"Vellykket\"}");


var $6c866839e26aee77$exports = {};
$6c866839e26aee77$exports = JSON.parse("{\"close\":\"Sluiten\",\"info\":\"Info\",\"negative\":\"Fout\",\"positive\":\"Geslaagd\"}");


var $8c98641ab7b68f3f$exports = {};
$8c98641ab7b68f3f$exports = JSON.parse("{\"close\":\"Zamknij\",\"info\":\"Informacje\",\"negative\":\"Błąd\",\"positive\":\"Powodzenie\"}");


var $5561048a8109b937$exports = {};
$5561048a8109b937$exports = JSON.parse("{\"close\":\"Fechar\",\"info\":\"Informações\",\"negative\":\"Erro\",\"positive\":\"Sucesso\"}");


var $1332632cf9e171ac$exports = {};
$1332632cf9e171ac$exports = JSON.parse("{\"close\":\"Fechar\",\"info\":\"Informação\",\"negative\":\"Erro\",\"positive\":\"Sucesso\"}");


var $d1b910e72c2c464b$exports = {};
$d1b910e72c2c464b$exports = JSON.parse("{\"close\":\"Închideţi\",\"info\":\"Informaţii\",\"negative\":\"Eroare\",\"positive\":\"Succes\"}");


var $472e214da9885538$exports = {};
$472e214da9885538$exports = JSON.parse("{\"close\":\"Закрыть\",\"info\":\"Информация\",\"negative\":\"Ошибка\",\"positive\":\"Успешно\"}");


var $b8d3cf6bf07e1a7a$exports = {};
$b8d3cf6bf07e1a7a$exports = JSON.parse("{\"close\":\"Zatvoriť\",\"info\":\"Informácie\",\"negative\":\"Chyba\",\"positive\":\"Úspech\"}");


var $8c1e0a31202479cd$exports = {};
$8c1e0a31202479cd$exports = JSON.parse("{\"close\":\"Zapri\",\"info\":\"Informacije\",\"negative\":\"Napaka\",\"positive\":\"Uspešno\"}");


var $c387c32cecef888c$exports = {};
$c387c32cecef888c$exports = JSON.parse("{\"close\":\"Zatvori\",\"info\":\"Informacije\",\"negative\":\"Greška\",\"positive\":\"Uspešno\"}");


var $0c3655ec251b878a$exports = {};
$0c3655ec251b878a$exports = JSON.parse("{\"close\":\"Stäng\",\"info\":\"Info\",\"negative\":\"Fel\",\"positive\":\"Lyckades\"}");


var $d596c92f5c782280$exports = {};
$d596c92f5c782280$exports = JSON.parse("{\"close\":\"Kapat\",\"info\":\"Bilgiler\",\"negative\":\"Hata\",\"positive\":\"Başarılı\"}");


var $001833e85d2c19be$exports = {};
$001833e85d2c19be$exports = JSON.parse("{\"close\":\"Закрити\",\"info\":\"Інформація\",\"negative\":\"Помилка\",\"positive\":\"Успішно\"}");


var $c71a54458d9a5c42$exports = {};
$c71a54458d9a5c42$exports = JSON.parse("{\"close\":\"关闭\",\"info\":\"信息\",\"negative\":\"错误\",\"positive\":\"成功\"}");


var $08df623ab609ca2c$exports = {};
$08df623ab609ca2c$exports = JSON.parse("{\"close\":\"關閉\",\"info\":\"資訊\",\"negative\":\"錯誤\",\"positive\":\"成功\"}");


$a4a230ac40b7335b$exports = {
    "ar-AE": $4802ebd4ed4b160e$exports,
    "bg-BG": $49dae558cf9db7f7$exports,
    "cs-CZ": $8b755296d8596d7d$exports,
    "da-DK": $abf8e2bfd61d3cb9$exports,
    "de-DE": $03c5b0753391e76f$exports,
    "el-GR": $01ed88a98978bd98$exports,
    "en-US": $96e321c8df9a11f7$exports,
    "es-ES": $6e8668627e404688$exports,
    "et-EE": $5aeec6a254203bde$exports,
    "fi-FI": $f2467d7e06bad28b$exports,
    "fr-FR": $cb3a8adad021f74b$exports,
    "he-IL": $adcda7a308e312e0$exports,
    "hr-HR": $07ff0bb21ad8c5d6$exports,
    "hu-HU": $8fb16d290c5c43bc$exports,
    "it-IT": $8b2c218b5ebaa48a$exports,
    "ja-JP": $b9989e237c15625a$exports,
    "ko-KR": $1c22dd76282916c4$exports,
    "lt-LT": $e4c21c7f5606b547$exports,
    "lv-LV": $0b51d359b6ac5a38$exports,
    "nb-NO": $ef9ef94ca40a7e97$exports,
    "nl-NL": $6c866839e26aee77$exports,
    "pl-PL": $8c98641ab7b68f3f$exports,
    "pt-BR": $5561048a8109b937$exports,
    "pt-PT": $1332632cf9e171ac$exports,
    "ro-RO": $d1b910e72c2c464b$exports,
    "ru-RU": $472e214da9885538$exports,
    "sk-SK": $b8d3cf6bf07e1a7a$exports,
    "sl-SI": $8c1e0a31202479cd$exports,
    "sr-SP": $c387c32cecef888c$exports,
    "sv-SE": $0c3655ec251b878a$exports,
    "tr-TR": $d596c92f5c782280$exports,
    "uk-UA": $001833e85d2c19be$exports,
    "zh-CN": $c71a54458d9a5c42$exports,
    "zh-TW": $08df623ab609ca2c$exports
};




function $1b9ddcfff4d8b763$export$a407b657d3044108(props, state) {
    let { toastKey: toastKey , onAction: onAction , onClose: onClose , shouldCloseOnAction: shouldCloseOnAction , timer: timer , variant: variant  } = props;
    let { onRemove: onRemove  } = state;
    let formatMessage = $1cHLb$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($a4a230ac40b7335b$exports)));
    let domProps = $1cHLb$filterDOMProps(props);
    const handleAction = (...args)=>{
        if (onAction) onAction(...args);
        if (shouldCloseOnAction) {
            onClose && onClose(...args);
            onRemove && onRemove(toastKey);
        }
    };
    let iconProps = variant ? {
        'aria-label': formatMessage(variant)
    } : {
    };
    let pauseTimer = ()=>{
        timer && timer.pause();
    };
    let resumeTimer = ()=>{
        timer && timer.resume();
    };
    let { hoverProps: hoverProps  } = $1cHLb$useHover({
        onHoverStart: pauseTimer,
        onHoverEnd: resumeTimer
    });
    let { focusProps: focusProps  } = $1cHLb$useFocus({
        onFocus: pauseTimer,
        onBlur: resumeTimer
    });
    return {
        toastProps: $1cHLb$mergeProps(domProps, {
            ...hoverProps,
            role: 'alert'
        }),
        iconProps: iconProps,
        actionButtonProps: {
            ...focusProps,
            onPress: handleAction
        },
        closeButtonProps: {
            'aria-label': formatMessage('close'),
            ...focusProps,
            onPress: $1cHLb$chain(onClose, ()=>onRemove(toastKey)
            )
        }
    };
}




export {$1b9ddcfff4d8b763$export$a407b657d3044108 as useToast};
//# sourceMappingURL=module.js.map
