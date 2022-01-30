require("./main.css");
var $corde$reactspectrumutils = require("@react-spectrum/utils");
var $corde$reactstatelylayout = require("@react-stately/layout");
var $corde$react = require("react");
var $corde$reactariai18n = require("@react-aria/i18n");
var $corde$reactariasidenav = require("@react-aria/sidenav");
var $corde$reactstatelytree = require("@react-stately/tree");
var $corde$reactariavirtualizer = require("@react-aria/virtualizer");
var $corde$reactariafocus = require("@react-aria/focus");
var $corde$reactariautils = require("@react-aria/utils");
var $corde$reactariainteractions = require("@react-aria/interactions");
var $corde$reactarialistbox = require("@react-aria/listbox");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f1848727a0191956$exports = {};

$parcel$export($f1848727a0191956$exports, "SideNav", () => $f1848727a0191956$export$1a35787d6353cf6a);




const $2267932d403a984a$export$33f9eded602e3caf = ($parcel$interopDefault($corde$react)).createContext(null);







var $d91f5f74ddb38663$exports = {};

$parcel$export($d91f5f74ddb38663$exports, "spectrum-SideNav", () => $d91f5f74ddb38663$export$ab4aeccb79b26c40, (v) => $d91f5f74ddb38663$export$ab4aeccb79b26c40 = v);
$parcel$export($d91f5f74ddb38663$exports, "spectrum-SideNav-item", () => $d91f5f74ddb38663$export$569596c79bc8aa46, (v) => $d91f5f74ddb38663$export$569596c79bc8aa46 = v);
$parcel$export($d91f5f74ddb38663$exports, "spectrum-SideNav-itemLink", () => $d91f5f74ddb38663$export$4e8c75e01aa6ae07, (v) => $d91f5f74ddb38663$export$4e8c75e01aa6ae07 = v);
$parcel$export($d91f5f74ddb38663$exports, "focus-ring", () => $d91f5f74ddb38663$export$f39a09f249340e2a, (v) => $d91f5f74ddb38663$export$f39a09f249340e2a = v);
$parcel$export($d91f5f74ddb38663$exports, "spectrum-SideNav-itemIcon", () => $d91f5f74ddb38663$export$806518d850a15282, (v) => $d91f5f74ddb38663$export$806518d850a15282 = v);
$parcel$export($d91f5f74ddb38663$exports, "spectrum-SideNav-heading", () => $d91f5f74ddb38663$export$8c136f4f45680036, (v) => $d91f5f74ddb38663$export$8c136f4f45680036 = v);
$parcel$export($d91f5f74ddb38663$exports, "spectrum-SideNav--multiLevel", () => $d91f5f74ddb38663$export$ab86cca252369409, (v) => $d91f5f74ddb38663$export$ab86cca252369409 = v);
$parcel$export($d91f5f74ddb38663$exports, "is-selected", () => $d91f5f74ddb38663$export$1e0fb04f31d3c22a, (v) => $d91f5f74ddb38663$export$1e0fb04f31d3c22a = v);
$parcel$export($d91f5f74ddb38663$exports, "is-active", () => $d91f5f74ddb38663$export$20fd0f7cd4e6112f, (v) => $d91f5f74ddb38663$export$20fd0f7cd4e6112f = v);
$parcel$export($d91f5f74ddb38663$exports, "is-disabled", () => $d91f5f74ddb38663$export$d35bc1e505d1ebbf, (v) => $d91f5f74ddb38663$export$d35bc1e505d1ebbf = v);
$parcel$export($d91f5f74ddb38663$exports, "is-hovered", () => $d91f5f74ddb38663$export$b8813cd5d7824ce7, (v) => $d91f5f74ddb38663$export$b8813cd5d7824ce7 = v);
var $d91f5f74ddb38663$export$ab4aeccb79b26c40;
var $d91f5f74ddb38663$export$569596c79bc8aa46;
var $d91f5f74ddb38663$export$4e8c75e01aa6ae07;
var $d91f5f74ddb38663$export$f39a09f249340e2a;
var $d91f5f74ddb38663$export$806518d850a15282;
var $d91f5f74ddb38663$export$8c136f4f45680036;
var $d91f5f74ddb38663$export$ab86cca252369409;
var $d91f5f74ddb38663$export$1e0fb04f31d3c22a;
var $d91f5f74ddb38663$export$20fd0f7cd4e6112f;
var $d91f5f74ddb38663$export$d35bc1e505d1ebbf;
var $d91f5f74ddb38663$export$b8813cd5d7824ce7;
$d91f5f74ddb38663$export$ab4aeccb79b26c40 = "_spectrum-SideNav_f044ae";
$d91f5f74ddb38663$export$569596c79bc8aa46 = "_spectrum-SideNav-item_f044ae";
$d91f5f74ddb38663$export$4e8c75e01aa6ae07 = "_spectrum-SideNav-itemLink_f044ae";
$d91f5f74ddb38663$export$f39a09f249340e2a = "_focus-ring_f044ae";
$d91f5f74ddb38663$export$806518d850a15282 = "_spectrum-SideNav-itemIcon_f044ae";
$d91f5f74ddb38663$export$8c136f4f45680036 = "_spectrum-SideNav-heading_f044ae";
$d91f5f74ddb38663$export$ab86cca252369409 = "_spectrum-SideNav--multiLevel_f044ae";
$d91f5f74ddb38663$export$1e0fb04f31d3c22a = "_is-selected_f044ae";
$d91f5f74ddb38663$export$20fd0f7cd4e6112f = "_is-active_f044ae";
$d91f5f74ddb38663$export$d35bc1e505d1ebbf = "_is-disabled_f044ae";
$d91f5f74ddb38663$export$b8813cd5d7824ce7 = "_is-hovered_f044ae";




function $6e397c66d0c0f16c$export$9dad30d25aa3c47f(props) {
    let ref = $corde$react.useRef();
    let { key: key , rendered: rendered  } = props.item;
    let state = $corde$react.useContext($2267932d403a984a$export$33f9eded602e3caf);
    let isSelected = state.selectionManager.isSelected(key);
    let isDisabled = state.disabledKeys.has(key);
    let className = $corde$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($d91f5f74ddb38663$exports)), 'spectrum-SideNav-item', {
        'is-selected': isSelected,
        'is-disabled': isDisabled
    });
    let { listItemProps: listItemProps , listItemLinkProps: listItemLinkProps  } = $corde$reactariasidenav.useSideNavItem(props, state, ref);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $corde$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement("div", {
        ...listItemProps,
        className: className
    }, /*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement($corde$reactariafocus.FocusRing, {
        focusRingClass: $corde$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($d91f5f74ddb38663$exports)), 'focus-ring')
    }, /*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement("a", {
        ...$corde$reactariautils.mergeProps(listItemLinkProps, hoverProps),
        ref: ref,
        className: $corde$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($d91f5f74ddb38663$exports)), 'spectrum-SideNav-itemLink', {
            'is-hovered': isHovered
        })
    }, rendered))));
}








function $23a0cf5eb4ce0bbb$export$d69336337ba3627d(props) {
    let { children: children , reusableView: reusableView , header: header  } = props;
    let item = reusableView.content;
    let { headingProps: headingProps , groupProps: groupProps  } = $corde$reactarialistbox.useListBoxSection({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let headerRef = $corde$react.useRef();
    $corde$reactariavirtualizer.useVirtualizerItem({
        reusableView: header,
        ref: headerRef
    });
    let { direction: direction  } = $corde$reactariai18n.useLocale();
    return(/*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement($corde$react.Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement("div", {
        role: "presentation",
        ref: headerRef,
        style: $corde$reactariavirtualizer.layoutInfoToStyle(header.layoutInfo, direction)
    }, item.rendered && /*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement("div", {
        ...headingProps,
        className: $corde$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($d91f5f74ddb38663$exports)), 'spectrum-SideNav-heading')
    }, item.rendered)), /*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement("div", {
        ...groupProps,
        style: $corde$reactariavirtualizer.layoutInfoToStyle(reusableView.layoutInfo, direction)
    }, children)));
}







function $f1848727a0191956$export$1a35787d6353cf6a(props) {
    let state = $corde$reactstatelytree.useTreeState(props);
    let collator = $corde$reactariai18n.useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let layout = $corde$react.useMemo(()=>new $corde$reactstatelylayout.ListLayout({
            rowHeight: 40,
            collator: collator
        })
    , [
        collator
    ]);
    let ref = $corde$react.useRef();
    let { navProps: navProps , listProps: listProps  } = $corde$reactariasidenav.useSideNav({
        ...props,
        layout: layout
    }, state, ref);
    let { styleProps: styleProps  } = $corde$reactspectrumutils.useStyleProps(props);
    layout.collection = state.collection;
    layout.disabledKeys = state.disabledKeys;
    let renderWrapper = (parent, reusableView, children, renderChildren)=>{
        if (reusableView.viewType === 'section') return(/*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement($23a0cf5eb4ce0bbb$export$d69336337ba3627d, {
            key: reusableView.key,
            reusableView: reusableView,
            header: children.find((c)=>c.viewType === 'header'
            )
        }, renderChildren(children.filter((c)=>c.viewType === 'item'
        ))));
        return(/*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement($corde$reactariavirtualizer.VirtualizerItem, {
            key: reusableView.key,
            reusableView: reusableView,
            parent: parent
        }));
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement("nav", {
        ...navProps,
        ...styleProps
    }, /*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement($2267932d403a984a$export$33f9eded602e3caf.Provider, {
        value: state
    }, /*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement($corde$reactariavirtualizer.Virtualizer, {
        ...listProps,
        ref: ref,
        focusedKey: state.selectionManager.focusedKey,
        className: $corde$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($d91f5f74ddb38663$exports)), 'spectrum-SideNav'),
        layout: layout,
        collection: state.collection,
        renderWrapper: renderWrapper
    }, (type, item)=>{
        if (type === 'item') return(/*#__PURE__*/ ($parcel$interopDefault($corde$react)).createElement($6e397c66d0c0f16c$export$9dad30d25aa3c47f, {
            item: item
        }));
    }))));
}


$parcel$exportWildcard(module.exports, $f1848727a0191956$exports);


//# sourceMappingURL=main.js.map
