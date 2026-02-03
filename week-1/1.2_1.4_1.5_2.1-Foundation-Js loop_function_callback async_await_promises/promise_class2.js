var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("hiii");
    },2000)
   
});

function callback()
{
    console.log(d);
}

console.log(d);
d.then(callback)