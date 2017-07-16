import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

cash = new Mongo.Collection('cash', {idGeneration: 'STRING'});

cash.schema = new SimpleSchema({
  cas_id: {type: String},
  cas_use_id: {type: String},
  cas_name: {type: String},
  cas_totalAmount: {type: Number}
});

if(Meteor.isServer){
  Meteor.publish('Cash', function(){
    return cash.find({});
  });
}

export const Cash = cash;
