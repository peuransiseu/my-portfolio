let number = 1;

// const button1 = document.querySelector('#test');
const numberText = document.getElementById('numberText');

const button1 = document.getElementById('test');

button1.onclick = addNum;


function addNum(){
    number++;
    console.log("This is Click Me button");
    numberText.innerText = number;
}   