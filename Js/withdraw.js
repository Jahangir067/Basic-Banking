//  Step -1: Add Event Listener With Withdraw Button
document.getElementById('btn-withdraw').addEventListener('click', function(){
  // Step -2: Get The Withdraw Amount From Input Field
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawString);
  
  // Step -3: Get Current Withdraw Total
  // For non-input tag : Use .innerText to get input text
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawString);
  // Step -4: Add Numbers to set the total Withdraw
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  // Set The Withdraw Total
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // Step- 5: Get Total Current Balance
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceString);

  // Step -6: Calculate Current Total Balance
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;


  // Clear The Input Field
  withdrawField.value = '';

})