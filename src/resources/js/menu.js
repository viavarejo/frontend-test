document.querySelector('.open-menu').onclick = function() {
    document.documentElement.classList.add('active-menu');
}

document.querySelector('.close-menu').onclick = function(){
    document.documentElement.classList.remove('active-menu');
}

document.documentElement.onclick = function(event){
    if(event.target === document.documentElement){
        document.documentElement.classList.remove('active-menu');
    }
}