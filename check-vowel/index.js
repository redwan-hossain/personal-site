
const inputID = document.querySelector("#inputID");

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

 function clickFunc(){

    function forSearch(passSentence){

        let count = 0;
        let newnArray = Array.from(passSentence);
    
        newnArray.forEach(function(cval){

          if(vowels.includes(cval)){
            count++;
          }
          
        })
    
          return document.querySelector("#demo").innerHTML = "There is vowel " + count
         
    }
    
    forSearch(inputID.value.toLowerCase());

  }
