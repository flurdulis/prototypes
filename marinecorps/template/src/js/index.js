import Announcer from './announcement';
import '../scss/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const announcer = new Announcer(
    'on-point-message',
    'on-point-chevron-left',
    'on-point-chevron-right',
    'on-point-pager',
    'on-point-close',
  );
  announcer.open();
}, false);
