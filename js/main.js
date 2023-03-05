import { turnAdFormOn, turnAdFormOff } from './form.js';
import './user-form.js';
import {initMap, setAdPins, setOnMapLoad, setOnMainPinMove} from './map.js';
import './slider.js';
import { createAnnouncements} from './data.js';

const centerCoordinates = {
  lat: 35.66376,
  lng: 139.7839,
};
const MAP_SCALE = 12;

const getOffers = createAnnouncements();

setOnMapLoad(() => {
  turnAdFormOn();
  setOnMainPinMove();
  setAdPins(getOffers);
});

turnAdFormOff();
initMap(centerCoordinates, MAP_SCALE);

