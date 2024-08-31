
if(localStorage.getItem('dark')){
    document.body.className = localStorage.getItem('dark');
}
if(localStorage.getItem('sun')){
    document.querySelector('.moon').innerHTML ='<i class="fa-solid fa-sun"></i>';
}else{
    document.querySelector('.moon').innerHTML ='<i class="fa-solid fa-moon"></i>';
}

window.addEventListener('click',e=>{
    if(e.target.className == 'fa-solid fa-moon'){
        localStorage.setItem('dark','dark-theme');
        localStorage.setItem('sun','fa-solid fa-sun');
        document.body.classList.toggle(localStorage.getItem('dark'));
        document.querySelector('.moon').innerHTML ='<i class="fa-solid fa-sun"></i>';
                    
    }else if(e.target.className == 'fa-solid fa-sun'){ 
        document.body.classList.toggle(localStorage.getItem('dark'));
        document.querySelector('.moon').innerHTML ='<i class="fa-solid fa-moon"></i>';
        localStorage.removeItem('dark');
        localStorage.removeItem('sun');
    }        
})