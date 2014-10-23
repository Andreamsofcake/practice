'use strict';

describe('app', function() {
  it('has an index page', function() {
    visit('/');
    andThen(function() {
      expect(currentRouteName()).to.equal('index');
    });
  });
  it('will have a home link', function(){
    visit('/')
    andThen(function(){
      expect(find('a.home').length).to.equal(1);
    })
  });
  it('will have a signup link ', function(){
    visit('/')
    andThen(function(){
      expect(find('a.signup').length).to.equal(1);
    })
  });
  it('will have a login link', function(){
    visit('/')
    andThen(function(){
      expect(find('a.login').length).to.equal(1);
    })
  });
  it.skip('adds a comment to the user profile', function() {
      //sign in to profile  
      //url will be profile
        //add a comment
        //
        //
      andThen(function(){
      expect('the comment to be in the content of the profile').to.equal(1);
    })
  })
});
