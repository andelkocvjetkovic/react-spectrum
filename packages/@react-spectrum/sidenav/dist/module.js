import "./main.css";
import {useStyleProps as $aAYui$useStyleProps, classNames as $aAYui$classNames} from "@react-spectrum/utils";
import {ListLayout as $aAYui$ListLayout} from "@react-stately/layout";
import $aAYui$react, {useMemo as $aAYui$useMemo, useRef as $aAYui$useRef, useContext as $aAYui$useContext, Fragment as $aAYui$Fragment} from "react";
import {useCollator as $aAYui$useCollator, useLocale as $aAYui$useLocale} from "@react-aria/i18n";
import {useSideNav as $aAYui$useSideNav, useSideNavItem as $aAYui$useSideNavItem} from "@react-aria/sidenav";
import {useTreeState as $aAYui$useTreeState} from "@react-stately/tree";
import {VirtualizerItem as $aAYui$VirtualizerItem, Virtualizer as $aAYui$Virtualizer, useVirtualizerItem as $aAYui$useVirtualizerItem, layoutInfoToStyle as $aAYui$layoutInfoToStyle} from "@react-aria/virtualizer";
import {FocusRing as $aAYui$FocusRing} from "@react-aria/focus";
import {mergeProps as $aAYui$mergeProps} from "@react-aria/utils";
import {useHover as $aAYui$useHover} from "@react-aria/interactions";
import {useListBoxSection as $aAYui$useListBoxSection} from "@react-aria/listbox";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $7dc7f9377a750f84$exports = {};

$parcel$export($7dc7f9377a750f84$exports, "SideNav", () => $7dc7f9377a750f84$export$1a35787d6353cf6a);




const $5f84c78b01781ac3$export$33f9eded602e3caf = $aAYui$react.createContext(null);







var $7de13547d0cb35aa$exports = {};

$parcel$export($7de13547d0cb35aa$exports, "spectrum-SideNav", () => $7de13547d0cb35aa$export$ab4aeccb79b26c40, (v) => $7de13547d0cb35aa$export$ab4aeccb79b26c40 = v);
$parcel$export($7de13547d0cb35aa$exports, "spectrum-SideNav-item", () => $7de13547d0cb35aa$export$569596c79bc8aa46, (v) => $7de13547d0cb35aa$export$569596c79bc8aa46 = v);
$parcel$export($7de13547d0cb35aa$exports, "spectrum-SideNav-itemLink", () => $7de13547d0cb35aa$export$4e8c75e01aa6ae07, (v) => $7de13547d0cb35aa$export$4e8c75e01aa6ae07 = v);
$parcel$export($7de13547d0cb35aa$exports, "focus-ring", () => $7de13547d0cb35aa$export$f39a09f249340e2a, (v) => $7de13547d0cb35aa$export$f39a09f249340e2a = v);
$parcel$export($7de13547d0cb35aa$exports, "spectrum-SideNav-itemIcon", () => $7de13547d0cb35aa$export$806518d850a15282, (v) => $7de13547d0cb35aa$export$806518d850a15282 = v);
$parcel$export($7de13547d0cb35aa$exports, "spectrum-SideNav-heading", () => $7de13547d0cb35aa$export$8c136f4f45680036, (v) => $7de13547d0cb35aa$export$8c136f4f45680036 = v);
$parcel$export($7de13547d0cb35aa$exports, "spectrum-SideNav--multiLevel", () => $7de13547d0cb35aa$export$ab86cca252369409, (v) => $7de13547d0cb35aa$export$ab86cca252369409 = v);
$parcel$export($7de13547d0cb35aa$exports, "is-selected", () => $7de13547d0cb35aa$export$1e0fb04f31d3c22a, (v) => $7de13547d0cb35aa$export$1e0fb04f31d3c22a = v);
$parcel$export($7de13547d0cb35aa$exports, "is-active", () => $7de13547d0cb35aa$export$20fd0f7cd4e6112f, (v) => $7de13547d0cb35aa$export$20fd0f7cd4e6112f = v);
$parcel$export($7de13547d0cb35aa$exports, "is-disabled", () => $7de13547d0cb35aa$export$d35bc1e505d1ebbf, (v) => $7de13547d0cb35aa$export$d35bc1e505d1ebbf = v);
$parcel$export($7de13547d0cb35aa$exports, "is-hovered", () => $7de13547d0cb35aa$export$b8813cd5d7824ce7, (v) => $7de13547d0cb35aa$export$b8813cd5d7824ce7 = v);
var $7de13547d0cb35aa$export$ab4aeccb79b26c40;
var $7de13547d0cb35aa$export$569596c79bc8aa46;
var $7de13547d0cb35aa$export$4e8c75e01aa6ae07;
var $7de13547d0cb35aa$export$f39a09f249340e2a;
var $7de13547d0cb35aa$export$806518d850a15282;
var $7de13547d0cb35aa$export$8c136f4f45680036;
var $7de13547d0cb35aa$export$ab86cca252369409;
var $7de13547d0cb35aa$export$1e0fb04f31d3c22a;
var $7de13547d0cb35aa$export$20fd0f7cd4e6112f;
var $7de13547d0cb35aa$export$d35bc1e505d1ebbf;
var $7de13547d0cb35aa$export$b8813cd5d7824ce7;
$7de13547d0cb35aa$export$ab4aeccb79b26c40 = "_spectrum-SideNav_f044ae";
$7de13547d0cb35aa$export$569596c79bc8aa46 = "_spectrum-SideNav-item_f044ae";
$7de13547d0cb35aa$export$4e8c75e01aa6ae07 = "_spectrum-SideNav-itemLink_f044ae";
$7de13547d0cb35aa$export$f39a09f249340e2a = "_focus-ring_f044ae";
$7de13547d0cb35aa$export$806518d850a15282 = "_spectrum-SideNav-itemIcon_f044ae";
$7de13547d0cb35aa$export$8c136f4f45680036 = "_spectrum-SideNav-heading_f044ae";
$7de13547d0cb35aa$export$ab86cca252369409 = "_spectrum-SideNav--multiLevel_f044ae";
$7de13547d0cb35aa$export$1e0fb04f31d3c22a = "_is-selected_f044ae";
$7de13547d0cb35aa$export$20fd0f7cd4e6112f = "_is-active_f044ae";
$7de13547d0cb35aa$export$d35bc1e505d1ebbf = "_is-disabled_f044ae";
$7de13547d0cb35aa$export$b8813cd5d7824ce7 = "_is-hovered_f044ae";




function $340490407a8e3fbb$export$9dad30d25aa3c47f(props) {
    let ref = $aAYui$useRef();
    let { key: key , rendered: rendered  } = props.item;
    let state = $aAYui$useContext($5f84c78b01781ac3$export$33f9eded602e3caf);
    let isSelected = state.selectionManager.isSelected(key);
    let isDisabled = state.disabledKeys.has(key);
    let className = $aAYui$classNames((/*@__PURE__*/$parcel$interopDefault($7de13547d0cb35aa$exports)), 'spectrum-SideNav-item', {
        'is-selected': isSelected,
        'is-disabled': isDisabled
    });
    let { listItemProps: listItemProps , listItemLinkProps: listItemLinkProps  } = $aAYui$useSideNavItem(props, state, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $aAYui$useHover({
        isDisabled: isDisabled
    });
    return(/*#__PURE__*/ $aAYui$react.createElement("div", {
        ...listItemProps,
        className: className
    }, /*#__PURE__*/ $aAYui$react.createElement($aAYui$FocusRing, {
        focusRingClass: $aAYui$classNames((/*@__PURE__*/$parcel$interopDefault($7de13547d0cb35aa$exports)), 'focus-ring')
    }, /*#__PURE__*/ $aAYui$react.createElement("a", {
        ...$aAYui$mergeProps(listItemLinkProps, hoverProps),
        ref: ref,
        className: $aAYui$classNames((/*@__PURE__*/$parcel$interopDefault($7de13547d0cb35aa$exports)), 'spectrum-SideNav-itemLink', {
            'is-hovered': isHovered
        })
    }, rendered))));
}








function $d0163cacdd145b8f$export$d69336337ba3627d(props) {
    let { children: children , reusableView: reusableView , header: header  } = props;
    let item = reusableView.content;
    let { headingProps: headingProps , groupProps: groupProps  } = $aAYui$useListBoxSection({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let headerRef = $aAYui$useRef();
    $aAYui$useVirtualizerItem({
        reusableView: header,
        ref: headerRef
    });
    let { direction: direction  } = $aAYui$useLocale();
    return(/*#__PURE__*/ $aAYui$react.createElement($aAYui$Fragment, null, /*#__PURE__*/ $aAYui$react.createElement("div", {
        role: "presentation",
        ref: headerRef,
        style: $aAYui$layoutInfoToStyle(header.layoutInfo, direction)
    }, item.rendered && /*#__PURE__*/ $aAYui$react.createElement("div", {
        ...headingProps,
        className: $aAYui$classNames((/*@__PURE__*/$parcel$interopDefault($7de13547d0cb35aa$exports)), 'spectrum-SideNav-heading')
    }, item.rendered)), /*#__PURE__*/ $aAYui$react.createElement("div", {
        ...groupProps,
        style: $aAYui$layoutInfoToStyle(reusableView.layoutInfo, direction)
    }, children)));
}







function $7dc7f9377a750f84$export$1a35787d6353cf6a(props) {
    let state = $aAYui$useTreeState(props);
    let collator = $aAYui$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let layout = $aAYui$useMemo(()=>new $aAYui$ListLayout({
            rowHeight: 40,
            collator: collator
        })
    , [
        collator
    ]);
    let ref = $aAYui$useRef();
    let { navProps: navProps , listProps: listProps  } = $aAYui$useSideNav({
        ...props,
        layout: layout
    }, state, ref);
    let { styleProps: styleProps  } = $aAYui$useStyleProps(props);
    layout.collection = state.collection;
    layout.disabledKeys = state.disabledKeys;
    let renderWrapper = (parent, reusableView, children, renderChildren)=>{
        if (reusableView.viewType === 'section') return(/*#__PURE__*/ $aAYui$react.createElement($d0163cacdd145b8f$export$d69336337ba3627d, {
            key: reusableView.key,
            reusableView: reusableView,
            header: children.find((c)=>c.viewType === 'header'
            )
        }, renderChildren(children.filter((c)=>c.viewType === 'item'
        ))));
        return(/*#__PURE__*/ $aAYui$react.createElement($aAYui$VirtualizerItem, {
            key: reusableView.key,
            reusableView: reusableView,
            parent: parent
        }));
    };
    return(/*#__PURE__*/ $aAYui$react.createElement("nav", {
        ...navProps,
        ...styleProps
    }, /*#__PURE__*/ $aAYui$react.createElement($5f84c78b01781ac3$export$33f9eded602e3caf.Provider, {
        value: state
    }, /*#__PURE__*/ $aAYui$react.createElement($aAYui$Virtualizer, {
        ...listProps,
        ref: ref,
        focusedKey: state.selectionManager.focusedKey,
        className: $aAYui$classNames((/*@__PURE__*/$parcel$interopDefault($7de13547d0cb35aa$exports)), 'spectrum-SideNav'),
        layout: layout,
        collection: state.collection,
        renderWrapper: renderWrapper
    }, (type, item)=>{
        if (type === 'item') return(/*#__PURE__*/ $aAYui$react.createElement($340490407a8e3fbb$export$9dad30d25aa3c47f, {
            item: item
        }));
    }))));
}




export {$7dc7f9377a750f84$export$1a35787d6353cf6a as SideNav};
//# sourceMappingURL=module.js.map
