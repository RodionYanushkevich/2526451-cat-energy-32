var t=document.querySelector(".cats-slider__wrapper"),o=t.querySelector(".slider-toggle__button"),r=t.querySelector(".slider-toggle__stick"),u=t.querySelector(".cats-slider__cat-before"),d=t.querySelector(".cats-slider__cat-after");o.onmousedown=function(n){n.preventDefault();let c=n.clientX-o.getBoundingClientRect().left;document.addEventListener("mousemove",i),document.addEventListener("mouseup",s);function i(l){let e=l.clientX-c-t.getBoundingClientRect().left+o.getBoundingClientRect().width/2;e<0&&(e=0),e>t.offsetWidth&&(e=t.offsetWidth),e=e/t.getBoundingClientRect().width*100,o.style.left=`${e}%`,r.style.left=`${e}%`,u.style.width=`${e}%`,d.style.width=`${100-e}%`}function s(){document.removeEventListener("mouseup",s),document.removeEventListener("mousemove",i)}};
