const apiEP = "https://randomuser.me/api?results=5";
//slide to go to app screen
let userList = [];

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

const fetchUsers = async (url) => {
  //fetch users
  //promise method
  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //async await
  const response = await fetch(url);
  const data = await response.json();
  userList = data.results;
  console.log(userList);
};

fetchUsers(apiEP);
