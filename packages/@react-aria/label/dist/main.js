var $3j0Nt$reactariautils = require("@react-aria/utils");

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
var $808be6cfa26ec60e$exports = {};

$parcel$export($808be6cfa26ec60e$exports, "useField", () => $808be6cfa26ec60e$export$294aa081a6c6f55d);
var $178f35d52b8e58b9$exports = {};

$parcel$export($178f35d52b8e58b9$exports, "useLabel", () => $178f35d52b8e58b9$export$8467354a121f1b9f);

function $178f35d52b8e58b9$export$8467354a121f1b9f(props) {
    let { id: id , label: label , 'aria-labelledby': ariaLabelledby , 'aria-label': ariaLabel , labelElementType: labelElementType = 'label'  } = props;
    id = $3j0Nt$reactariautils.useId(id);
    let labelId = $3j0Nt$reactariautils.useId();
    let labelProps = {
    };
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${ariaLabelledby} ${labelId}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = $3j0Nt$reactariautils.useLabels({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



function $808be6cfa26ec60e$export$294aa081a6c6f55d(props) {
    let { description: description , errorMessage: errorMessage , validationState: validationState  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = $178f35d52b8e58b9$export$8467354a121f1b9f(props);
    let descriptionId = $3j0Nt$reactariautils.useSlotId([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    let errorMessageId = $3j0Nt$reactariautils.useSlotId([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    fieldProps = $3j0Nt$reactariautils.mergeProps(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}



$parcel$exportWildcard(module.exports, $808be6cfa26ec60e$exports);
$parcel$exportWildcard(module.exports, $178f35d52b8e58b9$exports);


//# sourceMappingURL=main.js.map
