import {useControlledState as $e0sN7$useControlledState} from "@react-stately/utils";
import {useRef as $e0sN7$useRef} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f1b6fcfb0fe7674d$exports = {};

$parcel$export($f1b6fcfb0fe7674d$exports, "usePaginationState", () => $f1b6fcfb0fe7674d$export$f9468bb008747ceb);


function $f1b6fcfb0fe7674d$export$f9468bb008747ceb(props) {
    const [value1, setValue] = $e0sN7$useControlledState(props.value, props.defaultValue, props.onChange);
    let ref = $e0sN7$useRef(value1);
    const onPageInputChange = (value)=>{
        if (value === '' || $f1b6fcfb0fe7674d$var$isValidPage(props.maxValue, value)) {
            value = value !== '' ? parseInt(value, 10) : value;
            setValue(value);
            ref.current = value;
        }
    };
    const onIncrement = ()=>{
        let val = value1 === '' ? 1 : parseInt(value1, 10) + 1;
        if ($f1b6fcfb0fe7674d$var$isValidPage(props.maxValue, val)) {
            ref.current = val;
            setValue(val);
        }
    };
    const onDecrement = ()=>{
        let val = value1 === '' ? 1 : parseInt(value1, 10) - 1;
        if ($f1b6fcfb0fe7674d$var$isValidPage(props.maxValue, val)) {
            ref.current = val;
            setValue(val);
        }
    };
    return {
        onChange: onPageInputChange,
        onDecrement: onDecrement,
        onIncrement: onIncrement,
        ref: ref,
        value: value1
    };
}
function $f1b6fcfb0fe7674d$var$isValidPage(totalPages, page) {
    page = parseInt(page, 10);
    totalPages = parseInt(totalPages, 10);
    return !isNaN(page) && page >= 1 && totalPages && page <= totalPages;
}




export {$f1b6fcfb0fe7674d$export$f9468bb008747ceb as usePaginationState};
//# sourceMappingURL=module.js.map
