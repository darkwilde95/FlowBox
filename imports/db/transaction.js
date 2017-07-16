import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

transaction = new Mongo.Collection('transaction', {idGeneration:'STRING'});

transaction.schema = new SimpleSchema({
  tra_use_id: {type: String},
  tra_cas_id: {type: String},
  tra_date: {type: Date},
  tra_action: {type: String},
  tra_description: {type: String},
  tra_amount: {type: Number}
});

if(Meteor.isServer){
  Meteor.publish("Transaction", function(){
    return transaction.find({});
  });
}

export const Transaction = transaction;
