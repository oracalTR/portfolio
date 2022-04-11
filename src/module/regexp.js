export class RegExp {
    checkValue(value) {
        const div = document.createElement('div');
        div.style.color = '#FF9983';
        div.style.fontSize = 12 + 'px';
        div.textContent = 'Ошибка ввода данных! Введите верные данные!';
        div.id = 'err';
        let err;
        // eslint-disable-next-line max-len
        const regexpName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/;
        const regexpEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        // eslint-disable-next-line max-len
        const regexpPhone = /^((\+7|7|8)+([0-9]){10})$/;
        if (value.name == 'name') {
            err = regexpName.test(value.value);
        } else if (value.name == 'mail') {
            err = regexpEmail.test(value.value);
        } else if (value.name == 'phone') {
            err = regexpPhone.test(value.value);
        }
        if (!err) {
            value.style.backgroundColor = '#fff';
            value.style.color = 'red';
            const divErr = value.previousSibling;
            if (divErr.id != 'err') {
                value.insertAdjacentElement('beforebegin', div);
            }
            return true;
        } else {
            value.style.backgroundColor = '';
            value.style.color = '#fff';
            const divErr = value.previousSibling;
            if (divErr.id == 'err') {
                divErr.remove();
            }
            return false;
        }
    }
}
