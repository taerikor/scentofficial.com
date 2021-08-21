import { slider } from './slider';
// import { about } from './about';

const CN_HIDDEN = 'hidden' 


const colors = ["#d1ce21"];
const link = [
    "https://youtu.be/SRn9vmSJg6c",
    "https://youtu.be/VdCiydX5aOg",
    "https://youtu.be/iBWt59CKoB4",
    "https://youtu.be/okW4CsUaPK8",
    "https://youtu.be/t5RGd9AEY2U"
]
const text = [
    "ONCE YOU ARE GIVEN CAN NOTHING BE CHANGED",
    "GOT ME FEELIN' LIKE",
    "NUMB",
    "EXIT",
    "POLYMORPH"
]

const numBalls = 5;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("a");
    let container = document.createElement("div")
    let name = document.createElement('span')
    name.classList.add("name")
    name.classList.add("hidden")
    container.classList.add('container')
    container.append(name)
    container.append(ball)
    ball.classList.add("ball");
    name.innerText = text[i]
    ball.href = link[i]
    ball.target = "_blank"
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.style.left = `${Math.floor(Math.random() * 70)}vw`;
    container.style.top = `${Math.floor(Math.random() * 70)}vh`;
    container.style.transform = `scale(${Math.random()})`;
    ball.style.width = `2em`;
    ball.style.height = ball.style.width;

    balls.push(container);
    document.body.append(container);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

    el.addEventListener("mouseover",()=>{
        anim.pause()
        document.querySelector(".overlay").classList.remove("hidden")
        el.childNodes[0].classList.remove("hidden")
    })

    el.addEventListener("mouseout",() => {
        anim.play()
        document.querySelector(".overlay").classList.add("hidden")
        if(window.innerWidth > 980)
        el.childNodes[0].classList.add("hidden")
    })
});

const names = document.querySelectorAll('.name')
if(window.innerWidth <= 980){
    names.forEach((name) => {
        name.classList.remove(CN_HIDDEN)
    })
}



// about();