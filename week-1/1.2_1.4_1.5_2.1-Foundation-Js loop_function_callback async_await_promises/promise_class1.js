var d = new Promise(function(resolve){
    resolve("hiii");
});

function callback()
{
    console.log(d);
}

console.log(d);
d.then(callback)