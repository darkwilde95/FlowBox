import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import './register.html';

Template.register.events({
  'click #submit'(event){
    event.preventDefault();
    var name = $('#name').val();
    var username = $('#username').val();
    var password = $('#password').val();

    Accounts.createUser({
      username: username,
      password: password,
      profile: {
        name: name
      }
    },
    function(Error){
      if(Error){
        console.log(Error);
      }
    });
    Router.go('home');
  }
});
