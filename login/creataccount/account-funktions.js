window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
    const privatBtn = document.getElementById('privatLoginBtn');
    const foretagBtn = document.getElementById('foretagLoginBtn');
    const privatCreateBtn = document.getElementById('privatCreateBtn')
    const foretagCreateBtn = document.getElementById('foretagCreateBtn')
    
    if (currentPage === 'privat-Login.html') {
        privatBtn.classList.add('active');
        foretagBtn.classList.add('inactive'); // Add inactive class to the opposite button
    } else if (currentPage === 'company-login.html') {
        foretagBtn.classList.add('active');
        privatBtn.classList.add('inactive'); // Add inactive class to the opposite button
    }

    if (currentPage === 'privat-createAccount.html') {
        privatCreateBtn.classList.add('active');
        foretagCreateBtn.classList.add('inactive');
    } else if (currentPage === 'company-createAccount.html') {
        foretagCreateBtn.classList.add('active');
        privatCreateBtn.classList.add('inactive');
    }
};