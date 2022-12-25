var innerdiv = document.getElementById('inner');
innerdiv.addEventListener('click', function(event){
    console.log('click inner div');
    event.stopPropagation();
});
var outerdiv=document.getElementById('outer');
outerdiv.addEventListener('click', function(){
    console.log('click outer div');
});
