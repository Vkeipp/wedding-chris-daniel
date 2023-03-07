// Get the modal
let modal = document.querySelector("#myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.querySelector("#img01");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

const ph01 = {
    phUrl: "images/cabin01.jpg",
    phID: document.querySelector("#cabin01"),
}
const ph02 = {
    phUrl: "images/cabin02.jpg",
    phID: document.querySelector("#cabin02"),
}
const ph03 = {
    phUrl: "images/cabin03.jpg",
    phID: document.querySelector("#cabin03"),
}
const ph04 = {
    phUrl: "images/cabin04.jpg",
    phID: document.querySelector("#cabin04"),
}
const ph05 = {
    phUrl: "images/cabin05.jpg",
    phID: document.querySelector("#cabin05"),
}
const ph06 = {
    phUrl: "images/cabin06.jpg",
    phID: document.querySelector("#cabin06"),
}
const ph07 = {
    phUrl: "images/beach01.jpg",
    phID: document.querySelector("#beach01"),
}
const ph08 = {
    phUrl: "images/beach02.jpg",
    phID: document.querySelector("#beach02"),
}
const ph09 = {
    phUrl: "images/beach03.jpg",
    phID: document.querySelector("#beach03"),
}
const ph10 = {
    phUrl: "images/beach04.jpg",
    phID: document.querySelector("#beach04"),
}
const ph11 = {
    phUrl: "images/beach05.jpg",
    phID: document.querySelector("#beach05"),
}
const ph12 = {
    phUrl: "images/beach06.jpg",
    phID: document.querySelector("#beach06"),
}
const ph13 = {
    phUrl: "images/forest07.jpg",
    phID: document.querySelector("#forest07"),
}
const ph14 = {
    phUrl: "images/forest02.jpg",
    phID: document.querySelector("#forest02"),
}
const ph15 = {
    phUrl: "images/forest03.jpg",
    phID: document.querySelector("#forest03"),
}
const ph16 = {
    phUrl: "images/forest04.jpg",
    phID: document.querySelector("#forest04"),
}
const ph17 = {
    phUrl: "images/forest05.jpg",
    phID: document.querySelector("#forest05"),
}
const ph18 = {
    phUrl: "images/forest06.jpg",
    phID: document.querySelector("#forest06"),
}
const ph19 = {
    phUrl: "images/sky01.jpg",
    phID: document.querySelector("#sky01"),
}
const ph20 = {
    phUrl: "images/sky02.jpg",
    phID: document.querySelector("#sky02"),
}
const ph21 = {
    phUrl: "images/sky03.jpg",
    phID: document.querySelector("#sky03"),
}
const ph22 = {
    phUrl: "images/sky04.jpg",
    phID: document.querySelector("#sky04"),
}
const ph23 = {
    phUrl: "images/sky05.jpg",
    phID: document.querySelector("#sky05"),
}
const ph24 = {
    phUrl: "images/sky06.jpg",
    phID: document.querySelector("#sky06"),
}
const ph25 = {
    phUrl: "images/dark01.jpg",
    phID: document.querySelector("#dark01"),
}
const ph26 = {
    phUrl: "images/dark02.jpg",
    phID: document.querySelector("#dark02"),
}
const ph27 = {
    phUrl: "images/dark03.jpg",
    phID: document.querySelector("#dark03"),
}
const ph28 = {
    phUrl: "images/dark04.jpg",
    phID: document.querySelector("#dark04"),
}
const ph29 = {
    phUrl: "images/dark05.jpg",
    phID: document.querySelector("#dark05"),
}
const ph30 = {
    phUrl: "images/dark06.jpg",
    phID: document.querySelector("#dark06"),
}

ph01.phID.onclick = function () {
    getUrlModal(ph01)
}

ph02.phID.onclick = function () {
    getUrlModal(ph02)
}
ph03.phID.onclick = function () {
    getUrlModal(ph03)
}

ph04.phID.onclick = function () {
    getUrlModal(ph04)
}
ph05.phID.onclick = function () {
    getUrlModal(ph05)
}

ph06.phID.onclick = function () {
    getUrlModal(ph06)
}
ph07.phID.onclick = function () {
    getUrlModal(ph07)
}

ph08.phID.onclick = function () {
    getUrlModal(ph08)
}
ph09.phID.onclick = function () {
    getUrlModal(ph09)
}

ph10.phID.onclick = function () {
    getUrlModal(ph10)
}
ph11.phID.onclick = function () {
    getUrlModal(ph11)
}

ph12.phID.onclick = function () {
    getUrlModal(ph12)
}
ph13.phID.onclick = function () {
    getUrlModal(ph13)
}

ph14.phID.onclick = function () {
    getUrlModal(ph14)
}
ph15.phID.onclick = function () {
    getUrlModal(ph15)
}

ph16.phID.onclick = function () {
    getUrlModal(ph16)
}
ph17.phID.onclick = function () {
    getUrlModal(ph17)
}

ph18.phID.onclick = function () {
    getUrlModal(ph18)
}
ph19.phID.onclick = function () {
    getUrlModal(ph19)
}

ph20.phID.onclick = function () {
    getUrlModal(ph20)
}
ph21.phID.onclick = function () {
    getUrlModal(ph21)
}

ph22.phID.onclick = function () {
    getUrlModal(ph22)
}
ph23.phID.onclick = function () {
    getUrlModal(ph23)
}

ph24.phID.onclick = function () {
    getUrlModal(ph24)
}
ph25.phID.onclick = function () {
    getUrlModal(ph25)
}

ph26.phID.onclick = function () {
    getUrlModal(ph26)
}
ph27.phID.onclick = function () {
    getUrlModal(ph27)
}

ph28.phID.onclick = function () {
    getUrlModal(ph28)
}
ph29.phID.onclick = function () {
    getUrlModal(ph29)
}

ph30.phID.onclick = function () {
    getUrlModal(ph30)
}

function getUrlModal(photo) {
    modal.style.display = "block";
    modalImg.src = photo.phUrl;
}

