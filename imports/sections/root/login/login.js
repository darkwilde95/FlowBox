import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './login.html';

Template.login.events({
  'click #submit'(event){
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    Meteor.loginWithPassword(username, password, function(Error){
      if(Error){
        console.log(Error);
      }
    });
    Router.go('home');
  }
});
