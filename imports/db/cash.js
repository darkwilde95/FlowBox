import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

cash = new Mongo.Collection('cash', {idGeneration: 'STRING'});

cash.schema = new SimpleSchema({
  cas_use_id: {type: String},
  cas_name: {type: String},
  cas_totalAmount: {type: Number,
                    defaultValue: 0,
                    optional: true}
});

cash.attachSchema(cash.schema);

if(Meteor.isServer){
  Meteor.publish('Cash', function(useid){
    return cash.find({cas_use_id: useid});
  });
}

export const Cash = cash;
