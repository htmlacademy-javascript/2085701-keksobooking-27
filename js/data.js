import {getMassiveRandom,
  getRandomPositiveInteger,
  getRandomArrayElement,
  getRandomPositiveFloat
} from './util.js';

const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const TITLES = [
  'Есть свободные места',
  'Предлагается жилье',
  'Недалеко от вас'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Переночуйте и уезжайте, ну а что вы хотели за такие деньги',
  'Неплохое жилье, почти на 3 звезды',
  'Хорошее жилье по цене-качеству, даже душ в номере есть',
  'Если у вас много денег, то вам нужно именно это'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAnnouncement = (index) => {
  const randomLocationLat = getRandomPositiveFloat(MIN_LAT, MAX_LAT, 4);
  const randomLocationLng = getRandomPositiveFloat(MIN_LNG, MAX_LNG, 4);
  const randomPrice = getRandomPositiveInteger(1, 30000);
  const randomTitle = getRandomArrayElement(TITLES);
  const randomType = getRandomArrayElement(TYPES);
  const randomRooms = getRandomPositiveInteger(1, 5);
  const randomGuests = getRandomPositiveInteger(1, 10);
  const randomCheckin = getRandomArrayElement(CHECKIN);
  const randomCheckout = getRandomArrayElement(CHECKOUT);
  const randomFeatures = getMassiveRandom(FEATURES);
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const randomPhotos = getMassiveRandom(PHOTOS);

  const AUTHORS = {
    avatar: `img/avatars/user${index.toString().padStart(2, '0')}.png`,
  };

  const LOCATIONS = {
    lat: randomLocationLat,
    lng: randomLocationLng,
  };

  const OFFERS = {
    title: randomTitle,
    address: `${LOCATIONS.lat}, ${LOCATIONS.lng}`,
    price: randomPrice,
    type: randomType,
    rooms:  randomRooms,
    guests:  randomGuests,
    checkin: randomCheckin,
    checkout: randomCheckout,
    features: randomFeatures,
    description: randomDescription,
    photos: randomPhotos,
  };

  return {
    author: AUTHORS,
    offer: OFFERS,
    location: LOCATIONS,
  };
};

const createAnnouncements = () => Array.from({length: 10}, (_, avatarIndex) => createAnnouncement(avatarIndex + 1));

export { createAnnouncements};
