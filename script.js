let currentImg = document.querySelector('.current-image');
let nextBtn = document.querySelector('.btn-next');
let prevBtn = document.querySelector('.btn-prev');

let itemStatus = document.querySelector('.number-of-items p');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');

let cartBtn = document.querySelector('.cart');
let viewCart= document.querySelector('.view-cart');
let cartContent = document.querySelector('.cart-content');
let addToCart = document.querySelector('.add-to-cart');
let checkoutContent = document.querySelector('.checkout-content');

let currentNum = 1;
let itemNum = 0;
let purchaseTitleContent = document.querySelector('.product-info h2');
let singlePrice = 125;
let finalPrice = singlePrice * itemNum;
let menuBtn = document.querySelector('.menu');
let closeBtn = document.querySelector('.close-btn');
let menuItems = document.querySelector('.menu-items');
let menuBox = document.querySelector('.menu-box');

prevBtn.addEventListener('click', function() {
    
    if(currentNum === 1) {
        currentNum = 1;
    }
    else {
        currentNum--;
    }
    currentImg.src = 'images/image-product-' + currentNum + '.jpg';
})

nextBtn.addEventListener('click', function() {
   
    if(currentNum === 4) {
        currentNum = 4;
    }
    else {
        currentNum++;
    }
    currentImg.src = 'images/image-product-' + currentNum + '.jpg';
})


minus.addEventListener('click', function() {
    if (itemNum == 0) {
        itemNum = 0;
    }
    else {
        itemNum--;
    }

    itemStatus.innerText = itemNum;
    finalPrice = singlePrice * itemNum;
})

plus.addEventListener('click', function() {
    
    itemNum++;
    itemStatus.innerText = itemNum;
    finalPrice = singlePrice * itemNum;
})

cartBtn.addEventListener('click', function() {

    viewCart.classList.toggle('show');
})

let checkout = false;

function addNewItem() {

    if (cartContent.innerText == 'your cart is empty') {
        cartContent.innerHTML = '';
    }
    
    let newPurchase = document.createElement('div');
    let cartImg = document.createElement('img');
    let purchaseTitle = document.createElement('h3');
    let purchasePrice = document.createElement('p');
    let binBtn = document.createElement('a');
    let bin = document.createElement('img');
    let titleAndprice = document.createElement('div');

    cartContent.appendChild(newPurchase);
    newPurchase.appendChild(cartImg);
    titleAndprice.appendChild(purchaseTitle);
    titleAndprice.appendChild(purchasePrice);
    newPurchase.appendChild(titleAndprice);
    newPurchase.appendChild(binBtn);
    binBtn.appendChild(bin);

    newPurchase.classList.add('new-purchase');
    titleAndprice.classList.add('title-and-price');
    cartImg.src = currentImg.src;
    bin.src = 'images/icon-delete.svg';
    bin.classList.add('bin');
    purchaseTitle.innerText = purchaseTitleContent.innerText;
    //purchasePrice.innerText = '$' + singlePrice + ' x ' + itemNum + ' $' +  finalPrice;
    purchasePrice.innerHTML = '$' + singlePrice + ' x ' + itemNum + '<b> $' +  finalPrice + '</b>';

    if (!checkout) {

        checkout = true;
        let checkOutBtn = document.createElement('button');
        let checkoutText = document.createTextNode('Checkout');

        checkOutBtn.appendChild(checkoutText);
        checkOutBtn.classList.add('check-out-btn');
        checkoutContent.appendChild(checkOutBtn);
    }


    //remove added item from cart
    binBtn.addEventListener('click', function() {
        let toRemove =event.target.parentElement.parentElement;

        toRemove.parentElement.removeChild(toRemove);


        if(cartContent.innerText == '') {
            cartContent.innerHTML = '<p>your cart is empty</p>';

            checkoutContent.innerHTML = '';
            checkout = false;
        }
    })
}

addToCart.addEventListener('click', addNewItem);


menuBtn.addEventListener('click', function() {
    menuItems.classList.toggle('open');
    menuBox.style.pointerEvents = 'auto';
    menuBox.style.opacity = '1';
});

closeBtn.addEventListener('click', function() {
    menuItems.classList.toggle('open');

    setTimeout(
        function() {
    menuBox.style.pointerEvents = 'none';
    menuBox.style.opacity = '0';
        },700
    )
});

let images = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg'];

let imgOptions = document.querySelectorAll('.image-options img');

for (let i = 0; i < imgOptions.length; i++) {

    imgOptions[i].addEventListener('click', function() {

        currentImg.src = images[i];

        for(let ii = 0; ii < imgOptions.length; ii++) {
            imgOptions[ii].classList.remove('active');
            imgOptions[i].classList.add('active');
        }
    })
}

let imgViewPopUp = document.querySelector('.image-view-pop-up');
let popUpClose = document.querySelector('.pop-up-close');
let popUpBtnPrev = document.querySelector('.btn-prev-pop-up');
let popUpBtnnext = document.querySelector('.btn-next-pop-up');
let currentImgPopUp = document.querySelector('.current-image-pop-up');
let imgPopUpOptions = document.querySelectorAll('.image-options-pop-up img');
let popUpActive = 0;

let currentNumPop = 1;

currentImg.addEventListener('click', function() {

    imgViewPopUp.classList.remove('hide-pop-up');
    imgViewPopUp.classList.add('show-pop-up');
});

popUpClose.addEventListener('click', function() {

    imgViewPopUp.classList.remove('show-pop-up');
    imgViewPopUp.classList.add('hide-pop-up');
});

popUpBtnPrev.addEventListener('click', function() {
     
    if(currentNumPop === 1) {
        currentNumPop = 1;
    }
    else {
        currentNumPop--;
        for(let k = 0; k < imgPopUpOptions.length; k++) {
            imgPopUpOptions[k].classList.remove('active-pop-up');
        }
        popUpActive--;
        imgPopUpOptions[popUpActive].classList.add('active-pop-up');
    }
    currentImgPopUp.src = 'images/image-product-' + currentNumPop + '.jpg';
});

popUpBtnnext.addEventListener('click', function() {

    if(currentNumPop === 4) {
        currentNumPop = 4;
    }
    else {
        currentNumPop++;
        for(let k = 0; k < imgPopUpOptions.length; k++) {
            imgPopUpOptions[k].classList.remove('active-pop-up');
        }
        popUpActive++;
        imgPopUpOptions[popUpActive].classList.add('active-pop-up');
    }
    currentImgPopUp.src = 'images/image-product-' + currentNumPop + '.jpg';
});










