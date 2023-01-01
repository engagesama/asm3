'use strict';
//const modal = document.querySelector('.viewmore');
var more=document.querySelector('.view-more',);
var less=document.querySelector('.view-less');
var about=document.querySelector('.project-info-1')

document.getElementById("viewmore").onmousemove = function() {
  
  more.classList.remove('hidden');
};

document.getElementById("viewmore").onmouseleave = function() {
  
  more.classList.add('hidden');
};
document.querySelector('.view-more').onclick = function () {
  more.classList.add('hide');
  less.classList.remove('hidden');
  about.classList.remove('hidden');
}
document.querySelector('.view-less').onclick = function () {
  more.classList.remove('hide');
  less.classList.add('hidden');
  about.classList.add('hidden');
}