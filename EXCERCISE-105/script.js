class Graph {
      constructor() {
            this.vertices = [];
            this.adjacencyList = {};
      }

      addVertex(vertex) {
            this.vertices.push(vertex);
            this.adjacencyList[vertex] = {};
      }

      addEdge(vertex1, vertex2, weight) {
            this.adjacencyList[vertex1][vertex2] = weight;
      }

      changeWeight(vertex1, vertex2, weight) {
            this.adjacencyList[vertex1][vertex2] = weight;
      }

      dijkstra(source) {
            let distances = {},
                  parents = {},
                  visited = new Set();
            for (let i = 0; i < this.vertices.length; i++) {
                  if (this.vertices[i] === source) {
                        distances[source] = 0;
                  } else {
                        distances[this.vertices[i]] = Infinity;
                  }
                  parents[this.vertices[i]] = null;
            }

            let currVertex = this.vertexWithMinDistance(distances, visited);

            while (currVertex !== null) {
                  let distance = distances[currVertex],
                        neighbors = this.adjacencyList[currVertex];
                  for (let neighbor in neighbors) {
                        let newDistance = distance + neighbors[neighbor];
                        if (distances[neighbor] > newDistance) {
                              distances[neighbor] = newDistance;
                              parents[neighbor] = currVertex;
                        }
                  }
                  visited.add(currVertex);
                  currVertex = this.vertexWithMinDistance(distances, visited);
            }

            console.log(parents);
            console.log(distances);
      }

      vertexWithMinDistance(distances, visited) {
            let minDistance = Infinity,
                  minVertex = null;
            for (let vertex in distances) {
                  let distance = distances[vertex];
                  if (distance < minDistance && !visited.has(vertex)) {
                        minDistance = distance;
                        minVertex = vertex;
                  }
            }
            return minVertex;
      }
}
// let g = new Graph();
// g.addVertex("0");
// g.addVertex("1");
// g.addVertex("7");
// g.addVertex("2");
// g.addVertex("8");
// g.addVertex("6");
// g.addVertex("3");
// g.addVertex("5");
// g.addVertex("4");
// g.addEdge("0", "1", 4);
// g.addEdge("0", "7", 8);
// g.addEdge("1", "7", 11);
// g.addEdge("1", "2", 8);
// g.addEdge("7", "8", 7);
// g.addEdge("7", "6", 1);
// g.addEdge("7", "8", 7);
// g.addEdge("2", "8", 2);
// g.addEdge("2", "5", 4);
// g.addEdge("2", "3", 7);
// g.addEdge("3", "9", 4);
// g.addEdge("3", "5", 14);
// g.addEdge("4", "9", 3);
// g.addEdge("4", "10", 5);

// g.dijkstra("0");
let g = new Graph();
g.addVertex("start");
g.addVertex("A");
g.addVertex("B");
g.addVertex("finish");

g.addEdge("start", "A", 6);
g.addEdge("start", "B", 2);
g.addEdge("A", "finish", 1);
g.addEdge("B", "A", 3);
g.addEdge("B", "finish", 5)
g.dijkstra("start");