import { Meteor } from 'meteor/meteor';
import { Cash } from '/imports/db/cash.js';
import '/imports/db/';

Meteor.methods({
  addNewCash: function(newCash){
    Cash.insert(newCash);
  }
});
