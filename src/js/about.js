const KO = `SCENT는 Afro, Acid, Electronic, Funk를 기반으로 다양한 음악을 선보이는 팀이다. 우리는 간혹 음악을 들을 때면 그 당시의 풍경 혹은 향을 떠올리곤 한다. 'SCENT'라는 이름은 그들의 음악을 듣는 이들에게 그들의 향을 남기고자 하는 음악적인 목표를 제시한다.`
const EN = `SCENT is a team that creates a variety of music based on Afro, Acid, Electronic and Funk.
When we listen to music, we sometimes think of the scenery or scent of the moments that we heard the music before.
The name SCENT presents the musical goal of leaving their scent to their listeners.`

    const btn = document.querySelector('.fa-user')
    const container = document.querySelector('.about')
    const overlay = document.querySelector('.overlay')
    const bio = document.querySelector('.profileBio')
    const translate = document.querySelector('.translate')

    const names = document.querySelectorAll('.name')

    console.log(translate)

    const menu = document.querySelector('.slider')

    const CN_HIDDEN = 'hidden' 

    const buttonHandler = () => {
        container.classList.toggle(CN_HIDDEN)
        overlay.classList.toggle(CN_HIDDEN)
        bio.innerText = KO
        if(menu.className === 'slider'){
            menu.classList.add(CN_HIDDEN)
        }

        if(window.innerWidth <= 980){
            if(container.className === 'about'){
                names.forEach((name) => {
                    name.classList.add(CN_HIDDEN)
                })
            }else{
                names.forEach((name) => {
                    name.classList.remove(CN_HIDDEN)
                })
            }
        }

    }

    const translateHandler = () => {
        if(bio.innerText === KO){
            bio.innerText = EN
            translate.innerText = 'KOREAN'
        }else{
            bio.innerText = KO
            translate.innerText = 'ENGLISH'
        }
    }

    btn.addEventListener('click', buttonHandler)
    translate.addEventListener('click', translateHandler)