import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Component} from '@angular/core';

@Component({
    selector: 'awesome-component',
    templateUrl: '/app/toast/toastdemo.component.html',
    providers: [ToastsManager]
})
export class ToastComponent {

    constructor(public toastr: ToastsManager) {
    }

    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }

    showError() {
        this.toastr.error('This is not good!', 'Oops!');
    }

    showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
    }

    showInfo() {
        this.toastr.info('Just some information for you.');
    }
}