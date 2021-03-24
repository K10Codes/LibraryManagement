import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

  beforeModel(transition){
    /*sessionStorage.user = transition.to.queryParams?
      transition.to.queryParams.user : "User1";*/
    this.transitionTo('library');
  }
}
