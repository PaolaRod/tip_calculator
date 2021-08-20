const billBtn = document.querySelector('.container__bill input');
const peopleBtn = document.querySelector('.container__people input');
const inputTipAmount = document.querySelector('[data-tip-amount]');
const inputTotal = document.querySelector('[data-amount-total]');

const tipApp = () => {
    let tipAmount = 0;
    let total = 0;

    const selectTip = () => {
        const tips = document.querySelectorAll('.tip');
        const zero = document.querySelector('.zero');

        billBtn.addEventListener('click', () => {
            billBtn.classList.add('focus');
        });

        tips.forEach(tip => {
            tip.addEventListener('click', () => {
                tipAmount = parseInt(billBtn.value) * (parseInt(tip.innerText) / 100);

                if (parseInt(peopleBtn.value) === 0 || peopleBtn.value === '') {
                    console.log('No puede ser 0')
                    zero.classList.add('fadeIn');
                } else if (zero.classList.contains('fadeIn')) {
                    zero.classList.remove('fadeIn');
                    zero.classList.add('fadeOut');
                } else {
                    inputTotal.textContent = tipAmount.toFixed(2);
                    total = tipAmount / parseInt(peopleBtn.value);
                    inputTipAmount.textContent = total.toFixed(2);
                }
            })
        })
    }


    const resetForm = () => {
        const resetBtn = document.querySelector('.reset');

        resetBtn.addEventListener('click', () => {
            billBtn.value = "";
            peopleBtn.value = "";
            inputTotal.textContent = '$0.00';
            inputTipAmount.textContent = '$0.00';
            // tipAmount = 0;
            // total = 0;
        });

    }

    selectTip();
    resetForm();

}

tipApp();




