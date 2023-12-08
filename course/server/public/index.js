const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");
let adminBtn = document.getElementById("admin");

const signinfunc = () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

const signupfunc = () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signinfunc();
});

signupBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  signupfunc();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    return;
  }

  const { data } = await axios.post("/api/v1/register", {
    name,
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  let name1 = document.getElementById("name");
  let email1 = document.getElementById("email");
  let password1 = document.getElementById("password");
  name1.value = "";
  email1.value = "";
  password1.value = "";
});
