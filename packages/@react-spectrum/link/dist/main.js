require("./main.css");
var $z1Cxk$reactspectrumutils = require("@react-spectrum/utils");
var $z1Cxk$reactariafocus = require("@react-aria/focus");
var $z1Cxk$reactariautils = require("@react-aria/utils");
var $z1Cxk$react = require("react");
var $z1Cxk$reactariainteractions = require("@react-aria/interactions");
var $z1Cxk$reactarialink = require("@react-aria/link");
var $z1Cxk$reactspectrumprovider = require("@react-spectrum/provider");

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
var $6b370a27f4e56d58$exports = {};

$parcel$export($6b370a27f4e56d58$exports, "Link", () => $6b370a27f4e56d58$export$a6c7ac8248d6e38a);




var $3b12e8ebd188e5b9$exports = {};

$parcel$export($3b12e8ebd188e5b9$exports, "spectrum-Link", () => $3b12e8ebd188e5b9$export$d85dd8b94975f388, (v) => $3b12e8ebd188e5b9$export$d85dd8b94975f388 = v);
$parcel$export($3b12e8ebd188e5b9$exports, "is-hovered", () => $3b12e8ebd188e5b9$export$b8813cd5d7824ce7, (v) => $3b12e8ebd188e5b9$export$b8813cd5d7824ce7 = v);
$parcel$export($3b12e8ebd188e5b9$exports, "focus-ring", () => $3b12e8ebd188e5b9$export$f39a09f249340e2a, (v) => $3b12e8ebd188e5b9$export$f39a09f249340e2a = v);
$parcel$export($3b12e8ebd188e5b9$exports, "is-disabled", () => $3b12e8ebd188e5b9$export$d35bc1e505d1ebbf, (v) => $3b12e8ebd188e5b9$export$d35bc1e505d1ebbf = v);
$parcel$export($3b12e8ebd188e5b9$exports, "spectrum-Link--secondary", () => $3b12e8ebd188e5b9$export$ab09ed292dcb9a79, (v) => $3b12e8ebd188e5b9$export$ab09ed292dcb9a79 = v);
$parcel$export($3b12e8ebd188e5b9$exports, "spectrum-Link--overBackground", () => $3b12e8ebd188e5b9$export$679b6267148797da, (v) => $3b12e8ebd188e5b9$export$679b6267148797da = v);
$parcel$export($3b12e8ebd188e5b9$exports, "spectrum-Link--quiet", () => $3b12e8ebd188e5b9$export$81921ea93435e997, (v) => $3b12e8ebd188e5b9$export$81921ea93435e997 = v);
var $3b12e8ebd188e5b9$export$d85dd8b94975f388;
var $3b12e8ebd188e5b9$export$b8813cd5d7824ce7;
var $3b12e8ebd188e5b9$export$f39a09f249340e2a;
var $3b12e8ebd188e5b9$export$d35bc1e505d1ebbf;
var $3b12e8ebd188e5b9$export$ab09ed292dcb9a79;
var $3b12e8ebd188e5b9$export$679b6267148797da;
var $3b12e8ebd188e5b9$export$81921ea93435e997;
$3b12e8ebd188e5b9$export$d85dd8b94975f388 = "_spectrum-Link_5a03c7";
$3b12e8ebd188e5b9$export$b8813cd5d7824ce7 = "_is-hovered_5a03c7";
$3b12e8ebd188e5b9$export$f39a09f249340e2a = "_focus-ring_5a03c7";
$3b12e8ebd188e5b9$export$d35bc1e505d1ebbf = "_is-disabled_5a03c7";
$3b12e8ebd188e5b9$export$ab09ed292dcb9a79 = "_spectrum-Link--secondary_5a03c7";
$3b12e8ebd188e5b9$export$679b6267148797da = "_spectrum-Link--overBackground_5a03c7";
$3b12e8ebd188e5b9$export$81921ea93435e997 = "_spectrum-Link--quiet_5a03c7";





function $6b370a27f4e56d58$export$a6c7ac8248d6e38a(props) {
    props = $z1Cxk$reactspectrumprovider.useProviderProps(props);
    props = $z1Cxk$reactspectrumutils.useSlotProps(props, 'link');
    let { variant: variant = 'primary' , isQuiet: isQuiet , children: children , href: // @ts-ignore
    href  } = props;
    let { styleProps: styleProps  } = $z1Cxk$reactspectrumutils.useStyleProps(props);
    let { hoverProps: hoverProps , isHovered: isHovered  } = $z1Cxk$reactariainteractions.useHover({
    });
    if (href) console.warn('href is deprecated, please use an anchor element as children');
    let ref = $z1Cxk$react.useRef();
    let { linkProps: linkProps  } = $z1Cxk$reactarialink.useLink({
        ...props,
        elementType: typeof children === 'string' ? 'span' : 'a'
    }, ref);
    return(/*#__PURE__*/ ($parcel$interopDefault($z1Cxk$react)).createElement($z1Cxk$reactariafocus.FocusRing, {
        focusRingClass: $z1Cxk$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($3b12e8ebd188e5b9$exports)), 'focus-ring')
    }, /*#__PURE__*/ ($parcel$interopDefault($z1Cxk$react)).cloneElement($z1Cxk$reactspectrumutils.getWrappedElement(children), {
        ...styleProps,
        ...$z1Cxk$reactariautils.mergeProps(linkProps, hoverProps),
        ref: ref,
        className: $z1Cxk$reactspectrumutils.classNames((/*@__PURE__*/$parcel$interopDefault($3b12e8ebd188e5b9$exports)), 'spectrum-Link', {
            'spectrum-Link--quiet': isQuiet,
            [`spectrum-Link--${variant}`]: variant,
            'is-hovered': isHovered
        }, styleProps.className)
    })));
}


$parcel$exportWildcard(module.exports, $6b370a27f4e56d58$exports);


//# sourceMappingURL=main.js.map
