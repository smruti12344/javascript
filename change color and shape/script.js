"use strict"
var available_color=["red","yellow",];
var available_shape=["squre","rectangle","trangle-up","squre","trangle-down"];
document.getElementById('color').addEventListener('click',function(){
    var next_color = available_color[Math.floor(Math.random()*4)];
    document.getElementsByClassName('container')[0].style.backgroundColor=next_color;
});
document.getElementById('shape').addEventListener('click',function(){
    var next_shape= available_shape[Math.floor(Math.random()*available_shape.length)];
    document.getElementById('shaper').setAttribute("class",next_shape);
});
