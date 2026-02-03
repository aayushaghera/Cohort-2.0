function kiritAsyncFunction()
{
    let p = new Promise(function(resolve)
{
    setTimeout(function(){
       resolve("heelo guys");
    },3000)

    
});
return p;
}
console.log("hi there 1");
const value = kiritAsyncFunction();
value.then(function(data){
    console.log(data);
})