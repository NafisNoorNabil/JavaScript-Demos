'use strict';

document.addEventListener('DOMContentLoaded', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const { latitude, longitude } = position.coords;
        const coords = [latitude, longitude];
        const map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
          .bindPopup('Your current location')
          .openPopup();
      },
      function() {
        alert('Could not get your location');
      }
    );
  } else {
    alert('Geolocation is not supported by your browser');
  }
});
