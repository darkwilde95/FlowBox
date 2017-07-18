import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

transaction = new Mongo.Collection('transaction', {idGeneration:'STRING'});

transaction.schema = new SimpleSchema({
  tra_use_id: {type: String},
  tra_cas_name: {type: String},
  tra_date: {type: Date,
             optional: true,
             defaultValue: new Date()},
  tra_action: {type: String},
  tra_description: {type: String},
  tra_value: {type: Number}
});

if(Meteor.isServer){
  Meteor.publish("Transaction", function(userId, traName){
    return transaction.find({tra_use_id: userId, tra_cas_name: traName});
  });
}

export const Transaction = transaction;
