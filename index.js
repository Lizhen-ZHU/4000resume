portfolio1.onclick=function(){
  portfolioBar.className='bar state-1'
}
portfolio2.onclick=function(){
  portfolioBar.className='bar state-2'
}
portfolio3.onclick=function(){
  portfolioBar.className='bar state-3'
}
// ------------------nav bar----------------

window.onscroll = function(scrolled){
  if (window.scrollY > 20){
    topnavbar.classList.add('sticky')
  }else{
      topnavbar.classList.remove('sticky')
  }
}


let liTags = document.querySelectorAll('nav.topnavbar > ul > li')
for(let i=0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(x){
  x.currentTarget.classList.add('active')

  }
  liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('active')
  }
}
// ------------------nav bar----------------

// -------------------scoll to ---------------


let aTags = document.querySelectorAll('nav.topnavbar > ul > li > a')
for(let i=0; i<aTags.length; i++){
aTags[i].onclick = function(x){
  x.preventDefault();
  let a = x.currentTarget
  let href = a.getAttribute('href') //#siteAbout
  let element = document.querySelector(href)
  let top = element.offsetTop //距离顶部距离
  window.scrollTo(0, top - 80)
}

}



// -------------------scoll to ---------------
