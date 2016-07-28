import {Component, ViewContainerRef} from '@angular/core';
import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'modal-sel',
    viewProviders: [...BS_MODAL_PROVIDERS ],
    templateUrl: '/app/Modal/modal.component.html'
})
export class ModalComponent {
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }

    openAlert() {
        return this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .open();
    }
    openPrompt() {
        return this.modal.prompt()
            .className('wireframe')
            .message('Enter your name')
            .placeholder('Your name here')
            .open();
    }
    openConfirm() {
        return this.modal.confirm()
            .message('Enter your name')
            .open();
    }
}
