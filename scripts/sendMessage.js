const form = document.getElementById('form');

let bot = {
  token: '6235496583:AAGd0WjGz5HQ6iMLfpsK3OQSt8TjQ3z9ufI',
  chatID: '-614292046',
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputName = document.getElementById('input-name').value;
  const inputEmail = document.getElementById('input-email').value;
  const messageText = document.getElementById('message-text').value;

  const message = `Имя: ${inputName} %0AEmail: ${inputEmail} %0A%0AСообщение: %0A${messageText}`;

  fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${message}`, {
    method: 'GET'
  })
  .then(success => {
    alert('Сообщение отправлено, спасибо.');
  }), error => {
    alert('Сообщение не отправлено, ошибка.');
    console.log(error);
  }

})