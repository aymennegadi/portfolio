function sendMessage(){
  var user_name = document.getElementById("name").value;
  var user_message = document.getElementById("email").value;
  var user_tel = document.getElementById("tel").value;

  var message = "Name: " + user_name + "\nEmail" + email + "\nTel: " + user_tel;
  const bot_id  = '7890966434:AAGxUMC6QwHsuJT8a0C6N39rLIC3Pqls2G8'

  console.log(message);

   fetch("https://api.telegram.org/bot" +bot_id + "/sendMessage"),{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
   },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message
    })
  .then(response => response.json())
  .then(data => {
    console.log(message);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";

    .catch(error => {
       console.error("Error sending message", error);
  });
});

  return false;
}