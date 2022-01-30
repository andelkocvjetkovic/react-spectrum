var $9Gha9$reactariautils = require("@react-aria/utils");
var $9Gha9$reactarialabel = require("@react-aria/label");
var $9Gha9$reactariai18n = require("@react-aria/i18n");

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
var $23bb4fd04edf5c92$exports = {};

$parcel$export($23bb4fd04edf5c92$exports, "useProgressBar", () => $23bb4fd04edf5c92$export$ed5abd763a836edc);



function $23bb4fd04edf5c92$export$ed5abd763a836edc(props) {
    let { value: value = 0 , minValue: minValue = 0 , maxValue: maxValue = 100 , valueLabel: valueLabel , isIndeterminate: isIndeterminate , formatOptions: formatOptions = {
        style: 'percent'
    }  } = props;
    let domProps = $9Gha9$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = $9Gha9$reactarialabel.useLabel({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = $9Gha9$reactariautils.clamp(value, minValue, maxValue);
    let percentage = (value - minValue) / (maxValue - minValue);
    let formatter = $9Gha9$reactariai18n.useNumberFormatter(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: $9Gha9$reactariautils.mergeProps(domProps, {
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


$parcel$exportWildcard(module.exports, $23bb4fd04edf5c92$exports);


//# sourceMappingURL=index.js.map