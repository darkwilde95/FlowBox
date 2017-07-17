//new urls.js
import { Meteor } from 'meteor/meteor';
import { Cash } from '/imports/db/cash.js';
import './templates.js';

Router.route('/', {
  name: 'home',
  layoutTemplate: 'home',
  yieldRegions: {
    'login': {to: 'loginRegion'},
    'register': {to: 'registerRegion'},
    'list': {to: 'listRegion'},
    'summary': {to: 'summaryRegion'}
  },
  subscriptions: function(){
    this.subscribe('Cash', Meteor.userId()).wait();
  },
  data: function(){
    return {cash: Cash.find({})};
  }
});

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

  action: function(){

  },

  waitOn:function(){

  }

});
*/
