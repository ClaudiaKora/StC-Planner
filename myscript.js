// User credentials
const users = [
    { username: "Claudia", password: "Kraxner" },
    { username: "Stephan", password: "Ronge" }
];

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

function renderTable(todoItems) {
  const tbody = document.querySelector('#todo-table tbody');
  tbody.innerHTML = '';
  
  const categoryOptions = ['Tagesausflug', 'Einmaliges', 'Ausprobieren', 'Abendgestaltung', 'Größeres'];
  const statusOptions = ['Idee', 'Geplant', 'Mach ma Fix', 'Erlebt'];
  
  todoItems.forEach(item => {
    const row = document.createElement('tr');
    
    // Add name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);
    
    // Add category dropdown
    const categoryCell = document.createElement('td');
    const categoryDropdown = createDropdown('category', categoryOptions, item.category);
    categoryCell.appendChild(categoryDropdown);
    row.appendChild(categoryCell);
    
    // Add status dropdown
    const statusCell = document.createElement('td');
    const statusDropdown = createDropdown('status', statusOptions, item.status);
    statusCell.appendChild(statusDropdown);
    row.appendChild(statusCell);
    
    // Add remaining cells...
    
    tbody.appendChild(row);
  });
}
