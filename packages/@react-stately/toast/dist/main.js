var $c6Nb3$react = require("react");

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
var $a201c55543440ea3$exports = {};

$parcel$export($a201c55543440ea3$exports, "useToastState", () => $a201c55543440ea3$export$c7b26b20d3ced9c5);


const $a201c55543440ea3$var$TOAST_TIMEOUT = 5000;
function $a201c55543440ea3$export$c7b26b20d3ced9c5(props) {
    const [toasts, setToasts] = $c6Nb3$react.useState(props && props.value || []);
    const toastsRef = $c6Nb3$react.useRef(toasts);
    toastsRef.current = toasts;
    const onAdd = (content, options)=>{
        let tempToasts = [
            ...toasts
        ];
        let timer;
        // set timer to remove toasts
        if (!(options.actionLabel || options.timeout === 0)) {
            if (options.timeout < 0) options.timeout = $a201c55543440ea3$var$TOAST_TIMEOUT;
            timer = new $f4071d96a8ca8d74$export$c57e9b2d8b9e4de(()=>onRemove(options.toastKey)
            , options.timeout || $a201c55543440ea3$var$TOAST_TIMEOUT);
        }
        tempToasts.push({
            content: content,
            props: options,
            timer: timer
        });
        setToasts(tempToasts);
    };
    const onRemove = (toastKey)=>{
        let tempToasts = [
            ...toastsRef.current
        ].filter((item)=>{
            if (item.props.toastKey === toastKey && item.timer) item.timer.clear();
            return item.props.toastKey !== toastKey;
        });
        setToasts(tempToasts);
    };
    return {
        onAdd: onAdd,
        onRemove: onRemove,
        setToasts: setToasts,
        toasts: toasts
    };
}


var $f4071d96a8ca8d74$exports = {};

$parcel$export($f4071d96a8ca8d74$exports, "Timer", () => $f4071d96a8ca8d74$export$c57e9b2d8b9e4de);
function $f4071d96a8ca8d74$export$c57e9b2d8b9e4de(callback, delay) {
    let timerId, start;
    let remaining = delay;
    this.pause = ()=>{
        clearTimeout(timerId);
        remaining -= Date.now() - start;
    };
    this.resume = ()=>{
        start = Date.now();
        timerId && clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };
    this.clear = ()=>{
        clearTimeout(timerId);
    };
    this.resume();
}


$parcel$exportWildcard(module.exports, $a201c55543440ea3$exports);
$parcel$exportWildcard(module.exports, $f4071d96a8ca8d74$exports);


//# sourceMappingURL=main.js.map
