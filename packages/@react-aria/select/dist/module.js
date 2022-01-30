import {filterDOMProps as $erWoy$filterDOMProps, mergeProps as $erWoy$mergeProps, chain as $erWoy$chain} from "@react-aria/utils";
import $erWoy$react, {useMemo as $erWoy$useMemo} from "react";
import {ListKeyboardDelegate as $erWoy$ListKeyboardDelegate, useTypeSelect as $erWoy$useTypeSelect} from "@react-aria/selection";
import {setInteractionModality as $erWoy$setInteractionModality, useInteractionModality as $erWoy$useInteractionModality} from "@react-aria/interactions";
import {useCollator as $erWoy$useCollator} from "@react-aria/i18n";
import {useField as $erWoy$useField} from "@react-aria/label";
import {useMenuTrigger as $erWoy$useMenuTrigger} from "@react-aria/menu";
import {useVisuallyHidden as $erWoy$useVisuallyHidden} from "@react-aria/visually-hidden";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $46ee88b7f596aa32$exports = {};

$parcel$export($46ee88b7f596aa32$exports, "useSelect", () => $46ee88b7f596aa32$export$e64b2f635402ca43);







function $46ee88b7f596aa32$export$e64b2f635402ca43(props, state, ref) {
    let { keyboardDelegate: keyboardDelegate , isDisabled: isDisabled  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $erWoy$useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = $erWoy$useMemo(()=>keyboardDelegate || new $erWoy$ListKeyboardDelegate(state.collection, state.disabledKeys, null, collator)
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        collator
    ]);
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = $erWoy$useMenuTrigger({
        isDisabled: isDisabled,
        type: 'listbox'
    }, state, ref);
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowLeft':
                {
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? delegate.getKeyAbove(state.selectedKey) : delegate.getFirstKey();
                    if (key) state.setSelectedKey(key);
                    break;
                }
            case 'ArrowRight':
                {
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? delegate.getKeyBelow(state.selectedKey) : delegate.getFirstKey();
                    if (key) state.setSelectedKey(key);
                    break;
                }
        }
    };
    let { typeSelectProps: typeSelectProps  } = $erWoy$useTypeSelect({
        keyboardDelegate: delegate,
        selectionManager: state.selectionManager,
        onTypeSelect (key) {
            state.setSelectedKey(key);
        }
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $erWoy$useField({
        ...props,
        labelElementType: 'span'
    });
    typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
    delete typeSelectProps.onKeyDownCapture;
    let domProps = $erWoy$filterDOMProps(props, {
        labelable: true
    });
    let triggerProps = $erWoy$mergeProps(typeSelectProps, menuTriggerProps, fieldProps);
    // used to make predictable id's based on the trigger which is already generated, this aids us in testing
    let valueId = `${triggerProps.id}-value`;
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                if (!props.isDisabled) {
                    ref.current.focus();
                    // Show the focus ring so the user knows where focus went
                    $erWoy$setInteractionModality('keyboard');
                }
            }
        },
        triggerProps: $erWoy$mergeProps(domProps, {
            ...triggerProps,
            onKeyDown: $erWoy$chain(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
            onKeyUp: props.onKeyUp,
            'aria-labelledby': [
                triggerProps['aria-labelledby'],
                triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null,
                valueId
            ].filter(Boolean).join(' '),
            onFocus (e) {
                if (state.isFocused) return;
                if (props.onFocus) props.onFocus(e);
                state.setFocused(true);
            },
            onBlur (e) {
                if (state.isOpen) return;
                if (props.onBlur) props.onBlur(e);
                state.setFocused(false);
            }
        }),
        valueProps: {
            id: valueId
        },
        menuProps: {
            ...menuProps,
            autoFocus: state.focusStrategy || true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            disallowEmptySelection: true,
            onBlur: (e)=>{
                if (e.currentTarget.contains(e.relatedTarget)) return;
                if (props.onBlur) props.onBlur(e);
                state.setFocused(false);
            },
            'aria-labelledby': [
                fieldProps['aria-labelledby'],
                triggerProps['aria-label'] && !fieldProps['aria-labelledby'] ? triggerProps.id : null
            ].filter(Boolean).join(' ')
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


var $1b91d95bb091de28$exports = {};

$parcel$export($1b91d95bb091de28$exports, "useHiddenSelect", () => $1b91d95bb091de28$export$f809e80f58e251d1);
$parcel$export($1b91d95bb091de28$exports, "HiddenSelect", () => $1b91d95bb091de28$export$cbd84cdb2e668835);



function $1b91d95bb091de28$export$f809e80f58e251d1(props, state, triggerRef) {
    let { autoComplete: autoComplete , name: name , isDisabled: isDisabled  } = props;
    let modality = $erWoy$useInteractionModality();
    let { visuallyHiddenProps: visuallyHiddenProps  } = $erWoy$useVisuallyHidden();
    // In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
    // In Firefox, there must be a <label> to identify the <select> whereas other browsers
    // seem to identify it just by surrounding text.
    // The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
    // 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
    // non tabbable with tabIndex={-1}.
    //
    // In mobile browsers, there are next/previous buttons above the software keyboard for navigating
    // between fields in a form. These only support native form inputs that are tabbable. In order to
    // support those, an additional hidden input is used to marshall focus to the button. It is tabbable
    // except when the button is focused, so that shift tab works properly to go to the actual previous
    // input in the form. Using the <select> for this also works, but Safari on iOS briefly flashes
    // the native menu on focus, so this isn't ideal. A font-size of 16px or greater is required to
    // prevent Safari from zooming in on the input when it is focused.
    //
    // If the current interaction modality is null, then the user hasn't interacted with the page yet.
    // In this case, we set the tabIndex to -1 on the input element so that automated accessibility
    // checkers don't throw false-positives about focusable elements inside an aria-hidden parent.
    return {
        containerProps: {
            ...visuallyHiddenProps,
            'aria-hidden': true
        },
        inputProps: {
            type: 'text',
            tabIndex: modality == null || state.isFocused || state.isOpen ? -1 : 0,
            style: {
                fontSize: 16
            },
            onFocus: ()=>triggerRef.current.focus()
            ,
            disabled: isDisabled
        },
        selectProps: {
            tabIndex: -1,
            autoComplete: autoComplete,
            disabled: isDisabled,
            name: name,
            size: state.collection.size,
            value: state.selectedKey ?? '',
            onChange: (e)=>state.setSelectedKey(e.target.value)
        }
    };
}
function $1b91d95bb091de28$export$cbd84cdb2e668835(props) {
    let { state: state , triggerRef: triggerRef , label: label , name: name , isDisabled: isDisabled  } = props;
    let { containerProps: containerProps , inputProps: inputProps , selectProps: selectProps  } = $1b91d95bb091de28$export$f809e80f58e251d1(props, state, triggerRef);
    // If used in a <form>, use a hidden input so the value can be submitted to a server.
    // If the collection isn't too big, use a hidden <select> element for this so that browser
    // autofill will work. Otherwise, use an <input type="hidden">.
    if (state.collection.size <= 300) return(/*#__PURE__*/ $erWoy$react.createElement("div", containerProps, /*#__PURE__*/ $erWoy$react.createElement("input", inputProps), /*#__PURE__*/ $erWoy$react.createElement("label", null, label, /*#__PURE__*/ $erWoy$react.createElement("select", selectProps, /*#__PURE__*/ $erWoy$react.createElement("option", null), [
        ...state.collection.getKeys()
    ].map((key)=>{
        let item = state.collection.getItem(key);
        if (item.type === 'item') return(/*#__PURE__*/ $erWoy$react.createElement("option", {
            key: item.key,
            value: item.key
        }, item.textValue));
    })))));
    else if (name) return(/*#__PURE__*/ $erWoy$react.createElement("input", {
        type: "hidden",
        autoComplete: selectProps.autoComplete,
        name: name,
        disabled: isDisabled,
        value: state.selectedKey
    }));
    return null;
}




export {$46ee88b7f596aa32$export$e64b2f635402ca43 as useSelect, $1b91d95bb091de28$export$f809e80f58e251d1 as useHiddenSelect, $1b91d95bb091de28$export$cbd84cdb2e668835 as HiddenSelect};
//# sourceMappingURL=module.js.map
