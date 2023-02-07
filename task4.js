// Задание 4. 12:20 - 12:30

function Prime(numb) {
    var count = 0;
    for (var i=2; i<=numb-1; i++){
        
        var d = numb % i;
        if (d === 0) {
            count = count +1;
        }}
        
        
        if  (count === 0){console.log(numb + " это простое число")
        } else {
            console.log(numb + " это не простое")
        }
    
}

Prime(19)
