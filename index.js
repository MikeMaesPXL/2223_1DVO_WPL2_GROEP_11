let currentPhone = 0;
let phoneImages = ["phoneImg", "phoneImg2", "phoneImg3"];

function selectPhone(selectedPhone) {
    let phone1 = document.getElementById("phoneImg");
    let phone2 = document.getElementById("phoneImg2");
    let phone3 = document.getElementById("phoneImg3");

    phone1.classList.add("phone-image-grayed-out");
    phone2.classList.add("phone-image-grayed-out");
    phone3.classList.add("phone-image-grayed-out");

    if (selectedPhone === 1) {
        phone1.classList.remove("phone-image-grayed-out");
        currentPhone = 0;
    } else if (selectedPhone === 2) {
        phone2.classList.remove("phone-image-grayed-out");
        currentPhone = 1;
    } else if (selectedPhone === 3) {
        phone3.classList.remove("phone-image-grayed-out");
        currentPhone = 2;
    }
}

function changePhoneImage() {
    if (currentPhone + 1 >= phoneImages.length) {
        currentPhone = 0;
    } else {
        currentPhone = currentPhone + 1;
    }
    selectPhone(currentPhone + 1);
}

setInterval(changePhoneImage, 8000);
