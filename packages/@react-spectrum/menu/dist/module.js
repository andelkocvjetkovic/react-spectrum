import "./main.css";
import {Item as $a889dbd8c7b66456$re_export$Item, Section as $a889dbd8c7b66456$re_export$Section} from "@react-stately/collections";
import {useDOMRef as $9mVUt$useDOMRef, useIsMobileDevice as $9mVUt$useIsMobileDevice, unwrapDOMRef as $9mVUt$unwrapDOMRef, classNames as $9mVUt$classNames, useStyleProps as $9mVUt$useStyleProps, ClearSlots as $9mVUt$ClearSlots, SlotProvider as $9mVUt$SlotProvider, useSlotProps as $9mVUt$useSlotProps} from "@react-spectrum/utils";
import {useOverlayPosition as $9mVUt$useOverlayPosition, DismissButton as $9mVUt$DismissButton} from "@react-aria/overlays";
import {FocusScope as $9mVUt$FocusScope, FocusRing as $9mVUt$FocusRing} from "@react-aria/focus";
import {Tray as $9mVUt$Tray, Popover as $9mVUt$Popover} from "@react-spectrum/overlays";
import {PressResponder as $9mVUt$PressResponder, useHover as $9mVUt$useHover} from "@react-aria/interactions";
import $9mVUt$react, {useRef as $9mVUt$useRef, Fragment as $9mVUt$Fragment, forwardRef as $9mVUt$forwardRef, useContext as $9mVUt$useContext} from "react";
import {useMenuTrigger as $9mVUt$useMenuTrigger, useMenu as $9mVUt$useMenu, useMenuItem as $9mVUt$useMenuItem, useMenuSection as $9mVUt$useMenuSection} from "@react-aria/menu";
import {useMenuTriggerState as $9mVUt$useMenuTriggerState} from "@react-stately/menu";
import {mergeProps as $9mVUt$mergeProps, useSyncRef as $9mVUt$useSyncRef, filterDOMProps as $9mVUt$filterDOMProps} from "@react-aria/utils";
import {useTreeState as $9mVUt$useTreeState} from "@react-stately/tree";
import $9mVUt$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {Grid as $9mVUt$Grid} from "@react-spectrum/layout";
import {Text as $9mVUt$Text} from "@react-spectrum/text";
import {useSeparator as $9mVUt$useSeparator} from "@react-aria/separator";
import {ActionButton as $9mVUt$ActionButton} from "@react-spectrum/button";
import $9mVUt$spectrumiconsworkflowMore from "@spectrum-icons/workflow/More";
import {useMessageFormatter as $9mVUt$useMessageFormatter} from "@react-aria/i18n";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2e5e43847b8c70c9$exports = {};

$parcel$export($2e5e43847b8c70c9$exports, "MenuTrigger", () => $2e5e43847b8c70c9$export$27d2ad3c5815583e);




const $b345e56d3ee58b7b$export$c7e742effb1c51e2 = $9mVUt$react.createContext({
});
function $b345e56d3ee58b7b$export$21c7ab35b39f78ec() {
    return $9mVUt$useContext($b345e56d3ee58b7b$export$c7e742effb1c51e2);
}





var $0da61c9ca9006f54$exports = {};

$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-popover", () => $0da61c9ca9006f54$export$d959f30786125b, (v) => $0da61c9ca9006f54$export$d959f30786125b = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu", () => $0da61c9ca9006f54$export$fae6af6decd50ac5, (v) => $0da61c9ca9006f54$export$fae6af6decd50ac5 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-sectionHeading", () => $0da61c9ca9006f54$export$c20ea4b35020fbdd, (v) => $0da61c9ca9006f54$export$c20ea4b35020fbdd = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-checkmark", () => $0da61c9ca9006f54$export$8e15a726e4f7e62d, (v) => $0da61c9ca9006f54$export$8e15a726e4f7e62d = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-item", () => $0da61c9ca9006f54$export$45faad328e6c532b, (v) => $0da61c9ca9006f54$export$45faad328e6c532b = v);
$parcel$export($0da61c9ca9006f54$exports, "is-selected", () => $0da61c9ca9006f54$export$1e0fb04f31d3c22a, (v) => $0da61c9ca9006f54$export$1e0fb04f31d3c22a = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Icon", () => $0da61c9ca9006f54$export$d374b04f30360026, (v) => $0da61c9ca9006f54$export$d374b04f30360026 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemLabel", () => $0da61c9ca9006f54$export$1aa6419c5c650567, (v) => $0da61c9ca9006f54$export$1aa6419c5c650567 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemIcon", () => $0da61c9ca9006f54$export$f431001e1bb54633, (v) => $0da61c9ca9006f54$export$f431001e1bb54633 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemLabel--wrapping", () => $0da61c9ca9006f54$export$465092164a8e1d98, (v) => $0da61c9ca9006f54$export$465092164a8e1d98 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-divider", () => $0da61c9ca9006f54$export$e892026f534efed8, (v) => $0da61c9ca9006f54$export$e892026f534efed8 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-itemGrid", () => $0da61c9ca9006f54$export$ee5f52784f57f9c8, (v) => $0da61c9ca9006f54$export$ee5f52784f57f9c8 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-selectable", () => $0da61c9ca9006f54$export$fbd22ba224473193, (v) => $0da61c9ca9006f54$export$fbd22ba224473193 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-end", () => $0da61c9ca9006f54$export$926a1bb74ed65667, (v) => $0da61c9ca9006f54$export$926a1bb74ed65667 = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-icon", () => $0da61c9ca9006f54$export$cbbae63ef9e44c7a, (v) => $0da61c9ca9006f54$export$cbbae63ef9e44c7a = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-description", () => $0da61c9ca9006f54$export$36f1275051e39ead, (v) => $0da61c9ca9006f54$export$36f1275051e39ead = v);
$parcel$export($0da61c9ca9006f54$exports, "spectrum-Menu-keyboard", () => $0da61c9ca9006f54$export$4f9817a7dff6ba0f, (v) => $0da61c9ca9006f54$export$4f9817a7dff6ba0f = v);
$parcel$export($0da61c9ca9006f54$exports, "focus-ring", () => $0da61c9ca9006f54$export$f39a09f249340e2a, (v) => $0da61c9ca9006f54$export$f39a09f249340e2a = v);
$parcel$export($0da61c9ca9006f54$exports, "is-focused", () => $0da61c9ca9006f54$export$e7dc768d35940237, (v) => $0da61c9ca9006f54$export$e7dc768d35940237 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-hovered", () => $0da61c9ca9006f54$export$b8813cd5d7824ce7, (v) => $0da61c9ca9006f54$export$b8813cd5d7824ce7 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-highlighted", () => $0da61c9ca9006f54$export$451c613d0772eb99, (v) => $0da61c9ca9006f54$export$451c613d0772eb99 = v);
$parcel$export($0da61c9ca9006f54$exports, "is-open", () => $0da61c9ca9006f54$export$a9781837241c946d, (v) => $0da61c9ca9006f54$export$a9781837241c946d = v);
$parcel$export($0da61c9ca9006f54$exports, "is-active", () => $0da61c9ca9006f54$export$20fd0f7cd4e6112f, (v) => $0da61c9ca9006f54$export$20fd0f7cd4e6112f = v);
$parcel$export($0da61c9ca9006f54$exports, "is-disabled", () => $0da61c9ca9006f54$export$d35bc1e505d1ebbf, (v) => $0da61c9ca9006f54$export$d35bc1e505d1ebbf = v);
var $0da61c9ca9006f54$export$d959f30786125b;
var $0da61c9ca9006f54$export$fae6af6decd50ac5;
var $0da61c9ca9006f54$export$c20ea4b35020fbdd;
var $0da61c9ca9006f54$export$8e15a726e4f7e62d;
var $0da61c9ca9006f54$export$45faad328e6c532b;
var $0da61c9ca9006f54$export$1e0fb04f31d3c22a;
var $0da61c9ca9006f54$export$d374b04f30360026;
var $0da61c9ca9006f54$export$1aa6419c5c650567;
var $0da61c9ca9006f54$export$f431001e1bb54633;
var $0da61c9ca9006f54$export$465092164a8e1d98;
var $0da61c9ca9006f54$export$e892026f534efed8;
var $0da61c9ca9006f54$export$ee5f52784f57f9c8;
var $0da61c9ca9006f54$export$fbd22ba224473193;
var $0da61c9ca9006f54$export$926a1bb74ed65667;
var $0da61c9ca9006f54$export$cbbae63ef9e44c7a;
var $0da61c9ca9006f54$export$36f1275051e39ead;
var $0da61c9ca9006f54$export$4f9817a7dff6ba0f;
var $0da61c9ca9006f54$export$f39a09f249340e2a;
var $0da61c9ca9006f54$export$e7dc768d35940237;
var $0da61c9ca9006f54$export$b8813cd5d7824ce7;
var $0da61c9ca9006f54$export$451c613d0772eb99;
var $0da61c9ca9006f54$export$a9781837241c946d;
var $0da61c9ca9006f54$export$20fd0f7cd4e6112f;
var $0da61c9ca9006f54$export$d35bc1e505d1ebbf;
$0da61c9ca9006f54$export$d959f30786125b = "_spectrum-Menu-popover_7ea47c";
$0da61c9ca9006f54$export$fae6af6decd50ac5 = "_spectrum-Menu_7ea47c";
$0da61c9ca9006f54$export$c20ea4b35020fbdd = "_spectrum-Menu-sectionHeading_7ea47c";
$0da61c9ca9006f54$export$8e15a726e4f7e62d = "_spectrum-Menu-checkmark_7ea47c";
$0da61c9ca9006f54$export$45faad328e6c532b = "_spectrum-Menu-item_7ea47c";
$0da61c9ca9006f54$export$1e0fb04f31d3c22a = "_is-selected_7ea47c";
$0da61c9ca9006f54$export$d374b04f30360026 = "_spectrum-Icon_7ea47c";
$0da61c9ca9006f54$export$1aa6419c5c650567 = "_spectrum-Menu-itemLabel_7ea47c";
$0da61c9ca9006f54$export$f431001e1bb54633 = "_spectrum-Menu-itemIcon_7ea47c";
$0da61c9ca9006f54$export$465092164a8e1d98 = "_spectrum-Menu-itemLabel--wrapping_7ea47c";
$0da61c9ca9006f54$export$e892026f534efed8 = "_spectrum-Menu-divider_7ea47c";
$0da61c9ca9006f54$export$ee5f52784f57f9c8 = "_spectrum-Menu-itemGrid_7ea47c";
$0da61c9ca9006f54$export$fbd22ba224473193 = "_is-selectable_7ea47c";
$0da61c9ca9006f54$export$926a1bb74ed65667 = "_spectrum-Menu-end_7ea47c";
$0da61c9ca9006f54$export$cbbae63ef9e44c7a = "_spectrum-Menu-icon_7ea47c";
$0da61c9ca9006f54$export$36f1275051e39ead = "_spectrum-Menu-description_7ea47c";
$0da61c9ca9006f54$export$4f9817a7dff6ba0f = "_spectrum-Menu-keyboard_7ea47c";
$0da61c9ca9006f54$export$f39a09f249340e2a = "_focus-ring_7ea47c";
$0da61c9ca9006f54$export$e7dc768d35940237 = "_is-focused_7ea47c";
$0da61c9ca9006f54$export$b8813cd5d7824ce7 = "_is-hovered_7ea47c";
$0da61c9ca9006f54$export$451c613d0772eb99 = "_is-highlighted_7ea47c";
$0da61c9ca9006f54$export$a9781837241c946d = "_is-open_7ea47c";
$0da61c9ca9006f54$export$20fd0f7cd4e6112f = "_is-active_7ea47c";
$0da61c9ca9006f54$export$d35bc1e505d1ebbf = "_is-disabled_7ea47c";




function $2e5e43847b8c70c9$var$MenuTrigger(props, ref) {
    let menuPopoverRef = $9mVUt$useRef();
    let triggerRef = $9mVUt$useRef();
    let domRef = $9mVUt$useDOMRef(ref);
    let menuTriggerRef = domRef || triggerRef;
    let menuRef = $9mVUt$useRef();
    let { children: children , align: align = 'start' , shouldFlip: shouldFlip = true , direction: direction = 'bottom' , closeOnSelect: closeOnSelect  } = props;
    let [menuTrigger, menu] = $9mVUt$react.Children.toArray(children);
    let state = $9mVUt$useMenuTriggerState(props);
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = $9mVUt$useMenuTrigger({
    }, state, menuTriggerRef);
    let initialPlacement;
    switch(direction){
        case 'left':
        case 'right':
        case 'start':
        case 'end':
            initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}`;
            break;
        case 'bottom':
        case 'top':
        default:
            initialPlacement = `${direction} ${align}`;
    }
    let isMobile = $9mVUt$useIsMobileDevice();
    let { overlayProps: positionProps , placement: placement  } = $9mVUt$useOverlayPosition({
        targetRef: menuTriggerRef,
        overlayRef: $9mVUt$unwrapDOMRef(menuPopoverRef),
        scrollRef: menuRef,
        placement: initialPlacement,
        shouldFlip: shouldFlip,
        isOpen: state.isOpen && !isMobile,
        onClose: state.close
    });
    let menuContext = {
        ...menuProps,
        ref: menuRef,
        onClose: state.close,
        closeOnSelect: closeOnSelect,
        autoFocus: state.focusStrategy || true,
        UNSAFE_style: isMobile ? {
            width: '100%',
            maxHeight: 'inherit'
        } : undefined,
        UNSAFE_className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), {
            'spectrum-Menu-popover': !isMobile
        })
    };
    let contents = /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$FocusScope, {
        restoreFocus: true,
        contain: isMobile
    }, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$DismissButton, {
        onDismiss: state.close
    }), menu, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$DismissButton, {
        onDismiss: state.close
    }));
    // On small screen devices, the menu is rendered in a tray, otherwise a popover.
    let overlay;
    if (isMobile) overlay = /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$Tray, {
        isOpen: state.isOpen,
        onClose: state.close
    }, contents);
    else overlay = /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$Popover, {
        isOpen: state.isOpen,
        UNSAFE_style: positionProps.style,
        ref: menuPopoverRef,
        placement: placement,
        hideArrow: true,
        onClose: state.close,
        shouldCloseOnBlur: true
    }, contents);
    return(/*#__PURE__*/ $9mVUt$react.createElement($9mVUt$Fragment, null, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$PressResponder, {
        ...menuTriggerProps,
        ref: menuTriggerRef,
        isPressed: state.isOpen
    }, menuTrigger), /*#__PURE__*/ $9mVUt$react.createElement($b345e56d3ee58b7b$export$c7e742effb1c51e2.Provider, {
        value: menuContext
    }, overlay)));
}
/**
 * The MenuTrigger serves as a wrapper around a Menu and its associated trigger,
 * linking the Menu's open state with the trigger's press state.
 */ let $2e5e43847b8c70c9$export$27d2ad3c5815583e = /*#__PURE__*/ $9mVUt$forwardRef($2e5e43847b8c70c9$var$MenuTrigger);


var $b7af637c027453f7$exports = {};

$parcel$export($b7af637c027453f7$exports, "Menu", () => $b7af637c027453f7$export$d9b273488cd8ce6f);













function $172351db9650d53f$export$2ce376c2cc3355c8(props) {
    let { item: item , state: state , isVirtualized: isVirtualized , onAction: onAction  } = props;
    let { onClose: onClose , closeOnSelect: closeOnSelect  } = $b345e56d3ee58b7b$export$21c7ab35b39f78ec();
    let { rendered: rendered , key: key  } = item;
    let isSelected = state.selectionManager.isSelected(key);
    let isDisabled = state.disabledKeys.has(key);
    let ref = $9mVUt$useRef();
    let { menuItemProps: menuItemProps , labelProps: labelProps , descriptionProps: descriptionProps , keyboardShortcutProps: keyboardShortcutProps  } = $9mVUt$useMenuItem({
        isSelected: isSelected,
        isDisabled: isDisabled,
        'aria-label': item['aria-label'],
        key: key,
        onClose: onClose,
        closeOnSelect: closeOnSelect,
        isVirtualized: isVirtualized,
        onAction: onAction
    }, state, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $9mVUt$useHover({
        isDisabled: isDisabled
    });
    let contents = typeof rendered === 'string' ? /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$Text, null, rendered) : rendered;
    return(/*#__PURE__*/ $9mVUt$react.createElement($9mVUt$FocusRing, {
        focusRingClass: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'focus-ring')
    }, /*#__PURE__*/ $9mVUt$react.createElement("li", {
        ...$9mVUt$mergeProps(menuItemProps, hoverProps),
        ref: ref,
        className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-item', {
            'is-disabled': isDisabled,
            'is-selected': isSelected,
            'is-selectable': state.selectionManager.selectionMode !== 'none',
            'is-hovered': isHovered
        })
    }, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$Grid, {
        UNSAFE_className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-itemGrid')
    }, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$ClearSlots, null, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$SlotProvider, {
        slots: {
            text: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-itemLabel'],
                ...labelProps
            },
            end: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-end'],
                ...descriptionProps
            },
            icon: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-icon'],
                size: 'S'
            },
            description: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-description'],
                ...descriptionProps
            },
            keyboard: {
                UNSAFE_className: (/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports))['spectrum-Menu-keyboard'],
                ...keyboardShortcutProps
            }
        }
    }, contents, isSelected && /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$spectrumiconsuiCheckmarkMedium, {
        slot: "checkmark",
        UNSAFE_className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-checkmark')
    })))))));
}








function $2d6f878f73a7fc29$export$4b1545b4f2016d26(props) {
    let { item: item1 , state: state , onAction: onAction  } = props;
    let { itemProps: itemProps , headingProps: headingProps , groupProps: groupProps  } = $9mVUt$useMenuSection({
        heading: item1.rendered,
        'aria-label': item1['aria-label']
    });
    let { separatorProps: separatorProps  } = $9mVUt$useSeparator({
        elementType: 'li'
    });
    return(/*#__PURE__*/ $9mVUt$react.createElement($9mVUt$Fragment, null, item1.key !== state.collection.getFirstKey() && /*#__PURE__*/ $9mVUt$react.createElement("li", {
        ...separatorProps,
        className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-divider')
    }), /*#__PURE__*/ $9mVUt$react.createElement("li", itemProps, item1.rendered && /*#__PURE__*/ $9mVUt$react.createElement("span", {
        ...headingProps,
        className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu-sectionHeading')
    }, item1.rendered), /*#__PURE__*/ $9mVUt$react.createElement("ul", {
        ...groupProps,
        className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu')
    }, [
        ...item1.childNodes
    ].map((node)=>{
        let item = /*#__PURE__*/ $9mVUt$react.createElement($172351db9650d53f$export$2ce376c2cc3355c8, {
            key: node.key,
            item: node,
            state: state,
            onAction: onAction
        });
        if (node.wrapper) item = node.wrapper(item);
        return item;
    })))));
}







function $b7af637c027453f7$var$Menu(props, ref) {
    let contextProps = $9mVUt$useContext($b345e56d3ee58b7b$export$c7e742effb1c51e2);
    let completeProps = {
        ...$9mVUt$mergeProps(contextProps, props)
    };
    let domRef = $9mVUt$useDOMRef(ref);
    let state = $9mVUt$useTreeState(completeProps);
    let { menuProps: menuProps  } = $9mVUt$useMenu(completeProps, state, domRef);
    let { styleProps: styleProps  } = $9mVUt$useStyleProps(completeProps);
    $9mVUt$useSyncRef(contextProps, domRef);
    return(/*#__PURE__*/ $9mVUt$react.createElement("ul", {
        ...menuProps,
        ...styleProps,
        ref: domRef,
        className: $9mVUt$classNames((/*@__PURE__*/$parcel$interopDefault($0da61c9ca9006f54$exports)), 'spectrum-Menu', styleProps.className)
    }, [
        ...state.collection
    ].map((item)=>{
        if (item.type === 'section') return(/*#__PURE__*/ $9mVUt$react.createElement($2d6f878f73a7fc29$export$4b1545b4f2016d26, {
            key: item.key,
            item: item,
            state: state,
            onAction: completeProps.onAction
        }));
        let menuItem = /*#__PURE__*/ $9mVUt$react.createElement($172351db9650d53f$export$2ce376c2cc3355c8, {
            key: item.key,
            item: item,
            state: state,
            onAction: completeProps.onAction
        });
        if (item.wrapper) menuItem = item.wrapper(menuItem);
        return menuItem;
    })));
}
/**
 * Menus display a list of actions or options that a user can choose.
 */ // forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const $b7af637c027453f7$export$d9b273488cd8ce6f = /*#__PURE__*/ $9mVUt$react.forwardRef($b7af637c027453f7$var$Menu);


var $e4907a377e7e3679$exports = {};

$parcel$export($e4907a377e7e3679$exports, "ActionMenu", () => $e4907a377e7e3679$export$ed57a210b9d13bb6);


var $eed186a85930c4e0$exports = {};
var $fcbc1f373d3c3d21$exports = {};
$fcbc1f373d3c3d21$exports = JSON.parse("{\"moreActions\":\"المزيد من الإجراءات\"}");


var $4cd7afe88bb092c9$exports = {};
$4cd7afe88bb092c9$exports = JSON.parse("{\"moreActions\":\"Повече действия\"}");


var $73d10912e540a76f$exports = {};
$73d10912e540a76f$exports = JSON.parse("{\"moreActions\":\"Další akce\"}");


var $7bf2d7a8ee459293$exports = {};
$7bf2d7a8ee459293$exports = JSON.parse("{\"moreActions\":\"Flere handlinger\"}");


var $784305602f3460bf$exports = {};
$784305602f3460bf$exports = JSON.parse("{\"moreActions\":\"Mehr Aktionen\"}");


var $65c41687a89c4232$exports = {};
$65c41687a89c4232$exports = JSON.parse("{\"moreActions\":\"Περισσότερες ενέργειες\"}");


var $5673ff4c2210e83c$exports = {};
$5673ff4c2210e83c$exports = JSON.parse("{\"moreActions\":\"More actions\"}");


var $513876771ed4509e$exports = {};
$513876771ed4509e$exports = JSON.parse("{\"moreActions\":\"Más acciones\"}");


var $989d2beaedc5ccb6$exports = {};
$989d2beaedc5ccb6$exports = JSON.parse("{\"moreActions\":\"Veel toiminguid\"}");


var $b9aa4dc77debaa2f$exports = {};
$b9aa4dc77debaa2f$exports = JSON.parse("{\"moreActions\":\"Lisää toimintoja\"}");


var $4e564b21e6f9a1b5$exports = {};
$4e564b21e6f9a1b5$exports = JSON.parse("{\"moreActions\":\"Autres actions\"}");


var $6711246f7a13f71e$exports = {};
$6711246f7a13f71e$exports = JSON.parse("{\"moreActions\":\"פעולות נוספות\"}");


var $c91e6674b20c654e$exports = {};
$c91e6674b20c654e$exports = JSON.parse("{\"moreActions\":\"Dodatne radnje\"}");


var $5c821a836b601fef$exports = {};
$5c821a836b601fef$exports = JSON.parse("{\"moreActions\":\"További lehetőségek\"}");


var $2d28da09a1f30abf$exports = {};
$2d28da09a1f30abf$exports = JSON.parse("{\"moreActions\":\"Altre azioni\"}");


var $7edc566ddd11601c$exports = {};
$7edc566ddd11601c$exports = JSON.parse("{\"moreActions\":\"その他のアクション\"}");


var $a8b471a544302a19$exports = {};
$a8b471a544302a19$exports = JSON.parse("{\"moreActions\":\"기타 작업\"}");


var $f2aa4561706be086$exports = {};
$f2aa4561706be086$exports = JSON.parse("{\"moreActions\":\"Daugiau veiksmų\"}");


var $163c2577b8699b3c$exports = {};
$163c2577b8699b3c$exports = JSON.parse("{\"moreActions\":\"Citas darbības\"}");


var $5dfffc8310405825$exports = {};
$5dfffc8310405825$exports = JSON.parse("{\"moreActions\":\"Flere handlinger\"}");


var $5de7b3f65b53b762$exports = {};
$5de7b3f65b53b762$exports = JSON.parse("{\"moreActions\":\"Meer handelingen\"}");


var $66dfb24b1dbd4421$exports = {};
$66dfb24b1dbd4421$exports = JSON.parse("{\"moreActions\":\"Więcej akcji\"}");


var $78710bc883741247$exports = {};
$78710bc883741247$exports = JSON.parse("{\"moreActions\":\"Mais ações\"}");


var $9317ea455f10a111$exports = {};
$9317ea455f10a111$exports = JSON.parse("{\"moreActions\":\"Mais ações\"}");


var $82f1e491dc6d1060$exports = {};
$82f1e491dc6d1060$exports = JSON.parse("{\"moreActions\":\"Mai multe acțiuni\"}");


var $ff9547d477de3be3$exports = {};
$ff9547d477de3be3$exports = JSON.parse("{\"moreActions\":\"Дополнительные действия\"}");


var $72015d9107d461e8$exports = {};
$72015d9107d461e8$exports = JSON.parse("{\"moreActions\":\"Ďalšie akcie\"}");


var $44a7de64f79f9cc2$exports = {};
$44a7de64f79f9cc2$exports = JSON.parse("{\"moreActions\":\"Več možnosti\"}");


var $ac95a63006612827$exports = {};
$ac95a63006612827$exports = JSON.parse("{\"moreActions\":\"Dodatne radnje\"}");


var $9684fe24770a3da9$exports = {};
$9684fe24770a3da9$exports = JSON.parse("{\"moreActions\":\"Fler åtgärder\"}");


var $793e7a4326779dcd$exports = {};
$793e7a4326779dcd$exports = JSON.parse("{\"moreActions\":\"Daha fazla eylem\"}");


var $4b2eaed0c0dec2a9$exports = {};
$4b2eaed0c0dec2a9$exports = JSON.parse("{\"moreActions\":\"Більше дій\"}");


var $76cddbd6ec6fe486$exports = {};
$76cddbd6ec6fe486$exports = JSON.parse("{\"moreActions\":\"更多操作\"}");


var $4db69211bd6e6349$exports = {};
$4db69211bd6e6349$exports = JSON.parse("{\"moreActions\":\"更多動作\"}");


$eed186a85930c4e0$exports = {
    "ar-AE": $fcbc1f373d3c3d21$exports,
    "bg-BG": $4cd7afe88bb092c9$exports,
    "cs-CZ": $73d10912e540a76f$exports,
    "da-DK": $7bf2d7a8ee459293$exports,
    "de-DE": $784305602f3460bf$exports,
    "el-GR": $65c41687a89c4232$exports,
    "en-US": $5673ff4c2210e83c$exports,
    "es-ES": $513876771ed4509e$exports,
    "et-EE": $989d2beaedc5ccb6$exports,
    "fi-FI": $b9aa4dc77debaa2f$exports,
    "fr-FR": $4e564b21e6f9a1b5$exports,
    "he-IL": $6711246f7a13f71e$exports,
    "hr-HR": $c91e6674b20c654e$exports,
    "hu-HU": $5c821a836b601fef$exports,
    "it-IT": $2d28da09a1f30abf$exports,
    "ja-JP": $7edc566ddd11601c$exports,
    "ko-KR": $a8b471a544302a19$exports,
    "lt-LT": $f2aa4561706be086$exports,
    "lv-LV": $163c2577b8699b3c$exports,
    "nb-NO": $5dfffc8310405825$exports,
    "nl-NL": $5de7b3f65b53b762$exports,
    "pl-PL": $66dfb24b1dbd4421$exports,
    "pt-BR": $78710bc883741247$exports,
    "pt-PT": $9317ea455f10a111$exports,
    "ro-RO": $82f1e491dc6d1060$exports,
    "ru-RU": $ff9547d477de3be3$exports,
    "sk-SK": $72015d9107d461e8$exports,
    "sl-SI": $44a7de64f79f9cc2$exports,
    "sr-SP": $ac95a63006612827$exports,
    "sv-SE": $9684fe24770a3da9$exports,
    "tr-TR": $793e7a4326779dcd$exports,
    "uk-UA": $4b2eaed0c0dec2a9$exports,
    "zh-CN": $76cddbd6ec6fe486$exports,
    "zh-TW": $4db69211bd6e6349$exports
};








function $e4907a377e7e3679$var$ActionMenu(props, ref) {
    props = $9mVUt$useSlotProps(props, 'actionmenu');
    let formatMessage = $9mVUt$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($eed186a85930c4e0$exports)));
    let buttonProps = $9mVUt$filterDOMProps(props, {
        labelable: true
    });
    if (buttonProps['aria-label'] === undefined) buttonProps['aria-label'] = formatMessage('moreActions');
    return(/*#__PURE__*/ $9mVUt$react.createElement($2e5e43847b8c70c9$export$27d2ad3c5815583e, {
        isOpen: props.isOpen,
        defaultOpen: props.defaultOpen,
        onOpenChange: props.onOpenChange,
        align: props.align,
        direction: props.direction,
        shouldFlip: props.shouldFlip
    }, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$ActionButton, {
        ref: ref,
        ...props,
        ...buttonProps
    }, /*#__PURE__*/ $9mVUt$react.createElement($9mVUt$spectrumiconsworkflowMore, null)), /*#__PURE__*/ $9mVUt$react.createElement($b7af637c027453f7$export$d9b273488cd8ce6f, {
        children: props.children,
        items: props.items,
        disabledKeys: props.disabledKeys,
        onAction: props.onAction
    })));
}
/**
 * Convenience component to display an ActionButton with a Menu.
 */ let $e4907a377e7e3679$export$ed57a210b9d13bb6 = /*#__PURE__*/ $9mVUt$react.forwardRef($e4907a377e7e3679$var$ActionMenu);





export {$a889dbd8c7b66456$re_export$Item as Item, $a889dbd8c7b66456$re_export$Section as Section, $2e5e43847b8c70c9$export$27d2ad3c5815583e as MenuTrigger, $b7af637c027453f7$export$d9b273488cd8ce6f as Menu, $e4907a377e7e3679$export$ed57a210b9d13bb6 as ActionMenu};
//# sourceMappingURL=module.js.map
