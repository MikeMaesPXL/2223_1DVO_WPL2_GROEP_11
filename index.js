function selectPhone(selectedPhone) {
    let phone1 = document.getElementById("phoneImg");
    let phone2 = document.getElementById("phoneImg2");
    let phone3 = document.getElementById("phoneImg3");

    phone1.classList.add("phone-image-grayed-out");
    phone2.classList.add("phone-image-grayed-out");
    phone3.classList.add("phone-image-grayed-out");

    if (selectedPhone === 1) {
        phone1.classList.remove("phone-image-grayed-out");
    } else if (selectedPhone === 2) {
        phone2.classList.remove("phone-image-grayed-out");
    } else if (selectedPhone === 3) {
        phone3.classList.remove("phone-image-grayed-out");
    }
}

