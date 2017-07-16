import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './login.html';

Template.login.events({
  'click #log_submit'(event){
    event.preventDefault();
    var username = $('#log_username').val();
    var password = $('#log_password').val();
    Meteor.loginWithPassword(username, password, function(Error){
      if(Error){
        console.log(Error);
      }
    });
    Router.go('home');
  }
});
