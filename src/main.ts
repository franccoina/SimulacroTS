import { LoginController } from "./controllers/login.controller"
import { IBodyRequestLogin, IBodyResponseLogin } from "./models/login.model"

const loginForm = document.querySelector("#login-form") as HTMLFormElement;
const emailUser = document.querySelector("#email-user") as HTMLInputElement;
const passwordUser = document.querySelector("#password-user") as HTMLInputElement;
const urlDomain = "https://reqres.in/api";

loginForm.addEventListener("submit", async (event: Event) => {
  event.preventDefault();

  const dataUser: IBodyRequestLogin = {
    email: emailUser.value,
    password: passwordUser.value,
  };

  try {
    const pageController = new LoginController(urlDomain);
    const responseLogin: IBodyResponseLogin = await pageController.login(dataUser, "/login");

    localStorage.setItem("token", responseLogin.token);

    const getToken = localStorage.getItem("token");

    if (getToken) {
      window.location.href = "./src/views/home.html"
      // Redirect to dashboard page
    }
  } catch (error) {
    console.error(error)
    // Display error message
  }
})