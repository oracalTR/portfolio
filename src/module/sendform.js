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
        // console.dir(this.$target);
        // console.log(this.$target.name);
        // const nameInput = this.$target.name;
        this[this.$target.name] = this.$target.value;
        // console.log(nameInput);
        // const formTestDrive = document.querySelector('.form-test-drive');
        // const formdata = new FormData(this.el);
        // formdata.forEach( (value, key) => {
        //     console.log(key, value);
        // });
        // this.formBody(formdata);
        // if (this.$target.closest('button')) {
        //     console.log(this.$target);
        //     this.el.reset();
        // }
        console.log(this);
    }

    resetForm(elem) {
        console.log(this);
        this.el.reset();
    }

    // formBody(data) {
    //     const formbody = {};
    //     data.forEach(key, value => {
    //         formbody[key] = value;
    //     });
    //     console.log(formbody);
    // }
}
