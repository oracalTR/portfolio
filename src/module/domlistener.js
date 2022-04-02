import {Domelem} from '@module/domelem';

export class Domlistener extends Domelem {
    constructor(el) {
        super(el);
    }

    addListener(el, action) {
        if (action == 'click' || action == 'input') {
            el.addEventListener(action, (event) => {
                const target = event.target;
                this.$target = target;
                this.getElem(this);
            });
        } else if (action == 'submit') {
            el.addEventListener(action, (event) => {
                event.preventDefault();
                this.resetForm(this);
            });
        }
    }
}
