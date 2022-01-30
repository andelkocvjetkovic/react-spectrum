import $ahSJM$react, {Component as $ahSJM$Component} from "react";
import {mergeProps as $ahSJM$mergeProps} from "@react-aria/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $43245d54f8421cdc$exports = {};

$parcel$export($43245d54f8421cdc$exports, "ErrorBoundary", () => $43245d54f8421cdc$export$e926676385687eaf);

class $43245d54f8421cdc$export$e926676385687eaf extends $ahSJM$Component {
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
        return(/*#__PURE__*/ $ahSJM$react.createElement("div", null, this.props.message));
        return this.props.children;
    }
}


var $ad243a1641831901$exports = {};

$parcel$export($ad243a1641831901$exports, "generatePowerset", () => $ad243a1641831901$export$2419b43b8795003b);

function $ad243a1641831901$export$2419b43b8795003b(states, exclude) {
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
                let merged = $ahSJM$mergeProps(combinations[j], {
                    [key]: state
                });
                if (!(exclude && exclude(merged))) combinations.push(merged);
            });
            else {
                let merged = $ahSJM$mergeProps(combinations[j], states[i]);
                if (!(exclude && exclude(merged))) combinations.push(merged);
            }
        }
    }
    return combinations;
}




export {$43245d54f8421cdc$export$e926676385687eaf as ErrorBoundary, $ad243a1641831901$export$2419b43b8795003b as generatePowerset};
//# sourceMappingURL=module.js.map
