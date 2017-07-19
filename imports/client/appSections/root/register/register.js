import { Template } from 'meteor/templating'
import { Accounts } from 'meteor/accounts-base'
import './register.html'

Template.register.events({
  'click #reg_submit'(event){
    event.preventDefault()
    var name = $('#reg_name').val()
    var username = $('#reg_username').val()
    var password = $('#reg_password').val()

    Accounts.createUser({
      username: username,
      password: password,
      profile: {
        name: name
      }
    },
    function(Error){
      if(Error){
        console.log(Error)
      }
    })
    Router.go('root')
  }
})
