const os = require('os');

// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('User:', os.userInfo());

const fs = require('fs');
// const { json } = require('stream/consumers');
const genders = ['M', 'F'];
const maleNames = ['Adam', 'Robert', 'Zygmunt', 'Wiesiek', 'Michał'];
const femaleNames = ['Grażyna', 'Ania', 'Henia', 'Ola'];
const lastNames = ['Kowalski', 'Lesniowski', 'Grabowski', 'Nowak'];
const people = [];

function randChoice(arr) {
  return Math.round(Math.random(arr));
}

// console.log(randChoice(3));

for (let i = 0; i < 20; i++) {
  let randomName = '';
  let newObj = {};
  const genderOne = genders[randChoice()];

  if (genderOne == 'M') {
    randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
    // console.log(randomName);
    // return randomName;
  } else if (genderOne == 'F') {
    randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    // console.log(randomName);
    // return randomName;
  }
  let randomSurname = lastNames[Math.floor(Math.random() * lastNames.length)];
  // people.push({ gender: newObj.gender, firstName: randomName, lastName: randomSurname });
  // console.log(people)
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  newObj = {
    gender: genderOne,
    firstName: randomName,
    lastName: randomSurname,
    age: getRandomInt(20, 45),
    phone: getRandomInt(700000000,999999999),
    email: randomName + '.' + randomSurname + '@gmail.com'
  }
//   console.log(newObj.phone)
// }
  people.push(newObj);
} console.log(people);

let jsonArrayPeople = JSON.stringify(people);

fs.writeFile('people.json', jsonArrayPeople, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});