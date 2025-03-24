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
