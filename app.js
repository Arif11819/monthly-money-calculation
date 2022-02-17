// Expenses input field

function getInputValue(product) {
    const expenbsesInput = document.getElementById(product + '-field');
    const expensesAmount = parseInt(expenbsesInput.value);
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

function getRemainingTotal(totalBalance, saveTotal) {
    const remainingTotal = document.getElementById('remaing-total-balance').innerText = getTotalUpdate() - getSaveTotal();

}
// calculate handler

document.getElementById('calculate-total').addEventListener('click', function () {
    getInputValue('income');
    getInputValue('food');
    getInputValue('rent');
    getInputValue('clothes');
    getTotalUpdate();
});
// save handler

document.getElementById('save-button').addEventListener('click', function () {
    const totalSaving = document.getElementById('total-saving');
    getSaveInput('save');
    getSaveInput('income');

    getSaveTotal();

    getTotalUpdate();

    getRemainingTotal();

});