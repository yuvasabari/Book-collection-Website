var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.getElementById("add-popup")
 
addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var canclepoupup=document.getElementById("cancle-poupup")

canclepoupup.addEventListener("click",function(event){
      event.preventDefault()
      popupoverlay.style.display="none"
      popupbox.style.display="none"
})
var cointener=document.querySelector(".cointener")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","pain-conintener")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    cointener.append(div)
    popupoverlay.style.display="none"
      popupbox.style.display="none"
})


function deletebook(event)
{
    event.target.parentElement.remove()
}