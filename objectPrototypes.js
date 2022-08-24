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

// EXPLAIN
// It's common to see this pattern, in which methods are defined on the
// prototype, but data properties are defined in the constructor. That's because
// methods are usually the same for every object we create, while we often want
// each object to have its own value for its data properties (just as here where
// every person has a different name).
