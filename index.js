const btnContainer = document.querySelector('.btn_container')
const button = btnContainer.querySelectorAll('span')
const source = document.getElementById('first_src')
const video = document.getElementById('video_js')
const musicBtn = document.querySelector('.modal_btn')
const musicModal = document.querySelector('.modal')
const musicCloseBtn = document.querySelector('.modal_close')

button.forEach(item => item.addEventListener('click',(e) => {
    const buttonId = e.target.id
        if(buttonId === 'second_btn'){
        source.setAttribute('src', 'src/video/bada.mp4');
        video.load();
    }
    if(buttonId === 'third_btn'){
        source.setAttribute('src', 'src/video/island.mp4');
        video.load();
    }
    if(buttonId === 'fourth_btn'){
        source.setAttribute('src', 'src/video/jaangnaan.mp4');
        video.load();
    }
    if(buttonId === 'fifth_btn'){
        source.setAttribute('src', 'src/video/nmsh.mp4');
        video.load();
    }
    if( buttonId === 'first_btn'){
        source.setAttribute('src', 'src/video/24k.mp4');
        video.load();
    }
}))

musicBtn.addEventListener('click',() => {
    musicModal.classList.remove('hidden')
})
musicCloseBtn.addEventListener('click',() => {
    musicModal.classList.add('hidden')
})