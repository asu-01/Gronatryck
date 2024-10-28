window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop();
    const privatBtn = document.getElementById('privatLoginBtn');
    const foretagBtn = document.getElementById('foretagLoginBtn');
    const privatCreateBtn = document.getElementById('privatCreateBtn');
    const foretagCreateBtn = document.getElementById('foretagCreateBtn');
    
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
    
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            openTab(this);
        });
    });

    document.getElementById('customer1-btn').addEventListener('click', function() {
        toggleCustomerDetails('customer1-details');
    });

    document.getElementById('customer2-btn').addEventListener('click', function() {
        toggleCustomerDetails('customer2-details');
    });
};

// Funktion för att skapa konto och lagra konto information
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

    // Spara användarinformation i localstorage
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

// Login för privata användare
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;

    const storeduser = JSON.parse(localStorage.getItem('privatUser'));

    // Fördefinerade login info för admin
    const adminEmail = "harviwilliam@gmail.com";
    const adminPassword = "admin123";

    // Kollar om login infon är samma som fördefinerade infon
    if (loginEmail === adminEmail && loginPassword === adminPassword) {
        alert('Admin inloggning lyckades!');
        window.location.href = 'admin.html';
    } else if (storeduser && storeduser.email === loginEmail && storeduser.password === loginPassword) {
        alert('Inloggning lyckades!');
        window.location.href = 'index.html';
    } else {
        alert('Felaktig e-post eller lösenord. Försök igen');
    }
});

// Funktion för knapparna i admin
function openTab(button) {
    const tabName = button.id === 'orders-btn' ? 'orders' :
                    button.id === 'customers-btn' ? 'customers' :
                    button.id === 'allOrders-btn' ? 'allOrders' : '';

    // Gömma alla tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Tar bort active classen från alla knappar
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Visa innehållet av varje tab och lägga till activ funktionen på den klickade knappen
    document.getElementById(tabName).style.display = 'block';
    button.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    let currentEditCustomer = null;

    // Funktion för att ladda in kund listan i localstorage
    loadCustomers();

    function loadCustomers() {
        const customerList = document.querySelector('.customer-list');
        customerList.innerHTML = '';
        const customers = JSON.parse(localStorage.getItem('customers')) || [];

        customers.forEach((customer, index) => {
            const customerDiv = document.createElement('div');
            customerDiv.classList.add('customer');
            customerDiv.dataset.index = index;

            customerDiv.innerHTML = `
                <div class="customer-name">${customer.organization}</div> <!-- Display Organization Name -->
                <div class="customer-details" style="display: none;">
                    <p>Kontakt person: ${customer.name}</p> <!-- Display Contact Person Name First -->
                    <p>E-post: ${customer.email}</p>
                    <p>Mobil nummer: ${customer.phone}</p>
                    <p>Företags Nummer: ${customer.orgNumber}</p>
                    <button class="edit-customer-btn">Edit</button>
                    <button class="delete-customer-btn">Delete</button>
                </div>
            `;
            customerList.appendChild(customerDiv);

            attachCustomerListeners(customerDiv, customer);
        });
    }

    // Sparar kundinfon till localstorage
    function saveCustomers(customers) {
        localStorage.setItem('customers', JSON.stringify(customers));
        loadCustomers();
    }

    // Event listener för lägga till kunder
    document.getElementById('add-customer-btn').addEventListener('click', function () {
        const newOrganization = prompt('Skriv företags namn:'); 
        const newName = prompt('Skriv kontakt person:'); 
        const newEmail = prompt('Skriv kontakt personens e-post:');
        const newPhone = prompt('Skriv kontakt personens mobilnummer:');
        const newOrgNumber = prompt('Skriv företags nummer:');

        if (newOrganization && newName && newEmail && newPhone && newOrgNumber) {
            const customers = JSON.parse(localStorage.getItem('customers')) || [];
            customers.push({
                organization: newOrganization, 
                name: newName, 
                email: newEmail,
                phone: newPhone,
                orgNumber: newOrgNumber
            });
            saveCustomers(customers);
        }
    });

    // Funktion för att lägga till listeners till varje kund
    function attachCustomerListeners(customerDiv, customer) {
        const customerName = customerDiv.querySelector('.customer-name');
        const customerDetails = customerDiv.querySelector('.customer-details');
        const editButton = customerDiv.querySelector('.edit-customer-btn');
        const deleteButton = customerDiv.querySelector('.delete-customer-btn');

        //funktioner för att ändra utseende på radera och ändra knappar
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-between';
        buttonContainer.style.width = '100%';

        editButton.style.backgroundColor = '#faf7eb';
        editButton.style.color = '#44725a';
        editButton.style.padding = '10px';
        editButton.style.border = '2px solid';
        editButton.style.borderRadius = '10px';
        editButton.style.width = '48%';
        editButton.style.cursor = 'pointer';
        editButton.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        deleteButton.style.backgroundColor = '#faf7eb';
        deleteButton.style.color = '#dc3545';
        deleteButton.style.padding = '10px';
        deleteButton.style.border = '2px solid #dc3545';
        deleteButton.style.width = '48%';
        deleteButton.style.borderRadius = '10px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.transition = 'background-color 0.3s ease, color 0.3s ease';

        //funktion för hover effect
        editButton.addEventListener('mouseenter', function () {
            editButton.style.backgroundColor = '#44725a';
            editButton.style.color = '#faf7eb';
            editButton.style.border = '2px solid #44725a';
        });
    
        editButton.addEventListener('mouseleave', function () {
            editButton.style.backgroundColor = '#faf7eb';
            editButton.style.color = '#44725a';
        });

        deleteButton.addEventListener('mouseenter', function () {
            deleteButton.style.backgroundColor = '#dc3545';
            deleteButton.style.color = '#faf7eb';
        });
    
        deleteButton.addEventListener('mouseleave', function () {
            deleteButton.style.backgroundColor = '#faf7eb';
            deleteButton.style.color = '#dc3545';
        });

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        customerDetails.appendChild(buttonContainer);

        // Visa kundinfo när namnet är klickad
        customerName.addEventListener('click', function () {
            customerDetails.style.display = customerDetails.style.display === 'none' ? 'block' : 'none';
        });

        //funktion och Event listener för radera knappen
        deleteButton.addEventListener('click', function () {
            const customerIndex = customerDiv.dataset.index;
            const customers = JSON.parse(localStorage.getItem('customers')) || [];

            if (confirm(`Are you sure you want to delete ${customerName.textContent}?`)) {
                customers.splice(customerIndex, 1);
                saveCustomers(customers);
            }
        });

        //funktion och Event listener för ändra knappen
        editButton.addEventListener('click', function () {
            currentEditCustomer = customerDiv.dataset.index;
            openEditModal(customer);
        });

        function openEditModal(customer) {
            const modal = document.getElementById('edit-modal');
            const organizationField = document.getElementById('edit-organization');
            const nameField = document.getElementById('edit-name');
            const emailField = document.getElementById('edit-email');
            const phoneField = document.getElementById('edit-phone');
            const orgNumberField = document.getElementById('edit-org-number');
        
            organizationField.value = customer.organization;
            nameField.value = customer.name;
            emailField.value = customer.email;
            phoneField.value = customer.phone;
            orgNumberField.value = customer.orgNumber;
        
            modal.style.display = 'flex';
        }
        
        // Close modal
        document.querySelector('.close-btn').addEventListener('click', function () {
            document.getElementById('edit-modal').style.display = 'none';
        });

        document.getElementById('save-edit-btn').addEventListener('click', function () {
            const customers = JSON.parse(localStorage.getItem('customers')) || [];
            if (currentEditCustomer !== null) {
                customers[currentEditCustomer] = {
                    organization: document.getElementById('edit-organization').value,
                    name: document.getElementById('edit-name').value,
                    email: document.getElementById('edit-email').value,
                    phone: document.getElementById('edit-phone').value,
                    orgNumber: document.getElementById('edit-org-number').value
                };
                saveCustomers(customers);
                document.getElementById('edit-modal').style.display = 'none';
            }
        });
    }    

});




