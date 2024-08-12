const button = document.querySelector("button");
// button.onclick = function(){

// }
const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};
const anotherButtonClickHandler = () => {
  alert("this was clicked!");
};
// button.onclick = anotherButtonClickHandler;
// button.onclick = buttonClickHandler;

// const boundFn = buttonClickHandler.bind(this);
// button.addEventListener("click", buttonClickHandler);
// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// button.forEach((btn) => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });
// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
const div = document.querySelector("div");

div.addEventListener(
  "click",
  (event) => {
    console.log("CLICKED DIV");
    console.log(event);
  }
  // ,true  set to true for event capturing
);
button.addEventListener("click", function (event) {
  // event.stopPropagation(); useed when we want not to execute the event of ancestor element

  //event.stopImmediatePropagation();  this is useful when we have mutiple events on same element and want to stop execution after first event

  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this);
});
const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");
// listItems.forEach((listItems) => {
//   listItems.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });
list.addEventListener("click", (event) => {
  event.target.classList.toggle("highlight");
  // form.submit(); when we click on the any of the list item the form will get submitted.
});
