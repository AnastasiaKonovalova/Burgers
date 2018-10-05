const navButton = document.querySelector('#hamburgerMenuBtn');
const nav = document.querySelector('#navigation');
const closeBtn = document.querySelector('#navigationClose');

navButton.addEventListener('click', function(btn){
    btn.preventDefault();
    nav.style.display = 'block'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    nav.style.display = 'none'
    closeBtn.style.display = 'none'
})

const ingredientsClose = document.querySelector('#ingredientsClose');
// var b = ingredientsClose.className;
// console.log(b);
// var a = ingredientsClose.parentNode.className;
// console.log(a)

// ingredientsClose.addEventListener('click', function(){
//     console.log(ingredientsClose.parentNode.classList);
//     ingredientsClose.parentNode.classList.remove('show');
//     console.log(ingredientsClose.parentNode.classList);
    // ingredientsClose.parentNode.classList.add('show');
    // console.log(ingredientsClose.parentNode.classList);

})