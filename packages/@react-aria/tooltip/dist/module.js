import {filterDOMProps as $g39Dp$filterDOMProps, mergeProps as $g39Dp$mergeProps, useId as $g39Dp$useId} from "@react-aria/utils";
import {useHover as $g39Dp$useHover, getInteractionModality as $g39Dp$getInteractionModality, isFocusVisible as $g39Dp$isFocusVisible, usePress as $g39Dp$usePress} from "@react-aria/interactions";
import {useRef as $g39Dp$useRef, useEffect as $g39Dp$useEffect} from "react";
import {useFocusable as $g39Dp$useFocusable} from "@react-aria/focus";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $41ac84ded5460d79$exports = {};

$parcel$export($41ac84ded5460d79$exports, "useTooltip", () => $41ac84ded5460d79$export$1c4b08e0eca38426);


function $41ac84ded5460d79$export$1c4b08e0eca38426(props, state) {
    let domProps = $g39Dp$filterDOMProps(props, {
        labelable: true
    });
    let { hoverProps: hoverProps  } = $g39Dp$useHover({
        onHoverStart: ()=>state?.open(true)
        ,
        onHoverEnd: ()=>state?.close()
    });
    return {
        tooltipProps: $g39Dp$mergeProps(domProps, hoverProps, {
            role: 'tooltip'
        })
    };
}


var $02108e8ead3ca17c$exports = {};

$parcel$export($02108e8ead3ca17c$exports, "useTooltipTrigger", () => $02108e8ead3ca17c$export$a6da6c504e4bba8b);





function $02108e8ead3ca17c$export$a6da6c504e4bba8b(props, state, ref) {
    let { isDisabled: isDisabled , trigger: trigger  } = props;
    let tooltipId = $g39Dp$useId();
    let isHovered = $g39Dp$useRef(false);
    let isFocused = $g39Dp$useRef(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    $g39Dp$useEffect(()=>{
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
        if ($g39Dp$getInteractionModality() === 'pointer') isHovered.current = true;
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
        let isVisible = $g39Dp$isFocusVisible();
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
    let { hoverProps: hoverProps  } = $g39Dp$useHover({
        isDisabled: isDisabled,
        onHoverStart: onHoverStart,
        onHoverEnd: onHoverEnd
    });
    let { pressProps: pressProps  } = $g39Dp$usePress({
        onPressStart: onPressStart
    });
    let { focusableProps: focusableProps  } = $g39Dp$useFocusable({
        isDisabled: isDisabled,
        onFocus: onFocus,
        onBlur: onBlur
    }, ref);
    return {
        triggerProps: {
            'aria-describedby': state.isOpen ? tooltipId : undefined,
            ...$g39Dp$mergeProps(focusableProps, hoverProps, pressProps)
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}




export {$41ac84ded5460d79$export$1c4b08e0eca38426 as useTooltip, $02108e8ead3ca17c$export$a6da6c504e4bba8b as useTooltipTrigger};
//# sourceMappingURL=module.js.map
