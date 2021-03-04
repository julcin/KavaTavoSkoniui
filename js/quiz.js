const form = document.querySelector('#quizForm');
const answerBlock = document.querySelector('#answer-block')
let answerArray;
let answer;

setAnswerArrayEmpty();

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  calculateAnswer();
  displayAnswer();
  form.reset();
  setAnswerArrayEmpty();
}


function calculateAnswer() {
  const inputs = document.getElementsByTagName('input');
  //counting values to array
  for(let input of inputs) {
    if(input.type="radio") {       
      if(input.checked) 
        switch (input.value) {
          case "pirma":
            answerArray[0].count += 1;
            break;
          case "antra":
            answerArray[1].count += 1;
            break;
          case "trecia":
            answerArray[2].count += 1;
            break;
          case "ketvirta":
            answerArray[3].count += 1;
            break;
          case "penkta":
            answerArray[4].count += 1;
            break;
          case "sesta":
            answerArray[5].count += 1;
            break;
        }
    } 
  }
  //sorting array from max to min:
  answerArray.sort(function(a, b) {
    return b.count - a.count;
  });
  //giving answer value
  answer = answerArray[0].name;
}

function displayAnswer() {
  answerBlock.innerHTML = `<div>
  <p class="h6 text-center">Jums Labiausiai tinka <span id="answer-coffe">${answer}</span> kava! Kavą galite įsigyti mūsų parduotuvėje:</p>
</div>
<div class="text-center">
  <a id="answer-coffe-btn" href="shop.html" class="btn" role="button">Parduotuvė</a>
</div>`

}

//for array reseting to empty
function setAnswerArrayEmpty() {
  answerArray = [
    {name: "DONNA NUA",
     count: 0},
     {name: "FLORES DE LUZ",
     count: 0},
     {name: "IMMORTELLE",
     count: 0},
     {name: "PRIMROSE",
     count: 0},
     {name: "JUQUINHA ESPRESSO",
     count: 0},
     {name: "SABOROS",
     count: 0}
  ];
}