var $1dNtk$reactariautils = require("@react-aria/utils");
var $1dNtk$reactariaselection = require("@react-aria/selection");

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
var $c2cc85dc470e82bd$exports = {};

$parcel$export($c2cc85dc470e82bd$exports, "useSideNav", () => $c2cc85dc470e82bd$export$8323ee170f55f743);


function $c2cc85dc470e82bd$export$8323ee170f55f743(props, state, ref) {
    let { id: id , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabeldBy , shouldFocusWrap: shouldFocusWrap , layout: layout  } = props;
    id = $1dNtk$reactariautils.useId(id);
    let { collectionProps: collectionProps  } = $1dNtk$reactariaselection.useSelectableCollection({
        ref: ref,
        selectionManager: state.selectionManager,
        keyboardDelegate: layout,
        shouldFocusWrap: shouldFocusWrap
    });
    let domProps = $1dNtk$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    return {
        navProps: $1dNtk$reactariautils.mergeProps(domProps, {
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


var $167726651e60405b$exports = {};

$parcel$export($167726651e60405b$exports, "useSideNavItem", () => $167726651e60405b$export$58a6195710010bdf);

function $167726651e60405b$export$58a6195710010bdf(props, state, ref) {
    let { item: item , 'aria-current': ariaCurrent  } = props;
    let { itemProps: itemProps  } = $1dNtk$reactariaselection.useSelectableItem({
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


$parcel$exportWildcard(module.exports, $c2cc85dc470e82bd$exports);
$parcel$exportWildcard(module.exports, $167726651e60405b$exports);


//# sourceMappingURL=main.js.map
