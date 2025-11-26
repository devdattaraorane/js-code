

//using arrow function return factorial of a number
 
const fact= (num) =>
    {
          if(num==0||num==1)
            {
                return 1;
            }

            const result=fact(num-1)*num;
            return result;
    }

//sum of digits of a number using arrow function
const sumofdigits=(num)=>
    {
        let sum=0;
        while(num!=0)
        {
            let digit=num%10;
            sum=sum+digit;
            num=Math.floor(num/10);
        }
    }

//test the functions

console.log("Factorial of 5 is: "+fact(5));
console.log("Sum of digits of 1234 is: "+sumofdigits(1234));

//function of palindrome using arrow function
