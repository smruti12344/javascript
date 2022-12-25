function propertyExists(obj,path) {
    // Write logic here
    let val = obj;
    for(let i of path){
        val = val[i];
        if(!val){
            return false;
        }
    }
    return val;
}
var obj={"a":{"b":"dadsa"}}
var path="ac";
var result=propertyExists(obj,path)
console.log(result);