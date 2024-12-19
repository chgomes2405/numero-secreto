let listOfDrawnNumbers = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let = attempts = 1;

function displayTextOnScreen(tag, texto){
  let camp = document.querySelector(tag);
  camp.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function displayInitialMessage(){
  displayTextOnScreen('h1' , 'Jogo do número secreto' );
  displayTextOnScreen('p' , 'Escolha um número de 1 a 10');
}
displayInitialMessage();

function checkKick(){
  let kick = document.querySelector('input').value;
  if (kick == secretNumber){
    displayTextOnScreen('h1', 'Você Acertou!');
    let wordTry = attempts > 1 ? 'tentativas' : 'tentativa';
    let messageAttempts = `Você descobriu o número secreto com ${attempts} ${wordTry}.`
    displayTextOnScreen('p', messageAttempts);
    document.getElementById('restart').removeAttribute('disabled');
  } else {
    if (kick > secretNumber){
      displayTextOnScreen('p', 'O número é menor.');
    } else {
      displayTextOnScreen('p', 'O número é maior.');
    }
    attempts++;
    clearField();
    
  }
}

function generateRandomNumber(){
  let chosenNumber =  parseInt(Math.random() * limitNumber + 1);
  let numberOfElementsInTheList = listOfDrawnNumbers.length;

  if(numberOfElementsInTheList == limitNumber) {
    listOfDrawnNumbers = [];
  }
  if (listOfDrawnNumbers.includes(chosenNumber)) {
    return generateRandomNumber(); 
  } else {
    listOfDrawnNumbers.push(chosenNumber);
    console.log(listOfDrawnNumbers)
    return chosenNumber;
  }
}
function clearField(){
  kick = document.querySelector('input');
  kick.value = '';
}

function restartGame(){
  secretNumber = generateRandomNumber();
  clearField();
  attempts = 1;
  displayInitialMessage();
  document.getElementById('restart').setAttribute('disabled', true);

}


