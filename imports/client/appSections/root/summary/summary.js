import { Cash } from '/imports/db/transaction.js'
import { Template } from 'meteor/templating'
import './summary.html'

Template.generalTransactionInfo.helpers({
  traDate: function(miliseconds){
    var date = new Date()

    date.setTime(miliseconds)

    var day = ((date.getDate() < 10)? '0': '') + date.getDate()
    var month = ((date.getMonth() < 9)? '0': '') + (date.getMonth() + 1)
    var year = date.getFullYear()
    var hour = ((date.getHours() < 10)? '0': '') + date.getHours()
    var minute = ((date.getMinutes() < 10)? '0': '') + date.getMinutes()
    var second = ((date.getSeconds() < 10)? '0': '') + date.getSeconds()

    return day + '/' + month + '/' + year + ' - ' + hour + ':' + minute + ':' + second
  }
})
