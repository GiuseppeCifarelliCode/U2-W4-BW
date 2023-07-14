const formReference = document.querySelector("form");
const usernameInputField = document.getElementById("text-center");

formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInputField.value;
  localStorage.setItem("username", JSON.stringify(username));
  window.location.href = "./index.html";
});
