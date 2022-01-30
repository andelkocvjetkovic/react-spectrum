var $5ATya$reactariautils = require("@react-aria/utils");
var $5ATya$reactariainteractions = require("@react-aria/interactions");
var $5ATya$react = require("react");
var $5ATya$reactariafocus = require("@react-aria/focus");

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
var $9d8fbe2d47875a08$exports = {};

$parcel$export($9d8fbe2d47875a08$exports, "useTooltip", () => $9d8fbe2d47875a08$export$1c4b08e0eca38426);


function $9d8fbe2d47875a08$export$1c4b08e0eca38426(props, state) {
    let domProps = $5ATya$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    let { hoverProps: hoverProps  } = $5ATya$reactariainteractions.useHover({
        onHoverStart: ()=>state?.open(true)
        ,
        onHoverEnd: ()=>state?.close()
    });
    return {
        tooltipProps: $5ATya$reactariautils.mergeProps(domProps, hoverProps, {
            role: 'tooltip'
        })
    };
}


var $00f8d3b0502bc716$exports = {};

$parcel$export($00f8d3b0502bc716$exports, "useTooltipTrigger", () => $00f8d3b0502bc716$export$a6da6c504e4bba8b);





function $00f8d3b0502bc716$export$a6da6c504e4bba8b(props, state, ref) {
    let { isDisabled: isDisabled , trigger: trigger  } = props;
    let tooltipId = $5ATya$reactariautils.useId();
    let isHovered = $5ATya$react.useRef(false);
    let isFocused = $5ATya$react.useRef(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    $5ATya$react.useEffect(()=>{
        let onKeyDown = (e)=>{
            if (ref && ref.current) // Escape after clicking something can give it keyboard focus
            // dismiss tooltip on esc key press
            {
                if (e.key === 'Escape') state.close(true);
            }
        };
        if (state.isOpen) {
            document.addEventListener('keydown', onKeyDown, true);
            return ()=>{
                document.removeEventListener('keydown', onKeyDown, true);
            };
        }
    }, [
        ref,
        state
    ]);
    let onHoverStart = ()=>{
        if (trigger === 'focus') return;
        // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
        // interactions for example, hover will end. When hover is restored after that element disappears,
        // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
        // is the result of moving the mouse.
        if ($5ATya$reactariainteractions.getInteractionModality() === 'pointer') isHovered.current = true;
        else isHovered.current = false;
        handleShow();
    };
    let onHoverEnd = ()=>{
        if (trigger === 'focus') return;
        // no matter how the trigger is left, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide();
    };
    let onPressStart = ()=>{
        // no matter how the trigger is pressed, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let onFocus = ()=>{
        let isVisible = $5ATya$reactariainteractions.isFocusVisible();
        if (isVisible) {
            isFocused.current = true;
            handleShow();
        }
    };
    let onBlur = ()=>{
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let { hoverProps: hoverProps  } = $5ATya$reactariainteractions.useHover({
        isDisabled: isDisabled,
        onHoverStart: onHoverStart,
        onHoverEnd: onHoverEnd
    });
    let { pressProps: pressProps  } = $5ATya$reactariainteractions.usePress({
        onPressStart: onPressStart
    });
    let { focusableProps: focusableProps  } = $5ATya$reactariafocus.useFocusable({
        isDisabled: isDisabled,
        onFocus: onFocus,
        onBlur: onBlur
    }, ref);
    return {
        triggerProps: {
            'aria-describedby': state.isOpen ? tooltipId : undefined,
            ...$5ATya$reactariautils.mergeProps(focusableProps, hoverProps, pressProps)
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}


$parcel$exportWildcard(module.exports, $9d8fbe2d47875a08$exports);
$parcel$exportWildcard(module.exports, $00f8d3b0502bc716$exports);


//# sourceMappingURL=main.js.map
