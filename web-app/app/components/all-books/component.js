import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {action} from "@ember/object";
export default class AllBooks extends Component{

  @service
  ajaxRequest;

  init(){
    super.init();
  }
  @action
  borrow(bookId){
    let request = {
        type: 'POST',
        url: "/api/library/books/"+bookId+"/borrow?userId=User1",
        success: () => {
            this.set('messageData',{success:true,message:'Book issued successfully.'});
            this.sendAction('callback');
        },
        fail: (xhr) =>{
            this.set('messageData',{success:false,message:xhr.responseJSON.message});
        }

    };
    this.ajaxRequest.makeAjaxRequest(request);
  }
}
