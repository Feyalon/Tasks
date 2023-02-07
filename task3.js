// Задание 3. 11:30 - 12:20
function IntPad(int){
    const Num = String(int);
    const NumArr = [];
    for (var i = 0; i < Num.length; i++) {
        myNumArr.push(Num.charAt(i));
    }
    
    const end = NumArr[NumArr.length-1]; 
    const penult = NumArr[NumArr.length-2];
    
    if ((end >=5 && end <= 9) ||  (end === "0") ||
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
IntPad(61)
