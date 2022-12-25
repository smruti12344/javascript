"use strict"
var count=0;
// document.getElementsByClassName('inner')[0].addEventListener('click',function(){
    $('.inner').click(function(){

    
    if(count%2==0){
        // document.getElementsByClassName('toggler')[0].style.float="right";
        $('.toggler').css({
            float:"right"
        });
        // document.getElementsByClassName('inner')[0].style.backgroundColor="red";
        $('inner').css({
            backgroundColor:"red"
        });
        // document.getElementsByTagName('body')[0].style.backgroundColor="cyan";
        $('body').css({
            backgroundColor:"cyan"
        });
        // document.getElementsByTagName('h1')[0].style.color="yellow";
        $('h1').css({
            color:"yellow"
        });
        count++;
    }
    else{
        // document.getElementsByClassName('toggler')[0].style.float="left";
        // document.getElementsByClassName('inner')[0].style.backgroundColor="black";
        // document.getElementsByTagName('body')[0].style.backgroundColor="white";
        // document.getElementsByTagName('h1')[0].style.color="blue";
        $('.toggler').css({
            float:"left"
        });
        $('inner').css({
            backgroundColor:"black"
        });
        $('body').css({
            backgroundColor:"white"
        });
        $('h1').css({
            color:"blue"
        });
        count++;

    }
});