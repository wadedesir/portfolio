let clear = ['.nHome', '.nInfo', '.nSuitcase', '.nCode', '.nContact']
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

window.onscroll = function () {
    if (pageYOffset >= 600) {
        document.querySelector('.leftBanner').style.display = "flex";
        // document.querySelector('.rightBanner').style.display = "flex";
    }
    else {
       document.querySelector('.leftBanner').style.display = "none";
    }

    if(pageYOffset >= 600){
      document.querySelector('.rightBanner').style.display = "flex";
    }
    else{
      document.querySelector('.rightBanner').style.display = "none";
    }


    // if ((pageYOffset >= getOffset(document.querySelector('#home')).top) && (pageYOffset < getOffset(document.querySelector('#about')).top)){
    //   clear.forEach( nav => {
    //     document.querySelector(nav).style.color = 'white'
    //   });
    //   console.log(getOffset(document.querySelector('#home')).top);
    //   console.log( 'offset: ' + pageYOffset);
    //   document.querySelector('.nHome').style.color = 'orange'
    // }else if ((pageYOffset >= getOffset(document.querySelector('#about')).top) && (pageYOffset < getOffset(document.querySelector('#experience')).top)){
    //   clear.forEach( nav => {
    //     document.querySelector(nav).style.color = 'white'
    //   });
    //   console.log(getOffset(document.querySelector('#about')).top);
    //   console.log(pageYOffset);
    //   document.querySelector('.nInfo').style.color = 'orange'
    //
    // }else if ((pageYOffset >= getOffset(document.querySelector('#experience')).top) && (pageYOffset < getOffset(document.querySelector('#portfolio')).top)){
    //   clear.forEach( nav => {
    //     document.querySelector(nav).style.color = 'white'
    //   });
    //   console.log(getOffset(document.querySelector('#experience')).top);
    //   console.log(pageYOffset);
    //   document.querySelector('.nSuitcase').style.color = 'orange'
    //
    // }else if ((pageYOffset >= getOffset(document.querySelector('#portfolio')).top) && (pageYOffset < getOffset(document.querySelector('#contact')).top)){
    //   clear.forEach( nav => {
    //     document.querySelector(nav).style.color = 'white'
    //   });
    //   console.log(getOffset(document.querySelector('#portfolio')).top);
    //   console.log(pageYOffset);
    //   document.querySelector('.nCode').style.color = 'orange'
    // }else if (pageYOffset >= getOffset(document.querySelector('#contact')).top){
    //   clear.forEach( nav => {
    //     document.querySelector(nav).style.color = 'white'
    //   });
    //   console.log(getOffset(document.querySelector('#contact')).top);
    //   console.log(pageYOffset);
    //   document.querySelector('.nContact').style.color = 'orange'
    // }
};



console.log(getOffset(document.querySelector('#about')).top);
