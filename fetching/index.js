// console.log("document");
// var p=document.getElementById('one');
// console.log(id);
// var hellobutton=document.getElementById('btn');
// console.log(hellobutton);
// onclick=alert('hellllo');
function sayhello(){
    alert('hello smruti');
}
function sayby(){
    alert('bye smruti');
}
var hellobutton = document.getElementById('btn');
console.log(hellobutton);
hellobutton.addEventListener('click',sayhello);
var hellobutton2=document.getElementById('btn2');
hellobutton2.addEventListener('click',sayhello);
hellobutton2.addEventListener('click',sayby);
   
