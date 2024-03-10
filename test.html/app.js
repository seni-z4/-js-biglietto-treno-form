// console.log("hello world");

// const clickElement = document.getElementById("submit");
// console.log(clickElement);

// const color = document.getElementById("color-p");

// const titleElement = document.getElementById("title");

// clickElement.addEventListener("click", function () {
//   titleElement.classList.toggle("mb-3");
//   titleElement.classList.toggle("fs-2");
//   titleElement.style.color = "#FFD700	";
//   console.log("the button has been clicked ");
// });

const buttonElement = document.getElementById("submit");

const inputMailElement = document.getElementById("email");
const inputNameElement = document.getElementById("name");
console.dir(inputMailElement);
console.dir(inputNameElement);

const name = inputNameElement.value; //string
const email = inputMailElement.value; //string

console.log(name, email);

buttonElement.addEventListener("click", function () {
  const name = inputNameElement.value; //string
  const email = inputMailElement.value; //string

  console.log(email, name); //string
  console.log("button clicked");
});
