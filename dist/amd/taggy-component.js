define(['exports', './taggy', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _taggy, _aureliaFramework, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TaggyComponent = undefined;

  var _taggy2 = _interopRequireDefault(_taggy);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

  var TaggyComponent = exports.TaggyComponent = (_class = function () {
    TaggyComponent.inject = function inject() {
      return [_aureliaEventAggregator.EventAggregator];
    };

    function TaggyComponent(ea) {
      _classCallCheck(this, TaggyComponent);

      _initDefineProp(this, 'ceId', _descriptor, this);

      _initDefineProp(this, 'eventChannel', _descriptor2, this);

      _initDefineProp(this, 'minChars', _descriptor3, this);

      _initDefineProp(this, 'placeholder', _descriptor4, this);

      _initDefineProp(this, 'free', _descriptor5, this);

      _initDefineProp(this, 'deletion', _descriptor6, this);

      _initDefineProp(this, 'delimiter', _descriptor7, this);

      _initDefineProp(this, 'preventInvalid', _descriptor8, this);

      _initDefineProp(this, 'validate', _descriptor9, this);

      _initDefineProp(this, 'render', _descriptor10, this);

      _initDefineProp(this, 'convertOnBlur', _descriptor11, this);

      _initDefineProp(this, 'parseText', _descriptor12, this);

      _initDefineProp(this, 'autocomplete', _descriptor13, this);

      this.ea = ea;
      this.selectedTokens = "";
    }

    TaggyComponent.prototype.onSelectedTokensChange = function onSelectedTokensChange() {
      this.selectedTokens = this.taggyElement.value();
      var payload = { tokens: this.selectedTokens };
      var channel = this.eventChannel;
      this.ea.publish(channel, payload);
    };

    TaggyComponent.prototype._initTaggy = function _initTaggy() {
      var _this = this;

      this.taggyElement = (0, _taggy2.default)(document.querySelector("#" + this.ceId), {
        deletion: this.deletion,
        ceId: this.ceId,
        eventChannel: this.eventChannel,
        minChars: minChars,
        placeholder: placeholder,
        free: free,
        delimiter: delimiter,
        preventInvalid: preventInvalid,
        validate: validate,
        render: render,
        convertOnBlur: convertOnBlur,
        parseText: parseText,
        autocomplete: autocomplete
      });
      this.taggyElement.on("add", function (item) {
        _this.onSelectedTokensChange();
      });
      this.taggyElement.on("remove", function (item) {
        _this.onSelectedTokensChange();
      });
    };

    TaggyComponent.prototype.attached = function attached() {
      this._initTaggy();
    };

    return TaggyComponent;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'ceId', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'eventChannel', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'minChars', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'placeholder', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'free', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'deletion', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'delimiter', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'preventInvalid', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'validate', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'render', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'convertOnBlur', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'parseText', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'autocomplete', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});