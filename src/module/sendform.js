import {Domlistener} from '@module/domlistener';

export class Sendform extends Domlistener {
    constructor(el) {
        super(el);
        this.changeElem(this);
    }

    changeElem(el) {
        this.addListener(this.el, 'input');
        this.addListener(this.el, 'submit');
    }

    getElem(elem) {
        this[this.$target.name] = this.$target.value;
        // console.log(this);
    }

    resetForm(elem) {
        this.formBody(this);
        this.el.reset();
    }

    formBody(data) {
        const formbody = {};
        console.log(data);
        // data.forEach(key, value => {
        //     formbody[key] = value;
        // });
        console.log(formbody);
        console.log('Отправка данных');
    }
}
