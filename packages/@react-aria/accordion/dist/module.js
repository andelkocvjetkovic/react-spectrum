import {useId as $chv6f$useId, mergeProps as $chv6f$mergeProps} from "@react-aria/utils";
import {useButton as $chv6f$useButton} from "@react-aria/button";
import {useSelectableItem as $chv6f$useSelectableItem, useSelectableList as $chv6f$useSelectableList} from "@react-aria/selection";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2994c738a8d7d7d9$exports = {};

$parcel$export($2994c738a8d7d7d9$exports, "useAccordionItem", () => $2994c738a8d7d7d9$export$dfe72e7a237bd184);
$parcel$export($2994c738a8d7d7d9$exports, "useAccordion", () => $2994c738a8d7d7d9$export$35e88b08325f7140);



function $2994c738a8d7d7d9$export$dfe72e7a237bd184(props, state, ref) {
    let { item: item  } = props;
    let buttonId = $chv6f$useId();
    let regionId = $chv6f$useId();
    let isDisabled = state.disabledKeys.has(item.key);
    let { itemProps: itemProps  } = $chv6f$useSelectableItem({
        selectionManager: state.selectionManager,
        key: item.key,
        ref: ref
    });
    let { buttonProps: buttonProps  } = $chv6f$useButton($chv6f$mergeProps(itemProps, {
        id: buttonId,
        elementType: 'button',
        isDisabled: isDisabled,
        onPress: ()=>state.toggleKey(item.key)
    }), ref);
    let isExpanded = state.expandedKeys.has(item.key);
    return {
        buttonProps: {
            ...buttonProps,
            'aria-expanded': isExpanded,
            'aria-controls': isExpanded ? regionId : undefined
        },
        regionProps: {
            id: regionId,
            role: 'region',
            'aria-labelledby': buttonId
        }
    };
}
function $2994c738a8d7d7d9$export$35e88b08325f7140(props, state, ref) {
    let { listProps: listProps  } = $chv6f$useSelectableList({
        ...props,
        ...state,
        allowsTabNavigation: true,
        ref: ref
    });
    return {
        accordionProps: {
            ...listProps,
            tabIndex: undefined
        }
    };
}




export {$2994c738a8d7d7d9$export$dfe72e7a237bd184 as useAccordionItem, $2994c738a8d7d7d9$export$35e88b08325f7140 as useAccordion};
//# sourceMappingURL=module.js.map
