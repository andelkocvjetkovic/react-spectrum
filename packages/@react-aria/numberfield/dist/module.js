import {useId as $dXpir$useId, isIPhone as $dXpir$isIPhone, isAndroid as $dXpir$isAndroid, filterDOMProps as $dXpir$filterDOMProps, mergeProps as $dXpir$mergeProps, isIOS as $dXpir$isIOS} from "@react-aria/utils";
import {useState as $dXpir$useState, useCallback as $dXpir$useCallback, useMemo as $dXpir$useMemo} from "react";
import {useFocus as $dXpir$useFocus, useFocusWithin as $dXpir$useFocusWithin, useScrollWheel as $dXpir$useScrollWheel} from "@react-aria/interactions";
import {useFormattedTextField as $dXpir$useFormattedTextField} from "@react-aria/textfield";
import {useMessageFormatter as $dXpir$useMessageFormatter, useNumberFormatter as $dXpir$useNumberFormatter} from "@react-aria/i18n";
import {useSpinButton as $dXpir$useSpinButton} from "@react-aria/spinbutton";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5d924201c43e4c7c$exports = {};

$parcel$export($5d924201c43e4c7c$exports, "useNumberField", () => $5d924201c43e4c7c$export$23f548e970bdf099);


var $21351f202186f2be$exports = {};
var $181f0f317e586e5c$exports = {};
$181f0f317e586e5c$exports = JSON.parse("{\"decrease\":\"خفض {fieldLabel}\",\"increase\":\"زيادة {fieldLabel}\",\"numberField\":\"حقل رقمي\"}");


var $e815c34346541cdc$exports = {};
$e815c34346541cdc$exports = JSON.parse("{\"decrease\":\"Намаляване {fieldLabel}\",\"increase\":\"Усилване {fieldLabel}\",\"numberField\":\"Номер на полето\"}");


var $167ad40c635bb950$exports = {};
$167ad40c635bb950$exports = JSON.parse("{\"decrease\":\"Snížit {fieldLabel}\",\"increase\":\"Zvýšit {fieldLabel}\",\"numberField\":\"Číselné pole\"}");


var $fbdd783887bed967$exports = {};
$fbdd783887bed967$exports = JSON.parse("{\"decrease\":\"Reducer {fieldLabel}\",\"increase\":\"Øg {fieldLabel}\",\"numberField\":\"Talfelt\"}");


var $e05f0cf5062b4b7b$exports = {};
$e05f0cf5062b4b7b$exports = JSON.parse("{\"decrease\":\"{fieldLabel} verringern\",\"increase\":\"{fieldLabel} erhöhen\",\"numberField\":\"Nummernfeld\"}");


var $dc4f63d7647ab60c$exports = {};
$dc4f63d7647ab60c$exports = JSON.parse("{\"decrease\":\"Μείωση {fieldLabel}\",\"increase\":\"Αύξηση {fieldLabel}\",\"numberField\":\"Πεδίο αριθμού\"}");


var $a13f1baa000e27ba$exports = {};
$a13f1baa000e27ba$exports = JSON.parse("{\"decrease\":\"Decrease {fieldLabel}\",\"increase\":\"Increase {fieldLabel}\",\"numberField\":\"Number field\"}");


var $eea1e3bd60a34f0d$exports = {};
$eea1e3bd60a34f0d$exports = JSON.parse("{\"decrease\":\"Reducir {fieldLabel}\",\"increase\":\"Aumentar {fieldLabel}\",\"numberField\":\"Campo de número\"}");


var $a5ca6ceef59270c1$exports = {};
$a5ca6ceef59270c1$exports = JSON.parse("{\"decrease\":\"Vähenda {fieldLabel}\",\"increase\":\"Suurenda {fieldLabel}\",\"numberField\":\"Numbri väli\"}");


var $211420f3fe8e4288$exports = {};
$211420f3fe8e4288$exports = JSON.parse("{\"decrease\":\"Vähennä {fieldLabel}\",\"increase\":\"Lisää {fieldLabel}\",\"numberField\":\"Numerokenttä\"}");


var $8a5c9f1858e902e1$exports = {};
$8a5c9f1858e902e1$exports = JSON.parse("{\"decrease\":\"Diminuer {fieldLabel}\",\"increase\":\"Augmenter {fieldLabel}\",\"numberField\":\"Champ de nombre\"}");


var $97892bba07047e57$exports = {};
$97892bba07047e57$exports = JSON.parse("{\"decrease\":\"הקטן {fieldLabel}\",\"increase\":\"הגדל {fieldLabel}\",\"numberField\":\"שדה מספר\"}");


var $dbb4d0333261ab94$exports = {};
$dbb4d0333261ab94$exports = JSON.parse("{\"decrease\":\"Smanji {fieldLabel}\",\"increase\":\"Povećaj {fieldLabel}\",\"numberField\":\"Polje broja\"}");


var $34ebf3d69bea1b1f$exports = {};
$34ebf3d69bea1b1f$exports = JSON.parse("{\"decrease\":\"{fieldLabel} csökkentése\",\"increase\":\"{fieldLabel} növelése\",\"numberField\":\"Számmező\"}");


var $485bf2c8eb338e2e$exports = {};
$485bf2c8eb338e2e$exports = JSON.parse("{\"decrease\":\"Riduci {fieldLabel}\",\"increase\":\"Aumenta {fieldLabel}\",\"numberField\":\"Campo numero\"}");


var $aa1fcf5be730d697$exports = {};
$aa1fcf5be730d697$exports = JSON.parse("{\"decrease\":\"{fieldLabel}を縮小\",\"increase\":\"{fieldLabel}を拡大\",\"numberField\":\"数値フィールド\"}");


var $41fd1306df85b6dd$exports = {};
$41fd1306df85b6dd$exports = JSON.parse("{\"decrease\":\"{fieldLabel} 감소\",\"increase\":\"{fieldLabel} 증가\",\"numberField\":\"번호 필드\"}");


var $d8b2ec31932c413f$exports = {};
$d8b2ec31932c413f$exports = JSON.parse("{\"decrease\":\"Sumažinti {fieldLabel}\",\"increase\":\"Padidinti {fieldLabel}\",\"numberField\":\"Numerio laukas\"}");


var $cac5cad0db92ce61$exports = {};
$cac5cad0db92ce61$exports = JSON.parse("{\"decrease\":\"Samazināšana {fieldLabel}\",\"increase\":\"Palielināšana {fieldLabel}\",\"numberField\":\"Skaitļu lauks\"}");


var $ad7ab849080b339f$exports = {};
$ad7ab849080b339f$exports = JSON.parse("{\"decrease\":\"Reduser {fieldLabel}\",\"increase\":\"Øk {fieldLabel}\",\"numberField\":\"Tallfelt\"}");


var $25da8efda961e035$exports = {};
$25da8efda961e035$exports = JSON.parse("{\"decrease\":\"{fieldLabel} verlagen\",\"increase\":\"{fieldLabel} verhogen\",\"numberField\":\"Getalveld\"}");


var $8f829aa6394e51eb$exports = {};
$8f829aa6394e51eb$exports = JSON.parse("{\"decrease\":\"Zmniejsz {fieldLabel}\",\"increase\":\"Zwiększ {fieldLabel}\",\"numberField\":\"Pole numeru\"}");


var $bf6c3421e71503d9$exports = {};
$bf6c3421e71503d9$exports = JSON.parse("{\"decrease\":\"Diminuir {fieldLabel}\",\"increase\":\"Aumentar {fieldLabel}\",\"numberField\":\"Campo de número\"}");


var $b1b13887e7b07bdf$exports = {};
$b1b13887e7b07bdf$exports = JSON.parse("{\"decrease\":\"Diminuir {fieldLabel}\",\"increase\":\"Aumentar {fieldLabel}\",\"numberField\":\"Campo numérico\"}");


var $aeab762bfb8d52bc$exports = {};
$aeab762bfb8d52bc$exports = JSON.parse("{\"decrease\":\"Scădere {fieldLabel}\",\"increase\":\"Creștere {fieldLabel}\",\"numberField\":\"Câmp numeric\"}");


var $48055686816b50e6$exports = {};
$48055686816b50e6$exports = JSON.parse("{\"decrease\":\"Уменьшение {fieldLabel}\",\"increase\":\"Увеличение {fieldLabel}\",\"numberField\":\"Числовое поле\"}");


var $c259b27a2a4a0a54$exports = {};
$c259b27a2a4a0a54$exports = JSON.parse("{\"decrease\":\"Znížiť {fieldLabel}\",\"increase\":\"Zvýšiť {fieldLabel}\",\"numberField\":\"Číselné pole\"}");


var $7b9b870efa63341c$exports = {};
$7b9b870efa63341c$exports = JSON.parse("{\"decrease\":\"Upadati {fieldLabel}\",\"increase\":\"Povečajte {fieldLabel}\",\"numberField\":\"Številčno polje\"}");


var $6cf7f2090dee0520$exports = {};
$6cf7f2090dee0520$exports = JSON.parse("{\"decrease\":\"Decrease {fieldLabel}\",\"increase\":\"Increase {fieldLabel}\",\"numberField\":\"Number field\"}");


var $071bc526b1bdada2$exports = {};
$071bc526b1bdada2$exports = JSON.parse("{\"decrease\":\"Minska {fieldLabel}\",\"increase\":\"Öka {fieldLabel}\",\"numberField\":\"Nummerfält\"}");


var $f4851b0aeda9a1d7$exports = {};
$f4851b0aeda9a1d7$exports = JSON.parse("{\"decrease\":\"{fieldLabel} azalt\",\"increase\":\"{fieldLabel} arttır\",\"numberField\":\"Sayı alanı\"}");


var $12562504080f0916$exports = {};
$12562504080f0916$exports = JSON.parse("{\"decrease\":\"Зменшити {fieldLabel}\",\"increase\":\"Збільшити {fieldLabel}\",\"numberField\":\"Поле номера\"}");


var $b614009efbb367fe$exports = {};
$b614009efbb367fe$exports = JSON.parse("{\"decrease\":\"降低 {fieldLabel}\",\"increase\":\"提高 {fieldLabel}\",\"numberField\":\"数字字段\"}");


var $fa177454ead22e31$exports = {};
$fa177454ead22e31$exports = JSON.parse("{\"decrease\":\"縮小 {fieldLabel}\",\"increase\":\"放大 {fieldLabel}\",\"numberField\":\"數字欄位\"}");


$21351f202186f2be$exports = {
    "ar-AE": $181f0f317e586e5c$exports,
    "bg-BG": $e815c34346541cdc$exports,
    "cs-CZ": $167ad40c635bb950$exports,
    "da-DK": $fbdd783887bed967$exports,
    "de-DE": $e05f0cf5062b4b7b$exports,
    "el-GR": $dc4f63d7647ab60c$exports,
    "en-US": $a13f1baa000e27ba$exports,
    "es-ES": $eea1e3bd60a34f0d$exports,
    "et-EE": $a5ca6ceef59270c1$exports,
    "fi-FI": $211420f3fe8e4288$exports,
    "fr-FR": $8a5c9f1858e902e1$exports,
    "he-IL": $97892bba07047e57$exports,
    "hr-HR": $dbb4d0333261ab94$exports,
    "hu-HU": $34ebf3d69bea1b1f$exports,
    "it-IT": $485bf2c8eb338e2e$exports,
    "ja-JP": $aa1fcf5be730d697$exports,
    "ko-KR": $41fd1306df85b6dd$exports,
    "lt-LT": $d8b2ec31932c413f$exports,
    "lv-LV": $cac5cad0db92ce61$exports,
    "nb-NO": $ad7ab849080b339f$exports,
    "nl-NL": $25da8efda961e035$exports,
    "pl-PL": $8f829aa6394e51eb$exports,
    "pt-BR": $bf6c3421e71503d9$exports,
    "pt-PT": $b1b13887e7b07bdf$exports,
    "ro-RO": $aeab762bfb8d52bc$exports,
    "ru-RU": $48055686816b50e6$exports,
    "sk-SK": $c259b27a2a4a0a54$exports,
    "sl-SI": $7b9b870efa63341c$exports,
    "sr-SP": $6cf7f2090dee0520$exports,
    "sv-SE": $071bc526b1bdada2$exports,
    "tr-TR": $f4851b0aeda9a1d7$exports,
    "uk-UA": $12562504080f0916$exports,
    "zh-CN": $b614009efbb367fe$exports,
    "zh-TW": $fa177454ead22e31$exports
};







function $5d924201c43e4c7c$export$23f548e970bdf099(props, state, inputRef) {
    let { id: id , decrementAriaLabel: decrementAriaLabel , incrementAriaLabel: incrementAriaLabel , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , minValue: minValue , maxValue: maxValue , autoFocus: autoFocus , validationState: validationState , label: label , formatOptions: formatOptions , onBlur: onBlur , onFocus: onFocus , onFocusChange: onFocusChange , onKeyDown: onKeyDown , onKeyUp: onKeyUp , description: description , errorMessage: errorMessage  } = props;
    let { increment: increment , incrementToMax: incrementToMax , decrement: decrement , decrementToMin: decrementToMin , numberValue: numberValue , commit: commit  } = state;
    const formatMessage = $dXpir$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($21351f202186f2be$exports)));
    let inputId = $dXpir$useId(id);
    let { focusProps: focusProps  } = $dXpir$useFocus({
        onBlur: ()=>{
            // Set input value to normalized valid value
            commit();
        }
    });
    let { spinButtonProps: spinButtonProps , incrementButtonProps: incButtonProps , decrementButtonProps: decButtonProps  } = $dXpir$useSpinButton({
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        maxValue: maxValue,
        minValue: minValue,
        onIncrement: increment,
        onIncrementToMax: incrementToMax,
        onDecrement: decrement,
        onDecrementToMin: decrementToMin,
        value: numberValue,
        textValue: state.inputValue
    });
    let [focusWithin, setFocusWithin] = $dXpir$useState(false);
    let { focusWithinProps: focusWithinProps  } = $dXpir$useFocusWithin({
        isDisabled: isDisabled,
        onFocusWithinChange: setFocusWithin
    });
    let onWheel = $dXpir$useCallback((e)=>{
        // if on a trackpad, users can scroll in both X and Y at once, check the magnitude of the change
        // if it's mostly in the X direction, then just return, the user probably doesn't mean to inc/dec
        // this isn't perfect, events come in fast with small deltas and a part of the scroll may give a false indication
        // especially if the user is scrolling near 45deg
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (e.deltaY > 0) increment();
        else if (e.deltaY < 0) decrement();
    }, [
        decrement,
        increment
    ]);
    // If the input isn't supposed to receive input, disable scrolling.
    let scrollingDisabled = isDisabled || isReadOnly || !focusWithin;
    $dXpir$useScrollWheel({
        onScroll: onWheel,
        isDisabled: scrollingDisabled
    }, inputRef);
    // The inputMode attribute influences the software keyboard that is shown on touch devices.
    // Browsers and operating systems are quite inconsistent about what keys are available, however.
    // We choose between numeric and decimal based on whether we allow negative and fractional numbers,
    // and based on testing on various devices to determine what keys are available in each inputMode.
    let numberFormatter = $dXpir$useNumberFormatter(formatOptions);
    let intlOptions = $dXpir$useMemo(()=>numberFormatter.resolvedOptions()
    , [
        numberFormatter
    ]);
    let hasDecimals = intlOptions.maximumFractionDigits > 0;
    let hasNegative = isNaN(state.minValue) || state.minValue < 0;
    let inputMode = 'numeric';
    if ($dXpir$isIPhone()) {
        // iPhone doesn't have a minus sign in either numeric or decimal.
        // Note this is only for iPhone, not iPad, which always has both
        // minus and decimal in numeric.
        if (hasNegative) inputMode = 'text';
        else if (hasDecimals) inputMode = 'decimal';
    } else if ($dXpir$isAndroid()) {
        // Android numeric has both a decimal point and minus key.
        // decimal does not have a minus key.
        if (hasNegative) inputMode = 'numeric';
        else if (hasDecimals) inputMode = 'decimal';
    }
    let onChange = (value)=>{
        state.setInputValue(value);
    };
    let domProps = $dXpir$filterDOMProps(props);
    let { labelProps: labelProps , inputProps: textFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $dXpir$useFormattedTextField({
        ...domProps,
        label: label,
        autoFocus: autoFocus,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        validationState: validationState,
        value: state.inputValue,
        autoComplete: 'off',
        'aria-label': props['aria-label'] || null,
        'aria-labelledby': props['aria-labelledby'] || null,
        id: inputId,
        type: 'text',
        inputMode: inputMode,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        description: description,
        errorMessage: errorMessage
    }, state, inputRef);
    let inputProps = $dXpir$mergeProps(spinButtonProps, textFieldProps, focusProps, {
        // override the spinbutton role, we can't focus a spin button with VO
        role: null,
        // ignore aria-roledescription on iOS so that required state will announce when it is present
        'aria-roledescription': !$dXpir$isIOS() ? formatMessage('numberField') : null,
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false'
    });
    let onButtonPressStart = (e)=>{
        // If focus is already on the input, keep it there so we don't hide the
        // software keyboard when tapping the increment/decrement buttons.
        if (document.activeElement === inputRef.current) return;
        // Otherwise, when using a mouse, move focus to the input.
        // On touch, or with a screen reader, focus the button so that the software
        // keyboard does not appear and the screen reader cursor is not moved off the button.
        if (e.pointerType === 'mouse') inputRef.current.focus();
        else e.target.focus();
    };
    // Determine the label for the increment and decrement buttons. There are 4 cases:
    //
    // 1. With a visible label that is a string: aria-label: `Increase ${props.label}`
    // 2. With a visible label that is JSX: aria-label: 'Increase', aria-labelledby: '${incrementId} ${labelId}'
    // 3. With an aria-label: aria-label: `Increase ${props['aria-label']}`
    // 4. With an aria-labelledby: aria-label: 'Increase', aria-labelledby: `${incrementId} ${props['aria-labelledby']}`
    //
    // (1) and (2) could possibly be combined and both use aria-labelledby. However, placing the label in
    // the aria-label string rather than using aria-labelledby gives more flexibility to translators to change
    // the order or add additional words around the label if needed.
    let fieldLabel = props['aria-label'] || (typeof props.label === 'string' ? props.label : '');
    let ariaLabelledby;
    if (!fieldLabel) ariaLabelledby = props.label != null ? labelProps.id : props['aria-labelledby'];
    let incrementId = $dXpir$useId();
    let decrementId = $dXpir$useId();
    let incrementButtonProps = $dXpir$mergeProps(incButtonProps, {
        'aria-label': incrementAriaLabel || formatMessage('increase', {
            fieldLabel: fieldLabel
        }).trim(),
        id: ariaLabelledby && !incrementAriaLabel ? incrementId : null,
        'aria-labelledby': ariaLabelledby && !incrementAriaLabel ? `${incrementId} ${ariaLabelledby}` : null,
        'aria-controls': inputId,
        excludeFromTabOrder: true,
        preventFocusOnPress: true,
        allowFocusWhenDisabled: true,
        isDisabled: !state.canIncrement,
        onPressStart: onButtonPressStart
    });
    let decrementButtonProps = $dXpir$mergeProps(decButtonProps, {
        'aria-label': decrementAriaLabel || formatMessage('decrease', {
            fieldLabel: fieldLabel
        }).trim(),
        id: ariaLabelledby && !decrementAriaLabel ? decrementId : null,
        'aria-labelledby': ariaLabelledby && !decrementAriaLabel ? `${decrementId} ${ariaLabelledby}` : null,
        'aria-controls': inputId,
        excludeFromTabOrder: true,
        preventFocusOnPress: true,
        allowFocusWhenDisabled: true,
        isDisabled: !state.canDecrement,
        onPressStart: onButtonPressStart
    });
    return {
        groupProps: {
            role: 'group',
            'aria-disabled': isDisabled,
            'aria-invalid': validationState === 'invalid' ? 'true' : undefined,
            ...focusWithinProps
        },
        labelProps: labelProps,
        inputProps: inputProps,
        incrementButtonProps: incrementButtonProps,
        decrementButtonProps: decrementButtonProps,
        errorMessageProps: errorMessageProps,
        descriptionProps: descriptionProps
    };
}




export {$5d924201c43e4c7c$export$23f548e970bdf099 as useNumberField};
//# sourceMappingURL=module.js.map
