import {Menu} from '@module/menu';
import {Tabs} from '@module/tabs';
import {Feature} from '@module/feature';
import {Modal} from '@module/modal';
import {Discount} from '@module/discount';
import {Sendform} from '@module/sendform';

// Menu and ScrollButton
new Menu('.header-wrapper');
new Menu('.main__scroll');
new Menu('.main__button');
// Tabs
new Tabs('.design-wrapper');
// Feature
new Feature('.feature-wrapper');
// Discount
new Discount('.timer__time');
// SendForm
// ModalForm
new Sendform('.modal__form');
// formTestDrive
new Sendform('.form-test-drive');
// Modal
new Modal('.modal');
