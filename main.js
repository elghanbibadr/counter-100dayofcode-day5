let btn=document.querySelector('button');
let colorCodeNode=document.querySelector('h1 strong');
let main=document.querySelector('main');

btn.addEventListener('click',updateBgColor);

function updateBgColor(){
  colorCodeNode.textContent=getFiveRandomeNumber();
  main.style.backgroundColor=`#F${colorCodeNode.textContent}`

}


function getFiveRandomeNumber(){
 return  Math.floor(Math.random()*100000+1)
}