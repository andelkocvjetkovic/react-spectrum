var $hxncP$reactariaselection = require("@react-aria/selection");
var $hxncP$reactariafocus = require("@react-aria/focus");
var $hxncP$react = require("react");
var $hxncP$reactariautils = require("@react-aria/utils");
var $hxncP$reactariai18n = require("@react-aria/i18n");

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
var $bca6ccd6c0f0d1c7$exports = {};

$parcel$export($bca6ccd6c0f0d1c7$exports, "useTab", () => $bca6ccd6c0f0d1c7$export$fdf4756d5b8ef90a);
const $e8ba102c56610ecd$export$c5f62239608282b6 = new WeakMap();
function $e8ba102c56610ecd$export$567fc7097e064344(state, key, role) {
    if (typeof key === 'string') key = key.replace(/\s+/g, '');
    let baseId = $e8ba102c56610ecd$export$c5f62239608282b6.get(state);
    return `${baseId}-${role}-${key}`;
}



function $bca6ccd6c0f0d1c7$export$fdf4756d5b8ef90a(props, state, ref) {
    let { key: key , isDisabled: propsDisabled  } = props;
    let { selectionManager: manager , selectedKey: selectedKey  } = state;
    let isSelected = key === selectedKey;
    let isDisabled = propsDisabled || state.disabledKeys.has(key);
    let { itemProps: itemProps  } = $hxncP$reactariaselection.useSelectableItem({
        selectionManager: manager,
        key: key,
        ref: ref,
        isDisabled: isDisabled
    });
    let tabId = $e8ba102c56610ecd$export$567fc7097e064344(state, key, 'tab');
    let tabPanelId = $e8ba102c56610ecd$export$567fc7097e064344(state, key, 'tabpanel');
    let { tabIndex: tabIndex  } = itemProps;
    return {
        tabProps: {
            ...itemProps,
            id: tabId,
            'aria-selected': isSelected,
            'aria-disabled': isDisabled || undefined,
            'aria-controls': isSelected ? tabPanelId : undefined,
            tabIndex: isDisabled ? undefined : tabIndex,
            role: 'tab'
        }
    };
}


var $83205e167d36c1bd$exports = {};

$parcel$export($83205e167d36c1bd$exports, "useTabPanel", () => $83205e167d36c1bd$export$fae0121b5afe572d);




function $83205e167d36c1bd$export$fae0121b5afe572d(props, state, ref) {
    let [tabIndex, setTabIndex] = $hxncP$react.useState(0);
    // The tabpanel should have tabIndex=0 when there are no tabbable elements within it.
    // Otherwise, tabbing from the focused tab should go directly to the first tabbable element
    // within the tabpanel.
    $hxncP$reactariautils.useLayoutEffect(()=>{
        if (ref?.current) {
            let update = ()=>{
                // Detect if there are any tabbable elements and update the tabIndex accordingly.
                let walker = $hxncP$reactariafocus.getFocusableTreeWalker(ref.current, {
                    tabbable: true
                });
                setTabIndex(walker.nextNode() ? undefined : 0);
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    'tabIndex',
                    'disabled'
                ]
            });
            return ()=>{
                observer.disconnect();
            };
        }
    }, [
        ref
    ]);
    const id = $e8ba102c56610ecd$export$567fc7097e064344(state, state?.selectedKey, 'tabpanel');
    const tabPanelProps = $hxncP$reactariautils.useLabels({
        ...props,
        id: id,
        'aria-labelledby': $e8ba102c56610ecd$export$567fc7097e064344(state, state?.selectedKey, 'tab')
    });
    return {
        tabPanelProps: $hxncP$reactariautils.mergeProps(tabPanelProps, {
            tabIndex: tabIndex,
            role: 'tabpanel',
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details']
        })
    };
}


var $082250f9aef6d971$exports = {};

$parcel$export($082250f9aef6d971$exports, "useTabList", () => $082250f9aef6d971$export$773e389e644c5874);



class $d4e272ab55181b4b$export$15010ca3c1abe90b {
    constructor(collection, direction, orientation, disabledKeys = new Set()){
        this.collection = collection;
        this.flipDirection = direction === 'rtl' && orientation === 'horizontal';
        this.orientation = orientation;
        this.disabledKeys = disabledKeys;
    }
    getKeyLeftOf(key) {
        if (this.flipDirection) return this.getNextKey(key);
        else {
            if (this.orientation === 'horizontal') return this.getPreviousKey(key);
            return null;
        }
    }
    getKeyRightOf(key) {
        if (this.flipDirection) return this.getPreviousKey(key);
        else {
            if (this.orientation === 'horizontal') return this.getNextKey(key);
            return null;
        }
    }
    getKeyAbove(key) {
        if (this.orientation === 'vertical') return this.getPreviousKey(key);
        return null;
    }
    getKeyBelow(key) {
        if (this.orientation === 'vertical') return this.getNextKey(key);
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        if (this.disabledKeys.has(key)) key = this.getNextKey(key);
        return key;
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        if (this.disabledKeys.has(key)) key = this.getPreviousKey(key);
        return key;
    }
    getNextKey(key) {
        do {
            key = this.collection.getKeyAfter(key);
            if (key == null) key = this.collection.getFirstKey();
        }while (this.disabledKeys.has(key))
        return key;
    }
    getPreviousKey(key) {
        do {
            key = this.collection.getKeyBefore(key);
            if (key == null) key = this.collection.getLastKey();
        }while (this.disabledKeys.has(key))
        return key;
    }
}




function $082250f9aef6d971$export$773e389e644c5874(props, state, ref) {
    let { orientation: orientation = 'horizontal' , keyboardActivation: keyboardActivation = 'automatic'  } = props;
    let { collection: collection , selectionManager: manager , disabledKeys: disabledKeys  } = state;
    let { direction: direction  } = $hxncP$reactariai18n.useLocale();
    let delegate = $hxncP$react.useMemo(()=>new $d4e272ab55181b4b$export$15010ca3c1abe90b(collection, direction, orientation, disabledKeys)
    , [
        collection,
        disabledKeys,
        orientation,
        direction
    ]);
    let { collectionProps: collectionProps  } = $hxncP$reactariaselection.useSelectableCollection({
        ref: ref,
        selectionManager: manager,
        keyboardDelegate: delegate,
        selectOnFocus: keyboardActivation === 'automatic',
        disallowEmptySelection: true,
        scrollRef: ref
    });
    // Compute base id for all tabs
    let tabsId = $hxncP$reactariautils.useId();
    $e8ba102c56610ecd$export$c5f62239608282b6.set(state, tabsId);
    let tabListLabelProps = $hxncP$reactariautils.useLabels({
        ...props,
        id: tabsId
    });
    return {
        tabListProps: {
            ...$hxncP$reactariautils.mergeProps(collectionProps, tabListLabelProps),
            role: 'tablist',
            'aria-orientation': orientation,
            tabIndex: undefined
        }
    };
}


$parcel$exportWildcard(module.exports, $bca6ccd6c0f0d1c7$exports);
$parcel$exportWildcard(module.exports, $83205e167d36c1bd$exports);
$parcel$exportWildcard(module.exports, $082250f9aef6d971$exports);


//# sourceMappingURL=main.js.map
