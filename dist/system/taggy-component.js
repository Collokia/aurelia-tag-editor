'use strict';

System.register(['./taggy', 'aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
  var taggy, bindable, useView, bindingMode, EventAggregator, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, TaggyComponent;

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

  return {
    setters: [function (_taggy) {
      taggy = _taggy.default;
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      useView = _aureliaFramework.useView;
      bindingMode = _aureliaFramework.bindingMode;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _export('TaggyComponent', TaggyComponent = (_class = function () {
        TaggyComponent.inject = function inject() {
          return [EventAggregator];
        };

        function TaggyComponent(ea) {
          _classCallCheck(this, TaggyComponent);

          _initDefineProp(this, 'ceId', _descriptor, this);

          _initDefineProp(this, 'eventChannel', _descriptor2, this);

          _initDefineProp(this, 'placeholder', _descriptor3, this);

          _initDefineProp(this, 'initialValues', _descriptor4, this);

          _initDefineProp(this, 'free', _descriptor5, this);

          _initDefineProp(this, 'deletion', _descriptor6, this);

          _initDefineProp(this, 'delimiter', _descriptor7, this);

          _initDefineProp(this, 'preventInvalid', _descriptor8, this);

          _initDefineProp(this, 'validate', _descriptor9, this);

          _initDefineProp(this, 'render', _descriptor10, this);

          _initDefineProp(this, 'convertOnBlur', _descriptor11, this);

          _initDefineProp(this, 'parseValue', _descriptor12, this);

          _initDefineProp(this, 'parseText', _descriptor13, this);

          _initDefineProp(this, 'autocomplete', _descriptor14, this);

          _initDefineProp(this, 'values', _descriptor15, this);

          this.ea = ea;
          this.values = [];
          this.validValues = [];
          this._publishEvents = true;
        }

        TaggyComponent.prototype._clearValues = function _clearValues() {
          var _this = this;

          if (this.taggyElement) {
            this.taggyElement.value().forEach(function (it) {
              _this.taggyElement.removeItem(it);
            });
          }
        };

        TaggyComponent.prototype.valuesChanged = function valuesChanged(newValues, oldValues) {
          var _this2 = this;

          this._publishEvents = false;
          if (this.taggyElement) {
            (function () {

              var newValuesStr = newValues.map(function (it) {
                return JSON.stringify(it);
              });

              _this2.taggyElement.value().forEach(function (it) {
                if (newValuesStr.indexOf(JSON.stringify(it)) < 0) {
                  _this2.taggyElement.removeItem(it);
                }
              });

              var currentValsLen = _this2.taggyElement.allValues().length;
              for (var i = currentValsLen; i < newValues.length; i++) {
                _this2.taggyElement.addItem(newValues[i]);
              }
            })();
          }
          this._publishEvents = true;
        };

        TaggyComponent.prototype.onSelectedTokensChange = function onSelectedTokensChange() {
          if (this._publishEvents) {
            this.values = this.taggyElement.allValues();
            this.validValues = this.taggyElement.value();

            if (this.eventChannel && this.eventChannel !== "") {

              var payload = { tokens: this.values, validTokens: this.validValues };
              var channel = this.eventChannel;
              this.ea.publish(channel, payload);
            }
          }
        };

        TaggyComponent.prototype._initTaggy = function _initTaggy() {
          var _this3 = this;

          this.taggyElement = taggy(document.querySelector("#" + this.ceId), {
            deletion: this.deletion,
            ceId: this.ceId,
            eventChannel: this.eventChannel,
            placeholder: this.placeholder,
            free: this.free,
            delimiter: this.delimiter,
            preventInvalid: this.preventInvalid,
            validate: this.validate,
            render: this.render,
            convertOnBlur: this.convertOnBlur,
            parseText: this.parseText,
            parseValue: this.parseValue,
            autocomplete: this.autocomplete
          });

          if (typeof this.initialValues !== "undefined" && this.initialValues !== null) {
            this.initialValues.forEach(function (it) {
              return _this3.taggyElement.addItem(it);
            });
          }

          if (typeof this.values !== "undefined" && this.values !== null) {
            this.values.forEach(function (it) {
              return _this3.taggyElement.addItem(it);
            });
          }

          this.taggyElement.on("add", function (item) {
            _this3.onSelectedTokensChange();
          });
          this.taggyElement.on("remove", function (item) {
            _this3.onSelectedTokensChange();
          });
        };

        TaggyComponent.prototype.attached = function attached() {
          this._initTaggy();
        };

        return TaggyComponent;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'ceId', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'eventChannel', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'placeholder', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'initialValues', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'free', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'deletion', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'delimiter', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'preventInvalid', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'validate', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'render', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'convertOnBlur', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'parseValue', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'parseText', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'autocomplete', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'values', [bindable], {
        enumerable: true,
        initializer: null
      })), _class));

      _export('TaggyComponent', TaggyComponent);
    }
  };
});