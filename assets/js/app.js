const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');
var calculate = 0;
button.addEventListener('click',add);
function add(){
    if(input.value != ""){
     calculate++;
     var page = document.createElement('p');
     var deleteButton = document.createElement('div');
     deleteButton.classList.add('deletebutton');
     deleteButton.innerText = 'Delete';
     page.innerText = calculate + ')' + input.value;
     contentDiv.appendChild(page);
     page.appendChild(deleteButton);
     input.value = "";
     deleteButton.addEventListener('click',function(){
            calculate--;
            contentDiv.removeChild(page);
     });
}
}