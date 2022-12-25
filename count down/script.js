function counter(){
    click_count++;
    var prefix="box clicked ";
    var suffix=" times";
    document.getElementsByClassName('message')[0].innerText=prefix+[click_count]+suffix;

}
var box=document.getElementsByClassName('inner');
var click_count=0;
box[0].addEventListener('click', counter);