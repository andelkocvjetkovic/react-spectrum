import $aURLd$react, {useRef as $aURLd$useRef, useContext as $aURLd$useContext, useEffect as $aURLd$useEffect, useState as $aURLd$useState} from "react";
import {useLayoutEffect as $aURLd$useLayoutEffect, runAfterTransition as $aURLd$runAfterTransition, focusWithoutScrolling as $aURLd$focusWithoutScrolling, mergeProps as $aURLd$mergeProps, useSyncRef as $aURLd$useSyncRef} from "@react-aria/utils";
import {getInteractionModality as $aURLd$getInteractionModality, isFocusVisible as $aURLd$isFocusVisible, useFocusVisibleListener as $aURLd$useFocusVisibleListener, useFocus as $aURLd$useFocus, useFocusWithin as $aURLd$useFocusWithin, useKeyboard as $aURLd$useKeyboard} from "@react-aria/interactions";
import $aURLd$clsx from "clsx";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $345cec71975d1efc$exports = {};

$parcel$export($345cec71975d1efc$exports, "FocusScope", () => $345cec71975d1efc$export$20e40289641fbbb6);
$parcel$export($345cec71975d1efc$exports, "useFocusManager", () => $345cec71975d1efc$export$10c5169755ce7bd7);
$parcel$export($345cec71975d1efc$exports, "getFocusableTreeWalker", () => $345cec71975d1efc$export$2d6ec8fc375ceafa);
$parcel$export($345cec71975d1efc$exports, "createFocusManager", () => $345cec71975d1efc$export$c5251b9e124bf29);
var $af22d2fec77eec53$exports = {};

$parcel$export($af22d2fec77eec53$exports, "focusSafely", () => $af22d2fec77eec53$export$80f3e147d781571c);


function $af22d2fec77eec53$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if ($aURLd$getInteractionModality() === 'virtual') {
        let lastFocusedElement = document.activeElement;
        $aURLd$runAfterTransition(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) $aURLd$focusWithoutScrolling(element);
        });
    } else $aURLd$focusWithoutScrolling(element);
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
 */ function $6133e38067568d88$var$isStyleVisible(element) {
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
function $6133e38067568d88$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $6133e38067568d88$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $6133e38067568d88$var$isStyleVisible(element) && $6133e38067568d88$var$isAttributeVisible(element, childElement) && (!element.parentElement || $6133e38067568d88$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $345cec71975d1efc$var$FocusContext = /*#__PURE__*/ $aURLd$react.createContext(null);
let $345cec71975d1efc$var$activeScope = null;
let $345cec71975d1efc$var$scopes = new Map();
function $345cec71975d1efc$export$20e40289641fbbb6(props) {
    let { children: children , contain: contain , restoreFocus: restoreFocus , autoFocus: autoFocus  } = props;
    let startRef = $aURLd$useRef();
    let endRef = $aURLd$useRef();
    let scopeRef = $aURLd$useRef([]);
    let ctx = $aURLd$useContext($345cec71975d1efc$var$FocusContext);
    let parentScope = ctx?.scopeRef;
    $aURLd$useLayoutEffect(()=>{
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
    $aURLd$useLayoutEffect(()=>{
        $345cec71975d1efc$var$scopes.set(scopeRef, parentScope);
        return ()=>{
            // Restore the active scope on unmount if this scope or a descendant scope is active.
            // Parent effect cleanups run before children, so we need to check if the
            // parent scope actually still exists before restoring the active scope to it.
            if ((scopeRef === $345cec71975d1efc$var$activeScope || $345cec71975d1efc$var$isAncestorScope(scopeRef, $345cec71975d1efc$var$activeScope)) && (!parentScope || $345cec71975d1efc$var$scopes.has(parentScope))) $345cec71975d1efc$var$activeScope = parentScope;
            $345cec71975d1efc$var$scopes.delete(scopeRef);
        };
    }, [
        scopeRef,
        parentScope
    ]);
    $345cec71975d1efc$var$useFocusContainment(scopeRef, contain);
    $345cec71975d1efc$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $345cec71975d1efc$var$useAutoFocus(scopeRef, autoFocus);
    let focusManager = $345cec71975d1efc$var$createFocusManagerForScope(scopeRef);
    return(/*#__PURE__*/ $aURLd$react.createElement($345cec71975d1efc$var$FocusContext.Provider, {
        value: {
            scopeRef: scopeRef,
            focusManager: focusManager
        }
    }, /*#__PURE__*/ $aURLd$react.createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ $aURLd$react.createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    })));
}
function $345cec71975d1efc$export$10c5169755ce7bd7() {
    return $aURLd$useContext($345cec71975d1efc$var$FocusContext)?.focusManager;
}
function $345cec71975d1efc$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa($345cec71975d1efc$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $345cec71975d1efc$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $345cec71975d1efc$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa($345cec71975d1efc$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $345cec71975d1efc$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $345cec71975d1efc$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa($345cec71975d1efc$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $345cec71975d1efc$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa($345cec71975d1efc$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $345cec71975d1efc$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $345cec71975d1efc$var$focusableElements = [
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
const $345cec71975d1efc$var$FOCUSABLE_ELEMENT_SELECTOR = $345cec71975d1efc$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$345cec71975d1efc$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $345cec71975d1efc$var$TABBABLE_ELEMENT_SELECTOR = $345cec71975d1efc$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $345cec71975d1efc$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $345cec71975d1efc$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = $aURLd$useRef();
    let raf = $aURLd$useRef(null);
    $aURLd$useLayoutEffect(()=>{
        let scope1 = scopeRef.current;
        if (!contain) return;
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || scopeRef !== $345cec71975d1efc$var$activeScope) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!$345cec71975d1efc$var$isElementInScope(focusedElement, scope)) return;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa($345cec71975d1efc$var$getScopeRoot(scope), {
                tabbable: true
            }, scope);
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $345cec71975d1efc$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if (!$345cec71975d1efc$var$activeScope || $345cec71975d1efc$var$isAncestorScope($345cec71975d1efc$var$activeScope, scopeRef)) {
                $345cec71975d1efc$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if (scopeRef === $345cec71975d1efc$var$activeScope && !$345cec71975d1efc$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($345cec71975d1efc$var$activeScope) $345cec71975d1efc$var$focusFirstInScope($345cec71975d1efc$var$activeScope.current);
            } else if (scopeRef === $345cec71975d1efc$var$activeScope) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (scopeRef === $345cec71975d1efc$var$activeScope && !$345cec71975d1efc$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $345cec71975d1efc$var$activeScope = scopeRef;
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
    $aURLd$useEffect(()=>{
        return ()=>cancelAnimationFrame(raf.current)
        ;
    }, [
        raf
    ]);
}
function $345cec71975d1efc$var$isElementInAnyScope(element) {
    for (let scope of $345cec71975d1efc$var$scopes.keys()){
        if ($345cec71975d1efc$var$isElementInScope(element, scope.current)) return true;
    }
    return false;
}
function $345cec71975d1efc$var$isElementInScope(element, scope) {
    return scope.some((node)=>node.contains(element)
    );
}
function $345cec71975d1efc$var$isElementInChildScope(element, scope) {
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let s of $345cec71975d1efc$var$scopes.keys()){
        if ((s === scope || $345cec71975d1efc$var$isAncestorScope(scope, s)) && $345cec71975d1efc$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $345cec71975d1efc$var$isAncestorScope(ancestor, scope) {
    let parent = $345cec71975d1efc$var$scopes.get(scope);
    if (!parent) return false;
    if (parent === ancestor) return true;
    return $345cec71975d1efc$var$isAncestorScope(ancestor, parent);
}
function $345cec71975d1efc$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        $af22d2fec77eec53$export$80f3e147d781571c(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err1) {
    // ignore
    }
}
function $345cec71975d1efc$var$focusFirstInScope(scope) {
    let sentinel = scope[0].previousElementSibling;
    let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa($345cec71975d1efc$var$getScopeRoot(scope), {
        tabbable: true
    }, scope);
    walker.currentNode = sentinel;
    $345cec71975d1efc$var$focusElement(walker.nextNode());
}
function $345cec71975d1efc$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = $aURLd$react.useRef(autoFocus);
    $aURLd$useEffect(()=>{
        if (autoFocusRef.current) {
            $345cec71975d1efc$var$activeScope = scopeRef;
            if (!$345cec71975d1efc$var$isElementInScope(document.activeElement, $345cec71975d1efc$var$activeScope.current)) $345cec71975d1efc$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, []);
}
function $345cec71975d1efc$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    $aURLd$useLayoutEffect(()=>{
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
            if (!$345cec71975d1efc$var$isElementInScope(focusedElement, scope)) return;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) nodeToRestore = null;
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$345cec71975d1efc$var$isElementInScope(nextElement, scope)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($345cec71975d1efc$var$isElementInScope(nextElement, scope))
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $345cec71975d1efc$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$345cec71975d1efc$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $345cec71975d1efc$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener('keydown', onKeyDown, true);
            if (restoreFocus && nodeToRestore && $345cec71975d1efc$var$isElementInScope(document.activeElement, scope)) requestAnimationFrame(()=>{
                if (document.body.contains(nodeToRestore)) $345cec71975d1efc$var$focusElement(nodeToRestore);
            });
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
}
function $345cec71975d1efc$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = opts?.tabbable ? $345cec71975d1efc$var$TABBABLE_ELEMENT_SELECTOR : $345cec71975d1efc$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            // Skip nodes inside the starting node.
            if (opts?.from?.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && $6133e38067568d88$export$e989c0fffaa6b27a(node) && (!scope || $345cec71975d1efc$var$isElementInScope(node, scope))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts?.from) walker.currentNode = opts.from;
    return walker;
}
function $345cec71975d1efc$export$c5251b9e124bf29(ref) {
    return {
        focusNext (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $345cec71975d1efc$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $345cec71975d1efc$var$last(walker);
                if (next) $345cec71975d1efc$var$focusElement(next, true);
                return next;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                previousNode = $345cec71975d1efc$var$last(walker);
            }
            if (previousNode) $345cec71975d1efc$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let nextNode = walker.nextNode();
            if (nextNode) $345cec71975d1efc$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $345cec71975d1efc$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let next = $345cec71975d1efc$var$last(walker);
            if (next) $345cec71975d1efc$var$focusElement(next, true);
            return next;
        }
    };
}
function $345cec71975d1efc$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}


var $aa76991f597ed3b2$exports = {};

$parcel$export($aa76991f597ed3b2$exports, "FocusRing", () => $aa76991f597ed3b2$export$1a38b4ad7f578e1d);



var $cd1e0c75682a5239$exports = {};

$parcel$export($cd1e0c75682a5239$exports, "useFocusRing", () => $cd1e0c75682a5239$export$4e328f61c538687f);



function $cd1e0c75682a5239$export$4e328f61c538687f(props = {
}) {
    let { autoFocus: autoFocus = false , isTextInput: isTextInput , within: within  } = props;
    let state = $aURLd$useRef({
        isFocused: false,
        isFocusVisible: autoFocus || $aURLd$isFocusVisible()
    }).current;
    let [isFocused1, setFocused] = $aURLd$useState(false);
    let [isFocusVisibleState, setFocusVisible] = $aURLd$useState(()=>state.isFocused && state.isFocusVisible
    );
    let updateState = ()=>setFocusVisible(state.isFocused && state.isFocusVisible)
    ;
    let onFocusChange = (isFocused)=>{
        state.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    };
    $aURLd$useFocusVisibleListener((isFocusVisible)=>{
        state.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps  } = $aURLd$useFocus({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps  } = $aURLd$useFocusWithin({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused1,
        isFocusVisible: state.isFocused && isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $aa76991f597ed3b2$export$1a38b4ad7f578e1d(props) {
    let { children: children , focusClass: focusClass , focusRingClass: focusRingClass  } = props;
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $cd1e0c75682a5239$export$4e328f61c538687f(props);
    let child = $aURLd$react.Children.only(children);
    return(/*#__PURE__*/ $aURLd$react.cloneElement(child, $aURLd$mergeProps(child.props, {
        ...focusProps,
        className: $aURLd$clsx({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    })));
}


var $5484c94c121bafff$exports = {};

$parcel$export($5484c94c121bafff$exports, "FocusableProvider", () => $5484c94c121bafff$export$13f3202a3e5ddd5);
$parcel$export($5484c94c121bafff$exports, "useFocusable", () => $5484c94c121bafff$export$4c014de7c8940b4c);



let $5484c94c121bafff$var$FocusableContext = /*#__PURE__*/ $aURLd$react.createContext(null);
function $5484c94c121bafff$var$useFocusableContext(ref) {
    let context = $aURLd$useContext($5484c94c121bafff$var$FocusableContext) || {
    };
    $aURLd$useSyncRef(context, ref);
    // eslint-disable-next-line
    let { ref: _ , ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $5484c94c121bafff$var$FocusableProvider(props, ref) {
    let { children: children , ...otherProps } = props;
    let context = {
        ...otherProps,
        ref: ref
    };
    return(/*#__PURE__*/ $aURLd$react.createElement($5484c94c121bafff$var$FocusableContext.Provider, {
        value: context
    }, children));
}
let $5484c94c121bafff$export$13f3202a3e5ddd5 = /*#__PURE__*/ $aURLd$react.forwardRef($5484c94c121bafff$var$FocusableProvider);
function $5484c94c121bafff$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps  } = $aURLd$useFocus(props);
    let { keyboardProps: keyboardProps  } = $aURLd$useKeyboard(props);
    let interactions = $aURLd$mergeProps(focusProps, keyboardProps);
    let domProps = $5484c94c121bafff$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {
    } : domProps;
    let autoFocusRef = $aURLd$useRef(props.autoFocus);
    $aURLd$useEffect(()=>{
        if (autoFocusRef.current && domRef.current) domRef.current.focus();
        autoFocusRef.current = false;
    }, []);
    return {
        focusableProps: $aURLd$mergeProps({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}






export {$345cec71975d1efc$export$20e40289641fbbb6 as FocusScope, $345cec71975d1efc$export$10c5169755ce7bd7 as useFocusManager, $345cec71975d1efc$export$2d6ec8fc375ceafa as getFocusableTreeWalker, $345cec71975d1efc$export$c5251b9e124bf29 as createFocusManager, $aa76991f597ed3b2$export$1a38b4ad7f578e1d as FocusRing, $5484c94c121bafff$export$13f3202a3e5ddd5 as FocusableProvider, $5484c94c121bafff$export$4c014de7c8940b4c as useFocusable, $cd1e0c75682a5239$export$4e328f61c538687f as useFocusRing, $af22d2fec77eec53$export$80f3e147d781571c as focusSafely};
//# sourceMappingURL=module.js.map
