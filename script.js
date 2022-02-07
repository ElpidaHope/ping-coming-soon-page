let form = document.querySelector("form");
let userEmail = document.querySelector("input:nth-child(1)");


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (userEmail.value === "" || !validateEmail(userEmail.value)) {
        form.classList.add("error")
    }

    else {
        form.classList.remove("error")
        userEmail.value = ""
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
