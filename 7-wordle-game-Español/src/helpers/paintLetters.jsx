export function setLetterColor(wordToPaint,word) {

  countPaint(wordToPaint)
  countRepited(word);

  const temp =[]
  wordToPaint.forEach((letter, index)=>{
    const properties = {}
    //pintar green
    //si la letra esta en la posicion correcta
    if(letter === word[index]){
      properties.color = 'green'
      const tecla = document.querySelector(`button[value="${letter}"]`);

      tecla.classList.remove('bg-yellow-500');
      tecla.classList.add('bg-green-500');

      timesPainted.set(letter,timesPainted.get(letter)+1);
      
      if(timesPainted.get(letter) > repited.get(letter)){

          // si la letter ya esta pintada de green y no esta repetida no debe pintarse de yellow en otras posiciones

          for (let i = 0; i < temp.length; i++) {

            if(temp[i].letter === letter && temp[i].color != 'green' ){
              temp[i].color = 'gray'
            }
            
          }
      }
    }

    //pintar de yellow :`(
    //1- si la letter aparece en la palabra
    //2- si la letter no esta en lugar correcto dentro de la palabra
    if(word.includes(letter) && letter !== word[index] ){
        const tecla = document.querySelector(`button[value="${letter}"]`);

        //3- si la cantida de veces pintada es menor a la cantidad de veces que se repite la letter
        if(timesPainted.get(letter) < repited.get(letter) ){
            properties.color = 'yellow'

            if(!tecla.classList.contains('bg-green-500')){
              tecla.classList.add('bg-yellow-500');
            }
            timesPainted.set(letter,timesPainted.get(letter)+1);
        }else{
          properties.color = 'gray'
        }
    }

    // //pintar grey
    if(!word.includes(letter)){
        const tecla = document.querySelector(` button[value="${letter}"]`);

        properties.color = 'gray'
        tecla.classList.add('bg-gray-500');

    }

    properties.timesPainted = timesPainted.get(letter);
    properties.letter = letter;
    temp.push({...properties})
  })
  return temp
}

let timesPainted = new Map();
let repited = new Map();

function countPaint(array){
  for(let i = 0 ; i < array.length ; i++ ){
      timesPainted.set(array[i],0);
  }
}

function countRepited(word){
  const wordToSort = [...word]
  let sort = wordToSort.sort();
  let count = 1;

  for(let i = 0 ; i < sort.length ; i++ ){

      if(sort[i] === sort[i+1]){
          count++;
      }else{

          repited.set(sort[i],count);
          count = 1;
      }
  }
}
