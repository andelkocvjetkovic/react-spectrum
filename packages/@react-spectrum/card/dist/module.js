import "./main.css";
import {useStyleProps as $k8Xpo$useStyleProps, useDOMRef as $k8Xpo$useDOMRef, classNames as $k8Xpo$classNames, useUnwrapDOMRef as $k8Xpo$useUnwrapDOMRef, useHasChild as $k8Xpo$useHasChild, SlotProvider as $k8Xpo$SlotProvider} from "@react-spectrum/utils";
import {GridCollection as $k8Xpo$GridCollection, useGridState as $k8Xpo$useGridState} from "@react-stately/grid";
import {ProgressCircle as $k8Xpo$ProgressCircle} from "@react-spectrum/progress";
import $k8Xpo$react, {useMemo as $k8Xpo$useMemo, useCallback as $k8Xpo$useCallback, useRef as $k8Xpo$useRef, useState as $k8Xpo$useState, useContext as $k8Xpo$useContext, forwardRef as $k8Xpo$forwardRef} from "react";
import {useCollator as $k8Xpo$useCollator, useMessageFormatter as $k8Xpo$useMessageFormatter, useLocale as $k8Xpo$useLocale} from "@react-aria/i18n";
import {useGrid as $k8Xpo$useGrid, useGridRow as $k8Xpo$useGridRow, useGridCell as $k8Xpo$useGridCell} from "@react-aria/grid";
import {useListState as $k8Xpo$useListState} from "@react-stately/list";
import {useProvider as $k8Xpo$useProvider, useProviderProps as $k8Xpo$useProviderProps} from "@react-spectrum/provider";
import {VirtualizerItem as $k8Xpo$VirtualizerItem, Virtualizer as $k8Xpo$Virtualizer} from "@react-aria/virtualizer";
import {Checkbox as $k8Xpo$Checkbox} from "@react-spectrum/checkbox";
import {useResizeObserver as $k8Xpo$useResizeObserver, useLayoutEffect as $k8Xpo$useLayoutEffect, mergeProps as $k8Xpo$mergeProps, filterDOMProps as $k8Xpo$filterDOMProps, useSlotId as $k8Xpo$useSlotId} from "@react-aria/utils";
import {getFocusableTreeWalker as $k8Xpo$getFocusableTreeWalker, FocusRing as $k8Xpo$FocusRing} from "@react-aria/focus";
import {useHover as $k8Xpo$useHover, useFocusWithin as $k8Xpo$useFocusWithin} from "@react-aria/interactions";
import {Size as $k8Xpo$Size, Rect as $k8Xpo$Rect, LayoutInfo as $k8Xpo$LayoutInfo, Layout as $k8Xpo$Layout} from "@react-stately/virtualizer";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $49e01256efa8773b$exports = {};

$parcel$export($49e01256efa8773b$exports, "CardView", () => $49e01256efa8773b$export$7e52c821f7b6f422);






var $2ebe8b6b61a3e4e2$exports = {};

$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card", () => $2ebe8b6b61a3e4e2$export$4e5e9f191b1edb8, (v) => $2ebe8b6b61a3e4e2$export$4e5e9f191b1edb8 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-heading", () => $2ebe8b6b61a3e4e2$export$92758a4a0e8d19e4, (v) => $2ebe8b6b61a3e4e2$export$92758a4a0e8d19e4 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-checkboxWrapper", () => $2ebe8b6b61a3e4e2$export$33977546b63e0df9, (v) => $2ebe8b6b61a3e4e2$export$33977546b63e0df9 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-checkbox", () => $2ebe8b6b61a3e4e2$export$842da5d48b8f6db2, (v) => $2ebe8b6b61a3e4e2$export$842da5d48b8f6db2 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "is-focused", () => $2ebe8b6b61a3e4e2$export$e7dc768d35940237, (v) => $2ebe8b6b61a3e4e2$export$e7dc768d35940237 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "is-selected", () => $2ebe8b6b61a3e4e2$export$1e0fb04f31d3c22a, (v) => $2ebe8b6b61a3e4e2$export$1e0fb04f31d3c22a = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "focus-ring", () => $2ebe8b6b61a3e4e2$export$f39a09f249340e2a, (v) => $2ebe8b6b61a3e4e2$export$f39a09f249340e2a = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "is-hovered", () => $2ebe8b6b61a3e4e2$export$b8813cd5d7824ce7, (v) => $2ebe8b6b61a3e4e2$export$b8813cd5d7824ce7 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-grid", () => $2ebe8b6b61a3e4e2$export$b3dd760d2dfde29e, (v) => $2ebe8b6b61a3e4e2$export$b3dd760d2dfde29e = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-decoration", () => $2ebe8b6b61a3e4e2$export$48252dc130b62514, (v) => $2ebe8b6b61a3e4e2$export$48252dc130b62514 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-image", () => $2ebe8b6b61a3e4e2$export$8d5fea71dc66db80, (v) => $2ebe8b6b61a3e4e2$export$8d5fea71dc66db80 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-illustration", () => $2ebe8b6b61a3e4e2$export$13dd3510ae7a8399, (v) => $2ebe8b6b61a3e4e2$export$13dd3510ae7a8399 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-avatar", () => $2ebe8b6b61a3e4e2$export$159930c59efb6273, (v) => $2ebe8b6b61a3e4e2$export$159930c59efb6273 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-detail", () => $2ebe8b6b61a3e4e2$export$16715af38fbd9819, (v) => $2ebe8b6b61a3e4e2$export$16715af38fbd9819 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card-content", () => $2ebe8b6b61a3e4e2$export$d946625b97e8aa17, (v) => $2ebe8b6b61a3e4e2$export$d946625b97e8aa17 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--waterfall", () => $2ebe8b6b61a3e4e2$export$d9c7209e0e4f7e4d, (v) => $2ebe8b6b61a3e4e2$export$d9c7209e0e4f7e4d = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--default", () => $2ebe8b6b61a3e4e2$export$c7a022df9e10a238, (v) => $2ebe8b6b61a3e4e2$export$c7a022df9e10a238 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--noPreview", () => $2ebe8b6b61a3e4e2$export$b77922bc0320c9e4, (v) => $2ebe8b6b61a3e4e2$export$b77922bc0320c9e4 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--grid", () => $2ebe8b6b61a3e4e2$export$59739ab951d2dcc7, (v) => $2ebe8b6b61a3e4e2$export$59739ab951d2dcc7 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--noLayout", () => $2ebe8b6b61a3e4e2$export$a03d836e6ef3e749, (v) => $2ebe8b6b61a3e4e2$export$a03d836e6ef3e749 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--isQuiet", () => $2ebe8b6b61a3e4e2$export$92ad04b5ac9296ea, (v) => $2ebe8b6b61a3e4e2$export$92ad04b5ac9296ea = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--gallery", () => $2ebe8b6b61a3e4e2$export$ccd8ffc36bd10cc, (v) => $2ebe8b6b61a3e4e2$export$ccd8ffc36bd10cc = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-Card--horizontal", () => $2ebe8b6b61a3e4e2$export$1c52334407225704, (v) => $2ebe8b6b61a3e4e2$export$1c52334407225704 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-CardView", () => $2ebe8b6b61a3e4e2$export$2f34e9e3e0b89d95, (v) => $2ebe8b6b61a3e4e2$export$2f34e9e3e0b89d95 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-CardView-centeredWrapper", () => $2ebe8b6b61a3e4e2$export$7fc89689fcfab196, (v) => $2ebe8b6b61a3e4e2$export$7fc89689fcfab196 = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "spectrum-CardView-row", () => $2ebe8b6b61a3e4e2$export$4746ac09daa215ae, (v) => $2ebe8b6b61a3e4e2$export$4746ac09daa215ae = v);
$parcel$export($2ebe8b6b61a3e4e2$exports, "is-drop-target", () => $2ebe8b6b61a3e4e2$export$d8467f38d2d00bd0, (v) => $2ebe8b6b61a3e4e2$export$d8467f38d2d00bd0 = v);
var $2ebe8b6b61a3e4e2$export$4e5e9f191b1edb8;
var $2ebe8b6b61a3e4e2$export$92758a4a0e8d19e4;
var $2ebe8b6b61a3e4e2$export$33977546b63e0df9;
var $2ebe8b6b61a3e4e2$export$842da5d48b8f6db2;
var $2ebe8b6b61a3e4e2$export$e7dc768d35940237;
var $2ebe8b6b61a3e4e2$export$1e0fb04f31d3c22a;
var $2ebe8b6b61a3e4e2$export$f39a09f249340e2a;
var $2ebe8b6b61a3e4e2$export$b8813cd5d7824ce7;
var $2ebe8b6b61a3e4e2$export$b3dd760d2dfde29e;
var $2ebe8b6b61a3e4e2$export$48252dc130b62514;
var $2ebe8b6b61a3e4e2$export$8d5fea71dc66db80;
var $2ebe8b6b61a3e4e2$export$13dd3510ae7a8399;
var $2ebe8b6b61a3e4e2$export$159930c59efb6273;
var $2ebe8b6b61a3e4e2$export$16715af38fbd9819;
var $2ebe8b6b61a3e4e2$export$d946625b97e8aa17;
var $2ebe8b6b61a3e4e2$export$d9c7209e0e4f7e4d;
var $2ebe8b6b61a3e4e2$export$c7a022df9e10a238;
var $2ebe8b6b61a3e4e2$export$b77922bc0320c9e4;
var $2ebe8b6b61a3e4e2$export$59739ab951d2dcc7;
var $2ebe8b6b61a3e4e2$export$a03d836e6ef3e749;
var $2ebe8b6b61a3e4e2$export$92ad04b5ac9296ea;
var $2ebe8b6b61a3e4e2$export$ccd8ffc36bd10cc;
var $2ebe8b6b61a3e4e2$export$1c52334407225704;
var $2ebe8b6b61a3e4e2$export$2f34e9e3e0b89d95;
var $2ebe8b6b61a3e4e2$export$7fc89689fcfab196;
var $2ebe8b6b61a3e4e2$export$4746ac09daa215ae;
var $2ebe8b6b61a3e4e2$export$d8467f38d2d00bd0;
$2ebe8b6b61a3e4e2$export$4e5e9f191b1edb8 = "_spectrum-Card_6fdf9f";
$2ebe8b6b61a3e4e2$export$92758a4a0e8d19e4 = "_spectrum-Card-heading_6fdf9f";
$2ebe8b6b61a3e4e2$export$33977546b63e0df9 = "_spectrum-Card-checkboxWrapper_6fdf9f";
$2ebe8b6b61a3e4e2$export$842da5d48b8f6db2 = "_spectrum-Card-checkbox_6fdf9f";
$2ebe8b6b61a3e4e2$export$e7dc768d35940237 = "_is-focused_6fdf9f";
$2ebe8b6b61a3e4e2$export$1e0fb04f31d3c22a = "_is-selected_6fdf9f";
$2ebe8b6b61a3e4e2$export$f39a09f249340e2a = "_focus-ring_6fdf9f";
$2ebe8b6b61a3e4e2$export$b8813cd5d7824ce7 = "_is-hovered_6fdf9f";
$2ebe8b6b61a3e4e2$export$b3dd760d2dfde29e = "_spectrum-Card-grid_6fdf9f";
$2ebe8b6b61a3e4e2$export$48252dc130b62514 = "_spectrum-Card-decoration_6fdf9f";
$2ebe8b6b61a3e4e2$export$8d5fea71dc66db80 = "_spectrum-Card-image_6fdf9f";
$2ebe8b6b61a3e4e2$export$13dd3510ae7a8399 = "_spectrum-Card-illustration_6fdf9f";
$2ebe8b6b61a3e4e2$export$159930c59efb6273 = "_spectrum-Card-avatar_6fdf9f";
$2ebe8b6b61a3e4e2$export$16715af38fbd9819 = "_spectrum-Card-detail_6fdf9f";
$2ebe8b6b61a3e4e2$export$d946625b97e8aa17 = "_spectrum-Card-content_6fdf9f";
$2ebe8b6b61a3e4e2$export$d9c7209e0e4f7e4d = "_spectrum-Card--waterfall_6fdf9f";
$2ebe8b6b61a3e4e2$export$c7a022df9e10a238 = "_spectrum-Card--default_6fdf9f";
$2ebe8b6b61a3e4e2$export$b77922bc0320c9e4 = "_spectrum-Card--noPreview_6fdf9f";
$2ebe8b6b61a3e4e2$export$59739ab951d2dcc7 = "_spectrum-Card--grid_6fdf9f";
$2ebe8b6b61a3e4e2$export$a03d836e6ef3e749 = "_spectrum-Card--noLayout_6fdf9f";
$2ebe8b6b61a3e4e2$export$92ad04b5ac9296ea = "_spectrum-Card--isQuiet_6fdf9f";
$2ebe8b6b61a3e4e2$export$ccd8ffc36bd10cc = "_spectrum-Card--gallery_6fdf9f";
$2ebe8b6b61a3e4e2$export$1c52334407225704 = "_spectrum-Card--horizontal_6fdf9f";
$2ebe8b6b61a3e4e2$export$2f34e9e3e0b89d95 = "_spectrum-CardView_6fdf9f";
$2ebe8b6b61a3e4e2$export$7fc89689fcfab196 = "_spectrum-CardView-centeredWrapper_6fdf9f";
$2ebe8b6b61a3e4e2$export$4746ac09daa215ae = "_spectrum-CardView-row_6fdf9f";
$2ebe8b6b61a3e4e2$export$d8467f38d2d00bd0 = "_is-drop-target_6fdf9f";



const $986281b61f26b6f8$export$64992ac69f286e5c = /*#__PURE__*/ $k8Xpo$react.createContext(null);
function $986281b61f26b6f8$export$fea0b38586ec8f13() {
    return $k8Xpo$useContext($986281b61f26b6f8$export$64992ac69f286e5c);
}




function $6b5e97142b400aef$var$CardBase(props, ref) {
    props = $k8Xpo$useProviderProps(props);
    let context = $986281b61f26b6f8$export$fea0b38586ec8f13() || {
    }; // we can call again here, won't change from Card.tsx
    let { state: state  } = context;
    let manager = state?.selectionManager;
    let { isQuiet: isQuiet , orientation: orientation = 'vertical' , articleProps: articleProps = {
    } , item: item , layout: layout , children: children  } = props;
    let key = item?.key;
    let isSelected = manager?.isSelected(key);
    let isDisabled = state?.disabledKeys.has(key);
    let onChange = ()=>manager?.select(key)
    ;
    let { styleProps: styleProps  } = $k8Xpo$useStyleProps(props);
    let { cardProps: cardProps , titleProps: titleProps , contentProps: contentProps  } = $6b5e97142b400aef$var$useCard(props);
    let domRef = $k8Xpo$useDOMRef(ref);
    let gridRef = $k8Xpo$useRef();
    let checkboxRef = $k8Xpo$useRef(null);
    // cards are only interactive if there is a selection manager and it allows selection
    let { hoverProps: hoverProps , isHovered: isHovered  } = $k8Xpo$useHover({
        isDisabled: manager === undefined || manager?.selectionMode === 'none' || isDisabled
    });
    let [isFocused, setIsFocused] = $k8Xpo$useState(false);
    let { focusWithinProps: focusWithinProps  } = $k8Xpo$useFocusWithin({
        onFocusWithinChange: setIsFocused,
        isDisabled: isDisabled
    });
    // ToDo: see css for comment about avatar under selector .spectrum-Card--noLayout.spectrum-Card--default
    let hasPreviewImage = $k8Xpo$useHasChild(`.${(/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports))['spectrum-Card-image']}`, gridRef);
    let hasPreviewIllustration = $k8Xpo$useHasChild(`.${(/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports))['spectrum-Card-illustration']}`, gridRef);
    let hasPreview = hasPreviewImage || hasPreviewIllustration;
    // this is for horizontal cards
    let [height, setHeight] = $k8Xpo$useState(NaN);
    let updateHeight = $k8Xpo$useCallback(()=>{
        if (orientation !== 'horizontal') return;
        let cardHeight = gridRef.current.getBoundingClientRect().height;
        setHeight(cardHeight);
    }, [
        orientation,
        gridRef,
        setHeight
    ]);
    $k8Xpo$useResizeObserver({
        ref: gridRef,
        onResize: updateHeight
    });
    let aspectRatioEnforce = undefined;
    if (orientation === 'horizontal' && !isNaN(height)) aspectRatioEnforce = {
        height: `${height}px`,
        width: `${height}px`
    };
    let slots = $k8Xpo$useMemo(()=>({
            image: {
                UNSAFE_className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-image'),
                objectFit: orientation === 'horizontal' ? 'cover' : 'contain',
                alt: '',
                ...aspectRatioEnforce
            },
            illustration: {
                UNSAFE_className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-illustration'),
                ...aspectRatioEnforce
            },
            avatar: {
                UNSAFE_className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-avatar'),
                size: 'avatar-size-400'
            },
            heading: {
                UNSAFE_className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-heading'),
                ...titleProps
            },
            content: {
                UNSAFE_className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-content'),
                ...contentProps
            },
            detail: {
                UNSAFE_className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-detail')
            }
        })
    , [
        titleProps,
        contentProps,
        height,
        isQuiet,
        orientation
    ]);
    $k8Xpo$useLayoutEffect(()=>{
        if (gridRef?.current) {
            let walker = $k8Xpo$getFocusableTreeWalker(gridRef.current);
            let nextNode = walker.nextNode();
            while(nextNode != null){
                if (checkboxRef.current && !checkboxRef.current.UNSAFE_getDOMNode().contains(nextNode)) {
                    console.warn('Card does not support focusable elements, please contact the team regarding your use case.');
                    break;
                }
                nextNode = walker.nextNode();
            }
        }
    }, [
        children
    ]);
    return(/*#__PURE__*/ $k8Xpo$react.createElement($k8Xpo$FocusRing, {
        focusRingClass: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'focus-ring')
    }, /*#__PURE__*/ $k8Xpo$react.createElement("article", {
        ...styleProps,
        ...$k8Xpo$mergeProps(cardProps, focusWithinProps, hoverProps, $k8Xpo$filterDOMProps(props), articleProps),
        ref: domRef,
        className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card', {
            'spectrum-Card--default': !isQuiet && orientation !== 'horizontal',
            'spectrum-Card--isQuiet': isQuiet && orientation !== 'horizontal',
            'spectrum-Card--horizontal': orientation === 'horizontal',
            'spectrum-Card--noPreview': !hasPreview,
            'is-hovered': isHovered,
            'is-focused': isFocused,
            'is-selected': isSelected,
            'spectrum-Card--waterfall': layout === 'waterfall',
            'spectrum-Card--gallery': layout === 'gallery',
            'spectrum-Card--grid': layout === 'grid',
            'spectrum-Card--noLayout': layout !== 'waterfall' && layout !== 'gallery' && layout !== 'grid'
        }, styleProps.className)
    }, /*#__PURE__*/ $k8Xpo$react.createElement("div", {
        ref: gridRef,
        className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-grid')
    }, manager && manager.selectionMode !== 'none' && /*#__PURE__*/ $k8Xpo$react.createElement("div", {
        className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-checkboxWrapper')
    }, /*#__PURE__*/ $k8Xpo$react.createElement($k8Xpo$Checkbox, {
        ref: checkboxRef,
        isDisabled: isDisabled,
        excludeFromTabOrder: true,
        isSelected: isSelected,
        onChange: onChange,
        UNSAFE_className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-checkbox'),
        isEmphasized: true,
        "aria-label": "select"
    })), /*#__PURE__*/ $k8Xpo$react.createElement($k8Xpo$SlotProvider, {
        slots: slots
    }, children), /*#__PURE__*/ $k8Xpo$react.createElement("div", {
        className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-Card-decoration')
    })))));
}
function $6b5e97142b400aef$var$useCard(props) {
    let titleId = $k8Xpo$useSlotId();
    let descriptionId = $k8Xpo$useSlotId();
    let titleProps = $k8Xpo$useMemo(()=>({
            id: titleId
        })
    , [
        titleId
    ]);
    let contentProps = $k8Xpo$useMemo(()=>({
            id: descriptionId
        })
    , [
        descriptionId
    ]);
    return {
        cardProps: {
            ...$k8Xpo$filterDOMProps(props),
            'aria-labelledby': titleId,
            'aria-describedby': descriptionId,
            tabIndex: 0
        },
        titleProps: titleProps,
        contentProps: contentProps
    };
}
/**
 * TODO: Add description of component here.
 */ const $6b5e97142b400aef$export$7a6ccaf429ad93a8 = /*#__PURE__*/ $k8Xpo$react.forwardRef($6b5e97142b400aef$var$CardBase);





var $a73b431571b8acdf$exports = {};
var $121b9de861db70bb$exports = {};
$121b9de861db70bb$exports = JSON.parse("{\"loading\":\"جارٍ التحميل...\",\"loadingMore\":\"جارٍ تحميل المزيد...\"}");


var $a94e4ec51fcd3277$exports = {};
$a94e4ec51fcd3277$exports = JSON.parse("{\"loading\":\"Зареждане...\",\"loadingMore\":\"Зареждане на още...\"}");


var $a75214d8dcc0d596$exports = {};
$a75214d8dcc0d596$exports = JSON.parse("{\"loading\":\"Načítání...\",\"loadingMore\":\"Načítání dalších...\"}");


var $ad72877b3f430353$exports = {};
$ad72877b3f430353$exports = JSON.parse("{\"loading\":\"Indlæser ...\",\"loadingMore\":\"Indlæser flere ...\"}");


var $1c773adf13babfa5$exports = {};
$1c773adf13babfa5$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Mehr laden ...\"}");


var $d3a837a551398017$exports = {};
$d3a837a551398017$exports = JSON.parse("{\"loading\":\"Φόρτωση...\",\"loadingMore\":\"Φόρτωση περισσότερων...\"}");


var $7a9b499237fbf15d$exports = {};
$7a9b499237fbf15d$exports = JSON.parse("{\"loading\":\"Loading…\",\"loadingMore\":\"Loading more…\"}");


var $b1a9f83e476bfdb2$exports = {};
$b1a9f83e476bfdb2$exports = JSON.parse("{\"loading\":\"Cargando…\",\"loadingMore\":\"Cargando más…\"}");


var $5cf0277250393893$exports = {};
$5cf0277250393893$exports = JSON.parse("{\"loading\":\"Laadimine...\",\"loadingMore\":\"Laadi rohkem...\"}");


var $5ba08851a772f704$exports = {};
$5ba08851a772f704$exports = JSON.parse("{\"loading\":\"Ladataan…\",\"loadingMore\":\"Ladataan lisää…\"}");


var $1d5fc4b1450f4030$exports = {};
$1d5fc4b1450f4030$exports = JSON.parse("{\"loading\":\"Chargement...\",\"loadingMore\":\"Chargement supplémentaire...\"}");


var $9ffad553fac21855$exports = {};
$9ffad553fac21855$exports = JSON.parse("{\"loading\":\"טוען...\",\"loadingMore\":\"טוען עוד...\"}");


var $8d898fed25851824$exports = {};
$8d898fed25851824$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $0996fb925072ba43$exports = {};
$0996fb925072ba43$exports = JSON.parse("{\"loading\":\"Betöltés folyamatban…\",\"loadingMore\":\"Továbbiak betöltése folyamatban…\"}");


var $ce23774943552f92$exports = {};
$ce23774943552f92$exports = JSON.parse("{\"loading\":\"Caricamento...\",\"loadingMore\":\"Caricamento altri...\"}");


var $ed8103b91725d855$exports = {};
$ed8103b91725d855$exports = JSON.parse("{\"loading\":\"読み込み中...\",\"loadingMore\":\"さらに読み込み中...\"}");


var $be67d3061c784775$exports = {};
$be67d3061c784775$exports = JSON.parse("{\"loading\":\"로드 중\",\"loadingMore\":\"추가 로드 중\"}");


var $46f5b36c91f8381e$exports = {};
$46f5b36c91f8381e$exports = JSON.parse("{\"loading\":\"Įkeliama...\",\"loadingMore\":\"Įkeliama daugiau...\"}");


var $33e8de5dc1020343$exports = {};
$33e8de5dc1020343$exports = JSON.parse("{\"loading\":\"Notiek ielāde...\",\"loadingMore\":\"Tiek ielādēts vēl...\"}");


var $d3434436573279fd$exports = {};
$d3434436573279fd$exports = JSON.parse("{\"loading\":\"Laster inn ...\",\"loadingMore\":\"Laster inn flere ...\"}");


var $c6aa03f98ebfb572$exports = {};
$c6aa03f98ebfb572$exports = JSON.parse("{\"loading\":\"Laden...\",\"loadingMore\":\"Meer laden...\"}");


var $8aae93e2a356aa1d$exports = {};
$8aae93e2a356aa1d$exports = JSON.parse("{\"loading\":\"Ładowanie...\",\"loadingMore\":\"Wczytywanie większej liczby...\"}");


var $d846fd7fc9763f5d$exports = {};
$d846fd7fc9763f5d$exports = JSON.parse("{\"loading\":\"Carregando...\",\"loadingMore\":\"Carregando mais...\"}");


var $6fba679f035dec2e$exports = {};
$6fba679f035dec2e$exports = JSON.parse("{\"loading\":\"A carregar...\",\"loadingMore\":\"A carregar mais...\"}");


var $bfaed77d7775d45f$exports = {};
$bfaed77d7775d45f$exports = JSON.parse("{\"loading\":\"Se încarcă...\",\"loadingMore\":\"Se încarcă mai multe...\"}");


var $e9a34d69ca51a691$exports = {};
$e9a34d69ca51a691$exports = JSON.parse("{\"loading\":\"Загрузка...\",\"loadingMore\":\"Дополнительная загрузка...\"}");


var $9778118b6688452d$exports = {};
$9778118b6688452d$exports = JSON.parse("{\"loading\":\"Načítava sa...\",\"loadingMore\":\"Načítava sa viac...\"}");


var $e8d7d5a61d199d83$exports = {};
$e8d7d5a61d199d83$exports = JSON.parse("{\"loading\":\"Nalaganje...\",\"loadingMore\":\"Nalaganje več vsebine...\"}");


var $886ee539aa53146b$exports = {};
$886ee539aa53146b$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"loadingMore\":\"Učitavam još...\"}");


var $2417b2fae195e788$exports = {};
$2417b2fae195e788$exports = JSON.parse("{\"loading\":\"Läser in...\",\"loadingMore\":\"Läser in mer...\"}");


var $6837676b6b65dff6$exports = {};
$6837676b6b65dff6$exports = JSON.parse("{\"loading\":\"Yükleniyor...\",\"loadingMore\":\"Daha fazla yükleniyor...\"}");


var $e2ff755858327ccc$exports = {};
$e2ff755858327ccc$exports = JSON.parse("{\"loading\":\"Завантаження…\",\"loadingMore\":\"Завантаження інших об’єктів...\"}");


var $dc6a3b2a3c73155f$exports = {};
$dc6a3b2a3c73155f$exports = JSON.parse("{\"loading\":\"正在加载...\",\"loadingMore\":\"正在加载更多...\"}");


var $2c9d457be2e40756$exports = {};
$2c9d457be2e40756$exports = JSON.parse("{\"loading\":\"正在載入\",\"loadingMore\":\"正在載入更多…\"}");


$a73b431571b8acdf$exports = {
    "ar-AE": $121b9de861db70bb$exports,
    "bg-BG": $a94e4ec51fcd3277$exports,
    "cs-CZ": $a75214d8dcc0d596$exports,
    "da-DK": $ad72877b3f430353$exports,
    "de-DE": $1c773adf13babfa5$exports,
    "el-GR": $d3a837a551398017$exports,
    "en-US": $7a9b499237fbf15d$exports,
    "es-ES": $b1a9f83e476bfdb2$exports,
    "et-EE": $5cf0277250393893$exports,
    "fi-FI": $5ba08851a772f704$exports,
    "fr-FR": $1d5fc4b1450f4030$exports,
    "he-IL": $9ffad553fac21855$exports,
    "hr-HR": $8d898fed25851824$exports,
    "hu-HU": $0996fb925072ba43$exports,
    "it-IT": $ce23774943552f92$exports,
    "ja-JP": $ed8103b91725d855$exports,
    "ko-KR": $be67d3061c784775$exports,
    "lt-LT": $46f5b36c91f8381e$exports,
    "lv-LV": $33e8de5dc1020343$exports,
    "nb-NO": $d3434436573279fd$exports,
    "nl-NL": $c6aa03f98ebfb572$exports,
    "pl-PL": $8aae93e2a356aa1d$exports,
    "pt-BR": $d846fd7fc9763f5d$exports,
    "pt-PT": $6fba679f035dec2e$exports,
    "ro-RO": $bfaed77d7775d45f$exports,
    "ru-RU": $e9a34d69ca51a691$exports,
    "sk-SK": $9778118b6688452d$exports,
    "sl-SI": $e8d7d5a61d199d83$exports,
    "sr-SP": $886ee539aa53146b$exports,
    "sv-SE": $2417b2fae195e788$exports,
    "tr-TR": $6837676b6b65dff6$exports,
    "uk-UA": $e2ff755858327ccc$exports,
    "zh-CN": $dc6a3b2a3c73155f$exports,
    "zh-TW": $2c9d457be2e40756$exports
};










function $49e01256efa8773b$var$CardView(props, ref) {
    let { scale: scale  } = $k8Xpo$useProvider();
    let { styleProps: styleProps  } = $k8Xpo$useStyleProps(props);
    let domRef = $k8Xpo$useDOMRef(ref);
    let { isQuiet: isQuiet , renderEmptyState: renderEmptyState , layout: layout , loadingState: loadingState , onLoadMore: onLoadMore , cardOrientation: cardOrientation = 'vertical'  } = props;
    let collator = $k8Xpo$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let cardViewLayout = $k8Xpo$useMemo(()=>typeof layout === 'function' ? new layout({
            collator: collator,
            cardOrientation: cardOrientation,
            scale: scale
        }) : layout
    , [
        layout,
        collator,
        cardOrientation,
        scale
    ]);
    let layoutType = cardViewLayout.layoutType;
    let formatMessage = $k8Xpo$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($a73b431571b8acdf$exports)));
    let { direction: direction  } = $k8Xpo$useLocale();
    let { collection: collection  } = $k8Xpo$useListState(props);
    let gridCollection = $k8Xpo$useMemo(()=>new $k8Xpo$GridCollection({
            columnCount: 1,
            items: [
                ...collection
            ].map((item)=>({
                    // Makes the Grid row use the keys the user provides to the cards so that selection change via interactions returns the card keys
                    ...item,
                    hasChildNodes: true,
                    childNodes: [
                        {
                            key: `cell-${item.key}`,
                            type: 'cell',
                            value: null,
                            level: 0,
                            rendered: null,
                            textValue: item.textValue,
                            hasChildNodes: false,
                            childNodes: []
                        }
                    ]
                })
            )
        })
    , [
        collection
    ]);
    let state = $k8Xpo$useGridState({
        ...props,
        selectionMode: cardOrientation === 'horizontal' && layoutType === 'grid' ? 'none' : props.selectionMode,
        collection: gridCollection,
        focusMode: 'cell'
    });
    cardViewLayout.collection = gridCollection;
    cardViewLayout.disabledKeys = state.disabledKeys;
    cardViewLayout.isLoading = isLoading;
    cardViewLayout.direction = direction;
    let { gridProps: gridProps  } = $k8Xpo$useGrid({
        ...props,
        isVirtualized: true,
        keyboardDelegate: cardViewLayout
    }, state, domRef);
    let renderWrapper = (parent, reusableView)=>/*#__PURE__*/ $k8Xpo$react.createElement($k8Xpo$VirtualizerItem, {
            key: reusableView.key,
            reusableView: reusableView,
            parent: parent
        })
    ;
    let focusedKey = state.selectionManager.focusedKey;
    let focusedItem = gridCollection.getItem(state.selectionManager.focusedKey);
    if (focusedItem?.parentKey != null) focusedKey = focusedItem.parentKey;
    let margin = cardViewLayout.margin || 0;
    let virtualizer = cardViewLayout.virtualizer;
    let scrollToItem = $k8Xpo$useCallback((key)=>{
        virtualizer && virtualizer.scrollToItem(key, {
            duration: 0,
            offsetY: margin
        });
    }, [
        margin,
        virtualizer
    ]);
    // TODO: does aria-row count and aria-col count need to be modified? Perhaps aria-col count needs to be omitted
    return(/*#__PURE__*/ $k8Xpo$react.createElement($986281b61f26b6f8$export$64992ac69f286e5c.Provider, {
        value: {
            state: state,
            isQuiet: isQuiet,
            layout: cardViewLayout,
            cardOrientation: cardOrientation
        }
    }, /*#__PURE__*/ $k8Xpo$react.createElement($k8Xpo$Virtualizer, {
        ...gridProps,
        ...styleProps,
        className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-CardView'),
        ref: domRef,
        focusedKey: focusedKey,
        scrollDirection: "vertical",
        layout: cardViewLayout,
        collection: gridCollection,
        isLoading: isLoading,
        onLoadMore: onLoadMore,
        renderWrapper: renderWrapper,
        transitionDuration: isLoading ? 160 : 220,
        scrollToItem: scrollToItem
    }, (type, item)=>{
        if (type === 'item') return(/*#__PURE__*/ $k8Xpo$react.createElement($49e01256efa8773b$var$InternalCard, {
            item: item
        }));
        else if (type === 'loader') return(/*#__PURE__*/ $k8Xpo$react.createElement($49e01256efa8773b$var$CenteredWrapper, null, /*#__PURE__*/ $k8Xpo$react.createElement($k8Xpo$ProgressCircle, {
            isIndeterminate: true,
            "aria-label": state.collection.size > 0 ? formatMessage('loadingMore') : formatMessage('loading')
        })));
        else if (type === 'placeholder') {
            let emptyState = renderEmptyState ? renderEmptyState() : null;
            if (emptyState == null) return null;
            return(/*#__PURE__*/ $k8Xpo$react.createElement($49e01256efa8773b$var$CenteredWrapper, null, emptyState));
        }
    })));
}
function $49e01256efa8773b$var$CenteredWrapper({ children: children  }) {
    let { state: state  } = $986281b61f26b6f8$export$fea0b38586ec8f13();
    return(/*#__PURE__*/ $k8Xpo$react.createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.size + 1,
        className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-CardView-centeredWrapper')
    }, /*#__PURE__*/ $k8Xpo$react.createElement("div", {
        role: "gridcell"
    }, children)));
}
function $49e01256efa8773b$var$InternalCard(props) {
    let { item: item  } = props;
    let cellNode = [
        ...item.childNodes
    ][0];
    let { state: state , cardOrientation: cardOrientation , isQuiet: isQuiet , layout: layout  } = $986281b61f26b6f8$export$fea0b38586ec8f13();
    let layoutType = layout.layoutType;
    let rowRef = $k8Xpo$useRef();
    let cellRef = $k8Xpo$useRef();
    let unwrappedRef = $k8Xpo$useUnwrapDOMRef(cellRef);
    let { rowProps: rowProps  } = $k8Xpo$useGridRow({
        node: item,
        isVirtualized: true
    }, state, rowRef);
    let { gridCellProps: gridCellProps  } = $k8Xpo$useGridCell({
        node: cellNode,
        focusMode: 'cell'
    }, state, unwrappedRef);
    if (layoutType === 'grid' || layoutType === 'gallery') isQuiet = true;
    if (layoutType !== 'grid') cardOrientation = 'vertical';
    // We don't want to focus the checkbox (or any other focusable elements) within the Card
    // when pressing the arrow keys so we delete the key down handler here. Arrow key navigation between
    // the cards in the CardView is handled by useGrid => useSelectableCollection instead.
    delete gridCellProps.onKeyDownCapture;
    return(/*#__PURE__*/ $k8Xpo$react.createElement("div", {
        ...rowProps,
        ref: rowRef,
        className: $k8Xpo$classNames((/*@__PURE__*/$parcel$interopDefault($2ebe8b6b61a3e4e2$exports)), 'spectrum-CardView-row')
    }, /*#__PURE__*/ $k8Xpo$react.createElement($6b5e97142b400aef$export$7a6ccaf429ad93a8, {
        ref: cellRef,
        articleProps: gridCellProps,
        isQuiet: isQuiet,
        orientation: cardOrientation,
        item: item,
        layout: layoutType
    }, item.rendered)));
}
/**
 * TODO: Add description of component here.
 */ const $49e01256efa8773b$export$7e52c821f7b6f422 = /*#__PURE__*/ $k8Xpo$react.forwardRef($49e01256efa8773b$var$CardView);


var $22fcfd471bc7ee86$exports = {};

$parcel$export($22fcfd471bc7ee86$exports, "GalleryLayout", () => $22fcfd471bc7ee86$export$8e52095834484b61);

class $ce95ffe2429f6396$export$64943d2e59d72a29 extends $k8Xpo$Layout {
    constructor(options = {
    }){
        super();
        this.disabledKeys = new Set();
        this.layoutInfos = new Map();
        this.collator = options.collator;
        this.lastCollection = null;
        this.scale = options.scale || 'medium';
        this.margin = options.margin || 24;
    }
    validate(invalidationContext) {
        this.collection = this.virtualizer.collection;
        this.buildCollection(invalidationContext);
        // Remove layout info that doesn't exist in new collection
        if (this.lastCollection) {
            for (let key of this.lastCollection.getKeys())if (!this.collection.getItem(key)) this.layoutInfos.delete(key);
            if (!this.isLoading) this.layoutInfos.delete('loader');
            if (this.collection.size > 0) this.layoutInfos.delete('placeholder');
        }
        this.lastCollection = this.collection;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildCollection(invalidationContext) {
    }
    getContentSize() {
        return this.contentSize;
    }
    getLayoutInfo(key) {
        return this.layoutInfos.get(key);
    }
    getVisibleLayoutInfos(rect) {
        let res = [];
        for (let layoutInfo of this.layoutInfos.values())if (this.isVisible(layoutInfo, rect)) res.push(layoutInfo);
        return res;
    }
    isVisible(layoutInfo, rect) {
        return layoutInfo.rect.intersects(rect);
    }
    getInitialLayoutInfo(layoutInfo) {
        layoutInfo.opacity = 0;
        layoutInfo.transform = 'scale3d(0.8, 0.8, 0.8)';
        return layoutInfo;
    }
    getFinalLayoutInfo(layoutInfo) {
        layoutInfo.opacity = 0;
        layoutInfo.transform = 'scale3d(0.8, 0.8, 0.8)';
        return layoutInfo;
    }
    _findClosestLayoutInfo(target, rect) {
        let layoutInfos = this.getVisibleLayoutInfos(rect);
        let best = null;
        let bestDistance = Infinity;
        // Calculates distance as the distance between the center of 2 rects.
        for (let cur of layoutInfos)if (cur.type === 'item') {
            let curRect = cur.rect;
            let targetMidX = (target.x + target.maxX) / 2;
            let targetMidY = (target.y + target.maxY) / 2;
            let curMidX = (curRect.x + curRect.maxX) / 2;
            let curMidY = (curRect.y + curRect.maxY) / 2;
            let dist = Math.pow(targetMidX - curMidX, 2) + Math.pow(targetMidY - curMidY, 2);
            if (dist < bestDistance) {
                best = cur;
                bestDistance = dist;
            }
        }
        return best;
    }
    _findClosest(target, rect) {
        let best = this._findClosestLayoutInfo(target, rect);
        return best || null;
    }
    getKeyBelow(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        let rect = new $k8Xpo$Rect(layoutInfo.rect.x, layoutInfo.rect.maxY + 1, layoutInfo.rect.width, this.virtualizer.visibleRect.height);
        let closestRow = this.collection.getItem(this._findClosest(layoutInfo.rect, rect)?.key);
        return closestRow?.childNodes[0]?.key;
    }
    getKeyAbove(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        let rect = new $k8Xpo$Rect(layoutInfo.rect.x, 0, layoutInfo.rect.width, layoutInfo.rect.y - 1);
        let closestRow = this.collection.getItem(this._findClosest(layoutInfo.rect, rect)?.key);
        return closestRow?.childNodes[0]?.key;
    }
    getKeyRightOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        key = this.direction === 'rtl' ? this.collection.getKeyBefore(parentRowKey) : this.collection.getKeyAfter(parentRowKey);
        while(key != null){
            let item = this.collection.getItem(key);
            // Don't check if item is disabled because we want to be able to focus disabled items in a grid (double check this)
            if (item.type === 'item') return item.childNodes[0].key;
            key = this.direction === 'rtl' ? this.collection.getKeyBefore(key) : this.collection.getKeyAfter(key);
        }
    }
    getKeyLeftOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        key = this.direction === 'rtl' ? this.collection.getKeyAfter(parentRowKey) : this.collection.getKeyBefore(parentRowKey);
        while(key != null){
            let item = this.collection.getItem(key);
            // Don't check if item is disabled because we want to be able to focus disabled items in a grid (double check this)
            if (item.type === 'item') return item.childNodes[0].key;
            key = this.direction === 'rtl' ? this.collection.getKeyAfter(key) : this.collection.getKeyBefore(key);
        }
    }
    getFirstKey() {
        let firstRow = this.collection.getItem(this.collection.getFirstKey());
        return firstRow.childNodes[0].key;
    }
    getLastKey() {
        let lastRow = this.collection.getItem(this.collection.getLastKey());
        return lastRow.childNodes[0].key;
    }
    // TODO: pretty unwieldy because it needs to bounce back and forth between the parent key and the child key
    // Perhaps have layoutInfo store childKey as well so we don't need to do this? Or maybe make the layoutInfos be the cells instead of the rows?
    getKeyPageAbove(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        if (layoutInfo) {
            let pageY = Math.max(0, layoutInfo.rect.y + layoutInfo.rect.height - this.virtualizer.visibleRect.height);
            // If the node is so large that it spans multiple page heights, return the key of the item immediately above
            // Otherwise keep going up until we exceed a single page height worth of nodes
            let keyAbove = this.collection.getItem(this.getKeyAbove(key))?.parentKey;
            layoutInfo = this.getLayoutInfo(keyAbove);
            if (layoutInfo && layoutInfo.rect.y > pageY) while(layoutInfo && layoutInfo.rect.y > pageY){
                let childKey = this.collection.getItem(layoutInfo.key).childNodes[0].key;
                let keyAbove = this.collection.getItem(this.getKeyAbove(childKey))?.parentKey;
                layoutInfo = this.getLayoutInfo(keyAbove);
            }
            if (layoutInfo) {
                let childKey = this.collection.getItem(layoutInfo.key).childNodes[0].key;
                return childKey;
            }
        }
        return this.getFirstKey();
    }
    // TODO: pretty unwieldy because it needs to bounce back and forth between the parent key and the child key
    // Perhaps have layoutInfo store childKey as well so we don't need to do this?
    getKeyPageBelow(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        if (layoutInfo) {
            let pageY = Math.min(this.virtualizer.contentSize.height, layoutInfo.rect.y - layoutInfo.rect.height + this.virtualizer.visibleRect.height);
            // If the node is so large that it spans multiple page heights, return the key of the item immediately below
            // Otherwise keep going up until we exceed a single page height worth of nodes
            let keyBelow = this.collection.getItem(this.getKeyBelow(key))?.parentKey;
            layoutInfo = this.getLayoutInfo(keyBelow);
            if (layoutInfo && layoutInfo.rect.y < pageY) while(layoutInfo && layoutInfo.rect.y < pageY){
                let childKey = this.collection.getItem(layoutInfo.key).childNodes[0].key;
                let keyBelow = this.collection.getItem(this.getKeyBelow(childKey))?.parentKey;
                layoutInfo = this.getLayoutInfo(keyBelow);
            }
            if (layoutInfo) {
                let childKey = this.collection.getItem(layoutInfo.key).childNodes[0].key;
                return childKey;
            }
        }
        return this.getLastKey();
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey ?? this.getFirstKey();
        let startItem = collection.getItem(key);
        key = startItem.parentKey;
        while(key != null){
            let item = collection.getItem(key);
            if (item.textValue) {
                let substring = item.textValue.slice(0, search.length);
                if (this.collator.compare(substring, search) === 0) return [
                    ...item.childNodes
                ][0].key;
            }
            key = this.collection.getKeyAfter(key);
        }
        return null;
    }
}



const $22fcfd471bc7ee86$var$DEFAULT_OPTIONS = {
    S: {
        idealRowHeight: 112,
        minItemSize: new $k8Xpo$Size(96, 96),
        itemSpacing: new $k8Xpo$Size(8, 16),
        itemPadding: 24,
        dropSpacing: 50,
        margin: 8
    },
    L: {
        idealRowHeight: 208,
        minItemSize: new $k8Xpo$Size(136, 136),
        itemSpacing: new $k8Xpo$Size(18, 18),
        itemPadding: {
            'medium': 78,
            'large': 99
        },
        dropSpacing: 100,
        margin: 24
    }
};
class $22fcfd471bc7ee86$export$8e52095834484b61 extends $ce95ffe2429f6396$export$64943d2e59d72a29 {
    constructor(options = {
    }){
        super(options);
        let cardSize = 'L';
        this.idealRowHeight = options.idealRowHeight || $22fcfd471bc7ee86$var$DEFAULT_OPTIONS[cardSize].idealRowHeight;
        this.itemSpacing = options.itemSpacing || $22fcfd471bc7ee86$var$DEFAULT_OPTIONS[cardSize].itemSpacing;
        this.itemPadding = options.itemPadding != null ? options.itemPadding : $22fcfd471bc7ee86$var$DEFAULT_OPTIONS[cardSize].itemPadding[this.scale];
        this.minItemSize = options.minItemSize || $22fcfd471bc7ee86$var$DEFAULT_OPTIONS[cardSize].minItemSize;
        this.threshold = options.threshold || 1;
        this.margin = options.margin != null ? options.margin : $22fcfd471bc7ee86$var$DEFAULT_OPTIONS[cardSize].margin;
    }
    get layoutType() {
        return 'gallery';
    }
    /**
   * Takes a row of widths and if there are any widths smaller than the min-width, leech width starting from
   * the widest in the row until it can't give anymore, then move to the second widest and so forth.
   * Do this until all assets meet the min-width.
   * */ _distributeWidths(widths) {
        // create a copy of the widths array and sort it largest to smallest
        let sortedWidths = widths.concat().sort((a, b)=>a[1] > b[1] ? -1 : 1
        );
        for (let width of widths)// for each width, if it's smaller than the min width
        if (width[1] < this.minItemSize.width) {
            // then figure out how much smaller
            let delta = this.minItemSize.width - width[1];
            for (let item of sortedWidths)// go from the largest width in the row to the smallest
            // if the width is greater than the min width
            if (widths[item[0]][1] > this.minItemSize.width) {
                // subtract the delta from the width, if it's still greater than the min width
                // then we have finished, subtract the delta permanently from that width
                if (widths[item[0]][1] - delta > this.minItemSize.width) {
                    widths[item[0]][1] -= delta;
                    delta = 0;
                    break;
                } else {
                    // otherwise, we take as much as we can from the current width and then move on to
                    // the next largest and take some width from it
                    let maxChange = widths[item[0]][1] - this.minItemSize.width;
                    delta -= maxChange;
                    widths[item[0]][1] -= maxChange;
                }
            }
            if (delta > 0) return false;
            // force the width to be the min width that we just rebalanced for
            width[1] = this.minItemSize.width;
        }
        return true;
    }
    buildCollection() {
        let visibleWidth = this.virtualizer.visibleRect.width;
        let visibleHeight = this.virtualizer.visibleRect.height;
        let y = this.margin;
        let availableWidth = visibleWidth - this.margin * 2;
        // If avaliable width is not greater than 0, skip node layout calculations
        if (availableWidth > 0) {
            // Compute aspect ratios for all of the items, and the total width if all items were on in a single row.
            let ratios = [];
            let totalWidth = 0;
            let minRatio = this.minItemSize.width / this.minItemSize.height;
            let maxRatio = availableWidth / this.minItemSize.height;
            for (let node of this.collection){
                let ratio = node.props.width / node.props.height;
                if (ratio < minRatio) ratio = minRatio;
                else if (ratio > maxRatio && ratio !== minRatio) ratio = maxRatio;
                let itemWidth = ratio * this.minItemSize.height;
                ratios.push(ratio);
                totalWidth += itemWidth;
            }
            totalWidth += this.itemSpacing.width * (this.collection.size - 1);
            // Determine how many rows we'll need, and partition the items into rows
            // using the aspect ratios as weights.
            let rows = Math.max(1, Math.ceil(totalWidth / availableWidth));
            // if the available width can't hold two items, then every item will get its own row
            // this leads to a faster run through linear partition and more dependable output for small row widths
            if (availableWidth <= this.minItemSize.width * 2 + this.itemPadding * 2) rows = this.collection.size;
            let weightedRatios = ratios.map((ratio)=>ratio < this.threshold ? ratio + 0.5 * (1 / ratio) : ratio
            );
            let partition = $22fcfd471bc7ee86$var$linearPartition(weightedRatios, rows);
            let index = 0;
            for (let row of partition){
                // Compute the total weight for this row
                let totalWeight = 0;
                for(let j = index; j < index + row.length; j++)totalWeight += ratios[j];
                // Determine the row height based on the total available width and weight of this row.
                let bestRowHeight = (availableWidth - (row.length - 1) * this.itemSpacing.width) / totalWeight;
                // if this is the last row and the row height is >2x the ideal row height, then cap to the ideal height
                // probably doing this because if the last row has one extremely tall image, then the row becomes huge
                // though that can happen anywhere if a row has lots of tall images... so i'm not sure why this one matters
                if (row === partition[partition.length - 1] && bestRowHeight > this.idealRowHeight * 2) bestRowHeight = this.idealRowHeight;
                let itemHeight = Math.round(bestRowHeight) + this.itemPadding;
                let x = this.margin;
                // if any items are going to end up too small, add a bit of width to them and subtract it from wider objects
                let widths = [];
                for(let j1 = index; j1 < index + row.length; j1++){
                    let width = Math.round(bestRowHeight * ratios[j1]);
                    widths.push([
                        j1 - index,
                        width
                    ]);
                }
                this._distributeWidths(widths);
                // Create items for this row.
                for(let j2 = index; j2 < index + row.length; j2++){
                    let node = this.collection.rows[j2];
                    let itemWidth = Math.max(widths[j2 - index][1], this.minItemSize.width);
                    let rect = new $k8Xpo$Rect(x, y, itemWidth, itemHeight);
                    let layoutInfo = new $k8Xpo$LayoutInfo(node.type, node.key, rect);
                    layoutInfo.allowOverflow = true;
                    this.layoutInfos.set(node.key, layoutInfo);
                    x += itemWidth + this.itemSpacing.width;
                }
                y += itemHeight + this.itemSpacing.height;
                index += row.length;
            }
            if (this.isLoading) {
                let loaderY = y;
                let loaderHeight = 60;
                // If there aren't any items, make loader take all avaliable room and remove margin from y calculation
                // so it doesn't scroll
                if (this.collection.size === 0) {
                    loaderY = 0;
                    loaderHeight = visibleHeight || 60;
                }
                let rect = new $k8Xpo$Rect(0, loaderY, visibleWidth, loaderHeight);
                let loader = new $k8Xpo$LayoutInfo('loader', 'loader', rect);
                this.layoutInfos.set('loader', loader);
                y = loader.rect.maxY;
            }
            if (this.collection.size === 0 && !this.isLoading) {
                let rect = new $k8Xpo$Rect(0, 0, visibleWidth, visibleHeight);
                let placeholder = new $k8Xpo$LayoutInfo('placeholder', 'placeholder', rect);
                this.layoutInfos.set('placeholder', placeholder);
                y = placeholder.rect.maxY;
            }
        }
        this.contentSize = new $k8Xpo$Size(visibleWidth, y);
    }
}
// https://www8.cs.umu.se/kurser/TDBA77/VT06/algorithms/BOOK/BOOK2/NODE45.HTM
function $22fcfd471bc7ee86$var$linearPartition(seq, k) {
    let n = seq.length;
    if (k <= 0) return [];
    if (k >= n) return seq.map((x)=>[
            x
        ]
    );
    if (n === 1) return [
        seq
    ];
    let table = Array(n).fill(0).map(()=>Array(k).fill(0)
    );
    let solution = Array(n - 1).fill(0).map(()=>Array(k - 1).fill(0)
    );
    for(let i = 0; i < n; i++)table[i][0] = seq[i] + (i > 0 ? table[i - 1][0] : 0);
    for(let i1 = 0; i1 < k; i1++)table[0][i1] = seq[0];
    for(let i2 = 1; i2 < n; i2++)for(let j = 1; j < k; j++){
        let currentMin = 0;
        let minX = Infinity;
        for(let x = 0; x < i2; x++){
            let c1 = table[x][j - 1];
            let c2 = table[i2][0] - table[x][0];
            let cost = Math.max(c1, c2);
            if (!x || cost < currentMin) {
                currentMin = cost;
                minX = x;
            }
        }
        table[i2][j] = currentMin;
        solution[i2 - 1][j - 1] = minX;
    }
    n = n - 1;
    k = k - 2;
    let result = [];
    while(k >= 0){
        if (n >= 1) {
            let row = [];
            for(let i = solution[n - 1][k] + 1; i < n + 1; i++)row.push(seq[i]);
            result.unshift(row);
            n = solution[n - 1][k];
        }
        k--;
    }
    let row = [];
    for(let i3 = 0; i3 < n + 1; i3++)row.push(seq[i3]);
    result.unshift(row);
    return result;
}


var $95ff4527af603d7e$exports = {};

$parcel$export($95ff4527af603d7e$exports, "GridLayout", () => $95ff4527af603d7e$export$7d2b12578154a735);


const $95ff4527af603d7e$var$DEFAULT_OPTIONS = {
    S: {
        itemPadding: 20,
        minItemSize: {
            'vertical': new $k8Xpo$Size(96, 96)
        },
        maxItemSize: new $k8Xpo$Size(Infinity, Infinity),
        margin: 8,
        minSpace: new $k8Xpo$Size(6, 6),
        maxColumns: Infinity,
        dropSpacing: 50
    },
    L: {
        itemPadding: {
            'vertical': {
                'medium': 78,
                'large': 98
            },
            'horizontal': {
                'medium': 150,
                'large': 170
            }
        },
        minItemSize: {
            'vertical': new $k8Xpo$Size(208, 208),
            'horizontal': new $k8Xpo$Size(102, 102)
        },
        maxItemSize: new $k8Xpo$Size(Infinity, Infinity),
        margin: 24,
        minSpace: new $k8Xpo$Size(18, 18),
        maxColumns: Infinity,
        dropSpacing: 100
    }
};
class $95ff4527af603d7e$export$7d2b12578154a735 extends $ce95ffe2429f6396$export$64943d2e59d72a29 {
    constructor(options = {
    }){
        super(options);
        let cardSize = 'L';
        this.cardOrientation = options.cardOrientation || 'vertical';
        this.minItemSize = options.minItemSize || $95ff4527af603d7e$var$DEFAULT_OPTIONS[cardSize].minItemSize[this.cardOrientation];
        this.maxItemSize = options.maxItemSize || $95ff4527af603d7e$var$DEFAULT_OPTIONS[cardSize].maxItemSize;
        this.margin = options.margin != null ? options.margin : $95ff4527af603d7e$var$DEFAULT_OPTIONS[cardSize].margin;
        this.minSpace = options.minSpace || $95ff4527af603d7e$var$DEFAULT_OPTIONS[cardSize].minSpace;
        this.maxColumns = options.maxColumns || $95ff4527af603d7e$var$DEFAULT_OPTIONS[cardSize].maxColumns;
        this.itemPadding = options.itemPadding != null ? options.itemPadding : $95ff4527af603d7e$var$DEFAULT_OPTIONS[cardSize].itemPadding[this.cardOrientation][this.scale];
        this.itemSize = null;
        this.numColumns = 0;
        this.numRows = 0;
        this.horizontalSpacing = 0;
    }
    get layoutType() {
        return 'grid';
    }
    getIndexAtPoint(x, y, allowInsertingAtEnd = false) {
        let itemHeight = this.itemSize.height + this.minSpace.height;
        let itemWidth = this.itemSize.width + this.horizontalSpacing;
        return Math.max(0, Math.min(this.collection.size - (allowInsertingAtEnd ? 0 : 1), Math.floor(y / itemHeight) * this.numColumns + Math.floor((x - this.horizontalSpacing) / itemWidth)));
    }
    getVisibleLayoutInfos(rect) {
        let res = [];
        let numItems = this.collection.size;
        if (numItems <= 0 || !this.itemSize) // If there aren't any items in the collection, we are in a loader/placeholder state. Return those layoutInfos as
        // the currently visible items
        {
            if (this.layoutInfos.size > 0) {
                for (let layoutInfo of this.layoutInfos.values())if (this.isVisible(layoutInfo, rect)) res.push(layoutInfo);
            }
        } else {
            // The approach from v2 uses indexes where other v3 layouts iterate through every node/root node. This feels more efficient
            let firstVisibleItem = this.getIndexAtPoint(rect.x, rect.y);
            let lastVisibleItem = this.getIndexAtPoint(rect.maxX, rect.maxY);
            for(let index = firstVisibleItem; index <= lastVisibleItem; index++){
                let keyFromIndex = this.collection.rows[index].key;
                let layoutInfo = this.layoutInfos.get(keyFromIndex);
                if (layoutInfo && this.isVisible(layoutInfo, rect)) res.push(layoutInfo);
            }
            // Check if loader is in view and add to res if so
            let loader = this.layoutInfos.get('loader');
            if (loader && this.isVisible(loader, rect)) res.push(loader);
        }
        return res;
    }
    buildCollection() {
        let visibleWidth = this.virtualizer.visibleRect.width;
        let visibleHeight = this.virtualizer.visibleRect.height;
        let horizontalItemPadding = this.cardOrientation === 'horizontal' ? this.itemPadding : 0;
        let verticalItemPadding = this.cardOrientation === 'vertical' ? this.itemPadding : 0;
        let minCardWidth = this.minItemSize.width + horizontalItemPadding;
        // Compute the number of rows and columns needed to display the content
        let availableWidth = visibleWidth - this.margin * 2;
        let columns = Math.floor((availableWidth + this.minSpace.width) / (minCardWidth + this.minSpace.width));
        this.numColumns = Math.max(1, Math.min(this.maxColumns, columns));
        this.numRows = Math.ceil(this.collection.size / this.numColumns);
        // Compute the available width (minus the space between items)
        let width = availableWidth - this.minSpace.width * Math.max(0, this.numColumns - 1);
        // Compute the item width based on the space available
        let itemWidth = Math.floor(width / this.numColumns);
        itemWidth = Math.max(minCardWidth, Math.min(this.maxItemSize.width, itemWidth));
        // Compute the item height, which is proportional to the item width
        let t = (itemWidth - minCardWidth) / minCardWidth;
        let itemHeight = Math.floor(this.minItemSize.height + this.minItemSize.height * t);
        itemHeight = Math.max(this.minItemSize.height, Math.min(this.maxItemSize.height, itemHeight)) + verticalItemPadding;
        this.itemSize = new $k8Xpo$Size(itemWidth, itemHeight);
        // Compute the horizontal spacing and content height
        this.horizontalSpacing = this.numColumns < 2 ? 0 : Math.floor((availableWidth - this.numColumns * this.itemSize.width) / (this.numColumns - 1));
        let y = this.margin;
        let index = 0;
        for (let node of this.collection){
            let layoutInfo = this.buildChild(node, y, index);
            y = layoutInfo.rect.maxY;
            index++;
        }
        if (this.isLoading) {
            let loaderY = y;
            let loaderHeight = 60;
            // If there aren't any items, make loader take all avaliable room and remove margin from y calculation
            // so it doesn't scroll
            if (this.collection.size === 0) {
                loaderY = 0;
                loaderHeight = visibleHeight || 60;
            }
            let rect = new $k8Xpo$Rect(0, loaderY, visibleWidth, loaderHeight);
            let loader = new $k8Xpo$LayoutInfo('loader', 'loader', rect);
            this.layoutInfos.set('loader', loader);
            y = loader.rect.maxY;
        }
        if (this.collection.size === 0 && !this.isLoading) {
            let rect = new $k8Xpo$Rect(0, 0, visibleWidth, visibleHeight);
            let placeholder = new $k8Xpo$LayoutInfo('placeholder', 'placeholder', rect);
            this.layoutInfos.set('placeholder', placeholder);
            y = placeholder.rect.maxY;
        }
        this.contentSize = new $k8Xpo$Size(visibleWidth, y);
    }
    buildChild(node, y, index) {
        let row = Math.floor(index / this.numColumns);
        let column = index % this.numColumns;
        let x = this.margin + column * (this.itemSize.width + this.horizontalSpacing);
        y = this.margin + row * (this.itemSize.height + this.minSpace.height);
        let rect = new $k8Xpo$Rect(x, y, this.itemSize.width, this.itemSize.height);
        // TODO: Perhaps have it so that the child key for each row is stored with the layoutInfo?
        let layoutInfo = new $k8Xpo$LayoutInfo(node.type, node.key, rect);
        layoutInfo.allowOverflow = true;
        this.layoutInfos.set(node.key, layoutInfo);
        return layoutInfo;
    }
    // Since the collection doesn't represent the visual layout, need to calculate what row and column the current key is in,
    // then return the key that occupies the row + column below. This can be done by figuring out how many cards exist per column then dividing the
    // collection contents by that number (which will give us the row distribution)
    getKeyBelow(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let indexRowBelow;
        let index = this.collection.rows.findIndex((card)=>card.key === parentRowKey
        );
        if (index !== -1) indexRowBelow = index + this.numColumns;
        else return null;
        return this.collection.rows[indexRowBelow]?.childNodes[0].key || null;
    }
    getKeyAbove(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let indexRowAbove;
        let index = this.collection.rows.findIndex((card)=>card.key === parentRowKey
        );
        if (index !== -1) indexRowAbove = index - this.numColumns;
        else return null;
        return this.collection.rows[indexRowAbove]?.childNodes[0].key || null;
    }
}


var $e7acb160b0e0df88$exports = {};

$parcel$export($e7acb160b0e0df88$exports, "WaterfallLayout", () => $e7acb160b0e0df88$export$e9f7cda058ba8df8);


class $e7acb160b0e0df88$export$e9f7cda058ba8df8 extends $ce95ffe2429f6396$export$64943d2e59d72a29 {
    constructor(options = {
    }){
        // TODO: WaterfallLayout doesn't use card size in v2, but perhaps it should support it? Perhaps it would modify
        // minItemSize defaults or other things
        super(options);
        this.minItemSize = options.minItemSize || new $k8Xpo$Size(240, 136);
        this.maxItemSize = options.maxItemSize || new $k8Xpo$Size(Infinity, Infinity);
        this.margin = options.margin != null ? options.margin : 24;
        this.minSpace = options.minSpace || new $k8Xpo$Size(18, 18);
        this.maxColumns = options.maxColumns || Infinity;
        this.itemWidth = 0;
        this.numColumns = 0;
        this.lastCollection = null;
        this.collator = options.collator;
    }
    get layoutType() {
        return 'waterfall';
    }
    buildCollection(invalidationContext) {
        // Compute the number of columns needed to display the content
        let visibleWidth = this.virtualizer.visibleRect.width;
        let availableWidth = visibleWidth - this.margin * 2;
        let columns = Math.floor((availableWidth + this.minSpace.width) / (this.minItemSize.width + this.minSpace.width));
        this.numColumns = Math.max(1, Math.min(this.maxColumns, columns));
        // Compute the available width (minus the space between items)
        let width = availableWidth - this.minSpace.width * (this.numColumns - 1);
        // Compute the item width based on the space available
        let itemWidth = Math.round(width / this.numColumns);
        itemWidth = Math.max(this.minItemSize.width, Math.min(this.maxItemSize.width, itemWidth));
        this.itemWidth = itemWidth;
        // Compute the horizontal spacing
        // if only one column, we cannot divide by zero, so set it to 1
        let horizontalSpacing = Math.round((availableWidth - this.numColumns * itemWidth) / Math.max(1, this.numColumns - 1));
        this.horizontalSpacing = horizontalSpacing;
        // Setup an array of column heights
        let columnHeights = Array(this.numColumns).fill(this.margin);
        for (let node of this.collection){
            let key = node.key;
            // Compute the height of the item. Use the existing height if available,
            // otherwise call the delegate to estimate the size.
            let oldLayoutInfo = this.layoutInfos.get(key);
            let height;
            let estimatedSize = true;
            if (oldLayoutInfo) {
                height = oldLayoutInfo.rect.height;
                estimatedSize = invalidationContext.sizeChanged || oldLayoutInfo.estimatedSize;
            } else if (node.props.width && node.props.height) {
                let nodeWidth = node.props.width;
                let nodeHeight = node.props.height;
                let scaledHeight = Math.round(nodeHeight * (itemWidth / nodeWidth));
                height = Math.max(this.minItemSize.height, Math.min(this.maxItemSize.height, scaledHeight));
            } else height = itemWidth;
            // Figure out which column to place the item in, and compute its position.
            let column = this.getNextColumnIndex(columnHeights);
            let x = this.margin + column * (itemWidth + horizontalSpacing);
            let y = columnHeights[column];
            let rect = new $k8Xpo$Rect(x, y, itemWidth, height);
            let layoutInfo = new $k8Xpo$LayoutInfo(node.type, key, rect);
            layoutInfo.estimatedSize = estimatedSize;
            layoutInfo.allowOverflow = true;
            this.layoutInfos.set(key, layoutInfo);
            // TODO: From v2 figure out this bit, when does this get called and what to replace this.collectionView._transaction with?
            // Removing it from v2 doesn't seem to do anything?
            // if (layoutInfo.estimatedSize && !invalidationContext.contentChanged && !this.collectionView._transaction) {
            //   this.updateItemSize(new IndexPath(section, i));
            // }
            columnHeights[column] += layoutInfo.rect.height + this.minSpace.height;
        }
        // Reset all columns to the maximum for the next section
        let maxHeight = Math.max.apply(Math, columnHeights) - this.minSpace.height + this.margin;
        columnHeights.fill(maxHeight);
        let y = columnHeights[0];
        if (this.isLoading) {
            let loaderY = y;
            let loaderHeight = 60;
            // If there aren't any items, make loader take all avaliable room and remove margin from y calculation
            // so it doesn't scroll
            if (this.collection.size === 0) {
                loaderY = 0;
                loaderHeight = this.virtualizer.visibleRect.height || 60;
            }
            let rect = new $k8Xpo$Rect(0, loaderY, this.virtualizer.visibleRect.width, loaderHeight);
            let loader = new $k8Xpo$LayoutInfo('loader', 'loader', rect);
            this.layoutInfos.set('loader', loader);
            y = loader.rect.maxY;
        }
        if (this.collection.size === 0 && !this.isLoading) {
            let rect = new $k8Xpo$Rect(0, 0, this.virtualizer.visibleRect.width, this.virtualizer.visibleRect.height);
            let placeholder = new $k8Xpo$LayoutInfo('placeholder', 'placeholder', rect);
            this.layoutInfos.set('placeholder', placeholder);
            y = placeholder.rect.maxY;
        }
        this.contentSize = new $k8Xpo$Size(this.virtualizer.visibleRect.width, y);
    }
    updateItemSize(key, size) {
        let layoutInfo = this.layoutInfos.get(key);
        if (!size || !layoutInfo) return false;
        if (size.height !== layoutInfo.rect.height) {
            // TODO: also not sure about copying layout info vs mutating it. Listlayout does the below
            // but I feel that is because it actually maintained a layoutNode map cache which this doesn't have
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            this.layoutInfos.set(key, newLayoutInfo);
            // TODO: v2 had layoutInfo.estimatedSize = view.estimatedSize || false; but we can't do the same here?
            layoutInfo.estimatedSize = false;
            return true;
        }
        return false;
    }
    getNextColumnIndex(columnHeights) {
        let minIndex = 0;
        for(let i = 0; i < columnHeights.length; i++)if (columnHeights[i] < columnHeights[minIndex]) minIndex = i;
        return minIndex;
    }
    getClosestRight(key) {
        let layoutInfo = this.getLayoutInfo(key);
        // Refactored from v2. Current strategy is to find the closest card in the adjacent column.
        // This prevent the issue where it was possible that the closest layoutInfo would be two columns over due to the middle card being exceptionally tall
        // and thus the top corner to top corner distance was massive.
        // First look for a card to the immediate right of the current card. If we can't find any, look for the nearest card in the entire column to the right of the card
        let rect = new $k8Xpo$Rect(layoutInfo.rect.maxX + 1, layoutInfo.rect.y, layoutInfo.rect.width + this.horizontalSpacing, layoutInfo.rect.height);
        key = this._findClosest(layoutInfo.rect, rect)?.key;
        if (!key) {
            rect = new $k8Xpo$Rect(layoutInfo.rect.maxX + 1, 0, layoutInfo.rect.width + this.horizontalSpacing, this.virtualizer.contentSize.height);
            key = this._findClosest(layoutInfo.rect, rect)?.key;
        }
        return this.collection.getItem(key)?.childNodes[0]?.key;
    }
    getClosestLeft(key) {
        let layoutInfo = this.getLayoutInfo(key);
        // First look for a card to the immediate left of the current card. If we can't find any, look for the nearest card in the entire column to the left of the card
        let rect = new $k8Xpo$Rect(layoutInfo.rect.x - layoutInfo.rect.width - this.horizontalSpacing - 1, layoutInfo.rect.y, layoutInfo.rect.width + this.horizontalSpacing, layoutInfo.rect.height);
        key = this._findClosest(layoutInfo.rect, rect)?.key;
        if (!key) {
            rect = new $k8Xpo$Rect(layoutInfo.rect.x - layoutInfo.rect.width - this.horizontalSpacing - 1, 0, layoutInfo.rect.width + this.horizontalSpacing, this.virtualizer.contentSize.height);
            key = this._findClosest(layoutInfo.rect, rect)?.key;
        }
        return this.collection.getItem(key)?.childNodes[0]?.key;
    }
    getKeyRightOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        return this.direction === 'rtl' ? this.getClosestLeft(parentRowKey) : this.getClosestRight(parentRowKey);
    }
    getKeyLeftOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        return this.direction === 'rtl' ? this.getClosestRight(parentRowKey) : this.getClosestLeft(parentRowKey);
    }
}


var $bc82b9626491359d$exports = {};

$parcel$export($bc82b9626491359d$exports, "Card", () => $bc82b9626491359d$export$60332b2344f7fe41);



let $bc82b9626491359d$var$Card = /*#__PURE__*/ $k8Xpo$forwardRef((props, ref)=>{
    let context = $986281b61f26b6f8$export$fea0b38586ec8f13();
    if (context !== null) return null;
    else return(/*#__PURE__*/ $k8Xpo$react.createElement($6b5e97142b400aef$export$7a6ccaf429ad93a8, {
        ...props,
        ref: ref
    }));
});
// @ts-ignore
$bc82b9626491359d$var$Card.getCollectionNode = function* getCollectionNode(props) {
    let { children: children , textValue: textValue  } = props;
    yield {
        type: 'item',
        props: props,
        rendered: children,
        'aria-label': props['aria-label'],
        hasChildNodes: false,
        textValue: textValue
    };
};
let $bc82b9626491359d$export$60332b2344f7fe41 = $bc82b9626491359d$var$Card;




export {$49e01256efa8773b$export$7e52c821f7b6f422 as CardView, $22fcfd471bc7ee86$export$8e52095834484b61 as GalleryLayout, $95ff4527af603d7e$export$7d2b12578154a735 as GridLayout, $e7acb160b0e0df88$export$e9f7cda058ba8df8 as WaterfallLayout, $bc82b9626491359d$export$60332b2344f7fe41 as Card};
//# sourceMappingURL=module.js.map
