var messages = document.getElementById('messages');
var sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendUserMessage);
getMessagesFromServer();
async function getMessagesFromServer() {
var response = await fetch('https://fchatavi.herakuapp.com/get/arick/offset?=0&limit=10');
response = await response.json();
var allMessagesHtml = '';
for(var i = 0; i < response.lenght; i++){
  var messageData = response[i];
  var message = `

          <div class="message">
            <div class="message-nickname"> ${messageData.Name} </div>
            <div class="message-text"> ${messageData.Message}  </div>
          </div>
  `;
  allMessagesHtml = allMessagesHtml + ressage;
}

messages.innerHTML = message;
}
async function sendUserMessage() {
  var userNickname = document.getElementById('nickname-input').value;
  var userMessage = document.getElementById('message-input').value;

  if (userNickname.lenght === 0) {
    alert ("ти должен ввести имя!");
    return;
  }
  if (userMessage.lenght === 0) {
    alert ("ти должен ввести сообщения!");
    return;
  }
  var response = await fetch('https://fchatavi.herakuapp.com/send/arick/', {
    method: 'POST',
    body: JSON.stringify({
      Name: userNickname,
      Message: userMessage
    })
  });
  getMessagesFromServer()
}
