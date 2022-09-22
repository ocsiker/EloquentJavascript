// TODO: <29-08-22, ocsiker> //
// learn about object and encapsule
//
//


function speak(word) {
  console.log(`speak what ${this.name} want ${word}`);
}


let thang = {name: 'Thang', age: 33, speak};
let thoa = {name: 'Thoa', age: 35, speak};

thang.speak('learn english');
thoa.speak('go to Canada');
