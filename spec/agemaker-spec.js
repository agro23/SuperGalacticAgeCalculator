
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
    expect(diff / 1000).toEqual(45536400);
  });

  it("should convert an earth age in years into a planetary age", function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    let mercuryAge = anAge.calculatePlanetaryAge("mercury", 100)
    let venusAge = anAge.calculatePlanetaryAge("venus", 100)
    let marsAge = anAge.calculatePlanetaryAge("mars", 100)
    let jupiterAge = anAge.calculatePlanetaryAge("jupiter", 100)
    expect(mercuryAge).toEqual(24);
    expect(venusAge).toEqual(62);
    expect(marsAge).toEqual(188);
    expect(jupiterAge).toEqual(1186);
  });

  it("should calculate the years left a person has to live", function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    let years = anAge.calculateLifeExpectancyInYears(52, 82);
    let years1 = anAge.calculateLifeExpectancyInYears(88, 82);
    expect(years).toEqual("You have 30 years ahead of you!");
    expect(years1).toEqual("You have lived 6 years beyond your expiration date!");
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
