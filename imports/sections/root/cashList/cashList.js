import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'
import { Cash } from '/imports/db/cash.js';
import './cashList.html';

var lis_addCash_state = new ReactiveVar("disabled");

Template.cashList.helpers({
  lis_addCash_disabler: function(){
    return lis_addCash_state.get();
  }
});

Template.cashList.events({
  'keyup #lis_cashName, keypress #lis_cashName'(event){
    var newCashName = $('#lis_cashName').val();
    if(newCashName == ""){
      lis_addCash_state.set("disabled")
    }else{
      lis_addCash_state.set("")
    }
  },
  'click #lis_addNewCash'(event){
    event.preventDefault();
    var newCashName = $('#lis_cashName').val();
    var finding = Cash.findOne({cas_use_id: Meteor.userId(), cas_name: newCashName});

    if(finding == undefined){
      const newCash = {
        cas_use_id: Meteor.userId(),
        cas_name: newCashName
      };

      Cash.schema.validate(newCash);
      Meteor.call('addNewCash', newCash);
      lis_addCash_state.set("disabled");
      $('#lis_cashName').val("");

    }else{
      alert("El nombre ya ha sido usado")
    }
  }
});

Template.cashInfo.events({
  'click tr'(event){
    Router.go('myCash', {cas_name: this.cas_name});
  }
});
