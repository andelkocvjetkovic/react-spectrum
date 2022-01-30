import {snapValueToStep as $9LrbI$snapValueToStep, clamp as $9LrbI$clamp} from "@react-aria/utils";
import {useControlledState as $9LrbI$useControlledState} from "@react-stately/utils";
import {useState as $9LrbI$useState, useRef as $9LrbI$useRef} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bc616ccd4b00f45f$exports = {};

$parcel$export($bc616ccd4b00f45f$exports, "useSliderState", () => $bc616ccd4b00f45f$export$e5fda3247f5d67f9);



const $bc616ccd4b00f45f$var$DEFAULT_MIN_VALUE = 0;
const $bc616ccd4b00f45f$var$DEFAULT_MAX_VALUE = 100;
const $bc616ccd4b00f45f$var$DEFAULT_STEP_VALUE = 1;
function $bc616ccd4b00f45f$export$e5fda3247f5d67f9(props) {
    const { isDisabled: isDisabled , minValue: minValue = $bc616ccd4b00f45f$var$DEFAULT_MIN_VALUE , maxValue: maxValue = $bc616ccd4b00f45f$var$DEFAULT_MAX_VALUE , numberFormatter: formatter , step: step = $bc616ccd4b00f45f$var$DEFAULT_STEP_VALUE  } = props;
    const [values, setValues] = $9LrbI$useControlledState(props.value, props.defaultValue ?? [
        minValue
    ], props.onChange);
    const [isDraggings, setDraggings] = $9LrbI$useState(new Array(values.length).fill(false));
    const isEditablesRef = $9LrbI$useRef(new Array(values.length).fill(true));
    const [focusedIndex, setFocusedIndex] = $9LrbI$useState(undefined);
    const valuesRef = $9LrbI$useRef(null);
    valuesRef.current = values;
    const isDraggingsRef = $9LrbI$useRef(null);
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
        value = $9LrbI$snapValueToStep(value, thisMin, thisMax, step);
        valuesRef.current = $bc616ccd4b00f45f$var$replaceIndex(valuesRef.current, index, value);
        setValues(valuesRef.current);
    }
    function updateDragging(index, dragging) {
        if (isDisabled || !isThumbEditable(index)) return;
        const wasDragging = isDraggingsRef.current[index];
        isDraggingsRef.current = $bc616ccd4b00f45f$var$replaceIndex(isDraggingsRef.current, index, dragging);
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
        return $9LrbI$clamp(getRoundedValue(val), minValue, maxValue);
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
function $bc616ccd4b00f45f$var$replaceIndex(array, index, value) {
    if (array[index] === value) return array;
    return [
        ...array.slice(0, index),
        value,
        ...array.slice(index + 1)
    ];
}




export {$bc616ccd4b00f45f$export$e5fda3247f5d67f9 as useSliderState};
//# sourceMappingURL=module.js.map
