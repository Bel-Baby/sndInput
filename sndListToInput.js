const snd = document.getElementById("snd");
//console.log(snd);
const contentBox = document.getElementById('content-box');
const contentInput = document.getElementById("content-input");
//const disp = document.querySelector("div");
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
    }else if(contentBox.children.length<=4){
        let newDiv=document.createElement('div');
        contentBox.appendChild(newDiv);
        newDiv.textContent=contentInput.value;
        contentInput.value='';
    }
}
