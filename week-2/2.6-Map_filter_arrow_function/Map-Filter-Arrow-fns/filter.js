//filtering 
//what if i tell u given an input array,give me back all the even values from it


const arr = [1,2,3,4,5];

//one solutin

// const newarr=[];

// for(let i = 0; i<arr.length; i++)
// {
//    if(arr[i]%2 == 0){
//        newarr.push(arr[i]);
//    }
// }

//console.log(newarr);

// other solution using filter

function filterlogic(n)
{
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const ans = arr.filter(filterlogic);
console.log(ans);