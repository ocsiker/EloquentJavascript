const roads = [
  'Alice\'s House-Bob\'s House', 'Alice\'s House-Cabin',
  'Alice\'s House-Post Office', 'Bob\'s House-Town Hall',
  'Daria\'s House-Ernie\'s House', 'Daria\'s House-Town Hall',
  'Ernie\'s House-Grete\'s House', 'Grete\'s House-Farm', 'Grete\'s House-Shop',
  'Marketplace-Farm', 'Marketplace-Post Office', 'Marketplace-Shop',
  'Marketplace-Town Hall', 'Shop-Town Hall'
];
function buildGraph(edges)
{
  let graph = Object.create(null);
  function addEdge(from, to)
  {
    if (graph[from] == null)
    {
      graph[from] = [to];
    } else
    {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split('-')))
  {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

// get address for each position in graph
function getPosition(points)
{
  let listPosition = [];
  for (let [from, to] of points.map(r => r.split('-')))
  {
    for (let pos of [from, to])
    {
      if (!listPosition.includes(pos)) listPosition.push(pos);
    }
  }
  return listPosition;
}

const listPosition = getPosition(roads);
console.log(listPosition);
// lam lai de lay gia tri tu mang duong vao trong roadGraph
//
// function drawGraph(edges)
// {
//   let route = Object.create(null);
//   function getRoute(from, to)
//   {
//     if (route[from] == undefined)
//       route[from] = [to];
//     else
//       route[from].push(to);
//   }
//   for (let [from, to] of edges.map(r => r.split('-')))
//   {
//     getRoute(from, to);
//     getRoute(to, from);
//   }
//   return route;
// }
//
// let routeP = drawGraph(roads);
//
// console.log(routeP);
//
// const multi = (a,b)=>a*b;
//
// console.log([1,2,3,4].reduce(multi,2));
//

class VillageState {
  constructor(place, parcels)
  {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination)
  {
    if (!roadGraph[this.place].includes(destination))
    {
      return this;
    } else
    {
      let parcels = this.parcels
                        .map(p => {
                          if (p.place != this.place)
                          {
                            return p;
                          }
                          return {place: destination, address: p.address};
                        })
                        .filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
    'Post Office', [{place: 'Post Office', address: 'Alice\'s House'}]);

let next = first.move('Alice\'s House');
