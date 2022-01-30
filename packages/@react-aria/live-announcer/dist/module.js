import $dicN6$react, {useState as $dicN6$useState, useImperativeHandle as $dicN6$useImperativeHandle, Fragment as $dicN6$Fragment} from "react";
import $dicN6$reactdom from "react-dom";
import {VisuallyHidden as $dicN6$VisuallyHidden} from "@react-aria/visually-hidden";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $35b4f03ceab91306$exports = {};

$parcel$export($35b4f03ceab91306$exports, "announce", () => $35b4f03ceab91306$export$a9b970dcc4ae71a9);
$parcel$export($35b4f03ceab91306$exports, "clearAnnouncer", () => $35b4f03ceab91306$export$d10ae4f68404609a);
$parcel$export($35b4f03ceab91306$exports, "destroyAnnouncer", () => $35b4f03ceab91306$export$d8686216b8b81b2f);



/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $35b4f03ceab91306$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $35b4f03ceab91306$var$liveRegionAnnouncer = /*#__PURE__*/ $dicN6$react.createRef();
let $35b4f03ceab91306$var$node = null;
let $35b4f03ceab91306$var$messageId = 0;
function $35b4f03ceab91306$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $35b4f03ceab91306$var$LIVEREGION_TIMEOUT_DELAY) {
    $35b4f03ceab91306$var$ensureInstance((announcer)=>announcer.announce(message, assertiveness, timeout)
    );
}
function $35b4f03ceab91306$export$d10ae4f68404609a(assertiveness) {
    $35b4f03ceab91306$var$ensureInstance((announcer)=>announcer.clear(assertiveness)
    );
}
function $35b4f03ceab91306$export$d8686216b8b81b2f() {
    if ($35b4f03ceab91306$var$liveRegionAnnouncer.current) {
        $dicN6$reactdom.unmountComponentAtNode($35b4f03ceab91306$var$node);
        document.body.removeChild($35b4f03ceab91306$var$node);
        $35b4f03ceab91306$var$node = null;
    }
}
/**
 * Ensures we only have one instance of the announcer so that we don't have elements competing.
 */ function $35b4f03ceab91306$var$ensureInstance(callback) {
    if (!$35b4f03ceab91306$var$liveRegionAnnouncer.current) {
        $35b4f03ceab91306$var$node = document.createElement('div');
        $35b4f03ceab91306$var$node.dataset.liveAnnouncer = 'true';
        document.body.prepend($35b4f03ceab91306$var$node);
        $dicN6$reactdom.render(/*#__PURE__*/ $dicN6$react.createElement($35b4f03ceab91306$var$LiveRegionAnnouncer, {
            ref: $35b4f03ceab91306$var$liveRegionAnnouncer
        }), $35b4f03ceab91306$var$node, ()=>callback($35b4f03ceab91306$var$liveRegionAnnouncer.current)
        );
    } else callback($35b4f03ceab91306$var$liveRegionAnnouncer.current);
}
const $35b4f03ceab91306$var$LiveRegionAnnouncer = /*#__PURE__*/ $dicN6$react.forwardRef((_, ref)=>{
    let [assertiveMessages, setAssertiveMessages] = $dicN6$useState([]);
    let [politeMessages, setPoliteMessages] = $dicN6$useState([]);
    let clear = (assertiveness)=>{
        if (!assertiveness || assertiveness === 'assertive') setAssertiveMessages([]);
        if (!assertiveness || assertiveness === 'polite') setPoliteMessages([]);
    };
    let $35b4f03ceab91306$export$a9b970dcc4ae71a9 = (message1, assertiveness = 'assertive', timeout = $35b4f03ceab91306$var$LIVEREGION_TIMEOUT_DELAY)=>{
        let id = $35b4f03ceab91306$var$messageId++;
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
    $dicN6$useImperativeHandle(ref, ()=>({
            announce: $35b4f03ceab91306$export$a9b970dcc4ae71a9,
            clear: clear
        })
    );
    return(/*#__PURE__*/ $dicN6$react.createElement($dicN6$Fragment, null, /*#__PURE__*/ $dicN6$react.createElement($35b4f03ceab91306$var$MessageBlock, {
        "aria-live": "assertive"
    }, assertiveMessages.map((message)=>/*#__PURE__*/ $dicN6$react.createElement("div", {
            key: message.id
        }, message.text)
    )), /*#__PURE__*/ $dicN6$react.createElement($35b4f03ceab91306$var$MessageBlock, {
        "aria-live": "polite"
    }, politeMessages.map((message)=>/*#__PURE__*/ $dicN6$react.createElement("div", {
            key: message.id
        }, message.text)
    ))));
});
function $35b4f03ceab91306$var$MessageBlock({ children: children , 'aria-live': ariaLive  }) {
    return(/*#__PURE__*/ $dicN6$react.createElement($dicN6$VisuallyHidden, {
        role: "log",
        "aria-live": ariaLive,
        "aria-relevant": "additions"
    }, children));
}




export {$35b4f03ceab91306$export$a9b970dcc4ae71a9 as announce, $35b4f03ceab91306$export$d10ae4f68404609a as clearAnnouncer, $35b4f03ceab91306$export$d8686216b8b81b2f as destroyAnnouncer};
//# sourceMappingURL=module.js.map
