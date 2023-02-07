// Задание 2. 11:10 - 11:30

var number = 27.8; 
 
  
 function roundNumb(numb) { 
     var five = numb % 5; 
     
     if (five === 0) { 
         return numb; 
     } else if (five >= 2.5) { 
         return (numb-five+5); 
     } else { 
         if (five < 2.5){ 
         return (numb-five)} 
     } 
     } 
  
console.log(roundNumb(number)); 
