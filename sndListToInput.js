const snd = document.getElementById("snd");
//console.log(snd);
const contentBox = document.getElementById('content-box');
const contentInput = document.getElementById("content-input");
const disp = document.querySelector("div");
let firstClick=true;


/*snd.onclick = function append() {
    contentBox.innerHTML = `<div>${contentInput.value}</div>`;
    console.log({ contentBox });
    contentInput.value = '';
}*/

snd.onclick = function append() {
    if(firstClick){
        contentBox.innerHTML = `<div>${contentInput.value}</div>`;
        console.log({ contentBox });
        contentInput.value = '';
        firstClick=false;
    }else{
        let newDiv=document.createElement('div');
        disp.appendChild(newDiv);
        newDiv.textContent=contentInput.value;
        contentInput.value='';
    }
    
}


    
/*contentInput.onchange=(e)=>{
    e=contentInput.target.value;
    contentBox.innerHTML=`<div>${e}</div>`;
}*/

