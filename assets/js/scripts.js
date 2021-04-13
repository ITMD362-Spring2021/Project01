function validateSignupInputs()
{
  var firstName = document.getElementById('userFName').value;
  var lastName = document.getElementById('userLName').value;
  var email = document.getElementById('emailIn').value;
  if(firstName=="")
  {
    alert("Error: Missing information, including first name!");
  }
  else if(lastName==""){
  	alert("Error: Missing information, including last name!");        
  }
  else if(email=="")
  {
	  alert("Error: Missing information, including e-mail!");
  }
}
