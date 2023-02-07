
// Задание 1. Начало 11:00 - 11:10
const a = [
    "Москва",
    "Санкт-Петербург",
    "Воронеж"
]
function joinCities(array){
    return array.join(', ') + "+"
}   
console.log(joinCities(a))
