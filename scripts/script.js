const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputName = document.getElementById('input-name').value;
  const inputEmail = document.getElementById('input-email').value;
  const messageText = document.getElementById('message-text').value;

  const message = `Имя: ${inputName} %0AEmail: ${inputEmail} %0A%0AСообщение: %0A${messageText}`;

  const token = '6235496583:AAGd0WjGz5HQ6iMLfpsK3OQSt8TjQ3z9ufI';
  const chatId = '-614292046';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

  let api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();

  alert('Сообщение отправлено, спасибо.');
})
