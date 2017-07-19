import { Template } from 'meteor/templating'
import { Cash } from '/imports/db/cash.js'
import './myCash.html'

Template.myCash.helpers({
  totalAmount: function(){
    return Cash.findOne({cas_name: casName,
                         cas_use_id: Meteor.userId()}).cas_totalAmount
  }
})

Template.myCash.events({
  'click #myC_removeCash'(event){
    Meteor.call('removeCash', casName, Meteor.userId())
    Router.go('root')
  }
})
