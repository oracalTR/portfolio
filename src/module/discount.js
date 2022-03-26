import {Domlistener} from '@module/domlistener';

export class Discount extends Domlistener {
    constructor(el) {
        super(el);
        this.timeCounter(this.el);
    }

    timeCounter(el) {
        const dateEnd = new Date('2022-03-31T00:00:00+03:00');
        const interval = setInterval( () => {
            const dateNow = new Date();
            const countTime = dateEnd - dateNow > 0 ? dateEnd - dateNow : 0;
            if (countTime > 0) {
                // const dayEnd = Math.floor(countTime / 1000 / 60 / 60 / 24);
                const hourEnd = Math.floor(countTime / 1000/ 3600);
                const minEnd = Math.floor(countTime / 1000 / 60) % 60;
                const secEnd = Math.floor(countTime / 1000) % 60;
                this.el.textContent = `
                    ${hourEnd > 9 
                    ? hourEnd 
                    : '0' + hourEnd}:${minEnd > 9 
                        ? minEnd 
                        : '0' + minEnd}:${secEnd > 9 
                            ? secEnd 
                            : '0' + secEnd}
                `;
            } else {
                clearInterval(interval);
                this.el.textContent = `00:00:00`;
            }
        }, 1000);
    }
}
