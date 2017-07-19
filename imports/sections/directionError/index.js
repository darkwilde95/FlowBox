import './templates.js';

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

Router.route('/notFound', {
  name: 'notFound',
  template: 'notFound'  
})
