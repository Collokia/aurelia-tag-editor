'use strict';

System.register(['./taggy', 'aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
  var taggy, bindable, useView, EventAggregator, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, TaggyComponent;

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

          _initDefineProp(this, 'minChars', _descriptor3, this);

          _initDefineProp(this, 'api', _descriptor4, this);

          _initDefineProp(this, 'placeholder', _descriptor5, this);

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

          this.taggyElement = taggy(document.querySelector("#" + this.ceId), {
            deletion: true,
            parseText: 'name',
            autocomplete: {
              noMatches: 'No results found.',
              suggestions: this.api
            },
            free: false
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
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'ceId', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'eventChannel', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'minChars', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'api', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'placeholder', [bindable], {
        enumerable: true,
        initializer: null
      })), _class));

      _export('TaggyComponent', TaggyComponent);
    }
  };
});