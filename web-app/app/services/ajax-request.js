import $ from 'jquery';
import Service from '@ember/service';
import {later, run} from '@ember/runloop';
export default Ember.Service.extend({

    makeAjaxRequest(request) {

        $.ajax({
            type: request.type,
            url: "http://localhost:8080" +request.url,
            data: request.data,
            contentType: "application/json",
            context:this
        }).done((data)=> {
            if (request.hasOwnProperty('success')) {
                run(() => {
                    request.success(data);
                });
            }
        }).fail((xhr) => {
            if (request.hasOwnProperty('fail')) {
              run(() => {
                request.fail(xhr);
              });
            }
        });
    }
})
