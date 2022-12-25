
function rotateLeft(arr) {
    var nArr = [];
     var arr1= arr.slice(0,1);
    for(var i=1;i<arr.length;i++){
       nArr.push(arr[i]);
    }
    nArr.push(arr1)
    return nArr;
    
}
var arr=["1","2","3"]
result=rotateLeft(arr)
console.log(result);