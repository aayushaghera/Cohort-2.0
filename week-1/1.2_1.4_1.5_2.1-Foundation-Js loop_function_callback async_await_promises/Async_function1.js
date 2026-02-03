function findSum(n)
{
    let ans = 0;
    for(let i = 0; i<n; i++)
    {
        ans = ans + i;
    }
    return ans;
}

function findSumTIll100()
{
    console.log(findSum(100));
}  


function syncSleep()
{
    let a = 1;
    for(let i = 0; i<10000000000; i++)
    {
        //console.log(a++);
        a++;
    }
}

//syncSleep();
//findSumTIll100();

setTimeout(findSumTIll100,3000)
console.log("hello world");