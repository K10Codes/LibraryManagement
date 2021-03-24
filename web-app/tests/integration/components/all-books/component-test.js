import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, click, findAll} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | all-books', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (assert) {

    this.owner.register('service:session', session);
    this.session = this.owner.lookup('service:session');

    this.books = getAllBooks();
    const ajaxRequest = Service.extend({
      makeAjaxRequest(request){
        if(request.type=='POST'){
          assert.equal(request.contains)
        }
      }
    });

    this.owner.register('service:ajaxRequest', ajaxRequest);
    this.ajaxRequest = this.owner.lookup('service:ajaxRequest');

  });


  test('it renders', async function(assert) {
    await render(hbs`{{all-books books=books}}`);
      let length = findAll('.btn-login').length;
    assert.equal(1, length, 'Length of element should be 1');
  });

});

function getAllBooks(){
  return [{"id":"id1","name":"Book1","author":"Author1"},{"id":"id2","name":"Book2","author":"Author2"}];
}
