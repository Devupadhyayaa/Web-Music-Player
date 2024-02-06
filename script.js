const navbar = document.querySelector('#nav');
const scrollableContainer = document.querySelector('.left');

function func() {
    if (scrollableContainer.scrollTop > 50) {
        navbar.style.backgroundColor = "#053656"; // Change to your desired background color
    } else {
        navbar.style.backgroundColor = "transparent"; // Change to the default background color
    }
};
const downers = new Audio('music/Downersatdusk.mp3');
const japani = new Audio('music/Joota_Japani.mp3');
const ngl = new Audio('music/NGL.mp3');
const paisa = new Audio('music/paisaonmyminds.mp3');
const wohrat = new Audio('music/wohrat.mp3');

const play = document.getElementById('btn2');
const pre = document.getElementById('btn1');
const next = document.getElementById('btn3');

const songs = [
    { ele: downers, audioname: 'Downers At Dusk' },
    { ele: japani, audioname: 'Joota Japani' },
    { ele: ngl, audioname: 'Not Gonna Lie' },
    { ele: paisa, audioname: 'Paisa On My Mind' },
    { ele: wohrat, audioname: 'Woh Raat' },
];

let current = 0;
let currentsong = songs[current].ele;
const songName = document.querySelector('.contents span span');
// songName.innerHTML = songs[current].audioname;

for (const song of songs) {
    song.ele.addEventListener('ended',()=>{
        updatesong('next');
        playpause();
    })
}

play.addEventListener('click', () => {
    songName.innerHTML='';
    songName.innerHTML = songs[current].audioname;
    playpause();
})

next.addEventListener('click', () => {
    updatesong('next');
    playpause();
})

pre.addEventListener('click',()=>{
    updatesong('pre');
    playpause();
})

function updatesong(action) {

    currentsong.pause();
    currentsong.currentTime=0;

    if (action == 'next'){
        current++;
        if(current==songs.length){
            current=0;
        }
    }
    if(action=='pre'){
        current--;
        if(current<0){
            current=songs.length - 1;
        }
    }
    currentsong = songs[current].ele;
    songName.innerHTML = songs[current].audioname;
}

function playpause(){
    if (currentsong.paused) {
        currentsong.play();
    }
    else {
        currentsong.pause();
    }
}