//new urls
import { Meteor } from 'meteor/meteor';
import './templates.js'

casName = ''

Router.route('/:cas_name',{
  name: 'cashDetail',
  layoutTemplate: 'myCash',
  subscriptions: function(){
    this.subscribe('Cash', Meteor.userId());
    this.subscribe('Transaction', Meteor.userId(), this.params.cas_name);
  },
  yieldRegions:{
    'doTransaction': {to: 'doTransactionRegion'},
    'transactionList': {to: 'transactionListRegion'}
  },
  data: function(){
    casName = this.params.cas_name
    return {casNameHelper: casName};
  }
})

/*
Router.route("/sectionName/routePath", {
  name: 'sectionName_routeName',
  template:"templateName",
  layoutTemplate: "templateName",
  subscriptions: function(){
    this.subscribe("collection").wait();
  },
  yieldRegions:{
    "templateName": {to: "regionName"}
  },
  data:function(){
     return {helperName: value};
  },
  action: function(){},
  waitOn:function(){}
});
*/
