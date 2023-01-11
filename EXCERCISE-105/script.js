const graph = {
      a: { b: 5, c: 2 },
      b: { a: 5, c: 7, d: 8 },
      c: { a: 2, b: 7, d: 4, e: 8 },
      d: { b: 8, c: 4, e: 6, f: 4 },
      e: { c: 8, d: 6, f: 3 },
      f: { e: 3, d: 4 },
};
const formatGraph = (g) => {
      const tempObj = {};
      Object.keys(g).forEach(k => {
            const Innerobj = g[k];
            const arr = [];
            Object.keys(Innerobj).forEach(v => {
                  arr.push(
                        {
                              vertex: v,
                              cost: Innerobj[v]
                        }
                  );
            });
            tempObj[k] = arr;
      });

      return tempObj;
}
const dijikstra = (graph, start, end) => {
      const map = formatGraph(graph);
      let visited = [];
      let unVisited = [start];
      let shortestDistances = {
            [start]: {
                  vertex: [start],
                  cost: 0
            }
      };
      let vertex;
      while (vertex = unVisited.shift()) {
            let neighBourNodes = map[vertex].filter((nodes) => !visited.includes(nodes.vertex));
            unVisited.push(...neighBourNodes.map((n) => n.vertex));
            let costToNodes = shortestDistances[vertex].cost;
            for (const { vertex: to, cost } of neighBourNodes) {
                  let currCostToNeighbours = shortestDistances[to] && shortestDistances[to].cost;
                  let newNeighBourCost = costToNodes + cost;
                  if (currCostToNeighbours == undefined || newNeighBourCost < currCostToNeighbours) {
                        shortestDistances[to] = { vertex, cost: newNeighBourCost };
                  }

            }
            visited.push(vertex);
      }
console.log(shortestDistances);
}
dijikstra(graph, "a", "f");


