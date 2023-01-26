import {createAnnouncements} from './data.js';

const TYPE_DICTIONARY = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarListElement = document.querySelector('.map__canvas');
const announcementCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const fragment = document.createDocumentFragment();

const simularAnnouncements = createAnnouncements();

simularAnnouncements.forEach((offer) => {
  const announcementCard = announcementCardTemplate.cloneNode(true);
  announcementCard.querySelector('.popup__title').textContent = offer.offer.title;
  announcementCard.querySelector('.popup__text--address').textContent = offer.offer.address;
  announcementCard.querySelector('.popup__text--price').textContent = `${offer.offer.price } ₽/ночь`;
  announcementCard.querySelector('.popup__type').textContent = TYPE_DICTIONARY[offer.offer.type];
  announcementCard.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
  announcementCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  announcementCard.querySelector('.popup__description').textContent = offer.offer.description;
  announcementCard.querySelector('.popup__avatar').src = offer.author.avatar;
  const addPhotos = () => {
    const photosList = announcementCard.querySelector('.popup__photos');
    photosList.innerHTML = '';
    for (let i = 0; i < offer.offer.photos.length; i++) {
      const newElement = document.createElement('img');
      newElement.style.width = '45px';
      newElement.style.height = '40px';
      newElement.classList.add('popup__photo');
      newElement.src = offer.offer.photos[i];
      fragment.appendChild(newElement);
    }
    photosList.appendChild(fragment);
  };
  addPhotos();
  const changeFeatures = () => {
    const featuresList = announcementCard.querySelectorAll('.popup__feature');
    const modifiers = offer.offer.features.map((feature) => `popup__feature--${feature}`);
    featuresList.forEach((featuresListItem) => {
      const modifier = featuresListItem.classList[1];
      if (!modifiers.includes(modifier)) {
        featuresListItem.remove();
      }
    });
  };
  changeFeatures();
  similarListElement.appendChild(announcementCard);
});
