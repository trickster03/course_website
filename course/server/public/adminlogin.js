const signinBtn = document.getElementById("signinBtn");

signinBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email || !password) {
    return;
  }
  const { data } = await axios.post("/api/v1/admin", {
    email,
    password,
  });

  let email1 = document.getElementById("email");
  let password1 = document.getElementById("password");

  email1.value = "";
  password1.value = "";
  window.location.href = "file-upload.html";
  console.log(data);
});
