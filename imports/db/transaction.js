import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

transaction = new Mongo.Collection('transaction', {idGeneration:'STRING'})

transaction.schema = new SimpleSchema({
  tra_use_id: {type: String},
  tra_cas_name: {type: String},
  tra_date: {type: Number},
  tra_action: {type: String},
  tra_description: {type: String},
  tra_value: {type: Number}
})

if(Meteor.isServer){
  Meteor.publish('Transaction', function(userId){
      return transaction.find({tra_use_id: userId})
  })
}

export const Transaction = transaction
