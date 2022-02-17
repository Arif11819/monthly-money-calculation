// Expenses input field
function getInputValue(product) {
    const expensesInput = document.getElementById(product + '-field');
    const expensesAmount = parseInt(expensesInput.value);
    return expensesAmount;
};
// calculate total expenses and balance
function getTotalUpdate() {
    const totalExpenses = getInputValue('food') + getInputValue('rent') + getInputValue('clothes');
    document.getElementById('total-expenses').innerText = totalExpenses;
    const totalBalance = getInputValue('income') - totalExpenses;
    document.getElementById('total-balance').innerText = totalBalance;
    return totalBalance;
};
// save input field
function getSaveInput(number) {
    const saveInput = document.getElementById(number + '-field');
    const saveAmount = parseInt(saveInput.value);
    return saveAmount;
};
// update save total
function getSaveTotal() {
    const saveTotal = (getSaveInput('income') * getSaveInput('save')) / 100;
    document.getElementById('total-saving').innerText = saveTotal;
    return saveTotal;
};
// calculate remaining total balance
function getRemainingTotal() {
    const remainingTotal = document.getElementById('remaing-total-balance').innerText = getTotalUpdate() - getSaveTotal();
};
// error handle
function getCalculateError(message) {
    const inputField = document.getElementById(message + '-field').value;
    if (isNaN(inputField)) {
        const errorMessage = document.getElementById('again-failed');
        errorMessage.style.display = 'block';
    }
    else if (inputField < 0) {
        const moreError = document.getElementById('more-failed');
        moreError.style.display = 'block';
    }
    else {
        console.log('tell me now');
    }

};
// error handle
function getErrorMessage() {
    const totalBalance = document.getElementById('total-balance').innerText;
    const totalSaving = document.getElementById('total-saving').innerText;
    totalBalance.value = totalSaving;
    if (totalBalance < totalSaving) {
        const failError = document.getElementById('notify-failed');
        failError.style.display = 'block';
    }
    else {
        const failError = document.getElementById('notify-failed');
        failError.style.display = 'none';
    }
};
// error handle
function incomeError() {
    const incomeField = document.getElementById('income-field').value;
    const totalExpenses = document.getElementById('total-expenses').innerText;
    if (incomeField < totalExpenses) {
        const lastFailed = document.getElementById('last-failed');
        lastFailed.style.display = 'block';
    }
    else {
        const lastFailed = document.getElementById('last-failed');
        lastFailed.style.display = 'none';
    }
};

// calculate handler
document.getElementById('calculate-total').addEventListener('click', function () {
    getInputValue('income');
    getInputValue('food');
    getInputValue('rent');
    getInputValue('clothes');
    getTotalUpdate();
    getCalculateError('income');
    getCalculateError('food');
    getCalculateError('rent');
    getCalculateError('clothes');
    incomeError();

});
// save handler
document.getElementById('save-button').addEventListener('click', function () {
    const totalSaving = document.getElementById('total-saving');
    getSaveInput('save');
    getSaveInput('income');
    getSaveTotal();
    getTotalUpdate();
    getRemainingTotal();
    getErrorMessage();
});