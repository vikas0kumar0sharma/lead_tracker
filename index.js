let mylead=[]

const ulEl=document.querySelector('.ul-El')
const inputel=document.querySelector('.input-el')
const inputbtn=document.querySelector('.input-btn')

inputbtn.addEventListener("click",function(){
  mylead.push(inputel.value)
  renderleads()
  inputel.value=""
})

function renderleads(){
let listitems=""
for(let i=0;i<mylead.length;i++){
  listitems+="<li>"+"<a href='"+mylead[i]+"' target='_blank'>"+mylead[i]+"</a>"+"</li>" 
  // you can also use template string here

}
ulEl.innerHTML=listitems
}
