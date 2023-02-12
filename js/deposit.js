
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit btn');
    const newDepositAmount = getInputFieldValueById('deposit-input');
    // console.log(newDepositAmount);

    const previousDepositTotal = getTextElementValueById('deposit-total');
    // console.log(previousDepositTotal);

    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // console.log(newDepositTotal);

    setTextElementValueById('deposit-total', newDepositTotal);
    
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})