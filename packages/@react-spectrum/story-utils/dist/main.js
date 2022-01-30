var $eSyeV$react = require("react");
var $eSyeV$reactariautils = require("@react-aria/utils");

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
var $69734743a3664aaa$exports = {};

$parcel$export($69734743a3664aaa$exports, "ErrorBoundary", () => $69734743a3664aaa$export$e926676385687eaf);

class $69734743a3664aaa$export$e926676385687eaf extends $eSyeV$react.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) // You can render any custom fallback UI
        return(/*#__PURE__*/ ($parcel$interopDefault($eSyeV$react)).createElement("div", null, this.props.message));
        return this.props.children;
    }
}


var $d72fbe484102d750$exports = {};

$parcel$export($d72fbe484102d750$exports, "generatePowerset", () => $d72fbe484102d750$export$2419b43b8795003b);

function $d72fbe484102d750$export$2419b43b8795003b(states, exclude) {
    let combinations = [
        {
        }
    ];
    for(let i = 0; i < states.length; i++){
        let len = combinations.length;
        for(let j = 0; j < len; j++){
            let [key, value] = Object.entries(states[i])[0];
            // If one of the states/options has multiple values, create a combination for each
            if (Array.isArray(value)) value.forEach((state)=>{
                let merged = $eSyeV$reactariautils.mergeProps(combinations[j], {
                    [key]: state
                });
                if (!(exclude && exclude(merged))) combinations.push(merged);
            });
            else {
                let merged = $eSyeV$reactariautils.mergeProps(combinations[j], states[i]);
                if (!(exclude && exclude(merged))) combinations.push(merged);
            }
        }
    }
    return combinations;
}


$parcel$exportWildcard(module.exports, $69734743a3664aaa$exports);
$parcel$exportWildcard(module.exports, $d72fbe484102d750$exports);


//# sourceMappingURL=main.js.map
