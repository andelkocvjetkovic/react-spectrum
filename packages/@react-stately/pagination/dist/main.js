var $eJx2p$reactstatelyutils = require("@react-stately/utils");
var $eJx2p$react = require("react");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5a54aa42e5015054$exports = {};

$parcel$export($5a54aa42e5015054$exports, "usePaginationState", () => $5a54aa42e5015054$export$f9468bb008747ceb);


function $5a54aa42e5015054$export$f9468bb008747ceb(props) {
    const [value1, setValue] = $eJx2p$reactstatelyutils.useControlledState(props.value, props.defaultValue, props.onChange);
    let ref = $eJx2p$react.useRef(value1);
    const onPageInputChange = (value)=>{
        if (value === '' || $5a54aa42e5015054$var$isValidPage(props.maxValue, value)) {
            value = value !== '' ? parseInt(value, 10) : value;
            setValue(value);
            ref.current = value;
        }
    };
    const onIncrement = ()=>{
        let val = value1 === '' ? 1 : parseInt(value1, 10) + 1;
        if ($5a54aa42e5015054$var$isValidPage(props.maxValue, val)) {
            ref.current = val;
            setValue(val);
        }
    };
    const onDecrement = ()=>{
        let val = value1 === '' ? 1 : parseInt(value1, 10) - 1;
        if ($5a54aa42e5015054$var$isValidPage(props.maxValue, val)) {
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
function $5a54aa42e5015054$var$isValidPage(totalPages, page) {
    page = parseInt(page, 10);
    totalPages = parseInt(totalPages, 10);
    return !isNaN(page) && page >= 1 && totalPages && page <= totalPages;
}


$parcel$exportWildcard(module.exports, $5a54aa42e5015054$exports);


//# sourceMappingURL=main.js.map
