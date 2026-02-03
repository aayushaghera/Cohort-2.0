//call 1 function and that function call back another function 
//passing function inside function its called call back
function calculateArithmetic(a, b, arithmeticFinalFunction) {

    const ans = arithmeticFinalFunction(a, b)
    return ans;
}
    
    function sum(a, b) {
    return a + b;
    }

    const value = calculateArithmetic(1, 2, sum);
    console.log(value);