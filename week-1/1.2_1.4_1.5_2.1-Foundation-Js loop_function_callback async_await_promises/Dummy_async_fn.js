function kiratsReadFilefunction()
{
    let p = new Promise(function(resolve){
        resolve("hii")
    });
    return p;
}

const value = kiratsReadFilefunction();
value.then(function(data){
    console.log(data);
})