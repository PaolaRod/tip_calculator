const billBtn = document.querySelector(".container__bill input");
const peopleBtn = document.querySelector(".container__people input");
const inputTipAmount = document.querySelector("[data-tip-amount]");
const inputTotal = document.querySelector("[data-amount-total]");

const tipApp = () => {
  let tipAmount = 0;
  let total = 0;

  const selectTip = () => {
    const tips = document.querySelectorAll(".tip");
    const zero = document.querySelector(".zero");

    billBtn.addEventListener("click", () => {
      billBtn.classList.add("focusCyan");
    });

    peopleBtn.addEventListener("click", () => {
      peopleBtn.classList.add("focusRed");
    });

    tips.forEach((tip) => {
      tip.addEventListener("click", () => {
        if (parseInt(peopleBtn.value) === 0 || peopleBtn.value === "") {
          console.log("No puede ser 0");
          zero.classList.add("fadeIn");
          return;
        } else if (zero.classList.contains("fadeIn")) {
          zero.classList.remove("fadeIn");
          zero.classList.add("fadeOut");
        } 
        tipAmount = parseInt(billBtn.value) * (parseInt(tip.innerText) / 100);
        inputTotal.textContent = tipAmount.toFixed(2);
        total = tipAmount / parseInt(peopleBtn.value);
        inputTipAmount.textContent = total.toFixed(2);
        billBtn.classList.remove("focusCyan");
        peopleBtn.classList.remove("focusRed");
      });
    });
  };

  const resetForm = () => {
    const resetBtn = document.querySelector(".reset");

    resetBtn.addEventListener("click", () => {
      billBtn.value = "";
      peopleBtn.value = "";
      inputTotal.textContent = "0.00";
      inputTipAmount.textContent = "0.00";
      billBtn.classList.remove("focusCyan");
      peopleBtn.classList.remove("focusRed");
      // tipAmount = 0;
      // total = 0;
    });
  };

  selectTip();
  resetForm();
};

tipApp();
