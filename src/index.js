import {Menu} from '@module/menu';
import {Tabs} from '@module/tabs';
import {Feature} from '@module/feature';
import {Modal} from '@module/modal';

// Menu and ScrollButton
new Menu('.header-wrapper');
new Menu('.main__scroll');
new Menu('.main__button');
// Tabs
new Tabs('.design-wrapper');
// Feature
new Feature('.feature-wrapper');
// Modal
new Modal('.modal');
