import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Button from "web-app/interfaces/button";

module('Integration | Component | book-listing', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function (assert) {
   this.books = getAllBooks();
  });


  test('renders book list with button', async function(assert) {
   this.set('dummyAction', (actual) => {
      assert.equal(actual, "id1","Button click calls action with corresponding book id");
    });
    this.set('button',new Button('testName','testId'));
    await render(hbs`{{book-listing books=books button=button buttonAction=(action dummyAction)}}`);
    assert.equal(3,$('#bookList thead th').length,'3 table headers rendered');
    assert.equal("S.No.",$('#bookList thead th:eq(0)').text(),'First header text is correct');
    assert.equal("Name",$('#bookList thead th:eq(1)').text(),'Second header text is correct');
    assert.equal("Author",$('#bookList thead th:eq(2)').text(),'Third header text is correct');
    assert.equal(2,$('#bookList tr').length,'Two rows visible.');
    assert.equal("testName",$('#bookList tr:first td:last button').text(),'Button name is correct.');
    $('#bookList tr:first td:last button').click();
  });

});

function getAllBooks(){
  return [{"id":"id1","name":"Book1","author":"Author1"},{"id":"id2","name":"Book2","author":"Author2"}];
}
