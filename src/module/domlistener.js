import {Domelem} from '@module/domelem';

export class Domlistener extends Domelem {
    constructor(el) {
        super(el);
    }

    addListener(el, action) {
        el.addEventListener(action, (event) => {
            event.preventDefault();
            const target = event.target;
            this.$target = target;
            this.getElem(this);
        });
    }
}
