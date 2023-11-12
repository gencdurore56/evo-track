/* complex_program.js */

// This program simulates a complex system of interconnected nodes.

// Define the Node class
class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
  }
  
  // Adds a neighbor to the node
  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
  
  // Prints the node's ID and its neighbors' IDs
  printNeighbors() {
    let neighborIDs = this.neighbors.map(node => node.id);
    console.log(`Node ${this.id} neighbors: ${neighborIDs.join(', ')}`);
  }
}

// Create an array of nodes
let nodes = [];

// Create nodes and add them to the array
for (let i = 0; i < 10; i++) {
  nodes.push(new Node(i));
}

// Connect the nodes in a complex network
nodes[0].addNeighbor(nodes[1]);
nodes[0].addNeighbor(nodes[2]);
nodes[1].addNeighbor(nodes[0]);
nodes[1].addNeighbor(nodes[3]);
nodes[2].addNeighbor(nodes[0]);
nodes[2].addNeighbor(nodes[4]);
nodes[3].addNeighbor(nodes[1]);
nodes[3].addNeighbor(nodes[5]);
nodes[4].addNeighbor(nodes[2]);
nodes[4].addNeighbor(nodes[6]);
nodes[5].addNeighbor(nodes[3]);
nodes[5].addNeighbor(nodes[7]);
nodes[6].addNeighbor(nodes[4]);
nodes[6].addNeighbor(nodes[8]);
nodes[7].addNeighbor(nodes[5]);
nodes[7].addNeighbor(nodes[9]);
nodes[8].addNeighbor(nodes[6]);
nodes[9].addNeighbor(nodes[7]);

// Print the neighbors of each node
for (let node of nodes) {
  node.printNeighbors();
}