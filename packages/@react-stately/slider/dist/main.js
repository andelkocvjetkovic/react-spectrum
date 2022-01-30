var $lMkdD$reactariautils = require("@react-aria/utils");
var $lMkdD$reactstatelyutils = require("@react-stately/utils");
var $lMkdD$react = require("react");

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
var $ec80cfa9a3830ae5$exports = {};

$parcel$export($ec80cfa9a3830ae5$exports, "useSliderState", () => $ec80cfa9a3830ae5$export$e5fda3247f5d67f9);



const $ec80cfa9a3830ae5$var$DEFAULT_MIN_VALUE = 0;
const $ec80cfa9a3830ae5$var$DEFAULT_MAX_VALUE = 100;
const $ec80cfa9a3830ae5$var$DEFAULT_STEP_VALUE = 1;
function $ec80cfa9a3830ae5$export$e5fda3247f5d67f9(props) {
    const { isDisabled: isDisabled , minValue: minValue = $ec80cfa9a3830ae5$var$DEFAULT_MIN_VALUE , maxValue: maxValue = $ec80cfa9a3830ae5$var$DEFAULT_MAX_VALUE , numberFormatter: formatter , step: step = $ec80cfa9a3830ae5$var$DEFAULT_STEP_VALUE  } = props;
    const [values, setValues] = $lMkdD$reactstatelyutils.useControlledState(props.value, props.defaultValue ?? [
        minValue
    ], props.onChange);
    const [isDraggings, setDraggings] = $lMkdD$react.useState(new Array(values.length).fill(false));
    const isEditablesRef = $lMkdD$react.useRef(new Array(values.length).fill(true));
    const [focusedIndex, setFocusedIndex] = $lMkdD$react.useState(undefined);
    const valuesRef = $lMkdD$react.useRef(null);
    valuesRef.current = values;
    const isDraggingsRef = $lMkdD$react.useRef(null);
    isDraggingsRef.current = isDraggings;
    function getValuePercent(value) {
        return (value - minValue) / (maxValue - minValue);
    }
    function getThumbMinValue(index) {
        return index === 0 ? minValue : values[index - 1];
    }
    function getThumbMaxValue(index) {
        return index === values.length - 1 ? maxValue : values[index + 1];
    }
    function isThumbEditable(index) {
        return isEditablesRef.current[index];
    }
    function setThumbEditable(index, editable) {
        isEditablesRef.current[index] = editable;
    }
    function updateValue(index, value) {
        if (isDisabled || !isThumbEditable(index)) return;
        const thisMin = getThumbMinValue(index);
        const thisMax = getThumbMaxValue(index);
        // Round value to multiple of step, clamp value between min and max
        value = $lMkdD$reactariautils.snapValueToStep(value, thisMin, thisMax, step);
        valuesRef.current = $ec80cfa9a3830ae5$var$replaceIndex(valuesRef.current, index, value);
        setValues(valuesRef.current);
    }
    function updateDragging(index, dragging) {
        if (isDisabled || !isThumbEditable(index)) return;
        const wasDragging = isDraggingsRef.current[index];
        isDraggingsRef.current = $ec80cfa9a3830ae5$var$replaceIndex(isDraggingsRef.current, index, dragging);
        setDraggings(isDraggingsRef.current);
        // Call onChangeEnd if no handles are dragging.
        if (props.onChangeEnd && wasDragging && !isDraggingsRef.current.some(Boolean)) props.onChangeEnd(valuesRef.current);
    }
    function getFormattedValue(value) {
        return formatter.format(value);
    }
    function setThumbPercent(index, percent) {
        updateValue(index, getPercentValue(percent));
    }
    function getRoundedValue(value) {
        return Math.round((value - minValue) / step) * step + minValue;
    }
    function getPercentValue(percent) {
        const val = percent * (maxValue - minValue) + minValue;
        return $lMkdD$reactariautils.clamp(getRoundedValue(val), minValue, maxValue);
    }
    return {
        values: values,
        getThumbValue: (index)=>values[index]
        ,
        setThumbValue: updateValue,
        setThumbPercent: setThumbPercent,
        isThumbDragging: (index)=>isDraggings[index]
        ,
        setThumbDragging: updateDragging,
        focusedThumb: focusedIndex,
        setFocusedThumb: setFocusedIndex,
        getThumbPercent: (index)=>getValuePercent(values[index])
        ,
        getValuePercent: getValuePercent,
        getThumbValueLabel: (index)=>getFormattedValue(values[index])
        ,
        getFormattedValue: getFormattedValue,
        getThumbMinValue: getThumbMinValue,
        getThumbMaxValue: getThumbMaxValue,
        getPercentValue: getPercentValue,
        isThumbEditable: isThumbEditable,
        setThumbEditable: setThumbEditable,
        step: step
    };
}
function $ec80cfa9a3830ae5$var$replaceIndex(array, index, value) {
    if (array[index] === value) return array;
    return [
        ...array.slice(0, index),
        value,
        ...array.slice(index + 1)
    ];
}


$parcel$exportWildcard(module.exports, $ec80cfa9a3830ae5$exports);


//# sourceMappingURL=main.js.map
