
const inputID = document.querySelector("#inputID");
const ul = document.querySelector("#ul");
const para = document.querySelector("#para");

function clickButton() {

    if(inputID.value !== "") {
        function fizzBuzz(number) {

                for(i = 0; i <= number; i++) {
                    if( i % 15 === 0 ) {
                        const li = document.createElement("li");
                        ul.appendChild(li)
                        li.innerHTML = `${i} is a divisibles`;
                    
                    }else if( i % 3 === 0 ){
                        const li = document.createElement("li");
                        ul.appendChild(li)
                        li.innerHTML = `${i} is a 3 divisibles`;
                    }else if(i % 5 === 0 ) {
                        const li = document.createElement("li");
                        ul.appendChild(li)
                        li.innerHTML = `${i} is 5 divisibles`;
                    }else {
                        const li = document.createElement("li");
                        ul.appendChild(li)
                        li.innerHTML= i;
                    }
                }
              
                inputID.value = ""
              
              }
              
              fizzBuzz(inputID.value)
    }else{
        alert("please input number")
    }
 }

