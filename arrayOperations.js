// Initial list
const initialList = [1, 2, 3, 4, 5];


// Function to add an element to the list
function addElement(list, element) {
  list.push(element);
}
addElement(initialList, 6);
console.log(initialList); 

// Function to remove an element from the list

function removeElement(list, element) {
  const indexOfElement =list.findIndex(x=>x===element)
   list.splice(indexOfElement,1);
   return list;
 
 }
 console.log(removeElement(initialList,4))


// Function to update an element in the list
function updateElement(list, index, newValue) {
  // Your code here
}

// Function to undo the last operation
function undo(list) {
  // Your code here
}

// Function to redo the last undone operation
function redo(list) {
  // Your code here
}

// Example usage
const list1 = addElement(initialList, 6);
const list2 = removeElement(list1, 3);
const list3 = updateElement(list2, 1, 10);

const undoList = undo(list3);
// At this point, undoList should be equal to list2

const redoList = redo(undoList);
// At this point, redoList should be equal to list3 again

console.log(list3);     // Output: [1, 10, 3, 4, 5]
console.log(undoList);  // Output: [1, 2, 3, 4, 5]
console.log(redoList);  // Output: [1, 10, 3, 4, 5]