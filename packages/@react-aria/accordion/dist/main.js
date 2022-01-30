var $21ENe$reactariautils = require("@react-aria/utils");
var $21ENe$reactariabutton = require("@react-aria/button");
var $21ENe$reactariaselection = require("@react-aria/selection");

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
var $8dee829bf3aa8539$exports = {};

$parcel$export($8dee829bf3aa8539$exports, "useAccordionItem", () => $8dee829bf3aa8539$export$dfe72e7a237bd184);
$parcel$export($8dee829bf3aa8539$exports, "useAccordion", () => $8dee829bf3aa8539$export$35e88b08325f7140);



function $8dee829bf3aa8539$export$dfe72e7a237bd184(props, state, ref) {
    let { item: item  } = props;
    let buttonId = $21ENe$reactariautils.useId();
    let regionId = $21ENe$reactariautils.useId();
    let isDisabled = state.disabledKeys.has(item.key);
    let { itemProps: itemProps  } = $21ENe$reactariaselection.useSelectableItem({
        selectionManager: state.selectionManager,
        key: item.key,
        ref: ref
    });
    let { buttonProps: buttonProps  } = $21ENe$reactariabutton.useButton($21ENe$reactariautils.mergeProps(itemProps, {
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
function $8dee829bf3aa8539$export$35e88b08325f7140(props, state, ref) {
    let { listProps: listProps  } = $21ENe$reactariaselection.useSelectableList({
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


$parcel$exportWildcard(module.exports, $8dee829bf3aa8539$exports);


//# sourceMappingURL=main.js.map
