import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Cash } from '/imports/db/cash.js'
import { Transaction } from '/imports/db/transaction.js'
import './doTransaction.html'

var doT_submit_state = new ReactiveVar('disabled')

Template.doTransaction.helpers({
  doT_submit_disabler: function(){
    return doT_submit_state.get()
  }
})

Template.doTransaction.events({
  'keyup #doT_description, keyup #doT_value'(event){
    var description = $('#doT_description').val()
    var value = $('#doT_value').val()

    if(description != '' && value != ''){
      doT_submit_state.set('')
    }else{
      doT_submit_state.set('disabled')
    }
  },

  'click #doT_submit'(event){
    event.preventDefault()
    var action = $('#doT_action').val()
    var description = $('#doT_description').val()
    var value = $('#doT_value').val()

    var finding = Cash.findOne({cas_name: casName, cas_use_id: Meteor.userId()})

    if (action == 'Retirar' && finding.cas_totalAmount == 0){
      alert('No tienes dinero en esta caja')
    }else if(action == 'Retirar' && finding.cas_totalAmount < value){
      alert('No tienes fondos suficientes')
    }else{
      var date = new Date()
      var day = (date.getDate() < 10)? '0' + date.getDate(): date.getDate()
      var month = (date.getMonth() < 9)? '0' + (date.getMonth() + 1): (date.getMonth() + 1)
      var year = date.getFullYear()
      var hour = (date.getHours() < 10)? '0' + date.getHours(): date.getHours()
      var minute = (date.getMinutes() < 10)? '0' + date.getMinutes(): date.getMinutes()

      const newTransaction = {
        tra_use_id: Meteor.userId(),
        tra_cas_name: casName,
        tra_date: day + '/' + month + '/' + year + ' - ' + hour + ':' + minute,
        tra_action: action,
        tra_description: description,
        tra_value: Number(value)
      }

      Transaction.schema.validate(newTransaction)
      Meteor.call('doTransaction', newTransaction, finding._id)
      $('#doT_description').val('')
      $('#doT_value').val('')
    }

  }
})
