// Calculator

const Calculator = (A, B, C) => 
{
	
	switch (A) {
	  case "+":
	    return B+C;
	    break;
	  case "-":
	    return B-C;
	    break;
	  case "*":
	    return B*C;
	    break;
	  case "/":
	    return B/C;
	    break;
	}
	
    
};

// Check whether the condition is fulfilled or not?

const Check_divisibility = (N) => {
    
    return (N%6==0 && N%9==0 ? "Divisible by both":"Not Divisible by both")

    
};

// Eligible Voter

const isEligible = (a) => {
  
    let result = a>18 ?  "Eligible for Voting" : "Not Eligible for Voting";
    return result;    
  };

//   Find Relation

const findRelation = (x,y) => {
  
    if (x<y){
      return x + " is smaller than " + y;
    }
    else if (x>y){
      return x + " is greater than " + y;
    }
    else {
      return x + " is equal to " + y;
    }
    
      
  };
  
//   Find Grades


const findGrades = (a) => {
  
    switch(true){
      case (a<=10):
        return "E";
      case (a>=11 && a<=20):
        return "D";
      case (a>=21 && a<=30):
        return "C";
      case (a>=31 && a<=40):
        return "B";
      case (a>=41 && a<=50):
        return "A";
      
      
      
    }
      
  };
  
//   Get Value

const getValue = (a) => {
  
    switch (true){
      case (a=="p" || a=="P"):
        return "PrepBytes";
      case (a=="z" || a=="Z"):
        return "Zenith";
      case (a=="e" || a=="E"):
        return "Expert Coder";
      case (a=="d" || a=="D"):
        return "Data Structure";
    
    }
      
  };

//   Find the maximum out of three numbers.

const Max_out_of_three = (a,b,c) => {

    if (a>b && a>c){
      return a;
    }    
    else if (b>a && b>c){
      return b;
    }
    else if (c>a && c>b){
      return c;
    }
    else {
      return "-1";
    }
    
    };

// Second Smallest

const findSndSmallest = (x,y,z) => {
  
    if ((x<y && y<z) | (x>y&& y>z)) {
      return y;
    }
    else if ((y<x && x<z)|(y>x && x>z)){
      return x;
    }    
    else {
      return z;
    }
  };

//   Check whether the triangle is Acute or Obtuse

const Triangle_Check = (A,B,C) => {
    
    if (A<90 && B<90 && C<90){
      return "acute";
    }
        else {
          return "obtuse";
        }
    };

    