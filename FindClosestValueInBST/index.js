// Write a function that takes inaBinary Search Tree(BST)andatarget integer value and returns the
// closest value to that target value contained in the BST.
// You can assume that there will only be one closest value.
// Each BST node has an integer value,aleft child node,andaright child node.Anode is
// said to beavalid BST node if and only if it satisfies the BST property:its value is strictly greater
// than the values of every node to its left;its value is less than or equal to the values of every node
// to its right;and its children nodes are either valid BST nodes themselves or None/null.

//Solution 1
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;

  if (Math.abs(closest - target) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else {
    return closest;
  }
}

//Solution 2
function findClosestValueInBst(tree, target) {
  let closestValue = tree.value;
  let currentNode = tree;

  while (currentNode !== null) {
    if (
      Math.abs(closestValue - target) > Math.abs(currentNode.value - target)
    ) {
      closestValue = currentNode.value;
    }

    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      return closestValue;
    }
  }
  return closestValue;
}
