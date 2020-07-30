// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";

if (document.querySelector('.slide')) {
    document.querySelector('#header-wrap-bottom').classList.add('header__wrap_big-indent-bottom')
}


let btnCatalogProduct = document.querySelector('#catalog-product-btn');
if (btnCatalogProduct) {
    let catalogProductList = document.querySelector('#catalog-product-list')
    btnCatalogProduct.addEventListener('click', () => {
        catalogProductList.classList.toggle('none');
        btnCatalogProduct.classList.toggle('catalog-product__btn-close')
    })
}

if (document.querySelector('.slide')) {
    let btnSlide1 = document.querySelector('#slide-btn-1')
    let btnSlide2 = document.querySelector('#slide-btn-2')
    let btnSlide3 = document.querySelector('#slide-btn-3')

    let boxSlide1 = document.querySelector('#slide-box-1')
    let boxSlide2 = document.querySelector('#slide-box-2')
    let boxSlide3 = document.querySelector('#slide-box-3')

    btnSlide1.addEventListener('click', () => {
        showSlide(btnSlide1, btnSlide2, btnSlide3, boxSlide1, boxSlide2, boxSlide3);
    })

    btnSlide2.addEventListener('click', () => {
        showSlide(btnSlide2, btnSlide1, btnSlide3, boxSlide2, boxSlide1, boxSlide3);
    })
    btnSlide3.addEventListener('click', () => {
        showSlide(btnSlide3, btnSlide2, btnSlide1, boxSlide3, boxSlide2, boxSlide1);
    })


    function showSlide(btnShow, btnOneHide, btnTwoHide, boxShow, boxOneHide, boxTwoHide) {
        btnShow.classList.add('slide__btn-switch_selected')
        btnOneHide.classList.remove('slide__btn-switch_selected')
        btnTwoHide.classList.remove('slide__btn-switch_selected')
        boxShow.classList.remove('none')
        boxOneHide.classList.add('none')
        boxTwoHide.classList.add('none')
    }
}


if (document.querySelector('.services')) {
    let btnDelivery = document.querySelector('#services-btn-delivery')
    let btnGurantee = document.querySelector('#services-btn-guarantee')
    let btnCredit = document.querySelector('#services-btn-credit')

    let boxDelivery = document.querySelector('#services-box-delivery')
    let boxGurantee = document.querySelector('#services-box-guarantee')
    let boxCredit = document.querySelector('#services-box-credit')

    btnDelivery.addEventListener('click', () => {
        showServices(btnDelivery, btnGurantee, btnCredit, boxDelivery, boxGurantee, boxCredit);
    });

    btnGurantee.addEventListener('click', () => {
        showServices(btnGurantee, btnDelivery, btnCredit, boxGurantee, boxDelivery, boxCredit);
    })

    btnCredit.addEventListener('click', () => {
        showServices(btnCredit, btnGurantee, btnDelivery, boxCredit, boxGurantee, boxDelivery);
    })

    function showServices(btnShow, btnOneHide, btnTwoHide, boxShow, boxOneHide, boxTwoHide) {
        btnShow.classList.add('services__btn_selected')
        btnOneHide.classList.remove('services__btn_selected')
        btnTwoHide.classList.remove('services__btn_selected')
        boxShow.classList.remove('none')
        boxOneHide.classList.add('none')
        boxTwoHide.classList.add('none')
    }
}


if (document.querySelector('.contact')) {
    let messageWindow = document.querySelector('#contact-window-message')
    document.querySelector('#contact-btn-message').addEventListener('click', ()=> {
        messageWindow.classList.remove('none')
    })
    document.querySelector('#window-message-btn-close').addEventListener('click', ()=> {
        messageWindow.classList.add('none')
    })
    
    let mapBig = document.querySelector('#contact-map-big')
    document.querySelector('#contact-map-small').addEventListener('click', ()=> {
        mapBig.classList.remove('none')
    })
    document.querySelector('#map-btn-close').addEventListener('click', ()=> {
        mapBig.classList.add('none')
    })
}