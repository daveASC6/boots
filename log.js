// let button = document.getElementById("submitButton");
// button.addEventListener("click", processInput );

// function processInput(){;
//     let input = document.getElementById("username");
//     let val = input.value;
//     alert(val + " is smart");
// }

let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title");

titleInput.addEventListener("keyup", changeMain)
function changeMain(){
    mainTitle.innerText = "Welcome, " + title_input.value
    // alert(title_input.value);
}

let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");

let button = document.getElementById("submit_button")
button.addEventListener("click", buttonPress);

function buttonPress(event){
    event.preventDefault
    if(titleInput.value == "" || noun.value == "" || verb.value == "" || adjective.value == ""){
        alert("You need to complete the sign up sheet!!")
    }
    else{
        alert("Welcome to Dave.co, " + titleInput.value + ". Your Password is " + noun.value + ".")
    }
}

