import { createCards } from './popup.js';
import { turnAdFormOff, turnAdFormOn } from './form.js';
import { turnFilterOff, turnFilterOn } from './filter.js';
import { createAnnouncements} from './data.js';

turnFilterOff();
turnFilterOn();
turnAdFormOff();
turnAdFormOn();
createCards(createAnnouncements());
