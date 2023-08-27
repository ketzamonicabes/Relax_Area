// phần đầu ko đụng vào warning 
document.addEventListener("scroll", function() {
    let scrollValue = window.scrollY;
    let headerPage = document.querySelector(".headerpage");
    let windowHeight =  scrollValue-643 ;  
    if (scrollValue <= windowHeight) {
        headerPage.style.marginLeft = "20px";
        headerPage.style.marginRight = "30px";   
    }
    else {
        let marginTop = -scrollValue * 0.5; /* Điều chỉnh tốc độ hiệu ứng */
        headerPage.style.marginLeft =   marginTop+61 + "px";
        headerPage.style.marginRight =  marginTop+71 + "px";       
    }
});
// try 
function updateClock() { 
function format(component) {
    return component < 10 ? "0" + component : component;
}
    const hour = document.querySelector(".hour");
    const minuteSecond = document.querySelector(".minute");
    const datecurrent = document.querySelector(".date");
    const now = new Date();
    const hournow = now.getHours();
    const minute =now.getMinutes();
    const second = now.getSeconds();
    const date = now.toLocaleDateString();

    const hourHTML = `${format(hournow)}`;
    hour.innerHTML = hourHTML;
    const minuteHTML = `${minute} : ${format(second)}`;
    minuteSecond.innerHTML= minuteHTML;
    const dateHTML = `${date}`;
    datecurrent.innerHTML= dateHTML;
}
setInterval(updateClock, 1000);

updateClock();


const big1 = document.getElementById('big1');
const effect = document.getElementById('effectid');
const letter=document.getElementById('green');
big1.addEventListener('mouseenter', function(){
    effect.style.paddingLeft="30px";
    effect.style.opacity="1";
    big1.style.boxShadow="10px 20px 20px  rgba(55, 184, 119, 0.76)";
    letter.style.color="#1ED760";
});
big1.addEventListener('mouseleave',function(){
    effect.style.paddingLeft="";
    effect.style.opacity="";
    big1.style.boxShadow="";
    letter.style.color="";
});

const big6 =document.getElementById('big6');
const effect6= document.getElementById('cinema');
const effect_1=document.getElementById('effectid2');


big6.addEventListener('mouseenter',function(){
    effect6.style.color="red";
    effect_1.style.paddingLeft="10px";
    effect_1.style.opacity="1";
    big6.style.boxShadow="10px 20px 20px rgba(122, 24, 24, 0.836)";
});
big6.addEventListener('mouseleave',function(){
    effect6.style.color="";
    effect_1.style.paddingLeft="";
    effect_1.style.opacity="";
    big6.style.boxShadow="";
});



