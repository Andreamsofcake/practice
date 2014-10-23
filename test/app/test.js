'use strict';

describe('app', function() {
  it('has an index page', function() {
    visit('/');
    andThen(function() {
      expect(currentRouteName()).to.equal('index');
    });
  });
  it.skip('will have a home link and a animals link', function(){
    visit('/')
    andThen(function(){
      expect(find('a.home').length).to.equal(1);
    })
  });
  it.skip('will have a home link and a animals link', function(){
    visit('/animals')
    andThen(function(){
      expect(find('a.animals').length).to.equal(1);
    })
  });
});
