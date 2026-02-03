// function square(n) {
//     return n * n;
//   }
  
//   function cube(n) {
//     return n * n * n;
//   }
  
//   function sumOfSquares(a, b) {
//     let square1 = square(a);
//     let square2 = square(b);
//     return square1 + square2;
//   }
  
//   let ans = sumOfSquares(1, 2);
//   console.log(ans);


function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfsomething(a, b,fn) {
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
  }
  
  let ans = sumOfsomething(1, 2,cube);
  console.log(ans);
