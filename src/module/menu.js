import {Domlistener} from '@module/domlistener';
// Полифил для пя плавного скролла в Safari
import {elementScrollIntoView} from 'seamless-scroll-polyfill';

export class Menu extends Domlistener {
    constructor(el) {
        super(el);
        this.changeElem(this);
    }

    changeElem(el) {
        this.addListener(this.el, 'click');
    }

    getElem(elem) {
        const navMenu = this.el.querySelector('.menu');

        if (this.$target.closest('.menu-list__link') 
        || this.$target.closest('.main__scroll') 
        || this.$target.closest('.main__button')
        || this.$target.closest('.logo__img')) {
            const url = this.$target.hash || this.$target.parentNode.hash;
            const section = document.querySelector(url);
            console.log(section);
            // Реализация плавного скролла в Safari
            elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            });
            // document.querySelector(url).scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start'
            // });
        }
        // Нужно доработатьзакрытие меню при клике на body
        if (this.$target.closest('.humburger-menu')) {
            navMenu.style.top = 0 + 'px';
        } else if (this.$target.closest('.menu-list')) {
            navMenu.style.top = -300 + 'px';
        }
    }
}
