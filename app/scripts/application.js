'use strict';

var SetupPractise = Ember.Application.create();

SetupPractise.Router.reopen({
  location: 'history'
});

SetupPractise.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

// expose SetupPractise globally
window.SetupPractise = SetupPractise;
