import { turnAdFormOn } from './form.js';
import { createCardElement } from './popup.js';
import { createAnnouncements} from './data.js';

const centerCoordinates = {
  lat: 35.66376,
  lng: 139.7839,
};
const MAP_SCALE = 12;
const userForm = document.querySelector('.ad-form');
const addressField = userForm.querySelector('#address');


const map = L.map('map-canvas')
  .on('load', () => {
    turnAdFormOn();
  })
  .setView(centerCoordinates, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
}
);

const mainPinMarker = L.marker(centerCoordinates, {
  draggable: true,
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  addressField.value = `${evt.target.getLatLng()}`;
});

const resetMainPinMarker = mainPinMarker.setLatLng(centerCoordinates);
const resetMap = map.setView(centerCoordinates, MAP_SCALE);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (announcement) => {
  const marker = L.marker(announcement.location, {
    icon,
  },
  );
  marker
    .addTo(markerGroup)
    .bindPopup(createCardElement(announcement));
};

createAnnouncements().forEach((announcement) => {
  createMarker(announcement);
});

//удаляем слой
// markerGroup.clearLayers();

export {resetMainPinMarker, resetMap};
