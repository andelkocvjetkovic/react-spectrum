require("./main.css");
var $fIf3y$reactstatelycollections = require("@react-stately/collections");
var $fIf3y$reactspectrumbutton = require("@react-spectrum/button");
var $fIf3y$reactspectrumutils = require("@react-spectrum/utils");
var $fIf3y$spectrumiconsuiFolderBreadcrumb = require("@spectrum-icons/ui/FolderBreadcrumb");
var $fIf3y$reactspectrummenu = require("@react-spectrum/menu");
var $fIf3y$react = require("react");
var $fIf3y$reactariabreadcrumbs = require("@react-aria/breadcrumbs");
var $fIf3y$reactariautils = require("@react-aria/utils");
var $fIf3y$reactspectrumprovider = require("@react-spectrum/provider");
var $fIf3y$spectrumiconsuiChevronRightSmall = require("@spectrum-icons/ui/ChevronRightSmall");
var $fIf3y$reactariafocus = require("@react-aria/focus");
var $fIf3y$reactariainteractions = require("@react-aria/interactions");
var $fIf3y$reactariai18n = require("@react-aria/i18n");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Item", () => $0056aa386e6b07d7$re_export$Item);
var $c0c816dee5a7d969$exports = {};

$parcel$export($c0c816dee5a7d969$exports, "Breadcrumbs", () => $c0c816dee5a7d969$export$2dc68d50d56fbbd);






var $75e8ef540fdb7a1c$exports = {};

$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumbs", () => $75e8ef540fdb7a1c$export$8c6320d2db82081f, (v) => $75e8ef540fdb7a1c$export$8c6320d2db82081f = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumbs-itemSeparator", () => $75e8ef540fdb7a1c$export$f72910e36cd91d1e, (v) => $75e8ef540fdb7a1c$export$f72910e36cd91d1e = v);
$parcel$export($75e8ef540fdb7a1c$exports, "is-reversed", () => $75e8ef540fdb7a1c$export$a4561bd665abb5db, (v) => $75e8ef540fdb7a1c$export$a4561bd665abb5db = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumbs-item", () => $75e8ef540fdb7a1c$export$492a5983c5fbf603, (v) => $75e8ef540fdb7a1c$export$492a5983c5fbf603 = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-ActionButton", () => $75e8ef540fdb7a1c$export$53da69f51b770d3, (v) => $75e8ef540fdb7a1c$export$53da69f51b770d3 = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumbs-itemLink", () => $75e8ef540fdb7a1c$export$5af6a1bcd207d9f6, (v) => $75e8ef540fdb7a1c$export$5af6a1bcd207d9f6 = v);
$parcel$export($75e8ef540fdb7a1c$exports, "is-hovered", () => $75e8ef540fdb7a1c$export$b8813cd5d7824ce7, (v) => $75e8ef540fdb7a1c$export$b8813cd5d7824ce7 = v);
$parcel$export($75e8ef540fdb7a1c$exports, "focus-ring", () => $75e8ef540fdb7a1c$export$f39a09f249340e2a, (v) => $75e8ef540fdb7a1c$export$f39a09f249340e2a = v);
$parcel$export($75e8ef540fdb7a1c$exports, "is-dragged", () => $75e8ef540fdb7a1c$export$8778c911bed6c759, (v) => $75e8ef540fdb7a1c$export$8778c911bed6c759 = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumbs--small", () => $75e8ef540fdb7a1c$export$e01337e7944312f6, (v) => $75e8ef540fdb7a1c$export$e01337e7944312f6 = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumbs--medium", () => $75e8ef540fdb7a1c$export$19f957201d941895, (v) => $75e8ef540fdb7a1c$export$19f957201d941895 = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumbs--multiline", () => $75e8ef540fdb7a1c$export$713961e8e432825b, (v) => $75e8ef540fdb7a1c$export$713961e8e432825b = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Heading--pageTitle", () => $75e8ef540fdb7a1c$export$63e9e087a73f808b, (v) => $75e8ef540fdb7a1c$export$63e9e087a73f808b = v);
$parcel$export($75e8ef540fdb7a1c$exports, "is-disabled", () => $75e8ef540fdb7a1c$export$d35bc1e505d1ebbf, (v) => $75e8ef540fdb7a1c$export$d35bc1e505d1ebbf = v);
$parcel$export($75e8ef540fdb7a1c$exports, "is-selected", () => $75e8ef540fdb7a1c$export$1e0fb04f31d3c22a, (v) => $75e8ef540fdb7a1c$export$1e0fb04f31d3c22a = v);
$parcel$export($75e8ef540fdb7a1c$exports, "spectrum-Breadcrumb", () => $75e8ef540fdb7a1c$export$45a5316056cfac3c, (v) => $75e8ef540fdb7a1c$export$45a5316056cfac3c = v);
var $75e8ef540fdb7a1c$export$8c6320d2db82081f;
var $75e8ef540fdb7a1c$export$f72910e36cd91d1e;
var $75e8ef540fdb7a1c$export$a4561bd665abb5db;
var $75e8ef540fdb7a1c$export$492a5983c5fbf603;
var $75e8ef540fdb7a1c$export$53da69f51b770d3;
var $75e8ef540fdb7a1c$export$5af6a1bcd207d9f6;
var $75e8ef540fdb7a1c$export$b8813cd5d7824ce7;
var $75e8ef540fdb7a1c$export$f39a09f249340e2a;
var $75e8ef540fdb7a1c$export$8778c911bed6c759;
var $75e8ef540fdb7a1c$export$e01337e7944312f6;
var $75e8ef540fdb7a1c$export$19f957201d941895;
var $75e8ef540fdb7a1c$export$713961e8e432825b;
var $75e8ef540fdb7a1c$export$63e9e087a73f808b;
var $75e8ef540fdb7a1c$export$d35bc1e505d1ebbf;
var $75e8ef540fdb7a1c$export$1e0fb04f31d3c22a;
var $75e8ef540fdb7a1c$export$45a5316056cfac3c;
$75e8ef540fdb7a1c$export$8c6320d2db82081f = "_spectrum-Breadcrumbs_3fe6e8";
$75e8ef540fdb7a1c$export$f72910e36cd91d1e = "_spectrum-Breadcrumbs-itemSeparator_3fe6e8";
$75e8ef540fdb7a1c$export$a4561bd665abb5db = "_is-reversed_3fe6e8";
$75e8ef540fdb7a1c$export$492a5983c5fbf603 = "_spectrum-Breadcrumbs-item_3fe6e8";
$75e8ef540fdb7a1c$export$53da69f51b770d3 = "_spectrum-ActionButton_3fe6e8";
$75e8ef540fdb7a1c$export$5af6a1bcd207d9f6 = "_spectrum-Breadcrumbs-itemLink_3fe6e8";
$75e8ef540fdb7a1c$export$b8813cd5d7824ce7 = "_is-hovered_3fe6e8";
$75e8ef540fdb7a1c$export$f39a09f249340e2a = "_focus-ring_3fe6e8";
$75e8ef540fdb7a1c$export$8778c911bed6c759 = "_is-dragged_3fe6e8";
$75e8ef540fdb7a1c$export$e01337e7944312f6 = "_spectrum-Breadcrumbs--small_3fe6e8";
$75e8ef540fdb7a1c$export$19f957201d941895 = "_spectrum-Breadcrumbs--medium_3fe6e8";
$75e8ef540fdb7a1c$export$713961e8e432825b = "_spectrum-Breadcrumbs--multiline_3fe6e8";
$75e8ef540fdb7a1c$export$63e9e087a73f808b = "_spectrum-Heading--pageTitle_3fe6e8";
$75e8ef540fdb7a1c$export$d35bc1e505d1ebbf = "_is-disabled_3fe6e8";
$75e8ef540fdb7a1c$export$1e0fb04f31d3c22a = "_is-selected_3fe6e8";
$75e8ef540fdb7a1c$export$45a5316056cfac3c = "_spectrum-Breadcrumb_3fe6e8";





function $9c97807809bfce2c$export$c13f210c706eb549(props) {
    let { children: children , isCurrent: isCurrent , isDisabled: isDisabled  } = props;
    let { direction: direction  } = $fIf3y$reactariai18n.useLocale();
    let ref = $fIf3y$react.useRef();
    let { itemProps: itemProps  } = $fIf3y$reactariabreadcrumbs.useBreadcrumbItem({
        ...props,
        elementType: typeof children === 'string' ? 'span' : 'a'
    }, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $fIf3y$reactariainteractions.useHover(props);
    let element = /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).cloneElement($fIf3y$reactspectrumutils.getWrappedElement(children), {
        ...$fIf3y$reactariautils.mergeProps(itemProps, hoverProps),
        ref: ref,
        className: $fIf3y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($75e8ef540fdb7a1c$exports)), 'spectrum-Breadcrumbs-itemLink', {
            'is-disabled': !isCurrent && isDisabled,
            'is-hovered': isHovered
        })
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement($fIf3y$react.Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement($fIf3y$reactariafocus.FocusRing, {
        focusRingClass: $fIf3y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($75e8ef540fdb7a1c$exports)), 'focus-ring')
    }, element), isCurrent === false && /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement(($parcel$interopDefault($fIf3y$spectrumiconsuiChevronRightSmall)), {
        UNSAFE_className: $fIf3y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($75e8ef540fdb7a1c$exports)), 'spectrum-Breadcrumbs-itemSeparator', {
            'is-reversed': direction === 'rtl'
        })
    })));
}











const $c0c816dee5a7d969$var$MIN_VISIBLE_ITEMS = 1;
const $c0c816dee5a7d969$var$MAX_VISIBLE_ITEMS = 4;
function $c0c816dee5a7d969$var$Breadcrumbs(props, ref) {
    props = $fIf3y$reactspectrumprovider.useProviderProps(props);
    let { size: size = 'L' , isMultiline: isMultiline , children: children , showRoot: showRoot , isDisabled: isDisabled , onAction: onAction , ...otherProps } = props;
    // Not using React.Children.toArray because it mutates the key prop.
    let childArray = [];
    ($parcel$interopDefault($fIf3y$react)).Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).isValidElement(child)) childArray.push(child);
    });
    let domRef = $fIf3y$reactspectrumutils.useDOMRef(ref);
    let listRef = $fIf3y$react.useRef(null);
    let [visibleItems1, setVisibleItems] = $fIf3y$reactariautils.useValueEffect(childArray.length);
    let { navProps: navProps  } = $fIf3y$reactariabreadcrumbs.useBreadcrumbs(props);
    let { styleProps: styleProps  } = $fIf3y$reactspectrumutils.useStyleProps(otherProps);
    let updateOverflow = $fIf3y$react.useCallback(()=>{
        let computeVisibleItems = (visibleItems)=>{
            // Refs can be null at runtime.
            let currListRef = listRef.current;
            if (!currListRef) return;
            let listItems = Array.from(currListRef.children);
            let containerWidth = currListRef.offsetWidth;
            let isShowingMenu = childArray.length > visibleItems;
            let calculatedWidth = 0;
            let newVisibleItems = 0;
            let maxVisibleItems = $c0c816dee5a7d969$var$MAX_VISIBLE_ITEMS;
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
            return Math.max($c0c816dee5a7d969$var$MIN_VISIBLE_ITEMS, Math.min(maxVisibleItems, newVisibleItems));
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
    $fIf3y$reactariautils.useResizeObserver({
        ref: domRef,
        onResize: updateOverflow
    });
    $fIf3y$reactariautils.useLayoutEffect(updateOverflow, [
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
        let menuItem = /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement($9c97807809bfce2c$export$c13f210c706eb549, {
            key: "menu"
        }, /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement($fIf3y$reactspectrummenu.MenuTrigger, null, /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement($fIf3y$reactspectrumbutton.ActionButton, {
            "aria-label": "…",
            isQuiet: true,
            isDisabled: isDisabled
        }, /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement(($parcel$interopDefault($fIf3y$spectrumiconsuiFolderBreadcrumb)), null)), /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement($fIf3y$reactspectrummenu.Menu, {
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
        return(/*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement("li", {
            key: key,
            className: $fIf3y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($75e8ef540fdb7a1c$exports)), 'spectrum-Breadcrumbs-item')
        }, /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement($9c97807809bfce2c$export$c13f210c706eb549, {
            isCurrent: isCurrent,
            isDisabled: isDisabled,
            onPress: onPress
        }, child.props.children)));
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement("nav", {
        ...styleProps,
        ...navProps,
        ref: domRef
    }, /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).createElement("ul", {
        ref: listRef,
        className: $fIf3y$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($75e8ef540fdb7a1c$exports)), 'spectrum-Breadcrumbs', {
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
 */ let $c0c816dee5a7d969$export$2dc68d50d56fbbd = /*#__PURE__*/ ($parcel$interopDefault($fIf3y$react)).forwardRef($c0c816dee5a7d969$var$Breadcrumbs);



$parcel$exportWildcard(module.exports, $c0c816dee5a7d969$exports);


//# sourceMappingURL=main.js.map
