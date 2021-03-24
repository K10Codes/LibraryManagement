import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, click, findAll} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | user-books', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (assert) {

    this.books = getUserBooks();
    const ajaxRequest = Service.extend({
      makeAjaxRequest(request){
        if(request.type=='POST'){
          assert.equal(true,request.url.includes("/id1"),'Book id for release request is correct');
          request.success();
        }
      }
    });

    this.owner.register('service:ajaxRequest', ajaxRequest);
    this.ajaxRequest = this.owner.lookup('service:ajaxRequest');

  });


  test('it renders list of books', async function(assert) {
    await render(hbs`{{user-books books=books ajaxRequest=ajaxRequest}}`);
    assert.equal(2,$('#bookList tr').length,'One row for each book rendered');
    assert.equal(4,$('#bookList tr:first td').length,'Four columns for each book rendered.');
    assert.equal("Return",$('#bookList tr:first td:last button').text(),'Borrow book button visible.');
  });

  test('user can return a book', async function(assert) {
    await render(hbs`{{user-books books=books ajaxRequest=ajaxRequest}}`);
    $('#bookList tr:first td:last button').click();
  });
});

function getUserBooks(){
  return [{"id":"id1","name":"Book1","author":"Author1"},{"id":"id2","name":"Book2","author":"Author2"}];
}
