import "./main.css";
import {Item as $df18e14e8c198c94$re_export$Item, useCollection as $5gce1$useCollection} from "@react-stately/collections";
import {useDOMRef as $5gce1$useDOMRef, useStyleProps as $5gce1$useStyleProps, classNames as $5gce1$classNames, SlotProvider as $5gce1$SlotProvider, unwrapDOMRef as $5gce1$unwrapDOMRef} from "@react-spectrum/utils";
import {useValueEffect as $5gce1$useValueEffect, useResizeObserver as $5gce1$useResizeObserver, useId as $5gce1$useId, filterDOMProps as $5gce1$filterDOMProps, mergeProps as $5gce1$mergeProps, useLayoutEffect as $5gce1$useLayoutEffect} from "@react-aria/utils";
import {FocusRing as $5gce1$FocusRing} from "@react-aria/focus";
import {Picker as $5gce1$Picker, Item as $5gce1$Item} from "@react-spectrum/picker";
import {ListCollection as $5gce1$ListCollection} from "@react-stately/list";
import $5gce1$react, {useRef as $5gce1$useRef, useState as $5gce1$useState, useEffect as $5gce1$useEffect, useCallback as $5gce1$useCallback, useContext as $5gce1$useContext} from "react";
import {useTabListState as $5gce1$useTabListState} from "@react-stately/tabs";
import {Text as $5gce1$Text} from "@react-spectrum/text";
import {useHover as $5gce1$useHover} from "@react-aria/interactions";
import {useLocale as $5gce1$useLocale} from "@react-aria/i18n";
import {useProviderProps as $5gce1$useProviderProps, useProvider as $5gce1$useProvider} from "@react-spectrum/provider";
import {useTab as $5gce1$useTab, useTabList as $5gce1$useTabList, useTabPanel as $5gce1$useTabPanel} from "@react-aria/tabs";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d84a127869c9f99c$exports = {};

$parcel$export($d84a127869c9f99c$exports, "TabList", () => $d84a127869c9f99c$export$e51a686c67fdaa2d);
$parcel$export($d84a127869c9f99c$exports, "TabPanels", () => $d84a127869c9f99c$export$5dae8d435677f210);
$parcel$export($d84a127869c9f99c$exports, "Tabs", () => $d84a127869c9f99c$export$b2539bed5023c21c);







var $2e37edec9b083c9d$exports = {};

$parcel$export($2e37edec9b083c9d$exports, "spectrum-TabsPanel", () => $2e37edec9b083c9d$export$34f1a65c57bb7bb, (v) => $2e37edec9b083c9d$export$34f1a65c57bb7bb = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-TabsPanel--horizontal", () => $2e37edec9b083c9d$export$778fb839eaa0528c, (v) => $2e37edec9b083c9d$export$778fb839eaa0528c = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-TabsPanel--vertical", () => $2e37edec9b083c9d$export$9a6e2fb72c648072, (v) => $2e37edec9b083c9d$export$9a6e2fb72c648072 = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs", () => $2e37edec9b083c9d$export$35c105c0d9c8e56f, (v) => $2e37edec9b083c9d$export$35c105c0d9c8e56f = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs-item", () => $2e37edec9b083c9d$export$123e4c01a5440a3e, (v) => $2e37edec9b083c9d$export$123e4c01a5440a3e = v);
$parcel$export($2e37edec9b083c9d$exports, "is-disabled", () => $2e37edec9b083c9d$export$d35bc1e505d1ebbf, (v) => $2e37edec9b083c9d$export$d35bc1e505d1ebbf = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs-itemLabel", () => $2e37edec9b083c9d$export$1f253edac4b98526, (v) => $2e37edec9b083c9d$export$1f253edac4b98526 = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Icon", () => $2e37edec9b083c9d$export$d374b04f30360026, (v) => $2e37edec9b083c9d$export$d374b04f30360026 = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs-selectionIndicator", () => $2e37edec9b083c9d$export$a115f9117a19563e, (v) => $2e37edec9b083c9d$export$a115f9117a19563e = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs--horizontal", () => $2e37edec9b083c9d$export$229f1ac4d3d38f0e, (v) => $2e37edec9b083c9d$export$229f1ac4d3d38f0e = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs--compact", () => $2e37edec9b083c9d$export$e15c78184ee03abe, (v) => $2e37edec9b083c9d$export$e15c78184ee03abe = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs--isCollapsed", () => $2e37edec9b083c9d$export$ea514cd060922d6b, (v) => $2e37edec9b083c9d$export$ea514cd060922d6b = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs--quiet", () => $2e37edec9b083c9d$export$831e830d5828d42b, (v) => $2e37edec9b083c9d$export$831e830d5828d42b = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-Tabs--vertical", () => $2e37edec9b083c9d$export$e415005be3957065, (v) => $2e37edec9b083c9d$export$e415005be3957065 = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-TabsPanel-collapseWrapper", () => $2e37edec9b083c9d$export$e09869956b4c96f2, (v) => $2e37edec9b083c9d$export$e09869956b4c96f2 = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-TabsPanel-tabs", () => $2e37edec9b083c9d$export$4a157a691c854e23, (v) => $2e37edec9b083c9d$export$4a157a691c854e23 = v);
$parcel$export($2e37edec9b083c9d$exports, "spectrum-TabsPanel-tabpanel", () => $2e37edec9b083c9d$export$acb5da0970288266, (v) => $2e37edec9b083c9d$export$acb5da0970288266 = v);
$parcel$export($2e37edec9b083c9d$exports, "focus-ring", () => $2e37edec9b083c9d$export$f39a09f249340e2a, (v) => $2e37edec9b083c9d$export$f39a09f249340e2a = v);
$parcel$export($2e37edec9b083c9d$exports, "is-hovered", () => $2e37edec9b083c9d$export$b8813cd5d7824ce7, (v) => $2e37edec9b083c9d$export$b8813cd5d7824ce7 = v);
$parcel$export($2e37edec9b083c9d$exports, "is-selected", () => $2e37edec9b083c9d$export$1e0fb04f31d3c22a, (v) => $2e37edec9b083c9d$export$1e0fb04f31d3c22a = v);
var $2e37edec9b083c9d$export$34f1a65c57bb7bb;
var $2e37edec9b083c9d$export$778fb839eaa0528c;
var $2e37edec9b083c9d$export$9a6e2fb72c648072;
var $2e37edec9b083c9d$export$35c105c0d9c8e56f;
var $2e37edec9b083c9d$export$123e4c01a5440a3e;
var $2e37edec9b083c9d$export$d35bc1e505d1ebbf;
var $2e37edec9b083c9d$export$1f253edac4b98526;
var $2e37edec9b083c9d$export$d374b04f30360026;
var $2e37edec9b083c9d$export$a115f9117a19563e;
var $2e37edec9b083c9d$export$229f1ac4d3d38f0e;
var $2e37edec9b083c9d$export$e15c78184ee03abe;
var $2e37edec9b083c9d$export$ea514cd060922d6b;
var $2e37edec9b083c9d$export$831e830d5828d42b;
var $2e37edec9b083c9d$export$e415005be3957065;
var $2e37edec9b083c9d$export$e09869956b4c96f2;
var $2e37edec9b083c9d$export$4a157a691c854e23;
var $2e37edec9b083c9d$export$acb5da0970288266;
var $2e37edec9b083c9d$export$f39a09f249340e2a;
var $2e37edec9b083c9d$export$b8813cd5d7824ce7;
var $2e37edec9b083c9d$export$1e0fb04f31d3c22a;
$2e37edec9b083c9d$export$34f1a65c57bb7bb = "_spectrum-TabsPanel_3e140b";
$2e37edec9b083c9d$export$778fb839eaa0528c = "_spectrum-TabsPanel--horizontal_3e140b";
$2e37edec9b083c9d$export$9a6e2fb72c648072 = "_spectrum-TabsPanel--vertical_3e140b";
$2e37edec9b083c9d$export$35c105c0d9c8e56f = "_spectrum-Tabs_3e140b";
$2e37edec9b083c9d$export$123e4c01a5440a3e = "_spectrum-Tabs-item_3e140b";
$2e37edec9b083c9d$export$d35bc1e505d1ebbf = "_is-disabled_3e140b";
$2e37edec9b083c9d$export$1f253edac4b98526 = "_spectrum-Tabs-itemLabel_3e140b";
$2e37edec9b083c9d$export$d374b04f30360026 = "_spectrum-Icon_3e140b";
$2e37edec9b083c9d$export$a115f9117a19563e = "_spectrum-Tabs-selectionIndicator_3e140b";
$2e37edec9b083c9d$export$229f1ac4d3d38f0e = "_spectrum-Tabs--horizontal_3e140b";
$2e37edec9b083c9d$export$e15c78184ee03abe = "_spectrum-Tabs--compact_3e140b";
$2e37edec9b083c9d$export$ea514cd060922d6b = "_spectrum-Tabs--isCollapsed_3e140b";
$2e37edec9b083c9d$export$831e830d5828d42b = "_spectrum-Tabs--quiet_3e140b";
$2e37edec9b083c9d$export$e415005be3957065 = "_spectrum-Tabs--vertical_3e140b";
$2e37edec9b083c9d$export$e09869956b4c96f2 = "_spectrum-TabsPanel-collapseWrapper_3e140b";
$2e37edec9b083c9d$export$4a157a691c854e23 = "_spectrum-TabsPanel-tabs_3e140b";
$2e37edec9b083c9d$export$acb5da0970288266 = "_spectrum-TabsPanel-tabpanel_3e140b";
$2e37edec9b083c9d$export$f39a09f249340e2a = "_focus-ring_3e140b";
$2e37edec9b083c9d$export$b8813cd5d7824ce7 = "_is-hovered_3e140b";
$2e37edec9b083c9d$export$1e0fb04f31d3c22a = "_is-selected_3e140b";










const $d84a127869c9f99c$var$TabContext = /*#__PURE__*/ $5gce1$react.createContext(null);
function $d84a127869c9f99c$var$Tabs(props, ref) {
    props = $5gce1$useProviderProps(props);
    let { orientation: orientation = 'horizontal' , density: density = 'regular' , children: children , ...otherProps } = props;
    let domRef = $5gce1$useDOMRef(ref);
    let tablistRef = $5gce1$useRef();
    let wrapperRef = $5gce1$useRef();
    let { direction: direction  } = $5gce1$useLocale();
    let { styleProps: styleProps  } = $5gce1$useStyleProps(otherProps);
    let [collapse, setCollapse] = $5gce1$useValueEffect(false);
    let [selectedTab1, setSelectedTab] = $5gce1$useState();
    const [tabListState, setTabListState] = $5gce1$useState(null);
    $5gce1$useEffect(()=>{
        if (tablistRef.current) {
            let selectedTab = tablistRef.current.querySelector(`[data-key="${tabListState?.selectedKey}"]`);
            if (selectedTab != null) setSelectedTab(selectedTab);
        }
    // collapse is in the dep array so selectedTab can be updated for TabLine positioning
    }, [
        children,
        tabListState?.selectedKey,
        collapse,
        tablistRef
    ]);
    let checkShouldCollapse = $5gce1$useCallback(()=>{
        let computeShouldCollapse = ()=>{
            if (wrapperRef.current) {
                let tabsComponent = wrapperRef.current;
                let tabs = tablistRef.current.querySelectorAll('[role="tab"]');
                let lastTab = tabs[tabs.length - 1];
                let end = direction === 'rtl' ? 'left' : 'right';
                let farEdgeTabList = tabsComponent.getBoundingClientRect()[end];
                let farEdgeLastTab = lastTab?.getBoundingClientRect()[end];
                let shouldCollapse = direction === 'rtl' ? farEdgeLastTab < farEdgeTabList : farEdgeTabList < farEdgeLastTab;
                return shouldCollapse;
            }
        };
        if (orientation !== 'vertical') setCollapse(function*() {
            // Make Tabs render in non-collapsed state
            yield false;
            // Compute if Tabs should collapse and update
            yield computeShouldCollapse();
        });
    }, [
        tablistRef,
        wrapperRef,
        direction,
        orientation,
        setCollapse
    ]);
    $5gce1$useEffect(()=>{
        checkShouldCollapse();
    }, [
        children,
        checkShouldCollapse
    ]);
    $5gce1$useResizeObserver({
        ref: wrapperRef,
        onResize: checkShouldCollapse
    });
    let tabPanelProps = {
        'aria-labelledby': undefined
    };
    // When the tabs are collapsed, the tabPanel should be labelled by the Picker button element.
    let collapsibleTabListId = $5gce1$useId();
    if (collapse && orientation !== 'vertical') tabPanelProps['aria-labelledby'] = collapsibleTabListId;
    return(/*#__PURE__*/ $5gce1$react.createElement($d84a127869c9f99c$var$TabContext.Provider, {
        value: {
            tabProps: {
                ...props,
                orientation: orientation,
                density: density
            },
            tabState: {
                tabListState: tabListState,
                setTabListState: setTabListState,
                selectedTab: selectedTab1,
                collapse: collapse
            },
            refs: {
                tablistRef: tablistRef,
                wrapperRef: wrapperRef
            },
            tabPanelProps: tabPanelProps
        }
    }, /*#__PURE__*/ $5gce1$react.createElement("div", {
        ...$5gce1$filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef,
        className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-TabsPanel', `spectrum-TabsPanel--${orientation}`, styleProps.className)
    }, props.children)));
}
// @private
function $d84a127869c9f99c$var$Tab(props) {
    let { item: item , state: state , isDisabled: propsDisabled  } = props;
    let { key: key , rendered: rendered  } = item;
    let isDisabled = propsDisabled || state.disabledKeys.has(key);
    let ref = $5gce1$useRef();
    let { tabProps: tabProps  } = $5gce1$useTab({
        key: key,
        isDisabled: isDisabled
    }, state, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $5gce1$useHover({
        ...props
    });
    let isSelected = state.selectedKey === key;
    let domProps = $5gce1$filterDOMProps(item.props);
    delete domProps.id;
    return(/*#__PURE__*/ $5gce1$react.createElement($5gce1$FocusRing, {
        focusRingClass: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'focus-ring')
    }, /*#__PURE__*/ $5gce1$react.createElement("div", {
        ...$5gce1$mergeProps(tabProps, hoverProps, domProps),
        ref: ref,
        className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-Tabs-item', {
            'is-selected': isSelected,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        })
    }, /*#__PURE__*/ $5gce1$react.createElement($5gce1$SlotProvider, {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-Icon')
            },
            text: {
                UNSAFE_className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-Tabs-itemLabel')
            }
        }
    }, typeof rendered === 'string' ? /*#__PURE__*/ $5gce1$react.createElement($5gce1$Text, null, rendered) : rendered))));
}
// @private
function $d84a127869c9f99c$var$TabLine(props) {
    let { orientation: orientation , selectedTab: // Is either the tab node (non-collapsed) or the picker node (collapsed)
    selectedTab , selectedKey: // selectedKey is provided so that the TabLine styles are updated when the TabPicker's width updates from a selection change
    selectedKey  } = props;
    let { direction: direction  } = $5gce1$useLocale();
    let { scale: scale  } = $5gce1$useProvider();
    let [style, setStyle] = $5gce1$useState({
        width: undefined,
        height: undefined
    });
    $5gce1$useLayoutEffect(()=>{
        if (selectedTab) {
            let styleObj = {
                transform: undefined,
                width: undefined,
                height: undefined
            };
            // In RTL, calculate the transform from the right edge of the tablist so that resizing the window doesn't break the Tabline position due to offsetLeft changes
            let offset = direction === 'rtl' ? -1 * (selectedTab.offsetParent?.offsetWidth - selectedTab.offsetWidth - selectedTab.offsetLeft) : selectedTab.offsetLeft;
            styleObj.transform = orientation === 'vertical' ? `translateY(${selectedTab.offsetTop}px)` : `translateX(${offset}px)`;
            if (orientation === 'horizontal') styleObj.width = `${selectedTab.offsetWidth}px`;
            else styleObj.height = `${selectedTab.offsetHeight}px`;
            setStyle(styleObj);
        }
    }, [
        direction,
        setStyle,
        selectedTab,
        orientation,
        scale,
        selectedKey
    ]);
    return(/*#__PURE__*/ $5gce1$react.createElement("div", {
        className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-Tabs-selectionIndicator'),
        role: "presentation",
        style: style
    }));
}
function $d84a127869c9f99c$export$e51a686c67fdaa2d(props) {
    const tabContext = $5gce1$useContext($d84a127869c9f99c$var$TabContext);
    const { refs: refs , tabState: tabState , tabProps: tabProps , tabPanelProps: tabPanelProps  } = tabContext;
    const { isQuiet: isQuiet , density: density , isDisabled: isDisabled , orientation: orientation  } = tabProps;
    const { selectedTab: selectedTab , collapse: collapse , setTabListState: setTabListState  } = tabState;
    const { tablistRef: tablistRef , wrapperRef: wrapperRef  } = refs;
    // Pass original Tab props but override children to create the collection.
    const state = $5gce1$useTabListState({
        ...tabProps,
        children: props.children
    });
    let { styleProps: styleProps  } = $5gce1$useStyleProps(props);
    const { tabListProps: tabListProps  } = $5gce1$useTabList({
        ...tabProps,
        ...props
    }, state, tablistRef);
    $5gce1$useEffect(()=>{
        // Passing back to root as useTabPanel needs the TabListState
        setTabListState(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        state.disabledKeys,
        state.selectedItem,
        state.selectedKey,
        props.children
    ]);
    let stylePropsForVertical = orientation === 'vertical' ? styleProps : {
    };
    let tabListclassName = $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-TabsPanel-tabs');
    const tabContent = /*#__PURE__*/ $5gce1$react.createElement("div", {
        ...stylePropsForVertical,
        ...tabListProps,
        ref: tablistRef,
        className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-Tabs', `spectrum-Tabs--${orientation}`, tabListclassName, {
            'spectrum-Tabs--quiet': isQuiet,
            ['spectrum-Tabs--compact']: density === 'compact'
        }, orientation === 'vertical' && styleProps.className)
    }, [
        ...state.collection
    ].map((item)=>/*#__PURE__*/ $5gce1$react.createElement($d84a127869c9f99c$var$Tab, {
            key: item.key,
            item: item,
            state: state,
            isDisabled: isDisabled,
            orientation: orientation
        })
    ), /*#__PURE__*/ $5gce1$react.createElement($d84a127869c9f99c$var$TabLine, {
        orientation: orientation,
        selectedTab: selectedTab
    }));
    if (orientation === 'vertical') return tabContent;
    else return(/*#__PURE__*/ $5gce1$react.createElement("div", {
        ...styleProps,
        ref: wrapperRef,
        className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-TabsPanel-collapseWrapper', styleProps.className)
    }, collapse ? /*#__PURE__*/ $5gce1$react.createElement($d84a127869c9f99c$var$TabPicker, {
        ...props,
        ...tabProps,
        id: tabPanelProps['aria-labelledby'],
        state: state,
        className: tabListclassName
    }) : tabContent));
}
function $d84a127869c9f99c$export$5dae8d435677f210(props) {
    const { tabState: tabState , tabProps: tabProps  } = $5gce1$useContext($d84a127869c9f99c$var$TabContext);
    const { tabListState: tabListState  } = tabState;
    const factory = (nodes)=>new $5gce1$ListCollection(nodes)
    ;
    const collection = $5gce1$useCollection({
        items: tabProps.items,
        ...props
    }, factory, {
        suppressTextValueWarning: true
    });
    const selectedItem = tabListState ? collection.getItem(tabListState.selectedKey) : null;
    return(/*#__PURE__*/ $5gce1$react.createElement($d84a127869c9f99c$var$TabPanel, {
        ...props,
        key: tabListState?.selectedKey
    }, selectedItem && selectedItem.props.children));
}
// @private
function $d84a127869c9f99c$var$TabPanel(props) {
    const { tabState: tabState , tabPanelProps: ctxTabPanelProps  } = $5gce1$useContext($d84a127869c9f99c$var$TabContext);
    const { tabListState: tabListState  } = tabState;
    let ref = $5gce1$useRef();
    const { tabPanelProps: tabPanelProps  } = $5gce1$useTabPanel(props, tabListState, ref);
    let { styleProps: styleProps  } = $5gce1$useStyleProps(props);
    if (ctxTabPanelProps['aria-labelledby']) tabPanelProps['aria-labelledby'] = ctxTabPanelProps['aria-labelledby'];
    return(/*#__PURE__*/ $5gce1$react.createElement($5gce1$FocusRing, {
        focusRingClass: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'focus-ring')
    }, /*#__PURE__*/ $5gce1$react.createElement("div", {
        ...styleProps,
        ...tabPanelProps,
        ref: ref,
        className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-TabsPanel-tabpanel', styleProps.className)
    }, props.children)));
}
function $d84a127869c9f99c$var$TabPicker(props) {
    let { isDisabled: isDisabled , isQuiet: isQuiet , state: state , 'aria-labelledby': ariaLabeledBy , 'aria-label': ariaLabel , density: density , className: className , id: id  } = props;
    let ref = $5gce1$useRef();
    let [pickerNode, setPickerNode] = $5gce1$useState(null);
    $5gce1$useEffect(()=>{
        let node = $5gce1$unwrapDOMRef(ref);
        setPickerNode(node.current);
    }, [
        ref
    ]);
    let items = [
        ...state.collection
    ].map((item)=>({
            rendered: item.rendered,
            textValue: item.textValue,
            id: item.key
        })
    );
    let pickerProps = {
        'aria-labelledby': ariaLabeledBy,
        'aria-label': ariaLabel
    };
    // TODO: Figure out if tabListProps should go onto the div here, v2 doesn't do it
    return(/*#__PURE__*/ $5gce1$react.createElement("div", {
        className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-Tabs', 'spectrum-Tabs--horizontal', 'spectrum-Tabs--isCollapsed', {
            'spectrum-Tabs--quiet': isQuiet,
            ['spectrum-Tabs--compact']: density === 'compact'
        }, className)
    }, /*#__PURE__*/ $5gce1$react.createElement($5gce1$SlotProvider, {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'spectrum-Icon')
            },
            button: {
                focusRingClass: $5gce1$classNames((/*@__PURE__*/$parcel$interopDefault($2e37edec9b083c9d$exports)), 'focus-ring')
            }
        }
    }, /*#__PURE__*/ $5gce1$react.createElement($5gce1$Picker, {
        ...pickerProps,
        id: id,
        items: items,
        ref: ref,
        isQuiet: true,
        isDisabled: isDisabled,
        selectedKey: state.selectedKey,
        disabledKeys: state.disabledKeys,
        onSelectionChange: state.setSelectedKey
    }, (item)=>/*#__PURE__*/ $5gce1$react.createElement($5gce1$Item, {
            textValue: item.textValue
        }, item.rendered)
    ), pickerNode && /*#__PURE__*/ $5gce1$react.createElement($d84a127869c9f99c$var$TabLine, {
        orientation: "horizontal",
        selectedTab: pickerNode,
        selectedKey: state.selectedKey
    }))));
}
/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */ // forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const $d84a127869c9f99c$export$b2539bed5023c21c = /*#__PURE__*/ $5gce1$react.forwardRef($d84a127869c9f99c$var$Tabs);





export {$df18e14e8c198c94$re_export$Item as Item, $d84a127869c9f99c$export$e51a686c67fdaa2d as TabList, $d84a127869c9f99c$export$5dae8d435677f210 as TabPanels, $d84a127869c9f99c$export$b2539bed5023c21c as Tabs};
//# sourceMappingURL=module.js.map
