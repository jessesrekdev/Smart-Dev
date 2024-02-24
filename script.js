const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");
    setTimeout(() => {
      button.classList.remove("animate");
      showToast("Downloading...");
      setTimeout(() => {
        window.location.href = "https://www.mediafire.com/file/4kjd2mm69bxmt33/Smart+Dev_2.0_Update.apk/file";
      }, 2000);
    }, 600);
  });
});

function showToast(message) {
  // Replace this with your toast implementation, like using a library or custom code
  alert(message);
}
