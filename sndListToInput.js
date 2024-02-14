const snd = document.getElementById("snd");
//console.log(snd);
const contentBox = document.getElementById('content-box');
const contentInput = document.getElementById("content-input");
let firstClick=true;

/*snd.onclick = function append() {
    contentBox.innerHTML = `<div>${contentInput.value}</div>`;
    console.log({ contentBox });
    contentInput.value = '';
}*/

snd.onclick = function append() {
    //contentInput.setAttribute('maxLength','4');
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
