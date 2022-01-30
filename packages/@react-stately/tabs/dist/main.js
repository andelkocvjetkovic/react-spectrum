var $9e0oT$reactstatelylist = require("@react-stately/list");
var $9e0oT$react = require("react");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $600ba8b0e876613a$exports = {};

$parcel$export($600ba8b0e876613a$exports, "useTabListState", () => $600ba8b0e876613a$export$4ba071daf4e486);


function $600ba8b0e876613a$export$4ba071daf4e486(props) {
    let state = $9e0oT$reactstatelylist.useSingleSelectListState({
        ...props,
        suppressTextValueWarning: true
    });
    $9e0oT$react.useEffect(()=>{
        // Ensure a tab is always selected (in case no selected key was specified or if selected item was deleted from collection)
        let selectedKey = state.selectedKey;
        if (state.selectionManager.isEmpty || !state.collection.getItem(selectedKey)) {
            selectedKey = state.collection.getFirstKey();
            state.selectionManager.replaceSelection(selectedKey);
        }
        if (state.selectionManager.focusedKey == null) state.selectionManager.setFocusedKey(selectedKey);
    }, [
        state.selectionManager,
        state.selectedKey,
        state.collection
    ]);
    return state;
}


$parcel$exportWildcard(module.exports, $600ba8b0e876613a$exports);


//# sourceMappingURL=main.js.map
