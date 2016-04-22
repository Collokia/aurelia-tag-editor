var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import taggy from "./taggy";
import { bindable, useView } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

export let TaggyComponent = (_class = class TaggyComponent {

  static inject() {
    return [EventAggregator];
  }
  constructor(ea) {
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

  onSelectedTokensChange() {
    this.selectedTokens = this.taggyElement.value();
    var payload = { tokens: this.selectedTokens };
    var channel = this.eventChannel;
    this.ea.publish(channel, payload);
  }

  _initTaggy() {
    this.taggyElement = taggy(document.querySelector("#" + this.ceId), {
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
    this.taggyElement.on("add", item => {
      this.onSelectedTokensChange();
    });
    this.taggyElement.on("remove", item => {
      this.onSelectedTokensChange();
    });
  }

  attached() {
    this._initTaggy();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'ceId', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'eventChannel', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'minChars', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'placeholder', [bindable], {
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
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'parseText', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'autocomplete', [bindable], {
  enumerable: true,
  initializer: null
})), _class);