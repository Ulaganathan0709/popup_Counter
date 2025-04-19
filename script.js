const textarea = document.getElementById("message");
    const charInfo = document.getElementById("charInfo");
    const warnMsg = document.getElementById("warnMsg");
    const maxLength = 200;

    textarea.addEventListener("input", () => {
      const len = textarea.value.length;
      charInfo.textContent = `${len}/${maxLength} characters`;

      if (len >= maxLength) {
        warnMsg.textContent = "You’ve reached the character limit!";
      } else {
        warnMsg.textContent = "";
      }
    });