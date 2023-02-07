// Задание 2. 11:10 - 11:30

const number = 27.8; 
 
  
 function roundNumber(numb) { 
     const five = numb % 5; 
     
     if (five === 0) { 
         return numb; 
     } else if (five >= 2.5) { 
         return (numb-five+5); 
     } else { 
         if (five < 2.5){ 
         return (numb-five)
         } 
      } 
   } 
  
console.log(roundNumber(number)); 
