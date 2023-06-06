const data = require("./data");
const fs = require('fs');

const getRandomAge = () => Math.floor(Math.random() * (data.maxAge - data.minAge + 1)) + data.minAge;
const getRandomIndex = arrayLength => Math.floor(Math.random() * arrayLength);
const getRandomElement = array => array[getRandomIndex(array.length)];
const getRandomGender = () => getRandomElement(data.genders);

const people = [];

for (let i = 0; i <= 20; i++) {
  const gender = getRandomGender();
  const firstnameArray = gender === 'M' ? data.maleNames : data.femaleNames;
  const firstname = getRandomElement(firstnameArray);
  const lastname = getRandomElement(data.lastnames);
  const age = getRandomAge();
  const email = firstname.toLowerCase() + '.' + lastname.toLowerCase() + '@gmail.com';

  people.push({
    gender: gender,
    firstname: firstname,
    lastname: lastname,
    age: age,
    email: email
  });
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
