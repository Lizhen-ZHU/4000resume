portfolio1.onclick = function() {
  portfolioBar.className = 'bar state-1'
}
portfolio2.onclick = function() {
  portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function() {
  portfolioBar.className = 'bar state-3'
}
// ------------------nav bar----------------
//添加offset类----向上跳行为--
let specialTags = document.querySelectorAll('[data-x]')
for(let i =0;i<specialTags.length; i++){
specialTags[i].classList.add('offset')
}

// -----------
setTimeout(function(){
  findClosest()
},1000)

window.onscroll = function(scrolled) {
  if (window.scrollY > 20) {
    topnavbar.classList.add('sticky')
  } else {
    topnavbar.classList.remove('sticky')
  }
findClosest()
}


function findClosest(){

  // ---滑动时高亮当前标签的navbar--
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
for(let i =1;i<specialTags.length; i++){
  //当前标签的top减当前滑动的距离
  if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
    minIndex = i
  }
}
//1.找到当前页面最近的板块--minIndex--去除0ffset
specialTags[minIndex].classList.remove('offset')

let id = specialTags[minIndex].id
 let a = document.querySelector('a[href="#'+ id + '"]')
 let li = a.parentNode
 let brothersAndMe = li.parentNode.children
 for(let i=0; i<brothersAndMe.length; i++){
   brothersAndMe[i].classList.remove('highlight')
 }
 li.classList.add('highlight')


}
let liTags = document.querySelectorAll('nav.topnavbar > ul > li')
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(x) {
    x.currentTarget.classList.add('active')

  }
  liTags[i].onmouseleave = function(x) {
    x.currentTarget.classList.remove('active')
  }
}
// ------------------nav bar----------------

// -------------------scoll to ---------------


let aTags = document.querySelectorAll('nav.topnavbar > ul > li > a')
// 设置一个缓动效果
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(x) {
    x.preventDefault();
    let a = x.currentTarget
    let href = a.getAttribute('href') //#siteAbout
    let element = document.querySelector(href) //获取到要去的地址
    let top = element.offsetTop //距离顶部距离

    let currentTop = window.scrollY
    let targetTop = top - 80
    let s = targetTop - currentTop
    var coords = {
      y: currentTop
    };
    var t = Math.abs((s / 100) * 200) //每100px需要200毫秒
    if (t > 500) {
      t = 500
    }
    var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
      .to({
        y: targetTop
      }, t)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function() {
        window.scrollTo(0, coords.y)
      })
      .start(); // Start the tween immediately.
  }
}








// -------------------scoll to ---------------
