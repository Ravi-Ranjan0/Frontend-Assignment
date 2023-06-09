 // Global variables
 let draggedItem = null;
 const container1 = document.getElementById('container1');
 const container2 = document.getElementById('container2');
 const successMessage = document.getElementById('successMessage');

 // Array of items to populate the first container
 const items = [
   { name: 'Item 1' },
   { name: 'Item 2' },
   { name: 'Item 3' },
   { name: 'Item 4' }
 ];

 // Function to populate the first container with items
 function populateItems() {
   items.forEach(item => {
     const itemElement = document.createElement('div');
     itemElement.classList.add('item');
     itemElement.draggable = true;
     itemElement.innerText = item.name;
     container1.appendChild(itemElement);
   });
 }

 // Function to handle the drag start event
 function dragStart(event) {
   draggedItem = event.target;
   event.target.classList.add('dragging');
 }

 // Function to handle the drag end event
 function dragEnd(event) {
   event.target.classList.remove('dragging');
 }

 // Function to handle the drag over event
 function dragOver(event) {
   event.preventDefault();
 }

 // Function to handle the drop event
 function drop(event) {
   event.preventDefault();
   container2.appendChild(draggedItem);
   successMessage.innerText = 'Item dropped successfully!';
 }

 // Function to reset the containers
 function reset() {
   container1.innerHTML = '';
   container2.innerHTML = '';
   successMessage.innerText = '';
   populateItems();
 }

 // Attach event listeners to the draggable items
 populateItems();
 const itemsToDrag = document.querySelectorAll('.item');
 itemsToDrag.forEach(item => {
   item.addEventListener('dragstart', dragStart);
   item.addEventListener('dragend', dragEnd);
 });

 // Attach event listeners to the drop target
 container2.addEventListener('dragover', dragOver);
 container2.addEventListener('drop', drop);