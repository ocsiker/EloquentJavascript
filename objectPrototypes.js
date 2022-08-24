// TODO:  <25-08-22, ocsiker > //
// howw to know create method and data in object and
// what is object prototypes
// link
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
//

const personPrototype = {
  // create method
  get() {
    console.log('Hello, my name\'s:', this.name);
  }
};

function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, personPrototype);

const harry = new Person('Harry');


harry.get();
