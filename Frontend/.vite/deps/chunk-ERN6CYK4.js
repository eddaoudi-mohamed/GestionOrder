import {
  InputText
} from "./chunk-T7MDB4E4.js";
import {
  CheckIcon
} from "./chunk-45C7TAGX.js";
import {
  TimesIcon
} from "./chunk-EUUWPD6M.js";
import {
  CSSTransition
} from "./chunk-JEIU6D3I.js";
import {
  SpinnerIcon
} from "./chunk-FQLNJCC4.js";
import {
  Tooltip
} from "./chunk-FS5OXXEN.js";
import {
  Portal
} from "./chunk-7U5XMR6U.js";
import {
  IconBase
} from "./chunk-7FL7XTF3.js";
import {
  Ripple
} from "./chunk-LG4PNKVI.js";
import {
  ComponentBase,
  useEventListener,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useOverlayListener,
  usePrevious,
  useResizeListener,
  useStyle,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-E3S6LYBH.js";
import {
  DomHandler,
  EventBus,
  FilterService,
  IconUtils,
  ObjectUtils,
  PrimeReact,
  PrimeReactContext,
  ZIndexUtils,
  ariaLabel,
  classNames,
  localeOption
} from "./chunk-K6OQKHYW.js";
import {
  require_react
} from "./chunk-QC2YXQ2P.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/primereact/paginator/paginator.esm.js
var React12 = __toESM(require_react());

// node_modules/primereact/icons/angledoubleleft/index.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var AngleDoubleLeftIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z",
    fill: "currentColor"
  }));
}));
AngleDoubleLeftIcon.displayName = "AngleDoubleLeftIcon";

// node_modules/primereact/inputnumber/inputnumber.esm.js
var React4 = __toESM(require_react());

// node_modules/primereact/icons/angledown/index.esm.js
var React2 = __toESM(require_react());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var AngleDownIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }));
}));
AngleDownIcon.displayName = "AngleDownIcon";

// node_modules/primereact/icons/angleup/index.esm.js
var React3 = __toESM(require_react());
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var AngleUpIcon = React3.memo(React3.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React3.createElement("svg", _extends3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React3.createElement("path", {
    d: "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",
    fill: "currentColor"
  }));
}));
AngleUpIcon.displayName = "AngleUpIcon";

// node_modules/primereact/inputnumber/inputnumber.esm.js
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input3, hint) {
  if (_typeof(input3) !== "object" || input3 === null)
    return input3;
  var prim = input3[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input3, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input3);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var classes = {
  root: function root(_ref) {
    var props = _ref.props, focusedState = _ref.focusedState, stacked = _ref.stacked, horizontal = _ref.horizontal, vertical = _ref.vertical;
    return classNames("p-inputnumber p-component p-inputwrapper", {
      "p-inputwrapper-filled": props.value != null && props.value.toString().length > 0,
      "p-inputwrapper-focus": focusedState,
      "p-inputnumber-buttons-stacked": stacked,
      "p-inputnumber-buttons-horizontal": horizontal,
      "p-inputnumber-buttons-vertical": vertical,
      "p-invalid": props.invalid
    });
  },
  input: function input(_ref2) {
    var props = _ref2.props, context = _ref2.context;
    return classNames("p-inputnumber-input", {
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: function incrementButton(_ref3) {
    var props = _ref3.props;
    return classNames("p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component", {
      "p-disabled": props.disabled
    });
  },
  incrementIcon: "p-button-icon",
  decrementButton: function decrementButton(_ref4) {
    var props = _ref4.props;
    return classNames("p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component", {
      "p-disabled": props.disabled
    });
  },
  decrementIcon: "p-button-icon"
};
var styles = "\n@layer primereact {\n    .p-inputnumber {\n        display: inline-flex;\n    }\n    \n    .p-inputnumber-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n        display: none;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 0;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-inputnumber-input {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        border-bottom-left-radius: 0;\n        padding: 0;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n        flex: 1 1 auto;\n    }\n    \n    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n        order: 3;\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-horizontal .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n        order: 1;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-vertical {\n        flex-direction: column;\n    }\n    \n    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n        order: 1;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        width: 100%;\n    }\n    \n    .p-inputnumber-buttons-vertical .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n        text-align: center;\n    }\n    \n    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n        order: 3;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        width: 100%;\n    }\n    \n    .p-inputnumber-input {\n        flex: 1 1 auto;\n    }\n    \n    .p-fluid .p-inputnumber {\n        width: 100%;\n    }\n    \n    .p-fluid .p-inputnumber .p-inputnumber-input {\n        width: 1%;\n    }\n    \n    .p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n        width: 100%;\n    }\n}\n";
var InputNumberBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputNumber",
    __parentMetadata: null,
    allowEmpty: true,
    ariaLabelledBy: null,
    autoFocus: false,
    buttonLayout: "stacked",
    className: null,
    currency: void 0,
    currencyDisplay: void 0,
    decrementButtonClassName: null,
    decrementButtonIcon: null,
    disabled: false,
    format: true,
    id: null,
    incrementButtonClassName: null,
    incrementButtonIcon: null,
    inputClassName: null,
    inputId: null,
    inputMode: null,
    inputRef: null,
    inputStyle: null,
    invalid: false,
    variant: null,
    locale: void 0,
    localeMatcher: void 0,
    max: null,
    maxFractionDigits: void 0,
    maxLength: null,
    min: null,
    minFractionDigits: void 0,
    mode: "decimal",
    name: null,
    onBlur: null,
    onChange: null,
    onFocus: null,
    onKeyDown: null,
    onKeyUp: null,
    onValueChange: null,
    pattern: null,
    placeholder: null,
    prefix: null,
    readOnly: false,
    required: false,
    roundingMode: void 0,
    showButtons: false,
    size: null,
    step: 1,
    style: null,
    suffix: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    type: "text",
    useGrouping: true,
    value: null,
    children: void 0
  },
  css: {
    classes,
    styles
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var InputNumber = React4.memo(React4.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React4.useContext(PrimeReactContext);
  var props = InputNumberBase.getProps(inProps, context);
  var _React$useState = React4.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var metaData = _objectSpread(_objectSpread({
    props
  }, props.__parentMetadata), {}, {
    state: {
      focused: focusedState
    }
  });
  var _InputNumberBase$setM = InputNumberBase.setMetaData(metaData), ptm = _InputNumberBase$setM.ptm, cx = _InputNumberBase$setM.cx, isUnstyled = _InputNumberBase$setM.isUnstyled;
  useHandleStyle(InputNumberBase.css.styles, isUnstyled, {
    name: "inputnumber"
  });
  var elementRef = React4.useRef(null);
  var inputRef = React4.useRef(null);
  var timer = React4.useRef(null);
  var lastValue = React4.useRef(null);
  var numberFormat = React4.useRef(null);
  var groupChar = React4.useRef(null);
  var prefixChar = React4.useRef(null);
  var suffixChar = React4.useRef(null);
  var isSpecialChar = React4.useRef(null);
  var _numeral = React4.useRef(null);
  var _group = React4.useRef(null);
  var _minusSign = React4.useRef(null);
  var _currency = React4.useRef(null);
  var _decimal = React4.useRef(null);
  var _decimalSeparator = React4.useRef(null);
  var _suffix = React4.useRef(null);
  var _prefix = React4.useRef(null);
  var _index = React4.useRef(null);
  var isFocusedByClick = React4.useRef(false);
  var _locale = props.locale || context && context.locale || PrimeReact.locale;
  var stacked = props.showButtons && props.buttonLayout === "stacked";
  var horizontal = props.showButtons && props.buttonLayout === "horizontal";
  var vertical = props.showButtons && props.buttonLayout === "vertical";
  var inputMode = props.inputMode || (props.mode === "decimal" && !props.minFractionDigits ? "numeric" : "decimal");
  var getOptions = function getOptions2() {
    return {
      localeMatcher: props.localeMatcher,
      style: props.mode,
      currency: props.currency,
      currencyDisplay: props.currencyDisplay,
      useGrouping: props.useGrouping,
      minimumFractionDigits: props.minFractionDigits,
      maximumFractionDigits: props.maxFractionDigits,
      roundingMode: props.roundingMode
    };
  };
  var constructParser = function constructParser2() {
    numberFormat.current = new Intl.NumberFormat(_locale, getOptions());
    var numerals = _toConsumableArray(new Intl.NumberFormat(_locale, {
      useGrouping: false
    }).format(9876543210)).reverse();
    var index = new Map(numerals.map(function(d, i) {
      return [d, i];
    }));
    _numeral.current = new RegExp("[".concat(numerals.join(""), "]"), "g");
    _group.current = getGroupingExpression();
    _minusSign.current = getMinusSignExpression();
    _currency.current = getCurrencyExpression();
    _decimal.current = getDecimalExpression();
    _decimalSeparator.current = getDecimalSeparator();
    _suffix.current = getSuffixExpression();
    _prefix.current = getPrefixExpression();
    _index.current = function(d) {
      return index.get(d);
    };
  };
  var escapeRegExp = function escapeRegExp2(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };
  var getDecimalSeparator = function getDecimalSeparator2() {
    return new Intl.NumberFormat(_locale, {
      useGrouping: false
    }).format(1.1).trim().replace(_numeral.current, "");
  };
  var getDecimalExpression = function getDecimalExpression2() {
    var formatter = new Intl.NumberFormat(_locale, _objectSpread(_objectSpread({}, getOptions()), {}, {
      useGrouping: false
    }));
    return new RegExp("[".concat(formatter.format(1.1).replace(_currency.current, "").trim().replace(_numeral.current, ""), "]"), "g");
  };
  var getGroupingExpression = function getGroupingExpression2() {
    var formatter = new Intl.NumberFormat(_locale, {
      useGrouping: true
    });
    groupChar.current = formatter.format(1e6).trim().replace(_numeral.current, "").charAt(0);
    return new RegExp("[".concat(groupChar.current, "]"), "g");
  };
  var getMinusSignExpression = function getMinusSignExpression2() {
    var formatter = new Intl.NumberFormat(_locale, {
      useGrouping: false
    });
    return new RegExp("[".concat(formatter.format(-1).trim().replace(_numeral.current, ""), "]"), "g");
  };
  var getCurrencyExpression = function getCurrencyExpression2() {
    if (props.currency) {
      var formatter = new Intl.NumberFormat(_locale, {
        style: "currency",
        currency: props.currency,
        currencyDisplay: props.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        roundingMode: props.roundingMode
      });
      return new RegExp("[".concat(formatter.format(1).replace(/\s/g, "").replace(_numeral.current, "").replace(_group.current, ""), "]"), "g");
    }
    return new RegExp("[]", "g");
  };
  var getPrefixExpression = function getPrefixExpression2() {
    if (props.prefix) {
      prefixChar.current = props.prefix;
    } else {
      var formatter = new Intl.NumberFormat(_locale, {
        style: props.mode,
        currency: props.currency,
        currencyDisplay: props.currencyDisplay
      });
      prefixChar.current = formatter.format(1).split("1")[0];
    }
    return new RegExp("".concat(escapeRegExp(prefixChar.current || "")), "g");
  };
  var getSuffixExpression = function getSuffixExpression2() {
    if (props.suffix) {
      suffixChar.current = props.suffix;
    } else {
      var formatter = new Intl.NumberFormat(_locale, {
        style: props.mode,
        currency: props.currency,
        currencyDisplay: props.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        roundingMode: props.roundingMode
      });
      suffixChar.current = formatter.format(1).split("1")[1];
    }
    return new RegExp("".concat(escapeRegExp(suffixChar.current || "")), "g");
  };
  var formatValue = function formatValue2(value) {
    if (value != null) {
      if (value === "-") {
        return value;
      }
      if (props.format) {
        var formatter = new Intl.NumberFormat(_locale, getOptions());
        var _formattedValue = formatter.format(value);
        if (props.prefix) {
          _formattedValue = props.prefix + _formattedValue;
        }
        if (props.suffix) {
          _formattedValue = _formattedValue + props.suffix;
        }
        return _formattedValue;
      }
      return value.toString();
    }
    return "";
  };
  var parseValue = function parseValue2(text) {
    var filteredText = text.replace(_suffix.current, "").replace(_prefix.current, "").trim().replace(/\s/g, "").replace(_currency.current, "").replace(_group.current, "").replace(_minusSign.current, "-").replace(_decimal.current, ".").replace(_numeral.current, _index.current);
    if (filteredText) {
      if (filteredText === "-") {
        return filteredText;
      }
      var parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  };
  var repeat = function repeat2(event, interval, dir) {
    var i = interval || 500;
    clearTimer();
    timer.current = setTimeout(function() {
      repeat2(event, 40, dir);
    }, i);
    spin(event, dir);
  };
  var spin = function spin2(event, dir) {
    if (inputRef.current) {
      var step = props.step * dir;
      var currentValue = parseValue(inputRef.current.value) || 0;
      var newValue = validateValue(currentValue + step);
      if (props.maxLength && props.maxLength < formatValue(newValue).length) {
        return;
      }
      handleOnChange(event, currentValue, newValue);
      !DomHandler.isTouchDevice() && updateInput(newValue, null, "spin");
      updateModel(event, newValue);
    }
  };
  var onUpButtonMouseDown = function onUpButtonMouseDown2(event) {
    if (!props.disabled && !props.readOnly) {
      DomHandler.focus(inputRef.current, props.autoFocus);
      repeat(event, null, 1);
      event.preventDefault();
    }
  };
  var onUpButtonMouseUp = function onUpButtonMouseUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onUpButtonMouseLeave = function onUpButtonMouseLeave2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onUpButtonKeyUp = function onUpButtonKeyUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onUpButtonKeyDown = function onUpButtonKeyDown2(event) {
    if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
      repeat(event, null, 1);
    }
  };
  var onDownButtonMouseDown = function onDownButtonMouseDown2(event) {
    if (!props.disabled && !props.readOnly) {
      DomHandler.focus(inputRef.current, props.autoFocus);
      repeat(event, null, -1);
      event.preventDefault();
    }
  };
  var onDownButtonMouseUp = function onDownButtonMouseUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onDownButtonMouseLeave = function onDownButtonMouseLeave2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onDownButtonKeyUp = function onDownButtonKeyUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onDownButtonKeyDown = function onDownButtonKeyDown2(event) {
    if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
      repeat(event, null, -1);
    }
  };
  var onInput = function onInput2(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (isSpecialChar.current) {
      event.target.value = lastValue.current;
      isSpecialChar.current = false;
    }
    if (DomHandler.isAndroid()) {
      return;
    }
    var inputType = event.nativeEvent.inputType;
    var data = event.nativeEvent.data;
    if (inputType === "insertText" && /\D/.test(data)) {
      event.target.value = lastValue.current;
    }
  };
  var onInputAndroidKey = function onInputAndroidKey2(event) {
    if (!DomHandler.isAndroid() || props.disabled || props.readOnly) {
      return;
    }
    if (props.onKeyUp) {
      props.onKeyUp(event);
      if (event.defaultPrevented) {
        return;
      }
    }
    var code = event.which || event.keyCode;
    if (code !== 13) {
      event.preventDefault();
    }
    var _char = String.fromCharCode(code);
    var _isDecimalSign = isDecimalSign(_char);
    var _isMinusSign = isMinusSign(_char);
    if (48 <= code && code <= 57 || _isMinusSign || _isDecimalSign) {
      insert(event, _char, {
        isDecimalSign: _isDecimalSign,
        isMinusSign: _isMinusSign
      });
    } else {
      updateValue(event, event.target.value, null, "delete-single");
    }
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey) {
      isSpecialChar.current = true;
      return;
    }
    if (props.onKeyDown) {
      props.onKeyDown(event);
      if (event.defaultPrevented) {
        return;
      }
    }
    lastValue.current = event.target.value;
    if (DomHandler.isAndroid()) {
      return;
    }
    var selectionStart = event.target.selectionStart;
    var selectionEnd = event.target.selectionEnd;
    var inputValue = event.target.value;
    var newValueStr = null;
    switch (event.code) {
      case "ArrowUp":
        spin(event, 1);
        event.preventDefault();
        break;
      case "ArrowDown":
        spin(event, -1);
        event.preventDefault();
        break;
      case "ArrowLeft":
        if (!isNumeralChar(inputValue.charAt(selectionStart - 1))) {
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        if (!isNumeralChar(inputValue.charAt(selectionStart))) {
          event.preventDefault();
        }
        break;
      case "Tab":
      case "NumpadEnter":
      case "Enter":
      case "NumpadEnter":
        newValueStr = validateValue(parseValue(inputValue));
        inputRef.current.value = formatValue(newValueStr);
        inputRef.current.setAttribute("aria-valuenow", newValueStr);
        updateModel(event, newValueStr);
        break;
      case "Backspace":
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          var deleteChar = inputValue.charAt(selectionStart - 1);
          if (isNumeralChar(deleteChar)) {
            var _getDecimalCharIndexe = getDecimalCharIndexes(inputValue), decimalCharIndex = _getDecimalCharIndexe.decimalCharIndex, decimalCharIndexWithoutPrefix = _getDecimalCharIndexe.decimalCharIndexWithoutPrefix;
            var decimalLength = getDecimalLength(inputValue);
            if (_group.current.test(deleteChar)) {
              _group.current.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (_decimal.current.test(deleteChar)) {
              _decimal.current.lastIndex = 0;
              if (decimalLength) {
                inputRef.current.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              var insertedText = isDecimalMode() && (props.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          } else if (_currency.current.test(deleteChar)) {
            var _getCharIndexes = getCharIndexes(inputValue), minusCharIndex = _getCharIndexes.minusCharIndex, currencyCharIndex = _getCharIndexes.currencyCharIndex;
            if (minusCharIndex === currencyCharIndex - 1) {
              newValueStr = inputValue.slice(0, minusCharIndex) + inputValue.slice(selectionStart);
            }
          }
          updateValue(event, newValueStr, null, "delete-single");
        } else {
          newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
          updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      case "Delete":
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          var _deleteChar = inputValue.charAt(selectionStart);
          var _getDecimalCharIndexe2 = getDecimalCharIndexes(inputValue), _decimalCharIndex = _getDecimalCharIndexe2.decimalCharIndex, _decimalCharIndexWithoutPrefix = _getDecimalCharIndexe2.decimalCharIndexWithoutPrefix;
          if (isNumeralChar(_deleteChar)) {
            var _decimalLength = getDecimalLength(inputValue);
            if (_group.current.test(_deleteChar)) {
              _group.current.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (_decimal.current.test(_deleteChar)) {
              _decimal.current.lastIndex = 0;
              if (_decimalLength) {
                inputRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
              var _insertedText = isDecimalMode() && (props.minFractionDigits || 0) < _decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
            } else if (_decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          updateValue(event, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
          updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      case "End":
        event.preventDefault();
        if (!ObjectUtils.isEmpty(props.max)) {
          updateModel(event, props.max);
        }
        break;
      case "Home":
        event.preventDefault();
        if (!ObjectUtils.isEmpty(props.min)) {
          updateModel(event, props.min);
        }
        break;
      default:
        event.preventDefault();
        var _char2 = event.key;
        var _isDecimalSign = isDecimalSign(_char2);
        var _isMinusSign = isMinusSign(_char2);
        if ((event.code.startsWith("Digit") || event.code.startsWith("Numpad")) && Number(_char2) >= 0 && Number(_char2) <= 9 || _isMinusSign || _isDecimalSign) {
          insert(event, _char2, {
            isDecimalSign: _isDecimalSign,
            isMinusSign: _isMinusSign
          });
        }
        break;
    }
  };
  var onPaste = function onPaste2(event) {
    event.preventDefault();
    if (props.disabled || props.readOnly) {
      return;
    }
    var data = (event.clipboardData || window.clipboardData).getData("Text");
    if (data) {
      var filteredData = parseValue(data);
      if (filteredData != null) {
        insert(event, filteredData.toString());
      }
    }
  };
  var allowMinusSign = function allowMinusSign2() {
    return ObjectUtils.isEmpty(props.min) || props.min < 0;
  };
  var isMinusSign = function isMinusSign2(_char3) {
    if (_minusSign.current.test(_char3) || _char3 === "-") {
      _minusSign.current.lastIndex = 0;
      return true;
    }
    return false;
  };
  var replaceDecimalSeparator = function replaceDecimalSeparator2(val) {
    if (isFloat(val)) {
      return val.toString().replace(/\.(?=[^.]*$)/, _decimalSeparator.current);
    }
    return val;
  };
  var isDecimalSign = function isDecimalSign2(_char4) {
    if (_decimal.current.test(_char4) || isFloat(_char4)) {
      _decimal.current.lastIndex = 0;
      return true;
    }
    return false;
  };
  var isDecimalMode = function isDecimalMode2() {
    return props.mode === "decimal";
  };
  var isFloat = function isFloat2(val) {
    var formatter = new Intl.NumberFormat(_locale, getOptions());
    var parseVal = parseValue(formatter.format(val));
    if (parseVal === null) {
      return false;
    }
    return parseVal % 1 !== 0;
  };
  var getDecimalCharIndexes = function getDecimalCharIndexes2(val) {
    var decimalCharIndex = val.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    var filteredVal = val.replace(_prefix.current, "").trim().replace(/\s/g, "").replace(_currency.current, "");
    var decimalCharIndexWithoutPrefix = filteredVal.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  };
  var getCharIndexes = function getCharIndexes2(val) {
    var decimalCharIndex = val.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    var minusCharIndex = val.search(_minusSign.current);
    _minusSign.current.lastIndex = 0;
    var suffixCharIndex = val.search(_suffix.current);
    _suffix.current.lastIndex = 0;
    var currencyCharIndex = val.search(_currency.current);
    if (currencyCharIndex === 0 && prefixChar.current && prefixChar.current.length > 1) {
      currencyCharIndex = prefixChar.current.trim().length;
    }
    _currency.current.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  };
  var insert = function insert2(event, text) {
    var sign = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      isDecimalSign: false,
      isMinusSign: false
    };
    var minusCharIndexOnText = text.search(_minusSign.current);
    _minusSign.current.lastIndex = 0;
    if (!allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    var selectionStart = inputRef.current.selectionStart;
    var selectionEnd = inputRef.current.selectionEnd;
    var inputValue = inputRef.current.value.trim();
    var _getCharIndexes2 = getCharIndexes(inputValue), decimalCharIndex = _getCharIndexes2.decimalCharIndex, minusCharIndex = _getCharIndexes2.minusCharIndex, suffixCharIndex = _getCharIndexes2.suffixCharIndex, currencyCharIndex = _getCharIndexes2.currencyCharIndex;
    var newValueStr;
    if (sign.isMinusSign) {
      var isNewMinusSign = minusCharIndex === -1;
      if (isNewMinusSign && (selectionStart === 0 || selectionStart === currencyCharIndex + 1)) {
        newValueStr = inputValue;
        if (isNewMinusSign || selectionEnd !== 0) {
          newValueStr = insertText(inputValue, text, 0, selectionEnd);
        }
        updateValue(event, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        updateValue(event, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && props.maxFractionDigits) {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, "insert");
      }
    } else {
      var maxFractionDigits = numberFormat.current.resolvedOptions().maximumFractionDigits;
      var operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, operation);
      }
    }
  };
  var replaceSuffix = function replaceSuffix2(value) {
    return value ? value.replace(_suffix.current, "").trim().replace(/\s/g, "").replace(_currency.current, "") : value;
  };
  var insertText = function insertText2(value, text, start, end) {
    var textSplit = text === "." ? text : text.split(".");
    if (textSplit.length === 2) {
      var decimalCharIndex = value.slice(start, end).search(_decimal.current);
      _decimal.current.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + formatValue(text) + replaceSuffix(value).slice(end) : value || formatValue(text);
    } else if (end - start === value.length) {
      return formatValue(text);
    } else if (start === 0) {
      var suffix = ObjectUtils.isLetter(value[end]) ? end - 1 : end;
      return text + value.slice(suffix);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    }
    var selectionValue = value.slice(start, end);
    var space = /\s$/.test(selectionValue) ? " " : "";
    return value.slice(0, start) + text + space + value.slice(end);
  };
  var deleteRange = function deleteRange2(value, start, end) {
    var newValueStr;
    if (end - start === value.length) {
      newValueStr = "";
    } else if (start === 0) {
      newValueStr = value.slice(end);
    } else if (end === value.length) {
      newValueStr = value.slice(0, start);
    } else {
      newValueStr = value.slice(0, start) + value.slice(end);
    }
    return newValueStr;
  };
  var initCursor = function initCursor2() {
    var selectionStart = inputRef.current.selectionStart;
    var inputValue = inputRef.current.value;
    var valueLength = inputValue.length;
    var index = null;
    var prefixLength = (prefixChar.current || "").length;
    inputValue = inputValue.replace(_prefix.current, "");
    selectionStart = selectionStart - prefixLength;
    var _char5 = inputValue.charAt(selectionStart);
    if (isNumeralChar(_char5)) {
      return selectionStart + prefixLength;
    }
    var i = selectionStart - 1;
    while (i >= 0) {
      _char5 = inputValue.charAt(i);
      if (isNumeralChar(_char5)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      inputRef.current.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        _char5 = inputValue.charAt(i);
        if (isNumeralChar(_char5)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        inputRef.current.setSelectionRange(index, index);
      }
    }
    return index || 0;
  };
  var onInputPointerDown = function onInputPointerDown2() {
    isFocusedByClick.current = true;
  };
  var onInputClick = function onInputClick2() {
    initCursor();
  };
  var isNumeralChar = function isNumeralChar2(_char6) {
    if (_char6.length === 1 && (_numeral.current.test(_char6) || _decimal.current.test(_char6) || _group.current.test(_char6) || _minusSign.current.test(_char6))) {
      resetRegex();
      return true;
    }
    return false;
  };
  var resetRegex = function resetRegex2() {
    _numeral.current.lastIndex = 0;
    _decimal.current.lastIndex = 0;
    _group.current.lastIndex = 0;
    _minusSign.current.lastIndex = 0;
  };
  var updateValue = function updateValue2(event, valueStr, insertedValueStr, operation) {
    var currentValue = inputRef.current.value;
    var newValue = null;
    if (valueStr != null) {
      newValue = evaluateEmpty(parseValue(valueStr));
      updateInput(newValue, insertedValueStr, operation, valueStr);
      handleOnChange(event, currentValue, newValue);
    }
  };
  var evaluateEmpty = function evaluateEmpty2(newValue) {
    return !newValue && !props.allowEmpty ? props.min || 0 : newValue;
  };
  var handleOnChange = function handleOnChange2(event, currentValue, newValue) {
    if (props.onChange && isValueChanged(currentValue, newValue)) {
      props.onChange({
        originalEvent: event,
        value: newValue
      });
    }
  };
  var isValueChanged = function isValueChanged2(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      var parsedCurrentValue = typeof currentValue === "string" ? parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  };
  var validateValue = function validateValue2(value) {
    if (value === "-") {
      return null;
    }
    return validateValueByLimit(value);
  };
  var validateValueByLimit = function validateValueByLimit2(value) {
    if (ObjectUtils.isEmpty(value)) {
      return null;
    }
    if (props.min !== null && value < props.min) {
      return props.min;
    }
    if (props.max !== null && value > props.max) {
      return props.max;
    }
    return value;
  };
  var updateInput = function updateInput2(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";
    var inputEl = inputRef.current;
    var inputValue = inputEl.value;
    var newValue = formatValue(value);
    var currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      inputEl.value = newValue;
      inputEl.setSelectionRange(0, 0);
      var index = initCursor();
      var selectionEnd = index + insertedValueStr.length;
      inputEl.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      var selectionStart = inputEl.selectionStart;
      var _selectionEnd = inputEl.selectionEnd;
      if (props.maxLength && props.maxLength < newValue.length) {
        return;
      }
      inputEl.value = newValue;
      var newLength = newValue.length;
      if (operation === "range-insert") {
        var startValue = parseValue((inputValue || "").slice(0, selectionStart));
        var startValueStr = startValue !== null ? startValue.toString() : "";
        var startExpr = startValueStr.split("").join("(".concat(groupChar.current, ")?"));
        var sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);
        var tExpr = insertedValueStr.split("").join("(".concat(groupChar.current, ")?"));
        var tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));
        _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single") {
          var newSelectionEnd = _selectionEnd;
          if (insertedValueStr === "0") {
            newSelectionEnd = _selectionEnd + 1;
          } else {
            newSelectionEnd = newSelectionEnd + Number(isDecimalSign(value) || isDecimalSign(insertedValueStr));
          }
          inputEl.setSelectionRange(newSelectionEnd, newSelectionEnd);
        } else if (operation === "delete-single") {
          inputEl.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);
        } else if (operation === "delete-range" || operation === "spin") {
          inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
        }
      } else if (operation === "delete-back-single") {
        var prevChar = inputValue.charAt(_selectionEnd - 1);
        var nextChar = inputValue.charAt(_selectionEnd);
        var diff = currentLength - newLength;
        var isGroupChar = _group.current.test(nextChar);
        if (isGroupChar && diff === 1) {
          _selectionEnd = _selectionEnd + 1;
        } else if (!isGroupChar && isNumeralChar(prevChar)) {
          _selectionEnd = _selectionEnd + (-1 * diff + 1);
        }
        _group.current.lastIndex = 0;
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        inputEl.setSelectionRange(0, 0);
        var _index2 = initCursor();
        var _selectionEnd2 = _index2 + insertedValueStr.length + 1;
        inputEl.setSelectionRange(_selectionEnd2, _selectionEnd2);
      } else {
        _selectionEnd = _selectionEnd + (newLength - currentLength);
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      }
    }
    inputEl.setAttribute("aria-valuenow", value);
  };
  var updateInputValue = function updateInputValue2(newValue) {
    newValue = evaluateEmpty(newValue);
    var inputEl = inputRef.current;
    var value = inputEl.value;
    var _formattedValue = formattedValue(newValue);
    if (value !== _formattedValue) {
      inputEl.value = _formattedValue;
      inputEl.setAttribute("aria-valuenow", newValue);
    }
  };
  var formattedValue = function formattedValue2(val) {
    return formatValue(evaluateEmpty(val));
  };
  var concatValues = function concatValues2(val1, val2) {
    if (val1 && val2) {
      var decimalCharIndex = val2.search(_decimal.current);
      _decimal.current.lastIndex = 0;
      var newVal1 = replaceDecimalSeparator(val1).split(_decimal.current)[0].replace(_suffix.current, "").trim();
      return decimalCharIndex !== -1 ? newVal1 + val2.slice(decimalCharIndex) : val1;
    }
    return val1;
  };
  var getDecimalLength = function getDecimalLength2(value) {
    if (value) {
      var valueSplit = value.split(_decimal.current);
      if (valueSplit.length === 2) {
        return replaceSuffix(valueSplit[1]).length;
      }
    }
    return 0;
  };
  var updateModel = function updateModel2(event, value) {
    if (props.onValueChange) {
      props.onValueChange({
        originalEvent: event,
        value,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value
        }
      });
    }
  };
  var onInputFocus = function onInputFocus2(event) {
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
    if ((props.suffix || props.currency || props.prefix) && inputRef.current && !isFocusedByClick.current) {
      var inputValue = inputRef.current.value;
      var prefixLength = (prefixChar.current || "").length;
      var suffixLength = (suffixChar.current || "").length;
      var end = inputValue.length === 0 ? 0 : inputValue.length - suffixLength;
      inputRef.current.setSelectionRange(prefixLength, end);
    }
  };
  var onInputBlur = function onInputBlur2(event) {
    setFocusedState(false);
    isFocusedByClick.current = false;
    if (inputRef.current) {
      var currentValue = inputRef.current.value;
      if (isValueChanged(currentValue, props.value)) {
        var newValue = validateValue(parseValue(currentValue));
        updateInputValue(newValue);
        updateModel(event, newValue);
      }
    }
    props.onBlur && props.onBlur(event);
  };
  var clearTimer = function clearTimer2() {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };
  var changeValue = function changeValue2() {
    var val = validateValueByLimit(props.value);
    updateInputValue(props.format ? val : replaceDecimalSeparator(val));
    var newValue = validateValue(props.value);
    if (props.value !== null && props.value !== newValue) {
      updateModel(null, newValue);
    }
  };
  var getFormatter = function getFormatter2() {
    return numberFormat.current;
  };
  React4.useImperativeHandle(ref, function() {
    return {
      props,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getFormatter,
      getElement: function getElement() {
        return elementRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  React4.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  useMountEffect(function() {
    constructParser();
    var newValue = validateValue(props.value);
    if (props.value !== null && props.value !== newValue) {
      updateModel(null, newValue);
    }
  });
  useUpdateEffect(function() {
    constructParser();
    changeValue();
  }, [props.locale, props.localeMatcher, props.mode, props.currency, props.currencyDisplay, props.useGrouping, props.minFractionDigits, props.maxFractionDigits, props.suffix, props.prefix]);
  useUpdateEffect(function() {
    changeValue();
  }, [props.value]);
  useUpdateEffect(function() {
    if (props.disabled) {
      clearTimer();
    }
  }, [props.disabled]);
  var createInputElement = function createInputElement2() {
    var className = classNames(props.inputClassName, cx("input", {
      context
    }));
    var valueToRender = formattedValue(props.value);
    return React4.createElement(InputText, _extends4({
      ref: inputRef,
      id: props.inputId,
      style: props.inputStyle,
      role: "spinbutton",
      className,
      defaultValue: valueToRender,
      type: props.type,
      size: props.size,
      tabIndex: props.tabIndex,
      inputMode,
      maxLength: props.maxLength,
      disabled: props.disabled,
      required: props.required,
      pattern: props.pattern,
      placeholder: props.placeholder,
      readOnly: props.readOnly,
      name: props.name,
      autoFocus: props.autoFocus,
      onKeyDown: onInputKeyDown,
      onKeyPress: onInputAndroidKey,
      onInput,
      onClick: onInputClick,
      onPointerDown: onInputPointerDown,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      onPaste,
      min: props.min,
      max: props.max,
      "aria-valuemin": props.min,
      "aria-valuemax": props.max,
      "aria-valuenow": props.value
    }, ariaProps, dataProps, {
      pt: ptm("input"),
      __parentMetadata: {
        parent: metaData
      }
    }));
  };
  var createUpButton = function createUpButton2() {
    var incrementIconProps = mergeProps({
      className: cx("incrementIcon")
    }, ptm("incrementIcon"));
    var icon = props.incrementButtonIcon || React4.createElement(AngleUpIcon, incrementIconProps);
    var upButton = IconUtils.getJSXIcon(icon, _objectSpread({}, incrementIconProps), {
      props
    });
    var incrementButtonProps = mergeProps({
      type: "button",
      className: classNames(props.incrementButtonClassName, cx("incrementButton")),
      onPointerLeave: onUpButtonMouseLeave,
      onPointerDown: function onPointerDown(e) {
        return onUpButtonMouseDown(e);
      },
      onPointerUp: onUpButtonMouseUp,
      onKeyDown: function onKeyDown(e) {
        return onUpButtonKeyDown(e);
      },
      onKeyUp: onUpButtonKeyUp,
      disabled: props.disabled,
      tabIndex: -1,
      "aria-hidden": true
    }, ptm("incrementButton"));
    return React4.createElement("button", incrementButtonProps, upButton, React4.createElement(Ripple, null));
  };
  var createDownButton = function createDownButton2() {
    var decrementIconProps = mergeProps({
      className: cx("decrementIcon")
    }, ptm("decrementIcon"));
    var icon = props.decrementButtonIcon || React4.createElement(AngleDownIcon, decrementIconProps);
    var downButton = IconUtils.getJSXIcon(icon, _objectSpread({}, decrementIconProps), {
      props
    });
    var decrementButtonProps = mergeProps({
      type: "button",
      className: classNames(props.decrementButtonClassName, cx("decrementButton")),
      onPointerLeave: onDownButtonMouseLeave,
      onPointerDown: function onPointerDown(e) {
        return onDownButtonMouseDown(e);
      },
      onPointerUp: onDownButtonMouseUp,
      onKeyDown: function onKeyDown(e) {
        return onDownButtonKeyDown(e);
      },
      onKeyUp: onDownButtonKeyUp,
      disabled: props.disabled,
      tabIndex: -1,
      "aria-hidden": true
    }, ptm("decrementButton"));
    return React4.createElement("button", decrementButtonProps, downButton, React4.createElement(Ripple, null));
  };
  var createButtonGroup = function createButtonGroup2() {
    var upButton = props.showButtons && createUpButton();
    var downButton = props.showButtons && createDownButton();
    var buttonGroupProps = mergeProps({
      className: cx("buttonGroup")
    }, ptm("buttonGroup"));
    if (stacked) {
      return React4.createElement("span", buttonGroupProps, upButton, downButton);
    }
    return React4.createElement(React4.Fragment, null, upButton, downButton);
  };
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = InputNumberBase.getOtherProps(props);
  var dataProps = ObjectUtils.reduceKeys(otherProps, DomHandler.DATA_PROPS);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var inputElement = createInputElement();
  var buttonGroup = createButtonGroup();
  var rootProps = mergeProps({
    id: props.id,
    className: classNames(props.className, cx("root", {
      focusedState,
      stacked,
      horizontal,
      vertical
    })),
    style: props.style
  }, otherProps, ptm("root"));
  return React4.createElement(React4.Fragment, null, React4.createElement("span", _extends4({
    ref: elementRef
  }, rootProps), inputElement, buttonGroup), hasTooltip && React4.createElement(Tooltip, _extends4({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
InputNumber.displayName = "InputNumber";

// node_modules/primereact/icons/angledoubleright/index.esm.js
var React5 = __toESM(require_react());
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
var AngleDoubleRightIcon = React5.memo(React5.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React5.createElement("svg", _extends5({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React5.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z",
    fill: "currentColor"
  }));
}));
AngleDoubleRightIcon.displayName = "AngleDoubleRightIcon";

// node_modules/primereact/icons/angleright/index.esm.js
var React6 = __toESM(require_react());
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
var AngleRightIcon = React6.memo(React6.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React6.createElement("svg", _extends6({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React6.createElement("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }));
}));
AngleRightIcon.displayName = "AngleRightIcon";

// node_modules/primereact/icons/angleleft/index.esm.js
var React7 = __toESM(require_react());
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
var AngleLeftIcon = React7.memo(React7.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React7.createElement("svg", _extends7({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React7.createElement("path", {
    d: "M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z",
    fill: "currentColor"
  }));
}));
AngleLeftIcon.displayName = "AngleLeftIcon";

// node_modules/primereact/dropdown/dropdown.esm.js
var React11 = __toESM(require_react());

// node_modules/primereact/icons/chevrondown/index.esm.js
var React8 = __toESM(require_react());
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
var ChevronDownIcon = React8.memo(React8.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React8.createElement("svg", _extends8({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React8.createElement("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }));
}));
ChevronDownIcon.displayName = "ChevronDownIcon";

// node_modules/primereact/overlayservice/overlayservice.esm.js
var OverlayService = EventBus();

// node_modules/primereact/icons/search/index.esm.js
var React9 = __toESM(require_react());
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
var SearchIcon = React9.memo(React9.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React9.createElement("svg", _extends9({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React9.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }));
}));
SearchIcon.displayName = "SearchIcon";

// node_modules/primereact/virtualscroller/virtualscroller.esm.js
var React10 = __toESM(require_react());
function _extends10() {
  _extends10 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends10.apply(this, arguments);
}
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
function _toPrimitive2(input3, hint) {
  if (_typeof2(input3) !== "object" || input3 === null)
    return input3;
  var prim = input3[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input3, hint || "default");
    if (_typeof2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input3);
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return _typeof2(key) === "symbol" ? key : String(key);
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
var styles2 = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /*contain: content;*/\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var VirtualScrollerBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "VirtualScroller",
    __parentMetadata: null,
    id: null,
    style: null,
    className: null,
    tabIndex: 0,
    items: null,
    itemSize: 0,
    scrollHeight: null,
    scrollWidth: null,
    orientation: "vertical",
    step: 0,
    numToleratedItems: null,
    delay: 0,
    resizeDelay: 10,
    appendOnly: false,
    inline: false,
    lazy: false,
    disabled: false,
    loaderDisabled: false,
    loadingIcon: null,
    columns: null,
    loading: void 0,
    autoSize: false,
    showSpacer: true,
    showLoader: false,
    loadingTemplate: null,
    loaderIconTemplate: null,
    itemTemplate: null,
    contentTemplate: null,
    onScroll: null,
    onScrollIndexChange: null,
    onLazyLoad: null,
    children: void 0
  },
  css: {
    styles: styles2
  }
});
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var VirtualScroller = React10.memo(React10.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React10.useContext(PrimeReactContext);
  var props = VirtualScrollerBase.getProps(inProps, context);
  var prevProps = usePrevious(inProps) || {};
  var vertical = props.orientation === "vertical";
  var horizontal = props.orientation === "horizontal";
  var both = props.orientation === "both";
  var _React$useState = React10.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState2 = _slicedToArray2(_React$useState, 2), firstState = _React$useState2[0], setFirstState = _React$useState2[1];
  var _React$useState3 = React10.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState4 = _slicedToArray2(_React$useState3, 2), lastState = _React$useState4[0], setLastState = _React$useState4[1];
  var _React$useState5 = React10.useState(0), _React$useState6 = _slicedToArray2(_React$useState5, 2), pageState = _React$useState6[0], setPageState = _React$useState6[1];
  var _React$useState7 = React10.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState8 = _slicedToArray2(_React$useState7, 2), numItemsInViewportState = _React$useState8[0], setNumItemsInViewportState = _React$useState8[1];
  var _React$useState9 = React10.useState(props.numToleratedItems), _React$useState10 = _slicedToArray2(_React$useState9, 2), numToleratedItemsState = _React$useState10[0], setNumToleratedItemsState = _React$useState10[1];
  var _React$useState11 = React10.useState(props.loading || false), _React$useState12 = _slicedToArray2(_React$useState11, 2), loadingState = _React$useState12[0], setLoadingState = _React$useState12[1];
  var _React$useState13 = React10.useState([]), _React$useState14 = _slicedToArray2(_React$useState13, 2), loaderArrState = _React$useState14[0], setLoaderArrState = _React$useState14[1];
  var _VirtualScrollerBase$ = VirtualScrollerBase.setMetaData({
    props,
    state: {
      first: firstState,
      last: lastState,
      page: pageState,
      numItemsInViewport: numItemsInViewportState,
      numToleratedItems: numToleratedItemsState,
      loading: loadingState,
      loaderArr: loaderArrState
    }
  }), ptm = _VirtualScrollerBase$.ptm;
  useStyle(VirtualScrollerBase.css.styles, {
    name: "virtualscroller"
  });
  var elementRef = React10.useRef(null);
  var _contentRef = React10.useRef(null);
  var _spacerRef = React10.useRef(null);
  var _stickyRef = React10.useRef(null);
  var lastScrollPos = React10.useRef(both ? {
    top: 0,
    left: 0
  } : 0);
  var scrollTimeout = React10.useRef(null);
  var resizeTimeout = React10.useRef(null);
  var contentStyle = React10.useRef({});
  var spacerStyle = React10.useRef({});
  var defaultWidth = React10.useRef(null);
  var defaultHeight = React10.useRef(null);
  var defaultContentWidth = React10.useRef(null);
  var defaultContentHeight = React10.useRef(null);
  var isItemRangeChanged = React10.useRef(false);
  var lazyLoadState = React10.useRef(null);
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useResizeListener2 = _slicedToArray2(_useResizeListener, 1), bindWindowResizeListener = _useResizeListener2[0];
  var _useEventListener = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useEventListener2 = _slicedToArray2(_useEventListener, 1), bindOrientationChangeListener = _useEventListener2[0];
  var getElementRef = function getElementRef2() {
    return elementRef;
  };
  var getPageByFirst = function getPageByFirst2(first) {
    return Math.floor((first + numToleratedItemsState * 4) / (props.step || 1));
  };
  var setContentElement = function setContentElement2(element) {
    _contentRef.current = element || _contentRef.current || DomHandler.findSingle(elementRef.current, ".p-virtualscroller-content");
  };
  var isPageChanged = function isPageChanged2(first) {
    return props.step ? pageState !== getPageByFirst(first) : true;
  };
  var scrollTo = function scrollTo2(options) {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
    elementRef.current && elementRef.current.scrollTo(options);
  };
  var scrollToIndex = function scrollToIndex2(index) {
    var behavior = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
    var _calculateNumItems = calculateNumItems(), numToleratedItems = _calculateNumItems.numToleratedItems;
    var contentPos = getContentPosition();
    var calculateFirst = function calculateFirst2() {
      var _index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var _numT = arguments.length > 1 ? arguments[1] : void 0;
      return _index <= _numT ? 0 : _index;
    };
    var calculateCoord = function calculateCoord2(_first, _size, _cpos) {
      return _first * _size + _cpos;
    };
    var scrollToItem = function scrollToItem2() {
      var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return scrollTo({
        left,
        top,
        behavior
      });
    };
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var isRangeChanged = false;
    if (both) {
      newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };
      scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1], contentPos.left), calculateCoord(newFirst.rows, props.itemSize[0], contentPos.top));
      isRangeChanged = firstState.rows !== newFirst.rows || firstState.cols !== newFirst.cols;
    } else {
      newFirst = calculateFirst(index, numToleratedItems);
      horizontal ? scrollToItem(calculateCoord(newFirst, props.itemSize, contentPos.left), 0) : scrollToItem(0, calculateCoord(newFirst, props.itemSize, contentPos.top));
      isRangeChanged = firstState !== newFirst;
    }
    isItemRangeChanged.current = isRangeChanged;
    setFirstState(newFirst);
  };
  var scrollInView = function scrollInView2(index, to) {
    var behavior = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (to) {
      var _getRenderedRange = getRenderedRange(), first = _getRenderedRange.first, viewport = _getRenderedRange.viewport;
      var scrollToItem = function scrollToItem2() {
        var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return scrollTo({
          left,
          top,
          behavior
        });
      };
      var isToStart = to === "to-start";
      var isToEnd = to === "to-end";
      if (isToStart) {
        if (both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows - 1) * props.itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollToItem((viewport.first.cols - 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.first - first > index) {
          var pos = (viewport.first - 1) * props.itemSize;
          horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
        }
      } else if (isToEnd) {
        if (both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows + 1) * props.itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollToItem((viewport.first.cols + 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.last - first <= index + 1) {
          var _pos2 = (viewport.first + 1) * props.itemSize;
          horizontal ? scrollToItem(_pos2, 0) : scrollToItem(0, _pos2);
        }
      }
    } else {
      scrollToIndex(index, behavior);
    }
  };
  var getRows = function getRows2() {
    return loadingState ? props.loaderDisabled ? loaderArrState : [] : loadedItems();
  };
  var getColumns = function getColumns2() {
    if (props.columns && both || horizontal) {
      return loadingState && props.loaderDisabled ? both ? loaderArrState[0] : loaderArrState : props.columns.slice(both ? firstState.cols : firstState, both ? lastState.cols : lastState);
    }
    return props.columns;
  };
  var getRenderedRange = function getRenderedRange2() {
    var calculateFirstInViewport = function calculateFirstInViewport2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var firstInViewport = firstState;
    var lastInViewport = 0;
    if (elementRef.current) {
      var _elementRef$current = elementRef.current, scrollTop = _elementRef$current.scrollTop, scrollLeft = _elementRef$current.scrollLeft;
      if (both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, props.itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, props.itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + numItemsInViewportState.rows,
          cols: firstInViewport.cols + numItemsInViewportState.cols
        };
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, props.itemSize);
        lastInViewport = firstInViewport + numItemsInViewportState;
      }
    }
    return {
      first: firstState,
      last: lastState,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  };
  var calculateNumItems = function calculateNumItems2() {
    var contentPos = getContentPosition();
    var contentWidth = elementRef.current ? elementRef.current.offsetWidth - contentPos.left : 0;
    var contentHeight = elementRef.current ? elementRef.current.offsetHeight - contentPos.top : 0;
    var calculateNumItemsInViewport = function calculateNumItemsInViewport2(_contentSize, _itemSize) {
      return Math.ceil(_contentSize / (_itemSize || _contentSize));
    };
    var calculateNumToleratedItems = function calculateNumToleratedItems2(_numItems) {
      return Math.ceil(_numItems / 2);
    };
    var numItemsInViewport = both ? {
      rows: calculateNumItemsInViewport(contentHeight, props.itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, props.itemSize[1])
    } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, props.itemSize);
    var numToleratedItems = numToleratedItemsState || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  };
  var calculateOptions = function calculateOptions2() {
    var _calculateNumItems2 = calculateNumItems(), numItemsInViewport = _calculateNumItems2.numItemsInViewport, numToleratedItems = _calculateNumItems2.numToleratedItems;
    var calculateLast = function calculateLast2(_first, _num, _numT) {
      var _isCols = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      return getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    };
    var last = both ? {
      rows: calculateLast(firstState.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(firstState.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(firstState, numItemsInViewport, numToleratedItems);
    setNumItemsInViewportState(numItemsInViewport);
    setNumToleratedItemsState(numToleratedItems);
    setLastState(last);
    if (props.showLoader) {
      setLoaderArrState(both ? Array.from({
        length: numItemsInViewport.rows
      }).map(function() {
        return Array.from({
          length: numItemsInViewport.cols
        });
      }) : Array.from({
        length: numItemsInViewport
      }));
    }
    if (props.lazy) {
      Promise.resolve().then(function() {
        lazyLoadState.current = {
          first: props.step ? both ? {
            rows: 0,
            cols: firstState.cols
          } : 0 : firstState,
          last: Math.min(props.step ? props.step : last, (props.items || []).length)
        };
        props.onLazyLoad && props.onLazyLoad(lazyLoadState.current);
      });
    }
  };
  var calculateAutoSize = function calculateAutoSize2(loading) {
    if (props.autoSize && !loading) {
      Promise.resolve().then(function() {
        if (_contentRef.current) {
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "auto";
          _contentRef.current.style.position = "relative";
          elementRef.current.style.contain = "none";
          var _ref = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref[0], height = _ref[1];
          (both || horizontal) && (elementRef.current.style.width = (width < defaultWidth.current ? width : props.scrollWidth || defaultWidth.current) + "px");
          (both || vertical) && (elementRef.current.style.height = (height < defaultHeight.current ? height : props.scrollHeight || defaultHeight.current) + "px");
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "";
          _contentRef.current.style.position = "";
          elementRef.current.style.contain = "";
        }
      });
    }
  };
  var getLast = function getLast2() {
    var _ref2;
    var last = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var isCols = arguments.length > 1 ? arguments[1] : void 0;
    return props.items ? Math.min(isCols ? ((_ref2 = props.columns || props.items[0]) === null || _ref2 === void 0 ? void 0 : _ref2.length) || 0 : (props.items || []).length, last) : 0;
  };
  var getContentPosition = function getContentPosition2() {
    if (_contentRef.current) {
      var style = getComputedStyle(_contentRef.current);
      var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  };
  var setSize = function setSize2() {
    if (elementRef.current) {
      var parentElement = elementRef.current.parentElement;
      var width = props.scrollWidth || "".concat(elementRef.current.offsetWidth || parentElement.offsetWidth, "px");
      var height = props.scrollHeight || "".concat(elementRef.current.offsetHeight || parentElement.offsetHeight, "px");
      var setProp = function setProp2(_name, _value) {
        return elementRef.current.style[_name] = _value;
      };
      if (both || horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  };
  var setSpacerSize = function setSpacerSize2() {
    var items = props.items;
    if (items) {
      var contentPos = getContentPosition();
      var setProp = function setProp2(_name, _value, _size) {
        var _cpos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return spacerStyle.current = _objectSpread2(_objectSpread2({}, spacerStyle.current), _defineProperty2({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
      };
      if (both) {
        setProp("height", items, props.itemSize[0], contentPos.y);
        setProp("width", props.columns || items[1], props.itemSize[1], contentPos.x);
      } else {
        horizontal ? setProp("width", props.columns || items, props.itemSize, contentPos.x) : setProp("height", items, props.itemSize, contentPos.y);
      }
    }
  };
  var setContentPosition = function setContentPosition2(pos) {
    if (_contentRef.current && !props.appendOnly) {
      var first = pos ? pos.first : firstState;
      var calculateTranslateVal = function calculateTranslateVal2(_first, _size) {
        return _first * _size;
      };
      var setTransform = function setTransform2() {
        var _x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var _y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        _stickyRef.current && (_stickyRef.current.style.top = "-".concat(_y, "px"));
        contentStyle.current = _objectSpread2(_objectSpread2({}, contentStyle.current), {
          transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
        });
      };
      if (both) {
        setTransform(calculateTranslateVal(first.cols, props.itemSize[1]), calculateTranslateVal(first.rows, props.itemSize[0]));
      } else {
        var translateVal = calculateTranslateVal(first, props.itemSize);
        horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  };
  var onScrollPositionChange = function onScrollPositionChange2(event) {
    var target = event.target;
    var contentPos = getContentPosition();
    var calculateScrollPos = function calculateScrollPos2(_pos, _cpos) {
      return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    };
    var calculateCurrentIndex = function calculateCurrentIndex2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var calculateTriggerIndex = function calculateTriggerIndex2(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    var calculateFirst = function calculateFirst2(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      if (_currentIndex <= _numT) {
        return 0;
      }
      return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    var calculateLast = function calculateLast2(_currentIndex, _first, _last, _num, _numT, _isCols) {
      var lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue = lastValue + (_numT + 1);
      }
      return getLast(lastValue, _isCols);
    };
    var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var newLast = lastState;
    var isRangeChanged = false;
    var newScrollPos = lastScrollPos.current;
    if (both) {
      var isScrollDown = lastScrollPos.current.top <= scrollTop;
      var isScrollRight = lastScrollPos.current.left <= scrollLeft;
      if (!props.appendOnly || props.appendOnly && (isScrollDown || isScrollRight)) {
        var currentIndex = {
          rows: calculateCurrentIndex(scrollTop, props.itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, props.itemSize[1])
        };
        var triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], true)
        };
        isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols || isItemRangeChanged.current;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      var scrollPos = horizontal ? scrollLeft : scrollTop;
      var isScrollDownOrRight = lastScrollPos.current <= scrollPos;
      if (!props.appendOnly || props.appendOnly && isScrollDownOrRight) {
        var _currentIndex2 = calculateCurrentIndex(scrollPos, props.itemSize);
        var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newFirst = calculateFirst(_currentIndex2, _triggerIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newLast = calculateLast(_currentIndex2, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
        isRangeChanged = newFirst !== firstState || newLast !== lastState || isItemRangeChanged.current;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  };
  var onScrollChange = function onScrollChange2(event) {
    var _onScrollPositionChan = onScrollPositionChange(event), first = _onScrollPositionChan.first, last = _onScrollPositionChan.last, isRangeChanged = _onScrollPositionChan.isRangeChanged, scrollPos = _onScrollPositionChan.scrollPos;
    if (isRangeChanged) {
      var newState = {
        first,
        last
      };
      setContentPosition(newState);
      setFirstState(first);
      setLastState(last);
      lastScrollPos.current = scrollPos;
      props.onScrollIndexChange && props.onScrollIndexChange(newState);
      if (props.lazy && isPageChanged(first)) {
        var newLazyLoadState = {
          first: props.step ? Math.min(getPageByFirst(first) * props.step, (props.items || []).length - props.step) : first,
          last: Math.min(props.step ? (getPageByFirst(first) + 1) * props.step : last, (props.items || []).length)
        };
        var isLazyStateChanged = !lazyLoadState.current || lazyLoadState.current.first !== newLazyLoadState.first || lazyLoadState.current.last !== newLazyLoadState.last;
        isLazyStateChanged && props.onLazyLoad && props.onLazyLoad(newLazyLoadState);
        lazyLoadState.current = newLazyLoadState;
      }
    }
  };
  var _onScroll = function onScroll(event) {
    props.onScroll && props.onScroll(event);
    if (props.delay) {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (isPageChanged(firstState)) {
        if (!loadingState && props.showLoader) {
          var _onScrollPositionChan2 = onScrollPositionChange(event), isRangeChanged = _onScrollPositionChan2.isRangeChanged;
          var changed = isRangeChanged || (props.step ? isPageChanged(firstState) : false);
          changed && setLoadingState(true);
        }
        scrollTimeout.current = setTimeout(function() {
          onScrollChange(event);
          if (loadingState && props.showLoader && (!props.lazy || props.loading === void 0)) {
            setLoadingState(false);
            setPageState(getPageByFirst(firstState));
          }
        }, props.delay);
      }
    } else {
      onScrollChange(event);
    }
  };
  var onResize = function onResize2() {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }
    resizeTimeout.current = setTimeout(function() {
      if (elementRef.current) {
        var _ref3 = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref3[0], height = _ref3[1];
        var isDiffWidth = width !== defaultWidth.current, isDiffHeight = height !== defaultHeight.current;
        var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
        if (reinit) {
          setNumToleratedItemsState(props.numToleratedItems);
          defaultWidth.current = width;
          defaultHeight.current = height;
          defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
          defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
        }
      }
    }, props.resizeDelay);
  };
  var getOptions = function getOptions2(renderedIndex) {
    var count = (props.items || []).length;
    var index = both ? firstState.rows + renderedIndex : firstState + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    };
  };
  var loaderOptions = function loaderOptions2(index, extOptions) {
    var count = loaderArrState.length || 0;
    return _objectSpread2({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    }, extOptions);
  };
  var loadedItems = function loadedItems2() {
    var items = props.items;
    if (items && !loadingState) {
      if (both) {
        return items.slice(props.appendOnly ? 0 : firstState.rows, lastState.rows).map(function(item2) {
          return props.columns ? item2 : item2.slice(props.appendOnly ? 0 : firstState.cols, lastState.cols);
        });
      } else if (horizontal && props.columns) {
        return items;
      }
      return items.slice(props.appendOnly ? 0 : firstState, lastState);
    }
    return [];
  };
  var viewInit = function viewInit2() {
    if (elementRef.current && DomHandler.isVisible(elementRef.current)) {
      setContentElement(_contentRef.current);
      init();
      bindWindowResizeListener();
      bindOrientationChangeListener();
      defaultWidth.current = DomHandler.getWidth(elementRef.current);
      defaultHeight.current = DomHandler.getHeight(elementRef.current);
      defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
      defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
    }
  };
  var init = function init2() {
    if (!props.disabled) {
      setSize();
      calculateOptions();
      setSpacerSize();
    }
  };
  useMountEffect(function() {
    viewInit();
  });
  useUpdateEffect(function() {
    init();
  }, [props.itemSize, props.scrollHeight, props.scrollWidth]);
  useUpdateEffect(function() {
    if (props.numToleratedItems !== numToleratedItemsState) {
      setNumToleratedItemsState(props.numToleratedItems);
    }
  }, [props.numToleratedItems]);
  useUpdateEffect(function() {
    if (props.numToleratedItems === numToleratedItemsState) {
      init();
    }
  }, [numToleratedItemsState]);
  useUpdateEffect(function() {
    if (!prevProps.items || prevProps.items.length !== (props.items || []).length) {
      init();
    }
    var loading = loadingState;
    if (props.lazy && prevProps.loading !== props.loading && props.loading !== loadingState) {
      setLoadingState(props.loading);
      loading = props.loading;
    }
    calculateAutoSize(loading);
  });
  useUpdateEffect(function() {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
  }, [props.orientation]);
  React10.useImperativeHandle(ref, function() {
    return {
      props,
      getElementRef,
      scrollTo,
      scrollToIndex,
      scrollInView,
      getRenderedRange
    };
  });
  var createLoaderItem = function createLoaderItem2(index) {
    var extOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = loaderOptions(index, extOptions);
    var content2 = ObjectUtils.getJSXElement(props.loadingTemplate, options);
    return React10.createElement(React10.Fragment, {
      key: index
    }, content2);
  };
  var createLoader = function createLoader2() {
    var iconClassName = "p-virtualscroller-loading-icon";
    var loadingIconProps = mergeProps({
      className: iconClassName
    }, ptm("loadingIcon"));
    var icon = props.loadingIcon || React10.createElement(SpinnerIcon, _extends10({}, loadingIconProps, {
      spin: true
    }));
    var loadingIcon = IconUtils.getJSXIcon(icon, _objectSpread2({}, loadingIconProps), {
      props
    });
    if (!props.loaderDisabled && props.showLoader && loadingState) {
      var _className = classNames("p-virtualscroller-loader", {
        "p-component-overlay": !props.loadingTemplate
      });
      var _content = loadingIcon;
      if (props.loadingTemplate) {
        _content = loaderArrState.map(function(_, index) {
          return createLoaderItem(index, both && {
            numCols: numItemsInViewportState.cols
          });
        });
      } else if (props.loaderIconTemplate) {
        var defaultContentOptions = {
          iconClassName,
          element: _content,
          props
        };
        _content = ObjectUtils.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
      }
      var loaderProps = mergeProps({
        className: _className
      }, ptm("loader"));
      return React10.createElement("div", loaderProps, _content);
    }
    return null;
  };
  var createSpacer = function createSpacer2() {
    if (props.showSpacer) {
      var spacerProps = mergeProps({
        ref: _spacerRef,
        style: spacerStyle.current,
        className: "p-virtualscroller-spacer"
      }, ptm("spacer"));
      return React10.createElement("div", spacerProps);
    }
    return null;
  };
  var createItem = function createItem2(item2, index) {
    var options = getOptions(index);
    var content2 = ObjectUtils.getJSXElement(props.itemTemplate, item2, options);
    return React10.createElement(React10.Fragment, {
      key: options.index
    }, content2);
  };
  var createItems = function createItems2() {
    var items = loadedItems();
    return items.map(createItem);
  };
  var createContent = function createContent2() {
    var items = createItems();
    var className2 = classNames("p-virtualscroller-content", {
      "p-virtualscroller-loading": loadingState
    });
    var contentProps = mergeProps({
      ref: _contentRef,
      style: contentStyle.current,
      className: className2
    }, ptm("content"));
    var content2 = React10.createElement("div", contentProps, items);
    if (props.contentTemplate) {
      var defaultOptions = {
        style: contentStyle.current,
        className: className2,
        spacerStyle: spacerStyle.current,
        contentRef: function contentRef(el) {
          return _contentRef.current = ObjectUtils.getRefElement(el);
        },
        spacerRef: function spacerRef(el) {
          return _spacerRef.current = ObjectUtils.getRefElement(el);
        },
        stickyRef: function stickyRef(el) {
          return _stickyRef.current = ObjectUtils.getRefElement(el);
        },
        items: loadedItems(),
        getItemOptions: function getItemOptions(index) {
          return getOptions(index);
        },
        children: items,
        element: content2,
        props,
        loading: loadingState,
        getLoaderOptions: function getLoaderOptions(index, ext) {
          return loaderOptions(index, ext);
        },
        loadingTemplate: props.loadingTemplate,
        itemSize: props.itemSize,
        rows: getRows(),
        columns: getColumns(),
        vertical,
        horizontal,
        both
      };
      return ObjectUtils.getJSXElement(props.contentTemplate, defaultOptions);
    }
    return content2;
  };
  if (props.disabled) {
    var _content2 = ObjectUtils.getJSXElement(props.contentTemplate, {
      items: props.items,
      rows: props.items,
      columns: props.columns
    });
    return React10.createElement(React10.Fragment, null, props.children, _content2);
  }
  var className = classNames("p-virtualscroller", {
    "p-virtualscroller-inline": props.inline,
    "p-virtualscroller-both p-both-scroll": both,
    "p-virtualscroller-horizontal p-horizontal-scroll": horizontal
  }, props.className);
  var loader = createLoader();
  var content = createContent();
  var spacer = createSpacer();
  var rootProps = mergeProps({
    ref: elementRef,
    className,
    tabIndex: props.tabIndex,
    style: props.style,
    onScroll: function onScroll(e) {
      return _onScroll(e);
    }
  }, VirtualScrollerBase.getOtherProps(props), ptm("root"));
  return React10.createElement("div", rootProps, content, spacer, loader);
}));
VirtualScroller.displayName = "VirtualScroller";

// node_modules/primereact/dropdown/dropdown.esm.js
function _extends11() {
  _extends11 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends11.apply(this, arguments);
}
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function _toPrimitive3(input3, hint) {
  if (_typeof3(input3) !== "object" || input3 === null)
    return input3;
  var prim = input3[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input3, hint || "default");
    if (_typeof3(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input3);
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return _typeof3(key) === "symbol" ? key : String(key);
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest3();
}
var classes2 = {
  root: function root2(_ref) {
    var props = _ref.props, focusedState = _ref.focusedState, overlayVisibleState = _ref.overlayVisibleState, context = _ref.context;
    return classNames("p-dropdown p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-focus": focusedState,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled",
      "p-dropdown-clearable": props.showClear && !props.disabled,
      "p-inputwrapper-filled": ObjectUtils.isNotEmpty(props.value),
      "p-inputwrapper-focus": focusedState || overlayVisibleState
    });
  },
  input: function input2(_ref2) {
    var props = _ref2.props, label = _ref2.label;
    return props.editable ? "p-dropdown-label p-inputtext" : classNames("p-dropdown-label p-inputtext", {
      "p-placeholder": label === null && props.placeholder,
      "p-dropdown-label-empty": label === null && !props.placeholder
    });
  },
  trigger: "p-dropdown-trigger",
  emptyMessage: "p-dropdown-empty-message",
  itemGroup: function itemGroup(_ref3) {
    var optionGroupLabel = _ref3.optionGroupLabel;
    return classNames("p-dropdown-item-group", {
      "p-dropdown-item-empty": !optionGroupLabel || optionGroupLabel.length === 0
    });
  },
  itemGroupLabel: "p-dropdown-item-group-label",
  dropdownIcon: "p-dropdown-trigger-icon p-clickable",
  loadingIcon: "p-dropdown-trigger-icon p-clickable",
  clearIcon: "p-dropdown-clear-icon p-clickable",
  filterIcon: "p-dropdown-filter-icon",
  filterClearIcon: "p-dropdown-filter-clear-icon",
  filterContainer: function filterContainer(_ref4) {
    var clearIcon = _ref4.clearIcon;
    return classNames("p-dropdown-filter-container", {
      "p-dropdown-clearable-filter": !!clearIcon
    });
  },
  filterInput: function filterInput(_ref5) {
    var props = _ref5.props, context = _ref5.context;
    return classNames("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  list: function list(_ref6) {
    var virtualScrollerOptions = _ref6.virtualScrollerOptions;
    return virtualScrollerOptions ? "p-dropdown-items" : "p-dropdown-items";
  },
  panel: function panel(_ref7) {
    var context = _ref7.context;
    return classNames("p-dropdown-panel p-component", {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  item: function item(_ref8) {
    var selected = _ref8.selected, disabled = _ref8.disabled, label = _ref8.label, index = _ref8.index, focusedOptionIndex = _ref8.focusedOptionIndex, highlightOnSelect = _ref8.highlightOnSelect;
    return classNames("p-dropdown-item", {
      "p-highlight": selected && highlightOnSelect,
      "p-disabled": disabled,
      "p-focus": index === focusedOptionIndex,
      "p-dropdown-item-empty": !label || label.length === 0
    });
  },
  itemLabel: "p-dropdown-item-label",
  checkIcon: "p-dropdown-check-icon",
  blankIcon: "p-dropdown-blank-icon",
  wrapper: "p-dropdown-items-wrapper",
  header: "p-dropdown-header",
  footer: "p-dropdown-footer",
  transition: "p-connected-overlay"
};
var styles3 = "\n@layer primereact {\n    .p-dropdown {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n    }\n    \n    .p-dropdown-trigger {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n    }\n    \n    .p-dropdown-label {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1 1 auto;\n        width: 1%;\n        text-overflow: ellipsis;\n        cursor: pointer;\n    }\n    \n    .p-dropdown-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n    \n    input.p-dropdown-label  {\n        cursor: default;\n    }\n    \n    .p-dropdown .p-dropdown-panel {\n        min-width: 100%;\n    }\n    \n    .p-dropdown-panel {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-dropdown-items-wrapper {\n        overflow: auto;\n    }\n    \n    .p-dropdown-item {\n        cursor: pointer;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-dropdown-items {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-dropdown-filter {\n        width: 100%;\n    }\n    \n    .p-dropdown-filter-container {\n        position: relative;\n    }\n    \n    .p-dropdown-clear-icon,\n    .p-dropdown-filter-icon,\n    .p-dropdown-filter-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-fluid .p-dropdown {\n        display: flex;\n    }\n    \n    .p-fluid .p-dropdown .p-dropdown-label {\n        width: 1%;\n    }\n}\n";
var inlineStyles = {
  wrapper: function wrapper(_ref9) {
    var props = _ref9.props;
    return {
      maxHeight: props.scrollHeight || "auto"
    };
  },
  panel: function panel2(_ref10) {
    var props = _ref10.props;
    props.panelStyle;
  }
};
var DropdownBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Dropdown",
    __parentMetadata: null,
    appendTo: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    autoFocus: false,
    children: void 0,
    className: null,
    clearIcon: null,
    dataKey: null,
    disabled: false,
    dropdownIcon: null,
    editable: false,
    emptyFilterMessage: null,
    highlightOnSelect: true,
    checkmark: false,
    emptyMessage: null,
    filter: false,
    filterBy: null,
    filterClearIcon: null,
    filterIcon: null,
    filterInputAutoFocus: false,
    filterLocale: void 0,
    filterMatchMode: "contains",
    filterPlaceholder: null,
    filterTemplate: null,
    focusInputRef: null,
    id: null,
    inputId: null,
    inputRef: null,
    invalid: false,
    variant: null,
    itemTemplate: null,
    loading: false,
    loadingIcon: null,
    maxLength: null,
    name: null,
    onBlur: null,
    onChange: null,
    onContextMenu: null,
    onFilter: null,
    onFocus: null,
    onHide: null,
    onMouseDown: null,
    onShow: null,
    optionDisabled: null,
    optionGroupChildren: "items",
    selectOnFocus: false,
    focusOnHover: true,
    autoOptionFocus: false,
    optionGroupLabel: null,
    optionGroupTemplate: null,
    optionLabel: null,
    optionValue: null,
    options: null,
    panelClassName: null,
    panelFooterTemplate: null,
    panelStyle: null,
    placeholder: null,
    required: false,
    resetFilterOnHide: false,
    scrollHeight: "200px",
    showClear: false,
    showFilterClear: false,
    showOnFocus: false,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    value: null,
    valueTemplate: null,
    virtualScrollerOptions: null
  },
  css: {
    classes: classes2,
    styles: styles3,
    inlineStyles
  }
});
var BlankIcon = React11.memo(React11.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React11.createElement("svg", _extends11({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React11.createElement("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    fillOpacity: "0"
  }));
}));
BlankIcon.displayName = "BlankIcon";
var DropdownItem = React11.memo(function(props) {
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx, selected = props.selected, disabled = props.disabled, option = props.option, label = props.label, index = props.index, focusedOptionIndex = props.focusedOptionIndex, checkmark = props.checkmark, highlightOnSelect = props.highlightOnSelect;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      context: {
        selected,
        disabled
      }
    });
  };
  var _onClick = function onClick(event, i) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        option
      });
    }
  };
  var content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
  var itemProps = mergeProps({
    role: "option",
    key: props.label,
    className: classNames(option.className, cx("item", {
      selected,
      disabled,
      label,
      index,
      focusedOptionIndex,
      highlightOnSelect
    })),
    style: props.style,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onMouseMove: function onMouseMove(e) {
      return props === null || props === void 0 ? void 0 : props.onMouseMove(e, index);
    },
    "aria-label": label,
    "aria-selected": selected,
    "data-p-highlight": selected,
    "data-p-focused": focusedOptionIndex === index,
    "data-p-disabled": disabled
  }, getPTOptions("item"));
  var itemGroupLabelProps = mergeProps({
    className: cx("itemLabel")
  }, getPTOptions("itemLabel"));
  var iconRenderer = function iconRenderer2() {
    if (selected) {
      var checkIconProps = mergeProps({
        className: cx("checkIcon")
      }, getPTOptions("checIcon"));
      return React11.createElement(CheckIcon, checkIconProps);
    }
    var blankIconProps = mergeProps({
      className: cx("blankIcon")
    }, getPTOptions("blankIcon"));
    return React11.createElement(BlankIcon, blankIconProps);
  };
  return React11.createElement("li", itemProps, checkmark && iconRenderer(), React11.createElement("span", itemGroupLabelProps, content), React11.createElement(Ripple, null));
});
DropdownItem.displayName = "DropdownItem";
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var DropdownPanel = React11.memo(React11.forwardRef(function(props, ref) {
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx, sx = props.sx;
  var context = React11.useContext(PrimeReactContext);
  var filterInputRef = React11.useRef(null);
  var isEmptyFilter = !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
  var filterOptions = {
    filter: function filter(e) {
      return onFilterInputChange(e);
    },
    reset: function reset() {
      return props.resetFilter();
    }
  };
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$1({
      hostName: props.hostName
    }, options));
  };
  var onEnter = function onEnter2() {
    props.onEnter(function() {
      if (props.virtualScrollerRef.current) {
        var selectedIndex = props.getSelectedOptionIndex();
        if (selectedIndex !== -1) {
          setTimeout(function() {
            return props.virtualScrollerRef.current.scrollToIndex(selectedIndex);
          }, 0);
        }
      }
    });
  };
  var onEntered = function onEntered2() {
    props.onEntered(function() {
      if (props.filter && props.filterInputAutoFocus) {
        DomHandler.focus(filterInputRef.current, false);
      }
    });
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    props.virtualScrollerRef.current && props.virtualScrollerRef.current.scrollToIndex(0);
    props.onFilterInputChange && props.onFilterInputChange(event);
  };
  var createFooter = function createFooter2() {
    if (props.panelFooterTemplate) {
      var content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
      var footerProps = mergeProps({
        className: cx("footer")
      }, getPTOptions("footer"));
      return React11.createElement("div", footerProps, content);
    }
    return null;
  };
  var changeFocusedItemOnHover = function changeFocusedItemOnHover2(event, index) {
    if (props.focusOnHover) {
      var _props$changeFocusedO;
      props === null || props === void 0 || (_props$changeFocusedO = props.changeFocusedOptionIndex) === null || _props$changeFocusedO === void 0 || _props$changeFocusedO.call(props, event, index);
    }
  };
  var createEmptyMessage = function createEmptyMessage2(emptyMessage, isFilter) {
    var message = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? "emptyFilterMessage" : "emptyMessage");
    var emptyMessageProps = mergeProps({
      className: cx("emptyMessage")
    }, getPTOptions("emptyMessage"));
    return React11.createElement("li", emptyMessageProps, message);
  };
  var createItem = function createItem2(option, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : void 0
    };
    style = _objectSpread$1(_objectSpread$1({}, style), option.style);
    if (option.group && props.optionGroupLabel) {
      var optionGroupLabel = props.optionGroupLabel;
      var groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
      var key = index + "_" + props.getOptionGroupRenderKey(option);
      var itemGroupProps = mergeProps({
        className: cx("itemGroup", {
          optionGroupLabel
        }),
        style,
        "data-p-highlight": props.selected
      }, getPTOptions("itemGroup"));
      var itemGroupLabelProps = mergeProps({
        className: cx("itemGroupLabel")
      }, getPTOptions("itemGroupLabel"));
      return React11.createElement("li", _extends11({
        key
      }, itemGroupProps), React11.createElement("span", itemGroupLabelProps, groupContent));
    }
    var optionKey = props.getOptionRenderKey(option) + "_" + index;
    var optionLabel = props.getOptionLabel(option);
    var disabled = props.isOptionDisabled(option);
    return React11.createElement(DropdownItem, {
      key: optionKey,
      label: optionLabel,
      index,
      focusedOptionIndex: props.focusedOptionIndex,
      option,
      style,
      template: props.itemTemplate,
      selected: props.isSelected(option),
      highlightOnSelect: props.highlightOnSelect,
      disabled,
      onClick: props.onOptionClick,
      onMouseMove: changeFocusedItemOnHover,
      ptm,
      cx,
      checkmark: props.checkmark
    });
  };
  var createItems = function createItems2() {
    if (ObjectUtils.isNotEmpty(props.visibleOptions)) {
      return props.visibleOptions.map(createItem);
    } else if (props.hasFilter) {
      return createEmptyMessage(props.emptyFilterMessage, true);
    }
    return createEmptyMessage(props.emptyMessage);
  };
  var createFilterClearIcon = function createFilterClearIcon2() {
    if (props.showFilterClear && props.filterValue) {
      var ariaLabel3 = localeOption("clear");
      var clearIconProps = mergeProps({
        className: cx("filterClearIcon"),
        "aria-label": ariaLabel3,
        onClick: function onClick() {
          return props.onFilterClearIconClick(function() {
            return DomHandler.focus(filterInputRef.current);
          });
        }
      }, getPTOptions("filterClearIcon"));
      var icon = props.filterClearIcon || React11.createElement(TimesIcon, clearIconProps);
      var filterClearIcon = IconUtils.getJSXIcon(icon, _objectSpread$1({}, clearIconProps), {
        props
      });
      return filterClearIcon;
    }
    return null;
  };
  var createFilter = function createFilter2() {
    if (props.filter) {
      var clearIcon = createFilterClearIcon();
      var filterIconProps = mergeProps({
        className: cx("filterIcon")
      }, getPTOptions("filterIcon"));
      var icon = props.filterIcon || React11.createElement(SearchIcon, filterIconProps);
      var filterIcon = IconUtils.getJSXIcon(icon, _objectSpread$1({}, filterIconProps), {
        props
      });
      var filterContainerProps = mergeProps({
        className: cx("filterContainer", {
          clearIcon
        })
      }, getPTOptions("filterContainer"));
      var filterInputProps = mergeProps({
        ref: filterInputRef,
        type: "text",
        autoComplete: "off",
        className: cx("filterInput", {
          context
        }),
        placeholder: props.filterPlaceholder,
        onKeyDown: props.onFilterInputKeyDown,
        onChange: function onChange(e) {
          return onFilterInputChange(e);
        },
        value: props.filterValue
      }, getPTOptions("filterInput"));
      var content = React11.createElement("div", filterContainerProps, React11.createElement("input", filterInputProps), clearIcon, filterIcon);
      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: classNames("p-dropdown-filter-container", {
            "p-dropdown-clearable-filter": !!clearIcon
          }),
          element: content,
          filterOptions,
          filterInputKeyDown: props.onFilterInputKeyDown,
          filterInputChange: onFilterInputChange,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon,
          props
        };
        content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }
      var headerProps = mergeProps({
        className: cx("header")
      }, getPTOptions("header"));
      return React11.createElement("div", headerProps, content);
    }
    return null;
  };
  var createContent = function createContent2() {
    if (props.virtualScrollerOptions) {
      var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions), {
        style: _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        className: classNames("p-dropdown-items-wrapper", props.virtualScrollerOptions.className),
        items: props.visibleOptions,
        autoSize: true,
        onLazyLoad: function onLazyLoad(event) {
          return props.virtualScrollerOptions.onLazyLoad(_objectSpread$1(_objectSpread$1({}, event), {
            filter: props.filterValue
          }));
        },
        itemTemplate: function itemTemplate(item2, options) {
          return item2 && createItem(item2, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var emptyMessage = props.hasFilter ? props.emptyFilterMessage : props.emptyMessage;
          var content = isEmptyFilter ? createEmptyMessage(emptyMessage) : options.children;
          var listProps2 = mergeProps({
            ref: options.contentRef,
            style: options.style,
            className: classNames(options.className, cx("list", {
              virtualScrollerProps: props.virtualScrollerOptions
            })),
            role: "listbox"
          }, getPTOptions("list"));
          return React11.createElement("ul", listProps2, content);
        }
      });
      return React11.createElement(VirtualScroller, _extends11({
        ref: props.virtualScrollerRef
      }, virtualScrollerProps, {
        pt: ptm("virtualScroller")
      }));
    }
    var items = createItems();
    var wrapperProps = mergeProps({
      className: cx("wrapper"),
      style: sx("wrapper")
    }, getPTOptions("wrapper"));
    var listProps = mergeProps({
      className: cx("list"),
      role: "listbox"
    }, getPTOptions("list"));
    return React11.createElement("div", wrapperProps, React11.createElement("ul", listProps, items));
  };
  var createElement13 = function createElement14() {
    var filter = createFilter();
    var content = createContent();
    var footer = createFooter();
    var panelProps = mergeProps({
      className: classNames(props.panelClassName, cx("panel", {
        context
      })),
      style: sx("panel"),
      onClick: props.onClick
    }, getPTOptions("panel"));
    var transitionProps = mergeProps({
      classNames: cx("transition"),
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter,
      onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, getPTOptions("transition"));
    return React11.createElement(CSSTransition, _extends11({
      nodeRef: ref
    }, transitionProps), React11.createElement("div", _extends11({
      ref
    }, panelProps), props.firstFocusableElement, filter, content, footer, props.lastFocusableElement));
  };
  var element = createElement13();
  return React11.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
DropdownPanel.displayName = "DropdownPanel";
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null)
        it["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Dropdown = React11.memo(React11.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React11.useContext(PrimeReactContext);
  var props = DropdownBase.getProps(inProps, context);
  var _React$useState = React11.useState(""), _React$useState2 = _slicedToArray3(_React$useState, 2), filterState = _React$useState2[0], setFilterState = _React$useState2[1];
  var _React$useState3 = React11.useState(false), _React$useState4 = _slicedToArray3(_React$useState3, 2), focusedState = _React$useState4[0], setFocusedState = _React$useState4[1];
  var _React$useState5 = React11.useState(-1), _React$useState6 = _slicedToArray3(_React$useState5, 2), focusedOptionIndex = _React$useState6[0], setFocusedOptionIndex = _React$useState6[1];
  var _React$useState7 = React11.useState(false), _React$useState8 = _slicedToArray3(_React$useState7, 2), overlayVisibleState = _React$useState8[0], setOverlayVisibleState = _React$useState8[1];
  var clickedRef = React11.useRef(false);
  var elementRef = React11.useRef(null);
  var overlayRef = React11.useRef(null);
  var firstHiddenFocusableElementOnOverlay = React11.useRef(null);
  var lastHiddenFocusableElementOnOverlay = React11.useRef(null);
  var inputRef = React11.useRef(props.inputRef);
  var focusInputRef = React11.useRef(props.focusInputRef);
  var virtualScrollerRef = React11.useRef(null);
  var searchTimeout = React11.useRef(null);
  var searchValue = React11.useRef(null);
  React11.useRef(null);
  var isLazy = props.virtualScrollerOptions && props.virtualScrollerOptions.lazy;
  var hasFilter = ObjectUtils.isNotEmpty(filterState);
  var appendTo = props.appendTo || context && context.appendTo || PrimeReact.appendTo;
  var _DropdownBase$setMeta = DropdownBase.setMetaData(_objectSpread3(_objectSpread3({
    props
  }, props.__parentMetadata), {}, {
    state: {
      filter: filterState,
      focused: focusedState,
      overlayVisible: overlayVisibleState
    }
  })), ptm = _DropdownBase$setMeta.ptm, cx = _DropdownBase$setMeta.cx, sx = _DropdownBase$setMeta.sx, isUnstyled = _DropdownBase$setMeta.isUnstyled;
  useHandleStyle(DropdownBase.css.styles, isUnstyled, {
    name: "dropdown"
  });
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type, valid = _ref.valid;
      if (valid) {
        type === "outside" ? !isClearClicked(event) && hide() : hide();
      }
    },
    when: overlayVisibleState
  }), _useOverlayListener2 = _slicedToArray3(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var flatOptions = function flatOptions2(options) {
    return (options || []).reduce(function(result, option, index) {
      result.push({
        optionGroup: option,
        group: true,
        index,
        code: option.code,
        label: option.label
      });
      var optionGroupChildren = getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach(function(o) {
        return result.push(o);
      });
      return result;
    }, []);
  };
  var getVisibleOptions = function getVisibleOptions2() {
    var options = props.optionGroupLabel ? flatOptions(props.options) : props.options;
    if (hasFilter && !isLazy) {
      var filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
      var searchFields = props.filterBy ? props.filterBy.split(",") : [props.optionLabel || "label"];
      if (props.optionGroupLabel) {
        var filteredGroups = [];
        var _iterator = _createForOfIteratorHelper(props.options), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var optgroup = _step.value;
            var filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push(_objectSpread3(_objectSpread3({}, optgroup), _defineProperty3({}, "".concat(props.optionGroupChildren), filteredSubOptions)));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return flatOptions(filteredGroups);
      }
      return FilterService.filter(options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
    }
    return options;
  };
  var onFirstHiddenFocus = function onFirstHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getFirstFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;
    DomHandler.focus(focusableEl);
  };
  var onLastHiddenFocus = function onLastHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getLastFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;
    DomHandler.focus(focusableEl);
  };
  var isClearClicked = function isClearClicked2(event) {
    return DomHandler.isAttributeEquals(event.target, "data-pc-section", "clearicon") || DomHandler.isAttributeEquals(event.target.parentElement || event.target, "data-pc-section", "filterclearicon");
  };
  var _onClick = function onClick(event) {
    if (props.disabled || props.loading) {
      return;
    }
    props.onClick && props.onClick(event);
    if (event.defaultPrevented) {
      return;
    }
    if (isClearClicked(event) || event.target.tagName === "INPUT") {
      return;
    } else if (!overlayRef.current || !(overlayRef.current && overlayRef.current.contains(event.target))) {
      DomHandler.focus(focusInputRef.current);
      overlayVisibleState ? hide() : show();
    }
    clickedRef.current = true;
  };
  var onInputFocus = function onInputFocus2(event) {
    if (props.showOnFocus && !overlayVisibleState) {
      show();
    }
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };
  var onInputBlur = function onInputBlur2(event) {
    setFocusedState(false);
    if (props.onBlur) {
      setTimeout(function() {
        var currentValue = inputRef.current ? inputRef.current.value : void 0;
        props.onBlur({
          originalEvent: event.originalEvent,
          value: currentValue,
          stopPropagation: function stopPropagation() {
            event.originalEvent.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.originalEvent.preventDefault();
          },
          target: {
            name: props.name,
            id: props.id,
            value: currentValue
          }
        });
      }, 200);
    }
  };
  var onOptionSelect = function onOptionSelect2(event, option) {
    var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var value = getOptionValue(option);
    selectItem({
      originalEvent: event,
      option: value
    });
    isHide && hide();
  };
  var onPanelClick = function onPanelClick2(event) {
    OverlayService.emit("overlay-click", {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    if (props.disabled || DomHandler.isAndroid()) {
      event.preventDefault();
      return;
    }
    var metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        onArrowLeftKey(event, props.editable);
        break;
      case "Home":
        onHomeKey(event);
        break;
      case "End":
        onEndKey(event);
        break;
      case "PageDown":
        onPageDownKey(event);
        break;
      case "PageUp":
        onPageUpKey(event);
        break;
      case "Space":
        onSpaceKey(event, props.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        onEnterKey(event);
        break;
      case "Escape":
        onEscapeKey(event);
        break;
      case "Tab":
        onTabKey(event);
        break;
      case "Backspace":
        onBackspaceKey(event, props.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !overlayVisibleState && !props.editable && show();
          !props.editable && searchOptions(event, event.key);
        }
        break;
    }
    clickedRef.current = false;
  };
  var onFilterInputKeyDown = function onFilterInputKeyDown2(event) {
    switch (event.code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        onArrowLeftKey(event, true);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        onEnterKey(event);
        event.preventDefault();
        break;
    }
  };
  var hasFocusableElements = function hasFocusableElements2() {
    return DomHandler.getFocusableElements(overlayRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  };
  var isOptionMatched = function isOptionMatched2(option) {
    var _getOptionLabel;
    return isValidOption(option) && ((_getOptionLabel = getOptionLabel(option)) === null || _getOptionLabel === void 0 ? void 0 : _getOptionLabel.toLocaleLowerCase(props.filterLocale).startsWith(searchValue.current.toLocaleLowerCase(props.filterLocale)));
  };
  var isValidOption = function isValidOption2(option) {
    return ObjectUtils.isNotEmpty(option) && !(isOptionDisabled(option) || isOptionGroup(option));
  };
  var hasSelectedOption = function hasSelectedOption2() {
    return ObjectUtils.isNotEmpty(props.value);
  };
  var isValidSelectedOption = function isValidSelectedOption2(option) {
    return isValidOption(option) && isSelected(option);
  };
  var findSelectedOptionIndex = function findSelectedOptionIndex2() {
    return hasSelectedOption ? visibleOptions.findIndex(function(option) {
      return isValidSelectedOption(option);
    }) : -1;
  };
  var findFirstFocusedOptionIndex = function findFirstFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
  };
  var searchOptions = function searchOptions2(event, _char) {
    searchValue.current = (searchValue.current || "") + _char;
    var optionIndex = -1;
    var matched = false;
    if (ObjectUtils.isNotEmpty(searchValue.current)) {
      if (focusedOptionIndex !== -1) {
        optionIndex = visibleOptions.slice(focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        });
        optionIndex = optionIndex === -1 ? visibleOptions.slice(0, focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        }) : optionIndex + focusedOptionIndex;
      } else {
        optionIndex = visibleOptions.findIndex(function(option) {
          return isOptionMatched(option);
        });
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && focusedOptionIndex === -1) {
        optionIndex = findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        changeFocusedOptionIndex(event, optionIndex);
      }
    }
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(function() {
      searchValue.current = "";
      searchTimeout.current = null;
    }, 500);
    return matched;
  };
  var findLastFocusedOptionIndex = function findLastFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findLastOptionIndex() : selectedIndex;
  };
  var findFirstOptionIndex = function findFirstOptionIndex2() {
    return visibleOptions.findIndex(function(option) {
      return isValidOption(option);
    });
  };
  var findLastOptionIndex = function findLastOptionIndex2() {
    return ObjectUtils.findLastIndex(visibleOptions, function(option) {
      return isValidOption(option);
    });
  };
  var findNextOptionIndex = function findNextOptionIndex2(index) {
    var matchedOptionIndex = index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex(function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  };
  var findPrevOptionIndex = function findPrevOptionIndex2(index) {
    var matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  };
  var changeFocusedOptionIndex = function changeFocusedOptionIndex2(event, index) {
    if (focusedOptionIndex !== index) {
      setFocusedOptionIndex(index);
      if (props.selectOnFocus) {
        onOptionSelect(event, visibleOptions[index], false);
      }
    }
  };
  var onArrowDownKey = function onArrowDownKey2(event) {
    if (!overlayVisibleState) {
      show();
      props.editable && changeFocusedOptionIndex(event, findSelectedOptionIndex());
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findNextOptionIndex(focusedOptionIndex) : clickedRef.current ? findFirstOptionIndex() : findFirstFocusedOptionIndex();
      changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  };
  var onArrowUpKey = function onArrowUpKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (event.altKey && !pressedInInputText) {
      if (focusedOptionIndex !== -1) {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
      state.overlayVisible && hide();
      event.preventDefault();
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findPrevOptionIndex(focusedOptionIndex) : clickedRef.current ? findLastOptionIndex() : findLastFocusedOptionIndex();
      changeFocusedOptionIndex(event, optionIndex);
      !overlayVisibleState && show();
      event.preventDefault();
    }
  };
  var onArrowLeftKey = function onArrowLeftKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    pressedInInputText && setFocusedOptionIndex(-1);
  };
  var onHomeKey = function onHomeKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (pressedInInputText) {
      event.currentTarget.setSelectionRange(0, 0);
      setFocusedOptionIndex(-1);
    } else {
      changeFocusedOptionIndex(event, findFirstOptionIndex());
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onEndKey = function onEndKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (pressedInInputText) {
      var target = event.currentTarget;
      var len = target.value.length;
      target.setSelectionRange(len, len);
      setFocusedOptionIndex(-1);
    } else {
      changeFocusedOptionIndex(event, findLastOptionIndex());
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onPageUpKey = function onPageUpKey2(event) {
    event.preventDefault();
  };
  var onPageDownKey = function onPageDownKey2(event) {
    event.preventDefault();
  };
  var onSpaceKey = function onSpaceKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    !pressedInInputText && onEnterKey(event);
  };
  var onEnterKey = function onEnterKey2(event) {
    if (!overlayVisibleState) {
      setFocusedOptionIndex(-1);
      onArrowDownKey(event);
    } else {
      if (focusedOptionIndex !== -1) {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
      hide();
    }
    event.preventDefault();
  };
  var onEscapeKey = function onEscapeKey2(event) {
    overlayVisibleState && hide();
    event.preventDefault();
  };
  var onTabKey = function onTabKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!pressedInInputText) {
      if (overlayVisibleState && !hasFocusableElements()) {
        DomHandler.focus(firstHiddenFocusableElementOnOverlay.current);
        event.preventDefault();
      } else {
        if (focusedOptionIndex !== -1) {
          onOptionSelect(event, visibleOptions[focusedOptionIndex]);
        }
        overlayVisibleState && hide();
      }
    }
  };
  var onBackspaceKey = function onBackspaceKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (pressedInInputText) {
      !overlayVisibleState && show();
    }
  };
  var onEditableInputChange = function onEditableInputChange2(event) {
    var searchIndex = null;
    if (event.target.value) {
      searchIndex = visibleOptions.findIndex(function(item2) {
        return getOptionLabel(item2).toLocaleLowerCase().startsWith(event.target.value.toLocaleLowerCase());
      });
    }
    setFocusedOptionIndex(searchIndex);
    if (props.onChange) {
      props.onChange({
        originalEvent: event.originalEvent,
        value: event.target.value,
        stopPropagation: function stopPropagation() {
          event.originalEvent.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event.originalEvent.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: event.target.value
        }
      });
    }
  };
  var onEditableInputFocus = function onEditableInputFocus2(event) {
    setFocusedState(true);
    hide();
    props.onFocus && props.onFocus(event);
  };
  var onOptionClick = function onOptionClick2(event) {
    var option = event.option;
    if (!option.disabled) {
      selectItem(event);
      DomHandler.focus(focusInputRef.current);
    }
    hide();
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    var filter = event.target.value;
    setFilterState(filter);
    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        filter
      });
    }
  };
  var onFilterClearIconClick = function onFilterClearIconClick2(callback) {
    resetFilter(callback);
  };
  var resetFilter = function resetFilter2(callback) {
    setFilterState("");
    props.onFilter && props.onFilter({
      filter: ""
    });
    callback && callback();
  };
  var clear = function clear2(event) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value: void 0,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: void 0
        }
      });
    }
    if (props.filter) {
      resetFilter();
    }
    updateEditableLabel();
  };
  var selectItem = function selectItem2(event) {
    if (selectedOption !== event.option) {
      updateEditableLabel(event.option);
      setFocusedOptionIndex(-1);
      var optionValue = getOptionValue(event.option);
      var selectedOptionIndex = findOptionIndexInList(event.option, visibleOptions);
      if (props.onChange) {
        props.onChange({
          originalEvent: event.originalEvent,
          value: optionValue,
          stopPropagation: function stopPropagation() {
            event.originalEvent.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.originalEvent.preventDefault();
          },
          target: {
            name: props.name,
            id: props.id,
            value: optionValue
          }
        });
      }
      changeFocusedOptionIndex(event.originalEvent, selectedOptionIndex);
    }
  };
  var getSelectedOptionIndex = function getSelectedOptionIndex2(options) {
    options = options || visibleOptions;
    if (props.value != null && options) {
      if (props.optionGroupLabel) {
        for (var i = 0; i < options.length; i++) {
          var selectedOptionIndex = findOptionIndexInList(props.value, getOptionGroupChildren(options[i]));
          if (selectedOptionIndex !== -1) {
            return {
              group: i,
              option: selectedOptionIndex
            };
          }
        }
      } else {
        return findOptionIndexInList(props.value, options);
      }
    }
    return -1;
  };
  var equalityKey = function equalityKey2() {
    return props.optionValue ? null : props.dataKey;
  };
  var findOptionIndexInList = function findOptionIndexInList2(value, list2) {
    var key = equalityKey();
    return list2.findIndex(function(item2) {
      return ObjectUtils.equals(value, getOptionValue(item2), key);
    });
  };
  var isSelected = function isSelected2(option) {
    return ObjectUtils.equals(props.value, getOptionValue(option), equalityKey());
  };
  var show = function show2() {
    setFocusedOptionIndex(focusedOptionIndex !== -1 ? focusedOptionIndex : props.autoOptionFocus ? findFirstFocusedOptionIndex() : props.editable ? -1 : findSelectedOptionIndex());
    setOverlayVisibleState(true);
  };
  var hide = function hide2() {
    setOverlayVisibleState(false);
    clickedRef.current = false;
  };
  var onFocus = function onFocus2() {
    if (props.editable && !overlayVisibleState && clickedRef.current === false) {
      DomHandler.focus(inputRef.current);
    }
  };
  var onOverlayEnter = function onOverlayEnter2(callback) {
    ZIndexUtils.set("overlay", overlayRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, context && context.zIndex.overlay || PrimeReact.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    alignOverlay();
    callback && callback();
  };
  var onOverlayEntered = function onOverlayEntered2(callback) {
    callback && callback();
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    if (props.filter && props.resetFilterOnHide) {
      resetFilter();
    }
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay2() {
    DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || context && context.appendTo || PrimeReact.appendTo);
  };
  var scrollInView = function scrollInView2() {
    var focusedItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-focused="true"]');
    if (focusedItem && focusedItem.scrollIntoView) {
      focusedItem.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    } else {
      var highlightItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');
      if (highlightItem && highlightItem.scrollIntoView) {
        highlightItem.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      }
    }
  };
  var updateEditableLabel = function updateEditableLabel2(option) {
    if (inputRef.current) {
      inputRef.current.value = option ? getOptionLabel(option) : props.value || "";
      if (focusInputRef.current) {
        focusInputRef.current.value = inputRef.current.value;
      }
    }
  };
  var getOptionLabel = function getOptionLabel2(option) {
    return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : ObjectUtils.resolveFieldData(option, "label");
  };
  var getOptionValue = function getOptionValue2(option) {
    return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : ObjectUtils.resolveFieldData(option, "value") || option;
  };
  var getOptionRenderKey = function getOptionRenderKey2(option) {
    return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
  };
  var isOptionGroup = function isOptionGroup2(option) {
    return props.optionGroupLabel && option.optionGroup && option.group;
  };
  var isOptionDisabled = function isOptionDisabled2(option) {
    if (props.optionDisabled) {
      return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
    }
    return option && option.disabled !== void 0 ? option.disabled : false;
  };
  var getOptionGroupRenderKey = function getOptionGroupRenderKey2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupLabel = function getOptionGroupLabel2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupChildren = function getOptionGroupChildren2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
  };
  var updateInputField = function updateInputField2() {
    if (props.editable && inputRef.current) {
      var label = selectedOption ? getOptionLabel(selectedOption) : null;
      var value = label || props.value || "";
      inputRef.current.value = value;
      if (focusInputRef.current) {
        focusInputRef.current.value = value;
      }
    }
  };
  var getSelectedOption = function getSelectedOption2() {
    var index = getSelectedOptionIndex(props.options);
    return index !== -1 ? props.optionGroupLabel ? getOptionGroupChildren(props.options[index.group])[index.option] : props.options[index] : null;
  };
  React11.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      hide,
      clear,
      focus: function focus() {
        return DomHandler.focus(focusInputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      },
      getFocusInput: function getFocusInput() {
        return focusInputRef.current;
      },
      getVirtualScroller: function getVirtualScroller() {
        return virtualScrollerRef.current;
      }
    };
  });
  React11.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
    ObjectUtils.combinedRefs(focusInputRef, props.focusInputRef);
  }, [inputRef, props.inputRef, focusInputRef, props.focusInputRef]);
  useMountEffect(function() {
    if (props.autoFocus) {
      DomHandler.focus(focusInputRef.current, props.autoFocus);
    }
    alignOverlay();
  });
  useUpdateEffect(function() {
    if (overlayVisibleState && (props.value || focusedOptionIndex >= 0)) {
      scrollInView();
    }
  }, [overlayVisibleState, props.value, focusedOptionIndex]);
  useUpdateEffect(function() {
    if (overlayVisibleState && filterState && props.filter) {
      alignOverlay();
    }
  }, [overlayVisibleState, filterState, props.filter]);
  useUpdateEffect(function() {
    if (filterState && (!props.options || props.options.length === 0)) {
      setFilterState("");
    }
    updateInputField();
    if (inputRef.current) {
      inputRef.current.selectedIndex = 1;
    }
  });
  useUnmountEffect(function() {
    ZIndexUtils.clear(overlayRef.current);
  });
  var createHiddenSelect = function createHiddenSelect2() {
    var option = {
      value: "",
      label: props.placeholder
    };
    if (selectedOption) {
      var optionValue = getOptionValue(selectedOption);
      option = {
        value: _typeof3(optionValue) === "object" ? props.options.findIndex(function(o) {
          return o === optionValue;
        }) : optionValue,
        label: getOptionLabel(selectedOption)
      };
    }
    var hiddenSelectedMessageProps = mergeProps({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, ptm("hiddenSelectedMessage"));
    var selectProps = mergeProps({
      ref: inputRef,
      required: props.required,
      defaultValue: option.value,
      name: props.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, ptm("select"));
    var optionProps = mergeProps({
      value: option.value
    }, ptm("option"));
    return React11.createElement("div", hiddenSelectedMessageProps, React11.createElement("select", selectProps, React11.createElement("option", optionProps, option.label)));
  };
  var createKeyboardHelper = function createKeyboardHelper2() {
    var value = ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;
    if (props.editable) {
      value = value || props.value || "";
    }
    var hiddenSelectedMessageProps = mergeProps({
      className: "p-hidden-accessible"
    }, ptm("hiddenSelectedMessage"));
    var inputProps = mergeProps(_objectSpread3({
      ref: focusInputRef,
      id: props.inputId,
      defaultValue: value,
      type: "text",
      readOnly: true,
      "aria-haspopup": "listbox",
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      onKeyDown: onInputKeyDown,
      disabled: props.disabled,
      tabIndex: !props.disabled ? props.tabIndex || 0 : -1
    }, ariaProps), ptm("input"));
    return React11.createElement("div", hiddenSelectedMessageProps, React11.createElement("input", inputProps));
  };
  var createLabel = function createLabel2() {
    var label = ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;
    if (props.editable) {
      var value = label || props.value || "";
      var _inputProps = mergeProps(_objectSpread3({
        ref: inputRef,
        type: "text",
        defaultValue: value,
        className: cx("input", {
          label
        }),
        disabled: props.disabled,
        placeholder: props.placeholder,
        maxLength: props.maxLength,
        onInput: onEditableInputChange,
        onFocus: onEditableInputFocus,
        onKeyDown: onInputKeyDown,
        onBlur: onInputBlur,
        tabIndex: !props.disabled ? props.tabIndex || 0 : -1,
        "aria-haspopup": "listbox"
      }, ariaProps), ptm("input"));
      return React11.createElement("input", _inputProps);
    }
    var content = props.valueTemplate ? ObjectUtils.getJSXElement(props.valueTemplate, selectedOption, props) : label || props.placeholder || "empty";
    var inputProps = mergeProps({
      ref: inputRef,
      className: cx("input", {
        label
      }),
      tabIndex: "-1"
    }, ptm("input"));
    return React11.createElement("span", inputProps, content);
  };
  var onClearIconKeyDown = function onClearIconKeyDown2(event) {
    if (event.key === "Enter" || event.code === "Space") {
      clear(event);
      event.preventDefault();
    }
  };
  var createClearIcon = function createClearIcon2() {
    if (props.value != null && props.showClear && !props.disabled) {
      var clearIconProps = mergeProps({
        className: cx("clearIcon"),
        onPointerUp: clear,
        tabIndex: props.tabIndex || "0",
        onKeyDown: onClearIconKeyDown,
        "aria-label": localeOption("clear")
      }, ptm("clearIcon"));
      var icon = props.clearIcon || React11.createElement(TimesIcon, clearIconProps);
      return IconUtils.getJSXIcon(icon, _objectSpread3({}, clearIconProps), {
        props
      });
    }
    return null;
  };
  var createLoadingIcon = function createLoadingIcon2() {
    var loadingIconProps = mergeProps({
      className: cx("loadingIcon"),
      "data-pr-overlay-visible": overlayVisibleState
    }, ptm("loadingIcon"));
    var icon = props.loadingIcon || React11.createElement(SpinnerIcon, {
      spin: true
    });
    var loadingIcon = IconUtils.getJSXIcon(icon, _objectSpread3({}, loadingIconProps), {
      props
    });
    var ariaLabel3 = props.placeholder || props.ariaLabel;
    var loadingButtonProps = mergeProps({
      className: cx("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      "aria-label": ariaLabel3
    }, ptm("trigger"));
    return React11.createElement("div", loadingButtonProps, loadingIcon);
  };
  var createDropdownIcon = function createDropdownIcon2() {
    var dropdownIconProps = mergeProps({
      className: cx("dropdownIcon"),
      "data-pr-overlay-visible": overlayVisibleState
    }, ptm("dropdownIcon"));
    var icon = props.dropdownIcon || React11.createElement(ChevronDownIcon, dropdownIconProps);
    var dropdownIcon2 = IconUtils.getJSXIcon(icon, _objectSpread3({}, dropdownIconProps), {
      props
    });
    var ariaLabel3 = props.placeholder || props.ariaLabel;
    var triggerProps = mergeProps({
      className: cx("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      "aria-label": ariaLabel3
    }, ptm("trigger"));
    return React11.createElement("div", triggerProps, dropdownIcon2);
  };
  var visibleOptions = getVisibleOptions();
  var selectedOption = getSelectedOption();
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = DropdownBase.getOtherProps(props);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var hiddenSelect = createHiddenSelect();
  var keyboardHelper = createKeyboardHelper();
  var labelElement = createLabel();
  var dropdownIcon = props.loading ? createLoadingIcon() : createDropdownIcon();
  var clearIcon = createClearIcon();
  var rootProps = mergeProps({
    id: props.id,
    ref: elementRef,
    className: classNames(props.className, cx("root", {
      context,
      focusedState,
      overlayVisibleState
    })),
    style: props.style,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onMouseDown: props.onMouseDown,
    onContextMenu: props.onContextMenu,
    onFocus,
    "data-p-disabled": props.disabled,
    "data-p-focus": focusedState
  }, otherProps, ptm("root"));
  var firstHiddenFocusableElementProps = mergeProps({
    ref: firstHiddenFocusableElementOnOverlay,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: onFirstHiddenFocus,
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }, ptm("hiddenFirstFocusableEl"));
  var lastHiddenFocusableElementProps = mergeProps({
    ref: lastHiddenFocusableElementOnOverlay,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: onLastHiddenFocus,
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }, ptm("hiddenLastFocusableEl"));
  return React11.createElement(React11.Fragment, null, React11.createElement("div", rootProps, keyboardHelper, hiddenSelect, labelElement, clearIcon, dropdownIcon, React11.createElement(DropdownPanel, _extends11({
    hostName: "Dropdown",
    ref: overlayRef,
    visibleOptions,
    virtualScrollerRef
  }, props, {
    appendTo,
    cx,
    filterValue: filterState,
    focusedOptionIndex,
    getOptionGroupChildren,
    getOptionGroupLabel,
    getOptionGroupRenderKey,
    getOptionLabel,
    getOptionRenderKey,
    getSelectedOptionIndex,
    hasFilter,
    "in": overlayVisibleState,
    isOptionDisabled,
    isSelected,
    onClick: onPanelClick,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    onFilterClearIconClick,
    onFilterInputChange,
    onFilterInputKeyDown,
    onOptionClick,
    ptm,
    resetFilter,
    changeFocusedOptionIndex,
    firstFocusableElement: React11.createElement("span", firstHiddenFocusableElementProps),
    lastFocusableElement: React11.createElement("span", lastHiddenFocusableElementProps),
    sx
  }))), hasTooltip && React11.createElement(Tooltip, _extends11({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
Dropdown.displayName = "Dropdown";

// node_modules/primereact/paginator/paginator.esm.js
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest4();
}
function _typeof4(o) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof4(o);
}
function _toPrimitive4(input3, hint) {
  if (_typeof4(input3) !== "object" || input3 === null)
    return input3;
  var prim = input3[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input3, hint || "default");
    if (_typeof4(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input3);
}
function _toPropertyKey4(arg) {
  var key = _toPrimitive4(arg, "string");
  return _typeof4(key) === "symbol" ? key : String(key);
}
function _defineProperty4(obj, key, value) {
  key = _toPropertyKey4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var classes3 = {
  root: "p-paginator p-component",
  left: "p-paginator-left-content",
  end: "p-paginator-right-content",
  firstPageIcon: "p-paginator-icon",
  firstPageButton: function firstPageButton(_ref) {
    var disabled = _ref.disabled;
    return classNames("p-paginator-first p-paginator-element p-link", {
      "p-disabled": disabled
    });
  },
  prevPageIcon: "p-paginator-icon",
  prevPageButton: function prevPageButton(_ref2) {
    var disabled = _ref2.disabled;
    return classNames("p-paginator-prev p-paginator-element p-link", {
      "p-disabled": disabled
    });
  },
  nextPageIcon: "p-paginator-icon",
  nextPageButton: function nextPageButton(_ref3) {
    var disabled = _ref3.disabled;
    return classNames("p-paginator-next p-paginator-element p-link", {
      "p-disabled": disabled
    });
  },
  lastPageIcon: "p-paginator-icon",
  lastPageButton: function lastPageButton(_ref4) {
    var disabled = _ref4.disabled;
    return classNames("p-paginator-last p-paginator-element p-link", {
      "p-disabled": disabled
    });
  },
  pageButton: function pageButton(_ref5) {
    var pageLink = _ref5.pageLink, startPageInView = _ref5.startPageInView, endPageInView = _ref5.endPageInView, page = _ref5.page;
    return classNames("p-paginator-page p-paginator-element p-link", {
      "p-paginator-page-start": pageLink === startPageInView,
      "p-paginator-page-end": pageLink === endPageInView,
      "p-highlight": pageLink - 1 === page
    });
  },
  pages: "p-paginator-pages"
};
var styles4 = "\n@layer primereact {\n    .p-paginator {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n    \n    .p-paginator-left-content {\n        margin-right: auto;\n    }\n    \n    .p-paginator-right-content {\n        margin-left: auto;\n    }\n    \n    .p-paginator-page,\n    .p-paginator-next,\n    .p-paginator-last,\n    .p-paginator-first,\n    .p-paginator-prev,\n    .p-paginator-current {\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        line-height: 1;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-paginator-element:focus {\n        z-index: 1;\n        position: relative;\n    }\n}\n";
var PaginatorBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Paginator",
    __parentMetadata: null,
    totalRecords: 0,
    rows: 0,
    first: 0,
    pageLinkSize: 5,
    rowsPerPageOptions: null,
    alwaysShow: true,
    style: null,
    className: null,
    template: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    onPageChange: null,
    leftContent: null,
    rightContent: null,
    dropdownAppendTo: null,
    currentPageReportTemplate: "({currentPage} of {totalPages})",
    children: void 0
  },
  css: {
    classes: classes3,
    styles: styles4
  }
});
var CurrentPageReportBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "CurrentPageReport",
    pageCount: null,
    page: null,
    first: null,
    rows: null,
    totalRecords: null,
    reportTemplate: "({currentPage} of {totalPages})",
    template: null,
    children: void 0
  }
});
var FirstPageLinkBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "FirstPageLink",
    disabled: false,
    onClick: null,
    template: null,
    firstPageLinkIcon: null,
    children: void 0
  }
});
var JumpToPageInputBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "JumpToPageInput",
    page: null,
    rows: null,
    pageCount: null,
    disabled: false,
    template: null,
    onChange: null,
    children: void 0,
    metaData: null,
    ptm: null
  }
});
var LastPageLinkBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "LastPageLink",
    disabled: false,
    onClick: null,
    template: null,
    lastPageLinkIcon: null,
    children: void 0
  }
});
var NextPageLinkBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "NextPageLink",
    disabled: false,
    onClick: null,
    template: null,
    nextPageLinkIcon: null,
    children: void 0
  }
});
var PageLinksBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "PageLinks",
    value: null,
    page: null,
    rows: null,
    pageCount: null,
    links: null,
    template: null,
    children: void 0
  }
});
var PrevPageLinkBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "PrevPageLink",
    disabled: false,
    onClick: null,
    template: null,
    prevPageLinkIcon: null,
    children: void 0
  }
});
var RowsPerPageDropdownBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "RowsPerPageDropdown",
    options: null,
    value: null,
    page: null,
    pageCount: null,
    totalRecords: 0,
    appendTo: null,
    onChange: null,
    template: null,
    disabled: false,
    children: void 0
  }
});
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var CurrentPageReport = React12.memo(function(inProps) {
  var mergeProps = useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = CurrentPageReportBase.getProps(inProps, context);
  var report = {
    currentPage: props.page + 1,
    totalPages: props.totalPages,
    first: Math.min(props.first + 1, props.totalRecords),
    last: Math.min(props.first + props.rows, props.totalRecords),
    rows: props.rows,
    totalRecords: props.totalRecords
  };
  var text = props.reportTemplate.replace("{currentPage}", report.currentPage).replace("{totalPages}", report.totalPages).replace("{first}", report.first).replace("{last}", report.last).replace("{rows}", report.rows).replace("{totalRecords}", report.totalRecords);
  var currentProps = mergeProps({
    "aria-live": "polite",
    className: "p-paginator-current"
  }, props.ptm("current", {
    hostName: props.hostName
  }));
  var element = React12.createElement("span", currentProps, text);
  if (props.template) {
    var defaultOptions = _objectSpread$5(_objectSpread$5({}, report), {
      ariaLive: "polite",
      className: "p-paginator-current",
      element,
      props
    });
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
CurrentPageReport.displayName = "CurrentPageReport";
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var FirstPageLink = React12.memo(function(inProps) {
  var mergeProps = useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = FirstPageLinkBase.getProps(inProps, context);
  var ptm = props.ptm, cx = props.cx;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      hostName: props.hostName,
      context: {
        disabled: props.disabled
      }
    });
  };
  var className = classNames("p-paginator-first p-paginator-element p-link", {
    "p-disabled": props.disabled
  });
  var iconClassName = "p-paginator-icon";
  var firstPageIconProps = mergeProps({
    className: cx("firstPageIcon")
  }, getPTOptions("firstPageIcon"));
  var icon = props.firstPageLinkIcon || React12.createElement(AngleDoubleLeftIcon, firstPageIconProps);
  var firstPageLinkIcon = IconUtils.getJSXIcon(icon, _objectSpread$4({}, firstPageIconProps), {
    props
  });
  var firstPageButtonProps = mergeProps({
    type: "button",
    className: cx("firstPageButton", {
      disabled: props.disabled
    }),
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": ariaLabel("firstPageLabel")
  }, getPTOptions("firstPageButton"));
  var element = React12.createElement("button", firstPageButtonProps, firstPageLinkIcon, React12.createElement(Ripple, null));
  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className,
      iconClassName,
      disabled: props.disabled,
      element,
      props
    };
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
FirstPageLink.displayName = "FirstPageLink";
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey4(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var FilterMatchMode = Object.freeze({
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter",
  CUSTOM: "custom"
});
var PrimeReact2 = _createClass(function PrimeReact3() {
  _classCallCheck(this, PrimeReact3);
});
_defineProperty4(PrimeReact2, "ripple", false);
_defineProperty4(PrimeReact2, "inputStyle", "outlined");
_defineProperty4(PrimeReact2, "locale", "en");
_defineProperty4(PrimeReact2, "appendTo", null);
_defineProperty4(PrimeReact2, "cssTransition", true);
_defineProperty4(PrimeReact2, "autoZIndex", true);
_defineProperty4(PrimeReact2, "hideOverlaysOnDocumentScrolling", false);
_defineProperty4(PrimeReact2, "nonce", null);
_defineProperty4(PrimeReact2, "nullSortOrder", 1);
_defineProperty4(PrimeReact2, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
_defineProperty4(PrimeReact2, "pt", void 0);
_defineProperty4(PrimeReact2, "filterMatchModeOptions", {
  text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
  numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
  date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
});
_defineProperty4(PrimeReact2, "changeTheme", function(currentTheme, newTheme, linkElementId, callback) {
  var _linkElement$parentNo;
  var linkElement = document.getElementById(linkElementId);
  var cloneLinkElement = linkElement.cloneNode(true);
  var newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
  cloneLinkElement.setAttribute("id", linkElementId + "-clone");
  cloneLinkElement.setAttribute("href", newThemeUrl);
  cloneLinkElement.addEventListener("load", function() {
    linkElement.remove();
    cloneLinkElement.setAttribute("id", linkElementId);
    if (callback) {
      callback();
    }
  });
  (_linkElement$parentNo = linkElement.parentNode) === null || _linkElement$parentNo === void 0 || _linkElement$parentNo.insertBefore(cloneLinkElement, linkElement.nextSibling);
});
var locales = {
  en: {
    accept: "Yes",
    addRule: "Add Rule",
    am: "AM",
    apply: "Apply",
    cancel: "Cancel",
    choose: "Choose",
    chooseDate: "Choose Date",
    chooseMonth: "Choose Month",
    chooseYear: "Choose Year",
    clear: "Clear",
    completed: "Completed",
    contains: "Contains",
    custom: "Custom",
    dateAfter: "Date is after",
    dateBefore: "Date is before",
    dateFormat: "mm/dd/yy",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    emptyFilterMessage: "No results found",
    emptyMessage: "No available options",
    emptySearchMessage: "No results found",
    emptySelectionMessage: "No selected item",
    endsWith: "Ends with",
    equals: "Equals",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filter",
    firstDayOfWeek: 0,
    gt: "Greater than",
    gte: "Greater than or equal to",
    lt: "Less than",
    lte: "Less than or equal to",
    matchAll: "Match All",
    matchAny: "Match Any",
    medium: "Medium",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    nextDecade: "Next Decade",
    nextHour: "Next Hour",
    nextMinute: "Next Minute",
    nextMonth: "Next Month",
    nextSecond: "Next Second",
    nextYear: "Next Year",
    noFilter: "No Filter",
    notContains: "Not contains",
    notEquals: "Not equals",
    now: "Now",
    passwordPrompt: "Enter a password",
    pending: "Pending",
    pm: "PM",
    prevDecade: "Previous Decade",
    prevHour: "Previous Hour",
    prevMinute: "Previous Minute",
    prevMonth: "Previous Month",
    prevSecond: "Previous Second",
    prevYear: "Previous Year",
    reject: "No",
    removeRule: "Remove Rule",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    showMonthAfterYear: false,
    startsWith: "Starts with",
    strong: "Strong",
    today: "Today",
    upload: "Upload",
    weak: "Weak",
    weekHeader: "Wk",
    aria: {
      cancelEdit: "Cancel Edit",
      close: "Close",
      collapseRow: "Row Collapsed",
      editRow: "Edit Row",
      expandRow: "Row Expanded",
      falseLabel: "False",
      filterConstraint: "Filter Constraint",
      filterOperator: "Filter Operator",
      firstPageLabel: "First Page",
      gridView: "Grid View",
      hideFilterMenu: "Hide Filter Menu",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      lastPageLabel: "Last Page",
      listView: "List View",
      moveAllToSource: "Move All to Source",
      moveAllToTarget: "Move All to Target",
      moveBottom: "Move Bottom",
      moveDown: "Move Down",
      moveToSource: "Move to Source",
      moveToTarget: "Move to Target",
      moveTop: "Move Top",
      moveUp: "Move Up",
      navigation: "Navigation",
      next: "Next",
      nextPageLabel: "Next Page",
      nullLabel: "Not Selected",
      pageLabel: "Page {page}",
      otpLabel: "Please enter one time password character {0}",
      passwordHide: "Hide Password",
      passwordShow: "Show Password",
      previous: "Previous",
      previousPageLabel: "Previous Page",
      rotateLeft: "Rotate Left",
      rotateRight: "Rotate Right",
      rowsPerPageLabel: "Rows per page",
      saveEdit: "Save Edit",
      scrollTop: "Scroll Top",
      selectAll: "All items selected",
      selectRow: "Row Selected",
      showFilterMenu: "Show Filter Menu",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 star",
      stars: "{star} stars",
      trueLabel: "True",
      unselectAll: "All items unselected",
      unselectRow: "Row Unselected",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out"
    }
  }
};
function ariaLabel2(ariaKey, options) {
  if (ariaKey.includes("__proto__") || ariaKey.includes("prototype")) {
    throw new Error("Unsafe ariaKey detected");
  }
  var _locale = PrimeReact2.locale;
  try {
    var _ariaLabel = localeOptions(_locale).aria[ariaKey];
    if (_ariaLabel) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          _ariaLabel = _ariaLabel.replace("{".concat(key, "}"), options[key]);
        }
      }
    }
    return _ariaLabel;
  } catch (error) {
    throw new Error("The ".concat(ariaKey, " option is not found in the current locale('").concat(_locale, "')."));
  }
}
function localeOptions(locale) {
  var _locale = locale || PrimeReact2.locale;
  if (_locale.includes("__proto__") || _locale.includes("prototype")) {
    throw new Error("Unsafe locale detected");
  }
  return locales[_locale];
}
var JumpToPageInput = React12.memo(function(inProps) {
  useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = JumpToPageInputBase.getProps(inProps, context);
  var ariaLabelValue = ariaLabel2("jumpToPageInputLabel");
  var onChange = function onChange2(event) {
    if (props.onChange) {
      props.onChange(props.rows * (event.value - 1), props.rows);
    }
  };
  var value = props.totalPages > 0 ? props.page + 1 : 0;
  var element = React12.createElement(InputNumber, {
    value,
    onChange,
    className: "p-paginator-page-input",
    disabled: props.disabled,
    pt: props.ptm("JTPInput"),
    unstyled: props.unstyled,
    __parentMetadata: {
      parent: props.metaData
    },
    "aria-label": ariaLabelValue
  });
  if (props.template) {
    var defaultOptions = {
      value,
      onChange,
      disabled: props.disabled,
      className: "p-paginator-page-input",
      "aria-label": ariaLabelValue,
      element,
      props
    };
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
JumpToPageInput.displayName = "JumpToPageInput";
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var LastPageLink = React12.memo(function(inProps) {
  var mergeProps = useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = LastPageLinkBase.getProps(inProps, context);
  var ptm = props.ptm, cx = props.cx;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      hostName: props.hostName,
      context: {
        disabled: props.disabled
      }
    });
  };
  var className = classNames("p-paginator-last p-paginator-element p-link", {
    "p-disabled": props.disabled
  });
  var iconClassName = "p-paginator-icon";
  var lastPageIconProps = mergeProps({
    className: cx("lastPageIcon")
  }, getPTOptions("lastPageIcon"));
  var icon = props.lastPageLinkIcon || React12.createElement(AngleDoubleRightIcon, lastPageIconProps);
  var lastPageLinkIcon = IconUtils.getJSXIcon(icon, _objectSpread$3({}, lastPageIconProps), {
    props
  });
  var lastPageButtonProps = mergeProps({
    type: "button",
    className: cx("lastPageButton", {
      disabled: props.disabled
    }),
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": ariaLabel("lastPageLabel")
  }, getPTOptions("lastPageButton"));
  var element = React12.createElement("button", lastPageButtonProps, lastPageLinkIcon, React12.createElement(Ripple, null));
  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className,
      iconClassName,
      disabled: props.disabled,
      element,
      props
    };
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
LastPageLink.displayName = "LastPageLink";
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var NextPageLink = React12.memo(function(inProps) {
  var mergeProps = useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = NextPageLinkBase.getProps(inProps, context);
  var ptm = props.ptm, cx = props.cx;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      hostName: props.hostName,
      context: {
        disabled: props.disabled
      }
    });
  };
  var className = classNames("p-paginator-next p-paginator-element p-link", {
    "p-disabled": props.disabled
  });
  var iconClassName = "p-paginator-icon";
  var nextPageIconProps = mergeProps({
    className: cx("nextPageIcon")
  }, getPTOptions("nextPageIcon"));
  var icon = props.nextPageLinkIcon || React12.createElement(AngleRightIcon, nextPageIconProps);
  var nextPageLinkIcon = IconUtils.getJSXIcon(icon, _objectSpread$2({}, nextPageIconProps), {
    props
  });
  var nextPageButtonProps = mergeProps({
    type: "button",
    className: cx("nextPageButton", {
      disabled: props.disabled
    }),
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": ariaLabel("nextPageLabel")
  }, getPTOptions("nextPageButton"));
  var element = React12.createElement("button", nextPageButtonProps, nextPageLinkIcon, React12.createElement(Ripple, null));
  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className,
      iconClassName,
      disabled: props.disabled,
      element,
      nextPageLinkIcon,
      props
    };
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
NextPageLink.displayName = "NextPageLink";
var PageLinks = React12.memo(function(inProps) {
  var mergeProps = useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = PageLinksBase.getProps(inProps, context);
  var ptm = props.ptm, cx = props.cx;
  var getPTOptions = function getPTOptions2(pageLink, key) {
    return ptm(key, {
      hostName: props.hostName,
      context: {
        active: pageLink - 1 === props.page
      }
    });
  };
  var onPageLinkClick = function onPageLinkClick2(event, pageLink) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        value: pageLink
      });
    }
    event.preventDefault();
  };
  var elements;
  if (props.value) {
    var startPageInView = props.value[0];
    var endPageInView = props.value[props.value.length - 1];
    elements = props.value.map(function(pageLink) {
      var className = classNames("p-paginator-page p-paginator-element p-link", {
        "p-paginator-page-start": pageLink === startPageInView,
        "p-paginator-page-end": pageLink === endPageInView,
        "p-highlight": pageLink - 1 === props.page
      });
      var pageButtonProps = mergeProps({
        type: "button",
        onClick: function onClick(e) {
          return onPageLinkClick(e, pageLink);
        },
        className: cx("pageButton", {
          pageLink,
          startPageInView,
          endPageInView,
          page: props.page
        }),
        disabled: props.disabled,
        "aria-label": ariaLabel("pageLabel", {
          page: pageLink
        }),
        "aria-current": pageLink - 1 === props.page ? "true" : void 0
      }, getPTOptions(pageLink, "pageButton"));
      var element = React12.createElement("button", pageButtonProps, pageLink, React12.createElement(Ripple, null));
      if (props.template) {
        var defaultOptions = {
          onClick: function onClick(e) {
            return onPageLinkClick(e, pageLink);
          },
          className,
          view: {
            startPage: startPageInView - 1,
            endPage: endPageInView - 1
          },
          page: pageLink - 1,
          currentPage: props.page,
          totalPages: props.pageCount,
          ariaLabel: ariaLabel("pageLabel", {
            page: pageLink
          }),
          ariaCurrent: pageLink - 1 === props.page ? "true" : void 0,
          element,
          props
        };
        element = ObjectUtils.getJSXElement(props.template, defaultOptions);
      }
      return React12.createElement(React12.Fragment, {
        key: pageLink
      }, element);
    });
  }
  var pagesProps = mergeProps({
    className: cx("pages")
  }, ptm("pages", {
    hostName: props.hostName
  }));
  return React12.createElement("span", pagesProps, elements);
});
PageLinks.displayName = "PageLinks";
function ownKeys$12(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$12(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$12(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var PrevPageLink = React12.memo(function(inProps) {
  var mergeProps = useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = PrevPageLinkBase.getProps(inProps, context);
  var ptm = props.ptm, cx = props.cx;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      hostName: props.hostName,
      context: {
        disabled: props.disabled
      }
    });
  };
  var className = classNames("p-paginator-prev p-paginator-element p-link", {
    "p-disabled": props.disabled
  });
  var iconClassName = "p-paginator-icon";
  var prevPageIconProps = mergeProps({
    className: cx("prevPageIcon")
  }, getPTOptions("prevPageIcon"));
  var icon = props.prevPageLinkIcon || React12.createElement(AngleLeftIcon, prevPageIconProps);
  var prevPageLinkIcon = IconUtils.getJSXIcon(icon, _objectSpread$12({}, prevPageIconProps), {
    props
  });
  var prevPageButtonProps = mergeProps({
    type: "button",
    className: cx("prevPageButton", {
      disabled: props.disabled
    }),
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": ariaLabel("previousPageLabel")
  }, getPTOptions("prevPageButton"));
  var element = React12.createElement("button", prevPageButtonProps, prevPageLinkIcon, React12.createElement(Ripple, null));
  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className,
      iconClassName,
      disabled: props.disabled,
      element,
      props
    };
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
PrevPageLink.displayName = "PrevPageLink";
var RowsPerPageDropdown = React12.memo(function(inProps) {
  useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = RowsPerPageDropdownBase.getProps(inProps, context);
  var hasOptions = props.options && props.options.length > 0;
  var options = hasOptions ? props.options.map(function(opt) {
    return {
      label: String(opt),
      value: opt
    };
  }) : [];
  var placeholderValue = localeOption("choose");
  var ariaLabelValue = ariaLabel2("jumpToPageDropdownLabel");
  var element = hasOptions ? React12.createElement(React12.Fragment, null, React12.createElement(Dropdown, {
    value: props.value,
    options,
    onChange: props.onChange,
    appendTo: props.appendTo,
    disabled: props.disabled,
    placeholder: placeholderValue,
    "aria-label": ariaLabelValue,
    pt: props.ptm("RPPDropdown"),
    unstyled: props.unstyled,
    __parentMetadata: {
      parent: props.metaData
    }
  })) : null;
  if (props.template) {
    var defaultOptions = {
      value: props.value,
      options,
      onChange: props.onChange,
      appendTo: props.appendTo,
      currentPage: props.page,
      totalPages: props.pageCount,
      totalRecords: props.totalRecords,
      disabled: props.disabled,
      ariaLabel: ariaLabelValue,
      element,
      props
    };
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
RowsPerPageDropdown.displayName = "RowsPerPageDropdown";
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Paginator = React12.memo(React12.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React12.useContext(PrimeReactContext);
  var props = PaginatorBase.getProps(inProps, context);
  var metaData = _objectSpread4({
    props
  }, props.__parentMetadata);
  var _PaginatorBase$setMet = PaginatorBase.setMetaData(metaData), ptm = _PaginatorBase$setMet.ptm, cx = _PaginatorBase$setMet.cx, isUnstyled = _PaginatorBase$setMet.isUnstyled;
  useHandleStyle(PaginatorBase.css.styles, isUnstyled, {
    name: "paginator"
  });
  var elementRef = React12.useRef(null);
  var page = Math.floor(props.first / props.rows);
  var totalPages = Math.ceil(props.totalRecords / props.rows);
  var isFirstPage = page === 0;
  var isLastPage = page === totalPages - 1;
  var isEmpty = totalPages === 0;
  var calculatePageLinkBoundaries = function calculatePageLinkBoundaries2() {
    var numberOfPages = totalPages;
    var visiblePages = Math.min(props.pageLinkSize, numberOfPages);
    var start = Math.max(0, Math.ceil(page - visiblePages / 2));
    var end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    var delta = props.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  };
  var updatePageLinks = function updatePageLinks2() {
    var pageLinks = [];
    var boundaries = calculatePageLinkBoundaries();
    var start = boundaries[0];
    var end = boundaries[1];
    for (var i = start; i <= end; i++) {
      pageLinks.push(i + 1);
    }
    return pageLinks;
  };
  var changePage = function changePage2(first, rows) {
    var pc = totalPages;
    var p = Math.floor(first / rows);
    if (p >= 0 && p < pc) {
      var newPageState = {
        first,
        rows,
        page: p,
        totalPages: pc
      };
      if (props.onPageChange) {
        props.onPageChange(newPageState);
      }
    }
  };
  var changePageToFirst = function changePageToFirst2(event) {
    changePage(0, props.rows);
    event.preventDefault();
  };
  var changePageToPrev = function changePageToPrev2(event) {
    changePage(props.first - props.rows, props.rows);
    event.preventDefault();
  };
  var onPageLinkClick = function onPageLinkClick2(event) {
    changePage((event.value - 1) * props.rows, props.rows);
  };
  var changePageToNext = function changePageToNext2(event) {
    changePage(props.first + props.rows, props.rows);
    event.preventDefault();
  };
  var changePageToLast = function changePageToLast2(event) {
    changePage((totalPages - 1) * props.rows, props.rows);
    event.preventDefault();
  };
  var onRowsChange = function onRowsChange2(event) {
    var rows = event.value;
    changePage(0, rows);
  };
  React12.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  useUpdateEffect(function() {
    if (page > 0 && props.first >= props.totalRecords) {
      changePage((totalPages - 1) * props.rows, props.rows);
    }
  }, [props.totalRecords]);
  var createElement13 = function createElement14(key, template) {
    var element;
    switch (key) {
      case "FirstPageLink":
        element = React12.createElement(FirstPageLink, {
          hostName: "Paginator",
          key,
          page,
          totalPages,
          totalRecords: props.totalRecords,
          rows: props.rows,
          onClick: changePageToFirst,
          disabled: isFirstPage || isEmpty,
          template,
          firstPageLinkIcon: props.firstPageLinkIcon,
          ptm,
          cx
        });
        break;
      case "PrevPageLink":
        element = React12.createElement(PrevPageLink, {
          hostName: "Paginator",
          key,
          page,
          totalPages,
          totalRecords: props.totalRecords,
          rows: props.rows,
          onClick: changePageToPrev,
          disabled: isFirstPage || isEmpty,
          template,
          prevPageLinkIcon: props.prevPageLinkIcon,
          ptm,
          cx
        });
        break;
      case "NextPageLink":
        element = React12.createElement(NextPageLink, {
          hostName: "Paginator",
          key,
          page,
          totalPages,
          totalRecords: props.totalRecords,
          rows: props.rows,
          onClick: changePageToNext,
          disabled: isLastPage || isEmpty,
          template,
          nextPageLinkIcon: props.nextPageLinkIcon,
          ptm,
          cx
        });
        break;
      case "LastPageLink":
        element = React12.createElement(LastPageLink, {
          hostName: "Paginator",
          key,
          page,
          totalPages,
          totalRecords: props.totalRecords,
          rows: props.rows,
          onClick: changePageToLast,
          disabled: isLastPage || isEmpty,
          template,
          lastPageLinkIcon: props.lastPageLinkIcon,
          ptm,
          cx
        });
        break;
      case "PageLinks":
        element = React12.createElement(PageLinks, {
          hostName: "Paginator",
          key,
          page,
          totalPages,
          totalRecords: props.totalRecords,
          rows: props.rows,
          value: updatePageLinks(),
          onClick: onPageLinkClick,
          template,
          ptm,
          cx
        });
        break;
      case "RowsPerPageDropdown":
        element = React12.createElement(RowsPerPageDropdown, {
          hostName: "Paginator",
          key,
          value: props.rows,
          page,
          totalPages,
          totalRecords: props.totalRecords,
          options: props.rowsPerPageOptions,
          onChange: onRowsChange,
          appendTo: props.dropdownAppendTo,
          template,
          disabled: isEmpty,
          unstyled: props.unstyled,
          ptm,
          cx,
          metaData
        });
        break;
      case "CurrentPageReport":
        element = React12.createElement(CurrentPageReport, {
          hostName: "Paginator",
          reportTemplate: props.currentPageReportTemplate,
          key,
          page,
          totalPages,
          totalRecords: props.totalRecords,
          rows: props.rows,
          first: props.first,
          template,
          ptm
        });
        break;
      case "JumpToPageInput":
        element = React12.createElement(JumpToPageInput, {
          hostName: "Paginator",
          key,
          rows: props.rows,
          page,
          totalPages,
          onChange: changePage,
          disabled: isEmpty,
          template,
          ptm,
          unstyled: props.unstyled,
          metaData
        });
        break;
      default:
        element = null;
        break;
    }
    return element;
  };
  var createElements = function createElements2() {
    var template = props.template;
    if (template) {
      if (_typeof4(template) === "object") {
        return template.layout ? template.layout.split(" ").map(function(value) {
          var key = value.trim();
          return createElement13(key, template[key]);
        }) : Object.entries(template).map(function(_ref) {
          var _ref2 = _slicedToArray4(_ref, 2), key = _ref2[0], _template = _ref2[1];
          return createElement13(key, _template);
        });
      }
      return template.split(" ").map(function(value) {
        return createElement13(value.trim());
      });
    }
    return null;
  };
  if (!props.alwaysShow && totalPages <= 1) {
    return null;
  }
  var leftContent = ObjectUtils.getJSXElement(props.leftContent, props);
  var rightContent = ObjectUtils.getJSXElement(props.rightContent, props);
  var elements = createElements();
  var leftProps = mergeProps({
    className: cx("left")
  }, ptm("left"));
  var leftElement = leftContent && React12.createElement("div", leftProps, leftContent);
  var endProps = mergeProps({
    className: cx("end")
  }, ptm("end"));
  var rightElement = rightContent && React12.createElement("div", endProps, rightContent);
  var rootProps = mergeProps({
    ref: elementRef,
    className: classNames(props.className, cx("root")),
    style: props.style
  }, PaginatorBase.getOtherProps(props), ptm("root"));
  return React12.createElement("div", rootProps, leftElement, elements, rightElement);
}));
Paginator.displayName = "Paginator";

export {
  ChevronDownIcon,
  OverlayService,
  VirtualScroller,
  Dropdown,
  Paginator
};
//# sourceMappingURL=chunk-ERN6CYK4.js.map
