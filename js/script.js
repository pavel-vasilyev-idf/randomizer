// "Загадывание случайного числа от 1 до 100"

'use strict'

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


let startGame = function () {
    let randomNum = Math.ceil(Math.random()*100);
    console.log('randomNum: ', randomNum);
    let count = 10;

    let playGame = function () {
        let questionNum = prompt(`Угадай число от 1 до 100`);
        if (questionNum === null || questionNum === '') {
            if (confirm(' Вы ничего не ввели, игра окончена!! Хотите начать заново? ')) {
                startGame();
            } else {
                alert('Всего доброго');
                return;
            }
            return;
        } 
        
        if ((+questionNum > randomNum) && count > 1) {
            --count;
            alert(`Загаданное число меньше. Осталось ${count} попыток`);
            playGame();
        } else if ((+questionNum < randomNum) && count > 1) {
            --count;
            alert(`Загаданное число больше. Осталось ${count} попыток`);
            playGame();
        } else if (!isNumber(+questionNum)) {
            alert(`Введи число!`);
            playGame();
        } else if (count === 1) {
            if (confirm('Все попытки израсходованы. Начать сначала?')) {
                startGame();
            } else {
                alert('Всего доброго');
                return;
            }
        } else if ((+questionNum === randomNum) && count > 1) {
            if (confirm('Поздравляю, Вы угадали!!!Хотите начать сначал?')) {
                startGame();
            } else {
                alert('Всего доброго');
                return;
            }
        } 
    }
    playGame();
}

startGame();

