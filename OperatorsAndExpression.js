// Add two Numbers

const AddTwoNumbers = (a,b) => {
  
    return a+b;
      
  };


//   Find if the conditions are obeyed or not?

const Is_Valid = (a,b) => {
  
    return (a < 10 && a > b);
    
  };
  
//   Check the conditons

const Check = (A, B) => 
{
    
    return (A%10==0)||(B%10==0)?true:false;
    
};

// Find the first digit of a 4 digit number

const First_Digit = (n) => {
  
    return (parseInt(n/1000));
     
  };

//   Find the last digit of a 4 digit number

const Last_Digit = (n) => {
  
    return n%10;
     
  };
  
//   Find the remainder

const Find_the_remainder = (a,b) => {
  
    return b%a;
      
  };
  
//   Multipy two Numbers

const Multiply_two_number = (a,b) => {
  
    return a*b;
      
  };

//   Marks Calculator

const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
 return (A+B+C)/3;
};