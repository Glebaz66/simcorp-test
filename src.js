money = document.querySelector('#money');
month = document.querySelector('#month');
rate = document.querySelector('#rate');


const monthPayment = function(){
  //ставка в месяц
  const rateAmount = (rate.value/12)/100;
 
  //аннуитетный платеж
  const toPow1 = 1 + rateAmount;
  const toPow2 = Math.pow(toPow1, month.value);
  const toPow3 = toPow2 - 1;
  const annuityPaymentRate = money.value * (rateAmount + (rateAmount/toPow3));
  const result = annuityPaymentRate.toFixed(2);
  
  //разница
  const debtBalance = money.value - result;
  
  document.querySelector(".debt-balance").innerHTML = 'debt balance '+ debtBalance;
  document.querySelector(".annuity-ratio").innerHTML = 'annuity ratio '+ rateAmount;
  return document.querySelector(".month-payment").innerHTML = 'monthly paymennt '+ result;
};


// const createTable = function () {
//   return `
//     <tr class="list-row">
//       <td class="list-item">${months}</td>
//       <td class="list-item">${annuityPay}</td>
//       <td class="list-item">${persent}</td>
//       <td class="list-item">${body}</td>
//       <td class="list-item">${dept}</td>
//     </tr>
//     `;
// }

// createTable();


const submitBnt = document.querySelector('input[type="submit"]');
const resetBnt = document.querySelector('input[type="reset"]');

const handleSubmitClick = event => {
  event.preventDefault();
  monthPayment();
};

const reset = function() {
  document.querySelector(".annuity-ratio").innerHTML = null;
  document.querySelector(".month-payment").innerHTML = null;
  document.querySelector(".debt-balance").innerHTML = null;
  document.querySelector(".form").reset();
  return;
};
const handleResetClick = event => {
  event.preventDefault();
  reset();
};


submitBnt.addEventListener("click", handleSubmitClick);
resetBnt.addEventListener("click", handleResetClick);

