import {useProgressBar as $77KI2$useProgressBar} from "@react-aria/progress";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $4689e4985b4ed4bd$exports = {};

$parcel$export($4689e4985b4ed4bd$exports, "useMeter", () => $4689e4985b4ed4bd$export$e969dbfa146870ff);

function $4689e4985b4ed4bd$export$e969dbfa146870ff(props) {
    let { progressBarProps: progressBarProps , labelProps: labelProps  } = $77KI2$useProgressBar(props);
    return {
        meterProps: {
            ...progressBarProps,
            // Use the meter role if available, but fall back to progressbar if not
            // Chrome currently falls back from meter automatically, and Firefox
            // does not support meter at all. Safari 13+ seems to support meter properly.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=944542
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1460378
            role: 'meter progressbar'
        },
        labelProps: labelProps
    };
}




export {$4689e4985b4ed4bd$export$e969dbfa146870ff as useMeter};
//# sourceMappingURL=module.js.map
