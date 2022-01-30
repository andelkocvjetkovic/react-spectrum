var $4gWTO$react = require("react");
var $4gWTO$reactariautils = require("@react-aria/utils");
var $4gWTO$reactariainteractions = require("@react-aria/interactions");
var $4gWTO$clsx = require("clsx");

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
var $67bda5cc6eb6770f$exports = {};

$parcel$export($67bda5cc6eb6770f$exports, "FocusScope", () => $67bda5cc6eb6770f$export$20e40289641fbbb6);
$parcel$export($67bda5cc6eb6770f$exports, "useFocusManager", () => $67bda5cc6eb6770f$export$10c5169755ce7bd7);
$parcel$export($67bda5cc6eb6770f$exports, "getFocusableTreeWalker", () => $67bda5cc6eb6770f$export$2d6ec8fc375ceafa);
$parcel$export($67bda5cc6eb6770f$exports, "createFocusManager", () => $67bda5cc6eb6770f$export$c5251b9e124bf29);
var $10bccad45c96e2c2$exports = {};

$parcel$export($10bccad45c96e2c2$exports, "focusSafely", () => $10bccad45c96e2c2$export$80f3e147d781571c);


function $10bccad45c96e2c2$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if ($4gWTO$reactariainteractions.getInteractionModality() === 'virtual') {
        let lastFocusedElement = document.activeElement;
        $4gWTO$reactariautils.runAfterTransition(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) $4gWTO$reactariautils.focusWithoutScrolling(element);
        });
    } else $4gWTO$reactariautils.focusWithoutScrolling(element);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $acf1eaeb94ffaeff$var$isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
    let { display: display , visibility: visibility  } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle  } = element.ownerDocument.defaultView;
        let { display: computedDisplay , visibility: computedVisibility  } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $acf1eaeb94ffaeff$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $acf1eaeb94ffaeff$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $acf1eaeb94ffaeff$var$isStyleVisible(element) && $acf1eaeb94ffaeff$var$isAttributeVisible(element, childElement) && (!element.parentElement || $acf1eaeb94ffaeff$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $67bda5cc6eb6770f$var$FocusContext = /*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).createContext(null);
let $67bda5cc6eb6770f$var$activeScope = null;
let $67bda5cc6eb6770f$var$scopes = new Map();
function $67bda5cc6eb6770f$export$20e40289641fbbb6(props) {
    let { children: children , contain: contain , restoreFocus: restoreFocus , autoFocus: autoFocus  } = props;
    let startRef = $4gWTO$react.useRef();
    let endRef = $4gWTO$react.useRef();
    let scopeRef = $4gWTO$react.useRef([]);
    let ctx = $4gWTO$react.useContext($67bda5cc6eb6770f$var$FocusContext);
    let parentScope = ctx?.scopeRef;
    $4gWTO$reactariautils.useLayoutEffect(()=>{
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = startRef.current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children,
        parentScope
    ]);
    $4gWTO$reactariautils.useLayoutEffect(()=>{
        $67bda5cc6eb6770f$var$scopes.set(scopeRef, parentScope);
        return ()=>{
            // Restore the active scope on unmount if this scope or a descendant scope is active.
            // Parent effect cleanups run before children, so we need to check if the
            // parent scope actually still exists before restoring the active scope to it.
            if ((scopeRef === $67bda5cc6eb6770f$var$activeScope || $67bda5cc6eb6770f$var$isAncestorScope(scopeRef, $67bda5cc6eb6770f$var$activeScope)) && (!parentScope || $67bda5cc6eb6770f$var$scopes.has(parentScope))) $67bda5cc6eb6770f$var$activeScope = parentScope;
            $67bda5cc6eb6770f$var$scopes.delete(scopeRef);
        };
    }, [
        scopeRef,
        parentScope
    ]);
    $67bda5cc6eb6770f$var$useFocusContainment(scopeRef, contain);
    $67bda5cc6eb6770f$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $67bda5cc6eb6770f$var$useAutoFocus(scopeRef, autoFocus);
    let focusManager = $67bda5cc6eb6770f$var$createFocusManagerForScope(scopeRef);
    return(/*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).createElement($67bda5cc6eb6770f$var$FocusContext.Provider, {
        value: {
            scopeRef: scopeRef,
            focusManager: focusManager
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    })));
}
function $67bda5cc6eb6770f$export$10c5169755ce7bd7() {
    return $4gWTO$react.useContext($67bda5cc6eb6770f$var$FocusContext)?.focusManager;
}
function $67bda5cc6eb6770f$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa($67bda5cc6eb6770f$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $67bda5cc6eb6770f$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $67bda5cc6eb6770f$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa($67bda5cc6eb6770f$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $67bda5cc6eb6770f$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $67bda5cc6eb6770f$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa($67bda5cc6eb6770f$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $67bda5cc6eb6770f$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa($67bda5cc6eb6770f$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $67bda5cc6eb6770f$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $67bda5cc6eb6770f$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]'
];
const $67bda5cc6eb6770f$var$FOCUSABLE_ELEMENT_SELECTOR = $67bda5cc6eb6770f$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$67bda5cc6eb6770f$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $67bda5cc6eb6770f$var$TABBABLE_ELEMENT_SELECTOR = $67bda5cc6eb6770f$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $67bda5cc6eb6770f$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $67bda5cc6eb6770f$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = $4gWTO$react.useRef();
    let raf = $4gWTO$react.useRef(null);
    $4gWTO$reactariautils.useLayoutEffect(()=>{
        let scope1 = scopeRef.current;
        if (!contain) return;
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || scopeRef !== $67bda5cc6eb6770f$var$activeScope) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!$67bda5cc6eb6770f$var$isElementInScope(focusedElement, scope)) return;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa($67bda5cc6eb6770f$var$getScopeRoot(scope), {
                tabbable: true
            }, scope);
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $67bda5cc6eb6770f$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if (!$67bda5cc6eb6770f$var$activeScope || $67bda5cc6eb6770f$var$isAncestorScope($67bda5cc6eb6770f$var$activeScope, scopeRef)) {
                $67bda5cc6eb6770f$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if (scopeRef === $67bda5cc6eb6770f$var$activeScope && !$67bda5cc6eb6770f$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($67bda5cc6eb6770f$var$activeScope) $67bda5cc6eb6770f$var$focusFirstInScope($67bda5cc6eb6770f$var$activeScope.current);
            } else if (scopeRef === $67bda5cc6eb6770f$var$activeScope) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (scopeRef === $67bda5cc6eb6770f$var$activeScope && !$67bda5cc6eb6770f$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $67bda5cc6eb6770f$var$activeScope = scopeRef;
                    focusedNode.current = e.target;
                    focusedNode.current.focus();
                }
            });
        };
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('focusin', onFocus, false);
        scope1.forEach((element)=>element.addEventListener('focusin', onFocus, false)
        );
        scope1.forEach((element)=>element.addEventListener('focusout', onBlur, false)
        );
        return ()=>{
            document.removeEventListener('keydown', onKeyDown, false);
            document.removeEventListener('focusin', onFocus, false);
            scope1.forEach((element)=>element.removeEventListener('focusin', onFocus, false)
            );
            scope1.forEach((element)=>element.removeEventListener('focusout', onBlur, false)
            );
        };
    }, [
        scopeRef,
        contain
    ]);
    // eslint-disable-next-line arrow-body-style
    $4gWTO$react.useEffect(()=>{
        return ()=>cancelAnimationFrame(raf.current)
        ;
    }, [
        raf
    ]);
}
function $67bda5cc6eb6770f$var$isElementInAnyScope(element) {
    for (let scope of $67bda5cc6eb6770f$var$scopes.keys()){
        if ($67bda5cc6eb6770f$var$isElementInScope(element, scope.current)) return true;
    }
    return false;
}
function $67bda5cc6eb6770f$var$isElementInScope(element, scope) {
    return scope.some((node)=>node.contains(element)
    );
}
function $67bda5cc6eb6770f$var$isElementInChildScope(element, scope) {
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let s of $67bda5cc6eb6770f$var$scopes.keys()){
        if ((s === scope || $67bda5cc6eb6770f$var$isAncestorScope(scope, s)) && $67bda5cc6eb6770f$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $67bda5cc6eb6770f$var$isAncestorScope(ancestor, scope) {
    let parent = $67bda5cc6eb6770f$var$scopes.get(scope);
    if (!parent) return false;
    if (parent === ancestor) return true;
    return $67bda5cc6eb6770f$var$isAncestorScope(ancestor, parent);
}
function $67bda5cc6eb6770f$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        $10bccad45c96e2c2$export$80f3e147d781571c(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err1) {
    // ignore
    }
}
function $67bda5cc6eb6770f$var$focusFirstInScope(scope) {
    let sentinel = scope[0].previousElementSibling;
    let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa($67bda5cc6eb6770f$var$getScopeRoot(scope), {
        tabbable: true
    }, scope);
    walker.currentNode = sentinel;
    $67bda5cc6eb6770f$var$focusElement(walker.nextNode());
}
function $67bda5cc6eb6770f$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = ($parcel$interopDefault($4gWTO$react)).useRef(autoFocus);
    $4gWTO$react.useEffect(()=>{
        if (autoFocusRef.current) {
            $67bda5cc6eb6770f$var$activeScope = scopeRef;
            if (!$67bda5cc6eb6770f$var$isElementInScope(document.activeElement, $67bda5cc6eb6770f$var$activeScope.current)) $67bda5cc6eb6770f$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, []);
}
function $67bda5cc6eb6770f$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    $4gWTO$reactariautils.useLayoutEffect(()=>{
        if (!restoreFocus) return;
        let scope = scopeRef.current;
        let nodeToRestore = document.activeElement;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) return;
            let focusedElement = document.activeElement;
            if (!$67bda5cc6eb6770f$var$isElementInScope(focusedElement, scope)) return;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) nodeToRestore = null;
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$67bda5cc6eb6770f$var$isElementInScope(nextElement, scope)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($67bda5cc6eb6770f$var$isElementInScope(nextElement, scope))
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $67bda5cc6eb6770f$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$67bda5cc6eb6770f$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $67bda5cc6eb6770f$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener('keydown', onKeyDown, true);
            if (restoreFocus && nodeToRestore && $67bda5cc6eb6770f$var$isElementInScope(document.activeElement, scope)) requestAnimationFrame(()=>{
                if (document.body.contains(nodeToRestore)) $67bda5cc6eb6770f$var$focusElement(nodeToRestore);
            });
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
}
function $67bda5cc6eb6770f$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = opts?.tabbable ? $67bda5cc6eb6770f$var$TABBABLE_ELEMENT_SELECTOR : $67bda5cc6eb6770f$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            // Skip nodes inside the starting node.
            if (opts?.from?.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && $acf1eaeb94ffaeff$export$e989c0fffaa6b27a(node) && (!scope || $67bda5cc6eb6770f$var$isElementInScope(node, scope))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts?.from) walker.currentNode = opts.from;
    return walker;
}
function $67bda5cc6eb6770f$export$c5251b9e124bf29(ref) {
    return {
        focusNext (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $67bda5cc6eb6770f$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $67bda5cc6eb6770f$var$last(walker);
                if (next) $67bda5cc6eb6770f$var$focusElement(next, true);
                return next;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                previousNode = $67bda5cc6eb6770f$var$last(walker);
            }
            if (previousNode) $67bda5cc6eb6770f$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let nextNode = walker.nextNode();
            if (nextNode) $67bda5cc6eb6770f$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $67bda5cc6eb6770f$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let next = $67bda5cc6eb6770f$var$last(walker);
            if (next) $67bda5cc6eb6770f$var$focusElement(next, true);
            return next;
        }
    };
}
function $67bda5cc6eb6770f$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}


var $397570425d35f77b$exports = {};

$parcel$export($397570425d35f77b$exports, "FocusRing", () => $397570425d35f77b$export$1a38b4ad7f578e1d);



var $f4f8b7b22f382a3d$exports = {};

$parcel$export($f4f8b7b22f382a3d$exports, "useFocusRing", () => $f4f8b7b22f382a3d$export$4e328f61c538687f);



function $f4f8b7b22f382a3d$export$4e328f61c538687f(props = {
}) {
    let { autoFocus: autoFocus = false , isTextInput: isTextInput , within: within  } = props;
    let state = $4gWTO$react.useRef({
        isFocused: false,
        isFocusVisible: autoFocus || $4gWTO$reactariainteractions.isFocusVisible()
    }).current;
    let [isFocused1, setFocused] = $4gWTO$react.useState(false);
    let [isFocusVisibleState, setFocusVisible] = $4gWTO$react.useState(()=>state.isFocused && state.isFocusVisible
    );
    let updateState = ()=>setFocusVisible(state.isFocused && state.isFocusVisible)
    ;
    let onFocusChange = (isFocused)=>{
        state.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    };
    $4gWTO$reactariainteractions.useFocusVisibleListener((isFocusVisible)=>{
        state.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps  } = $4gWTO$reactariainteractions.useFocus({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps  } = $4gWTO$reactariainteractions.useFocusWithin({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused1,
        isFocusVisible: state.isFocused && isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $397570425d35f77b$export$1a38b4ad7f578e1d(props) {
    let { children: children , focusClass: focusClass , focusRingClass: focusRingClass  } = props;
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $f4f8b7b22f382a3d$export$4e328f61c538687f(props);
    let child = ($parcel$interopDefault($4gWTO$react)).Children.only(children);
    return(/*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).cloneElement(child, $4gWTO$reactariautils.mergeProps(child.props, {
        ...focusProps,
        className: ($parcel$interopDefault($4gWTO$clsx))({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    })));
}


var $5c5991ee947f64f5$exports = {};

$parcel$export($5c5991ee947f64f5$exports, "FocusableProvider", () => $5c5991ee947f64f5$export$13f3202a3e5ddd5);
$parcel$export($5c5991ee947f64f5$exports, "useFocusable", () => $5c5991ee947f64f5$export$4c014de7c8940b4c);



let $5c5991ee947f64f5$var$FocusableContext = /*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).createContext(null);
function $5c5991ee947f64f5$var$useFocusableContext(ref) {
    let context = $4gWTO$react.useContext($5c5991ee947f64f5$var$FocusableContext) || {
    };
    $4gWTO$reactariautils.useSyncRef(context, ref);
    // eslint-disable-next-line
    let { ref: _ , ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $5c5991ee947f64f5$var$FocusableProvider(props, ref) {
    let { children: children , ...otherProps } = props;
    let context = {
        ...otherProps,
        ref: ref
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).createElement($5c5991ee947f64f5$var$FocusableContext.Provider, {
        value: context
    }, children));
}
let $5c5991ee947f64f5$export$13f3202a3e5ddd5 = /*#__PURE__*/ ($parcel$interopDefault($4gWTO$react)).forwardRef($5c5991ee947f64f5$var$FocusableProvider);
function $5c5991ee947f64f5$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps  } = $4gWTO$reactariainteractions.useFocus(props);
    let { keyboardProps: keyboardProps  } = $4gWTO$reactariainteractions.useKeyboard(props);
    let interactions = $4gWTO$reactariautils.mergeProps(focusProps, keyboardProps);
    let domProps = $5c5991ee947f64f5$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {
    } : domProps;
    let autoFocusRef = $4gWTO$react.useRef(props.autoFocus);
    $4gWTO$react.useEffect(()=>{
        if (autoFocusRef.current && domRef.current) domRef.current.focus();
        autoFocusRef.current = false;
    }, []);
    return {
        focusableProps: $4gWTO$reactariautils.mergeProps({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}




$parcel$exportWildcard(module.exports, $67bda5cc6eb6770f$exports);
$parcel$exportWildcard(module.exports, $397570425d35f77b$exports);
$parcel$exportWildcard(module.exports, $5c5991ee947f64f5$exports);
$parcel$exportWildcard(module.exports, $f4f8b7b22f382a3d$exports);
$parcel$exportWildcard(module.exports, $10bccad45c96e2c2$exports);


//# sourceMappingURL=main.js.map
