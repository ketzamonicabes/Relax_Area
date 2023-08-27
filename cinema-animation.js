const cineappear = document.getElementById('cine-appear');
const offcanva = document.getElementById('offcanva');
const cinemood= document.getElementById('cine-mood');
const listintro= document.getElementsByClassName('cinema-intro');
cineappear.addEventListener('click',function(){
    if (offcanva.style.height!=="130px"){
        offcanva.style.height="130px";
    } else {
        offcanva.style.height="";
    }
})
cinemood.addEventListener('click',function(){    
    for(let i=0;i<listintro.length;i++){
        if (listintro[i].style.background!=="linear-gradient(to right, transparent, rgba(44, 115, 197, 0.753), transparent)"){
        listintro[i].style.background="linear-gradient(to right, transparent, rgba(44, 115, 197, 0.753), transparent)";
    }
else if (listintro[i].style.background==="linear-gradient(to right, transparent, rgba(44, 115, 197, 0.753), transparent)"){
        listintro[i].style.background="";
}
    }
})
const listCine = document.querySelector('.list-cine');
function autoScroll() {
    if (listCine.scrollLeft!==12294){
    const scrollStep = 1366; 
    listCine.scrollLeft += scrollStep;
    }else {
        listCine.scrollLeft -= 12294;
    }
}
setInterval(autoScroll, 3000); 


