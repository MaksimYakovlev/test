let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timData: time,
    expenses: {},
    optionalExprenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let question1 = prompt('Введите обязательную статью расходов в этом месяце');
        let question2 = prompt('Во сколько обойдется?');
        if (typeof (question1) === 'string' && typeof (question1) != null && typeof (question2) === 'string' && typeof (question2) != null && question1 != '' && question2 != '' && question1.length < 50) {
            console.log('done');
            appData.expenses[question1] = question2;
        }

    }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Ежедневный бюджет:' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Миниимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средниий уровень достатка');
} else if (appData.moneyPerDay > 200) {
    console.log('Высокиий уровень достатка');
} else {
    console.log('Ошибка!');
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?');
        let percent = +prompt('Под какой процент?');
        appData.monthIncom = (save / 100 / 12 * percent).toFixed(2);
        alert('Доход в месяц с вашего депозиита: ' + appData.monthIncom);
    }
}

checkSavings();