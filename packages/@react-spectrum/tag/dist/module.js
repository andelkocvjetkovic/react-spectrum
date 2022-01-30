import "./main.css";
import $8SCX0$spectrumiconsworkflowAlert from "@spectrum-icons/workflow/Alert";
import {useStyleProps as $8SCX0$useStyleProps, classNames as $8SCX0$classNames} from "@react-spectrum/utils";
import {ClearButton as $8SCX0$ClearButton} from "@react-spectrum/button";
import {FocusRing as $8SCX0$FocusRing} from "@react-aria/focus";
import {mergeProps as $8SCX0$mergeProps} from "@react-aria/utils";
import $8SCX0$react, {useContext as $8SCX0$useContext} from "react";
import {useHover as $8SCX0$useHover} from "@react-aria/interactions";
import {useTag as $8SCX0$useTag, useTagGroup as $8SCX0$useTagGroup} from "@react-aria/tag";
import {useProviderProps as $8SCX0$useProviderProps} from "@react-spectrum/provider";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3d26d8e8119a4d37$exports = {};

$parcel$export($3d26d8e8119a4d37$exports, "Tag", () => $3d26d8e8119a4d37$export$3288d34c523a1192);






var $d03aab1d95331e96$exports = {};

$parcel$export($d03aab1d95331e96$exports, "spectrum-Tags", () => $d03aab1d95331e96$export$eb7e80013a1212da, (v) => $d03aab1d95331e96$export$eb7e80013a1212da = v);
$parcel$export($d03aab1d95331e96$exports, "spectrum-Tags-item", () => $d03aab1d95331e96$export$950d8dc0a3751654, (v) => $d03aab1d95331e96$export$950d8dc0a3751654 = v);
$parcel$export($d03aab1d95331e96$exports, "is-disabled", () => $d03aab1d95331e96$export$d35bc1e505d1ebbf, (v) => $d03aab1d95331e96$export$d35bc1e505d1ebbf = v);
$parcel$export($d03aab1d95331e96$exports, "spectrum-Tags-itemIcon", () => $d03aab1d95331e96$export$8c615c557fdf3d9c, (v) => $d03aab1d95331e96$export$8c615c557fdf3d9c = v);
$parcel$export($d03aab1d95331e96$exports, "spectrum-Tags-itemClearButton", () => $d03aab1d95331e96$export$90881dd581d6be55, (v) => $d03aab1d95331e96$export$90881dd581d6be55 = v);
$parcel$export($d03aab1d95331e96$exports, "spectrum-Tags-itemLabel", () => $d03aab1d95331e96$export$23caf26adee41b84, (v) => $d03aab1d95331e96$export$23caf26adee41b84 = v);
$parcel$export($d03aab1d95331e96$exports, "is-hovered", () => $d03aab1d95331e96$export$b8813cd5d7824ce7, (v) => $d03aab1d95331e96$export$b8813cd5d7824ce7 = v);
$parcel$export($d03aab1d95331e96$exports, "focus-ring", () => $d03aab1d95331e96$export$f39a09f249340e2a, (v) => $d03aab1d95331e96$export$f39a09f249340e2a = v);
$parcel$export($d03aab1d95331e96$exports, "is-selected", () => $d03aab1d95331e96$export$1e0fb04f31d3c22a, (v) => $d03aab1d95331e96$export$1e0fb04f31d3c22a = v);
$parcel$export($d03aab1d95331e96$exports, "is-invalid", () => $d03aab1d95331e96$export$14a30de2866685fa, (v) => $d03aab1d95331e96$export$14a30de2866685fa = v);
$parcel$export($d03aab1d95331e96$exports, "spectrum-Avatar", () => $d03aab1d95331e96$export$2e049b8d031600fb, (v) => $d03aab1d95331e96$export$2e049b8d031600fb = v);
$parcel$export($d03aab1d95331e96$exports, "spectrum-Tags-item--removable", () => $d03aab1d95331e96$export$c1666977f4e14f87, (v) => $d03aab1d95331e96$export$c1666977f4e14f87 = v);
$parcel$export($d03aab1d95331e96$exports, "is-focused", () => $d03aab1d95331e96$export$e7dc768d35940237, (v) => $d03aab1d95331e96$export$e7dc768d35940237 = v);
var $d03aab1d95331e96$export$eb7e80013a1212da;
var $d03aab1d95331e96$export$950d8dc0a3751654;
var $d03aab1d95331e96$export$d35bc1e505d1ebbf;
var $d03aab1d95331e96$export$8c615c557fdf3d9c;
var $d03aab1d95331e96$export$90881dd581d6be55;
var $d03aab1d95331e96$export$23caf26adee41b84;
var $d03aab1d95331e96$export$b8813cd5d7824ce7;
var $d03aab1d95331e96$export$f39a09f249340e2a;
var $d03aab1d95331e96$export$1e0fb04f31d3c22a;
var $d03aab1d95331e96$export$14a30de2866685fa;
var $d03aab1d95331e96$export$2e049b8d031600fb;
var $d03aab1d95331e96$export$c1666977f4e14f87;
var $d03aab1d95331e96$export$e7dc768d35940237;
$d03aab1d95331e96$export$eb7e80013a1212da = "_spectrum-Tags_8407eb";
$d03aab1d95331e96$export$950d8dc0a3751654 = "_spectrum-Tags-item_8407eb";
$d03aab1d95331e96$export$d35bc1e505d1ebbf = "_is-disabled_8407eb";
$d03aab1d95331e96$export$8c615c557fdf3d9c = "_spectrum-Tags-itemIcon_8407eb";
$d03aab1d95331e96$export$90881dd581d6be55 = "_spectrum-Tags-itemClearButton_8407eb";
$d03aab1d95331e96$export$23caf26adee41b84 = "_spectrum-Tags-itemLabel_8407eb";
$d03aab1d95331e96$export$b8813cd5d7824ce7 = "_is-hovered_8407eb";
$d03aab1d95331e96$export$f39a09f249340e2a = "_focus-ring_8407eb";
$d03aab1d95331e96$export$1e0fb04f31d3c22a = "_is-selected_8407eb";
$d03aab1d95331e96$export$14a30de2866685fa = "_is-invalid_8407eb";
$d03aab1d95331e96$export$2e049b8d031600fb = "_spectrum-Avatar_8407eb";
$d03aab1d95331e96$export$c1666977f4e14f87 = "_spectrum-Tags-item--removable_8407eb";
$d03aab1d95331e96$export$e7dc768d35940237 = "_is-focused_8407eb";




var $74e431d3d2638ec3$exports = {};

$parcel$export($74e431d3d2638ec3$exports, "useTagGroupProvider", () => $74e431d3d2638ec3$export$360a96a8a600ebd);
$parcel$export($74e431d3d2638ec3$exports, "TagGroup", () => $74e431d3d2638ec3$export$67ea30858aaf75e3);





const $74e431d3d2638ec3$var$TagGroupContext = /*#__PURE__*/ $8SCX0$react.createContext({
});
function $74e431d3d2638ec3$export$360a96a8a600ebd() {
    return $8SCX0$useContext($74e431d3d2638ec3$var$TagGroupContext);
}
const $74e431d3d2638ec3$export$67ea30858aaf75e3 = (props)=>{
    props = $8SCX0$useProviderProps(props);
    let { isReadOnly: isReadOnly , isDisabled: isDisabled , onRemove: onRemove , validationState: validationState , children: children , ...otherProps } = props;
    let { styleProps: styleProps  } = $8SCX0$useStyleProps(otherProps);
    const { tagGroupProps: tagGroupProps  } = $8SCX0$useTagGroup(props);
    function removeAll(tags) {
        onRemove([
            tags
        ]);
    }
    return(/*#__PURE__*/ $8SCX0$react.createElement("div", {
        ...styleProps,
        className: $8SCX0$classNames((/*@__PURE__*/$parcel$interopDefault($d03aab1d95331e96$exports)), 'spectrum-Tags', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ...tagGroupProps
    }, /*#__PURE__*/ $8SCX0$react.createElement($74e431d3d2638ec3$var$TagGroupContext.Provider, {
        value: {
            isRemovable: isReadOnly ? false : isReadOnly,
            isDisabled: isDisabled,
            onRemove: isReadOnly ? null : removeAll,
            validationState: validationState,
            role: 'gridcell'
        }
    }, children)));
};


const $3d26d8e8119a4d37$export$3288d34c523a1192 = (props)=>{
    const { isDisabled: isDisabled , isRemovable: isRemovable , validationState: validationState , ...otherProps } = props;
    let { styleProps: styleProps  } = $8SCX0$useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $8SCX0$useHover({
        isDisabled: isDisabled
    });
    const { isDisabled: isGroupDisabled , isRemovable: isGroupRemovable , validationState: groupValidationState , onRemove: onRemove , role: role  } = $74e431d3d2638ec3$export$360a96a8a600ebd();
    let removable = isGroupRemovable !== undefined ? isGroupRemovable : isRemovable;
    let disabled = isGroupDisabled !== undefined ? isGroupDisabled : isDisabled;
    let isInvalid = (validationState !== undefined ? validationState : groupValidationState) === 'invalid';
    let { clearButtonProps: clearButtonProps , labelProps: labelProps , tagProps: tagProps  } = $8SCX0$useTag({
        ...props,
        isRemovable: removable,
        isDisabled: disabled,
        validationState: validationState !== undefined ? validationState : groupValidationState,
        onRemove: props.onRemove || onRemove,
        role: role
    });
    let { role: buttonRole , ...otherButtonProps } = clearButtonProps;
    let icon = props.icon || isInvalid && /*#__PURE__*/ $8SCX0$react.createElement($8SCX0$spectrumiconsworkflowAlert, null);
    return(/*#__PURE__*/ $8SCX0$react.createElement($8SCX0$FocusRing, {
        focusRingClass: $8SCX0$classNames((/*@__PURE__*/$parcel$interopDefault($d03aab1d95331e96$exports)), 'focus-ring')
    }, /*#__PURE__*/ $8SCX0$react.createElement("div", {
        ...styleProps,
        ...$8SCX0$mergeProps(tagProps, hoverProps),
        className: $8SCX0$classNames((/*@__PURE__*/$parcel$interopDefault($d03aab1d95331e96$exports)), 'spectrum-Tags-item', {
            'is-disabled': disabled,
            // 'is-selected': isSelected,
            'spectrum-Tags-item--removable': removable,
            'is-invalid': isInvalid,
            'is-hovered': isHovered
        }, styleProps.className)
    }, icon && /*#__PURE__*/ $8SCX0$react.cloneElement(icon, {
        size: 'S',
        UNSAFE_className: $8SCX0$classNames((/*@__PURE__*/$parcel$interopDefault($d03aab1d95331e96$exports)), 'spectrum-Tags-itemIcon')
    }), /*#__PURE__*/ $8SCX0$react.createElement("span", {
        ...labelProps,
        className: $8SCX0$classNames((/*@__PURE__*/$parcel$interopDefault($d03aab1d95331e96$exports)), 'spectrum-Tags-itemLabel')
    }, props.children), removable && /*#__PURE__*/ $8SCX0$react.createElement("span", {
        role: buttonRole
    }, /*#__PURE__*/ $8SCX0$react.createElement($8SCX0$ClearButton, {
        tabIndex: tagProps.tabIndex,
        focusClassName: $8SCX0$classNames((/*@__PURE__*/$parcel$interopDefault($d03aab1d95331e96$exports)), 'is-focused'),
        UNSAFE_className: $8SCX0$classNames((/*@__PURE__*/$parcel$interopDefault($d03aab1d95331e96$exports)), 'spectrum-Tags-itemClearButton'),
        ...otherButtonProps
    })))));
};





export {$3d26d8e8119a4d37$export$3288d34c523a1192 as Tag, $74e431d3d2638ec3$export$360a96a8a600ebd as useTagGroupProvider, $74e431d3d2638ec3$export$67ea30858aaf75e3 as TagGroup};
//# sourceMappingURL=module.js.map
