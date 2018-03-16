
let AgeMaker = require('../src/AgeMaker.js').AgeMakerModule;

describe('AgeMaker', function() {

  it('should instantiate the object', function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    expect(anAge.gender).toEqual("female");
  });

  it('should change a property in the object', function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    anAge.gender = "male";
    expect(anAge.gender).toEqual("male");
  });

  it("should subtract a person's birth year from this year", function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    let years = anAge.calculateAgeInYears(anAge.birthdate);
    expect(years).toEqual(52);
  });

  it("should find the difference between two dates and return it in seconds", function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    let diff = Math.abs(anAge.calculateDateDifferenceInSeconds(anAge.birthdate, "06/07/1965"));
    // console.log("diff = " + diff / 1000);
    diff = Math.abs(anAge.calculateDateDifferenceInSeconds("06/07/1965", "06/07/1965"));
    console.log("diff = " + diff / 1000);

    // console.log("diff = " + (diff / (365 * 24 * 60 * 60 * 1000)).toFixed(1));
    expect(diff / 1000).toEqual(0);

  });



  // it("should turn a person's age given in years into seconds", function() {
  //   let anAge = new AgeMaker("11/16/1966","female", "mercury");
  //
  //   let seconds = anAge.calculateSecondsOfAge(ageInYears);
  //   expect(seconds).toEqual("male");
  // });

  it('should get milliseconds since a date and return seconds', function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    console.log("anAge.birthdate = " + anAge.birthdate);
    let theirAgeInMs = anAge.calculateDate(anAge.birthdate);
    console.log("theirAgeInMs = " + theirAgeInMs);
    expect(theirAgeInMs).toEqual(1617231600); // test should fail
  });


});
