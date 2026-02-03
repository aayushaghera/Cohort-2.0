// how to call 1 function and 1 function call another function
function sum(num1,num2)
{
    let result = num1 + num2;
    displayResult(result);
}

function displayResult(data)
{
    console.log("result of sum is :" +data);
}

function displayResultPassive(data)
{
    console.log("sum's result is :" +data);
}

const ans = sum(1,2);
