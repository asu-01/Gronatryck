window.onload = function() {

    const currentPage = window.location.pathname.split('/').pop();
    const privatBtn = document.getElementById('privatLoginBtn');
    const foretagBtn = document.getElementById('foretagLoginBtn');
    const privatCreateBtn = document.getElementById('privatCreateBtn')
    const foretagCreateBtn = document.getElementById('foretagCreateBtn')
    
    if (currentPage === 'privat-Login.html') {
        privatBtn.classList.add('active');
        foretagBtn.classList.add('inactive');
    } else if (currentPage === 'company-login.html') {
        foretagBtn.classList.add('active');
        privatBtn.classList.add('inactive');
    }

    if (currentPage === 'privat-createAccount.html') {
        privatCreateBtn.classList.add('active');
        foretagCreateBtn.classList.add('inactive');
    } else if (currentPage === 'company-createAccount.html') {
        foretagCreateBtn.classList.add('active');
        privatCreateBtn.classList.add('inactive');
    }
    
     // Attach event listeners to buttons after the DOM is loaded
     document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            openTab(this);  // Pass the button itself as an argument
        });
    });
};

// funktion för att skapa konto och lagra konto information
document.getElementById('createAccountForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple lösenord konfirmation
    if (password !== confirmPassword) {
        alert("Lösenorden matchar inte!");
        return;
    }

    // spara användarinformation i localstorage
    const userData = {
        name: name,
        email: email,
        password: password,
        type: 'privat'
    };

    localStorage.setItem('privatUser', JSON.stringify(userData));
    alert('Kontot har skapats! Du kan nu logga in.');
    window.location.href = 'privat-Login.html';
});

//login för privata användare
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;

    const storeduser = JSON.parse(localStorage.getItem('privatUser'));

    // fördefinerade login info för admin
    const adminEmail = "harviwilliam@gmail.com";
    const adminPassword = "admin123";

    // kollar om login infon är samma som fördefinerade infon
    if (loginEmail === adminEmail && loginPassword === adminPassword) {
        alert('Admin inloggning lyckades!');
        window.location.href = 'admin.html';
    }
    
    else if (storeduser && storeduser.email === loginEmail && storeduser.password === loginPassword) {
        alert('Inloggning lyckades!');
        window.location.href = 'index.html';
    } 
    
    else {
        alert('Felaktig e-post eller lösenord. Försök igen');
    }
});

function openTab(button) {

    const tabName = button.id === 'orders-btn' ? 'orders' :
                    button.id === 'customers-btn' ? 'customers' :
                    button.id === 'allOrders-btn' ? 'allOrders' :'';

    // gömma alla tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // tar bort active classen från alla knappar
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // visa innehållet av varje tab och lägga till activ funktionen på den klickade knappen
    document.getElementById(tabName).style.display = 'block';
    button.classList.add('active');
}