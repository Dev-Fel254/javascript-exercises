const findTheOldest = function(people) {
    return people.reduce((oldest, person)=>{
      const oldestAge = oldest.yearOfDeath - oldest.YearOfBirth;
      const currentAge = person.yearOfDeath - person.YearOfBirth;
    return currentAge > oldestAge ? person : oldest;
    })

};

// Do not edit below this line
module.exports = findTheOldest;
