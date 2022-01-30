import {useState as $hXItR$useState, useRef as $hXItR$useRef} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $dcfad538e3175684$exports = {};

$parcel$export($dcfad538e3175684$exports, "useToastState", () => $dcfad538e3175684$export$c7b26b20d3ced9c5);


const $dcfad538e3175684$var$TOAST_TIMEOUT = 5000;
function $dcfad538e3175684$export$c7b26b20d3ced9c5(props) {
    const [toasts, setToasts] = $hXItR$useState(props && props.value || []);
    const toastsRef = $hXItR$useRef(toasts);
    toastsRef.current = toasts;
    const onAdd = (content, options)=>{
        let tempToasts = [
            ...toasts
        ];
        let timer;
        // set timer to remove toasts
        if (!(options.actionLabel || options.timeout === 0)) {
            if (options.timeout < 0) options.timeout = $dcfad538e3175684$var$TOAST_TIMEOUT;
            timer = new $e699ef42c72f571b$export$c57e9b2d8b9e4de(()=>onRemove(options.toastKey)
            , options.timeout || $dcfad538e3175684$var$TOAST_TIMEOUT);
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


var $e699ef42c72f571b$exports = {};

$parcel$export($e699ef42c72f571b$exports, "Timer", () => $e699ef42c72f571b$export$c57e9b2d8b9e4de);
function $e699ef42c72f571b$export$c57e9b2d8b9e4de(callback, delay) {
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




export {$dcfad538e3175684$export$c7b26b20d3ced9c5 as useToastState, $e699ef42c72f571b$export$c57e9b2d8b9e4de as Timer};
//# sourceMappingURL=module.js.map
