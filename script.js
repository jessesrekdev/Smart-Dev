const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");
    setTimeout(() => {
      button.classList.remove("animate");
      showToast("Downloading Please wait 2 seconds as we prepare apk file for you 💝");
      setTimeout(() => {
        window.location.href = "https://download1979.mediafire.com/p03d64uqqmlghaAJHPGELdjyPe1APWXwPJKy_IIOTj-HHlnmY1CDfK8fHyhwE-7nl0SbFQuTSEBjDkXuCBPiBSwr6_PVzO2JW1D4RBqEIJd19zC-4-4EIqbyWVfwUA4IFI7ugUJs8lxiiZLs7Gk4PEEhHrDocPQxPfv29Xkq9bhROuo/4kjd2mm69bxmt33/Smart+Dev_2.0_Update.apk/file";
      }, 1000);
    }, 600);
  });
});

function showToast(message) {
  // Replace this with your toast implementation, like using a library or custom code
  alert(message);
}
