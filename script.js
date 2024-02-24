document.getElementById("downloadButton").addEventListener("click", function() {
        window.location.href = "https://download1979.mediafire.com/7269giy3vt0g1vjHD-wxzT65CRQiSlYqDQ4ftssUgv2RmlP8SQaitcmKimR8BAWG6IJO_48pIy6N3s3g1nqx6h-tyH-48GfTDtOFFHJy852B1yy6MSCVZ3mSQuYZkVoNqZzmeWVO-oPowcO8-TMmQK8C2ToCZQvBHuHv5b4OUs7tww/4kjd2mm69bxmt33/Smart+Dev_2.0_Update.apk";
    });
const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
        }, 600);
      });
    });
