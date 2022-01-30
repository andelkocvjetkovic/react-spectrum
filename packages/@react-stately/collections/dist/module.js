import $bkJrn$react, {useMemo as $bkJrn$useMemo, useRef as $bkJrn$useRef} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $6d3916c252bf594d$exports = {};

$parcel$export($6d3916c252bf594d$exports, "Item", () => $6d3916c252bf594d$export$6d08773d2e66f8f2);

function $6d3916c252bf594d$var$Item(props) {
    return null;
}
$6d3916c252bf594d$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems , title: title , children: children  } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !context?.suppressTextValueWarning) console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.');
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $6d3916c252bf594d$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child1 of childItems)yield {
                type: 'item',
                value: child1
            };
            else if (title) {
                let items = [];
                $bkJrn$react.Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $6d3916c252bf594d$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && $bkJrn$react.Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $6d3916c252bf594d$export$6d08773d2e66f8f2 = $6d3916c252bf594d$var$Item;


var $4f7c4e79589b00fc$exports = {};

$parcel$export($4f7c4e79589b00fc$exports, "Section", () => $4f7c4e79589b00fc$export$6e2c8f0811a474ce);

function $4f7c4e79589b00fc$var$Section(props) {
    return null;
}
$4f7c4e79589b00fc$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children , title: title , items: items1  } = props;
    yield {
        type: 'section',
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items1) throw new Error('props.children was a function but props.items is missing');
                for (let item of items1)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                $bkJrn$react.Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $4f7c4e79589b00fc$export$6e2c8f0811a474ce = $4f7c4e79589b00fc$var$Section;


var $4f269d7f0f8629e4$exports = {};


var $9bac41136ddb5831$exports = {};

$parcel$export($9bac41136ddb5831$exports, "useCollection", () => $9bac41136ddb5831$export$6cd28814d92fa9c9);

class $8ebb3d5cda0884fa$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $8ebb3d5cda0884fa$var$iterable(()=>this.iterateCollection(props)
        );
    }
    *iterateCollection(props) {
        let { children: children , items: items  } = props;
        if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            for (let item of props.items)yield* this.getFullNode({
                value: item
            }, {
                renderer: children
            });
        } else {
            let items = [];
            $bkJrn$react.Children.forEach(children, (child)=>{
                items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {
                });
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            let key = v.key ?? v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ($bkJrn$react.isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = typeof element.type === 'function' ? element.type.name : element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            let index = partialNode.index;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                let nodeKey = childNode.key;
                if (!nodeKey) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $8ebb3d5cda0884fa$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    // Cache the node based on its value
                    node.value = childNode.value || partialNode.value;
                    if (node.value) this.cache.set(node.value, node);
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$8ebb3d5cda0884fa$var$capitalize(node.type)}> in <${$8ebb3d5cda0884fa$var$capitalize(parentNode.type)}>. Only <${$8ebb3d5cda0884fa$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null) return;
        // Create full node
        let builder = this;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: partialNode.value,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: partialNode.textValue,
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes,
            childNodes: $8ebb3d5cda0884fa$var$iterable(function*() {
                if (!partialNode.hasChildNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) child.key = `${node.key}${child.key}`;
                    child.index = index;
                    let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
                    for (let node1 of nodes){
                        index++;
                        yield node1;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $8ebb3d5cda0884fa$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item1 of iterable){
                cache.push(item1);
                yield item1;
            }
        }
    };
}
function $8ebb3d5cda0884fa$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element))
    ;
    if (outer) return outer;
    if (inner) return inner;
}
function $8ebb3d5cda0884fa$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}



function $9bac41136ddb5831$export$6cd28814d92fa9c9(props, factory, context, invalidators = []) {
    let builder = $bkJrn$useMemo(()=>new $8ebb3d5cda0884fa$export$bf788dd355e3a401()
    , []);
    let prev = $bkJrn$useRef(null);
    return $bkJrn$useMemo(()=>{
        let nodes = builder.build(props, context);
        prev.current = factory(nodes, prev.current);
        return prev.current;
    // Don't invalidate when any prop changes, just the two we care about.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        builder,
        props.children,
        props.items,
        context,
        ...invalidators
    ]);
}


var $971e16ca5268614a$exports = {};

$parcel$export($971e16ca5268614a$exports, "getItemCount", () => $971e16ca5268614a$export$77d5aafae4e095b2);
const $971e16ca5268614a$var$cache = new WeakMap();
function $971e16ca5268614a$export$77d5aafae4e095b2(collection) {
    let count = $971e16ca5268614a$var$cache.get(collection);
    if (count != null) return count;
    count = 0;
    for (let item of collection)if (item.type === 'section') count += $971e16ca5268614a$export$77d5aafae4e095b2(item.childNodes);
    else count++;
    $971e16ca5268614a$var$cache.set(collection, count);
    return count;
}




export {$6d3916c252bf594d$export$6d08773d2e66f8f2 as Item, $4f7c4e79589b00fc$export$6e2c8f0811a474ce as Section, $9bac41136ddb5831$export$6cd28814d92fa9c9 as useCollection, $971e16ca5268614a$export$77d5aafae4e095b2 as getItemCount};
//# sourceMappingURL=module.js.map