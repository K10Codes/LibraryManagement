import { helper } from '@ember/component/helper';

export default helper(function increment(params/*, hash*/) {
  return params[0]+1;
});
