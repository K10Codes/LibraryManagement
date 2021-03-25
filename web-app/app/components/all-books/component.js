import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {action} from "@ember/object";
import Button from "web-app/interfaces/button";
import {observes} from '@ember-decorators/object';

export default class AllBooks extends Component{

  @service
  ajaxRequest;

  init(){
    super.init();
    this.setButton();
  }

  @observes('view')
  setButton(){

    if(this.view === 'available'){
      this.set('button', new Button('Borrow','borrow'));
    }
    if(this.view === 'availableCopies'){
      this.set('additionalFields',[{'header':'Copies','value':'copies'}]);
      this.set('button', new Button('Borrow','borrow'));
    }
  }

  @action
  borrow(bookId){
    let request = {
        type: 'POST',
        url: "/api/library/books/v2/"+bookId+"/borrow",
        success: () => {
            this.set('messageData',{success:true,message:'Book issued successfully.'});
            if(this.callback){
              this.sendAction('callback');
            }
        },
        fail: (xhr) =>{
            this.set('messageData',{success:false,message:xhr.responseJSON.message});
        }

    };
    this.ajaxRequest.makeAjaxRequest(request);
  }
}
