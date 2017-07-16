//new urls.js
import { Meteor } from 'meteor/meteor';
import './templates.js';

Router.route('/', {
  name: 'home',
  layoutTemplate: 'home',
  loadingTemplate: 'load',
  yieldRegions: {
    'login': {to: 'loginRegion'},
    'register': {to: 'registerRegion'}
  },
  waitOn: function(){
    return function(){
      return !Meteor.loggingIn();
    }
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
