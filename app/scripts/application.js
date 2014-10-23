'use strict';

var App = Ember.Application.create();

App.Router.reopen({
  location: 'history'
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

// expose App globally
window.App = App;
