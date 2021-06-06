//keyup example

let textBox = document.querySelector('#username');
textBox.addEventListener('keyup',function(){
  let textEntered = textBox.value;

  let messsageElement = document.querySelector('#msg');
  messsageElement.innerText = textEntered;
});