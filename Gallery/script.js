const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e){
    // mengecek apakah yang di klik adalah thumb
    if( e.target.className === 'thumb'){
        jumbo.src = e.target.src;
    }
});