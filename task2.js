// Задание 2. 11:10 - 11:30

const number = 27.8; 
 
  
 function roundNumber(int) { 
     const five = int % 5; 
     
     if (five === 0) { 
         return int; 
     } else if (five >= 2.5) { 
         return (int-five+5); 
     } else { 
         if (five < 2.5){ 
         return (int-five)
         } 
      } 
   } 
  
console.log(roundNumber(number)); 
