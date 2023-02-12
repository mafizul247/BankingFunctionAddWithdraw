
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw btn');
    
    const newWithdrawAmount = getInputFieldValueById('withdraw-input');
    // console.log(newWithdrawAmount);

    const previousWithdrowTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrowTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalanceTotal);
})