/*
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | status-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('success bar', async function(assert) {
    this.set('messageData', {"message":"Success","success":true});
    await render(hbs`{{status-bar messageData=messageData}}`);
    assert.equal($('#status-bar'), 'template block text');
  });


  test('error bar', async function(assert) {
    await render(hbs`{{status-bar messageData=messageData}}`);
    this.messageData = {"message":"Error","success":false};
    await render(hbs`{{status-bar messageData=messageData}}`);
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
*/
