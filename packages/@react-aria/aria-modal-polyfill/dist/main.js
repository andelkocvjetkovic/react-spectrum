var $4eN4G$ariahidden = require("aria-hidden");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "watchModals", () => $df22a614184188da$export$11dddb85aae73809);

const $df22a614184188da$var$currentDocument = typeof document !== 'undefined' ? document : undefined;
function $df22a614184188da$export$11dddb85aae73809(selector = 'body', { document: document = $df22a614184188da$var$currentDocument  } = {
}) {
    /**
   * Listen for additions to the child list of the selected element (defaults to body). This is where providers render modal portals.
   * When one is added, see if there is a modal inside it, if there is, then hide everything else from screen readers.
   * If there was already a modal open and a new one was added, undo everything that the previous modal had hidden and hide based on the new one.
   *
   * If a modal container is removed, then undo the hiding based on the last hide others. Check if there are any other modals still around, and
   * hide based on the last one added.
   */ let target = document.querySelector(selector);
    let config = {
        childList: true
    };
    let modalContainers = [];
    let undo;
    let observer = new MutationObserver((mutationRecord)=>{
        for (let mutation of mutationRecord){
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                let addNode = Array.from(mutation.addedNodes).find((node)=>node.querySelector?.('[aria-modal="true"], [data-ismodal="true"]')
                );
                if (addNode) {
                    modalContainers.push(addNode);
                    let modal = addNode.querySelector('[aria-modal="true"], [data-ismodal="true"]');
                    undo?.();
                    undo = $4eN4G$ariahidden.hideOthers(modal);
                }
            } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
                let removedNodes = Array.from(mutation.removedNodes);
                let nodeIndexRemove = modalContainers.findIndex((container)=>removedNodes.includes(container)
                );
                if (nodeIndexRemove >= 0) {
                    undo();
                    modalContainers = modalContainers.filter((val, i)=>i !== nodeIndexRemove
                    );
                    if (modalContainers.length > 0) {
                        let modal = modalContainers[modalContainers.length - 1].querySelector('[aria-modal="true"], [data-ismodal="true"]');
                        undo = $4eN4G$ariahidden.hideOthers(modal);
                    } else undo = undefined;
                }
            }
        }
    });
    observer.observe(target, config);
    return ()=>{
        undo?.();
        observer.disconnect();
    };
}


//# sourceMappingURL=main.js.map
