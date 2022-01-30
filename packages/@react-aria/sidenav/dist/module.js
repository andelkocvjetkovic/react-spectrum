import {useId as $j7X54$useId, filterDOMProps as $j7X54$filterDOMProps, mergeProps as $j7X54$mergeProps} from "@react-aria/utils";
import {useSelectableCollection as $j7X54$useSelectableCollection, useSelectableItem as $j7X54$useSelectableItem} from "@react-aria/selection";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5c7dabc4b0fcb539$exports = {};

$parcel$export($5c7dabc4b0fcb539$exports, "useSideNav", () => $5c7dabc4b0fcb539$export$8323ee170f55f743);


function $5c7dabc4b0fcb539$export$8323ee170f55f743(props, state, ref) {
    let { id: id , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabeldBy , shouldFocusWrap: shouldFocusWrap , layout: layout  } = props;
    id = $j7X54$useId(id);
    let { collectionProps: collectionProps  } = $j7X54$useSelectableCollection({
        ref: ref,
        selectionManager: state.selectionManager,
        keyboardDelegate: layout,
        shouldFocusWrap: shouldFocusWrap
    });
    let domProps = $j7X54$filterDOMProps(props, {
        labelable: true
    });
    return {
        navProps: $j7X54$mergeProps(domProps, {
            role: 'navigation',
            id: id
        }),
        listProps: {
            'aria-labelledby': ariaLabeldBy || (ariaLabel ? id : null),
            role: 'list',
            ...collectionProps
        }
    };
}


var $610abdfe97d5664b$exports = {};

$parcel$export($610abdfe97d5664b$exports, "useSideNavItem", () => $610abdfe97d5664b$export$58a6195710010bdf);

function $610abdfe97d5664b$export$58a6195710010bdf(props, state, ref) {
    let { item: item , 'aria-current': ariaCurrent  } = props;
    let { itemProps: itemProps  } = $j7X54$useSelectableItem({
        selectionManager: state.selectionManager,
        key: item.key,
        ref: ref
    });
    let isDisabled = state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(item.key);
    return {
        listItemProps: {
            role: 'listitem'
        },
        listItemLinkProps: {
            role: 'link',
            target: '_self',
            'aria-disabled': isDisabled,
            'aria-current': isSelected ? ariaCurrent || 'page' : undefined,
            ...itemProps
        }
    };
}




export {$5c7dabc4b0fcb539$export$8323ee170f55f743 as useSideNav, $610abdfe97d5664b$export$58a6195710010bdf as useSideNavItem};
//# sourceMappingURL=module.js.map
