let inputNumber = document.querySelector("#inputNumber")
let clickBtn = document.querySelector("#clickBtn");
let para = document.querySelector("#para");

clickBtn.addEventListener("click", function() {
if(inputNumber.value !== "") {

    function amne(yearParameter) {
    if((yearParameter % 400 === 0) || ((yearParameter % 4  ===0) && (yearParameter % 100 !== 0))) {
    para.innerHTML =`${yearParameter} is a leap year`;
   }else{
    para.style.color ="#790000"
    para.innerHTML =`${yearParameter} is not leap year`;
   }
   }

   amne(inputNumber.value)
   
}else{
    alert("please input year");
}
})