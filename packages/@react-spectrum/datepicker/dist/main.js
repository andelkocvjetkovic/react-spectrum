require("./main.css");
var $5k7WA$reactspectrumcalendar = require("@react-spectrum/calendar");
var $5k7WA$spectrumiconsworkflowCalendar = require("@spectrum-icons/workflow/Calendar");
var $5k7WA$reactspectrumutils = require("@react-spectrum/utils");
var $5k7WA$reactspectrumview = require("@react-spectrum/view");
var $5k7WA$reactspectrumdialog = require("@react-spectrum/dialog");
var $5k7WA$reactspectrumlabel = require("@react-spectrum/label");
var $5k7WA$reactspectrumbutton = require("@react-spectrum/button");
var $5k7WA$reactariautils = require("@react-aria/utils");
var $5k7WA$react = require("react");
var $5k7WA$reactariadatepicker = require("@react-aria/datepicker");
var $5k7WA$reactstatelydatepicker = require("@react-stately/datepicker");
var $5k7WA$reactariafocus = require("@react-aria/focus");
var $5k7WA$reactariainteractions = require("@react-aria/interactions");
var $5k7WA$reactariai18n = require("@react-aria/i18n");
var $5k7WA$reactspectrumprovider = require("@react-spectrum/provider");
var $5k7WA$internationalizeddate = require("@internationalized/date");
var $5k7WA$internationalizednumber = require("@internationalized/number");
var $5k7WA$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $5k7WA$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $5k7WA$reactspectrumlayout = require("@react-spectrum/layout");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $1629c9b1d9630cb2$exports = {};

$parcel$export($1629c9b1d9630cb2$exports, "DatePicker", () => $1629c9b1d9630cb2$export$5109c6dd95d8fb00);









var $4f8ac478afe0de0f$exports = {};

$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-fieldWrapper", () => $4f8ac478afe0de0f$export$48501287c6ce4708, (v) => $4f8ac478afe0de0f$export$48501287c6ce4708 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-startField", () => $4f8ac478afe0de0f$export$eec05853f5fc7ef8, (v) => $4f8ac478afe0de0f$export$eec05853f5fc7ef8 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-endField", () => $4f8ac478afe0de0f$export$b41789438b49c852, (v) => $4f8ac478afe0de0f$export$b41789438b49c852 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-field", () => $4f8ac478afe0de0f$export$8cbece9fb909350d, (v) => $4f8ac478afe0de0f$export$8cbece9fb909350d = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-input", () => $4f8ac478afe0de0f$export$4cdb39b006dc840a, (v) => $4f8ac478afe0de0f$export$4cdb39b006dc840a = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-DateField", () => $4f8ac478afe0de0f$export$c96d01b692101b8a, (v) => $4f8ac478afe0de0f$export$c96d01b692101b8a = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-TimeField", () => $4f8ac478afe0de0f$export$61c201f1ba261729, (v) => $4f8ac478afe0de0f$export$61c201f1ba261729 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-TimeField-fieldWrapper", () => $4f8ac478afe0de0f$export$3008240fa163ee96, (v) => $4f8ac478afe0de0f$export$3008240fa163ee96 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-inputContents", () => $4f8ac478afe0de0f$export$609545772ae0466a, (v) => $4f8ac478afe0de0f$export$609545772ae0466a = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-rangeDash", () => $4f8ac478afe0de0f$export$1ae39afd2cf49425, (v) => $4f8ac478afe0de0f$export$1ae39afd2cf49425 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-segments", () => $4f8ac478afe0de0f$export$b9c34f0306ac2ffc, (v) => $4f8ac478afe0de0f$export$b9c34f0306ac2ffc = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-literal", () => $4f8ac478afe0de0f$export$24a265734c16a355, (v) => $4f8ac478afe0de0f$export$24a265734c16a355 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-DatePicker-cell", () => $4f8ac478afe0de0f$export$947f5cb8a73639a4, (v) => $4f8ac478afe0de0f$export$947f5cb8a73639a4 = v);
$parcel$export($4f8ac478afe0de0f$exports, "is-placeholder", () => $4f8ac478afe0de0f$export$e5b2f5233e4e5194, (v) => $4f8ac478afe0de0f$export$e5b2f5233e4e5194 = v);
$parcel$export($4f8ac478afe0de0f$exports, "is-read-only", () => $4f8ac478afe0de0f$export$dddce3ae23a6e3ea, (v) => $4f8ac478afe0de0f$export$dddce3ae23a6e3ea = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-dialog", () => $4f8ac478afe0de0f$export$7c3cb625bb792356, (v) => $4f8ac478afe0de0f$export$7c3cb625bb792356 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-dialogContent", () => $4f8ac478afe0de0f$export$94c97d6b6a927921, (v) => $4f8ac478afe0de0f$export$94c97d6b6a927921 = v);
$parcel$export($4f8ac478afe0de0f$exports, "react-spectrum-Datepicker-timeFields", () => $4f8ac478afe0de0f$export$8d47712a13573e39, (v) => $4f8ac478afe0de0f$export$8d47712a13573e39 = v);
var $4f8ac478afe0de0f$export$48501287c6ce4708;
var $4f8ac478afe0de0f$export$eec05853f5fc7ef8;
var $4f8ac478afe0de0f$export$b41789438b49c852;
var $4f8ac478afe0de0f$export$8cbece9fb909350d;
var $4f8ac478afe0de0f$export$4cdb39b006dc840a;
var $4f8ac478afe0de0f$export$c96d01b692101b8a;
var $4f8ac478afe0de0f$export$61c201f1ba261729;
var $4f8ac478afe0de0f$export$3008240fa163ee96;
var $4f8ac478afe0de0f$export$609545772ae0466a;
var $4f8ac478afe0de0f$export$1ae39afd2cf49425;
var $4f8ac478afe0de0f$export$b9c34f0306ac2ffc;
var $4f8ac478afe0de0f$export$24a265734c16a355;
var $4f8ac478afe0de0f$export$947f5cb8a73639a4;
var $4f8ac478afe0de0f$export$e5b2f5233e4e5194;
var $4f8ac478afe0de0f$export$dddce3ae23a6e3ea;
var $4f8ac478afe0de0f$export$7c3cb625bb792356;
var $4f8ac478afe0de0f$export$94c97d6b6a927921;
var $4f8ac478afe0de0f$export$8d47712a13573e39;
$4f8ac478afe0de0f$export$48501287c6ce4708 = "_react-spectrum-Datepicker-fieldWrapper_0b973d";
$4f8ac478afe0de0f$export$eec05853f5fc7ef8 = "_react-spectrum-Datepicker-startField_0b973d";
$4f8ac478afe0de0f$export$b41789438b49c852 = "_react-spectrum-Datepicker-endField_0b973d";
$4f8ac478afe0de0f$export$8cbece9fb909350d = "_react-spectrum-Datepicker-field_0b973d";
$4f8ac478afe0de0f$export$4cdb39b006dc840a = "_react-spectrum-Datepicker-input_0b973d";
$4f8ac478afe0de0f$export$c96d01b692101b8a = "_react-spectrum-DateField_0b973d";
$4f8ac478afe0de0f$export$61c201f1ba261729 = "_react-spectrum-TimeField_0b973d";
$4f8ac478afe0de0f$export$3008240fa163ee96 = "_react-spectrum-TimeField-fieldWrapper_0b973d";
$4f8ac478afe0de0f$export$609545772ae0466a = "_react-spectrum-Datepicker-inputContents_0b973d";
$4f8ac478afe0de0f$export$1ae39afd2cf49425 = "_react-spectrum-Datepicker-rangeDash_0b973d";
$4f8ac478afe0de0f$export$b9c34f0306ac2ffc = "_react-spectrum-Datepicker-segments_0b973d";
$4f8ac478afe0de0f$export$24a265734c16a355 = "_react-spectrum-Datepicker-literal_0b973d";
$4f8ac478afe0de0f$export$947f5cb8a73639a4 = "_react-spectrum-DatePicker-cell_0b973d";
$4f8ac478afe0de0f$export$e5b2f5233e4e5194 = "_is-placeholder_0b973d";
$4f8ac478afe0de0f$export$dddce3ae23a6e3ea = "_is-read-only_0b973d";
$4f8ac478afe0de0f$export$7c3cb625bb792356 = "_react-spectrum-Datepicker-dialog_0b973d";
$4f8ac478afe0de0f$export$94c97d6b6a927921 = "_react-spectrum-Datepicker-dialogContent_0b973d";
$4f8ac478afe0de0f$export$8d47712a13573e39 = "_react-spectrum-Datepicker-timeFields_0b973d";






function $c83a5c5c344fe9a3$export$6388987c5223b54e({ segment: segment , state: state , ...otherProps }) {
    switch(segment.type){
        // A separator, e.g. punctuation
        case 'literal':
            return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($c83a5c5c344fe9a3$var$LiteralSegment, {
                segment: segment
            }));
        // Editable segment
        default:
            return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($c83a5c5c344fe9a3$var$EditableSegment, {
                segment: segment,
                state: state,
                ...otherProps
            }));
    }
}
function $c83a5c5c344fe9a3$var$LiteralSegment({ segment: segment  }) {
    let focusManager = $5k7WA$reactariafocus.useFocusManager();
    let { pressProps: pressProps  } = $5k7WA$reactariainteractions.usePress({
        onPressStart: (e)=>{
            if (e.pointerType === 'mouse') {
                let res = focusManager.focusNext({
                    from: e.target
                });
                if (!res) focusManager.focusPrevious({
                    from: e.target
                });
            }
        }
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("span", {
        "aria-hidden": "true",
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-literal'),
        ...pressProps,
        "data-testid": segment.type === 'literal' ? undefined : segment.type
    }, segment.text));
}
function $c83a5c5c344fe9a3$var$EditableSegment({ segment: segment , state: state , ...otherProps }) {
    let ref = $5k7WA$react.useRef();
    let { segmentProps: segmentProps  } = $5k7WA$reactariadatepicker.useDateSegment(otherProps, segment, state, ref);
    let { locale: locale  } = $5k7WA$reactariai18n.useLocale();
    let parser = $5k7WA$react.useMemo(()=>new $5k7WA$internationalizednumber.NumberParser(locale)
    , [
        locale
    ]);
    let isNumeric = $5k7WA$react.useMemo(()=>parser.isValidPartialNumber(segment.text)
    , [
        segment.text,
        parser
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        ref: ref,
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-DatePicker-cell', {
            'is-placeholder': segment.isPlaceholder,
            'is-read-only': !segment.isEditable
        }),
        style: {
            minWidth: !isNumeric ? null : String(segment.maxValue).length + 'ch'
        },
        "data-testid": segment.type,
        ...segmentProps
    }, segment.isPlaceholder ? '' : segment.text));
}







function $98f57c321b25f0d2$export$34dc4cfa15ead1(props) {
    let { isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , inputClassName: inputClassName  } = props;
    let ref = $5k7WA$react.useRef();
    let { locale: locale  } = $5k7WA$reactariai18n.useLocale();
    let state = $5k7WA$reactstatelydatepicker.useDatePickerFieldState({
        ...props,
        locale: locale,
        createCalendar: $5k7WA$internationalizeddate.createCalendar
    });
    let { fieldProps: fieldProps  } = $5k7WA$reactariadatepicker.useDateField(props, state, ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        ...fieldProps,
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-segments', inputClassName),
        ref: ref
    }, state.segments.map((segment, i)=>/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($c83a5c5c344fe9a3$export$6388987c5223b54e, {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })
    )));
}













var $ada5dd581443c125$exports = {};

$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-input", () => $ada5dd581443c125$export$1ac009feb2b0bd0c, (v) => $ada5dd581443c125$export$1ac009feb2b0bd0c = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield", () => $ada5dd581443c125$export$2c8a10299d8b3418, (v) => $ada5dd581443c125$export$2c8a10299d8b3418 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--quiet", () => $ada5dd581443c125$export$bffd5e3d61a81737, (v) => $ada5dd581443c125$export$bffd5e3d61a81737 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--multiline", () => $ada5dd581443c125$export$9699f1c538a448a0, (v) => $ada5dd581443c125$export$9699f1c538a448a0 = v);
$parcel$export($ada5dd581443c125$exports, "is-placeholder", () => $ada5dd581443c125$export$e5b2f5233e4e5194, (v) => $ada5dd581443c125$export$e5b2f5233e4e5194 = v);
$parcel$export($ada5dd581443c125$exports, "is-hovered", () => $ada5dd581443c125$export$b8813cd5d7824ce7, (v) => $ada5dd581443c125$export$b8813cd5d7824ce7 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--valid", () => $ada5dd581443c125$export$c2abbc3f970170b7, (v) => $ada5dd581443c125$export$c2abbc3f970170b7 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--invalid", () => $ada5dd581443c125$export$58e50b10d30123df, (v) => $ada5dd581443c125$export$58e50b10d30123df = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield--loadable", () => $ada5dd581443c125$export$14fd30fea6f1348c, (v) => $ada5dd581443c125$export$14fd30fea6f1348c = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-validationIcon", () => $ada5dd581443c125$export$cf0ead5b44db0da3, (v) => $ada5dd581443c125$export$cf0ead5b44db0da3 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-icon", () => $ada5dd581443c125$export$222d1ccd1870be1d, (v) => $ada5dd581443c125$export$222d1ccd1870be1d = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-inputIcon", () => $ada5dd581443c125$export$c1cdcaa5fe76a871, (v) => $ada5dd581443c125$export$c1cdcaa5fe76a871 = v);
$parcel$export($ada5dd581443c125$exports, "spectrum-Textfield-circleLoader", () => $ada5dd581443c125$export$82a249fb4d6127, (v) => $ada5dd581443c125$export$82a249fb4d6127 = v);
$parcel$export($ada5dd581443c125$exports, "is-focused", () => $ada5dd581443c125$export$e7dc768d35940237, (v) => $ada5dd581443c125$export$e7dc768d35940237 = v);
$parcel$export($ada5dd581443c125$exports, "focus-ring", () => $ada5dd581443c125$export$f39a09f249340e2a, (v) => $ada5dd581443c125$export$f39a09f249340e2a = v);
$parcel$export($ada5dd581443c125$exports, "is-disabled", () => $ada5dd581443c125$export$d35bc1e505d1ebbf, (v) => $ada5dd581443c125$export$d35bc1e505d1ebbf = v);
var $ada5dd581443c125$export$1ac009feb2b0bd0c;
var $ada5dd581443c125$export$2c8a10299d8b3418;
var $ada5dd581443c125$export$bffd5e3d61a81737;
var $ada5dd581443c125$export$9699f1c538a448a0;
var $ada5dd581443c125$export$e5b2f5233e4e5194;
var $ada5dd581443c125$export$b8813cd5d7824ce7;
var $ada5dd581443c125$export$c2abbc3f970170b7;
var $ada5dd581443c125$export$58e50b10d30123df;
var $ada5dd581443c125$export$14fd30fea6f1348c;
var $ada5dd581443c125$export$cf0ead5b44db0da3;
var $ada5dd581443c125$export$222d1ccd1870be1d;
var $ada5dd581443c125$export$c1cdcaa5fe76a871;
var $ada5dd581443c125$export$82a249fb4d6127;
var $ada5dd581443c125$export$e7dc768d35940237;
var $ada5dd581443c125$export$f39a09f249340e2a;
var $ada5dd581443c125$export$d35bc1e505d1ebbf;
$ada5dd581443c125$export$1ac009feb2b0bd0c = "_spectrum-Textfield-input_73bc77";
$ada5dd581443c125$export$2c8a10299d8b3418 = "_spectrum-Textfield_73bc77";
$ada5dd581443c125$export$bffd5e3d61a81737 = "_spectrum-Textfield--quiet_73bc77";
$ada5dd581443c125$export$9699f1c538a448a0 = "_spectrum-Textfield--multiline_73bc77";
$ada5dd581443c125$export$e5b2f5233e4e5194 = "_is-placeholder_73bc77";
$ada5dd581443c125$export$b8813cd5d7824ce7 = "_is-hovered_73bc77";
$ada5dd581443c125$export$c2abbc3f970170b7 = "_spectrum-Textfield--valid_73bc77";
$ada5dd581443c125$export$58e50b10d30123df = "_spectrum-Textfield--invalid_73bc77";
$ada5dd581443c125$export$14fd30fea6f1348c = "_spectrum-Textfield--loadable_73bc77";
$ada5dd581443c125$export$cf0ead5b44db0da3 = "_spectrum-Textfield-validationIcon_73bc77";
$ada5dd581443c125$export$222d1ccd1870be1d = "_spectrum-Textfield-icon_73bc77";
$ada5dd581443c125$export$c1cdcaa5fe76a871 = "_spectrum-Textfield-inputIcon_73bc77";
$ada5dd581443c125$export$82a249fb4d6127 = "_spectrum-Textfield-circleLoader_73bc77";
$ada5dd581443c125$export$e7dc768d35940237 = "_is-focused_73bc77";
$ada5dd581443c125$export$f39a09f249340e2a = "_focus-ring_73bc77";
$ada5dd581443c125$export$d35bc1e505d1ebbf = "_is-disabled_73bc77";


function $5ca1863517567077$export$f5b8910cec6cf069(props) {
    let defaultRef = $5k7WA$react.useRef();
    let { isDisabled: isDisabled , isQuiet: isQuiet , inputClassName: inputClassName , validationState: validationState , children: children , fieldProps: fieldProps , inputRef: inputRef = defaultRef , className: className , autoFocus: autoFocus , style: style  } = props;
    // Reserve padding for the error icon when the width of the input is unconstrained.
    // When constrained, don't reserve space because adding it only when invalid will
    // not cause a layout shift.
    let [reservePadding1, setReservePadding] = $5k7WA$reactspectrumutils.useValueEffect(false);
    let onResize = $5k7WA$react.useCallback(()=>setReservePadding(function*(reservePadding) {
            if (reservePadding) // Try to collapse padding if the content is clipped.
            {
                if (inputRef.current.scrollWidth > inputRef.current.offsetWidth) {
                    let width = inputRef.current.parentElement.offsetWidth;
                    yield false;
                    // If removing padding causes a layout shift, add it back.
                    if (inputRef.current.parentElement.offsetWidth !== width) yield true;
                }
            } else // Try to add padding if the content is not clipped.
            if (inputRef.current.offsetWidth >= inputRef.current.scrollWidth) {
                let width = inputRef.current.parentElement.offsetWidth;
                yield true;
                // If adding padding does not change the width (i.e. width is constrained), remove it again.
                if (inputRef.current.parentElement.offsetWidth === width) yield false;
            }
        })
    , [
        inputRef,
        setReservePadding
    ]);
    $5k7WA$reactariautils.useLayoutEffect(onResize, [
        onResize
    ]);
    $5k7WA$reactariautils.useResizeObserver({
        ref: inputRef,
        onResize: onResize
    });
    // We also need to listen for resize events of the window so we can detect
    // when there is enough space for the padding to be re-added. Ideally we'd
    // use a resize observer on a parent element, but it's hard to know _what_
    // parent element.
    $5k7WA$reactariautils.useEvent($5k7WA$react.useRef(window), 'resize', onResize);
    let isInvalid = validationState === 'invalid';
    let textfieldClass = $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield', {
        'spectrum-Textfield--invalid': isInvalid,
        'spectrum-Textfield--valid': validationState === 'valid',
        'spectrum-Textfield--quiet': isQuiet
    }, $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-field'), className);
    let inputClass = $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-input', {
        'is-disabled': isDisabled,
        'is-invalid': isInvalid
    }, reservePadding1 && $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-input'), inputClassName);
    let iconClass = $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'spectrum-Textfield-validationIcon');
    let validationIcon = null;
    if (validationState === 'invalid') validationIcon = /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement(($parcel$interopDefault($5k7WA$spectrumiconsuiAlertMedium)), {
        "data-testid": "invalid-icon",
        UNSAFE_className: iconClass
    });
    else if (validationState === 'valid') validationIcon = /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement(($parcel$interopDefault($5k7WA$spectrumiconsuiCheckmarkMedium)), {
        "data-testid": "valid-icon",
        UNSAFE_className: iconClass
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        ...$5k7WA$reactariautils.mergeProps(fieldProps),
        className: textfieldClass,
        style: style
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactariafocus.FocusRing, {
        focusClass: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'is-focused'),
        focusRingClass: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($ada5dd581443c125$exports)), 'focus-ring'),
        isTextInput: true,
        within: true
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        role: "presentation",
        className: inputClass
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        role: "presentation",
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-inputContents'),
        ref: inputRef
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactariafocus.FocusScope, {
        autoFocus: autoFocus
    }, children)))), validationIcon));
}





var $e95066272e91f55e$exports = {};

$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup", () => $e95066272e91f55e$export$5be359c1227eedcb, (v) => $e95066272e91f55e$export$5be359c1227eedcb = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-FieldButton", () => $e95066272e91f55e$export$a024c99ecf6b5741, (v) => $e95066272e91f55e$export$a024c99ecf6b5741 = v);
$parcel$export($e95066272e91f55e$exports, "is-disabled", () => $e95066272e91f55e$export$d35bc1e505d1ebbf, (v) => $e95066272e91f55e$export$d35bc1e505d1ebbf = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup--invalid", () => $e95066272e91f55e$export$3b48509739a9cda0, (v) => $e95066272e91f55e$export$3b48509739a9cda0 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup--quiet", () => $e95066272e91f55e$export$ebf265ffc062029b, (v) => $e95066272e91f55e$export$ebf265ffc062029b = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-field", () => $e95066272e91f55e$export$ea77459595e26bec, (v) => $e95066272e91f55e$export$ea77459595e26bec = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-input-validationIcon", () => $e95066272e91f55e$export$f7ab13ee113f4884, (v) => $e95066272e91f55e$export$f7ab13ee113f4884 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-input-circleLoader", () => $e95066272e91f55e$export$dcc9e00cdad967fa, (v) => $e95066272e91f55e$export$dcc9e00cdad967fa = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-input", () => $e95066272e91f55e$export$92706f5c6fe4074, (v) => $e95066272e91f55e$export$92706f5c6fe4074 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-icon", () => $e95066272e91f55e$export$b91b6af799fd93a8, (v) => $e95066272e91f55e$export$b91b6af799fd93a8 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-InputGroup-popover--quiet", () => $e95066272e91f55e$export$5e116178f9b1556a, (v) => $e95066272e91f55e$export$5e116178f9b1556a = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker--range", () => $e95066272e91f55e$export$1d8b0b29e11d7cd, (v) => $e95066272e91f55e$export$1d8b0b29e11d7cd = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker--datetimeRange", () => $e95066272e91f55e$export$58dd7cd23c92699f, (v) => $e95066272e91f55e$export$58dd7cd23c92699f = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker-startField", () => $e95066272e91f55e$export$80f9c838a8406469, (v) => $e95066272e91f55e$export$80f9c838a8406469 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker-endField", () => $e95066272e91f55e$export$1c72fb41fa4f21ee, (v) => $e95066272e91f55e$export$1c72fb41fa4f21ee = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker--rangeDash", () => $e95066272e91f55e$export$202113e883898dc, (v) => $e95066272e91f55e$export$202113e883898dc = v);
$parcel$export($e95066272e91f55e$exports, "is-focused", () => $e95066272e91f55e$export$e7dc768d35940237, (v) => $e95066272e91f55e$export$e7dc768d35940237 = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-Datepicker-focusRing", () => $e95066272e91f55e$export$eb262b15b9261fde, (v) => $e95066272e91f55e$export$eb262b15b9261fde = v);
$parcel$export($e95066272e91f55e$exports, "is-hovered", () => $e95066272e91f55e$export$b8813cd5d7824ce7, (v) => $e95066272e91f55e$export$b8813cd5d7824ce7 = v);
$parcel$export($e95066272e91f55e$exports, "focus-ring", () => $e95066272e91f55e$export$f39a09f249340e2a, (v) => $e95066272e91f55e$export$f39a09f249340e2a = v);
$parcel$export($e95066272e91f55e$exports, "is-selected", () => $e95066272e91f55e$export$1e0fb04f31d3c22a, (v) => $e95066272e91f55e$export$1e0fb04f31d3c22a = v);
$parcel$export($e95066272e91f55e$exports, "spectrum-FieldButton--invalid", () => $e95066272e91f55e$export$c9f503f672e8a3c1, (v) => $e95066272e91f55e$export$c9f503f672e8a3c1 = v);
var $e95066272e91f55e$export$5be359c1227eedcb;
var $e95066272e91f55e$export$a024c99ecf6b5741;
var $e95066272e91f55e$export$d35bc1e505d1ebbf;
var $e95066272e91f55e$export$3b48509739a9cda0;
var $e95066272e91f55e$export$ebf265ffc062029b;
var $e95066272e91f55e$export$ea77459595e26bec;
var $e95066272e91f55e$export$f7ab13ee113f4884;
var $e95066272e91f55e$export$dcc9e00cdad967fa;
var $e95066272e91f55e$export$92706f5c6fe4074;
var $e95066272e91f55e$export$b91b6af799fd93a8;
var $e95066272e91f55e$export$5e116178f9b1556a;
var $e95066272e91f55e$export$1d8b0b29e11d7cd;
var $e95066272e91f55e$export$58dd7cd23c92699f;
var $e95066272e91f55e$export$80f9c838a8406469;
var $e95066272e91f55e$export$1c72fb41fa4f21ee;
var $e95066272e91f55e$export$202113e883898dc;
var $e95066272e91f55e$export$e7dc768d35940237;
var $e95066272e91f55e$export$eb262b15b9261fde;
var $e95066272e91f55e$export$b8813cd5d7824ce7;
var $e95066272e91f55e$export$f39a09f249340e2a;
var $e95066272e91f55e$export$1e0fb04f31d3c22a;
var $e95066272e91f55e$export$c9f503f672e8a3c1;
$e95066272e91f55e$export$5be359c1227eedcb = "_spectrum-InputGroup_a0942f";
$e95066272e91f55e$export$a024c99ecf6b5741 = "_spectrum-FieldButton_a0942f";
$e95066272e91f55e$export$d35bc1e505d1ebbf = "_is-disabled_a0942f";
$e95066272e91f55e$export$3b48509739a9cda0 = "_spectrum-InputGroup--invalid_a0942f";
$e95066272e91f55e$export$ebf265ffc062029b = "_spectrum-InputGroup--quiet_a0942f";
$e95066272e91f55e$export$ea77459595e26bec = "_spectrum-InputGroup-field_a0942f";
$e95066272e91f55e$export$f7ab13ee113f4884 = "_spectrum-InputGroup-input-validationIcon_a0942f";
$e95066272e91f55e$export$dcc9e00cdad967fa = "_spectrum-InputGroup-input-circleLoader_a0942f";
$e95066272e91f55e$export$92706f5c6fe4074 = "_spectrum-InputGroup-input_a0942f";
$e95066272e91f55e$export$b91b6af799fd93a8 = "_spectrum-InputGroup-icon_a0942f";
$e95066272e91f55e$export$5e116178f9b1556a = "_spectrum-InputGroup-popover--quiet_a0942f";
$e95066272e91f55e$export$1d8b0b29e11d7cd = "_spectrum-Datepicker--range_a0942f";
$e95066272e91f55e$export$58dd7cd23c92699f = "_spectrum-Datepicker--datetimeRange_a0942f";
$e95066272e91f55e$export$80f9c838a8406469 = "_spectrum-Datepicker-startField_a0942f";
$e95066272e91f55e$export$1c72fb41fa4f21ee = "_spectrum-Datepicker-endField_a0942f";
$e95066272e91f55e$export$202113e883898dc = "_spectrum-Datepicker--rangeDash_a0942f";
$e95066272e91f55e$export$e7dc768d35940237 = "_is-focused_a0942f";
$e95066272e91f55e$export$eb262b15b9261fde = "_spectrum-Datepicker-focusRing_a0942f";
$e95066272e91f55e$export$b8813cd5d7824ce7 = "_is-hovered_a0942f";
$e95066272e91f55e$export$f39a09f249340e2a = "_focus-ring_a0942f";
$e95066272e91f55e$export$1e0fb04f31d3c22a = "_is-selected_a0942f";
$e95066272e91f55e$export$c9f503f672e8a3c1 = "_spectrum-FieldButton--invalid_a0942f";


var $12fb4d523ccdebb9$exports = {};

$parcel$export($12fb4d523ccdebb9$exports, "TimeField", () => $12fb4d523ccdebb9$export$5eaee2322dd727eb);











function $12fb4d523ccdebb9$export$5eaee2322dd727eb(props) {
    props = $5k7WA$reactspectrumprovider.useProviderProps(props);
    let { autoFocus: autoFocus , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , isQuiet: isQuiet  } = props;
    let ref = $5k7WA$react.useRef();
    let { locale: locale  } = $5k7WA$reactariai18n.useLocale();
    let state = $5k7WA$reactstatelydatepicker.useTimeFieldState({
        ...props,
        locale: locale,
        createCalendar: $5k7WA$internationalizeddate.createCalendar
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $5k7WA$reactariadatepicker.useDateField(props, state, ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumlabel.Field, {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-TimeField-fieldWrapper')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5ca1863517567077$export$f5b8910cec6cf069, {
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: state.validationState,
        inputRef: ref,
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-TimeField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($c83a5c5c344fe9a3$export$6388987c5223b54e, {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })
    ))));
}










function $db3c2f668e3f02cf$export$322f4580ccd8dde6(props) {
    let formatter = $5k7WA$reactariai18n.useDateFormatter({
        dateStyle: 'short'
    });
    let displayNames = $5k7WA$reactariadatepicker.useDisplayNames();
    return $5k7WA$react.useMemo(()=>{
        if (props.description) return props.description;
        if (props.showFormatHelpText) return formatter.formatToParts(new Date()).map((s)=>{
            if (s.type === 'literal') return s.value;
            return displayNames.of(s.type);
        }).join(' ');
        return '';
    }, [
        props.description,
        props.showFormatHelpText,
        formatter,
        displayNames
    ]);
}
function $db3c2f668e3f02cf$export$12ce2869ce471b1f(maxVisibleMonths) {
    let { scale: scale  } = $5k7WA$reactspectrumprovider.useProvider();
    let [visibleMonths, setVisibleMonths] = $5k7WA$react.useState($db3c2f668e3f02cf$var$getVisibleMonths(scale));
    $5k7WA$reactariautils.useLayoutEffect(()=>{
        let onResize = ()=>setVisibleMonths($db3c2f668e3f02cf$var$getVisibleMonths(scale))
        ;
        onResize();
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        };
    }, [
        scale
    ]);
    return Math.max(1, Math.min(visibleMonths, maxVisibleMonths, 3));
}
function $db3c2f668e3f02cf$var$getVisibleMonths(scale) {
    let monthWidth = scale === 'large' ? 336 : 280;
    let gap = scale === 'large' ? 30 : 24;
    let popoverPadding = scale === 'large' ? 32 : 48;
    return Math.floor((window.innerWidth - popoverPadding * 2) / (monthWidth + gap));
}





function $1629c9b1d9630cb2$export$5109c6dd95d8fb00(props) {
    props = $5k7WA$reactspectrumprovider.useProviderProps(props);
    let { autoFocus: autoFocus , isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , placeholderValue: placeholderValue , maxVisibleMonths: maxVisibleMonths = 1  } = props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $5k7WA$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    let targetRef = $5k7WA$react.useRef();
    let state = $5k7WA$reactstatelydatepicker.useDatePickerState(props);
    let { groupProps: groupProps , labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps , buttonProps: buttonProps , dialogProps: dialogProps  } = $5k7WA$reactariadatepicker.useDatePicker(props, state, targetRef);
    let { value: value , setValue: setValue , isOpen: isOpen , setOpen: setOpen  } = state;
    let { direction: direction  } = $5k7WA$reactariai18n.useLocale();
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $5k7WA$reactariafocus.useFocusRing({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let className = $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': state.validationState === 'invalid',
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible
    });
    let fieldClassName = $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup-input', {
        'is-disabled': isDisabled,
        'is-invalid': state.validationState === 'invalid'
    });
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = $db3c2f668e3f02cf$export$322f4580ccd8dde6(props);
    if (description && !props.description) descriptionProps.id = null;
    let placeholder = placeholderValue;
    let timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null;
    let timeMinValue = props.minValue && 'hour' in props.minValue ? props.minValue : null;
    let timeMaxValue = props.maxValue && 'hour' in props.maxValue ? props.maxValue : null;
    let timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' || state.granularity === 'millisecond' ? state.granularity : null;
    let showTimeField = !!timeGranularity;
    let visibleMonths = $db3c2f668e3f02cf$export$12ce2869ce471b1f(maxVisibleMonths);
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumlabel.Field, {
        ...props,
        ref: targetRef,
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        ...$5k7WA$reactariautils.mergeProps(groupProps, hoverProps, focusProps),
        className: className
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5ca1863517567077$export$f5b8910cec6cf069, {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: state.validationState,
        autoFocus: autoFocus,
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($98f57c321b25f0d2$export$34dc4cfa15ead1, {
        ...fieldProps,
        "data-testid": "date-field",
        isQuiet: isQuiet,
        validationState: state.validationState,
        value: value,
        onChange: setValue,
        placeholderValue: placeholderValue,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        granularity: props.granularity,
        hourCycle: props.hourCycle,
        inputClassName: fieldClassName,
        hideTimeZone: props.hideTimeZone
    })), /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumdialog.DialogTrigger, {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumbutton.FieldButton, {
        ...buttonProps,
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: state.validationState,
        isDisabled: isDisabled || isReadOnly
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement(($parcel$interopDefault($5k7WA$spectrumiconsworkflowCalendar)), null)), /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumdialog.Dialog, {
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumview.Content, {
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumcalendar.Calendar, {
        autoFocus: true,
        value: state.dateValue,
        onChange: state.setDateValue,
        visibleMonths: visibleMonths,
        minValue: props.minValue,
        maxValue: props.maxValue
    }), showTimeField && /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($12fb4d523ccdebb9$export$5eaee2322dd727eb, {
        label: "Time",
        value: state.timeValue,
        onChange: state.setTimeValue,
        placeholderValue: timePlaceholder,
        granularity: timeGranularity,
        minValue: timeMinValue,
        maxValue: timeMaxValue,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        marginTop: "size-100"
    }))))))));
}


var $823241d972c81be6$exports = {};

$parcel$export($823241d972c81be6$exports, "DateRangePicker", () => $823241d972c81be6$export$17334619f3ac2224);






















function $823241d972c81be6$export$17334619f3ac2224(props) {
    props = $5k7WA$reactspectrumprovider.useProviderProps(props);
    let { isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , autoFocus: autoFocus , placeholderValue: placeholderValue , maxVisibleMonths: maxVisibleMonths = 1 , ...otherProps } = props;
    let { styleProps: styleProps  } = $5k7WA$reactspectrumutils.useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $5k7WA$reactariainteractions.useHover({
        isDisabled: isDisabled
    });
    let targetRef = $5k7WA$react.useRef();
    let state = $5k7WA$reactstatelydatepicker.useDateRangePickerState(props);
    let { labelProps: labelProps , groupProps: groupProps , buttonProps: buttonProps , dialogProps: dialogProps , startFieldProps: startFieldProps , endFieldProps: endFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $5k7WA$reactariadatepicker.useDateRangePicker(props, state, targetRef);
    let { value: value , isOpen: isOpen , setOpen: setOpen  } = state;
    let { direction: direction  } = $5k7WA$reactariai18n.useLocale();
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $5k7WA$reactariafocus.useFocusRing({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let className = $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': state.validationState === 'invalid',
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible
    }, styleProps.className);
    let fieldClassName = $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup-input', {
        'is-disabled': isDisabled,
        'is-invalid': state.validationState === 'invalid'
    });
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = $db3c2f668e3f02cf$export$322f4580ccd8dde6(props);
    if (description && !props.description) descriptionProps.id = null;
    let placeholder = placeholderValue;
    let timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null;
    let timeMinValue = props.minValue && 'hour' in props.minValue ? props.minValue : null;
    let timeMaxValue = props.maxValue && 'hour' in props.maxValue ? props.maxValue : null;
    let timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' || state.granularity === 'millisecond' ? state.granularity : null;
    let showTimeField = !!timeGranularity;
    let visibleMonths = $db3c2f668e3f02cf$export$12ce2869ce471b1f(maxVisibleMonths);
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumlabel.Field, {
        ...props,
        ref: targetRef,
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        ...styleProps,
        ...$5k7WA$reactariautils.mergeProps(groupProps, hoverProps, focusProps),
        className: className
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5ca1863517567077$export$f5b8910cec6cf069, {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: state.validationState,
        autoFocus: autoFocus,
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($98f57c321b25f0d2$export$34dc4cfa15ead1, {
        ...startFieldProps,
        isQuiet: props.isQuiet,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        validationState: state.validationState,
        placeholderValue: placeholderValue,
        value: value?.start || null,
        defaultValue: null,
        onChange: (start)=>state.setDateTime('start', start)
        ,
        granularity: props.granularity,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        inputClassName: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-startField')
    }), /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($823241d972c81be6$var$DateRangeDash, null), /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($98f57c321b25f0d2$export$34dc4cfa15ead1, {
        ...endFieldProps,
        isQuiet: props.isQuiet,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        validationState: state.validationState,
        placeholderValue: placeholderValue,
        value: value?.end || null,
        defaultValue: null,
        onChange: (end)=>state.setDateTime('end', end)
        ,
        granularity: props.granularity,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        inputClassName: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-Datepicker-endField', $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-endField'))
    })), /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumdialog.DialogTrigger, {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumbutton.FieldButton, {
        ...buttonProps,
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($e95066272e91f55e$exports)), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: state.validationState,
        isDisabled: isDisabled || isReadOnly
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement(($parcel$interopDefault($5k7WA$spectrumiconsworkflowCalendar)), null)), /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumdialog.Dialog, {
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumview.Content, {
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumcalendar.RangeCalendar, {
        autoFocus: true,
        value: state.dateRange,
        onChange: state.setDateRange,
        visibleMonths: visibleMonths,
        minValue: props.minValue,
        maxValue: props.maxValue
    }), showTimeField && /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumlayout.Flex, {
        gap: "size-100",
        marginTop: "size-100",
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($12fb4d523ccdebb9$export$5eaee2322dd727eb, {
        label: "Start time",
        value: state.timeRange?.start || null,
        onChange: (v)=>state.setTime('start', v)
        ,
        placeholderValue: timePlaceholder,
        granularity: timeGranularity,
        minValue: timeMinValue,
        maxValue: timeMaxValue,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        flex: true
    }), /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($12fb4d523ccdebb9$export$5eaee2322dd727eb, {
        label: "End time",
        value: state.timeRange?.end || null,
        onChange: (v)=>state.setTime('end', v)
        ,
        placeholderValue: timePlaceholder,
        granularity: timeGranularity,
        minValue: timeMinValue,
        maxValue: timeMaxValue,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        flex: true
    }))))))));
}
function $823241d972c81be6$var$DateRangeDash() {
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement("div", {
        "aria-hidden": "true",
        "data-testid": "date-range-dash",
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-rangeDash')
    }));
}



var $c2fb59aabc02bf56$exports = {};

$parcel$export($c2fb59aabc02bf56$exports, "DateField", () => $c2fb59aabc02bf56$export$d9781c7894a82487);












function $c2fb59aabc02bf56$export$d9781c7894a82487(props) {
    props = $5k7WA$reactspectrumprovider.useProviderProps(props);
    let { autoFocus: autoFocus , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , isQuiet: isQuiet  } = props;
    let ref = $5k7WA$react.useRef();
    let { locale: locale  } = $5k7WA$reactariai18n.useLocale();
    let state = $5k7WA$reactstatelydatepicker.useDatePickerFieldState({
        ...props,
        locale: locale,
        createCalendar: $5k7WA$internationalizeddate.createCalendar
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $5k7WA$reactariadatepicker.useDateField(props, state, ref);
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = $db3c2f668e3f02cf$export$322f4580ccd8dde6(props);
    if (description && !props.description) descriptionProps.id = null;
    return(/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5k7WA$reactspectrumlabel.Field, {
        ...props,
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($5ca1863517567077$export$f5b8910cec6cf069, {
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: state.validationState,
        inputRef: ref,
        className: $5k7WA$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($4f8ac478afe0de0f$exports)), 'react-spectrum-DateField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ ($parcel$interopDefault($5k7WA$react)).createElement($c83a5c5c344fe9a3$export$6388987c5223b54e, {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })
    ))));
}


$parcel$exportWildcard(module.exports, $1629c9b1d9630cb2$exports);
$parcel$exportWildcard(module.exports, $823241d972c81be6$exports);
$parcel$exportWildcard(module.exports, $12fb4d523ccdebb9$exports);
$parcel$exportWildcard(module.exports, $c2fb59aabc02bf56$exports);


//# sourceMappingURL=main.js.map
