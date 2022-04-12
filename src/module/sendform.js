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
        this[this.$target.name] = this.$target.value;
        this[this.$target.name + 'Err'] = errorValue;
    }

    resetForm(elem) {
        const err = !this.nameErr && !this.mailErr && !this.phoneErr 
        ? true : false;
        let timer;
        if (err) {
            this.formBody(this);
            this.el.reset();
            this.el.insertAdjacentHTML('afterend', `
            <div id='send'>Спасибо! Ваши данные отправлены!</div>
            `);
            timer = setTimeout( () => {
                console.log(this.el.closest('.modal'));
                const divSend = document.getElementById('send');
                divSend ? divSend.remove() : '';
                if (this.el.closest('.modal')) {
                    this.el.closest('.modal').classList.add('hidden');
                }
                clearTimeout(timer);
            }, 2000);
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
