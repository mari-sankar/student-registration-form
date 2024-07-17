  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Validate the form fields
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const dob = document.getElementById("dob").value;
      const grade = document.getElementById("grade").value;
      const languages = document.getElementById("languages").value;
      const fatherPhone = document.getElementById("father-phone").value;
      const motherPhone = document.getElementById("mother-phone").value;
      const address = document.getElementById("address").value;
      const termsCheckbox = document.getElementById("terms");
  
      if (!firstName) {
        alert("Please enter your First Name.");
        return;
      }
  
      if (!lastName) {
        alert("Please enter your Last Name.");
        return;
      }
  
      if (!dob) {
        alert("Please enter your Date of Birth.");
        return;
      }
  
      if (!grade) {
        alert("Please enter your Grade.");
        return;
      }
  
      if (!languages) {
        alert("Please enter the Languages Spoken.");
        return;
      }
  
      if (!fatherPhone) {
        alert("Please enter Father's Phone Number.");
        return;
      }
  
      // Add more validation rules for other fields as needed
  
      if (!termsCheckbox.checked) {
        alert("Please accept the terms and conditions.");
        return;
      }
  
      // Handle payment method selection (same code as before)
  
      // If the form is valid, you can capture the form data and submit the form
      const formData = new FormData(form);
  
      // Convert the FormData object to a JSON object (if needed)
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
  
      // Log the form data to the console (you can replace this with your own logic)
      console.log("Form Data:", formObject);
  
      // You can also send the form data to a server using AJAX or perform other actions here
  
      // Uncomment the next line to submit the form (for demonstration purposes only)
      // form.submit();
    });
  });
  