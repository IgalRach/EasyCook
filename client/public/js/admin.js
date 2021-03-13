//alert('hello from admin!');

const adminBtn = document.getElementById('adminBtn');

function AuthenticateAdmin() {
    const user = prompt("Please enter your user name");
    const password = prompt("Please enter your password");
    if (user === 'ECadmin' && password == "1234") {
        location = "http://localhost:4200/"

    }
    else {
        alert("You are not authorized to enter this section. Please tr again");
    }
}

adminBtn.addEventListener('click', AuthenticateAdmin);

