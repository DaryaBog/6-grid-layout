const budger = document.querySelector('.burger__btn')
const budgerMenu = document.querySelector('.header__burger')
budger.addEventListener('click', event =>{
    // if(budgerMenu.classList.has('open')){
    //     budgerMenu.classList.remove('open')
    // }
    // else{}
    // budgerMenu.classList.add('open')

    budgerMenu.classList.contains('open')?budgerMenu.classList.remove('open'):budgerMenu.classList.add('open')
})