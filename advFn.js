let musicHead = document.createElement("li");
let musicTitle = document.createElement("p");
let col = document.createElement("div");
let specialDIYOffers = document.createElement("div")
let inputDIY = document.createElement("div")
let specialOffers = document.createElement("p")
let inputOffers = document.createElement("input")
let buttonOffers = document.createElement("input")

musicHead.setAttribute("id", "newMusicCollection");
musicTitle.setAttribute("id", "musHeading");
col.setAttribute("id", "newCollection");
specialDIYOffers.setAttribute("id","diyOffers")
specialOffers.setAttribute("id","specialOffers")
inputDIY.setAttribute("id","inputDIY")
inputOffers.setAttribute("id","inputOffers")
inputOffers.setAttribute("type","text")
inputOffers.setAttribute("placeholder","Enter your email")
buttonOffers.setAttribute("id","buttonOffers")
buttonOffers.setAttribute("type","submit")

musicTitle.textContent = "Music Distribution";
specialOffers.textContent = "Subscribe to receive DIY Musician tips, special offers, and more."
musicHead.append(musicTitle, col);
specialDIYOffers.append(specialOffers,inputDIY)
inputDIY.append(inputOffers,buttonOffers)

let oldMusic = document.querySelector(".headerNavContent");
let cdbBoast = document.getElementById("cdbBoast");
oldMusic.insertBefore(musicHead, cdbBoast);

musicHead.style.position = "relative";
col.style.position = "relative";

musicHead.style.right = "1em";
musicHead.style.bottom = "0.023em";
musicHead.style.fontSize = "17px";
musicHead.style.width = "9em";
musicHead.style.textAlign = "center";

let len = (document.getElementById("MusicDistribution").textContent.trim().split("\n",)).map(e=>e.trim());

if(document.getElementById("benefits")){
  let musicBenefits = document.getElementById("benefits")
  musicBenefits.style.transition = musicBenefits.parentElement.insertBefore(specialDIYOffers,musicBenefits)
  
  window.addEventListener('scroll',(e)=>{
    let topHeight = musicBenefits.getBoundingClientRect().top
    if(topHeight<623.5){
      musicBenefits.style.transform = "translateY(20.69em)"
      musicBenefits.style.transitionProperty = "transform"
      musicBenefits.style.transitionDuration = '1s'
      musicBenefits.style.transitionTimingFunction = 'ease-in-out'
      musicBenefits.style.transitionDelay = '0'
    }
  })
}

musicHead.addEventListener("mouseenter", musCollFn);
musicHead.addEventListener("mouseleave", musCollFnEnd);
musicHead.addEventListener('click', onClick)

musicHead.addEventListener("mouseover", (e)=>{
  if(e.target.tagName=="P"){
    e.target.style.textDecoration = 'underline'
    e.target.style.textDecorationThickness = '2px'
  }
})

musicHead.addEventListener("mouseout", (e)=>{
  if(e.target.tagName=="P")
    e.target.style.textDecoration = 'none'  
})

function musCollFn(e) {
  musicTitle.style.padding = "10px 2.2px";
  musicTitle.style.fontSize = "17px";
  for (let i = 1; i < len.length; i++) {
      let musEle = document.createElement("p");
      musEle.textContent = len[i];
      musEle.style.padding = "8px 7px";
      musEle.style.fontSize = "17px";
      musEle.style.backgroundColor = '#42d7ee'
      musEle.style.width = '100%'
      col.appendChild(musEle);
    }
    
    e.target.style.display = "block";
    e.target.style.position = "relative";
    e.target.style.top = "8.5em";
    e.target.children[0].style.position = "relative";
    e.target.children[1].style.display = "block";
    e.target.children[1].style.right = '0.43em'
    e.target.children[1].style.paddingBottom = '2px'
    e.target.children[1].style.transitionDuration = '700ms'
}

function musCollFnEnd(e) {
  e.target.children[1].innerHTML = ''
  e.target.style.top = "0.05em";
  e.target.style.right = "1.05em";
}

function onClick(e) {
  click = 1
  if(e.target==musicHead.children[0])
    e.target.nextElementSibling.style.display = 'none'
  else{
    e.target.parentElement.style.display = 'none'
    e.target.parentElement.parentElement.children[0].textContent = e.target.textContent
  }  
  if(e.target.textContent.includes('Spotify')){
    window.location.href = '/pages/SpotifyMusic.html'
  }
  if(e.target.textContent.includes('Apple')){
    window.location.href = '/pages/AppleMusic.html'
  }
  if(e.target.textContent.includes('Distribution')){
    window.location.href = '/pages/HomeDistribution.html'
  }
}

if(document.getElementsByClassName('music')){
  let headNav = Array.from(document.getElementsByClassName('music'))
  console.log(document.title)
  if(document.title.includes('Spotify'))
    headNav[0].style.color = "#40bcd0"
  if(document.title.includes('Apple'))
    headNav[1].style.color = "#40bcd0"
}

if(document.getElementById('musicNav')){
document.getElementById('musicNav').addEventListener('click',(e)=>{
  if(e.target.textContent.includes('Spotify')){
    window.location.href = '/pages/SpotifyMusic.html'
  }
  if(e.target.textContent.includes('Apple')){
    window.location.href = '/pages/AppleMusic.html'
  }
  if(e.target.textContent.includes('Distribution')){
    window.location.href = '/pages/HomeDistribution.html'
  }
})}

let eachSection = document.querySelectorAll('.asideSectionNav li')
let eachStep = document.querySelectorAll('.asideSectionDetails')
eachStep = Array.from(eachStep)
eachSection = Array.from(eachSection)

if(document.getElementById('easy3Steps')){
document.getElementById('easy3Steps').addEventListener('click', (e)=>{
  eachStep[eachSection.indexOf(e.target)].scrollIntoView({behavior: 'smooth'})
})}

if(document.querySelector('#spotifyFAQS')){
document.querySelector('#spotifyFAQS').addEventListener('click', (e)=>{
  if(e.target.tagName == 'H3'){
    if(!e.target.nextElementSibling.className.includes('spotifyFaq'))
      e.target.nextElementSibling.classList.add('spotifyFaq')
    else
    e.target.nextElementSibling.classList.remove('spotifyFaq')
  }

})}
