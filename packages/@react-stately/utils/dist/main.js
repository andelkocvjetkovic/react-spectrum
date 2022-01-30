var $1ebWm$react = require("react");

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
var $28a294aa55e111af$exports = {};

$parcel$export($28a294aa55e111af$exports, "useControlledState", () => $28a294aa55e111af$export$40bfa8c7b0832715);

function $28a294aa55e111af$export$40bfa8c7b0832715(value1, defaultValue, onChange) {
    let [stateValue, setStateValue] = $1ebWm$react.useState(value1 || defaultValue);
    let ref = $1ebWm$react.useRef(value1 !== undefined);
    let wasControlled = ref.current;
    let isControlled = value1 !== undefined;
    // Internal state reference for useCallback
    let stateRef = $1ebWm$react.useRef(stateValue);
    if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
    ref.current = isControlled;
    let setValue = $1ebWm$react.useCallback((value2, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(stateRef.current, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) stateRef.current = value;
        };
        if (typeof value2 === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value2(isControlled ? stateRef.current : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value2);
            onChangeCaller(value2, ...args);
        }
    }, [
        isControlled,
        onChange
    ]);
    // If a controlled component's value prop changes, we need to update stateRef
    if (isControlled) stateRef.current = value1;
    else value1 = stateValue;
    return [
        value1,
        setValue
    ];
}


var $e51de1ee634a4bfa$exports = {};

$parcel$export($e51de1ee634a4bfa$exports, "clamp", () => $e51de1ee634a4bfa$export$7d15b64cf5a3a4c4);
$parcel$export($e51de1ee634a4bfa$exports, "snapValueToStep", () => $e51de1ee634a4bfa$export$cb6e0bb50bc19463);
$parcel$export($e51de1ee634a4bfa$exports, "toFixedNumber", () => $e51de1ee634a4bfa$export$b6268554fba451f);
function $e51de1ee634a4bfa$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $e51de1ee634a4bfa$export$cb6e0bb50bc19463(value, min, max, step) {
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step;
    // correct floating point behavior by rounding to step precision
    let string = step.toString();
    let index = string.indexOf('.');
    let precision = index >= 0 ? string.length - index : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        snappedValue = Math.round(snappedValue * pow) / pow;
    }
    return snappedValue;
}
function $e51de1ee634a4bfa$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}


$parcel$exportWildcard(module.exports, $28a294aa55e111af$exports);
$parcel$exportWildcard(module.exports, $e51de1ee634a4bfa$exports);


//# sourceMappingURL=main.js.map