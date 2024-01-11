let shake = document.querySelector('#shake-btn');
let input = document.querySelector('#question')
let answer = document.querySelector('.answer_text')
let ball = document.querySelector('.magic_ball')

let answerBall = () => {
    let question;
    let answerArray = ['Бесспорно','Предрешено','Никаких сомнений','Определённо да', 'Можешь быть уверен в этом', 'Мне кажется — «да»', 'Вероятнее всего','Хорошие перспек-тивы', 'Знаки говорят — «да»', 'Да', 'Пока не ясно, попробуй снова', 'Спроси позже', 'Лучше не расска-зывать', 'Сейчас нельзя предска-зать', "Сконцентри-руйся и спроси опять", 'Даже не думай', 'Мой ответ — «нет»', 'По моим данным — «нет»', 'Перспективы не очень хорошие','Весьма сомни-тельно'];
    let questionWords = ['как', 'где', 'зачем', 'какой', 'какая', 'какие', 'когда', 'кто', 'куда', 'откуда', 'почему', 'сколько', 'чей', 'чья', 'чьи', 'что', 'чем', 'чём', 'ком', 'каком', 'почём', 'почем'];
    let rusLetters = 'абвгдеёжзийклмнопрстуфхцшщэюя';

    question = input.value.trim().toLowerCase();
    if (question === '') {
        answer.textContent = 'Введите вопрос'
    } else if (questionWords.includes(question.split(' ')[0]) || questionWords.includes(question.split(' ')[1])) {
    answer.textContent = 'Я отвечаю только на вопрос да или нет'
    } else if (typeof +question != 'string' && typeof question !== null && isNaN(question) === false) {
        answer.textContent = 'Вопрос должен быть строкой'
    } else if (question.split('').some(el => rusLetters.split('').includes(el)) == true) {
        setTimeout(() => answer.textContent = (answerArray[Math.floor(Math.random() * answerArray.length)]), 100)
        setTimeout(() => answer.textContent = (answerArray[Math.floor(Math.random() * answerArray.length)]), 200)
        setTimeout(() => answer.textContent = (answerArray[Math.floor(Math.random() * answerArray.length)]), 300)
        setTimeout(() => answer.textContent = (answerArray[Math.floor(Math.random() * answerArray.length)]), 400)
        setTimeout(() => answer.textContent = (answerArray[Math.floor(Math.random() * answerArray.length)]), 500)
        ball.classList.add('shake-ball-animation')
    } else {
        answer.textContent = "Sorry, I don't speak English"
    }
    input.value = ''
    setTimeout(() => ball.classList.remove('shake-ball-animation'), 600)
}

shake.addEventListener('click', answerBall)
input.onkeypress = function(e) {
    if (e.keyCode === 13) {
        answerBall()
    }
}
