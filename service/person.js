const personDao = require("./personDao");

class PersonService {
  createPerson(personDto) {
    const [firstName, lastName, email] = personDto;
    return personDao.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
