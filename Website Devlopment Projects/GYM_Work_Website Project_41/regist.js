document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
  
    // You can perform additional validation here before submitting the form to the backend.
  
    // In a real application, you would send this data to the backend using AJAX or form submission.
  
    // For demonstration purposes, let's just log the data to the console.
    console.log("Full Name: " + fullName);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Gender: " + gender);
    console.log("Birthdate: " + birthdate);
  
    // Optionally, you can reset the form after submission.
    this.reset();
  });
  