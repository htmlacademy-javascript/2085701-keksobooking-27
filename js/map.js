import { createCardElement } from './popup.js';

const OFFERS_COUNT = 10;

const userForm = document.querySelector('.ad-form');
const addressField = userForm.querySelector('#address');

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
}
);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker({
  lat: 0,
  lng: 0,
},
{
  draggable: true,
  icon: mainPinIcon,
},
);

const getMainPinMarker = (coordinates) => {
  mainPinMarker.setLatLng(coordinates);
  addressField.value = `${coordinates.lat}, ${coordinates.lng}`;
  mainPinMarker.addTo(map);
};

function initMap (coordinates, scale) {
  map.setView(coordinates, scale);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  getMainPinMarker(coordinates);
}

const setOnMapLoad = (cb) => {
  map.on('load', cb);
};

const setOnMainPinMove = () => {
  mainPinMarker.on('move', (evt) => {
    const LatLng = evt.target.getLatLng();
    const lat = LatLng.lat.toFixed(5);
    const lng = LatLng.lng.toFixed(5);
    addressField.value = `${lat}, ${lng}`;
  });
};

const createAdPinMarkers = (offers) => {
  offers.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon,
    },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(createCardElement(offer));
  });
};

const setAdPins = (offers) => {
  markerGroup.clearLayers();
  createAdPinMarkers(offers.slice(0, OFFERS_COUNT));
};

export {initMap, setAdPins, setOnMapLoad, setOnMainPinMove};
