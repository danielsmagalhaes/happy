const map = L.map('mapid').setView([-25.4321781, -49.2796458], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('APAV <a href="orpganage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

L.marker([-25.4321781, -49.2796458], { icon })
.addTo(map)
.bindPopup(popup)