//map,filter,arrow fns
// give an array, give me back a new array in which every value in multiply by 2
//[1,2,3,4,5]
//[2,4,6,8,10]

const input = [1,2,3,4,5];

// solution

//const newArray = [];
//for(let i = 0;i<imput.length; i++)
//{
//    newArray.push(input[i] * 3);
//}
//console.log(newArray);

//other solution


function transform(i)
{
    return i*2;
}

const ans = input.map(transform);
console.log(ans);