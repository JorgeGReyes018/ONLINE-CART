var cartRemove = document.getElementsByClassName("cartRemove")
for (var i = 0; i< cartRemove.length; i++) {
    var button = cartRemove[i]
    button.addEventListener("click", function(tap){
        var buttonClicked = tap.target
        buttonClicked.parentElement.parentElement.remove()
        updateTotal()
    })
}

var cartAdd = document.getElementsByClassName("cartAdd")
for (var i = 0; i< cartAdd.length; i++) {
    var button = cartAdd[i]
    button.addEventListener("click", addItemToCart)
} 

// 25:28 min mark ^^^^

//         var buttonClicked = tap.target
//         var product = buttonClicked.parentElement.parentElement
//         var itemName = product.getElementsByClassName("itemName")[0].innerText
//         var itemPrice = product.getElementsByClassName("itemPrice")[0].innerText
//         var itemImg = product.getElementsByClassName("itemImg")[0].src
//         addItemToCart(itemName, itemPrice, itemImg)
//     })
// }

// function addItemToCart(itemName, itemPrice, itemImg){
//     var newCartItem = document.createElement("tr")
//     newCartItem.classList.add("cartItem")
//     var cartBag = document.getElementsByClassName("cartBag")[0]
//     var cartItemNames = cartBag.getElementsByClassName("cartItemName")
//     for (var i = 0; i < cartBag.length; i++) {
//         if (cartItemNames[i].innerText == itemName) {
//             console.log("Item is already in the Cart")
//             return
//         }
//     }
    // -------35 min mark https://www.youtube.com/watch?v=YeFzkC2awTM&list=WL&index=4--------
//     var cartItemContents = `<td class="col-1"><img class="cartItemImg" src="${itemImg}" alt=""></td>
//     <td>
//         <h4 class="cartItemName">${itemName}</h4><input class="itemQty" type="number" value="1">
//     </td>
//     <td>
//         <h4 class="itemPrice">${itemPrice}</h4><button class="cartRemove">-</button>
//     </td>`
//     newCartItem.innerHTML = cartItemContents
//     cartBag.append(newCartItem)
// }

var qtyNum = document.getElementsByClassName("itemQty")
for (var i = 0; i < qtyNum.length; i++) {
    var input = qtyNum[i]
    input.addEventListener("change", qtyChanged)
}

function qtyChanged(e) {
    var input = e.target
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1
    }
    updateTotal()
}

function updateTotal() {
    var cartBag = document.getElementsByClassName("cartBag")[0]
    var cartItems = cartBag.getElementsByClassName("cartItem")
    var total = 0
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i]
        var itemPrice = cartItem.getElementsByClassName("itemPrice") [0]
        var itemQty = cartItem.getElementsByClassName("itemQty")[0]
        var price = parseFloat(itemPrice.innerText.replace("$",""))
        var qtyInputValue = itemQty.value
        total = total + (price * qtyInputValue)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName("cartTotal")[0].innerText = "$" + total
}

