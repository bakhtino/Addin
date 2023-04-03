
function order() {
    let quanty = prompt("Have you learn English before?");
    let name = prompt("What is your first name?");
    let email = prompt("What is your email?");

    alert(
      "Thanks " +
      name +
      "! We'll be in touch soon with more details. Feel free to contact us if you have any questions +98 9351415419 / +98 9371734219"
      );
  }

  
  function toggleTheme() {
    if (theme === "light") {
      theme = "dark";
      document.querySelector("body").classList.add("dark");
    } else {
      theme = "light";
      document.querySelector("body").classList.remove("dark");
    }
  }



  let button = document.querySelector("#order-button");
  button.addEventListener("click", order);



  let theme = "dark";
  let themeButton = document.querySelector("#theme-button");
  themeButton.addEventListener("click", toggleTheme)



function darkMode(event){
  event.preventDefault();
  let lightMode= document.querySelector("#theme-button");
  lightMode.innerHTML="Dark mode";
    
}

  let changeTheme= document.querySelector("#theme-button");
  changeTheme.addEventListener("click", darkMode);


function changeMode(){
  if (theme === "light") {
    theme = "dark";
    document.querySelector("#theme-button").classList.add("dark");
  } else {
    theme = "light";
    document.querySelector("#theme-button").classList.remove("dark");
  } 
}

  let mode= document.querySelector("#theme-button");
  mode.addEventListener("click", changeMode);