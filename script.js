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

// remove_buttons.forEach((btn) => {
//     btn.addEventListener('click', (event)=> {
//         removeItem();
//     });
// });

//Cart array
let shopping_cart = [];


// function saveCart() {
//     sessionStorage.setItem('shopping_cart', JSON.stringify(items));
// }
// function loadCart() {
//     shopping_items = JSON.parse(sessionStorage.getItem('shopping_cart'));
// }
// if (sessionStorage.getItem('shopping_cart') != null) {
//     loadCart();
// }

function addItem(waarde) {
    //OPTIE A:product bestaat al in cart; aantal +1
    for (let i = 0; i < shopping_cart.length; i++) {
        if (shopping_cart[i].id === waarde) {
            shopping_cart[i].quantity += 1;
            displayItems();
            return;
        }
    }
    //OPTIE B: product bestaat nog niet; aanmaken en quantity op 1 zetten
    shopping_cart.push(items[waarde]);

    //Display geüpdate winkelmand
    displayItems();
}
function removeItem() {
    console.log("Remove item");
    for (let i = 0; i < shopping_cart.length; i++) {
        //Check to see which remove is pressed
        if (shopping_cart[i].quantity >= 1) {
            console.log("Quantity > 1")
            shopping_cart[i].quantity -= 1;
            if (shopping_cart[i].quantity < 1) {
                shopping_cart.splice(i, 1);
            }
        }
        displayItems();
    }
    // shopping_cart[i].quantity -= 1;
    // for (let i = 0; i < shopping_cart.length; i++) {
    //     if (shopping_cart[i].quantity < 1) {
    //         shopping_cart.splice(i, 1);
    //     }
    // }
}

function displayItems() {
    let cart_items = document.getElementById("cart-items");
    let cart_item;

    cart_items.innerHTML = "";

    for (let i = 0; i < shopping_cart.length; i++) {
        //Filling cart item
        cart_item = document.createElement("div");

        //Creating elements
        let img = document.createElement("img");
        let title = document.createElement("span");
        let price = document.createElement("span");
        let quantity = document.createElement("span");
        let remove_button = document.createElement("button");

        //Values
        img.src = shopping_cart[i].picture;
        title.innerText = shopping_cart[i].title;
        price.innerText = "€" + shopping_cart[i].price;
        quantity.innerText = shopping_cart[i].quantity;
        remove_button.innerText = "REMOVE";
        remove_button.type = "button";

        //Classes and events
        cart_item.classList.add("cart-item", "cart-column")
        img.classList.add("cart-item-image");
        title.classList.add("cart-item-title");
        price.classList.add("cart-price");
        quantity.classList.add("cart-item-quantity");
        remove_button.classList.add("btn", "btn-danger", "btn-remove");
        remove_button.addEventListener('click', removeItem);

        //Add to cart item
        cart_item.appendChild(img);
        cart_item.appendChild(title);
        cart_item.appendChild(price);
        cart_item.appendChild(quantity);
        cart_item.appendChild(remove_button);

        //Add everything
        cart_items.appendChild(cart_item);
    }
        displayTotal()
        // let total_text = document.getElementsByClassName("cart-total-price");
        // total_text.innerText = displayTotal();
}

function displayTotal() {
    let total = 0;
    for(let i = 0; i < shopping_cart.length; i++) {
        total += shopping_cart[i].price * shopping_cart[i].quantity;
    }
    return total.toFixed(2);
}