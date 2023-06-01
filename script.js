let hloBtn = document.querySelector('button');
hloBtn.addEventListener('click', inputMsg);

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


function inputMsg(){
    let name = prompt('Enter name of Student');
    hloBtn.textContent = 'Roll No. 28: '+ name;
    
}

