// Below is the javascript function to validate the form
//Source Credit goes to w3schools.com
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }