// practice group in javascript
// page 115(127 of 447)
//
//
//

class Group {
  constructor()
  {
    this.members = [];
  }

  add(value)
  {
    if (!this.has(value))
    {
      this.members.push(value)
    };
  }
  del(value)
  {
    if (this.has(value))
    {
      this.members = this.members.filter(v => v !== value)
    };
  }
  has(value)
  {
    return this.members.includes(value);
  }
  static from(collection)
  {
    let group = new Group;
    for (let value of collection)
    {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));


group.add(25);
