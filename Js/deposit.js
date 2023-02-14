// Step -1: Add Event Listener With Deposit Button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step -2: Get The Depsoit Amount From Input Field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    
  // Step -3: Get Current Deposit Total
  // For non-input tag : Use .innerText to get input text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step -4: Add Numbers to set the total Deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // Set The Deposit Total
    depositTotalElement.innerText = currentDepositTotal;

    // Step- 5: Get Total Current Balance

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    // Step -6: Calculate Current Total Balance
    const currrentBalance = balanceTotal + newDepositAmount;
    // Set The Balance Total
    balanceTotalElement.innerText = currrentBalance;

    //  Clear Input Field After Submit
    depositField.value = '';
})