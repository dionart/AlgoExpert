// You're given the head ofaSingly Linked List whose nodes are in sorted order with respect to their
// values.Writeafunction that returnsamodified version of the Linked List that doesn't contain any
// nodes with duplicate values.The Linked List should be modified in place(i.e.,you shouldn't createa
// brand new list),and the modified Linked List should still have its nodes sorted with respect to their
// values.
// Each Linked List node has an integer value as well asanext node pointing to the next
// node in the list or to None/null if it's the tail of the list.

function removeDuplicatesFromLinkedList(linkedList) {
  let currentItem = linkedList;
  while (currentItem !== null) {
    while (currentItem.next && currentItem.value == currentItem.next.value) {
      currentItem.next = currentItem.next.next;
    }
    currentItem = currentItem.next;
  }
  return linkedList;
}
