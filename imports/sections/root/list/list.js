import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'
import './list.html';

var lis_addCash_visible = new ReactiveVar(true);

Template.list.helpers({
  lis_addCashVisible: function(){
    return lis_addCash_visible.get();
  }
});

Template.list.events({
  'click #lis_addCash'(event){
    lis_addCash_visible.set(false);
  }
});
