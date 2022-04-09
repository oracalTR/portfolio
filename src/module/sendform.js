import {Domlistener} from '@module/domlistener';
import {RegExp} from '@module/regexp';

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
        const errorValue = new RegExp().checkValue(this.$target);
        console.log(errorValue);
        this[this.$target.name] = this.$target.value;
        this[this.$target.name + 'Err'] = errorValue;
        console.log(this);
    }

    resetForm(elem) {
        const err = !this.nameErr && !this.mailErr && !this.phoneErr 
        ? true : false;
        console.log(err);
        if (err) {
            this.formBody(this);
            this.el.reset();
        }
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
