function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("aayush aghera");
    });
    return p;
}

function main()
{
    kiratsAsyncFunction().then(function(data){
        console.log(data);
    });
}

main();