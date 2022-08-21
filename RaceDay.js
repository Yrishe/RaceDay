
def raceDay(age): 
  let raceNumber = Math.floor(Math.random() * 1000);
  let early = true;
  let age = 0;

  if (early && age > 18) {
    raceNumber += 1000;
    return `Your race will be at 9:30am and your race number is: ${raceNumber}.`;
  } 
  else if (!early && age > 18) {
    return `Your race will be at 11:00am and you race number is: ${raceNumber}.`;
  }
  else if (age < 18) {
    return `Your race will be at 12:30pm and your race number is: ${raceNumber}.`;
  }
  else {
    return 'Please approach the registration desk, thanks!';
  }


raceDay();
