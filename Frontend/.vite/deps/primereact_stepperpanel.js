"use client";
import {
  ComponentBase,
  useHandleStyle
} from "./chunk-E3S6LYBH.js";
import {
  PrimeReactContext
} from "./chunk-K6OQKHYW.js";
import {
  require_react
} from "./chunk-QC2YXQ2P.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/primereact/stepperpanel/stepperpanel.esm.js
var React = __toESM(require_react());
var styles = "";
var StepperPanelBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "StepperPanel",
    children: void 0,
    header: null
  },
  css: {
    styles
  }
});
var StepperPanel = React.memo(React.forwardRef(function(inProps, ref) {
  var context = React.useContext(PrimeReactContext);
  var props = StepperPanelBase.getProps(inProps, context);
  var _StepperPanelBase$set = StepperPanelBase.setMetaData({
    props
  }), isUnstyled = _StepperPanelBase$set.isUnstyled;
  useHandleStyle(StepperPanelBase.css.styles, isUnstyled, {
    name: "StepperPanel"
  });
  return React.createElement("span", {
    ref
  }, props.children);
}));
StepperPanel.displayName = "StepperPanel";
export {
  StepperPanel
};
//# sourceMappingURL=primereact_stepperpanel.js.map
