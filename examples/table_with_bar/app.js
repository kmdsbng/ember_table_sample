// Generated by CoffeeScript 1.3.3
(function() {

  window.App = Ember.Application.create();

  App.ApplicationView = Ember.View.extend({
    classNames: 'ember-app',
    templateName: 'application'
  });

  App.ApplicationController = Ember.Controller.extend({
    tableController: Ember.computed(function() {
      return Ember.get('App.TableBarExample.TableController').create();
    }).property()
  });

  App.Router = Ember.Router.extend({
    root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/'
      })
    })
  });

  App.initialize();

}).call(this);
