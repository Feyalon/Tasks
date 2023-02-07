// Задание 3. 11:30 - 12:20
function intPad(int){
    const num = String(int)
    
    const end = Number([num[num.length-1]]); 
    const penult = Number([num[num.length-2]]);
    
    if ((end >=5 && end <= 9) ||  (end === 0) ||
        (end ==1 && penult == 1) ||
        (end >=2 && end <= 4 && penult == 1))
    {
        console.log (int +" компьютеров");
    } 
    if (end == 1 && penult !=1) {
        console.log (int + " компьютер")
    }
    if (end >=2 && end <= 4 && penult != 1) {
        console.log(int + " компьютера")
    }
}
intPad(61)
