/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let res = []

  const traverse = (graph, node, path) => {
      path.push(node)

      if (node === graph.length - 1) {
          res.push([...path])
      }

      const neighbors = graph[node]
      for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors[i]
          traverse(graph, neighbor, path)
      }
      path.pop(node)
  }
  const path = []
  traverse(graph, 0, path)

  return res
};


const testCase = (source, result) => {
  const resultString = JSON.stringify(result)
  console.log(JSON.stringify(allPathsSourceTarget(source)) === resultString)
}

testCase([[1,2],[3],[3],[]], [[0,1,3],[0,2,3]])

// console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))