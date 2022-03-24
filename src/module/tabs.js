import {Domlistener} from '@module/domlistener';

export class Tabs extends Domlistener {
    constructor(el) {
        super(el);
        this.changeElem(this);
    } 

    changeElem(el) {
        this.addListener(this.el, 'click');
    }

    getElem(event) {
        if (this.$target.dataset.tabsHandler) {
            const tabsHandler = this.el.querySelectorAll('[data-tabs-handler]');
            tabsHandler.forEach( (tab) => {
                tab.classList.remove('design-list__item_active');
                if (tab.dataset.tabsHandler 
                    === this.$target.dataset.tabsHandler) {
                    tab.classList.add('design-list__item_active');
                }
            });
            
            const tabs = 
            this.el.querySelectorAll(`[data-tabs-field]`);
            tabs.forEach( (tab) => {
                tab.classList.add('hidden');
                if (tab.dataset.tabsField 
                    === this.$target.dataset.tabsHandler) {
                    tab.classList.remove('hidden');
                }
            });
        }
    }
}
