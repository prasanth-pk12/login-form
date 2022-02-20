const btn = document.getElementById("btn");
const data = document.getElementById("data");
let userData = null;

// #######################################################

function showData(userData) {
  data.innerHTML = userData;
}

// #######################################################

// callback Part
/*
function checkLogIn(name, pass, callback) {
  setTimeout(() => {
    if (name == "Prasanth" && pass == "pk@123") {
      data.style.color = "green";
      userData = "Login Success 🎉";
      callback(userData);
    } else {
      data.style.color = "red";
      userData = "Incorrect Details 👎";
      callback(userData);
    }

    document.getElementById("password").value = "";
    document.getElementById("uname").value = "";
  }, 2000);
}
*/

// #######################################################

// Promise Part

//Key Words : new Promise, then, catch
/*
function checkLogIn(name, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name == "Prasanth" && pass == "pk@123") {
        data.style.color = "green";
        userData = "Login Success 🎉";
        resolve(userData);
      } else {
        data.style.color = "red";
        error = "Incorrect Details 👎";
        reject(error);
      }

      document.getElementById("password").value = "";
      document.getElementById("uname").value = "";
    }, 2000);
  });
}
*/

// #######################################################

// Async await Part

function checkLogIn(name, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name == "Prasanth" && pass == "pk@123") {
        data.style.color = "green";
        userData = "Login Success 🎉";
        resolve(userData);
      } else {
        data.style.color = "red";
        error = "Incorrect Details 👎";
        reject(error);
      }

      document.getElementById("password").value = "";
      document.getElementById("uname").value = "";
    }, 2000);
  });
}

// #######################################################

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const pass = document.getElementById("password").value;
  const uname = document.getElementById("uname").value;

  // *****************************************************

  // Callback Part
  // const response = checkLogIn(uname, pass,showData)

  // *****************************************************

  // Promise Part
  /*
  const response = checkLogIn(uname, pass)
  
  // userData from resolve
  .then((userData) => {
      showData(data);
    })

    // error form reject 
    .catch((error) => {
      showData(error);
    });
*/

  // *****************************************************

  // Async await Part

  async function login() {
    try {
      await checkLogIn(uname, pass);
      // userData from resolve
      showData(userData);
    } catch {
      // error from reject
      showData(error);
    }
  }

  login();

  // *****************************************************

});

// #######################################################
