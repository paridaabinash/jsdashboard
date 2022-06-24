// Count Characters -------------------------------------------
const countCharacters = (S) => 
{
    let arr=[];
    let countA=0;
    let countD=0;
    for(let i=0;i<S.length;i++){
      if (S[i]==="A"){
        countA+=1;
      }else if(S[i]==="D"){
        countD+=1;
      }
    }
    arr.push(countA);
    arr.push(countD);
    return arr;
};



// Count the Heads -------------------------------------------
var Count_Occ = (s) => 
{
    let count = 1;
  let str = "";
  let result = "";
  for(let i=0;i<s.length;i++){
    for(let j=i+1;j<s.length;j++){
      if(s[i]===s[j]){
        count++
      }
    }
    if(count>1){
      str=s[i];
      result = result+" "+s[i]+count;
      s=s.replace(str," ");
      s=s.split(str).join("");
      
    }
    count=1
  }
  return result.split(" ").sort().join("")

};



// Count the Vowels -------------------------------------------
var Count_Vowels= (S) => 
{
      return S.match(/[aeiou]/gi).length  
};



// Concatenate the Strings --------------------------------------
var Concatenate_Strings = (S1, S2) => 
{
  return S1.concat(S2);
};
 

// Find Length -------------------------------------------------
const findLength = (S) => 
{
    return S.length;
};


 
// Find the Winner ----------------------------------------------
var Game_Winner = (S) => 
{
  let countA = S.match(/[a]/gi).length;
  let countD = S.match(/[d]/gi).length;
  
  if (countA>countD){
    return "Aditya";
  }else if(countD>countA){
    return "Danish";
  }else if(countD===countA){
    return "Draw";
  }

}



// Join Strings ---------------------------------------------------
const joinStrings = (S, P) => 
{
  return S.concat(P);
};



// Palindrome Check -----------------------------------------------
var Palin_Check = (str) =>
{
	 return (str.split("").reverse().join(""))===str?"True":"False";

}



// Reverse the String -----------------------------------------------
var Reverse_String = (str) => 
{
    return str.split("").reverse().join("");
};



// Match the Strings --------------------------------------------------
var String_Match = (S1,S2) => 
{
  return ((S1===S2?"YES":"NO"));
};
 


// String Replace ------------------------------------------------------
var Replace = (S, pattern , text) => 
{
    return S.replace(pattern,text);
};



// Split the String -----------------------------------------------------
var Split_the_string = (S) => 
{
  
  return S.split(" ");
};
 


// Count the Vowels and Consonants --------------------------------------
var Count_Vowels= (S) => 
{
  const vowels = S.match(/[aeiou]/gi); 
  return vowels.length;
};
var Count_Consonants= (S) => 
{
  const consonants = S.match(/[^aeiou]/gi);
  return consonants.length;
};
