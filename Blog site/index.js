        let menu_icon = document.querySelector("#menu_icon");
        let menu_nav = document.querySelector("#menu_nav");
    
        
         function showAlert() {
               alert("Sorry, for now the Read More option is only the design part")
         }

         function showLearnAlert() {
            alert("Sorry, for now the Learn More option is only the design part")
      }

      let Submit = () => {
        alert("Sorry, for now the submit option is only the design part")
      }



        menu_icon.addEventListener("click", function() {
        if(menu_nav.className === 'hidden'){
            menu_nav.classList.remove("hidden");
        }else{
            menu_nav.classList.add("hidden");
        }
        });