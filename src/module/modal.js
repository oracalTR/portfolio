import {Domlistener} from '@module/domlistener';

export class Modal extends Domlistener {
    constructor(el) {
        super(el);
        this.changeElem(this);
    }

    changeElem(el) {
        this.addListener(this.el, 'click');
    }

    getElem(event) {
        console.log(this);
        if (this.$target.classList.contains('overlay') 
        || this.$target.classList.contains('modal__close')) {
            this.el.classList.add('hidden');
        }
    }
}
