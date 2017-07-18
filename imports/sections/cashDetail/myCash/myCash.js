import { Template } from 'meteor/templating';
import { Cash } from '/imports/db/cash.js';
import './myCash.html';

Template.myCash.helpers({
  totalAmount: function(casName){
    return Cash.findOne({cas_name: casName,
                         cas_use_id: Meteor.userId()}).cas_totalAmount;
  }
});
