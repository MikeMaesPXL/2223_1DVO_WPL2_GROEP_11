// ID, TITEL, PRICE, ,QUANTITY, PICTURE
let items = [{
        id: "0",
        title: "Klein pakket",
        price: 10,
        quantity: 1,
        picture: "/images/Klein%20pakket.png"
    },
    {
        id: "1",
        title: "Starter pakket",
        price: 20,
        quantity: 1,
        picture: "/images/Klein%20pakket.png"
    },
    {
        id: "2",
        title: "Groot pakket",
        price: 30,
        quantity: 1,
        picture: "/images/Klein%20pakket.png"
    }
];

//Variables
let buttons = document.querySelectorAll(".btn-click");
let remove_buttons = document.querySelectorAll(".btn-remove")
buttons.forEach((btn) => {
    btn.addEventListener('click', event => {
        let waarde = event.target.dataset.waarde;
        addItem(waarde);
    })
});

buttons.forEach((btn) => {
    btn.addEventListener('click', (event)=> {
        removeItem();
    });
});

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
    for (let i = 0; i < shopping_cart.length; i++) {
        if (shopping_cart[i].id === waarde) {
            shopping_cart[i].quantity += 1;
            return;
        }
    }
    shopping_cart.push(items[waarde]);
    displayItems(waarde);
        // if (shopping_cart[waarde] === undefined) {
        //     shopping_cart.push(items[waarde]);
        //     console.log("Nieuw item toegevoegd");
        // } else if (shopping_cart[waarde] === items[waarde]) {
        //     shopping_cart[waarde].quantity += 1;
        //     console.log("Item staat al in de lijst");
        // }
    // }
}
function removeItem(waarde) {
    for (let i = 0; i < shopping_cart.length; i++) {
        if (shopping_cart[i].id === waarde) {
            shopping_cart[i].quantity -= 1;
            if(shopping_cart[i].quantity < 1) {
                shopping_cart.splice(i, 1);
            }
            return;
        }
    }
    // console.log("in remove item")
    // debugger;
    // if(shopping_items[waarde].quantity.count > 0) {
    //     shopping_items[waarde].quantity.value -= 1;
    // } else if(shopping_items[waarde].quantity.count <=0) {
    //     shopping_items[waarde].remove();
    // }
}

function displayItems(waarde) {
    let cart_items = document.getElementById("cart-items");
    let cart_item;

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
        img.src = items[waarde].picture;
        title.innerText = items[waarde].title;
        price.innerText = "€" + items[waarde].price;
        quantity.innerText = items[waarde].quantity;
        remove_button.innerText = "REMOVE";

        //Classes and events
        cart_item.classList.add("cart-item", "cart-column")
        img.classList.add("cart-item-image");
        title.classList.add("cart-item-title");
        price.classList.add("cart-price");
        quantity.classList.add("cart-item-quantity")
        remove_button.classList.add("btn", "btn-danger", "btn-remove");
        // remove_button.addEventListener('click', removeItem);

        //Add to cart item
        cart_item.appendChild(img);
        cart_item.appendChild(title);
        cart_item.appendChild(price);
        cart_item.appendChild(quantity);
        cart_item.appendChild(remove_button);
    }
        //Add everything
        cart_items.appendChild(cart_item);
        displayTotal(waarde)
}

function displayTotal() {
    let total = 0;
    for(let i = 0; i < shopping_cart.length; i++) {
        total += shopping_cart[i].price * shopping_cart[i].quantity;
    }
    return total.toFixed(2)

    // let total_text = document.getElementsByClassName("cart-total-price");
    // console.log("in displayTotal");
    // for(let item in shopping_items) {
    //     total = total + (shopping_items[waarde].price * shopping_items[waarde].quantity);
    // }
    // total_text.innerHTML = "€" + total;
    // debugger;
}