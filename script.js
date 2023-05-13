if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemsButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemsButtons)
    for (let i = 0; i < removeCartItemsButtons.length; i++) {
        let button = removeCartItemsButtons[i]
        button.addEventListener("click", removeCartitem)
    }

    let quanityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quanityInputs.length; i++) {
        let input = quanityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function removeCartitem(e) {
    let buttonClicked = e.target
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function quantityChanged(e) {
    let input = e.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('€', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
     }
     document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
}