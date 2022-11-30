const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", (e) => {
  if(e.key === 'Enter') {
    getMessage();
  }
})

const getMessage = () => {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}