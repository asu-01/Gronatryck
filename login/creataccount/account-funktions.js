// Automatically set the active button based on the current URL
window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

    if (currentPage === 'privat-Login.html') {
        document.getElementById('privatLoginBtn').classList.add('active');
    } else if (currentPage === 'company-login.html') {
        document.getElementById('foretagLoginBtn').classList.add('active');
    } else if(currentPage === 'privat-createAccount.html') {
        document.getElementById('privatCreateBtn').classList.add('active');
    } else if (currentPage === 'company-createAccount.html') {
        document.getElementById('foretagCreateBtn').classList.add('active');
    }

};



