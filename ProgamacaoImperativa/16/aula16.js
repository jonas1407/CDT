let FizzBuss = (para1,para2) => {
    for ( let i = 0; 1<= 100; i++) {    
        if ( i % para1 == 0 && i % para2 == 0 ) {    
            return "FizzBuzz";     
        } else if (i % para1 == 0 ){    
            return "Fizz";    
        } else if (i % para2 == 0 ) {    
            return "Buzz" ;    
        } else {       
            return i;    
        } 

    }
}
console.log(FizzBuss(1,0));
    