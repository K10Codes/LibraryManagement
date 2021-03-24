import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import $ from 'jquery';
import {action} from "@ember/object";

export default class LibraryRoute extends Route{

  @service
  ajaxRequest;
  allBooks=true;
  init() {
    this._super(...arguments);
    this.set('allBooks',true);
  }

   get allBooks(){
    return this.allBooks;
   }

   setupController(controller) {
      controller.set('allBooks',true);
      this.fetchAllBooks();
   }

   fetchAllBooks(){
     let request = {
          type: 'GET',
          url: "/api/library/books",
          success: (books) => {
              this.controller.set('allBooks', true);
              this.controller.set("books", books);
          }

      };
     this.ajaxRequest.makeAjaxRequest(request);
   }

   fetchUserBooks(){
     let request = {
        type: 'GET',
        url: "/api/library/books/issued",
        success: (books) => {
            this.controller.set('allBooks', false);
            this.controller.set("books", books);
        }
     };
     this.ajaxRequest.makeAjaxRequest(request);
   }

   @action
   loadAllBooks(){
     this.fetchAllBooks();
     $('#userBooks').removeClass('btn-primary');
     $('#userBooks').addClass('btn-outline-primary');
     $('#allBooks').removeClass('btn-outline-primary');
     $('#allBooks').addClass('btn-primary');
   }

   @action
   loadUserBooks(){
     this.fetchUserBooks();
     this.controller.set('allBooks', false);
     $('#allBooks').removeClass('btn-primary');
     $('#allBooks').addClass('btn-outline-primary');
     $('#userBooks').removeClass('btn-outline-primary');
     $('#userBooks').addClass('btn-primary');
   }



}
