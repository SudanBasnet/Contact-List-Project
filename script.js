//slide to go to app screen

const slider = document.getElementById("mySlider");
slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");
  if (value > 70) {
    label.textContent = "";
    dispAppScreen();
  } else {
    label.textContent = "Slide to Unlock";
  }
});

const dispAppScreen = () => {
  //hide home screen
  document.querySelector(".homeScreen").remove();
  //show app screen
  document.querySelector(".appScreen").style.display = "block";
};
