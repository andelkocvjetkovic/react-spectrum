import {useControlledState as $5ovfe$useControlledState} from "@react-stately/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0db7903df7952208$exports = {};

$parcel$export($0db7903df7952208$exports, "useSearchFieldState", () => $0db7903df7952208$export$3f8be18b0f41eaf2);

function $0db7903df7952208$export$3f8be18b0f41eaf2(props) {
    let [value, setValue] = $5ovfe$useControlledState($0db7903df7952208$var$toString(props.value), $0db7903df7952208$var$toString(props.defaultValue) || '', props.onChange);
    return {
        value: value,
        setValue: setValue
    };
}
function $0db7903df7952208$var$toString(val) {
    if (val == null) return;
    return val.toString();
}




export {$0db7903df7952208$export$3f8be18b0f41eaf2 as useSearchFieldState};
//# sourceMappingURL=module.js.map
