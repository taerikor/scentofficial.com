const range = document.querySelector('.range')
const per = document.querySelector('.per_js')
const source = document.getElementById('first_src')
const video = document.getElementById('video_js')

const rangeHandler = (e) => {
    const value = e.target.value
    per.innerHTML = `${e.target.value}%`
    if(value >= 20 && value < 40){
        source.setAttribute('src', 'src/video/bada.mp4');
        video.load();
    }
    if(value >= 40 && value < 60){
        source.setAttribute('src', 'src/video/island.mp4');
        video.load();
    }
    if(value >= 60 && value < 80){
        source.setAttribute('src', 'src/video/jaangnaan.mp4');
        video.load();
    }
    if(value >= 80){
        source.setAttribute('src', 'src/video/nmsh.mp4');
        video.load();
    }
    if( value < 20 ){
        source.setAttribute('src', 'src/video/24k.mp4');
        video.load();
    }
}


range.addEventListener('input',rangeHandler)







// const emptyButton = document.querySelectorAll('.far')


// const buttonHandle = (e) => {
//    if(e.target.className === "far fa-circle"){
//     e.target.className = "fas fa-circle"
//    }else if( e.target.className === "fas fa-circle"){
//     e.target.className = "far fa-circle"
//    }
// }


// emptyButton.forEach(btn => btn.addEventListener('click',buttonHandle))
