const billBtn = document.querySelector(".container__bill input");
const peopleBtn = document.querySelector(".container__people input");
const inputTipAmount = document.querySelector("[data-tip-amount]");
const inputTotal = document.querySelector("[data-amount-total]");
const tips = document.querySelectorAll(".tip");
const customBtn = document.querySelector(".custom");
const zero = document.querySelector(".zero");

let bill = 0;
let people = 1;
let tip = 0;
let tipAmount = 0;
let total = 0;

const validateNum = (n) => {
  let rgx = /^[0-9]*\.?[0-9]*$/;
  return n.match(rgx);
};

const validateInt = (n) => {
  let rgx = /^[0-9]*$/;
  return n.match(rgx);
};

const getBill = () => {
  if (!validateNum(billBtn.value)) {
    billBtn.value = billBtn.value.substring(0, billBtn.value.length - 1);
  }

  bill = parseFloat(billBtn.value);
  calTip();
};

const selectTip = (e) => {
  tips.forEach((btn) => {
    if (e.target.innerHTML === btn.innerHTML) {
      tip = parseFloat(btn.innerHTML) / 100;
    }
  });
  customBtn.value = "";
  calTip();
};

const getPeople = () => {
  if (!validateInt(peopleBtn.value)) {
    peopleBtn.value = peopleBtn.value.substring(0, peopleBtn.value.length - 1);
  }

  people = parseFloat(peopleBtn.value);

  if (people === 0) {
    zero.classList.add("fadeIn");
  } else if (zero.classList.contains("fadeIn")) {
    zero.classList.remove("fadeIn");
    zero.classList.add("fadeOut");
  }

  calTip();
};

const custom = () => {
  if (!validateInt(customBtn.value)) {
    customBtn.value = customBtn.value.substring(0, customBtn.value.length - 1);
  }

  tip = parseFloat(customBtn.value) / 100;

  if (customBtn.value !== "") {
    calTip();
  }
};

const calTip = () => {
  tipAmount = (bill * tip) / people;
  total = bill * tip;
  inputTipAmount.textContent = tipAmount.toFixed(2);
  inputTotal.textContent = total.toFixed(2);
};

const resetForm = () => {
  const resetBtn = document.querySelector(".reset");

  resetBtn.addEventListener("click", () => {
    billBtn.value = "";
    tip = 0;
    peopleBtn.value = "";
    inputTotal.textContent = "0.00";
    inputTipAmount.textContent = "0.00";
    customBtn.value = "";
    // tipAmount = 0;
    // total = 0;
  });
};

resetForm();

billBtn.addEventListener("input", getBill);
peopleBtn.addEventListener("input", getPeople);
customBtn.addEventListener("input", custom);
tips.forEach((btn) => {
  btn.addEventListener("click", selectTip);
});
