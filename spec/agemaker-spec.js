
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

  it('should give milliseconds since a birthday', function() {
    let anAge = new AgeMaker("11/16/1966","female", "mercury");
    console.log("anAge.birthdate = " + anAge.birthdate);
    let theirAgeInMs = anAge.calculateDate(anAge.birthdate);
    console.log("theirAgeInMs = " + theirAgeInMs);
    expect(theirAgeInMs).toEqual(0); // test should fail
  });


});
