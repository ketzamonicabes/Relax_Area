const effect_2=document.getElementById('effect_2');
const music_comeback = document.getElementById('music_comeback');


music_comeback.addEventListener('mouseenter',function(){   
    music_comeback.style.backgroundColor="#363636";
    effect_2.style.paddingLeft="20px";
    effect_2.style.opacity="1";
    
});
music_comeback.addEventListener('mouseleave',function(){  
    effect_2.style.paddingLeft="";
    effect_2.style.opacity="";
    music_comeback.style.backgroundColor="";
});

const listmusic = document.getElementsByClassName('music-play');
const arraymusic = [];
const listbutton = document.getElementsByClassName('minh');
const arraybutton = [];
const iframe_music= document.getElementById('iframe-music');
const musiccollection=["https://www.youtube.com/embed/apJa-8GSrfs?autoplay=1&mute=1","https://www.youtube.com/embed/Fb1-Diyzvtw?autoplay=1&mute=1 ","https://www.youtube.com/embed/nAa28-8fWC8?autoplay=1&mute=1 ","https://www.youtube.com/embed/xIxmP8Rqk1E?autoplay=1&mute=1 ","https://www.youtube.com/embed/ox4tmEV6-QU?autoplay=1&mute=1","https://www.youtube.com/embed/v0MfIrhmmM4?autoplay=1&mute=1","https://www.youtube.com/embed/bFooS12HHWw?autoplay=1&mute=1","https://www.youtube.com/embed/O_T1boJt4pU?autoplay=1&mute=1","https://www.youtube.com/embed/Zy5isDXVCvs?autoplay=1&mute=1","https://www.youtube.com/embed/op1QYwRAQpI?autoplay=1&mute=1"]

for (let i=0;i<listmusic.length;i++){
    arraybutton.push(listbutton[i]);
}

for (let i=0;i<listmusic.length;i++){
    arraymusic.push(listmusic[i]);
}
function playmusic(event){
    const target = event.currentTarget;
    const index = arraymusic.indexOf(target);
    console.log(index);
    for (let i=0;i<musiccollection.length;i++){
        if (i=== index){
            iframe_music.setAttribute('src',musiccollection[i]);
        }
    }
}


function changecolor(event){
    event.target.style.backgroundColor="#363636";
    const index = arraymusic.indexOf(event.target);
    for (let i=0;i<arraybutton.length;i++){
        if (i=== index){
            arraybutton[i].style.opacity="1";
            arraybutton[i].style.marginTop="100px";
        }
    }
}
function comebackcolor(event){
    event.target.style.backgroundColor="";
    const index = arraymusic.indexOf(event.target);
    for (let i=0;i<arraybutton.length;i++){
        if (i=== index){
            arraybutton[i].style.opacity="";
            arraybutton[i].style.marginTop="";
        }
    }
}

for (let i=0;i<arraymusic.length;i++){
    arraymusic[i].addEventListener('mouseenter',changecolor);
    arraymusic[i].addEventListener('mouseleave',comebackcolor);
    arraymusic[i].addEventListener('click',playmusic);
}