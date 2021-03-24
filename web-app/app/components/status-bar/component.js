import Component from '@ember/component';
import { observer } from '@ember/object';
import $ from 'jquery';
import {later} from '@ember/runloop';
export default Component.extend({

    statusBarId : 'status-bar',

    showNotification(message, notificationCls) {
        const allClass= 'alert-success alert-danger';
        $(`#${this.statusBarId}`).removeClass(allClass)
            .addClass(notificationCls).show();
        this.set('message',message);
        later(() => {
            if ($(`#${this.statusBarId}`)) {
                $(`#${this.statusBarId}`).hide();
            }
        }, 2500);
    },

    messageDataChangeHandler:observer('messageData',function() {
        let notificationCls = 'alert-info';
        if (this.messageData.success) {
            notificationCls = 'alert-success';
        } else {
            notificationCls = 'alert-danger';
        }
        this.showNotification(this.messageData.message, notificationCls);
    })
});
