let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 45;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Your race will be at 9:30am and your race number is: ${raceNumber}.`);
}
else if (!early && age > 18) {
  console.log(`Your race will be at 11:00am and you race number is: ${raceNumber}.`);
}
else if (age < 18) {
  console.log(`Your race will be at 12:30pm and your race number is: ${raceNumber}.`);
}
else {
  console.log('Please approach the registration desk, thanks!');
}
