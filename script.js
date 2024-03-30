"use strict";

const links = document.querySelectorAll('.link');
const drops = document.querySelectorAll('.display');
const arrows = document.querySelectorAll('.arrow');
const menu = document.querySelector(".tabs")
const close = document.querySelector(".close")
const tabs = document.querySelector(".menu")
const nav = document.querySelector("nav")

links.forEach((link, idx)=>{
  link.addEventListener("click", ()=> {

    links.forEach((otherLink, idx)=>{
      if (otherLink !== link) {
        otherLink.nextElementSibling.classList.remove("display")
        otherLink.firstElementChild.classList.remove("rotate")
        otherLink.lastElementChild.classList.remove("rotate")
      } 
    })

    link.nextElementSibling.classList.toggle("display")
    link.firstElementChild.classList.toggle("rotate")
    link.lastElementChild.classList.toggle("rotate")
    
  })
})

tabs.addEventListener("click", ()=> {
  close.classList.toggle("close");
  menu.classList.toggle("close");
  nav.classList.toggle("flex")
})

