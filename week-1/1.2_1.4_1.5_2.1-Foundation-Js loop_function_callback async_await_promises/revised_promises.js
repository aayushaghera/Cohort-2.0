//promisified  Async function

function myownsettimeout(duration)
{
    let p = new Promise(function(resolve){
     setTimeout(function(){
        resolve();
     },duration);

     // setTimeout(resolve,3000)

    });
    return p;
}

myownsettimeout(3000).then(function(){
    console.log("hello i am aayush patel i am from rajkot");
});


console.log("hello")



// simple call back without promises

// function myownsettimeout(callback , duration)
// {
//     setTimeout(callback,duration)

// setTimeout(function(){
//     callback();
//  },3000);

// }

// myownsettimeout(function(){
//     console.log("hello goodafternoon")
// },3000)

// console.log("hello good morning")