require("./main.css");
var $3dGAY$reactstatelycollections = require("@react-stately/collections");
var $3dGAY$reactspectrumbutton = require("@react-spectrum/button");
var $3dGAY$spectrumiconsuiChevronDownMedium = require("@spectrum-icons/ui/ChevronDownMedium");
var $3dGAY$reactspectrumutils = require("@react-spectrum/utils");
var $3dGAY$reactariautils = require("@react-aria/utils");
var $3dGAY$reactspectrummenu = require("@react-spectrum/menu");
var $3dGAY$reactstatelylist = require("@react-stately/list");
var $3dGAY$spectrumiconsworkflowMore = require("@spectrum-icons/workflow/More");
var $3dGAY$reactariainteractions = require("@react-aria/interactions");
var $3dGAY$reactspectrumprovider = require("@react-spectrum/provider");
var $3dGAY$react = require("react");
var $3dGAY$reactspectrumtext = require("@react-spectrum/text");
var $3dGAY$reactspectrumtooltip = require("@react-spectrum/tooltip");
var $3dGAY$reactariaactiongroup = require("@react-aria/actiongroup");

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

$parcel$export(module.exports, "Item", () => $85d9afa5e4a91be8$re_export$Item);
var $d7fed5b8d690b843$exports = {};

$parcel$export($d7fed5b8d690b843$exports, "ActionGroup", () => $d7fed5b8d690b843$export$c21a5597f732a168);

var $c1b2fd38b37ee931$exports = {};

$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button", () => $c1b2fd38b37ee931$export$1db4cca5b4ade39a, (v) => $c1b2fd38b37ee931$export$1db4cca5b4ade39a = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton", () => $c1b2fd38b37ee931$export$53da69f51b770d3, (v) => $c1b2fd38b37ee931$export$53da69f51b770d3 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-LogicButton", () => $c1b2fd38b37ee931$export$36ae67a131730482, (v) => $c1b2fd38b37ee931$export$36ae67a131730482 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-FieldButton", () => $c1b2fd38b37ee931$export$a024c99ecf6b5741, (v) => $c1b2fd38b37ee931$export$a024c99ecf6b5741 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ClearButton", () => $c1b2fd38b37ee931$export$b752ce409e5660c, (v) => $c1b2fd38b37ee931$export$b752ce409e5660c = v);
$parcel$export($c1b2fd38b37ee931$exports, "focus-ring", () => $c1b2fd38b37ee931$export$f39a09f249340e2a, (v) => $c1b2fd38b37ee931$export$f39a09f249340e2a = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Icon", () => $c1b2fd38b37ee931$export$d374b04f30360026, (v) => $c1b2fd38b37ee931$export$d374b04f30360026 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton--emphasized", () => $c1b2fd38b37ee931$export$5aabb61a966e266f, (v) => $c1b2fd38b37ee931$export$5aabb61a966e266f = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton--staticColor", () => $c1b2fd38b37ee931$export$29b7b5d6a5a497c5, (v) => $c1b2fd38b37ee931$export$29b7b5d6a5a497c5 = v);
$parcel$export($c1b2fd38b37ee931$exports, "is-hovered", () => $c1b2fd38b37ee931$export$b8813cd5d7824ce7, (v) => $c1b2fd38b37ee931$export$b8813cd5d7824ce7 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button-label", () => $c1b2fd38b37ee931$export$c081ba562e204942, (v) => $c1b2fd38b37ee931$export$c081ba562e204942 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton-label", () => $c1b2fd38b37ee931$export$ebb4635c66bacdb9, (v) => $c1b2fd38b37ee931$export$ebb4635c66bacdb9 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton-hold", () => $c1b2fd38b37ee931$export$4a4f01c443eff992, (v) => $c1b2fd38b37ee931$export$4a4f01c443eff992 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton--quiet", () => $c1b2fd38b37ee931$export$40e1f009544bacf3, (v) => $c1b2fd38b37ee931$export$40e1f009544bacf3 = v);
$parcel$export($c1b2fd38b37ee931$exports, "is-disabled", () => $c1b2fd38b37ee931$export$d35bc1e505d1ebbf, (v) => $c1b2fd38b37ee931$export$d35bc1e505d1ebbf = v);
$parcel$export($c1b2fd38b37ee931$exports, "is-open", () => $c1b2fd38b37ee931$export$a9781837241c946d, (v) => $c1b2fd38b37ee931$export$a9781837241c946d = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-FieldButton--quiet", () => $c1b2fd38b37ee931$export$5ca7b274e4fff9fc, (v) => $c1b2fd38b37ee931$export$5ca7b274e4fff9fc = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ClearButton--overBackground", () => $c1b2fd38b37ee931$export$116f2fccf941d34d, (v) => $c1b2fd38b37ee931$export$116f2fccf941d34d = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ClearButton--small", () => $c1b2fd38b37ee931$export$49280ffa5236ba8b, (v) => $c1b2fd38b37ee931$export$49280ffa5236ba8b = v);
$parcel$export($c1b2fd38b37ee931$exports, "is-focused", () => $c1b2fd38b37ee931$export$e7dc768d35940237, (v) => $c1b2fd38b37ee931$export$e7dc768d35940237 = v);
$parcel$export($c1b2fd38b37ee931$exports, "is-active", () => $c1b2fd38b37ee931$export$20fd0f7cd4e6112f, (v) => $c1b2fd38b37ee931$export$20fd0f7cd4e6112f = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button--cta", () => $c1b2fd38b37ee931$export$b818fdf0052a2cab, (v) => $c1b2fd38b37ee931$export$b818fdf0052a2cab = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button--primary", () => $c1b2fd38b37ee931$export$c1c3511f5e96e926, (v) => $c1b2fd38b37ee931$export$c1c3511f5e96e926 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button--secondary", () => $c1b2fd38b37ee931$export$4f1b75526afd8ff3, (v) => $c1b2fd38b37ee931$export$4f1b75526afd8ff3 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button--warning", () => $c1b2fd38b37ee931$export$6f97cef817ff1cac, (v) => $c1b2fd38b37ee931$export$6f97cef817ff1cac = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button--overBackground", () => $c1b2fd38b37ee931$export$5cda1128f9112d2e, (v) => $c1b2fd38b37ee931$export$5cda1128f9112d2e = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-Button--quiet", () => $c1b2fd38b37ee931$export$25f049c049371040, (v) => $c1b2fd38b37ee931$export$25f049c049371040 = v);
$parcel$export($c1b2fd38b37ee931$exports, "is-selected", () => $c1b2fd38b37ee931$export$1e0fb04f31d3c22a, (v) => $c1b2fd38b37ee931$export$1e0fb04f31d3c22a = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton--staticWhite", () => $c1b2fd38b37ee931$export$ccc536e1adbdc059, (v) => $c1b2fd38b37ee931$export$ccc536e1adbdc059 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-ActionButton--staticBlack", () => $c1b2fd38b37ee931$export$8f7c9db66978d20f, (v) => $c1b2fd38b37ee931$export$8f7c9db66978d20f = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-LogicButton--and", () => $c1b2fd38b37ee931$export$e52daab43a62c528, (v) => $c1b2fd38b37ee931$export$e52daab43a62c528 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-LogicButton--or", () => $c1b2fd38b37ee931$export$da76be6126aaa633, (v) => $c1b2fd38b37ee931$export$da76be6126aaa633 = v);
$parcel$export($c1b2fd38b37ee931$exports, "is-placeholder", () => $c1b2fd38b37ee931$export$e5b2f5233e4e5194, (v) => $c1b2fd38b37ee931$export$e5b2f5233e4e5194 = v);
$parcel$export($c1b2fd38b37ee931$exports, "spectrum-FieldButton--invalid", () => $c1b2fd38b37ee931$export$c9f503f672e8a3c1, (v) => $c1b2fd38b37ee931$export$c9f503f672e8a3c1 = v);
var $c1b2fd38b37ee931$export$1db4cca5b4ade39a;
var $c1b2fd38b37ee931$export$53da69f51b770d3;
var $c1b2fd38b37ee931$export$36ae67a131730482;
var $c1b2fd38b37ee931$export$a024c99ecf6b5741;
var $c1b2fd38b37ee931$export$b752ce409e5660c;
var $c1b2fd38b37ee931$export$f39a09f249340e2a;
var $c1b2fd38b37ee931$export$d374b04f30360026;
var $c1b2fd38b37ee931$export$5aabb61a966e266f;
var $c1b2fd38b37ee931$export$29b7b5d6a5a497c5;
var $c1b2fd38b37ee931$export$b8813cd5d7824ce7;
var $c1b2fd38b37ee931$export$c081ba562e204942;
var $c1b2fd38b37ee931$export$ebb4635c66bacdb9;
var $c1b2fd38b37ee931$export$4a4f01c443eff992;
var $c1b2fd38b37ee931$export$40e1f009544bacf3;
var $c1b2fd38b37ee931$export$d35bc1e505d1ebbf;
var $c1b2fd38b37ee931$export$a9781837241c946d;
var $c1b2fd38b37ee931$export$5ca7b274e4fff9fc;
var $c1b2fd38b37ee931$export$116f2fccf941d34d;
var $c1b2fd38b37ee931$export$49280ffa5236ba8b;
var $c1b2fd38b37ee931$export$e7dc768d35940237;
var $c1b2fd38b37ee931$export$20fd0f7cd4e6112f;
var $c1b2fd38b37ee931$export$b818fdf0052a2cab;
var $c1b2fd38b37ee931$export$c1c3511f5e96e926;
var $c1b2fd38b37ee931$export$4f1b75526afd8ff3;
var $c1b2fd38b37ee931$export$6f97cef817ff1cac;
var $c1b2fd38b37ee931$export$5cda1128f9112d2e;
var $c1b2fd38b37ee931$export$25f049c049371040;
var $c1b2fd38b37ee931$export$1e0fb04f31d3c22a;
var $c1b2fd38b37ee931$export$ccc536e1adbdc059;
var $c1b2fd38b37ee931$export$8f7c9db66978d20f;
var $c1b2fd38b37ee931$export$e52daab43a62c528;
var $c1b2fd38b37ee931$export$da76be6126aaa633;
var $c1b2fd38b37ee931$export$e5b2f5233e4e5194;
var $c1b2fd38b37ee931$export$c9f503f672e8a3c1;
$c1b2fd38b37ee931$export$1db4cca5b4ade39a = "_spectrum-Button_e2d99e";
$c1b2fd38b37ee931$export$53da69f51b770d3 = "_spectrum-ActionButton_e2d99e";
$c1b2fd38b37ee931$export$36ae67a131730482 = "_spectrum-LogicButton_e2d99e";
$c1b2fd38b37ee931$export$a024c99ecf6b5741 = "_spectrum-FieldButton_e2d99e";
$c1b2fd38b37ee931$export$b752ce409e5660c = "_spectrum-ClearButton_e2d99e";
$c1b2fd38b37ee931$export$f39a09f249340e2a = "_focus-ring_e2d99e";
$c1b2fd38b37ee931$export$d374b04f30360026 = "_spectrum-Icon_e2d99e";
$c1b2fd38b37ee931$export$5aabb61a966e266f = "_spectrum-ActionButton--emphasized_e2d99e";
$c1b2fd38b37ee931$export$29b7b5d6a5a497c5 = "_spectrum-ActionButton--staticColor_e2d99e";
$c1b2fd38b37ee931$export$b8813cd5d7824ce7 = "_is-hovered_e2d99e";
$c1b2fd38b37ee931$export$c081ba562e204942 = "_spectrum-Button-label_e2d99e";
$c1b2fd38b37ee931$export$ebb4635c66bacdb9 = "_spectrum-ActionButton-label_e2d99e";
$c1b2fd38b37ee931$export$4a4f01c443eff992 = "_spectrum-ActionButton-hold_e2d99e";
$c1b2fd38b37ee931$export$40e1f009544bacf3 = "_spectrum-ActionButton--quiet_e2d99e";
$c1b2fd38b37ee931$export$d35bc1e505d1ebbf = "_is-disabled_e2d99e";
$c1b2fd38b37ee931$export$a9781837241c946d = "_is-open_e2d99e";
$c1b2fd38b37ee931$export$5ca7b274e4fff9fc = "_spectrum-FieldButton--quiet_e2d99e";
$c1b2fd38b37ee931$export$116f2fccf941d34d = "_spectrum-ClearButton--overBackground_e2d99e";
$c1b2fd38b37ee931$export$49280ffa5236ba8b = "_spectrum-ClearButton--small_e2d99e";
$c1b2fd38b37ee931$export$e7dc768d35940237 = "_is-focused_e2d99e";
$c1b2fd38b37ee931$export$20fd0f7cd4e6112f = "_is-active_e2d99e";
$c1b2fd38b37ee931$export$b818fdf0052a2cab = "_spectrum-Button--cta_e2d99e";
$c1b2fd38b37ee931$export$c1c3511f5e96e926 = "_spectrum-Button--primary_e2d99e";
$c1b2fd38b37ee931$export$4f1b75526afd8ff3 = "_spectrum-Button--secondary_e2d99e";
$c1b2fd38b37ee931$export$6f97cef817ff1cac = "_spectrum-Button--warning_e2d99e";
$c1b2fd38b37ee931$export$5cda1128f9112d2e = "_spectrum-Button--overBackground_e2d99e";
$c1b2fd38b37ee931$export$25f049c049371040 = "_spectrum-Button--quiet_e2d99e";
$c1b2fd38b37ee931$export$1e0fb04f31d3c22a = "_is-selected_e2d99e";
$c1b2fd38b37ee931$export$ccc536e1adbdc059 = "_spectrum-ActionButton--staticWhite_e2d99e";
$c1b2fd38b37ee931$export$8f7c9db66978d20f = "_spectrum-ActionButton--staticBlack_e2d99e";
$c1b2fd38b37ee931$export$e52daab43a62c528 = "_spectrum-LogicButton--and_e2d99e";
$c1b2fd38b37ee931$export$da76be6126aaa633 = "_spectrum-LogicButton--or_e2d99e";
$c1b2fd38b37ee931$export$e5b2f5233e4e5194 = "_is-placeholder_e2d99e";
$c1b2fd38b37ee931$export$c9f503f672e8a3c1 = "_spectrum-FieldButton--invalid_e2d99e";











var $f4dcb368124f9dcd$exports = {};

$parcel$export($f4dcb368124f9dcd$exports, "flex-container", () => $f4dcb368124f9dcd$export$69d7a39fa31a000b, (v) => $f4dcb368124f9dcd$export$69d7a39fa31a000b = v);
$parcel$export($f4dcb368124f9dcd$exports, "flex-gap", () => $f4dcb368124f9dcd$export$31a9da8b58047a44, (v) => $f4dcb368124f9dcd$export$31a9da8b58047a44 = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup", () => $f4dcb368124f9dcd$export$cd2a778fcee9ca5c, (v) => $f4dcb368124f9dcd$export$cd2a778fcee9ca5c = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup-item", () => $f4dcb368124f9dcd$export$94ffe66966d2f53b, (v) => $f4dcb368124f9dcd$export$94ffe66966d2f53b = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup--vertical", () => $f4dcb368124f9dcd$export$b76f0727b879d41c, (v) => $f4dcb368124f9dcd$export$b76f0727b879d41c = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup--quiet", () => $f4dcb368124f9dcd$export$72623314301ff89b, (v) => $f4dcb368124f9dcd$export$72623314301ff89b = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup--justified", () => $f4dcb368124f9dcd$export$565332043c1dc688, (v) => $f4dcb368124f9dcd$export$565332043c1dc688 = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup--compact", () => $f4dcb368124f9dcd$export$a8ccf3eb925252bd, (v) => $f4dcb368124f9dcd$export$a8ccf3eb925252bd = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup-item--isDisabled", () => $f4dcb368124f9dcd$export$e5274b4bc2184bc9, (v) => $f4dcb368124f9dcd$export$e5274b4bc2184bc9 = v);
$parcel$export($f4dcb368124f9dcd$exports, "is-selected", () => $f4dcb368124f9dcd$export$1e0fb04f31d3c22a, (v) => $f4dcb368124f9dcd$export$1e0fb04f31d3c22a = v);
$parcel$export($f4dcb368124f9dcd$exports, "is-hovered", () => $f4dcb368124f9dcd$export$b8813cd5d7824ce7, (v) => $f4dcb368124f9dcd$export$b8813cd5d7824ce7 = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup--overflowCollapse", () => $f4dcb368124f9dcd$export$8e862a39302377c1, (v) => $f4dcb368124f9dcd$export$8e862a39302377c1 = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup-menu", () => $f4dcb368124f9dcd$export$a56eb57dbecb1bdd, (v) => $f4dcb368124f9dcd$export$a56eb57dbecb1bdd = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup-menu-chevron", () => $f4dcb368124f9dcd$export$96da682f48d2c62a, (v) => $f4dcb368124f9dcd$export$96da682f48d2c62a = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup-menu-contents", () => $f4dcb368124f9dcd$export$1733ee5cd2fc5d66, (v) => $f4dcb368124f9dcd$export$1733ee5cd2fc5d66 = v);
$parcel$export($f4dcb368124f9dcd$exports, "spectrum-ActionGroup-item--iconOnly", () => $f4dcb368124f9dcd$export$db27a979adeba484, (v) => $f4dcb368124f9dcd$export$db27a979adeba484 = v);
var $f4dcb368124f9dcd$export$69d7a39fa31a000b;
var $f4dcb368124f9dcd$export$31a9da8b58047a44;
var $f4dcb368124f9dcd$export$cd2a778fcee9ca5c;
var $f4dcb368124f9dcd$export$94ffe66966d2f53b;
var $f4dcb368124f9dcd$export$b76f0727b879d41c;
var $f4dcb368124f9dcd$export$72623314301ff89b;
var $f4dcb368124f9dcd$export$565332043c1dc688;
var $f4dcb368124f9dcd$export$a8ccf3eb925252bd;
var $f4dcb368124f9dcd$export$e5274b4bc2184bc9;
var $f4dcb368124f9dcd$export$1e0fb04f31d3c22a;
var $f4dcb368124f9dcd$export$b8813cd5d7824ce7;
var $f4dcb368124f9dcd$export$8e862a39302377c1;
var $f4dcb368124f9dcd$export$a56eb57dbecb1bdd;
var $f4dcb368124f9dcd$export$96da682f48d2c62a;
var $f4dcb368124f9dcd$export$1733ee5cd2fc5d66;
var $f4dcb368124f9dcd$export$db27a979adeba484;
$f4dcb368124f9dcd$export$69d7a39fa31a000b = "_flex-container_7684cb";
$f4dcb368124f9dcd$export$31a9da8b58047a44 = "_flex-gap_7684cb";
$f4dcb368124f9dcd$export$cd2a778fcee9ca5c = "_spectrum-ActionGroup_7684cb";
$f4dcb368124f9dcd$export$94ffe66966d2f53b = "_spectrum-ActionGroup-item_7684cb";
$f4dcb368124f9dcd$export$b76f0727b879d41c = "_spectrum-ActionGroup--vertical_7684cb";
$f4dcb368124f9dcd$export$72623314301ff89b = "_spectrum-ActionGroup--quiet_7684cb";
$f4dcb368124f9dcd$export$565332043c1dc688 = "_spectrum-ActionGroup--justified_7684cb";
$f4dcb368124f9dcd$export$a8ccf3eb925252bd = "_spectrum-ActionGroup--compact_7684cb";
$f4dcb368124f9dcd$export$e5274b4bc2184bc9 = "_spectrum-ActionGroup-item--isDisabled_7684cb";
$f4dcb368124f9dcd$export$1e0fb04f31d3c22a = "_is-selected_7684cb";
$f4dcb368124f9dcd$export$b8813cd5d7824ce7 = "_is-hovered_7684cb";
$f4dcb368124f9dcd$export$8e862a39302377c1 = "_spectrum-ActionGroup--overflowCollapse_7684cb";
$f4dcb368124f9dcd$export$a56eb57dbecb1bdd = "_spectrum-ActionGroup-menu_7684cb";
$f4dcb368124f9dcd$export$96da682f48d2c62a = "_spectrum-ActionGroup-menu-chevron_7684cb";
$f4dcb368124f9dcd$export$1733ee5cd2fc5d66 = "_spectrum-ActionGroup-menu-contents_7684cb";
$f4dcb368124f9dcd$export$db27a979adeba484 = "_spectrum-ActionGroup-item--iconOnly_7684cb";







function $d7fed5b8d690b843$var$ActionGroup(props, ref) {
    props = $3dGAY$reactspectrumprovider.useProviderProps(props);
    props = $3dGAY$reactspectrumutils.useSlotProps(props, 'actionGroup');
    let { isEmphasized: isEmphasized , density: density , isJustified: isJustified , isDisabled: isDisabled , orientation: orientation = 'horizontal' , isQuiet: isQuiet , staticColor: staticColor , overflowMode: overflowMode = 'wrap' , onAction: onAction , buttonLabelBehavior: buttonLabelBehavior , summaryIcon: summaryIcon , ...otherProps } = props;
    let domRef = $3dGAY$reactspectrumutils.useDOMRef(ref);
    let wrapperRef = $3dGAY$react.useRef(null);
    let state = $3dGAY$reactstatelylist.useListState({
        ...props,
        suppressTextValueWarning: true
    });
    let { actionGroupProps: actionGroupProps  } = $3dGAY$reactariaactiongroup.useActionGroup(props, state, domRef);
    let isVertical = orientation === 'vertical';
    let providerProps = {
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isQuiet: isQuiet
    };
    let { styleProps: styleProps  } = $3dGAY$reactspectrumutils.useStyleProps(props);
    // Only hide button text if every item contains more than just plain text (we assume an icon).
    let isIconCollapsible = $3dGAY$react.useMemo(()=>[
            ...state.collection
        ].every((item)=>typeof item.rendered !== 'string'
        )
    , [
        state.collection
    ]);
    let [{ visibleItems: visibleItems1 , hideButtonText: hideButtonText1 , isMeasuring: isMeasuring1  }, setVisibleItems] = $3dGAY$reactariautils.useValueEffect({
        visibleItems: state.collection.size,
        hideButtonText: buttonLabelBehavior === 'hide' && isIconCollapsible,
        isMeasuring: false
    });
    let selectionMode = state.selectionManager.selectionMode;
    let updateOverflow = $3dGAY$react.useCallback(()=>{
        if (overflowMode === 'wrap') return;
        if (orientation === 'vertical' && selectionMode !== 'none') // Collapsing vertical action groups with selection is currently unsupported by Spectrum.
        return;
        let computeVisibleItems = (visibleItems)=>{
            let listItems = Array.from(domRef.current.children);
            let containerSize = orientation === 'horizontal' ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;
            let isShowingMenu = visibleItems < state.collection.size;
            let calculatedSize = 0;
            let newVisibleItems = 0;
            if (isShowingMenu) calculatedSize += orientation === 'horizontal' ? $d7fed5b8d690b843$var$outerWidth(listItems.pop(), false, true) : $d7fed5b8d690b843$var$outerHeight(listItems.pop(), false, true);
            for (let [i, item] of listItems.entries()){
                calculatedSize += orientation === 'horizontal' ? $d7fed5b8d690b843$var$outerWidth(item, i === 0, i === listItems.length - 1) : $d7fed5b8d690b843$var$outerHeight(item, i === 0, i === listItems.length - 1);
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
    let parentRef = $3dGAY$react.useMemo(()=>({
            get current () {
                return wrapperRef.current.parentElement;
            }
        })
    , [
        wrapperRef
    ]);
    $3dGAY$reactariautils.useResizeObserver({
        ref: overflowMode !== 'wrap' ? parentRef : null,
        onResize: updateOverflow
    });
    $3dGAY$reactariautils.useLayoutEffect(updateOverflow, [
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
        menuProps = $3dGAY$reactariautils.filterDOMProps(props, {
            labelable: true
        });
        actionGroupProps = {
        };
    }
    if (overflowMode === 'collapse' && visibleItems1 < state.collection.size) {
        let menuChildren = children.slice(visibleItems1);
        children = children.slice(0, visibleItems1);
        menuItem = /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($d7fed5b8d690b843$var$ActionGroupMenu, {
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
    return(/*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement("div", {
        ...styleProps,
        style: style,
        className: $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f4dcb368124f9dcd$exports)), 'flex-container', styleProps.className),
        ref: wrapperRef
    }, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement("div", {
        ...actionGroupProps,
        ref: domRef,
        className: $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f4dcb368124f9dcd$exports)), 'flex-gap', 'spectrum-ActionGroup', {
            'spectrum-ActionGroup--quiet': isQuiet,
            'spectrum-ActionGroup--vertical': isVertical,
            'spectrum-ActionGroup--compact': density === 'compact',
            'spectrum-ActionGroup--justified': isJustified && !isMeasuring1,
            'spectrum-ActionGroup--overflowCollapse': overflowMode === 'collapse'
        }, otherProps.UNSAFE_className)
    }, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumprovider.Provider, providerProps, children.map((item)=>/*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($d7fed5b8d690b843$var$ActionGroupItem, {
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
 */ const $d7fed5b8d690b843$export$c21a5597f732a168 = /*#__PURE__*/ $3dGAY$react.forwardRef($d7fed5b8d690b843$var$ActionGroup);
function $d7fed5b8d690b843$var$ActionGroupItem({ item: item , state: state , isDisabled: isDisabled , isEmphasized: isEmphasized , staticColor: staticColor , onAction: onAction , hideButtonText: hideButtonText , orientation: orientation  }) {
    let ref = $3dGAY$react.useRef();
    let { buttonProps: buttonProps  } = $3dGAY$reactariaactiongroup.useActionGroupItem({
        key: item.key
    }, state);
    isDisabled = isDisabled || state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(item.key);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $3dGAY$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    if (onAction && !isDisabled) buttonProps = $3dGAY$reactariautils.mergeProps(buttonProps, {
        onPress: ()=>onAction(item.key)
    });
    // If button text is hidden, we need to show it as a tooltip instead, so
    // go find the text element in the DOM after rendering.
    let textId = $3dGAY$reactariautils.useId();
    let [textContent, setTextContent] = $3dGAY$react.useState('');
    $3dGAY$reactariautils.useLayoutEffect(()=>{
        if (hideButtonText) setTextContent(document.getElementById(textId)?.textContent);
    }, [
        hideButtonText,
        item.rendered,
        textId
    ]);
    let button = // Use a PressResponder to send DOM props through.
    // ActionButton doesn't allow overriding the role by default.
    /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactariainteractions.PressResponder, $3dGAY$reactariautils.mergeProps(buttonProps, hoverProps), /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumutils.ClearSlots, null, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumutils.SlotProvider, {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText
            }
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumbutton.ActionButton, {
        ref: ref,
        UNSAFE_className: $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f4dcb368124f9dcd$exports)), 'spectrum-ActionGroup-item', {
            'is-selected': isSelected,
            'is-hovered': isHovered,
            'spectrum-ActionGroup-item--iconOnly': hideButtonText,
            'spectrum-ActionGroup-item--isDisabled': isDisabled
        }, $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($c1b2fd38b37ee931$exports)), {
            'spectrum-ActionButton--emphasized': isEmphasized,
            'is-selected': isSelected
        })),
        isDisabled: isDisabled,
        staticColor: staticColor,
        "aria-label": item['aria-label'],
        "aria-labelledby": item['aria-label'] == null && hideButtonText ? textId : undefined
    }, item.rendered))));
    if (hideButtonText && textContent) button = /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumtooltip.TooltipTrigger, {
        placement: orientation === 'vertical' ? 'end' : 'top'
    }, button, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumtooltip.Tooltip, null, textContent));
    if (item.wrapper) button = item.wrapper(button);
    return button;
}
function $d7fed5b8d690b843$var$ActionGroupMenu({ state: state , isDisabled: isDisabled , isEmphasized: isEmphasized , staticColor: staticColor , items: items , onAction: onAction , summaryIcon: summaryIcon , hideButtonText: hideButtonText , isOnlyItem: isOnlyItem , orientation: orientation , ...otherProps }) {
    // Use the key of the first item within the menu as the key of the button.
    // The key must actually exist in the collection for focus to work correctly.
    let key = items[0].key;
    let { buttonProps: buttonProps  } = $3dGAY$reactariaactiongroup.useActionGroupItem({
        key: key
    }, state);
    // The menu button shouldn't act like an actual action group item.
    delete buttonProps.onPress;
    delete buttonProps.role;
    delete buttonProps['aria-checked'];
    let { hoverProps: hoverProps , isHovered: isHovered  } = $3dGAY$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    // If no aria-label or aria-labelledby is given, provide a default one.
    let ariaLabel = otherProps['aria-label'] || (otherProps['aria-labelledby'] ? null : '…');
    let ariaLabelledby = otherProps['aria-labelledby'];
    let textId = $3dGAY$reactariautils.useId();
    let id = $3dGAY$reactariautils.useId();
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
            if (typeof summaryIcon === 'string') summaryIcon = /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumtext.Text, null, summaryIcon);
            iconOnly = hideButtonText;
            ariaLabelledby = `${ariaLabelledby ?? id} ${textId}`;
        }
    }
    if (summaryIcon) // If there's a custom summary icon, also add a chevron.
    summaryIcon = /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement(($parcel$interopDefault($3dGAY$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement(($parcel$interopDefault($3dGAY$spectrumiconsuiChevronDownMedium)), {
        UNSAFE_className: $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f4dcb368124f9dcd$exports)), 'spectrum-ActionGroup-menu-chevron')
    }), /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement("span", {
        className: $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f4dcb368124f9dcd$exports)), 'spectrum-ActionGroup-menu-contents', {
            'spectrum-ActionGroup-item--iconOnly': iconOnly
        })
    }, summaryIcon));
    return(// Use a PressResponder to send DOM props through.
    /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrummenu.MenuTrigger, {
        align: isOnlyItem ? 'start' : 'end',
        direction: orientation === 'vertical' ? 'end' : 'bottom'
    }, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumutils.SlotProvider, {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText,
                UNSAFE_className: $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f4dcb368124f9dcd$exports)), 'spectrum-ActionGroup-menu-text')
            }
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactariainteractions.PressResponder, $3dGAY$reactariautils.mergeProps(buttonProps, hoverProps), /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrumbutton.ActionButton, {
        ...otherProps,
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        UNSAFE_className: $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($f4dcb368124f9dcd$exports)), 'spectrum-ActionGroup-item', 'spectrum-ActionGroup-menu', {
            'is-hovered': isHovered,
            'is-selected': isSelected
        }, $3dGAY$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($c1b2fd38b37ee931$exports)), {
            'is-selected': isSelected,
            'spectrum-ActionButton--emphasized': isEmphasized
        })),
        isDisabled: isDisabled,
        staticColor: staticColor
    }, summaryIcon || /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement(($parcel$interopDefault($3dGAY$spectrumiconsworkflowMore)), null)))), /*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrummenu.Menu, {
        items: items,
        disabledKeys: state.disabledKeys,
        selectionMode: state.selectionManager.selectionMode,
        selectedKeys: state.selectionManager.selectedKeys,
        disallowEmptySelection: state.selectionManager.disallowEmptySelection,
        onSelectionChange: (keys)=>state.selectionManager.setSelectedKeys(keys)
        ,
        onAction: onAction
    }, (node)=>/*#__PURE__*/ ($parcel$interopDefault($3dGAY$react)).createElement($3dGAY$reactspectrummenu.Item, {
            textValue: node.textValue
        }, node.rendered)
    )));
}
function $d7fed5b8d690b843$var$outerWidth(element, ignoreLeftMargin, ignoreRightMargin) {
    let style = window.getComputedStyle(element);
    return element.offsetWidth + (ignoreLeftMargin ? 0 : $d7fed5b8d690b843$var$toNumber(style.marginLeft)) + (ignoreRightMargin ? 0 : $d7fed5b8d690b843$var$toNumber(style.marginRight));
}
function $d7fed5b8d690b843$var$outerHeight(element, ignoreTopMargin, ignoreBottomMargin) {
    let style = window.getComputedStyle(element);
    return element.offsetHeight + (ignoreTopMargin ? 0 : $d7fed5b8d690b843$var$toNumber(style.marginTop)) + (ignoreBottomMargin ? 0 : $d7fed5b8d690b843$var$toNumber(style.marginBottom));
}
function $d7fed5b8d690b843$var$toNumber(value) {
    let parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
}



$parcel$exportWildcard(module.exports, $d7fed5b8d690b843$exports);


//# sourceMappingURL=main.js.map
