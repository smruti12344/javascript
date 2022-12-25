function duplicate(arr){
   var n=arr.length;
   for(var i=0;i<n;i++){
    arr.push(arr[i]);
   }
   return arr;
}
var arr=[1,2];
var result= duplicate(arr);
console.log(result);