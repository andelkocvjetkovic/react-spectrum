import {useMemo as $bZfsL$useMemo, useRef as $bZfsL$useRef, useEffect as $bZfsL$useEffect} from "react";
import {useOverlayTriggerState as $bZfsL$useOverlayTriggerState} from "@react-stately/overlays";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $aa3ba987dad0cb56$exports = {};

$parcel$export($aa3ba987dad0cb56$exports, "useTooltipTriggerState", () => $aa3ba987dad0cb56$export$4d40659c25ecb50b);


const $aa3ba987dad0cb56$var$TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const $aa3ba987dad0cb56$var$TOOLTIP_COOLDOWN = 500;
let $aa3ba987dad0cb56$var$tooltips = {
};
let $aa3ba987dad0cb56$var$tooltipId = 0;
let $aa3ba987dad0cb56$var$globalWarmedUp = false;
let $aa3ba987dad0cb56$var$globalWarmUpTimeout = null;
let $aa3ba987dad0cb56$var$globalCooldownTimeout = null;
function $aa3ba987dad0cb56$export$4d40659c25ecb50b(props = {
}) {
    let { delay: delay = $aa3ba987dad0cb56$var$TOOLTIP_DELAY  } = props;
    let { isOpen: isOpen , open: open , close: close  } = $bZfsL$useOverlayTriggerState(props);
    let id = $bZfsL$useMemo(()=>`${++$aa3ba987dad0cb56$var$tooltipId}`
    , []);
    let closeTimeout = $bZfsL$useRef();
    let ensureTooltipEntry = ()=>{
        $aa3ba987dad0cb56$var$tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in $aa3ba987dad0cb56$var$tooltips)if (hideTooltipId !== id) {
            $aa3ba987dad0cb56$var$tooltips[hideTooltipId](true);
            delete $aa3ba987dad0cb56$var$tooltips[hideTooltipId];
        }
    };
    let showTooltip = ()=>{
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        $aa3ba987dad0cb56$var$globalWarmedUp = true;
        open();
        if ($aa3ba987dad0cb56$var$globalWarmUpTimeout) {
            clearTimeout($aa3ba987dad0cb56$var$globalWarmUpTimeout);
            $aa3ba987dad0cb56$var$globalWarmUpTimeout = null;
        }
        if ($aa3ba987dad0cb56$var$globalCooldownTimeout) {
            clearTimeout($aa3ba987dad0cb56$var$globalCooldownTimeout);
            $aa3ba987dad0cb56$var$globalCooldownTimeout = null;
        }
    };
    let hideTooltip = (immediate)=>{
        if (immediate) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
            close();
        } else if (!closeTimeout.current) closeTimeout.current = setTimeout(()=>{
            closeTimeout.current = null;
            close();
        }, $aa3ba987dad0cb56$var$TOOLTIP_COOLDOWN);
        if ($aa3ba987dad0cb56$var$globalWarmUpTimeout) {
            clearTimeout($aa3ba987dad0cb56$var$globalWarmUpTimeout);
            $aa3ba987dad0cb56$var$globalWarmUpTimeout = null;
        }
        if ($aa3ba987dad0cb56$var$globalWarmedUp) {
            if ($aa3ba987dad0cb56$var$globalCooldownTimeout) clearTimeout($aa3ba987dad0cb56$var$globalCooldownTimeout);
            $aa3ba987dad0cb56$var$globalCooldownTimeout = setTimeout(()=>{
                delete $aa3ba987dad0cb56$var$tooltips[id];
                $aa3ba987dad0cb56$var$globalCooldownTimeout = null;
                $aa3ba987dad0cb56$var$globalWarmedUp = false;
            }, $aa3ba987dad0cb56$var$TOOLTIP_COOLDOWN);
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !$aa3ba987dad0cb56$var$globalWarmUpTimeout && !$aa3ba987dad0cb56$var$globalWarmedUp) $aa3ba987dad0cb56$var$globalWarmUpTimeout = setTimeout(()=>{
            $aa3ba987dad0cb56$var$globalWarmUpTimeout = null;
            $aa3ba987dad0cb56$var$globalWarmedUp = true;
            showTooltip();
        }, delay);
        else if (!isOpen) showTooltip();
    };
    // eslint-disable-next-line arrow-body-style
    $bZfsL$useEffect(()=>{
        return ()=>{
            clearTimeout(closeTimeout.current);
            let tooltip = $aa3ba987dad0cb56$var$tooltips[id];
            if (tooltip) delete $aa3ba987dad0cb56$var$tooltips[id];
        };
    }, [
        id
    ]);
    return {
        isOpen: isOpen,
        open: (immediate)=>{
            if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
            else showTooltip();
        },
        close: hideTooltip
    };
}




export {$aa3ba987dad0cb56$export$4d40659c25ecb50b as useTooltipTriggerState};
//# sourceMappingURL=module.js.map
