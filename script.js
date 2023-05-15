// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }
//
// function ready() {
//
// }

// ID, TITEL, PRICE, ,QUANTITY, PICTURE?
var items = [{
        Id: 1,
        Title: "Klein pakket",
        Price: 10,
        Quantity: 0,
        Picture: 1
    },
    {
        Id: 2,
        Title: "Standaard pakket",
        Price: 20,
        Quantity: 0,
        Picture: 2
    },
    {
        Id: 3,
        Title: "Groot pakket",
        Price: 30,
        Quantity: 0,
        Picture: 3
    }
];

//Variables
var shopping_items = [];
var buttons = document.querySelectorAll(".btn-click");
buttons.forEach((item) => {
    item.addEventListener('click', event => {
        let waarde = event.target.dataset.waarde;
        addItem(items, shopping_items, waarde);
    })
});

// function saveCart() {
//     sessionStorage.setItem('shopping_cart', JSON.stringify(shopping_items));
// }
// function loadCart() {
//     shopping_items = JSON.parse(sessionStorage.getItem('shopping_cart'));
// }
// if (sessionStorage.getItem('shopping_cart') != null) {
//     loadCart();
// }

function addItem(items, shopping_items, waarde) {
    // for(let i = 0; i < items.length; i++) {
    //    if(shopping_items[i].contains(items[i].Id)) {
    //        shopping_items[i].Quantity += 1
    //        console.log("item + 1 gedaan")
    //    } else {
    //        console.log("item toegevoegd")
    //        shopping_items[i].push(items)
    //    }
    // }

    //Verander hier de i -> loop naar waarde zodat ge kunt checken op button
    for(let i = 0; i < items.length; i++) {
        // for(var item in items) {
            if(shopping_items[i] === null || shopping_items[i] === undefined) {
                shopping_items.push(items[i]);
                console.log("if check 1");
            }
            if(shopping_items[i].Title === items[i].Title) {
                shopping_items[i].Quantity += 1
            } else {
                shopping_items.push(items[i]);
                console.log(shopping_items);
            }
        // }
    }
    console.log("add item outside loop")
    displayItems(items, shopping_items, waarde);
    // saveCart();
}
function removeItem(items, shopping_items) {
    for(var item in shopping_items) {
        if(shopping_items[item].Title === item.Title) {
            shopping_items[i].Quantity -= 1
            if(shopping_items[item].count === 0) {
                shopping_items.splice(item, 1);
            }
            break;
        }
    }
    // saveCart();
    // for(let i = 0; i < shopping_items.length; i++) {
    //     if(shopping_items.contains(items[i].Id)) {
    //         //Lower item number by 1
    //         console.log("item - 1 gedaan")
    //         shopping_items[i].Quantity -= 1
    //
    //         if(shopping_items[i].Quantity <= 0) {
    //             //Remove item from list
    //             console.log("item verwijderd")
    //             shopping_items[i].pop();
    //         }
    //     }
    // }
}

function displayItems(items, shopping_items, waarde) {
    let cart_items = document.getElementById("cart-items");

    //Check here to see if button is == to waarde and only add those elements
    for(let item in shopping_items) {
        let cart_item;

        //opvullen van een cart_item
        for(let i = 0; i < shopping_items.length; i++) {

            cart_item = document.createElement("div");

            var img = document.createElement("img");
            img.alt = shopping_items[i].Picture;
            var title = document.createElement("span");
            title.innerText = shopping_items[i].Title;
            var price = document.createElement("span");
            price.innerText = shopping_items[i].Price;
            var quantity = document.createElement("input");
            quantity.value = shopping_items[i].Quantity;
            var remove_button = document.createElement("button");
            remove_button.innerText = "REMOVE";
            remove_button.classList.add("btn", "btn-danger");
            remove_button.addEventListener('click', removeItem);
            cart_item.appendChild(img);
            cart_item.appendChild(title);
            cart_item.appendChild(price);
            cart_item.appendChild(quantity);
            cart_item.appendChild(remove_button);
        }
        cart_items.appendChild(cart_item);

    }


    //Create items and add classes
    // let item_div = document.createElement("div");
    // item_div.classList.add("cart-column", "cart-item");
    //     let img = document.createElement("img");
    //     img.classList.add("cart-item-image");
    //     let title = document.createElement("span");
    //     title.classList.add("cart-item-title");
    //
    // let price = document.createElement("span");
    // price.classList.add("cart-price", "cart-column");
    //
    // let quantity = document.createElement("div");
    // quantity.classList.add("cart-quantity", "cart-column");
    //     let input = document.createElement("input");
    //     input.classList.add("cart-quantity-input");
    //     let remove_button = document.createElement("button");
    //     remove_button.classList.add("btn", "btn-danger");
    //
    // item_div.appendChild(img);
    // item_div.appendChild(title);
    // quantity.appendChild(input);
    // quantity.appendChild(remove_button);
    //
    // Add values to the elements
    // shopping_items.forEach((item) => {
    //     item.
    // });
    //
    // //Add to body
    // let cart_items = document.getElementById("cart-items")[0]
    // cart_items.appendChild(item_div);
    // cart_items.appendChild(price);
    // cart_items.appendChild(quantity);
    // displayTotal();
}
function displayTotal() {
    var total = 0;
    for(var item in shopping_items) {
        total += shopping_items[item].Price * shopping_items[item].Quantity;
    }
    return Number(total.toFixed(2));
}

// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }
//
// function ready() {
//     let removeCartItemsButtons = document.getElementsByClassName('btn-danger')
//     for (let i = 0; i < removeCartItemsButtons.length; i++) {
//         let button = removeCartItemsButtons[i]
//         button.addEventListener("click", removeCartitem)
//     }
//
//     let quanityInputs = document.getElementsByClassName('cart-quantity-input');
//     for (let i = 0; i < quanityInputs.length; i++) {
//         let input = quanityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }
//
//     let addToCartButtons = document.getElementsByClassName('shop-item-button')
//     for (let i = 0; i < addToCartButtons.length; i++) {
//         let button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }
// }
//
// function removeCartitem(e) {
//     let buttonClicked = e.target
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal()
// }
//
// function quantityChanged(e) {
//     let input = e.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }
//
// function addToCartClicked(e) {
//     let button = e.target
//     let shopItem = button.parentElement.parentElement.parentElement
//     let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }
//
// function addItemToCart(title, price, imageSrc) {
//     let cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     let cartItems = document.getElementsByClassName('cart-items')[0]
//     let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (let i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerHTML === title) {
//             alert('Dit product is al in je winkelmandje.')
//             return
//         }
//     }
//     cartRow.innerHTML = `
//             <div class="cart-item cart-column">
//                 <img class="cart-item-image" src="${imageSrc}" alt="img" width="75" height="75">
//                 <span class="cart-item-title">${title}</span>
//             </div>
//             <span class="cart-price cart-column">${price}</span>
//             <div class="cart-quantity cart-column">
//                 <input class="cart-quantity-input" type="number" value="1">
//                 <button class="btn btn-danger" type="button">REMOVE</button>
//             </div>
//     `
//     // cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',
//     removeCartitem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',
//     quantityChanged)
// }
//
// function updateCartTotal() {
//     let cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     let cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     let total = 0
//     for (let i = 0; i < cartRows.length; i++) {
//         let cartRow = cartRows[i]
//         let priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         let price = parseFloat(priceElement.innerText.replace('€', ''))
//         let quantity = quantityElement.value
//         total = total + (price * quantity)
//      }
//      total = Math.round(total * 100) / 100
//      document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
// }
