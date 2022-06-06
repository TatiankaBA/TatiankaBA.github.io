const car = document.querySelector('.car-img'),
     assembledCarInscription = document.querySelector('.assembled-car'),
     carCircles1 = document.querySelector('.circle-1');
     carCircles2 = document.querySelector('.circle-2');
     carCircles3 = document.querySelector('.circle-3');
     carCircles4 = document.querySelector('.circle-4');
     carCircles5 = document.querySelector('.circle-5');

     carCircles1.addEventListener('click', () => {
        Ecwid.Cart.addProduct(469762260, checkcart);
        checkcart();
    });
    carCircles2.addEventListener('click', () => {
        Ecwid.Cart.addProduct(469762259, checkcart);
    });
    carCircles3.addEventListener('click', () => {
        Ecwid.Cart.addProduct(469762265, checkcart);
    });
    carCircles4.addEventListener('click', () => {
        Ecwid.Cart.addProduct(469762266, checkcart);
    });
    carCircles5.addEventListener('click', () => {
        Ecwid.Cart.addProduct(469762267, checkcart);
    });

    function checkcart() { 
        Ecwid.Cart.get((cart)=>{
            if (cart.productsQuantity !== 5) {
               return;
            }
            const items = cart.items;
            if (items.length == 5) {
                car.classList.add('inactive');                
                assembledCarInscription.classList.add('active');
            }
        });
    }
    
