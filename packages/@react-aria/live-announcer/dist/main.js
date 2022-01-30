var $1lXGW$react = require("react");
var $1lXGW$reactdom = require("react-dom");
var $1lXGW$reactariavisuallyhidden = require("@react-aria/visually-hidden");

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
var $43601e738499a1a9$exports = {};

$parcel$export($43601e738499a1a9$exports, "announce", () => $43601e738499a1a9$export$a9b970dcc4ae71a9);
$parcel$export($43601e738499a1a9$exports, "clearAnnouncer", () => $43601e738499a1a9$export$d10ae4f68404609a);
$parcel$export($43601e738499a1a9$exports, "destroyAnnouncer", () => $43601e738499a1a9$export$d8686216b8b81b2f);



/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $43601e738499a1a9$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $43601e738499a1a9$var$liveRegionAnnouncer = /*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createRef();
let $43601e738499a1a9$var$node = null;
let $43601e738499a1a9$var$messageId = 0;
function $43601e738499a1a9$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $43601e738499a1a9$var$LIVEREGION_TIMEOUT_DELAY) {
    $43601e738499a1a9$var$ensureInstance((announcer)=>announcer.announce(message, assertiveness, timeout)
    );
}
function $43601e738499a1a9$export$d10ae4f68404609a(assertiveness) {
    $43601e738499a1a9$var$ensureInstance((announcer)=>announcer.clear(assertiveness)
    );
}
function $43601e738499a1a9$export$d8686216b8b81b2f() {
    if ($43601e738499a1a9$var$liveRegionAnnouncer.current) {
        ($parcel$interopDefault($1lXGW$reactdom)).unmountComponentAtNode($43601e738499a1a9$var$node);
        document.body.removeChild($43601e738499a1a9$var$node);
        $43601e738499a1a9$var$node = null;
    }
}
/**
 * Ensures we only have one instance of the announcer so that we don't have elements competing.
 */ function $43601e738499a1a9$var$ensureInstance(callback) {
    if (!$43601e738499a1a9$var$liveRegionAnnouncer.current) {
        $43601e738499a1a9$var$node = document.createElement('div');
        $43601e738499a1a9$var$node.dataset.liveAnnouncer = 'true';
        document.body.prepend($43601e738499a1a9$var$node);
        ($parcel$interopDefault($1lXGW$reactdom)).render(/*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createElement($43601e738499a1a9$var$LiveRegionAnnouncer, {
            ref: $43601e738499a1a9$var$liveRegionAnnouncer
        }), $43601e738499a1a9$var$node, ()=>callback($43601e738499a1a9$var$liveRegionAnnouncer.current)
        );
    } else callback($43601e738499a1a9$var$liveRegionAnnouncer.current);
}
const $43601e738499a1a9$var$LiveRegionAnnouncer = /*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).forwardRef((_, ref)=>{
    let [assertiveMessages, setAssertiveMessages] = $1lXGW$react.useState([]);
    let [politeMessages, setPoliteMessages] = $1lXGW$react.useState([]);
    let clear = (assertiveness)=>{
        if (!assertiveness || assertiveness === 'assertive') setAssertiveMessages([]);
        if (!assertiveness || assertiveness === 'polite') setPoliteMessages([]);
    };
    let $43601e738499a1a9$export$a9b970dcc4ae71a9 = (message1, assertiveness = 'assertive', timeout = $43601e738499a1a9$var$LIVEREGION_TIMEOUT_DELAY)=>{
        let id = $43601e738499a1a9$var$messageId++;
        if (assertiveness === 'assertive') setAssertiveMessages((messages)=>[
                ...messages,
                {
                    id: id,
                    text: message1
                }
            ]
        );
        else setPoliteMessages((messages)=>[
                ...messages,
                {
                    id: id,
                    text: message1
                }
            ]
        );
        if (message1 !== '') setTimeout(()=>{
            if (assertiveness === 'assertive') setAssertiveMessages((messages)=>messages.filter((message)=>message.id !== id
                )
            );
            else setPoliteMessages((messages)=>messages.filter((message)=>message.id !== id
                )
            );
        }, timeout);
    };
    $1lXGW$react.useImperativeHandle(ref, ()=>({
            announce: $43601e738499a1a9$export$a9b970dcc4ae71a9,
            clear: clear
        })
    );
    return(/*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createElement($1lXGW$react.Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createElement($43601e738499a1a9$var$MessageBlock, {
        "aria-live": "assertive"
    }, assertiveMessages.map((message)=>/*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createElement("div", {
            key: message.id
        }, message.text)
    )), /*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createElement($43601e738499a1a9$var$MessageBlock, {
        "aria-live": "polite"
    }, politeMessages.map((message)=>/*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createElement("div", {
            key: message.id
        }, message.text)
    ))));
});
function $43601e738499a1a9$var$MessageBlock({ children: children , 'aria-live': ariaLive  }) {
    return(/*#__PURE__*/ ($parcel$interopDefault($1lXGW$react)).createElement($1lXGW$reactariavisuallyhidden.VisuallyHidden, {
        role: "log",
        "aria-live": ariaLive,
        "aria-relevant": "additions"
    }, children));
}


$parcel$exportWildcard(module.exports, $43601e738499a1a9$exports);


//# sourceMappingURL=main.js.map
