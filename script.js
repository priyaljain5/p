document.getElementById('registerBtn').addEventListener('click', function () {
    let customerName = document.getElementById('customerName').value;
    let email = document.getElementById('email').value;
    let countryCode = document.getElementById('countryCode').value;
    let mobile = document.getElementById('mobile').value;
    let address = document.getElementById('address').value;
    let customerId = document.getElementById('customerId').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Generate a random user ID
    let generatedUserId = 'USER' + Math.floor(Math.random() * 100000);

    // Redirect to the acknowledgment page with customerName and userId as URL parameters
    window.location.href = `acknowledgement.html?userId=${generatedUserId}&customerName=${encodeURIComponent(customerName)}`;
});
