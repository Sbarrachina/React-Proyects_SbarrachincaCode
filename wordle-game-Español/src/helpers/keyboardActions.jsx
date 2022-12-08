export function deleteLetter(attemptWord) {

    //borrar letra
    let newAttempt = attemptWord;
    for (let i = 0 ; i < attemptWord.length; i++){
      if(newAttempt[i] === '' && i>0){
          newAttempt[i-1] = '';
          break;
      }

      if( i === attemptWord.length - 1){
        newAttempt[i] = '';
        break;
      }
    }

    return newAttempt
}


export function addLetter(attemptWord,letter) {

  let newAttempt = attemptWord;
  for (let i = 0 ; i < attemptWord.length; i++){
    if(newAttempt[i] === ''){
        newAttempt[i] = letter;
        break;
    }
  }

  return newAttempt;
}