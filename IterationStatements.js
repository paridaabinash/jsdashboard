// Find the number of digits

const Find_Digits = (N) => 
{
let count=0;
	 while(N>0){
	   count+=1;
	   N=Math.floor(N/10)
	 }
	 return count;
};

// Find the Fives.

const Find_Five = (N) => 
{
	 n=N.toString()
	 let count=0;
	 for(let i=0;i<n.length;i++){
	   if(n[i]==="5"){
	     count+=1;
	   }
	 }
	 return count;
};

// Find Sum

const findSum = (n) => {
    let sum=0;
  for(let i=1;i<=n;i++){
    if(i%2===0){
      sum+=i;
    }
  }
  return sum;
};

// Find the sum of the digits of a given number.

const Number_Sum = (N) => 
{
	let sum=0;
  while(N>0){
    sum+=N%10;
    N=Math.floor(N/10)
  }
  return sum;
};

// Print the Odds.

const Print_Odd = (N) => 
{
	 if(N===2){
  console.log(2)
  }else{
    console.log(2)
    for (let i = 2;i<=N;i++){
  	   if(i%2!==0){
  	     console.log(i)
  	   }
  	 }
  }
};

// Print the Pattern.

const Print_pattern = (N) => 
{

let a = "";
for (let i=1; i<=N; i++)
{
  console.log(a=a+"*");
}

};


// Check whether a Number is a prime or not.

const Prime_Check = (N) => 
{
	 if(N===1){
    return "NO";
  }else{
    let flag=0;
  for (let i = 2;i<N;i++){
    if (N%i===0){
      flag=1;
      break;
    }
  }
	if(flag===0){
	  return "YES";
	}else{
	  return "NO";
	}
  }
	
};

// Print Numbers

const printNumbers = (n) => {
  
    s="";
    for(let i=1;i<=n;i++){
      s+=i+" ";
    }
    console.log(s);
    
};

// Print the Table

const Print_Table = (N) => 
{
	for(let i = 1;i<=10;i++){
  console.log(`${N} * ${i} = ${N*i}`);
}
};







