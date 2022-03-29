let persons;

let randomUser = document.getElementById("randomUser");

let avatar = document.getElementById("avatar");

let label = document.getElementById("label");

let persInfo = document.getElementById("persInfo");

let btnBox = document.getElementById("btnBox");

let lblContent = "My name is";

let perInfoContent = "Ajay";

let getRandomUser = async () => {
  const url = "https://randomuser.me/api/";
  const response = await fetch(url);
  let data = await response.json();
  persons = data.results;
  getPerson();
};

getRandomUser();


let getPerson = function () {
  perInfoContent = `${persons[0].name.title} ${persons[0].name.first} ${persons[0].name.last}`;
  avatar.src = persons[0].picture.large;
  label.textContent = lblContent;
  persInfo.textContent = perInfoContent;
};

btnBox.addEventListener("click", (e) => {
  let icons = document.getElementsByTagName("i");
  let arr = Array.from(icons);
  let iconId = arr.filter(
    (element) => element.dataset.id === e.target.dataset.id
  );
  let id = Number(iconId[0].dataset.id);
  switch (id) {
    case 1:
      lblContent = "My name is";
      perInfoContent = `${persons[0].name.title} ${persons[0].name.first} ${persons[0].name.last}`;
      break;

    case 2:
      lblContent = "My email is";
      perInfoContent = persons[0].email;
      break;

    case 3:
      lblContent  = "My age is";
      perInfoContent = persons[0].dob.age;
      break;

    case 4:
      lblContent = "My street is";
      perInfoContent = `${persons[0].location.street.number} ${persons[0].location.street.name}`;
      break;

    case 5:
      lblContent = "My phone is";
      perInfoContent = persons[0].phone;
      break;

    case 6:
      lblContent = "My password is";
      perInfoContent = persons[0].login.password;
      break;

    default:
      perInfoContent = "";
  }
  getPerson();
});

randomUser.addEventListener("click", getRandomUser);
