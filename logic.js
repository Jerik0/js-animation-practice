'use strict';

let b = document.getElementById('bars-container').childNodes;

document.addEventListener('keydown', (e) => {
  switch(e.which) {
    case 81: { //q
      addClass(1);
    } break;
    case 87: { //w
      addClass(3);
    } break;
    case 69: { //e
      addClass(5);
    } break;
    case 82: { //r
      addClass(7);
    } break;
    default: {
      console.log(e.which);
    }
  }
});

const addClass = (i) => {
  b[i].classList.toggle('contract');
  setElementHeight(b[i]);
  b[i].classList.toggle('expand');
};

let bars = document.querySelectorAll('.bar');
console.log(bars);

bars.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('contract');
    console.log(e.style.height);
    setElementHeight(e);
    e.classList.toggle('expand');
  })
});

const setElementHeight = (e) => {
  if(e.classList.contains('contract')) {
    e.style.height = "0";
    e.style.overflow = "hidden";
  } else {
    e.style.height = "100%";
    e.style.overflow = "visible";
  }
};
