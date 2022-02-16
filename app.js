document.getElementById('calculate-total').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-field');
    const incomeAmount = parseInt(incomeInput.value);

    const foodInput = document.getElementById('food-field');
    const foodAmount = parseInt(foodInput.value);

    const rentInput = document.getElementById('rent-field');
    const rentAmount = parseInt(rentInput.value);

    const clothesInput = document.getElementById('clothes-field');
    const clothesAmount = parseInt(clothesInput.value);

    const totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
    restIncomeAmount = incomeAmount - totalExpensesAmount;

    // get total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;
    totalExpenses.innerText = totalExpensesAmount;

    // get total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = restIncomeAmount;

})

document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('save-field');
    const saveAmount = parseInt(saveInput.value);

    const totalSaving = document.getElementById('total-saving');

    const incomeInput = document.getElementById('income-field');
    const incomeAmount = parseInt(incomeInput.value);

    const savingAmount = (incomeAmount * saveAmount) / 100;
    totalSaving.innerText = savingAmount;

    const remainingTotal = document.getElementById('remaing-total-balance');


})