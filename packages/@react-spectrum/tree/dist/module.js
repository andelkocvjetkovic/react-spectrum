import "./main.css";
import $8x8rE$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {classNames as $8x8rE$classNames} from "@react-spectrum/utils";
import {FocusRing as $8x8rE$FocusRing} from "@react-aria/focus";
import {Item as $bff4b534a1c5785d$re_export$Item, Section as $bff4b534a1c5785d$re_export$Section} from "@react-stately/collections";
import {ListLayout as $8x8rE$ListLayout} from "@react-stately/layout";
import $8x8rE$react, {useMemo as $8x8rE$useMemo, useRef as $8x8rE$useRef} from "react";
import {useTreeState as $8x8rE$useTreeState} from "@react-stately/tree";
import {useSelectableCollection as $8x8rE$useSelectableCollection, useSelectableItem as $8x8rE$useSelectableItem} from "@react-aria/selection";
import {Virtualizer as $8x8rE$Virtualizer} from "@react-aria/virtualizer";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bff4b534a1c5785d$exports = {};

$parcel$export($bff4b534a1c5785d$exports, "Tree", () => $bff4b534a1c5785d$export$7fbedc92909ed28e);
$parcel$export($bff4b534a1c5785d$exports, "Item", () => $bff4b534a1c5785d$re_export$Item);
$parcel$export($bff4b534a1c5785d$exports, "Section", () => $bff4b534a1c5785d$re_export$Section);






var $2a3cb1ac151fa431$exports = {};

$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView", () => $2a3cb1ac151fa431$export$c8ee247f0498b012, (v) => $2a3cb1ac151fa431$export$c8ee247f0498b012 = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item", () => $2a3cb1ac151fa431$export$541bb5fe9e9db859, (v) => $2a3cb1ac151fa431$export$541bb5fe9e9db859 = v);
$parcel$export($2a3cb1ac151fa431$exports, "is-open", () => $2a3cb1ac151fa431$export$a9781837241c946d, (v) => $2a3cb1ac151fa431$export$a9781837241c946d = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-itemLink", () => $2a3cb1ac151fa431$export$f5505b9cdf7c140e, (v) => $2a3cb1ac151fa431$export$f5505b9cdf7c140e = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-indicator", () => $2a3cb1ac151fa431$export$d7d6ce5312d776fc, (v) => $2a3cb1ac151fa431$export$d7d6ce5312d776fc = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-Icon", () => $2a3cb1ac151fa431$export$d374b04f30360026, (v) => $2a3cb1ac151fa431$export$d374b04f30360026 = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent1", () => $2a3cb1ac151fa431$export$a1e8c3de0881bea8, (v) => $2a3cb1ac151fa431$export$a1e8c3de0881bea8 = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent2", () => $2a3cb1ac151fa431$export$a170d28a74012b02, (v) => $2a3cb1ac151fa431$export$a170d28a74012b02 = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent3", () => $2a3cb1ac151fa431$export$c19270ea6bad872f, (v) => $2a3cb1ac151fa431$export$c19270ea6bad872f = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent4", () => $2a3cb1ac151fa431$export$e0da65d0dfeb0756, (v) => $2a3cb1ac151fa431$export$e0da65d0dfeb0756 = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent5", () => $2a3cb1ac151fa431$export$4c8ca8e128f8c97d, (v) => $2a3cb1ac151fa431$export$4c8ca8e128f8c97d = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent6", () => $2a3cb1ac151fa431$export$7a7fd99371feb3dd, (v) => $2a3cb1ac151fa431$export$7a7fd99371feb3dd = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent7", () => $2a3cb1ac151fa431$export$5c13c07ff07c091e, (v) => $2a3cb1ac151fa431$export$5c13c07ff07c091e = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent8", () => $2a3cb1ac151fa431$export$8bac51bd03b02397, (v) => $2a3cb1ac151fa431$export$8bac51bd03b02397 = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent9", () => $2a3cb1ac151fa431$export$422a6b0e1d437acb, (v) => $2a3cb1ac151fa431$export$422a6b0e1d437acb = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-item--indent10", () => $2a3cb1ac151fa431$export$1ec96773301484c8, (v) => $2a3cb1ac151fa431$export$1ec96773301484c8 = v);
$parcel$export($2a3cb1ac151fa431$exports, "spectrum-TreeView-heading", () => $2a3cb1ac151fa431$export$18076d19b5ee62fc, (v) => $2a3cb1ac151fa431$export$18076d19b5ee62fc = v);
$parcel$export($2a3cb1ac151fa431$exports, "is-disabled", () => $2a3cb1ac151fa431$export$d35bc1e505d1ebbf, (v) => $2a3cb1ac151fa431$export$d35bc1e505d1ebbf = v);
$parcel$export($2a3cb1ac151fa431$exports, "is-hovered", () => $2a3cb1ac151fa431$export$b8813cd5d7824ce7, (v) => $2a3cb1ac151fa431$export$b8813cd5d7824ce7 = v);
$parcel$export($2a3cb1ac151fa431$exports, "is-selected", () => $2a3cb1ac151fa431$export$1e0fb04f31d3c22a, (v) => $2a3cb1ac151fa431$export$1e0fb04f31d3c22a = v);
$parcel$export($2a3cb1ac151fa431$exports, "focus-ring", () => $2a3cb1ac151fa431$export$f39a09f249340e2a, (v) => $2a3cb1ac151fa431$export$f39a09f249340e2a = v);
$parcel$export($2a3cb1ac151fa431$exports, "is-drop-target", () => $2a3cb1ac151fa431$export$d8467f38d2d00bd0, (v) => $2a3cb1ac151fa431$export$d8467f38d2d00bd0 = v);
var $2a3cb1ac151fa431$export$c8ee247f0498b012;
var $2a3cb1ac151fa431$export$541bb5fe9e9db859;
var $2a3cb1ac151fa431$export$a9781837241c946d;
var $2a3cb1ac151fa431$export$f5505b9cdf7c140e;
var $2a3cb1ac151fa431$export$d7d6ce5312d776fc;
var $2a3cb1ac151fa431$export$d374b04f30360026;
var $2a3cb1ac151fa431$export$a1e8c3de0881bea8;
var $2a3cb1ac151fa431$export$a170d28a74012b02;
var $2a3cb1ac151fa431$export$c19270ea6bad872f;
var $2a3cb1ac151fa431$export$e0da65d0dfeb0756;
var $2a3cb1ac151fa431$export$4c8ca8e128f8c97d;
var $2a3cb1ac151fa431$export$7a7fd99371feb3dd;
var $2a3cb1ac151fa431$export$5c13c07ff07c091e;
var $2a3cb1ac151fa431$export$8bac51bd03b02397;
var $2a3cb1ac151fa431$export$422a6b0e1d437acb;
var $2a3cb1ac151fa431$export$1ec96773301484c8;
var $2a3cb1ac151fa431$export$18076d19b5ee62fc;
var $2a3cb1ac151fa431$export$d35bc1e505d1ebbf;
var $2a3cb1ac151fa431$export$b8813cd5d7824ce7;
var $2a3cb1ac151fa431$export$1e0fb04f31d3c22a;
var $2a3cb1ac151fa431$export$f39a09f249340e2a;
var $2a3cb1ac151fa431$export$d8467f38d2d00bd0;
$2a3cb1ac151fa431$export$c8ee247f0498b012 = "_spectrum-TreeView_ecf796";
$2a3cb1ac151fa431$export$541bb5fe9e9db859 = "_spectrum-TreeView-item_ecf796";
$2a3cb1ac151fa431$export$a9781837241c946d = "_is-open_ecf796";
$2a3cb1ac151fa431$export$f5505b9cdf7c140e = "_spectrum-TreeView-itemLink_ecf796";
$2a3cb1ac151fa431$export$d7d6ce5312d776fc = "_spectrum-TreeView-indicator_ecf796";
$2a3cb1ac151fa431$export$d374b04f30360026 = "_spectrum-Icon_ecf796";
$2a3cb1ac151fa431$export$a1e8c3de0881bea8 = "_spectrum-TreeView-item--indent1_ecf796";
$2a3cb1ac151fa431$export$a170d28a74012b02 = "_spectrum-TreeView-item--indent2_ecf796";
$2a3cb1ac151fa431$export$c19270ea6bad872f = "_spectrum-TreeView-item--indent3_ecf796";
$2a3cb1ac151fa431$export$e0da65d0dfeb0756 = "_spectrum-TreeView-item--indent4_ecf796";
$2a3cb1ac151fa431$export$4c8ca8e128f8c97d = "_spectrum-TreeView-item--indent5_ecf796";
$2a3cb1ac151fa431$export$7a7fd99371feb3dd = "_spectrum-TreeView-item--indent6_ecf796";
$2a3cb1ac151fa431$export$5c13c07ff07c091e = "_spectrum-TreeView-item--indent7_ecf796";
$2a3cb1ac151fa431$export$8bac51bd03b02397 = "_spectrum-TreeView-item--indent8_ecf796";
$2a3cb1ac151fa431$export$422a6b0e1d437acb = "_spectrum-TreeView-item--indent9_ecf796";
$2a3cb1ac151fa431$export$1ec96773301484c8 = "_spectrum-TreeView-item--indent10_ecf796";
$2a3cb1ac151fa431$export$18076d19b5ee62fc = "_spectrum-TreeView-heading_ecf796";
$2a3cb1ac151fa431$export$d35bc1e505d1ebbf = "_is-disabled_ecf796";
$2a3cb1ac151fa431$export$b8813cd5d7824ce7 = "_is-hovered_ecf796";
$2a3cb1ac151fa431$export$1e0fb04f31d3c22a = "_is-selected_ecf796";
$2a3cb1ac151fa431$export$f39a09f249340e2a = "_focus-ring_ecf796";
$2a3cb1ac151fa431$export$d8467f38d2d00bd0 = "_is-drop-target_ecf796";





function $bff4b534a1c5785d$export$7fbedc92909ed28e(props) {
    let state = $8x8rE$useTreeState(props);
    let layout = $8x8rE$useMemo(()=>new $8x8rE$ListLayout({
            rowHeight: 44,
            indentationForItem (tree, key) {
                let level = tree.getItem(key).level;
                return 28 * level;
            }
        })
    , []);
    let ref = $8x8rE$useRef();
    let { collectionProps: collectionProps  } = $8x8rE$useSelectableCollection({
        ref: ref,
        selectionManager: state.selectionManager,
        keyboardDelegate: layout
    });
    return(/*#__PURE__*/ $8x8rE$react.createElement($8x8rE$Virtualizer, {
        ...collectionProps,
        ref: ref,
        focusedKey: state.selectionManager.focusedKey,
        className: $8x8rE$classNames((/*@__PURE__*/$parcel$interopDefault($2a3cb1ac151fa431$exports)), 'spectrum-TreeView'),
        layout: layout,
        collection: state.collection
    }, (type, item)=>{
        if (type === 'section') return(/*#__PURE__*/ $8x8rE$react.createElement($bff4b534a1c5785d$var$TreeHeading, {
            item: item
        }));
        return(/*#__PURE__*/ $8x8rE$react.createElement($bff4b534a1c5785d$var$TreeItem, {
            item: item,
            state: state
        }));
    }));
}
function $bff4b534a1c5785d$var$TreeItem(props) {
    let { item: item , state: state  } = props;
    let { key: key , rendered: rendered , hasChildNodes: hasChildNodes  } = item;
    let isExpanded = state.expandedKeys.has(key);
    let isSelected = state.selectionManager.isSelected(key);
    let itemClassName = $8x8rE$classNames((/*@__PURE__*/$parcel$interopDefault($2a3cb1ac151fa431$exports)), 'spectrum-TreeView-item', {
        'is-open': isExpanded
    });
    let linkClassName = $8x8rE$classNames((/*@__PURE__*/$parcel$interopDefault($2a3cb1ac151fa431$exports)), 'spectrum-TreeView-itemLink', {
        'is-selected': isSelected
    });
    let ref = $8x8rE$useRef();
    let { itemProps: itemProps  } = $8x8rE$useSelectableItem({
        selectionManager: state.selectionManager,
        key: item.key,
        ref: ref
    });
    return(/*#__PURE__*/ $8x8rE$react.createElement("div", {
        className: itemClassName,
        role: "presentation"
    }, /*#__PURE__*/ $8x8rE$react.createElement($8x8rE$FocusRing, {
        focusRingClass: $8x8rE$classNames((/*@__PURE__*/$parcel$interopDefault($2a3cb1ac151fa431$exports)), 'focus-ring')
    }, /*#__PURE__*/ $8x8rE$react.createElement("div", {
        ...itemProps,
        ref: ref,
        className: linkClassName
    }, hasChildNodes && /*#__PURE__*/ $8x8rE$react.createElement($8x8rE$spectrumiconsuiChevronRightMedium, {
        UNSAFE_className: $8x8rE$classNames((/*@__PURE__*/$parcel$interopDefault($2a3cb1ac151fa431$exports)), 'spectrum-TreeView-indicator')
    }), rendered))));
}
function $bff4b534a1c5785d$var$TreeHeading({ item: item  }) {
    return(/*#__PURE__*/ $8x8rE$react.createElement("div", {
        className: $8x8rE$classNames((/*@__PURE__*/$parcel$interopDefault($2a3cb1ac151fa431$exports)), 'spectrum-TreeView-heading')
    }, item.rendered));
}




export {$bff4b534a1c5785d$export$7fbedc92909ed28e as Tree, $bff4b534a1c5785d$re_export$Item as Item, $bff4b534a1c5785d$re_export$Section as Section};
//# sourceMappingURL=module.js.map
