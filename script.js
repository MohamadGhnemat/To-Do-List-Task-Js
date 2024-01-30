

document.querySelector(".data button").onclick = function(){
    var inputValue = document.querySelector(".data input");
    document.querySelector(".results").innerHTML += `
    <li class="result">
    <input type="checkbox" id="task" name="task"  />
    <span> ${inputValue.value}</span>
  </li>
    `
    inputValue.value = ""
   
    check()
   
}

function check(){
    let allCheckbox = document.querySelectorAll("[type='checkbox']");
    for(let i =0 ; i < allCheckbox.length ; i++){
      
        allCheckbox[i].onclick =function(){
            if(allCheckbox[i].checked){
                allCheckbox[i].nextElementSibling.classList.add("delete")
                allCheckbox[i].parentElement.classList.add("changeColor");
            } else {
                allCheckbox[i].nextElementSibling.classList.remove("delete")
                allCheckbox[i].parentElement.classList.remove("changeColor");
            }
         

        }
       
    }
       
    }
   

