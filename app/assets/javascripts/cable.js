//= require action_cable
//= require_self
//= require_tree ./channels

var App = window.App = {};
App.cable = ActionCable.createConsumer();
