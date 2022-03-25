let persons;

let randomUser = document.getElementById("randomUser");

let avatar = document.getElementById("avatar");

let label = document.getElementById("label");

let persInfo = document.getElementById("persInfo");

let btnBox = document.getElementById("btnBox");

let labCont = "My name is";

let persInfoCont = "Ajay";

let getRandomUser = async () => {
  const url = "https://randomuser.me/api/";
  const response = await fetch(url);
  let data = await response.json();
  persons = data.results;
  getPerson();
};

getRandomUser();

let getPerson = function () {
  avatar.src = persons[0].picture.large;
  label.textContent = labCont;
  persInfo.textContent = `${persons[0].name.title} ${persons[0].name.first} ${persons[0].name.last}`;
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
      labCont = "My name is";
      persInfoCont = `${persons[0].name.title} ${persons[0].name.first} ${persons[0].name.last}`;
      break;

    case 2:
      labCont = "My email is";
      persInfoCont = persons[0].email;
      break;

    case 3:
      labCont = "My age is";
      persInfoCont = persons[0].dob.age;
      break;

    case 4:
      labCont = "My street is";
      persInfoCont = `${persons[0].location.street.number} ${persons[0].location.street.name}`;
      break;

    case 5:
      labCont = "My phone is";
      persInfoCont = persons[0].phone;
      break;

    case 6:
      labCont = "My password is";
      persInfoCont = persons[0].login.password;
      break;

    default:
      persInfoCont = "aa";
  }
  getPerson();
});

randomUser.addEventListener("click", getRandomUser);
