import taggy from "./taggy";
import {bindable,useView} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class TaggyComponent {
  @bindable ceId;
  @bindable eventChannel;
  @bindable minChars;
  @bindable api;
  @bindable placeholder;

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
      deletion: true,
      parseText: 'name',
      autocomplete: {
        noMatches: 'No results found.',
        suggestions: this.api,
      },
      free: false
    });
    this.taggyElement.on("add", (item) => {this.onSelectedTokensChange()});
    this.taggyElement.on("remove", (item) => {this.onSelectedTokensChange()});

  }


  attached() {
    this._initTaggy();
  }
}
