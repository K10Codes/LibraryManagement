import { module, test } from 'qunit';
import { increment } from 'app/helpers/increment';


module('Unit | Helper | increment', function(hooks) {
  test('Should increment by 1', function(assert) {
    assert.equal(2,increment(1));
  });
});
