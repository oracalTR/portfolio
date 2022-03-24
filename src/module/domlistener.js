import {Domelem} from '@module/domelem';

export class Domlistener extends Domelem {
    constructor(el) {
        super(el);
    }

    addListener(el, action) {
        el.addEventListener(action, (event) => {
            const target = event.target;
            this.$target = target;
            // console.log(this.$target);
            console.log(this);
            this.getElem(this);
        });
    }
}
