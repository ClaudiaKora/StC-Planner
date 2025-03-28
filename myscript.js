const todoItems = [
 {
       name: "Visit the Botanical Gardens",
       category: "Tagesausflug",
       status: "Geplant",
       possibleOn: "2025-03-29 09:00, - , 2025-03-27 17:00",
       plannedFor: "-",
       geotag: "40.7812, -73.9665",
       tags: ["nature, outdoors, relaxing"]
       },
     {
        name: "Visit the Botanical Gardens2",
        category: "Abendgestaltung",
        status: "Idee",
        possibleOn: "2025-03-29 09:00 - 17:00",
        plannedFor: "-",
        geotag: "40.7812, -73.9665",
        tags: ["nature, outdoors, relaxing"]
       },
    {
        name: "Dinner at Italian Restaurant",
        category: "Größeres",
        status: "Mach ma Fix",
        possibleOn: "2025-03-26 19:00 - 22:00",
        plannedFor: "19:30",
        geotag: "40.7580, -73.9855",
        tags: ["social, food, work"]
    },
];

const tagsList = ["nature", "outdoors", "relaxing", "social", "food", "work"];

// Function to populate the tag filter dropdown
function populateTagFilter() {
    const tagFilter = document.getElementById('tag-filter');
    
    // Clear existing options
    tagFilter.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a tag';
    tagFilter.appendChild(defaultOption);

    // Add options from tagsList
    tagsList.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

// Call the function to populate the tag filter dropdown
populateTagFilter();
//Functionality to update style when status changed
 //function updateRowStatusStyling(row, status) {
  // Remove any existing status classes
  //row.classList.remove('status-idea', 'status-confirmed', 'status-planned', 'status-done');
  
  // Add the appropriate class based on the new status
 // row.classList.add(`status-${status}`);
//}

//How Dropdown Fields Work
function createDropdown(type, options, selectedValue) {
  const select = document.createElement('select');
  select.className = `${type}-select`;
  
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    optionElement.selected = (option === selectedValue);
    select.appendChild(optionElement);
  });
  
  return select;
}
//How the event listener works
//function setupDropdownListeners(row, categoryDropdown, statusDropdown, item) {
  // Listen for changes to the category dropdown
  //categoryDropdown.addEventListener('change', (event) => {
    // Update the data model when category changes
    //item.category = event.target.value;
    // You might want to save changes to server/localStorage here
  //});
  
  // Listen for changes to the status dropdown
  //statusDropdown.addEventListener('change', (event) => {
    // Update the data model when status changes
    //item.status = event.target.value;
    
    // Update visual styling based on status
    //updateRowStatusStyling(row, item.status);
    
    // You might want to save changes to server/localStorage here
  //});
//}
// Function to render an empty row for adding new todo items
function renderEmptyRow(tbody) {
  const emptyRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'new-name';
  nameCell.appendChild(nameInput);
  emptyRow.appendChild(nameCell);

  const categoryCell = document.createElement('td');
  const categoryDropdown = createDropdown('category', ['Tagesausflug', 'Einmaliges', 'Ausprobieren', 'Abendgestaltung', 'Größeres'], '');
  categoryDropdown.id = 'new-category';
  categoryCell.appendChild(categoryDropdown);
  emptyRow.appendChild(categoryCell);

  const statusCell = document.createElement('td');
  const statusDropdown = createDropdown('status', ['Idee', 'Geplant', 'Mach ma Fix', 'Erlebt'], '');
  statusDropdown.id = 'new-status';
  statusCell.appendChild(statusDropdown);
  emptyRow.appendChild(statusCell);

  const possibleOnCell = document.createElement('td');
  const possibleOnInput = document.createElement('input');
  possibleOnInput.type = 'text';
  possibleOnInput.id = 'new-possibleOn';
  possibleOnCell.appendChild(possibleOnInput);
  emptyRow.appendChild(possibleOnCell);

  const plannedForCell = document.createElement('td');
  const plannedForInput = document.createElement('input');
  plannedForInput.type = 'text';
  plannedForInput.id = 'new-plannedFor';
  plannedForCell.appendChild(plannedForInput);
  emptyRow.appendChild(plannedForCell);

  const geotagCell = document.createElement('td');
  const geotagInput = document.createElement('input');
  geotagInput.type = 'text';
  geotagInput.id = 'new-geotag';
  geotagCell.appendChild(geotagInput);
  emptyRow.appendChild(geotagCell);

  const tagsCell = document.createElement('td');
  const tagsInput = document.createElement('input');
  tagsInput.type = 'text';
  tagsInput.id = 'new-tags';
  tagsCell.appendChild(tagsInput);
  emptyRow.appendChild(tagsCell);

  const addButtonCell = document.createElement('td');
  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.onclick = addNewItem;
  addButtonCell.appendChild(addButton);
  emptyRow.appendChild(addButtonCell);

  tbody.appendChild(emptyRow);
}

// Function to add a new todo item from the empty row
function addNewItem() {
  const name = document.getElementById('new-name').value;
  const category = document.getElementById('new-category').value;
  const status = document.getElementById('new-status').value;
  const possibleOn = document.getElementById('new-possibleOn').value;
  const plannedFor = document.getElementById('new-plannedFor').value;
  const geotag = document.getElementById('new-geotag').value;
  const tags = document.getElementById('new-tags').value;

  if (name && category && status && possibleOn && plannedFor && geotag && tags) {
    addTodoItem(name, category, status, possibleOn, plannedFor, geotag, tags);

    // Clear the input fields
    document.getElementById('new-name').value = '';
    document.getElementById('new-category').value = '';
    document.getElementById('new-status').value = '';
    document.getElementById('new-possibleOn').value = '';
    document.getElementById('new-plannedFor').value = '';
    document.getElementById('new-geotag').value = '';
    document.getElementById('new-tags').value = '';
  } else {
    alert('Please fill out all fields.');
  }
}

function filterTodoItemsByTag(selectedTag) {
  return todoItems.filter(item => item.tags.includes(selectedTag));
}
// Example usage:
//let filteredItems = filterTodoItemsByTag("nature");
//console.log(filteredItems); // This will return all todo items with the "nature" tag

//render function for displaying tags
function renderTags(tags) {
  const tagsContainer = document.createElement('div');
  tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'tag';
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });
  return tagsContainer;
}


// Render ToDo List Table
function renderTable(todoItems) {
  const tbody = document.querySelector('#todo-table tbody');
  tbody.innerHTML = '';

  // Render existing todo items
  todoItems.forEach(item => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const categoryCell = document.createElement('td');
    const categoryDropdown = createDropdown('category', ['Tagesausflug', 'Einmaliges', 'Ausprobieren', 'Abendgestaltung', 'Größeres'], item.category);
    categoryCell.appendChild(categoryDropdown);
    row.appendChild(categoryCell);

    const statusCell = document.createElement('td');
    const statusDropdown = createDropdown('status', ['Idee', 'Geplant', 'Mach ma Fix', 'Erlebt'], item.status);
    statusCell.appendChild(statusDropdown);
    row.appendChild(statusCell);

    const dateRangeCell = document.createElement('td');
    dateRangeCell.textContent = item.possibleOn;
    row.appendChild(dateRangeCell);

    const plannedTimeCell = document.createElement('td');
    plannedTimeCell.textContent = item.plannedFor;
    row.appendChild(plannedTimeCell);

    const geotagCell = document.createElement('td');
    geotagCell.textContent = item.geotag;
    row.appendChild(geotagCell);

    const tagsCell = document.createElement('td');
    tagsCell.appendChild(renderTags(item.tags));
    row.appendChild(tagsCell);

    tbody.appendChild(row);
  });

  // Render an empty row for adding new items
  renderEmptyRow(tbody);

  // Add event listener to the filter button
  const filterButton = document.getElementById('filter-button');
  filterButton.addEventListener('click', handleFilterButton);
}

// Function to add a new todo item
function addTodoItem(name, category, status, possibleOn, plannedFor, geotag, tags) {
  const newItem = {
    name: name,
    category: category,
    status: status,
    possibleOn: possibleOn,
    plannedFor: plannedFor,
    geotag: geotag,
    tags: tags
  };

  // Add the new item to the todoItems array
  todoItems.push(newItem);

  // Re-render the table to include the new item
  renderTable(todoItems);
}

//Event Listener for Stichwortfilter button
document.getElementById('filter-button').addEventListener('click', handleFilterButton);

function handleFilterButton() {
    const selectedTag = document.getElementById('tag-filter').value;
    const filteredItems = filterTodoItemsByTag(selectedTag);
    renderTable(filteredItems);
}


// User credentials 
const users = [
    { username: "Claudia", password: "Kraxner" },
    { username: "Stephan", password: "Ronge" }
];


//Login functionality
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const validUser = users.find(user => 
        user.username === username && user.password === password
    );
    
    if (validUser) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("items-section").style.display = "block";
        alert("Welcome, " + username + "!");
        
        // Render the table with data
        renderTable(todoItems);
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
