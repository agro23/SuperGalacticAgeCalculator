
export class AgeMaker {
  constructor (birthdate, gender, planet) {
    this.birthdate = birthdate;
    this.gender = gender;
    this.planet = planet;
  }

  calculateDate(dateAsString){
    console.log("dateAsString = " + dateAsString);
    // date will come in from form as 1234-12-12
    // for now it's 11/16/1966
    let year = dateAsString.slice(6,10); // all years will be four digits
    let month = dateAsString.slice(0,2); // all months come next at two digits
    let day = dateAsString.slice(3,5); // all days will come in last at two digits
    let birthday = new Date();
    birthday.setFullYear(Number(year), Number(month), Number(day));
    console.log("year = " + year);
    console.log("month = " + month);
    console.log("day = " + day);

    // var yeOldeTimes = new Date();
    // yeOldeTimes.setFullYear(1910, 9, 11);
    var myNewDate = new Date();
    console.log("Milliseconds since input birthday: " + (myNewDate - birthday));
  }
}
exports.AgeMakerModule = AgeMaker;
