export const slider = () => {
    const btn = document.querySelector('.fa-bars')
    const menu = document.querySelector('.slider')
    const about = document.querySelector('.about')
    const overlay = document.querySelector('.overlay')
    const name = document.querySelector('.name')

    const CN_HIDDEN = 'hidden' 
    
    if(window.innerWidth <= 980){
        menu.classList.remove(CN_HIDDEN)
        // name.classList.remove(CN_HIDDEN)

    }else{
        menu.classList.add(CN_HIDDEN)
        // name.classList.add(CN_HIDDEN)
    }

    const buttonHandler = () => {
        menu.classList.toggle(CN_HIDDEN)

        if(about.className === 'about'){
            about.classList.add(CN_HIDDEN)
            overlay.classList.add(CN_HIDDEN)
        }
    }

    // window.addEventListener('resize',(event)=>{
    //     if(window.innerWidth <= 980){
    //         menu.classList.remove(CN_HIDDEN)
    //     }else{
    //         menu.classList.add(CN_HIDDEN)
    //     }
    // })
    btn.addEventListener('click', buttonHandler)
}