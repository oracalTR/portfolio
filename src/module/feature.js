import {Domlistener} from '@module/domlistener';

export class Feature extends Domlistener {
    constructor(el) {
        super(el);
        this.changeElem(this);
    }

    changeElem(el) {
        this.addListener(this.el, 'click');
    }

    getElem(event) {
        if (this.$target.closest('.feature-item-wrap')) {
            const btnFeature = this.el.querySelectorAll('button');
            const featureSub = this.el.querySelectorAll('.feature-sub');
            btnFeature.forEach( (btn) => {
                btn.classList.remove('feature__link_active');
            });
            featureSub.forEach( (desc) => {
                desc.classList.add('hidden');
            });
            const btn = this.$target.closest('.feature__link');
            btn.classList.add('feature__link_active');
            btn.nextElementSibling.classList.remove('hidden');
        }
        console.log(this);
    }
}
