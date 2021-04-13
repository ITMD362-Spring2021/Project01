function validateSignupInputs()
{
  var firstName = document.getElementById('userFName').value;
  var lastName = document.getElementById('userLName').value;
  var email = document.getElementById('emailIn').value;
  if(firstName=="")
  {
    alert("Error: Please enter your first name!");
  }
  else if(lastName==""){
  	alert("Error: Please enter your last name!");        
  }
  else if(email=="")
  {
	  alert("Error: Please enter your email address!");
  }
}
