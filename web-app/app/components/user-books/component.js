import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {action} from "@ember/object";
import Button from "web-app/interfaces/button";

export default class UserBooks extends Component{

  @service
  ajaxRequest;

  init(){
    super.init();
    this.set('button',new Button('Return','return'));
  }

  @action
  return(bookId){
    let request = {
        type: 'POST',
        url: "/api/library/books/"+bookId+"/return",
        success: (books) => {
            this.set('messageData',{success:true,message:'Book returned successfully.'});
            this.sendAction('callback');
        },
        fail: (xhr) =>{
            this.set('messageData',{success:false,message:xhr.responseJSON.message});
        }

    };
    this.ajaxRequest.makeAjaxRequest(request);
  }

}
