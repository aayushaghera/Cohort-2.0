console.log("hi there");

setTimeout(function()
{
    console.log("from inside async fn1")
},20000);

setTimeout(function()
{
    console.log("from inside async fn2")
},40000);

let a = 0;
for(let i = 0; i<10; i++)
{
    a = a+1;
}
console.log(a);