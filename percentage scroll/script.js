var percentage = document.getElementById('percentage');
var total_page_height= document.documentElement.scrollHeight;
console.log(total_page_height);
var viewport_height= window.innerHeight;
console.log(viewport_height);
window.addEventListener('scroll',function(){
    percentage.innerText=Math.round((Math.round(this.scrollY)/(total_page_height-viewport_height))*100);
    console.log(this.window.scrollY);
});

