export const slider = () => {
    const btn = document.querySelector('.fa-bars')
    const menu = document.querySelector('.slider')
    const about = document.querySelector('.about')
    const overlay = document.querySelector('.overlay')

    const CN_HIDDEN = 'hidden' 

    const buttonHandler = () => {
        menu.classList.toggle(CN_HIDDEN)

        if(about.className === 'about'){
            about.classList.add(CN_HIDDEN)
            overlay.classList.add(CN_HIDDEN)
        }
    }

    btn.addEventListener('click', buttonHandler)
}