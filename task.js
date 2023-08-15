"use strict"
function solveEquation(a, b, c) {
  const d = b**2 - 4 * a * c;
  if (d < 0) {
      return [];
  }
  else if (d === 0) {
      const x = -b / (2 * a);
      return [x];
  }
  return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
};

console.log(solveEquation(1, 5, 4))
console.log(solveEquation(1, 2, 1))
console.log(solveEquation(1, 2, 10))


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
  

