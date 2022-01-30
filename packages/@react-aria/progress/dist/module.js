import {filterDOMProps as $6U349$filterDOMProps, clamp as $6U349$clamp, mergeProps as $6U349$mergeProps} from "@react-aria/utils";
import {useLabel as $6U349$useLabel} from "@react-aria/label";
import {useNumberFormatter as $6U349$useNumberFormatter} from "@react-aria/i18n";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b379eb12e02e72f2$exports = {};

$parcel$export($b379eb12e02e72f2$exports, "useProgressBar", () => $b379eb12e02e72f2$export$ed5abd763a836edc);



function $b379eb12e02e72f2$export$ed5abd763a836edc(props) {
    let { value: value = 0 , minValue: minValue = 0 , maxValue: maxValue = 100 , valueLabel: valueLabel , isIndeterminate: isIndeterminate , formatOptions: formatOptions = {
        style: 'percent'
    }  } = props;
    let domProps = $6U349$filterDOMProps(props, {
        labelable: true
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = $6U349$useLabel({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = $6U349$clamp(value, minValue, maxValue);
    let percentage = (value - minValue) / (maxValue - minValue);
    let formatter = $6U349$useNumberFormatter(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: $6U349$mergeProps(domProps, {
            ...fieldProps,
            'aria-valuenow': isIndeterminate ? undefined : value,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-valuetext': isIndeterminate ? undefined : valueLabel,
            role: 'progressbar'
        }),
        labelProps: labelProps
    };
}




export {$b379eb12e02e72f2$export$ed5abd763a836edc as useProgressBar};
//# sourceMappingURL=module.js.map
