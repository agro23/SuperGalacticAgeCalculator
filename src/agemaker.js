
export class AgeMaker {
  constructor (birthdate, gender, planet) {
    this.birthdate = birthdate;
    this.gender = gender;
    this.planet = planet;
  }

  calculateAgeInYears(birthdate){
    // * Take a person’s age in years and convert it into seconds.
    let birthday = Number(birthdate.slice(6,10));
    let aYear = new Date();
    let thisYear = aYear.getFullYear();
    let years = thisYear - birthday;
    return years;
  }

  calculateSecondsOfAge(personsAgeInYears){
    // * Take a person’s age in years and convert it into seconds.
    let leaps = Math.floor(personsAgeInYears / 4); // roughly how many leap years they'll have seen
    let seconds = personsAgeInYears * (365 * 24 * 60 * 60); // without the extra days
    seconds += leaps * 24 * 60 * 60; // add the leaped days back in
    return seconds;
  }

  calculateDateDifferenceInSeconds(dateOne, dateTwo){
    let aDate = new Date();
    let anotherDate = new Date();
    // date will come in from form as 1234-12-12
    // for now it's 11/16/1966
    let year1 = dateOne.slice(6,10); // all years will be four digits
    let month1 = dateOne.slice(0,2); // all months come next at two digits
    let day1 = dateOne.slice(3,5); // all days will come in last at two digits
    let year2 = dateTwo.slice(6,10); // all years will be four digits
    let month2 = dateTwo.slice(0,2); // all months come next at two digits
    let day2 = dateTwo.slice(3,5); // all days will come in last at two digits
    aDate.setFullYear(Number(year1), Number(month1), Number(day1));
    anotherDate.setFullYear(Number(year2), Number(month2), Number(day2));
    let difference = aDate - anotherDate;
    return difference;
  }

  calculateDate(dateAsString){
    // console.log("dateAsString = " + dateAsString);
    // date will come in from form as 1234-12-12
    // for now it's 11/16/1966
    // return the difference between today and the date in seconds
    let year = dateAsString.slice(6,10); // all years will be four digits
    let month = dateAsString.slice(0,2); // all months come next at two digits
    let day = dateAsString.slice(3,5); // all days will come in last at two digits
    let birthday = new Date();
    birthday.setFullYear(Number(year), Number(month), Number(day));
    console.log("year = " + year);
    console.log("month = " + month);
    console.log("day = " + day);
    var myNewDate = new Date();
    console.log("Milliseconds since input birthday: " + (myNewDate - birthday));
    return (myNewDate - birthday) / 1000;
  }

  calculatePlanetaryAge(planet, personsAgeInYears){
    if (planet.toUpperCase() == "MERCURY"){
      // * Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
      return personsAgeInYears * .24;
    } else if ((planet.toUpperCase() == "VENUS")) {
      // * Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
      return personsAgeInYears * .62;
    } else if (planet.toUpperCase() == "MARS") {
      // * Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
      return personsAgeInYears * 1.88;
    } else if (planet.toUpperCase() == "JUPITER") {
      // * Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
      return personsAgeInYears * 11.86;
    } else{
      return 0;
    }

  }

  calculateLifeExpectancyInYears(AgeInYears, ExpectedYearsForDemographic){
    let yearsLeft = ExpectedYearsForDemographic - AgeInYears;
    return yearsLeft;
  }

}
exports.AgeMakerModule = AgeMaker;
