let photoGlow = 5
let glowPhase = 'grow'

window.onscroll = function () {
    if (pageYOffset >= 200) {
        document.querySelector('.leftBanner').style.display = "flex";
    } else {
       document.querySelector('.leftBanner').style.display = "none";
    }
};

// setInterval( () => { glow() }, 130);
//
// function glow(){
//   (glowPhase === 'grow') ? photoGlow += 5 : photoGlow -= 5
//   document.querySelector('.headerLeft').style.filter = `drop-shadow(-1px 1px ${photoGlow}px orange)`
//   glowPhase = (photoGlow > 20) ? 'shrink' : (photoGlow < 5) ? 'grow' : glowPhase
// }
