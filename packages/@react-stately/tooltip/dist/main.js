var $cIaZU$react = require("react");
var $cIaZU$reactstatelyoverlays = require("@react-stately/overlays");

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
var $7cedf927b69b611b$exports = {};

$parcel$export($7cedf927b69b611b$exports, "useTooltipTriggerState", () => $7cedf927b69b611b$export$4d40659c25ecb50b);


const $7cedf927b69b611b$var$TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const $7cedf927b69b611b$var$TOOLTIP_COOLDOWN = 500;
let $7cedf927b69b611b$var$tooltips = {
};
let $7cedf927b69b611b$var$tooltipId = 0;
let $7cedf927b69b611b$var$globalWarmedUp = false;
let $7cedf927b69b611b$var$globalWarmUpTimeout = null;
let $7cedf927b69b611b$var$globalCooldownTimeout = null;
function $7cedf927b69b611b$export$4d40659c25ecb50b(props = {
}) {
    let { delay: delay = $7cedf927b69b611b$var$TOOLTIP_DELAY  } = props;
    let { isOpen: isOpen , open: open , close: close  } = $cIaZU$reactstatelyoverlays.useOverlayTriggerState(props);
    let id = $cIaZU$react.useMemo(()=>`${++$7cedf927b69b611b$var$tooltipId}`
    , []);
    let closeTimeout = $cIaZU$react.useRef();
    let ensureTooltipEntry = ()=>{
        $7cedf927b69b611b$var$tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in $7cedf927b69b611b$var$tooltips)if (hideTooltipId !== id) {
            $7cedf927b69b611b$var$tooltips[hideTooltipId](true);
            delete $7cedf927b69b611b$var$tooltips[hideTooltipId];
        }
    };
    let showTooltip = ()=>{
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        $7cedf927b69b611b$var$globalWarmedUp = true;
        open();
        if ($7cedf927b69b611b$var$globalWarmUpTimeout) {
            clearTimeout($7cedf927b69b611b$var$globalWarmUpTimeout);
            $7cedf927b69b611b$var$globalWarmUpTimeout = null;
        }
        if ($7cedf927b69b611b$var$globalCooldownTimeout) {
            clearTimeout($7cedf927b69b611b$var$globalCooldownTimeout);
            $7cedf927b69b611b$var$globalCooldownTimeout = null;
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
        }, $7cedf927b69b611b$var$TOOLTIP_COOLDOWN);
        if ($7cedf927b69b611b$var$globalWarmUpTimeout) {
            clearTimeout($7cedf927b69b611b$var$globalWarmUpTimeout);
            $7cedf927b69b611b$var$globalWarmUpTimeout = null;
        }
        if ($7cedf927b69b611b$var$globalWarmedUp) {
            if ($7cedf927b69b611b$var$globalCooldownTimeout) clearTimeout($7cedf927b69b611b$var$globalCooldownTimeout);
            $7cedf927b69b611b$var$globalCooldownTimeout = setTimeout(()=>{
                delete $7cedf927b69b611b$var$tooltips[id];
                $7cedf927b69b611b$var$globalCooldownTimeout = null;
                $7cedf927b69b611b$var$globalWarmedUp = false;
            }, $7cedf927b69b611b$var$TOOLTIP_COOLDOWN);
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !$7cedf927b69b611b$var$globalWarmUpTimeout && !$7cedf927b69b611b$var$globalWarmedUp) $7cedf927b69b611b$var$globalWarmUpTimeout = setTimeout(()=>{
            $7cedf927b69b611b$var$globalWarmUpTimeout = null;
            $7cedf927b69b611b$var$globalWarmedUp = true;
            showTooltip();
        }, delay);
        else if (!isOpen) showTooltip();
    };
    // eslint-disable-next-line arrow-body-style
    $cIaZU$react.useEffect(()=>{
        return ()=>{
            clearTimeout(closeTimeout.current);
            let tooltip = $7cedf927b69b611b$var$tooltips[id];
            if (tooltip) delete $7cedf927b69b611b$var$tooltips[id];
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


$parcel$exportWildcard(module.exports, $7cedf927b69b611b$exports);


//# sourceMappingURL=main.js.map
