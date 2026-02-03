function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there")
        },3000)
    });
    return p;
}

 async function main()
{
    // .then syntax is not used

   let value =  await kiratsAsyncFunction()
   console.log("hi there1")
   
   console.log(value);

    // .then synatx is used

   //kiratsAsyncFunction().then(function(data){
   //console.log(data);
   //})
   //console.log("hi there1")
}

main();

console.log("after main")