//new urls
import { Meteor } from 'meteor/meteor'
import { Transaction } from '/imports/db/transaction.js'
import { Cash } from '/imports/db/cash.js'
import './templates.js'

casName = ''

Router.route('/:cas_name',{
  name: 'cashDetail',
  subscriptions: function(){
    this.subscribe('Cash', Meteor.userId()).wait()
    this.subscribe('Transaction', Meteor.userId()).wait()
  },
  loadingTemplate: 'load',
  yieldRegions:{
    'doTransaction': {to: 'doTransactionRegion'},
    'transactionList': {to: 'transactionListRegion'}
  },
  data: function(){
    casName = this.params.cas_name
    var transactionCursor = Transaction.find({tra_cas_name: this.params.cas_name}, {limit: 10})
    var hasTransaction = transactionCursor.count()
    return {casNameHelper: casName,
            cashTransaction: transactionCursor,
            hasTransactionHelper: hasTransaction}
  },
  onBeforeAction: function(){
    casName = this.params.cas_name
    var find = Cash.findOne({cas_name: casName, cas_use_id: Meteor.userId()})
    if(find == undefined){
      this.layout('notFound')
    }else{
      this.layout('myCash')
    }
    this.next()
  },
  waitOn: function() {
    casName = this.params.cas_name
    return function(){
      return Cash.find({cas_name: casName, cas_use_id: Meteor.userId()})
    }
  }
})

/*
Router.route("/sectionName/routePath", {
  name: 'sectionName_routeName',
  template:"templateName",
  layoutTemplate: "templateName",
  subscriptions: function(){
    this.subscribe("collection").wait()
  },
  yieldRegions:{
    "templateName": {to: "regionName"}
  },
  data:function(){
     return {helperName: value}
  },
  action: function(){},
  waitOn:function(){}
})
*/
