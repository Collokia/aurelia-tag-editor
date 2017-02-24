import taggy from "collokia/taggy";
import {bindable, useView, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class TaggyComponent {
    @bindable ceId;
    @bindable eventChannel;
    @bindable placeholder;
    @bindable initialValues;// for one-way databinding
    @bindable free;
    @bindable deletion;
    @bindable delimiter;
    @bindable preventInvalid;
    @bindable validate;
    @bindable render;
    @bindable convertOnBlur;
    @bindable parseValue;
    @bindable parseText;
    @bindable autocomplete;

    @bindable({ defaultBindingMode: bindingMode.twoWay }) values;  // for two-way databinding

    static inject() {
        return [EventAggregator]
    }

    constructor(ea) {
        this.ea = ea;
        this.values = [];
        this.validValues = [];
        this._publishEvents = true;
        this.placeholder = "";
    }

    _clearValues(){
      if(this.taggyElement){
        this.taggyElement.value().forEach( it =>{
          this.taggyElement.removeItem(it)
        })
      }
    }
  
    valuesChanged(newValues, oldValues){

      this._publishEvents = false;
      if(this.taggyElement) {
        this._clearValues();
        for(let i = 0; i < newValues.length;i++){
          this.taggyElement.addItem(newValues[i]);
        }

      }
      this._publishEvents = true;
    }


    onSelectedTokensChange(action, item) {
      if(this._publishEvents){
        this.values = this.taggyElement.allValues();
        this.validValues = this.taggyElement.value();
        
        if(this.eventChannel && this.eventChannel!==""){

          var payload = {tokens: this.values, validTokens: this.validValues, action, item };
          var channel = this.eventChannel;
          this.ea.publish(channel, payload);
        }
      }
    }

    _initTaggy() {
        this.taggyElement = taggy(document.querySelector("#" + this.ceId), {
            deletion: this.deletion,
            ceId: this.ceId,
            eventChannel: this.eventChannel,
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

        if (typeof this.initialValues !== "undefined" && this.initialValues !== null) {   // to initialize one way
            this.initialValues.forEach(it =>this.taggyElement.addItem(it));
        }
      
        if (typeof this.values !== "undefined" && this.values !== null) { // to initialize one two-way
          this.values.forEach(it =>this.taggyElement.addItem(it));
        }
        
        this.taggyElement.on("add", (item) => {
            this.onSelectedTokensChange("add",item)
        });
        this.taggyElement.on("remove", (item) => {
            this.onSelectedTokensChange("remove", item)
        });

    }

    attached() {
        this._initTaggy();
    }
}
