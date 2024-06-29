let btns = document.querySelectorAll('.toggle-btn');
let answers = document.querySelectorAll('.answer');

btns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    let answer = answers[index];

    //to close answers
    answers.forEach((answer, i) => {
      if (i !== index) {
        answer.style.display = 'none';
        btns[i].src = './assets/images/icon-plus.svg';
      }
    });

    //to toggle current answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      btn.src = './assets/images/icon-plus.svg';
    } else {
      answer.style.display = 'block';
      btn.src = './assets/images/icon-minus.svg';
    }
  });
});
