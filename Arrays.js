// Find the Product.  -----------------------------------------------------------------------------

const Find_Prod = (array, N) => 
{
 let product = 1;
 for(let element of array){
   product*=element;
 }
 return product;
     

};

// Find the Sum.  -----------------------------------------------------------------------------

const Find_Sum = (array, N) => 
{
  let sum = 0;
 for(let element of array){
   sum+=element
 }return sum;

};

// Count Occurrences  -----------------------------------------------------------------------------

const findCount = (N, K, Arr) => 
{
    let count=0;
    for(let i in Arr){
      if(Arr[i]===K){
        count += 1;
      }
    }return count;
};
 

// Even Odd  -----------------------------------------------------------------------------

const findEvenOdd = (N, Arr) => 
{
    let even=0;
    let odd=0;
    let arrB = [];
    for (let i of Arr){
      if (i%2===0){
        even = even + i;
      }
      else{
        odd = odd + i;
      }
    }
    arrB[0] = even;
    arrB[1] = odd;
    return arrB;
 
};

// Find whether the number is present or not  -----------------------------------------------------------------------------

const Find_Num = (array,N,M) => 
{
  let count=0;
  for(let i of array){
    if(i===M){
      count+=1;
    }
  }
  if(count>0){
    return "YES";
  }else{
    return "NO"
  }
};
 
// Higher Age  -----------------------------------------------------------------------------

const highAge = (N, Arr) => 
{
    return Arr.filter(N => N >= 18);
  // let ans=[];
  //  for (let i of Arr){
   //   if(i>=18){
   //     ans.push(i);
   //   }
  //  }
   // return ans;
};

// Increment the Array Elements  -----------------------------------------------------------------------------

const Inc_Arr = (array,N) => 
{

  let arr1 = array.map(N => N+1);
  console.log(arr1.join(" "));
  //array.forEach(function(i){
  //  i+=1;
  //  console.log(i);
  //});
  
  
  //let arr1 = "";
  //for(let i of array){
  //  arr1+=(i+1).toString()+" ";
  //}
  //console.log(arr1);
};
 

// Pass or Fail  -----------------------------------------------------------------------------

const isAllPass = (N, Arr) => 
{
  return Arr.every((i)=> i>=32)? "YES":"NO";
};

// Unique Color Shirt  -----------------------------------------------------------------------------


function Unique_Shirts (arr,N) {

    let unique=arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
    return (unique.length); 
    }
    
// Min and Max  -----------------------------------------------------------------------------

function arrayMin(arr) {
    let min = (Math.min(...arr));
      return min;
  }
  
  function arrayMax(arr) {
    let max = (Math.max(...arr));
      return max;
  }

//   Birthday Game -----------------------------------------------------------------------------

 
function Birthday_Game(arr,D ,M) {
 
    let finalCount=0;
     for(let i=0;i<(arr.toString().length-M);i++){
       let count=0;
       for(let j=i;j<(i+M);j++){
         count+=arr[j];
       }
       if(count===D){
         finalCount+=1
       }
     }
     return finalCount;
    }



