var t=document.querySelector(".cats-slider__wrapper"),n=t.querySelector(".slider-toggle__button"),l=t.querySelector(".slider-toggle__stick"),u=t.querySelector(".cats-slider__cat-before"),d=t.querySelector(".cats-slider__cat-after");n.onmousedown=function(o){o.preventDefault();let r=o.clientX-n.getBoundingClientRect().left;document.addEventListener("mousemove",i),document.addEventListener("mouseup",s);function i(c){let e=c.clientX-r-t.getBoundingClientRect().left+n.getBoundingClientRect().width/2;e<0&&(e=0),e>t.offsetWidth&&(e=t.offsetWidth),e=Math.round(e/t.getBoundingClientRect().width*100),n.style.left=`${e}%`,l.style.left=`${e}%`,u.style.width=`${e}%`,d.style.width=`${100-e}%`}function s(){document.removeEventListener("mouseup",s),document.removeEventListener("mousemove",i)}};n.ondragstart=function(){return!1};
