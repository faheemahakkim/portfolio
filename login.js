document.querySelector("form").addEventListener("submit", function (event) {
    console.log("call");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;

  if (!email || !password || !phone) {
    alert("please fill out all the fields");
    event.preventDefault();
  }
});

