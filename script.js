const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");
    setTimeout(() => {
      button.classList.remove("animate");
      showToast("Downloading Please wait 2 seconds as we prepare apk file for you 💝");
      setTimeout(() => {
        window.location.href = "https://raw.githubusercontent.com/jessesrekdev/Smart-Dev/apk/Smart%20Dev_2.0.apk";
      }, 1000);
    }, 600);
  });
});

function showToast(message) {
  // Replace this with your toast implementation, like using a library or custom code
  alert(message);
}
