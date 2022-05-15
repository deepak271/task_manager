let txt = document.getElementById('ip').value;
let rmv = document.querySelector('.inp');
let el1 = document.querySelector('.list')
let obj ={
    dis:txt,
    id:0,
    compl:false,
    del:false
}
function addlist()
{
 let txt1 = `
     <div class="check">
         <img src="./image/oval.png" alt="circle" height="100%" width="100%">
     </div>
     <div class="disc">${txt}</div>
     <div class="del"><img src="./image/bin.png" alt="del" height="100%" width="100%"></div>
 `
el1.appendChild('li');

}
rmv.addEventListener('click',addlist());