var $42GXM$reactstatelyutils = require("@react-stately/utils");
var $42GXM$internationalizednumber = require("@internationalized/number");
var $42GXM$react = require("react");

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
var $3a0f1d1009c84aaa$exports = {};

$parcel$export($3a0f1d1009c84aaa$exports, "useNumberFieldState", () => $3a0f1d1009c84aaa$export$7f629e9dc1ecf37c);



function $3a0f1d1009c84aaa$export$7f629e9dc1ecf37c(props) {
    let { minValue: minValue , maxValue: maxValue , step: step , formatOptions: formatOptions , value: value1 , defaultValue: defaultValue , onChange: onChange , locale: locale , isDisabled: isDisabled , isReadOnly: isReadOnly  } = props;
    let [numberValue, setNumberValue] = $42GXM$reactstatelyutils.useControlledState(value1, isNaN(defaultValue) ? NaN : defaultValue, onChange);
    let [inputValue, setInputValue] = $42GXM$react.useState(()=>isNaN(numberValue) ? '' : new $42GXM$internationalizednumber.NumberFormatter(locale, formatOptions).format(numberValue)
    );
    let numberParser = $42GXM$react.useMemo(()=>new $42GXM$internationalizednumber.NumberParser(locale, formatOptions)
    , [
        locale,
        formatOptions
    ]);
    let numberingSystem = $42GXM$react.useMemo(()=>numberParser.getNumberingSystem(inputValue)
    , [
        numberParser,
        inputValue
    ]);
    let formatter = $42GXM$react.useMemo(()=>new $42GXM$internationalizednumber.NumberFormatter(locale, {
            ...formatOptions,
            numberingSystem: numberingSystem
        })
    , [
        locale,
        formatOptions,
        numberingSystem
    ]);
    let intlOptions = $42GXM$react.useMemo(()=>formatter.resolvedOptions()
    , [
        formatter
    ]);
    let format = $42GXM$react.useCallback((value)=>isNaN(value) ? '' : formatter.format(value)
    , [
        formatter
    ]);
    let clampStep = !isNaN(step) ? step : 1;
    if (intlOptions.style === 'percent' && isNaN(step)) clampStep = 0.01;
    // Update the input value when the number value or format options change. This is done
    // in a useEffect so that the controlled behavior is correct and we only update the
    // textfield after prop changes.
    $42GXM$react.useEffect(()=>{
        setInputValue(format(numberValue));
    }, [
        numberValue,
        locale,
        formatOptions
    ]);
    // Store last parsed value in a ref so it can be used by increment/decrement below
    let parsedValue = $42GXM$react.useMemo(()=>numberParser.parse(inputValue)
    , [
        numberParser,
        inputValue
    ]);
    let parsed = $42GXM$react.useRef(0);
    parsed.current = parsedValue;
    let commit = ()=>{
        // Set to empty state if input value is empty
        if (!inputValue.length) {
            setNumberValue(NaN);
            setInputValue(value1 === undefined ? '' : format(numberValue));
            return;
        }
        // if it failed to parse, then reset input to formatted version of current number
        if (isNaN(parsed.current)) {
            setInputValue(format(numberValue));
            return;
        }
        // Clamp to min and max, round to the nearest step, and round to specified number of digits
        let clampedValue;
        if (isNaN(step)) clampedValue = $42GXM$reactstatelyutils.clamp(parsed.current, minValue, maxValue);
        else clampedValue = $42GXM$reactstatelyutils.snapValueToStep(parsed.current, minValue, maxValue, step);
        clampedValue = numberParser.parse(format(clampedValue));
        setNumberValue(clampedValue);
        // in a controlled state, the numberValue won't change, so we won't go back to our old input without help
        setInputValue(format(value1 === undefined ? clampedValue : numberValue));
    };
    let safeNextStep = (operation, minMax)=>{
        let prev = parsed.current;
        if (isNaN(prev)) {
            // if the input is empty, start from the min/max value when incrementing/decrementing,
            // or zero if there is no min/max value defined.
            let newValue = isNaN(minMax) ? 0 : minMax;
            return $42GXM$reactstatelyutils.snapValueToStep(newValue, minValue, maxValue, clampStep);
        } else {
            // otherwise, first snap the current value to the nearest step. if it moves in the direction
            // we're going, use that value, otherwise add the step and snap that value.
            let newValue = $42GXM$reactstatelyutils.snapValueToStep(prev, minValue, maxValue, clampStep);
            if (operation === '+' && newValue > prev || operation === '-' && newValue < prev) return newValue;
            return $42GXM$reactstatelyutils.snapValueToStep($3a0f1d1009c84aaa$var$handleDecimalOperation(operation, prev, clampStep), minValue, maxValue, clampStep);
        }
    };
    let increment = ()=>{
        let newValue = safeNextStep('+', minValue);
        // if we've arrived at the same value that was previously in the state, the
        // input value should be updated to match
        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment
        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input
        if (newValue === numberValue) setInputValue(format(newValue));
        setNumberValue(newValue);
    };
    let decrement = ()=>{
        let newValue = safeNextStep('-', maxValue);
        if (newValue === numberValue) setInputValue(format(newValue));
        setNumberValue(newValue);
    };
    let incrementToMax = ()=>{
        if (maxValue != null) setNumberValue($42GXM$reactstatelyutils.snapValueToStep(maxValue, minValue, maxValue, clampStep));
    };
    let decrementToMin = ()=>{
        if (minValue != null) setNumberValue(minValue);
    };
    let canIncrement = $42GXM$react.useMemo(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || isNaN(maxValue) || $42GXM$reactstatelyutils.snapValueToStep(parsedValue, minValue, maxValue, clampStep) > parsedValue || $3a0f1d1009c84aaa$var$handleDecimalOperation('+', parsedValue, clampStep) <= maxValue)
    , [
        isDisabled,
        isReadOnly,
        minValue,
        maxValue,
        clampStep,
        parsedValue
    ]);
    let canDecrement = $42GXM$react.useMemo(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || isNaN(minValue) || $42GXM$reactstatelyutils.snapValueToStep(parsedValue, minValue, maxValue, clampStep) < parsedValue || $3a0f1d1009c84aaa$var$handleDecimalOperation('-', parsedValue, clampStep) >= minValue)
    , [
        isDisabled,
        isReadOnly,
        minValue,
        maxValue,
        clampStep,
        parsedValue
    ]);
    let validate = (value)=>numberParser.isValidPartialNumber(value, minValue, maxValue)
    ;
    return {
        validate: validate,
        increment: increment,
        incrementToMax: incrementToMax,
        decrement: decrement,
        decrementToMin: decrementToMin,
        canIncrement: canIncrement,
        canDecrement: canDecrement,
        minValue: minValue,
        maxValue: maxValue,
        numberValue: parsedValue,
        setNumberValue: setNumberValue,
        setInputValue: setInputValue,
        inputValue: inputValue,
        commit: commit,
        safeNextStep: safeNextStep
    };
}
function $3a0f1d1009c84aaa$var$handleDecimalOperation(operator, value1, value2) {
    let result = operator === '+' ? value1 + value2 : value1 - value2;
    // Check if we have decimals
    if (value1 % 1 !== 0 || value2 % 1 !== 0) {
        const value1Decimal = value1.toString().split('.');
        const value2Decimal = value2.toString().split('.');
        const value1DecimalLength = value1Decimal[1] && value1Decimal[1].length || 0;
        const value2DecimalLength = value2Decimal[1] && value2Decimal[1].length || 0;
        const multiplier = Math.pow(10, Math.max(value1DecimalLength, value2DecimalLength));
        // Transform the decimals to integers based on the precision
        value1 = Math.round(value1 * multiplier);
        value2 = Math.round(value2 * multiplier);
        // Perform the operation on integers values to make sure we don't get a fancy decimal value
        result = operator === '+' ? value1 + value2 : value1 - value2;
        // Transform the integer result back to decimal
        result /= multiplier;
    }
    return result;
}


$parcel$exportWildcard(module.exports, $3a0f1d1009c84aaa$exports);


//# sourceMappingURL=main.js.map
