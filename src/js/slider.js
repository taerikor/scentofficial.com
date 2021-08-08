export const slider = () => {
    const btn = document.querySelector('.fa-bars')
    const menu = document.querySelector('.slider')

    const CN_HIDDEN = 'hidden' 

    const buttonHandler = () => {
        menu.classList.toggle(CN_HIDDEN)
    }

    btn.addEventListener('click', buttonHandler)
}