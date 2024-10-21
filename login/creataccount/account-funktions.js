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
};

// funktion för att skapa konto och lagra konto information
document.getElementById('createAccountForm')?.addEventListener('submit', function(event){
    event.preventDefault();
})

    const name = document.getElementById('name').value;
    const email = document.getElementById('name').value;
    const password = document.getElementById('name').value;
    const confirmPassword = document.getElementById('name').value;
    const region = document.getElementById('name').value;
