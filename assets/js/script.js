// To prevent use in iframes

// if (window.location.href != 'https://theonyxkitten.github.io' && window.location.href != 'https://theonyxkitten.github.io/' && window.location.href != 'https://theonyxkitten.github.io/#') {
//     window.location.replace('blank');
// }


const popup = document.getElementById('popup');

const glrybtn = document.getElementById('glrybtn');

var popupState = false;

function popupSwitch() {
    if (popupState) {
        popupState = true;
        popup.addClass('open');
    } else {
        popupState = false;
        popup.removeClass('open');
    }
}