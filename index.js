// returns the first element that matches the selector:
function getFirstSelector(selector) {
  return document.querySelector(selector )
}
 // pulls a .target out of #nested:
function nestedTarget() {
  return document.querySelector("#nested .target")
}
// returns the most deeply nested child in #grand-node:
function deepestChild() {
  let node = document.getElementById("grand-node")
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
// increases ranks in .ranked-list by n:
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list")

  for (let i = 0, l = rankedLists.length; i < l; i++ ) {
    let children = rankedLists[ i ].children

    for (let j = 0, k = children.length; j < k; j++ ) {
      children[ j ].innerHTML = parseInt( children[ j ].innerHTML ) + n
    }
  }
}
