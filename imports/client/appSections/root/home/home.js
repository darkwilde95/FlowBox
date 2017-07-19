import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'
import './home.html'

Template.home.helpers({
  MyCurrentUser: function(){
    return Meteor.user().profile.name
  }
})

Template.home.events({
  'click #hom_logout'(event){
    Meteor.logout(function(Error){
      if(Error){
        alert(Error)
      }
    })
  }
})
