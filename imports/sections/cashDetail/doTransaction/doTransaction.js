import { Template } from 'meteor/templating'
import { Cash } from '/imports/db/cash.js';
import './doTransaction.html'

Template.doTransaction.events({
  'click #doT_submit'(event){
    event.preventDefault()
    var action = $('#doT_action').val()
    var description = $('#doT_description').val()
    var value = $('#doT_value').val()

    if (action == 'Depositar'){

    }else{
      console.log();
      // var finding = Cash.findOne({cas_name: casNameHelper, cas_use_id: Meteor.userId()})
      //   if (finding.cas_totalAmount == 0){
      //     alert('No tienes dinero en esta caja')
      //   }else if(finding.cas_totalAmount < value){
      //     alert('No tienes fondos suficientes')
      //   }else{
      //
      //   }
    }
  }
})
