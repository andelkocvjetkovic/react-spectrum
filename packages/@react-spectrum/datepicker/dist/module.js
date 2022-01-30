import "./main.css";
import {Calendar as $gSQrT$Calendar, RangeCalendar as $gSQrT$RangeCalendar} from "@react-spectrum/calendar";
import $gSQrT$spectrumiconsworkflowCalendar from "@spectrum-icons/workflow/Calendar";
import {classNames as $gSQrT$classNames, useValueEffect as $gSQrT$useValueEffect, useStyleProps as $gSQrT$useStyleProps} from "@react-spectrum/utils";
import {Content as $gSQrT$Content} from "@react-spectrum/view";
import {DialogTrigger as $gSQrT$DialogTrigger, Dialog as $gSQrT$Dialog} from "@react-spectrum/dialog";
import {Field as $gSQrT$Field} from "@react-spectrum/label";
import {FieldButton as $gSQrT$FieldButton} from "@react-spectrum/button";
import {mergeProps as $gSQrT$mergeProps, useLayoutEffect as $gSQrT$useLayoutEffect, useResizeObserver as $gSQrT$useResizeObserver, useEvent as $gSQrT$useEvent} from "@react-aria/utils";
import $gSQrT$react, {useRef as $gSQrT$useRef, useMemo as $gSQrT$useMemo, useCallback as $gSQrT$useCallback, useState as $gSQrT$useState} from "react";
import {useDatePicker as $gSQrT$useDatePicker, useDateField as $gSQrT$useDateField, useDateSegment as $gSQrT$useDateSegment, useDisplayNames as $gSQrT$useDisplayNames, useDateRangePicker as $gSQrT$useDateRangePicker} from "@react-aria/datepicker";
import {useDatePickerState as $gSQrT$useDatePickerState, useDatePickerFieldState as $gSQrT$useDatePickerFieldState, useTimeFieldState as $gSQrT$useTimeFieldState, useDateRangePickerState as $gSQrT$useDateRangePickerState} from "@react-stately/datepicker";
import {useFocusRing as $gSQrT$useFocusRing, useFocusManager as $gSQrT$useFocusManager, FocusRing as $gSQrT$FocusRing, FocusScope as $gSQrT$FocusScope} from "@react-aria/focus";
import {useHover as $gSQrT$useHover, usePress as $gSQrT$usePress} from "@react-aria/interactions";
import {useLocale as $gSQrT$useLocale, useDateFormatter as $gSQrT$useDateFormatter} from "@react-aria/i18n";
import {useProviderProps as $gSQrT$useProviderProps, useProvider as $gSQrT$useProvider} from "@react-spectrum/provider";
import {createCalendar as $gSQrT$createCalendar} from "@internationalized/date";
import {NumberParser as $gSQrT$NumberParser} from "@internationalized/number";
import $gSQrT$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $gSQrT$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {Flex as $gSQrT$Flex} from "@react-spectrum/layout";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $365791aa87841cac$exports = {};

$parcel$export($365791aa87841cac$exports, "DatePicker", () => $365791aa87841cac$export$5109c6dd95d8fb00);









var $4510a76080a34b98$exports = {};

$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-fieldWrapper", () => $4510a76080a34b98$export$48501287c6ce4708, (v) => $4510a76080a34b98$export$48501287c6ce4708 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-startField", () => $4510a76080a34b98$export$eec05853f5fc7ef8, (v) => $4510a76080a34b98$export$eec05853f5fc7ef8 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-endField", () => $4510a76080a34b98$export$b41789438b49c852, (v) => $4510a76080a34b98$export$b41789438b49c852 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-field", () => $4510a76080a34b98$export$8cbece9fb909350d, (v) => $4510a76080a34b98$export$8cbece9fb909350d = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-input", () => $4510a76080a34b98$export$4cdb39b006dc840a, (v) => $4510a76080a34b98$export$4cdb39b006dc840a = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-DateField", () => $4510a76080a34b98$export$c96d01b692101b8a, (v) => $4510a76080a34b98$export$c96d01b692101b8a = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-TimeField", () => $4510a76080a34b98$export$61c201f1ba261729, (v) => $4510a76080a34b98$export$61c201f1ba261729 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-TimeField-fieldWrapper", () => $4510a76080a34b98$export$3008240fa163ee96, (v) => $4510a76080a34b98$export$3008240fa163ee96 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-inputContents", () => $4510a76080a34b98$export$609545772ae0466a, (v) => $4510a76080a34b98$export$609545772ae0466a = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-rangeDash", () => $4510a76080a34b98$export$1ae39afd2cf49425, (v) => $4510a76080a34b98$export$1ae39afd2cf49425 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-segments", () => $4510a76080a34b98$export$b9c34f0306ac2ffc, (v) => $4510a76080a34b98$export$b9c34f0306ac2ffc = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-literal", () => $4510a76080a34b98$export$24a265734c16a355, (v) => $4510a76080a34b98$export$24a265734c16a355 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-DatePicker-cell", () => $4510a76080a34b98$export$947f5cb8a73639a4, (v) => $4510a76080a34b98$export$947f5cb8a73639a4 = v);
$parcel$export($4510a76080a34b98$exports, "is-placeholder", () => $4510a76080a34b98$export$e5b2f5233e4e5194, (v) => $4510a76080a34b98$export$e5b2f5233e4e5194 = v);
$parcel$export($4510a76080a34b98$exports, "is-read-only", () => $4510a76080a34b98$export$dddce3ae23a6e3ea, (v) => $4510a76080a34b98$export$dddce3ae23a6e3ea = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-dialog", () => $4510a76080a34b98$export$7c3cb625bb792356, (v) => $4510a76080a34b98$export$7c3cb625bb792356 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-dialogContent", () => $4510a76080a34b98$export$94c97d6b6a927921, (v) => $4510a76080a34b98$export$94c97d6b6a927921 = v);
$parcel$export($4510a76080a34b98$exports, "react-spectrum-Datepicker-timeFields", () => $4510a76080a34b98$export$8d47712a13573e39, (v) => $4510a76080a34b98$export$8d47712a13573e39 = v);
var $4510a76080a34b98$export$48501287c6ce4708;
var $4510a76080a34b98$export$eec05853f5fc7ef8;
var $4510a76080a34b98$export$b41789438b49c852;
var $4510a76080a34b98$export$8cbece9fb909350d;
var $4510a76080a34b98$export$4cdb39b006dc840a;
var $4510a76080a34b98$export$c96d01b692101b8a;
var $4510a76080a34b98$export$61c201f1ba261729;
var $4510a76080a34b98$export$3008240fa163ee96;
var $4510a76080a34b98$export$609545772ae0466a;
var $4510a76080a34b98$export$1ae39afd2cf49425;
var $4510a76080a34b98$export$b9c34f0306ac2ffc;
var $4510a76080a34b98$export$24a265734c16a355;
var $4510a76080a34b98$export$947f5cb8a73639a4;
var $4510a76080a34b98$export$e5b2f5233e4e5194;
var $4510a76080a34b98$export$dddce3ae23a6e3ea;
var $4510a76080a34b98$export$7c3cb625bb792356;
var $4510a76080a34b98$export$94c97d6b6a927921;
var $4510a76080a34b98$export$8d47712a13573e39;
$4510a76080a34b98$export$48501287c6ce4708 = "_react-spectrum-Datepicker-fieldWrapper_0b973d";
$4510a76080a34b98$export$eec05853f5fc7ef8 = "_react-spectrum-Datepicker-startField_0b973d";
$4510a76080a34b98$export$b41789438b49c852 = "_react-spectrum-Datepicker-endField_0b973d";
$4510a76080a34b98$export$8cbece9fb909350d = "_react-spectrum-Datepicker-field_0b973d";
$4510a76080a34b98$export$4cdb39b006dc840a = "_react-spectrum-Datepicker-input_0b973d";
$4510a76080a34b98$export$c96d01b692101b8a = "_react-spectrum-DateField_0b973d";
$4510a76080a34b98$export$61c201f1ba261729 = "_react-spectrum-TimeField_0b973d";
$4510a76080a34b98$export$3008240fa163ee96 = "_react-spectrum-TimeField-fieldWrapper_0b973d";
$4510a76080a34b98$export$609545772ae0466a = "_react-spectrum-Datepicker-inputContents_0b973d";
$4510a76080a34b98$export$1ae39afd2cf49425 = "_react-spectrum-Datepicker-rangeDash_0b973d";
$4510a76080a34b98$export$b9c34f0306ac2ffc = "_react-spectrum-Datepicker-segments_0b973d";
$4510a76080a34b98$export$24a265734c16a355 = "_react-spectrum-Datepicker-literal_0b973d";
$4510a76080a34b98$export$947f5cb8a73639a4 = "_react-spectrum-DatePicker-cell_0b973d";
$4510a76080a34b98$export$e5b2f5233e4e5194 = "_is-placeholder_0b973d";
$4510a76080a34b98$export$dddce3ae23a6e3ea = "_is-read-only_0b973d";
$4510a76080a34b98$export$7c3cb625bb792356 = "_react-spectrum-Datepicker-dialog_0b973d";
$4510a76080a34b98$export$94c97d6b6a927921 = "_react-spectrum-Datepicker-dialogContent_0b973d";
$4510a76080a34b98$export$8d47712a13573e39 = "_react-spectrum-Datepicker-timeFields_0b973d";






function $d8115ad0149eb8f6$export$6388987c5223b54e({ segment: segment , state: state , ...otherProps }) {
    switch(segment.type){
        // A separator, e.g. punctuation
        case 'literal':
            return(/*#__PURE__*/ $gSQrT$react.createElement($d8115ad0149eb8f6$var$LiteralSegment, {
                segment: segment
            }));
        // Editable segment
        default:
            return(/*#__PURE__*/ $gSQrT$react.createElement($d8115ad0149eb8f6$var$EditableSegment, {
                segment: segment,
                state: state,
                ...otherProps
            }));
    }
}
function $d8115ad0149eb8f6$var$LiteralSegment({ segment: segment  }) {
    let focusManager = $gSQrT$useFocusManager();
    let { pressProps: pressProps  } = $gSQrT$usePress({
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
    return(/*#__PURE__*/ $gSQrT$react.createElement("span", {
        "aria-hidden": "true",
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-literal'),
        ...pressProps,
        "data-testid": segment.type === 'literal' ? undefined : segment.type
    }, segment.text));
}
function $d8115ad0149eb8f6$var$EditableSegment({ segment: segment , state: state , ...otherProps }) {
    let ref = $gSQrT$useRef();
    let { segmentProps: segmentProps  } = $gSQrT$useDateSegment(otherProps, segment, state, ref);
    let { locale: locale  } = $gSQrT$useLocale();
    let parser = $gSQrT$useMemo(()=>new $gSQrT$NumberParser(locale)
    , [
        locale
    ]);
    let isNumeric = $gSQrT$useMemo(()=>parser.isValidPartialNumber(segment.text)
    , [
        segment.text,
        parser
    ]);
    return(/*#__PURE__*/ $gSQrT$react.createElement("div", {
        ref: ref,
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-DatePicker-cell', {
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







function $46d8d39da3e1229e$export$34dc4cfa15ead1(props) {
    let { isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , inputClassName: inputClassName  } = props;
    let ref = $gSQrT$useRef();
    let { locale: locale  } = $gSQrT$useLocale();
    let state = $gSQrT$useDatePickerFieldState({
        ...props,
        locale: locale,
        createCalendar: $gSQrT$createCalendar
    });
    let { fieldProps: fieldProps  } = $gSQrT$useDateField(props, state, ref);
    return(/*#__PURE__*/ $gSQrT$react.createElement("div", {
        ...fieldProps,
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-segments', inputClassName),
        ref: ref
    }, state.segments.map((segment, i)=>/*#__PURE__*/ $gSQrT$react.createElement($d8115ad0149eb8f6$export$6388987c5223b54e, {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })
    )));
}













var $e10bd19c72c588e6$exports = {};

$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-input", () => $e10bd19c72c588e6$export$1ac009feb2b0bd0c, (v) => $e10bd19c72c588e6$export$1ac009feb2b0bd0c = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield", () => $e10bd19c72c588e6$export$2c8a10299d8b3418, (v) => $e10bd19c72c588e6$export$2c8a10299d8b3418 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--quiet", () => $e10bd19c72c588e6$export$bffd5e3d61a81737, (v) => $e10bd19c72c588e6$export$bffd5e3d61a81737 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--multiline", () => $e10bd19c72c588e6$export$9699f1c538a448a0, (v) => $e10bd19c72c588e6$export$9699f1c538a448a0 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-placeholder", () => $e10bd19c72c588e6$export$e5b2f5233e4e5194, (v) => $e10bd19c72c588e6$export$e5b2f5233e4e5194 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-hovered", () => $e10bd19c72c588e6$export$b8813cd5d7824ce7, (v) => $e10bd19c72c588e6$export$b8813cd5d7824ce7 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--valid", () => $e10bd19c72c588e6$export$c2abbc3f970170b7, (v) => $e10bd19c72c588e6$export$c2abbc3f970170b7 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--invalid", () => $e10bd19c72c588e6$export$58e50b10d30123df, (v) => $e10bd19c72c588e6$export$58e50b10d30123df = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield--loadable", () => $e10bd19c72c588e6$export$14fd30fea6f1348c, (v) => $e10bd19c72c588e6$export$14fd30fea6f1348c = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-validationIcon", () => $e10bd19c72c588e6$export$cf0ead5b44db0da3, (v) => $e10bd19c72c588e6$export$cf0ead5b44db0da3 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-icon", () => $e10bd19c72c588e6$export$222d1ccd1870be1d, (v) => $e10bd19c72c588e6$export$222d1ccd1870be1d = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-inputIcon", () => $e10bd19c72c588e6$export$c1cdcaa5fe76a871, (v) => $e10bd19c72c588e6$export$c1cdcaa5fe76a871 = v);
$parcel$export($e10bd19c72c588e6$exports, "spectrum-Textfield-circleLoader", () => $e10bd19c72c588e6$export$82a249fb4d6127, (v) => $e10bd19c72c588e6$export$82a249fb4d6127 = v);
$parcel$export($e10bd19c72c588e6$exports, "is-focused", () => $e10bd19c72c588e6$export$e7dc768d35940237, (v) => $e10bd19c72c588e6$export$e7dc768d35940237 = v);
$parcel$export($e10bd19c72c588e6$exports, "focus-ring", () => $e10bd19c72c588e6$export$f39a09f249340e2a, (v) => $e10bd19c72c588e6$export$f39a09f249340e2a = v);
$parcel$export($e10bd19c72c588e6$exports, "is-disabled", () => $e10bd19c72c588e6$export$d35bc1e505d1ebbf, (v) => $e10bd19c72c588e6$export$d35bc1e505d1ebbf = v);
var $e10bd19c72c588e6$export$1ac009feb2b0bd0c;
var $e10bd19c72c588e6$export$2c8a10299d8b3418;
var $e10bd19c72c588e6$export$bffd5e3d61a81737;
var $e10bd19c72c588e6$export$9699f1c538a448a0;
var $e10bd19c72c588e6$export$e5b2f5233e4e5194;
var $e10bd19c72c588e6$export$b8813cd5d7824ce7;
var $e10bd19c72c588e6$export$c2abbc3f970170b7;
var $e10bd19c72c588e6$export$58e50b10d30123df;
var $e10bd19c72c588e6$export$14fd30fea6f1348c;
var $e10bd19c72c588e6$export$cf0ead5b44db0da3;
var $e10bd19c72c588e6$export$222d1ccd1870be1d;
var $e10bd19c72c588e6$export$c1cdcaa5fe76a871;
var $e10bd19c72c588e6$export$82a249fb4d6127;
var $e10bd19c72c588e6$export$e7dc768d35940237;
var $e10bd19c72c588e6$export$f39a09f249340e2a;
var $e10bd19c72c588e6$export$d35bc1e505d1ebbf;
$e10bd19c72c588e6$export$1ac009feb2b0bd0c = "_spectrum-Textfield-input_73bc77";
$e10bd19c72c588e6$export$2c8a10299d8b3418 = "_spectrum-Textfield_73bc77";
$e10bd19c72c588e6$export$bffd5e3d61a81737 = "_spectrum-Textfield--quiet_73bc77";
$e10bd19c72c588e6$export$9699f1c538a448a0 = "_spectrum-Textfield--multiline_73bc77";
$e10bd19c72c588e6$export$e5b2f5233e4e5194 = "_is-placeholder_73bc77";
$e10bd19c72c588e6$export$b8813cd5d7824ce7 = "_is-hovered_73bc77";
$e10bd19c72c588e6$export$c2abbc3f970170b7 = "_spectrum-Textfield--valid_73bc77";
$e10bd19c72c588e6$export$58e50b10d30123df = "_spectrum-Textfield--invalid_73bc77";
$e10bd19c72c588e6$export$14fd30fea6f1348c = "_spectrum-Textfield--loadable_73bc77";
$e10bd19c72c588e6$export$cf0ead5b44db0da3 = "_spectrum-Textfield-validationIcon_73bc77";
$e10bd19c72c588e6$export$222d1ccd1870be1d = "_spectrum-Textfield-icon_73bc77";
$e10bd19c72c588e6$export$c1cdcaa5fe76a871 = "_spectrum-Textfield-inputIcon_73bc77";
$e10bd19c72c588e6$export$82a249fb4d6127 = "_spectrum-Textfield-circleLoader_73bc77";
$e10bd19c72c588e6$export$e7dc768d35940237 = "_is-focused_73bc77";
$e10bd19c72c588e6$export$f39a09f249340e2a = "_focus-ring_73bc77";
$e10bd19c72c588e6$export$d35bc1e505d1ebbf = "_is-disabled_73bc77";


function $fa2fac7df2df8582$export$f5b8910cec6cf069(props) {
    let defaultRef = $gSQrT$useRef();
    let { isDisabled: isDisabled , isQuiet: isQuiet , inputClassName: inputClassName , validationState: validationState , children: children , fieldProps: fieldProps , inputRef: inputRef = defaultRef , className: className , autoFocus: autoFocus , style: style  } = props;
    // Reserve padding for the error icon when the width of the input is unconstrained.
    // When constrained, don't reserve space because adding it only when invalid will
    // not cause a layout shift.
    let [reservePadding1, setReservePadding] = $gSQrT$useValueEffect(false);
    let onResize = $gSQrT$useCallback(()=>setReservePadding(function*(reservePadding) {
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
    $gSQrT$useLayoutEffect(onResize, [
        onResize
    ]);
    $gSQrT$useResizeObserver({
        ref: inputRef,
        onResize: onResize
    });
    // We also need to listen for resize events of the window so we can detect
    // when there is enough space for the padding to be re-added. Ideally we'd
    // use a resize observer on a parent element, but it's hard to know _what_
    // parent element.
    $gSQrT$useEvent($gSQrT$useRef(window), 'resize', onResize);
    let isInvalid = validationState === 'invalid';
    let textfieldClass = $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield', {
        'spectrum-Textfield--invalid': isInvalid,
        'spectrum-Textfield--valid': validationState === 'valid',
        'spectrum-Textfield--quiet': isQuiet
    }, $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-field'), className);
    let inputClass = $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-input', {
        'is-disabled': isDisabled,
        'is-invalid': isInvalid
    }, reservePadding1 && $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-input'), inputClassName);
    let iconClass = $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'spectrum-Textfield-validationIcon');
    let validationIcon = null;
    if (validationState === 'invalid') validationIcon = /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$spectrumiconsuiAlertMedium, {
        "data-testid": "invalid-icon",
        UNSAFE_className: iconClass
    });
    else if (validationState === 'valid') validationIcon = /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$spectrumiconsuiCheckmarkMedium, {
        "data-testid": "valid-icon",
        UNSAFE_className: iconClass
    });
    return(/*#__PURE__*/ $gSQrT$react.createElement("div", {
        ...$gSQrT$mergeProps(fieldProps),
        className: textfieldClass,
        style: style
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$FocusRing, {
        focusClass: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'is-focused'),
        focusRingClass: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($e10bd19c72c588e6$exports)), 'focus-ring'),
        isTextInput: true,
        within: true
    }, /*#__PURE__*/ $gSQrT$react.createElement("div", {
        role: "presentation",
        className: inputClass
    }, /*#__PURE__*/ $gSQrT$react.createElement("div", {
        role: "presentation",
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-inputContents'),
        ref: inputRef
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$FocusScope, {
        autoFocus: autoFocus
    }, children)))), validationIcon));
}





var $5114045f2eace5e5$exports = {};

$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup", () => $5114045f2eace5e5$export$5be359c1227eedcb, (v) => $5114045f2eace5e5$export$5be359c1227eedcb = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-FieldButton", () => $5114045f2eace5e5$export$a024c99ecf6b5741, (v) => $5114045f2eace5e5$export$a024c99ecf6b5741 = v);
$parcel$export($5114045f2eace5e5$exports, "is-disabled", () => $5114045f2eace5e5$export$d35bc1e505d1ebbf, (v) => $5114045f2eace5e5$export$d35bc1e505d1ebbf = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup--invalid", () => $5114045f2eace5e5$export$3b48509739a9cda0, (v) => $5114045f2eace5e5$export$3b48509739a9cda0 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup--quiet", () => $5114045f2eace5e5$export$ebf265ffc062029b, (v) => $5114045f2eace5e5$export$ebf265ffc062029b = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-field", () => $5114045f2eace5e5$export$ea77459595e26bec, (v) => $5114045f2eace5e5$export$ea77459595e26bec = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-input-validationIcon", () => $5114045f2eace5e5$export$f7ab13ee113f4884, (v) => $5114045f2eace5e5$export$f7ab13ee113f4884 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-input-circleLoader", () => $5114045f2eace5e5$export$dcc9e00cdad967fa, (v) => $5114045f2eace5e5$export$dcc9e00cdad967fa = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-input", () => $5114045f2eace5e5$export$92706f5c6fe4074, (v) => $5114045f2eace5e5$export$92706f5c6fe4074 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-icon", () => $5114045f2eace5e5$export$b91b6af799fd93a8, (v) => $5114045f2eace5e5$export$b91b6af799fd93a8 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-InputGroup-popover--quiet", () => $5114045f2eace5e5$export$5e116178f9b1556a, (v) => $5114045f2eace5e5$export$5e116178f9b1556a = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker--range", () => $5114045f2eace5e5$export$1d8b0b29e11d7cd, (v) => $5114045f2eace5e5$export$1d8b0b29e11d7cd = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker--datetimeRange", () => $5114045f2eace5e5$export$58dd7cd23c92699f, (v) => $5114045f2eace5e5$export$58dd7cd23c92699f = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker-startField", () => $5114045f2eace5e5$export$80f9c838a8406469, (v) => $5114045f2eace5e5$export$80f9c838a8406469 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker-endField", () => $5114045f2eace5e5$export$1c72fb41fa4f21ee, (v) => $5114045f2eace5e5$export$1c72fb41fa4f21ee = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker--rangeDash", () => $5114045f2eace5e5$export$202113e883898dc, (v) => $5114045f2eace5e5$export$202113e883898dc = v);
$parcel$export($5114045f2eace5e5$exports, "is-focused", () => $5114045f2eace5e5$export$e7dc768d35940237, (v) => $5114045f2eace5e5$export$e7dc768d35940237 = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-Datepicker-focusRing", () => $5114045f2eace5e5$export$eb262b15b9261fde, (v) => $5114045f2eace5e5$export$eb262b15b9261fde = v);
$parcel$export($5114045f2eace5e5$exports, "is-hovered", () => $5114045f2eace5e5$export$b8813cd5d7824ce7, (v) => $5114045f2eace5e5$export$b8813cd5d7824ce7 = v);
$parcel$export($5114045f2eace5e5$exports, "focus-ring", () => $5114045f2eace5e5$export$f39a09f249340e2a, (v) => $5114045f2eace5e5$export$f39a09f249340e2a = v);
$parcel$export($5114045f2eace5e5$exports, "is-selected", () => $5114045f2eace5e5$export$1e0fb04f31d3c22a, (v) => $5114045f2eace5e5$export$1e0fb04f31d3c22a = v);
$parcel$export($5114045f2eace5e5$exports, "spectrum-FieldButton--invalid", () => $5114045f2eace5e5$export$c9f503f672e8a3c1, (v) => $5114045f2eace5e5$export$c9f503f672e8a3c1 = v);
var $5114045f2eace5e5$export$5be359c1227eedcb;
var $5114045f2eace5e5$export$a024c99ecf6b5741;
var $5114045f2eace5e5$export$d35bc1e505d1ebbf;
var $5114045f2eace5e5$export$3b48509739a9cda0;
var $5114045f2eace5e5$export$ebf265ffc062029b;
var $5114045f2eace5e5$export$ea77459595e26bec;
var $5114045f2eace5e5$export$f7ab13ee113f4884;
var $5114045f2eace5e5$export$dcc9e00cdad967fa;
var $5114045f2eace5e5$export$92706f5c6fe4074;
var $5114045f2eace5e5$export$b91b6af799fd93a8;
var $5114045f2eace5e5$export$5e116178f9b1556a;
var $5114045f2eace5e5$export$1d8b0b29e11d7cd;
var $5114045f2eace5e5$export$58dd7cd23c92699f;
var $5114045f2eace5e5$export$80f9c838a8406469;
var $5114045f2eace5e5$export$1c72fb41fa4f21ee;
var $5114045f2eace5e5$export$202113e883898dc;
var $5114045f2eace5e5$export$e7dc768d35940237;
var $5114045f2eace5e5$export$eb262b15b9261fde;
var $5114045f2eace5e5$export$b8813cd5d7824ce7;
var $5114045f2eace5e5$export$f39a09f249340e2a;
var $5114045f2eace5e5$export$1e0fb04f31d3c22a;
var $5114045f2eace5e5$export$c9f503f672e8a3c1;
$5114045f2eace5e5$export$5be359c1227eedcb = "_spectrum-InputGroup_a0942f";
$5114045f2eace5e5$export$a024c99ecf6b5741 = "_spectrum-FieldButton_a0942f";
$5114045f2eace5e5$export$d35bc1e505d1ebbf = "_is-disabled_a0942f";
$5114045f2eace5e5$export$3b48509739a9cda0 = "_spectrum-InputGroup--invalid_a0942f";
$5114045f2eace5e5$export$ebf265ffc062029b = "_spectrum-InputGroup--quiet_a0942f";
$5114045f2eace5e5$export$ea77459595e26bec = "_spectrum-InputGroup-field_a0942f";
$5114045f2eace5e5$export$f7ab13ee113f4884 = "_spectrum-InputGroup-input-validationIcon_a0942f";
$5114045f2eace5e5$export$dcc9e00cdad967fa = "_spectrum-InputGroup-input-circleLoader_a0942f";
$5114045f2eace5e5$export$92706f5c6fe4074 = "_spectrum-InputGroup-input_a0942f";
$5114045f2eace5e5$export$b91b6af799fd93a8 = "_spectrum-InputGroup-icon_a0942f";
$5114045f2eace5e5$export$5e116178f9b1556a = "_spectrum-InputGroup-popover--quiet_a0942f";
$5114045f2eace5e5$export$1d8b0b29e11d7cd = "_spectrum-Datepicker--range_a0942f";
$5114045f2eace5e5$export$58dd7cd23c92699f = "_spectrum-Datepicker--datetimeRange_a0942f";
$5114045f2eace5e5$export$80f9c838a8406469 = "_spectrum-Datepicker-startField_a0942f";
$5114045f2eace5e5$export$1c72fb41fa4f21ee = "_spectrum-Datepicker-endField_a0942f";
$5114045f2eace5e5$export$202113e883898dc = "_spectrum-Datepicker--rangeDash_a0942f";
$5114045f2eace5e5$export$e7dc768d35940237 = "_is-focused_a0942f";
$5114045f2eace5e5$export$eb262b15b9261fde = "_spectrum-Datepicker-focusRing_a0942f";
$5114045f2eace5e5$export$b8813cd5d7824ce7 = "_is-hovered_a0942f";
$5114045f2eace5e5$export$f39a09f249340e2a = "_focus-ring_a0942f";
$5114045f2eace5e5$export$1e0fb04f31d3c22a = "_is-selected_a0942f";
$5114045f2eace5e5$export$c9f503f672e8a3c1 = "_spectrum-FieldButton--invalid_a0942f";


var $70cfe0cccde6fe2e$exports = {};

$parcel$export($70cfe0cccde6fe2e$exports, "TimeField", () => $70cfe0cccde6fe2e$export$5eaee2322dd727eb);











function $70cfe0cccde6fe2e$export$5eaee2322dd727eb(props) {
    props = $gSQrT$useProviderProps(props);
    let { autoFocus: autoFocus , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , isQuiet: isQuiet  } = props;
    let ref = $gSQrT$useRef();
    let { locale: locale  } = $gSQrT$useLocale();
    let state = $gSQrT$useTimeFieldState({
        ...props,
        locale: locale,
        createCalendar: $gSQrT$createCalendar
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $gSQrT$useDateField(props, state, ref);
    return(/*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Field, {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-TimeField-fieldWrapper')
    }, /*#__PURE__*/ $gSQrT$react.createElement($fa2fac7df2df8582$export$f5b8910cec6cf069, {
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: state.validationState,
        inputRef: ref,
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-TimeField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ $gSQrT$react.createElement($d8115ad0149eb8f6$export$6388987c5223b54e, {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })
    ))));
}










function $cc0f4b46c18c1205$export$322f4580ccd8dde6(props) {
    let formatter = $gSQrT$useDateFormatter({
        dateStyle: 'short'
    });
    let displayNames = $gSQrT$useDisplayNames();
    return $gSQrT$useMemo(()=>{
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
function $cc0f4b46c18c1205$export$12ce2869ce471b1f(maxVisibleMonths) {
    let { scale: scale  } = $gSQrT$useProvider();
    let [visibleMonths, setVisibleMonths] = $gSQrT$useState($cc0f4b46c18c1205$var$getVisibleMonths(scale));
    $gSQrT$useLayoutEffect(()=>{
        let onResize = ()=>setVisibleMonths($cc0f4b46c18c1205$var$getVisibleMonths(scale))
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
function $cc0f4b46c18c1205$var$getVisibleMonths(scale) {
    let monthWidth = scale === 'large' ? 336 : 280;
    let gap = scale === 'large' ? 30 : 24;
    let popoverPadding = scale === 'large' ? 32 : 48;
    return Math.floor((window.innerWidth - popoverPadding * 2) / (monthWidth + gap));
}





function $365791aa87841cac$export$5109c6dd95d8fb00(props) {
    props = $gSQrT$useProviderProps(props);
    let { autoFocus: autoFocus , isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , placeholderValue: placeholderValue , maxVisibleMonths: maxVisibleMonths = 1  } = props;
    let { hoverProps: hoverProps , isHovered: isHovered  } = $gSQrT$useHover({
        isDisabled: isDisabled
    });
    let targetRef = $gSQrT$useRef();
    let state = $gSQrT$useDatePickerState(props);
    let { groupProps: groupProps , labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps , buttonProps: buttonProps , dialogProps: dialogProps  } = $gSQrT$useDatePicker(props, state, targetRef);
    let { value: value , setValue: setValue , isOpen: isOpen , setOpen: setOpen  } = state;
    let { direction: direction  } = $gSQrT$useLocale();
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $gSQrT$useFocusRing({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let className = $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': state.validationState === 'invalid',
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible
    });
    let fieldClassName = $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input', {
        'is-disabled': isDisabled,
        'is-invalid': state.validationState === 'invalid'
    });
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = $cc0f4b46c18c1205$export$322f4580ccd8dde6(props);
    if (description && !props.description) descriptionProps.id = null;
    let placeholder = placeholderValue;
    let timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null;
    let timeMinValue = props.minValue && 'hour' in props.minValue ? props.minValue : null;
    let timeMaxValue = props.maxValue && 'hour' in props.maxValue ? props.maxValue : null;
    let timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' || state.granularity === 'millisecond' ? state.granularity : null;
    let showTimeField = !!timeGranularity;
    let visibleMonths = $cc0f4b46c18c1205$export$12ce2869ce471b1f(maxVisibleMonths);
    return(/*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Field, {
        ...props,
        ref: targetRef,
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ $gSQrT$react.createElement("div", {
        ...$gSQrT$mergeProps(groupProps, hoverProps, focusProps),
        className: className
    }, /*#__PURE__*/ $gSQrT$react.createElement($fa2fac7df2df8582$export$f5b8910cec6cf069, {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: state.validationState,
        autoFocus: autoFocus,
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName
    }, /*#__PURE__*/ $gSQrT$react.createElement($46d8d39da3e1229e$export$34dc4cfa15ead1, {
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
    })), /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$DialogTrigger, {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$FieldButton, {
        ...buttonProps,
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: state.validationState,
        isDisabled: isDisabled || isReadOnly
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$spectrumiconsworkflowCalendar, null)), /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Dialog, {
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Content, {
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Calendar, {
        autoFocus: true,
        value: state.dateValue,
        onChange: state.setDateValue,
        visibleMonths: visibleMonths,
        minValue: props.minValue,
        maxValue: props.maxValue
    }), showTimeField && /*#__PURE__*/ $gSQrT$react.createElement("div", {
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ $gSQrT$react.createElement($70cfe0cccde6fe2e$export$5eaee2322dd727eb, {
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


var $72030b1a88445960$exports = {};

$parcel$export($72030b1a88445960$exports, "DateRangePicker", () => $72030b1a88445960$export$17334619f3ac2224);






















function $72030b1a88445960$export$17334619f3ac2224(props) {
    props = $gSQrT$useProviderProps(props);
    let { isQuiet: isQuiet , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , autoFocus: autoFocus , placeholderValue: placeholderValue , maxVisibleMonths: maxVisibleMonths = 1 , ...otherProps } = props;
    let { styleProps: styleProps  } = $gSQrT$useStyleProps(otherProps);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $gSQrT$useHover({
        isDisabled: isDisabled
    });
    let targetRef = $gSQrT$useRef();
    let state = $gSQrT$useDateRangePickerState(props);
    let { labelProps: labelProps , groupProps: groupProps , buttonProps: buttonProps , dialogProps: dialogProps , startFieldProps: startFieldProps , endFieldProps: endFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $gSQrT$useDateRangePicker(props, state, targetRef);
    let { value: value , isOpen: isOpen , setOpen: setOpen  } = state;
    let { direction: direction  } = $gSQrT$useLocale();
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $gSQrT$useFocusRing({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let className = $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': state.validationState === 'invalid',
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible
    }, styleProps.className);
    let fieldClassName = $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-input', {
        'is-disabled': isDisabled,
        'is-invalid': state.validationState === 'invalid'
    });
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = $cc0f4b46c18c1205$export$322f4580ccd8dde6(props);
    if (description && !props.description) descriptionProps.id = null;
    let placeholder = placeholderValue;
    let timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null;
    let timeMinValue = props.minValue && 'hour' in props.minValue ? props.minValue : null;
    let timeMaxValue = props.maxValue && 'hour' in props.maxValue ? props.maxValue : null;
    let timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' || state.granularity === 'millisecond' ? state.granularity : null;
    let showTimeField = !!timeGranularity;
    let visibleMonths = $cc0f4b46c18c1205$export$12ce2869ce471b1f(maxVisibleMonths);
    return(/*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Field, {
        ...props,
        ref: targetRef,
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ $gSQrT$react.createElement("div", {
        ...styleProps,
        ...$gSQrT$mergeProps(groupProps, hoverProps, focusProps),
        className: className
    }, /*#__PURE__*/ $gSQrT$react.createElement($fa2fac7df2df8582$export$f5b8910cec6cf069, {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: state.validationState,
        autoFocus: autoFocus,
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName
    }, /*#__PURE__*/ $gSQrT$react.createElement($46d8d39da3e1229e$export$34dc4cfa15ead1, {
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
        inputClassName: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-startField')
    }), /*#__PURE__*/ $gSQrT$react.createElement($72030b1a88445960$var$DateRangeDash, null), /*#__PURE__*/ $gSQrT$react.createElement($46d8d39da3e1229e$export$34dc4cfa15ead1, {
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
        inputClassName: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-Datepicker-endField', $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-endField'))
    })), /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$DialogTrigger, {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$FieldButton, {
        ...buttonProps,
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($5114045f2eace5e5$exports)), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: state.validationState,
        isDisabled: isDisabled || isReadOnly
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$spectrumiconsworkflowCalendar, null)), /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Dialog, {
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Content, {
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$RangeCalendar, {
        autoFocus: true,
        value: state.dateRange,
        onChange: state.setDateRange,
        visibleMonths: visibleMonths,
        minValue: props.minValue,
        maxValue: props.maxValue
    }), showTimeField && /*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Flex, {
        gap: "size-100",
        marginTop: "size-100",
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ $gSQrT$react.createElement($70cfe0cccde6fe2e$export$5eaee2322dd727eb, {
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
    }), /*#__PURE__*/ $gSQrT$react.createElement($70cfe0cccde6fe2e$export$5eaee2322dd727eb, {
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
function $72030b1a88445960$var$DateRangeDash() {
    return(/*#__PURE__*/ $gSQrT$react.createElement("div", {
        "aria-hidden": "true",
        "data-testid": "date-range-dash",
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-rangeDash')
    }));
}



var $ed4c4b8bd029572a$exports = {};

$parcel$export($ed4c4b8bd029572a$exports, "DateField", () => $ed4c4b8bd029572a$export$d9781c7894a82487);












function $ed4c4b8bd029572a$export$d9781c7894a82487(props) {
    props = $gSQrT$useProviderProps(props);
    let { autoFocus: autoFocus , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , isQuiet: isQuiet  } = props;
    let ref = $gSQrT$useRef();
    let { locale: locale  } = $gSQrT$useLocale();
    let state = $gSQrT$useDatePickerFieldState({
        ...props,
        locale: locale,
        createCalendar: $gSQrT$createCalendar
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $gSQrT$useDateField(props, state, ref);
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = $cc0f4b46c18c1205$export$322f4580ccd8dde6(props);
    if (description && !props.description) descriptionProps.id = null;
    return(/*#__PURE__*/ $gSQrT$react.createElement($gSQrT$Field, {
        ...props,
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: state.validationState,
        UNSAFE_className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ $gSQrT$react.createElement($fa2fac7df2df8582$export$f5b8910cec6cf069, {
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: state.validationState,
        inputRef: ref,
        className: $gSQrT$classNames((/*@__PURE__*/$parcel$interopDefault($4510a76080a34b98$exports)), 'react-spectrum-DateField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ $gSQrT$react.createElement($d8115ad0149eb8f6$export$6388987c5223b54e, {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })
    ))));
}




export {$365791aa87841cac$export$5109c6dd95d8fb00 as DatePicker, $72030b1a88445960$export$17334619f3ac2224 as DateRangePicker, $70cfe0cccde6fe2e$export$5eaee2322dd727eb as TimeField, $ed4c4b8bd029572a$export$d9781c7894a82487 as DateField};
//# sourceMappingURL=module.js.map
