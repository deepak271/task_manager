let add = document.querySelector('.add');
let rmv = document.querySelector('.inp');
let el = document.querySelector('.list');
let inpt = document.querySelector('#ip');
let el2 = document.querySelector('.disc');
let todoarr = [],i=0;
function addtodo(txt)
{
    if(txt!=""){
  let arr={
      text:txt,
      id:i++,
      del:false,
      compl:false
  }
  todoarr.push(arr);
  createtodo();
}
inpt.value=''
}

function createtodo(){
    el.innerHTML='';
    todoarr.forEach(function(todo)
    {    if(todo.del===false)
        {
            let lin = todo.compl?"line":null;
        let li = document.createElement('li');
        let temp = `<div class="check">
        <img src="./image/oval.png" alt="circle" height="100%" width="100%" class="img" id=${todo.id}>
    </div>
    <div class="disc">${todo.text}</div>
    <div class="del"><img src="./image/bin.png" alt="del" height="100%" width="100%" class = "det" id=${todo.id}></div>`
    li.innerHTML=temp;
    //console.log(li);
    el.appendChild(li);
        }
    })
}

add.addEventListener('click',function(){
    addtodo(inpt.value);
})
el.addEventListener('click',function(ev){
    //console.log('lust clicked');
 if(ev.target.classList.contains('img'))
 {console.log('img clicked');
    let tid=ev.target.getAttribute('id');
    //console.log(tid);
    todoarr.forEach(function(todo){
        if(todo.id == tid)
         todo.compl=!todo.compl;
    })
    createtodo();
 }
 if(ev.target.classList.contains('det'))
 {console.log('del clicked');
    let tdel=ev.target.getAttribute('id');
    //console.log(todoarr);
    todoarr.forEach(function(todo){
        if(todo.id == tdel)
         todo.del= true;
    })
    createtodo();
 }
}
)
