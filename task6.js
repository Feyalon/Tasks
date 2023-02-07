// 13:50 - 14:20
let oneRow = '';
const multiply = (number) => {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j < 6; j++) {
            oneRow += (''+(j*i)).padStart((''+number).length + 1, ' ') + " ";
        }
    console.log(oneRow);
        oneRow = '';
    } 

}

multiply(5);
