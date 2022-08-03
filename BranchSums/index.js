// Write a function that takes inaBinary Tree and returnsalist of its branch sums ordered from
// left most branch sum to rightmost branch sum.
// A branch sum is the sum of all values inaBinary Tree branch.ABinary Tree branch isapath of
// nodes inatree that starts at the root node and ends at any leaf node.
// Each BinaryTree node has an integer value,aleft child node,andaright child node.
// Children nodes can either be BinaryTree nodes themselves or None/null.

function branchSums(node) {
  let sums = [];
  sum(node, 0, sums);
  return sums;
}

function sum(node, currentSum, sums) {
  if (!node) {
    return;
  }

  currentSum += node.value;
  if (!node.left && !node.right) {
    sums.push(currentSum);
    return;
  }

  sum(node.left, currentSum, sums);
  sum(node.right, currentSum, sums);
}
