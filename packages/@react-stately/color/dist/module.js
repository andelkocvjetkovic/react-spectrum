import {clamp as $2Devo$clamp, toFixedNumber as $2Devo$toFixedNumber, useControlledState as $2Devo$useControlledState} from "@react-stately/utils";
import {MessageDictionary as $2Devo$MessageDictionary} from "@internationalized/message";
import {NumberFormatter as $2Devo$NumberFormatter} from "@internationalized/number";
import {useSliderState as $2Devo$useSliderState} from "@react-stately/slider";
import {useRef as $2Devo$useRef, useState as $2Devo$useState, useEffect as $2Devo$useEffect, useMemo as $2Devo$useMemo} from "react";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9273e075a4af31b6$exports = {};

$parcel$export($9273e075a4af31b6$exports, "parseColor", () => $9273e075a4af31b6$export$6e865ea70d7724f);

var $38bfb60c1cd25df2$exports = {};
var $df75d0a7d043eac9$exports = {};
$df75d0a7d043eac9$exports = JSON.parse("{\"alpha\":\"ألفا\",\"blue\":\"أزرق\",\"brightness\":\"السطوع\",\"green\":\"أخضر\",\"hue\":\"درجة اللون\",\"lightness\":\"الإضاءة\",\"red\":\"أحمر\",\"saturation\":\"التشبع\"}");


var $b017ceee4e1d134d$exports = {};
$b017ceee4e1d134d$exports = JSON.parse("{\"alpha\":\"Алфа\",\"blue\":\"Синьо\",\"brightness\":\"Яркост\",\"green\":\"Зелено\",\"hue\":\"Оттенък\",\"lightness\":\"Лекота\",\"red\":\"Червено\",\"saturation\":\"Наситеност\"}");


var $c9898476bcb33183$exports = {};
$c9898476bcb33183$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Modrá\",\"brightness\":\"Jas\",\"green\":\"Zelená\",\"hue\":\"Odstín\",\"lightness\":\"Světlost\",\"red\":\"Červená\",\"saturation\":\"Sytost\"}");


var $222d0ebef1fe28fc$exports = {};
$222d0ebef1fe28fc$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Blå\",\"brightness\":\"Lysstyrke\",\"green\":\"Grøn\",\"hue\":\"Tone\",\"lightness\":\"Lyshed\",\"red\":\"Rød\",\"saturation\":\"Farvemætning\"}");


var $d5a9cbc035631a70$exports = {};
$d5a9cbc035631a70$exports = JSON.parse("{\"alpha\":\"Alpha\",\"blue\":\"Blau\",\"brightness\":\"Helligkeit\",\"green\":\"Grün\",\"hue\":\"Farbton\",\"lightness\":\"Leuchtkraft\",\"red\":\"Rot\",\"saturation\":\"Sättigung\"}");


var $72289c3fecc57f99$exports = {};
$72289c3fecc57f99$exports = JSON.parse("{\"alpha\":\"Άλφα\",\"blue\":\"Μπλε\",\"brightness\":\"Φωτεινότητα\",\"green\":\"Πράσινο\",\"hue\":\"Τόνος\",\"lightness\":\"Φωτεινότητα\",\"red\":\"Κόκκινο\",\"saturation\":\"Κορεσμός\"}");


var $f38a0e4343860127$exports = {};
$f38a0e4343860127$exports = JSON.parse("{\"hue\":\"Hue\",\"saturation\":\"Saturation\",\"lightness\":\"Lightness\",\"brightness\":\"Brightness\",\"red\":\"Red\",\"green\":\"Green\",\"blue\":\"Blue\",\"alpha\":\"Alpha\"}");


var $e830af76e2acacd3$exports = {};
$e830af76e2acacd3$exports = JSON.parse("{\"alpha\":\"Alpha\",\"blue\":\"Azul\",\"brightness\":\"Brillo\",\"green\":\"Verde\",\"hue\":\"Tono\",\"lightness\":\"Luminosidad\",\"red\":\"Rojo\",\"saturation\":\"Saturación\"}");


var $1acc84a1cb9f87a7$exports = {};
$1acc84a1cb9f87a7$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Sinine\",\"brightness\":\"Heledus\",\"green\":\"Roheline\",\"hue\":\"Värv\",\"lightness\":\"Valgus\",\"red\":\"Punane\",\"saturation\":\"Küllastus\"}");


var $e6b4b251f7f24f83$exports = {};
$e6b4b251f7f24f83$exports = JSON.parse("{\"alpha\":\"Alpha\",\"blue\":\"Sininen\",\"brightness\":\"Kirkkaus\",\"green\":\"Vihreä\",\"hue\":\"Sävy\",\"lightness\":\"Valomäärä\",\"red\":\"Punainen\",\"saturation\":\"Värikylläisyys\"}");


var $d6799fb62489c2f6$exports = {};
$d6799fb62489c2f6$exports = JSON.parse("{\"alpha\":\"Alpha\",\"blue\":\"Bleu\",\"brightness\":\"Luminosité\",\"green\":\"Vert\",\"hue\":\"Teinte\",\"lightness\":\"Luminosité\",\"red\":\"Rouge\",\"saturation\":\"Saturation\"}");


var $7c443df7844a5b4b$exports = {};
$7c443df7844a5b4b$exports = JSON.parse("{\"alpha\":\"אלפא\",\"blue\":\"כחול\",\"brightness\":\"בהירות\",\"green\":\"ירוק\",\"hue\":\"גוון\",\"lightness\":\"כמות אור\",\"red\":\"אדום\",\"saturation\":\"רוויה\"}");


var $70f7a5ac89c1c5e2$exports = {};
$70f7a5ac89c1c5e2$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Plava\",\"brightness\":\"Svjetlina\",\"green\":\"Zelena\",\"hue\":\"Nijansa\",\"lightness\":\"Osvijetljenost\",\"red\":\"Crvena\",\"saturation\":\"Zasićenost\"}");


var $743a6538c3c5e1e6$exports = {};
$743a6538c3c5e1e6$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Kék\",\"brightness\":\"Fényesség\",\"green\":\"Zöld\",\"hue\":\"Színárnyalat\",\"lightness\":\"Világosság\",\"red\":\"Piros\",\"saturation\":\"Telítettség\"}");


var $aee55caa9e8c9ddc$exports = {};
$aee55caa9e8c9ddc$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Blu\",\"brightness\":\"Luminosità\",\"green\":\"Verde\",\"hue\":\"Tonalità\",\"lightness\":\"Luminosità\",\"red\":\"Rosso\",\"saturation\":\"Saturazione\"}");


var $c4b116c44559b3f6$exports = {};
$c4b116c44559b3f6$exports = JSON.parse("{\"alpha\":\"アルファ\",\"blue\":\"青\",\"brightness\":\"明るさ\",\"green\":\"緑\",\"hue\":\"色相\",\"lightness\":\"明度\",\"red\":\"赤\",\"saturation\":\"彩度\"}");


var $dad6ed8b7b642af9$exports = {};
$dad6ed8b7b642af9$exports = JSON.parse("{\"alpha\":\"알파\",\"blue\":\"파랑\",\"brightness\":\"명도\",\"green\":\"초록\",\"hue\":\"색조\",\"lightness\":\"밝기\",\"red\":\"빨강\",\"saturation\":\"채도\"}");


var $d839d239145a45a5$exports = {};
$d839d239145a45a5$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Mėlyna\",\"brightness\":\"Ryškumas\",\"green\":\"Žalia\",\"hue\":\"Atspalvis\",\"lightness\":\"Šviesumas\",\"red\":\"Raudona\",\"saturation\":\"Įsotinimas\"}");


var $e24cdbc79cbe47af$exports = {};
$e24cdbc79cbe47af$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Zila\",\"brightness\":\"Spilgtums\",\"green\":\"Zaļa\",\"hue\":\"Nokrāsa\",\"lightness\":\"Gaišums\",\"red\":\"Sarkana\",\"saturation\":\"Piesātinājums\"}");


var $b39b63e4842fb360$exports = {};
$b39b63e4842fb360$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Blå\",\"brightness\":\"Lysstyrke\",\"green\":\"Grønn\",\"hue\":\"Fargetone\",\"lightness\":\"Lyshet\",\"red\":\"Rød\",\"saturation\":\"Metning\"}");


var $bb6b68f801e026cc$exports = {};
$bb6b68f801e026cc$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Blauw\",\"brightness\":\"Helderheid\",\"green\":\"Groen\",\"hue\":\"Kleurtoon\",\"lightness\":\"Lichtsterkte\",\"red\":\"Rood\",\"saturation\":\"Verzadiging\"}");


var $91767c51282382fc$exports = {};
$91767c51282382fc$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Niebieski\",\"brightness\":\"Jasność\",\"green\":\"Zielony\",\"hue\":\"Odcień\",\"lightness\":\"Jaskrawość\",\"red\":\"Czerwony\",\"saturation\":\"Nasycenie\"}");


var $6b0ffc4671cc52b0$exports = {};
$6b0ffc4671cc52b0$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Azul\",\"brightness\":\"Brilho\",\"green\":\"Verde\",\"hue\":\"Matiz\",\"lightness\":\"Luminosidade\",\"red\":\"Vermelho\",\"saturation\":\"Saturação\"}");


var $9d1be8cdebc95262$exports = {};
$9d1be8cdebc95262$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Azul\",\"brightness\":\"Luminosidade\",\"green\":\"Verde\",\"hue\":\"Tonalidade\",\"lightness\":\"Claridade\",\"red\":\"Vermelho\",\"saturation\":\"Saturação\"}");


var $7d134badac6db6ec$exports = {};
$7d134badac6db6ec$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Albastru\",\"brightness\":\"Luminozitate\",\"green\":\"Verde\",\"hue\":\"Nuanță\",\"lightness\":\"Luminozitate\",\"red\":\"Roșu\",\"saturation\":\"Saturație\"}");


var $d034f0298b998fcd$exports = {};
$d034f0298b998fcd$exports = JSON.parse("{\"alpha\":\"Альфа\",\"blue\":\"Синий\",\"brightness\":\"Яркость\",\"green\":\"Зеленый\",\"hue\":\"Оттенок\",\"lightness\":\"Освещенность\",\"red\":\"Красный\",\"saturation\":\"Насыщенность\"}");


var $43bee14258402068$exports = {};
$43bee14258402068$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Modrá\",\"brightness\":\"Jas\",\"green\":\"Zelená\",\"hue\":\"Odtieň\",\"lightness\":\"Svetlosť\",\"red\":\"Červená\",\"saturation\":\"Sýtosť\"}");


var $ea723621744b5296$exports = {};
$ea723621744b5296$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Modra\",\"brightness\":\"Svetlost\",\"green\":\"Zelena\",\"hue\":\"Barva\",\"lightness\":\"Lahkost\",\"red\":\"Rdeča\",\"saturation\":\"Nasičenost\"}");


var $6db6534a114750cd$exports = {};
$6db6534a114750cd$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Plava\",\"brightness\":\"Osvetljenost\",\"green\":\"Zelena\",\"hue\":\"Nijansa\",\"lightness\":\"Osvetljenje\",\"red\":\"Crvena\",\"saturation\":\"Zasićenje\"}");


var $65b1942fe6a410ab$exports = {};
$65b1942fe6a410ab$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Blått\",\"brightness\":\"Ljusstyrka\",\"green\":\"Grönt\",\"hue\":\"Nyans\",\"lightness\":\"Ljushet\",\"red\":\"Rött\",\"saturation\":\"Mättnad\"}");


var $27d359c242931d76$exports = {};
$27d359c242931d76$exports = JSON.parse("{\"alpha\":\"Alfa\",\"blue\":\"Mavi\",\"brightness\":\"Parlaklık\",\"green\":\"Yeşil\",\"hue\":\"Ton\",\"lightness\":\"Canlılık\",\"red\":\"Kırmızı\",\"saturation\":\"Doygunluk\"}");


var $8c97ccabd2cf762c$exports = {};
$8c97ccabd2cf762c$exports = JSON.parse("{\"alpha\":\"Альфа\",\"blue\":\"Синій\",\"brightness\":\"Яскравість\",\"green\":\"Зелений\",\"hue\":\"Тон\",\"lightness\":\"Освітленість\",\"red\":\"Червоний\",\"saturation\":\"Насиченість\"}");


var $b895a6c6d5eea686$exports = {};
$b895a6c6d5eea686$exports = JSON.parse("{\"alpha\":\"Alpha\",\"blue\":\"蓝色\",\"brightness\":\"亮度\",\"green\":\"绿色\",\"hue\":\"色相\",\"lightness\":\"明亮度\",\"red\":\"红色\",\"saturation\":\"饱和度\"}");


var $a0c636ddd214619e$exports = {};
$a0c636ddd214619e$exports = JSON.parse("{\"alpha\":\"Alpha\",\"blue\":\"藍色\",\"brightness\":\"亮度\",\"green\":\"綠色\",\"hue\":\"色相\",\"lightness\":\"明亮\",\"red\":\"紅色\",\"saturation\":\"飽和度\"}");


$38bfb60c1cd25df2$exports = {
    "ar-AE": $df75d0a7d043eac9$exports,
    "bg-BG": $b017ceee4e1d134d$exports,
    "cs-CZ": $c9898476bcb33183$exports,
    "da-DK": $222d0ebef1fe28fc$exports,
    "de-DE": $d5a9cbc035631a70$exports,
    "el-GR": $72289c3fecc57f99$exports,
    "en-US": $f38a0e4343860127$exports,
    "es-ES": $e830af76e2acacd3$exports,
    "et-EE": $1acc84a1cb9f87a7$exports,
    "fi-FI": $e6b4b251f7f24f83$exports,
    "fr-FR": $d6799fb62489c2f6$exports,
    "he-IL": $7c443df7844a5b4b$exports,
    "hr-HR": $70f7a5ac89c1c5e2$exports,
    "hu-HU": $743a6538c3c5e1e6$exports,
    "it-IT": $aee55caa9e8c9ddc$exports,
    "ja-JP": $c4b116c44559b3f6$exports,
    "ko-KR": $dad6ed8b7b642af9$exports,
    "lt-LT": $d839d239145a45a5$exports,
    "lv-LV": $e24cdbc79cbe47af$exports,
    "nb-NO": $b39b63e4842fb360$exports,
    "nl-NL": $bb6b68f801e026cc$exports,
    "pl-PL": $91767c51282382fc$exports,
    "pt-BR": $6b0ffc4671cc52b0$exports,
    "pt-PT": $9d1be8cdebc95262$exports,
    "ro-RO": $7d134badac6db6ec$exports,
    "ru-RU": $d034f0298b998fcd$exports,
    "sk-SK": $43bee14258402068$exports,
    "sl-SI": $ea723621744b5296$exports,
    "sr-SP": $6db6534a114750cd$exports,
    "sv-SE": $65b1942fe6a410ab$exports,
    "tr-TR": $27d359c242931d76$exports,
    "uk-UA": $8c97ccabd2cf762c$exports,
    "zh-CN": $b895a6c6d5eea686$exports,
    "zh-TW": $a0c636ddd214619e$exports
};




const $9273e075a4af31b6$var$messages = new $2Devo$MessageDictionary((/*@__PURE__*/$parcel$interopDefault($38bfb60c1cd25df2$exports)));
function $9273e075a4af31b6$export$6e865ea70d7724f(value) {
    let res = $9273e075a4af31b6$var$RGBColor.parse(value) || $9273e075a4af31b6$var$HSBColor.parse(value) || $9273e075a4af31b6$var$HSLColor.parse(value);
    if (res) return res;
    throw new Error('Invalid color value: ' + value);
}
class $9273e075a4af31b6$var$Color {
    toHexInt() {
        return this.toFormat('rgb').toHexInt();
    }
    getChannelValue(channel) {
        if (channel in this) return this[channel];
        throw new Error('Unsupported color channel: ' + channel);
    }
    withChannelValue(channel, value) {
        if (channel in this) {
            let x = this.clone();
            x[channel] = value;
            return x;
        }
        throw new Error('Unsupported color channel: ' + channel);
    }
    getChannelName(channel, locale) {
        return $9273e075a4af31b6$var$messages.getStringForLocale(channel, locale);
    }
}
const $9273e075a4af31b6$var$HEX_REGEX = /^#(?:([0-9a-f]{3})|([0-9a-f]{6}))$/i;
// X = <negative/positive number with/without decimal places>
// before/after a comma, 0 or more whitespaces are allowed
// - rgb(X, X, X)
// - rgba(X, X, X, X)
const $9273e075a4af31b6$var$RGB_REGEX = /rgb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?)\)|rgba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d(.\d+)?)\)/;
class $9273e075a4af31b6$var$RGBColor extends $9273e075a4af31b6$var$Color {
    constructor(red, green, blue, alpha){
        super();
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    static parse(value) {
        let m;
        if (m = value.match($9273e075a4af31b6$var$HEX_REGEX)) {
            if (m[1]) {
                let r = parseInt(m[1][0] + m[1][0], 16);
                let g = parseInt(m[1][1] + m[1][1], 16);
                let b = parseInt(m[1][2] + m[1][2], 16);
                return new $9273e075a4af31b6$var$RGBColor(r, g, b, 1);
            } else if (m[2]) {
                let r = parseInt(m[2][0] + m[2][1], 16);
                let g = parseInt(m[2][2] + m[2][3], 16);
                let b = parseInt(m[2][4] + m[2][5], 16);
                return new $9273e075a4af31b6$var$RGBColor(r, g, b, 1);
            }
        }
        if (m = value.match($9273e075a4af31b6$var$RGB_REGEX)) {
            const [r, g, b, a] = (m[1] ?? m[2]).split(',').map((n)=>Number(n.trim())
            );
            return new $9273e075a4af31b6$var$RGBColor($2Devo$clamp(r, 0, 255), $2Devo$clamp(g, 0, 255), $2Devo$clamp(b, 0, 255), $2Devo$clamp(a ?? 1, 0, 1));
        }
    }
    toString(format) {
        switch(format){
            case 'hex':
                return '#' + (this.red.toString(16).padStart(2, '0') + this.green.toString(16).padStart(2, '0') + this.blue.toString(16).padStart(2, '0')).toUpperCase();
            case 'hexa':
                return '#' + (this.red.toString(16).padStart(2, '0') + this.green.toString(16).padStart(2, '0') + this.blue.toString(16).padStart(2, '0') + Math.round(this.alpha * 255).toString(16).padStart(2, '0')).toUpperCase();
            case 'rgb':
                return `rgb(${this.red}, ${this.green}, ${this.blue})`;
            case 'css':
            case 'rgba':
                return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
            default:
                return this.toFormat(format).toString(format);
        }
    }
    toFormat(format) {
        switch(format){
            case 'hex':
            case 'hexa':
            case 'rgb':
            case 'rgba':
                return this;
            case 'hsb':
            case 'hsba':
                return this.toHSB();
            case 'hsl':
            case 'hsla':
                return this.toHSL();
            default:
                throw new Error('Unsupported color conversion: rgb -> ' + format);
        }
    }
    toHexInt() {
        return this.red << 16 | this.green << 8 | this.blue;
    }
    /**
   * Converts an RGB color value to HSB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
   * @returns An HSBColor object.
   */ toHSB() {
        const red = this.red / 255;
        const green = this.green / 255;
        const blue = this.blue / 255;
        const min = Math.min(red, green, blue);
        const brightness = Math.max(red, green, blue);
        const chroma = brightness - min;
        const saturation = brightness === 0 ? 0 : chroma / brightness;
        let hue = 0; // achromatic
        if (chroma !== 0) {
            switch(brightness){
                case red:
                    hue = (green - blue) / chroma + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / chroma + 2;
                    break;
                case blue:
                    hue = (red - green) / chroma + 4;
                    break;
            }
            hue /= 6;
        }
        return new $9273e075a4af31b6$var$HSBColor($2Devo$toFixedNumber(hue * 360, 2), $2Devo$toFixedNumber(saturation * 100, 2), $2Devo$toFixedNumber(brightness * 100, 2), this.alpha);
    }
    /**
   * Converts an RGB color value to HSL.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
   * @returns An HSLColor object.
   */ toHSL() {
        const red = this.red / 255;
        const green = this.green / 255;
        const blue = this.blue / 255;
        const min = Math.min(red, green, blue);
        const max = Math.max(red, green, blue);
        const lightness = (max + min) / 2;
        const chroma = max - min;
        let hue;
        let saturation;
        if (chroma === 0) hue = saturation = 0; // achromatic
        else {
            saturation = chroma / (lightness < 0.5 ? max + min : 2 - max - min);
            switch(max){
                case red:
                    hue = (green - blue) / chroma + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / chroma + 2;
                    break;
                case blue:
                    hue = (red - green) / chroma + 4;
                    break;
            }
            hue /= 6;
        }
        return new $9273e075a4af31b6$var$HSLColor($2Devo$toFixedNumber(hue * 360, 2), $2Devo$toFixedNumber(saturation * 100, 2), $2Devo$toFixedNumber(lightness * 100, 2), this.alpha);
    }
    clone() {
        return new $9273e075a4af31b6$var$RGBColor(this.red, this.green, this.blue, this.alpha);
    }
    getChannelRange(channel) {
        switch(channel){
            case 'red':
            case 'green':
            case 'blue':
                return {
                    minValue: 0,
                    maxValue: 255,
                    step: 1
                };
            case 'alpha':
                return {
                    minValue: 0,
                    maxValue: 1,
                    step: 0.01
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    formatChannelValue(channel, locale) {
        let options;
        let value = this.getChannelValue(channel);
        switch(channel){
            case 'red':
            case 'green':
            case 'blue':
                options = {
                    style: 'decimal'
                };
                break;
            case 'alpha':
                options = {
                    style: 'percent'
                };
                break;
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
        return new $2Devo$NumberFormatter(locale, options).format(value);
    }
    getColorSpace() {
        return 'rgb';
    }
}
// X = <negative/positive number with/without decimal places>
// before/after a comma, 0 or more whitespaces are allowed
// - hsb(X, X%, X%)
// - hsba(X, X%, X%, X)
const $9273e075a4af31b6$var$HSB_REGEX = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
class $9273e075a4af31b6$var$HSBColor extends $9273e075a4af31b6$var$Color {
    constructor(hue, saturation, brightness, alpha){
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.brightness = brightness;
        this.alpha = alpha;
    }
    static parse(value) {
        let m;
        if (m = value.match($9273e075a4af31b6$var$HSB_REGEX)) {
            const [h, s, b, a] = (m[1] ?? m[2]).split(',').map((n)=>Number(n.trim().replace('%', ''))
            );
            return new $9273e075a4af31b6$var$HSBColor($9273e075a4af31b6$var$mod(h, 360), $2Devo$clamp(s, 0, 100), $2Devo$clamp(b, 0, 100), $2Devo$clamp(a ?? 1, 0, 1));
        }
    }
    toString(format) {
        switch(format){
            case 'css':
                return this.toHSL().toString('css');
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsb':
                return `hsb(${this.hue}, ${$2Devo$toFixedNumber(this.saturation, 2)}%, ${$2Devo$toFixedNumber(this.brightness, 2)}%)`;
            case 'hsba':
                return `hsba(${this.hue}, ${$2Devo$toFixedNumber(this.saturation, 2)}%, ${$2Devo$toFixedNumber(this.brightness, 2)}%, ${this.alpha})`;
            default:
                return this.toFormat(format).toString(format);
        }
    }
    toFormat(format) {
        switch(format){
            case 'hsb':
            case 'hsba':
                return this;
            case 'hsl':
            case 'hsla':
                return this.toHSL();
            case 'rgb':
            case 'rgba':
                return this.toRGB();
            default:
                throw new Error('Unsupported color conversion: hsb -> ' + format);
        }
    }
    /**
   * Converts a HSB color to HSL.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_HSL.
   * @returns An HSLColor object.
   */ toHSL() {
        let saturation = this.saturation / 100;
        let brightness = this.brightness / 100;
        let lightness = brightness * (1 - saturation / 2);
        saturation = lightness === 0 || lightness === 1 ? 0 : (brightness - lightness) / Math.min(lightness, 1 - lightness);
        return new $9273e075a4af31b6$var$HSLColor($2Devo$toFixedNumber(this.hue, 2), $2Devo$toFixedNumber(saturation * 100, 2), $2Devo$toFixedNumber(lightness * 100, 2), this.alpha);
    }
    /**
   * Converts a HSV color value to RGB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB_alternative.
   * @returns An RGBColor object.
   */ toRGB() {
        let hue = this.hue;
        let saturation = this.saturation / 100;
        let brightness = this.brightness / 100;
        let fn = (n, k = (n + hue / 60) % 6)=>brightness - saturation * brightness * Math.max(Math.min(k, 4 - k, 1), 0)
        ;
        return new $9273e075a4af31b6$var$RGBColor(Math.round(fn(5) * 255), Math.round(fn(3) * 255), Math.round(fn(1) * 255), this.alpha);
    }
    clone() {
        return new $9273e075a4af31b6$var$HSBColor(this.hue, this.saturation, this.brightness, this.alpha);
    }
    getChannelRange(channel) {
        switch(channel){
            case 'hue':
                return {
                    minValue: 0,
                    maxValue: 360,
                    step: 1
                };
            case 'saturation':
            case 'brightness':
                return {
                    minValue: 0,
                    maxValue: 100,
                    step: 1
                };
            case 'alpha':
                return {
                    minValue: 0,
                    maxValue: 1,
                    step: 0.01
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    formatChannelValue(channel, locale) {
        let options;
        let value = this.getChannelValue(channel);
        switch(channel){
            case 'hue':
                options = {
                    style: 'unit',
                    unit: 'degree',
                    unitDisplay: 'narrow'
                };
                break;
            case 'saturation':
            case 'brightness':
                options = {
                    style: 'percent'
                };
                value /= 100;
                break;
            case 'alpha':
                options = {
                    style: 'percent'
                };
                break;
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
        return new $2Devo$NumberFormatter(locale, options).format(value);
    }
    getColorSpace() {
        return 'hsb';
    }
}
// X = <negative/positive number with/without decimal places>
// before/after a comma, 0 or more whitespaces are allowed
// - hsl(X, X%, X%)
// - hsla(X, X%, X%, X)
const $9273e075a4af31b6$var$HSL_REGEX = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
function $9273e075a4af31b6$var$mod(n, m) {
    return (n % m + m) % m;
}
class $9273e075a4af31b6$var$HSLColor extends $9273e075a4af31b6$var$Color {
    constructor(hue, saturation, lightness, alpha){
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha;
    }
    static parse(value) {
        let m;
        if (m = value.match($9273e075a4af31b6$var$HSL_REGEX)) {
            const [h, s, l, a] = (m[1] ?? m[2]).split(',').map((n)=>Number(n.trim().replace('%', ''))
            );
            return new $9273e075a4af31b6$var$HSLColor($9273e075a4af31b6$var$mod(h, 360), $2Devo$clamp(s, 0, 100), $2Devo$clamp(l, 0, 100), $2Devo$clamp(a ?? 1, 0, 1));
        }
    }
    toString(format) {
        switch(format){
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsl':
                return `hsl(${this.hue}, ${$2Devo$toFixedNumber(this.saturation, 2)}%, ${$2Devo$toFixedNumber(this.lightness, 2)}%)`;
            case 'css':
            case 'hsla':
                return `hsla(${this.hue}, ${$2Devo$toFixedNumber(this.saturation, 2)}%, ${$2Devo$toFixedNumber(this.lightness, 2)}%, ${this.alpha})`;
            default:
                return this.toFormat(format).toString(format);
        }
    }
    toFormat(format) {
        switch(format){
            case 'hsl':
            case 'hsla':
                return this;
            case 'hsb':
            case 'hsba':
                return this.toHSB();
            case 'rgb':
            case 'rgba':
                return this.toRGB();
            default:
                throw new Error('Unsupported color conversion: hsl -> ' + format);
        }
    }
    /**
   * Converts a HSL color to HSB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_HSV.
   * @returns An HSBColor object.
   */ toHSB() {
        let saturation = this.saturation / 100;
        let lightness = this.lightness / 100;
        let brightness = lightness + saturation * Math.min(lightness, 1 - lightness);
        saturation = brightness === 0 ? 0 : 2 * (1 - lightness / brightness);
        return new $9273e075a4af31b6$var$HSBColor($2Devo$toFixedNumber(this.hue, 2), $2Devo$toFixedNumber(saturation * 100, 2), $2Devo$toFixedNumber(brightness * 100, 2), this.alpha);
    }
    /**
   * Converts a HSL color to RGB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative.
   * @returns An RGBColor object.
   */ toRGB() {
        let hue = this.hue;
        let saturation = this.saturation / 100;
        let lightness = this.lightness / 100;
        let a = saturation * Math.min(lightness, 1 - lightness);
        let fn = (n, k = (n + hue / 30) % 12)=>lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        ;
        return new $9273e075a4af31b6$var$RGBColor(Math.round(fn(0) * 255), Math.round(fn(8) * 255), Math.round(fn(4) * 255), this.alpha);
    }
    clone() {
        return new $9273e075a4af31b6$var$HSLColor(this.hue, this.saturation, this.lightness, this.alpha);
    }
    getChannelRange(channel) {
        switch(channel){
            case 'hue':
                return {
                    minValue: 0,
                    maxValue: 360,
                    step: 1
                };
            case 'saturation':
            case 'lightness':
                return {
                    minValue: 0,
                    maxValue: 100,
                    step: 1
                };
            case 'alpha':
                return {
                    minValue: 0,
                    maxValue: 1,
                    step: 0.01
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    formatChannelValue(channel, locale) {
        let options;
        let value = this.getChannelValue(channel);
        switch(channel){
            case 'hue':
                options = {
                    style: 'unit',
                    unit: 'degree',
                    unitDisplay: 'narrow'
                };
                break;
            case 'saturation':
            case 'lightness':
                options = {
                    style: 'percent'
                };
                value /= 100;
                break;
            case 'alpha':
                options = {
                    style: 'percent'
                };
                break;
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
        return new $2Devo$NumberFormatter(locale, options).format(value);
    }
    getColorSpace() {
        return 'hsl';
    }
}


var $23303ff170269483$exports = {};

$parcel$export($23303ff170269483$exports, "useColorSliderState", () => $23303ff170269483$export$57bc203e1c9c6d44);



function $23303ff170269483$var$normalizeColor(v) {
    if (typeof v === 'string') return $9273e075a4af31b6$export$6e865ea70d7724f(v);
    else return v;
}
function $23303ff170269483$export$57bc203e1c9c6d44(props) {
    let { channel: channel , value: value1 , defaultValue: defaultValue , onChange: onChange , locale: locale , ...otherProps } = props;
    if (value1 == null && defaultValue == null) throw new Error('useColorSliderState requires a value or defaultValue');
    let [color, setColor] = $2Devo$useControlledState(value1 && $23303ff170269483$var$normalizeColor(value1), defaultValue && $23303ff170269483$var$normalizeColor(defaultValue), onChange);
    let sliderState = $2Devo$useSliderState({
        ...color.getChannelRange(channel),
        ...otherProps,
        // Unused except in getThumbValueLabel, which is overridden below. null to appease TypeScript.
        numberFormatter: null,
        value: [
            color.getChannelValue(channel)
        ],
        onChange ([v]) {
            setColor(color.withChannelValue(channel, v));
        },
        onChangeEnd ([v]) {
            // onChange will have already been called with the right value, this is just to trigger onChangEnd
            if (props.onChangeEnd) props.onChangeEnd(color.withChannelValue(channel, v));
        }
    });
    return {
        ...sliderState,
        value: color,
        setValue (value) {
            setColor($23303ff170269483$var$normalizeColor(value));
        },
        getDisplayColor () {
            switch(channel){
                case 'hue':
                    return $9273e075a4af31b6$export$6e865ea70d7724f(`hsl(${color.getChannelValue('hue')}, 100%, 50%)`);
                case 'lightness':
                case 'brightness':
                case 'saturation':
                case 'red':
                case 'green':
                case 'blue':
                    return color.withChannelValue('alpha', 1);
                case 'alpha':
                    return color;
                default:
                    throw new Error('Unknown color channel: ' + channel);
            }
        },
        getThumbValueLabel () {
            return color.formatChannelValue(channel, locale);
        }
    };
}


var $da55481f0f713109$exports = {};

$parcel$export($da55481f0f713109$exports, "useColorWheelState", () => $da55481f0f713109$export$f4301076d9336137);



function $da55481f0f713109$var$normalizeColor(v) {
    if (typeof v === 'string') return $9273e075a4af31b6$export$6e865ea70d7724f(v);
    else return v;
}
const $da55481f0f713109$var$DEFAULT_COLOR = $9273e075a4af31b6$export$6e865ea70d7724f('hsl(0, 100%, 50%)');
function $da55481f0f713109$var$roundToStep(value, step) {
    return Math.round(value / step) * step;
}
function $da55481f0f713109$var$mod(n, m) {
    return (n % m + m) % m;
}
function $da55481f0f713109$var$roundDown(v) {
    let r = Math.floor(v);
    if (r === v) return v - 1;
    else return r;
}
function $da55481f0f713109$var$degToRad(deg) {
    return deg * Math.PI / 180;
}
function $da55481f0f713109$var$radToDeg(rad) {
    return rad * 180 / Math.PI;
}
// 0deg = 3 o'clock. increases clockwise
function $da55481f0f713109$var$angleToCartesian(angle, radius) {
    let rad = $da55481f0f713109$var$degToRad(360 - angle + 90);
    let x = Math.sin(rad) * radius;
    let y = Math.cos(rad) * radius;
    return {
        x: x,
        y: y
    };
}
function $da55481f0f713109$var$cartesianToAngle(x, y, radius) {
    let deg = $da55481f0f713109$var$radToDeg(Math.atan2(y / radius, x / radius));
    return (deg + 360) % 360;
}
function $da55481f0f713109$export$f4301076d9336137(props) {
    let { defaultValue: defaultValue , onChange: onChange , onChangeEnd: onChangeEnd , step: step = 1  } = props;
    if (!props.value && !defaultValue) defaultValue = $da55481f0f713109$var$DEFAULT_COLOR;
    let [value, setValue] = $2Devo$useControlledState($da55481f0f713109$var$normalizeColor(props.value), $da55481f0f713109$var$normalizeColor(defaultValue), onChange);
    let valueRef = $2Devo$useRef(value);
    valueRef.current = value;
    let [isDragging1, setDragging] = $2Devo$useState(false);
    let isDraggingRef = $2Devo$useRef(false).current;
    let hue = value.getChannelValue('hue');
    function setHue(v) {
        if (v > 360) // Make sure you can always get back to 0.
        v = 0;
        v = $da55481f0f713109$var$roundToStep($da55481f0f713109$var$mod(v, 360), step);
        if (hue !== v) {
            let color = value.withChannelValue('hue', v);
            valueRef.current = color;
            setValue(color);
        }
    }
    return {
        value: value,
        setValue (v) {
            let color = $da55481f0f713109$var$normalizeColor(v);
            valueRef.current = color;
            setValue(color);
        },
        hue: hue,
        setHue: setHue,
        setHueFromPoint (x, y, radius) {
            setHue($da55481f0f713109$var$cartesianToAngle(x, y, radius));
        },
        getThumbPosition (radius) {
            return $da55481f0f713109$var$angleToCartesian(value.getChannelValue('hue'), radius);
        },
        increment (minStepSize = 0) {
            let newValue = hue + Math.max(minStepSize, step);
            if (newValue > 360) // Make sure you can always get back to 0.
            newValue = 0;
            setHue(newValue);
        },
        decrement (minStepSize = 0) {
            let s = Math.max(minStepSize, step);
            if (hue === 0) // We can't just subtract step because this might be the case:
            // |(previous step) - 0| < step size
            setHue($da55481f0f713109$var$roundDown(360 / s) * s);
            else setHue(hue - s);
        },
        setDragging (isDragging) {
            let wasDragging = isDraggingRef;
            isDraggingRef = isDragging;
            if (onChangeEnd && !isDragging && wasDragging) onChangeEnd(valueRef.current);
            setDragging(isDragging);
        },
        isDragging: isDragging1,
        getDisplayColor () {
            return value.withChannelValue('saturation', 100).withChannelValue('lightness', 50);
        }
    };
}


var $6d194cbdc5443ce1$exports = {};

$parcel$export($6d194cbdc5443ce1$exports, "useColorFieldState", () => $6d194cbdc5443ce1$export$d52a01683abdfcd6);



function $a2cb95de3f09aabb$export$5aadd9c0606af5c2(value) {
    return $2Devo$useMemo(()=>{
        if (typeof value === 'string') try {
            return $9273e075a4af31b6$export$6e865ea70d7724f(value);
        } catch (err) {
            return undefined;
        }
        return value;
    }, [
        value
    ]);
}




const $6d194cbdc5443ce1$var$MIN_COLOR = $9273e075a4af31b6$export$6e865ea70d7724f('#000000');
const $6d194cbdc5443ce1$var$MAX_COLOR = $9273e075a4af31b6$export$6e865ea70d7724f('#FFFFFF');
const $6d194cbdc5443ce1$var$MIN_COLOR_INT = $6d194cbdc5443ce1$var$MIN_COLOR.toHexInt();
const $6d194cbdc5443ce1$var$MAX_COLOR_INT = $6d194cbdc5443ce1$var$MAX_COLOR.toHexInt();
function $6d194cbdc5443ce1$export$d52a01683abdfcd6(props) {
    let { step: step = 1 , value: value1 , defaultValue: defaultValue , onChange: onChange  } = props;
    let initialValue = $a2cb95de3f09aabb$export$5aadd9c0606af5c2(value1);
    let initialDefaultValue = $a2cb95de3f09aabb$export$5aadd9c0606af5c2(defaultValue);
    let [colorValue, setColorValue] = $2Devo$useControlledState(initialValue, initialDefaultValue, onChange);
    let [inputValue, setInputValue] = $2Devo$useState(()=>(value1 || defaultValue) && colorValue ? colorValue.toString('hex') : ''
    );
    let safelySetColorValue = (newColor)=>{
        if (!colorValue || !newColor) {
            setColorValue(newColor);
            return;
        }
        if (newColor.toHexInt() !== colorValue.toHexInt()) {
            setColorValue(newColor);
            return;
        }
    };
    $2Devo$useEffect(()=>{
        setInputValue(colorValue ? colorValue.toString('hex') : '');
    }, [
        colorValue,
        setInputValue
    ]);
    let parsedValue = $2Devo$useMemo(()=>{
        let color;
        try {
            color = $9273e075a4af31b6$export$6e865ea70d7724f(inputValue.startsWith('#') ? inputValue : `#${inputValue}`);
        } catch (err) {
            color = null;
        }
        return color;
    }, [
        $9273e075a4af31b6$export$6e865ea70d7724f,
        inputValue
    ]);
    let parsed = $2Devo$useRef(null);
    parsed.current = parsedValue;
    let commit = ()=>{
        // Set to empty state if input value is empty
        if (!inputValue.length) {
            safelySetColorValue(null);
            setInputValue(value1 === undefined ? '' : colorValue.toString('hex'));
            return;
        }
        // if it failed to parse, then reset input to formatted version of current number
        if (parsed.current == null) {
            setInputValue(colorValue ? colorValue.toString('hex') : '');
            return;
        }
        safelySetColorValue(parsed.current);
        // in a controlled state, the numberValue won't change, so we won't go back to our old input without help
        let newColorValue = '';
        if (colorValue) newColorValue = colorValue.toString('hex');
        setInputValue(newColorValue);
    };
    let increment = ()=>{
        let newValue = $6d194cbdc5443ce1$var$addColorValue(parsed.current, step);
        // if we've arrived at the same value that was previously in the state, the
        // input value should be updated to match
        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment
        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input
        if (newValue === colorValue) setInputValue(newValue.toString('hex'));
        safelySetColorValue(newValue);
    };
    let decrement = ()=>{
        let newValue = $6d194cbdc5443ce1$var$addColorValue(parsed.current, -step);
        // if we've arrived at the same value that was previously in the state, the
        // input value should be updated to match
        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment
        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input
        if (newValue === colorValue) setInputValue(newValue.toString('hex'));
        safelySetColorValue(newValue);
    };
    let incrementToMax = ()=>safelySetColorValue($6d194cbdc5443ce1$var$MAX_COLOR)
    ;
    let decrementToMin = ()=>safelySetColorValue($6d194cbdc5443ce1$var$MIN_COLOR)
    ;
    let validate = (value)=>value === '' || !!value.match(/^#?[0-9a-f]{0,6}$/i)?.[0]
    ;
    return {
        validate: validate,
        colorValue: colorValue,
        inputValue: inputValue,
        setInputValue: setInputValue,
        commit: commit,
        increment: increment,
        incrementToMax: incrementToMax,
        decrement: decrement,
        decrementToMin: decrementToMin
    };
}
function $6d194cbdc5443ce1$var$addColorValue(color, step) {
    let newColor = color ? color : $6d194cbdc5443ce1$var$MIN_COLOR;
    let colorInt = newColor.toHexInt();
    let clampInt = Math.min(Math.max(colorInt + step, $6d194cbdc5443ce1$var$MIN_COLOR_INT), $6d194cbdc5443ce1$var$MAX_COLOR_INT);
    if (clampInt !== colorInt) {
        let newColorString = `#${clampInt.toString(16).padStart(6, '0').toUpperCase()}`;
        newColor = $9273e075a4af31b6$export$6e865ea70d7724f(newColorString);
    }
    return newColor;
}




export {$9273e075a4af31b6$export$6e865ea70d7724f as parseColor, $23303ff170269483$export$57bc203e1c9c6d44 as useColorSliderState, $da55481f0f713109$export$f4301076d9336137 as useColorWheelState, $6d194cbdc5443ce1$export$d52a01683abdfcd6 as useColorFieldState};
//# sourceMappingURL=module.js.map
