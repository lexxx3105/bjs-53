"use strict"
let solveEquation = (a, b, c) => {
  if(a == 0)
      return false;
  let arr = [];
  let d = b * b - 4 * a * c;
  console.log('d = ' + d);
  if(d < 0)
      return false;
  arr['дискриминант'] = d;
  if(d == 0)
      arr["квадратный корень"] = (-b + Math.sqrt(d)) / (2 * a);
  else if(d > 0){
      let tmp = [];
      tmp.push((-b + Math.sqrt(d)) / (2 * a));
      tmp.push((-b - Math.sqrt(d)) / (2 * a));
      arr["квадратный корень"] = tmp;
  }
  return arr;
}
console.log(solveEquation(1,12,36));


function calculateTotalMortgage(percent, contribution, amount, months) {  
  let per = percent * 12; // преобразуем процентную ставку в диапазон 0-1
  let monthlyRate = per / months; // месячная ставка
  let bodyCredit = amount - contribution; //тело кредита
  let pay = bodyCredit * (per + (per / (((1 + per) **months) -1))); // ежемесячная оплата
  let sumPay = pay * months; //общая сумма платяжей
  let totalAmount = (sumPay + contribution).toFixed(2);  //итоговая сумма выплат
  console.log("Общий платеж по ипотеке:", totalAmount);  
  return +totalAmount;  
  };  
  
calculateTotalMortgage(10, 0, 50000, 12)
calculateTotalMortgage(10, 1000, 50000, 12)
calculateTotalMortgage(10, 0, 20000, 24)
calculateTotalMortgage(10, 1000, 20000, 24)
calculateTotalMortgage(10, 20000, 20000, 24)
calculateTotalMortgage(10, 0, 10000, 36)
calculateTotalMortgage(10, 0, 10000, 36)
  

