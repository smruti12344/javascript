var promise= new Promise((resolve,reject) =>{
    setTimeout(() =>{

    
reject({message:'error'});
// reject("some thing went wrong");
},3000);

});
console.log(promise);
promise
.then((data) =>{
console.log(data);
})
.catch((error) =>{
    console.log('error',error);
});