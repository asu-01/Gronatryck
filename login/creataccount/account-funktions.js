// Automatically set the active button based on the current URL
window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

    if (currentPage === 'privat-Login.html') {
        document.getElementById('privatBtn').classList.add('active');
    } else if (currentPage === 'company-login.html') {
        document.getElementById('foretagBtn').classList.add('active');
    }
};
