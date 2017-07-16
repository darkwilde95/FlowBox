import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './home.html';

Template.home.helpers({
  MyCurrentUser(){
    return Meteor.user().profile.name;
  }
});

Template.home.events({
  'click #logout'(event){
    Meteor.logout(function(Error){
      if(Error){
        alert(Error);
      }
    });
  }
});
