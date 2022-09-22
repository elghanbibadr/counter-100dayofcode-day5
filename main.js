let btns=document.querySelectorAll('button');
let counter=document.querySelector('h2');

btns.forEach(btn=>{
  btn.addEventListener('click',(e)=>updateCounter(e.target))
})


function updateCounter(element){
  if (element.id=='increase')
      counter.textContent++;
   
  if (element.id=='decrease')
      counter.textContent--;
   
   if (element.id=='reset') 
     counter.textContent='0';
   
     updateColor();
}


function updateColor(){
  if (counter.textContent<0) changeCounterColor('red');
  if (counter.textContent>0) changeCounterColor('green');
  if (counter.textContent==0) changeCounterColor('black');
}


 function changeCounterColor(color){
  counter.style.color=`${color}`;
}