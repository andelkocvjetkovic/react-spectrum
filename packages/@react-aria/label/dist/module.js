import {useSlotId as $8bwqN$useSlotId, mergeProps as $8bwqN$mergeProps, useId as $8bwqN$useId, useLabels as $8bwqN$useLabels} from "@react-aria/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d3e197b5a0cd35c9$exports = {};

$parcel$export($d3e197b5a0cd35c9$exports, "useField", () => $d3e197b5a0cd35c9$export$294aa081a6c6f55d);
var $089245c8aaece4d0$exports = {};

$parcel$export($089245c8aaece4d0$exports, "useLabel", () => $089245c8aaece4d0$export$8467354a121f1b9f);

function $089245c8aaece4d0$export$8467354a121f1b9f(props) {
    let { id: id , label: label , 'aria-labelledby': ariaLabelledby , 'aria-label': ariaLabel , labelElementType: labelElementType = 'label'  } = props;
    id = $8bwqN$useId(id);
    let labelId = $8bwqN$useId();
    let labelProps = {
    };
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${ariaLabelledby} ${labelId}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = $8bwqN$useLabels({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



function $d3e197b5a0cd35c9$export$294aa081a6c6f55d(props) {
    let { description: description , errorMessage: errorMessage , validationState: validationState  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = $089245c8aaece4d0$export$8467354a121f1b9f(props);
    let descriptionId = $8bwqN$useSlotId([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    let errorMessageId = $8bwqN$useSlotId([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    fieldProps = $8bwqN$mergeProps(fieldProps, {
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





export {$d3e197b5a0cd35c9$export$294aa081a6c6f55d as useField, $089245c8aaece4d0$export$8467354a121f1b9f as useLabel};
//# sourceMappingURL=module.js.map
