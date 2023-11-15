const inputRange = document.querySelector(".range"),
  copyBtn = document.querySelector(".inpts i"),
  inputText = document.querySelector(".inp"),
  btnGenerator = document.querySelector("#btn_genrator"),
  spanEl = document.querySelector(".range_value");

const allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

const generatePassword = () => {
  let validPassword = "";

  for (let i = 0; i < inputRange.value; i++) {
    const rondomNumber = Math.floor(Math.random() * allCharacters.length);
    validPassword += allCharacters[rondomNumber];
  }

  inputText.value = validPassword;
  copyBtn.className = "fa-regular fa-copy";
};

inputRange.addEventListener("input", () => {
  spanEl.innerText = inputRange.value;
  generatePassword();
});

btnGenerator.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(inputText.value);
  copyBtn.className = "fa-solid fa-check";
});
