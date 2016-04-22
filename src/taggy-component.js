import taggy from "./taggy";
import {bindable,useView} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class TaggyComponent {
  @bindable ceId;
  @bindable eventChannel;
  @bindable minChars;
  @bindable placeholder;
  @bindable free;
  @bindable deletion;
  @bindable delimiter;
  @bindable preventInvalid;
  @bindable validate;
  @bindable render;
  @bindable convertOnBlur;
  @bindable parseText;
  @bindable autocomplete;

  // @processContent(function(viewCompiler, viewResources, element, instruction) {
  //   instruction.autocomplete = processAutoComplete(element);
  //   return true;
  // })

  static inject(){return [EventAggregator]}
  constructor(ea) {
    this.ea = ea;
    this.selectedTokens = "";
  }


  onSelectedTokensChange(){
    this.selectedTokens =  this.taggyElement.value();
    var payload = {tokens: this.selectedTokens};
    var channel = this.eventChannel;
    this.ea.publish(channel, payload);
  }

  _initTaggy(){
    this.taggyElement =  taggy(document.querySelector("#"+this.ceId), {
       deletion: this.deletion,
       ceId: this.ceId,
       eventChannel: this.eventChannel,
       minChars:minChars,
       placeholder:placeholder,
       free: free,
       delimiter: delimiter,
       preventInvalid: preventInvalid,
       validate: validate,
       render:render,
       convertOnBlur:convertOnBlur,
       parseText:parseText,
       autocomplete:autocomplete
    });
    this.taggyElement.on("add", (item) => {this.onSelectedTokensChange()});
    this.taggyElement.on("remove", (item) => {this.onSelectedTokensChange()});

  }


  attached() {
    this._initTaggy();
  }
}
