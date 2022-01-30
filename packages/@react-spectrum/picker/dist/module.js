import "./main.css";
import {Item as $7ba247cc08489d71$re_export$Item, Section as $7ba247cc08489d71$re_export$Section} from "@react-stately/collections";
import $c9mA4$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $c9mA4$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import {useSlotProps as $c9mA4$useSlotProps, useDOMRef as $c9mA4$useDOMRef, useUnwrapDOMRef as $c9mA4$useUnwrapDOMRef, useIsMobileDevice as $c9mA4$useIsMobileDevice, dimensionValue as $c9mA4$dimensionValue, classNames as $c9mA4$classNames, SlotProvider as $c9mA4$SlotProvider} from "@react-spectrum/utils";
import {useOverlayPosition as $c9mA4$useOverlayPosition, DismissButton as $c9mA4$DismissButton} from "@react-aria/overlays";
import {Field as $c9mA4$Field} from "@react-spectrum/label";
import {FieldButton as $c9mA4$FieldButton} from "@react-spectrum/button";
import {FocusScope as $c9mA4$FocusScope} from "@react-aria/focus";
import {useSelect as $c9mA4$useSelect, HiddenSelect as $c9mA4$HiddenSelect} from "@react-aria/select";
import {useListBoxLayout as $c9mA4$useListBoxLayout, ListBoxBase as $c9mA4$ListBoxBase} from "@react-spectrum/listbox";
import {useLayoutEffect as $c9mA4$useLayoutEffect, useResizeObserver as $c9mA4$useResizeObserver, mergeProps as $c9mA4$mergeProps} from "@react-aria/utils";
import {Tray as $c9mA4$Tray, Popover as $c9mA4$Popover} from "@react-spectrum/overlays";
import {useHover as $c9mA4$useHover, PressResponder as $c9mA4$PressResponder} from "@react-aria/interactions";
import {ProgressCircle as $c9mA4$ProgressCircle} from "@react-spectrum/progress";
import $c9mA4$react, {useRef as $c9mA4$useRef, useState as $c9mA4$useState, useCallback as $c9mA4$useCallback} from "react";
import {Text as $c9mA4$Text} from "@react-spectrum/text";
import {useMessageFormatter as $c9mA4$useMessageFormatter} from "@react-aria/i18n";
import {useProviderProps as $c9mA4$useProviderProps, useProvider as $c9mA4$useProvider} from "@react-spectrum/provider";
import {useSelectState as $c9mA4$useSelectState} from "@react-stately/select";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b1cfee53c07a7749$exports = {};

$parcel$export($b1cfee53c07a7749$exports, "Picker", () => $b1cfee53c07a7749$export$ba25329847403e11);








var $b204cd6ed50b2f14$exports = {};
var $408f2602a04d2cf9$exports = {};
$408f2602a04d2cf9$exports = JSON.parse("{\"loading\":\"جارٍ التحميل...\",\"placeholder\":\"حدد خيارًا...\"}");


var $27638e7d57c33961$exports = {};
$27638e7d57c33961$exports = JSON.parse("{\"loading\":\"Зареждане...\",\"placeholder\":\"Изберете опция\"}");


var $75f031bc8fb63924$exports = {};
$75f031bc8fb63924$exports = JSON.parse("{\"loading\":\"Načítání...\",\"placeholder\":\"Vyberte vhodnou možnost...\"}");


var $28f51224a37b1177$exports = {};
$28f51224a37b1177$exports = JSON.parse("{\"loading\":\"Indlæser ...\",\"placeholder\":\"Vælg en mulighed ...\"}");


var $9b21b544f67b28da$exports = {};
$9b21b544f67b28da$exports = JSON.parse("{\"loading\":\"Laden...\",\"placeholder\":\"Option auswählen...\"}");


var $7eb981403d6b83ce$exports = {};
$7eb981403d6b83ce$exports = JSON.parse("{\"loading\":\"Φόρτωση...\",\"placeholder\":\"Επιλέξτε…\"}");


var $b81361c8a678a12b$exports = {};
$b81361c8a678a12b$exports = JSON.parse("{\"placeholder\":\"Select an option…\",\"loading\":\"Loading…\"}");


var $60b898d3eab1f96b$exports = {};
$60b898d3eab1f96b$exports = JSON.parse("{\"loading\":\"Cargando…\",\"placeholder\":\"Seleccione una opción…\"}");


var $3051583e66d82072$exports = {};
$3051583e66d82072$exports = JSON.parse("{\"loading\":\"Laadimine...\",\"placeholder\":\"Valige valikuline...\"}");


var $b14446b19bc9484f$exports = {};
$b14446b19bc9484f$exports = JSON.parse("{\"loading\":\"Ladataan…\",\"placeholder\":\"Valitse vaihtoehto...\"}");


var $f8690164de63a253$exports = {};
$f8690164de63a253$exports = JSON.parse("{\"loading\":\"Chargement...\",\"placeholder\":\"Sélectionnez une option...\"}");


var $feb20e55fa81048c$exports = {};
$feb20e55fa81048c$exports = JSON.parse("{\"loading\":\"טוען...\",\"placeholder\":\"בחר אפשרות...\"}");


var $828020522f6ccf69$exports = {};
$828020522f6ccf69$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"placeholder\":\"Odaberite opciju\"}");


var $b802ae8f7d8d2148$exports = {};
$b802ae8f7d8d2148$exports = JSON.parse("{\"loading\":\"Betöltés folyamatban…\",\"placeholder\":\"Válasszon egy opciót…\"}");


var $8f749e688a0dc510$exports = {};
$8f749e688a0dc510$exports = JSON.parse("{\"loading\":\"Caricamento...\",\"placeholder\":\"Seleziona un’opzione...\"}");


var $0607914d0de84ecb$exports = {};
$0607914d0de84ecb$exports = JSON.parse("{\"loading\":\"読み込み中...\",\"placeholder\":\"オプションを選択...\"}");


var $e5acf8888e20ec56$exports = {};
$e5acf8888e20ec56$exports = JSON.parse("{\"loading\":\"로드 중\",\"placeholder\":\"선택 사항 선택\"}");


var $2a7fda48c758a104$exports = {};
$2a7fda48c758a104$exports = JSON.parse("{\"loading\":\"Įkeliama...\",\"placeholder\":\"Pasirinkite parinktį...\"}");


var $23aafbdfaab19956$exports = {};
$23aafbdfaab19956$exports = JSON.parse("{\"loading\":\"Notiek ielāde...\",\"placeholder\":\"Atlasiet opciju...\"}");


var $70364f091378fa85$exports = {};
$70364f091378fa85$exports = JSON.parse("{\"loading\":\"Laster inn ...\",\"placeholder\":\"Velg et alternativ...\"}");


var $dbe42d08f719f890$exports = {};
$dbe42d08f719f890$exports = JSON.parse("{\"loading\":\"Laden...\",\"placeholder\":\"Optie selecteren...\"}");


var $36c41bae492d0ee0$exports = {};
$36c41bae492d0ee0$exports = JSON.parse("{\"loading\":\"Ładowanie...\",\"placeholder\":\"Wybierz opcję...\"}");


var $de6a2b69b33f6e6f$exports = {};
$de6a2b69b33f6e6f$exports = JSON.parse("{\"loading\":\"Carregando...\",\"placeholder\":\"Selecione uma opção...\"}");


var $ed4ec0674598fefb$exports = {};
$ed4ec0674598fefb$exports = JSON.parse("{\"loading\":\"A carregar...\",\"placeholder\":\"Selecionar uma opção...\"}");


var $b220922cfe499176$exports = {};
$b220922cfe499176$exports = JSON.parse("{\"loading\":\"Se încarcă...\",\"placeholder\":\"Selectați o opțiune\"}");


var $e51799388cd4bfc9$exports = {};
$e51799388cd4bfc9$exports = JSON.parse("{\"loading\":\"Загрузка...\",\"placeholder\":\"Выбрать параметр...\"}");


var $7aecf37fbe93357f$exports = {};
$7aecf37fbe93357f$exports = JSON.parse("{\"loading\":\"Načítava sa...\",\"placeholder\":\"Vyberte možnosť...\"}");


var $d921f0190f56d0e4$exports = {};
$d921f0190f56d0e4$exports = JSON.parse("{\"loading\":\"Nalaganje...\",\"placeholder\":\"Izberite možnost\"}");


var $4975bea806df63d3$exports = {};
$4975bea806df63d3$exports = JSON.parse("{\"loading\":\"Učitavam...\",\"placeholder\":\"Izaberite opciju\"}");


var $b17e269f2f19aa9e$exports = {};
$b17e269f2f19aa9e$exports = JSON.parse("{\"loading\":\"Läser in...\",\"placeholder\":\"Välj ett alternativ...\"}");


var $5b6829db9ee5a16d$exports = {};
$5b6829db9ee5a16d$exports = JSON.parse("{\"loading\":\"Yükleniyor...\",\"placeholder\":\"Bir seçim yapın…\"}");


var $81af8937824eebe2$exports = {};
$81af8937824eebe2$exports = JSON.parse("{\"loading\":\"Завантаження…\",\"placeholder\":\"Виберіть опцію...\"}");


var $ef121561f6692b0e$exports = {};
$ef121561f6692b0e$exports = JSON.parse("{\"loading\":\"正在加载...\",\"placeholder\":\"选择一个选项...\"}");


var $b189e91c04b6a759$exports = {};
$b189e91c04b6a759$exports = JSON.parse("{\"loading\":\"正在載入\",\"placeholder\":\"選取一個選項\"}");


$b204cd6ed50b2f14$exports = {
    "ar-AE": $408f2602a04d2cf9$exports,
    "bg-BG": $27638e7d57c33961$exports,
    "cs-CZ": $75f031bc8fb63924$exports,
    "da-DK": $28f51224a37b1177$exports,
    "de-DE": $9b21b544f67b28da$exports,
    "el-GR": $7eb981403d6b83ce$exports,
    "en-US": $b81361c8a678a12b$exports,
    "es-ES": $60b898d3eab1f96b$exports,
    "et-EE": $3051583e66d82072$exports,
    "fi-FI": $b14446b19bc9484f$exports,
    "fr-FR": $f8690164de63a253$exports,
    "he-IL": $feb20e55fa81048c$exports,
    "hr-HR": $828020522f6ccf69$exports,
    "hu-HU": $b802ae8f7d8d2148$exports,
    "it-IT": $8f749e688a0dc510$exports,
    "ja-JP": $0607914d0de84ecb$exports,
    "ko-KR": $e5acf8888e20ec56$exports,
    "lt-LT": $2a7fda48c758a104$exports,
    "lv-LV": $23aafbdfaab19956$exports,
    "nb-NO": $70364f091378fa85$exports,
    "nl-NL": $dbe42d08f719f890$exports,
    "pl-PL": $36c41bae492d0ee0$exports,
    "pt-BR": $de6a2b69b33f6e6f$exports,
    "pt-PT": $ed4ec0674598fefb$exports,
    "ro-RO": $b220922cfe499176$exports,
    "ru-RU": $e51799388cd4bfc9$exports,
    "sk-SK": $7aecf37fbe93357f$exports,
    "sl-SI": $d921f0190f56d0e4$exports,
    "sr-SP": $4975bea806df63d3$exports,
    "sv-SE": $b17e269f2f19aa9e$exports,
    "tr-TR": $5b6829db9ee5a16d$exports,
    "uk-UA": $81af8937824eebe2$exports,
    "zh-CN": $ef121561f6692b0e$exports,
    "zh-TW": $b189e91c04b6a759$exports
};








var $90e688dbd5b2f276$exports = {};

$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown", () => $90e688dbd5b2f276$export$f33c6833ddc773bd, (v) => $90e688dbd5b2f276$export$f33c6833ddc773bd = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-chevron", () => $90e688dbd5b2f276$export$abbb0cf96dbbb8a0, (v) => $90e688dbd5b2f276$export$abbb0cf96dbbb8a0 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-trigger", () => $90e688dbd5b2f276$export$37a6d27a7cb47ce5, (v) => $90e688dbd5b2f276$export$37a6d27a7cb47ce5 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-label", () => $90e688dbd5b2f276$export$1235a00795b885e7, (v) => $90e688dbd5b2f276$export$1235a00795b885e7 = v);
$parcel$export($90e688dbd5b2f276$exports, "is-placeholder", () => $90e688dbd5b2f276$export$e5b2f5233e4e5194, (v) => $90e688dbd5b2f276$export$e5b2f5233e4e5194 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Icon", () => $90e688dbd5b2f276$export$d374b04f30360026, (v) => $90e688dbd5b2f276$export$d374b04f30360026 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-invalidIcon", () => $90e688dbd5b2f276$export$a32fdb5a063ea755, (v) => $90e688dbd5b2f276$export$a32fdb5a063ea755 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-progressCircle", () => $90e688dbd5b2f276$export$18281c34cabbd13f, (v) => $90e688dbd5b2f276$export$18281c34cabbd13f = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown--quiet", () => $90e688dbd5b2f276$export$b2306417a70c7a62, (v) => $90e688dbd5b2f276$export$b2306417a70c7a62 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-popover--quiet", () => $90e688dbd5b2f276$export$cbeaf986973c0633, (v) => $90e688dbd5b2f276$export$cbeaf986973c0633 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Field", () => $90e688dbd5b2f276$export$f6d480ae1e56eba0, (v) => $90e688dbd5b2f276$export$f6d480ae1e56eba0 = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-fieldWrapper--quiet", () => $90e688dbd5b2f276$export$66ddc2410b0e9eba, (v) => $90e688dbd5b2f276$export$66ddc2410b0e9eba = v);
$parcel$export($90e688dbd5b2f276$exports, "spectrum-Dropdown-fieldWrapper--positionSide", () => $90e688dbd5b2f276$export$c0b4e9596538c7b1, (v) => $90e688dbd5b2f276$export$c0b4e9596538c7b1 = v);
$parcel$export($90e688dbd5b2f276$exports, "is-hovered", () => $90e688dbd5b2f276$export$b8813cd5d7824ce7, (v) => $90e688dbd5b2f276$export$b8813cd5d7824ce7 = v);
$parcel$export($90e688dbd5b2f276$exports, "is-selected", () => $90e688dbd5b2f276$export$1e0fb04f31d3c22a, (v) => $90e688dbd5b2f276$export$1e0fb04f31d3c22a = v);
$parcel$export($90e688dbd5b2f276$exports, "is-invalid", () => $90e688dbd5b2f276$export$14a30de2866685fa, (v) => $90e688dbd5b2f276$export$14a30de2866685fa = v);
$parcel$export($90e688dbd5b2f276$exports, "is-disabled", () => $90e688dbd5b2f276$export$d35bc1e505d1ebbf, (v) => $90e688dbd5b2f276$export$d35bc1e505d1ebbf = v);
$parcel$export($90e688dbd5b2f276$exports, "focus-ring", () => $90e688dbd5b2f276$export$f39a09f249340e2a, (v) => $90e688dbd5b2f276$export$f39a09f249340e2a = v);
var $90e688dbd5b2f276$export$f33c6833ddc773bd;
var $90e688dbd5b2f276$export$abbb0cf96dbbb8a0;
var $90e688dbd5b2f276$export$37a6d27a7cb47ce5;
var $90e688dbd5b2f276$export$1235a00795b885e7;
var $90e688dbd5b2f276$export$e5b2f5233e4e5194;
var $90e688dbd5b2f276$export$d374b04f30360026;
var $90e688dbd5b2f276$export$a32fdb5a063ea755;
var $90e688dbd5b2f276$export$18281c34cabbd13f;
var $90e688dbd5b2f276$export$b2306417a70c7a62;
var $90e688dbd5b2f276$export$cbeaf986973c0633;
var $90e688dbd5b2f276$export$f6d480ae1e56eba0;
var $90e688dbd5b2f276$export$66ddc2410b0e9eba;
var $90e688dbd5b2f276$export$c0b4e9596538c7b1;
var $90e688dbd5b2f276$export$b8813cd5d7824ce7;
var $90e688dbd5b2f276$export$1e0fb04f31d3c22a;
var $90e688dbd5b2f276$export$14a30de2866685fa;
var $90e688dbd5b2f276$export$d35bc1e505d1ebbf;
var $90e688dbd5b2f276$export$f39a09f249340e2a;
$90e688dbd5b2f276$export$f33c6833ddc773bd = "_spectrum-Dropdown_6d8ec0";
$90e688dbd5b2f276$export$abbb0cf96dbbb8a0 = "_spectrum-Dropdown-chevron_6d8ec0";
$90e688dbd5b2f276$export$37a6d27a7cb47ce5 = "_spectrum-Dropdown-trigger_6d8ec0";
$90e688dbd5b2f276$export$1235a00795b885e7 = "_spectrum-Dropdown-label_6d8ec0";
$90e688dbd5b2f276$export$e5b2f5233e4e5194 = "_is-placeholder_6d8ec0";
$90e688dbd5b2f276$export$d374b04f30360026 = "_spectrum-Icon_6d8ec0";
$90e688dbd5b2f276$export$a32fdb5a063ea755 = "_spectrum-Dropdown-invalidIcon_6d8ec0";
$90e688dbd5b2f276$export$18281c34cabbd13f = "_spectrum-Dropdown-progressCircle_6d8ec0";
$90e688dbd5b2f276$export$b2306417a70c7a62 = "_spectrum-Dropdown--quiet_6d8ec0";
$90e688dbd5b2f276$export$cbeaf986973c0633 = "_spectrum-Dropdown-popover--quiet_6d8ec0";
$90e688dbd5b2f276$export$f6d480ae1e56eba0 = "_spectrum-Field_6d8ec0";
$90e688dbd5b2f276$export$66ddc2410b0e9eba = "_spectrum-Dropdown-fieldWrapper--quiet_6d8ec0";
$90e688dbd5b2f276$export$c0b4e9596538c7b1 = "_spectrum-Dropdown-fieldWrapper--positionSide_6d8ec0";
$90e688dbd5b2f276$export$b8813cd5d7824ce7 = "_is-hovered_6d8ec0";
$90e688dbd5b2f276$export$1e0fb04f31d3c22a = "_is-selected_6d8ec0";
$90e688dbd5b2f276$export$14a30de2866685fa = "_is-invalid_6d8ec0";
$90e688dbd5b2f276$export$d35bc1e505d1ebbf = "_is-disabled_6d8ec0";
$90e688dbd5b2f276$export$f39a09f249340e2a = "_focus-ring_6d8ec0";






function $b1cfee53c07a7749$var$Picker(props, ref) {
    props = $c9mA4$useSlotProps(props, 'picker');
    props = $c9mA4$useProviderProps(props);
    let formatMessage = $c9mA4$useMessageFormatter((/*@__PURE__*/$parcel$interopDefault($b204cd6ed50b2f14$exports)));
    let { autoComplete: autoComplete , isDisabled: isDisabled , direction: direction = 'bottom' , align: align = 'start' , shouldFlip: shouldFlip = true , placeholder: placeholder = formatMessage('placeholder') , validationState: validationState , isQuiet: isQuiet , label: label , labelPosition: labelPosition = 'top' , menuWidth: menuWidth , name: name , autoFocus: autoFocus  } = props;
    let state = $c9mA4$useSelectState(props);
    let domRef = $c9mA4$useDOMRef(ref);
    let popoverRef = $c9mA4$useRef();
    let unwrappedPopoverRef = $c9mA4$useUnwrapDOMRef(popoverRef);
    let triggerRef = $c9mA4$useRef();
    let unwrappedTriggerRef = $c9mA4$useUnwrapDOMRef(triggerRef);
    let listboxRef = $c9mA4$useRef();
    // We create the listbox layout in Picker and pass it to ListBoxBase below
    // so that the layout information can be cached even while the listbox is not mounted.
    // We also use the layout as the keyboard delegate for type to select.
    let layout = $c9mA4$useListBoxLayout(state);
    let { labelProps: labelProps , triggerProps: triggerProps , valueProps: valueProps , menuProps: menuProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $c9mA4$useSelect({
        ...props,
        keyboardDelegate: layout
    }, state, unwrappedTriggerRef);
    let isMobile = $c9mA4$useIsMobileDevice();
    let { overlayProps: overlayProps , placement: placement , updatePosition: updatePosition  } = $c9mA4$useOverlayPosition({
        targetRef: unwrappedTriggerRef,
        overlayRef: unwrappedPopoverRef,
        scrollRef: listboxRef,
        placement: `${direction} ${align}`,
        shouldFlip: shouldFlip,
        isOpen: state.isOpen && !isMobile,
        onClose: state.close
    });
    let { hoverProps: hoverProps , isHovered: isHovered  } = $c9mA4$useHover({
        isDisabled: isDisabled
    });
    // Update position once the ListBox has rendered. This ensures that
    // it flips properly when it doesn't fit in the available space.
    // TODO: add ResizeObserver to useOverlayPosition so we don't need this.
    $c9mA4$useLayoutEffect(()=>{
        if (state.isOpen) requestAnimationFrame(()=>{
            updatePosition();
        });
    }, [
        state.isOpen,
        updatePosition
    ]);
    let isLoadingInitial = props.isLoading && state.collection.size === 0;
    let isLoadingMore = props.isLoading && state.collection.size > 0;
    // On small screen devices, the listbox is rendered in a tray, otherwise a popover.
    let listbox = /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$FocusScope, {
        restoreFocus: true,
        contain: isMobile
    }, /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$DismissButton, {
        onDismiss: ()=>state.close()
    }), /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$ListBoxBase, {
        ...menuProps,
        ref: listboxRef,
        disallowEmptySelection: true,
        autoFocus: state.focusStrategy || true,
        shouldSelectOnPressUp: true,
        focusOnPointerEnter: true,
        layout: layout,
        state: state,
        width: isMobile ? '100%' : undefined,
        // Set max height: inherit so Tray scrolling works
        UNSAFE_style: {
            maxHeight: 'inherit'
        },
        isLoading: isLoadingMore,
        onLoadMore: props.onLoadMore
    }), /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$DismissButton, {
        onDismiss: ()=>state.close()
    }));
    // Measure the width of the button to inform the width of the menu (below).
    let [buttonWidth, setButtonWidth] = $c9mA4$useState(null);
    let { scale: scale  } = $c9mA4$useProvider();
    let onResize = $c9mA4$useCallback(()=>{
        if (!isMobile && unwrappedTriggerRef.current) {
            let width = unwrappedTriggerRef.current.offsetWidth;
            setButtonWidth(width);
        }
    }, [
        unwrappedTriggerRef,
        setButtonWidth,
        isMobile
    ]);
    $c9mA4$useResizeObserver({
        ref: unwrappedTriggerRef,
        onResize: onResize
    });
    $c9mA4$useLayoutEffect(onResize, [
        scale,
        state.selectedKey,
        onResize
    ]);
    let overlay;
    if (isMobile) overlay = /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$Tray, {
        isOpen: state.isOpen,
        onClose: state.close
    }, listbox);
    else {
        // If quiet, use the default width, otherwise match the width of the button. This can be overridden by the menuWidth prop.
        // Always have a minimum width of the button width. When quiet, there is an extra offset to add.
        // Not using style props for this because they don't support `calc`.
        let width = isQuiet ? null : buttonWidth;
        let style = {
            ...overlayProps.style,
            width: menuWidth ? $c9mA4$dimensionValue(menuWidth) : width,
            minWidth: isQuiet ? `calc(${buttonWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : buttonWidth
        };
        overlay = /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$Popover, {
            isOpen: state.isOpen,
            UNSAFE_style: style,
            UNSAFE_className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Dropdown-popover', {
                'spectrum-Dropdown-popover--quiet': isQuiet
            }),
            ref: popoverRef,
            placement: placement,
            hideArrow: true,
            shouldCloseOnBlur: true,
            onClose: state.close
        }, listbox);
    }
    let contents = state.selectedItem ? state.selectedItem.rendered : placeholder;
    if (typeof contents === 'string') contents = /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$Text, null, contents);
    let picker = /*#__PURE__*/ $c9mA4$react.createElement("div", {
        className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Dropdown', {
            'is-invalid': validationState === 'invalid',
            'is-disabled': isDisabled,
            'spectrum-Dropdown--quiet': isQuiet
        })
    }, /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$HiddenSelect, {
        autoComplete: autoComplete,
        isDisabled: isDisabled,
        state: state,
        triggerRef: unwrappedTriggerRef,
        label: label,
        name: name
    }), /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$PressResponder, $c9mA4$mergeProps(hoverProps, triggerProps), /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$FieldButton, {
        ref: triggerRef,
        isActive: state.isOpen,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        validationState: validationState,
        autoFocus: autoFocus,
        UNSAFE_className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Dropdown-trigger', {
            'is-hovered': isHovered
        })
    }, /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$SlotProvider, {
        slots: {
            icon: {
                UNSAFE_className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Icon'),
                size: 'S'
            },
            text: {
                ...valueProps,
                UNSAFE_className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Dropdown-label', {
                    'is-placeholder': !state.selectedItem
                })
            },
            description: {
                isHidden: true
            }
        }
    }, contents), isLoadingInitial && /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$ProgressCircle, {
        isIndeterminate: true,
        size: "S",
        "aria-label": formatMessage('loading'),
        UNSAFE_className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Dropdown-progressCircle')
    }), validationState === 'invalid' && !isLoadingInitial && /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$spectrumiconsuiAlertMedium, {
        UNSAFE_className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Dropdown-invalidIcon')
    }), /*#__PURE__*/ $c9mA4$react.createElement($c9mA4$spectrumiconsuiChevronDownMedium, {
        UNSAFE_className: $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Dropdown-chevron')
    }))), state.collection.size === 0 ? null : overlay);
    let wrapperClassName = label ? $c9mA4$classNames((/*@__PURE__*/$parcel$interopDefault($90e688dbd5b2f276$exports)), 'spectrum-Field', {
        'spectrum-Dropdown-fieldWrapper--quiet': isQuiet,
        'spectrum-Dropdown-fieldWrapper--positionSide': labelPosition === 'side'
    }) : '';
    return(/*#__PURE__*/ $c9mA4$react.createElement($c9mA4$Field, {
        ...props,
        ref: domRef,
        wrapperClassName: wrapperClassName,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        showErrorIcon: false,
        includeNecessityIndicatorInAccessibilityName: true,
        elementType: "span"
    }, picker));
}
/**
 * Pickers allow users to choose a single option from a collapsible list of options when space is limited.
 */ // forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const $b1cfee53c07a7749$export$ba25329847403e11 = /*#__PURE__*/ $c9mA4$react.forwardRef($b1cfee53c07a7749$var$Picker);





export {$7ba247cc08489d71$re_export$Item as Item, $7ba247cc08489d71$re_export$Section as Section, $b1cfee53c07a7749$export$ba25329847403e11 as Picker};
//# sourceMappingURL=module.js.map
