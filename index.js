const btnContainer = document.querySelector('.btn_container')
const button = btnContainer.querySelectorAll('span')
const source = document.getElementById('first_src')
const video = document.getElementById('video_js')
const musicBtn = document.querySelector('.music_btn')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal_close')
const aboutBtn = document.querySelector('.about_btn')
const aboutContent = document.querySelector('.about_content')
const musicContent = document.querySelector('.music_content')

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
    modal.classList.remove('hidden')
    musicContent.classList.remove('hidden')
    aboutContent.classList.add('hidden')
    
})
modalCloseBtn.addEventListener('click',() => {
    modal.classList.add('hidden')
})
aboutBtn.addEventListener('click', () => {
    console.log('hello')
    modal.classList.remove('hidden')
    aboutContent.classList.remove('hidden')
    musicContent.classList.add('hidden')

})