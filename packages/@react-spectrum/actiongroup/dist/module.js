import "./main.css";
import {Item as $1362364a56ee0df3$re_export$Item} from "@react-stately/collections";
import {ActionButton as $ktJjJ$ActionButton} from "@react-spectrum/button";
import $ktJjJ$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import {useSlotProps as $ktJjJ$useSlotProps, useDOMRef as $ktJjJ$useDOMRef, useStyleProps as $ktJjJ$useStyleProps, classNames as $ktJjJ$classNames, ClearSlots as $ktJjJ$ClearSlots, SlotProvider as $ktJjJ$SlotProvider} from "@react-spectrum/utils";
import {useValueEffect as $ktJjJ$useValueEffect, useResizeObserver as $ktJjJ$useResizeObserver, useLayoutEffect as $ktJjJ$useLayoutEffect, filterDOMProps as $ktJjJ$filterDOMProps, mergeProps as $ktJjJ$mergeProps, useId as $ktJjJ$useId} from "@react-aria/utils";
import {MenuTrigger as $ktJjJ$MenuTrigger, Menu as $ktJjJ$Menu, Item as $ktJjJ$Item} from "@react-spectrum/menu";
import {useListState as $ktJjJ$useListState} from "@react-stately/list";
import $ktJjJ$spectrumiconsworkflowMore from "@spectrum-icons/workflow/More";
import {useHover as $ktJjJ$useHover, PressResponder as $ktJjJ$PressResponder} from "@react-aria/interactions";
import {useProviderProps as $ktJjJ$useProviderProps, Provider as $ktJjJ$Provider} from "@react-spectrum/provider";
import $ktJjJ$react, {useRef as $ktJjJ$useRef, useMemo as $ktJjJ$useMemo, useCallback as $ktJjJ$useCallback, forwardRef as $ktJjJ$forwardRef, useState as $ktJjJ$useState} from "react";
import {Text as $ktJjJ$Text} from "@react-spectrum/text";
import {TooltipTrigger as $ktJjJ$TooltipTrigger, Tooltip as $ktJjJ$Tooltip} from "@react-spectrum/tooltip";
import {useActionGroup as $ktJjJ$useActionGroup, useActionGroupItem as $ktJjJ$useActionGroupItem} from "@react-aria/actiongroup";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3e9aaba1f5deebea$exports = {};

$parcel$export($3e9aaba1f5deebea$exports, "ActionGroup", () => $3e9aaba1f5deebea$export$c21a5597f732a168);

var $91cc66a793b0c871$exports = {};

$parcel$export($91cc66a793b0c871$exports, "spectrum-Button", () => $91cc66a793b0c871$export$1db4cca5b4ade39a, (v) => $91cc66a793b0c871$export$1db4cca5b4ade39a = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton", () => $91cc66a793b0c871$export$53da69f51b770d3, (v) => $91cc66a793b0c871$export$53da69f51b770d3 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-LogicButton", () => $91cc66a793b0c871$export$36ae67a131730482, (v) => $91cc66a793b0c871$export$36ae67a131730482 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-FieldButton", () => $91cc66a793b0c871$export$a024c99ecf6b5741, (v) => $91cc66a793b0c871$export$a024c99ecf6b5741 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ClearButton", () => $91cc66a793b0c871$export$b752ce409e5660c, (v) => $91cc66a793b0c871$export$b752ce409e5660c = v);
$parcel$export($91cc66a793b0c871$exports, "focus-ring", () => $91cc66a793b0c871$export$f39a09f249340e2a, (v) => $91cc66a793b0c871$export$f39a09f249340e2a = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Icon", () => $91cc66a793b0c871$export$d374b04f30360026, (v) => $91cc66a793b0c871$export$d374b04f30360026 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--emphasized", () => $91cc66a793b0c871$export$5aabb61a966e266f, (v) => $91cc66a793b0c871$export$5aabb61a966e266f = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--staticColor", () => $91cc66a793b0c871$export$29b7b5d6a5a497c5, (v) => $91cc66a793b0c871$export$29b7b5d6a5a497c5 = v);
$parcel$export($91cc66a793b0c871$exports, "is-hovered", () => $91cc66a793b0c871$export$b8813cd5d7824ce7, (v) => $91cc66a793b0c871$export$b8813cd5d7824ce7 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button-label", () => $91cc66a793b0c871$export$c081ba562e204942, (v) => $91cc66a793b0c871$export$c081ba562e204942 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton-label", () => $91cc66a793b0c871$export$ebb4635c66bacdb9, (v) => $91cc66a793b0c871$export$ebb4635c66bacdb9 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton-hold", () => $91cc66a793b0c871$export$4a4f01c443eff992, (v) => $91cc66a793b0c871$export$4a4f01c443eff992 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--quiet", () => $91cc66a793b0c871$export$40e1f009544bacf3, (v) => $91cc66a793b0c871$export$40e1f009544bacf3 = v);
$parcel$export($91cc66a793b0c871$exports, "is-disabled", () => $91cc66a793b0c871$export$d35bc1e505d1ebbf, (v) => $91cc66a793b0c871$export$d35bc1e505d1ebbf = v);
$parcel$export($91cc66a793b0c871$exports, "is-open", () => $91cc66a793b0c871$export$a9781837241c946d, (v) => $91cc66a793b0c871$export$a9781837241c946d = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-FieldButton--quiet", () => $91cc66a793b0c871$export$5ca7b274e4fff9fc, (v) => $91cc66a793b0c871$export$5ca7b274e4fff9fc = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ClearButton--overBackground", () => $91cc66a793b0c871$export$116f2fccf941d34d, (v) => $91cc66a793b0c871$export$116f2fccf941d34d = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ClearButton--small", () => $91cc66a793b0c871$export$49280ffa5236ba8b, (v) => $91cc66a793b0c871$export$49280ffa5236ba8b = v);
$parcel$export($91cc66a793b0c871$exports, "is-focused", () => $91cc66a793b0c871$export$e7dc768d35940237, (v) => $91cc66a793b0c871$export$e7dc768d35940237 = v);
$parcel$export($91cc66a793b0c871$exports, "is-active", () => $91cc66a793b0c871$export$20fd0f7cd4e6112f, (v) => $91cc66a793b0c871$export$20fd0f7cd4e6112f = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--cta", () => $91cc66a793b0c871$export$b818fdf0052a2cab, (v) => $91cc66a793b0c871$export$b818fdf0052a2cab = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--primary", () => $91cc66a793b0c871$export$c1c3511f5e96e926, (v) => $91cc66a793b0c871$export$c1c3511f5e96e926 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--secondary", () => $91cc66a793b0c871$export$4f1b75526afd8ff3, (v) => $91cc66a793b0c871$export$4f1b75526afd8ff3 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--warning", () => $91cc66a793b0c871$export$6f97cef817ff1cac, (v) => $91cc66a793b0c871$export$6f97cef817ff1cac = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--overBackground", () => $91cc66a793b0c871$export$5cda1128f9112d2e, (v) => $91cc66a793b0c871$export$5cda1128f9112d2e = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-Button--quiet", () => $91cc66a793b0c871$export$25f049c049371040, (v) => $91cc66a793b0c871$export$25f049c049371040 = v);
$parcel$export($91cc66a793b0c871$exports, "is-selected", () => $91cc66a793b0c871$export$1e0fb04f31d3c22a, (v) => $91cc66a793b0c871$export$1e0fb04f31d3c22a = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--staticWhite", () => $91cc66a793b0c871$export$ccc536e1adbdc059, (v) => $91cc66a793b0c871$export$ccc536e1adbdc059 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-ActionButton--staticBlack", () => $91cc66a793b0c871$export$8f7c9db66978d20f, (v) => $91cc66a793b0c871$export$8f7c9db66978d20f = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-LogicButton--and", () => $91cc66a793b0c871$export$e52daab43a62c528, (v) => $91cc66a793b0c871$export$e52daab43a62c528 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-LogicButton--or", () => $91cc66a793b0c871$export$da76be6126aaa633, (v) => $91cc66a793b0c871$export$da76be6126aaa633 = v);
$parcel$export($91cc66a793b0c871$exports, "is-placeholder", () => $91cc66a793b0c871$export$e5b2f5233e4e5194, (v) => $91cc66a793b0c871$export$e5b2f5233e4e5194 = v);
$parcel$export($91cc66a793b0c871$exports, "spectrum-FieldButton--invalid", () => $91cc66a793b0c871$export$c9f503f672e8a3c1, (v) => $91cc66a793b0c871$export$c9f503f672e8a3c1 = v);
var $91cc66a793b0c871$export$1db4cca5b4ade39a;
var $91cc66a793b0c871$export$53da69f51b770d3;
var $91cc66a793b0c871$export$36ae67a131730482;
var $91cc66a793b0c871$export$a024c99ecf6b5741;
var $91cc66a793b0c871$export$b752ce409e5660c;
var $91cc66a793b0c871$export$f39a09f249340e2a;
var $91cc66a793b0c871$export$d374b04f30360026;
var $91cc66a793b0c871$export$5aabb61a966e266f;
var $91cc66a793b0c871$export$29b7b5d6a5a497c5;
var $91cc66a793b0c871$export$b8813cd5d7824ce7;
var $91cc66a793b0c871$export$c081ba562e204942;
var $91cc66a793b0c871$export$ebb4635c66bacdb9;
var $91cc66a793b0c871$export$4a4f01c443eff992;
var $91cc66a793b0c871$export$40e1f009544bacf3;
var $91cc66a793b0c871$export$d35bc1e505d1ebbf;
var $91cc66a793b0c871$export$a9781837241c946d;
var $91cc66a793b0c871$export$5ca7b274e4fff9fc;
var $91cc66a793b0c871$export$116f2fccf941d34d;
var $91cc66a793b0c871$export$49280ffa5236ba8b;
var $91cc66a793b0c871$export$e7dc768d35940237;
var $91cc66a793b0c871$export$20fd0f7cd4e6112f;
var $91cc66a793b0c871$export$b818fdf0052a2cab;
var $91cc66a793b0c871$export$c1c3511f5e96e926;
var $91cc66a793b0c871$export$4f1b75526afd8ff3;
var $91cc66a793b0c871$export$6f97cef817ff1cac;
var $91cc66a793b0c871$export$5cda1128f9112d2e;
var $91cc66a793b0c871$export$25f049c049371040;
var $91cc66a793b0c871$export$1e0fb04f31d3c22a;
var $91cc66a793b0c871$export$ccc536e1adbdc059;
var $91cc66a793b0c871$export$8f7c9db66978d20f;
var $91cc66a793b0c871$export$e52daab43a62c528;
var $91cc66a793b0c871$export$da76be6126aaa633;
var $91cc66a793b0c871$export$e5b2f5233e4e5194;
var $91cc66a793b0c871$export$c9f503f672e8a3c1;
$91cc66a793b0c871$export$1db4cca5b4ade39a = "_spectrum-Button_e2d99e";
$91cc66a793b0c871$export$53da69f51b770d3 = "_spectrum-ActionButton_e2d99e";
$91cc66a793b0c871$export$36ae67a131730482 = "_spectrum-LogicButton_e2d99e";
$91cc66a793b0c871$export$a024c99ecf6b5741 = "_spectrum-FieldButton_e2d99e";
$91cc66a793b0c871$export$b752ce409e5660c = "_spectrum-ClearButton_e2d99e";
$91cc66a793b0c871$export$f39a09f249340e2a = "_focus-ring_e2d99e";
$91cc66a793b0c871$export$d374b04f30360026 = "_spectrum-Icon_e2d99e";
$91cc66a793b0c871$export$5aabb61a966e266f = "_spectrum-ActionButton--emphasized_e2d99e";
$91cc66a793b0c871$export$29b7b5d6a5a497c5 = "_spectrum-ActionButton--staticColor_e2d99e";
$91cc66a793b0c871$export$b8813cd5d7824ce7 = "_is-hovered_e2d99e";
$91cc66a793b0c871$export$c081ba562e204942 = "_spectrum-Button-label_e2d99e";
$91cc66a793b0c871$export$ebb4635c66bacdb9 = "_spectrum-ActionButton-label_e2d99e";
$91cc66a793b0c871$export$4a4f01c443eff992 = "_spectrum-ActionButton-hold_e2d99e";
$91cc66a793b0c871$export$40e1f009544bacf3 = "_spectrum-ActionButton--quiet_e2d99e";
$91cc66a793b0c871$export$d35bc1e505d1ebbf = "_is-disabled_e2d99e";
$91cc66a793b0c871$export$a9781837241c946d = "_is-open_e2d99e";
$91cc66a793b0c871$export$5ca7b274e4fff9fc = "_spectrum-FieldButton--quiet_e2d99e";
$91cc66a793b0c871$export$116f2fccf941d34d = "_spectrum-ClearButton--overBackground_e2d99e";
$91cc66a793b0c871$export$49280ffa5236ba8b = "_spectrum-ClearButton--small_e2d99e";
$91cc66a793b0c871$export$e7dc768d35940237 = "_is-focused_e2d99e";
$91cc66a793b0c871$export$20fd0f7cd4e6112f = "_is-active_e2d99e";
$91cc66a793b0c871$export$b818fdf0052a2cab = "_spectrum-Button--cta_e2d99e";
$91cc66a793b0c871$export$c1c3511f5e96e926 = "_spectrum-Button--primary_e2d99e";
$91cc66a793b0c871$export$4f1b75526afd8ff3 = "_spectrum-Button--secondary_e2d99e";
$91cc66a793b0c871$export$6f97cef817ff1cac = "_spectrum-Button--warning_e2d99e";
$91cc66a793b0c871$export$5cda1128f9112d2e = "_spectrum-Button--overBackground_e2d99e";
$91cc66a793b0c871$export$25f049c049371040 = "_spectrum-Button--quiet_e2d99e";
$91cc66a793b0c871$export$1e0fb04f31d3c22a = "_is-selected_e2d99e";
$91cc66a793b0c871$export$ccc536e1adbdc059 = "_spectrum-ActionButton--staticWhite_e2d99e";
$91cc66a793b0c871$export$8f7c9db66978d20f = "_spectrum-ActionButton--staticBlack_e2d99e";
$91cc66a793b0c871$export$e52daab43a62c528 = "_spectrum-LogicButton--and_e2d99e";
$91cc66a793b0c871$export$da76be6126aaa633 = "_spectrum-LogicButton--or_e2d99e";
$91cc66a793b0c871$export$e5b2f5233e4e5194 = "_is-placeholder_e2d99e";
$91cc66a793b0c871$export$c9f503f672e8a3c1 = "_spectrum-FieldButton--invalid_e2d99e";











var $3e0fbee9207f7ca6$exports = {};

$parcel$export($3e0fbee9207f7ca6$exports, "flex-container", () => $3e0fbee9207f7ca6$export$69d7a39fa31a000b, (v) => $3e0fbee9207f7ca6$export$69d7a39fa31a000b = v);
$parcel$export($3e0fbee9207f7ca6$exports, "flex-gap", () => $3e0fbee9207f7ca6$export$31a9da8b58047a44, (v) => $3e0fbee9207f7ca6$export$31a9da8b58047a44 = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup", () => $3e0fbee9207f7ca6$export$cd2a778fcee9ca5c, (v) => $3e0fbee9207f7ca6$export$cd2a778fcee9ca5c = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup-item", () => $3e0fbee9207f7ca6$export$94ffe66966d2f53b, (v) => $3e0fbee9207f7ca6$export$94ffe66966d2f53b = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup--vertical", () => $3e0fbee9207f7ca6$export$b76f0727b879d41c, (v) => $3e0fbee9207f7ca6$export$b76f0727b879d41c = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup--quiet", () => $3e0fbee9207f7ca6$export$72623314301ff89b, (v) => $3e0fbee9207f7ca6$export$72623314301ff89b = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup--justified", () => $3e0fbee9207f7ca6$export$565332043c1dc688, (v) => $3e0fbee9207f7ca6$export$565332043c1dc688 = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup--compact", () => $3e0fbee9207f7ca6$export$a8ccf3eb925252bd, (v) => $3e0fbee9207f7ca6$export$a8ccf3eb925252bd = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup-item--isDisabled", () => $3e0fbee9207f7ca6$export$e5274b4bc2184bc9, (v) => $3e0fbee9207f7ca6$export$e5274b4bc2184bc9 = v);
$parcel$export($3e0fbee9207f7ca6$exports, "is-selected", () => $3e0fbee9207f7ca6$export$1e0fb04f31d3c22a, (v) => $3e0fbee9207f7ca6$export$1e0fb04f31d3c22a = v);
$parcel$export($3e0fbee9207f7ca6$exports, "is-hovered", () => $3e0fbee9207f7ca6$export$b8813cd5d7824ce7, (v) => $3e0fbee9207f7ca6$export$b8813cd5d7824ce7 = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup--overflowCollapse", () => $3e0fbee9207f7ca6$export$8e862a39302377c1, (v) => $3e0fbee9207f7ca6$export$8e862a39302377c1 = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup-menu", () => $3e0fbee9207f7ca6$export$a56eb57dbecb1bdd, (v) => $3e0fbee9207f7ca6$export$a56eb57dbecb1bdd = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup-menu-chevron", () => $3e0fbee9207f7ca6$export$96da682f48d2c62a, (v) => $3e0fbee9207f7ca6$export$96da682f48d2c62a = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup-menu-contents", () => $3e0fbee9207f7ca6$export$1733ee5cd2fc5d66, (v) => $3e0fbee9207f7ca6$export$1733ee5cd2fc5d66 = v);
$parcel$export($3e0fbee9207f7ca6$exports, "spectrum-ActionGroup-item--iconOnly", () => $3e0fbee9207f7ca6$export$db27a979adeba484, (v) => $3e0fbee9207f7ca6$export$db27a979adeba484 = v);
var $3e0fbee9207f7ca6$export$69d7a39fa31a000b;
var $3e0fbee9207f7ca6$export$31a9da8b58047a44;
var $3e0fbee9207f7ca6$export$cd2a778fcee9ca5c;
var $3e0fbee9207f7ca6$export$94ffe66966d2f53b;
var $3e0fbee9207f7ca6$export$b76f0727b879d41c;
var $3e0fbee9207f7ca6$export$72623314301ff89b;
var $3e0fbee9207f7ca6$export$565332043c1dc688;
var $3e0fbee9207f7ca6$export$a8ccf3eb925252bd;
var $3e0fbee9207f7ca6$export$e5274b4bc2184bc9;
var $3e0fbee9207f7ca6$export$1e0fb04f31d3c22a;
var $3e0fbee9207f7ca6$export$b8813cd5d7824ce7;
var $3e0fbee9207f7ca6$export$8e862a39302377c1;
var $3e0fbee9207f7ca6$export$a56eb57dbecb1bdd;
var $3e0fbee9207f7ca6$export$96da682f48d2c62a;
var $3e0fbee9207f7ca6$export$1733ee5cd2fc5d66;
var $3e0fbee9207f7ca6$export$db27a979adeba484;
$3e0fbee9207f7ca6$export$69d7a39fa31a000b = "_flex-container_7684cb";
$3e0fbee9207f7ca6$export$31a9da8b58047a44 = "_flex-gap_7684cb";
$3e0fbee9207f7ca6$export$cd2a778fcee9ca5c = "_spectrum-ActionGroup_7684cb";
$3e0fbee9207f7ca6$export$94ffe66966d2f53b = "_spectrum-ActionGroup-item_7684cb";
$3e0fbee9207f7ca6$export$b76f0727b879d41c = "_spectrum-ActionGroup--vertical_7684cb";
$3e0fbee9207f7ca6$export$72623314301ff89b = "_spectrum-ActionGroup--quiet_7684cb";
$3e0fbee9207f7ca6$export$565332043c1dc688 = "_spectrum-ActionGroup--justified_7684cb";
$3e0fbee9207f7ca6$export$a8ccf3eb925252bd = "_spectrum-ActionGroup--compact_7684cb";
$3e0fbee9207f7ca6$export$e5274b4bc2184bc9 = "_spectrum-ActionGroup-item--isDisabled_7684cb";
$3e0fbee9207f7ca6$export$1e0fb04f31d3c22a = "_is-selected_7684cb";
$3e0fbee9207f7ca6$export$b8813cd5d7824ce7 = "_is-hovered_7684cb";
$3e0fbee9207f7ca6$export$8e862a39302377c1 = "_spectrum-ActionGroup--overflowCollapse_7684cb";
$3e0fbee9207f7ca6$export$a56eb57dbecb1bdd = "_spectrum-ActionGroup-menu_7684cb";
$3e0fbee9207f7ca6$export$96da682f48d2c62a = "_spectrum-ActionGroup-menu-chevron_7684cb";
$3e0fbee9207f7ca6$export$1733ee5cd2fc5d66 = "_spectrum-ActionGroup-menu-contents_7684cb";
$3e0fbee9207f7ca6$export$db27a979adeba484 = "_spectrum-ActionGroup-item--iconOnly_7684cb";







function $3e9aaba1f5deebea$var$ActionGroup(props, ref) {
    props = $ktJjJ$useProviderProps(props);
    props = $ktJjJ$useSlotProps(props, 'actionGroup');
    let { isEmphasized: isEmphasized , density: density , isJustified: isJustified , isDisabled: isDisabled , orientation: orientation = 'horizontal' , isQuiet: isQuiet , staticColor: staticColor , overflowMode: overflowMode = 'wrap' , onAction: onAction , buttonLabelBehavior: buttonLabelBehavior , summaryIcon: summaryIcon , ...otherProps } = props;
    let domRef = $ktJjJ$useDOMRef(ref);
    let wrapperRef = $ktJjJ$useRef(null);
    let state = $ktJjJ$useListState({
        ...props,
        suppressTextValueWarning: true
    });
    let { actionGroupProps: actionGroupProps  } = $ktJjJ$useActionGroup(props, state, domRef);
    let isVertical = orientation === 'vertical';
    let providerProps = {
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isQuiet: isQuiet
    };
    let { styleProps: styleProps  } = $ktJjJ$useStyleProps(props);
    // Only hide button text if every item contains more than just plain text (we assume an icon).
    let isIconCollapsible = $ktJjJ$useMemo(()=>[
            ...state.collection
        ].every((item)=>typeof item.rendered !== 'string'
        )
    , [
        state.collection
    ]);
    let [{ visibleItems: visibleItems1 , hideButtonText: hideButtonText1 , isMeasuring: isMeasuring1  }, setVisibleItems] = $ktJjJ$useValueEffect({
        visibleItems: state.collection.size,
        hideButtonText: buttonLabelBehavior === 'hide' && isIconCollapsible,
        isMeasuring: false
    });
    let selectionMode = state.selectionManager.selectionMode;
    let updateOverflow = $ktJjJ$useCallback(()=>{
        if (overflowMode === 'wrap') return;
        if (orientation === 'vertical' && selectionMode !== 'none') // Collapsing vertical action groups with selection is currently unsupported by Spectrum.
        return;
        let computeVisibleItems = (visibleItems)=>{
            let listItems = Array.from(domRef.current.children);
            let containerSize = orientation === 'horizontal' ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;
            let isShowingMenu = visibleItems < state.collection.size;
            let calculatedSize = 0;
            let newVisibleItems = 0;
            if (isShowingMenu) calculatedSize += orientation === 'horizontal' ? $3e9aaba1f5deebea$var$outerWidth(listItems.pop(), false, true) : $3e9aaba1f5deebea$var$outerHeight(listItems.pop(), false, true);
            for (let [i, item] of listItems.entries()){
                calculatedSize += orientation === 'horizontal' ? $3e9aaba1f5deebea$var$outerWidth(item, i === 0, i === listItems.length - 1) : $3e9aaba1f5deebea$var$outerHeight(item, i === 0, i === listItems.length - 1);
                if (calculatedSize <= containerSize) newVisibleItems++;
                else break;
            }
            // If selection is enabled, and not all of the items fit, collapse all of them into a dropdown
            // immediately rather than having some visible and some not.
            if (selectionMode !== 'none' && newVisibleItems < state.collection.size) return 0;
            return newVisibleItems;
        };
        setVisibleItems(function*() {
            let hideButtonText = buttonLabelBehavior === 'hide' && isIconCollapsible;
            // Update to show all items.
            yield {
                visibleItems: state.collection.size,
                hideButtonText: hideButtonText,
                isMeasuring: true
            };
            // Measure, and update to show the items that fit.
            let newVisibleItems = computeVisibleItems(state.collection.size);
            let isMeasuring = newVisibleItems < state.collection.size && newVisibleItems > 0;
            // If not all of the buttons fit, and buttonLabelBehavior is 'collapse', then first try hiding
            // the button text and only showing icons. Only if that still doesn't fit collapse into a menu.
            if (newVisibleItems < state.collection.size && buttonLabelBehavior === 'collapse' && isIconCollapsible) {
                yield {
                    visibleItems: state.collection.size,
                    hideButtonText: true,
                    isMeasuring: true
                };
                newVisibleItems = computeVisibleItems(state.collection.size);
                isMeasuring = newVisibleItems < state.collection.size && newVisibleItems > 0;
                hideButtonText = true;
            }
            yield {
                visibleItems: newVisibleItems,
                hideButtonText: hideButtonText,
                isMeasuring: isMeasuring
            };
            // If the number of items is less than the number of children,
            // then update again to ensure that the menu fits.
            if (isMeasuring) yield {
                visibleItems: computeVisibleItems(newVisibleItems),
                hideButtonText: hideButtonText,
                isMeasuring: false
            };
        });
    }, [
        domRef,
        state.collection,
        setVisibleItems,
        overflowMode,
        selectionMode,
        buttonLabelBehavior,
        isIconCollapsible,
        orientation
    ]);
    // Watch the parent element for size changes. Watching only the action group itself may not work
    // in all scenarios because it may not shrink when available space is reduced.
    let parentRef = $ktJjJ$useMemo(()=>({
            get current () {
                return wrapperRef.current.parentElement;
            }
        })
    , [
        wrapperRef
    ]);
    $ktJjJ$useResizeObserver({
        ref: overflowMode !== 'wrap' ? parentRef : null,
        onResize: updateOverflow
    });
    $ktJjJ$useLayoutEffect(updateOverflow, [
        updateOverflow,
        state.collection
    ]);
    let children = [
        ...state.collection
    ];
    let menuItem = null;
    let menuProps = {
    };
    // If there are no visible items, don't apply any props to the action group container
    // and pass all aria labeling props through to the menu button.
    if (overflowMode === 'collapse' && visibleItems1 === 0) {
        menuProps = $ktJjJ$filterDOMProps(props, {
            labelable: true
        });
        actionGroupProps = {
        };
    }
    if (overflowMode === 'collapse' && visibleItems1 < state.collection.size) {
        let menuChildren = children.slice(visibleItems1);
        children = children.slice(0, visibleItems1);
        menuItem = /*#__PURE__*/ $ktJjJ$react.createElement($3e9aaba1f5deebea$var$ActionGroupMenu, {
            ...menuProps,
            items: menuChildren,
            onAction: onAction,
            isDisabled: isDisabled,
            isEmphasized: isEmphasized,
            staticColor: staticColor,
            state: state,
            summaryIcon: summaryIcon,
            hideButtonText: hideButtonText1,
            isOnlyItem: visibleItems1 === 0,
            orientation: orientation
        });
    }
    let style = {
        ...styleProps.style,
        // While measuring, take up as much space as possible.
        flexBasis: isMeasuring1 ? '100%' : undefined
    };
    return(/*#__PURE__*/ $ktJjJ$react.createElement("div", {
        ...styleProps,
        style: style,
        className: $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($3e0fbee9207f7ca6$exports)), 'flex-container', styleProps.className),
        ref: wrapperRef
    }, /*#__PURE__*/ $ktJjJ$react.createElement("div", {
        ...actionGroupProps,
        ref: domRef,
        className: $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($3e0fbee9207f7ca6$exports)), 'flex-gap', 'spectrum-ActionGroup', {
            'spectrum-ActionGroup--quiet': isQuiet,
            'spectrum-ActionGroup--vertical': isVertical,
            'spectrum-ActionGroup--compact': density === 'compact',
            'spectrum-ActionGroup--justified': isJustified && !isMeasuring1,
            'spectrum-ActionGroup--overflowCollapse': overflowMode === 'collapse'
        }, otherProps.UNSAFE_className)
    }, /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$Provider, providerProps, children.map((item)=>/*#__PURE__*/ $ktJjJ$react.createElement($3e9aaba1f5deebea$var$ActionGroupItem, {
            key: item.key,
            onAction: onAction,
            isDisabled: isDisabled,
            isEmphasized: isEmphasized,
            staticColor: staticColor,
            item: item,
            state: state,
            hideButtonText: hideButtonText1,
            orientation: orientation
        })
    ), menuItem))));
}
/**
 * An ActionGroup is a grouping of ActionButtons that are related to one another.
 */ const $3e9aaba1f5deebea$export$c21a5597f732a168 = /*#__PURE__*/ $ktJjJ$forwardRef($3e9aaba1f5deebea$var$ActionGroup);
function $3e9aaba1f5deebea$var$ActionGroupItem({ item: item , state: state , isDisabled: isDisabled , isEmphasized: isEmphasized , staticColor: staticColor , onAction: onAction , hideButtonText: hideButtonText , orientation: orientation  }) {
    let ref = $ktJjJ$useRef();
    let { buttonProps: buttonProps  } = $ktJjJ$useActionGroupItem({
        key: item.key
    }, state);
    isDisabled = isDisabled || state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(item.key);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $ktJjJ$useHover({
        isDisabled: isDisabled
    });
    if (onAction && !isDisabled) buttonProps = $ktJjJ$mergeProps(buttonProps, {
        onPress: ()=>onAction(item.key)
    });
    // If button text is hidden, we need to show it as a tooltip instead, so
    // go find the text element in the DOM after rendering.
    let textId = $ktJjJ$useId();
    let [textContent, setTextContent] = $ktJjJ$useState('');
    $ktJjJ$useLayoutEffect(()=>{
        if (hideButtonText) setTextContent(document.getElementById(textId)?.textContent);
    }, [
        hideButtonText,
        item.rendered,
        textId
    ]);
    let button = // Use a PressResponder to send DOM props through.
    // ActionButton doesn't allow overriding the role by default.
    /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$PressResponder, $ktJjJ$mergeProps(buttonProps, hoverProps), /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$ClearSlots, null, /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$SlotProvider, {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText
            }
        }
    }, /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$ActionButton, {
        ref: ref,
        UNSAFE_className: $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($3e0fbee9207f7ca6$exports)), 'spectrum-ActionGroup-item', {
            'is-selected': isSelected,
            'is-hovered': isHovered,
            'spectrum-ActionGroup-item--iconOnly': hideButtonText,
            'spectrum-ActionGroup-item--isDisabled': isDisabled
        }, $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($91cc66a793b0c871$exports)), {
            'spectrum-ActionButton--emphasized': isEmphasized,
            'is-selected': isSelected
        })),
        isDisabled: isDisabled,
        staticColor: staticColor,
        "aria-label": item['aria-label'],
        "aria-labelledby": item['aria-label'] == null && hideButtonText ? textId : undefined
    }, item.rendered))));
    if (hideButtonText && textContent) button = /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$TooltipTrigger, {
        placement: orientation === 'vertical' ? 'end' : 'top'
    }, button, /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$Tooltip, null, textContent));
    if (item.wrapper) button = item.wrapper(button);
    return button;
}
function $3e9aaba1f5deebea$var$ActionGroupMenu({ state: state , isDisabled: isDisabled , isEmphasized: isEmphasized , staticColor: staticColor , items: items , onAction: onAction , summaryIcon: summaryIcon , hideButtonText: hideButtonText , isOnlyItem: isOnlyItem , orientation: orientation , ...otherProps }) {
    // Use the key of the first item within the menu as the key of the button.
    // The key must actually exist in the collection for focus to work correctly.
    let key = items[0].key;
    let { buttonProps: buttonProps  } = $ktJjJ$useActionGroupItem({
        key: key
    }, state);
    // The menu button shouldn't act like an actual action group item.
    delete buttonProps.onPress;
    delete buttonProps.role;
    delete buttonProps['aria-checked'];
    let { hoverProps: hoverProps , isHovered: isHovered  } = $ktJjJ$useHover({
        isDisabled: isDisabled
    });
    // If no aria-label or aria-labelledby is given, provide a default one.
    let ariaLabel = otherProps['aria-label'] || (otherProps['aria-labelledby'] ? null : '…');
    let ariaLabelledby = otherProps['aria-labelledby'];
    let textId = $ktJjJ$useId();
    let id = $ktJjJ$useId();
    // Summary icon only applies when selection is enabled.
    if (state.selectionManager.selectionMode === 'none') summaryIcon = null;
    let iconOnly = false;
    // If there is a selection, show the selected state on the menu button.
    let isSelected = state.selectionManager.selectionMode !== 'none' && !state.selectionManager.isEmpty;
    // If single selection and empty selection is not allowed, swap the contents of the button to the selected item (like a Picker).
    if (!summaryIcon && state.selectionManager.selectionMode === 'single' && state.selectionManager.disallowEmptySelection) {
        let selectedItem = state.collection.getItem(state.selectionManager.firstSelectedKey);
        if (selectedItem) {
            summaryIcon = selectedItem.rendered;
            if (typeof summaryIcon === 'string') summaryIcon = /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$Text, null, summaryIcon);
            iconOnly = hideButtonText;
            ariaLabelledby = `${ariaLabelledby ?? id} ${textId}`;
        }
    }
    if (summaryIcon) // If there's a custom summary icon, also add a chevron.
    summaryIcon = /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$react.Fragment, null, /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$spectrumiconsuiChevronDownMedium, {
        UNSAFE_className: $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($3e0fbee9207f7ca6$exports)), 'spectrum-ActionGroup-menu-chevron')
    }), /*#__PURE__*/ $ktJjJ$react.createElement("span", {
        className: $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($3e0fbee9207f7ca6$exports)), 'spectrum-ActionGroup-menu-contents', {
            'spectrum-ActionGroup-item--iconOnly': iconOnly
        })
    }, summaryIcon));
    return(// Use a PressResponder to send DOM props through.
    /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$MenuTrigger, {
        align: isOnlyItem ? 'start' : 'end',
        direction: orientation === 'vertical' ? 'end' : 'bottom'
    }, /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$SlotProvider, {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText,
                UNSAFE_className: $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($3e0fbee9207f7ca6$exports)), 'spectrum-ActionGroup-menu-text')
            }
        }
    }, /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$PressResponder, $ktJjJ$mergeProps(buttonProps, hoverProps), /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$ActionButton, {
        ...otherProps,
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        UNSAFE_className: $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($3e0fbee9207f7ca6$exports)), 'spectrum-ActionGroup-item', 'spectrum-ActionGroup-menu', {
            'is-hovered': isHovered,
            'is-selected': isSelected
        }, $ktJjJ$classNames((/*@__PURE__*/$parcel$interopDefault($91cc66a793b0c871$exports)), {
            'is-selected': isSelected,
            'spectrum-ActionButton--emphasized': isEmphasized
        })),
        isDisabled: isDisabled,
        staticColor: staticColor
    }, summaryIcon || /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$spectrumiconsworkflowMore, null)))), /*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$Menu, {
        items: items,
        disabledKeys: state.disabledKeys,
        selectionMode: state.selectionManager.selectionMode,
        selectedKeys: state.selectionManager.selectedKeys,
        disallowEmptySelection: state.selectionManager.disallowEmptySelection,
        onSelectionChange: (keys)=>state.selectionManager.setSelectedKeys(keys)
        ,
        onAction: onAction
    }, (node)=>/*#__PURE__*/ $ktJjJ$react.createElement($ktJjJ$Item, {
            textValue: node.textValue
        }, node.rendered)
    )));
}
function $3e9aaba1f5deebea$var$outerWidth(element, ignoreLeftMargin, ignoreRightMargin) {
    let style = window.getComputedStyle(element);
    return element.offsetWidth + (ignoreLeftMargin ? 0 : $3e9aaba1f5deebea$var$toNumber(style.marginLeft)) + (ignoreRightMargin ? 0 : $3e9aaba1f5deebea$var$toNumber(style.marginRight));
}
function $3e9aaba1f5deebea$var$outerHeight(element, ignoreTopMargin, ignoreBottomMargin) {
    let style = window.getComputedStyle(element);
    return element.offsetHeight + (ignoreTopMargin ? 0 : $3e9aaba1f5deebea$var$toNumber(style.marginTop)) + (ignoreBottomMargin ? 0 : $3e9aaba1f5deebea$var$toNumber(style.marginBottom));
}
function $3e9aaba1f5deebea$var$toNumber(value) {
    let parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
}





export {$1362364a56ee0df3$re_export$Item as Item, $3e9aaba1f5deebea$export$c21a5597f732a168 as ActionGroup};
//# sourceMappingURL=module.js.map
