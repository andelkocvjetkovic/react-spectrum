import {useSelectableItem as $h3U02$useSelectableItem, useSelectableCollection as $h3U02$useSelectableCollection} from "@react-aria/selection";
import {getFocusableTreeWalker as $h3U02$getFocusableTreeWalker} from "@react-aria/focus";
import {useState as $h3U02$useState, useMemo as $h3U02$useMemo} from "react";
import {useLayoutEffect as $h3U02$useLayoutEffect, useLabels as $h3U02$useLabels, mergeProps as $h3U02$mergeProps, useId as $h3U02$useId} from "@react-aria/utils";
import {useLocale as $h3U02$useLocale} from "@react-aria/i18n";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $184b4f90085af26c$exports = {};

$parcel$export($184b4f90085af26c$exports, "useTab", () => $184b4f90085af26c$export$fdf4756d5b8ef90a);
const $106426b893fe64c5$export$c5f62239608282b6 = new WeakMap();
function $106426b893fe64c5$export$567fc7097e064344(state, key, role) {
    if (typeof key === 'string') key = key.replace(/\s+/g, '');
    let baseId = $106426b893fe64c5$export$c5f62239608282b6.get(state);
    return `${baseId}-${role}-${key}`;
}



function $184b4f90085af26c$export$fdf4756d5b8ef90a(props, state, ref) {
    let { key: key , isDisabled: propsDisabled  } = props;
    let { selectionManager: manager , selectedKey: selectedKey  } = state;
    let isSelected = key === selectedKey;
    let isDisabled = propsDisabled || state.disabledKeys.has(key);
    let { itemProps: itemProps  } = $h3U02$useSelectableItem({
        selectionManager: manager,
        key: key,
        ref: ref,
        isDisabled: isDisabled
    });
    let tabId = $106426b893fe64c5$export$567fc7097e064344(state, key, 'tab');
    let tabPanelId = $106426b893fe64c5$export$567fc7097e064344(state, key, 'tabpanel');
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


var $4583fbfef9273355$exports = {};

$parcel$export($4583fbfef9273355$exports, "useTabPanel", () => $4583fbfef9273355$export$fae0121b5afe572d);




function $4583fbfef9273355$export$fae0121b5afe572d(props, state, ref) {
    let [tabIndex, setTabIndex] = $h3U02$useState(0);
    // The tabpanel should have tabIndex=0 when there are no tabbable elements within it.
    // Otherwise, tabbing from the focused tab should go directly to the first tabbable element
    // within the tabpanel.
    $h3U02$useLayoutEffect(()=>{
        if (ref?.current) {
            let update = ()=>{
                // Detect if there are any tabbable elements and update the tabIndex accordingly.
                let walker = $h3U02$getFocusableTreeWalker(ref.current, {
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
    const id = $106426b893fe64c5$export$567fc7097e064344(state, state?.selectedKey, 'tabpanel');
    const tabPanelProps = $h3U02$useLabels({
        ...props,
        id: id,
        'aria-labelledby': $106426b893fe64c5$export$567fc7097e064344(state, state?.selectedKey, 'tab')
    });
    return {
        tabPanelProps: $h3U02$mergeProps(tabPanelProps, {
            tabIndex: tabIndex,
            role: 'tabpanel',
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details']
        })
    };
}


var $f34b9b0e5fb410d4$exports = {};

$parcel$export($f34b9b0e5fb410d4$exports, "useTabList", () => $f34b9b0e5fb410d4$export$773e389e644c5874);



class $6e3da305df7d9d45$export$15010ca3c1abe90b {
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




function $f34b9b0e5fb410d4$export$773e389e644c5874(props, state, ref) {
    let { orientation: orientation = 'horizontal' , keyboardActivation: keyboardActivation = 'automatic'  } = props;
    let { collection: collection , selectionManager: manager , disabledKeys: disabledKeys  } = state;
    let { direction: direction  } = $h3U02$useLocale();
    let delegate = $h3U02$useMemo(()=>new $6e3da305df7d9d45$export$15010ca3c1abe90b(collection, direction, orientation, disabledKeys)
    , [
        collection,
        disabledKeys,
        orientation,
        direction
    ]);
    let { collectionProps: collectionProps  } = $h3U02$useSelectableCollection({
        ref: ref,
        selectionManager: manager,
        keyboardDelegate: delegate,
        selectOnFocus: keyboardActivation === 'automatic',
        disallowEmptySelection: true,
        scrollRef: ref
    });
    // Compute base id for all tabs
    let tabsId = $h3U02$useId();
    $106426b893fe64c5$export$c5f62239608282b6.set(state, tabsId);
    let tabListLabelProps = $h3U02$useLabels({
        ...props,
        id: tabsId
    });
    return {
        tabListProps: {
            ...$h3U02$mergeProps(collectionProps, tabListLabelProps),
            role: 'tablist',
            'aria-orientation': orientation,
            tabIndex: undefined
        }
    };
}




export {$184b4f90085af26c$export$fdf4756d5b8ef90a as useTab, $4583fbfef9273355$export$fae0121b5afe572d as useTabPanel, $f34b9b0e5fb410d4$export$773e389e644c5874 as useTabList};
//# sourceMappingURL=module.js.map
