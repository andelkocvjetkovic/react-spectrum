import "./main.css";
import {Item as $71667bac2146076b$re_export$Item} from "@react-stately/collections";
import {ActionButton as $bszDU$ActionButton} from "@react-spectrum/button";
import {useDOMRef as $bszDU$useDOMRef, useStyleProps as $bszDU$useStyleProps, classNames as $bszDU$classNames, getWrappedElement as $bszDU$getWrappedElement} from "@react-spectrum/utils";
import $bszDU$spectrumiconsuiFolderBreadcrumb from "@spectrum-icons/ui/FolderBreadcrumb";
import {MenuTrigger as $bszDU$MenuTrigger, Menu as $bszDU$Menu} from "@react-spectrum/menu";
import $bszDU$react, {useRef as $bszDU$useRef, useCallback as $bszDU$useCallback, Fragment as $bszDU$Fragment} from "react";
import {useBreadcrumbs as $bszDU$useBreadcrumbs, useBreadcrumbItem as $bszDU$useBreadcrumbItem} from "@react-aria/breadcrumbs";
import {useValueEffect as $bszDU$useValueEffect, useResizeObserver as $bszDU$useResizeObserver, useLayoutEffect as $bszDU$useLayoutEffect, mergeProps as $bszDU$mergeProps} from "@react-aria/utils";
import {useProviderProps as $bszDU$useProviderProps} from "@react-spectrum/provider";
import $bszDU$spectrumiconsuiChevronRightSmall from "@spectrum-icons/ui/ChevronRightSmall";
import {FocusRing as $bszDU$FocusRing} from "@react-aria/focus";
import {useHover as $bszDU$useHover} from "@react-aria/interactions";
import {useLocale as $bszDU$useLocale} from "@react-aria/i18n";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fc0c667adb4d1d41$exports = {};

$parcel$export($fc0c667adb4d1d41$exports, "Breadcrumbs", () => $fc0c667adb4d1d41$export$2dc68d50d56fbbd);






var $95795a0e6c357855$exports = {};

$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumbs", () => $95795a0e6c357855$export$8c6320d2db82081f, (v) => $95795a0e6c357855$export$8c6320d2db82081f = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumbs-itemSeparator", () => $95795a0e6c357855$export$f72910e36cd91d1e, (v) => $95795a0e6c357855$export$f72910e36cd91d1e = v);
$parcel$export($95795a0e6c357855$exports, "is-reversed", () => $95795a0e6c357855$export$a4561bd665abb5db, (v) => $95795a0e6c357855$export$a4561bd665abb5db = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumbs-item", () => $95795a0e6c357855$export$492a5983c5fbf603, (v) => $95795a0e6c357855$export$492a5983c5fbf603 = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-ActionButton", () => $95795a0e6c357855$export$53da69f51b770d3, (v) => $95795a0e6c357855$export$53da69f51b770d3 = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumbs-itemLink", () => $95795a0e6c357855$export$5af6a1bcd207d9f6, (v) => $95795a0e6c357855$export$5af6a1bcd207d9f6 = v);
$parcel$export($95795a0e6c357855$exports, "is-hovered", () => $95795a0e6c357855$export$b8813cd5d7824ce7, (v) => $95795a0e6c357855$export$b8813cd5d7824ce7 = v);
$parcel$export($95795a0e6c357855$exports, "focus-ring", () => $95795a0e6c357855$export$f39a09f249340e2a, (v) => $95795a0e6c357855$export$f39a09f249340e2a = v);
$parcel$export($95795a0e6c357855$exports, "is-dragged", () => $95795a0e6c357855$export$8778c911bed6c759, (v) => $95795a0e6c357855$export$8778c911bed6c759 = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumbs--small", () => $95795a0e6c357855$export$e01337e7944312f6, (v) => $95795a0e6c357855$export$e01337e7944312f6 = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumbs--medium", () => $95795a0e6c357855$export$19f957201d941895, (v) => $95795a0e6c357855$export$19f957201d941895 = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumbs--multiline", () => $95795a0e6c357855$export$713961e8e432825b, (v) => $95795a0e6c357855$export$713961e8e432825b = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Heading--pageTitle", () => $95795a0e6c357855$export$63e9e087a73f808b, (v) => $95795a0e6c357855$export$63e9e087a73f808b = v);
$parcel$export($95795a0e6c357855$exports, "is-disabled", () => $95795a0e6c357855$export$d35bc1e505d1ebbf, (v) => $95795a0e6c357855$export$d35bc1e505d1ebbf = v);
$parcel$export($95795a0e6c357855$exports, "is-selected", () => $95795a0e6c357855$export$1e0fb04f31d3c22a, (v) => $95795a0e6c357855$export$1e0fb04f31d3c22a = v);
$parcel$export($95795a0e6c357855$exports, "spectrum-Breadcrumb", () => $95795a0e6c357855$export$45a5316056cfac3c, (v) => $95795a0e6c357855$export$45a5316056cfac3c = v);
var $95795a0e6c357855$export$8c6320d2db82081f;
var $95795a0e6c357855$export$f72910e36cd91d1e;
var $95795a0e6c357855$export$a4561bd665abb5db;
var $95795a0e6c357855$export$492a5983c5fbf603;
var $95795a0e6c357855$export$53da69f51b770d3;
var $95795a0e6c357855$export$5af6a1bcd207d9f6;
var $95795a0e6c357855$export$b8813cd5d7824ce7;
var $95795a0e6c357855$export$f39a09f249340e2a;
var $95795a0e6c357855$export$8778c911bed6c759;
var $95795a0e6c357855$export$e01337e7944312f6;
var $95795a0e6c357855$export$19f957201d941895;
var $95795a0e6c357855$export$713961e8e432825b;
var $95795a0e6c357855$export$63e9e087a73f808b;
var $95795a0e6c357855$export$d35bc1e505d1ebbf;
var $95795a0e6c357855$export$1e0fb04f31d3c22a;
var $95795a0e6c357855$export$45a5316056cfac3c;
$95795a0e6c357855$export$8c6320d2db82081f = "_spectrum-Breadcrumbs_3fe6e8";
$95795a0e6c357855$export$f72910e36cd91d1e = "_spectrum-Breadcrumbs-itemSeparator_3fe6e8";
$95795a0e6c357855$export$a4561bd665abb5db = "_is-reversed_3fe6e8";
$95795a0e6c357855$export$492a5983c5fbf603 = "_spectrum-Breadcrumbs-item_3fe6e8";
$95795a0e6c357855$export$53da69f51b770d3 = "_spectrum-ActionButton_3fe6e8";
$95795a0e6c357855$export$5af6a1bcd207d9f6 = "_spectrum-Breadcrumbs-itemLink_3fe6e8";
$95795a0e6c357855$export$b8813cd5d7824ce7 = "_is-hovered_3fe6e8";
$95795a0e6c357855$export$f39a09f249340e2a = "_focus-ring_3fe6e8";
$95795a0e6c357855$export$8778c911bed6c759 = "_is-dragged_3fe6e8";
$95795a0e6c357855$export$e01337e7944312f6 = "_spectrum-Breadcrumbs--small_3fe6e8";
$95795a0e6c357855$export$19f957201d941895 = "_spectrum-Breadcrumbs--medium_3fe6e8";
$95795a0e6c357855$export$713961e8e432825b = "_spectrum-Breadcrumbs--multiline_3fe6e8";
$95795a0e6c357855$export$63e9e087a73f808b = "_spectrum-Heading--pageTitle_3fe6e8";
$95795a0e6c357855$export$d35bc1e505d1ebbf = "_is-disabled_3fe6e8";
$95795a0e6c357855$export$1e0fb04f31d3c22a = "_is-selected_3fe6e8";
$95795a0e6c357855$export$45a5316056cfac3c = "_spectrum-Breadcrumb_3fe6e8";





function $60f06d27f31c699b$export$c13f210c706eb549(props) {
    let { children: children , isCurrent: isCurrent , isDisabled: isDisabled  } = props;
    let { direction: direction  } = $bszDU$useLocale();
    let ref = $bszDU$useRef();
    let { itemProps: itemProps  } = $bszDU$useBreadcrumbItem({
        ...props,
        elementType: typeof children === 'string' ? 'span' : 'a'
    }, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $bszDU$useHover(props);
    let element = /*#__PURE__*/ $bszDU$react.cloneElement($bszDU$getWrappedElement(children), {
        ...$bszDU$mergeProps(itemProps, hoverProps),
        ref: ref,
        className: $bszDU$classNames((/*@__PURE__*/$parcel$interopDefault($95795a0e6c357855$exports)), 'spectrum-Breadcrumbs-itemLink', {
            'is-disabled': !isCurrent && isDisabled,
            'is-hovered': isHovered
        })
    });
    return(/*#__PURE__*/ $bszDU$react.createElement($bszDU$Fragment, null, /*#__PURE__*/ $bszDU$react.createElement($bszDU$FocusRing, {
        focusRingClass: $bszDU$classNames((/*@__PURE__*/$parcel$interopDefault($95795a0e6c357855$exports)), 'focus-ring')
    }, element), isCurrent === false && /*#__PURE__*/ $bszDU$react.createElement($bszDU$spectrumiconsuiChevronRightSmall, {
        UNSAFE_className: $bszDU$classNames((/*@__PURE__*/$parcel$interopDefault($95795a0e6c357855$exports)), 'spectrum-Breadcrumbs-itemSeparator', {
            'is-reversed': direction === 'rtl'
        })
    })));
}











const $fc0c667adb4d1d41$var$MIN_VISIBLE_ITEMS = 1;
const $fc0c667adb4d1d41$var$MAX_VISIBLE_ITEMS = 4;
function $fc0c667adb4d1d41$var$Breadcrumbs(props, ref) {
    props = $bszDU$useProviderProps(props);
    let { size: size = 'L' , isMultiline: isMultiline , children: children , showRoot: showRoot , isDisabled: isDisabled , onAction: onAction , ...otherProps } = props;
    // Not using React.Children.toArray because it mutates the key prop.
    let childArray = [];
    $bszDU$react.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ $bszDU$react.isValidElement(child)) childArray.push(child);
    });
    let domRef = $bszDU$useDOMRef(ref);
    let listRef = $bszDU$useRef(null);
    let [visibleItems1, setVisibleItems] = $bszDU$useValueEffect(childArray.length);
    let { navProps: navProps  } = $bszDU$useBreadcrumbs(props);
    let { styleProps: styleProps  } = $bszDU$useStyleProps(otherProps);
    let updateOverflow = $bszDU$useCallback(()=>{
        let computeVisibleItems = (visibleItems)=>{
            // Refs can be null at runtime.
            let currListRef = listRef.current;
            if (!currListRef) return;
            let listItems = Array.from(currListRef.children);
            let containerWidth = currListRef.offsetWidth;
            let isShowingMenu = childArray.length > visibleItems;
            let calculatedWidth = 0;
            let newVisibleItems = 0;
            let maxVisibleItems = $fc0c667adb4d1d41$var$MAX_VISIBLE_ITEMS;
            if (showRoot) {
                calculatedWidth += listItems.shift().offsetWidth;
                newVisibleItems++;
            }
            if (isShowingMenu) {
                calculatedWidth += listItems.shift().offsetWidth;
                maxVisibleItems--;
            }
            if (showRoot && calculatedWidth >= containerWidth) newVisibleItems--;
            // TODO: what if multiline and only one breadcrumb??
            if (isMultiline) {
                listItems.pop();
                newVisibleItems++;
            } else {
                // Ensure the last breadcrumb isn't truncated when we measure it.
                let last = listItems.pop();
                last.style.overflow = 'visible';
                calculatedWidth += last.offsetWidth;
                if (calculatedWidth < containerWidth) newVisibleItems++;
                last.style.overflow = '';
            }
            for (let breadcrumb of listItems.reverse()){
                calculatedWidth += breadcrumb.offsetWidth;
                if (calculatedWidth < containerWidth) newVisibleItems++;
            }
            return Math.max($fc0c667adb4d1d41$var$MIN_VISIBLE_ITEMS, Math.min(maxVisibleItems, newVisibleItems));
        };
        setVisibleItems(function*() {
            // Update to show all items.
            yield childArray.length;
            // Measure, and update to show the items that fit.
            let newVisibleItems = computeVisibleItems(childArray.length);
            yield newVisibleItems;
            // If the number of items is less than the number of children,
            // then update again to ensure that the menu fits.
            if (newVisibleItems < childArray.length && newVisibleItems > 1) yield computeVisibleItems(newVisibleItems);
        });
    }, [
        listRef,
        children,
        setVisibleItems,
        showRoot,
        isMultiline
    ]);
    $bszDU$useResizeObserver({
        ref: domRef,
        onResize: updateOverflow
    });
    $bszDU$useLayoutEffect(updateOverflow, [
        children
    ]);
    let contents = childArray;
    if (childArray.length > visibleItems1) {
        let selectedItem = childArray[childArray.length - 1];
        let selectedKey = selectedItem.key ?? childArray.length - 1;
        let onMenuAction = (key)=>{
            // Don't fire onAction when clicking on the last item
            if (key !== selectedKey && onAction) onAction(key);
        };
        let menuItem = /*#__PURE__*/ $bszDU$react.createElement($60f06d27f31c699b$export$c13f210c706eb549, {
            key: "menu"
        }, /*#__PURE__*/ $bszDU$react.createElement($bszDU$MenuTrigger, null, /*#__PURE__*/ $bszDU$react.createElement($bszDU$ActionButton, {
            "aria-label": "…",
            isQuiet: true,
            isDisabled: isDisabled
        }, /*#__PURE__*/ $bszDU$react.createElement($bszDU$spectrumiconsuiFolderBreadcrumb, null)), /*#__PURE__*/ $bszDU$react.createElement($bszDU$Menu, {
            selectionMode: "single",
            selectedKeys: [
                selectedKey
            ],
            onAction: onMenuAction
        }, childArray)));
        contents = [
            menuItem
        ];
        let breadcrumbs = [
            ...childArray
        ];
        let endItems = visibleItems1;
        if (showRoot && visibleItems1 > 1) {
            contents.unshift(breadcrumbs.shift());
            endItems--;
        }
        contents.push(...breadcrumbs.slice(-endItems));
    }
    let lastIndex = contents.length - 1;
    let breadcrumbItems = contents.map((child, index)=>{
        let isCurrent = index === lastIndex;
        let key = child.key ?? index;
        let onPress = ()=>{
            if (onAction) onAction(key);
        };
        return(/*#__PURE__*/ $bszDU$react.createElement("li", {
            key: key,
            className: $bszDU$classNames((/*@__PURE__*/$parcel$interopDefault($95795a0e6c357855$exports)), 'spectrum-Breadcrumbs-item')
        }, /*#__PURE__*/ $bszDU$react.createElement($60f06d27f31c699b$export$c13f210c706eb549, {
            isCurrent: isCurrent,
            isDisabled: isDisabled,
            onPress: onPress
        }, child.props.children)));
    });
    return(/*#__PURE__*/ $bszDU$react.createElement("nav", {
        ...styleProps,
        ...navProps,
        ref: domRef
    }, /*#__PURE__*/ $bszDU$react.createElement("ul", {
        ref: listRef,
        className: $bszDU$classNames((/*@__PURE__*/$parcel$interopDefault($95795a0e6c357855$exports)), 'spectrum-Breadcrumbs', {
            'spectrum-Breadcrumbs--small': size === 'S',
            'spectrum-Breadcrumbs--medium': size === 'M',
            'spectrum-Breadcrumbs--multiline': isMultiline,
            'spectrum-Breadcrumbs--showRoot': showRoot,
            'is-disabled': isDisabled
        }, styleProps.className)
    }, breadcrumbItems)));
}
/**
 * Breadcrumbs show hierarchy and navigational context for a user’s location within an application.
 */ let $fc0c667adb4d1d41$export$2dc68d50d56fbbd = /*#__PURE__*/ $bszDU$react.forwardRef($fc0c667adb4d1d41$var$Breadcrumbs);





export {$71667bac2146076b$re_export$Item as Item, $fc0c667adb4d1d41$export$2dc68d50d56fbbd as Breadcrumbs};
//# sourceMappingURL=module.js.map
