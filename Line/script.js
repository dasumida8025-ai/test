function sendMessage(){

  const input = document.getElementById("messageInput");
  const chatArea = document.getElementById("chatArea");

  if(input.value.trim() === ""){
    return;
  }

  const message = document.createElement("div");

  message.classList.add("message");
  message.classList.add("me");

const now = new Date();

const time =
  now.getHours().toString().padStart(2,"0")
  + ":"
  + now.getMinutes().toString().padStart(2,"0");

message.innerHTML = `

  <div class="message-info">

    <div class="read-status">
      既読
    </div>

    <div class="message-time">
      ${time}
    </div>

  </div>

  <div class="bubble me-bubble">
    ${input.value}
  </div>
`;

  chatArea.appendChild(message);

  input.value = "";

  chatArea.scrollTop = chatArea.scrollHeight;
}