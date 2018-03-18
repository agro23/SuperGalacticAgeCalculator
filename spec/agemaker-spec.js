
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
    let mercuryAge = Number(anAge.calculatePlanetaryAge("mercury", 100).toFixed(2));
    let venusAge = Number(anAge.calculatePlanetaryAge("venus", 100).toFixed(2));
    let marsAge = Number(anAge.calculatePlanetaryAge("mars", 100).toFixed(2));
    let jupiterAge = Number(anAge.calculatePlanetaryAge("jupiter", 100).toFixed(2));
    expect(mercuryAge).toEqual(416.67); // 416.6666666666667 
    expect(venusAge).toEqual(161.29); // 161.2903225806452
    expect(marsAge).toEqual(53.19); // 53.19148936170213
    expect(jupiterAge).toEqual(8.43); // 8.431703204047218
  });

  it("should calculate the years left a person has to live", function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    let years = anAge.calculateLifeExpectancyInYears(52, 82);
    let years1 = anAge.calculateLifeExpectancyInYears(88, 82);
    expect(years).toEqual("You have 30 years ahead of you!");
    expect(years1).toEqual("You have lived 6 years beyond your expiration date!");
  });

  it('should get milliseconds since a date and return seconds', function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    let theirAgeInMs = anAge.calculateDate(anAge.birthdate);
    expect(theirAgeInMs).toEqual(1617318000); // test should pass
  });

  it("should turn a person's age given in years into seconds", function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    let ageInYears = anAge.calculateAgeInYears("11/16/1966");
    let seconds = anAge.calculateSecondsOfAge(ageInYears);
    expect(seconds).toEqual(1640995200);
  });

});
