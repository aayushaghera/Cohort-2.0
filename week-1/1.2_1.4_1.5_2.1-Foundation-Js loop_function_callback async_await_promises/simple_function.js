function kiratsAsyncFunction(callback){
    setTimeout(callback,3000);
}

console.log("aayush 1");
kiratsAsyncFunction(function(){
    console.log("hello");
});