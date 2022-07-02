const body = document.querySelector("body");
const para = document.createElement("p");
const button = document.querySelector("button");

function fizzBuzz() {
  const max = prompt("Enter a number:")
  let content = ""

  for (let i = 1; i <= max; i++) {
    const multOf3 = !(i % 3), multOf5 = !(i % 5);

    if (multOf3 && multOf5) content += "FizzBuzz<br>";
    else if (multOf3) content += "Fizz<br>";
    else if (multOf5) content += "Buzz<br>";
    else content += `${i}<br>`
  }

  body.appendChild(para);
  para.innerHTML = content;
}

button.addEventListener("click", fizzBuzz);
