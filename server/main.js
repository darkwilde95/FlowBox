import { Meteor } from 'meteor/meteor'
import { Cash } from '/imports/db/cash.js'
import { Transaction } from '/imports/db/transaction.js'
import '/imports/db/'

Meteor.methods({
  addNewCash: function(newCash){
    Cash.insert(newCash)
  },

  doTransaction: function(transaction, cas_id){
    if (transaction.tra_action == 'Retirar'){
      Cash.update({_id: cas_id},
                {$inc: {cas_totalAmount: -transaction.tra_value}})
      Transaction.insert(transaction)
    }else{
      Cash.update({_id: cas_id},
                {$inc: {cas_totalAmount: transaction.tra_value}})
      Transaction.insert(transaction)
    }
  },
  removeCash: function(casName, userId){
    Transaction.remove({tra_cas_name: casName, tra_use_id: userId})
    Cash.remove({cas_name: casName, cas_use_id: userId})
  }
})
