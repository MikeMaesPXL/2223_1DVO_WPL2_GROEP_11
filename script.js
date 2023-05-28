// // ID, TITEL, PRICE, ,QUANTITY, PICTURE
// let items = [{
//         id: "0",
//         title: "Starter pakket",
//         price: 10,
//         quantity: 1,
//         picture: "/images/Starter_Pakket.png"
//     },
//     {
//         id: "1",
//         title: "Klein pakket",
//         price: 20,
//         quantity: 1,
//         picture: "/images/Klein_Pakket.png"
//     },
//     {
//         id: "2",
//         title: "Groot pakket",
//         price: 30,
//         quantity: 1,
//         picture: "/images/Groot_Pakket.png"
//     }
// ];
//
// //Variables
// let buttons = document.querySelectorAll(".btn-click");
// // let remove_buttons = document.querySelectorAll(".btn-remove")
// buttons.forEach((btn) => {
//     btn.addEventListener('click', event => {
//         let waarde = event.target.dataset.waarde;
//         addItem(waarde);
//     })
// });
//
// //Cart array
// let shopping_cart = [];
// loadCart();
// function loadCart() {
//     if(localStorage.getItem('shopping_cart')) {
//         shopping_cart = JSON.parse(localStorage.getItem('shopping_cart'));
//         displayItems();
//     }else{
//         shopping_cart = [];
//     }
// }
//
// function saveCart() {
//     localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
// }
//
// function addItem(waarde) {
//     for (let i = 0; i < shopping_cart.length; i++) {
//         if (shopping_cart[i].id === waarde) {
//             shopping_cart[i].quantity += 1;
//             displayItems();
//             return;
//         }
//     }
//     shopping_cart.push(items[waarde]);
//     displayItems();
// }
// function removeItem(remove_value) {
//     for (let i = 0; i < shopping_cart.length; i++) {
//         if (shopping_cart[i].id === remove_value) {
//             shopping_cart[i].quantity -= 1;
//             if (shopping_cart[i].quantity < 1) {
//                 shopping_cart[i].quantity = 1;
//                 shopping_cart.splice(i, 1);
//             }
//         }
//         displayItems();
//     }
// }
//
// function displayItems() {
//     let cart_items = document.getElementById("cart-items");
//     let cart_item;
//
//     //Winkelmand leegmaken
//     cart_items.innerHTML = "";
//
//     for (let i = 0; i < shopping_cart.length; i++) {
//         //Filling cart item
//         cart_item = document.createElement("div");
//
//         //Creating elements
//         let img = document.createElement("img");
//         let title = document.createElement("span");
//         let price = document.createElement("span");
//         let quantity = document.createElement("span");
//         let remove_button = document.createElement("button");
//
//         //Values
//         img.src = shopping_cart[i].picture;
//         title.innerText = shopping_cart[i].title;
//         price.innerText = "€" + shopping_cart[i].price;
//         quantity.innerText = shopping_cart[i].quantity;
//         remove_button.innerText = "REMOVE";
//         remove_button.type = "button";
//
//         //Classes and events
//         cart_item.classList.add("cart-item", "cart-column")
//         img.classList.add("cart-item-image");
//         title.classList.add("cart-item-title");
//         price.classList.add("cart-price");
//         quantity.classList.add("cart-item-quantity");
//         remove_button.classList.add("btn", "btn-danger", "btn-remove");
//         // let remove_value = remove_button.dataset.remove_waarde = "id" + shopping_cart[i].id;
//         remove_button.dataset.waarde = shopping_cart[i].id;
//         //remove_button.addEventListener('click', removeItem(shopping_cart[i].id));
//
//         //Add to cart item
//         cart_item.appendChild(img);
//         cart_item.appendChild(title);
//         cart_item.appendChild(price);
//         cart_item.appendChild(quantity);
//         cart_item.appendChild(remove_button);
//
//         //Add everything
//         cart_items.appendChild(cart_item);
//     }
//
//     let allRemoveButtons = document.querySelectorAll(".btn-remove");
//     allRemoveButtons.forEach((btn) => {
//         btn.addEventListener('click', event => {
//             let waarde = event.target.dataset.waarde;
//             removeItem(waarde);
//         })
//     });
//
//     displayTotal();
//     saveCart();
// }
//
// function displayTotal() {
//     let total = 0;
//     for(let i = 0; i < shopping_cart.length; i++) {
//         total += (shopping_cart[i].price * shopping_cart[i].quantity);
//     }
//     total = "€" + total;
//     document.getElementById("cartPrice").innerHTML = total;
// }




// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

// ID, TITEL, PRICE, ,QUANTITY, PICTURE
let items = [{
        id: "0",
        title: "Starter pakket",
        price: 10,
        quantity: 1,
        picture: "/images/Starter_Pakket.png"
    },
    {
        id: "1",
        title: "Klein pakket",
        price: 20,
        quantity: 1,
        picture: "/images/Klein_Pakket.png"
    },
    {
        id: "2",
        title: "Groot pakket",
        price: 30,
        quantity: 1,
        picture: "/images/Groot_Pakket.png"
    }
];

//Variables
let buttons = document.querySelectorAll(".btn-click");
// let remove_buttons = document.querySelectorAll(".btn-remove")
buttons.forEach((btn) => {
    btn.addEventListener('click', event => {
        let waarde = event.target.dataset.waarde;
        addItem(waarde);
    })
});

//Cart array
let shopping_cart = [];
loadCart();
function loadCart() {
    if(localStorage.getItem('shopping_cart')) {
        shopping_cart = JSON.parse(localStorage.getItem('shopping_cart'));
        displayItems();
    }else{
        shopping_cart = [];
    }
}

function saveCart() {
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
}

function addItem(waarde) {
    for (let i = 0; i < shopping_cart.length; i++) {
        if (shopping_cart[i].id === waarde) {
            shopping_cart[i].quantity += 1;
            displayItems();
            return;
        }
    }
    shopping_cart.push(items[waarde]);
    displayItems();
}
function removeItem(remove_value) {
    for (let i = 0; i < shopping_cart.length; i++) {
        if (shopping_cart[i].id === remove_value) {
            shopping_cart[i].quantity -= 1;
            if (shopping_cart[i].quantity < 1) {
                shopping_cart[i].quantity = 1;
                shopping_cart.splice(i, 1);
            }
        }
        displayItems();
    }
}

function displayItems() {
    let cart_items = document.getElementById("cart-items");
    let cart_item;

    //Winkelmand leegmaken
    cart_items.innerHTML = "";

    for (let i = 0; i < shopping_cart.length; i++) {
        //Filling cart item
        cart_item = document.createElement("div");

        //Creating elements
        let img = document.createElement("img");
        let title = document.createElement("span");
        let quantity = document.createElement("span");
        let price = document.createElement("span");
        let remove_icon = document.createElement("img");

        //Values
        img.src = shopping_cart[i].picture;
        title.innerText = shopping_cart[i].title;
        price.innerText = "€" + shopping_cart[i].price;
        quantity.innerText = shopping_cart[i].quantity;
        remove_icon.src = "/icons/trash-solid.svg";

        //Classes and events
        cart_item.classList.add("cart-item", "cart-column")
        img.classList.add("cart-item-image");
        title.classList.add("cart-item-title");
        price.classList.add("cart-price");
        quantity.classList.add("cart-item-quantity");
        remove_icon.classList.add("cart-item-image", "cart-item-trash");
        // let remove_value = remove_button.dataset.remove_waarde = "id" + shopping_cart[i].id;
        remove_icon.dataset.waarde = shopping_cart[i].id;
        //remove_button.addEventListener('click', removeItem(shopping_cart[i].id));

        //Add to cart item
        cart_item.appendChild(img);
        cart_item.appendChild(title);
        cart_item.appendChild(quantity);
        cart_item.appendChild(price);
        cart_item.appendChild(remove_icon);

        //Add everything
        cart_items.appendChild(cart_item);
    }

    let allRemoveIcons = document.querySelectorAll(".cart-item-trash");
    allRemoveIcons.forEach((icon) => {
        icon.addEventListener('click', event => {
            let waarde = event.target.dataset.waarde;
            removeItem(waarde);
        })
    });

    displayTotal();
    saveCart();
}

function displayTotal() {
    let total = 0;
    for(let i = 0; i < shopping_cart.length; i++) {
        total += (shopping_cart[i].price * shopping_cart[i].quantity);
    }
    total = "€" + total;
    document.getElementById("cartPrice").innerHTML = total;
}