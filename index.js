const btns = document.querySelectorAll(".btn");
const clrBtn = document.querySelector("#clear");
const count = document.querySelector(".count");
const error = document.querySelector("#error");

const handleDecrement = (currentValue) => {
  --currentValue;

  if (currentValue <= 0) clrBtn.classList.remove("active");
  if (currentValue < 0) {
    error.classList.add("active");
    return;
  }

  count.innerHTML = currentValue;
};

const handleIncrement = (currentValue) => {
  ++currentValue;
  if (currentValue > 0) {
    error.classList.remove("active");
    clrBtn.classList.add("active");
  }
  count.innerHTML = currentValue;
};

const handleClear = () => {
  count.innerHTML = 0;
  clrBtn.classList.remove("active");
};

function handleClick() {
  const id = this.id;
  let currentValue = Number(count.innerHTML);
  if (id === "dec") handleDecrement(currentValue);
  if (id === "inc") handleIncrement(currentValue);
  if (id === "clear") handleClear(currentValue);
}

btns.forEach((btn) => btn.addEventListener("click", handleClick));
