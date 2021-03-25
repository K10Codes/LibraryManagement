import { helper } from '@ember/component/helper';

export default helper(function getProperty(params/*, hash*/) {
  return params[0][params[1]];
});
