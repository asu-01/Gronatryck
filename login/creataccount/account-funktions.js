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
};

//funktion för mobil storlek bara
document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth <= 576;
    
    if (isMobile){
        const sidebar = document.querySelector(".sidebar");
        const content = document.querySelector(".content");
        const tabButtons = document.querySelectorAll(".tab-btn");
        const tabContents = document.querySelectorAll(".tab-content");

        const backButton = document.createElement("button");
        backButton.id = "back-btn";
        backButton.textContent = "Tillbaka";
        backButton.style.display = "none";
        backButton.classList.add("back-btn");
        content.prepend(backButton);

        
        const handleTabSwitch = (event) => {
            const targetId = event.target.id.replace("-btn", "");
          
            tabContents.forEach((content) => {
                content.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";

            sidebar.classList.add("hidden");
            content.style.display = "block";

            backButton.style.display = "block";
        };

        const handleBackClick = () => {
            sidebar.classList.remove("hidden");
            content.style.display = "none";

            backButton.style.display = "none";
        };

        tabButtons.forEach((button) => {
            button.addEventListener("click", handleTabSwitch);
        });

        backButton.addEventListener("click", handleBackClick);
    }
});



// Funktion för att skapa konto och lagra konto information
document.getElementById('createAccountForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    if (password !== confirmPassword) {
        alert("Lösenorden matchar inte!");
        return;
    }

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

// Login funktion för privata användare
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
        window.location.href = 'admin.html';
    } else if (storeduser && storeduser.email === loginEmail && storeduser.password === loginPassword) {
        window.location.href = 'index.html';
    } else {
        alert('Felaktig e-post eller lösenord. Försök igen');
    }
});

function openTab(button) {
    const tabName = button.id === 'orders-btn' ? 'orders' :
                    button.id === 'customers-btn' ? 'customers' :
                    button.id === 'allOrders-btn' ? 'allOrders' : '';

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).style.display = 'block';
    button.classList.add('active');
}


// alla funktioner för kund hantering
document.addEventListener('DOMContentLoaded', function () {
    let currentEditCustomer = null;
    
    // Load customer list from local storage
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
                <div class="customer-name">${customer.organization}</div>
                <div class="customer-details" style="display: none;">
                    <p>Kontakt person: ${customer.name}</p>
                    <p>E-post: ${customer.email}</p>
                    <p>Mobil nummer: ${customer.phone}</p>
                    <p>Företags Nummer: ${customer.orgNumber}</p>
                    <button class="edit-customer-btn">Ändra kund information</button>
                    <button class="delete-customer-btn">Radera kund</button>
                </div>
            `;
                customerList.appendChild(customerDiv);
                attachCustomerListeners(customerDiv, customer);
        });
    }
    
        // spara kundinfo till localstorage
    function saveCustomers(customers) {
        localStorage.setItem('customers', JSON.stringify(customers));
        loadCustomers();
    }

    // Add customer modal controls
    document.getElementById('add-customer-btn').addEventListener('click', function () {
        document.getElementById('add-customer-modal').style.display = 'flex';
    });

    document.getElementById('close-add-customer-modal').addEventListener('click', function () {
        document.getElementById('add-customer-modal').style.display = 'none';
    });

    //funktion för att lägga till kund
    document.getElementById('add-customer-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const newOrganization = document.getElementById('new-organization').value;
        const newName = document.getElementById('new-name').value;
        const newEmail = document.getElementById('new-email').value;
        const newPhone = document.getElementById('new-phone').value;
        const newOrgNumber = document.getElementById('new-org-number').value;

        if (newOrganization && newName && newEmail && newPhone && newOrgNumber){
            const customers = JSON.parse(localStorage.getItem('customers')) || [];
            customers.push({
                organization: newOrganization,
                name: newName,
                email: newEmail,
                phone: newPhone,
                orgNumber: newOrgNumber
            });
            saveCustomers(customers);

            document.getElementById('add-customer-form').reset();
            document.getElementById('add-customer-modal').style.display = 'none';
        }
    });


    //funktion för att lägga till listeners till varje kund
    function attachCustomerListeners(customerDiv, customer) {
        const customerName = customerDiv.querySelector('.customer-name');
        const customerDetails = customerDiv.querySelector('.customer-details');
        const editButton = customerDiv.querySelector('.edit-customer-btn');
        const deleteButton = customerDiv.querySelector('.delete-customer-btn');
    
        // styles för att ändra utseende på radera och ändra knappar
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-between';
        buttonContainer.style.width = '100%';
    
        editButton.style.backgroundColor = '#1d4231';
        editButton.style.color = '#faf7eb';
        editButton.style.padding = '10px';
        editButton.style.borderRadius = '10px';
        editButton.style.border = '2px solid #1d4231';
        editButton.style.width = '48%';
        editButton.style.cursor = 'pointer';
        editButton.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.color = '#faf7eb';
        deleteButton.style.padding = '10px';
        deleteButton.style.border = '2px solid red';
        deleteButton.style.width = '48%';
        deleteButton.style.borderRadius = '10px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
        editButton.addEventListener('mouseenter', function () {
            editButton.style.backgroundColor = '#faf7eb';
            editButton.style.color = '#1d4231';
        });
    
        editButton.addEventListener('mouseleave', function () {
            editButton.style.backgroundColor = '#1d4231';
            editButton.style.color = '#faf7eb';
        });
    
        deleteButton.addEventListener('mouseenter', function () {
            deleteButton.style.backgroundColor = '#faf7eb';
            deleteButton.style.color = 'red';
        });
    
        deleteButton.addEventListener('mouseleave', function () {
            deleteButton.style.backgroundColor = 'red';
            deleteButton.style.color = '#faf7eb';
        });
    
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        customerDetails.appendChild(buttonContainer);
    
        // visa kundinfo när namnet är klickad
        customerName.addEventListener('click', function () {
            customerDetails.style.display = customerDetails.style.display === 'none' ? 'block' : 'none';
        });
    
        // radera kund konfirmations modal
        deleteButton.addEventListener('click', function () {
            const customerIndex = customerDiv.dataset.index;
            openDeleteConfirmModal(customerIndex);
        });
    
        // ändra kund modal
        editButton.addEventListener('click', function () {
            currentEditCustomer = customerDiv.dataset.index;
            openEditModal(customer);
        });
    }
    
    function openDeleteConfirmModal(customerIndex) {
        const deleteConfirmModal = document.getElementById('delete-customer-modal');
        deleteConfirmModal.style.display = 'block';
    
        const confirmDeleteBtn = document.getElementById('confirm-customer-delete-btn');
        const cancelDeleteBtn = document.getElementById('cancel-customer-delete-btn');

        confirmDeleteBtn.onclick = function () {
            deleteCustomer(customerIndex);
            deleteConfirmModal.style.display = 'none';
        };

        function deleteCustomer(index) {
            const customers = JSON.parse(localStorage.getItem('customers')) || [];
            customers.splice(index, 1);
            saveCustomers(customers);
        }

        cancelDeleteBtn.onclick = function () {
            deleteConfirmModal.style.display = 'none';
        };

    }
    
    function openEditModal(customer) {
        const modal = document.getElementById('edit-modal');
        document.getElementById('edit-organization').value = customer.organization;
        document.getElementById('edit-name').value = customer.name;
        document.getElementById('edit-email').value = customer.email;
        document.getElementById('edit-phone').value = customer.phone;
        document.getElementById('edit-org-number').value = customer.orgNumber;
        modal.style.display = 'flex';
    }
    
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
    
        // Close edit modal
        document.querySelector('#edit-modal .close-btn').addEventListener('click', function () {
            document.getElementById('edit-modal').style.display = 'none';
        });
});
    

//funktion för att lägga till ordrar och hantera pågående ordrar

document.addEventListener('DOMContentLoaded', function () {
    const ordersContainer = document.getElementById('order-list');
    const addOrderBtn = document.getElementById('add-order-btn');
    const allOrdersContainer = document.getElementById('allOrders');
    const deleteOrderModal = document.getElementById('delete-order-confirm-modal');
    const confirmDeleteBtn = document.getElementById('confirm-order-delete-btn');
    const cancelDeleteBtn = document.getElementById('cancel-order-delete-btn');
    const creationDate = new Date().toISOString();


    let orderNumber = parseInt(localStorage.getItem('lastOrderNumber')) || 1;
    let deliveredOrders = JSON.parse(localStorage.getItem('deliveredOrders')) || {};
    let deleteIndex = null;

    loadOrders();
    loadDeliveredOrders();

    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        ordersContainer.innerHTML = '';

        orders.forEach((order, index) => {
            const orderDiv = document.createElement('div');
            orderDiv.classList.add('order');
            orderDiv.dataset.index = index;

            orderDiv.innerHTML = `
                <button class="delete-order-btn">Radera order</button>
                <p>Ordernummer: ${order.ordernumber}</p>
                <p>Företagsnamn: ${order.companyName}</p>
                <p>Pris: ${order.price} kr</p>
                <p>Produktinformation: ${order.productInfo}</p>
                <p>Status: <span class="status">${order.status}</span></p>
                <select class="status-update">
                    <option value="bearbetas" ${order.status === 'bearbetas' ? 'selected' : ''}>Bearbetas</option>
                    <option value="färdigtryckt" ${order.status === 'färdigtryckt' ? 'selected' : ''}>Färdigtryckt</option>
                    <option value="skickad" ${order.status === 'skickad' ? 'selected' : ''}>Skickad</option>
                    <option value="levererat" ${order.status === 'levererat' ? 'selected' : ''}>Levererat</option>
                </select>
            `;

            const deleteButton = orderDiv.querySelector('.delete-order-btn');
            deleteButton.addEventListener('click', function () {
                deleteIndex = index;
                showDeleteOrderModal();
            });

            const statusSelect = orderDiv.querySelector('.status-update');
            ordersContainer.appendChild(orderDiv);

            // updatera status när man ändrar
            statusSelect.addEventListener('change', function () {
                const orders = JSON.parse(localStorage.getItem('orders')) || [];
                orders[index].status = statusSelect.value;
                saveOrders(orders);

                if (statusSelect.value === 'levererat') {
                    if (confirm("Är du säker på att du vill flytta ordern till 'Alla Beställningar'?")) {
                        moveToDelivered(index);
                    }
                } else {
                    orderDiv.querySelector('.status').textContent = statusSelect.value;
                }
            });
        });
    }


    function saveOrders(orders) {
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('lastOrderNumber', orderNumber);
        loadOrders();
    }

    function addOrder() {
        const companyName = document.getElementById('companyName').value;
        const price = document.getElementById('price').value;
        const productInfo = document.getElementById('productInfo').value;

        if (companyName && price && productInfo) {
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push({
                ordernumber: orderNumber++,
                companyName,
                price,
                productInfo,
                status: 'bearbetas',
                creationDate
            });
            saveOrders(orders);
            clearOrderForm();
        } else {
            alert('Alla fält måste vara ifyllda!');
        }
    }

    function saveOrders(orders) {
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('lastOrderNumber', orderNumber);
        loadOrders(); 
    }

    //funktion för att flytta levererade ordrar till alla ordrar (taben)
    addOrderBtn.addEventListener('click', addOrder);

    function moveToDelivered(index) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.splice(index, 1)[0];

        if (!deliveredOrders[order.companyName]) {
            deliveredOrders[order.companyName] = [];
        }
        deliveredOrders[order.companyName].push(order);

        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('deliveredOrders', JSON.stringify(deliveredOrders));

        loadOrders();
        loadDeliveredOrders(); 
    }

    function loadDeliveredOrders() {
        allOrdersContainer.innerHTML = '';
        
        //funktion för att organizera alla tidigare köp beroende på månad och år
        const groupedOrders = {};
        for (const [companyName, orders] of Object.entries(deliveredOrders)) {
            orders.forEach(order => {
                const date = new Date(order.creationDate);
                const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
                
                if (!groupedOrders[monthYear]) {
                    groupedOrders[monthYear] = {};
                }
                if (!groupedOrders[monthYear][companyName]) {
                    groupedOrders[monthYear][companyName] = [];
                }
                groupedOrders[monthYear][companyName].push(order);
            });
        }
    
        
        for (const [monthYear, companies] of Object.entries(groupedOrders)) {
            const monthYearTab = document.createElement('div');
            monthYearTab.classList.add('month-year-tab');
            monthYearTab.innerHTML = `<h6>${monthYear}</h6>`;
    
            
            const buttonsContainer = document.createElement('div');
            buttonsContainer.style.display = 'flex';
            buttonsContainer.style.flexWrap = 'wrap';
            buttonsContainer.style.gap = '10px';
    
            for (const [companyName, orders] of Object.entries(companies)) {
                const viewOrdersButton = document.createElement('button');
                viewOrdersButton.textContent = `${companyName}`;
                viewOrdersButton.addEventListener('click', function () {
                    displayCompanyOrders(companyName);
                });
    
                
                viewOrdersButton.style.backgroundColor = '#1d4231';
                viewOrdersButton.style.color = '#faf7eb';
                viewOrdersButton.style.width = 'auto'; 
                viewOrdersButton.style.padding = '10px';
                viewOrdersButton.style.borderRadius = '10px';
                viewOrdersButton.style.border = '2px solid #1d4231';
                viewOrdersButton.style.cursor = 'pointer';
    
                
                viewOrdersButton.addEventListener('mouseover', function () {
                    viewOrdersButton.style.backgroundColor = '#faf7eb';
                    viewOrdersButton.style.color = '#1d4231';
                });
                viewOrdersButton.addEventListener('mouseout', function () {
                    viewOrdersButton.style.backgroundColor = '#1d4231';
                    viewOrdersButton.style.color = '#faf7eb';
                });
    
                buttonsContainer.appendChild(viewOrdersButton);
            }
            
            monthYearTab.appendChild(buttonsContainer);
            allOrdersContainer.appendChild(monthYearTab);
        }
    }
    
    

    function displayCompanyOrders(companyName) {
        const companyOrders = deliveredOrders[companyName] || [];
    
        const sidebarBackButton = document.getElementById("back-btn");
        if (sidebarBackButton) {
            sidebarBackButton.style.display = "none";
        }

        const companyOrdersDisplay = document.createElement('div');
        companyOrdersDisplay.classList.add('company-orders-display');
        companyOrdersDisplay.innerHTML = `<h5>Beställningar för ${companyName}</h5>`;
    
        const backButton = document.createElement('button');
        backButton.textContent = "Tillbaka";
        backButton.addEventListener('click', () => {
            if (sidebarBackButton) {
                sidebarBackButton.style.display = "block";
            }
            loadDeliveredOrders();
        });

        backButton.style.backgroundColor = '#1d4231';
        backButton.style.color = '#faf7eb';
        backButton.style.width = 'auto'; 
        backButton.style.padding = '10px';
        backButton.style.borderRadius = '10px';
        backButton.style.border = '2px solid #1d4231';
        backButton.style.cursor = 'pointer';
        backButton.style.marginLeft = '88%';
        backButton.style.marginBottom = '10px';
    
        companyOrdersDisplay.appendChild(backButton);
    
        companyOrders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.classList.add('order');
            orderDiv.innerHTML = `
                <p>Ordernummer: ${order.ordernumber}</p>
                <p>Pris: ${order.price} kr</p>
                <p>Produktinformation: ${order.productInfo}</p>
                <p>Status: <span class="status">levererat</span></p>
            `;
            companyOrdersDisplay.appendChild(orderDiv);
        });
    
        allOrdersContainer.innerHTML = '';
        allOrdersContainer.appendChild(companyOrdersDisplay);
    }
    

    function deleteOrder(index) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        loadOrders();
    }

    function showDeleteOrderModal() {
        deleteOrderModal.style.display = 'block';
    }

    function hideDeleteOrderModal() {
        deleteOrderModal.style.display = 'none';
    }

    confirmDeleteBtn.addEventListener('click', function () {
        if (deleteIndex !== null) {
            deleteOrder(deleteIndex); 
            deleteIndex = null;
            hideDeleteOrderModal();
        }
    });

    cancelDeleteBtn.addEventListener('click', hideDeleteOrderModal);

    function clearOrderForm() {
        document.getElementById('companyName').value = '';
        document.getElementById('price').value = '';
        document.getElementById('productInfo').value = '';
    }

});


function updateDeliveredOrdersTab() {
    const allOrdersContainer = document.getElementById('allOrders');
    allOrdersContainer.innerHTML = '';

    for (const [companyName, orders] of Object.entries(deliveredOrders)) {
        const companyTab = document.createElement('div');
        companyTab.classList.add('company-tab');
        companyTab.innerHTML = `<h3>${companyName}</h3>`;

        const viewOrdersButton = document.createElement('button');
        viewOrdersButton.textContent = `Visa beställningar för ${companyName}`;
        viewOrdersButton.addEventListener('click', function () {
            displayCompanyOrders(companyName);
        });

        companyTab.appendChild(viewOrdersButton);
        allOrdersContainer.appendChild(companyTab);

    }
}