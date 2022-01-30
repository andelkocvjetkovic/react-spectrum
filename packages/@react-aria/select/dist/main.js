var $i1c1O$reactariautils = require("@react-aria/utils");
var $i1c1O$react = require("react");
var $i1c1O$reactariaselection = require("@react-aria/selection");
var $i1c1O$reactariainteractions = require("@react-aria/interactions");
var $i1c1O$reactariai18n = require("@react-aria/i18n");
var $i1c1O$reactarialabel = require("@react-aria/label");
var $i1c1O$reactariamenu = require("@react-aria/menu");
var $i1c1O$reactariavisuallyhidden = require("@react-aria/visually-hidden");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $8a22db5c7ccf2f11$exports = {};

$parcel$export($8a22db5c7ccf2f11$exports, "useSelect", () => $8a22db5c7ccf2f11$export$e64b2f635402ca43);







function $8a22db5c7ccf2f11$export$e64b2f635402ca43(props, state, ref) {
    let { keyboardDelegate: keyboardDelegate , isDisabled: isDisabled  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $i1c1O$reactariai18n.useCollator({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = $i1c1O$react.useMemo(()=>keyboardDelegate || new $i1c1O$reactariaselection.ListKeyboardDelegate(state.collection, state.disabledKeys, null, collator)
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        collator
    ]);
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = $i1c1O$reactariamenu.useMenuTrigger({
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
    let { typeSelectProps: typeSelectProps  } = $i1c1O$reactariaselection.useTypeSelect({
        keyboardDelegate: delegate,
        selectionManager: state.selectionManager,
        onTypeSelect (key) {
            state.setSelectedKey(key);
        }
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $i1c1O$reactarialabel.useField({
        ...props,
        labelElementType: 'span'
    });
    typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
    delete typeSelectProps.onKeyDownCapture;
    let domProps = $i1c1O$reactariautils.filterDOMProps(props, {
        labelable: true
    });
    let triggerProps = $i1c1O$reactariautils.mergeProps(typeSelectProps, menuTriggerProps, fieldProps);
    // used to make predictable id's based on the trigger which is already generated, this aids us in testing
    let valueId = `${triggerProps.id}-value`;
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                if (!props.isDisabled) {
                    ref.current.focus();
                    // Show the focus ring so the user knows where focus went
                    $i1c1O$reactariainteractions.setInteractionModality('keyboard');
                }
            }
        },
        triggerProps: $i1c1O$reactariautils.mergeProps(domProps, {
            ...triggerProps,
            onKeyDown: $i1c1O$reactariautils.chain(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
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


var $c8c909ccb8cf9f2b$exports = {};

$parcel$export($c8c909ccb8cf9f2b$exports, "useHiddenSelect", () => $c8c909ccb8cf9f2b$export$f809e80f58e251d1);
$parcel$export($c8c909ccb8cf9f2b$exports, "HiddenSelect", () => $c8c909ccb8cf9f2b$export$cbd84cdb2e668835);



function $c8c909ccb8cf9f2b$export$f809e80f58e251d1(props, state, triggerRef) {
    let { autoComplete: autoComplete , name: name , isDisabled: isDisabled  } = props;
    let modality = $i1c1O$reactariainteractions.useInteractionModality();
    let { visuallyHiddenProps: visuallyHiddenProps  } = $i1c1O$reactariavisuallyhidden.useVisuallyHidden();
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
function $c8c909ccb8cf9f2b$export$cbd84cdb2e668835(props) {
    let { state: state , triggerRef: triggerRef , label: label , name: name , isDisabled: isDisabled  } = props;
    let { containerProps: containerProps , inputProps: inputProps , selectProps: selectProps  } = $c8c909ccb8cf9f2b$export$f809e80f58e251d1(props, state, triggerRef);
    // If used in a <form>, use a hidden input so the value can be submitted to a server.
    // If the collection isn't too big, use a hidden <select> element for this so that browser
    // autofill will work. Otherwise, use an <input type="hidden">.
    if (state.collection.size <= 300) return(/*#__PURE__*/ ($parcel$interopDefault($i1c1O$react)).createElement("div", containerProps, /*#__PURE__*/ ($parcel$interopDefault($i1c1O$react)).createElement("input", inputProps), /*#__PURE__*/ ($parcel$interopDefault($i1c1O$react)).createElement("label", null, label, /*#__PURE__*/ ($parcel$interopDefault($i1c1O$react)).createElement("select", selectProps, /*#__PURE__*/ ($parcel$interopDefault($i1c1O$react)).createElement("option", null), [
        ...state.collection.getKeys()
    ].map((key)=>{
        let item = state.collection.getItem(key);
        if (item.type === 'item') return(/*#__PURE__*/ ($parcel$interopDefault($i1c1O$react)).createElement("option", {
            key: item.key,
            value: item.key
        }, item.textValue));
    })))));
    else if (name) return(/*#__PURE__*/ ($parcel$interopDefault($i1c1O$react)).createElement("input", {
        type: "hidden",
        autoComplete: selectProps.autoComplete,
        name: name,
        disabled: isDisabled,
        value: state.selectedKey
    }));
    return null;
}


$parcel$exportWildcard(module.exports, $8a22db5c7ccf2f11$exports);
$parcel$exportWildcard(module.exports, $c8c909ccb8cf9f2b$exports);


//# sourceMappingURL=main.js.map
